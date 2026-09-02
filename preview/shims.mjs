// Shopify Liquid shims for LiquidJS. Approximate, deterministic, good enough for layout/SEO/a11y/perf QA.
import fs from 'node:fs';
import path from 'node:path';
const kw = (args) => { const o = {}; for (const a of args) { if (Array.isArray(a) && a.length === 2) o[a[0]] = a[1]; } return o; };
const money = (c) => 'R ' + (Number(c || 0) / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
export function registerFilters(engine, ctx) {
  const locale = ctx.locale;
  const t = (key, ...args) => { const o = kw(args); let s = key.split('.').reduce((a, k) => (a && a[k] !== undefined ? a[k] : undefined), locale); if (s && typeof s === 'object') s = s.other || s.one || ''; if (s === undefined) return key; return String(s).replace(/\{\{\s*(\w+)\s*\}\}/g, (_, k) => o[k] ?? ''); };
  engine.registerFilter('t', t);
  engine.registerFilter('money', money);
  engine.registerFilter('money_without_currency', (c) => (Number(c || 0) / 100).toFixed(2));
  engine.registerFilter('money_without_trailing_zeros', (c) => 'R ' + Math.round(Number(c || 0) / 100));
  engine.registerFilter('asset_url', (n) => `/assets/${n}`);
  engine.registerFilter('stylesheet_tag', (u) => `<link rel="stylesheet" href="${u}">`);
  engine.registerFilter('font_url', () => '');
  engine.registerFilter('font_face', () => '');
  engine.registerFilter('preload_tag', () => '');
  engine.registerFilter('handle', (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
  engine.registerFilter('handleize', (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
  engine.registerFilter('within', (u) => u);
  engine.registerFilter('format_address', (a) => a ? `${a.address1 || ''}<br>${a.city || ''}` : '');
  engine.registerFilter('default_errors', () => '');
  engine.registerFilter('payment_button', () => '<button type="button" class="shopify-payment-button__button shopify-payment-button__button--unbranded">Buy it now</button>');
  engine.registerFilter('metafield_tag', (m) => (m && m.value !== undefined ? m.value : (m || '')));
  engine.registerFilter('image_url', (img, ...args) => {
    const o = kw(args); if (!img) return ''; const w = Number(o.width || 1200); const h = o.height ? Number(o.height) : Math.round(w * (img.ratio || 1.25));
    return `/img/${img.slug || 'placeholder'}-${w}x${h}.svg`;
  });
  engine.registerFilter('image_tag', (url, ...args) => {
    const o = kw(args); const m = /-(\d+)x(\d+)\.svg$/.exec(url || ''); const w = m ? Number(m[1]) : 1200, h = m ? Number(m[2]) : 1500;
    const widths = String(o.widths || '360,720,1200').split(',').map(x => Number(x.trim())).filter(Boolean);
    const base = (url || '').replace(/-\d+x\d+\.svg$/, '');
    const srcset = widths.map(ww => `${base}-${ww}x${Math.round(ww * h / w)}.svg ${ww}w`).join(', ');
    const attrs = [`src="${url}"`, `srcset="${srcset}"`, `sizes="${o.sizes || '100vw'}"`, `width="${w}"`, `height="${h}"`, `alt="${String(o.alt ?? '').replace(/"/g, '&quot;')}"`, `loading="${o.loading || 'lazy'}"`, o.fetchpriority ? `fetchpriority="${o.fetchpriority}"` : '', o.class ? `class="${o.class}"` : '', o.style ? `style="${o.style}"` : '', o['data-main-image'] ? 'data-main-image' : '', 'decoding="async"'].filter(Boolean).join(' ');
    return `<img ${attrs}>`;
  });
  engine.registerFilter('format_code', (s) => s);
  engine.registerFilter('at_most', (a, b) => Math.min(Number(a), Number(b)));
  engine.registerFilter('at_least', (a, b) => Math.max(Number(a), Number(b)));
}
export function placeholderSvg(w, h, slug) {
  const hue = [...slug].reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><defs><radialGradient id="g" cx="50%" cy="40%" r="70%"><stop offset="0" stop-color="hsl(${hue} 30% 22%)"/><stop offset="1" stop-color="#0b0e0c"/></radialGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><circle cx="${w / 2}" cy="${h * .42}" r="${Math.min(w, h) * .22}" fill="hsl(${hue} 35% 35%)" opacity=".7"/><rect x="${w * .44}" y="${h * .5}" width="${w * .12}" height="${h * .3}" rx="${w * .05}" fill="hsl(${hue} 25% 60%)" opacity=".6"/></svg>`;
}
