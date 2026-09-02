/* Mushroom Finder — goal-based, never diagnostic. Maps stated preferences to species pages + products.
   Copy here is limited to preferences ("I want to support...") and never mentions conditions or outcomes. */
(function () {
  'use strict';
  const root = document.querySelector('[data-finder]'); if (!root) return;
  const data = JSON.parse(root.querySelector('script[type="application/json"]').textContent);
  const steps = Array.from(root.querySelectorAll('.finder__step'));
  const result = root.querySelector('.finder__result');
  const progress = root.querySelectorAll('.finder__progress i');
  const answers = {}; let idx = 0; let started = false;
  function show(i) { steps.forEach((s, n) => s.classList.toggle('is-active', n === i)); progress.forEach((p, n) => p.classList.toggle('is-done', n < i)); result.classList.remove('is-active'); }
  root.addEventListener('click', (e) => {
    const opt = e.target.closest('.finder__opt'); if (opt) {
      if (!started) { started = true; window.JM && JM.track('mushroom_finder_start', {}); }
      const step = opt.closest('.finder__step'); step.querySelectorAll('.finder__opt').forEach(o => o.setAttribute('aria-pressed', 'false')); opt.setAttribute('aria-pressed', 'true');
      answers[step.dataset.key] = opt.dataset.value;
      setTimeout(() => { idx++; if (idx < steps.length) show(idx); else finish(); }, 180);
    }
    if (e.target.closest('[data-finder-back]')) { idx = Math.max(0, idx - 1); show(idx); }
    if (e.target.closest('[data-finder-restart]')) { idx = 0; Object.keys(answers).forEach(k => delete answers[k]); show(0); }
  });
  function finish() {
    steps.forEach(s => s.classList.remove('is-active')); progress.forEach(p => p.classList.add('is-done'));
    const scores = {};
    Object.keys(answers).forEach(k => { const rule = (data.rules[k] || {})[answers[k]] || []; rule.forEach((slug, i) => { scores[slug] = (scores[slug] || 0) + (3 - Math.min(i, 2)); }); });
    const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]).map(x => x[0]).filter(s => data.species[s]).slice(0, 3);
    const list = result.querySelector('[data-finder-species]'); list.innerHTML = '';
    ranked.forEach(slug => {
      const sp = data.species[slug];
      const li = document.createElement('li');
      li.innerHTML = '<div class="card card--species"><div class="card__body"><span class="badge badge--' + sp.tier_class + '">' + sp.tier + '</span><h3 class="card__title"><a href="' + sp.url + '">' + sp.name + '</a></h3><p class="card__sub sci">' + sp.sci + '</p><p class="card__text">' + sp.blurb + '</p><div class="card__actions"><a class="btn btn--secondary" href="' + sp.url + '">Explore species</a>' + (sp.product_url ? '<a class="btn btn--primary" href="' + sp.product_url + '">Shop</a>' : '') + '</div></div></div>';
      list.appendChild(li);
    });
    const grid = list.closest('.bgrid'); if (grid) { grid.dataset.count = String(ranked.length); grid.dataset.odd = String(ranked.length % 2 === 1); }
    result.classList.add('is-active');
    window.JM && JM.track('mushroom_finder_complete', { finder_top_species: ranked[0] || 'none', finder_answers: Object.keys(answers).length });
  }
  show(0);
})();
