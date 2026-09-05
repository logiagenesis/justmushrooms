/* Mycelia theme JS — no dependencies, no jQuery. Everything is progressive enhancement. */
(function () {
  'use strict';
  const JM = (window.JM = window.JM || {});
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  JM.reducedMotion = reduced;

  /* ---------- analytics helper: one dataLayer, clean params only ---------- */
  window.dataLayer = window.dataLayer || [];
  JM.track = function (event, params) {
    try {
      const payload = Object.assign({ event: event }, params || {});
      if (payload.ecommerce) window.dataLayer.push({ ecommerce: null });
      window.dataLayer.push(payload);
    } catch (e) { /* never break shopping because of analytics */ }
  };
  JM.itemFromEl = function (el) {
    return {
      item_id: el.dataset.itemId, item_name: el.dataset.itemName, item_brand: 'Just Mushrooms',
      item_category: el.dataset.itemCategory || undefined, item_variant: el.dataset.itemVariant || undefined,
      price: parseFloat(el.dataset.itemPrice || '0'), quantity: parseInt(el.dataset.itemQty || '1', 10),
      index: el.dataset.itemIndex ? parseInt(el.dataset.itemIndex, 10) : undefined, item_list_name: el.dataset.listName || undefined
    };
  };

  /* ---------- scroll reveals ---------- */
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (reduced || !JM.motion || !('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('is-visible')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(e => io.observe(e));
  }

  /* ---------- drawers (menu, cart, search) ---------- */
  let lastFocus = null;
  function openDrawer(id) {
    const d = document.getElementById(id); if (!d) return;
    lastFocus = document.activeElement;
    d.classList.add('is-open'); d.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden';
    const f = d.querySelector('[data-autofocus], button, a, input'); if (f) f.focus();
    d.addEventListener('keydown', trapFocus);
  }
  function closeDrawer(id) {
    const d = document.getElementById(id); if (!d) return;
    d.classList.remove('is-open'); d.setAttribute('aria-hidden', 'true'); document.body.style.overflow = '';
    d.removeEventListener('keydown', trapFocus);
    if (lastFocus) lastFocus.focus();
  }
  function trapFocus(e) {
    if (e.key === 'Escape') { closeDrawer(e.currentTarget.id); return; }
    if (e.key !== 'Tab') return;
    const f = Array.from(e.currentTarget.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(el => !el.disabled && el.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  JM.openDrawer = openDrawer; JM.closeDrawer = closeDrawer;
  document.addEventListener('click', (e) => {
    const o = e.target.closest('[data-open-drawer]'); if (o) { e.preventDefault(); openDrawer(o.dataset.openDrawer); if (o.dataset.openDrawer === 'CartDrawer') JM.track('view_cart', JM.cartEcommerce()); return; }
    const c = e.target.closest('[data-close-drawer]'); if (c) { e.preventDefault(); closeDrawer(c.dataset.closeDrawer); }
  });

  /* ---------- cart (Ajax API) ---------- */
  JM.cart = null;
  JM.cartEcommerce = function () {
    const c = JM.cart; if (!c) return {};
    return { ecommerce: { currency: JM.currency, value: c.total_price / 100, items: c.items.map((it, i) => ({ item_id: String(it.variant_id), item_name: it.product_title, item_variant: it.variant_title !== 'Default Title' ? it.variant_title : undefined, price: it.final_price / 100, quantity: it.quantity, index: i, item_brand: 'Just Mushrooms' })) } };
  };
  async function fetchCart() { const r = await fetch(JM.routes.cart_url + '.js', { headers: { Accept: 'application/json' } }); JM.cart = await r.json(); return JM.cart; }
  async function renderCartDrawer() {
    const wrap = document.getElementById('CartDrawer'); if (!wrap) return;
    const r = await fetch(JM.routes.cart_url + '?section_id=cart-drawer');
    const html = await r.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const fresh = doc.querySelector('#CartDrawer .drawer__panel');
    const cur = wrap.querySelector('.drawer__panel');
    if (fresh && cur) cur.innerHTML = fresh.innerHTML;
    document.querySelectorAll('[data-cart-count]').forEach(el => { el.textContent = JM.cart ? JM.cart.item_count : ''; el.hidden = !JM.cart || JM.cart.item_count === 0; });
  }
  JM.refreshCart = async function () { await fetchCart(); await renderCartDrawer(); };

  document.addEventListener('submit', async (e) => {
    const form = e.target.closest('form[data-product-form]'); if (!form) return;
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]'); const msg = form.querySelector('[data-form-message]');
    btn.setAttribute('aria-disabled', 'true'); btn.classList.add('is-loading');
    try {
      const fd = new FormData(form); fd.append('sections', 'cart-drawer'); fd.append('sections_url', window.location.pathname);
      const r = await fetch(JM.routes.cart_add_url + '.js', { method: 'POST', body: fd, headers: { Accept: 'application/json' } });
      const data = await r.json();
      if (!r.ok) throw new Error(data.description || JM.strings.cart_error);
      await fetchCart();
      const item = { item_id: String(data.variant_id), item_name: data.product_title, item_variant: data.variant_title !== 'Default Title' ? data.variant_title : undefined, price: data.final_price / 100, quantity: parseInt(fd.get('quantity') || '1', 10), item_brand: 'Just Mushrooms' };
      JM.track('add_to_cart', { ecommerce: { currency: JM.currency, value: item.price * item.quantity, items: [item] } });
      if (form.dataset.speciesClick) JM.track('species_product_click', { species_slug: form.dataset.speciesClick, item_id: item.item_id });
      await renderCartDrawer();
      if (document.getElementById('CartDrawer')) openDrawer('CartDrawer'); else window.location.href = JM.routes.cart_url;
      if (msg) { msg.hidden = true; }
    } catch (err) {
      if (msg) { msg.textContent = err.message; msg.hidden = false; msg.className = 'form-message form-message--error'; }
    } finally { btn.removeAttribute('aria-disabled'); btn.classList.remove('is-loading'); }
  });

  document.addEventListener('click', async (e) => {
    const q = e.target.closest('[data-line-qty]'); const rm = e.target.closest('[data-line-remove]');
    if (!q && !rm) return;
    e.preventDefault();
    const el = q || rm; const line = parseInt(el.dataset.line, 10);
    let qty = 0;
    if (q) { const input = el.parentElement.querySelector('input'); qty = parseInt(input.value, 10) + (el.dataset.lineQty === 'plus' ? 1 : -1); if (qty < 0) qty = 0; }
    const before = JM.cart || await fetchCart();
    const item = before.items[line - 1];
    const r = await fetch(JM.routes.cart_change_url + '.js', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ line: line, quantity: qty }) });
    if (r.ok) {
      const after = await r.json(); JM.cart = after;
      if (item) {
        const delta = qty - item.quantity; const ev = delta < 0 ? 'remove_from_cart' : 'add_to_cart';
        JM.track(ev, { ecommerce: { currency: JM.currency, value: Math.abs(delta) * item.final_price / 100, items: [{ item_id: String(item.variant_id), item_name: item.product_title, price: item.final_price / 100, quantity: Math.abs(delta), item_brand: 'Just Mushrooms' }] } });
      }
      if (document.querySelector('.cart-page')) window.location.reload(); else await renderCartDrawer();
    }
  });

  /* ---------- quantity buttons (product form) ---------- */
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-qty]'); if (!b) return;
    const input = b.parentElement.querySelector('input'); let v = parseInt(input.value, 10) || 1;
    v = b.dataset.qty === 'plus' ? v + 1 : Math.max(1, v - 1); input.value = v; input.dispatchEvent(new Event('change', { bubbles: true }));
  });

  /* ---------- variant selection ---------- */
  document.querySelectorAll('[data-variant-select]').forEach(sel => {
    sel.addEventListener('change', () => {
      const form = sel.closest('form'); const opt = sel.options[sel.selectedIndex];
      const idInput = form.querySelector('input[name="id"]'); idInput.value = opt.value;
      const btn = form.querySelector('[type="submit"]'); const avail = opt.dataset.available === 'true';
      btn.disabled = !avail; btn.querySelector('span').textContent = avail ? JM.strings.add_to_cart : JM.strings.sold_out;
      const price = document.querySelector('[data-price-current]'); if (price && opt.dataset.price) price.textContent = opt.dataset.price;
      const url = new URL(window.location); url.searchParams.set('variant', opt.value); history.replaceState({}, '', url);
    });
  });

  /* ---------- gallery ---------- */
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-thumb]'); if (!t) return;
    const main = document.querySelector('[data-main-image]'); if (!main) return;
    main.src = t.dataset.src; main.srcset = t.dataset.srcset || ''; main.alt = t.querySelector('img').alt;
    t.parentElement.querySelectorAll('[data-thumb]').forEach(x => x.removeAttribute('aria-current')); t.setAttribute('aria-current', 'true');
  });

  /* ---------- sticky add to cart ---------- */
  function initStickyATC() {
    const bar = document.querySelector('.sticky-atc'); const buy = document.querySelector('.pdp__buy'); if (!bar || !buy) return;
    const io = new IntersectionObserver(([en]) => { bar.classList.toggle('is-visible', !en.isIntersecting && en.boundingClientRect.top < 0); }, { threshold: 0 });
    io.observe(buy);
    bar.querStickyElector = null;
    const b = bar.querySelector('[data-sticky-add]'); if (b) b.addEventListener('click', () => { const f = document.querySelector('form[data-product-form]'); if (f) f.requestSubmit(); });
  }

  /* ---------- select_item tracking on cards ---------- */
  document.addEventListener('click', (e) => {
    const a = e.target.closest('[data-item-id] a[href*="/products/"]'); if (!a) return;
    const card = a.closest('[data-item-id]');
    JM.track('select_item', { ecommerce: { item_list_name: card.dataset.listName || 'grid', items: [JM.itemFromEl(card)] } });
    if (card.dataset.speciesClick) JM.track('species_product_click', { species_slug: card.dataset.speciesClick, item_id: card.dataset.itemId });
  });

  /* ---------- predictive search ---------- */
  function initSearch() {
    const panel = document.getElementById('SearchPanel'); if (!panel) return;
    const input = panel.querySelector('input[name="q"]'); const out = panel.querySelector('.search-results'); let t;
    input.addEventListener('input', () => {
      clearTimeout(t); const q = input.value.trim(); if (q.length < 2) { out.innerHTML = ''; return; }
      t = setTimeout(async () => {
        const r = await fetch(JM.routes.predictive_search_url + '?q=' + encodeURIComponent(q) + '&resources[type]=product,page,article&resources[limit]=6&section_id=predictive-search');
        if (!r.ok) return; const html = await r.text(); const doc = new DOMParser().parseFromString(html, 'text/html');
        const res = doc.querySelector('#predictive-search-results'); out.innerHTML = res ? res.innerHTML : '';
      }, 220);
    });
    panel.querySelector('form').addEventListener('submit', () => { JM.track('search', { search_term: input.value.trim() }); });
  }

  /* ---------- newsletter / contact lead events ---------- */
  document.addEventListener('submit', (e) => {
    const f = e.target;
    if (f.matches('[data-newsletter-form]')) JM.track('sign_up', { method: 'newsletter' });
    if (f.matches('[data-contact-form]')) JM.track('generate_lead', { form: 'contact' });
  });

  /* ---------- header mega menu close on outside click ---------- */
  document.addEventListener('click', (e) => { document.querySelectorAll('.header__nav details[open]').forEach(d => { if (!d.contains(e.target)) d.removeAttribute('open'); }); });

  document.addEventListener('DOMContentLoaded', () => { initReveal(); initStickyATC(); initSearch(); fetchCart().then(renderCartDrawer).catch(() => {}); });
})();
