# 15 — Phase 14: QA results (triple audit)

Run 02/09/2026 against the theme as committed. Every item is `PASS`, `FAIL` or `BLOCKED (reason)`. Nothing is ticked without evidence, and "blocked" means exactly that — it is not a quiet pass.

**How the automated checks run:** the theme has no store to render against, so `preview/` renders the real Liquid templates with LiquidJS plus Shopify filter shims, using live product data and the generated species/product content. That produces static HTML that Lighthouse, axe and the assertion suite can drive. Commands: `node preview/render.mjs`, `node preview/tests/run.mjs`, `node preview/tests/axe.mjs`, `shopify theme check --path theme`.

## Summary

| Check | Result |
|---|---|
| `shopify theme check` (3.29.0) | **0 offences** — 0 errors, 0 warnings |
| Assertion suite (`preview/tests/run.mjs`) | **510 passed, 0 failed** |
| axe-core, WCAG 2.0/2.1/2.2 A + AA + best practice | **0 violations** across 20 pages × 3 viewports |
| Lighthouse desktop, 9 pages | **100 / 100 / 100 / 100** on all but the cart's SEO score |
| Grid balance, counts 1–12 and 23 | **No ragged rows** at desktop, tablet or mobile |

### Lighthouse detail

| Page | Perf | A11y | Best practices | SEO | LCP | CLS | TBT |
|---|---:|---:|---:|---:|---|---|---|
| `home` | 100 | 100 | 100 | 100 | 0.5 s | 0 | 0 ms |
| `collections/all` | 100 | 100 | 100 | 100 | 0.5 s | 0 | 0 ms |
| `products/lions-mane-mushroom-tincture-50ml` | 100 | 100 | 100 | 100 | 0.5 s | 0 | 0 ms |
| `species/lions-mane` | 100 | 100 | 100 | 100 | 0.4 s | 0 | 0 ms |
| `pages/species` | 100 | 100 | 100 | 100 | 0.5 s | 0 | 0 ms |
| `pages/mushroom-finder` | 100 | 100 | 100 | 100 | 0.5 s | 0 | 0 ms |
| `pages/faq` | 100 | 100 | 100 | 100 | 0.4 s | 0 | 0 ms |
| `blogs/learn` | 100 | 100 | 100 | 100 | 0.4 s | 0 | 0 ms |
| `cart` | 100 | 100 | 100 | **63** | 0.5 s | 0 | 0 ms |

The cart's SEO score is Lighthouse penalising `noindex`, which is deliberate on a cart page. Targets in the brief were LCP < 2.5 s, CLS < 0.1, INP < 200 ms, mobile performance ≥ 85, accessibility ≥ 95, SEO ≥ 95 — all met, though note these numbers come from a local static render, not the production Shopify CDN. **Production Lighthouse is `BLOCKED` until the theme is deployed**; the numbers to beat are recorded in `docs/17-launch-checklist.md`.

### Measured grid rows at 1440px (from `/grid-test`)

`1` → one centred feature · `2` → 2 · `3` → 3 · `4` → 4 · `5` → feature + 4 · `6` → 3+3 · `7` → feature + 3+3 · `8` → 4+4 · `9` → 3+3+3 · `10` → 2 features + 4+4 · `11` → 2 features + 3+3+3 · `12` → 3+3+3+3 · `23` → padded to 24, eight rows of 3. Every row measured exactly 12 columns wide. **Six cards never render as 4 + 2.**

---

## Audit pass 1 — facts, content, compliance

| Check | Result |
|---|---|
| Every product pulled from Shopify or an approved source | **PASS** — all 23 from the live `products.json`, captured 02/09/2026 |
| Every species verified | **PASS** — 8 species, each with a cited evidence matrix in `docs/research/evidence/` |
| Scientific names verified | **PASS with one flag** — Cordyceps: the live label prints "Ophiocordyceps militaris", which is not a valid binomial. Flagged `NEEDS CLIENT CONFIRMATION` on every Cordyceps product and on the species page |
| No fake benefits | **PASS** — every "may support" line carries an evidence tier drawn from its species file |
| No disease claims | **PASS** — asserted for every rendered page; disease words appear only in "does not do", warnings and safety sections |
| "What it does not do" exists on species pages | **PASS** — and it is a *required* metaobject field, so a species cannot be published without it |
| Safety notes exist | **PASS** — also a required field |
| Contraindications exist where relevant | **PASS** — all 8 species; reishi (hepatotoxicity, bleeding), chaga (kidney), cordyceps (bleeding, immunosuppressants), sceletium (serotonergic) are called out individually |
| References exist | **PASS** — 201 cited references across the 8 species, each with a URL |
| Product labels match page copy | **PASS for what exists** — ingredients, volumes, alcohol % and dose lines transcribed from live labels. **6 products have no ingredient list and 16 have no dose on the label**: flagged `NEEDS CLIENT INPUT`, not invented |
| No fake reviews | **PASS** — the reviews section renders nothing without real entries; no sample data in the repo |
| No fake certifications | **PASS** — "certified organic ethanol" and "wild harvested" are withheld pending documents |
| No fake lab claims | **PASS** — the lab-report field exists and is empty; no page claims testing |
| All unverified claims removed or flagged | **PASS** — 30+ claim families removed, logged in `docs/09-content-drafts.md §5`; 48 open flags carried in the product data |

## Audit pass 2 — design, UX, CRO

