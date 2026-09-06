# 15 — QA results

Run **06/09/2026** against the theme as committed, in a clean container. Every item is
`PASS`, `FAIL` or `BLOCKED (reason)`. Nothing is ticked without evidence, and "blocked"
means exactly that — it is not a quiet pass.

> **Why this document was rewritten.** The audit GT-AUD-JM-2026-09-05 (finding H2) found
> the previous version of this file describing code that was no longer committed: it
> claimed 0 theme-check offences against a theme with 3 errors, 510/510 assertions against
> a suite that had grown to 1,382 and had a failure in it, and 0 axe violations against a
> build with 1,556 colour-contrast failures. The cause was a colour "facelift" applied
> after QA, with QA never re-run. The figures below were reproduced on the current commit,
> and the first four now run in CI with the deploy gated on them, so they cannot drift
> again. Where something is no longer measured, it says so rather than quoting an old
> number.

**How the automated checks run:** the theme has no store to render against, so `preview/`
renders the real Liquid templates with LiquidJS plus Shopify filter shims, using live
product data and the generated species/product content. That produces static HTML that
axe and the assertion suite can drive. `preview/` declares `playwright-core` and
`axe-core` as devDependencies, so `npm ci` in that directory is the only setup needed —
neither the accessibility runner nor the screenshot script points at one contributor's
scratchpad any more.

`preview/reports/axe.json` is committed: it is the evidence for the 0-violations figure
above, and it is two bytes when the run is clean. `preview/reports/shots/` is not — the
design-review screenshots came to 54 MB regenerated, which would have given back more than
the 24.6 MB of duplicated photography removed under L5. Regenerate them with
`node preview/tests/shots.mjs` against a running `node preview/serve.mjs`.

## Summary

| Check | Result |
|---|---|
| `shopify theme check --path theme` | **0 offences** — 112 files, 0 errors, 0 warnings |
| Assertion suite (`node preview/tests/run.mjs`) | **1544 passed, 0 failed** |
| axe-core 4, WCAG 2.x A + AA + best practice | **0 violations** across 55 pages × 3 viewports |
| `python3 scripts/build-seo-metadata.py --check` | **PASS** — data pack matches the approved §5.2 metadata for all 23 products |
| Rendered `<title>` budget | **PASS** — 0 of 55 over 60 chars, 0 duplicates, 0 doubled brands |
| Preview indexability | **PASS** — 55/55 pages `noindex,nofollow`, `robots.txt` disallows all |
| Grid balance, counts 1–12 and 23 | **No ragged rows** at desktop, tablet or mobile |

### Lighthouse

**Not currently measured.** The previous version of this document reported
100/100/100/100 across nine pages, but `preview/reports/lh-*.json` was git-ignored and
absent, so the claim could not be checked against anything. The git-ignore has been
removed; until a run is committed under `preview/reports/`, treat performance as
unmeasured rather than perfect. The performance *patterns* the theme uses are listed
under "Performance" below and are verifiable by reading the templates — that is not the
same as a score.

### Colour contrast

The contrast failures in H1 are fixed at the source rather than overridden. Ratios below
are computed from the committed token values (WCAG 2.x relative luminance):

| Token / use | Foreground | Background | Ratio | Required |
|---|---|---|---:|---:|
| `--c-accent-strong` — primary button, sale badge, count bubble | `#F4EFE6` | `#9A4A2C` | 5.41 : 1 | 4.5 : 1 |
| `--c-accent-strong-hover` | `#F4EFE6` | `#7E3C24` | 7.17 : 1 | 4.5 : 1 |
| `--c-badge-text` on `--c-surface-2` | `#3A322C` | `#EBE4D6` | 9.93 : 1 | 4.5 : 1 |
| `--c-text-muted` on `--c-surface` | `#5E574E` | `#F4EFE6` | 6.22 : 1 | 4.5 : 1 |
| `--c-text` on `--c-surface` | `#1C1916` | `#F4EFE6` | 15.28 : 1 | 4.5 : 1 |
| `--c-on-deep` on `--c-deep` — announcement bar | `#F4EFE6` | `#1C1916` | 15.28 : 1 | 4.5 : 1 |

