import fs from 'node:fs';
const root = new URL('../', import.meta.url);
const modelPath = new URL('miniapp/src/shared/breakthrough-model.js', root);
const catalog = JSON.parse(fs.readFileSync(new URL('miniapp/src/shared/catalog.json', root)));
const mapping = JSON.parse(fs.readFileSync(new URL('scripts/jx3-item-map.json', root)));
const keys = Object.fromEntries(catalog.items.filter(i => mapping[i.name]).map(i => [i.name, mapping[i.name]]));
const source = fs.readFileSync(modelPath, 'utf8').replace(/^  const QUOTE_KEYS = .*; \/\/ generated$/m, '  const QUOTE_KEYS = ' + JSON.stringify(keys) + '; // generated');
fs.writeFileSync(modelPath, source);
for (const path of ['assets/breakthrough-model.js', 'minitool/assets/breakthrough-model.js']) fs.writeFileSync(new URL(path, root), source);