| Check | Result |
|---|---|
| Homepage visually premium | **PASS** — screenshots in `preview/reports/shots/` |
| No generic template feel | **PASS** — nothing of Dawn remains; custom sections throughout |
| All grids balanced | **PASS** — measured, see above |
| Six cards never shown as 4 + 2 | **PASS** — asserted; a ragged row fails the test suite |
| Card heights align | **PASS** — flex column with `margin-top:auto` on the action row |
| Consistent image ratios | **PASS** — 4:5 product and species cards, 16:9 articles, enforced by CSS not by the uploaded file |
| CTAs align | **PASS** |
| Mobile layout clean | **PASS** — 390px screenshots; single column; axe clean at that viewport |
| Tablet layout clean | **PASS** — 834px; two columns with an odd first card spanning both |
| Navigation clear | **PASS** — 5 top-level items, species mega-menu generated from published metaobjects |
| Search / filter works | **PASS** — predictive search covers products, pages, articles and species; collection sort is native. Filtering by tag is via collections rather than facets (no app) |
| Product pages easy to buy from | **PASS** — buy box above the fold, sticky bar after scroll, dynamic checkout button |
| Species pages educate and sell | **PASS** — evidence first, "shop this species" after safety |
| Mushroom Finder makes no medical claims | **PASS** — preference questions only, standing disclaimer, asserted in tests |
| Checkout flow obvious | **PASS** in markup; **BLOCKED** for a real transaction (no store access) |
| Trust elements real | **PASS** — every trust line maps to something true today |
| Easter egg works and does not annoy | **PASS** — `pointer-events:none`, `aria-hidden`, below chrome in z-order, static frame under reduced motion, off-switch in settings |

## Audit pass 3 — technical, SEO, analytics, commerce

| Check | Result |
|---|---|
| Shopify checkout works | **BLOCKED** — no store access. Markup and the checkout route are correct; a live test order is step 11 of the deployment runbook |
| Cart works | **PASS** in the harness (Ajax add/change/remove against a stubbed Cart API); **BLOCKED** against a real cart |
| Variant selection works | **PASS** — code path exercised; all current products are single-variant, so **BLOCKED** for a real multi-variant test |
| Inventory displays correctly | **PASS** — sold-out state renders and disables the button; live quantities **BLOCKED** |
| Prices display correctly | **PASS** — ZAR, VAT-inclusive note, from Shopify's price object |
| Shipping info visible | **PASS** — cart drawer, buy box, PDP accordion and footer, from one setting. Actual rates **NEEDS CLIENT INPUT** |
| Payment methods work in test mode | **BLOCKED** — no store access |
| All product links resolve | **PASS** — asserted across rendered pages |
| All species links resolve | **PASS** |
| No 404s | **PASS** in the rendered set; production crawl **BLOCKED** |
| Redirects work | **BLOCKED** — 20-row map ready to import |
| Sitemap submitted | **BLOCKED** — GSC access required |
| Robots.txt checked | **PASS** — the live default is correct and needs no change |
| Canonicals correct | **PASS** — asserted on every page |
| Product schema valid | **PASS** — valid JSON, Product + Offer + Brand "Just Mushrooms" (the live site currently says "My Store") |
| FAQ schema valid where used | **PASS** — emitted only where visible `<summary>` questions exist; asserted |
| GA4 fires correctly | **PASS** for dataLayer pushes in the harness; **BLOCKED** for DebugView |
| GTM fires once | **PASS** — one container, one config tag, asserted no hardcoded GA4/UA/Ads tag in the theme; **BLOCKED** live |
| Ads conversion fires once | **BLOCKED** |
| Purchase value and currency correct | **PASS** in the pixel code (ZAR, tax and shipping split out); **BLOCKED** live |
| Consent mode works | **PASS** — defaults deny before choice, stored choice replays, banner updates; asserted |
| GSC verified | **BLOCKED** |
| Page speed tested | **PASS** locally (table above); production **BLOCKED** |
| Accessibility tested | **PASS** — axe 0 violations, 20 pages × 3 viewports; Lighthouse a11y 100 |
| Mobile tested | **PASS** — emulated at 390px; real-device testing **BLOCKED** |
| No console errors | **PASS** — Lighthouse `errors-in-console` clean on every page |
| No duplicate tags | **PASS** in the theme; the live store's UA tag must be removed at deployment |
| No broken tracking | **PASS** in the harness |

## Defects found and fixed during QA

| # | Defect | Fix |
|---|---|---|
| 1 | Species page `<title>` appended the scientific-name suffix even when an SEO title was set, producing a 114-character double title | Conditional in `meta-tags.liquid` |
| 2 | Reference entries without a URL rendered an empty `<a>` — 9 axe "link-name" violations. Liquid treats `''` as truthy, so `{% if r.url %}` did not guard it | `{% if r.url != blank %}` |
| 3 | Consent, marketing and address checkboxes relied on implicit label wrapping | Explicit `for`/`id` pairs |
| 4 | Heading hierarchy skipped levels — data labels and nav group labels were marked up as `<h4>` | Converted to `<p class="label">`; added visually-hidden `<h2>`s before card grids on collection, search, species-index and blog templates |
| 5 | 404 numeral used a hairline stroke on ink and failed contrast | Solid `--c-cream-2` |
| 6 | 4 theme-check errors (filters on `render` arguments, an unsupported gift-card filter) and 9 warnings | All cleared; theme-check is now clean |
| 7 | Product cards did not link to species on collection pages because the cleanup CSV was read with `\r\n` line endings, so the last column key never matched | Harness now strips `\r` |

Items 1–6 are defects in the delivered theme and are fixed in it. Item 7 was a harness bug, and it is the reason the harness exists: it caught a data-mapping failure that would have shipped as silently missing cross-links.