`--c-accent` (`#B85C38`, 3.96 : 1) is **decorative only** — borders, badge dots, icons and
large display text. It must never sit under small text or carry it. `--c-accent-strong` is
the accent for anything with text on it. Changing either in the theme editor without
re-running axe is how H1 happened the first time.

## Outstanding — cannot be closed in code

These are the audit findings that no amount of engineering resolves. They are launch
blockers and are not marked PASS anywhere in this document.

`python3 scripts/check-launch-readiness.py` enumerates them from the repository on every
CI run and writes them to the job summary, so they stay visible instead of failing
quietly — the footer renders its statutory identifiers conditionally, so blank settings
produced no footer text rather than an obviously incomplete one, and nothing in the build
noticed. It reports, and does not gate the preview deploy; `--strict` exits non-zero and
is the gate to use before deploying the real store.

| ID | Item | Owner |
|---|---|---|
| H3 | Compliance brief is a 370-byte stub marked UNVERIFIED; the whole regulatory position rests on it | Regulatory advisor |
| H3 | Disclaimer uses US DSHEA wording, not the statement the Medicines Act General Regulations prescribe for unregistered complementary medicines | Regulatory advisor |
| H3 | Product photography shows label claims ("SUPPORTS … ADHD", "BRAIN") that the copy removed — label reprint and re-shoot required, or the copy work is cosmetic | Client |
| H3 | Five product names that make disease claims await confirmation of the proposed renames | Client |
| M5 | 48 open client-input flags across 23 products; six blends render fallback text where ingredients belong | Client |
| M6 | ECTA s43 / POPIA identifiers blank: legal name, registration number, VAT number, information officer. The footer renders them conditionally, so it currently shows none | Client |
| M8 | "What it does not do" fields name diseases in negated form on product pages — an implied-claim risk under SA advertising practice regardless of the negation | Regulatory advisor |

Targets in the brief were LCP < 2.5 s, CLS < 0.1, INP < 200 ms, mobile performance ≥ 85, accessibility ≥ 95, SEO ≥ 95. **Whether they are met is currently unmeasured** — see the Lighthouse note above. Accessibility is independently covered by the axe run; performance and SEO scores are not. **Production Lighthouse is `BLOCKED` until the theme is deployed**; the numbers to beat are recorded in `docs/17-launch-checklist.md`.

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
| Page speed tested | **UNVERIFIED** — no committed Lighthouse run; production **BLOCKED** |
| Accessibility tested | **PASS** — axe-core 4, 0 violations across 55 pages × 3 viewports |
| Mobile tested | **PASS** — emulated at 390px; real-device testing **BLOCKED** |
| No console errors | **UNVERIFIED** — previously evidenced by a Lighthouse run that is no longer available; not re-measured |
| No duplicate tags | **PASS** in the theme; the live store's UA tag must be removed at deployment |
| No broken tracking | **PASS** in the harness |

## Defects found and fixed during QA

| # | Defect | Fix |
|---|---|---|
| 1 | Species page `<title>` appended the scientific-name suffix even when an SEO title was set, producing a 114-character double title | Conditional in `meta-tags.liquid` |
| 2 | Reference entries without a URL rendered an empty `<a>` — 9 axe "link-name" violations. Liquid treats `''` as truthy, so `{% if r.url %}` did not guard it | `{% if r.url != blank %}` |
| 3 | Consent, marketing and address checkboxes relied on implicit label wrapping | Explicit `for`/`id` pairs |
| 4 | Heading hierarchy skipped levels — data labels and nav group labels were marked up as `<h4>` | Converted to `<p class="label">`; added visually-hidden `<h2>`s before card grids on collection, search, species-index and blog templates |
| 5 | 404 numeral used a hairline stroke on ink and failed contrast | Solid `--c-text-muted` (named `--c-cream-2` at the time) |
| 6 | 4 theme-check errors (filters on `render` arguments, an unsupported gift-card filter) and 9 warnings | All cleared; theme-check is now clean |
| 7 | Product cards did not link to species on collection pages because the cleanup CSV was read with `\r\n` line endings, so the last column key never matched | Harness now strips `\r` |

