/**
 * Shopify Customer Events custom pixel (Settings → Customer events → Add custom pixel).
 * Loads the SAME GTM container inside the checkout sandbox so checkout/purchase events reach GA4 and Ads once.
 * Permission: "Required" for analytics/marketing per POPIA consent (Shopify's customerPrivacy API is honoured).
 * Replace GTM-XXXXXXX with the live container ID (same as theme setting gtm_container_id).
 *
 * Storefront pages already push view_item, add_to_cart etc. from the theme, so this pixel only forwards
 * checkout-stage events + purchase, to avoid double-firing. Do NOT subscribe to product_viewed / product_added_to_cart here.
 */
const GTM_ID = 'GTM-XXXXXXX';
window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }
// Consent Mode v2 defaults mirror the theme; Shopify passes the visitor's privacy status into the sandbox.
const consent = init.customerPrivacy || {};
gtag('consent', 'default', {
  ad_storage: consent.marketingAllowed ? 'granted' : 'denied',
  ad_user_data: consent.marketingAllowed ? 'granted' : 'denied',
  ad_personalization: consent.marketingAllowed ? 'granted' : 'denied',
  analytics_storage: consent.analyticsProcessingAllowed ? 'granted' : 'denied'
});
api.customerPrivacy.subscribe('visitorConsentCollected', (e) => {
  gtag('consent', 'update', {
    ad_storage: e.customerPrivacy.marketingAllowed ? 'granted' : 'denied',
    ad_user_data: e.customerPrivacy.marketingAllowed ? 'granted' : 'denied',
    ad_personalization: e.customerPrivacy.marketingAllowed ? 'granted' : 'denied',
    analytics_storage: e.customerPrivacy.analyticsProcessingAllowed ? 'granted' : 'denied'
  });
});
(function (w, d, s, l, i) { w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' }); const f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l !== 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f); })(window, document, 'script', 'dataLayer', GTM_ID);

const items = (lines) => (lines || []).map((l, i) => ({
  item_id: String(l.variant?.id), item_name: l.variant?.product?.title, item_variant: l.variant?.title !== 'Default Title' ? l.variant?.title : undefined,
  item_brand: 'Just Mushrooms', price: Number(l.variant?.price?.amount), quantity: l.quantity, index: i
}));
const push = (event, checkout, extra) => {
  window.dataLayer.push({ ecommerce: null });
  window.dataLayer.push({ event, ecommerce: Object.assign({ currency: checkout.currencyCode || 'ZAR', value: Number(checkout.totalPrice?.amount || checkout.subtotalPrice?.amount || 0), items: items(checkout.lineItems) }, extra || {}) });
};
analytics.subscribe('checkout_started', (e) => push('begin_checkout', e.data.checkout));
analytics.subscribe('checkout_shipping_info_submitted', (e) => push('add_shipping_info', e.data.checkout, { shipping_tier: e.data.checkout.delivery?.selectedDeliveryOptions?.[0]?.title }));
analytics.subscribe('payment_info_submitted', (e) => push('add_payment_info', e.data.checkout));
analytics.subscribe('checkout_completed', (e) => {
  const c = e.data.checkout;
  // Enhanced conversions: hashed by Google's tag; only pushed when marketing consent is granted (tag consent settings enforce this too).
  if (c.email || c.phone) window.dataLayer.push({ user_data: { email: c.email || undefined, phone_number: c.phone || undefined, address: c.shippingAddress ? { first_name: c.shippingAddress.firstName, last_name: c.shippingAddress.lastName, postal_code: c.shippingAddress.zip, country: c.shippingAddress.countryCode } : undefined } });
  push('purchase', c, {
    transaction_id: c.order?.id || c.token,
    tax: Number(c.totalTax?.amount || 0),
    shipping: Number(c.shippingLine?.price?.amount || 0),
    coupon: (c.discountApplications || []).map(d => d.title).join(',') || undefined
  });
});
