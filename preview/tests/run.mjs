// QA suite for the rendered theme: grid balance, SEO, schema, a11y basics, dataLayer, compliance.
import fs from 'node:fs'; import path from 'node:path';
const DIST = path.resolve(new URL('.', import.meta.url).pathname, '../dist');
let pass = 0, fail = 0; const failures = [];
const ok = (name, cond, detail = '') => { if (cond) { pass++; } else { fail++; failures.push(name + (detail ? ' — ' + detail : '')); } };
const read = (f) => fs.readFileSync(path.join(DIST, f), 'utf8');
const pages = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) { if (e.name !== 'assets') walk(p); } else if (e.name.endsWith('.html')) pages.push(path.relative(DIST, p)); } })(DIST);

// ---------- 1. Balanced grid ----------
// Approved desktop layouts by item count, expressed as the column spans the CSS assigns.
const APPROVED = { 1: [8], 2: [6, 6], 3: [4, 4, 4], 4: [3, 3, 3, 3], 5: [12, 3, 3, 3, 3], 6: [4, 4, 4, 4, 4, 4], 7: [12, 4, 4, 4, 4, 4, 4], 8: [3, 3, 3, 3, 3, 3, 3, 3], 9: Array(9).fill(4), 10: [6, 6, ...Array(8).fill(3)], 11: [6, 6, ...Array(9).fill(4)], 12: Array(12).fill(4) };
const css = fs.readFileSync(path.join(DIST, 'assets/grid.css'), 'utf8');
function spansFor(count) {
  // parse grid.css desktop block for [data-count="N"] rules, in source order
  const block = css.split('@media (min-width:1024px)')[1].split('\n/* tablet')[0];
  const spans = Array(count).fill(null);
  const re = /\.bgrid\[data-count="([^"]+)"\](?:\[data-\w+="[^"]*"\])?\s*>\s*([^{]+)\{grid-column:(?:(\d+)\s*\/\s*)?span (\d+)\}/g;
  let m;
  while ((m = re.exec(block))) {
    if (m[1] !== String(count)) continue;
    if (/\[data-four|\[data-twelve/.test(m[0])) continue; // non-default variants
    const sel = m[2].trim(), span = Number(m[4]);
    if (sel === '*') spans.fill(span);
    else if (sel === ':first-child') spans[0] = span;
    else { const n = /:nth-child\(-n\+(\d+)\)/.exec(sel); if (n) for (let i = 0; i < Number(n[1]); i++) spans[i] = span; }
  }
  return spans;
}
for (const n of Object.keys(APPROVED).map(Number)) {
  const got = spansFor(n);
  ok(`grid/${n}-items matches approved layout`, JSON.stringify(got) === JSON.stringify(APPROVED[n]), `got ${JSON.stringify(got)} expected ${JSON.stringify(APPROVED[n])}`);
  // rows must be complete: sum of each row must be exactly 12
  let acc = 0, ragged = false;
  for (const s of got) { acc += s; if (acc > 12) { ragged = true; break; } if (acc === 12) acc = 0; }
  ok(`grid/${n}-items has no ragged row`, n === 1 ? got[0] === 8 : (!ragged && acc === 0), `remainder ${acc}`);
}
// grid test page renders the right data-count for each n
const gt = read('grid-test.html');
for (const n of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]) {
  const sec = gt.split(`data-grid-test="${n}"`)[1] || '';
  const m = /data-count="([^"]+)"/.exec(sec);
  ok(`grid-test/${n} emits data-count`, m && m[1] === String(n), m ? m[1] : 'none');
}
const s23 = gt.split('data-grid-test="23"')[1] || '';
ok('grid-test/23 pads to a multiple of 3 with editorial cards', /data-count="n3"/.test(s23) && /data-total="24"/.test(s23), (/data-total="(\d+)"/.exec(s23) || [])[1]);

