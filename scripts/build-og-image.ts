import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const svgPath = resolve(root, 'docs/public/og-image.svg');
const pngPath = resolve(root, 'docs/public/og-image.png');

const svg = readFileSync(svgPath, 'utf-8');

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  background: 'rgba(0,0,0,0)',
  font: {
    loadSystemFonts: true,
    defaultFontFamily: 'Helvetica',
  },
});

const png = resvg.render().asPng();
writeFileSync(pngPath, png);

console.log(`Wrote ${pngPath} (${(png.length / 1024).toFixed(1)} KB, 1200x630)`);
