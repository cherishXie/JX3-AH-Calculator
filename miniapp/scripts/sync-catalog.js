/* 从 Web 版 assets/data.js 生成小程序核心目录（444 个生活技艺物品）。 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { buildMiniappCatalog, serializeMiniappCatalog, buildMarketCatalog, serializeMarketCatalog } = require('../../scripts/lib/miniapp-catalog.cjs');

const root = path.resolve(__dirname, '..', '..');
const source = fs.readFileSync(path.join(root, 'assets', 'data.js'), 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(source, sandbox, { filename: 'data.js' });
const data = sandbox.window.JX3Data;
if (!data) throw new Error('未从 assets/data.js 读取到 JX3Data');

const catalog = buildMiniappCatalog(data);
const target = path.join(__dirname, '..', 'src', 'shared', 'catalog.json');
const body = serializeMiniappCatalog(catalog);
fs.writeFileSync(target, body);

const market = buildMarketCatalog(data);
const marketTarget = path.join(__dirname, '..', 'src', 'market', 'data', 'market-catalog.json');
const marketBody = serializeMarketCatalog(market);
fs.mkdirSync(path.dirname(marketTarget), { recursive: true });
fs.writeFileSync(marketTarget, marketBody);

const quotes = Object.keys(catalog.serverPrices).reduce(function (n, sid) {
  return n + Object.keys(catalog.serverPrices[sid]).length;
}, 0);
console.log(
  '已同步小程序核心目录：' + catalog.items.length + ' 物品 / ' +
  catalog.recipes.length + ' 配方 / ' + catalog.servers.length + ' 服务器 / ' +
  quotes + ' 条本服报价 / ' + (Buffer.byteLength(body) / 1024).toFixed(1) + ' KB → ' + target
);
console.log(
  '排除行情目录 ' + catalog.meta.excludedMarketItems + ' 项；版本 ' +
  catalog.meta.catalogVersion + '；价格 ' + catalog.meta.priceUpdatedAt
);
console.log(
  '行情目录分包：' + market.items.length + ' 物品 / ' +
  Object.keys(market.serverPrices).reduce(function (n, sid) { return n + Object.keys(market.serverPrices[sid]).length; }, 0) +
  ' 条本服报价 / ' + (Buffer.byteLength(marketBody) / 1024).toFixed(1) + ' KB → ' + marketTarget
);
