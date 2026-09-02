import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { placeholderSvg } from './shims.mjs';

const DIST = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(path.dirname(fileURLToPath(import.meta.url)), 'dist');
const BASE = process.env.JM_BASE || '/justmushrooms';

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else acc.push(p);
  }
  return acc;
}

const files = walk(DIST);
const prefixAbs = (t) => {
  t = t.replace(/(href|src|action)=(["'])\/(?!\/|justmushrooms\/)/g, `$1=$2${BASE}/`);
  t = t.replace(/url\((['"]?)\/(?!\/|justmushrooms\/)/g, `url($1${BASE}/`);
  t = t.replace(/srcset="([^"]*)"/g, (_, s) => 'srcset="' + s.replace(/(^|,\s*)\/(?!justmushrooms\/)/g, `$1${BASE}/`) + '"');
  return t;
};

for (const p of files) {
  if (!/\.(html|css|js)$/.test(p)) continue;
  fs.writeFileSync(p, prefixAbs(fs.readFileSync(p, 'utf8')));
}

const imgs = new Set();
for (const p of files) {
  if (!p.endsWith('.html')) continue;
  const t = fs.readFileSync(p, 'utf8');
  for (const m of t.matchAll(/\/img\/([^"'\s]+\.svg)/g)) imgs.add(m[1]);
}
const imgDir = path.join(DIST, 'img');
fs.mkdirSync(imgDir, { recursive: true });
for (const name of imgs) {
  const m = /^(.+)-(\d+)x(\d+)\.svg$/.exec(name);
  if (!m) continue;
  fs.writeFileSync(path.join(imgDir, name), placeholderSvg(Number(m[2]), Number(m[3]), m[1]));
}
console.log('rewrote', files.filter(p => /\.(html|css|js)$/.test(p)).length, 'files,', imgs.size, 'placeholders');
