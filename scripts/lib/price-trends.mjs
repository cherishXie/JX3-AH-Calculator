/**
 * 剑网三物价助手 · 浏览器走势数据预计算
 *
 * 原始文件 data/price-history/days/*.json 记录的是「基线 + 变化增量」。
 * 浏览器每次打开走势页都要先下载全部区服的原始日文件，再回放增量，体量
 * 会随日期增长，而且每次行情更新都会重新加载。
 *
 * 这里把最近 7 个自然日预计算成两个轻量数据集：
 *
 *   data/price-trends/index.json
 *   data/price-trends/days/YYYY-MM-DD.json
 *       → 区服趋势用：所有区服的「本服报价」变化序列（不含基准价、目录价）
 *   data/price-trends/servers/<serverId>/YYYY-MM-DD.json
 *       → 物价走势用：单个区服的「有效价 + 本服报价 + 五行石」变化序列
 *
 * 两个数据集都只保存变化点：首点全量，之后只写变化项。浏览器按「区服 + 日期」
 * 缓存，更新时只补新增/变化的日期，未变化的历史数据不再重新下载。
 *
 * 原始 data/price-history 仍然完整保留，供 CLI 导出、审计和按需回查。
 */
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import {
  forEachDayPoint,
  listPriceHistoryDays,
  loadPriceHistoryDay,
  readPriceHistoryIndex,
} from './price-history.mjs';

export const PRICE_TRENDS_SCHEMA = 1;
export const PRICE_TRENDS_MAX_DAYS = 7;
export const PRICE_TRENDS_TIMEZONE = 'Asia/Shanghai';

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const PRICE_FIELDS = ['prices', 'quotes', 'stones', 'stonePrices'];
const SERVER_FIELDS = ['quotes', 'stones'];

function clone(value) {
  if (value === null || value === undefined) return value;
  return JSON.parse(JSON.stringify(value));
}

function isPrice(value) {
  return typeof value === 'number' && Number.isFinite(value) && value > 0;
}

function priceTrendsDir(root) {
  return path.join(root, 'data', 'price-trends');
}

function priceTrendsDaysDir(root) {
  return path.join(priceTrendsDir(root), 'days');
}

function priceTrendsServersDir(root) {
  return path.join(priceTrendsDir(root), 'servers');
}

function priceTrendsIndexPath(root) {
  return path.join(priceTrendsDir(root), 'index.json');
}

function addDays(date, delta) {
  const ms = Date.parse(`${date}T00:00:00+08:00`);
  if (!Number.isFinite(ms)) throw new Error(`无效日期：${date}`);
  return new Date(ms + delta * 86400000 + 8 * 3600000).toISOString().slice(0, 10);
}

function normalizeMaxDays(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return PRICE_TRENDS_MAX_DAYS;
  return Math.min(PRICE_TRENDS_MAX_DAYS, Math.max(1, Math.floor(number)));
}

function hashJson(value) {
  return crypto.createHash('sha1').update(JSON.stringify(value)).digest('hex').slice(0, 16);
}

function writeIfChanged(file, text) {
  let previous = null;
  try {
    previous = fs.readFileSync(file, 'utf8');
  } catch (err) {
    if (!err || err.code !== 'ENOENT') throw err;
  }
  if (previous === text) return false;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const tmp = `${file}.${process.pid}.${Date.now()}.tmp`;
  try {
    fs.writeFileSync(tmp, text, 'utf8');
    fs.renameSync(tmp, file);
  } finally {
    try {
      if (fs.existsSync(tmp)) fs.rmSync(tmp, { force: true });
    } catch {
      /* ignore cleanup failure */
    }
  }
  return true;
}

function diffMap(previous, next) {
  const before = previous && typeof previous === 'object' ? previous : {};
  const after = next && typeof next === 'object' ? next : {};
  const out = {};
  const keys = new Set([...Object.keys(before), ...Object.keys(after)]);
  for (const key of keys) {
    if (before[key] !== after[key]) out[key] = after[key] === undefined ? null : after[key];
  }
  return out;
}

function countDelta(delta) {
  return delta && typeof delta === 'object' ? Object.keys(delta).length : 0;
}

function effectiveMap(catalogPrices, quotes) {
  const out = {};
  for (const [key, value] of Object.entries(catalogPrices || {})) {
    if (isPrice(value)) out[key] = value;
  }
  for (const [key, value] of Object.entries(quotes || {})) {
    if (isPrice(value)) out[key] = value;
  }
  return out;
}

