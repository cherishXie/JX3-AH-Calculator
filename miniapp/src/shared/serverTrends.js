/* 区服趋势小程序数据层：复用已有云端/离线走势快照。 */
import { DATA } from './engine';
import { trendItems, buildPoints } from './trends';

const RANGE_DAYS = { today: 1, '3d': 3, '7d': 7, '30d': 30 };

function median(values) {
  const list = (values || []).filter(function (v) { return Number.isFinite(v); }).sort(function (a, b) { return a - b; });
  if (!list.length) return null;
  const mid = Math.floor((list.length - 1) / 2);
  return list.length % 2 ? list[mid] : (list[mid] + list[mid + 1]) / 2;
}

function quoteOf(point, item) {
  if (!point || !item) return null;
  if (item.kind === 'stone') {
    const v = point.stones && point.stones[item.level];
    return v > 0 ? v : null;
  }
  const v = point.quotes && point.quotes[item.id];
  return v > 0 ? v : null;
}

export function serverItems() {
  return trendItems({ type: 'all' });
}

export function rangePoints(points, range) {
  if (!points || !points.length) return [];
  const dates = [];
  points.forEach(function (p) { if (p.date && dates.indexOf(p.date) === -1) dates.push(p.date); });
  dates.sort();
  const days = RANGE_DAYS[range] || 1;
  const keep = {};
  dates.slice(-days).forEach(function (d) { keep[d] = true; });
  return points.filter(function (p) { return keep[p.date]; });
}

function serverRow(server, points, items) {
  if (!points.length) return null;
  const start = points[0];
  const end = points[points.length - 1];
  const returns = [];
  const byKey = {};
  items.forEach(function (item) {
    const p0 = quoteOf(start, item);
    const p1 = quoteOf(end, item);
    if (!(p0 > 0 && p1 > 0)) return;
    const row = { item: item, p0: p0, p1: p1, ret: p1 / p0 - 1 };
    returns.push(row);
    byKey[item.key] = row;
  });
  const skillMap = {};
  items.forEach(function (item) {
    if (!skillMap[item.skillId]) skillMap[item.skillId] = { id: item.skillId, name: item.skillName, up: 0, down: 0, flat: 0, count: 0 };
  });
  returns.forEach(function (r) {
    const sk = skillMap[r.item.skillId];
    if (!sk) return;
    sk.count++;
    if (r.ret > 0.005) sk.up++;
    else if (r.ret < -0.005) sk.down++;
    else sk.flat++;
  });
  const skills = Object.keys(skillMap).map(function (key) {
    const sk = skillMap[key];
    sk.net = sk.count ? (sk.up - sk.down) / sk.count : null;
    return sk;
  });
  const up = returns.filter(function (r) { return r.ret > 0.005; }).length;
  const down = returns.filter(function (r) { return r.ret < -0.005; }).length;
  const flat = returns.length - up - down;
  const comparable = returns.length;
  const coverage = items.length ? comparable / items.length : 0;
  const heat = points.map(function (point) {
    let hUp = 0;
    let hDown = 0;
    let hCount = 0;
    items.forEach(function (item) {
      const p0 = quoteOf(start, item);
      const p1 = quoteOf(point, item);
      if (!(p0 > 0 && p1 > 0)) return;
      const ret = p1 / p0 - 1;
      hCount++;
      if (ret > 0.005) hUp++;
      else if (ret < -0.005) hDown++;
    });
    return hCount ? (hUp - hDown) / hCount : null;
  });
  return {
    id: server.id, name: server.name, region: server.region || '',
    points: points, byKey: byKey, returns: returns,
    median: median(returns.map(function (r) { return r.ret; })),
    up: up, down: down, flat: flat, comparable: comparable, coverage: coverage,
    low: items.length >= 30 && (comparable < 30 || coverage < 0.3),
    score: comparable ? (up - down) / comparable : null,
    heat: heat,
    skills: skills,
    topUp: returns.slice().filter(function (r) { return r.ret > 0.005; }).sort(function (a, b) { return b.ret - a.ret; }).slice(0, 5),
    topDown: returns.slice().filter(function (r) { return r.ret < -0.005; }).sort(function (a, b) { return a.ret - b.ret; }).slice(0, 5)
  };
}

