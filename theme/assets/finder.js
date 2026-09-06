/* Mushroom Finder — two questions, three bottles. Preference in, product out. */
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
      if (!started) { started = true; window.JM && JM.track('mushroom_finder_start', {});
      }
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
    // Built node by node with textContent rather than concatenated into innerHTML: the
    // values come from metaobjects, so an apostrophe or an ampersand in a species name is
    // enough to corrupt the markup, quite apart from the injection surface.
    const el = (tag, cls, text) => {
      const n = document.createElement(tag);
      if (cls) n.className = cls;
      if (text != null) n.textContent = text;
      return n;
    };
    const link = (cls, href, text) => { const a = el('a', cls, text); a.href = href; return a; };
    ranked.forEach(slug => {
      const sp = data.species[slug];
      const card = el('div', 'card card--species');
      const body = el('div', 'card__body');
      const title = el('h3', 'card__title');
      title.appendChild(link('', sp.product_url || sp.url, sp.name));
      const actions = el('div', 'card__actions');
      if (sp.product_url) actions.appendChild(link('btn btn--primary', sp.product_url, 'Shop ' + (sp.name || '')));
      actions.appendChild(link('btn btn--secondary', sp.url, 'Meet the mushroom'));
      body.append(title, el('p', 'card__sub sci', sp.sci), el('p', 'card__text', sp.blurb || ''), actions);
      card.appendChild(body);
      const li = document.createElement('li');
      li.appendChild(card);
      list.appendChild(li);
    });
    const grid = list.closest('.bgrid'); if (grid) { grid.dataset.count = String(ranked.length); grid.dataset.odd = String(ranked.length % 2 === 1); }
    result.classList.add('is-active');
    window.JM && JM.track('mushroom_finder_complete', { finder_top_species: ranked[0] || 'none', finder_answers: Object.keys(answers).length });
  }
  show(0);
})();
