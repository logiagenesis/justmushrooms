#!/usr/bin/env node
/**
 * Creates the metaobject + metafield definitions and upserts species entries, then links products.
 * Usage:
 *   SHOPIFY_STORE=xxxx.myshopify.com SHOPIFY_ADMIN_TOKEN=shpat_... node scripts/shopify/import-species.mjs [--dry-run]
 * Requires an Admin API access token with scopes: read_products, write_products, read_metaobjects, write_metaobjects, write_metaobject_definitions.
 * Idempotent: definitions are created only if missing; entries are upserted by handle; products are linked by handle from data/shopify/products-cleanup.csv.
 */
import fs from 'node:fs';
import path from 'node:path';
const ROOT = path.resolve(new URL('.', import.meta.url).pathname, '../..');
const STORE = process.env.SHOPIFY_STORE, TOKEN = process.env.SHOPIFY_ADMIN_TOKEN, API = '2025-07';
const DRY = process.argv.includes('--dry-run');
if (!DRY && (!STORE || !TOKEN)) { console.error('Set SHOPIFY_STORE and SHOPIFY_ADMIN_TOKEN (or pass --dry-run).'); process.exit(1); }

async function gql(query, variables) {
  if (DRY) { console.log('[dry-run]', query.split('(')[0].trim().slice(0, 60), JSON.stringify(variables).slice(0, 160)); return { data: {} }; }
  const r = await fetch(`https://${STORE}/admin/api/${API}/graphql.json`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Shopify-Access-Token': TOKEN }, body: JSON.stringify({ query, variables }) });
  const j = await r.json(); if (j.errors) throw new Error(JSON.stringify(j.errors)); return j;
}
const defs = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/shopify/metaobject-definitions.json'), 'utf8')).definitions;
const mfdefs = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/shopify/metafield-definitions.json'), 'utf8')).definitions;
const entries = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/shopify/species-entries.json'), 'utf8')).entries;
const csv = fs.readFileSync(path.join(ROOT, 'data/shopify/products-cleanup.csv'), 'utf8').split('\n').filter(Boolean);
const header = csv[0].split(','); const hIdx = header.indexOf('Handle'); const sIdx = header.findIndex(h => h.startsWith('linked_species'));
const productSpecies = Object.fromEntries(csv.slice(1).map(l => { const cols = l.match(/("([^"]|"")*"|[^,]*)/g).filter((_, i) => i % 2 === 0); return [cols[hIdx], (cols[sIdx] || '').replace(/"/g, '').split(';').filter(Boolean)]; }));

(async () => {
  // 1. metaobject definitions
  for (const d of defs) {
    const existing = await gql(`query($type:String!){ metaobjectDefinitionByType(type:$type){ id } }`, { type: d.type });
    if (existing.data.metaobjectDefinitionByType) { console.log('definition exists', d.type); continue; }
    const res = await gql(`mutation($definition: MetaobjectDefinitionCreateInput!){ metaobjectDefinitionCreate(definition:$definition){ metaobjectDefinition{ id type } userErrors{ field message } } }`, { definition: { type: d.type, name: d.name, description: d.description, access: d.access, capabilities: d.capabilities, displayNameKey: d.displayNameKey, fieldDefinitions: d.fieldDefinitions } });
    console.log('created definition', d.type, JSON.stringify(res.data.metaobjectDefinitionCreate?.userErrors || []));
  }
  // 2. metafield definitions
  for (const m of mfdefs) {
    const res = await gql(`mutation($definition: MetafieldDefinitionInput!){ metafieldDefinitionCreate(definition:$definition){ createdDefinition{ id } userErrors{ field message code } } }`, { definition: { ownerType: m.ownerType, namespace: m.namespace, key: m.key, name: m.name, type: m.type, validations: m.validations || [], pin: !!m.pin, access: { storefront: 'PUBLIC_READ' } } });
    const errs = res.data.metafieldDefinitionCreate?.userErrors || []; console.log('metafield', m.key, errs.length ? errs.map(e => e.code).join(',') : 'ok');
  }
  // 3. species entries (upsert by handle)
  const speciesIds = {};
  for (const e of entries) {
    const fields = Object.entries(e.fields).filter(([, v]) => v !== null && v !== undefined && v !== '').map(([key, value]) => ({ key, value: typeof value === 'string' ? value : JSON.stringify(value) }));
    const res = await gql(`mutation($handle: MetaobjectHandleInput!, $metaobject: MetaobjectUpsertInput!){ metaobjectUpsert(handle:$handle, metaobject:$metaobject){ metaobject{ id handle } userErrors{ field message code } } }`, { handle: { type: 'species', handle: e.handle }, metaobject: { fields, capabilities: { publishable: { status: e.publish ? 'ACTIVE' : 'DRAFT' } } } });
    const mo = res.data.metaobjectUpsert?.metaobject; if (mo) speciesIds[e.handle] = mo.id;
    console.log('upsert species', e.handle, JSON.stringify(res.data.metaobjectUpsert?.userErrors || []));
  }
  // 4. link products -> species and species -> products
  const productIds = {};
  for (const [handle, slugs] of Object.entries(productSpecies)) {
    const q = await gql(`query($handle:String!){ productByHandle(handle:$handle){ id } }`, { handle });
    const pid = q.data.productByHandle?.id; if (!pid) { console.warn('product not found', handle); continue; }
    productIds[handle] = pid;
    const refs = slugs.map(s => speciesIds[s]).filter(Boolean);
    await gql(`mutation($metafields:[MetafieldsSetInput!]!){ metafieldsSet(metafields:$metafields){ userErrors{ field message } } }`, { metafields: [{ ownerId: pid, namespace: 'jm', key: 'linked_species', type: 'list.metaobject_reference', value: JSON.stringify(refs) }] });
  }
  for (const [slug, id] of Object.entries(speciesIds)) {
    const prods = Object.entries(productSpecies).filter(([, s]) => s.includes(slug)).map(([h]) => productIds[h]).filter(Boolean);
    await gql(`mutation($id:ID!,$fields:[MetaobjectFieldInput!]!){ metaobjectUpdate(id:$id, metaobject:{fields:$fields}){ userErrors{ field message } } }`, { id, fields: [{ key: 'linked_products', value: JSON.stringify(prods) }] });
  }
  console.log('done');
})().catch(e => { console.error(e); process.exit(1); });
