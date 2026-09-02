// Builds the Liquid context from repo data: live products.json, species-entries.json, products-metafields.json, menus.json, settings_data.json
import fs from 'node:fs';
import path from 'node:path';
const ROOT = path.resolve(new URL('.', import.meta.url).pathname, '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(ROOT, p));
const strip = (h) => String(h || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const img = (slug, ratio = 1.25, alt = '') => ({ slug, ratio, alt, src: `/img/${slug}-1200x${Math.round(1200 * ratio)}.svg`, width: 1200, height: Math.round(1200 * ratio) });
const mf = (v) => (v === undefined || v === null ? { value: null } : { value: v });

export function buildContext() {
  const settingsData = JSON.parse(read('theme/config/settings_data.json')).current;
  const settings = { ...settingsData }; delete settings.sections;
  settings.type_display_font = { family: 'Georgia', fallback_families: 'serif', weight: 600 };
  settings.type_body_font = { family: 'system-ui', fallback_families: 'sans-serif', weight: 400 };
  settings.favicon = null; settings.gtm_container_id = ''; settings.biz_whatsapp = '27615481969'; settings.social_instagram = 'https://www.instagram.com/justmushroomsza';
  const live = JSON.parse(read('data/live-snapshot/products.json')).products;
  const cleanup = read('data/shopify/products-cleanup.csv').split('\n').filter(Boolean);
  const hdr = cleanup[0].split(','); const cells = (l) => l.match(/("([^"]|"")*"|[^,]*)/g).filter((_, i) => i % 2 === 0).map(c => c.replace(/^"|"$/g, '').replace(/""/g, '"'));
  const clean = Object.fromEntries(cleanup.slice(1).map(l => { const c = cells(l); return [c[hdr.indexOf('Handle')], Object.fromEntries(hdr.map((h, i) => [h, c[i]]))]; }));
  const pm = exists('data/shopify/products-metafields.json') ? Object.fromEntries(JSON.parse(read('data/shopify/products-metafields.json')).products.map(p => [p.handle, p.metafields])) : {};
  const speciesRaw = exists('data/shopify/species-entries.json') ? JSON.parse(read('data/shopify/species-entries.json')).entries : stubSpecies();

  const species = speciesRaw.map(e => {
    const f = e.fields; const o = { system: { handle: e.handle, url: `/species/${e.handle}`, type: 'species' } };
    for (const [k, v] of Object.entries(f)) o[k] = mf(v);
    o.hero_image = mf(img(`species-${e.handle}`, 0.5625, f.common_name));
    o.macro_editorial_image = mf(img(`macro-${e.handle}`, 1.25, f.common_name));
    o.og_image = mf(null); o.linked_products = mf([]);
    return o;
  });
  const bySlug = Object.fromEntries(species.map(s => [s.system.handle, s]));

  const products = live.map(p => {
    const c = clean[p.handle] || {}; const m = pm[p.handle] || {};
    const v0 = p.variants[0]; const slugs = (c['linked_species (metafield jm.linked_species)'] || '').split(';').filter(Boolean);
    const variant = { id: v0.id, title: v0.title, price: Math.round(parseFloat(v0.price) * 100), compare_at_price: v0.compare_at_price ? Math.round(parseFloat(v0.compare_at_price) * 100) : null, available: v0.available, sku: c['Variant SKU'] || v0.sku || '', barcode: '', unit_price_measurement: null };
    const image = img(`product-${p.handle}`, 1.25, c.Title || p.title);
    const prod = { id: p.id, handle: p.handle, title: c.Title || p.title, url: `/products/${p.handle}`, type: c.Type || 'Tincture', vendor: 'Just Mushrooms', tags: (c.Tags || '').split(',').map(s => s.trim()).filter(Boolean), description: p.body_html, content: p.body_html, images: [image], featured_image: image, price: variant.price, variants: [variant], selected_or_first_available_variant: variant, available: v0.available, options: p.options };
    prod.metafields = { jm: {} };
    for (const k of ['product_promise', 'form', 'volume', 'alcohol_percent', 'extraction_ratio', 'scientific_name', 'ingredients', 'usage_instructions', 'warnings', 'evidence_summary', 'what_it_does_not_do', 'faq', 'primary_benefit_tags', 'seo_title', 'seo_description', 'seo_focus_keyword', 'origin', 'lab_report']) prod.metafields.jm[k] = mf(m[k] ?? null);
    prod.metafields.jm.linked_species = mf(slugs.map(s => bySlug[s]).filter(Boolean));
    return prod;
  });
  for (const s of species) s.linked_products = mf(products.filter(p => p.metafields.jm.linked_species.value.includes(s)));

  const menus = JSON.parse(read('data/shopify/menus.json')).menus;
  const linklist = (h) => { const m = menus.find(x => x.handle === h) || { items: [] }; const conv = (it) => ({ title: it.title, url: it.url, current: false, links: (it.children || []).map(conv) }); return { handle: h, title: m.title, links: m.items.map(conv) }; };

  const mkColl = (handle, title, prods, desc = '') => { const c = { id: handle, handle, title, url: `/collections/${handle}`, description: desc, products: prods, products_count: prods.length, featured_image: prods[0]?.featured_image || null, all_products_count: prods.length, sort_by: 'manual', sort_options: [{ name: 'Featured', value: 'manual' }, { name: 'Price, low to high', value: 'price-ascending' }, { name: 'Price, high to low', value: 'price-descending' }, { name: 'Alphabetically, A-Z', value: 'title-ascending' }] }; return c; };
  const byTag = (t) => products.filter(p => p.tags.includes(t));
  const colls = [
    mkColl('all', 'Shop all', products, 'Every tincture we make, with live prices and stock.'),
    mkColl('single-species', 'Single-species tinctures', byTag('form:single')),
    mkColl('blends', 'Blends', byTag('form:blend')),
    mkColl('combo-deals', 'Combo deals', byTag('form:combo')),
    mkColl('pets', 'For pets', byTag('audience:pets')),
    mkColl('botanicals', 'Botanicals', byTag('kingdom:plant')),
    mkColl('frontpage', 'Home page', ['lions-mane-mushroom-tincture-50ml', 'reishi-mushroom-tincture-30ml', 'elixir-of-life-6-mushroom-blend-50ml', 'the-workaholic', 'cordyceps-mushroom-tincture-30ml', 'turkey-tail-mushroom-tincture-30ml'].map(h => products.find(p => p.handle === h)).filter(Boolean))
  ];
  const collections = colls.slice(); for (const c of colls) collections[c.handle] = c;

  const shop = { name: 'Just Mushrooms', url: 'https://justmushrooms.co.za', email: 'info@justmushrooms.co.za', customer_accounts_enabled: true, password_message: '', metaobjects: { species: { values: species }, review: { values: [] } } };
  const routes = { root_url: '/', cart_url: '/cart', cart_add_url: '/cart/add', cart_change_url: '/cart/change', cart_update_url: '/cart/update', search_url: '/search', predictive_search_url: '/search/suggest', product_recommendations_url: '/recommendations/products', all_products_collection_url: '/collections/all', collections_url: '/collections', account_url: '/account', account_login_url: '/account/login', account_logout_url: '/account/logout', account_register_url: '/account/register', account_addresses_url: '/account/addresses' };
  const cart = { item_count: 0, items: [], total_price: 0, currency: { iso_code: 'ZAR' } };
  return { settings, shop, routes, cart, collections, products, species, linklist, heroImage: img('hero-forest', 0.5625, 'Macro photograph of Lion\'s Mane fruit body on dark forest floor') };
}
function stubSpecies() {
  const s = [['lions-mane', "Lion's Mane", 'Hericium erinaceus', 'Limited human evidence'], ['reishi', 'Reishi', 'Ganoderma lucidum', 'Limited human evidence'], ['chaga', 'Chaga', 'Inonotus obliquus', 'Animal/in-vitro evidence'], ['cordyceps', 'Cordyceps', 'Cordyceps militaris', 'Limited human evidence'], ['turkey-tail', 'Turkey Tail', 'Trametes versicolor', 'Limited human evidence'], ['tremella', 'Tremella', 'Tremella fuciformis', 'Limited human evidence'], ['shiitake', 'Shiitake', 'Lentinula edodes', 'Limited human evidence'], ['sceletium', 'Sceletium', 'Sceletium tortuosum', 'Limited human evidence']];
  return s.map(([handle, common_name, scientific_name, evidence_level]) => ({ handle, publish: true, fields: { common_name, scientific_name, kingdom: handle === 'sceletium' ? 'Plantae' : 'Fungi', short_description: `[STUB] ${common_name} species page content pending species-entries.json.`, evidence_level, what_it_does_not_do: '<ul><li>[STUB]</li></ul>', safety_notes: '<p>[STUB]</p>', key_cautions: '[STUB]', form_sold: 'Tincture', flavour_profile: 'Follow product label', traditional_use_short: '[STUB]', verified_benefits: [], references: [], faq: [], fun_facts: [] } }));
}