export function buildServerTrends(state, trendData, selectedIds, range) {
  const items = serverItems();
  const selected = {};
  (selectedIds || []).forEach(function (id) { selected[id] = true; });
  const servers = (state.servers || []).filter(function (s) { return selected[s.id]; }).map(function (s) {
    return serverRow(s, rangePoints(buildPoints(s.id, trendData), range), items);
  }).filter(Boolean).sort(function (a, b) {
    if (a.score == null) return 1;
    if (b.score == null) return -1;
    return b.score - a.score;
  });
  if (!servers.length) {
    return { servers: [], rank: [], items: items, globalUp: 0, globalDown: 0, globalBreadth: null, positive: 0, negative: 0, columns: [], skills: [] };
  }
  const globalReturns = [];
  servers.forEach(function (s) { s.returns.forEach(function (r) { globalReturns.push(r); }); });
  const globalUp = globalReturns.filter(function (r) { return r.ret > 0.005; }).length;
  const globalDown = globalReturns.filter(function (r) { return r.ret < -0.005; }).length;
  return {
    servers: servers,
    rank: servers,
    items: items,
    columns: servers[0].points.map(function (p) { return p.at; }),
    skills: servers[0].skills.map(function (sk) { return { id: sk.id, name: sk.name }; }),
    globalUp: globalUp,
    globalDown: globalDown,
    globalBreadth: globalReturns.length ? (globalUp - globalDown) / globalReturns.length : null,
    positive: servers.filter(function (s) { return s.score > 0; }).length,
    negative: servers.filter(function (s) { return s.score < 0; }).length,
    lowCount: servers.filter(function (s) { return s.low; }).length
  };
}

function itemStats(item, servers, selectedServers) {
  const byId = {};
  servers.forEach(function (s) { byId[s.id] = s; });
  const rows = [];
  let up = 0, down = 0, flat = 0, missing = 0;
  const returns = [];
  selectedServers.forEach(function (server) {
    const data = byId[server.id];
    const row = data && data.byKey[item.key];
    if (!row) {
      missing++;
      rows.push({ server: server, data: data, row: null, status: 'missing' });
      return;
    }
    const status = row.ret > 0.005 ? 'up' : row.ret < -0.005 ? 'down' : 'flat';
    if (status === 'up') up++; else if (status === 'down') down++; else flat++;
    returns.push(row.ret);
    rows.push({ server: server, data: data, row: row, status: status });
  });
  rows.sort(function (a, b) {
    if (!a.row && !b.row) return 0;
    if (!a.row) return 1;
    if (!b.row) return -1;
    return b.row.ret - a.row.ret;
  });
  const valid = rows.filter(function (r) { return r.row; });
  const max = valid.slice().sort(function (a, b) { return b.row.ret - a.row.ret; })[0] || null;
  const min = valid.slice().sort(function (a, b) { return a.row.ret - b.row.ret; })[0] || null;
  const upRows = rows.filter(function (r) { return r.status === 'up'; });
  const downRows = rows.filter(function (r) { return r.status === 'down'; });
  return {
    item: item,
    rows: rows,
    comparable: returns.length,
    up: up, down: down, flat: flat, missing: missing,
    median: median(returns),
    upAvg: upRows.length ? upRows.reduce(function (n, r) { return n + r.row.ret; }, 0) / upRows.length : null,
    downAvg: downRows.length ? downRows.reduce(function (n, r) { return n + r.row.ret; }, 0) / downRows.length : null,
    max: max, min: min,
    coverage: selectedServers.length ? returns.length / selectedServers.length : 0
  };
}

export function buildItemTrends(state, trendData, itemKey, selectedIds, range, base) {
  const serverCtx = base || buildServerTrends(state, trendData, selectedIds, range);
  if (!serverCtx.servers.length) return { item: null, stats: null, ranking: [], servers: [] };
  const allItems = serverCtx.items;
  const selectedIdsSet = {};
  (selectedIds || []).forEach(function (id) { selectedIdsSet[id] = true; });
  const selectedServers = (state.servers || []).filter(function (s) { return selectedIdsSet[s.id]; });
  const ranking = allItems.map(function (item) { return itemStats(item, serverCtx.servers, selectedServers); })
    .filter(function (row) { return row.comparable > 0; })
    .sort(function (a, b) {
      if (b.up !== a.up) return b.up - a.up;
      if ((b.median || 0) !== (a.median || 0)) return (b.median || 0) - (a.median || 0);
      return b.coverage - a.coverage;
    });
  let focus = allItems.filter(function (i) { return i.key === itemKey; })[0];
  if (!focus) {
    const sheep = allItems.filter(function (i) { return i.name === '羊皮'; })[0];
    focus = (sheep && ranking.some(function (r) { return r.item.key === sheep.key; })) ? sheep : (ranking[0] ? ranking[0].item : allItems[0]);
  }
  const stats = focus ? itemStats(focus, serverCtx.servers, selectedServers) : null;
  return { item: focus, stats: stats, ranking: ranking, servers: serverCtx.servers, selectedServers: selectedServers };
}
