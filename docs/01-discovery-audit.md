# 01 — Phase 1: Discovery audit of the current store

Captured 02/09/2026 (SAST) from the public storefront via a third-party fetch service (this sandbox's egress policy blocks `justmushrooms.co.za` directly). Everything below is observed, not assumed. Items that could not be observed are marked `UNVERIFIED` or `BLOCKED`.

Raw captures kept for reference: `data/live-snapshot/products.json` (23 products), `data/live-snapshot/collections.json`, `data/live-snapshot/home.html`, `data/live-snapshot/product-lions-mane-50ml.html`, `data/live-snapshot/robots.txt`.

## 1. Platform and theme

| Item | Observed |
|---|---|
| Platform | Shopify (Online Store). `www` CNAME points to `shops.myshopify.com` (domain-host support ticket, Oct 2024). Old WordPress + Ecwid site from 2022/23 is gone. |
| Theme | **Dawn 15.2.0**, theme id 129467908144, theme store id 887, role `main`. Stock configuration: header, one "Featured products" grid, newsletter, footer. |
| Third-party apps | No `cdn.shopify.com/extensions/` app-embed scripts detected on home or product page. Shopify Google & YouTube channel web pixel present (`web-pixel-351764528`). `webmcp-0.1.1.js` and `standard-actions.js` (Shopify agentic-commerce scripts) present. |
| Checkout | Shopify checkout; dynamic checkout button (`shopify-payment-button`, "Buy it now") enabled on PDP. Payment icons rendered in footer ("Payment methods") — specific gateways `UNVERIFIED`. |
| Pickup availability | PDP shows the Dawn error string "Couldn't load pickup availability — Refresh" — the pickup-availability block is enabled with no pickup location configured. Visual defect on every product page. |
| Locale | `en-ZA`, ZAR, "Taxes included". |
| Store pixel | `Shopify.analytics`/trekkie present; Google gtag loaded twice: `UA-251701047-1` (Universal Analytics, product discontinued 1 July 2023) and `G-SQDNS275V5` (GA4). No GTM container. No Google Ads (`AW-`) tag. No Meta pixel. |

## 2. Pages found (complete public inventory)

| URL | Type | Title / H1 | Notes |
|---|---|---|---|
| `/` | Home | `<title>Just Mushrooms</title>`; H1 is the **logo link** (Dawn default), no text H1 | Only content: "Featured products" (16 of 23 products, ragged 4-column grid), newsletter. Announcement bar: "Medicinal Mushrooms for Human Optimization". |
| `/collections/all` | Collection | "Catalog" (nav label) | Default all-products grid, 4 columns → 23 items render as 5 rows of 4 + 1 orphan. `/collections/frontpage` (16) and `/collections/combo-deals` (7) exist but neither is linked in navigation. |
| `/products/<23 handles>` | Product | Product title | See §4. |
| `/pages/contact` | Page | Contact | Email `info@justmushrooms.co.za`, phone `+27 61 548 1969`, Dawn contact form. |
| `/pages/combo-deals` | Page | Combo Deals | **Empty page** (heading only). Sitemap-indexed. |
| `/pages/test` | Page | Test | **Empty test page, publicly indexed.** Must be deleted or `noindex`. |
| `/blogs/news` | Blog | News | **Empty blog**, indexed. |
| `/policies/privacy-policy` | Policy | Privacy policy | Shopify-generated (US/EU wording: "sold and shared", CCPA-style). No POPIA reference, no Information Officer, no cookie table. |
| `/policies/refund-policy`, `/policies/shipping-policy`, `/policies/terms-of-service` | Policy | — | **Not linked and not in sitemap — presumed absent** (`UNVERIFIED`; policies pages are generated only when filled in). |
| `/search` | Search | — | Dawn predictive search enabled. |
| `/agents.md`, `/.well-known/ucp` | Shopify agentic discovery | — | Shopify-managed; leave alone. |

Sitemaps: `sitemap.xml` → `sitemap_products_1.xml` (23), `sitemap_pages_1.xml` (3: contact, combo-deals, test), `sitemap_collections_1.xml` (2), `sitemap_blogs_1.xml` (1), `sitemap_agentic_discovery.xml`. `robots.txt` is Shopify default (correct). No `noindex` found on any observed page.

Redirects: none observed. Old WordPress URLs (2022 site) are unknown → `NEEDS CLIENT INPUT` for any legacy URL list; otherwise no redirect debt.

Broken links: none in nav/footer. Dead-end pages: `combo-deals`, `test`, `blogs/news` (indexed but empty).

## 3. Metadata, indexability, structured data

| Check | Home | Product (Lion's Mane 50 ml) |
|---|---|---|
| Title | "Just Mushrooms" (no keyword, no location) | "Lions Mane Mushroom Tincture (50ml) – Just Mushrooms" (OK, "Lion's" misspelt) |
| Meta description | none | First 320 chars of body HTML, cut mid-word ("may pr") |
| H1 | Logo link | Product title (OK) |
| Canonical | OK | OK |
| OG tags | Shopify defaults | Product OG with 3024×4032 image (portrait phone photo) |
| JSON-LD | Organization (`sameAs` = 9 empty strings), WebSite + SearchAction | Product + Offer + Brand **"My Store"**, category "Herbal Supplements" |
| Image alt | logo only | one empty alt |
| Robots meta | none | none |
| Breadcrumbs | none | none |
| FAQ / Article schema | none | none |

## 4. Site speed and mobile UX

- Lighthouse/PageSpeed on the live domain: `BLOCKED` — the PageSpeed Insights API returned quota 0 for unauthenticated calls and the domain is blocked from this sandbox. Must be run from the client's network at launch and recorded in `docs/15-qa-results.md`.
- Observed weight risks: every product image is a 3024×4032 JPEG served via Shopify CDN `srcset` (Dawn handles resizing, so LCP is likely acceptable but the portrait ratio creates tall cards); two gtag loads; Dawn's default JS bundle.
- Mobile: Dawn defaults (1-column cards, hamburger nav). Announcement bar text is the only brand statement.

## 5. Shopify product audit (23 products, from `products.json`, 02/09/2026)

All products: single "Default Title" variant, `requires_shipping: true`, one image each (3024×4032 phone photograph), `product_type` empty, `tags` empty, `compare_at_price` null, `inventory` `available: true` (quantities not exposed publicly → `UNVERIFIED`).

| Handle | Title (live) | Price (ZAR) | SKU | Vendor | Taxable | Weight g | Collections | Data issues |
|---|---|---:|---|---|---|---:|---|---|
| lions-mane-mushroom-tincture-30ml | Lions Mane Mushroom Tincture (30ml) | 255.00 | Cognitive01 | My Store | yes | 0 | frontpage | vendor, weight, apostrophe |
| lions-mane-mushroom-tincture-50ml | Lions Mane Mushroom Tincture (50ml) | 360.00 | brainpower | My Store | yes | 0 | frontpage | vendor, weight, SKU scheme |
| lions-mane-mushroom-elixir-combo-50ml-30ml | Lions Mane Mushroom Elixir Combo (50ml+30ml) | 550.00 | lionsmane-combo01health | My Store | yes | 0 | frontpage, combo-deals | vendor, weight |
| reishi-mushroom-tincture-30ml | Reishi Mushroom Tincture (30ml) | 255.00 | Immune01Booster | My Store | yes | 0 | frontpage | SKU contains a health claim |
| reishi-mushroom-elixir-combo-50ml-30ml | Reishi Mushroom Elixir Combo (50ml+30ml) | 550.00 | reishi-combo01health | My Store | yes | 0 | frontpage, combo-deals | vendor, weight |
| chaga-mushroom-tincture-30ml | Chaga Mushroom Tincture (30ml) | 255.00 | Detox001 | My Store | yes | 0 | frontpage | SKU is a claim ("Detox") |
| chaga-mushroom-elixir-combo-50ml-30ml | Chaga Mushroom Elixir Combo (50ml+30ml) | 550.00 | chaga-combo01health | Just Mushrooms | yes | 0 | frontpage, combo-deals | weight |
| cordyceps-mushroom-tincture-30ml | Cordyceps Mushroom Tincture (30ml) | 255.00 | Energise01 | My Store | yes | 0 | frontpage | species name invalid on label |
| cordyceps-mushroom-elixir-combo-50ml-30ml | Cordyceps Mushroom Elixir Combo (50ml+30ml) | 550.00 | cordyceps-combo01health | My Store | yes | 0 | frontpage, combo-deals | vendor, weight |
| turkey-tail-mushroom-tincture-30ml | Turkey Tail Mushroom Tincture (30ml) | 255.00 | Anti-Oxidant01 | My Store | yes | 0 | — | **not in any collection**; SKU is a claim |
| turkey-tail-mushroom-elixir-combo-50ml-30ml | Turkey Tail Mushroom Elixir Combo (50ml+30ml) | 550.00 | turkey-tail-combo01health | My Store | yes | 0 | combo-deals | not on frontpage |
| tremella-mushroom-tincture-30ml | Tremella Mushroom Tincture (30ml) | 255.00 | Beauty01 | My Store | yes | 0 | — | **not in any collection** |
| tremella-mushroom-elixir-combo-50ml-30ml | Tremella Mushroom Elixir Combo (50ml+30ml) | 550.00 | tremella-combo01health | My Store | yes | 0 | combo-deals | not on frontpage |
| elixir-of-life-6-mushroom-blend-50ml | Elixir of life 6 Mushroom Blend (50ml) | 380.00 | (empty) | My Store | **no** | 300 | frontpage | **non-taxable** (VAT risk), no SKU; only product with a weight |
| elixir-for-pets-tincture-30ml | ELIXIR For Pets Tincture (30ml) | 255.00 | PetHealth01 | My Store | yes | 0 | frontpage | pet claims; regulatory check |
| pet-elixer-of-life-combo-50ml-30ml | Pet & Elixer Of Life Combo (50ml+30ml) | 550.00 | pet-human-combo01health | My Store | yes | 0 | frontpage, combo-deals | "Elixer" misspelt in handle and title |
| the-workaholic | The Workaholic 50ml | 360.00 | brainpower-stamina | My Store | yes | 0 | — | **not in any collection**; body pastes both single-species benefit lists verbatim |
| extreme-gut-fix | Extreme Gut Fix 50ml | 360.00 | (empty) | Just Mushrooms | **no** | 0 | frontpage | non-taxable; no ingredients/dose list; disease claims |
| menopause-50ml | Meno'pause' 50ml | 360.00 | (empty) | Just Mushrooms | **no** | 0 | frontpage | non-taxable; no ingredient list |
| relax-no-stress-50ml | Relax no stress 50ml amber bottle with fast flow dropper cap | 360.00 | (empty) | Just Mushrooms | **no** | 0 | frontpage | non-taxable; title contains packaging description; no dose |
| myco-radiance-skin-perfection | Myco-Radiance 'skin perfection' 50ml | 360.00 | null | Just Mushrooms | yes | 0 | frontpage | no ingredient list/dose; contains Shiitake (only product that does) |
| sceletium-tortuosum-the-happy-place-50ml | Sceletium  tortuosum 'The Happy Place" 50ml | 360.00 | null | Just Mushrooms | yes | 0 | frontpage | double space, mismatched quotes; **not a mushroom**; no dose/ingredient list |
| new-general-maintenance-50ml | NEW! General Maintenance 50ml | 360.00 | null | Just Mushrooms | yes | 0 | frontpage | "NEW!" baked into title and handle; no ingredient list/dose |

Price architecture observed: 30 ml single species R255; 50 ml single/blend R360; 6-blend 50 ml R380; combo (50 ml Elixir of Life + 30 ml single) R550. Consistent and usable.

Description quality: long, repetitive, pasted; the same "Elixir of Life" block appears in 8 products; benefit lists include disease-treatment claims in 19 of 23 products (see §6). Usage instructions exist for only 7 products ("10 drops once a day under the tongue" for Chaga; "15–20 drops once a day" for the 6-blend; dog dosing for the pet elixir). Ingredient lists exist for 14 products. Allergen note ("mushroom or alcohol allergies should avoid") in 8. Standard physician disclaimer in 17.

Missing everywhere: SEO title/description fields, product type, tags, weight, barcode, species metafields, lab/COA, origin, batch/best-before info, alcohol % declared consistently (says "approx. 30%"), serving size per bottle.

## 6. Claims audit — disallowed language currently live

Every phrase below appears verbatim on the live store (or in the 2022 client write-ups in Drive) and must not be carried over. Classification uses the project claim tiers; regulatory basis is detailed in `docs/research/sa-regulatory-compliance.md`.

| Live claim | Where | Classification |
|---|---|---|
| "Treats Depression", "Anti anxiety", "treats symptoms of diabetes" | Lion's Mane ×3, Workaholic | Disease treatment — prohibited |
| "Alzheimer's disease, dementia… ADHD" cognition claims | Lion's Mane ×3, Relax | Disease — prohibited; the cited Japanese MCI trial (Mori 2009, n=30) is `Limited human evidence` and cannot be generalised |
| "Can treat arthritis and gout", "Regulates blood sugar levels and balances PH level", "anti-cancer activity" | Chaga ×2 | Disease — prohibited; pH claim is unsupported |
| "May be helpful in treating conditions like diabetes or atherosclerosis", "anti aging skin benefits" | Cordyceps ×2, Workaholic | Disease — prohibited |
| "Can treat HPV", "Potential Cancer Benefits" section (breast, leukaemia, colon, lung, gastric) | Turkey Tail ×2 | Disease — prohibited; PSK/PSP trial evidence relates to pharmaceutical extracts, not a tincture |
| "can lower blood pressure", "anti-viral, anti-inflammatory and anti-fungal", "Helps with liver and kidney health" | Reishi ×2 | Unverified/disease — prohibited without registration |
| "Can kill cancer cells", "Can lower cholesterol", "Could combat obesity", "natural source of hyaluronic acid" | Tremella ×2 | Disease/unverified — prohibited; Tremella polysaccharides are not hyaluronic acid |
| "asthma, emphysema", "IBD", "anxiety and depression", "ADHD and ADD", "preventative measures" | Elixir of Life block ×8 | Disease — prohibited |
| "leaky gut, IBS, Crohn's disease", "Protects Against Ulcers", "Cancer Support" | Extreme Gut Fix | Disease — prohibited |
| "regulate estrogen and progesterone", "prevent bone loss", "hot flashes" | Meno'pause | Disease/hormonal — prohibited |
| "Supports cancer treatment or use against tumours", "arthritis or joint pain" (dogs) | Elixir for Pets ×2 | Disease + animal-remedy — prohibited pending Act 36 check |
| "kojic acid… reduce pigmentation", "collagen production" | Myco-Radiance | `UNVERIFIED` — pending shiitake evidence file |
| "non-addictive", "Reduces stress, anxiety" | Sceletium | Partly `Limited human evidence` (standardised extract only); "non-addictive" `UNVERIFIED` |
| "Medicinal Mushrooms for Human Optimization" | Site-wide announcement bar | "Medicinal" positions the products as medicines under the Medicines Act — replace |
| "certified organic ethanol", "organically grown", "wild harvested" | Multiple | `NEEDS CLIENT INPUT` — certificates required before use |

## 7. Visual, content and trust gaps

- Visual: default Dawn typography (Assistant), white background, logo as H1, ragged grids (16 items in 4 columns, 23 in 4 columns + orphan), portrait 3:4 phone photos with inconsistent backgrounds and lighting, no hero, no imagery beyond product shots, no brand colour.
- Content: no About, no Sourcing, no FAQ, no species education, empty blog, empty Combo Deals page, live Test page.
- Trust: no shipping information anywhere pre-checkout, no returns policy, no terms, no business registration or physical address outside the privacy policy, no reviews, no disclaimer page, contact page has email and phone only.
- Navigation: three links (Home, Catalog, Contact). Collections not exposed.
- SEO: no keyword targeting, no descriptions, no internal linking, no FAQ/Article content, brand schema "My Store".
- Analytics: dead UA tag, no GTM, no consent, no Ads conversion, GA4 purchase data only via Shopify's channel (`UNVERIFIED` whether GA4 e-commerce is even enabled in that channel).

## 8. Competitor and design benchmark

Delivered separately: `docs/research/design-benchmark.md` (10 studios, 50+ reference sites, 100+ observations, reference board) and `docs/research/seo-keyword-research.md` (SERP snapshots for SA head terms).
