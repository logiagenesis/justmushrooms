# 00 — Phase 0: Prompt audit and patched execution brief

Project: Just Mushrooms complete website rebuild (https://justmushrooms.co.za/)
Client entity (from privacy policy on the live store): Just Mushrooms, 77 Hoof Road, Plettenberg Bay, Western Cape, 6603, South Africa
Prepared: 02/09/2026 (SAST). Currency ZAR. Spelling: UK/South African English.
Status legend used throughout the project: `BLOCKED` · `UNVERIFIED` · `NEEDS CLIENT INPUT` · `NEEDS CLIENT CONFIRMATION` · `DONE` · `DEV`

---

## 1. Audit pass 1 — Strategic

| Question | Finding | Patch applied |
|---|---|---|
| Is the mission clear? | Yes: premium, evidence-led, Shopify-native brand site with a working shop and a dedicated page per species. | None. |
| Are all outputs defined? | The 18 final deliverables are listed, but the prompt did not say *where* they live or in what format. | All deliverables are Markdown/JSON/Liquid files in this repository under `docs/`, `theme/`, `analytics/`, `data/`, `scripts/`. One index at `docs/README.md`. |
| Are there missing client inputs? | Yes, many. No Shopify admin access, no lab reports, no supplier docs, no brand fonts, no Google account access, no policies except a Shopify-generated privacy policy, no client goals/budget, no reviews. | Every dependency is tracked in §5 with a status. Work continues under explicit assumptions; nothing unverified is published as fact. |
| Compliance risks? | Severe. The live store and the 2022 client write-ups make disease claims: cancer, Alzheimer's, Parkinson's, dementia, depression, anxiety, diabetes, arthritis, HPV, IBS, Crohn's, asthma, emphysema, tumours in pets. A 30% ethanol tincture sold as a "medicinal mushroom" in South Africa falls under SAHPRA complementary-medicine rules. A pet product may fall under Act 36 of 1947. Sceletium tortuosum is a plant with serotonergic interactions. | Claim-tier system enforced in the content model (`evidence_level`, `approved_claims`, `disallowed_claims`). All disease language is removed from templates and flagged in the discovery audit (`docs/01-discovery-audit.md §6`). Regulatory brief commissioned (`docs/research/sa-regulatory-compliance.md`). Mandatory disclaimer snippet on every product and species page. |
| Shopify risks? | Live theme is stock Dawn 15.2.0 with almost no configuration. Product data is dirty: vendor alternates between "My Store" and "Just Mushrooms", no product types, no tags, inconsistent SKUs, weights of 0 g on 22 of 23 products (shipping-rate risk), four products marked non-taxable (VAT risk), one image per product, two collections only, a live "Test" page, an empty blog. Only Shopify Payments/dynamic checkout visible. | Product data-cleanup CSV produced (`data/shopify/products-cleanup.csv`) for the client to import; theme reads species from metaobjects so design never depends on messy descriptions. |
| Tracking risks? | The live store fires a legacy Universal Analytics tag (`UA-251701047-1`, a dead product since July 2023) alongside GA4 `G-SQDNS275V5` through Shopify's native Google & YouTube channel. No GTM, no consent mode, no Ads tag, no Search Console evidence. | Single strategy: GTM in the theme + Shopify Customer Events pixel for checkout, GA4 e-commerce via one dataLayer, Consent Mode v2, remove UA. Documented in `docs/10-analytics-plan.md`, container in `analytics/gtm-container.json`. |

## 2. Audit pass 2 — Execution

| Question | Finding | Patch applied |
|---|---|---|
| Can the site be built from available inputs? | Theme, templates, content model, copy drafts, analytics and QA harness: yes. Deployment to the store, metaobject creation, GTM/GA4/GSC/Ads configuration and payment tests: **no** (no admin access, and this sandbox's network policy blocks the client domain, so even public verification had to be done through a third-party fetch service). | Delivered as an installable OS 2.0 theme plus import scripts and a launch runbook the client's developer runs with admin access. Live checks are marked `BLOCKED` in the QA results, not faked. |
| Are page templates clear? | Yes, but the prompt did not decide how `/species/[slug]` is achieved on Shopify. | Decision: **metaobject web pages** (`templates/metaobject/species.json`) give native `/species/<handle>` URLs. Species index is a Page at `/pages/species` with `/species` 301 → `/pages/species`. |
| Product ↔ species relationships clear? | Mostly. Cordyceps label says "Ophiocordyceps militaris", a binomial that does not exist (it is *Cordyceps militaris*; *Ophiocordyceps sinensis* is a different species). Meno'pause and Myco-Radiance ingredient lists are prose, not label-style lists. | Mapping sheet with `NEEDS CLIENT CONFIRMATION` flags (`docs/02-product-species-mapping.md`). Product metafield `linked_species` (list of metaobject references) drives cross-links. |
| Grid rules enforceable? | The table of approved layouts is precise but had no mechanism. | Built a `balanced-grid` snippet that chooses layout by item count (1→feature, 2→2, 3→3, 4→4/2+2, 5→1+4, 6→3+3, 7→1+3+3, 8→4+4, 9→3+3+3, 10→2f+4+4, 11→2f+3+3+3, 12→4+4+4) and a Node test that renders every count 1–12 at desktop/tablet/mobile and fails on ragged rows. |
| SEO requirements testable? | Yes once rendered. | Preview harness renders templates with fixture data; tests assert one H1, unique titles, canonical, JSON-LD validity per template. |
| Analytics requirements testable? | Only partially without a store. | dataLayer unit tests on the preview; GTM Preview/DebugView steps in the launch runbook, marked `BLOCKED` until access. |

## 3. Audit pass 3 — Quality

| Question | Finding | Patch applied |
|---|---|---|
| Design direction strong enough? | Strong palette and mood, but "funky" and "bioluminescent" can collapse into psychedelic cliché, which is a real reputational risk for a brand whose owner's Drive is full of psilocybin literature. | Design system fixes one accent (mycelium cyan-lime) used at ≤5% of any viewport, forbids purple/rainbow gradients, forbids cartoon or "trippy" imagery, and anchors "funky" in typography and motion rather than colour. |
| Copy direction premium enough? | Yes, but the prompt allowed "may support" without defining the threshold. | Rule: "may support" requires at least `Limited human evidence` in the species evidence file; otherwise the sentence is phrased as traditional use or research interest. |
| Imagery non-generic? | The template prompt is good. Missing: product-photo brief (the live photos are 3024×4032 phone shots with mixed backgrounds). | Product photography brief added to `docs/12-image-direction.md`; AI imagery restricted to species editorial art with anatomical-accuracy review. |
| Final QA strict enough? | Checklists were good but had no "cannot verify" state, which invites false ticks. | Every QA item is `PASS`, `FAIL`, or `BLOCKED (reason)`. Nothing is ticked without evidence. |
| Vague instructions sharpened? | "Easter egg hidden subtly", "smart recommendations", "reviews if available". | Easter egg spec in `docs/11-conversion-features.md`; recommendations use Shopify's native Product Recommendations API (no app); reviews section renders only when a reviews metafield or app block exists, otherwise it is omitted, never faked. |

---

## 4. Patched execution brief (what is actually being built)

1. **Platform**: Shopify Online Store 2.0, custom theme "Mycelia" in `theme/`, no headless layer. Checkout, cart, inventory, tax, shipping stay 100% Shopify.
2. **Content model**: `species` metaobject (web-page enabled, URL prefix `species`) + product metafields (namespace `jm`). Definitions in `data/shopify/metaobject-definitions.json`; entries in `data/shopify/species-entries.json`; import script `scripts/shopify/import-species.mjs`.
3. **Templates**: index, product, collection, list-collections, metaobject/species, page.species-index, page.mushroom-finder, page.about, page.sourcing, page.faq, page.contact, page.shipping-returns, page.disclaimer, blog, article, cart, search, 404, password, customers/*.
4. **Grid engine**: `snippets/balanced-grid.liquid` + `assets/grid.css`, tested for counts 1–12.
5. **Analytics**: GTM container (GA4 config, GA4 e-commerce events, Google Ads conversion + remarketing, Consent Mode v2 defaults), theme `dataLayer` pushes for `view_item`, `select_item`, `add_to_cart`, `remove_from_cart`, `view_cart`, `search`, `sign_up`, `generate_lead`, `view_species`, `species_product_click`, `mushroom_finder_start`, `mushroom_finder_complete`; Shopify Customer Events pixel for `begin_checkout`, `add_shipping_info`, `add_payment_info`, `purchase`. UA removed. Shopify Google & YouTube channel kept for Merchant Center feed only, GA4 auto-tagging turned off there to avoid double-firing.
6. **Compliance**: disclaimer snippet on every product/species page; evidence tier badge on every claim block; no disease words anywhere in theme strings; POPIA cookie banner with Consent Mode v2; ECTA s43 information block in footer; returns policy aligned with the Consumer Protection Act.
7. **SEO**: unique titles/descriptions from metafields with sensible fallbacks; canonicals; breadcrumbs; JSON-LD for Organization, WebSite, BreadcrumbList, Product, CollectionPage/ItemList, FAQPage (only where FAQ is visible), Article; redirect map; robots review.
8. **Conversion**: sticky add-to-cart, cart drawer, species↔product cross-links, Mushroom Finder (goal-based, no diagnosis), compare-species module, shipping info block, email capture, no fake urgency.
9. **Easter egg**: hidden spore node in footer; 7 clicks or typing `mycelium` triggers a reduced-motion-aware canvas mycelium animation, message "The underground is alive.", and one random verified fact from the species evidence files.
10. **QA**: `theme-check`, preview-render tests (grid, SEO, schema, dataLayer), Lighthouse + axe on the preview build, three audit passes recorded in `docs/15-qa-results.md`.

## 5. Required inputs — status

| # | Input | Status | Impact if missing |
|---|---|---|---|
| 1 | Shopify admin access / product CSV | `BLOCKED` — public `products.json` used instead (23 products captured 02/09/2026) | Cannot deploy theme, create metaobjects, fix product data, test checkout |
| 2 | Theme, apps, checkout, gateways, shipping, tax | Partially observed: Dawn 15.2.0, Shopify Payments dynamic checkout visible, Google & YouTube channel pixel present, no third-party app extensions detected. Shipping zones/tax rules `NEEDS CLIENT INPUT` | Shipping copy and VAT display need confirmation |
| 3 | Product list with handles etc. | `DONE` from public API; SKUs/weights/tax flags dirty (see audit) | Cleanup CSV supplied |
| 4 | Approved species data | Client's 2022 write-ups found in Drive; they are largely disease claims and are **not usable** as published copy | Replaced by cited evidence matrix |
| 5 | Lab tests, supplier docs, certifications, origin | `NEEDS CLIENT INPUT` — none found. "Certified organic ethanol" and "cultivated and/or wild harvested" are label claims with no documents | No "lab tested"/"organic"/origin claims published until documents arrive |
| 6 | Brand assets | Logo `logoclicked.png` (live store + Drive) `DONE`; colours/fonts none → design system proposes them; product photos: 23 phone shots (3024×4032) `UNVERIFIED` quality; videos in Drive (Lion's Mane, Medicinal Fungi) unreviewed | New photography brief |
| 7 | Google access (GA4, GTM, GSC, Ads, Merchant Center) | `BLOCKED` — GA4 property `G-SQDNS275V5` exists (seen in source); no GTM; GSC/Ads unknown | Container and runbook delivered; publish steps blocked |
| 8 | Legal/policy content | Privacy policy exists (Shopify generator, US-centric, no POPIA wording). Shipping, returns, terms, disclaimer, cookie notice: `NEEDS CLIENT INPUT`; drafts supplied for legal review | Drafts marked "DRAFT — legal review required" |
| 9 | Client goals, margins, budget, email platform | `NEEDS CLIENT INPUT` | Featured-product ordering and ad plan use stated assumptions |

## 6. Working assumptions (explicit)

- A1. Primary market is South Africa only; pricing includes 15% VAT (live store shows "Taxes included").
- A2. Every product is a liquid tincture; no subscriptions or bundles beyond the existing combo SKUs.
- A3. Species scientific names are as printed on the live labels except Cordyceps, which is flagged.
- A4. No customer reviews exist; the reviews section stays hidden.
- A5. Email capture goes to Shopify Email (native) until the client names another platform.
- A6. Sceletium tortuosum is sold as a botanical, not a mushroom; it gets a species-style page under the Species Library with a "Botanical" badge, and a prominent serotonergic-interaction warning.
- A7. The pet product remains on sale pending the Act 36 regulatory check; its copy is limited to ingredients, usage and safety with no health outcomes.
