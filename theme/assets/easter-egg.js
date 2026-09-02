/* "The underground is alive." — hidden mycelium network. 7 clicks on the spore node, or type "mycelium".
   Never blocks interaction (pointer-events:none), honours prefers-reduced-motion (static frame only), pure canvas, no deps. */
(function () {
  'use strict';
  const node = document.querySelector('[data-egg-node]'); if (!node) return;
  const facts = JSON.parse((document.getElementById('egg-facts') || {}).textContent || '[]');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let clicks = 0, buffer = '', active = false, canvas, ctx, raf, t0;
  node.addEventListener('click', () => { clicks++; node.style.opacity = String(Math.min(1, .55 + clicks * .06)); if (clicks >= 7) trigger(); });
  document.addEventListener('keydown', (e) => { if (e.target.matches('input,textarea,select,[contenteditable]')) return; buffer = (buffer + e.key.toLowerCase()).slice(-8); if (buffer.endsWith('mycelium')) trigger(); });
  function trigger() {
    if (active) return; active = true; clicks = 0;
    canvas = document.createElement('canvas'); canvas.id = 'myc-egg'; canvas.setAttribute('aria-hidden', 'true'); document.body.appendChild(canvas);
    ctx = canvas.getContext('2d'); resize(); window.addEventListener('resize', resize);
    requestAnimationFrame(() => canvas.classList.add('is-on'));
    const branches = seed(); t0 = performance.now();
    if (reduced) { for (let i = 0; i < 400; i++) step(branches, 1); } else { (function loop() { step(branches, 1); if (performance.now() - t0 < 9000) raf = requestAnimationFrame(loop); })(); }
    toast(); setTimeout(end, 14000);
    window.JM && JM.track('easter_egg_found', { method: buffer.endsWith('mycelium') ? 'keyword' : 'clicks' });
  }
  function resize() { canvas.width = window.innerWidth * devicePixelRatio; canvas.height = window.innerHeight * devicePixelRatio; ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0); }
  function seed() { const b = []; const n = 14; for (let i = 0; i < n; i++) b.push({ x: Math.random() * window.innerWidth, y: window.innerHeight + 10, a: -Math.PI / 2 + (Math.random() - .5) * .8, w: 1.4, life: 0 }); return b; }
  function step(b, k) {
    ctx.strokeStyle = 'rgba(143,247,200,0.55)'; ctx.lineCap = 'round';
    for (let i = b.length - 1; i >= 0; i--) {
      const s = b[i]; const nx = s.x + Math.cos(s.a) * 3 * k, ny = s.y + Math.sin(s.a) * 3 * k;
      ctx.lineWidth = s.w; ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(nx, ny); ctx.stroke();
      s.x = nx; s.y = ny; s.a += (Math.random() - .5) * .5; s.life++;
      if (Math.random() < .035 && b.length < 260 && s.w > .35) b.push({ x: s.x, y: s.y, a: s.a + (Math.random() < .5 ? -1 : 1) * (0.5 + Math.random() * .6), w: s.w * .72, life: 0 });
      if (s.y < -10 || s.x < -10 || s.x > window.innerWidth + 10 || s.life > 500) b.splice(i, 1);
      if (Math.random() < .01) { ctx.fillStyle = 'rgba(201,162,74,0.8)'; ctx.beginPath(); ctx.arc(s.x, s.y, 1.2, 0, 7); ctx.fill(); }
    }
  }
  function toast() {
    const f = facts.length ? facts[Math.floor(Math.random() * facts.length)] : null;
    const el = document.createElement('div'); el.className = 'egg-toast'; el.setAttribute('role', 'status');
    el.innerHTML = '<strong>The underground is alive.</strong>' + (f ? '<span>' + f.text + '</span><small>Source: <a href="' + f.url + '" rel="noopener" target="_blank">' + f.source + '</a></small>' : '');
    document.body.appendChild(el); requestAnimationFrame(() => el.classList.add('is-on')); setTimeout(() => { el.classList.remove('is-on'); setTimeout(() => el.remove(), 800); }, 11000);
  }
  function end() { cancelAnimationFrame(raf); canvas.classList.remove('is-on'); setTimeout(() => { canvas.remove(); active = false; }, 1300); window.removeEventListener('resize', resize); }
})();
