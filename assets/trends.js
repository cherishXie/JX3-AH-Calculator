/* =========================================================================
   剑网三物价助手 · 物价历史读取与走势数据
   -------------------------------------------------------------------------
   - 优先读取 Pages 上预计算好的 price-trends/ 数据：
       price-trends/index.json
       price-trends/days/YYYY-MM-DD.json          区服趋势（本服报价增量）
       price-trends/servers/<id>/YYYY-MM-DD.json  物价走势（有效价增量）
   - 浏览器按「区服 + 日期」把已加载的数据存入 IndexedDB（不可用时退化为内存），
     行情更新后只补新增/变化的日期，未变化的历史不再重新下载，也不会清空重载。
   - 浏览器最多保留最近 7 个自然日；原始 price-history/ 只在导出/查看节点原始
     数据时按需拉取。
   - 原始数据回放函数 buildPoints 仍保留，供价格历史 CLI、测试和按需回查使用。
   该文件只服务 Web 版；小红书离线小工具不加载它。
   ========================================================================= */
(function () {
  'use strict';

  const DATA = window.JX3Data || {};
  const MAX_DAYS = 7;
  const DB_NAME = 'jx3-price-trends';
  const DB_STORE = 'segments';
  const listeners = [];
  const state = {
    manifest: null,
    manifestError: null,
    loadingManifest: null,
    manifestStale: false,
    priceCache: Object.create(null),
    serverCache: Object.create(null),
    rawDays: Object.create(null),
    rawViews: Object.create(null),
    loading: Object.create(null),
    failures: Object.create(null),
    loadingDays: Object.create(null),
    dayError: null,
    lastLoadedAt: 0,
    viewCache: Object.create(null),
    viewCacheOrder: [],
    dataVersion: 0,
    memoryStore: Object.create(null),
    storageReady: null
  };

  const skillMap = {};
  (DATA.skills || []).forEach(function (s) { skillMap[s.id] = s; });
  const skillOrder = {};
  (DATA.skills || []).forEach(function (s, i) { skillOrder[s.id] = i; });
  const tierMap = {};
  (DATA.tiers || []).forEach(function (t) { tierMap[t.id] = t; });
  const usageSkills = Object.create(null);
  (DATA.recipes || []).forEach(function (recipe) {
    (recipe.materials || []).forEach(function (mat) {
      if (!mat || !mat.item) return;
      const list = usageSkills[mat.item] || (usageSkills[mat.item] = []);
      if (recipe.skillId && list.indexOf(recipe.skillId) === -1) list.push(recipe.skillId);
    });
  });

  const STONE_COLOR = '#C084FC';
  const catalog = [];
  (DATA.items || []).forEach(function (item) {
    if (!item || !item.id) return;
    const kind = item.kind === 'product' ? 'product' : 'material';
    const used = (usageSkills[item.id] || []).slice();
    if (item.skillId && used.indexOf(item.skillId) === -1) used.unshift(item.skillId);
    catalog.push({
      key: 'item:' + item.id,
      id: item.id,
      name: item.name || item.id,
      kind: kind,
      skillId: item.skillId || '',
      skillName: skillName(item.skillId),
      skillIds: used.length ? used : (item.skillId ? [item.skillId] : []),
      skillNames: (used.length ? used : (item.skillId ? [item.skillId] : [])).map(skillName).join(' / '),
      color: skillColor(item.skillId),
      skillOrder: skillOrder[item.skillId] == null ? 99 : skillOrder[item.skillId],
      tier: Number(item.tier) || 0,
      tierName: (tierMap[item.tier] || {}).name || '其他',
      tierColor: (tierMap[item.tier] || {}).color || '#64748B'
    });
  });
  (DATA.stones || []).forEach(function (stone) {
    if (!stone || stone.level === undefined) return;
    catalog.push({
      key: 'stone:' + stone.level,
      id: 'stone:' + stone.level,
      level: String(stone.level),
      name: stone.name || ('五行石（' + stone.level + '级）'),
      kind: 'stone',
      skillId: 'stone',
      skillName: '五行石',
      color: STONE_COLOR,
      skillOrder: 100,
      tier: 0,
      tierName: '五行石',
      tierColor: STONE_COLOR
    });
  });
  const itemMap = {};
  catalog.forEach(function (item) { itemMap[item.key] = item; });

  function skillName(id) {
    return skillMap[id] ? skillMap[id].name : (id || '其他');
  }
  function skillColor(id) {
    return skillMap[id] && skillMap[id].color ? skillMap[id].color : '#64748B';
  }
  function clone(value) {
    if (value === null || value === undefined) return value;
    return JSON.parse(JSON.stringify(value));
  }
  function isPrice(value) {
    return typeof value === 'number' && Number.isFinite(value) && value > 0;
  }
  function atText(at) {
    const text = String(at || '');
    return text.length >= 16 ? text.slice(0, 16).replace('T', ' ') : text;
  }
  function dateOf(at) {
    const text = String(at || '');
    return text.slice(0, 10);
  }
  function beijingParts(ms) {
    const d = new Date(ms + 8 * 3600000);
    return {
      year: d.getUTCFullYear(),
      month: d.getUTCMonth() + 1,
      day: d.getUTCDate(),
      hour: d.getUTCHours()
    };
  }
  function beijingDateOf(ms) {
    const p = beijingParts(ms);
    return p.year + '-' + String(p.month).padStart(2, '0') + '-' + String(p.day).padStart(2, '0');
  }
  function hourText(ms) {
    const p = beijingParts(ms);
    return p.year + '-' + String(p.month).padStart(2, '0') + '-' + String(p.day).padStart(2, '0') +
      'T' + String(p.hour).padStart(2, '0') + ':00';
  }
  function floorHourMs(ms) {
    const p = beijingParts(ms);
    return Date.UTC(p.year, p.month - 1, p.day, p.hour) - 8 * 3600000;
  }
  function endOfHourMs(ms) {
    return floorHourMs(ms) + 3599999;
  }
  function parseBound(value, isEnd) {
    const text = String(value || '').trim();
    const match = text.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2})(?::\d{2})?(?::\d{2})?)?$/);
    if (!match) return null;
    const date = match[1] + '-' + match[2] + '-' + match[3];
    if (match[4] === undefined) {
      const start = Date.parse(date + 'T00:00:00+08:00');
      return Number.isFinite(start) ? (isEnd ? start + 86399999 : start) : null;
    }
    const start = Date.parse(date + 'T' + match[4] + ':00:00+08:00');
    if (!Number.isFinite(start)) return null;
    return isEnd ? start + 3599999 : start;
  }
  function slicePoints(points, fromMs, toMs) {
    return (points || []).filter(function (point) {
      const ms = Date.parse(point.at);
      return Number.isFinite(ms) && ms >= fromMs && ms <= toMs;
    });
  }
  function addDays(date, delta) {
    const ms = Date.parse(date + 'T00:00:00+08:00');
    if (!Number.isFinite(ms)) return date;
    return new Date(ms + delta * 86400000 + 8 * 3600000).toISOString().slice(0, 10);
  }
  function dayDistance(from, to) {
    const a = Date.parse(from + 'T00:00:00+08:00');
    const b = Date.parse(to + 'T00:00:00+08:00');
    if (!Number.isFinite(a) || !Number.isFinite(b)) return 0;
    return Math.round((b - a) / 86400000);
  }
  function baseUrl() {
    try { return document.baseURI || location.href; } catch (err) { return 'https://localhost/'; }
  }
  function historyUrl(path) {
    return new URL('price-history/' + path, baseUrl()).href;
  }
  function trendUrl(path) {
    return new URL('price-trends/' + path, baseUrl()).href;
  }
  function notify() {
    listeners.slice().forEach(function (fn) {
      try { fn(); } catch (err) { if (window.console) console.error(err); }
    });
  }
  let notifyTimer = null;
  function scheduleNotify() {
    if (notifyTimer) return;
    notifyTimer = setTimeout(function () {
      notifyTimer = null;
      notify();
    }, 30);
  }
  function fetchJson(url, cacheMode) {
    if (typeof fetch !== 'function') return Promise.reject(new Error('当前浏览器不支持 fetch'));
    return fetch(url, { cache: cacheMode || 'no-cache' }).then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    });
  }

  /* ------------------------------------------------------------------ */
  /* 浏览器持久缓存：IndexedDB 优先，失败时退化为内存                    */
  /* ------------------------------------------------------------------ */
  function openStorage() {
    if (state.storageReady) return state.storageReady;
    state.storageReady = new Promise(function (resolve) {
      let indexed = null;
      try { indexed = typeof indexedDB !== 'undefined' ? indexedDB : null; } catch (err) { indexed = null; }
      if (!indexed) { resolve(null); return; }
      let request;
      try { request = indexed.open(DB_NAME, 1); } catch (err) { resolve(null); return; }
      let settled = false;
      const finish = function (db) {
        if (settled) return;
        settled = true;
        resolve(db || null);
      };
      request.onupgradeneeded = function () {
        const db = request.result;
        if (!db.objectStoreNames.contains(DB_STORE)) db.createObjectStore(DB_STORE);
      };
      request.onsuccess = function () { finish(request.result); };
      request.onerror = function () { finish(null); };
      request.onblocked = function () { finish(null); };
      setTimeout(function () { finish(null); }, 4000);
    });
    return state.storageReady;
  }

  function storageGet(key) {
    return openStorage().then(function (db) {
      const memory = state.memoryStore[key];
      if (!db) return memory || null;
      return new Promise(function (resolve) {
        try {
          const request = db.transaction(DB_STORE, 'readonly').objectStore(DB_STORE).get(key);
          request.onsuccess = function () { resolve(request.result || memory || null); };
          request.onerror = function () { resolve(memory || null); };
        } catch (err) {
          resolve(memory || null);
        }
      });
    });
  }

  function storageSet(key, value) {
    state.memoryStore[key] = value;
    return openStorage().then(function (db) {
      if (!db) return;
      return new Promise(function (resolve) {
        try {
          const tx = db.transaction(DB_STORE, 'readwrite');
          tx.objectStore(DB_STORE).put(value, key);
          tx.oncomplete = function () { resolve(); };
          tx.onerror = function () { resolve(); };
          tx.onabort = function () { resolve(); };
        } catch (err) {
          resolve();
        }
      });
    }).catch(function () {});
  }

  function storageDelete(key) {
    delete state.memoryStore[key];
    return openStorage().then(function (db) {
      if (!db) return;
      return new Promise(function (resolve) {
        try {
          const tx = db.transaction(DB_STORE, 'readwrite');
          tx.objectStore(DB_STORE).delete(key);
          tx.oncomplete = function () { resolve(); };
          tx.onerror = function () { resolve(); };
        } catch (err) {
          resolve();
        }
      });
    }).catch(function () {});
  }

  function storageKeys() {
    return openStorage().then(function (db) {
      if (!db) return Object.keys(state.memoryStore);
      return new Promise(function (resolve) {
        try {
          const request = db.transaction(DB_STORE, 'readonly').objectStore(DB_STORE).getAllKeys();
          request.onsuccess = function () { resolve(request.result || []); };
          request.onerror = function () { resolve(Object.keys(state.memoryStore)); };
        } catch (err) {
          resolve(Object.keys(state.memoryStore));
        }
      });
    });
  }

  function storageClear() {
    state.memoryStore = Object.create(null);
    return openStorage().then(function (db) {
      if (!db) return;
      return new Promise(function (resolve) {
        try {
          const tx = db.transaction(DB_STORE, 'readwrite');
          tx.objectStore(DB_STORE).clear();
          tx.oncomplete = function () { resolve(); };
          tx.onerror = function () { resolve(); };
        } catch (err) {
          resolve();
        }
      });
    }).catch(function () {});
  }

  /* ------------------------------------------------------------------ */
  /* 预计算数据加载                                                      */
  /* ------------------------------------------------------------------ */
  function normalizeManifest(manifest) {
    const next = Object.assign({}, manifest || {});
    next.days = Array.isArray(next.days) ? next.days.filter(function (entry) {
      return entry && /^\d{4}-\d{2}-\d{2}$/.test(String(entry.date));
    }).sort(function (a, b) {
      return String(a.date).localeCompare(String(b.date));
    }) : [];
    next.maxDays = Math.min(MAX_DAYS, Math.max(1, Number(next.maxDays) || MAX_DAYS));
    if (next.days.length) {
      const latest = next.days[next.days.length - 1].date;
      const earliest = addDays(latest, -(next.maxDays - 1));
      next.days = next.days.filter(function (entry) {
        return entry && entry.date >= earliest && entry.date <= latest;
      });
    }
    return next;
  }

  function manifestDates(manifest) {
    return normalizeManifest(manifest).days;
  }

  function isKnownServer(manifest, serverId) {
    return !!(manifest && Array.isArray(manifest.servers) && manifest.servers.some(function (server) {
      return server && server.id === serverId;
    }));
  }

  function pruneCacheToManifest() {
    if (!state.manifest) return;
    const dates = new Set(manifestDates(state.manifest).map(function (entry) { return entry.date; }));
    Object.keys(state.priceCache).forEach(function (serverId) {
      const bucket = state.priceCache[serverId] || {};
      Object.keys(bucket).forEach(function (date) {
        if (!dates.has(date)) delete bucket[date];
      });
      if (!Object.keys(bucket).length) delete state.priceCache[serverId];
    });
    Object.keys(state.serverCache).forEach(function (date) {
      if (!dates.has(date)) delete state.serverCache[date];
    });
    Object.keys(state.rawDays).forEach(function (date) {
      if (!dates.has(date)) delete state.rawDays[date];
    });
    storageKeys().then(function (keys) {
      (keys || []).forEach(function (key) {
        const match = String(key).match(/^(?:p\|[^|]+\||[dr])\|?(\d{4}-\d{2}-\d{2})$/);
        if (!match) return;
        if (!dates.has(match[1])) storageDelete(key);
      });
    });
  }

  function loadManifest(force) {
    if (state.manifest && !force) return Promise.resolve(state.manifest);
    if (state.loadingManifest) return state.loadingManifest;
    state.manifestError = null;
    state.loadingManifest = fetchJson(trendUrl('index.json')).then(function (manifest) {
      const previous = state.manifest;
      state.manifest = normalizeManifest(manifest);
      state.manifestStale = false;
      state.lastLoadedAt = Date.now();
      state.loadingManifest = null;
      pruneCacheToManifest();
      const changed = !previous ||
        previous.generatedAt !== state.manifest.generatedAt ||
        previous.days.length !== state.manifest.days.length ||
        previous.days.some(function (entry, index) {
          const before = previous.days[index];
          return !before || before.date !== entry.date || before.hash !== entry.hash;
        });
      if (changed) {
        state.dataVersion++;
        clearViewCache();
      }
      notify();
      return state.manifest;
    }).catch(function (err) {
      state.manifestError = err && err.message ? err.message : String(err);
      state.loadingManifest = null;
      notify();
      throw err;
    });
    return state.loadingManifest;
  }

  function priceCacheEntry(serverId, date) {
    const bucket = state.priceCache[serverId];
    return bucket ? bucket[date] || null : null;
  }
  function setPriceCache(serverId, date, hash, points) {
    const bucket = state.priceCache[serverId] || (state.priceCache[serverId] = Object.create(null));
    bucket[date] = { hash: hash, points: points };
  }
  function serverCacheEntry(date) {
    return state.serverCache[date] || null;
  }
  function setServerCache(date, hash, servers) {
    state.serverCache[date] = { hash: hash, servers: servers || {} };
  }

  function cacheModeFor(meta) {
    const days = state.manifest ? manifestDates(state.manifest) : [];
    const lastDate = days.length ? days[days.length - 1].date : '';
    return lastDate && meta.date < lastDate ? 'force-cache' : 'no-cache';
  }

  function loadPriceSegment(serverId, meta) {
    const key = 'p|' + serverId + '|' + meta.date;
    if (state.loading[key]) return state.loading[key];
    state.dayError = null;
    const promise = storageGet(key).then(function (hit) {
      if (hit && hit.hash === meta.hash && Array.isArray(hit.points)) {
        setPriceCache(serverId, meta.date, meta.hash, hit.points);
        delete state.failures[key];
        clearViewCache();
        scheduleNotify();
        return hit.points;
      }
      return fetchJson(trendUrl('servers/' + serverId + '/' + meta.date + '.json'), cacheModeFor(meta))
        .then(function (doc) {
          const points = Array.isArray(doc && doc.points) ? doc.points : [];
          setPriceCache(serverId, meta.date, meta.hash, points);
          delete state.failures[key];
          storageSet(key, { hash: meta.hash, points: points });
          state.dataVersion++;
          clearViewCache();
          notify();
          return points;
        });
    }).catch(function (err) {
      state.failures[key] = Date.now();
      state.dayError = '无法加载 ' + meta.date + ' 的走势数据：' + (err && err.message ? err.message : String(err));
      notify();
      throw err;
    });
    state.loading[key] = promise.then(function (value) {
      delete state.loading[key];
      return value;
    }, function (err) {
      delete state.loading[key];
      throw err;
    });
    return state.loading[key];
  }

  function loadServerDay(meta) {
    const key = 'd|' + meta.date;
    if (state.loading[key]) return state.loading[key];
    state.dayError = null;
    const promise = storageGet(key).then(function (hit) {
      if (hit && hit.hash === meta.hash && hit.servers) {
        setServerCache(meta.date, meta.hash, hit.servers);
        delete state.failures[key];
        clearViewCache();
        scheduleNotify();
        return hit.servers;
      }
      return fetchJson(trendUrl('days/' + meta.date + '.json'), cacheModeFor(meta))
        .then(function (doc) {
          const servers = (doc && doc.servers) || {};
          setServerCache(meta.date, meta.hash, servers);
          delete state.failures[key];
          storageSet(key, { hash: meta.hash, servers: servers });
          state.dataVersion++;
          clearViewCache();
          notify();
          return servers;
        });
    }).catch(function (err) {
      state.failures[key] = Date.now();
      state.dayError = '无法加载 ' + meta.date + ' 的区服走势数据：' + (err && err.message ? err.message : String(err));
      notify();
      throw err;
    });
    state.loading[key] = promise.then(function (value) {
      delete state.loading[key];
      return value;
    }, function (err) {
      delete state.loading[key];
      throw err;
    });
    return state.loading[key];
  }

  function loadMeta(meta, mode, serverId) {
    return mode === 'server' ? loadServerDay(meta) : loadPriceSegment(serverId, meta);
  }

  function shouldAutoLoad(meta, mode, serverId) {
    const key = mode === 'server' ? 'd|' + meta.date : 'p|' + serverId + '|' + meta.date;
    const failedAt = Number(state.failures[key]) || 0;
    return !failedAt || Date.now() - failedAt > 30000;
  }

  function clearViewCache() {
    state.viewCache = Object.create(null);
    state.viewCacheOrder = [];
  }

  function cacheView(key, value) {
    if (!key) return value;
    if (state.viewCache[key]) {
      const idx = state.viewCacheOrder.indexOf(key);
      if (idx >= 0) state.viewCacheOrder.splice(idx, 1);
    }
    state.viewCache[key] = value;
    state.viewCacheOrder.push(key);
    while (state.viewCacheOrder.length > 6) {
      const old = state.viewCacheOrder.shift();
      if (old) delete state.viewCache[old];
    }
    return value;
  }

  function applyDelta(target, delta) {
    if (!delta) return 0;
    let count = 0;
    Object.keys(delta).forEach(function (key) {
      const value = delta[key];
      if (value === null) {
        delete target[key];
        count++;
      } else if (isPrice(value)) {
        target[key] = value;
        count++;
      }
    });
    return count;
  }
  function applyServerDelta(target, delta, serverId) {
    const changes = delta && delta[serverId];
    if (!changes) return 0;
    return applyDelta(target, changes);
  }
  function effectiveMap(catalogPrices, quotes) {
    const out = {};
    Object.keys(catalogPrices || {}).forEach(function (id) {
      if (isPrice(catalogPrices[id])) out[id] = catalogPrices[id];
    });
    Object.keys(quotes || {}).forEach(function (id) {
      if (isPrice(quotes[id])) out[id] = quotes[id];
    });
    return out;
  }
  function effectiveStoneMap(catalogPrices, quotes) {
    const out = {};
    Object.keys(catalogPrices || {}).forEach(function (level) {
      if (isPrice(catalogPrices[level])) out[level] = catalogPrices[level];
    });
    Object.keys(quotes || {}).forEach(function (level) {
      if (isPrice(quotes[level])) out[level] = quotes[level];
    });
    return out;
  }

  /* ------------------------------------------------------------------ */
  /* 原始数据（按需）：price-history/ 回放                               */
  /* ------------------------------------------------------------------ */
  function buildPoints(serverId, days) {
    const points = [];
    (days || []).forEach(function (day) {
      if (!day || !day.base) return;
      const base = day.base;
      const quotes = clone((base.prices && base.prices[serverId]) || {});
      const stones = clone((base.stones && base.stones[serverId]) || {});
      const catalogPrices = clone(base.catalogPrices || {});
      const stoneCatalogPrices = clone(base.stoneCatalogPrices || {});
      let coverage = (base.coverage && base.coverage[serverId]) || null;
      let requested = base.requested || [];
      let source = base.source || 'seed';

      points.push(makeRawPoint(base.at, day.date, 'base', quotes, stones, catalogPrices, stoneCatalogPrices, coverage, requested, 0, source, day));

      (day.samples || []).forEach(function (sample) {
        let changed = 0;
        changed += applyServerDelta(quotes, sample.prices, serverId);
        changed += applyServerDelta(stones, sample.stones, serverId);
        changed += applyDelta(catalogPrices, sample.catalogPrices);
        changed += applyDelta(stoneCatalogPrices, sample.stoneCatalogPrices);
        if (sample.coverage && sample.coverage[serverId]) coverage = sample.coverage[serverId];
        if (sample.requested) requested = sample.requested;
        source = sample.source || 'update';
        points.push(makeRawPoint(sample.at, day.date, 'update', quotes, stones, catalogPrices, stoneCatalogPrices, coverage, requested, changed, source, day));
      });
    });
    points.sort(function (a, b) { return Date.parse(a.at) - Date.parse(b.at); });
    return points;
  }

  function makeRawPoint(at, date, kind, quotes, stones, catalogPrices, stoneCatalogPrices, coverage, requested, changed, source, day) {
    const prices = effectiveMap(catalogPrices, quotes);
    const stonePrices = effectiveStoneMap(stoneCatalogPrices, stones);
    return {
      at: at,
      date: date,
      kind: kind,
      source: source,
      quotes: clone(quotes),
      stones: clone(stones),
      catalog: clone(catalogPrices),
      stoneCatalog: clone(stoneCatalogPrices),
      prices: prices,
      stonePrices: stonePrices,
      coverage: coverage,
      requested: requested || [],
      changed: changed,
      quoteCount: Object.keys(quotes || {}).length,
      stoneCount: Object.keys(stones || {}).length,
      pricedCount: Object.keys(prices || {}).length,
      itemCount: Number(day && day.itemCount) || ((DATA.items || []).length)
    };
  }

  function loadDays(dates) {
    const allDates = state.manifest ? manifestDates(state.manifest).map(function (d) { return d.date; }) : [];
    const lastDate = allDates.length ? allDates[allDates.length - 1] : '';
    const pending = [];
    dates.forEach(function (date) {
      if (state.rawDays[date]) return;
      if (state.loadingDays[date]) { pending.push(state.loadingDays[date]); return; }
      const cacheMode = lastDate && date < lastDate ? 'force-cache' : 'no-cache';
      const p = fetchJson(historyUrl('days/' + date + '.json'), cacheMode).then(function (day) {
        state.rawDays[date] = day;
        delete state.loadingDays[date];
        state.dayError = null;
        state.dataVersion++;
        clearViewCache();
        notify();
        return day;
      }).catch(function (err) {
        delete state.loadingDays[date];
        state.dayError = '无法加载 ' + date + ' 的物价历史：' + (err && err.message ? err.message : String(err));
        notify();
        throw err;
      });
      state.loadingDays[date] = p;
      pending.push(p);
    });
    return Promise.allSettled(pending);
  }

  function rawDatesFor(opts) {
    if (!state.manifest) return [];
    const days = manifestDates(state.manifest);
    const allDates = days.map(function (entry) { return entry.date; });
    if (!allDates.length) return [];
    return clampDates(allDates, opts);
  }

  function rawView(serverId, opts) {
    opts = opts || {};
    if (!state.manifest) return { status: 'loading', index: null, points: [] };
    const dates = rawDatesFor(opts);
    const loaded = dates.filter(function (date) { return !!state.rawDays[date]; });
    if (loaded.length !== dates.length) {
      return {
        status: dates.length ? 'loading' : 'ready', index: state.manifest,
        points: [], dates: dates, loaded: loaded.length, total: dates.length
      };
    }
    const key = 'raw|' + serverId + '|' + (opts.from || '') + '|' + (opts.to || '') + '|' + state.dataVersion;
    if (state.rawViews[key]) return state.rawViews[key];
    const allPoints = buildPoints(serverId, dates.map(function (date) { return state.rawDays[date]; }));
    const fromMs = parseBound(opts.from, false);
    const toMs = parseBound(opts.to, true);
    const points = slicePoints(
      allPoints,
      fromMs == null ? Number.NEGATIVE_INFINITY : fromMs,
      toMs == null ? Number.POSITIVE_INFINITY : toMs
    );
    const result = { status: 'ready', index: state.manifest, points: points, dates: dates };
    state.rawViews[key] = result;
    return result;
  }

  function loadRaw(serverId, opts) {
    opts = opts || {};
    return loadManifest().then(function () {
      const dates = rawDatesFor(opts);
      return loadDays(dates).then(function () {
        return rawView(serverId, opts);
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* 预计算数据回放                                                      */
  /* ------------------------------------------------------------------ */
  function replayPriceDay(serverId, meta, entry) {
    const points = [];
    let prices = Object.create(null);
    let quotes = Object.create(null);
    let stones = Object.create(null);
    let stonePrices = Object.create(null);
    const list = (entry && entry.points) || [];
    list.forEach(function (point, index) {
      if (!point) return;
      if (index === 0) {
        prices = clone(point.prices || {});
        quotes = clone(point.quotes || {});
        stones = clone(point.stones || {});
        stonePrices = clone(point.stonePrices || {});
      } else {
        applyDelta(prices, point.prices);
        applyDelta(quotes, point.quotes);
        applyDelta(stones, point.stones);
        applyDelta(stonePrices, point.stonePrices);
      }
      points.push({
        at: point.at,
        date: meta.date,
        kind: index === 0 ? 'base' : 'update',
        source: point.source || '',
        quotes: clone(quotes),
        stones: clone(stones),
        prices: clone(prices),
        stonePrices: clone(stonePrices),
        coverage: point.coverage || null,
        requested: [],
        changed: Number(point.changed) || 0,
        quoteCount: Object.keys(quotes).length,
        stoneCount: Object.keys(stones).length,
        pricedCount: Object.keys(prices).length,
        itemCount: Number(state.manifest && state.manifest.itemCount) || ((DATA.items || []).length)
      });
    });
    return points;
  }

  function replayServerDay(serverId, meta, entry) {
    const points = [];
    let quotes = Object.create(null);
    let stones = Object.create(null);
    const list = (entry && entry.servers && entry.servers[serverId]) || [];
    list.forEach(function (point, index) {
      if (!point) return;
      if (index === 0) {
        quotes = clone(point.quotes || {});
        stones = clone(point.stones || {});
      } else {
        applyDelta(quotes, point.quotes);
        applyDelta(stones, point.stones);
      }
      points.push({
        at: point.at,
        date: meta.date,
        kind: index === 0 ? 'base' : 'update',
        source: point.source || '',
        quotes: clone(quotes),
        stones: clone(stones),
        prices: clone(quotes),
        stonePrices: clone(stones),
        coverage: point.coverage || null,
        requested: [],
        changed: 0,
        quoteCount: Object.keys(quotes).length,
        stoneCount: Object.keys(stones).length,
        pricedCount: Object.keys(quotes).length,
        itemCount: Number(state.manifest && state.manifest.itemCount) || ((DATA.items || []).length)
      });
    });
    return points;
  }

  function clampDates(allDates, opts) {
    if (!allDates.length) return [];
    const firstDate = allDates[0];
    const lastDate = allDates[allDates.length - 1];
    const maxDays = Math.min(MAX_DAYS, Math.max(1, Number(state.manifest && state.manifest.maxDays) || MAX_DAYS));
    const requestedFrom = parseBound(opts && opts.from, false);
    const requestedTo = parseBound(opts && opts.to, true);
    let dayFrom = requestedFrom != null ? beijingDateOf(requestedFrom) : firstDate;
    let dayTo = requestedTo != null ? beijingDateOf(requestedTo) : lastDate;
    if (dayFrom < firstDate) dayFrom = firstDate;
    if (dayTo > lastDate) dayTo = lastDate;
    if (dayFrom > dayTo) { const tmp = dayFrom; dayFrom = dayTo; dayTo = tmp; }
    if (dayDistance(dayFrom, dayTo) + 1 > maxDays) dayFrom = addDays(dayTo, -(maxDays - 1));
    if (dayFrom < firstDate) dayFrom = firstDate;
    return allDates.filter(function (date) { return date >= dayFrom && date <= dayTo; });
  }

  function buildViewPoints(serverId, mode, metas) {
    const allPoints = [];
    metas.forEach(function (meta) {
      const entry = mode === 'server' ? serverCacheEntry(meta.date) : priceCacheEntry(serverId, meta.date);
      if (!entry) return;
      const points = mode === 'server'
        ? replayServerDay(serverId, meta, entry)
        : replayPriceDay(serverId, meta, entry);
      points.forEach(function (point) { allPoints.push(point); });
    });
    allPoints.sort(function (a, b) { return Date.parse(a.at) - Date.parse(b.at); });
    return allPoints;
  }

  function loadingBytes(metas, mode) {
    return metas.reduce(function (sum, meta) {
      return sum + (Number(mode === 'server' ? meta.bytes : (meta.serverBytes || meta.bytes)) || 0);
    }, 0);
  }

  function view(serverId, opts) {
    opts = opts || {};
    const mode = opts.mode === 'server' ? 'server' : 'price';
    if (state.manifestError && !state.manifest) {
      return { status: 'error', error: state.manifestError, index: null, mode: mode };
    }
    if (!state.manifest) {
      loadManifest().catch(function () {});
      return { status: 'loading', index: null, mode: mode, maxDays: MAX_DAYS };
    }
    const days = manifestDates(state.manifest);
    if (!days.length) {
      return {
        status: 'ready', index: state.manifest, mode: mode, maxDays: state.manifest.maxDays,
        dates: [], points: [], from: '', to: '', allFrom: '', allTo: ''
      };
    }
    const allDates = days.map(function (entry) { return entry.date; });
    const selected = clampDates(allDates, opts);
    if (!selected.length) {
      return {
        status: 'ready', index: state.manifest, mode: mode, maxDays: state.manifest.maxDays,
        dates: [], points: [], from: '', to: '', allFrom: '', allTo: ''
      };
    }
    const metaByDate = Object.create(null);
    days.forEach(function (entry) { metaByDate[entry.date] = entry; });
    const metas = selected.map(function (date) { return metaByDate[date]; }).filter(Boolean);
    // 自定义区服不在内置 17 服里时，用 __catalog__ 的目录基准价序列兜底，
    // 与旧版“自定义服务器按当日基准价展示”的行为一致。
    const cacheServerId = mode === 'price' && !isKnownServer(state.manifest, serverId)
      ? '__catalog__'
      : serverId;
    const missing = [];
    const stale = [];
    metas.forEach(function (meta) {
      const entry = mode === 'server' ? serverCacheEntry(meta.date) : priceCacheEntry(cacheServerId, meta.date);
      if (!entry) missing.push(meta);
      else if (entry.hash !== meta.hash) stale.push(meta);
    });
    stale.forEach(function (meta) {
      if (shouldAutoLoad(meta, mode, cacheServerId)) loadMeta(meta, mode, cacheServerId).catch(function () {});
    });

    const firstDate = allDates[0];
    const lastDate = allDates[allDates.length - 1];
    const allFromDay = firstDate;
    const allToDay = lastDate;
    const requestedFrom = parseBound(opts.from, false);
    const requestedTo = parseBound(opts.to, true);
    const placeholderFrom = requestedFrom != null ? hourText(requestedFrom) : serverDateFrom(selected[0]);
    const placeholderTo = requestedTo != null ? hourText(requestedTo) : serverDateTo(selected[selected.length - 1]);

    if (missing.length) {
      missing.forEach(function (meta) {
        if (shouldAutoLoad(meta, mode, cacheServerId)) loadMeta(meta, mode, cacheServerId).catch(function () {});
      });
    }
    const available = metas.filter(function (meta) {
      return mode === 'server' ? !!serverCacheEntry(meta.date) : !!priceCacheEntry(cacheServerId, meta.date);
    });
    // 首次打开或新增日期时没有旧数据才进入整页加载；已有旧数据时先展示，
    // 新增/变化的日期在后台补拉，避免页面闪回加载态。
    if (missing.length && !available.length) {
      const retryable = missing.some(function (meta) { return shouldAutoLoad(meta, mode, cacheServerId); });
      if (!retryable && state.dayError) {
        return {
          status: 'error', error: state.dayError, index: state.manifest, mode: mode,
          dates: selected, from: placeholderFrom, to: placeholderTo,
          allFrom: serverDateFrom(allFromDay), allTo: serverDateTo(allToDay)
        };
      }
      const loaded = metas.length - missing.length;
      const bytesTotal = loadingBytes(metas, mode);
      const bytesLoaded = loadingBytes(available, mode);
      return {
        status: 'loading', index: state.manifest, mode: mode, maxDays: state.manifest.maxDays,
        dates: selected, from: placeholderFrom, to: placeholderTo,
        allFrom: serverDateFrom(allFromDay), allTo: serverDateTo(allToDay),
        loaded: loaded, total: metas.length,
        daysLoaded: loaded, daysTotal: metas.length,
        bytesLoaded: bytesLoaded, bytesTotal: bytesTotal
      };
    }
    if (state.dayError && !available.length) {
      return {
        status: 'error', error: state.dayError, index: state.manifest, mode: mode,
        dates: selected, from: placeholderFrom, to: placeholderTo,
        allFrom: serverDateFrom(allFromDay), allTo: serverDateTo(allToDay)
      };
    }

    const cacheKey = mode + '|' + cacheServerId + '|' + (opts.from || '') + '|' + (opts.to || '') + '|' + state.dataVersion;
    if (state.viewCache[cacheKey]) return state.viewCache[cacheKey];

    const allPoints = buildViewPoints(cacheServerId, mode, available.length ? available : metas);
    let allFrom = serverDateFrom(allFromDay);
    let allTo = serverDateTo(allToDay);
    if (allPoints.length) {
      allFrom = hourText(floorHourMs(Date.parse(allPoints[0].at)));
      allTo = hourText(floorHourMs(Date.parse(allPoints[allPoints.length - 1].at)));
    }
    const allFromMs = parseBound(allFrom, false);
    const allToMs = parseBound(allTo, true);
    let fromMs;
    let toMs;
    if (allPoints.length) {
      fromMs = requestedFrom != null ? requestedFrom : floorHourMs(Date.parse(allPoints[0].at));
      toMs = requestedTo != null ? requestedTo : endOfHourMs(Date.parse(allPoints[allPoints.length - 1].at));
    } else {
      fromMs = requestedFrom != null ? requestedFrom : allFromMs;
      toMs = requestedTo != null ? requestedTo : allToMs;
    }
    if (fromMs < allFromMs) fromMs = allFromMs;
    if (toMs > allToMs) toMs = allToMs;
    if (fromMs > toMs) { const tmp = fromMs; fromMs = toMs; toMs = tmp; }
    const points = slicePoints(allPoints, fromMs, toMs);
    const result = {
      status: 'ready', index: state.manifest, mode: mode, maxDays: state.manifest.maxDays,
      dates: selected, points: points,
      from: hourText(fromMs), to: hourText(toMs),
      allFrom: allFrom, allTo: allTo,
      stale: stale.length > 0,
      partial: missing.length > 0
    };
    return cacheView(cacheKey, result);
  }

  function serverDateFrom(date) {
    return date + 'T00:00';
  }
  function serverDateTo(date) {
    return date + 'T23:00';
  }

  /* ------------------------------------------------------------------ */
  /* 目录与图表纯函数                                                    */
  /* ------------------------------------------------------------------ */
  function items(type, skillId) {
    let list = catalog.slice();
    if (type === 'material' || type === 'product' || type === 'stone') {
      list = list.filter(function (item) { return item.kind === type; });
    }
    if (skillId === 'stone') {
      list = list.filter(function (item) { return item.kind === 'stone'; });
    } else if (skillId) {
      list = list.filter(function (item) {
        return item.kind !== 'stone' && (item.skillIds || [item.skillId]).indexOf(skillId) !== -1;
      });
    }
    list.sort(function (a, b) {
      if (a.skillOrder !== b.skillOrder) return a.skillOrder - b.skillOrder;
      if (a.kind !== b.kind) return a.kind === 'product' ? -1 : 1;
      if (a.tier !== b.tier) return b.tier - a.tier;
      return String(a.name).localeCompare(String(b.name), 'zh-CN');
    });
    return list;
  }

  function item(key) {
    return itemMap[key] || null;
  }

  function priceOf(point, meta) {
    if (!point || !meta) return null;
    if (meta.kind === 'stone') {
      const value = point.stonePrices && point.stonePrices[meta.level];
      return isPrice(value) ? value : null;
    }
    const value = point.prices && point.prices[meta.id];
    return isPrice(value) ? value : null;
  }

  function itemSeries(points, key) {
    const meta = item(key);
    if (!meta) return [];
    const out = [];
    (points || []).forEach(function (point) {
      const price = priceOf(point, meta);
      if (!isPrice(price)) return;
      let quote = null;
      if (meta.kind === 'stone') quote = point.stones && point.stones[meta.level];
      else quote = point.quotes && point.quotes[meta.id];
      out.push({
        at: point.at,
        date: point.date,
        price: price,
        quote: isPrice(quote) ? quote : null,
        source: isPrice(quote) ? '本服报价' : '基准价'
      });
    });
    return out;
  }

  function candles(series, opts) {
    opts = opts || {};
    const data = (series || []).filter(function (d) { return isPrice(d.price); });
    if (data.length < 2) return [];
    const dateCount = new Set(data.map(function (d) { return d.date; })).size;
    const daily = !!opts.daily || (data.length > 60 && dateCount > 1);
    if (daily) {
      const groups = {};
      const order = [];
      data.forEach(function (d) {
        if (!groups[d.date]) { groups[d.date] = []; order.push(d.date); }
        groups[d.date].push(d);
      });
      return order.map(function (date) {
        const list = groups[date];
        const first = list[0];
        const last = list[list.length - 1];
        const prices = list.map(function (d) { return d.price; });
        return {
          at: last.at,
          date: date,
          open: first.price,
          close: last.price,
          high: Math.max.apply(null, prices),
          low: Math.min.apply(null, prices),
          count: list.length,
          source: last.source
        };
      });
    }
    const out = [];
    for (let i = 1; i < data.length; i++) {
      const prev = data[i - 1];
      const cur = data[i];
      out.push({
        at: cur.at,
        date: cur.date,
        open: prev.price,
        close: cur.price,
        high: Math.max(prev.price, cur.price),
        low: Math.min(prev.price, cur.price),
        count: 1,
        source: cur.source
      });
    }
    return out;
  }

  function scatter(points, opts) {
    opts = opts || {};
    const scope = items(opts.type || 'all', opts.skillId || '');
    const metric = opts.metric === 'change' ? 'change' : 'price';
    const highlight = opts.highlightKey || '';
    const first = {};
    (points || []).forEach(function (point) {
      scope.forEach(function (meta) {
        if (first[meta.key] != null) return;
        const price = priceOf(point, meta);
        if (isPrice(price)) first[meta.key] = price;
      });
    });
    const rows = [];
    (points || []).forEach(function (point) {
      scope.forEach(function (meta) {
        const price = priceOf(point, meta);
        if (!isPrice(price)) return;
        const base = first[meta.key];
        if (metric === 'change' && !isPrice(base)) return;
        const change = metric === 'change' ? (price / base - 1) * 100 : null;
        rows.push({
          at: point.at,
          date: point.date,
          itemKey: meta.key,
          itemId: meta.id,
          name: meta.name,
          kind: meta.kind,
          skillId: meta.skillId,
          skillName: meta.skillName,
          tierName: meta.tierName,
          color: meta.tierColor || meta.color,
          price: price,
          basePrice: base,
          change: change,
          source: point.quotes && isPrice(point.quotes[meta.id]) ? '本服报价'
            : point.stones && isPrice(point.stones[meta.level]) ? '本服报价' : '基准价',
          highlight: meta.key === highlight
        });
      });
    });
    const total = rows.length;
    const maxRows = opts.maxRows || 2600;
    let shown = rows;
    if (rows.length > maxRows) {
      const marked = rows.filter(function (row) { return row.highlight; });
      const rest = rows.filter(function (row) { return !row.highlight; });
      const budget = Math.max(1, maxRows - marked.length);
      const step = Math.max(1, Math.ceil(rest.length / budget));
      shown = marked.concat(rest.filter(function (_, index) { return index % step === 0; }));
    }
    shown.sort(function (a, b) {
      if (a.highlight !== b.highlight) return a.highlight ? 1 : -1;
      return Date.parse(a.at) - Date.parse(b.at);
    });
    return { rows: shown, total: total, shown: shown.length, scope: scope.length, metric: metric };
  }

  function scopeStats(points, opts) {
    opts = opts || {};
    const scope = items(opts.type || 'all', opts.skillId || '');
    let priced = 0;
    let top = null;
    scope.forEach(function (meta) {
      const series = itemSeries(points, meta.key);
      if (!series.length) return;
      priced++;
      if (series.length < 2) return;
      const first = series[0];
      const last = series[series.length - 1];
      if (!isPrice(first.price) || !isPrice(last.price)) return;
      const change = last.price / first.price - 1;
      if (!top || Math.abs(change) > Math.abs(top.change)) {
        top = {
          key: meta.key,
          name: meta.name,
          skillName: meta.skillName,
          change: change,
          first: first.price,
          last: last.price,
          from: first.at,
          to: last.at
        };
      }
    });
    const latest = (points && points.length) ? points[points.length - 1] : null;
    return {
      itemCount: scope.length,
      pricedCount: priced,
      topMover: top,
      latest: latest,
      coverage: latest && latest.coverage ? latest.coverage : null
    };
  }

  function reset() {
    state.manifest = null;
    state.manifestError = null;
    state.loadingManifest = null;
    state.manifestStale = false;
    state.priceCache = Object.create(null);
    state.serverCache = Object.create(null);
    state.rawDays = Object.create(null);
    state.rawViews = Object.create(null);
    state.loading = Object.create(null);
    state.failures = Object.create(null);
    state.loadingDays = Object.create(null);
    state.dayError = null;
    state.memoryStore = Object.create(null);
    state.dataVersion++;
    clearViewCache();
    storageClear();
  }
  function refresh() {
    reset();
    notify();
  }
  function retry() {
    state.manifestError = null;
    state.dayError = null;
    state.failures = Object.create(null);
    notify();
  }
  function invalidate() {
    // 行情更新时只重新校验 manifest；已加载的日期继续可用，只对变化的日期
    // 在后台补拉。这样不会清空当前页，也不会重新下载未变化的历史。
    state.manifestStale = true;
    if (!state.manifest) {
      loadManifest().catch(function () {});
    } else {
      loadManifest(true).catch(function () {});
    }
    notify();
  }
  function onUpdate(fn) {
    if (typeof fn !== 'function') return function () {};
    listeners.push(fn);
    return function () {
      const index = listeners.indexOf(fn);
      if (index >= 0) listeners.splice(index, 1);
    };
  }

  function prefetch(opts) {
    opts = opts || {};
    return loadManifest().then(function (manifest) {
      let metas = manifestDates(manifest);
      if (opts.lastOnly && metas.length) metas = [metas[metas.length - 1]];
      if (!metas.length) return [];
      if (opts.mode === 'server') return Promise.all(metas.map(loadServerDay));
      if (!opts.serverId) return [];
      const serverId = isKnownServer(manifest, opts.serverId) ? opts.serverId : '__catalog__';
      return Promise.all(metas.map(function (meta) { return loadPriceSegment(serverId, meta); }));
    }).catch(function () {});
  }

  window.JX3Trends = {
    view: view,
    rawView: rawView,
    loadRaw: loadRaw,
    items: items,
    item: item,
    itemSeries: itemSeries,
    candles: candles,
    scatter: scatter,
    scopeStats: scopeStats,
    onUpdate: onUpdate,
    reset: reset,
    refresh: refresh,
    invalidate: invalidate,
    retry: retry,
    prefetch: prefetch,
    state: state,
    maxDays: MAX_DAYS,
    _test: {
      buildPoints: buildPoints,
      replayPriceDay: replayPriceDay,
      replayServerDay: replayServerDay,
      clampDates: clampDates,
      itemSeries: itemSeries,
      candles: candles,
      scatter: scatter,
      scopeStats: scopeStats,
      items: items,
      item: item,
      atText: atText,
      parseBound: parseBound,
      hourText: hourText,
      floorHourMs: floorHourMs,
      endOfHourMs: endOfHourMs,
      slicePoints: slicePoints,
      MAX_DAYS: MAX_DAYS
    }
  };
})();
