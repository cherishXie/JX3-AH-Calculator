const fs = require('fs');
const vm = require('vm');
const path = require('path');
const root = __dirname;
const src = fs.readFileSync(path.join(root, 'raw', 'data.js'), 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(src, sandbox);
const d = sandbox.window.JX3Data;
fs.writeFileSync(path.join(root, 'raw', 'catalog.json'), JSON.stringify(d, null, 1));
console.log(JSON.stringify({
  items: d.items.length, recipes: d.recipes.length, servers: d.servers.length,
  meta: d.meta.catalogVersion, priceUpdatedAt: d.meta.priceUpdatedAt,
  serverPriceServers: Object.keys(d.serverPrices || {}).length,
  serverPricesItems: Object.fromEntries(Object.entries(d.serverPrices || {}).map(([k, v]) => [k, Object.keys(v).length])),
}, null, 2));
