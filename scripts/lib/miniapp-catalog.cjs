'use strict';

/**
 * 从小程序 Web 数据生成「小程序核心目录」。
 *
 * 背景：
 * - Web 版 assets/data.js 已扩到 1116 个物品：444 个生活技艺物品（life=true，
 *   其中 424 个被 251 条配方引用）+ 672 个行情目录物品（家园/强化/消耗品等）。
 * - 小程序核心目录只装 444 个生活技艺物品参与成本与收益计算；
 *   672 个行情目录物品单独生成「行情目录」分包数据，只做价格查询/记价，
 *   不进入主包，也不参与配方收益。
 * - 网页价格机器人原本用 --web-only 跳过小程序，导致小程序目录和云端行情
 *   长期停在旧版本；这里提供统一过滤，更新链路两端共用同一套规则。
 *
 * 输出结构保持与旧 catalog.json 一致，只保留小程序 engine/UI 实际使用的字段。
 */

// origin / verified 只在配方详情与数据说明中使用，物品层 UI 不读，省下约 20KB。
const CORE_ITEM_FIELDS = [
  'id', 'name', 'skillId', 'category', 'kind', 'tier', 'source', 'base', 'custom'
];
const MARKET_ITEM_FIELDS = [
  'id', 'name', 'category', 'kind', 'tier', 'source', 'base'
];

function finitePrice(v) {
  const n = Number(v);
  return Number.isFinite(n) && n > 0 ? n : null;
}

function pickItem(item, keepItemMeta) {
  const out = {};
  const fields = keepItemMeta
    ? CORE_ITEM_FIELDS.concat(['origin', 'verified'])
    : CORE_ITEM_FIELDS;
  for (const field of fields) {
    if (item[field] !== undefined) out[field] = item[field];
  }
  return out;
}

function recipeItemIds(recipes) {
  const ids = new Set();
  (recipes || []).forEach(function (recipe) {
    (recipe.materials || []).forEach(function (m) { if (m && m.item) ids.add(m.item); });
    (recipe.outputs || []).forEach(function (o) { if (o && o.item) ids.add(o.item); });
  });
  return ids;
}

function pickServerPrices(raw, ids, servers) {
  const out = {};
  (servers || []).forEach(function (server) {
    const bucket = {};
    const source = raw && raw[server.id];
    if (source) {
      ids.forEach(function (id) {
        const v = finitePrice(source[id]);
        if (v != null) bucket[id] = v;
      });
    }
    if (Object.keys(bucket).length) out[server.id] = bucket;
  });
  return out;
}

function coverageOf(items, serverPrices, servers, source) {
  const withAnyQuote = new Set();
  const serverCoverage = {};
  (servers || []).forEach(function (server) {
    const bucket = serverPrices[server.id] || {};
    const ids = Object.keys(bucket);
    ids.forEach(function (id) { withAnyQuote.add(id); });
    serverCoverage[server.id] = {
      updated: ids.length,
      total: items.length,
      filtered: 0,
      noQuote: Math.max(0, items.length - ids.length)
    };
  });
  return {
    priceCoverage: {
      updated: withAnyQuote.size,
      total: items.length,
      source: source || '',
      filtered: 0,
      noQuote: Math.max(0, items.length - withAnyQuote.size)
    },
    serverCoverage: serverCoverage
  };
}

function buildMeta(webMeta, items, recipes, serverPrices, servers, excluded, source) {
  const meta = Object.assign({}, webMeta || {});
  const craft = (recipes || []).filter(function (r) { return r.kind !== 'gather'; }).length;
  const gather = (recipes || []).length - craft;

  // 版本号加 -core，避免设置页把「444 项小程序核心」误读成网页的 1116 项。
  const version = String(meta.catalogVersion || '');
  meta.catalogVersion = /-core$/.test(version)
    ? version
    : version.replace(/-market$/, '') + '-core';
  const seedVersion = String(meta.seedVersion || '');
  meta.seedVersion = /-core$/.test(seedVersion)
    ? seedVersion
    : seedVersion.replace(/-market/, '') + '-core';

  // 覆盖度按小程序实际物品重算，不能沿用网页 1116 项的 765/1116。
  const coverage = coverageOf(items, serverPrices, servers, source || (webMeta && webMeta.priceCoverage && webMeta.priceCoverage.source));
  meta.priceCoverage = coverage.priceCoverage;
  meta.serverCoverage = coverage.serverCoverage;
  meta.scope = '小程序核心：' + craft + ' 条制造 + ' + gather + ' 条采集；' +
    items.length + ' 个生活技艺物品；网页行情目录的 ' + excluded + ' 个物品不进入主包';
  meta.coreOnly = true;
  meta.excludedMarketItems = excluded;
  // 保留网页行情分类，行情 Tab 需要「全部 / 材料 / 成品 / 分类」筛选。
  meta.categories = (webMeta && webMeta.categories) || [];

  return meta;
}

