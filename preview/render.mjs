// Renders the Mycelia theme's JSON templates to static HTML under preview/dist using LiquidJS + Shopify shims.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { registerFilters, placeholderSvg } from './shims.mjs';
import { buildContext } from './fixtures.mjs';
const require = createRequire(import.meta.url);
const { Liquid } = require('liquidjs');
const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const THEME = path.join(ROOT, 'theme'); const DIST = path.join(ROOT, 'preview/dist');
const read = (p) => fs.readFileSync(p, 'utf8');
const ctxBase = buildContext();
const locale = JSON.parse(read(path.join(THEME, 'locales/en.default.json')));

const engine = new Liquid({ root: [path.join(THEME, 'snippets')], partials: [path.join(THEME, 'snippets')], extname: '.liquid', cache: true, strictFilters: false, strictVariables: false, lenientIf: true, ownPropertyOnly: false, relativeReference: false });
registerFilters(engine, { locale });

// ---- custom Shopify tags ----
const parseArgs = (s) => { const o = {}; const re = /([\w-]+)\s*:\s*('([^']*)'|"([^"]*)"|[\w.]+)/g; let m; while ((m = re.exec(s))) o[m[1]] = m[3] ?? m[4] ?? m[2]; return o; };
function blockTag(name, open, close) {
  engine.registerTag(name, {
    parse(tagToken, remain) { this.args = tagToken.args; this.tpls = []; const st = this.liquid.parser.parseStream(remain); st.on('tag:end' + name, () => st.stop()).on('template', t => this.tpls.push(t)).on('end', () => { throw new Error(`end${name} not found`); }); st.start(); },
    *render(ctx, emitter) { const a = parseArgs(this.args); const type = (this.args.match(/^\s*'([^']+)'/) || [])[1]; ctx.push({ form: { posted_successfully: false, errors: null, set_as_default_checkbox: '<input type="checkbox" name="address[default]">', 'posted_successfully?': false } }); emitter.write(open(type, a)); yield this.liquid.renderer.renderTemplates(this.tpls, ctx, emitter); emitter.write(close()); ctx.pop(); }
  });
}
blockTag('form', (type, a) => { const action = { product: '/cart/add', customer: '/contact#newsletter', contact: '/contact', customer_login: '/account/login', create_customer: '/account', recover_customer_password: '/account/recover', reset_customer_password: '/account/reset', activate_customer_password: '/account/activate', customer_address: '/account/addresses', storefront_password: '/password' }[type] || '/'; const attrs = Object.entries(a).filter(([k]) => !['class', 'id'].includes(k)).map(([k, v]) => `${k}="${v}"`).join(' '); return `<form method="post" action="${action}" ${a.id ? `id="${a.id}"` : ''} ${a.class ? `class="${a.class}"` : ''} ${attrs}>`; }, () => '</form>');
engine.registerTag('schema', { parse(t, remain) { const st = this.liquid.parser.parseStream(remain); st.on('tag:endschema', () => st.stop()).on('template', () => {}).on('end', () => {}).start(); }, render() { return ''; } });
for (const n of ['javascript', 'stylesheet']) engine.registerTag(n, { parse(t, remain) { const st = this.liquid.parser.parseStream(remain); st.on('tag:end' + n, () => st.stop()).on('template', () => {}).on('end', () => {}).start(); }, render() { return ''; } });
engine.registerTag('layout', { parse() {}, render() { return ''; } });
engine.registerTag('paginate', {
  parse(tagToken, remain) { this.args = tagToken.args; this.tpls = []; const st = this.liquid.parser.parseStream(remain); st.on('tag:endpaginate', () => st.stop()).on('template', t => this.tpls.push(t)).on('end', () => { throw new Error('endpaginate'); }); st.start(); },
  *render(ctx, emitter) { const m = /^\s*([\w.]+)\s+by\s+([\w.]+)/.exec(this.args); const [objName, prop] = m[1].split('.'); const per = Number(yield this.liquid.evalValue(m[2], ctx)) || 12; const obj = yield this.liquid.evalValue(objName, ctx); const all = (obj && obj[prop]) || []; const page = all.slice(0, per); const pages = Math.max(1, Math.ceil(all.length / per)); const scope = { paginate: { pages, current_page: 1, current_offset: 0, items: all.length, page_size: per, previous: null, next: pages > 1 ? { url: '?page=2' } : null, parts: Array.from({ length: pages }, (_, i) => ({ title: String(i + 1), is_link: i > 0, url: `?page=${i + 1}` })) } }; scope[objName] = { ...obj, [prop]: page }; ctx.push(scope); yield this.liquid.renderer.renderTemplates(this.tpls, ctx, emitter); ctx.pop(); }
});
engine.registerTag('sections', { parse(t) { this.name = t.args.replace(/['"\s]/g, ''); }, *render(ctx, emitter) { const html = yield renderGroup(this.name, ctx.getAll()); emitter.write(html); } });
engine.registerTag('section', { parse(t) { this.name = t.args.replace(/['"\s]/g, ''); }, *render(ctx, emitter) { const html = yield renderSection(this.name, this.name, {}, {}, [], ctx.getAll()); emitter.write(html); } });

// ---- section machinery ----
const sectionCache = {};
function loadSection(type) {
  if (sectionCache[type]) return sectionCache[type];
  const src = read(path.join(THEME, 'sections', type + '.liquid'));
  const sm = /{%\s*schema\s*%}([\s\S]*?){%\s*endschema\s*%}/.exec(src);
  const schema = sm ? JSON.parse(sm[1]) : { settings: [] };
  const body = src.replace(/{%\s*schema\s*%}[\s\S]*?{%\s*endschema\s*%}/, '');
  return (sectionCache[type] = { schema, tpl: engine.parse(body) });
}
function resolveSetting(def, val) {
  if (val === undefined) val = def?.default;
  switch (def?.type) {
    case 'link_list': return ctxBase.linklist(val || 'main-menu');
    case 'collection': return ctxBase.collections[val] || null;
    case 'metaobject': return ctxBase.species.find(s => s.system.handle === val) || null;
    case 'image_picker': return val === 'HERO' ? ctxBase.heroImage : null;
    default: return val;
  }
}
async function renderSection(id, type, settingsIn, blocksIn, order, globals) {
  const { schema, tpl } = loadSection(type);
  const settings = {}; for (const d of schema.settings || []) if (d.id) settings[d.id] = resolveSetting(d, settingsIn[d.id]);
  for (const [k, v] of Object.entries(settingsIn)) if (!(k in settings)) settings[k] = v;
  if (type === 'hero' && !settings.image) settings.image = ctxBase.heroImage;
  if (type === 'header' && !settings.logo) settings.logo = null;
  const blockDefs = Object.fromEntries((schema.blocks || []).map(b => [b.type, b]));
  const blocks = (order || Object.keys(blocksIn || {})).map(bid => { const b = blocksIn[bid]; const bd = blockDefs[b.type] || { settings: [] }; const bs = {}; for (const d of bd.settings || []) if (d.id) bs[d.id] = resolveSetting(d, (b.settings || {})[d.id]); return { id: bid, type: b.type, settings: bs, shopify_attributes: '' }; });
  const section = { id, settings, blocks, index: 0, location: 'template' };
  const scope = { ...globals, section };
  const html = await engine.render(tpl, scope, { globals: scope });
  return `<div id="shopify-section-${id}" class="shopify-section">${html}</div>`;
}
async function renderGroup(name, globals) {
  const g = JSON.parse(read(path.join(THEME, 'sections', name + '.json')));
  let out = ''; for (const id of g.order) { const s = g.sections[id]; out += await renderSection(id, s.type, s.settings || {}, s.blocks || {}, s.block_order, globals); } return out;
}
async function renderTemplate(name, pageGlobals) {
  const t = JSON.parse(read(path.join(THEME, 'templates', name + '.json')));
  const globals = { ...ctxBase, ...pageGlobals, content_for_header: '', powered_by_link: '', current_page: 1, all_country_option_tags: '', template: { name: name.split('.')[0], suffix: name.split('.')[1] || '' }, page_title: pageGlobals.page_title || 'Just Mushrooms', page_description: '', page_image: pageGlobals.page_image || (pageGlobals.product && pageGlobals.product.featured_image) || (pageGlobals.metaobject && pageGlobals.metaobject.hero_image.value) || (pageGlobals.collection && pageGlobals.collection.featured_image) || ctxBase.heroImage };
  let body = ''; for (const id of t.order) { const s = t.sections[id]; body += await renderSection(id, s.type, s.settings || {}, s.blocks || {}, s.block_order, globals); }
  const layout = engine.parse(read(path.join(THEME, 'layout', (t.layout || 'theme') + '.liquid')));
  const scope = { ...globals, content_for_layout: body };
  return engine.render(layout, scope, { globals: scope });
}

// ---- pages to build ----
const P = ctxBase.products, S = ctxBase.species, C = ctxBase.collections;
const page = (handle, title, content = '') => ({ handle, title, content, url: `/pages/${handle}` });
const SITE = 'https://justmushrooms.co.za';
const req = (page_type) => ({ request: { page_type, locale: { iso_code: 'en' } } });

// Every collection the navigation and product cards can link to, by handle.
// (ctxBase.collections is array-like, so the named handles are listed explicitly.)
const COLLECTIONS = ['all', 'single-species', 'blends', 'pets', 'combo-deals', 'botanicals', 'frontpage'];

// Shopify serves /policies/* from store settings, not from a theme template. The copy is the
// client's to supply and none has been, so these render through the generic page template
// carrying the same "outstanding" note used for the other 48 gaps rather than invented text.
const POLICIES = [
  ['privacy-policy', 'Privacy policy'],
  ['terms-of-service', 'Terms of service'],
  ['refund-policy', 'Refund policy']
];
const policyNote = (title) => `<p><strong>${title} copy is outstanding.</strong> Shopify serves /policies/ from Settings &rarr; Policies rather than from the theme, so this page exists in the preview only to keep the footer navigable. The wording must be supplied by Just Mushrooms and reviewed against the CPA and POPIA before launch &mdash; see <code>docs/12-launch-checklist.md</code>.</p>`;

// Three recommendations per product page: the next three in catalogue order, wrapping, never itself.
const recsFor = (i) => Array.from({ length: 3 }, (_, k) => P[(i + k + 1) % P.length]);

const jobs = [
  ['index', 'index.html', { ...req('index'), canonical_url: SITE + '/' }],

  ...COLLECTIONS.filter(h => C[h]).map(h => [
    'collection', `collections/${h}.html`,
    { ...req('collection'), collection: C[h], canonical_url: `${SITE}/collections/${h}` }
  ]),

  ...P.map((p, i) => [
    'product', `products/${p.handle}.html`,
    { ...req('product'), product: p, recommendations: { performed: true, products_count: 3, products: recsFor(i) }, canonical_url: SITE + p.url }
  ]),

  ...S.map(s => [
    'metaobject/species', `species/${s.system.handle}.html`,
    { ...req('metaobject'), metaobject: s, canonical_url: `${SITE}/species/${s.system.handle}` }
  ]),

  ['page.species-index', 'pages/species.html', { ...req('page'), page: page('species', 'Species Library'), canonical_url: SITE + '/pages/species' }],
  ['page.mushroom-finder', 'pages/mushroom-finder.html', { ...req('page'), page: page('mushroom-finder', 'Mushroom Finder'), canonical_url: SITE + '/pages/mushroom-finder' }],
  ['page.faq', 'pages/faq.html', { ...req('page'), page: page('faq', 'FAQ'), canonical_url: SITE + '/pages/faq' }],
  ['page.contact', 'pages/contact.html', { ...req('page'), page: page('contact', 'Contact'), canonical_url: SITE + '/pages/contact' }],
  ['page.about', 'pages/about.html', { ...req('page'), page: page('about', 'About'), canonical_url: SITE + '/pages/about' }],
  ['page.disclaimer', 'pages/disclaimer.html', { ...req('page'), page: page('disclaimer', 'Disclaimer'), canonical_url: SITE + '/pages/disclaimer' }],
  ['page.sourcing', 'pages/sourcing.html', { ...req('page'), page: page('sourcing', 'Sourcing'), canonical_url: SITE + '/pages/sourcing' }],
  ['page.shipping-returns', 'pages/shipping-returns.html', { ...req('page'), page: page('shipping-returns', 'Shipping & returns'), canonical_url: SITE + '/pages/shipping-returns' }],

  ...POLICIES.map(([h, title]) => [
    'page', `policies/${h}.html`,
    { ...req('page'), page: { handle: h, title, content: policyNote(title), url: `/policies/${h}` }, page_title: title, canonical_url: `${SITE}/policies/${h}` }
  ]),

  ['cart', 'cart.html', { ...req('cart'), page_title: 'Your cart', canonical_url: SITE + '/cart' }],
  ['search', 'search.html', { ...req('search'), page_title: 'Search', search: { performed: false, terms: '', results: [], results_count: 0 }, canonical_url: SITE + '/search' }],
  ['404', '404.html', { ...req('404'), page_title: 'Page not found', canonical_url: SITE + '/404' }],
  ['blog', 'blogs/learn.html', { ...req('blog'), page_title: 'Learn', blog: { title: 'Learn', url: '/blogs/learn', articles: [] }, canonical_url: SITE + '/blogs/learn' }]
];
fs.rmSync(DIST, { recursive: true, force: true }); fs.mkdirSync(DIST, { recursive: true });
fs.cpSync(path.join(THEME, 'assets'), path.join(DIST, 'assets'), { recursive: true });
let failures = 0;
for (const [tpl, out, g] of jobs) {
  try { const html = await renderTemplate(tpl, g); const f = path.join(DIST, out); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, html); console.log('rendered', out, (html.length / 1024).toFixed(1) + 'kB'); }
  catch (e) { failures++; console.error('FAILED', out, e.message.split('\n')[0]); }
}
let grid = '';
for (const n of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 23]) {
  const items = Array.from({ length: n }, (_, i) => P[i % P.length]);
  const gscope = { ...ctxBase, items, request: { page_type: 'index', locale: { iso_code: 'en' } }, template: { suffix: '' } };
  const html = await engine.parseAndRender(`{% render 'balanced-grid', items: items, card: 'product', fillers: 'auto' %}`, gscope, { globals: gscope });
  grid += `<section class="section section--tight" data-grid-test="${n}"><div class="page-width"><h2 class="h3">${n} items</h2>${html}</div></section>`;
}
const gridScope = { ...ctxBase, request: { page_type: 'page', locale: { iso_code: 'en' } }, page: page('grid-test', 'Grid test'), template: { name: 'page', suffix: 'grid-test' }, content_for_header: '', powered_by_link: '', current_page: 1, page_title: 'Grid test', canonical_url: 'https://justmushrooms.co.za/grid-test', content_for_layout: grid };
const gridPage = await engine.render(engine.parse(read(path.join(THEME, 'layout/theme.liquid'))), gridScope, { globals: gridScope });
fs.writeFileSync(path.join(DIST, 'grid-test.html'), gridPage);
console.log(failures ? `DONE with ${failures} failures` : 'DONE, all templates rendered');
process.exit(failures ? 1 : 0);
export { placeholderSvg };
