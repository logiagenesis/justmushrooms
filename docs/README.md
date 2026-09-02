# Just Mushrooms — rebuild documentation

Read in order. Every document states what is verified, what is assumed and what is blocked.

| # | Document | What it is |
|---|---|---|
| 00 | [Execution brief](00-execution-brief.md) | The three-pass audit of the brief, the patched plan, the input status table and the working assumptions |
| 01 | [Discovery audit](01-discovery-audit.md) | The live store as found on 02/09/2026 — pages, theme, product data, metadata, analytics and the inventory of live disease claims |
| 02 | [Product ↔ species mapping](02-product-species-mapping.md) | All 23 products mapped to 8 species, with confirmation flags |
| 03 | [Architecture and sitemap](03-architecture-and-sitemap.md) | Platform decision, new sitemap, content model, navigation, redirects |
| 04 | [Design system](04-design-system.md) | Palette, type, components, the grid rules and how they are enforced, motion, wireframes |
| 09 | [Content drafts](09-content-drafts.md) | Voice rules, homepage and product copy, and the full claim-removal log |
| 10 | [Analytics plan](10-analytics-plan.md) | One-container strategy, event map, Consent Mode v2, the setup runbook |
| 11 | [Conversion features](11-conversion-features.md) | What was built, what was deliberately not built, the Finder and the Easter egg |
| 12 | [Image direction](12-image-direction.md) | Product photography brief, AI prompts with per-species anatomical corrections, sizes, alt text |
| 13 | [Shopify implementation](13-shopify-implementation.md) | Repository layout, deployment order, theme conventions, limits, rollback |
| 14 | [SEO plan](14-seo-plan.md) | What the theme automates, what a human must do, cannibalisation rules |
| 15 | [QA results](15-qa-results.md) | The triple audit, with results and the seven defects found and fixed |
| 17 | [Launch checklist](17-launch-checklist.md) | Blockers, deployment, analytics, verification, and the "do not launch if" list |
| 18 | [Post-launch monitoring](18-post-launch-monitoring.md) | Daily, weekly, monthly and quarterly checks, and the one metric that matters |
| 19 | [Image generation manifest](19-image-generation-manifest.md) | Every image the theme can render — 132 files named, sized and prompted, with the batch sheet at `data/image-manifest.csv` |

## Research

| Document | What it is |
|---|---|
| [Evidence matrices](research/evidence/) | Eight species files (Lion's Mane, Reishi, Chaga, Cordyceps, Turkey Tail, Tremella, Shiitake, Sceletium) plus cross-cutting blend claim rules. 201 cited references |
| [SA regulatory compliance](research/sa-regulatory-compliance.md) | SAHPRA, Foodstuffs Act, ARB, CPA, POPIA, ECTA, alcohol and Act 36 for the pet product |
| [Design benchmark](research/design-benchmark.md) | 10 studios, 52 reference sites, 105 numbered observations, reference board |
| [SEO keyword research](research/seo-keyword-research.md) | SA search intent per species, keyword-to-URL map, metadata proposals, article briefs, SERP snapshot |

## Deliverables outside `docs/`

- `theme/` — the Mycelia Shopify OS 2.0 theme
- `data/shopify/` — metaobject and metafield definitions, species entries, product copy, cleanup CSV, redirect map, menu plan
- `data/live-snapshot/` — the audit evidence
- `analytics/` — GTM container export and the Shopify customer-events pixel
- `scripts/` — content generators and the Shopify import script
- `preview/` — the render harness, 510-assertion test suite, axe audit and screenshots
