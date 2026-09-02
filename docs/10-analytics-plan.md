# 10 — Phase 10: Google stack implementation plan

## 1. What is on the live site today (and what must go)

| Found | Verdict |
|---|---|
| `gtag/js?id=UA-251701047-1` — Universal Analytics | **Remove.** UA stopped processing data on 1 July 2023. It is dead weight and a second, conflicting tag. |
| `gtag/js?id=G-SQDNS275V5` — GA4, loaded by Shopify's Google & YouTube channel | **Keep the property, move the tagging.** GA4 continues to receive data through GTM; the channel's own GA4 tagging is switched off so nothing double-fires. |
| No GTM container | **Add one**, and put every tag inside it. |
| No Google Ads tag, no consent mode, no GSC evidence | **Add**, per below. |

## 2. Chosen strategy — one container, two loading points

```
Storefront (theme)                          Checkout + thank-you (sandbox)
theme.liquid                                Customer Events custom pixel
  └ consent-defaults.liquid (Consent v2)      └ consent from Shopify privacy API
  └ gtm-head.liquid  ──┐                      └ same GTM container ──┐
  └ datalayer.liquid   │                      └ begin_checkout,      │
  └ theme.js pushes    │                        add_shipping_info,   │
                       ▼                        add_payment_info,    ▼
                  GTM container  ◄──────────────  purchase      GTM container
                       │
      ┌────────────────┼────────────────────┐
   GA4 config     GA4 events           Google Ads
   (consent-      (ecommerce +         (conversion linker, purchase,
    gated)         custom)              ATC, begin_checkout, remarketing)
```

Storefront events are pushed by the theme; checkout events by the pixel. The two never overlap, so `purchase` fires exactly once. Container export: `analytics/gtm-container.json`. Pixel: `analytics/shopify-customer-events-pixel.js`.

## 3. Event map

| Event | Fired by | Parameters |
|---|---|---|
| `view_item` | `datalayer.liquid` (product template) | currency, value, items[1] |
| `view_item_list` | `datalayer.liquid` (collection) | item_list_id, item_list_name, items[≤24] |
| `select_item` | `theme.js` card click delegate | item_list_name, items[1] |
| `add_to_cart` | `theme.js` product-form submit + cart quantity increase | currency, value, items[1] |
| `remove_from_cart` | `theme.js` cart quantity decrease/remove | currency, value, items[1] |
| `view_cart` | `datalayer.liquid` (cart page) + cart-drawer open | currency, value, items[] |
| `begin_checkout` | checkout button + Customer Events `checkout_started` | currency, value, items[] |
| `add_shipping_info` | Customer Events | + shipping_tier |
| `add_payment_info` | Customer Events | currency, value, items[] |
| `purchase` | Customer Events `checkout_completed` | transaction_id, value, tax, shipping, coupon, currency ZAR, items[] |
| `search` / `view_search_results` | search form submit / search template | search_term, results |
| `sign_up` | newsletter form | method: newsletter |
| `generate_lead` | contact form | form: contact |
| `view_species` | species metaobject template | species_slug, species_name, evidence_level |
| `species_product_click` | product card click on a species page | species_slug, item_id |
| `mushroom_finder_start` / `mushroom_finder_complete` | `finder.js` | finder_top_species, finder_answers |
| `consent_update` | consent banner | consent_analytics, consent_ads |

**Parameter hygiene (POPIA).** No email, name, phone or address in any GA4 event. No health-interest labels: `species_slug` is a botanical identifier, never a symptom or condition, and the Finder pushes only the species slug and how many questions were answered — never the answers themselves. Enhanced conversions send hashed customer data to Google Ads only, only from the checkout pixel, and only when marketing consent is granted.

## 4. Consent Mode v2 (POPIA)

`snippets/consent-defaults.liquid` runs **before** GTM and sets `ad_storage`, `ad_user_data`, `ad_personalization` and `analytics_storage` to `denied`, with `functionality_storage` and `security_storage` granted, `wait_for_update: 500`, `ads_data_redaction: true` and `url_passthrough: true`. A stored choice in `localStorage.jm_consent` is replayed on every page load. The banner offers Accept all / Essential only / Manage (per-category), and "Cookie settings" in the footer reopens it. Inside checkout, the pixel mirrors the visitor's Shopify privacy state and subscribes to `visitorConsentCollected`. Every GA4 and Ads tag in the container carries explicit `consentSettings`, so nothing fires before consent even if a trigger matches.

## 5. Setup runbook (client-side; every step is `BLOCKED` until access is granted)

1. **GTM** — create the container, Admin → Import Container → `analytics/gtm-container.json` (merge). Replace `Const - Ads Conversion ID` and the three label constants. Confirm `Const - GA4 Measurement ID` is the right property. Preview, then publish. Paste the container ID into the theme setting `gtm_container_id`.
2. **GA4** — in the property, confirm the currency is ZAR and the timezone Africa/Johannesburg. Review Enhanced Measurement: keep page views, scroll and outbound clicks; **turn off** site search (the theme sends `search` itself) and form interactions (the theme sends `sign_up`/`generate_lead`). Mark `purchase`, `begin_checkout`, `add_to_cart`, `generate_lead`, `sign_up` and `mushroom_finder_complete` as key events. Add an internal-traffic filter for the client's IP and set it to Active. Register `species_slug`, `evidence_level`, `finder_top_species`, `item_list_name` as custom dimensions.
3. **Shopify** — Settings → Customer events → Add custom pixel; paste `analytics/shopify-customer-events-pixel.js`, set the GTM ID, permission "Required", save. In the Google & YouTube channel, **disable GA4 tagging** and keep only the Merchant Center product feed.
4. **Search Console** — verify the domain property by DNS TXT (works for both apex and `www`). Submit `https://justmushrooms.co.za/sitemap.xml`. Inspect and request indexing for `/`, `/collections/all`, `/pages/species`, each `/species/<slug>` and the top products. Watch Coverage and Rich Results for Product and FAQ.
5. **Google Ads** — link GA4 and Ads. Create conversions: Purchase (primary, from the GTM tag, value from `ecommerce.value`, ZAR), Add to cart and Begin checkout (secondary, "do not include in Conversions"). Enable enhanced conversions using the `user_data` variable. Confirm the Conversion Linker tag is firing so `gclid` survives. Build remarketing audiences from GA4. Do **not** import the same purchase from GA4 as well as the Ads tag — pick one, and the plan uses the Ads tag.
6. **Validation** — GTM Preview across home → collection → product → add to cart → checkout → purchase; GA4 DebugView for the same journey; Ads diagnostics for "recording conversions"; Tag Assistant to confirm exactly one GA4 config tag and one purchase per order. Test a real R255 order and confirm the value and currency in GA4 within 24 hours.

## 6. Validation checklist (record results in `docs/15-qa-results.md`)

- [ ] `BLOCKED` — one GA4 config tag on every page, zero duplicates
- [ ] `BLOCKED` — `purchase` fires once per order with the correct ZAR value
- [ ] `BLOCKED` — Ads conversion fires once, value matches GA4
- [ ] `BLOCKED` — no tag fires before consent; denial is honoured on reload
- [ ] `BLOCKED` — UA tag removed from the store
- [ ] `BLOCKED` — GSC verified, sitemap submitted, no coverage errors
- [ ] `PASS` — the theme itself contains no hardcoded GA4/UA/Ads tag (asserted by `preview/tests/run.mjs`)
- [ ] `PASS` — consent defaults deny ads and analytics before choice (asserted)
- [ ] `PASS` — storefront events push clean parameters with ZAR currency (asserted)
