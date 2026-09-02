// Renders the Mycelia theme's JSON templates to static HTML under preview/dist using LiquidJS + Shopify shims.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { registerFilters, placeholderSvg } from './shims.mjs';
import { buildContext } from './fixtures.mjs';
const require = createRequire(import.meta.url);
const TOOLS = process.env.JM_TOOLS || '/tmp/claude-0/-home-user-justmushrooms/c0067de6-8042-5e50-8705-a8ff053016a9/scratchpad/tools/node_modules';
const { Liquid } = require(path.join(TOOLS, 'liquidjs'));
const ROOT = path.resolve(new URL('.', import.meta.url).pathname, '..');
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
const lm = P.find(p => p.handle === 'lions-mane-mushroom-tincture-50ml'); const pet = P.find(p => p.handle === 'elixir-for-pets-tincture-30ml');
const page = (handle, title) => ({ handle, title, content: '', url: `/pages/${handle}` });
const jobs = [
  ['index', 'index.html', { request: { page_type: 'index', locale: { iso_code: 'en' } }, canonical_url: 'https://justmushrooms.co.za/' }],
  ['collection', 'collections/all.html', { request: { page_type: 'collection', locale: { iso_code: 'en' } }, collection: C.all, canonical_url: 'https://justmushrooms.co.za/collections/all' }],
  ['collection', 'collections/single-species.html', { request: { page_type: 'collection', locale: { iso_code: 'en' } }, collection: C['single-species'], canonical_url: 'https://justmushrooms.co.za/collections/single-species' }],
  ['collection', 'collections/blends.html', { request: { page_type: 'collection', locale: { iso_code: 'en' } }, collection: C.blends, canonical_url: 'https://justmushrooms.co.za/collections/blends' }],
  ['collection', 'collections/pets.html', { request: { page_type: 'collection', locale: { iso_code: 'en' } }, collection: C.pets, canonical_url: 'https://justmushrooms.co.za/collections/pets' }],
  ['product', 'products/lions-mane-mushroom-tincture-50ml.html', { request: { page_type: 'product', locale: { iso_code: 'en' } }, product: lm, recommendations: { performed: true, products_count: 3, products: P.slice(0, 3) }, canonical_url: 'https://justmushrooms.co.za' + lm.url }],
  ['product', 'products/elixir-for-pets-tincture-30ml.html', { request: { page_type: 'product', locale: { iso_code: 'en' } }, product: pet, recommendations: { performed: true, products_count: 3, products: P.slice(3, 6) }, canonical_url: 'https://justmushrooms.co.za' + pet.url }],
  ['metaobject/species', 'species/lions-mane.html', { request: { page_type: 'metaobject', locale: { iso_code: 'en' } }, metaobject: S.find(s => s.system.handle === 'lions-mane'), canonical_url: 'https://justmushrooms.co.za/species/lions-mane' }],
  ['metaobject/species', 'species/sceletium.html', { request: { page_type: 'metaobject', locale: { iso_code: 'en' } }, metaobject: S.find(s => s.system.handle === 'sceletium'), canonical_url: 'https://justmushrooms.co.za/species/sceletium' }],
  ['page.species-index', 'pages/species.html', { request: { page_type: 'page', locale: { iso_code: 'en' } }, page: page('species', 'Species Library'), canonical_url: 'https://justmushrooms.co.za/pages/species' }],
  ['page.mushroom-finder', 'pages/mushroom-finder.html', { request: { page_type: 'page', locale: { iso_code: 'en' } }, page: page('mushroom-finder', 'Mushroom Finder'), canonical_url: 'https://justmushrooms.co.za/pages/mushroom-finder' }],
  ['page.faq', 'pages/faq.html', { request: { page_type: 'page', locale: { iso_code: 'en' } }, page: page('faq', 'FAQ'), canonical_url: 'https://justmushrooms.co.za/pages/faq' }],
  ['page.contact', 'pages/contact.html', { request: { page_type: 'page', locale: { iso_code: 'en' } }, page: page('contact', 'Contact'), canonical_url: 'https://justmushrooms.co.za/pages/contact' }],
  ['page.about', 'pages/about.html', { request: { page_type: 'page', locale: { iso_code: 'en' } }, page: page('about', 'About'), canonical_url: 'https://justmushrooms.co.za/pages/about' }],
  ['page.disclaimer', 'pages/disclaimer.html', { request: { page_type: 'page', locale: { iso_code: 'en' } }, page: page('disclaimer', 'Disclaimer'), canonical_url: 'https://justmushrooms.co.za/pages/disclaimer' }],
  ['cart', 'cart.html', { request: { page_type: 'cart', locale: { iso_code: 'en' } }, page_title: 'Your cart', canonical_url: 'https://justmushrooms.co.za/cart' }],
  ['search', 'search.html', { request: { page_type: 'search', locale: { iso_code: 'en' } }, page_title: 'Search', search: { performed: false, terms: '', results: [], results_count: 0 }, canonical_url: 'https://justmushrooms.co.za/search' }],
  ['404', '404.html', { request: { page_type: '404', locale: { iso_code: 'en' } }, page_title: 'Page not found', canonical_url: 'https://justmushrooms.co.za/404' }],
  ['blog', 'blogs/learn.html', { request: { page_type: 'blog', locale: { iso_code: 'en' } }, page_title: 'Learn', blog: { title: 'Learn', url: '/blogs/learn', articles: [] }, canonical_url: 'https://justmushrooms.co.za/blogs/learn' }]
];
fs.rmSync(DIST, { recursive: true, force: true }); fs.mkdirSync(DIST, { recursive: true });
fs.cpSync(path.join(THEME, 'assets'), path.join(DIST, 'assets'), { recursive: true });
let failures = 0;
for (const [tpl, out, g] of jobs) {
  try { const html = await renderTemplate(tpl, g); const f = path.join(DIST, out); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, html); console.log('rendered', out, (html.length / 1024).toFixed(1) + 'kB'); }
  catch (e) { failures++; console.error('FAILED', out, e.message.split('\n')[0]); }
}
// grid test page: balanced-grid for n = 1..12 and 23
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
// placeholder images on demand are served by serve.mjs; pre-generate none.
console.log(failures ? `DONE with ${failures} failures` : 'DONE, all templates rendered');
process.exit(failures ? 1 : 0);
export { placeholderSvg };
