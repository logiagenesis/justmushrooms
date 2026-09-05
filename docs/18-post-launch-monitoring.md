# 18 — Post-launch monitoring plan

## Week 1 — daily

| Check | Where | Trigger to act |
|---|---|---|
| Orders vs analytics | Shopify admin vs GA4 | Any gap between Shopify order count and GA4 `purchase` count over a day. A gap means the pixel or consent is misconfigured |
| Purchase value accuracy | GA4 vs Shopify | Any variance beyond rounding |
| Ads conversions | Google Ads | Double counting, or zero conversions on a day with orders |
| Console errors | Browser on the live store | Any error at all |
| Coverage errors | Search Console | Any new "not indexed" reason |
| Checkout abandonment | Shopify | A step where sessions collapse |
| Consent acceptance rate | GA4 `consent_update` | Below ~40% acceptance suggests the banner is unclear or badly placed |

## Month 1 — weekly

- **Search Console:** impressions and average position for the species pages (`/species/*`), which are the SEO bet. Watch for the FAQ rich result appearing, and for any manual action.
- **GA4:** landing-page report — are species pages entering, and do they convert onward to product pages? `species_product_click` is the key metric for whether education sells.
- **Mushroom Finder:** `mushroom_finder_start` → `mushroom_finder_complete` completion rate, and which species dominates `finder_top_species`. A single species dominating every result means the scoring map needs rebalancing.
- **Core Web Vitals:** the Search Console CWV report once field data accumulates (28 days). Local numbers are perfect; real users on South African mobile networks are the real test.
- **Site search terms:** GA4 `search_term`. Terms with no results are a content or naming gap.
- **404s:** Search Console and Shopify's redirect suggestions.

## Ongoing — monthly

- **Evidence review.** Each species metaobject carries `evidence_reviewed_on`. Re-read the matrices annually, or immediately when a new trial or a regulator ruling appears. Update the file in `docs/research/evidence/`, re-run `scripts/build-species-entries.py`, re-import. The citation numbering stays in sync automatically.
- **Compliance sweep.** Re-run `node preview/tests/run.mjs` against the rendered theme after any content change. If the client has edited product descriptions in the admin, spot-check for disease language — that is how the old copy crept in originally.
- **Broken links and images.** Monthly crawl.
- **Review collection.** Ask verified customers for reviews and enter them as `review` metaobject entries with consent recorded. Do not install a review app that auto-generates or imports unverified reviews.
- **Stock and pricing drift.** The site reads both live from Shopify, so nothing to do beyond keeping Shopify correct.

## Quarterly

- Lighthouse and axe on the top five templates.
- Re-check the SA regulatory position (`docs/research/sa-regulatory-compliance.md`) — SAHPRA's complementary-medicines framework is still moving, and the labelling requirements may change.
- Review the keyword-to-URL map against actual Search Console queries and reassign clusters that are cannibalising.
- Revisit the 48 product flags: how many have been resolved, and what is still missing.

## Alerting worth configuring

1. GA4 custom insight: daily `purchase` count drops to zero.
2. GA4 custom insight: daily revenue drops more than 50% week on week.
3. Search Console email alerts for manual actions and coverage spikes.
4. Shopify order notification to the client's email (already default).
5. Uptime monitor on `https://justmushrooms.co.za/` (any free service) — Shopify is reliable, but DNS and domain renewals are not. The domain sits with domains.co.za and lapsed renewals have been a recurring email thread.

## The metric that actually matters

Not sessions. **Species page → product page → add to cart.** The entire strategy of this rebuild is that honest, cited education outsells claim-stuffed copy. `species_product_click` divided by `view_species` is the number that tells you whether that bet is paying off. Baseline it in month one and review it quarterly.
