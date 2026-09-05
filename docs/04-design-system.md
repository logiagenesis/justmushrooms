# 04 — Phase 6: Design system and wireframes

Implemented in `theme/assets/base.css`, `components.css`, `sections.css` and `grid.css`; tokens are generated from theme settings by `theme/snippets/css-tokens.liquid`, so the client can change the palette in the theme editor without touching code.

## 1. Palette

| Token | Value | Role | Notes |
|---|---|---|---|
| `--c-ink` | `#0B0E0C` | Page ground | Near-black with a green cast |
| `--c-ink-2` | `#131816` | Raised surfaces, header, footer | |
| `--c-ink-3` | `#1B221E` | Cards | |
| `--c-cream` | `#F2EAD9` | Primary text | 15.6:1 on ink |
| `--c-cream-2` | `#B9AE97` | Secondary text | 8.4:1 on ink — passes AA at body size |
| `--c-spore` | `#C9A24A` | Primary CTA | Gold on ink text, 7.6:1 |
| `--c-forest` | `#2F5D46` | Announcement bar, gradients | |
| `--c-myc` | `#8FF7C8` | **Accent only** | Eyebrows, focus rings, evidence "strong" badge, Easter egg. Budgeted at ≤5% of any viewport |
| `--c-danger` | `#E07A5F` | Warnings | Used only for the "does not do" panel border and safety notices |

**Forbidden:** purple/magenta gradients, rainbow, neon-on-neon, any second accent. "Funky" is carried by typography, motion and the mycelium linework, not by adding colours. Verified: axe reports zero contrast violations across 20 pages × 3 viewports.

## 2. Typography

- **Display:** Playfair Display 600 (Shopify font picker default) — headings only, tight tracking `-0.015em`, `text-wrap: balance`.
- **Body:** Work Sans 400 — everything else, 1.6 line-height, max 68ch measure on rich text.
- Fluid scale via `clamp()`: h1 `2.4–4.6rem`, h2 `1.9–3.1rem`, h3 `1.35–1.8rem`, body `1rem × --type-scale`.
- **`.eyebrow`** — 0.78rem, uppercase, 0.14em tracking, mycelium accent, with a 22px rule before it. This is the signature "scientific annotation" device.
- **`.sci`** — italic secondary colour for every scientific name, applied consistently on cards, pills, tables and headings.
- No text below 0.78rem anywhere. No light weights on dark ground.

## 3. Spacing and layout

`--page-width` 1360px · gutters `clamp(16px, 4vw, 48px)` · `--gap` `clamp(16px, 2vw, 28px)` · `--section-pad` `clamp(56px, 8vw, 128px)` · `--radius` 18px, `--radius-sm` 9px.

## 4. Components

Buttons (primary/secondary/ghost, 48px min target, 56px large), badges (evidence tiers, sale, sold out, pets, botanical), cards (product/species/article/CTA — equal height by flex, fixed 4:5 media ratio, 3-line text clamp, CTAs aligned at the bottom by `margin-top:auto`), accordions (native `<details>`), notices, the evidence tier list, breadcrumbs, pills, spec tables, drawers (cart and menu, with focus trap and Escape), the consent banner, the sticky add-to-cart bar and pagination.

## 5. Grid rules — enforced, not documented

`snippets/balanced-grid.liquid` picks the layout from the item count; `assets/grid.css` holds the spans. Measured at 1440px on the `/grid-test` page:

| Items | Rendered rows | Items | Rendered rows |
|---:|---|---:|---|
| 1 | 1 centred feature (8 of 12 cols) | 7 | 1 feature + 3 + 3 |
| 2 | 2 | 8 | 4 + 4 |
| 3 | 3 | 9 | 3 + 3 + 3 |
| 4 | 4 (2 + 2 optional in settings) | 10 | 2 feature + 4 + 4 |
| 5 | 1 feature + 4 | 11 | 2 feature + 3 + 3 + 3 |
| 6 | 3 + 3 | 12 | 3 + 3 + 3 + 3 (4 + 4 + 4 optional) |

Above 12, the grid runs 3-up and pads to a multiple of three with **editorial CTA cards** — the Finder, the species library, the compare table — never with fake products. 23 products render as 24 tiles in eight complete rows.

Tablet (768–1023px): two columns, with the first card spanning both when the count is odd. Mobile: one column. Feature cards flip to a horizontal media/body split at desktop and tablet.

`preview/tests/run.mjs` asserts the approved span pattern for every count 1–12, that every row sums to exactly 12 columns, and that a 23-item grid pads to 24. A ragged row fails the build.

## 6. Motion

Scroll reveals (18px rise, 0.45s, IntersectionObserver, unobserved after firing), 4% card lift with a 0.9s image scale on hover, drifting spore particles in the hero, and the mycelium Easter egg. Everything is gated on `settings.enable_motion` **and** `prefers-reduced-motion`. Under reduced motion all reveals are visible immediately, particles are removed, animations are clamped to 0.001ms, and the Easter egg paints a single static frame instead of animating.

## 7. Wireframes (section order per template)

- **Home** — hero (full-bleed, annotations right, CTA pair) → trust strip (4 up) → featured species (3+3) → Finder teaser (split) → featured products (3+3) → education split (may support / does not do) → sourcing (image + text) → reviews (renders only if real reviews exist) → newsletter → footer.
- **Species detail** — hero (evidence badge, common name, scientific name, positioning line, CTA to shop) → at a glance (4 tiles) → evidence split (may support, tiered / does not do) + human evidence summary → compounds (3 up) → how to use + safety (2 up, warning notice, disclaimer) → shop this species (balanced grid) → FAQ (accordion + FAQPage schema) → references (2-column ordered list, reviewed-on date) → other species (3 up).
- **Product** — gallery (sticky) + info (badges, title, species pills, promise, buy box with price, variant, quantity, add to cart, dynamic checkout, shipping line, disclaimer) → key details table + directions/warnings → evidence split → product FAQ → shipping and returns accordions → related products (3) → sticky add-to-cart bar.
- **Collection** — breadcrumbs → title + description + collection pills + sort → balanced grid → pagination → disclaimer.
- **Species index** — breadcrumbs → heading + Finder CTA → balanced grid of all species → evidence tier legend → compare table → Finder teaser.
