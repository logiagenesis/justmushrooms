# 03 — Phase 2–3: Site architecture, sitemap and Shopify content model

## 1. Platform decision — Shopify Online Store 2.0, not headless

| Criterion | Finding |
|---|---|
| Custom UX Shopify cannot support | None. Species pages, the Finder, balanced grids and the Easter egg are all achievable in Liquid + ~14 kB of vanilla JS. |
| Budget for long-term maintenance | Unknown, and this is a small owner-run business. A headless stack would make the client dependent on a developer for routine changes. |
| SEO and analytics safety | Server-rendered Liquid gives correct SEO for free. A headless build would need its own rendering, sitemap and canonical strategy — new risk for no gain. |
| Checkout and inventory | Must stay Shopify either way. |

**Decision: Shopify OS 2.0 custom theme ("Mycelia"), no headless layer, minimal apps.** The client can edit every section in the theme editor without touching code, and species content lives in metaobjects so page design never depends on prose pasted into a product description.

## 2. New sitemap

| URL | Template | Source | Notes |
|---|---|---|---|
| `/` | `templates/index.json` | Sections | Hero, trust, 6 species (3+3), Finder teaser, 6 products (3+3), education, sourcing, reviews (hidden) |
| `/collections/all` | `collection.json` | Shopify | "Shop all", 23 products, 12/page |
| `/collections/single-species` | `collection.json` | tag `form:single` | 7 products |
| `/collections/blends` | `collection.json` | tag `form:blend` | 8 products |
| `/collections/combo-deals` | `collection.json` | existing | 7 products |
| `/collections/pets` | `collection.json` | tag `audience:pets` | 2 products |
| `/collections/botanicals` | `collection.json` | tag `kingdom:plant` | 1 product, single centred feature card |
| `/products/<23 handles>` | `product.json` | Shopify | Handles preserved — no product URL changes, no redirects needed |
| `/pages/species` | `page.species-index.json` | Page + metaobjects | Species Library, balanced grid, compare table, Finder teaser |
| `/species/<8 slugs>` | `metaobject/species.json` | Species metaobject | **Native metaobject web pages** — this is what gives a real `/species/…` URL |
| `/pages/mushroom-finder` | `page.mushroom-finder.json` | Page | Four-question preference quiz |
| `/blogs/learn` and `/blogs/learn/<article>` | `blog.json`, `article.json` | Blog | Replaces the empty `news` blog |
| `/pages/about`, `/pages/sourcing`, `/pages/faq`, `/pages/contact`, `/pages/shipping-returns`, `/pages/disclaimer` | dedicated JSON templates | Pages | |
| `/policies/*` | Shopify | Shopify | Privacy (rewrite for POPIA), refund, shipping, terms — currently missing |
| `/cart`, `/search`, `/404`, `/account/*` | as named | Shopify | `noindex` on cart and search |

**Why metaobject pages rather than `/pages/species-lions-mane`.** Shopify metaobjects with the `onlineStore` capability and URL handle `species` render at `/species/<handle>` natively, with `createRedirects: true`. That satisfies the brief's preferred URL structure without a proxy app or URL rewriting. The species *index* must still live at `/pages/species` because Shopify has no metaobject list route — so `/species` 301s to `/pages/species` (see `data/shopify/redirects.csv`).

## 3. Content model

Full definitions: `data/shopify/metaobject-definitions.json` and `metafield-definitions.json`. Import with `scripts/shopify/import-species.mjs`.

### `species` metaobject (web-page enabled, URL prefix `species`)

`common_name` · `scientific_name` · `kingdom` · `short_description` · `hero_image` · `macro_editorial_image` · `og_image` · `taxonomy` · `form_sold` · `flavour_profile` · `traditional_use_short` · `traditional_uses` · `evidence_level` (choice of the five approved tiers) · `verified_benefits` (JSON `[{text, tier, ref}]`) · `human_evidence_summary` · `what_it_does_not_do` (**required**) · `active_compounds` (JSON) · `how_to_use` · `safety_notes` (**required**) · `contraindications` · `key_cautions` · `references` (JSON `[{label,url}]`) · `evidence_reviewed_on` · `linked_products` · `faq` (JSON) · `fun_facts` (JSON) · `seo_title` · `seo_description`

Two fields are **required by definition** — `what_it_does_not_do` and `safety_notes`. A species page cannot be published without them. That is the compliance model expressed in the schema rather than in a style guide nobody reads.

### `review` metaobject

`author` · `body` · `rating` · `verified` · `order_name` · `product` · `consent`. The reviews section renders nothing when there are no entries. There is no sample data anywhere in the theme.

### Product metafields (namespace `jm`)

`linked_species` (list of metaobject references — the spine of the whole cross-link system) · `scientific_name` · `product_promise` · `form` · `volume` · `alcohol_percent` · `extraction_ratio` · `origin` · `ingredients` · `usage_instructions` · `warnings` · `lab_report` (file) · `evidence_summary` · `what_it_does_not_do` · `faq` · `primary_benefit_tags` · `seo_focus_keyword` · `seo_title` · `seo_description`

Article metafield: `jm.related_species`.

### How the cross-links work

`product.metafields.jm.linked_species` → species pages, rendered as pills on the PDP and rows in the details table. `species.linked_products` → products, rendered by the species "Shop this species" section through the same balanced-grid snippet. The import script writes both directions from one source: the `linked_species` column of `data/shopify/products-cleanup.csv`. Nothing is typed twice.

## 4. Navigation

`data/shopify/menus.json` defines three menus: `main-menu` (Shop with a five-item child list, Species, Mushroom Finder, Learn, About with four children), `footer` (shop links) and `policies` (help and legal). The header renders a species mega-menu automatically from published metaobjects, so adding a species adds it to the navigation with no menu edit.

## 5. Redirects

`data/shopify/redirects.csv` — 20 rows covering the brief's preferred URLs (`/species`, `/shop`, `/learn`, `/mushroom-finder`, `/about`, `/faq`), the retired `frontpage` collection, the empty `combo-deals` and `test` pages, the old blog handle, likely short product URLs, and the dead WordPress paths (`/wp-admin`, `/wp-login.php`) left over from the 2022 site. All 23 product handles are preserved, so there is no product redirect debt.

## 6. Apps

None required. Product recommendations use Shopify's native Product Recommendations API. Predictive search is native. Email capture posts to Shopify's customer form. The only external service is Google Tag Manager. The existing Google & YouTube channel stays for the Merchant Center feed only, with its GA4 tagging switched off to avoid double-firing.