function effectiveStoneMap(stoneCatalogPrices, stones) {
  const out = {};
  for (const [key, value] of Object.entries(stoneCatalogPrices || {})) {
    if (isPrice(value)) out[key] = value;
  }
  for (const [key, value] of Object.entries(stones || {})) {
    if (isPrice(value)) out[key] = value;
  }
  return out;
}

export function selectPriceTrendDays(root, maxDays = PRICE_TRENDS_MAX_DAYS) {
  const limit = normalizeMaxDays(maxDays);
  const entries = listPriceHistoryDays(root);
  if (!entries.length) return { days: [], maxDays: limit, dropped: 0 };
  const byDate = new Map(entries.map((entry) => [entry.date, entry]));
  const dates = [...byDate.keys()].sort();
  const latest = dates[dates.length - 1];
  const earliest = addDays(latest, -(limit - 1));
  const picked = dates.filter((date) => date >= earliest);
  return {
    days: picked.map((date) => ({
      date,
      entry: byDate.get(date),
      day: loadPriceHistoryDay(root, date),
    })).filter((item) => item.day),
    maxDays: limit,
    dropped: dates.length - picked.length,
  };
}

function serverIdsOf(day) {
  const base = day.base || {};
  return [...new Set([
    ...(Array.isArray(base.requested) ? base.requested : []),
    ...Object.keys(base.prices || {}),
    ...Object.keys(base.stones || {}),
  ])];
}

function buildServerSeries(day, serverId) {
  const points = [];
  let previous = null;
  forEachDayPoint(day, (point) => {
    const quotes = (point.state.prices && point.state.prices[serverId]) || {};
    const stones = (point.state.stones && point.state.stones[serverId]) || {};
    const current = {
      at: point.at,
      source: point.source || day.base.source || '',
      coverage: (point.coverage && point.coverage[serverId]) || null,
      prices: effectiveMap(point.state.catalogPrices, quotes),
      quotes,
      stones,
      stonePrices: effectiveStoneMap(point.state.stoneCatalogPrices, stones),
    };
    if (!previous) {
      points.push(Object.assign(clone(current), { changed: 0 }));
    } else {
      const out = { at: current.at, source: current.source, coverage: current.coverage };
      let changed = 0;
      for (const field of PRICE_FIELDS) {
        const delta = diffMap(previous[field], current[field]);
        if (countDelta(delta)) {
          out[field] = delta;
          changed += countDelta(delta);
        }
      }
      out.changed = changed;
      points.push(out);
    }
    previous = {
      prices: clone(current.prices),
      quotes: clone(current.quotes),
      stones: clone(current.stones),
      stonePrices: clone(current.stonePrices),
    };
  });
  return points;
}

function buildCatalogSeries(day) {
  const points = [];
  let previous = null;
  forEachDayPoint(day, (point) => {
    const prices = effectiveMap(point.state.catalogPrices, {});
    const stonePrices = effectiveStoneMap(point.state.stoneCatalogPrices, {});
    const current = {
      at: point.at,
      source: point.source || day.base.source || '',
      prices,
      stonePrices,
    };
    if (!previous) {
      points.push(Object.assign(clone(current), { changed: 0 }));
    } else {
      const out = { at: current.at, source: current.source };
      let changed = 0;
      const priceDelta = diffMap(previous.prices, current.prices);
      if (countDelta(priceDelta)) {
        out.prices = priceDelta;
        changed += countDelta(priceDelta);
      }
      const stoneDelta = diffMap(previous.stonePrices, current.stonePrices);
      if (countDelta(stoneDelta)) {
        out.stonePrices = stoneDelta;
        changed += countDelta(stoneDelta);
      }
      out.changed = changed;
      points.push(out);
    }
    previous = { prices: clone(current.prices), stonePrices: clone(current.stonePrices) };
  });
  return points;
}

function buildServerDayDoc(day, serverIds) {
  const servers = {};
  const previous = {};
  forEachDayPoint(day, (point) => {
    for (const serverId of serverIds) {
      const quotes = (point.state.prices && point.state.prices[serverId]) || {};
      const stones = (point.state.stones && point.state.stones[serverId]) || {};
      const list = servers[serverId] || (servers[serverId] = []);
      const out = {
        at: point.at,
        source: point.source || day.base.source || '',
        coverage: (point.coverage && point.coverage[serverId]) || null,
      };
      if (!previous[serverId]) {
        out.quotes = clone(quotes);
        out.stones = clone(stones);
      } else {
        const quoteDelta = diffMap(previous[serverId].quotes, quotes);
        const stoneDelta = diffMap(previous[serverId].stones, stones);
        if (countDelta(quoteDelta)) out.quotes = quoteDelta;
        if (countDelta(stoneDelta)) out.stones = stoneDelta;
      }
      list.push(out);
      previous[serverId] = { quotes: clone(quotes), stones: clone(stones) };
    }
  });
  return { servers };
}

