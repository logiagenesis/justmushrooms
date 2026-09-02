// Renders the Mycelia theme's JSON templates to static HTML under preview/dist using LiquidJS + Shopify shims.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { registerFilters, placeholderSvg } from './shims.mjs';
import { buildContext } from './fixtures.mjs';
const require = createRequire(import.meta.url);
const { Liquid } = require('liquidjs');
const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const THEME = path.join(ROOT, 'theme'); const DIST = path.join(ROOT, 'preview/dist');
const read = (p) => fs.readFileSync(p, 'utf8');
const ctxBase = buildContext();
const locale = JSON.parse(read(path.join(THEME, 'locales/en.default.json')));
