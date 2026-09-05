# 13 — Phase 13: Shopify implementation notes

## 1. Repository layout

```
theme/                 the Mycelia OS 2.0 theme (upload with Shopify CLI or as a ZIP)
  layout/              theme.liquid, password.liquid
  templates/           JSON templates incl. metaobject/species.json and 8 page.* templates
  sections/            48 sections (header/footer groups, home, species, product, utility)
  snippets/            grid engine, cards, schema, analytics, consent, disclaimer, icons
  assets/              4 CSS files, 3 JS files — no build step, no dependencies
  config/              settings_schema.json (theme editor) and settings_data.json (defaults)
  locales/             en.default.json
data/shopify/          metaobject + metafield definitions, species entries, product copy,
                       cleanup CSV, redirects CSV, menu/page/collection plan
data/live-snapshot/    what the live store looked like on 02/09/2026 (audit evidence)
analytics/             GTM container export, Shopify customer-events pixel
scripts/               content generators + the Shopify import script
preview/               LiquidJS render harness, 510-assertion test suite, axe, screenshots
docs/                  this documentation set
```

## 2. Deployment order (nothing here can run without admin access — all `BLOCKED`)

1. **Back up.** Duplicate the live Dawn theme and download the ZIP. Export products as CSV.
2. **Product data.** Import `data/shopify/products-cleanup.csv` (matched on Handle) to fix vendor, type, tags, SKUs, weights and the four non-taxable products. **Confirm the weights on a scale first** — they are estimates and shipping rates depend on them.
3. **Definitions.** `SHOPIFY_STORE=… SHOPIFY_ADMIN_TOKEN=… node scripts/shopify/import-species.mjs --dry-run`, then without the flag. It creates the `species` and `review` metaobject definitions, the 20 product metafield definitions, upserts the 8 species entries and links products ↔ species in both directions. It is idempotent.
4. **Product copy.** Apply `data/shopify/products-metafields.json` (a short script or a metafield bulk editor). Resolve the 48 flags first — they are questions, not defaults.
5. **Theme.** `shopify theme push --unpublished` from `theme/`, or upload the ZIP. Do **not** publish yet.
6. **Content.** Create the 8 pages from `data/shopify/menus.json` with their templates, create the `learn` blog, create the 4 new collections (automated by tag), build the 3 menus, delete the `test` page and empty the `combo-deals` page.
7. **Policies.** Rewrite the privacy policy for POPIA; publish shipping, returns and terms. Drafts are in the page templates and are marked for legal review.
8. **Redirects.** Import `data/shopify/redirects.csv` (Navigation → URL Redirects).
9. **Analytics.** Follow `docs/10-analytics-plan.md` §5. Paste the GTM ID into theme settings.
10. **Business details.** Fill the ECTA s43 fields in theme settings: legal name, registration number, VAT number, Information Officer.
11. **Preview and test.** Run the Phase 14 checklist against the preview URL, including a real test order.
12. **Publish**, then re-run the checklist against production.

## 3. Theme conventions the client's next developer should know

- **No build step.** CSS and JS are plain files. Edit and push.
- **Design tokens** come from theme settings through `snippets/css-tokens.liquid`. Change a colour in the editor, not in CSS.
- **Never hardcode a grid.** Call `{% render 'balanced-grid', items: …, card: 'product'|'species'|'article' %}`. The layout follows the count automatically, and the test suite fails the build if a ragged row appears.
- **Species content is data.** Adding a species means adding a metaobject entry — the mega-menu, the library, the compare table, the Finder and the Easter egg facts all update themselves.
- **Compliance is enforced in the schema.** `what_it_does_not_do` and `safety_notes` are required metaobject fields; the disclaimer snippet is rendered on every product and species page from a theme setting.
- **Analytics is one dataLayer.** Push through `JM.track(event, params)`. Never add a gtag snippet to a section.
- **`{% render %}` is isolated** in Liquid — pass what a snippet needs as arguments.

## 4. Known limits and deliberate omissions

- Variant support is written for the current single-variant catalogue; multi-option products would need a variant picker upgrade (the selector and the JS hook are already in place).
- Localisation is en-ZA only. No hreflang, no currency switcher.
- Customer accounts use the classic templates; if the store moves to new customer accounts, those templates become inert (harmless).
- Gift-card QR rendering is omitted because the `qr_code` filter is not available to this theme-check version; the code is redeemable by the printed code.
- The pickup-availability block that errors on the live Dawn theme is simply not implemented, since no pickup location is configured.

## 5. Rollback

The theme is unpublished until step 12, so rollback is publishing the old Dawn theme again. Product data changes are the only destructive step — hence the CSV export in step 1. Metaobject and metafield definitions can be left in place after a rollback; they are additive and invisible to Dawn.
