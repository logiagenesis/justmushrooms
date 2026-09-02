# 11 — Phase 11–12: Conversion features and the Easter egg

## 1. Shipped

| Feature | Where | Note |
|---|---|---|
| Sticky add-to-cart | `sections/main-product.liquid` | Appears once the buy box scrolls out; hidden on sold-out variants; toggleable in settings |
| Cart drawer | `snippets/cart-drawer.liquid` | Ajax add, quantity change and remove; focus-trapped; Escape closes; falls back to `/cart` without JS |
| Species → product cross-links | `sections/species-shop.liquid` | Driven by `linked_products`; fires `species_product_click` |
| Product → species education links | `main-product.liquid`, `product-details.liquid` | Pills in the hero and rows in the details table |
| Mushroom Finder | `sections/mushroom-finder.liquid` + `assets/finder.js` | Four preference questions, three species suggestions |
| Compare species | `sections/compare-species.liquid` | One table, same columns for every species, horizontally scrollable |
| Smart recommendations | `sections/related-products.liquid` | Shopify's native Product Recommendations API — no app, and the section hides itself if nothing is returned |
| Predictive search | `sections/predictive-search.liquid` | Products, pages, articles **and species metaobjects** |
| Shipping clarity | Cart drawer, buy box, PDP accordion, footer | Single source: the `shipping_summary` setting |
| Email capture | Footer | Shopify's native customer form, tagged `newsletter`; POPIA-compliant opt-in wording |
| Trust strip | Homepage | Four true statements only |

## 2. Deliberately not built

Fake urgency, countdown timers, fabricated stock scarcity ("only 2 left!"), fake reviews, unearned trust badges, spin-to-win popups, exit-intent discounting, and any medical promise. The reviews section renders nothing until real `review` metaobject entries or a reviews app block exist — there is no sample data in the repository to accidentally ship.

Bundles and subscriptions are **not** built: the existing combo SKUs already act as bundles, and a subscription is an operational commitment (fulfilment cadence, cancellation handling, CPA obligations) the client has not confirmed. Both are easy to add later.

## 3. The Mushroom Finder — how it avoids being a diagnosis

The quiz asks about **preferences**, never symptoms:

1. What do you want to support day to day? (focus / energy / winding down / a general routine / skin and hydration routine)
2. Single species or a blend?
3. How much do you weigh the research? (human trials matter / tradition is enough)
4. Anything we should know? (none / prescription medication / pregnant or breastfeeding / I avoid alcohol)

Question 4 changes nothing about "treatment" — it routes the reader to safety notes first, and its options are labelled as such. The scoring map lives in a JSON block in the section, so the client can edit it in the theme without touching JavaScript. The result is three **species pages** to read, each with its evidence badge, not a prescription. The section carries a standing disclaimer: *"The Mushroom Finder matches stated preferences to species pages. It does not assess your health, diagnose anything or recommend treatment."*

Analytics: `mushroom_finder_start` on first interaction, `mushroom_finder_complete` with the top species slug and the number of answers. No answer content leaves the browser.

## 4. Easter egg — "The underground is alive."

**Trigger.** A 10px glowing spore node sits in the footer next to the copyright line, labelled for screen readers as "A tiny glowing spore". Seven clicks — the node brightens with each one — or typing `mycelium` anywhere outside a form field.

**Effect.** A full-viewport canvas draws a mycelium network growing upward from the bottom of the screen: fourteen seed hyphae, branching stochastically to a cap of 260 tips, with occasional gold spore dots. It runs for nine seconds, then fades out. A toast reads **"The underground is alive."** followed by one randomly chosen verified fact drawn from the `fun_facts` field of the published species metaobjects — each with its source and a link. Twenty-four facts are currently loaded, all cited and all non-medical.

**Constraints honoured.** The canvas is `pointer-events: none` and `aria-hidden`, so it cannot block a click, a form or the checkout. It is `z-index: 5` — below the header, cart drawer and consent banner. Under `prefers-reduced-motion` it paints a single static frame instead of animating. The whole feature is 2.4 kB of JavaScript, deferred, and it can be switched off in theme settings. There is no discount attached — that is the client's call, not ours.

Analytics: `easter_egg_found` with the trigger method. Nothing else.

## 5. Trust elements — all verifiable

Every trust statement on the site maps to something true today: delivery is by courier from Plettenberg Bay; checkout is Shopify's; claims are graded and the grades are published with citations; the tinctures are small-batch. The claims held back until documents arrive are organic certification, lab testing, sourcing origin and any certification badge.