function dayPointCount(day) {
  return 1 + (Array.isArray(day.samples) ? day.samples.length : 0);
}

function lastAtOf(day) {
  const samples = day.samples || [];
  if (samples.length) return samples[samples.length - 1].at || day.base.at;
  return day.base.at;
}

/**
 * 计算最近 N 天的走势数据，不写文件。返回的文件内容可以直接交给
 * writePriceTrends 落盘，也方便测试和体积核对。
 */
export function computePriceTrends(root, { maxDays = PRICE_TRENDS_MAX_DAYS } = {}) {
  const historyIndex = readPriceHistoryIndex(root);
  const selection = selectPriceTrendDays(root, maxDays);
  if (!selection.days.length) {
    const manifest = {
      schemaVersion: PRICE_TRENDS_SCHEMA,
      timezone: PRICE_TRENDS_TIMEZONE,
      generatedAt: '',
      sourceUpdatedAt: (historyIndex && historyIndex.updatedAt) || '',
      catalogVersion: (historyIndex && historyIndex.catalogVersion) || '',
      itemCount: (historyIndex && historyIndex.itemCount) || 0,
      maxDays: selection.maxDays,
      servers: (historyIndex && historyIndex.servers) || [],
      days: [],
    };
    return {
      manifest,
      dayFiles: Object.create(null),
      serverFiles: Object.create(null),
      report: {
        maxDays: selection.maxDays,
        droppedDays: selection.dropped,
        days: 0,
        points: 0,
        dayBytes: 0,
        serverBytes: 0,
        serverAverageBytes: 0,
        rawBytes: 0,
      },
    };
  }

  const servers = (historyIndex && historyIndex.servers && historyIndex.servers.length)
    ? historyIndex.servers.map((server) => ({ id: server.id, name: server.name || server.id, region: server.region || '' }))
    : [...new Set(selection.days.flatMap(({ day }) => serverIdsOf(day)))].map((id) => ({ id, name: id, region: '' }));
  const serverIds = servers.map((server) => server.id);
  const dayFiles = Object.create(null);
  const serverFiles = Object.create(null);
  const manifestDays = [];
  let rawBytes = 0;
  let totalPoints = 0;
  let realServerBytes = 0;

  for (const { date, entry, day } of selection.days) {
    const serverDay = buildServerDayDoc(day, serverIds);
    const dayDoc = {
      schemaVersion: PRICE_TRENDS_SCHEMA,
      date,
      timezone: PRICE_TRENDS_TIMEZONE,
      at: day.base.at,
      updatedAt: lastAtOf(day),
      servers: serverDay.servers,
    };
    const dayText = JSON.stringify(dayDoc);
    dayFiles[date] = dayText;

    const serverBytes = [];
    for (const serverId of serverIds) {
      const points = buildServerSeries(day, serverId);
      const doc = {
        schemaVersion: PRICE_TRENDS_SCHEMA,
        date,
        timezone: PRICE_TRENDS_TIMEZONE,
        server: serverId,
        points,
      };
      const text = JSON.stringify(doc);
      serverFiles[`${serverId}/${date}`] = text;
      serverBytes.push(Buffer.byteLength(text));
    }
    // 自定义区服没有本服报价时，走势页按目录基准价展示；单独存一个
    // __catalog__ 序列，避免为每个自定义区服各存一份相同数据。
    const catalogDoc = {
      schemaVersion: PRICE_TRENDS_SCHEMA,
      date,
      timezone: PRICE_TRENDS_TIMEZONE,
      server: '__catalog__',
      points: buildCatalogSeries(day),
    };
    serverFiles[`__catalog__/${date}`] = JSON.stringify(catalogDoc);

    const hash = hashJson(day);
    const points = dayPointCount(day);
    totalPoints += points;
    rawBytes += Number(entry && entry.bytes) || 0;
    const dayBytes = Buffer.byteLength(dayText);
    const serverAverageBytes = serverBytes.length
      ? Math.round(serverBytes.reduce((sum, value) => sum + value, 0) / serverBytes.length)
      : 0;
    realServerBytes += serverBytes.reduce((sum, value) => sum + value, 0);
    manifestDays.push({
      date,
      points,
      baseAt: day.base.at,
      lastAt: lastAtOf(day),
      hash,
      bytes: dayBytes,
      serverBytes: serverAverageBytes,
      dayFile: `days/${date}.json`,
      serverFile: `servers/{server}/${date}.json`,
    });
  }

  const latest = manifestDays[manifestDays.length - 1];
  const manifest = {
    schemaVersion: PRICE_TRENDS_SCHEMA,
    timezone: PRICE_TRENDS_TIMEZONE,
    // 用源数据时间而不是构建时间，保证行情没变化时生成结果逐字节一致。
    generatedAt: (historyIndex && historyIndex.updatedAt) || (latest && latest.lastAt) || '',
    sourceUpdatedAt: (historyIndex && historyIndex.updatedAt) || (latest && latest.lastAt) || '',
    catalogVersion: (historyIndex && historyIndex.catalogVersion) || '',
    itemCount: (historyIndex && historyIndex.itemCount) || 0,
    maxDays: selection.maxDays,
    servers,
    days: manifestDays,
  };

  const dayBytes = Object.values(dayFiles).reduce((sum, text) => sum + Buffer.byteLength(text), 0);
  const serverBytes = Object.values(serverFiles).reduce((sum, text) => sum + Buffer.byteLength(text), 0);
  const serverAverageBytes = serverIds.length
    ? Math.round(realServerBytes / selection.days.length / serverIds.length)
    : 0;

  return {
    manifest,
    dayFiles,
    serverFiles,
    report: {
      maxDays: selection.maxDays,
      droppedDays: selection.dropped,
      days: manifestDays.length,
      points: totalPoints,
      dayBytes,
      serverBytes,
      serverAverageBytes,
      rawBytes,
      dayGzip: 0,
      serverGzip: 0,
    },
  };
}