Items 1–6 are defects in the delivered theme and are fixed in it. Item 7 was a harness bug, and it is the reason the harness exists: it caught a data-mapping failure that would have shipped as silently missing cross-links.

## Defects fixed in response to GT-AUD-JM-2026-09-05

| ID | Defect | Fix |
|---|---|---|
| H1, M7 | Colour settings held a dark palette's values under a dark palette's names (`color_ink` held cream, `color_cream` held near-black), with `facelift.css` appended to compensate. 1,556 axe colour-contrast violations. | Settings and CSS variables renamed to their role (`surface`/`text`/`accent`/`deep`); `facelift.css` folded into the base files and deleted; dark-theme literals replaced; `--c-accent-strong` introduced as the only accent allowed under text |
| H2 | This document and the README described code that was not committed | Both rewritten from a reproduced run; the checks now gate the deploy in CI |
| H4 | Header logo and OG image hot-linked the live store's CDN with a version query string; five referenced assets were absent from the theme | `logo.svg` and a generated `og-image.jpg` committed and wired up, with theme-editor pickers as overrides; CI no longer downloads the live logo |
| M1 | `og:image` emitted protocol-relative | Prefix-aware normalisation — `https:` for `//cdn.shopify.com/…`, `shop.url` for root-relative paths |
| M2 | Mushroom Finder question 2 mapped every answer to an empty rule array, so it could not change the result | Rules populated; verified in a browser that the ranking differs between "one species" and "a house blend" |
| M3 | Product SEO titles were the live store's, so the theme's brand suffix doubled the brand and the Lion's Mane 30 ml / 50 ml titles collided | Approved §5.2 metadata applied from the SEO doc by `scripts/build-seo-metadata.py`; suffix appended only when absent and within budget; title length, uniqueness and brand-count now asserted |
| M4 | Public preview deployed the whole catalogue with no `noindex`, and suppressed build-input failures | `noindex,nofollow` forced on every page (cart and search previously kept `follow`), disallow-all `robots.txt`, both asserted in CI; missing inputs now warn or fail rather than deploying silently |
| L1 | axe runner hard-coded a path to one contributor's scratchpad; Playwright and axe-core undeclared | Both declared as devDependencies and resolved normally; browser discovery falls back sensibly; `preview/reports/` no longer git-ignored |
| L2 | 21 hard-coded internal links across 14 files | `routes.all_products_collection_url` plus three "Key page links" settings |
| L3 | Organization schema assigned an unused variable and looped over a string; its comma logic would have emitted invalid JSON if Instagram were unset but Facebook set | Rewritten as a join-and-split that drops blanks |
| L4 | `innerHTML` built from metaobject strings in the Finder and Easter-egg scripts — also a correctness bug, since every result card is titled "Lion's Mane" | Nodes built individually with `textContent` |
| L5 | 23 product photographs committed twice — `preview/assets/img/product-<handle>.jpg` was byte-identical to `data/live-product-images/<handle>.jpg`, 24.6 MB of pure duplication | The preview copies are a pure rename of the source, so they are now derived at build time by `scripts/preview/sync-product-images.mjs` (called from `shims.mjs` before it scans for available photographs) and git-ignored |

Verified for L5: deleting `preview/assets/img/product-*.jpg` and re-running `node
preview/render.mjs` restores all 23 and the suite still passes. Note this removes the
duplication from the working tree going forward; the blobs remain in git history, which
only a history rewrite would reclaim — not worth doing on a shared branch.
