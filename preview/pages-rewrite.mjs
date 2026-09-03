import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { placeholderSvg, ASSET_DIR } from './shims.mjs';

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
  for (const m of t.matchAll(/\/img\/([^"'\s]+\.(?:svg|jpg))/g)) imgs.add(m[1]);
}
const imgDir = path.join(DIST, 'img');
fs.mkdirSync(imgDir, { recursive: true });
// Two kinds of image slot. A slug with a real photograph in preview/assets/img gets that photograph
// resized to each width the srcset asks for, so the demo exercises the same responsive path the theme
// will use on Shopify. Everything else keeps the generated placeholder.
let real = 0, fake = 0;
for (const name of imgs) {
  const m = /^(.+)-(\d+)x(\d+)\.(svg|jpg)$/.exec(name);
  if (!m) continue;
  const [, slug, w, h, ext] = m;
  if (ext === 'svg') { fs.writeFileSync(path.join(imgDir, name), placeholderSvg(Number(w), Number(h), slug)); fake++; continue; }
  await sharp(path.join(ASSET_DIR, `${slug}.jpg`))
    .resize({ width: Number(w), height: Number(h), fit: 'cover', position: 'attention', withoutEnlargement: false })
    .jpeg({ quality: 76, progressive: true, mozjpeg: true })
    .toFile(path.join(imgDir, name));
  real++;
}
console.log('rewrote', files.filter(p => /\.(html|css|js)$/.test(p)).length, 'files,', real, 'photographs,', fake, 'placeholders');