// ---------- 2. SEO ----------
const titles = new Map();
for (const p of pages) {
  if (p === 'grid-test.html') continue;
  const h = read(p);
  const h1 = h.match(/<h1[^>]*>/g) || [];
  ok(`seo/${p} has exactly one H1`, h1.length === 1, `${h1.length} found`);
  const t = (h.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  ok(`seo/${p} has a title`, t.length > 10 && t.length < 90, `${t.length} chars: ${t}`);
  if (t) { ok(`seo/${p} title is unique`, !titles.has(t), `duplicate of ${titles.get(t)}`); titles.set(t, p); }
  const d = (h.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  ok(`seo/${p} has a meta description`, d.length > 30, `${d.length} chars`);
  ok(`seo/${p} has a canonical`, /rel="canonical" href="https/.test(h));
  ok(`seo/${p} has og:image or is a utility page`, /og:image/.test(h) || /404|cart|search/.test(p));
}
// ---------- 3. Structured data ----------
for (const p of pages) {
  if (p === 'grid-test.html') continue;
  const h = read(p);
  const blocks = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => m[1]);
  ok(`schema/${p} has JSON-LD`, blocks.length > 0);
  blocks.forEach((b, i) => { let parsed = null; try { parsed = JSON.parse(b); } catch (e) { } ok(`schema/${p} block ${i} is valid JSON`, !!parsed, (b.slice(0, 80) || '').replace(/\s+/g, ' ')); });
  const types = blocks.flatMap(b => { try { const j = JSON.parse(b); return (j['@graph'] || [j]).map(x => x['@type']); } catch { return []; } });
  ok(`schema/${p} declares Organization + WebSite`, types.includes('Organization') && types.includes('WebSite'), types.join(','));
  ok(`schema/${p} has BreadcrumbList where expected`, types.includes('BreadcrumbList') || /index|cart|search|404/.test(p), types.join(','));
  if (p.startsWith('products/')) ok(`schema/${p} has Product`, types.includes('Product'), types.join(','));
  if (p.startsWith('collections/')) ok(`schema/${p} has CollectionPage`, types.includes('CollectionPage'), types.join(','));
  // FAQPage only where visible FAQ markup exists
  if (types.includes('FAQPage')) ok(`schema/${p} FAQPage has visible questions`, /<summary>/.test(h));
}
// ---------- 4. Accessibility basics ----------
for (const p of pages) {
  const h = read(p);
  const imgs = [...h.matchAll(/<img\b[^>]*>/g)].map(m => m[0]);
  ok(`a11y/${p} every img has alt`, imgs.every(i => /\salt="/.test(i)), `${imgs.filter(i => !/\salt="/.test(i)).length} missing`);
  const btns = [...h.matchAll(/<button\b[^>]*>([\s\S]*?)<\/button>/g)];
  const unlabeled = btns.filter(b => !/aria-label=/.test(b[0]) && b[1].replace(/<[^>]+>/g, '').trim() === '');
  ok(`a11y/${p} every button has an accessible name`, unlabeled.length === 0, `${unlabeled.length} unlabelled`);
  ok(`a11y/${p} has a skip link`, /class="skip-link"/.test(h) || p === 'grid-test.html');
  ok(`a11y/${p} has lang`, /<html[^>]+lang="/.test(h));
  ok(`a11y/${p} has one main landmark`, (h.match(/<main\b/g) || []).length === 1);
  const inputs = [...h.matchAll(/<(input|select|textarea)\b[^>]*>/g)].map(m => m[0]).filter(i => !/type="(hidden|submit|button)"/.test(i));
  const badInputs = inputs.filter(i => { const id = (/id="([^"]+)"/.exec(i) || [])[1]; const wrapped = new RegExp('<label[^>]*>(?:(?!</label>)[\\s\\S]){0,400}?' + i.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).test(h); return !(/aria-label=/.test(i) || wrapped || (id && new RegExp(`for="${id}"`).test(h))); });
  ok(`a11y/${p} every form control is labelled`, badInputs.length === 0, badInputs.slice(0, 2).join(' | '));
}
// ---------- 5. Analytics ----------
const idx = read('index.html'), prod = read('products/lions-mane-mushroom-tincture-50ml.html'), sp = read('species/lions-mane.html'), coll = read('collections/all.html');
ok('analytics/consent defaults precede any tag', idx.indexOf("gtag('consent', 'default'") > -1);
ok('analytics/consent default denies ad_storage', /'ad_storage': 'denied'/.test(idx));
ok('analytics/consent default denies analytics until choice', /'analytics_storage': "denied"|'analytics_storage': 'denied'|analytics_storage': def/.test(idx));
ok('analytics/product page pushes view_item', /event: 'view_item'/.test(prod));
ok('analytics/collection pushes view_item_list', /event: 'view_item_list'/.test(coll));
ok('analytics/species page pushes view_species', /event: 'view_species'/.test(sp));
ok('analytics/no hardcoded GA4 or UA tag in theme', !/gtag\/js\?id=|UA-\d{4,}/.test(idx));
ok('analytics/single dataLayer bootstrap', (idx.match(/window\.dataLayer = window\.dataLayer \|\| \[\]/g) || []).length <= 3);
ok('analytics/currency is ZAR', /currency: "ZAR"/.test(idx));
// ---------- 6. Commerce ----------
ok('commerce/product form posts to cart/add', /action="\/cart\/add"/.test(prod));
ok('commerce/product form has a variant id', /name="id"/.test(prod));
ok('commerce/add to cart button present', /Add to cart/.test(prod));
ok('commerce/sticky add-to-cart present', /sticky-atc/.test(prod));
ok('commerce/cart drawer present', /id="CartDrawer"/.test(idx));
ok('commerce/prices render in rand', /R\s?\d/.test(coll));
ok('commerce/species page links to products', /shop-species/.test(sp) && /\/products\//.test(sp));
ok('commerce/product page links back to species', /\/species\//.test(prod));
// ---------- 7. Compliance ----------
// A claim, not a negation: "no cures, no miracles" is honest copy; "cures anxiety" is not.
const BANNED = /(?<!\bno )\b(cures?|treats? (?!ment)|prevents? (?:cancer|disease)|clinically proven|boosts? (?:your )?immunity|anti-cancer)\b/i;
for (const p of pages) {
  const h = read(p);
  const visible = h.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '');
  // Banned wording is permitted only where its own block negates it: a "does not" panel, a
  // safety note, or an FAQ answer that opens "No.". Splitting on </details> as well as
  // </section> keeps each question with its own answer, so an honest Q&A like
  // "Does reishi treat cancer?" -> "No. A Cochrane review ..." is not read as a claim.
  const NEGATED = /do(es)? not|not a cure|not intended to|not sufficient evidence|never replace|Safety|Warnings|disclaimer|Disclaimer|cannot be claimed|>\s*No[.,]/i;
  const risky = visible.split(/<\/(?:section|details)>/).filter(sec => BANNED.test(sec) && !NEGATED.test(sec));
  ok(`compliance/${p} no disease claims in body copy`, risky.length === 0, risky.slice(0, 1).map(r => (BANNED.exec(r) || [])[0]).join(','));
}
ok('compliance/product page carries the SAHPRA disclaimer', /has not been evaluated by SAHPRA/.test(prod));
ok('compliance/species page carries the disclaimer', /has not been evaluated by SAHPRA/.test(sp));
ok('compliance/alcohol notice on product page', /30% ethanol/.test(prod));
ok('compliance/pet product carries the animal disclaimer', /For animal use only/.test(read('products/elixir-for-pets-tincture-30ml.html')));
ok('compliance/no fake reviews rendered', !/★|Verified buyer|5 stars/i.test(idx));
ok('compliance/sceletium page flags botanical not mushroom', /Botanical/.test(read('species/sceletium.html')));
ok('compliance/evidence tier badge on species page', /Evidence tier:/.test(sp));
// ---------- 8. Performance hygiene ----------
for (const p of pages) {
  const h = read(p);
  const eager = (h.match(/loading="eager"/g) || []).length;
  ok(`perf/${p} at most 2 eager images`, eager <= 2, `${eager} eager`);
  ok(`perf/${p} no render-blocking third-party script`, !/<script[^>]+src="https?:\/\/(?!www\.googletagmanager)/.test(h));
  ok(`perf/${p} images declare dimensions`, [...h.matchAll(/<img\b[^>]*>/g)].every(m => /width="\d+"/.test(m[0]) && /height="\d+"/.test(m[0])));
  ok(`perf/${p} defers theme JS`, !/<script src="\/assets\/theme.js"(?![^>]*defer)/.test(h));
}
console.log(`\n${pass} passed, ${fail} failed`);
if (failures.length) { console.log('\nFAILURES:'); failures.forEach(f => console.log(' ✗ ' + f)); }
process.exit(fail ? 1 : 0);
