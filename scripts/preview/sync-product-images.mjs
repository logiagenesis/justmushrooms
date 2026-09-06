// Materialise the preview's product photographs from data/live-product-images/.
//
// preview/assets/img/product-<handle>.jpg is a byte-for-byte copy of
// data/live-product-images/<handle>.jpg — the same 23 phone photographs, ~1 MB each, were
// committed twice for 24.6 MB of pure duplication (GT-AUD-JM-2026-09-05 L5). They are a
// pure rename of the source, so they are derived at build time instead and git-ignored.
//
// Runs automatically at the top of render.mjs; safe to run on its own.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(fileURLToPath(new URL('../..', import.meta.url)));
const SRC = path.join(ROOT, 'data/live-product-images');
const OUT = path.join(ROOT, 'preview/assets/img');

export function syncProductImages({ quiet = false } = {}) {
  if (!fs.existsSync(SRC)) return 0;
  fs.mkdirSync(OUT, { recursive: true });
  let copied = 0;
  for (const file of fs.readdirSync(SRC)) {
    if (!file.endsWith('.jpg')) continue;
    const from = path.join(SRC, file);
    const to = path.join(OUT, `product-${file}`);
    // Copy when absent or stale; the Drive refresh may legitimately overwrite these.
    const stale = !fs.existsSync(to) || fs.statSync(to).size !== fs.statSync(from).size;
    if (stale) { fs.copyFileSync(from, to); copied++; }
  }
  if (!quiet && copied) console.log(`product images: materialised ${copied} from data/live-product-images/`);
  return copied;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const n = syncProductImages();
  console.log(`product images: ${n} copied, ${fs.readdirSync(OUT).filter((f) => f.startsWith('product-')).length} present`);
}
