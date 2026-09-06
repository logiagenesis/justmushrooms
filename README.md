# Just Mushrooms — website rebuild

A complete rebuild of [justmushrooms.co.za](https://justmushrooms.co.za): a custom Shopify Online Store 2.0 theme, an evidence-led species library, compliant product copy, and a clean Google tagging stack — for a small functional-mushroom tincture maker in Plettenberg Bay, Western Cape.

**Start here: [`docs/README.md`](docs/README.md).**

## What is in this repository

| Path | What |
|---|---|
| `theme/` | The **Mycelia** OS 2.0 theme. 48 sections, 22 templates, no build step, no dependencies. `shopify theme check` clean |
| `docs/` | Discovery audit, architecture, design system, content, analytics, QA and launch documentation |
| `docs/research/` | Cited evidence matrices for 8 species, the SA regulatory brief, a design benchmark and SA SEO research |
| `data/shopify/` | Metaobject and metafield definitions, species entries, product copy, cleanup CSV, redirects, menus |
| `data/live-snapshot/` | The live store as captured on 02/09/2026 — the audit's evidence |
| `analytics/` | One GTM container export and the Shopify customer-events pixel |
| `scripts/` | Content generators and the Shopify import script |
| `preview/` | A LiquidJS harness that renders the real templates so the theme can be tested without a store |

## Verify it yourself

```bash
# theme lint
npx @shopify/cli theme check --path theme

# render the theme to static HTML, then test it
node preview/render.mjs        # 20 pages + a grid stress-test page
node preview/tests/run.mjs     # 510 assertions: grids, SEO, schema, a11y, dataLayer, compliance
node preview/serve.mjs &       # http://127.0.0.1:4173
node preview/tests/axe.mjs     # axe-core, 55 pages x 3 viewports
node preview/tests/shots.mjs   # screenshots into preview/reports/shots/

# regenerate content from the evidence matrices
python3 scripts/build-species-entries.py
python3 scripts/build-product-metafields.py
```

Current results, reproduced on the committed code — see [`docs/15-qa-results.md`](docs/15-qa-results.md)
for what was run and what is not covered:

| Check | Result |
|---|---|
| `shopify theme check --path theme` | 112 files, **0 offences** |
| `node preview/tests/run.mjs` | **1544 passed, 0 failed** |
| `node preview/tests/axe.mjs` | 55 pages x 3 viewports, **0 violations** |
| `python3 scripts/build-seo-metadata.py --check` | data pack matches the approved metadata (23 products) |
| Lighthouse | **not currently measured** — see docs/15-qa-results.md |

The first four run in CI on every push and the deploy is gated on them, so these
figures cannot drift from the committed code again.

## The three rules this build runs on

1. **Every claim carries an evidence tier**, drawn from a cited matrix. `what_it_does_not_do` and `safety_notes` are *required* metaobject fields — a species page cannot be published without them.
2. **No ragged grids.** Layout is chosen by item count, and a row that does not sum to twelve columns fails the test suite.
3. **Nothing is invented.** Where the client has not supplied an ingredient list, a dose, a lab report or a certificate, the site says so. 48 such gaps are flagged in the product data and listed in the launch checklist.

## Status

The theme, content, data and analytics configuration are complete and tested. Deployment,
the Google stack and live commerce testing are **blocked pending client access** — see
[`docs/17-launch-checklist.md`](docs/17-launch-checklist.md).

**Not launch-ready on the regulatory side.** The compliance brief
([`docs/research/sa-regulatory-compliance.md`](docs/research/sa-regulatory-compliance.md))
is still an unwritten stub, the disclaimer wording has not been confirmed against the
Medicines Act General Regulations, and the product photography still shows label claims
the copy removed. None of these can be closed in code. They are tracked as H3 and M8 in
[`docs/15-qa-results.md`](docs/15-qa-results.md).
