# 17 — Launch checklist

Owner column: **C** = client, **D** = developer with admin access. Everything marked `BLOCKED` in `docs/15-qa-results.md` appears here as a task.

## Before launch — blockers that must clear

| # | Task | Owner | Why it blocks |
|---|---|---|---|
| 1 | Confirm the Cordyceps species (*C. militaris* vs *O. sinensis*) | C | The label prints an invalid binomial. Copy, the species page and the label reprint all depend on it |
| 2 | Supply ingredient lists and ratios for the six blends with none | C | Six product pages currently say "NEEDS CLIENT INPUT" where ingredients belong |
| 3 | Supply dose instructions where the label has none (16 products) | C | The site refuses to invent dosing |
| 4 | Decide the five product renames | C | Names like "Extreme Gut Fix" and "Meno'pause" are themselves disease claims |
| 5 | Weigh each product and confirm shipping weights | C | 22 of 23 products are 0 g on the live store; courier rates will be wrong |
| 6 | Confirm VAT treatment of the four products currently marked non-taxable | C | VAT exposure |
| 7 | Legal review of the privacy policy (POPIA), shipping, returns, terms and disclaimer drafts | C | ECTA s43 and POPIA compliance |
| 8 | Register the POPIA Information Officer and supply the name | C | Statutory |
| 9 | Supply registered legal name, company registration number and VAT number | C | ECTA s43 requires them on the site |
| 10 | Pet product: confirm residual ethanol after evaporation, and take advice on Act 36 of 1947 registration | C | Cats and ethanol; possible registration requirement |
| 11 | Decide whether to keep selling Sceletium and confirm its sourcing permit/benefit-sharing position | C | Bioprospecting compliance |
| 12 | Grant Shopify admin, GA4, GTM, Search Console and Google Ads access | C | Everything in the deployment runbook |

## Deployment

| # | Task | Owner |
|---|---|---|
| 13 | Duplicate and download the live Dawn theme; export products to CSV | D |
| 14 | Import `data/shopify/products-cleanup.csv` (after task 5 and 6) | D |
| 15 | Run `scripts/shopify/import-species.mjs --dry-run`, then for real | D |
| 16 | Apply `data/shopify/products-metafields.json` once flags are resolved | D |
| 17 | Push the theme unpublished; configure settings (colours, business info, GTM ID, shipping line) | D |
| 18 | Create pages, blog, collections and menus from `data/shopify/menus.json` | D |
| 19 | Delete the `test` page; redirect the empty `combo-deals` page to the collection | D |
| 20 | Publish the four policy pages | C + D |
| 21 | Import `data/shopify/redirects.csv` | D |
| 22 | Upload real product photography (see `docs/12-image-direction.md`) and species editorial art | C + D |
| 23 | Set the favicon and the logo in theme settings | D |

## Analytics

| # | Task | Owner |
|---|---|---|
| 24 | Create the GTM container, import `analytics/gtm-container.json`, replace the Ads placeholders, publish | D |
| 25 | Add the Customer Events pixel from `analytics/shopify-customer-events-pixel.js` | D |
| 26 | **Remove the Universal Analytics tag** (`UA-251701047-1`) from the store | D |
| 27 | Disable GA4 tagging inside the Google & YouTube channel; keep the Merchant Center feed | D |
| 28 | GA4: ZAR, Africa/Johannesburg, key events, internal-traffic filter, custom dimensions | D |
| 29 | Search Console: verify the domain property, submit the sitemap, inspect key URLs | D |
| 30 | Google Ads: link GA4, create the purchase conversion + two secondary conversions, enhanced conversions, remarketing audiences | D |

## Verification before flipping the theme live

| # | Check | Pass criterion |
|---|---|---|
| 31 | Place a real test order end to end | Order appears in Shopify; `purchase` appears once in GA4 DebugView with the right ZAR value; the Ads conversion records once |
| 32 | Add to cart, change quantity, remove, checkout | Events fire once each; no console errors |
| 33 | Consent: decline, reload, browse | No GA4 or Ads network calls; `analytics_storage` stays denied |
| 34 | Consent: accept, browse | Tags fire; the choice survives a reload |
| 35 | Production Lighthouse, mobile, on home / collection / product / species | Perf ≥ 85, a11y ≥ 95, SEO ≥ 95, CLS < 0.1, LCP < 2.5 s |
| 36 | Crawl the site (Screaming Frog or similar) | Zero 404s, zero redirect chains, one H1 per page, unique titles and descriptions |
| 37 | Rich Results Test on a product, a species page and the FAQ page | Product and FAQPage valid, no errors |
| 38 | Real-device check: one Android, one iPhone, Safari and Chrome | Nav, cart drawer, sticky bar, Finder and checkout all work |
| 39 | Keyboard-only pass on home, product, cart drawer and the Finder | Everything reachable; focus visible; Escape closes drawers |
| 40 | Every product page shows ingredients, dose, warnings and the disclaimer | No "NEEDS CLIENT INPUT" text remains anywhere public |

## Do not launch if

- Any product page still shows a placeholder where ingredients or dosing belong.
- The Universal Analytics tag is still present.
- The privacy policy has not been rewritten for POPIA.
- Legal name, registration number and physical address are not displayed.
- Any disease claim has crept back into a product description in the Shopify admin. Re-run `node preview/tests/run.mjs` after any content edit — the compliance assertions are part of the suite.
