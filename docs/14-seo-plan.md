# 14 — Phase 9: SEO implementation plan

Keyword research, the keyword-to-URL map, per-page metadata proposals, twelve article briefs and a dated SA SERP snapshot are in [`research/seo-keyword-research.md`](research/seo-keyword-research.md). This document is the implementation layer: what the theme does automatically, and what a human still has to do.

## 1. What the theme handles without anyone thinking about it

| Requirement | How |
|---|---|
| Unique `<title>` per template | `snippets/meta-tags.liquid` — a per-page-type case with metafield/metaobject overrides and sensible fallbacks. Asserted unique across all rendered pages |
| Unique meta description | Same snippet; falls back to the product promise, then the description, then a brand default. Never empty |
| One `<h1>` per page | Asserted by the test suite on every page |
| Canonical | `{{ canonical_url }}` in the layout; correct on paginated and filtered collection URLs because Shopify emits it |
| Breadcrumbs | `snippets/breadcrumbs.liquid` on product, collection, species, page, blog and article — visible trail plus `BreadcrumbList` JSON-LD |
| Structured data | `Organization` + `WebSite` (+`SearchAction`) sitewide; `Product`+`Offer`+`Brand` on PDPs; `CollectionPage`+`ItemList` on collections; `FAQPage` only where a visible `<summary>` FAQ exists; `Article` on posts. All asserted as valid JSON |
| Internal linking | Species → products and products → species are generated from `linked_species`, not hand-maintained. The footer lists every species; the header mega-menu is generated from published metaobjects |
| Image filenames and alt | Alt text comes from the image record or a sensible fallback; the theme never stuffs the product title into every alt |
| Responsive images | `image_tag` with widths and sizes; Shopify serves AVIF/WebP |
| Mobile-first | Single-column below 768px; Lighthouse SEO 100 |
| No accidental `noindex` | Only `cart` and `search` carry it, deliberately |
| Sitemap and robots | Shopify-generated; the live robots.txt is already correct |

## 2. What a human must do

1. **Fill the SEO metafields.** `data/shopify/products-metafields.json` carries a proposed `seo_title` (≤60 chars) and `seo_description` (≤155) for all 23 products; `species-entries.json` carries them for all 8 species. Import them; do not leave the theme running on fallbacks.
2. **Import the redirect map** (`data/shopify/redirects.csv`) before launch, so `/species`, `/shop`, `/learn`, `/about`, `/faq` and the dead WordPress paths resolve.
3. **Delete the `test` page** and point the empty `combo-deals` page at the collection. Both are currently indexed.
4. **Replace the empty `news` blog with `learn`** and publish against the twelve briefs, in priority order.
5. **Submit the sitemap** and inspect the key URLs in Search Console.
6. **Do not create a page per keyword.** One cluster, one URL — the map in the research file assigns every cluster to exactly one target so species pages and product pages never compete.

## 3. Cannibalisation rules for this catalogue

The obvious risk is `/species/lions-mane` competing with `/products/lions-mane-mushroom-tincture-30ml` and its 50 ml sibling. The split:

- **Species pages own informational intent** — "what is lion's mane", "benefits", "side effects", "dosage", "vs reishi". They target the question, carry the FAQ schema and link down to products.
- **Product pages own transactional intent** — "buy lion's mane tincture south africa", "lion's mane drops price". They target the purchase, carry Product schema and link up to the species page for the evidence.
- **The 30 ml and 50 ml pages of the same species** are near-duplicates by nature. Differentiate the titles by size and use case, keep the promise lines distinct, and if they cannibalise in practice, consolidate them into one product with two variants — which is the cleaner model anyway.
- **Collections own category intent** — "mushroom tinctures south africa", "mushroom blends".

## 4. Priorities

1. Species pages live and indexed — they are the differentiator and nothing else on the SA market publishes graded evidence with citations.
2. Product SEO fields populated, Product schema valid, brand corrected from "My Store" to "Just Mushrooms".
3. Redirects and the dead-page cleanup.
4. Learn articles, starting with the highest-intent informational clusters.
5. Local signals: the physical address in the footer and in `Organization` schema, and a Google Business Profile if the client wants local visibility.

## 5. What not to do

No thin doorway pages per city. No "best mushroom for X" pages where X is a condition — that is a disease claim regardless of how it is phrased. No scraped or spun species content: the entire SEO advantage here is that the pages are honest, cited and unusual, and that only works if they are actually written.
