// Decodes a saved Drive download and writes a web-sized JPEG into preview/assets/img.
// The generated 4K originals are far larger than any slot in the theme requests, so they are
// resized once here rather than shipped whole - the demo loads in a browser, not a print shop.
// Usage: node scripts/preview/ingest-image.mjs <saved-tool-result.json> <slug> [maxWidth]
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const [src, slug, maxW = '1600'] = process.argv.slice(2);
if (!src || !slug) { console.error('usage: ingest-image.mjs <saved.json> <slug> [maxWidth]'); process.exit(1); }

const buf = Buffer.from(JSON.parse(fs.readFileSync(src, 'utf8')).content, 'base64');
const outDir = new URL('../../preview/assets/img/', import.meta.url);
fs.mkdirSync(outDir, { recursive: true });
const out = path.join(fileURLToPathSafe(outDir), `${slug}.jpg`);
const info = await sharp(buf)
  .resize({ width: Number(maxW), withoutEnlargement: true })
  .jpeg({ quality: 78, progressive: true, mozjpeg: true })
  .toFile(out);
console.log(`${slug}: ${info.width}x${info.height}  ${(fs.statSync(out).size / 1024).toFixed(0)} KB`);

function fileURLToPathSafe(u) { return decodeURIComponent(new URL(u).pathname); }