/**
 * @param {object} webData window.JX3Data
 * @param {object} [opts]
 * @param {boolean} [opts.keepItemMeta] 小工具仍展示物品来源/核验，需要保留 origin/verified
 * @returns {object} 小程序 catalog
 */
function buildMiniappCatalog(webData, opts) {
  if (!webData || !Array.isArray(webData.items) || !Array.isArray(webData.recipes)) {
    throw new Error('小程序目录生成失败：缺少 items / recipes');
  }

  const used = recipeItemIds(webData.recipes);
  const core = webData.items.filter(function (item) {
    // life 是核心标记；配方引用的物品做兜底，避免某条数据漏标 life 后被计算内核丢掉。
    return item && (item.life === true || used.has(item.id));
  });
  if (!core.length) throw new Error('小程序目录生成失败：没有生活技艺物品');

  const keepItemMeta = !!(opts && opts.keepItemMeta);
  const items = core.map(function (item) { return pickItem(item, keepItemMeta); });
  const ids = new Set(items.map(function (i) { return i.id; }));

  // 配方必须能完全解析；缺一个材料就会让收益算错，直接失败而不是静默发布。
  const missing = [];
  used.forEach(function (id) { if (!ids.has(id)) missing.push(id); });
  if (missing.length) {
    throw new Error('小程序目录生成失败：配方引用了未收录物品 ' + missing.slice(0, 8).join(', '));
  }

  const servers = Array.isArray(webData.servers) ? webData.servers : [];
  const serverPrices = pickServerPrices(webData.serverPrices, ids, servers);
  const excluded = Math.max(0, webData.items.length - items.length);
  const meta = buildMeta(
    webData.meta,
    items,
    webData.recipes,
    serverPrices,
    servers,
    excluded,
    webData.meta && webData.meta.priceCoverage && webData.meta.priceCoverage.source
  );

  return {
    meta: meta,
    tiers: webData.tiers,
    skills: webData.skills,
    items: items,
    recipes: webData.recipes,
    servers: servers,
    serverPrices: serverPrices,
    stoneMeta: webData.stoneMeta,
    stones: webData.stones,
    stonePrices: webData.stonePrices,
    stoneRecipes: webData.stoneRecipes
  };
}

/**
 * 672 项行情目录：只用于查价/记价，不参与配方收益。
 * 单独生成 `src/market/data/market-catalog.json`，由微信分包加载。
 */
function buildMarketCatalog(webData) {
  if (!webData || !Array.isArray(webData.items)) {
    throw new Error('行情目录生成失败：缺少 items');
  }
  const market = webData.items.filter(function (item) { return item && item.life !== true; });
  if (!market.length) throw new Error('行情目录生成失败：没有行情物品');
  const items = market.map(function (item) {
    const out = {};
    MARKET_ITEM_FIELDS.forEach(function (field) {
      if (item[field] !== undefined) out[field] = item[field];
    });
    return out;
  });
  const ids = new Set(items.map(function (i) { return i.id; }));
  const servers = Array.isArray(webData.servers) ? webData.servers : [];
  const serverPrices = pickServerPrices(webData.serverPrices, ids, servers);
  const webMeta = webData.meta || {};
  const baseVersion = String(webMeta.catalogVersion || 'v3');
  const directoryVersion = /-directory$/.test(baseVersion)
    ? baseVersion
    : baseVersion.replace(/-core$/, '').replace(/-market$/, '') + '-market-directory';
  const coverage = coverageOf(items, serverPrices, servers, webMeta.priceCoverage && webMeta.priceCoverage.source);
  const meta = {
    game: webMeta.game,
    expansion: webMeta.expansion,
    levelCap: webMeta.levelCap,
    version: webMeta.version,
    updatedAt: webMeta.updatedAt,
    verifiedAt: webMeta.verifiedAt,
    catalogVersion: directoryVersion,
    priceUpdatedAt: webMeta.priceUpdatedAt,
    scope: '小程序行情目录：' + items.length + ' 个家园/强化/消耗品等物品；只查价/记价，不参与配方收益',
    marketOnly: true,
    coreOnly: false,
    priceCoverage: coverage.priceCoverage,
    serverCoverage: coverage.serverCoverage,
    categories: webMeta.categories || []
  };
  return {
    meta: meta,
    tiers: webData.tiers,
    categories: webMeta.categories || [],
    items: items,
    servers: servers,
    serverPrices: serverPrices
  };
}

function serializeMarketCatalog(catalog) {
  return JSON.stringify(catalog) + '\n';
}

function serializeMiniappCatalog(catalog) {
  // 压缩进主包：源文件从 ~500KB 降到 ~300KB；构建后仍是同一份 JSON。
  return JSON.stringify(catalog) + '\n';
}

module.exports = {
  buildMiniappCatalog, serializeMiniappCatalog, CORE_ITEM_FIELDS,
  buildMarketCatalog, serializeMarketCatalog, MARKET_ITEM_FIELDS
};