function removeStaleFiles(root, dayDates, serverKeys) {
  let removed = 0;
  const daysDir = priceTrendsDaysDir(root);
  if (fs.existsSync(daysDir)) {
    for (const name of fs.readdirSync(daysDir)) {
      if (!name.endsWith('.json')) continue;
      const date = name.replace(/\.json$/, '');
      if (dayDates.has(date)) continue;
      fs.rmSync(path.join(daysDir, name), { force: true });
      removed++;
    }
  }
  const serversDir = priceTrendsServersDir(root);
  if (fs.existsSync(serversDir)) {
    for (const serverId of fs.readdirSync(serversDir)) {
      const serverDir = path.join(serversDir, serverId);
      if (!fs.statSync(serverDir).isDirectory()) continue;
      for (const name of fs.readdirSync(serverDir)) {
        if (!name.endsWith('.json')) continue;
        const date = name.replace(/\.json$/, '');
        if (serverKeys.has(`${serverId}/${date}`)) continue;
        fs.rmSync(path.join(serverDir, name), { force: true });
        removed++;
      }
      try {
        if (!fs.readdirSync(serverDir).length) fs.rmdirSync(serverDir);
      } catch {
        /* ignore */
      }
    }
  }
  return removed;
}

export function writePriceTrends(root, result) {
  const dayDates = new Set(Object.keys(result.dayFiles));
  const serverKeys = new Set(Object.keys(result.serverFiles));
  const removed = removeStaleFiles(root, dayDates, serverKeys);
  let written = 0;
  for (const [date, text] of Object.entries(result.dayFiles)) {
    if (writeIfChanged(path.join(priceTrendsDaysDir(root), `${date}.json`), text)) written++;
  }
  for (const [key, text] of Object.entries(result.serverFiles)) {
    if (writeIfChanged(path.join(priceTrendsServersDir(root), `${key}.json`), text)) written++;
  }
  if (writeIfChanged(priceTrendsIndexPath(root), JSON.stringify(result.manifest, null, 2) + '\n')) written++;
  return { written, removed };
}

export function buildPriceTrends(root, { maxDays = PRICE_TRENDS_MAX_DAYS, dryRun = false } = {}) {
  const result = computePriceTrends(root, { maxDays });
  const output = dryRun ? { written: 0, removed: 0 } : writePriceTrends(root, result);
  return Object.assign(result, output);
}

export function priceTrendsPaths(root) {
  return {
    dir: priceTrendsDir(root),
    index: priceTrendsIndexPath(root),
    days: priceTrendsDaysDir(root),
    servers: priceTrendsServersDir(root),
  };
}
