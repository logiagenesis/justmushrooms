import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
import { placeholderSvg } from './shims.mjs';
const DIST = path.resolve(new URL('.', import.meta.url).pathname, 'dist');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.json': 'application/json' };
http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  const m = /^\/img\/(.+)-(\d+)x(\d+)\.svg$/.exec(url);
  if (m) { res.writeHead(200, { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=31536000' }); return res.end(placeholderSvg(Number(m[2]), Number(m[3]), m[1])); }
  if (url.endsWith('.js') && url.startsWith('/cart')) { res.writeHead(200, { 'Content-Type': 'application/json' }); return res.end(JSON.stringify({ item_count: 0, items: [], total_price: 0 })); }
  if (url.startsWith('/cart?section_id=')) { res.writeHead(200, { 'Content-Type': 'text/html' }); return res.end('<div id="CartDrawer"><div class="drawer__panel"></div></div>'); }
  let f = path.join(DIST, url === '/' ? 'index.html' : url);
  if (!path.extname(f)) f += '.html';
  if (!fs.existsSync(f)) { res.writeHead(404); return res.end('not found'); }
  res.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream', 'Cache-Control': 'public, max-age=600' }); fs.createReadStream(f).pipe(res);
}).listen(process.env.PORT || 4173, () => console.log('preview on http://127.0.0.1:' + (process.env.PORT || 4173)));
