/* =========================================================================
   剑网三物价助手 · 应用层
   ========================================================================= */
(function () {
  'use strict';

  const C = window.JX3Core;
  const DATA = window.JX3Data;
  const Charts = window.JX3Charts;
  const U = C.U;
  const Store = C.Store;
  const Calc = C.Calc;
  const Route = C.Route;
  const Stone = window.JX3Stone;

  const $ = function (sel) { return document.querySelector(sel); };
  const $$ = function (sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); };

  const scriptPromises = Object.create(null);
  function loadScriptOnce(src) {
    if (scriptPromises[src]) return scriptPromises[src];
    scriptPromises[src] = new Promise(function (resolve, reject) {
      const el = document.createElement('script');
      el.src = src;
      el.async = true;
      el.onload = function () { resolve(); };
      el.onerror = function () { reject(new Error('脚本加载失败：' + src)); };
      document.head.appendChild(el);
    });
    return scriptPromises[src];
  }

  function ensureAudit() {
    if (window.JX3Audit) return Promise.resolve();
    return loadScriptOnce('assets/audit-data.js');
  }

  function ensureBreakthrough() {
    if (window.JX3BT) return Promise.resolve();
    return loadScriptOnce('assets/breakthrough-data.js')
      .then(function () { return loadScriptOnce('assets/breakthrough-model.js'); })
      .then(function () { return loadScriptOnce('assets/breakthrough.js'); });
  }

  function needsAudit(path) {
    return path === '/analysis' || path.indexOf('/skills') === 0;
  }

  function lazyLoadFailed(err) {
    if (window.console) console.error(err);
    if (typeof window.bootLoaderFail === 'function') window.bootLoaderFail('加载失败，请刷新重试');
  }

  const ui = {
    booted: false,
    theme: 'light',
    focusKey: null,
    searchTimer: null,
    composing: false,
    drawer: null,
    modal: null,
    lastFocus: null,
    lastPath: null,
    trendPickerOpen: false,
    trendPickerQuery: '',
    trendFilterOpen: false,
    trendRankAllOpen: false,
    trendTab: 'price',
    serverItemTab: 'price',
    profitSkill: '',
    serverPickerOpen: false,
    serverProductPickerOpen: false,
    serverProductQuery: '',
    serverFilterOpen: false,
    serverItemPickerOpen: false,
    serverItemQuery: '',
    serverItemRankQuery: '',
    serverRecentItems: null,
    trendScroll: Object.create(null),
    trendCenterKey: null
  };

  const EXCEL_DOWNLOADS = [
    { href: 'https://cherishxie.github.io/JX3-AH-Calculator/downloads/jx3-excel.xlsm?v=4', file: '剑网3技艺收益与突破.xlsm', name: '宏版 .xlsm', desc: '打开自动拉取 + 手动按钮；失败保留快照', ext: '推荐' },
    { href: 'https://cherishxie.github.io/JX3-AH-Calculator/downloads/jx3-excel-auto.xlsx?v=4', file: '剑网3技艺收益与突破-auto.xlsx', name: '无宏自动版 .xlsx', desc: 'Power Query 打开时刷新；预填快照', ext: '自动' },
    { href: 'https://cherishxie.github.io/JX3-AH-Calculator/downloads/jx3-excel.xlsx?v=4', file: '剑网3技艺收益与突破.xlsx', name: '无宏静态版 .xlsx', desc: '内置快照，WPS / 离线可用', ext: '离线' }
  ];

  /* ------------------------------------------------------------------ */
  /* 图标                                                               */
  /* ------------------------------------------------------------------ */
  const PATHS = {
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    leaf: '<path d="M20 4c-6 0-11 3-13 8-1.2 3.2.6 6.6 4 7.4 5.2 1.2 8.2-3.2 9-7.4.4-2.4 0-5 0-8Z"/><path d="M4 21c2.5-5 6-8.5 11-11"/>',
    pickaxe: '<path d="M4 20l8-8"/><path d="M9 6c2.5-2.5 6.5-2.8 9.5-1L15 8.5"/><path d="M13 10l5 5"/><path d="M14.5 4.5c2.5 1.2 4.5 3.8 5 6.5"/>',
    knife: '<path d="M4 20l9-9"/><path d="M13 11l6.5-6.5a1.5 1.5 0 0 1 2 2L15 13"/><path d="M4 20l-1 1"/>',
    hammer: '<path d="M14 4l6 6-3 3-6-6 3-3Z"/><path d="M11 7L4 14v3l3 3 7-7"/><path d="M3 21l3-3"/>',
    thread: '<path d="M7 3h10v11a5 5 0 0 1-5 5H7V3Z"/><path d="M9 7h6M9 10h6M9 13h6"/><path d="M12 19v2"/>',
    flask: '<path d="M9 3h6"/><path d="M10 3v6L5.5 17a2 2 0 0 0 1.7 3h9.6a2 2 0 0 0 1.7-3L14 9V3"/><path d="M8 14h8"/>',
    pot: '<path d="M4 10h16v4a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6v-4Z"/><path d="M7 10V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/><path d="M3 10h18"/><path d="M9 5c0-1 .8-2 2-2M13 5c0-1 .8-2 2-2"/>',
    home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h5v-6h4v6h5V10"/><path d="M9 20v-4h6v4"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    trend: '<path d="M3 17l6-6 4 4 7-8"/><path d="M14 7h6v6"/>',
    coin: '<circle cx="12" cy="12" r="8.5"/><path d="M9 9h6v6H9z"/><path d="M12 3v3M12 18v3"/>',
    gem: '<path d="M6 3h12l3 5-9 13L3 8l3-5Z"/><path d="M3 8h18M9 3l3 18 3-18"/>',
    database: '<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/><path d="M4 11.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="3.5" cy="6" r="1"/><circle cx="3.5" cy="12" r="1"/><circle cx="3.5" cy="18" r="1"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.14.6.7 1 1.55 1H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1Z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
    download: '<path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M4 21h16"/>',
    upload: '<path d="M12 17V5"/><path d="M7 10l5-5 5 5"/><path d="M4 21h16"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
    trash: '<path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v5M14 11v5"/>',
    x: '<path d="M18 6L6 18M6 6l12 12"/>',
    chevronDown: '<path d="M6 9l6 6 6-6"/>',
    chevronRight: '<path d="M9 5l7 7-7 7"/>',
    arrowRight: '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>',
    arrowUp: '<path d="M12 19V5"/><path d="M6 11l6-6 6 6"/>',
    arrowDown: '<path d="M12 5v14"/><path d="M6 13l6 6 6-6"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8Z"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    alert: '<path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    compare: '<path d="M12 3v18"/><path d="M7 8H3l2.5 4L3 16h4"/><path d="M17 8h4l-2.5 4L21 16h-4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    refresh: '<path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/>',
    external: '<path d="M14 4h6v6"/><path d="M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    shield: '<path d="M12 3l8 3v6c0 4.4-3.2 7.9-8 9-4.8-1.1-8-4.6-8-9V6l8-3Z"/><path d="M9 12l2 2 4-4"/>',
    spark: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/>',
    filter: '<path d="M3 5h18l-7 8v6l-4-2v-4L3 5Z"/>',
    refreshPrice: '<path d="M4 4v6h6"/><path d="M20 20v-6h-6"/><path d="M4.6 15a8 8 0 0 0 13.8 2.4M19.4 9A8 8 0 0 0 5.6 6.6"/>'
  };

  function icon(name, cls) {
    const p = PATHS[name] || PATHS.info;
    return '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"' +
      (cls ? ' class="' + cls + '"' : '') + ' aria-hidden="true">' + p + '</svg>';
  }

  /* ------------------------------------------------------------------ */
  /* 基础读取 / 格式化                                                   */
  /* ------------------------------------------------------------------ */
  function state() { return Store.state; }
  function settings() { return Store.state.settings; }
  function currentTaxRate() {
    const t = Number(settings().taxRate);
    return Number.isFinite(t) ? Math.max(0, Math.min(1, t)) : 0.05;
  }

  function appVersion() {
    const meta = document.querySelector('meta[name="app-version"]');
    return meta ? (meta.getAttribute('content') || 'dev') : 'dev';
  }
  function isDevDeployment() {
    try { return /\/dev(?:\/|$)/.test(location.pathname); } catch (err) { return false; }
  }

  function checkForUpdates() {
    if (ui.updateChecking) return;
    ui.updateChecking = true;
    toast('正在检查更新…');

    function finish(result) {
      ui.updateChecking = false;
      if (result && result.status === 'available') {
        toast(result.fallback ? '发现新版本，请刷新页面完成更新' : '发现新版本，请查看底部更新提示');
      } else if (result && result.status === 'latest') {
        toast('已是最新版本');
      } else if (result && result.status === 'pending') {
        toast('发现新版本，正在准备，请稍后再试');
      } else if (result && result.status === 'unsupported') {
        toast('当前浏览器不支持更新检查', 'warn');
      } else {
        toast('检查更新失败，请稍后重试', 'error');
      }
    }

    // 无 Service Worker（或移动端内嵌浏览器尚未注册成功）时，
    // 仍用 updates.json 对比版本，避免直接提示“不支持更新检查”。
    function fallbackCheck() {
      if (typeof fetch !== 'function') {
        finish({ status: 'unsupported' });
        return;
      }
      fetch('./updates.json?t=' + Date.now(), { cache: 'no-store' })
        .then(function (response) { return response.ok ? response.json() : null; })
        .then(function (data) {
          if (!data) { finish({ status: 'error' }); return; }
          const build = document.querySelector('meta[name="app-build"]');
          const buildDate = build ? (build.getAttribute('content') || '') : '';
          const buildChanged = isDevDeployment() && buildDate && data.date && data.date !== buildDate;
          const latest = data.appVersion || data.version;
          if ((latest && latest !== appVersion()) || buildChanged) {
            finish({ status: 'available', fallback: true });
          } else {
            finish({ status: 'latest' });
          }
        })
        .catch(function () { finish({ status: 'error' }); });
    }

    const api = window.__JX3_PWA__;
    if (!api || typeof api.check !== 'function') {
      fallbackCheck();
      return;
    }
    api.check().then(function (result) {
      if (result && result.status === 'unsupported') fallbackCheck();
      else finish(result);
    }).catch(function () {
      finish({ status: 'error' });
    });
  }
  var dataSyncTimer = null;
  var dataSyncBusy = false;
  var lastDataCheck = 0;
  var dataSyncStarted = 0;
  var dataSyncHideTimer = null;
  var marketCheckedAt = 0;
  try { marketCheckedAt = Number(localStorage.getItem('jx3-market-checked-at')) || 0; } catch (e) { /* ignore */ }

  function shanghaiClock() {
    // 不依赖 Intl/时区数据库：用 UTC + 8 小时得到北京时间。
    var now = new Date();
    var cst = new Date(now.getTime() + 8 * 3600000);
    return { hour: cst.getUTCHours(), minute: cst.getUTCMinutes() };
  }

  function marketTimeText(ts) {
    return ts ? U.fmtTime(ts) : '—';
  }
  function dataRoot(path) {
    return (isDevDeployment() ? '../' : './') + path;
  }

  function updateMarketStatus() {
    var updated = Date.parse(DATA.meta.priceUpdatedAt) || 0;
    var a = document.querySelector('[data-market-updated]');
    var b = document.querySelector('[data-market-checked]');
    if (a) a.textContent = marketTimeText(updated);
    if (b) b.textContent = marketTimeText(marketCheckedAt);
  }

  function setMarketChecked(ts) {
    marketCheckedAt = ts;
    try { localStorage.setItem('jx3-market-checked-at', String(ts)); } catch (e) { /* ignore */ }
    updateMarketStatus();
  }

  function dataSyncBox() {
    var el = document.getElementById('data-sync');
    if (el) return el;
    el = document.createElement('div');
    el.id = 'data-sync';
    el.className = 'data-sync';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    el.innerHTML = '<span class="data-sync__spinner" aria-hidden="true"></span><span class="data-sync__text"></span>';
    document.body.appendChild(el);
    return el;
  }

  function showDataSync(state, text) {
    var el = dataSyncBox();
    var label = el.querySelector('.data-sync__text');
    if (dataSyncHideTimer) {
      clearTimeout(dataSyncHideTimer);
      dataSyncHideTimer = null;
    }
    el.hidden = false;
    el.className = 'data-sync is-' + state;
    el.setAttribute('aria-busy', state === 'loading' ? 'true' : 'false');
    if (label) label.textContent = text || '';
    if (state !== 'loading') {
      dataSyncHideTimer = setTimeout(function () {
        el.hidden = true;
        el.className = 'data-sync';
      }, state === 'done' ? 2400 : 3200);
    }
  }

  function finishDataSync(state, text) {
    var wait = Math.max(0, 700 - (Date.now() - dataSyncStarted));
    setTimeout(function () { showDataSync(state, text); }, wait);
  }

  function fetchWithTimeout(url, options, timeout) {
    return new Promise(function (resolve, reject) {
      var settled = false;
      var timer = setTimeout(function () {
        if (settled) return;
        settled = true;
        reject(new Error('timeout'));
      }, timeout);
      fetch(url, options).then(function (response) {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        resolve(response);
      }, function (error) {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        reject(error);
      });
    });
  }

  function mergePriceData(next) {
    if (!next || !next.meta || !next.meta.priceUpdatedAt || !next.serverPrices) return false;
    // 行情更新会改 seedVersion 以触发下次整页加载迁移，但目录结构没变；
    // 页面内静默刷新只比较 catalogVersion，不能把价格修订误判成代码/结构更新。
    if (DATA.meta.catalogVersion && next.meta.catalogVersion && next.meta.catalogVersion !== DATA.meta.catalogVersion) {
      return false;
    }
    DATA.serverPrices = next.serverPrices || {};
    DATA.meta.priceUpdatedAt = next.meta.priceUpdatedAt;
    if (next.meta.seedVersion) DATA.meta.seedVersion = next.meta.seedVersion;
    if (next.meta.priceCoverage) DATA.meta.priceCoverage = next.meta.priceCoverage;
    if (next.meta.serverCoverage) DATA.meta.serverCoverage = next.meta.serverCoverage;
    if (next.stonePrices) DATA.stonePrices = next.stonePrices;
    if (next.meta.stonePriceUpdatedAt) DATA.meta.stonePriceUpdatedAt = next.meta.stonePriceUpdatedAt;

    var byId = {};
    (next.items || []).forEach(function (it) { byId[it.id] = it; });
    var apply = function (list) {
      (list || []).forEach(function (it) {
        var fresh = byId[it.id];
        if (fresh) {
          it.base = fresh.base;
          it.priceSource = fresh.priceSource;
        }
      });
    };
    apply(DATA.items);
    // 页面当前读取的是 Store.state.items，必须一起更新，否则行情刷新后数值不变。
    if (C.Store && C.Store.state) {
      apply(C.Store.state.items);
      C.Store.save();
    }
    // 行情更新只让走势数据重新校验 manifest，已加载的日期留在浏览器里，
    // 只补今天新增/变化的片段；不要 reset() 清空重载。
    if (window.JX3Trends && window.JX3Trends.invalidate) window.JX3Trends.invalidate();
    return true;
  }

  function renderAfterDataSync() {
    var x = window.scrollX || window.pageXOffset || 0;
    var y = window.scrollY || window.pageYOffset || 0;
    var path = location.hash;
    var wraps = document.querySelectorAll('.table-wrap');
    var lefts = [];
    for (var i = 0; i < wraps.length; i++) lefts.push(wraps[i].scrollLeft);

    render();
    if (ui.drawer) renderDrawer();
    if (ui.modal) renderModal();

    var next = document.querySelectorAll('.table-wrap');
    for (var j = 0; j < next.length && j < lefts.length; j++) next[j].scrollLeft = lefts[j];

    requestAnimationFrame(function () {
      if (location.hash === path) window.scrollTo(x, y);
    });
  }

  function checkForDataUpdate(force) {
    if (dataSyncBusy) {
      if (force) toast('正在检查行情，请稍候', 'info');
      return;
    }
    if (!force && Date.now() - lastDataCheck < 60000) return;
    if (ui.drawer || ui.modal) return;
    var active = document.activeElement;
    if (active && active.tagName && /^(INPUT|TEXTAREA|SELECT)$/.test(active.tagName)) return;

    dataSyncBusy = true;
    lastDataCheck = Date.now();

    fetchWithTimeout(dataRoot('version.json') + '?t=' + Date.now(), { cache: 'no-store' }, 10000)
      .then(function (response) { return response.ok ? response.json() : null; })
      .then(function (version) {
        if (!version || !version.dataUpdatedAt) {
          if (force) toast('无法确认远程行情', 'warn');
          return;
        }
        setMarketChecked(Date.now());
        const remoteTs = Date.parse(version.dataUpdatedAt) || 0;
        const localTs = Date.parse(DATA.meta.priceUpdatedAt) || 0;
        // CDN 可能仍返回旧 version.json：远程时间不晚于本地时绝不做降级同步，
        // 避免在“行情更新中”里反复循环。
        if (!(remoteTs > localTs)) {
          if (force) toast('行情已是最新 · ' + U.fmtTime(Math.max(remoteTs, localTs)), 'success');
          return;
        }

        dataSyncStarted = Date.now();
        showDataSync('loading', '行情更新中…');
        if (force) toast('检测到行情更新，正在同步…', 'info');

        return fetchWithTimeout(dataRoot('assets/data.js') + '?t=' + Date.now(), { cache: 'no-store' }, 15000)
          .then(function (response) {
            if (!response.ok) throw new Error('HTTP ' + response.status);
            return response.text();
          })
          .then(function (text) {
            var marker = text.indexOf('window.JX3Data');
            var start = text.indexOf('{', marker);
            var end = text.lastIndexOf('}');
            if (marker < 0 || start < 0 || end < 0) throw new Error('invalid data');
            var next = JSON.parse(text.slice(start, end + 1));
            var nextTs = Date.parse(next.meta && next.meta.priceUpdatedAt) || 0;
            var currentTs = Date.parse(DATA.meta.priceUpdatedAt) || 0;
            if (nextTs && currentTs && nextTs <= currentTs) {
              finishDataSync('done', '行情已是最新');
              return;
            }

            if (!mergePriceData(next)) {
              finishDataSync('error', '数据目录已变化，请刷新页面');
              return;
            }
            if (ui.drawer || ui.modal) {
              finishDataSync('done', '行情已更新');
              return;
            }
            var current = document.activeElement;
            if (current && current.tagName && /^(INPUT|TEXTAREA|SELECT)$/.test(current.tagName)) {
              finishDataSync('done', '行情已更新');
              return;
            }

            renderAfterDataSync();
            finishDataSync('done', '行情已更新 · ' + U.fmtTime(Date.parse(next.meta.priceUpdatedAt)));
          })
          .catch(function () {
            finishDataSync('error', '行情更新失败，稍后重试');
            if (force) toast('行情更新失败，稍后重试', 'error');
          });
      })
      .catch(function () {
        if (force) toast('行情检查失败，请稍后重试', 'error');
      })
      .then(function () { dataSyncBusy = false; });
  }

  function dataSyncTick() {
    var clock = shanghaiClock();
    var postRun = (clock.minute >= 6 && clock.minute <= 20) || (clock.minute >= 36 && clock.minute <= 50);
    var gap = postRun ? 120000 : 300000;
    if (Date.now() - lastDataCheck >= gap) checkForDataUpdate();
    dataSyncTimer = setTimeout(dataSyncTick, 60000);
  }

  window.__JX3_DATA_SYNC__ = {
    check: function () { return checkForDataUpdate(true); },
    tick: dataSyncTick,
    merge: mergePriceData
  };

  function skill(id) { return C.skillOf(id); }
  function tier(id) { return C.tierOf(id); }
  function item(id) { return C.itemOf(id); }
  function recipe(id) { return C.recipeOf(id); }
  function server() { return C.serverOf(Store.state.serverId) || Store.state.servers[0]; }
  function currentBasis(params) { return (params && params.basis) || settings().basis || 'market'; }
  function currentRows(params) {
    return Calc.rows({ serverId: Store.state.serverId, basis: currentBasis(params) });
  }

  function tierBadge(t) {
    return '<span class="tier-badge" style="--tier:' + t.color + '"><i></i>' + U.esc(t.name) + '</span>';
  }
  function typeBadge(type) {
    return type === 'gather'
      ? '<span class="badge badge-positive badge-dot">采集</span>'
      : '<span class="badge badge-info badge-dot">制造</span>';
  }
  function statusBadge(row) {
    if (row.calc.missing) return '<span class="badge badge-warning" title="存在未定价的材料或产物">缺价</span>';
    if (row.calc.profit < 0) return '<span class="badge badge-danger">亏损</span>';
    if (row.recipe.custom) return '<span class="badge badge-custom">自定义</span>';
    if (!row.recipe.verified) return '<span class="badge badge-neutral">示例</span>';
    return '';
  }
  function verifiedBadge(recipe) {
    if (recipe.custom) return '<span class="badge badge-custom">自定义</span>';
    return recipe.verified
      ? '<span class="badge badge-verified" title="已核对当前版本配方结构；价格仍可能为示例">配方已核验</span>'
      : '<span class="badge badge-neutral" title="' + U.esc(recipe.origin || '示例配方') + '">待校验</span>';
  }
  function deltaText(value, base, suffix) {
    if (!Number.isFinite(value) || !Number.isFinite(base) || base === 0) return '';
    const pct = (value - base) / Math.abs(base);
    const cls = pct >= 0 ? 'up' : 'down';
    const arrow = pct >= 0 ? icon('arrowUp') : icon('arrowDown');
    if (Math.abs(pct) >= 2) {
      return '<span class="' + cls + '">' + arrow + (value / base).toFixed(1) + '×</span><span>' + U.esc(suffix || '中位') + '</span>';
    }
    return '<span class="' + cls + '">' + arrow + U.fmtPct(Math.abs(pct), 0) + '</span><span>' + U.esc(suffix || '较中位') + '</span>';
  }
  function money(v, d) { return U.fmt(v, d == null ? 2 : d); }
  function perEnergyText(v) { return v == null ? '—' : U.fmt(v, 2); }
  function qtyText(o) {
    const base = (o.qtyMin != null && o.qtyMax != null && o.qtyMax > o.qtyMin)
      ? o.qtyMin + '~' + o.qtyMax
      : String(o.qty);
    const chance = o.chance == null ? 1 : Number(o.chance);
    return chance < 0.999 ? base + ' · ' + (chance * 100).toFixed(chance < 0.1 ? 1 : 0) + '%' : base;
  }
  function skillIcon(s, size) {
    return '<span class="skill-icon ' + (size || '') + '" style="--sc:' + s.color + '">' + icon(s.icon) + '</span>';
  }
  function priceStateBadge(p) {
    if (p.missing) return '<span class="price-state missing">缺价</span>';
    if (p.user) return '<span class="price-state user">已校准</span>';
    if (p.quote) return '<span class="price-state seed" title="来自 JX3BOX 该服拍卖样本">行情</span>';
    return '<span class="price-state seed" title="该服无报价，回退梦江南示例价">示例</span>';
  }

  function auditServer(sid) {
    const A = window.JX3Audit;
    return A && A.servers ? A.servers[sid] || null : null;
  }
  function auditRecipe(sid, recipeId) {
    const s = auditServer(sid);
    return s && s.recipes ? s.recipes[recipeId] || null : null;
  }
  function accessOf(itemId) {
    const A = window.JX3Access;
    return A && A.items ? A.items[itemId] || null : null;
  }
  function quoteStateOf(item) {
    const sid = Store.state.serverId;
    const p = Store.price(sid, item.id);
    if (p.user) return { label: '手动', cls: 'user', title: '手动校准价格' };
    if (p.quote) return { label: '实价', cls: 'ok', title: '本服 JX3BOX 拍卖报价' };
    const a = accessOf(item.id);
    if (a && (a.t === 'vendor' || a.v)) return { label: '商店', cls: 'vendor', title: a.s || '主城商店常驻' };
    if (p.v > 0) return { label: '示例', cls: 'seed', title: '无本服报价，回退目录示例价' };
    return { label: '缺价', cls: 'missing', title: '无报价且无目录价' };
  }
  function quoteBadge(item) {
    const q = quoteStateOf(item);
    return '<span class="price-state ' + q.cls + '" title="' + U.esc(q.title) + '">' + q.label + '</span>';
  }
  function gradeText(grade) {
    return grade === 'A' ? '可做' : grade === 'B' ? '谨慎' : grade === 'C' ? '不可做' : grade === 'G' ? '采集' : '';
  }
  function gradeBadge(grade, opts) {
    if (!grade) return '<span class="badge badge-neutral">—</span>';
    const cls = grade === 'A' ? 'badge-positive' : grade === 'B' ? 'badge-warning' : 'badge-neutral';
    const label = gradeText(grade);
    const tip = opts && opts.title ? opts.title : (grade === 'A' ? '本服报价完整，可直接做' : grade === 'B' ? '薄市、波动或需自产，谨慎做' : '缺价或负收益，暂不可做');
    return '<span class="badge ' + cls + '" title="' + U.esc(tip) + '">' + label + '</span>';
  }
  function auditRowsFor(sid, opts) {
    opts = opts || {};
    const crossServer = !!opts.crossServer;
    const s = auditServer(sid);
    if (!s) return [];
    return Object.keys(s.recipes || {}).map(function (id) {
      const r = recipe(id);
      const rec = s.recipes[id];
      if (!r || !rec) return null;
      return {
        id: id, name: r.name, skill: r.skillId,
        grade: crossServer ? rec.g : rec.gl, gradeDefault: crossServer ? rec.gd : rec.gld,
        perE: rec.p, paperPerE: rec.pp, medianPerE: rec.mp, profit: rec.pr, energy: rec.e,
        outCov: rec.oc, persistence: rec.op, feasibility: rec.f, cv: rec.cv,
        selfCraft: rec.sc, blocked: rec.b || [], thin: (crossServer ? rec.t : rec.tl) || []
      };
    }).filter(Boolean);
  }
  function priceInput(itemId, opts) {
    opts = opts || {};
    const p = Store.price(Store.state.serverId, itemId);
    const val = p.missing ? '' : (Number.isInteger(p.v) ? String(p.v) : p.v.toFixed(2));
    return '<input class="price-input' + (p.missing ? ' is-missing' : '') + (opts.sm ? ' sm' : '') + '"' +
      ' type="number" min="0" step="0.01" inputmode="decimal"' +
      ' value="' + U.esc(val) + '" placeholder="未定价"' +
      ' data-price-item="' + U.esc(itemId) + '" data-fkey="price:' + U.esc(itemId) + '"' +
      ' aria-label="' + U.esc((item(itemId) ? item(itemId).name : itemId) + ' 本服单价（金）') + '">';
  }
  function tierOptions(selected, extra) {
    let html = extra === false ? '' : '<option value="">全部品阶</option>';
    DATA.tiers.forEach(function (t) {
      html += '<option value="' + t.id + '"' + (String(selected) === String(t.id) ? ' selected' : '') + '>' + U.esc(t.name) + '</option>';
    });
    return html;
  }
  function skillOptions(selected, extra) {
    let html = extra === false ? '' : '<option value="">全部技艺</option>';
    DATA.skills.forEach(function (s) {
      html += '<option value="' + s.id + '"' + (selected === s.id ? ' selected' : '') + '>' + U.esc(s.name) + '</option>';
    });
    return html;
  }

  const CATEGORY_META = {};
  (DATA.meta.categories || []).forEach(function (c) { CATEGORY_META[c.id] = c; });
  function categoryName(id) {
    if (id === 'life') return '配方相关';
    return (CATEGORY_META[id] && CATEGORY_META[id].name) || '其他';
  }
  function categoryOptions(selected) {
    let html = '<option value="">全部分类</option>';
    html += '<option value="life"' + (selected === 'life' ? ' selected' : '') + '>配方相关</option>';
    (DATA.meta.categories || []).forEach(function (c) {
      html += '<option value="' + c.id + '"' + (selected === c.id ? ' selected' : '') + '>' + U.esc(c.name) + '</option>';
    });
    return html;
  }
  function itemCategory(it) {
    return it.category || (it.life ? 'life' : 'other');
  }
  function categoryCounts() {
    const counts = {};
    (Store.state.items || []).forEach(function (it) {
      const c = itemCategory(it);
      counts[c] = (counts[c] || 0) + 1;
    });
    return counts;
  }

  function localPriceCounts() {
    let quote = 0, vendor = 0, base = 0;
    (Store.state.items || []).forEach(function (it) {
      const price = Store.price(Store.state.serverId, it.id);
      if (price.user) return;
      if (price.quote) quote++;
      else if ((accessOf(it.id) || {}).t === 'vendor' || (accessOf(it.id) || {}).v) vendor++;
      else if (price.v > 0) base++;
    });
    return { quote: quote, vendor: vendor, base: base };
  }
  function currentServerUpdatedAt() {
    let ts = 0;
    const bucket = Store.state.prices[Store.state.serverId] || {};
    Object.keys(bucket).forEach(function (k) {
      const t = bucket[k] && bucket[k].t;
      if (t && t > ts) ts = t;
    });
    const stoneBucket = (Store.state.stonePrices && Store.state.stonePrices[Store.state.serverId]) || {};
    Object.keys(stoneBucket).forEach(function (k) {
      const t = stoneBucket[k] && stoneBucket[k].t;
      if (t && t > ts) ts = t;
    });
    return ts ? U.fmtTime(ts) : U.fmtTime(C.seedTimestamp ? C.seedTimestamp() : C.SEED_TS);
  }

  /* ------------------------------------------------------------------ */
  /* 路由参数                                                           */
  /* ------------------------------------------------------------------ */
  function params() { return Route.parse().params; }
  function updateParams(patch, opts) {
    const cur = Route.parse();
    const next = Object.assign({ server: Store.state.serverId }, cur.params, patch || {});
    Object.keys(next).forEach(function (k) {
      if (next[k] === '' || next[k] === null || next[k] === undefined) delete next[k];
    });
    Route.go(cur.path, next, opts);
  }
  function go(path, patch) {
    // 跨页导航只保留服务器上下文，避免把上一页的搜索/筛选带到新页面
    const next = Object.assign({ server: Store.state.serverId }, patch || {});
    Object.keys(next).forEach(function (k) {
      if (next[k] === '' || next[k] === null || next[k] === undefined) delete next[k];
    });
    Route.go(path, next);
  }
  function syncServerFromParams(p) {
    if (p.server && C.serverOf(p.server) && p.server !== Store.state.serverId) {
      Store.state.serverId = p.server;
      Store.save();
    }
  }

  /* ------------------------------------------------------------------ */
  /* 数据筛选 / 排序                                                     */
  /* ------------------------------------------------------------------ */
  function filterRows(rows, p) {
    const type = p.type || 'all';
    const skillId = p.skill || '';
    const tierId = p.tier || '';
    const only = p.only || '';
    const q = (p.q || '').trim();
    return rows.filter(function (r) {
      if (type === 'craft' && r.type !== 'craft') return false;
      if (type === 'gather' && r.type !== 'gather') return false;
      if (skillId && r.recipe.skillId !== skillId) return false;
      if (tierId && String(r.recipe.tier) !== String(tierId)) return false;
      if (only === 'profit' && !(r.calc.profit > 0 && !r.calc.missing)) return false;
      if (q) {
        const hay = r.recipe.name + ' ' + r.outputNames + ' ' + r.skill.name + ' ' + (r.recipe.note || '');
        if (!U.includes(hay, q)) return false;
      }
      return true;
    });
  }

  function sortRows(rows, sort, dir) {
    const key = sort || 'perEnergy';
    const mul = dir === 'asc' ? 1 : -1;
    return rows.slice().sort(function (a, b) {
      let av, bv;
      switch (key) {
        case 'name': av = a.recipe.name; bv = b.recipe.name; break;
        case 'skill': av = a.skill.name; bv = b.skill.name; break;
        case 'cost': av = a.calc.totalCost; bv = b.calc.totalCost; break;
        case 'output': av = a.calc.outputValue; bv = b.calc.outputValue; break;
        case 'profit': av = a.calc.profit; bv = b.calc.profit; break;
        case 'energy': av = a.calc.energy; bv = b.calc.energy; break;
        case 'margin': av = a.calc.margin; bv = b.calc.margin; break;
        case 'level': av = a.recipe.level; bv = b.recipe.level; break;
        case 'perEnergy':
        default:
          av = a.calc.missing ? null : a.calc.perEnergy;
          bv = b.calc.missing ? null : b.calc.perEnergy;
          break;
      }
      if (av == null && bv == null) return 0;
      if (av == null) return 1;
      if (bv == null) return -1;
      if (typeof av === 'string') return av.localeCompare(bv, 'zh-CN') * mul;
      return (av - bv) * mul;
    });
  }

  function sortHeader(label, key, p, align) {
    const active = (p.sort || 'perEnergy') === key;
    const dir = active ? (p.dir || 'desc') : 'desc';
    const ind = active ? '<span class="sort-ind">' + (dir === 'desc' ? '▼' : '▲') + '</span>' : '';
    return '<th class="' + (align === 'num' ? 'num ' : '') + 'sortable" data-sort="' + key + '" tabindex="0" role="button" aria-sort="' +
      (active ? (dir === 'desc' ? 'descending' : 'ascending') : 'none') + '">' + U.esc(label) + ind + '</th>';
  }

  /* ------------------------------------------------------------------ */
  /* 空态 / 提示                                                        */
  /* ------------------------------------------------------------------ */
  function emptyState(title, desc, action, ic) {
    return '<div class="empty"><span class="ic">' + icon(ic || 'search') + '</span><h3>' + U.esc(title) + '</h3>' +
      (desc ? '<p>' + U.esc(desc) + '</p>' : '') + (action || '') + '</div>';
  }
  function notice(text, type) {
    return '<div class="notice ' + (type === 'info' ? 'info' : '') + '">' + icon(type === 'info' ? 'info' : 'alert') +
      '<div>' + text + '</div></div>';
  }
  function toast(message, type) {
    const root = $('#toast-root');
    const el = document.createElement('div');
    el.className = 'toast ' + (type || '');
    el.setAttribute('role', 'status');
    el.innerHTML = '<span class="ic">' + icon(type === 'error' ? 'alert' : type === 'warn' ? 'alert' : 'check') + '</span><span class="msg">' + U.esc(message) + '</span>';
    root.appendChild(el);
    setTimeout(function () {
      el.style.opacity = '0';
      el.style.transform = 'translateY(4px)';
      setTimeout(function () { el.remove(); }, 220);
    }, type === 'error' ? 4200 : 2600);
  }

  /* ------------------------------------------------------------------ */
  /* 外壳                                                               */
  /* ------------------------------------------------------------------ */
  const PAGE_TITLES = {
    '/overview': '总览',
    '/skills': '生活技艺',
    '/prices': '行情',
    '/analysis': '精力收益分析',
    '/trends': '物价走势',
    '/server-trends': '区服趋势',
    '/breakthrough': '突破升级',
    '/stones': '五行石'
  };

  function navItems() {
    const rows = Calc.rows({ serverId: Store.state.serverId, basis: settings().basis });
    const miss = Calc.stats(Store.state.serverId).missing;
    return [
      {
        group: '工作台', items: [
          { href: Route.href('/overview'), label: '总览', icon: 'grid', path: '/overview' }
        ]
      },
      {
        group: '行情', items: [
          { href: Route.href('/skills/shennong'), label: '生活技艺', icon: 'hammer', path: '/skills', badge: DATA.skills.length },
          { href: Route.href('/prices'), label: '行情', icon: 'database', path: '/prices', badge: miss || '' },
          { href: Route.href('/stones'), label: '五行石', icon: 'gem', path: '/stones', badge: (DATA.stones || []).length || '' }
        ]
      },
      {
        group: '分析', items: [
          { href: Route.href('/analysis'), label: '精力收益', icon: 'chart', path: '/analysis', badge: rows.filter(function (r) { return !r.calc.missing; }).length },
          { href: Route.href('/trends'), label: '物价走势', icon: 'trend', path: '/trends' },
          { href: Route.href('/server-trends'), label: '区服趋势', icon: 'trend', path: '/server-trends' },
          { href: Route.href('/breakthrough'), label: '突破升级', icon: 'arrowUp', path: '/breakthrough' }
        ]
      }
    ];
  }

  function excelDownloadMenu() {
    return '<details class="excel-menu-wrap">' +
      '<summary class="icon-btn" aria-haspopup="menu" aria-label="下载 Excel 工作簿" title="下载 Excel 工作簿">' + icon('download') + '</summary>' +
      '<div class="menu excel-menu" role="menu" aria-label="下载 Excel 工作簿">' +
        '<div class="menu-label">下载 Excel 工作簿</div>' +
        EXCEL_DOWNLOADS.map(function (it) {
          return '<a class="menu-item" role="menuitem" href="' + it.href + '" download="' + U.esc(it.file) + '">' +
            icon('download') +
            '<span class="stack"><span class="name">' + U.esc(it.name) + '</span><span class="desc">' + U.esc(it.desc) + '</span></span>' +
            '<span class="ext">' + U.esc(it.ext) + '</span></a>';
        }).join('') +
        '<div class="menu-sep"></div>' +
        '<div class="menu-foot"><span class="tiny dim">宏版需启用宏；自动版需 Excel Power Query。</span></div>' +
      '</div>' +
    '</details>';
  }

  function renderShell(path, p) {
    const srv = server();
    const nav = navItems();
    let navHtml = '';
    nav.forEach(function (g) {
      navHtml += '<div class="nav-group-title">' + U.esc(g.group) + '</div>';
      g.items.forEach(function (it) {
        const active = path === it.path || (it.path !== '/' && path.indexOf(it.path + '/') === 0);
        navHtml += '<a class="nav-item' + (active ? ' active' : '') + '" href="' + it.href + '"' +
          (active ? ' aria-current="page"' : '') + '>' + icon(it.icon) +
          '<span class="label">' + U.esc(it.label) + '</span>' +
          (it.badge ? '<span class="nav-badge">' + U.esc(String(it.badge)) + '</span>' : '') + '</a>';
      });
    });

    $('#sidebar').innerHTML =
      '<div class="brand">' +
        '<span class="brand-seal">账</span>' +
        '<div class="brand-text"><div class="brand-name">剑网三物价助手</div><div class="brand-sub">JX3 PRICE LEDGER</div></div>' +
      '</div>' +
      '<div class="side-scroll">' + navHtml + '</div>' +
      '<div class="side-foot">' +
        '<button class="side-link" data-action="open-excel-downloads">' + icon('download') + '<span class="label">下载 Excel</span></button>' +
        '<button class="side-link" data-action="check-update">' + icon('refresh') + '<span class="label">检查更新</span></button>' +
        '<button class="side-link" data-action="open-data">' + icon('shield') + '<span class="label">数据说明</span></button>' +
        '<button class="side-link" data-action="open-settings">' + icon('settings') + '<span class="label">设置与备份</span></button>' +
        '<button class="side-link" data-action="export-json">' + icon('download') + '<span class="label">导出备份</span><span class="ext">JSON</span></button>' +
      '</div>';

    const title = path.indexOf('/skills/') === 0
      ? '生活技艺 · ' + (skill(path.split('/')[2]) || {}).name
      : (PAGE_TITLES[path] || '未找到');

    const serverList = Store.state.servers.map(function (s) {
      return '<button class="server-option' + (s.id === srv.id ? ' active' : '') + '" data-action="set-server" data-server="' + U.esc(s.id) + '">' +
        '<span class="check">' + (s.id === srv.id ? icon('check') : '') + '</span>' +
        '<span>' + U.esc(s.name) + '</span><span class="reg">' + U.esc(s.region || '') + '</span></button>';
    }).join('');

    $('#header').innerHTML =
      '<button class="icon-btn mobile-menu" data-action="toggle-mobile-nav" aria-label="打开导航">' + icon('menu') + '</button>' +
      '<div class="crumbs"><span class="home">剑网三物价助手</span><span class="sep"></span><span class="cur">' + U.esc(title) + '</span></div>' +
      '<div class="header-right">' +
        (isDevDeployment() ? '<span class="badge badge-warning dev-badge" title="开发预览环境，非生产版本">DEV</span>' : '') +
        '<span class="header-version"><span class="dot"></span><span class="v">' + U.esc(DATA.meta.version) + '</span></span>' +
        '<div class="server-wrap">' +
          '<button class="server-trigger" data-action="toggle-server-menu" aria-haspopup="listbox" aria-expanded="' + (ui.serverMenuOpen ? 'true' : 'false') + '">' +
            icon('database') + '<span class="sname">' + U.esc(srv.name) + '</span><span class="sregion">' + U.esc(srv.region || '') + '</span>' + icon('chevronDown', 'caret') +
          '</button>' +
          '<div class="menu server-menu' + (ui.serverMenuOpen ? ' open' : '') + '" role="listbox" aria-label="选择服务器">' +
            '<div class="menu-label">选择服务器</div>' + serverList +
            '<div class="menu-sep"></div>' +
            '<button class="menu-item" data-action="open-add-server">' + icon('plus') + '<span>新增服务器</span></button>' +
            '<button class="menu-item" data-action="open-settings">' + icon('settings') + '<span>服务器与数据设置</span><span class="sub">⌘,</span></button>' +
          '</div>' +
        '</div>' +
        excelDownloadMenu() +
        '<button class="icon-btn" data-action="check-update" aria-label="检查更新" title="检查更新">' + icon('refresh') + '</button>' +
        '<button class="icon-btn" data-action="toggle-theme" aria-label="切换明暗主题">' + icon(ui.theme === 'light' ? 'moon' : 'sun') + '</button>' +
        '<button class="icon-btn" data-action="open-data" aria-label="数据说明">' + icon('info') + '</button>' +
      '</div>';
  }

  /* ------------------------------------------------------------------ */
  /* 总览                                                               */
  /* ------------------------------------------------------------------ */
  function renderOverview(p) {
    const rows = currentRows(p);
    const filtered = filterRows(rows, p);
    const sorted = sortRows(filtered.filter(function (r) { return !r.calc.missing; }), 'perEnergy', 'desc');
    const validAll = rows.filter(function (r) { return !r.calc.missing && r.calc.perEnergy != null; });
    const best = Calc.bestOf(filtered);
    const median = Calc.median(validAll.map(function (r) { return r.calc.perEnergy; }));
    const positives = rows.filter(function (r) { return !r.calc.missing && r.calc.profit > 0; }).length;
    const negatives = rows.filter(function (r) { return !r.calc.missing && r.calc.profit < 0; }).length;
    const missing = rows.filter(function (r) { return r.calc.missing; }).length;
    const stats = Calc.stats(Store.state.serverId);
    const audit = auditServer(Store.state.serverId);
    const ac = audit && audit.items;
    let localQuote = 0, localVendor = 0, localBase = 0;
    (Store.state.items || []).forEach(function (it) {
      const price = Store.price(Store.state.serverId, it.id);
      if (price.user) return;
      if (price.quote) localQuote++;
      else if ((accessOf(it.id) || {}).t === 'vendor' || (accessOf(it.id) || {}).v) localVendor++;
      else if (price.v > 0) localBase++;
    });
    const catCounts = categoryCounts();
    const categoryBadges = (DATA.meta.categories || []).map(function (c) {
      return '<span class="badge badge-outline">' + U.esc(c.name) + ' ' + (catCounts[c.id] || 0) + '</span>';
    }).join('');
    const sim = Calc.simulate(rows, settings().energyBudget);
    const type = p.type || 'all';
    const tierId = p.tier || '';
    const topChart = sorted.slice(0, 10);

    let rankRows = topChart.map(function (r, i) {
      return {
        label: r.recipe.name,
        meta: (i + 1) + ' · ' + r.skill.name,
        value: r.calc.perEnergy,
        color: r.type === 'gather' ? Charts.color.gather : Charts.color.craft,
        id: r.recipe.id,
        tip: r.recipe.name + ' · ' + r.skill.name + ' · ' + U.fmt(r.calc.profit, 2) + ' 金利润 / ' + U.fmtInt(r.calc.energy) + ' 精力'
      };
    });

    const kpiBest = best ? best.calc.perEnergy : null;
    const kpiBestName = best ? best.recipe.name : '暂无完整数据';
    const kpiBestSub = best ? best.skill.name + ' · ' + U.fmt(best.calc.profit, 2) + ' 金 / ' + U.fmtInt(best.calc.energy) + ' 精力' : '请先补齐材料价格';

    let html = '<div class="page">';
    html += '<div class="page-head"><div><h1 class="page-title">总览</h1>' +
      '<p class="page-sub">苍生铸世 50 级 · 生活技艺成本、精力收益与行情目录。所有价格按「' + U.esc(server().name) + '」计算；配方物品参与收益，行情物品只做价格查询。</p>' +
      '<div class="flex" style="flex-wrap:wrap;gap:6px;margin-top:8px"><span class="badge badge-outline">行情目录 ' + DATA.items.length + '</span>' + categoryBadges + '</div></div>' +
      '<div class="page-tools">' +
        '<span class="badge badge-outline" title="可在设置中修改默认成本口径">成本口径：' + (currentBasis(p) === 'min' ? '取最低' : '市场价') + '</span>' +
        '<span class="badge badge-outline" title="所有产物售价按此税率扣税，可在设置中修改">交易税 ' + U.fmtPct(currentTaxRate(), 0) + '</span>' +
        '<span class="badge badge-outline">' + icon('clock') + ' 核验 ' + U.esc(DATA.meta.verifiedAt) + '</span>' +
        '<a class="btn" href="' + Route.href('/prices') + '">' + icon('refreshPrice') + '<span class="txt">校准行情</span></a>' +
      '</div></div>';

    html += '<div class="kpi-grid">' +
      '<div class="kpi"><div class="kpi-label">最优精力收益 <span class="info" data-tip="按当前筛选与成本口径，收益最高且数据完整的配方">' + icon('info') + '</span></div>' +
        '<div class="kpi-value">' + (kpiBest == null ? '—' : U.fmt(kpiBest, 2)) + '<span class="kpi-unit">金/精力</span></div>' +
        '<div class="kpi-meta">' + (best ? icon('spark') + '<span class="strong">' + U.esc(best.recipe.name) + '</span><span class="sep"></span><span>' + U.esc(kpiBestName === best.recipe.name ? best.skill.name : '') + '</span>' : '<span>补齐材料价格后自动计算</span>') + '</div>' +
        '<div class="kpi-meta">' + (kpiBest != null && median != null ? deltaText(kpiBest, median, '较全站中位') : '<span>中位 ' + (median == null ? '—' : U.fmt(median, 2)) + '</span>') + '</div>' +
      '</div>' +
      '<div class="kpi"><div class="kpi-label">盈利配方 <span class="info" data-tip="利润大于 0 且材料/产物齐全的配方数量">' + icon('info') + '</span></div>' +
        '<div class="kpi-value">' + positives + '<span class="kpi-unit">/ ' + rows.length + ' 配方</span></div>' +
        '<div class="kpi-meta"><span class="down">亏损 ' + negatives + '</span><span class="sep"></span><span class="warn">数据不全 ' + missing + '</span></div>' +
        '<div class="progress' + (positives > negatives ? ' is-positive' : '') + '"><i style="width:' + (rows.length ? Math.round(positives / rows.length * 100) : 0) + '%"></i></div>' +
      '</div>' +
      '<div class="kpi"><div class="kpi-label">本服行情校准 <span class="info" data-tip="已手动填入的价格占全部物品的比例；未校准项使用示例/昨日均价">' + icon('info') + '</span></div>' +
        '<div class="kpi-value">' + Math.round(stats.calibrated * 100) + '<span class="kpi-unit">% 已校准</span></div>' +
        '<div class="kpi-meta"><span>' + stats.user + ' 项已校准</span><span class="sep"></span><span>拍卖实价 ' + (ac ? ac.quote : localQuote) + '</span><span class="sep"></span><span>商店 ' + (ac ? ac.vendor : localVendor) + '</span><span class="sep"></span><span class="warn">示例 ' + (ac ? ac.base : localBase) + '</span></div>' +
        '<div class="progress is-warn"><i style="width:' + Math.round(stats.calibrated * 100) + '%"></i></div>' +
      '</div>' +
      '<div class="kpi"><div class="kpi-label">满精力预估 <span class="info" data-tip="按做最赚的配方、可重复制作、贪心分配当前精力预算">' + icon('info') + '</span></div>' +
        '<div class="kpi-value">' + U.fmt(sim.profit, 2) + '<span class="kpi-unit">金</span></div>' +
        '<div class="kpi-meta"><span>预算 ' + U.fmtInt(settings().energyBudget) + ' 精力</span><span class="sep"></span><span>用尽 ' + U.fmtInt(sim.used) + '</span></div>' +
        '<div class="kpi-meta"><span class="up">' + (sim.allocations[0] ? U.esc(sim.allocations[0].row.recipe.name) + ' × ' + sim.allocations[0].count : '暂无正向配方') + '</span></div>' +
      '</div>' +
    '</div>';

    html += '<div class="grid section-gap">' +
      '<section class="card col-8 chart-card"><div class="card-head"><div class="card-head-main">' +
        '<h2 class="card-title">现在做什么最赚精力？</h2>' +
        '<p class="card-sub">按每点精力收益排序 · Top 10 · 已排除数据不全的配方<span class="mobile-only"> · 左右滑动查看</span></p>' +
      '</div><div class="card-tools">' +
        '<div class="seg seg-sm" role="group" aria-label="类型筛选">' +
          '<button class="' + (type === 'all' ? 'active' : '') + '" data-filter="type" data-value="">全部</button>' +
          '<button class="' + (type === 'craft' ? 'active' : '') + '" data-filter="type" data-value="craft">制造</button>' +
          '<button class="' + (type === 'gather' ? 'active' : '') + '" data-filter="type" data-value="gather">采集</button>' +
        '</div>' +
        '<select class="select" data-filter="tier" aria-label="品阶筛选" style="width:96px">' + tierOptions(tierId) + '</select>' +
        '<button class="icon-btn" data-action="export-chart" data-target="chart-overview" aria-label="导出图表 PNG">' + icon('download') + '</button>' +
      '</div></div>' +
      '<div class="card-body tight" id="chart-overview">' +
        Charts.barH(rankRows, {
          palette: Charts.palette(ui.theme),
          unit: ' 金/精力',
          refLine: median,
          refLabel: '全站中位',
          emptyText: '当前筛选无完整数据',
          ariaLabel: '精力收益排行 Top 10'
        }) +
      '</div>' +
      '<div class="card-foot"><div class="chart-legend">' +
        '<span class="item"><span class="swatch" style="--sw:' + Charts.color.craft + '"></span>制造</span>' +
        '<span class="item"><span class="swatch" style="--sw:' + Charts.color.gather + '"></span>采集</span>' +
        '<span class="item"><span class="swatch" style="--sw:' + Charts.color.peak + '"></span>当前最优</span>' +
        '<span class="item"><span class="line"></span>全站中位</span>' +
      '</div><span class="spacer"></span><a href="' + Route.href('/analysis', { type: type || '', tier: tierId || '' }) + '">查看完整分析 ' + icon('arrowRight') + '</a></div>' +
      '</section>' +

      '<aside class="card col-4"><div class="card-head"><div class="card-head-main"><h2 class="card-title">今天精力怎么花？</h2>' +
        '<p class="card-sub">按精力预算贪心分配 · 可重复制作</p></div></div>' +
        '<div class="card-body">' + (sorted.filter(function (r) { return r.calc.profit > 0; }).length
          ? '<div class="rec-list">' + sorted.filter(function (r) { return r.calc.profit > 0; }).slice(0, 3).map(function (r, i) {
              const n = r.calc.energy > 0 ? Math.floor(settings().energyBudget / r.calc.energy) : 0;
              return '<div class="rec-item"><span class="rec-rank">' + (i + 1) + '</span><div class="rec-main">' +
                '<div class="nm">' + U.esc(r.recipe.name) + (i === 0 ? ' <span class="badge badge-peak">首选</span>' : '') + '</div>' +
                '<div class="ds">' + U.esc(r.skill.name) + ' · 单次 ' + U.fmtSigned(r.calc.profit, 2) + ' 金 · ' + U.fmtInt(r.calc.energy) + ' 精力</div></div>' +
                '<div class="rec-val"><b class="pos">' + U.fmt(r.calc.perEnergy, 2) + '</b><span>金/精力</span></div></div>';
            }).join('') + '</div>' +
            '<div class="hairline"></div>' +
            '<div class="info-row"><span class="k">首选做满 ' + U.fmtInt(settings().energyBudget) + ' 精力</span><span class="v">' +
              (sim.allocations[0] ? sim.allocations[0].count : 0) + ' 次</span></div>' +
            '<div class="info-row"><span class="k">预计总收益</span><span class="v pos">+' + U.fmt(sim.profit, 2) + ' 金</span></div>' +
            '<div class="info-row"><span class="k">精力用尽</span><span class="v">' + U.fmtInt(sim.used) + ' / ' + U.fmtInt(sim.budget) + '</span></div>'
          : emptyState('暂无正向收益配方', '补齐材料与产物价格，或检查成本口径。', '<a class="btn btn-sm" href="' + Route.href('/prices') + '">去校准价格</a>', 'coin')) +
        '</div>' +
        '<div class="card-foot"><span>已扣 ' + U.fmtPct(currentTaxRate(), 0) + ' 交易税，不含暴击额外产出</span><span class="spacer"></span>' +
        '<button class="btn btn-sm btn-ghost" data-action="open-settings">调整预算</button></div>' +
      '</aside>' +
    '</div>';

    const skillMap = Calc.skillStats(rows);
    const skillRows = DATA.skills.map(function (s) {
      return { skill: s, stat: skillMap[s.id] };
    }).sort(function (a, b) {
      return (b.stat.avg || -999) - (a.stat.avg || -999);
    });

    html += '<div class="grid section-gap">' +
      '<section class="card col-7"><div class="card-head"><div class="card-head-main">' +
        '<h2 class="card-title">哪个技艺整体更划算？</h2>' +
        '<p class="card-sub">按配方等权平均 · 含采集与制造</p></div>' +
        '<div class="card-tools"><a class="btn btn-sm" href="' + Route.href('/skills/' + (skillRows[0] ? skillRows[0].skill.id : 'shennong')) + '">进入技艺 ' + icon('arrowRight') + '</a></div></div>' +
        '<div class="table-wrap medium"><table class="data compact"><thead><tr>' +
          '<th>技艺</th><th>类型</th><th class="num">配方</th><th class="num">平均精力收益</th><th class="num">最优产物</th>' +
        '</tr></thead><tbody>' +
        skillRows.map(function (x) {
          const bestRow = x.stat.best;
          return '<tr class="clickable" data-skill-link="' + x.skill.id + '" tabindex="0">' +
            '<td><div class="cell-main">' + skillIcon(x.skill, 'sm') + '<div class="txt"><div class="t1">' + U.esc(x.skill.name) + '</div><div class="t2">' + x.stat.count + ' 个' + (x.skill.type === 'gather' ? '采集点' : '配方') + '</div></div></div></td>' +
            '<td>' + typeBadge(x.skill.type) + '</td>' +
            '<td class="num">' + x.stat.countComplete + ' / ' + x.stat.count + '</td>' +
            '<td class="num ' + (x.stat.avg > 0 ? 'pos' : x.stat.avg < 0 ? 'neg' : '') + '">' + (x.stat.avg == null ? '—' : U.fmt(x.stat.avg, 2)) + '</td>' +
            '<td class="num">' + (bestRow ? '<span class="dim">' + U.esc(bestRow.recipe.name) + '</span> <span class="strong">' + U.fmt(bestRow.calc.perEnergy, 2) + '</span>' : '—') + '</td>' +
          '</tr>';
        }).join('') +
        '</tbody></table></div>' +
      '</section>' +

      '<section class="card col-5"><div class="card-head"><div class="card-head-main"><h2 class="card-title">本服行情准备好了吗？</h2>' +
        '<p class="card-sub">价格决定收益，先校准最常用的材料</p></div></div>' +
        '<div class="card-body">' +
          '<div class="info-rows">' +
            '<div class="info-row"><span class="k">当前服务器</span><span class="v">' + U.esc(server().name) + ' <span class="dim tiny">' + U.esc(server().region || '') + '</span></span></div>' +
            '<div class="info-row"><span class="k">已校准价格</span><span class="v">' + stats.user + ' / ' + stats.total + '</span></div>' +
            '<div class="info-row"><span class="k">示例 / 昨日均价</span><span class="v">' + stats.seed + ' 项</span></div>' +
            '<div class="info-row"><span class="k">缺少价格</span><span class="v ' + (stats.missing ? 'neg' : 'pos') + '">' + stats.missing + ' 项</span></div>' +
            '<div class="info-row"><span class="k">最近更新</span><span class="v">' + currentServerUpdatedAt() + '</span></div>' +
          '</div>' +
          '<div class="hairline"></div>' +
          '<div class="tiny dim" style="margin-bottom:6px">采集 vs 制造 · 平均精力收益（金/精力）</div>' +
          Charts.diffBar(
            { label: '采集', value: avgPerEnergy(rows.filter(function (r) { return r.type === 'gather'; })) },
            { label: '制造', value: avgPerEnergy(rows.filter(function (r) { return r.type === 'craft'; })) },
            { palette: Charts.palette(ui.theme) }
          ) +
          '<div class="flex" style="margin-top:4px"><a class="btn btn-sm" href="' + Route.href('/prices') + '">校准行情 ' + icon('arrowRight') + '</a>' +
          '<button class="btn btn-sm" data-action="toggle-server-menu">切换服务器</button></div>' +
        '</div>' +
      '</section>' +
    '</div>';

    html += '<div class="grid section-gap">' + stoneSummaryCard() + '</div>';

    html += dataFoot();
    html += '</div>';
    return html;
  }

  function avgPerEnergy(rows) {
    const vals = rows.filter(function (r) { return !r.calc.missing && r.calc.perEnergy != null; }).map(function (r) { return r.calc.perEnergy; });
    if (!vals.length) return 0;
    return vals.reduce(function (s, v) { return s + v; }, 0) / vals.length;
  }

  /* ------------------------------------------------------------------ */
  /* 五行石                                                             */
  /* ------------------------------------------------------------------ */
  function stoneChip(level, opts) {
    const info = Stone.levelInfo(level);
    return '<span class="stone-chip" style="--sc:' + info.color + '">' +
      (opts && opts.short ? level + '级' : U.esc(info.name)) + '</span>';
  }

  function stonePriceState(p) {
    if (p.missing) return '<span class="price-state missing">缺价</span>';
    if (p.user) return '<span class="price-state user">已校准</span>';
    if (p.quote) return '<span class="price-state seed" title="JX3BOX 该服拍卖样本">行情</span>';
    return '<span class="price-state seed">示例</span>';
  }

  function stonePriceInput(level) {
    const p = Stone.price(Store.state.serverId, level);
    const val = p.missing ? '' : (Number.isInteger(p.v) ? String(p.v) : p.v.toFixed(2));
    return '<input class="price-input stone-price-input' + (p.missing ? ' is-missing' : '') + '"' +
      ' type="number" min="0" step="0.01" inputmode="decimal"' +
      ' value="' + U.esc(val) + '" placeholder="未定价"' +
      ' data-stone-price="' + level + '" data-fkey="stone-price:' + level + '"' +
      ' aria-label="' + U.esc(Stone.levelInfo(level).name + ' 本服单价（金）') + '">';
  }

  function stoneInputsText(r) {
    return (r.inputs || []).map(function (x) { return x.qty + '×' + x.level + '级'; }).join(' + ') || '—';
  }

  function stoneOutcomeText(r) {
    const parts = (r.outcomes || []).map(function (o) {
      return o.level + '级 ' + U.fmtPct(o.chance, o.chance < 0.01 ? 2 : 1);
    });
    const total = (r.outcomes || []).reduce(function (a, o) { return a + o.chance; }, 0);
    if (total < 0.9995) parts.push('失败 ' + U.fmtPct(1 - total, 1));
    return parts.join(' · ');
  }

  function stoneMethodBadge(method) {
    const map = {
      '快速合成': { cls: 'badge-warning', label: '快速合成' },
      '最低金币': { cls: 'badge-info', label: '最优·省金' },
      '最低精力': { cls: 'badge-positive', label: '最优·省精力' },
      '最高精力收益': { cls: 'badge-peak', label: '最优·高收益' },
      '赌跳级': { cls: 'badge-custom', label: '赌跳级' },
      '备选': { cls: 'badge-neutral', label: '备选' }
    };
    const it = map[method] || { cls: 'badge-neutral', label: method };
    return '<span class="badge ' + it.cls + '">' + U.esc(it.label) + '</span>';
  }

  function stoneProfitClass(v) {
    return v == null || !Number.isFinite(v) ? 'dim' : v > 0 ? 'pos' : v < 0 ? 'neg' : '';
  }

  function stonePct(v, d) {
    return v == null || !Number.isFinite(v) ? '—' : U.fmtPct(v, d == null ? 1 : d);
  }

  function stoneCostText(r) {
    return Number.isFinite(r.costPerTarget) ? U.fmt(r.costPerTarget, 2) : '—';
  }

  function stoneEnergyText(r) {
    return Number.isFinite(r.energyPerTarget) ? U.fmt(r.energyPerTarget, 1) : '—';
  }

  function stoneProfitText(r) {
    return r.profitPerTarget == null ? '—' : U.fmtSigned(r.profitPerTarget, 2);
  }

  function stonePerEnergyText(r) {
    return r.perEnergyTarget == null ? '—' : U.fmt(r.perEnergyTarget, 3);
  }

  function stoneMargin(r) {
    return r.profitPerTarget != null && r.targetNet > 0 ? r.profitPerTarget / r.targetNet : null;
  }

  function stoneChartItems(sum) {
    const items = [];
    [3, 4, 5, 6].forEach(function (level) {
      const fast = sum.all.find(function (r) { return r.target === level && r.recipe.mode === 'fast'; });
      const best = sum.best[level];
      if (fast) {
        items.push({
          label: level + '级·快速',
          value: fast.perEnergyTarget,
          color: Charts.color.warning,
          meta: '快速',
          tip: level + '级快速合成 · ' + U.fmt(fast.costPerTarget, 2) + ' 金/颗 · ' + U.fmt(fast.energyPerTarget, 1) + ' 精力/颗'
        });
      }
      if (best && (!fast || best.recipe.id !== fast.recipe.id)) {
        items.push({
          label: level + '级·最优',
          value: best.perEnergyTarget,
          color: Charts.color.craft,
          meta: best.method,
          tip: level + '级' + best.method + ' · ' + U.fmt(best.costPerTarget, 2) + ' 金/颗 · ' + U.fmt(best.energyPerTarget, 1) + ' 精力/颗'
        });
      }
    });
    return items.filter(function (d) { return d.value != null && Number.isFinite(d.value); });
  }

  function renderStones(p) {
    const serverId = Store.state.serverId;
    const tax = Stone.taxRate();
    const sum = Stone.summary({ serverId: serverId });
    const showAll = p.all === '1';
    const normalRows = sum.all.filter(function (r) {
      return r.target >= 3 && r.target <= 6 && (showAll || r.method !== '备选' || r.recipe.custom);
    });
    const jackRows = sum.all.filter(function (r) { return r.target >= 7; });
    const best5 = sum.best[5];
    const best6 = sum.best[6];
    const bestOverall = sum.bestOverall;
    const fast6 = sum.fast6;
    const fast5 = sum.fast5;
    const be7 = sum.be7;
    const be8 = sum.be8;
    const be8from4 = sum.be8from4;
    const fast6p8 = fast6 ? (fast6.cost - fast6.targetNet) / (Stone.netPrice(serverId, 8) - fast6.targetNet) : null;
    const chartItems = stoneChartItems(sum);

    let html = '<div class="page">';
    html += '<div class="page-head"><div><h1 class="page-title">五行石合成</h1>' +
      '<p class="page-sub">苍生铸世 · 1→8 级五行石合成路线、精力收益与爆率盈亏线。快速合成与最优合成分开计算；所有公式可编辑，售价统一扣 ' +
      U.fmtPct(tax, 0) + ' 交易税。</p></div>' +
      '<div class="page-tools">' +
        '<span class="badge badge-outline" title="在设置中修改交易税率">交易税 ' + U.fmtPct(tax, 0) + '</span>' +
        '<span class="badge badge-outline">' + icon('clock') + ' 核验 ' + U.esc(Stone.meta.verifiedAt || DATA.meta.verifiedAt) + '</span>' +
        '<button class="btn btn-sm" data-action="stone-new">' + icon('plus') + '新增公式</button>' +
        '<button class="btn btn-sm" data-action="export-csv" data-csv="stones">' + icon('download') + '<span class="txt">导出 CSV</span></button>' +
        '<button class="btn btn-sm" data-action="stone-reset-all">' + icon('refresh') + '恢复默认</button>' +
      '</div></div>';

    html += '<div style="margin-top:14px">' + notice('当前赛季官方未逐条公布五行石合成公式；默认值来自 2026-07 精炼面板攻略，并用 2026-09 官方「精炼公式未调整」与测试服精六成本交叉核对。7/8 级无稳定保底公式，所有公式可在页面内编辑校准。', 'info') + '</div>';

    html += '<div class="kpi-grid">' +
      '<div class="kpi"><div class="kpi-label">6级最优单颗成本</div>' +
        '<div class="kpi-value">' + (best6 ? U.fmt(best6.costPerTarget, 2) : '—') + '<span class="kpi-unit">金/颗</span></div>' +
        '<div class="kpi-meta">' + (best6 ? icon('spark') + '<span class="strong">' + U.esc(best6.method) + '</span><span class="sep"></span><span>净售 ' + U.fmt(best6.targetNet, 2) + '</span>' : '<span>暂无完整公式</span>') + '</div>' +
        '<div class="kpi-meta">' + (best6 ? '<span class="' + stoneProfitClass(best6.profitPerTarget) + '">利润 ' + U.fmtSigned(best6.profitPerTarget, 2) + ' 金/颗</span><span class="sep"></span><span>' + stoneEnergyText(best6) + ' 精力/颗</span>' : '<span>补齐五行石价格后自动计算</span>') + '</div></div>' +
      '<div class="kpi"><div class="kpi-label">最赚合成 <span class="info" data-tip="按当前价格、自产中间石并计入前序精力，比较 3-6 级全部公式">' + icon('info') + '</span></div>' +
        '<div class="kpi-value">' + (bestOverall ? U.fmt(bestOverall.perEnergyTarget, 3) : '—') + '<span class="kpi-unit">金/精力</span></div>' +
        '<div class="kpi-meta">' + (bestOverall ? '<span class="strong">' + U.esc(bestOverall.target + '级 · ' + bestOverall.method) + '</span><span class="sep"></span><span>' + U.esc(bestOverall.recipe.name) + '</span>' : '<span>暂无正向收益</span>') + '</div>' +
        '<div class="kpi-meta">' + (bestOverall ? '<span>单颗利润 ' + U.fmtSigned(bestOverall.profitPerTarget, 2) + ' 金</span><span class="sep"></span><span>' + stoneEnergyText(bestOverall) + ' 精力/颗</span>' : '') + '</div></div>' +
      '<div class="kpi"><div class="kpi-label">7级盈亏线</div>' +
        '<div class="kpi-value">' + (be7 && be7.breakEven.p != null ? stonePct(be7.breakEven.p, 2) : '—') + '<span class="kpi-unit">爆率</span></div>' +
        '<div class="kpi-meta">' + (be7 ? '<span>单次 ' + U.fmt(be7.cost, 2) + ' 金 / ' + U.fmt(be7.totalEnergy, 0) + ' 精力</span>' : '<span>暂无公式</span>') + '</div>' +
        '<div class="kpi-meta">' + (be7 ? '<span class="dim">净售 ' + U.fmt(be7.targetNet, 2) + ' 金 · 当前填写 ' + stonePct(be7.targetChance, 2) + '</span>' : '') + '</div></div>' +
      '<div class="kpi"><div class="kpi-label">8级盈亏线</div>' +
        '<div class="kpi-value">' + (be8 && be8.breakEven.p != null ? stonePct(be8.breakEven.p, 2) : '—') + '<span class="kpi-unit">爆率</span></div>' +
        '<div class="kpi-meta">' + (be8 ? '<span>单次 ' + U.fmt(be8.cost, 2) + ' 金 / ' + U.fmt(be8.totalEnergy, 0) + ' 精力</span>' : '<span>暂无公式</span>') + '</div>' +
        '<div class="kpi-meta">' + (be8 ? '<span class="dim">净售 ' + U.fmt(be8.targetNet, 2) + ' 金 · 当前填写 ' + stonePct(be8.targetChance, 2) + '</span>' : '') + '</div></div>' +
    '</div>';

    html += '<div class="grid section-gap">';
    html += '<section class="card col-8"><div class="card-head"><div class="card-head-main">' +
      '<h2 class="card-title">3-6级：快速合成 vs 最优合成</h2>' +
      '<p class="card-sub">快速合成 = 直接耗 1 级；最优合成 = 自产中间石，分「省金 / 省精力 / 高收益」三条路线。单颗成本含前序金币与累计精力，净售价已扣 ' + U.fmtPct(tax, 0) + ' 交易税。' +
      (showAll ? '当前显示全部备选公式。' : '默认隐藏备选公式。') + '</p></div>' +
      '<div class="card-tools">' +
        '<label class="switch"><input type="checkbox" data-toggle="stone-all" data-value="1"' + (showAll ? ' checked' : '') + '><span class="track"></span>显示全部公式</label>' +
      '</div></div>' +
      '<div class="table-wrap"><table class="data stone-table"><thead><tr>' +
        '<th>目标</th><th>方式</th><th>最终配方</th><th class="num">单次金币</th><th class="num">精力/颗</th>' +
        '<th class="num">单颗成本</th><th class="num">净售价</th><th class="num">利润/颗</th><th class="num">精力收益</th><th></th>' +
      '</tr></thead><tbody>' +
      (normalRows.length ? normalRows.map(function (r) {
        const margin = stoneMargin(r);
        const isBest = best6 && r.key === best6.key;
        return '<tr class="' + (isBest ? 'selected' : '') + '">' +
          '<td>' + stoneChip(r.target, { short: true }) + '</td>' +
          '<td>' + stoneMethodBadge(r.method) + '</td>' +
          '<td><div class="stone-formula">' + U.esc(stoneInputsText(r.recipe)) + '</div>' +
            '<div class="stone-formula-sub">' + U.esc(r.recipe.name) + ' · 出' + r.target + '级 ' + stonePct(r.targetChance, 1) + '</div></td>' +
          '<td class="num">' + U.fmt(r.cost, 2) + '</td>' +
          '<td class="num">' + stoneEnergyText(r) + '</td>' +
          '<td class="num"><b>' + stoneCostText(r) + '</b></td>' +
          '<td class="num">' + U.fmt(r.targetNet, 2) + '</td>' +
          '<td class="num ' + stoneProfitClass(r.profitPerTarget) + '">' + stoneProfitText(r) + '</td>' +
          '<td class="num"><b class="' + stoneProfitClass(r.perEnergyTarget) + '">' + stonePerEnergyText(r) + '</b></td>' +
          '<td class="actions"><button class="icon-btn" data-action="edit-stone" data-id="' + U.esc(r.recipe.id) + '" aria-label="编辑公式">' + icon('edit') + '</button></td>' +
        '</tr>';
      }).join('') : '<tr><td colspan="11">' + emptyState('暂无五行石公式', '点击右上角新增公式。', '', 'gem') + '</td></tr>') +
      '</tbody></table></div>' +
      '<div class="card-foot"><span>单颗成本 =（投入金币 + 加工费 − 副产物净收入）÷ 出目标级概率；精力/颗含前序合成精力</span>' +
      '<span class="spacer"></span><a href="' + Route.href('/prices') + '">校准价格 ' + icon('arrowRight') + '</a></div></section>';

    html += '<aside class="col-4 flex-col">';
    html += '<section class="card"><div class="card-head"><div class="card-head-main"><h2 class="card-title">本服五行石行情</h2>' +
      '<p class="card-sub">直接改价，本页收益即时重算 · 出售按 ' + U.fmtPct(tax, 0) + ' 扣税</p></div></div>' +
      '<div class="table-wrap medium"><table class="data compact stone-price-table"><thead><tr><th>等级</th><th class="num">买入价（金）</th><th class="num">税后净价</th><th>状态</th></tr></thead><tbody>' +
      Stone.levels.map(function (l) {
        const p = Stone.price(serverId, l.level);
        const np = Stone.netPrice(serverId, l.level);
        return '<tr><td>' + stoneChip(l.level, { short: true }) + '</td>' +
          '<td class="num">' + stonePriceInput(l.level) + '</td>' +
          '<td class="num">' + U.fmt(np, 2) + '</td>' +
          '<td>' + stonePriceState(p) + '</td></tr>';
      }).join('') +
      '</tbody></table></div>' +
      '<div class="card-foot"><span>1级为商店/交易行买入价；7/8级样本少，请以本服交易行为准</span></div></section>';

    html += '<section class="card"><div class="card-head"><div class="card-head-main"><h2 class="card-title">怎么选？</h2>' +
      '<p class="card-sub">按当前服务器价格自动生成</p></div></div><div class="card-body">' +
      '<div class="stone-conclusions">' +
        (fast5 && best5 ? '<div class="stone-conclusion"><b>5级</b><span>快速 ' + U.fmt(fast5.costPerTarget, 2) + ' 金 / ' + U.fmt(fast5.energyPerTarget, 0) + ' 精力 / ' + U.fmt(fast5.perEnergyTarget, 3) + ' 金每精力；最优 ' + U.fmt(best5.costPerTarget, 2) + ' 金 / ' + U.fmt(best5.energyPerTarget, 0) + ' 精力 / ' + U.fmt(best5.perEnergyTarget, 3) + ' 金每精力。</span></div>' : '') +
        (fast6 && best6 ? '<div class="stone-conclusion"><b>6级</b><span>快速 ' + U.fmt(fast6.costPerTarget, 2) + ' 金 / ' + U.fmt(fast6.energyPerTarget, 0) + ' 精力 / ' + U.fmt(fast6.perEnergyTarget, 3) + ' 金每精力；最优 ' + U.fmt(best6.costPerTarget, 2) + ' 金 / ' + U.fmt(best6.energyPerTarget, 0) + ' 精力 / ' + U.fmt(best6.perEnergyTarget, 3) + ' 金每精力。</span></div>' : '') +
        (be7 && be7.breakEven.p != null ? '<div class="stone-conclusion"><b>7级</b><span>单次 ' + U.fmt(be7.cost, 2) + ' 金；市场净价 ' + U.fmt(be7.targetNet, 2) + ' 金。爆率高于 ' + stonePct(be7.breakEven.p, 1) + ' 才值得赌。</span></div>' : '') +
        (be8 && be8.breakEven.p != null ? '<div class="stone-conclusion"><b>8级</b><span>单次 ' + U.fmt(be8.cost, 2) + ' 金；市场净价 ' + U.fmt(be8.targetNet, 2) + ' 金。爆率高于 ' + stonePct(be8.breakEven.p, 1) + ' 才值得赌。</span></div>' : '') +
        '<div class="stone-conclusion"><b>爆率</b><span>' +
          (fast6 && Number.isFinite(fast6p8) ? '快速六级若也能跳八，八级爆率 ≥ ' + stonePct(Math.max(0, fast6p8), 2) + ' 就能把快速六级的亏损打平。' : '') +
          (be8from4 && be8from4.breakEven.p != null ? ' 4精6 冲八（市场四级）需八级爆率 ≥ ' + stonePct(be8from4.breakEven.p, 2) + '；若四级自产，六级基础通常已盈利，八级是额外收益。' : '') +
        '</span></div>' +
      '</div>' +
      '<div class="hairline"></div>' +
      '<div class="tiny dim" style="line-height:17px">公式基于 2026-07 精炼攻略与 2026-09 官方“精炼公式未调整”说明；7/8 级当前赛季无稳定保底公式，默认爆率 0，只算盈亏线。</div>' +
      '</div><div class="card-foot"><button class="btn btn-sm" data-action="open-data">数据来源</button>' +
      '<span class="spacer"></span><button class="btn btn-sm" data-action="stone-new">新增公式</button></div></section>';
    html += '</aside></div>';

    html += '<div class="grid section-gap">' +
      '<section class="card col-7"><div class="card-head"><div class="card-head-main"><h2 class="card-title">快速 vs 最优：每点精力赚多少？</h2>' +
        '<p class="card-sub">柱子为精力收益（金/精力），越高越好；负值表示越做越亏</p></div>' +
        '<div class="card-tools"><button class="icon-btn" data-action="export-chart" data-target="chart-stone-compare" aria-label="导出对比图">' + icon('download') + '</button></div></div>' +
        '<div class="card-body tight" id="chart-stone-compare">' + Charts.columns(chartItems, {
          palette: Charts.palette(ui.theme), unit: '金/精力', labelWidth: 10,
          ariaLabel: '五行石快速合成与最优合成精力收益对比'
        }) + '</div>' +
        '<div class="card-foot"><div class="chart-legend">' +
          '<span class="item"><span class="swatch" style="--sw:' + Charts.color.warning + '"></span>快速合成</span>' +
          '<span class="item"><span class="swatch" style="--sw:' + Charts.color.craft + '"></span>最优合成</span>' +
        '</div><span class="spacer"></span><span>成本与精力均含前序合成</span></div></section>' +

      '<section class="card col-5"><div class="card-head"><div class="card-head-main"><h2 class="card-title">7/8级：爆率盈亏线</h2>' +
        '<p class="card-sub">默认爆率 0，只算“要多少爆率才不亏”；可直接改当前爆率</p></div></div>' +
        '<div class="table-wrap medium"><table class="data compact stone-breakeven-table"><thead><tr>' +
          '<th>目标</th><th class="num">单次成本</th><th>保底</th><th class="num">盈亏线</th><th class="num">当前</th><th class="num">期望/次</th>' +
        '</tr></thead><tbody>' +
        (jackRows.length ? jackRows.map(function (r) {
          const pstar = r.breakEven && r.breakEven.p;
          const w = pstar != null ? Math.max(0, Math.min(100, pstar * 100)) : 0;
          return '<tr>' +
            '<td>' + stoneChip(r.target, { short: true }) + '</td>' +
            '<td class="num">' + U.fmt(r.cost, 2) + '</td>' +
            '<td>' + stoneChip(r.primary, { short: true }) + ' ' + stonePct(r.primaryChance, 0) + '</td>' +
            '<td class="num"><b>' + (pstar == null ? '—' : stonePct(pstar, 2)) + '</b>' +
              '<div class="stone-be-bar"><i style="width:' + w.toFixed(1) + '%"></i></div></td>' +
            '<td class="num">' + stonePct(r.targetChance, 2) + '</td>' +
            '<td class="num ' + stoneProfitClass(r.profitPerAttempt) + '">' + U.fmtSigned(r.profitPerAttempt, 2) + '</td>' +
          '</tr>';
        }).join('') : '<tr><td colspan="6">' + emptyState('暂无 7/8 级公式', '', '', 'gem') + '</td></tr>') +
        '</tbody></table></div>' +
        '<div class="card-foot"><span>盈亏线 =（单次成本 − 保底产出净价）÷（目标净价 − 保底净价）</span></div></section>' +
    '</div>';

    html += '<div class="grid section-gap"><section class="card col-12"><div class="card-head"><div class="card-head-main">' +
      '<h2 class="card-title">7/8级：可编辑爆率与期望利润</h2>' +
      '<p class="card-sub">把游戏内面板或实测爆率填进“当前爆率”，期望利润按每次合成计算；所有公式都能改产物、数量、加工费与精力</p></div>' +
      '<div class="card-tools"><span class="badge badge-outline">7/8级无稳定保底公式</span>' +
      '<button class="btn btn-sm" data-action="stone-new">' + icon('plus') + '新增公式</button></div></div>' +
      '<div class="table-wrap medium"><table class="data stone-jackpot-table"><thead><tr>' +
        '<th>目标</th><th>公式</th><th class="num">单次成本</th><th class="num">精力/次</th><th>保底产出</th><th>跳级产出</th>' +
        '<th class="num">市场净价</th><th class="num">盈亏平衡爆率</th><th class="num">当前爆率</th><th class="num">期望利润/次</th><th>状态</th><th></th>' +
      '</tr></thead><tbody>' +
      (jackRows.length ? jackRows.map(function (r) {
        const pstar = r.breakEven && r.breakEven.p;
        const current = r.targetChance;
        let status = '<span class="badge badge-neutral">待填爆率</span>';
        if (pstar != null && pstar <= 0) status = '<span class="badge badge-positive">基础已盈利</span>';
        else if (pstar != null && current >= pstar) status = '<span class="badge badge-positive">高于盈亏线</span>';
        else if (current > 0) status = '<span class="badge badge-danger">低于盈亏线</span>';
        return '<tr>' +
          '<td>' + stoneChip(r.target, { short: true }) + '</td>' +
          '<td><div class="stone-formula">' + U.esc(stoneInputsText(r.recipe)) + '</div>' +
            '<div class="stone-formula-sub">' + U.esc(r.recipe.name) + '</div></td>' +
          '<td class="num">' + U.fmt(r.cost, 2) + '</td>' +
          '<td class="num">' + U.fmt(r.totalEnergy, 0) + '</td>' +
          '<td>' + stoneChip(r.primary, { short: true }) + ' ' + stonePct(r.primaryChance, 1) + '</td>' +
          '<td>' + stoneChip(r.target, { short: true }) + ' ' + stonePct(current, 2) + '</td>' +
          '<td class="num">' + U.fmt(r.targetNet, 2) + '</td>' +
          '<td class="num"><b class="' + (pstar != null && pstar <= 1 ? 'warn' : 'dim') + '">' + (pstar == null ? '—' : stonePct(pstar, 2)) + '</b></td>' +
          '<td class="num"><input class="input stone-prob-input" type="number" min="0" max="100" step="0.1"' +
            ' value="' + U.fmt(current * 100, 2) + '" data-stone-prob="' + U.esc(r.recipe.id) + '" data-stone-prob-level="' + r.target + '"' +
            ' aria-label="' + U.esc(r.recipe.name + ' 当前爆率（%）') + '"><span class="tiny dim">%</span></td>' +
          '<td class="num ' + stoneProfitClass(r.profitPerAttempt) + '"><b>' + U.fmtSigned(r.profitPerAttempt, 2) + '</b></td>' +
          '<td>' + status + '</td>' +
          '<td class="actions"><button class="icon-btn" data-action="edit-stone" data-id="' + U.esc(r.recipe.id) + '" aria-label="编辑公式">' + icon('edit') + '</button></td>' +
        '</tr>';
      }).join('') : '<tr><td colspan="12">' + emptyState('暂无 7/8 级公式', '点击新增公式，填入你实测的配方与爆率。', '', 'gem') + '</td></tr>') +
      '</tbody></table></div>' +
      '<div class="card-foot"><span>“期望利润/次” = Σ(产出概率 × 税后净价) − 单次投入；“当前爆率”改动会保存到本机</span>' +
      '<span class="spacer"></span><button class="btn btn-sm" data-action="stone-new">新增公式</button></div></section></div>';

    html += renderStoneExtraction(serverId);
    html += dataFoot();
    html += '</div>';
    return html;
  }

  function renderStoneExtraction(serverId) {
    const p6 = Stone.price(serverId, 6).v;
    const net6 = Stone.netPrice(serverId, 6);
    const net7 = Stone.netPrice(serverId, 7);
    const net8 = Stone.netPrice(serverId, 8);
    const rows = [
      { name: '7级 · 精5衣/裤', cost: 525 + 9 * p6, qty: 1, unit: net7, note: '剥七图示；产出 1七级 + 1五级，五级未抵扣' },
      { name: '7级 · 精6武器', cost: 1172 + 32 * p6, qty: 3, unit: net7, note: '剥七图示；产出 3七级 + 1五级，按 3 颗均摊' },
      { name: '8级 · 精8橙戒', cost: (1879 + 80.2 * p6 + 154) / 2, qty: 1, unit: net8, note: '剥八图示；产出 2八级 + 2六级 + 1五级，按 2 颗均摊' }
    ];
    return '<div class="grid section-gap"><section class="card col-12"><div class="card-head"><div class="card-head-main">' +
      '<h2 class="card-title">剥七 / 剥八参考（当前赛季）</h2>' +
      '<p class="card-sub">7/8级主要来自装备剥离；下表按当前 6级价 ' + U.fmt(p6, 2) + ' 金重算，仅作合成之外的对照</p></div>' +
      '<div class="card-tools"><span class="badge badge-outline">受装备与次数限制，不可无限重复</span></div></div>' +
      '<div class="table-wrap medium"><table class="data compact"><thead><tr>' +
        '<th>方法</th><th class="num">总成本</th><th class="num">产出</th><th class="num">单颗成本</th><th class="num">市场净价</th><th class="num">单颗利润</th><th>说明</th>' +
      '</tr></thead><tbody>' +
      rows.map(function (r) {
        const per = r.qty > 1 ? r.cost / r.qty : r.cost;
        return '<tr><td>' + U.esc(r.name) + '</td>' +
          '<td class="num">' + U.fmt(r.cost, 2) + '</td>' +
          '<td class="num">' + r.qty + ' 颗</td>' +
          '<td class="num">' + U.fmt(per, 2) + '</td>' +
          '<td class="num">' + U.fmt(r.unit, 2) + '</td>' +
          '<td class="num ' + stoneProfitClass(r.unit - per) + '">' + U.fmtSigned(r.unit - per, 2) + '</td>' +
          '<td class="dim tiny">' + U.esc(r.note) + '</td></tr>';
      }).join('') +
      '</tbody></table></div>' +
      '<div class="card-foot"><span>成本含剥离费与消耗的 6级五行石；低于目标等级的产出未抵扣；剥离精力未计入</span>' +
      '<span class="spacer"></span><a href="https://www.jx3box.com/community/6597" target="_blank" rel="noopener">来源：剥七&剥八一图示 ' + icon('external') + '</a></div></section></div>';
  }

  function stoneOverviewMini(label, row) {
    if (!row) {
      return '<div class="stone-mini"><div class="k">' + label + '</div><div class="v dim">—</div><div class="s">暂无完整公式</div></div>';
    }
    return '<div class="stone-mini"><div class="k">' + label + '</div>' +
      '<div class="v ' + stoneProfitClass(row.perEnergyTarget) + '">' + U.fmt(row.perEnergyTarget, 3) + '<small>金/精力</small></div>' +
      '<div class="s">' + U.esc(row.method) + ' · ' + U.fmt(row.costPerTarget, 2) + ' 金/颗 · ' + U.fmt(row.energyPerTarget, 0) + ' 精力</div></div>';
  }

  function stoneOverviewBE(label, row) {
    if (!row || row.breakEven.p == null) {
      return '<div class="stone-mini"><div class="k">' + label + '</div><div class="v dim">—</div><div class="s">暂无公式</div></div>';
    }
    return '<div class="stone-mini"><div class="k">' + label + '</div>' +
      '<div class="v warn">' + stonePct(row.breakEven.p, 1) + '<small>盈亏线</small></div>' +
      '<div class="s">净售 ' + U.fmt(row.targetNet, 2) + ' 金 · 当前 ' + stonePct(row.targetChance, 1) + '</div></div>';
  }

  function stoneSummaryCard() {
    const sum = Stone.summary({ serverId: Store.state.serverId });
    return '<section class="card col-12 stone-overview-card"><div class="card-head"><div class="card-head-main">' +
      '<h2 class="card-title">' + icon('gem') + '五行石：合到几级最赚精力？</h2>' +
      '<p class="card-sub">快速 vs 最优 · 5/6级单颗收益 · 7/8级爆率盈亏线 · 售价已扣 ' + U.fmtPct(sum.taxRate, 0) + ' 交易税</p></div>' +
      '<div class="card-tools"><a class="btn btn-sm" href="' + Route.href('/stones') + '">打开五行石合成 ' + icon('arrowRight') + '</a></div></div>' +
      '<div class="card-body"><div class="stone-overview-grid">' +
        stoneOverviewMini('5级最优', sum.best[5]) +
        stoneOverviewMini('6级最优', sum.best[6]) +
        stoneOverviewBE('7级盈亏线', sum.be7) +
        stoneOverviewBE('8级盈亏线', sum.be8) +
      '</div></div>' +
      '<div class="card-foot"><span>成本含前序合成精力；7/8级无稳定保底公式，盈亏线按“4×六级 / 15×六级”可编辑模板计算</span></div></section>';
  }

  function stoneAnalysisCard() {
    const sum = Stone.summary({ serverId: Store.state.serverId });
    const rows = [];
    [5, 6].forEach(function (level) {
      const best = sum.best[level];
      const fast = sum.all.find(function (r) { return r.target === level && r.recipe.mode === 'fast'; });
      if (best) rows.push({ level: level, best: best, fast: fast, jackpot: null });
    });
    [7, 8].forEach(function (level) {
      const jack = sum.all.find(function (r) { return r.target === level && r.recipe.id === (level === 7 ? 'jack_7' : 'jack_8'); });
      if (jack) rows.push({ level: level, best: null, fast: null, jackpot: jack });
    });
    const chartItems = stoneChartItems(sum).filter(function (d) { return d.label.indexOf('5级') === 0 || d.label.indexOf('6级') === 0; });
    return '<div class="grid section-gap"><section class="card col-12"><div class="card-head"><div class="card-head-main">' +
      '<h2 class="card-title">' + icon('gem') + '五行石合成收益</h2>' +
      '<p class="card-sub">把低级五行石合成高级石头的金币、精力与爆率盈亏线单列，不与生活技艺配方混排</p></div>' +
      '<div class="card-tools"><a class="btn btn-sm" href="' + Route.href('/stones') + '">进入五行石模块 ' + icon('arrowRight') + '</a></div></div>' +
      '<div class="card-body"><div class="stone-analysis-grid">' +
        '<div class="stone-analysis-table"><div class="table-wrap" style="border-top:0"><table class="data compact"><thead><tr>' +
          '<th>目标</th><th>最佳方式</th><th class="num">单颗成本</th><th class="num">净售价</th><th class="num">利润/颗</th><th class="num">精力/颗</th><th class="num">精力收益</th><th class="num">爆率盈亏线</th>' +
        '</tr></thead><tbody>' +
        rows.map(function (x) {
          if (x.best) {
            return '<tr><td>' + stoneChip(x.level, { short: true }) + '</td><td>' + stoneMethodBadge(x.best.method) +
              ' <span class="tiny dim">' + U.esc(x.best.recipe.name) + '</span></td>' +
              '<td class="num">' + U.fmt(x.best.costPerTarget, 2) + '</td>' +
              '<td class="num">' + U.fmt(x.best.targetNet, 2) + '</td>' +
              '<td class="num ' + stoneProfitClass(x.best.profitPerTarget) + '">' + U.fmtSigned(x.best.profitPerTarget, 2) + '</td>' +
              '<td class="num">' + stoneEnergyText(x.best) + '</td>' +
              '<td class="num"><b class="' + stoneProfitClass(x.best.perEnergyTarget) + '">' + U.fmt(x.best.perEnergyTarget, 3) + '</b></td>' +
              '<td class="num dim">—</td></tr>';
          }
          const j = x.jackpot;
          return '<tr><td>' + stoneChip(x.level, { short: true }) + '</td><td>' + stoneMethodBadge('赌跳级') +
            ' <span class="tiny dim">' + U.esc(j.recipe.name) + '</span></td>' +
            '<td class="num">' + U.fmt(j.cost, 2) + '<span class="tiny dim">/次</span></td>' +
            '<td class="num">' + U.fmt(j.targetNet, 2) + '</td>' +
            '<td class="num dim">—</td>' +
            '<td class="num">' + U.fmt(j.totalEnergy, 0) + '<span class="tiny dim">/次</span></td>' +
            '<td class="num dim">—</td>' +
            '<td class="num"><b class="warn">' + stonePct(j.breakEven.p, 2) + '</b></td></tr>';
        }).join('') +
        '</tbody></table></div></div>' +
        '<div class="stone-analysis-chart"><div class="tiny dim" style="margin-bottom:2px">5/6级快速 vs 最优 · 精力收益（金/精力）</div>' +
        Charts.columns(chartItems, { palette: Charts.palette(ui.theme), unit: '金/精力', width: 760, height: 220, labelWidth: 10 }) +
        '</div>' +
      '</div></div>' +
      '<div class="card-foot"><span>精力收益 = 单颗税后利润 ÷ 累计精力；7/8级只有爆率高于盈亏线才值得赌</span>' +
      '<span class="spacer"></span><a href="' + Route.href('/stones') + '">查看完整公式与爆率 ' + icon('arrowRight') + '</a></div></section></div>';
  }

  /* ------------------------------------------------------------------ */
  /* 生活技艺                                                           */
  /* ------------------------------------------------------------------ */
  function renderSkills(path, p) {
    const parts = path.split('/');
    let skillId = parts[2];
    if (!C.skillOf(skillId) || !DATA.skills.some(function (s) { return s.id === skillId; })) skillId = 'shennong';
    const sk = skill(skillId);
    const basis = currentBasis(p);
    const rows = Calc.rows({ serverId: Store.state.serverId, basis: basis })
      .filter(function (r) { return r.recipe.skillId === skillId; });
    const filtered = sortRows(filterRows(rows, p), p.sort || 'perEnergy', p.dir || 'desc');
    const allValid = rows.filter(function (r) { return !r.calc.missing; });
    const avg = allValid.length ? allValid.reduce(function (s, r) { return s + r.calc.perEnergy; }, 0) / allValid.length : null;
    const best = Calc.bestOf(rows);
    const verifiedCount = rows.filter(function (r) { return r.recipe.verified; }).length;
    const missingRows = rows.filter(function (r) { return r.calc.missing; }).length;
    const onlyProfit = p.only === 'profit';
    const q = p.q || '';
    const tierId = p.tier || '';

    const groups = [
      { label: '采集类', type: 'gather' },
      { label: '制造类', type: 'craft' }
    ];

    let navHtml = '<div class="skill-nav">';
    groups.forEach(function (g) {
      navHtml += '<div><div class="skill-group-label">' + icon(g.type === 'gather' ? 'leaf' : 'hammer') + U.esc(g.label) +
        '<span class="spacer"></span><span>' + DATA.skills.filter(function (s) { return s.type === g.type; }).length + '</span></div>';
      navHtml += '<div class="skill-list">';
      DATA.skills.filter(function (s) { return s.type === g.type; }).forEach(function (s) {
        const sRows = Calc.rows({ serverId: Store.state.serverId, basis: basis }).filter(function (r) { return r.recipe.skillId === s.id; });
        const sValid = sRows.filter(function (r) { return !r.calc.missing; });
        const sAvg = sValid.length ? sValid.reduce(function (sum, r) { return sum + r.calc.perEnergy; }, 0) / sValid.length : null;
        navHtml += '<button class="skill-item' + (s.id === skillId ? ' active' : '') + '" data-action="go-skill" data-skill="' + s.id + '">' +
          skillIcon(s, 'sm') +
          '<div class="meta"><div class="nm">' + U.esc(s.name) + '</div><div class="ds">' + sRows.length + ' 个' + (s.type === 'gather' ? '采集点' : '配方') + '</div></div>' +
          '<div class="val"><b class="' + (sAvg > 0 ? 'pos' : sAvg < 0 ? 'neg' : '') + '">' + (sAvg == null ? '—' : U.fmt(sAvg, 1)) + '</b><span>金/精力</span></div>' +
        '</button>';
      });
      navHtml += '</div></div>';
    });
    navHtml += '</div>';

    let html = '<div class="page">';
    html += '<div class="page-head"><div><h1 class="page-title">生活技艺</h1>' +
      '<p class="page-sub">采集 3 · 制造 5 · 苍生铸世 50 级 · 当前收录 ' + DATA.recipes.filter(function (r) { return r.kind === 'craft'; }).length + ' 条制造配方 + ' + DATA.recipes.filter(function (r) { return r.kind === 'gather'; }).length + ' 个当前版本采集点（JX3BOX）。</p></div>' +
      '<div class="page-tools">' +
        '<div class="seg" role="group" aria-label="成本口径">' +
          '<button class="' + (basis === 'market' ? 'active' : '') + '" data-filter="basis" data-value="" title="材料按本服市场价计算">市场价</button>' +
          '<button class="' + (basis === 'min' ? 'active' : '') + '" data-filter="basis" data-value="min" title="材料取市场价与自制成本较低者；不把自制中间产物的精力计入本配方">取最低（仅成本）</button>' +
        '</div>' +
        '<span class="badge badge-outline" title="所有产物售价按此税率扣税，可在设置中修改">交易税 ' + U.fmtPct(currentTaxRate(), 0) + '</span>' +
        '<a class="btn" href="' + Route.href('/prices') + '">' + icon('database') + '<span class="txt">行情</span></a>' +
      '</div></div>';

    html += '<div class="grid"><aside class="col-3"><div class="skill-nav-wrap">' + navHtml + '</div></aside><div class="col-9 flex-col" style="min-width:0">';

    html += '<section class="card"><div class="card-head"><div class="card-head-main skill-head">' +
      skillIcon(sk, 'lg') +
      '<div><h2>' + U.esc(sk.name) + ' <span class="badge badge-outline">' + (sk.type === 'gather' ? '采集类' : '制造类') + '</span></h2>' +
      '<p>' + U.esc(sk.desc) + '</p></div></div>' +
      '<div class="card-tools">' +
        '<button class="btn btn-primary btn-sm" data-action="new-recipe" data-skill="' + sk.id + '">' + icon('plus') + (sk.type === 'gather' ? '新增采集点' : '新增配方') + '</button>' +
      '</div></div>' +
      '<div class="card-body" style="padding-bottom:0">' +
        '<div class="skill-stats">' +
          '<div class="skill-stat"><b>' + rows.length + '</b><span>' + (sk.type === 'gather' ? '采集点' : '配方') + '</span></div>' +
          '<div class="skill-stat"><b class="' + (avg > 0 ? 'pos' : avg < 0 ? 'neg' : '') + '">' + (avg == null ? '—' : U.fmt(avg, 2)) + '</b><span>平均精力收益 金/精力</span></div>' +
          '<div class="skill-stat"><b>' + (best ? U.fmt(best.calc.perEnergy, 2) : '—') + '</b><span>最优 ' + (best ? U.esc(best.recipe.name) : '—') + '</span></div>' +
          '<div class="skill-stat"><b>' + verifiedCount + ' / ' + rows.length + '</b><span>已核验配方</span></div>' +
        '</div>' +
        '<div class="flex toolbar-wrap" style="margin-top:14px">' +
          '<div class="search-box">' + icon('search') + '<input class="input" type="search" placeholder="搜索配方 / 产物" value="' + U.esc(q) + '" data-search="q" data-fkey="search" aria-label="搜索配方或产物"></div>' +
          '<select class="select" data-filter="tier" aria-label="品阶筛选" style="width:100px">' + tierOptions(tierId) + '</select>' +
          '<label class="switch"><input type="checkbox" data-toggle="only" data-value="profit"' + (onlyProfit ? ' checked' : '') + '><span class="track"></span>仅看盈利</label>' +
          '<span class="spacer"></span><span class="tiny dim">' + filtered.length + ' 条结果</span>' +
        '</div>' +
        (missingRows ? '<div style="margin-top:12px">' + notice('本技艺有 <b>' + missingRows + '</b> 个配方存在未定价材料或产物，收益会被低估。' +
          '<a class="link" href="' + Route.href('/prices') + '">去行情补价</a>') + '</div>' : '') +
      '</div>';

    if (!filtered.length) {
      html += emptyState('没有匹配的配方', '换一个关键词或品阶，或新建自定义配方。', '<button class="btn btn-sm" data-action="new-recipe" data-skill="' + sk.id + '">' + icon('plus') + '新增</button>', 'list');
    } else {
      html += '<div class="table-wrap tall" style="margin-top:12px"><table class="data skill-table"><thead><tr>' +
        '<th class="sticky">' + (sk.type === 'gather' ? '采集点' : '配方 / 产物') + '</th>' +
        '<th>品阶</th>' +
        '<th>可做</th>' +
        '<th class="num">' + (sk.type === 'gather' ? '单次产出' : '成本') + '</th>' +
        '<th class="num">税后产值</th>' +
        '<th class="num">交易税</th>' +
        '<th class="num">利润</th>' +
        '<th class="num">精力</th>' +
        sortHeader('收益/精力', 'perEnergy', p, 'num') +
        '<th>状态</th><th></th>' +
        '</tr></thead><tbody>' +
        filtered.map(function (r) {
          const c = r.calc;
          const profitCls = c.missing ? 'dim' : c.profit >= 0 ? 'pos' : 'neg';
          return '<tr class="clickable" data-recipe-id="' + U.esc(r.recipe.id) + '" tabindex="0">' +
            '<td class="sticky"><div class="cell-main">' + skillIcon(r.skill, 'sm') + '<div class="txt"><div class="t1">' + U.esc(r.recipe.name) + ' ' +
              (r.recipe.custom ? '<span class="badge badge-custom">自定义</span>' : !r.recipe.verified ? '<span class="badge badge-neutral">示例</span>' : '') + '</div>' +
              '<div class="t2">' + (sk.type === 'gather' ? 'Lv.' + r.recipe.level + ' · 单次 ' + r.recipe.energy + ' 精力 · 掉率已折算' : U.esc(r.outputNames) + ' · ' + r.recipe.materials.length + ' 种材料') + '</div></div></div></td>' +
            '<td>' + tierBadge(r.tier) + '</td>' +
            '<td>' + (function () { const a = auditRecipe(Store.state.serverId, r.recipe.id); return a ? gradeBadge(a.gl, { title: a.sc ? '条件可做：含自产' : '仅看本服报价' }) : '<span class="badge badge-neutral">—</span>'; })() + '</td>' +
            '<td class="num">' + (sk.type === 'gather' ? U.esc(r.outputNames) : U.fmt(c.totalCost, 2)) + '</td>' +
            '<td class="num">' + U.fmt(c.outputValue, 2) + '</td>' +
            '<td class="num dim">' + U.fmt(c.tax, 2) + '</td>' +
            '<td class="num ' + profitCls + '">' + (c.missing ? '—' : U.fmtSigned(c.profit, 2)) + '</td>' +
            '<td class="num">' + U.fmtInt(c.energy) + '</td>' +
            '<td class="num"><b class="' + (c.missing ? 'dim' : c.perEnergy >= 0 ? 'pos' : 'neg') + '">' + perEnergyText(c.perEnergy) + '</b></td>' +
            '<td>' + statusBadge(r) + '</td>' +
            '<td class="actions"><button class="icon-btn" data-action="edit-recipe" data-id="' + U.esc(r.recipe.id) + '" aria-label="编辑 ' + U.esc(r.recipe.name) + '">' + icon('edit') + '</button></td>' +
          '</tr>';
        }).join('') +
        '</tbody></table></div>';
    }
    html += '<div class="card-foot"><span>成本 = 材料 + 手续费；利润 = 税后产值 − 成本；精力收益 = 利润 / 精力；售价已扣 ' + U.fmtPct(currentTaxRate(), 0) + ' 交易税</span>' +
      '<span class="sep">·</span><span>' + (basis === 'min' ? '取最低：仅优化材料成本，不计自制中间产物的精力' : '市场价：材料按本服单价计') + '</span>' +
      '<span class="spacer"></span>' +
      (sk.type === 'gather' ? '<span>采集期望产值（税后）= Σ（数量 × 掉率 × 税后单价）；精力按单次采集折算</span>' : '<span>点击行查看配方详情</span>') + '</div>';
    html += '</section>';

    html += renderMaterialPrices(sk, rows);
    html += '</div></div>';
    html += dataFoot();
    html += '</div>';
    return html;
  }

  function renderMaterialPrices(sk, rows) {
    const ids = [];
    rows.forEach(function (r) {
      r.recipe.materials.forEach(function (m) { if (ids.indexOf(m.item) === -1) ids.push(m.item); });
      if (sk.type === 'gather') r.recipe.outputs.forEach(function (o) { if (ids.indexOf(o.item) === -1) ids.push(o.item); });
    });
    if (!ids.length) return '';
    const items = ids.map(item).filter(Boolean).sort(function (a, b) { return a.name.localeCompare(b.name, 'zh-CN'); });
    return '<section class="card"><div class="card-head"><div class="card-head-main"><h2 class="card-title">本技艺材料行情</h2>' +
      '<p class="card-sub">直接改价，本页收益即时重算 · 共 ' + items.length + ' 项</p></div>' +
      '<div class="card-tools"><a class="btn btn-sm" href="' + Route.href('/prices', { skill: sk.id }) + '">打开完整行情 ' + icon('arrowRight') + '</a></div></div>' +
      '<div class="table-wrap medium"><table class="data compact"><thead><tr><th>物品</th><th>类型</th><th>品阶</th><th>来源</th><th class="num">本服单价（金）</th><th>状态</th><th class="num">更新时间</th></tr></thead><tbody>' +
      items.map(function (it) {
        const p = Store.price(Store.state.serverId, it.id);
        return '<tr><td><div class="cell-main"><span class="t1">' + U.esc(it.name) + '</span></div></td>' +
          '<td><span class="dim">' + (it.kind === 'product' ? '产物' : '材料') + '</span></td>' +
          '<td>' + tierBadge(tier(it.tier)) + '</td>' +
          '<td class="dim">' + U.esc(it.source || '—') + '</td>' +
          '<td class="num">' + priceInput(it.id, { sm: true }) + '</td>' +
          '<td>' + priceStateBadge(p) + '</td>' +
          '<td class="num dim tiny">' + U.fmtTime(p.t) + '</td></tr>';
      }).join('') +
      '</tbody></table></div><div class="card-foot"><span>示例价来自当前版本样本行情，不代表实时交易行</span></div></section>';
  }

  function dataFoot() {
    const listed = DATA.meta.sources.slice(0, 6);
    const sources = listed.map(function (s) {
      return '<a href="' + U.esc(s.url) + '" target="_blank" rel="noopener">' + U.esc(s.label) + '</a>';
    }).join(' · ') + (DATA.meta.sources.length > listed.length ? ' · 等 ' + DATA.meta.sources.length + ' 项' : '');
    return '<div class="data-foot">' + icon('shield') +
      '<div><b style="color:var(--muted)">苍生铸世 · 50 级数据口径</b> · 核验于 ' + U.esc(DATA.meta.verifiedAt) +
      ' · 制造配方/等级/精力/材料来自 JX3BOX 当前版本 API（2026-11-18），收录 154 条代表配方；价格采用 JX3BOX 17 个服务器拍卖样本（梦江南 ' + (DATA.meta.priceCoverage ? DATA.meta.priceCoverage.updated : '—') + '/' + (DATA.meta.priceCoverage ? DATA.meta.priceCoverage.total : '—') + ' 项有效），无报价回退梦江南示例价；采集产出名称已核验，数量为示例。售价按 ' + U.fmtPct(currentTaxRate(), 0) + ' 交易税折算；五行石公式可在五行石页编辑。请以本服交易行为准。' +
      '<div style="margin-top:4px">来源：' + sources + '</div></div>' +
      '<div class="links"><button class="btn btn-sm" data-action="open-data">数据说明</button>' +
      '<button class="btn btn-sm" data-action="open-settings">设置</button></div></div>';
  }

  /* ------------------------------------------------------------------ */
  /* 行情                                                             */
  /* ------------------------------------------------------------------ */
  const itemUsageSkills = (function () {
    const map = Object.create(null);
    (DATA.recipes || []).forEach(function (recipe) {
      (recipe.materials || []).forEach(function (mat) {
        if (!mat || !mat.item) return;
        const list = map[mat.item] || (map[mat.item] = []);
        if (recipe.skillId && list.indexOf(recipe.skillId) === -1) list.push(recipe.skillId);
      });
    });
    return map;
  })();
  function itemSkillIds(it) {
    const list = (itemUsageSkills[it.id] || []).slice();
    if (it.skillId && list.indexOf(it.skillId) === -1) list.unshift(it.skillId);
    return list.length ? list : (it.skillId ? [it.skillId] : []);
  }
  function itemSearchText(it) {
    const names = itemSkillIds(it).map(function (id) { return skill(id).name; });
    const t = DATA.tiers.filter(function (x) { return String(x.id) === String(it.tier); })[0];
    return [it.name, names.join(' '), categoryName(itemCategory(it)), (t && t.name) || '', it.origin || ''].join(' ');
  }
  function filteredItems(p) {
    const q = (p.q || '').trim();
    const skillId = p.skill || '';
    const category = p.category || '';
    const kind = p.kind || '';
    const missingOnly = p.missing === '1';
    return Store.state.items.filter(function (it) {
      if (skillId && itemSkillIds(it).indexOf(skillId) === -1) return false;
      if (category === 'life' && !it.life) return false;
      if (category && category !== 'life' && itemCategory(it) !== category) return false;
      if (kind && it.kind !== kind) return false;
      if (missingOnly && !Store.price(Store.state.serverId, it.id).missing) return false;
      if (q && !U.includes(itemSearchText(it), q)) return false;
      return true;
    }).sort(function (a, b) {
      const pa = Store.price(Store.state.serverId, a.id);
      const pb = Store.price(Store.state.serverId, b.id);
      if (pa.missing !== pb.missing) return pa.missing ? 1 : -1;
      return a.name.localeCompare(b.name, 'zh-CN');
    });
  }

  function renderStonePriceCard() {
    const serverId = Store.state.serverId;
    const levels = Stone.levels || [];
    const userCount = levels.filter(function (l) { return Stone.price(serverId, l.level).user; }).length;
    const missingCount = levels.filter(function (l) { return Stone.price(serverId, l.level).missing; }).length;
    const updated = Stone.priceUpdatedAt ? Stone.priceUpdatedAt() : 0;
    let rows = '';
    if (!levels.length) {
      rows = '<tr><td colspan="6">' + emptyState('暂无五行石数据', '请检查 data.js 是否包含 stone 数据。', '', 'gem') + '</td></tr>';
    } else {
      rows = levels.map(function (l) {
        const p = Stone.price(serverId, l.level);
        const np = Stone.netPrice(serverId, l.level);
        return '<tr>' +
          '<td>' + stoneChip(l.level) + '</td>' +
          '<td class="num">' + stonePriceInput(l.level) + '</td>' +
          '<td class="num">' + U.fmt(np, 2) + '</td>' +
          '<td>' + stonePriceState(p) + '</td>' +
          '<td class="num dim tiny">' + (p.user ? U.fmtTime(p.t) : U.fmtTime(updated)) + '</td>' +
          '<td class="actions">' + (p.user ? '<button class="icon-btn" data-action="clear-stone-price" data-level="' + l.level + '" title="恢复行情价" aria-label="恢复 ' + U.esc(l.name) + ' 的行情价">' + icon('refresh') + '</button>' : '') + '</td>' +
        '</tr>';
      }).join('');
    }
    return '<section class="card col-12"><div class="card-head"><div class="card-head-main">' +
      '<h2 class="card-title">' + icon('gem') + '五行石行情</h2>' +
      '<p class="card-sub">1-8 级五行石独立价格空间 · 与五行石合成页共用 · 售价按 ' + U.fmtPct(Stone.taxRate(), 0) + ' 交易税折算净价</p></div>' +
      '<div class="card-tools">' +
        '<span class="badge badge-outline">' + userCount + ' / ' + levels.length + ' 已校准</span>' +
        (missingCount ? '<span class="badge badge-warning">' + missingCount + ' 项缺价</span>' : '') +
        '<button class="btn btn-sm" data-action="export-csv" data-csv="stone-prices">' + icon('download') + '导出</button>' +
        '<a class="btn btn-sm" href="' + Route.href('/stones') + '">五行石合成 ' + icon('arrowRight') + '</a>' +
      '</div></div>' +
      '<div class="table-wrap medium"><table class="data compact stone-price-library"><thead><tr>' +
        '<th>等级</th><th class="num">买入价（金）</th><th class="num">税后净价</th><th>价格状态</th><th class="num">更新时间</th><th></th>' +
      '</tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '<div class="card-foot"><span>行情价随 JX3BOX 拍卖在物价更新时同步；7/8 级样本少，建议按本服交易行校准</span>' +
      '<span class="spacer"></span><span>行情时间 ' + (updated ? U.fmtTime(updated) : '—') + '</span></div></section>';
  }

  function renderPrices(p) {
    const stats = Calc.stats(Store.state.serverId);
    const audit = auditServer(Store.state.serverId);
    const ac = audit && audit.items;
    const local = localPriceCounts();
    const quoteCount = ac ? ac.quote : local.quote;
    const vendorCount = ac ? ac.vendor : local.vendor;
    const baseCount = ac ? ac.base : local.base;
    const missingCount = ac ? ac.missing : stats.missing;
    const allItems = filteredItems(p);
    const pageSize = 100;
    const totalPages = Math.max(1, Math.ceil(allItems.length / pageSize));
    const page = Math.min(totalPages, Math.max(1, Number(p.page) || 1));
    const items = allItems.slice((page - 1) * pageSize, page * pageSize);
    const spreads = serverSpreads();
    const q = p.q || '';

    let html = '<div class="page">';
    html += '<div class="page-head"><div><h1 class="page-title">行情</h1>' +
      '<p class="page-sub">为「' + U.esc(server().name) + '」查看材料、成品与家园/消耗品等行情。配方物品参与收益计算；行情物品只做价格查询。</p></div>' +
      '<div class="page-tools">' +
        '<button class="btn" data-action="export-csv" data-csv="prices">' + icon('download') + '<span class="txt">导出 CSV</span></button>' +
        '<a class="btn btn-primary" href="' + Route.href('/analysis') + '">' + icon('chart') + '<span class="txt">看收益分析</span></a>' +
      '</div></div>';

    html += '<div class="kpi-grid">' +
      '<div class="kpi"><div class="kpi-label">已校准</div><div class="kpi-value">' + stats.user + '<span class="kpi-unit">/ ' + stats.total + ' 项</span></div>' +
        '<div class="kpi-meta"><span>手动填入的本服价格</span></div><div class="progress is-positive"><i style="width:' + Math.round(stats.calibrated * 100) + '%"></i></div></div>' +
      '<div class="kpi"><div class="kpi-label">本服实价</div><div class="kpi-value">' + quoteCount + '<span class="kpi-unit">项</span></div>' +
        '<div class="kpi-meta"><span>商店 ' + vendorCount + ' · 示例 ' + baseCount + '；示例价不参与可做</span></div></div>' +
      '<div class="kpi"><div class="kpi-label">缺少价格</div><div class="kpi-value">' + missingCount + '<span class="kpi-unit">项</span></div>' +
        '<div class="kpi-meta"><span class="warn">缺价项按 0 计，相关配方标记「缺价」</span></div></div>' +
      '<div class="kpi"><div class="kpi-label">示例价</div><div class="kpi-value">' + baseCount + '<span class="kpi-unit">项</span></div>' +
        '<div class="kpi-meta"><span>仅兼容视图参与；可去校准或等本服报价</span></div></div>' +
    '</div>';

    html += '<div class="grid section-gap">';
    html += '<section class="card col-8"><div class="card-head"><div class="card-head-main">' +
      '<h2 class="card-title">本服物品价格</h2><p class="card-sub">直接在表格中改价，失焦或回车即保存 · 共 ' + items.length + ' 项</p></div>' +
      '<div class="card-tools">' +
        '<div class="search-box">' + icon('search') + '<input class="input" type="search" placeholder="搜索物品" value="' + U.esc(q) + '" data-search="q" data-fkey="search" aria-label="搜索物品"></div>' +
        '<select class="select" data-filter="category" aria-label="分类筛选" style="width:104px">' + categoryOptions(p.category || '') + '</select>' +
        '<select class="select" data-filter="skill" aria-label="技艺筛选" style="width:96px">' + skillOptions(p.skill || '') + '</select>' +
        '<select class="select" data-filter="kind" aria-label="类型筛选" style="width:88px"><option value="">全部类型</option>' +
          '<option value="material"' + (p.kind === 'material' ? ' selected' : '') + '>材料</option>' +
          '<option value="product"' + (p.kind === 'product' ? ' selected' : '') + '>产物</option></select>' +
        '<label class="switch"><input type="checkbox" data-toggle="missing" data-value="1"' + (p.missing === '1' ? ' checked' : '') + '><span class="track"></span>仅缺价</label>' +
        '<button class="icon-btn" data-action="open-import-prices" aria-label="批量导入价格">' + icon('upload') + '</button>' +
      '</div></div>';

    if (!items.length) {
      html += emptyState('没有匹配的物品', '调整搜索或分类筛选条件。', '<a class="btn btn-sm" href="' + Route.href('/skills/shennong') + '">去生活技艺</a>');
    } else {
      html += '<div class="table-wrap tall"><table class="data"><thead><tr>' +
        '<th class="sticky">物品</th><th>分类</th><th>技艺</th><th>类型</th><th>品阶</th><th>获取</th><th>报价</th>' +
        '<th class="num">本服单价（金）</th><th>价格状态</th><th class="num">更新时间</th><th></th>' +
      '</tr></thead><tbody>' +
      items.map(function (it) {
        const p = Store.price(Store.state.serverId, it.id);
        const sk = it.skillId ? skill(it.skillId) : { name: '—', color: '#64748B', icon: 'database' };
        return '<tr data-item-row="' + U.esc(it.id) + '">' +
          '<td class="sticky"><div class="cell-main">' + skillIcon(sk, 'sm') + '<div class="txt"><div class="t1">' + U.esc(it.name) +
            (it.custom ? ' <span class="badge badge-custom">自定义</span>' : '') +
            '</div><div class="t2">' + U.esc(it.origin || '') + '</div></div></div></td>' +
          '<td class="dim">' + U.esc(categoryName(itemCategory(it))) + '</td>' +
          '<td class="dim">' + U.esc(it.skillId ? sk.name : '—') + '</td>' +
          '<td><span class="dim">' + (it.kind === 'product' ? '产物' : '材料') + '</span></td>' +
          '<td>' + tierBadge(tier(it.tier)) + '</td>' +
          '<td class="dim">' + U.esc(it.source || '—') + '</td>' +
          '<td>' + quoteBadge(it) + '</td>' +
          '<td class="num">' + priceInput(it.id) + '</td>' +
          '<td>' + priceStateBadge(p) + '</td>' +
          '<td class="num dim tiny">' + U.fmtTime(p.t) + '</td>' +
          '<td class="actions">' + (p.user ? '<button class="icon-btn" data-action="clear-price" data-id="' + U.esc(it.id) + '" title="恢复示例价" aria-label="恢复 ' + U.esc(it.name) + ' 的示例价">' + icon('refresh') + '</button>' : '') + '</td>' +
        '</tr>';
      }).join('') +
      '</tbody></table></div>' +
      '<div class="card-foot"><span>实价=本服拍卖报价；商店=主城常驻；示例=无报价回退目录价，仅兼容视图参与；缺价不补。</span><span class="spacer"></span><span>共 ' + allItems.length + ' 项 · 第 ' + page + ' / ' + totalPages + ' 页</span></div>' +
      (totalPages > 1 ? '<div class="flex" style="justify-content:center;gap:8px;padding:12px">' +
        '<button class="btn btn-sm" data-filter="page" data-value="' + (page - 1) + '"' + (page <= 1 ? ' disabled' : '') + '>上一页</button>' +
        '<span class="tiny dim" style="align-self:center">第 ' + page + ' / ' + totalPages + ' 页</span>' +
        '<button class="btn btn-sm" data-filter="page" data-value="' + (page + 1) + '"' + (page >= totalPages ? ' disabled' : '') + '>下一页</button>' +
      '</div>' : '');
    }
    html += '</section>';

    html += '<aside class="col-4 flex-col">';
    html += '<section class="card"><div class="card-head"><div class="card-head-main"><h2 class="card-title">批量录入</h2>' +
      '<p class="card-sub">从交易行/表格复制，按「物品名 价格」粘贴</p></div></div>' +
      '<div class="card-body"><textarea class="textarea" id="price-import-text" rows="7" placeholder="地脉玄元,21.22&#10;蜂王浆,205.10&#10;兽皮胶,49.12&#10;七彩线,177.70"></textarea>' +
      '<div class="flex" style="margin-top:8px"><button class="btn btn-primary btn-sm" data-action="apply-price-import">导入到「' + U.esc(server().name) + '」</button>' +
      '<button class="btn btn-sm" data-action="download-price-template">下载模板</button><span class="spacer"></span><span class="tiny dim">支持逗号/制表符/空格</span></div></div>' +
      '<div class="card-foot"><span>只匹配已有物品名；未匹配项会单独提示</span></div></section>';

    html += '<section class="card"><div class="card-head"><div class="card-head-main"><h2 class="card-title">行情数据说明</h2>' +
      '<p class="card-sub">价格不是官方实时数据</p></div></div><div class="card-body">' +
      '<div class="info-rows">' +
        '<div class="info-row"><span class="k">当前服务器</span><span class="v">' + U.esc(server().name) + '</span></div>' +
        '<div class="info-row"><span class="k">最近更新</span><span class="v">' + currentServerUpdatedAt() + '</span></div>' +
        '<div class="info-row"><span class="k">已校准</span><span class="v">' + stats.user + ' 项</span></div>' +
        '<div class="info-row"><span class="k">数据版本</span><span class="v">' + U.esc(DATA.meta.version) + ' · ' + U.esc(DATA.meta.catalogVersion) + '</span></div>' +
      '</div>' +
      '<div class="hairline"></div>' +
      '<p class="tiny dim" style="line-height:16px">物品名目来自 JX3BOX 当前版本配方与行情目录；各服优先取 JX3BOX 拍卖样本，过滤异常/低样本；该服无报价时回退目录示例价。所有价格都可编辑，不代表实时行情。</p>' +
      '<div class="flex" style="margin-top:10px"><button class="btn btn-sm" data-action="open-data">查看完整来源</button></div>' +
      '</div></section>';
    html += '</aside></div>';

    html += '<div class="grid section-gap">' + renderStonePriceCard() + '</div>';

    html += '<details class="section-gap"><summary class="card-sub" style="cursor:pointer">跨服比价（独立参考，不参与本服收益）</summary>' +
      '<div class="grid section-gap"><section class="card col-12"><div class="card-head"><div class="card-head-main">' +
      '<h2 class="card-title">跨服比价</h2><p class="card-sub">同一物品各服最高/最低价 · 独立视图，不参与本服收益计算</p></div>' +
      '<div class="card-tools"><span class="badge badge-outline">' + Store.state.servers.length + ' 个服务器</span>' +
      '<button class="btn btn-sm" data-action="open-settings">管理服务器</button></div></div>' +
      '<div class="table-wrap medium"><table class="data compact"><thead><tr>' +
        '<th class="sticky">物品</th><th>技艺</th><th>最低价服务器</th><th class="num">最低价</th><th>最高价服务器</th><th class="num">最高价</th><th class="num">价差</th><th class="num">价差率</th>' +
      '</tr></thead><tbody>' +
      (spreads.length ? spreads.slice(0, 14).map(function (s) {
        return '<tr><td class="sticky"><div class="cell-main"><span class="t1">' + U.esc(s.item.name) + '</span></div></td>' +
          '<td class="dim">' + U.esc(skill(s.item.skillId).name) + '</td>' +
          '<td>' + U.esc(s.min.server.name) + '</td><td class="num">' + U.fmt(s.min.price, 2) + '</td>' +
          '<td>' + U.esc(s.max.server.name) + '</td><td class="num">' + U.fmt(s.max.price, 2) + '</td>' +
          '<td class="num ' + (s.ratio >= 0.12 ? 'pos' : '') + '">' + U.fmt(s.max.price - s.min.price, 2) + '</td>' +
          '<td class="num">' + U.fmtPct(s.ratio, 1) + '</td></tr>';
      }).join('') : '<tr><td colspan="8">' + emptyState('暂无可比价物品', '校准更多价格后会自动出现跨服价差。', '', 'compare') + '</td></tr>') +
      '</tbody></table></div><div class="card-foot"><span>价差率 =（最高价 − 最低价）/ 最低价；示例价差仅用于演示</span></div>' +
      '</section></div></details>';

    html += dataFoot();
    html += '</div>';
    return html;
  }

  function serverSpreads() {
    const out = [];
    Store.state.items.forEach(function (it) {
      const ps = Store.state.servers.map(function (s) {
        return { server: s, price: Store.price(s.id, it.id).v };
      }).filter(function (x) { return x.price > 0; });
      if (ps.length < 2) return;
      ps.sort(function (a, b) { return a.price - b.price; });
      const min = ps[0], max = ps[ps.length - 1];
      if (min.price <= 0) return;
      const ratio = (max.price - min.price) / min.price;
      if (ratio < 0.02) return;
      out.push({ item: it, min: min, max: max, ratio: ratio });
    });
    return out.sort(function (a, b) { return b.ratio - a.ratio; });
  }

  /* ------------------------------------------------------------------ */
  /* 精力收益分析                                                       */
  /* ------------------------------------------------------------------ */
  /* ------------------------------------------------------------------ */
  /* 突破升级                                                           */
  /* ------------------------------------------------------------------ */
  const BT_STRATS = [
    { key: 'gold', label: '金币优先' },
    { key: 'energy', label: '精力优先' },
    { key: 'effort', label: '省心' }
  ];
  const BT_STRAT_LABEL = { gold: '金币优先', energy: '精力优先', effort: '省心' };

  function bt() { return window.JX3BT; }

  function btMoney(v) {
    return v == null ? '待核算' : (v > 0 ? '+' : v < 0 ? '−' : '') + U.fmt(Math.abs(v), 0);
  }

  function btSkillLinks(skillId, strategy, mode) {
    return '<div class="bt-tabs">' + DATA.skills.map(function (s) {
      return '<a class="bt-tab' + (s.id === skillId ? ' active' : '') + '" href="' +
        Route.href('/breakthrough', { skill: s.id, strategy: strategy, yield: mode }) + '">' + U.esc(s.name) + '</a>';
    }).join('') + '</div>';
  }

  function btStratLinks(skillId, strategy, mode) {
    return '<div class="seg seg-sm bt-seg">' + BT_STRATS.map(function (s) {
      return '<a class="' + (s.key === strategy ? 'active' : '') + '" href="' +
        Route.href('/breakthrough', { skill: skillId, strategy: s.key, yield: s.key === 'gold' && strategy !== 'gold' ? 'high' : mode }) + '">' + s.label + '</a>';
    }).join('') + '</div>';
  }

  function btLine(name, sub, value, tone) {
    return '<div class="bt-line"><span class="bt-line-main"><span class="n">' + U.esc(name) + '</span>' +
      (sub ? '<span class="s">' + U.esc(sub) + '</span>' : '') + '</span>' +
      '<span class="v ' + (tone || '') + '">' + value + '</span></div>';
  }

  function btProfit(value, digits) {
    return '<span class="' + (value > 0 ? 'pos' : value < 0 ? 'neg' : '') + '">' + U.fmtSigned(value, digits == null ? 0 : digits) + '</span>';
  }

  function btRecipeDetail(row, energyOnly) {
    const B = bt();
    const econ = row.econ;
    if (!econ) return '';
    if (energyOnly) return '<div class="bt-detail">本段需要 ' + U.fmtInt(row.need) + ' 经验；每次 ' + U.fmtInt(row.exp) + ' 经验 / ' + U.fmtInt(row.energy) + ' 精力，共 ' + U.fmtInt(row.count) + ' 次、' + U.fmtInt(row.totalEnergy) + ' 精力。选择仅依据精力（省心策略依据次数），不按收益筛选。</div>';
    let body;
    if (row.recipe && row.recipe.kind === 'gather') {
      const outs = B.gatherOutputs(row.recipe);
      body = '<div class="bt-cols"><div class="bt-col"><h4>采集产出（按掉率折算）</h4>' +
        outs.map(function (o) {
          return btLine(o.name + ' ×' + o.qty + (o.chance < 0.999 ? '（' + Math.round(o.chance * 100) + '%）' : ''),
            o.missing ? '缺价' : '单价 ' + U.fmt(o.unit, 2) + ' 金', U.fmt(o.sub, 0) + ' 金', o.missing ? 'warn' : '');
        }).join('') + '</div></div>';
    } else {
      body = '<div class="bt-cols">' +
        '<div class="bt-col"><h4>材料</h4>' +
        (econ.mats.length ? econ.mats.map(function (m) {
          return btLine(B.itemOf(m.idx).n + ' ×' + U.fmtInt(m.qty),
            m.missing ? '缺价' : '单价 ' + U.fmt(m.unit, 2) + ' 金', U.fmt(m.sub, 0) + ' 金', m.missing ? 'warn' : '');
        }).join('') : '<p class="tiny dim">无（采集）</p>') + '</div>' +
        '<div class="bt-col"><h4>产出</h4>' +
        econ.outs.map(function (o) {
          return btLine(B.itemOf(o.idx).n + ' ×' + U.fmt(o.qty, 2) + '（当前档折算量）',
            o.missing ? '缺价' : '单价 ' + U.fmt(o.unit, 2) + ' 金', U.fmt(o.sub, 0) + ' 金', o.missing ? 'warn' : '');
        }).join('') + '</div></div>';
    }
    return '<div class="bt-detail">' + (row.band ? '<p class="tiny dim">本档范围 ' + U.fmt(row.band.min, 2) + '–' + U.fmt(row.band.max, 2) + ' 金/精力；算术均值 ' + U.fmt(row.band.mean, 2) + '，样本 ' + row.band.count + ' 个。选择本档完成本级时收益最高的配方。</p>' : '') + body + '<div class="bt-foot">本段 ' + U.fmtInt(row.count) + ' 次 · 精力 ' +
      U.fmtInt(row.totalEnergy) + ' · 材料 ' + U.fmt(row.matCost, 0) + ' 金 · 产出 ' + U.fmt(row.outValue, 0) + ' 金 · 收益 ' +
      btProfit(row.profit) + ' 金</div></div>';
  }

  function btLevelRow(row, isGather, energyOnly) {
    const B = bt();
    return '<details class="bt-row">' +
      '<summary class="bt-row-head">' +
        '<span class="bt-band">' + B.formatRange(row.from, row.to) + '</span>' +
        '<span class="bt-main"><b class="nm">' + U.esc(row.name) + '</b>' +
          '<em class="ds">' + (row.level ? 'Lv.' + row.level + (isGather ? ' 采集点 · ' : ' 配方 · ') : '') +
            '经验 ' + U.fmtInt(row.exp) + ' / 精力 ' + U.fmtInt(row.energy) + ' · ×' + U.fmtInt(row.count) + '</em>' +
          '<small class="ds">产出：' + U.esc(B.itemsText(row.recipe, 2) || '—') + ' · 材料：' + U.esc(B.matsText(row.recipe, 3) || '无（采集）') + '</small>' +
        '</span>' +
        '<span class="bt-val">' + (energyOnly ? U.fmtInt(row.totalEnergy) + '<small>精力</small>' : btProfit(row.profit) + '<small>收益·金</small>') + '</span>' +
      '</summary>' + btRecipeDetail(row, energyOnly) + '</details>';
  }

  function btMaxRow(row) {
    return '<div class="bt-row bt-max"><div class="bt-row-head">' +
      '<span class="bt-band">50 级</span>' +
      '<span class="bt-main"><b class="nm">50 级满级 · 无独立突破任务</b>' +
      '<em class="ds">45 级完成晋秩·宗师后继续升级至 50；此处为等级终点</em></span></div></div>';
  }

  function btGateRow(gate) {
    const B = bt();
    return '<details class="bt-gate">' +
      '<summary class="bt-gate-head"><span class="bt-gate-ic">' + gate.level + '</span>' +
        '<span class="bt-main"><b class="nm">' + (U.esc(gate.name) + ' · ' + gate.level + ' 级突破') + '</b>' +
          '<em class="ds">' + gate.items.length + ' 种材料 · 合计 ' + U.fmt(gate.cost, 0) + ' 金' + (gate.missing ? ' · 缺价：' + U.esc(gate.missingItems.map(function (i) { return i.name + '×' + i.qty; }).join('、')) : '') + '</em></span>' +
        '<span class="chev">' + icon('chevronDown') + '</span></summary>' +
      '<div class="bt-detail"><div class="bt-cols"><div class="bt-col bt-col-wide">' +
        gate.items.map(function (it) {
          const sub = it.recipe ? '自制：' + it.recipe.n + '（需 ' + it.recipe.l + ' 级' + (B.matsText(it.recipe, 3) ? '，' + B.matsText(it.recipe, 3) : '') + '）' : '交易行 / 采集';
          return btLine(it.name + ' ×' + U.fmtInt(it.qty), sub + (it.missing ? ' · 本服缺价' : ' · 单价 ' + U.fmt(it.unit, 2) + ' 金'), it.missing ? '缺价' : U.fmt(it.sub, 0) + ' 金', it.missing ? 'warn' : '');
        }).join('') +
      '</div></div><div class="bt-foot">合计 ' + U.fmt(gate.cost, 0) + ' 金；全按交易行约 ' + U.fmt(gate.marketCost, 0) + ' 金。任务奖励材料不可提交。任务接口未列普通奖励，脚本奖励尚未核实，收益未计入奖励。</div></div></details>';
  }

  function renderBreakthrough(p) {
    const B = bt();
    if (!B) {
      return '<div class="page">' + emptyState('突破数据未加载', '请刷新页面，或检查 assets/breakthrough-data.js 是否存在。', '', 'alert') + '</div>';
    }
    const meta = B.META;
    const skillId = p.skill && C.skillOf(p.skill) ? p.skill : 'duanzao';
    const strategy = p.strategy === 'energy' || p.strategy === 'effort' ? p.strategy : 'gold';
    const mode = strategy !== 'gold' ? 'mid' : ['low', 'mid'].indexOf(p.yield) !== -1 ? p.yield : 'high';
    const scenarios = B.MODES.filter(function (m) { return strategy === 'gold' || m.key === 'mid'; }).map(function (m) { return { mode: m, result: B.analyze(skillId, strategy, m.key) }; });
    const r = scenarios.find(function (s) { return s.mode.key === mode; }).result;
    const sum = B.summary(strategy, mode);
    const t = r.totals;
    const isGather = r.meta.type === 'gather';
    const budget = U.num(settings().energyBudget) || 3000;
    const rounds = t.energy == null ? null : Math.ceil(t.energy / budget);
    const taxRate = currentTaxRate();

    let html = '<div class="page bt-page">';
    html += '<div class="page-head"><div><h1 class="page-title">突破升级 · 1→50</h1>' +
      '<p class="page-sub">' + U.esc(meta.expansion) + ' · 30/35/40/45 级「晋秩」突破与最优冲级路线；价格取「' + U.esc(server().name) + '」当前服。</p></div>' +
      '<div class="page-tools"><a class="btn" href="' + Route.href('/analysis') + '">' + icon('chart') + '<span class="txt">返回分析</span></a>' +
      '<a class="btn btn-primary" href="' + Route.href('/prices') + '">' + icon('database') + '<span class="txt">查看物价</span></a></div></div>';

    html += '<div class="grid"><section class="card col-12"><div class="card-head"><div class="card-head-main">' +
      '<h2 class="card-title">选择技艺</h2><p class="card-sub">8 项生活技艺 · 30/35/40/45 级需完成「晋秩」突破</p></div></div>' +
      '<div class="card-body">' + btSkillLinks(skillId, strategy, mode) +
      '<div class="bt-stratrow">' + btStratLinks(skillId, strategy, mode) +
      '<span class="tiny dim">' + (isGather
        ? '精力优先只取最少精力；金币优先在收益比档位内取收益最高路线。'
        : '精力优先不按价格筛选，只取最少精力；金币优先按收益最高选择。') + '</span></div>' +
      '</div></section></div>';

    if (strategy === 'gold') html += '<div class="grid section-gap"><section class="card col-12"><div class="card-head"><div class="card-head-main"><h2 class="card-title">' + U.esc(r.meta.name) + ' · 金币路线三档</h2><p class="card-sub">按每级已解锁、报价完整配方的金/精力数值范围三等分，各档计算算术均值，再选择本档收益最高的实际配方。</p></div></div><div class="bt-scenarios card-body">' + scenarios.map(function (sc) {
      const st = sc.result.totals;
      return '<a class="bt-scenario' + (sc.mode.key === mode ? ' active' : '') + '" href="' + Route.href('/breakthrough', { skill: skillId, strategy: strategy, yield: sc.mode.key }) + '"' + (sc.mode.key === mode ? ' aria-current="true"' : '') + '><span class="tiny dim">合计收益 · ' + sc.mode.label + (sc.mode.key === mode ? ' · 当前路线' : ' · 查看路线') + '</span><strong class="' + (st.total > 0 ? 'pos' : st.total < 0 ? 'neg' : st.total == null ? 'bt-scenario-empty' : '') + '">' + (st.total == null ? '无法完整核算' : U.fmtSigned(st.total, 0) + '<small>金</small>') + '</strong><span class="tiny dim">逐级档均值（按精力加权） ' + U.fmt(st.bandMean, 2) + ' 金/精力</span><span class="tiny dim">突破材料 ' + U.fmt(st.gateCost, 0) + ' 金' + (st.total == null ? ' · 点击查看缺失项' : '') + '</span></a>';
    }).join('') + '</div><div class="card-foot">收益 = 税后产出价值 − 材料成本 − 突破材料；赚钱显示绿色 +，亏损显示红色 −。各档均值供参考，产量统一按区间中点乘产出概率；空档不跨档补位。经验部分推算，未计未核实奖励。价格：目录脚本快照优先，突破脚本快照补充；全局手动价格不参与本模块。材料成本口径：' + (settings().basis === 'min' ? '市场与自制成本取低（不计中间产物精力）；任务材料缺市价仍提示缺价' : '市场价') + '。</div></section></div>';
    if (!r.enough) html += '<div class="section-gap">' + notice('无法完整核算：' + (t.missingLevels ? t.missingLevels + ' 个等级缺少可用配方，或所选收益比档无样本。' : '') + r.gates.filter(function (g) { return g.missing; }).map(function (g) { return g.level + ' 级任务缺价：' + g.missingItems.map(function (i) { return i.name + '×' + i.qty; }).join('、'); }).join('；') + ' 缺失费用不按 0 计算，总收益暂不提供。', 'warn') + '</div>';
    html += '<div class="grid section-gap"><section class="card col-12"><details class="bt-experience"><summary class="card-head"><div class="card-head-main"><h2 class="card-title">' + U.esc(r.meta.name) + ' · 逐级所需经验</h2><p class="card-sub">5 点观测校准 · 展开查看 49 级门槛；其余等级为插值或外推。</p></div><span class="badge badge-outline">5 点校准</span></summary><div class="table-wrap bt-exp-table"><table class="data compact"><thead><tr><th>升级</th><th class="num">所需经验</th><th class="num">累计经验（模拟）</th><th>来源</th></tr></thead><tbody>' + r.experience.map(function (xp) { return '<tr><td>' + xp.from + '→' + xp.to + '</td><td class="num">' + U.fmtInt(xp.need) + '</td><td class="num">' + U.fmtInt(xp.cumulative) + '</td><td><span class="badge ' + (xp.source === 'observed' ? 'badge-positive' : xp.source === 'extrapolated' ? 'badge-warning' : 'badge-outline') + '">' + ({ observed: '用户观测', interpolated: '插值', extrapolated: '外推' }[xp.source] || '估算') + '</span></td></tr>'; }).join('') + '</tbody></table></div><div class="card-foot">1→2=250，3→4=510，8→9=1150，11→12=1370，30→31=1650。点间分段线性插值；31 级起按末段趋势外推，推算值取整到 10。暂按八技艺共用门槛模拟，尚未核实技艺间差异。</div></details></section></div>';

    if (meta.hints && meta.hints[skillId]) {
      html += '<div style="margin-top:12px">' + notice('刷经验提示：' + U.esc(meta.hints[skillId]), 'info') + '</div>';
    }

    const metrics = [
      { label: '1→50 总经验', value: U.fmtInt(t.exp), unit: '经验', meta: '5 点观测校准，其余等级推算' },
      { label: '总精力', value: U.fmtInt(t.energy), unit: '精力', meta: '约 ' + U.fmtInt(rounds) + ' 次满精力（' + U.fmtInt(budget) + '）' },
      { label: '制作 / 采集次数', value: U.fmtInt(t.crafts), unit: '次', meta: '按每级经验向上取整' }
    ];
    if (strategy === 'gold') metrics.push(
      { label: '升级收益', value: btProfit(t.profit), unit: '金', meta: '税后产出价值 − 材料成本' },
      { label: '突破材料', value: U.fmt(t.gateCost, 0), unit: '金', meta: r.gates.filter(function (g) { return !g.missing; }).length + '/4 个任务可算价' },
      { label: '合计收益', value: btProfit(t.total), unit: '金', meta: '升级收益 − 突破材料费用' }
    );
    html += '<div class="kpi-grid section-gap">' + metrics.map(function (m) { return '<div class="kpi"><div class="kpi-label">' + m.label + '</div><div class="kpi-value">' + m.value + '<span class="kpi-unit">' + m.unit + '</span></div><div class="kpi-meta"><span>' + m.meta + '</span></div></div>'; }).join('') + '</div>';
    html += '<div class="grid section-gap"><section class="card col-12"><div class="card-head"><h2 class="card-title">两阶段' + (strategy === 'gold' ? '收益' : '精力') + '</h2></div><div class="table-wrap"><table class="data compact"><thead><tr><th>阶段</th><th class="num">经验</th><th class="num">精力</th><th class="num">次数</th>' + (strategy === 'gold' ? '<th class="num">升级收益</th><th class="num">突破材料</th><th class="num">合计收益</th>' : '') + '</tr></thead><tbody>' + r.phases.map(function (ph) { return '<tr><td>' + ph.from + '→' + ph.to + '</td><td class="num">' + U.fmtInt(ph.exp) + '</td><td class="num">' + U.fmtInt(ph.energy) + '</td><td class="num">' + U.fmtInt(ph.crafts) + '</td>' + (strategy === 'gold' ? '<td class="num">' + btProfit(ph.profit) + '</td><td class="num">' + U.fmt(ph.gateCost, 0) + '</td><td class="num">' + btProfit(ph.total) + '</td>' : '') + '</tr>'; }).join('') + '</tbody></table></div><div class="card-foot">1→30 含 30 级晋秩；30→50 含 35/40/45 晋秩。50 级无独立任务。' + (strategy === 'gold' ? '金币路线在所选档位内最省，不代表其他档位也同样省。' : '本路线只以精力为目标，材料报价不参与配方筛选。') + '</div></section></div>';

    html += '<div class="grid section-gap"><section class="card col-12"><div class="card-head"><div class="card-head-main">' +
      '<h2 class="card-title">' + U.esc(r.meta.name) + ' · 最优升级路线</h2><p class="card-sub">' + BT_STRAT_LABEL[strategy] + (strategy === 'gold' ? ' · ' + B.MODES.find(function (m) { return m.key === mode; }).label : ' · 单一路线') + ' · 点击任一段展开材料与产出明细</p></div>' +
      '<div class="card-tools"><span class="badge badge-outline">' + r.routes.length + ' 段</span></div></div>' +
      '<div class="card-body tight">' +
      (r.routes.length ? r.routes.map(function (row) {
        if (row.kind === 'max') return btMaxRow(row);
        return row.kind === 'gate' ? btGateRow(row) : btLevelRow(row, isGather, strategy !== 'gold');
      }).join('') : emptyState('暂无可用路线', '补齐材料价格后再试。', '', 'search')) +
      '</div><div class="card-foot"><span>' + (strategy === 'gold' ? '收益 = 税后产出价值 − 材料成本 − 突破材料；绿色 + 为赚，红色 − 为亏。税率 ' + U.fmtPct(taxRate, 0) : '只比较完成每级所需的总精力；同精力时优先较少次数，不以收益或报价做筛选。') + '</span></div></section></div>';

    html += '<div class="grid section-gap"><section class="card col-12"><div class="card-head"><div class="card-head-main">' +
      '<h2 class="card-title">晋秩突破任务</h2><p class="card-sub">30 / 35 / 40 / 45 级 · 45 级完成「晋秩·宗师」后可继续升至 50；无独立 50 级任务</p></div></div>' +
      '<div class="card-body tight">' +
      ((r.gates || []).length ? r.gates.map(function (g) { return btGateRow(g); }).join('') : emptyState('该技艺无突破数据', '请检查数据版本。', '', 'info')) +
      '</div><div class="card-foot"><span>晋秩·学徒 30 级 / 晋秩·巧匠 35 级 / 晋秩·名师 40 级 / 晋秩·宗师 45 级；完成后才能继续升级至 50。</span></div></section></div>';

    html += '<div class="grid section-gap"><section class="card col-12"><div class="card-head"><div><h2 class="card-title">八技艺横评</h2><p class="card-sub">' + (strategy === 'gold' ? '同一收益比档位，按合计收益从高到低排序' : '仅按总精力（省心策略按次数）从少到多排序') + '</p></div></div><div class="table-wrap"><table class="data compact"><thead><tr><th>#</th><th>技艺</th><th class="num">总精力</th><th class="num">次数</th>' + (strategy === 'gold' ? '<th class="num">突破材料</th><th class="num">合计收益</th>' : '') + '</tr></thead><tbody>' + sum.map(function (x, i) { return '<tr class="clickable" data-bt-skill="' + U.esc(x.skillId) + '" tabindex="0"><td>' + (x.enough ? i + 1 : '待补全') + '</td><td>' + U.esc(x.name) + '</td><td class="num">' + U.fmtInt(x.energy) + '</td><td class="num">' + U.fmtInt(x.crafts) + '</td>' + (strategy === 'gold' ? '<td class="num">' + U.fmt(x.gateCost, 0) + '</td><td class="num">' + btProfit(x.total) + '</td>' : '') + '</tr>'; }).join('') + '</tbody></table></div></section></div>';

    html += '<div class="grid section-gap"><section class="card col-12"><div class="card-body">' +
      notice('经验模型：' + U.esc(meta.expModel.description) + '。暂按八技艺共用门槛，非观测等级及技艺间差异尚未核实，可能影响制作次数、路线及收益；采集经验按 ' + U.fmtInt(meta.gatherExp) + ' 估算。突破材料与门槛来自 JX3BOX 攻略与成就库，配方数据来自技艺接口，优先使用本服脚本 JX3BOX 报价，无报价不使用手动价、示例价或跨服回退；产出按拍卖价成交估算，未计市场深度与暴击，量产会压低实际成交价。', 'info') +
      '<p class="tiny dim">数据版本 ' + U.esc(meta.version) + ' · 目录报价 ' + U.esc(String(DATA.meta.priceUpdatedAt || '')) + ' · 突破报价 ' + U.esc(String(meta.priceUpdatedAt || '')) + ' · 参考：' +
      '<a href="https://www.jx3box.com/bps/109793" target="_blank" rel="noopener">JX3BOX 生活技艺升级攻略 ' + icon('external') + '</a></p>' +
      '</div></section></div>';

    html += '</div>';
    return html;
  }

  function btMiniCard() {
    const B = bt();
    if (!B) return '';
    const list = B.summary('gold');
    if (!list.length) return '';
    const energyMin = Math.min.apply(null, list.filter(function (s) { return s.energy != null; }).map(function (s) { return s.energy; }));
    const energyMax = Math.max.apply(null, list.filter(function (s) { return s.energy != null; }).map(function (s) { return s.energy; }));
    const top = list.slice(0, 4);
    let html = '<div class="grid section-gap"><section class="card col-12"><div class="card-head"><div class="card-head-main">' +
      '<h2 class="card-title">突破升级 · 1→50</h2><p class="card-sub">晋秩突破 · 按本服物价算 1→50 最优路线</p></div>' +
      '<div class="card-tools"><a class="btn btn-sm btn-primary" href="' + Route.href('/breakthrough') + '">' + icon('chart') + ' 查看路线</a></div></div>' +
      '<div class="card-body tight"><div class="bt-mini-kpis">' +
      '<div class="bt-mini"><span class="k">1→50 经验</span><span class="v">' + U.fmtInt(list[0].exp) + '</span><span class="s">5 点观测校准，暂共用门槛</span></div>' +
      '<div class="bt-mini"><span class="k">精力区间</span><span class="v">' + U.fmtInt(energyMin) + '–' + U.fmtInt(energyMax) + '</span><span class="s">制造经验 = 精力 ×2</span></div>' +
      '</div>' +
      top.map(function (s) {
        return '<a class="bt-sum-row" href="' + Route.href('/breakthrough', { skill: s.skillId }) + '">' +
          '<span class="bt-sum-main"><b class="nm">' + U.esc(s.name) + ' <span class="tiny dim">· ' + (s.type === 'gather' ? '采集' : '制造') + '</span></b>' +
          '<span class="ds">精力 ' + U.fmtInt(s.energy) + ' · 升级收益 ' + U.fmtSigned(s.profit, 0) + ' 金 · 突破材料 ' + U.fmt(s.gateCost, 0) + ' 金</span></span>' +
          '<span class="bt-val' + (s.total > 0 ? ' pos' : s.total < 0 ? ' neg' : '') + '">' + U.fmtSigned(s.total, 0) + '<small>金</small></span></a>';
      }).join('') +
      '</div><div class="card-foot"><span>合计收益 = 升级收益（产出 − 材料）− 突破材料；正数为赚。展示前 4 项，共 8 项技艺。</span></div></section></div>';
    return html;
  }

  function analysisLandBadge(row) {
    if (!row) return '<span class="badge badge-neutral">—</span>';
    if (row.landGrade === 'G') return '<span class="badge badge-neutral" title="采集产出，不参与配方判断">采集</span>';
    return gradeBadge(row.landGrade, { title: row.landSelfCraft ? '条件可做：含自产' : '仅看本服报价' });
  }

  function renderAnalysis(p) {
    const basis = currentBasis(p);
    const complete = p.complete !== '0';
    const type = p.type || 'all';
    const landFilter = p.land === 'all' ? 'all' : 'ab';
    const auditByRecipe = Object.create(null);
    auditRowsFor(Store.state.serverId, { crossServer: false }).forEach(function (a) { auditByRecipe[a.id] = a; });
    const rows0 = currentRows(p).map(function (r) {
      const isGather = r.type === 'gather';
      const a = isGather ? null : (auditByRecipe[r.recipe.id] || null);
      const calc = Object.assign({}, r.calc);
      if (a) {
        calc.perEnergy = a.perE;
        calc.profit = a.profit;
        calc.energy = a.energy;
        calc.missing = a.perE == null;
      }
      return Object.assign({}, r, {
        calc: calc,
        land: a,
        landGrade: isGather ? 'G' : (a ? a.grade : 'C'),
        landPerE: a ? a.perE : (isGather ? calc.perEnergy : null),
        landProfit: a ? a.profit : (isGather ? calc.profit : null),
        landSelfCraft: a ? a.selfCraft : false,
        landThin: a ? a.thin : [],
        landBlocked: a ? a.blocked : []
      });
    });
    const scoped = filterRows(rows0, p);
    const craftRows = scoped.filter(function (r) { return r.type !== 'gather'; });
    const abRows = craftRows.filter(function (r) { return r.landGrade === 'A' || r.landGrade === 'B'; });
    const gatherRows = scoped.filter(function (r) { return r.landGrade === 'G'; });
    const cRows = craftRows.filter(function (r) { return r.landGrade === 'C'; });
    let rows = landFilter === 'ab' ? abRows.concat(gatherRows) : scoped.slice();
    if (complete && landFilter !== 'all') rows = rows.filter(function (r) { return !r.calc.missing; });
    const sorted = sortRows(rows, p.sort || 'perEnergy', p.dir || 'desc');
    const valid = abRows.filter(function (r) { return !r.calc.missing && r.calc.perEnergy != null; });
    const best = sortRows(abRows.filter(function (r) { return !r.calc.missing; }), 'perEnergy', 'desc')[0] || null;
    const median = Calc.median(valid.map(function (r) { return r.calc.perEnergy; }));
    const negatives = abRows.filter(function (r) { return !r.calc.missing && r.calc.profit < 0; }).length;
    const cMissing = cRows.filter(function (r) { return r.calc.missing; }).length;
    const cNegative = cRows.filter(function (r) { return !r.calc.missing && r.calc.profit < 0; }).length;
    const planRows = abRows.map(function (r) {
      return {
        id: r.recipe.id, name: r.recipe.name, skill: r.recipe.skillId,
        grade: r.landGrade, perE: r.calc.perEnergy, medianPerE: r.land ? r.land.medianPerE : null,
        profit: r.calc.profit, energy: r.calc.energy, outCov: r.land ? r.land.outCov : 0,
        selfCraft: r.landSelfCraft, blocked: r.landBlocked, thin: r.landThin
      };
    });
    const plan = window.JX3Landability && window.JX3Landability.plan
      ? window.JX3Landability.plan(planRows, settings().energyBudget, { includeSelfCraft: false, localOnly: true })
      : { profit: 0, energyUsed: 0, budget: settings().energyBudget, energyIdle: settings().energyBudget, allocations: [] };
    const scatterRows = rows.filter(function (r) { return !r.calc.missing; });

    let html = '<div class="page">';
    html += '<div class="page-head"><div><h1 class="page-title">精力收益分析</h1>' +
      '<p class="page-sub">按本服报价判断能不能做；默认只看可做，切「全部」看缺价项。</p></div>' +
      '<div class="page-tools">' +
        '<div class="seg" role="group" aria-label="成本口径">' +
          '<button class="' + (basis === 'market' ? 'active' : '') + '" data-filter="basis" data-value="" title="材料按本服市场价计算">市场价</button>' +
          '<button class="' + (basis === 'min' ? 'active' : '') + '" data-filter="basis" data-value="min" title="材料取市场价与自制成本较低者；不把自制中间产物的精力计入本配方">取最低（仅成本）</button>' +
        '</div>' +
        '<div class="seg seg-sm" role="group" aria-label="可做筛选">' +
          '<button class="' + (landFilter === 'ab' ? 'active' : '') + '" data-filter="land" data-value="ab" title="只看可做配方，采集保留">可做</button>' +
          '<button class="' + (landFilter === 'all' ? 'active' : '') + '" data-filter="land" data-value="all" title="包含缺价与亏损项">全部</button>' +
        '</div>' +
        '<span class="badge badge-outline" title="所有产物售价按此税率扣税，可在设置中修改">交易税 ' + U.fmtPct(currentTaxRate(), 0) + '</span>' +
        '<button class="btn" data-action="export-csv" data-csv="analysis">' + icon('download') + '<span class="txt">导出 CSV</span></button>' +
      '</div></div>';

    html += '<div class="kpi-grid">' +
      '<div class="kpi"><div class="kpi-label">本服最高可做</div><div class="kpi-value">' + (best ? U.fmt(best.calc.perEnergy, 2) : '—') + '<span class="kpi-unit">金/精力</span></div>' +
        '<div class="kpi-meta">' + (best ? icon('spark') + '<span class="strong">' + U.esc(best.recipe.name) + '</span><span class="sep"></span><span>' + gradeBadge(best.landGrade) + '</span>' : '<span>当前筛选没有可做配方</span>') + '</div></div>' +
      '<div class="kpi"><div class="kpi-label">可做中位</div><div class="kpi-value">' + (median == null ? '—' : U.fmt(median, 2)) + '<span class="kpi-unit">金/精力</span></div>' +
        '<div class="kpi-meta"><span>本服可做配方中位</span></div></div>' +
      '<div class="kpi"><div class="kpi-label">暂不可做</div><div class="kpi-value">' + cRows.length + '<span class="kpi-unit">/ ' + craftRows.length + ' 项</span></div>' +
        '<div class="kpi-meta"><span class="down">缺价 ' + cMissing + ' · 亏损 ' + cNegative + '；默认不进榜</span></div><div class="progress is-warn"><i style="width:' + (rows0.length ? Math.round(cRows.length / rows0.length * 100) : 0) + '%"></i></div></div>' +
      '<div class="kpi"><div class="kpi-label">可做组合</div><div class="kpi-value">' + U.fmt(plan.profit, 0) + '<span class="kpi-unit">金</span></div>' +
        '<div class="kpi-meta"><span>用尽 ' + U.fmtInt(plan.energyUsed) + ' / ' + U.fmtInt(settings().energyBudget) + ' 精力 · 闲置 ' + U.fmtInt(plan.energyIdle) + '</span></div></div>' +
    '</div>';

    html += btMiniCard();

    const chartRows = sorted.filter(function (r) { return !r.calc.missing && r.calc.perEnergy != null; }).slice(0, 15).map(function (r) {
      return {
        label: r.recipe.name, meta: r.skill.name + ' · ' + gradeText(r.landGrade), value: r.calc.perEnergy,
        color: r.type === 'gather' ? Charts.color.gather : Charts.color.craft,
        id: r.recipe.id,
        tip: r.recipe.name + ' · ' + U.fmt(r.calc.profit, 2) + ' 金利润 / ' + U.fmtInt(r.calc.energy) + ' 精力'
      };
    });

    html += '<div class="grid section-gap"><section class="card col-12"><div class="card-head"><div class="card-head-main">' +
      '<h2 class="card-title">精力收益排行</h2><p class="card-sub">只看可做 · 每点精力收益 · 虚线为中位<span class="mobile-only"> · 左右滑动</span></p></div>' +
      '<div class="card-tools">' +
        '<div class="seg seg-sm" role="group" aria-label="类型筛选">' +
          '<button class="' + (type === 'all' ? 'active' : '') + '" data-filter="type" data-value="">全部</button>' +
          '<button class="' + (type === 'craft' ? 'active' : '') + '" data-filter="type" data-value="craft">制造</button>' +
          '<button class="' + (type === 'gather' ? 'active' : '') + '" data-filter="type" data-value="gather">采集</button>' +
        '</div>' +
        '<select class="select" data-filter="skill" aria-label="技艺筛选" style="width:92px">' + skillOptions(p.skill || '') + '</select>' +
        '<select class="select" data-filter="tier" aria-label="品阶筛选" style="width:92px">' + tierOptions(p.tier || '') + '</select>' +
        '<label class="switch" title="' + (landFilter === 'all' ? '全部时展示缺价项，此开关不生效' : '隐藏缺价项') + '"><input type="checkbox" data-toggle="complete" data-value="1"' + (complete ? ' checked' : '') + (landFilter === 'all' ? ' disabled' : '') + '><span class="track"></span>仅数据完整</label>' +
        '<button class="icon-btn" data-action="export-chart" data-target="chart-analysis" aria-label="导出排行图">' + icon('download') + '</button>' +
      '</div></div>' +
      '<div class="card-body tight" id="chart-analysis">' +
        Charts.barH(chartRows, {
          palette: Charts.palette(ui.theme), unit: ' 金/精力', refLine: median,
          refLabel: '可做中位', limit: 15, emptyText: '当前筛选没有可做配方', ariaLabel: '精力收益排行'
        }) +
      '</div>' +
      '<div class="card-foot"><div class="chart-legend">' +
        '<span class="item"><span class="swatch" style="--sw:' + Charts.color.craft + '"></span>制造</span>' +
        '<span class="item"><span class="swatch" style="--sw:' + Charts.color.gather + '"></span>采集</span>' +
        '<span class="item"><span class="swatch" style="--sw:' + Charts.color.peak + '"></span>当前最优</span>' +
      '</div><span class="spacer"></span><span>数字为「利润 ÷ 精力」</span></div></section></div>';

    const skillGroups = DATA.skills.map(function (s) {
      const vals = scatterRows.filter(function (r) { return r.recipe.skillId === s.id && r.calc.perEnergy != null; })
        .map(function (r) { return r.calc.perEnergy; });
      return { name: s.name, type: s.type, values: vals };
    }).filter(function (g) { return g.values.length; });

    html += '<div class="grid section-gap">' +
      '<section class="card col-6"><div class="card-head"><div class="card-head-main"><h2 class="card-title">成本越高，收益越高吗？</h2>' +
        '<p class="card-sub">横轴单次成本、纵轴精力收益、气泡大小为精力消耗<span class="mobile-only"> · 左右滑动查看</span></p></div>' +
        '<div class="card-tools"><button class="icon-btn" data-action="export-chart" data-target="chart-scatter" aria-label="导出散点图">' + icon('download') + '</button></div></div>' +
        '<div class="card-body tight" id="chart-scatter">' + Charts.scatter(scatterRows, { palette: Charts.palette(ui.theme) }) + '</div>' +
        '<div class="reading-guide">读图：越靠上越赚精力；越靠右占用资金越多；气泡越大单次精力越高。紫色为当前收益前三。</div></section>' +
      '<section class="card col-6"><div class="card-head"><div class="card-head-main"><h2 class="card-title">各技艺收益稳不稳？</h2>' +
        '<p class="card-sub">箱体为中间 50% 配方，须线为 1.5 倍四分位范围<span class="mobile-only"> · 左右滑动查看</span></p></div>' +
        '<div class="card-tools"><button class="icon-btn" data-action="export-chart" data-target="chart-box" aria-label="导出箱线图">' + icon('download') + '</button></div></div>' +
        '<div class="card-body tight" id="chart-box">' + Charts.boxPlot(rows, { groups: skillGroups, palette: Charts.palette(ui.theme) }) + '</div>' +
        '<div class="reading-guide">箱体越短越稳定；中位线越靠右，整体精力收益越好。圆点为离群配方。</div></section>' +
    '</div>';

    // 对比
    const comparePool = sortRows(rows0.filter(function (r) { return (r.landGrade === 'A' || r.landGrade === 'B') && !r.calc.missing; }), 'perEnergy', 'desc');
    const aId = p.a && comparePool.some(function (r) { return r.recipe.id === p.a; }) ? p.a : (comparePool[0] ? comparePool[0].recipe.id : '');
    const bId = p.b && comparePool.some(function (r) { return r.recipe.id === p.b; }) ? p.b : (comparePool[1] ? comparePool[1].recipe.id : '');
    const ra = comparePool.find(function (r) { return r.recipe.id === aId; });
    const rb = comparePool.find(function (r) { return r.recipe.id === bId; });

    html += '<div class="grid section-gap">' +
      '<section class="card col-7"><div class="card-head"><div class="card-head-main"><h2 class="card-title">两个制品，做哪个？</h2>' +
        '<p class="card-sub">同口径对比成本、产值、精力与满预算产出</p></div></div>' +
        '<div class="card-body">' +
          '<div class="split-2" style="gap:10px">' +
            '<label class="form-field"><span style="font-size:10.5px;color:var(--muted)">制品一</span><select class="select" data-compare="a">' +
              comparePool.map(function (r) { return '<option value="' + U.esc(r.recipe.id) + '"' + (r.recipe.id === aId ? ' selected' : '') + '>' + U.esc(r.recipe.name) + ' · ' + U.esc(r.skill.name) + '</option>'; }).join('') +
            '</select></label>' +
            '<label class="form-field"><span style="font-size:10.5px;color:var(--muted)">制品二</span><select class="select" data-compare="b">' +
              comparePool.map(function (r) { return '<option value="' + U.esc(r.recipe.id) + '"' + (r.recipe.id === bId ? ' selected' : '') + '>' + U.esc(r.recipe.name) + ' · ' + U.esc(r.skill.name) + '</option>'; }).join('') +
            '</select></label>' +
          '</div>' +
          (ra && rb ? compareTable(ra, rb) + '<div class="hairline"></div>' +
            '<div class="tiny dim" style="margin-bottom:4px">精力收益对比（金/精力）</div>' +
            Charts.diffBar({ label: ra.recipe.name, value: ra.calc.perEnergy || 0 }, { label: rb.recipe.name, value: rb.calc.perEnergy || 0 }, { palette: Charts.palette(ui.theme), aColor: Charts.color.craft, bColor: Charts.color.warning }) +
            '<div class="reading-guide" style="padding:4px 0 0">按当前成本口径与服务器价格计算；精力按满预算可做次数折算。</div>'
            : emptyState('暂无可对比的完整配方', '补齐价格或关闭「仅数据完整」。', '', 'compare')) +
        '</div></section>' +

      '<section class="card col-5"><div class="card-head"><div class="card-head-main"><h2 class="card-title">可做配方怎么分配？</h2>' +
        '<p class="card-sub">按本服收益与单配方上限，不含自产</p></div></div>' +
        '<div class="card-body">' +
          '<div class="flex" style="margin-bottom:12px"><label class="tiny dim" for="budget-input">精力预算</label>' +
          '<input class="input" id="budget-input" type="number" min="0" step="100" value="' + settings().energyBudget + '" data-setting="energyBudget" style="width:110px">' +
          '<span class="tiny dim">点</span><span class="spacer"></span><span class="badge badge-outline">' + U.fmtInt(plan.allocations.length) + ' 项参与</span></div>' +
          (plan.allocations.length ? '<div class="info-rows">' +
            '<div class="info-row"><span class="k">预计总收益</span><span class="v pos">+' + U.fmt(plan.profit, 2) + ' 金</span></div>' +
            '<div class="info-row"><span class="k">精力用尽</span><span class="v">' + U.fmtInt(plan.energyUsed) + ' / ' + U.fmtInt(plan.budget) + '</span></div>' +
            '<div class="info-row"><span class="k">剩余精力</span><span class="v">' + U.fmtInt(plan.energyIdle) + '</span></div>' +
            '</div><div class="hairline"></div><div class="rec-list">' +
            plan.allocations.slice(0, 5).map(function (a, i) {
              return '<div class="rec-item"><span class="rec-rank">' + (i + 1) + '</span><div class="rec-main"><div class="nm">' + U.esc(a.name) + ' ' + gradeBadge(a.grade) + '</div>' +
                '<div class="ds">' + U.esc(skill(a.skill).name) + ' · ' + a.count + ' 次 × ' + U.fmtInt(a.energy / a.count) + ' 精力 · 上限 ' + a.cap + '</div></div>' +
                '<div class="rec-val"><b class="pos">+' + U.fmt(a.profit, 2) + '</b><span>金</span></div></div>';
            }).join('') + '</div>' +
            (plan.allocations.length > 5 ? '<div class="tiny dim" style="margin-top:8px">其余 ' + (plan.allocations.length - 5) + ' 项已计入总收益</div>' : '')
            : emptyState('当前预算下没有正收益的可做配方', '提高预算或校准价格。', '', 'coin')) +
        '</div>' +
        '<div class="card-foot"><span>按本服报价与单配方上限；已扣 ' + U.fmtPct(currentTaxRate(), 0) + ' 交易税</span></div></section>' +
    '</div>';

    html += '<div class="grid section-gap"><section class="card col-12"><div class="card-head"><div class="card-head-main">' +
      '<h2 class="card-title">完整配方收益表</h2><p class="card-sub">' + sorted.length + ' 条 · 点击行查看成本拆解与配方编辑</p></div>' +
      '<div class="card-tools"><button class="btn btn-sm" data-action="export-csv" data-csv="analysis">' + icon('download') + ' 导出</button></div></div>' +
      '<div class="table-wrap tall"><table class="data analysis-table"><thead><tr>' +
        '<th class="sticky"># / 配方</th><th>技艺</th><th>类型</th><th>可做</th>' +
        sortHeader('总成本', 'cost', p, 'num') +
        '<th class="num">税前产值</th><th class="num">交易税</th>' +
        sortHeader('税后产值', 'output', p, 'num') +
        sortHeader('利润', 'profit', p, 'num') + sortHeader('精力', 'energy', p, 'num') +
        sortHeader('收益/精力', 'perEnergy', p, 'num') +
        '<th>状态</th>' +
      '</tr></thead><tbody>' +
      (sorted.length ? sorted.map(function (r, i) {
        const c = r.calc;
        return '<tr class="clickable" data-recipe-id="' + U.esc(r.recipe.id) + '" tabindex="0">' +
          '<td class="sticky"><div class="cell-main"><span class="rec-rank">' + (i + 1) + '</span><div class="txt"><div class="t1">' + U.esc(r.recipe.name) + '</div>' +
            '<div class="t2">' + U.esc(r.outputNames) + '</div></div></div></td>' +
          '<td class="dim">' + U.esc(r.skill.name) + '</td>' +
          '<td>' + typeBadge(r.type) + '</td>' +
          '<td>' + analysisLandBadge(r) + '</td>' +
          '<td class="num">' + U.fmt(c.totalCost, 2) + '</td>' +
          '<td class="num">' + U.fmt(c.outputValueGross, 2) + '</td>' +
          '<td class="num dim">' + U.fmt(c.tax, 2) + '</td>' +
          '<td class="num">' + U.fmt(c.outputValue, 2) + '</td>' +
          '<td class="num ' + (c.missing ? 'dim' : c.profit >= 0 ? 'pos' : 'neg') + '">' + (c.missing ? '—' : U.fmtSigned(c.profit, 2)) + '</td>' +
          '<td class="num">' + U.fmtInt(c.energy) + '</td>' +
          '<td class="num"><b class="' + (c.missing ? 'dim' : c.perEnergy >= 0 ? 'pos' : 'neg') + '">' + perEnergyText(c.perEnergy) + '</b></td>' +
          '<td>' + statusBadge(r) + '</td>' +
        '</tr>';
      }).join('') : '<tr><td colspan="11">' + emptyState('没有匹配的配方', '清空搜索或筛选条件再试。', '', 'search') + '</td></tr>') +
      '</tbody></table></div>' +
      '<div class="card-foot"><span>精力收益 =（税后产值 − 材料成本 − 手续费）÷ 精力；已扣 ' + U.fmtPct(currentTaxRate(), 0) + ' 交易税。默认只看可做。</span></div>' +
      '</section></div>';

    html += stoneAnalysisCard();

    html += dataFoot();
    html += '</div>';
    return html;
  }

  /* ------------------------------------------------------------------ */
  /* 物价走势                                                           */
  /* ------------------------------------------------------------------ */
  function trendAtText(at) {
    const text = String(at || '');
    return text.length >= 16 ? text.slice(0, 16).replace('T', ' ') : text;
  }
  function trendHourOptions(selected) {
    let html = '';
    for (let h = 0; h < 24; h++) {
      const value = String(h).padStart(2, '0');
      html += '<option value="' + value + '"' + (value === selected ? ' selected' : '') + '>' + value + ':00</option>';
    }
    return html;
  }
  function trendSkillOptions(current) {
    let html = '<option value="all"' + (current === 'all' ? ' selected' : '') + '>全部技艺</option>';
    DATA.skills.forEach(function (s) {
      html += '<option value="' + U.esc(s.id) + '"' + (current === s.id ? ' selected' : '') + '>' + U.esc(s.name) + '</option>';
    });
    html += '<option value="stone"' + (current === 'stone' ? ' selected' : '') + '>五行石</option>';
    return html;
  }
  function trendAxisControls(mode, key) {
    return '<div class="seg seg-sm trend-axis-seg">' +
      '<button class="' + (mode === 'index' ? 'active' : '') + '" data-filter="' + key + '" data-value="index">指数</button>' +
      '<button class="' + (mode === 'price' ? 'active' : '') + '" data-filter="' + key + '" data-value="price">原始金币</button>' +
      '</div>' +
      '<span class="info" tabindex="0" role="img" aria-label="价格指数说明" data-tip="价格指数 = 节点价格 ÷ 区间首点价格 × 100。100 表示与首点持平，120 表示上涨 20%，80 表示下跌 20%；原始金币使用对数坐标。">' + icon('info') + '</span>';
  }
  function trendDefaultItem(T, items, points) {
    if (!items.length) return '';
    const preferred = items.filter(function (item) { return item.kind === 'product'; });
    const candidates = preferred.length ? preferred : items;
    let bestKey = '';
    let bestChanges = -1;
    let bestChange = -1;
    let fallbackKey = '';
    for (let i = 0; i < candidates.length; i++) {
      const series = T.itemSeries(points, candidates[i].key);
      if (!series.length) continue;
      if (!fallbackKey) fallbackKey = candidates[i].key;
      if (series.length < 2) continue;
      const first = series[0].price;
      const last = series[series.length - 1].price;
      if (!(first > 0)) continue;
      let changes = 0;
      for (let j = 1; j < series.length; j++) {
        if (series[j].price !== series[j - 1].price) changes++;
      }
      const change = Math.abs(last / first - 1);
      if (changes > bestChanges || (changes === bestChanges && change > bestChange)) {
        bestChanges = changes;
        bestChange = change;
        bestKey = candidates[i].key;
      }
    }
    return bestKey || fallbackKey || candidates[0].key;
  }
  function trendItemColor(index) {
    const hue = (210 + index * 137.508) % 360;
    return 'hsl(' + hue.toFixed(1) + ', 64%, 56%)';
  }
  function trendPriceRange(p) {
    let min = Number(p.tmin);
    let max = Number(p.tmax);
    const hasMin = String(p.tmin == null ? '' : p.tmin).trim() !== '' && Number.isFinite(min);
    const hasMax = String(p.tmax == null ? '' : p.tmax).trim() !== '' && Number.isFinite(max);
    if (hasMin && hasMax && min > max) { const tmp = min; min = max; max = tmp; }
    return { min: hasMin ? min : null, max: hasMax ? max : null };
  }
  function trendFilterSeries(series, range) {
    if (range.min == null && range.max == null) return series;
    return (series || []).filter(function (point) {
      return (range.min == null || point.price >= range.min) && (range.max == null || point.price <= range.max);
    });
  }
  function trendAxisSeries(series, mode) {
    if (mode !== 'index' || !series.length) return series;
    const base = series[0].price;
    return series.map(function (point) {
      return {
        at: point.at,
        price: base > 0 ? point.price / base * 100 : 0,
        rawPrice: point.price,
        source: point.source
      };
    });
  }
  function trendPriceStats(series) {
    const vals = (series || []).map(function (point) { return point.price; })
      .filter(function (v) { return Number(v) > 0; })
      .sort(function (a, b) { return a - b; });
    if (!vals.length) return null;
    const q = function (p) {
      const pos = (vals.length - 1) * p;
      const base = Math.floor(pos), rest = pos - base;
      return vals[base + 1] !== undefined ? vals[base] + rest * (vals[base + 1] - vals[base]) : vals[base];
    };
    const sum = vals.reduce(function (a, b) { return a + b; }, 0);
    return {
      min: vals[0], max: vals[vals.length - 1], avg: sum / vals.length,
      p10: q(0.1), p25: q(0.25), p50: q(0.5), p75: q(0.75), p90: q(0.9),
      count: vals.length
    };
  }
  function trendContext(p) {
    const T = window.JX3Trends;
    if (!T) return { view: { status: 'error', error: '走势模块未加载' } };
    const view = T.view(Store.state.serverId, { from: p.tfrom, to: p.tto, mode: 'price' });
    if (view.status !== 'ready') return { view: view };
    const points = view.points;
    const raw = T.rawView ? T.rawView(Store.state.serverId, { from: p.tfrom, to: p.tto }) : null;
    const rawReady = !!(raw && raw.status === 'ready');
    const rawPoints = rawReady ? raw.points : null;
    const allItems = T.items('all', '');
    const defaultKey = trendDefaultItem(T, allItems, points);
    const defaultItem = T.item(defaultKey);
    let skillId = !p.tskill || p.tskill === 'all' ? '' : p.tskill;
    if (skillId && skillId !== 'stone' && !DATA.skills.some(function (s) { return s.id === skillId; })) {
      skillId = '';
    }
    let category = p.tcategory || '';
    if (category && category !== 'life' && !(DATA.meta.categories || []).some(function (c) { return c.id === category; })) {
      category = '';
    }
    const skill = DATA.skills.filter(function (s) { return s.id === skillId; })[0];
    let type = p.ttype || 'all';
    if (skillId === 'stone') {
      type = 'stone';
    } else if (skill && skill.type === 'gather') {
      type = 'material';
    } else if (type !== 'material' && type !== 'product' && type !== 'all') {
      type = 'all';
    }
    const priceRange = trendPriceRange(p);
    const allScope = T.items(type, skillId, category).map(function (item, index) {
      return Object.assign({}, item, { color: trendItemColor(index) });
    });
    const seriesMap = {};
    const scopeItems = [];
    allScope.forEach(function (item) {
      const filtered = trendFilterSeries(T.itemSeries(points, item.key), priceRange);
      if (!filtered.length) return;
      seriesMap[item.key] = filtered;
      scopeItems.push(item);
    });
    const scopeKeys = scopeItems.map(function (item) { return item.key; });
    let selectedKeys;
    if (p.titems === '__none__') {
      selectedKeys = [];
    } else if (p.titems) {
      const wanted = new Set(String(p.titems).split(','));
      selectedKeys = scopeItems.filter(function (item) { return wanted.has(item.key); })
        .map(function (item) { return item.key; });
      if (!selectedKeys.length) selectedKeys = scopeKeys.slice();
    } else {
      selectedKeys = scopeKeys.slice();
    }
    const selectedSet = new Set(selectedKeys);
    const selectedItems = scopeItems.filter(function (item) { return selectedSet.has(item.key); });
    const scores = {};
    selectedItems.forEach(function (item) {
      const series = seriesMap[item.key] || [];
      let max = 0;
      const first = series.length ? series[0].price : 0;
      series.forEach(function (point) {
        if (first > 0) max = Math.max(max, Math.abs(point.price / first - 1));
      });
      scores[item.key] = max;
    });
    const rankedItems = selectedItems.slice().sort(function (a, b) {
      return (scores[b.key] || 0) - (scores[a.key] || 0) || String(a.name).localeCompare(String(b.name), 'zh-CN');
    });
    let focusKey = p.tfocus || (rankedItems[0] ? rankedItems[0].key : '');
    if (!selectedSet.has(focusKey)) focusKey = rankedItems[0] ? rankedItems[0].key : '';
    const focusItem = T.item(focusKey);
    const focusItemColored = rankedItems.filter(function (item) { return item.key === focusKey; })[0] || focusItem;
    const focusSeries = seriesMap[focusKey] || [];
    return {
      T: T, view: view, points: points,
      rawReady: rawReady, rawPoints: rawPoints,
      skillId: skillId, skill: skill || null,
      category: category, type: type, scopeItems: scopeItems, scopeKeys: scopeKeys,
      selectedKeys: selectedKeys, selectedItems: selectedItems,
      rankedItems: rankedItems, focusKey: focusKey, focusItem: focusItemColored, focusSeries: focusSeries,
      seriesMap: seriesMap, priceRange: priceRange,
      distAxis: p.tdaxis === 'price' ? 'price' : 'index',
      scatterAxis: p.tsaxis === 'price' ? 'price' : 'index'
    };
  }
  function trendHead() {
    return '<div class="page-head trend-page-head"><div><h1 class="page-title">物价走势</h1></div></div>';
  }
  function trendFilter(ctx, p) {
    const view = ctx.view;
    const fromDate = view.from ? view.from.slice(0, 10) : '';
    const fromHour = view.from ? view.from.slice(11, 13) : '00';
    const toDate = view.to ? view.to.slice(0, 10) : '';
    const toHour = view.to ? view.to.slice(11, 13) : '00';
    const minDate = view.allFrom ? view.allFrom.slice(0, 10) : '';
    const maxDate = view.allTo ? view.allTo.slice(0, 10) : '';
    const selectedCount = ctx.selectedKeys.length;
    const total = ctx.scopeItems.length;
    const pickerOpen = ui.trendPickerOpen ? ' open' : '';
    const skill = ctx.skill;
    const skillLabel = ctx.skillId === 'stone' ? '五行石' : (skill ? skill.name : '全部技艺');
    const categoryLabel = ctx.category ? categoryName(ctx.category) : '全部分类';
    const typeLabel = ctx.type === 'material' ? '材料' : ctx.type === 'product' ? '产物' : ctx.type === 'stone' ? '五行石' : '全部类型';
    const syncLabel = view.partial || view.stale ? ' · 更新中' : '';
    const timeLabel = fromDate.slice(5) + ' ' + fromHour + ':00 – ' + toDate.slice(5) + ' ' + toHour + ':00' + syncLabel;
    const filterOpen = ui.trendFilterOpen;
    let html = '<section class="card trend-filter-card"><div class="card-body tight">' +
      '<button class="trend-filter-toggle" data-action="toggle-trend-filter" aria-expanded="' + (filterOpen ? 'true' : 'false') + '">' +
        '<span class="trend-filter-toggle-main">' + icon('filter') + '筛选</span>' +
        '<span class="trend-filter-toggle-sum">' + U.esc(categoryLabel + ' · ' + skillLabel + ' · ' + typeLabel + ' · ' + selectedCount + '/' + total + ' · ' + timeLabel) + '</span>' +
        icon('chevronDown') +
      '</button>' +
      '<div class="trend-filter-body' + (filterOpen ? ' open' : '') + '"><div class="trend-filter">';
    html += '<div class="trend-time-group">' +
      '<span class="trend-time-label">开始</span>' +
      '<input class="input trend-date" type="date" value="' + U.esc(fromDate) + '" min="' + U.esc(minDate) +
        '" max="' + U.esc(maxDate) + '" data-trend-range="from-date" aria-label="开始日期">' +
      '<select class="select trend-hour" data-trend-range="from-hour" aria-label="开始小时">' + trendHourOptions(fromHour) + '</select>' +
    '</div><span class="trend-time-sep">至</span>' +
    '<div class="trend-time-group">' +
      '<span class="trend-time-label">结束</span>' +
      '<input class="input trend-date" type="date" value="' + U.esc(toDate) + '" min="' + U.esc(minDate) +
        '" max="' + U.esc(maxDate) + '" data-trend-range="to-date" aria-label="结束日期">' +
      '<select class="select trend-hour" data-trend-range="to-hour" aria-label="结束小时">' + trendHourOptions(toHour) + '</select>' +
    '</div><span class="server-range-note">最多 7 天</span>';
    html += '<label class="trend-filter-field"><span>分类</span><select class="select" data-filter="tcategory" aria-label="分类筛选">' +
      categoryOptions(ctx.category || '') + '</select></label>';
    html += '<label class="trend-filter-field"><span>技艺</span><select class="select" data-filter="tskill" aria-label="技艺筛选">' +
      trendSkillOptions(ctx.skillId || 'all') + '</select></label>';
    if (ctx.skillId === 'stone') {
      html += '<span class="trend-filter-field"><span>类型</span><span class="badge badge-custom">五行石</span></span>';
    } else if (skill && skill.type === 'gather') {
      html += '<span class="trend-filter-field"><span>类型</span><span class="badge badge-positive">材料</span></span>';
    } else {
      html += '<div class="trend-filter-field"><span>类型</span><div class="seg seg-sm">' +
        '<button class="' + (ctx.type === 'all' ? 'active' : '') + '" data-filter="ttype" data-value="all">全部类型</button>' +
        '<button class="' + (ctx.type === 'material' ? 'active' : '') + '" data-filter="ttype" data-value="material">材料</button>' +
        '<button class="' + (ctx.type === 'product' ? 'active' : '') + '" data-filter="ttype" data-value="product">产物</button>' +
        '</div></div>';
    }
    const allSelected = total > 0 && selectedCount === total;
    html += '<div class="trend-filter-field"><span>价格区间</span>' +
      '<input class="input trend-price" type="number" min="0" step="0.01" inputmode="decimal" placeholder="最低" value="' + U.esc(p.tmin || '') + '" data-filter="tmin" aria-label="最低价格">' +
      '<span class="dim">–</span>' +
      '<input class="input trend-price" type="number" min="0" step="0.01" inputmode="decimal" placeholder="最高" value="' + U.esc(p.tmax || '') + '" data-filter="tmax" aria-label="最高价格">' +
    '</div>';
    html += '<details class="trend-picker"' + pickerOpen + '>' +
      '<summary class="trend-picker-summary" title="可多选物品，支持全选/清空"><span>物品 <em>多选</em></span><b>' + selectedCount + ' / ' + total + '</b>' + icon('chevronDown') + '</summary>' +
      '<div class="trend-picker-panel">' +
        '<div class="trend-picker-actions">' +
          '<label class="trend-check trend-check-all"><input type="checkbox" data-trend-toggle-all' + (allSelected ? ' checked' : '') + '>全选</label>' +
          '<button class="btn btn-sm" data-action="trend-select-none">清空</button>' +
          '<span class="tiny dim">已选 ' + selectedCount + ' / ' + total + '</span>' +
        '</div>' +
        '<div class="trend-picker-search"><input class="input" type="search" placeholder="搜索物品" value="' + U.esc(ui.trendPickerQuery || '') + '" data-trend-picker-search data-fkey="trend-picker-search" aria-label="搜索物品"></div>' +
        '<div class="trend-picker-list">' +
          (ctx.scopeItems.filter(function (item) {
            const q = String(ui.trendPickerQuery || '').trim();
            if (!q) return true;
            return U.includes([item.name, item.skillName, item.skillNames || '', item.tierName || ''].join(' '), q);
          }).map(function (item) {
            const checked = ctx.selectedKeys.indexOf(item.key) !== -1;
            const searchText = [item.name, item.skillName, item.skillNames || '', item.tierName || ''].join(' ');
            return '<label class="trend-check" data-picker-item data-picker-text="' + U.esc(searchText) + '"><input type="checkbox" data-trend-item-toggle="' + U.esc(item.key) + '"' + (checked ? ' checked' : '') + '>' +
              '<span class="trend-dot" style="--c:' + U.esc(item.color) + '"></span>' +
              '<span class="nm">' + U.esc(item.name) + '</span><span class="tier">' + U.esc(item.tierName) + '</span></label>';
          }).join('') || '<span class="tiny dim">没有匹配的物品</span>') +
        '</div>' +
      '</div>' +
    '</details>';
    html += '<button class="btn btn-sm" data-action="trend-refresh" title="重新加载历史数据">' + icon('refresh') + '刷新</button>';
    html += '</div></div></div></section>';
    return html;
  }
  function trendTierLegend(ctx, withFocus) {
    const seen = {};
    ctx.rankedItems.forEach(function (item) {
      const key = item.tierName || item.skillName;
      if (!seen[key]) seen[key] = item.tierColor || '#64748B';
    });
    let html = '<div class="chart-legend">';
    Object.keys(seen).forEach(function (key) {
      html += '<span class="item"><span class="swatch" style="--sw:' + seen[key] + '"></span>' + U.esc(key) + '</span>';
    });
    if (withFocus && ctx.focusItem) {
      html += '<span class="item"><span class="trend-ring"></span>选中</span>';
    }
    html += '</div>';
    return html;
  }
  function trendDistributionItems(ctx) {
    return ctx.rankedItems.map(function (item) {
      const series = trendAxisSeries(ctx.seriesMap[item.key] || [], ctx.distAxis);
      return {
        key: item.key, name: item.name, tierName: item.tierName, tierColor: item.tierColor, color: item.color,
        stats: trendPriceStats(series), focus: item.key === ctx.focusKey
      };
    }).filter(function (item) { return item.stats; });
  }
  function trendCategoryScatterRows(ctx) {
    const rows = [];
    ctx.rankedItems.forEach(function (item, index) {
      const raw = ctx.seriesMap[item.key] || [];
      if (!raw.length) return;
      const series = trendAxisSeries(raw, ctx.scatterAxis);
      const first = raw[0].price;
      const n = series.length;
      series.forEach(function (point, j) {
        rows.push({
          itemKey: item.key, itemIndex: index, name: item.name, tierName: item.tierName,
          color: item.color || item.tierColor || '#64748B', at: point.at, price: point.price,
          rawPrice: raw[j] ? raw[j].price : point.price,
          change: first > 0 ? (raw[j].price / first - 1) * 100 : 0,
          jitter: n > 1 ? j / (n - 1) - 0.5 : 0,
          focus: item.key === ctx.focusKey
        });
      });
    });
    return rows;
  }
  function trendRankCard(ctx) {
    const allRows = [];
    ctx.rankedItems.forEach(function (item) {
      const series = ctx.seriesMap[item.key] || [];
      if (!series.length) return;
      const first = series[0].price;
      const last = series[series.length - 1].price;
      if (!(first > 0)) return;
      allRows.push({
        item: item,
        change: series.length > 1 ? (last / first - 1) * 100 : 0,
        last: last
      });
    });
    const rows = allRows.filter(function (row) { return row.change !== 0; });
    const up = rows.filter(function (row) { return row.change > 0; })
      .sort(function (a, b) { return b.change - a.change; }).slice(0, 10);
    const down = rows.filter(function (row) { return row.change < 0; })
      .sort(function (a, b) { return a.change - b.change; }).slice(0, 10);
    function list(items, direction) {
      if (!items.length) {
        return '<div class="trend-rank-empty">筛选范围内暂无' + (direction === 'up' ? '上涨' : '下跌') + '物品</div>';
      }
      return items.map(function (row, index) {
        const cls = direction === 'up' ? 'pos' : 'neg';
        return '<div class="trend-rank-row" tabindex="0" data-trend-focus="' + U.esc(row.item.key) + '">' +
          '<span class="trend-rank-no">' + (index + 1) + '</span>' +
          '<span class="trend-dot" style="--c:' + U.esc(row.item.color) + '"></span>' +
          '<span class="trend-rank-name">' + U.esc(row.item.name) + '</span>' +
          '<span class="trend-rank-change ' + cls + '">' + (row.change >= 0 ? '+' : '−') + U.fmt(Math.abs(row.change), 1) + '%</span>' +
          '<span class="trend-rank-price">' + U.fmt(row.last, 2) + ' 金</span>' +
          '</div>';
      }).join('');
    }
    const fullRows = allRows.slice().sort(function (a, b) {
      return b.change - a.change || String(a.item.name).localeCompare(String(b.item.name), 'zh-CN');
    });
    const fullBody = fullRows.map(function (row, index) {
      const cls = row.change > 0 ? 'pos' : row.change < 0 ? 'neg' : 'dim';
      return '<tr class="trend-rank-all-row" data-trend-focus="' + U.esc(row.item.key) + '" tabindex="0">' +
        '<td class="num dim">' + (index + 1) + '</td>' +
        '<td><span class="trend-dot" style="--c:' + U.esc(row.item.color) + '"></span>' + U.esc(row.item.name) + '</td>' +
        '<td class="dim">' + U.esc(row.item.skillName) + '</td>' +
        '<td class="dim">' + U.esc(row.item.tierName) + '</td>' +
        '<td class="num ' + cls + '">' + (row.change > 0 ? '+' : row.change < 0 ? '−' : '') + U.fmt(Math.abs(row.change), 1) + '%</td>' +
        '<td class="num">' + U.fmt(row.last, 2) + ' 金</td></tr>';
    }).join('');
    const full = '<details class="trend-rank-all"' + (ui.trendRankAllOpen ? ' open' : '') + '><summary><span>全部涨跌数据</span><span class="badge badge-outline">' + allRows.length + '</span>' +
      '<span class="chev">' + icon('chevronDown') + '</span></summary>' +
      '<div class="trend-rank-all-wrap"><table class="data compact"><thead><tr><th class="num">#</th><th>物品</th><th>技艺</th><th>品阶</th><th class="num">区间涨跌</th><th class="num">最新价</th></tr></thead>' +
      '<tbody>' + (fullBody || '<tr><td colspan="6">' + emptyState('暂无涨跌数据', '调整筛选条件。', '', 'filter') + '</td></tr>') + '</tbody></table></div></details>';
    return '<section class="card col-12 trend-rank-card"><div class="card-head"><div class="card-head-main">' +
      '<h2 class="card-title">涨跌红黑榜</h2></div><div class="card-tools"><span class="tiny dim">前 10 / 全量 ' + allRows.length + '</span></div></div>' +
      '<div class="trend-rank-grid">' +
        '<div class="trend-rank-col"><div class="trend-rank-head"><span class="pos">涨幅前 10</span><span class="tiny dim">按区间涨跌幅</span></div>' + list(up, 'up') + '</div>' +
        '<div class="trend-rank-col"><div class="trend-rank-head"><span class="neg">跌幅前 10</span><span class="tiny dim">按区间涨跌幅</span></div>' + list(down, 'down') + '</div>' +
      '</div>' + full + '</section>';
  }
  function trendHeatmap(ctx) {
    const items = ctx.rankedItems;
    if (!items.length) {
      return '<section class="card col-12 trend-heatmap-card"><div class="card-head"><div class="card-head-main"><h2 class="card-title">区间涨跌热力图</h2></div></div>' +
        '<div class="card-body">' + emptyState('未选择物品', '在物品筛选中全选或勾选物品。', '', 'filter') + '</div></section>';
    }
    const points = ctx.points;
    const seriesMap = {};
    let maxAbs = 1;
    items.forEach(function (item) {
      const series = ctx.seriesMap[item.key] || [];
      seriesMap[item.key] = series;
      const first = series.length ? series[0].price : 0;
      series.forEach(function (point) {
        if (first > 0) maxAbs = Math.max(maxAbs, Math.abs(point.price / first - 1) * 100);
      });
    });
    const head = '<thead><tr><th class="sticky">物品</th>' + points.map(function (point) {
      return '<th class="num">' + U.esc(trendAtText(point.at)) + '</th>';
    }).join('') + '</tr></thead>';
    const body = items.map(function (item) {
      const series = seriesMap[item.key] || [];
      const byAt = {};
      series.forEach(function (point) { byAt[point.at] = point; });
      const first = series.length ? series[0].price : 0;
      const cells = points.map(function (point) {
        const hit = byAt[point.at];
        if (!hit || !(first > 0)) return '<td class="num is-missing">—</td>';
        const change = (hit.price / first - 1) * 100;
        const alpha = change === 0 ? 0 : Math.min(0.55, 0.08 + Math.abs(change) / Math.min(60, maxAbs) * 0.47);
        const bg = change === 0 ? 'transparent' : change > 0
          ? 'rgba(69,212,131,' + alpha.toFixed(3) + ')' : 'rgba(244,63,94,' + alpha.toFixed(3) + ')';
        const tip = item.name + ' · ' + trendAtText(point.at) + ' · ' + U.fmt(hit.price, 2) + ' 金 · ' +
          (change >= 0 ? '+' : '') + U.fmt(change, 2) + '%';
        return '<td class="num" style="background:' + bg + '" data-tip="' + U.esc(tip) + '">' +
          (change >= 0 ? '+' : '−') + U.fmt(Math.abs(change), 1) + '%</td>';
      }).join('');
      return '<tr><th class="sticky"><span class="trend-heat-dot" style="background:' + U.esc(item.color) + '"></span>' +
        '<span class="trend-heat-name">' + U.esc(item.name) + '</span><span class="trend-heat-tier">' + U.esc(item.tierName) + '</span></th>' + cells + '</tr>';
    }).join('');
    return '<section class="card col-12 trend-heatmap-card"><div class="card-head"><div class="card-head-main">' +
      '<h2 class="card-title">区间涨跌热力图</h2></div><div class="card-tools"><div class="trend-heat-legend">' +
      '<span class="item"><span class="swatch" style="--sw:rgba(69,212,131,.8)"></span>涨</span>' +
      '<span class="item"><span class="swatch" style="--sw:rgba(244,63,94,.8)"></span>跌</span>' +
      '<span class="tiny dim">相对区间首点</span>' +
      '<button class="icon-btn" data-action="trend-download-chart" data-trend-label="区间涨跌热力图" title="下载图片" aria-label="下载热力图图片">' + icon('download') + '</button></div></div></div>' +
      '<div class="trend-heat-wrap" data-trend-scroll="heatmap"><table class="trend-heatmap">' + head + '<tbody>' + body + '</tbody></table></div></section>';
  }
  function trendDistributionCard(ctx) {
    const items = trendDistributionItems(ctx);
    if (!items.length) {
      return '<section class="card col-12 trend-chart-card"><div class="card-head"><div class="card-head-main"><h2 class="card-title">价格分布</h2></div></div>' +
        '<div class="card-body">' + emptyState('当前筛选没有价格数据', '换一个技艺、类型或时间范围。', '', 'filter') + '</div></section>';
    }
    const width = Math.max(1100, items.length * 64);
    return '<section class="card col-12 trend-chart-card"><div class="card-head"><div class="card-head-main">' +
      '<h2 class="card-title">价格分布</h2></div><div class="card-tools">' + trendAxisControls(ctx.distAxis, 'tdaxis') + '<span class="tiny dim">' + items.length + ' 个物品</span>' +
      '<button class="icon-btn" data-action="trend-download-chart" data-trend-label="价格分布" title="下载图片" aria-label="下载价格分布图片">' + icon('download') + '</button></div></div>' +
      '<div class="trend-chart-wrap" data-trend-scroll="distribution">' + Charts.priceDistribution(items, {
        palette: Charts.palette(ui.theme), width: width, height: 360, focusKey: ctx.focusKey,
        log: ctx.distAxis === 'price',
        axisLabel: ctx.distAxis === 'index' ? '价格指数（首点 = 100）' : '原始金币（对数）'
      }) + '</div>' +
      '<div class="card-foot"><div class="chart-legend">' +
        '<span class="item"><span class="trend-whisker"></span>最低 / 最高</span>' +
        '<span class="item"><span class="swatch" style="--sw:linear-gradient(90deg,#5B8FF9,#61DDAA,#F6BD16)"></span>25–75%</span>' +
        '<span class="item"><span class="line" style="border-color:var(--text)"></span>中位</span>' +
      '</div></section>';
  }
  function trendScatterCard(ctx) {
    const items = ctx.rankedItems.map(function (item) {
      return { key: item.key, name: item.name, color: item.color, tierColor: item.tierColor, focus: item.key === ctx.focusKey };
    });
    const rows = trendCategoryScatterRows(ctx);
    if (!items.length || !rows.length) {
      return '<section class="card col-12 trend-chart-card"><div class="card-head"><div class="card-head-main"><h2 class="card-title">价格散点</h2></div></div>' +
        '<div class="card-body">' + emptyState('当前筛选没有价格数据', '换一个技艺、类型或时间范围。', '', 'filter') + '</div></section>';
    }
    const width = Math.max(1100, items.length * 64);
    return '<section class="card col-12 trend-chart-card"><div class="card-head"><div class="card-head-main">' +
      '<h2 class="card-title">价格散点</h2></div><div class="card-tools">' + trendAxisControls(ctx.scatterAxis, 'tsaxis') + '<span class="tiny dim">' + rows.length + ' 个节点</span>' +
      '<button class="icon-btn" data-action="trend-download-chart" data-trend-label="价格散点" title="下载图片" aria-label="下载价格散点图片">' + icon('download') + '</button></div></div>' +
      '<div class="trend-chart-wrap" data-trend-scroll="scatter">' + Charts.categoryScatter(rows, {
        palette: Charts.palette(ui.theme), items: items, width: width, height: 320, focusKey: ctx.focusKey,
        log: ctx.scatterAxis === 'price',
        axisLabel: ctx.scatterAxis === 'index' ? '价格指数（首点 = 100）' : '原始金币（对数）'
      }) + '</div>' +
      '<div class="card-foot"><span class="spacer"></span><span>' + items.length + ' 个物品</span></div></section>';
  }
  function trendLineCard(ctx) {
    if (!ctx.focusItem || !ctx.focusSeries.length) {
      return '<section class="card col-12 trend-chart-card"><div class="card-head"><div class="card-head-main"><h2 class="card-title">物价变化</h2></div></div>' +
        '<div class="card-body">' + emptyState('没有可展示的单品走势', '在价格分布或散点图中点击物品。', '', 'chart') + '</div></section>';
    }
    const last = ctx.focusSeries[ctx.focusSeries.length - 1];
    const first = ctx.focusSeries[0].price;
    const change = first > 0 ? (last.price / first - 1) * 100 : null;
    return '<section class="card col-12 trend-chart-card"><div class="card-head"><div class="card-head-main">' +
      '<h2 class="card-title">物价变化 · ' + U.esc(ctx.focusItem.name) + '</h2></div><div class="card-tools">' +
      '<span class="tiny dim">最新 ' + U.fmt(last.price, 2) + ' 金' + (change == null ? '' : ' · ' + (change >= 0 ? '+' : '−') + U.fmt(Math.abs(change), 1) + '%') + '</span>' +
      '<button class="icon-btn" data-action="trend-download-chart" data-trend-label="物价变化" title="下载图片" aria-label="下载物价变化图片">' + icon('download') + '</button></div></div>' +
      '<div class="trend-chart-wrap" data-trend-scroll="line">' + Charts.priceLine(ctx.focusSeries, {
        palette: Charts.palette(ui.theme), width: 1100, height: 260, color: ctx.focusItem.color || ctx.focusItem.tierColor || '#64748B'
      }) + '</div>' +
      '<div class="card-foot"><span class="trend-ring-label"><span class="trend-ring"></span>' + U.esc(ctx.focusItem.name) + '</span></div></section>';
  }
  function trendRawDetails(ctx) {
    const items = ctx.rankedItems;
    if (!ctx.rawReady) {
      return '<details class="card col-12 trend-raw-details"><summary class="trend-raw-summary">' +
        '<span>节点原始数据</span><span class="badge badge-outline">按需加载</span><span class="chev">' + icon('chevronDown') + '</span></summary>' +
        '<div class="trend-raw-body"><div class="trend-raw-tools">' +
          '<button class="btn btn-sm" data-action="trend-export-series">' + icon('download') + '走势 CSV</button>' +
          '<button class="btn btn-sm" data-action="trend-export-raw">' + icon('download') + '原始 CSV</button>' +
          '<button class="btn btn-sm" data-action="trend-load-raw">' + icon('refresh') + '加载原始数据</button>' +
        '</div><div class="trend-raw-note">走势图只加载预计算后的变化序列；查看基准价、原始报价或导出原始 CSV 时，才会按需读取 <code>price-history/</code> 原始日文件。</div></div></details>';
    }
    const groups = [];
    (ctx.rawPoints || []).forEach(function (point) {
      const rows = [];
      items.forEach(function (item) {
        let quote = null;
        let base = null;
        if (item.kind === 'stone') {
          const q = point.stones && point.stones[item.level];
          const b = point.stoneCatalog && point.stoneCatalog[item.level];
          quote = q > 0 ? q : null;
          base = b > 0 ? b : null;
        } else {
          const q = point.quotes && point.quotes[item.id];
          const b = point.catalog && point.catalog[item.id];
          quote = q > 0 ? q : null;
          base = b > 0 ? b : null;
        }
        const price = quote != null ? quote : base;
        if (price == null) return;
        if (ctx.priceRange.min != null && price < ctx.priceRange.min) return;
        if (ctx.priceRange.max != null && price > ctx.priceRange.max) return;
        rows.push({
          item: item, quote: quote, base: base, price: price,
          source: quote != null ? '本服报价' : '基准价'
        });
      });
      if (rows.length) groups.push({ point: point, rows: rows });
    });
    let total = 0;
    groups.forEach(function (group) { total += group.rows.length; });
    const nodeHtml = groups.map(function (group, index) {
      const rows = group.rows.map(function (row) {
        return '<tr><td>' + U.esc(row.item.name) + '</td>' +
          '<td>' + U.esc(row.item.kind === 'stone' ? '五行石' : categoryName(row.item.category)) + '</td>' +
          '<td class="dim">' + U.esc(row.item.skillName) + '</td>' +
          '<td class="num">' + (row.quote == null ? '—' : U.fmt(row.quote, 2)) + '</td>' +
          '<td class="num">' + (row.base == null ? '—' : U.fmt(row.base, 2)) + '</td>' +
          '<td class="num"><b>' + U.fmt(row.price, 2) + '</b></td>' +
          '<td>' + (row.source === '本服报价' ? '<span class="badge badge-positive">本服报价</span>' : '<span class="badge badge-neutral">基准价</span>') + '</td></tr>';
      }).join('');
      return '<details class="trend-node-item"><summary>' +
        '<span class="trend-node-time">' + U.esc(trendAtText(group.point.at)) + '</span>' +
        '<span class="badge badge-outline">' + group.rows.length + ' 项</span>' +
        '<span class="chev">' + icon('chevronDown') + '</span></summary>' +
        '<div class="trend-node-body"><div class="table-wrap medium"><table class="data compact"><thead><tr>' +
          '<th>物品</th><th>分类</th><th>技艺</th><th class="num">本服报价</th><th class="num">基准价</th><th class="num">采用价</th><th>来源</th>' +
        '</tr></thead><tbody>' + rows + '</tbody></table></div></div></details>';
    }).join('');
    return '<details class="card col-12 trend-raw-details"><summary class="trend-raw-summary">' +
      '<span>节点原始数据</span><span class="badge badge-outline">' + groups.length + ' 个节点 · ' + total + ' 行</span><span class="chev">' + icon('chevronDown') + '</span></summary>' +
      '<div class="trend-raw-body"><div class="trend-raw-tools">' +
        '<button class="btn btn-sm" data-action="trend-export-series">' + icon('download') + '走势 CSV</button>' +
        '<button class="btn btn-sm" data-action="trend-export-raw">' + icon('download') + '原始 CSV</button>' +
      '</div>' + (nodeHtml || emptyState('当前筛选没有原始数据', '换一个技艺、类型或时间范围。', '', 'filter')) + '</div></details>';
  }
  /* ------------------------------------------------------------------ */
  /* 制作收益：可做判断                                           */
  /* ------------------------------------------------------------------ */
  function profitSkillList() {
    return (DATA.skills || []).filter(function (s) { return s.type === 'craft'; });
  }
  function profitSkillName(id) {
    const s = (DATA.skills || []).filter(function (x) { return x.id === id; })[0];
    return s ? s.name : '技艺';
  }
  function profitTabs(active, kind) {
    const price = active !== 'profit';
    const a = kind === 'server' ? 'data-server-item-tab' : 'data-trend-tab';
    return '<div class="profit-tabbar" role="tablist" aria-label="物价与制作收益">' +
      '<button class="' + (price ? 'on' : '') + '" role="tab" aria-selected="' + (price ? 'true' : 'false') + '" ' + a + '="price">物价</button>' +
      '<button class="' + (!price ? 'on' : '') + '" role="tab" aria-selected="' + (!price ? 'true' : 'false') + '" ' + a + '="profit">精力收益比</button>' +
      '</div>';
  }
  function profitStatus(ev) {
    if (!ev) return { cls: 'missing', label: '不可核价' };
    if (ev.ok) return { cls: 'ok', label: ev.purchase ? '当前可算' : '含自造 · 当前可算' };
    if (ev.missing === 'output') return { cls: 'missing', label: '无产出报价' };
    return { cls: 'missing', label: '不可核价' };
  }
  function profitSigned(v) {
    if (v == null || !Number.isFinite(v)) return '—';
    return (v >= 0 ? '+' : '−') + U.fmt(Math.abs(v), 2);
  }
  function profitStatusHtml(ev) {
    const st = profitStatus(ev);
    return '<span class="profit-status ' + st.cls + '">' + st.label + '</span>';
  }
  function profitSeasonBadge() {
    if (!window.JX3Profit) return '';
    return '<span class="profit-season">' + U.esc(window.JX3Profit.season.label) + ' · 当前赛季</span>';
  }
  function profitSkillTabs(skillId, selected) {
    return '<div class="profit-skill-tabs">' + profitSkillList().map(function (s) {
      return '<button class="' + (s.id === selected ? 'on' : '') + '" data-profit-skill="' + U.esc(s.id) + '">' + U.esc(s.name) + '</button>';
    }).join('') + '</div>';
  }
  function profitTop10Html(skillId, point, kind, focusItemId) {
    const P = window.JX3Profit;
    if (!P || !point) return '';
    const skill = skillId || (profitSkillList()[0] && profitSkillList()[0].id);
    const rows = P.skillTop(skill, point, currentTaxRate(), 10);
    let html = '<section class="card col-12 profit-top10-card"><div class="card-head"><div><h2 class="card-title">同技艺 Top10 · ' + U.esc(profitSkillName(skill)) + '</h2><p class="card-sub">只统计当前区服、当前节点可做的产物</p></div><div class="card-tools">' + profitSkillTabs(skill, skill) + '</div></div>';
    if (!rows.length) {
      html += '<div class="card-body">' + emptyState('当前技艺没有可做产物', '一线材料缺报价或无产出报价时不会进入榜单。', '', 'chart') + '</div></section>';
      return html;
    }
    html += '<div class="profit-table-wrap"><table class="data compact profit-table"><thead><tr><th class="num">#</th><th>产物</th><th>可做</th><th class="num">精力收益</th><th class="num">单次利润</th><th class="num">总精力</th><th>路径</th><th>关键瓶颈</th></tr></thead><tbody>';
    rows.forEach(function (ev, i) {
      const self = ev.chain.filter(function (r) { return !r.root && r.path === '含自造'; })[0];
      const bottleneck = self ? (P.item(self.itemId) || {}).name || '—' : '—';
      const ar = auditRecipe(Store.state.serverId, ev.recipe.id);
      html += '<tr data-profit-pick="' + U.esc('item:' + ev.item.id) + '" data-profit-kind="' + kind + '"><td class="num dim">' + (i + 1) + '</td><td>' + U.esc(ev.item.name) + '</td><td>' + gradeBadge(ar ? ar.g : '', { title: ar && ar.sc ? '条件可做：含自产' : '' }) + '</td><td class="num pos">' + U.fmt(ev.perEnergy, 2) + '</td><td class="num ' + (ev.profit >= 0 ? 'pos' : 'neg') + '">' + profitSigned(ev.profit) + '</td><td class="num">' + U.fmt(ev.energy, 0) + '</td><td>' + U.esc(ev.path) + '</td><td class="dim">' + U.esc(bottleneck) + '</td></tr>';
    });
    html += '</tbody></table></div><div class="profit-note">按当前节点可算精力收益排序；可做等级见「可做」列；同分按总精力升序。</div></section>';
    return html;
  }
  function trendProfitSection(ctx, p) {
    const P = window.JX3Profit;
    const item = ctx.focusItem;
    if (!P || !item) {
      return '<div class="grid section-gap"><section class="card col-12"><div class="card-body">' + emptyState('请选择一个产物', '制作收益只支持有当前赛季配方的产物。', '', 'filter') + '</div></section></div>';
    }
    if (item.kind === 'stone' || !P.recipeFor(item.id)) {
      return '<div class="grid section-gap"><section class="card col-12"><div class="card-body">' + emptyState('该物品不是可制作产物', '请选择当前赛季制造配方产出的产物。', '', 'filter') + '</div></section></div>';
    }
    const tax = currentTaxRate();
    const auditRecipeForItem = (function () { const r = P.recipeFor(item.id); return r ? auditRecipe(Store.state.serverId, r.id) : null; })();
    const hist = P.history(item.id, ctx.points, tax);
    const feasible = hist.filter(function (r) { return r.ev.ok; });
    const latest = hist.length ? hist[hist.length - 1] : null;
    const lastOk = feasible.length ? feasible[feasible.length - 1] : null;
    const series = feasible.map(function (r) { return { at: r.at, price: r.ev.perEnergy }; });
    const current = (latest && latest.ev) || (lastOk && lastOk.ev) || null;
    const status = profitStatus(current);
    let html = '<div class="grid section-gap">';
    html += '<section class="card col-12 profit-hero-card"><div class="card-head"><div><h2 class="card-title">制作收益 · ' + U.esc(item.name) + '</h2><p class="card-sub">购买优先、缺货自造；自造精力计入总精力；不使用基准价补齐</p></div><div class="card-tools">' + profitSeasonBadge() + (auditRecipeForItem ? gradeBadge(auditRecipeForItem.g, { title: '严格购买口径；自产另计' }) : '') + profitStatusHtml(current) + '</div></div><div class="card-body">';
    html += '<div class="profit-summary">' +
      '<div class="profit-main"><span class="big ' + (current && current.ok && current.perEnergy >= 0 ? 'pos' : 'neg') + '">' + (current && current.ok ? U.fmt(current.perEnergy, 2) : '—') + '</span><span class="unit">金 / 精力</span><span class="profit-status ' + status.cls + '">' + status.label + '</span></div>' +
      '<div class="profit-stats">' +
        '<div><span>单次利润</span><b class="' + (current && current.ok && current.profit >= 0 ? 'pos' : 'neg') + '">' + (current && current.ok ? profitSigned(current.profit) + ' 金' : '—') + '</b></div>' +
        '<div><span>总精力</span><b>' + (current && current.ok ? U.fmt(current.energy, 0) + ' 点' : '—') + '</b></div>' +
        '<div><span>材料成本</span><b>' + (current && current.ok ? U.fmt(current.cost, 2) + ' 金' : '—') + '</b></div>' +
        '<div><span>税后产出</span><b>' + (current && current.ok ? U.fmt(current.net, 2) + ' 金' : '—') + '</b></div>' +
      '</div></div>';
    if (current && current.ok) {
      html += '<div class="profit-feasibility"><span class="ok">' + U.esc(current.purchase ? '购买路径可算' : '含自造 · 额外精力') + '</span><span>材料报价 ' + (current.purchase ? '全部有报价' : '缺货材料已自造') + '</span><span>配方 ' + U.esc(current.recipe.name) + ' · ' + U.fmt(current.recipe.energy, 0) + ' 精力</span><span>税率 ' + U.fmtPct(tax, 1) + '</span></div>';
    } else {
      html += '<div class="profit-feasibility miss"><span class="miss">' + U.esc(current ? current.reason : '当前节点不可核价') + '</span><span>缺价材料不会被当作可购买，不用基准价补齐</span></div>';
    }
    html += '<div class="trend-chart-wrap profit-chart-wrap">' + (series.length ? Charts.profitLine(series, { palette: Charts.palette(ui.theme), width: 1100, height: 250, color: '#61DDAA', yLabel: '金 / 精力', ariaLabel: '精力收益走势' }) : '<div class="profit-empty">当前区间没有可做节点</div>') + '</div>';
    html += '<div class="profit-legend"><span><i style="background:#61DDAA"></i>可做节点 ' + feasible.length + ' / ' + hist.length + '</span><span>缺口 = 缺报价/不可核价</span></div>';
    html += '</section>';
    // chain
    if (current && current.ok) {
      html += '<section class="card col-12"><div class="card-head"><div><h2 class="card-title">材料链与获取路径</h2><p class="card-sub">购买优先；中间品缺价才自造，自造精力计入总精力</p></div></div><div class="profit-table-wrap"><table class="data compact profit-table"><thead><tr><th>层级</th><th>物品</th><th class="num">数量</th><th class="num">本服报价</th><th>采用路径</th><th class="num">额外精力</th></tr></thead><tbody>' + current.chain.map(function (row) {
        const it = P.item(row.itemId);
        return '<tr><td>' + (row.root ? '成品' : row.path === '含自造' ? '中间品' : '材料') + '</td><td>' + U.esc(it ? it.name : row.itemId) + '</td><td class="num">' + U.fmt(row.qty, 0) + '</td><td class="num">' + (row.quote == null ? '—' : U.fmt(row.quote, 2)) + '</td><td>' + U.esc(row.path) + '</td><td class="num">' + U.fmt(row.energy || 0, 0) + '</td></tr>';
      }).join('') + '</tbody></table></div></section>';
    }
    // top10 point
    const point = (latest && latest.point) || (lastOk && lastOk.point) || ctx.points[ctx.points.length - 1];
    const skill = ui.profitSkill || item.skillId || (profitSkillList()[0] || {}).id;
    html += profitTop10Html(skill, point, 'trend', item.id);
    html += '</div>';
    return html;
  }
  function serverItemProfitSection(ctx) {
    const P = window.JX3Profit;
    const item = ctx.item;
    if (!P || !item) return '';
    if (item.kind === 'stone' || !P.recipeFor(item.id)) {
      return '<div class="grid section-gap"><section class="card col-12"><div class="card-body">' + emptyState('该物品不是可制作产物', '请选择当前赛季制造配方产出的产物。', '', 'filter') + '</div></section></div>';
    }
    const tax = currentTaxRate();
    const auditRecipeForItem = (function () { const r = P.recipeFor(item.id); return r ? auditRecipe(Store.state.serverId, r.id) : null; })();
    const cross = P.crossServer(item.id, ctx.servers, ctx.columns, tax);
    const currentServer = ctx.servers.filter(function (s) { return s.id === Store.state.serverId; })[0] || ctx.servers[0] || null;
    const curPoint = currentServer && currentServer.points && currentServer.points.length ? currentServer.points[currentServer.points.length - 1] : null;
    const curEv = curPoint ? P.evaluate(item.id, curPoint, tax) : null;
    const st = profitStatus(curEv);
    const best = cross.feasible.slice().sort(function (a, b) { return b.ev.perEnergy - a.ev.perEnergy; })[0];
    let html = '<div class="grid section-gap">';
    html += '<section class="card col-12 profit-hero-card"><div class="card-head"><div><h2 class="card-title">制作收益 · ' + U.esc(item.name) + '</h2><p class="card-sub">同一物品、同一筛选；只统计可做区服，缺价区服不补基准价</p></div><div class="card-tools">' + profitSeasonBadge() + (auditRecipeForItem ? gradeBadge(auditRecipeForItem.g, { title: '严格购买口径；自产另计' }) : '') + '<span class="profit-status ' + (cross.feasibleCount ? 'ok' : 'missing') + '">' + cross.feasibleCount + ' / ' + cross.total + ' 服可做</span></div></div><div class="card-body">';
    html += '<div class="profit-summary"><div class="profit-main"><span class="big ' + (cross.median != null && cross.median >= 0 ? 'pos' : 'neg') + '">' + (cross.median != null ? U.fmt(cross.median, 2) : '—') + '</span><span class="unit">金 / 精力 · 跨服中位</span></div><div class="profit-stats">' +
      '<div><span>可做区服</span><b class="pos">' + cross.feasibleCount + '</b></div>' +
      '<div><span>不可核价</span><b class="neg">' + (cross.total - cross.feasibleCount) + '</b></div>' +
      '<div><span>P25–P75</span><b>' + (cross.p25 != null ? U.fmt(cross.p25, 2) + '–' + U.fmt(cross.p75, 2) : '—') + '</b></div>' +
      '<div><span>最佳区服</span><b>' + (best ? U.esc(best.server.name) + ' ' + U.fmt(best.ev.perEnergy, 2) : '—') + '</b></div></div></div>';
    html += '<div class="trend-chart-wrap profit-chart-wrap">' + (cross.nodes.some(function (n) { return n.median != null; }) ? Charts.profitLine(cross.nodes.filter(function (n) { return n.median != null; }).map(function (n) { return { at: n.at, price: n.median }; }), { palette: Charts.palette(ui.theme), width: 1100, height: 250, color: '#61DDAA', yLabel: '金 / 精力 · 中位', ariaLabel: '跨服可做精力收益' }) : '<div class="profit-empty">当前没有可做区服</div>') + '</div>';
    html += '<div class="profit-feasibility"><span class="ok">仅报价</span><span>成品和材料都必须有本服报价，或可自造到底层报价</span><span>税率 ' + U.fmtPct(tax, 1) + '</span><span>当前服：' + (currentServer ? U.esc(currentServer.name) : '—') + '</span></div></section>';
    if (curEv && curEv.ok) {
      html += '<section class="card col-12"><div class="card-head"><div><h2 class="card-title">当前服材料链 · ' + U.esc(currentServer ? currentServer.name : '') + '</h2><p class="card-sub">购买优先；中间品缺价才自造，自造精力计入总精力</p></div></div><div class="profit-table-wrap"><table class="data compact profit-table"><thead><tr><th>层级</th><th>物品</th><th class="num">数量</th><th class="num">本服报价</th><th>采用路径</th><th class="num">额外精力</th></tr></thead><tbody>' + curEv.chain.map(function (row) {
        const it = P.item(row.itemId);
        return '<tr><td>' + (row.root ? '成品' : row.path === '含自造' ? '中间品' : '材料') + '</td><td>' + U.esc(it ? it.name : row.itemId) + '</td><td class="num">' + U.fmt(row.qty, 0) + '</td><td class="num">' + (row.quote == null ? '—' : U.fmt(row.quote, 2)) + '</td><td>' + U.esc(row.path) + '</td><td class="num">' + U.fmt(row.energy || 0, 0) + '</td></tr>';
      }).join('') + '</tbody></table></div></section>';
    } else if (curEv) {
      html += '<section class="card col-12"><div class="card-body">' + notice('当前服不可核价：' + U.esc(curEv.reason || '缺报价') + '。不生成可做收益，也不使用基准价补齐。', 'info') + '</div></section>';
    }
    // feasible server table
    if (!cross.feasible.length) {
      html += '<section class="card col-12"><div class="card-body">' + emptyState('当前没有可做区服', '成品无报价，或一线材料缺报价；这些区服不会生成收益。', '', 'filter') + '</div></section>';
    } else {
      const sorted = cross.feasible.slice().sort(function (a, b) { return b.ev.perEnergy - a.ev.perEnergy; });
      html += '<section class="card col-12"><div class="card-head"><div><h2 class="card-title">可做区服 · 当前节点</h2><p class="card-sub">按精力收益排序 · 缺价区服不进入此表</p></div><div class="card-tools"><span class="tag">' + cross.feasibleCount + ' 服</span></div></div><div class="profit-table-wrap"><table class="data compact profit-table"><thead><tr><th>区服</th><th class="num">精力收益</th><th class="num">单次利润</th><th class="num">总精力</th><th>路径</th><th>状态</th></tr></thead><tbody>' + sorted.map(function (r) {
        return '<tr><td>' + U.esc(r.server.name) + '</td><td class="num pos">' + U.fmt(r.ev.perEnergy, 2) + '</td><td class="num ' + (r.ev.profit >= 0 ? 'pos' : 'neg') + '">' + profitSigned(r.ev.profit) + '</td><td class="num">' + U.fmt(r.ev.energy, 0) + '</td><td>' + U.esc(r.ev.path) + '</td><td><span class="profit-status ok">当前可算</span></td></tr>';
      }).join('') + '</tbody></table></div><div class="profit-note">其余 ' + (cross.total - cross.feasibleCount) + ' 服因成品/一线材料无报价，未生成可做收益。</div></section>';
    }
    const topPoint = curPoint || (ctx.servers[0] && ctx.servers[0].points && ctx.servers[0].points[ctx.servers[0].points.length - 1]);
    html += profitTop10Html(ui.profitSkill || item.skillId, topPoint, 'server', item.id);
    html += '</div>';
    return html;
  }

  function historyLoadingCard(view, title) {
    const total = Number(view && (view.daysTotal || view.total)) || 0;
    const loaded = Number(view && (view.daysLoaded || view.loaded)) || 0;
    const pct = total ? Math.max(4, Math.min(100, Math.round(loaded / total * 100))) : 6;
    const bytesTotal = Number(view && view.bytesTotal) || 0;
    const bytesLoaded = Number(view && view.bytesLoaded) || 0;
    const kb = function (n) {
      if (!n) return '0 KB';
      return n >= 1024 * 1024 ? (n / 1024 / 1024).toFixed(1) + ' MB' : Math.max(1, Math.round(n / 1024)) + ' KB';
    };
    const indexReady = !!(view && view.index);
    const stepText = !indexReady ? '正在读取历史索引…' : (total ? '历史文件 ' + loaded + ' / ' + total + ' 天' : '正在读取历史索引…');
    return '<div class="grid section-gap"><section class="card col-12 history-loading-card">' +
      '<div class="history-loading-main"><span class="history-spinner" aria-hidden="true"></span><div>' +
      '<h2 class="card-title">正在加载' + U.esc(title || '物价历史') + '</h2>' +
      '<p class="card-sub">' + U.esc(stepText) + '，首次约 ' + (bytesTotal ? kb(bytesTotal) : '数百 KB') + '；之后走浏览器缓存，不需要重复下载。</p>' +
      '</div></div>' +
      '<div class="history-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '"><i style="width:' + pct + '%"></i></div>' +
      '<div class="history-loading-meta"><span>索引 ' + (indexReady ? '✓' : '…') + '</span><span>历史 ' + (total ? loaded + '/' + total + ' 天' : '…') + '</span><span>已读 ' + (bytesLoaded ? kb(bytesLoaded) : '0 KB') + '</span><span>' + pct + '%</span></div>' +
      '</section></div>';
  }

  function renderTrends(p) {
    const ctx = trendContext(p);
    const view = ctx.view;
    if (!view || view.status === 'loading') {
      return '<div class="page trend-page">' + trendHead() + historyLoadingCard(view, '物价走势') + dataFoot() + '</div>';
    }
    if (view.status === 'error') {
      return '<div class="page trend-page">' + trendHead() +
        '<div class="grid section-gap"><section class="card col-12"><div class="card-body">' +
        notice('无法加载物价历史：' + U.esc(view.error || '未知错误') + '。历史文件只在联网时读取；离线或本地 file:// 打开时不可用。<br>' +
          '<button class="btn btn-sm" data-action="trend-retry">' + icon('refresh') + '重试</button>' +
          '<button class="btn btn-sm" data-action="trend-refresh">清空缓存后重试</button>', 'info') +
        '</div></section></div>' + dataFoot() + '</div>';
    }
    if (!ctx.points.length) {
      return '<div class="page trend-page">' + trendHead() + trendFilter(ctx, p) +
        '<div class="grid section-gap"><section class="card col-12"><div class="card-body">' +
        emptyState('当前时间范围没有历史节点', '扩大日期/小时范围，或等待下一次价格变化。', '', 'clock') +
        '</div></section></div>' + dataFoot() + '</div>';
    }
    let html = '<div class="page trend-page">' + trendHead();
    if (!DATA.servers.some(function (item) { return item.id === Store.state.serverId; })) {
      html += notice('当前是自定义服务器。物价历史只覆盖 JX3BOX 的内置 17 个区服，下面按当日基准价展示；切换到内置区服可看本服拍卖报价。', 'info');
    }
    html += trendFilter(ctx, p);
    html += '<div class="profit-page-tabs" role="tablist" aria-label="物价与制作收益">' +
      '<button role="tab" aria-selected="' + (ui.trendTab !== 'profit' ? 'true' : 'false') + '" class="' + (ui.trendTab !== 'profit' ? 'on' : '') + '" data-trend-tab="price">物价</button>' +
      '<button role="tab" aria-selected="' + (ui.trendTab === 'profit' ? 'true' : 'false') + '" class="' + (ui.trendTab === 'profit' ? 'on' : '') + '" data-trend-tab="profit">精力收益比</button></div>';
    if (ui.trendTab === 'profit') {
      html += trendProfitSection(ctx, p);
    } else {
      html += '<div class="grid section-gap">' + trendHeatmap(ctx) + '</div>';
      html += '<div class="grid section-gap">' + trendRankCard(ctx) + '</div>';
      html += '<div class="grid section-gap">' + trendDistributionCard(ctx) + '</div>';
      html += '<div class="grid section-gap">' + trendScatterCard(ctx) + '</div>';
      html += '<div class="grid section-gap">' + trendLineCard(ctx) + '</div>';
      html += '<div class="grid section-gap">' + trendRawDetails(ctx) + '</div>';
    }
    html += dataFoot();
    html += '</div>';
    return html;
  }
  function trendFileName(label) {
    return String(label || '图表').replace(/[\\/:*?"<>|]/g, '_') + '_' + server().name + '_' +
      (new Date()).toISOString().slice(0, 10) + '.png';
  }
  function saveCanvas(canvas, filename) {
    canvas.toBlob(function (blob) {
      if (!blob) { toast('图片导出失败', 'error'); return; }
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = filename;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 3000);
      toast('已导出图片');
    }, 'image/png');
  }
  function downloadTrendChart(card, label) {
    if (!card) return;
    const svg = card.querySelector('svg.chart-svg');
    if (svg) {
      const vb = svg.viewBox && svg.viewBox.baseVal;
      const width = Math.max(1, Math.round((vb && vb.width) || svg.clientWidth || 1200));
      const height = Math.max(1, Math.round((vb && vb.height) || svg.clientHeight || 360));
      const clone = svg.cloneNode(true);
      clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      clone.setAttribute('width', width);
      clone.setAttribute('height', height);
      clone.style.width = width + 'px';
      clone.style.height = height + 'px';
      clone.style.fontFamily = getComputedStyle(svg).fontFamily || 'system-ui, sans-serif';
      const source = new XMLSerializer().serializeToString(clone);
      const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const img = new Image();
      img.onload = function () {
        const scale = 2;
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(width * scale);
        canvas.height = Math.round(height * scale);
        const c = canvas.getContext('2d');
        c.setTransform(scale, 0, 0, scale, 0, 0);
        c.fillStyle = Charts.palette(ui.theme).bg;
        c.fillRect(0, 0, width, height);
        c.drawImage(img, 0, 0, width, height);
        URL.revokeObjectURL(url);
        saveCanvas(canvas, trendFileName(label));
      };
      img.onerror = function () {
        URL.revokeObjectURL(url);
        toast('图片导出失败', 'error');
      };
      img.src = url;
      return;
    }
    const table = card.querySelector('.trend-heatmap');
    if (!table) { toast('当前图表暂不支持图片导出', 'warn'); return; }
    const P = Charts.palette(ui.theme);
    const rows = Array.prototype.slice.call(table.rows);
    const firstW = 210, colW = 138, rowH = 30, top = 42, left = 0;
    const width = firstW + Math.max(1, (rows[0] ? rows[0].cells.length : 1) - 1) * colW + 12;
    const height = rows.length * rowH + top + 10;
    const scale = 2;
    const canvas = document.createElement('canvas');
    canvas.width = width * scale; canvas.height = height * scale;
    const c = canvas.getContext('2d');
    c.setTransform(scale, 0, 0, scale, 0, 0);
    c.fillStyle = P.bg; c.fillRect(0, 0, width, height);
    c.font = '12px system-ui, -apple-system, sans-serif';
    c.textBaseline = 'middle';
    c.fillStyle = P.text;
    c.font = '600 16px system-ui, -apple-system, sans-serif';
    c.fillText(String(label || '区间涨跌热力图'), 8, 20);
    rows.forEach(function (row, r) {
      let x = left;
      Array.prototype.forEach.call(row.cells, function (cell, ci) {
        const w = ci === 0 ? firstW : colW;
        const y = top + r * rowH;
        const bg = cell.style.backgroundColor;
        if (bg && bg !== 'transparent') { c.fillStyle = bg; c.fillRect(x, y, w, rowH); }
        c.strokeStyle = P.grid; c.lineWidth = 1;
        c.beginPath(); c.moveTo(x, y + rowH); c.lineTo(x + w, y + rowH); c.stroke();
        c.fillStyle = r === 0 ? P.muted : P.text;
        if (r === 0) c.font = '11px system-ui, -apple-system, sans-serif';
        else c.font = '12px system-ui, -apple-system, sans-serif';
        let text = String(cell.innerText || '').replace(/\s+/g, ' ').trim();
        if (r === 0 && ci > 0) text = text.replace(/^\d{4}-/, '');
        if (text.length > (ci === 0 ? 14 : 12)) text = text.slice(0, ci === 0 ? 14 : 12) + '…';
        c.fillText(text, x + 8, y + rowH / 2 + 1);
        x += w;
      });
    });
    saveCanvas(canvas, trendFileName(label));
  }
  function trendExportContext() {
    const ctx = trendContext(params());
    if (!ctx || !ctx.view || ctx.view.status !== 'ready') {
      toast('物价历史尚未加载完成', 'warn');
      return null;
    }
    if (!ctx.selectedItems.length) {
      toast('当前没有选择物品', 'warn');
      return null;
    }
    return ctx;
  }
  function csvTrendRaw() {
    const ctx = trendExportContext();
    if (!ctx) return;
    if (!ctx.rawReady) {
      const T = window.JX3Trends;
      if (!T || !T.loadRaw) { toast('走势模块未加载', 'error'); return; }
      toast('正在读取原始数据…', 'info');
      T.loadRaw(Store.state.serverId, { from: params().tfrom, to: params().tto }).then(function (raw) {
        if (!raw || raw.status !== 'ready') { toast('原始数据尚未加载完成', 'warn'); return; }
        csvTrendRaw();
      }).catch(function () { toast('原始数据加载失败', 'error'); });
      return;
    }
    const rows = [['时间', '区服', '物品ID', '物品名称', '类别', '技艺', '本服报价', '基准价', '采用价', '来源']];
    (ctx.rawPoints || []).forEach(function (point) {
      ctx.rankedItems.forEach(function (item) {
        let quote = null;
        let base = null;
        if (item.kind === 'stone') {
          const q = point.stones && point.stones[item.level];
          const b = point.stoneCatalog && point.stoneCatalog[item.level];
          quote = q > 0 ? q : null;
          base = b > 0 ? b : null;
        } else {
          const q = point.quotes && point.quotes[item.id];
          const b = point.catalog && point.catalog[item.id];
          quote = q > 0 ? q : null;
          base = b > 0 ? b : null;
        }
        const price = quote != null ? quote : base;
        if (price == null) return;
        if (ctx.priceRange.min != null && price < ctx.priceRange.min) return;
        if (ctx.priceRange.max != null && price > ctx.priceRange.max) return;
        rows.push([
          trendAtText(point.at), server().name, item.id, item.name,
          item.kind === 'stone' ? '五行石' : categoryName(item.category),
          item.skillName, quote == null ? '' : quote, base == null ? '' : base, price,
          quote != null ? '本服报价' : '基准价'
        ]);
      });
    });
    U.download('剑网三物价原始_' + ctx.view.from.slice(0, 10) + '_' + server().name + '.csv', U.csv(rows), 'text/csv;charset=utf-8');
    toast('已导出原始数据 ' + U.fmtInt(rows.length - 1) + ' 行');
  }
  function csvTrendSeries() {
    const ctx = trendExportContext();
    if (!ctx) return;
    const rows = [['时间', '区服', '物品ID', '物品名称', '类别', '技艺', '价格', '来源']];
    ctx.rankedItems.forEach(function (item) {
      (ctx.seriesMap[item.key] || []).forEach(function (point) {
        rows.push([
          trendAtText(point.at), server().name, item.id, item.name,
          item.kind === 'stone' ? '五行石' : categoryName(item.category),
          item.skillName, point.price, point.source
        ]);
      });
    });
    U.download('剑网三物价走势_' + ctx.view.from.slice(0, 10) + '_' + ctx.view.to.slice(0, 10) + '_' + server().name + '.csv', U.csv(rows), 'text/csv;charset=utf-8');
    toast('已导出走势数据 ' + U.fmtInt(rows.length - 1) + ' 行');
  }

  /* ------------------------------------------------------------------ */
  /* 区服趋势                                                           */
  /* ------------------------------------------------------------------ */
  const SERVER_KEYWORD_TOKENS = ['丹', '丸', '散', '膏', '玉', '石', '布', '皮', '木', '矿', '香', '药', '鱼', '肉', '骨', '酒', '茶', '锦', '缎', '铁', '铜', '银', '草', '花', '叶', '果', '露', '令', '牌'];
  function serverLatestDate() {
    const text = String((DATA.meta && DATA.meta.priceUpdatedAt) || '');
    const date = text.slice(0, 10);
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) return date;
    const now = new Date(Date.now() + 8 * 3600000);
    return now.toISOString().slice(0, 10);
  }
  function serverRange(p) {
    // 走势历史只保留最近 7 个自然日，30 日选项已移除；旧链接里的 30d 也会
    // 被夹到 7 日，避免请求不存在的数据。
    const days = p.srange === '30d' ? 7 : Math.min(7, ({ today: 1, '3d': 3, '7d': 7 })[p.srange] || 1);
    const latest = serverLatestDate();
    const base = Date.parse(latest + 'T12:00:00+08:00');
    const start = new Date(base - (days - 1) * 86400000 + 8 * 3600000).toISOString().slice(0, 10);
    return {
      from: start + 'T00:00', to: latest + 'T23:00', days: days,
      label: days === 1 ? '今日' : '近 ' + days + ' 日'
    };
  }
  function serverCatalog() {
    const T = window.JX3Trends;
    return T ? T.items('all', '') : [];
  }
  function serverQuote(point, item) {
    if (!point || !item) return null;
    if (item.kind === 'stone') {
      const value = point.stones && point.stones[item.level];
      return value > 0 ? value : null;
    }
    const value = point.quotes && point.quotes[item.id];
    return value > 0 ? value : null;
  }
  function serverMedian(values) {
    const list = (values || []).filter(function (v) { return Number.isFinite(v); }).sort(function (a, b) { return a - b; });
    if (!list.length) return null;
    const mid = Math.floor((list.length - 1) / 2);
    return list.length % 2 ? list[mid] : (list[mid] + list[mid + 1]) / 2;
  }
  function serverPct(value) {
    if (value == null || !Number.isFinite(value)) return '—';
    return (value >= 0 ? '+' : '−') + U.fmt(Math.abs(value * 100), 1) + '%';
  }
  function serverBreadth(value) {
    if (value == null || !Number.isFinite(value)) return '—';
    return (value >= 0 ? '+' : '−') + U.fmt(Math.abs(value * 100), 0) + '%';
  }
  function serverItemKind(item) {
    if (!item) return '—';
    if (item.kind === 'stone') return '五行石';
    if (!item.skillId) return categoryName(item.category);
    return item.kind === 'product' ? '产物' : '材料';
  }
  function serverItemParam(selected, all) {
    const selectedSet = new Set((selected || []).map(function (item) { return item.key; }));
    if (selectedSet.size === all.length) return '';
    if (!selectedSet.size) return '__none__';
    if (selectedSet.size > all.length / 2) {
      return 'except:' + all.filter(function (item) { return !selectedSet.has(item.key); }).map(function (item) { return item.key; }).join(',');
    }
    return 'only:' + all.filter(function (item) { return selectedSet.has(item.key); }).map(function (item) { return item.key; }).join(',');
  }
  function serverItemSelection(p) {
    const all = serverCatalog();
    let selected = all.slice();
    if (p.sitems === '__none__') {
      selected = [];
    } else if (p.sitems) {
      const raw = String(p.sitems);
      if (raw.indexOf('only:') === 0) {
        const keys = new Set(raw.slice(5).split(','));
        selected = all.filter(function (item) { return keys.has(item.key); });
      } else if (raw.indexOf('except:') === 0) {
        const keys = new Set(raw.slice(7).split(','));
        selected = all.filter(function (item) { return !keys.has(item.key); });
      } else {
        const keys = new Set(raw.split(','));
        selected = all.filter(function (item) { return keys.has(item.key); });
      }
    }
    const keyword = String(p.skeyword || '').trim();
    if (keyword) selected = selected.filter(function (item) { return String(item.name).indexOf(keyword) !== -1; });
    return { all: all, selected: selected, keyword: keyword };
  }
  function serverSelectedServers(p) {
    const all = (DATA.servers || []).slice();
    if (p.sservers === '__none__') return [];
    if (!p.sservers) return all;
    const keys = new Set(String(p.sservers).split(','));
    return all.filter(function (s) { return keys.has(s.id); });
  }
  function serverSkillGroups() {
    const craft = [];
    const gather = [];
    (DATA.skills || []).forEach(function (s) {
      const group = { id: s.id, name: s.name, type: s.type };
      if (s.type === 'gather') gather.push(group); else craft.push(group);
    });
    return craft.concat(gather, [{ id: 'stone', name: '五行石', type: 'stone' }, { id: 'market', name: '行情物品', type: 'market' }]);
  }
  function serverGroupItems(group, items) {
    return (items || []).filter(function (item) {
      if (group.id === 'stone') return item.kind === 'stone' && ['6', '7', '8'].indexOf(String(item.level)) !== -1;
      if (group.id === 'market') return item.kind !== 'stone' && !item.skillId;
      if (group.type === 'gather') return item.kind === 'material' && item.skillId === group.id;
      return item.kind === 'product' && item.skillId === group.id;
    });
  }
  function serverKeywordChips(ctx, p) {
    const chips = [];
    const global = ctx.globalReturns;
    const score = function (kind) {
      const rows = global.filter(function (row) { return row.item.kind === kind; });
      if (!rows.length) return null;
      const up = rows.filter(function (row) { return row.ret > 0.005; }).length;
      const down = rows.filter(function (row) { return row.ret < -0.005; }).length;
      return (up - down) / rows.length;
    };
    const material = score('material');
    const product = score('product');
    const stone = score('stone');
    if (material != null && product != null && material - product > 0.02) {
      chips.push({ type: 'trend', label: material > 0 ? '材料偏强' : '材料相对抗跌', value: serverBreadth(material), tone: material > 0 ? 'pos' : 'neutral' });
    } else if (material != null && product != null && product - material > 0.02) {
      chips.push({ type: 'trend', label: product > 0 ? '产物偏强' : '产物相对抗跌', value: serverBreadth(product), tone: product > 0 ? 'pos' : 'neutral' });
    }
    if (stone != null && stone < -0.02) {
      chips.push({ type: 'trend', label: '五行石承压', value: serverBreadth(stone), tone: 'neg' });
    } else if (stone != null && stone > 0.02) {
      chips.push({ type: 'trend', label: '五行石走强', value: serverBreadth(stone), tone: 'pos' });
    }
    const strong = ctx.rank.filter(function (s) { return !s.low && s.score != null; })[0];
    const weak = ctx.rank.filter(function (s) { return !s.low && s.score != null; }).slice(-1)[0];
    if (strong) chips.push({ type: 'trend', label: strong.name + (strong.score >= 0 ? '领涨' : '相对最强'), tone: strong.score >= 0 ? 'pos' : 'neutral', dot: strong.color });
    if (strong && weak && strong.score - weak.score > 0.15) chips.push({ type: 'trend', label: '区服分化', tone: 'neutral' });
    if (ctx.lowCount) chips.push({ type: 'trend', label: '低覆盖 ' + ctx.lowCount + ' 服', tone: 'warn' });
    // 物品名称关键词：从主要涨跌物品中提炼
    const seen = {};
    const movers = [];
    ctx.servers.forEach(function (server) {
      server.topUp.concat(server.topDown).forEach(function (row) {
        if (!row || !row.item || row.item.kind === 'stone' || seen[row.item.key]) return;
        seen[row.item.key] = true;
        movers.push(row);
      });
    });
    movers.sort(function (a, b) { return Math.abs(b.ret) - Math.abs(a.ret); });
    const tokens = {};
    movers.slice(0, 36).forEach(function (row) {
      SERVER_KEYWORD_TOKENS.forEach(function (token) {
        if (String(row.item.name).indexOf(token) === -1) return;
        if (!tokens[token]) tokens[token] = { token: token, count: 0, max: 0 };
        tokens[token].count++;
        tokens[token].max = Math.max(tokens[token].max, Math.abs(row.ret));
      });
    });
    Object.keys(tokens).sort(function (a, b) {
      return tokens[b].count - tokens[a].count || tokens[b].max - tokens[a].max;
    }).slice(0, 3).forEach(function (token) {
      chips.push({ type: 'item', token: token, label: token + '类活跃', value: tokens[token].count + ' 项', tone: 'neutral' });
    });
    if (movers.length) {
      const top = movers[0];
      chips.push({ type: 'item', token: top.item.name, label: top.item.name, value: serverPct(top.ret), tone: top.ret >= 0 ? 'pos' : 'neg' });
    }
    if (p.skeyword) {
      chips.unshift({ type: 'active', token: p.skeyword, label: '关键词：' + p.skeyword, tone: 'active' });
    }
    return chips.slice(0, 8);
  }
  function serverBuild(p) {
    const T = window.JX3Trends;
    if (!T) return { status: 'error', error: '走势模块未加载' };
    const range = serverRange(p);
    const selection = serverItemSelection(p);
    const servers = serverSelectedServers(p);
    if (!servers.length || !selection.selected.length) {
      return { status: 'ready', range: range, selection: selection, servers: [], columns: [], rank: [], globalReturns: [], lowCount: 0, serverCount: servers.length };
    }
    const views = servers.map(function (s) { return T.view(s.id, { from: range.from, to: range.to, mode: 'server' }); });
    const loading = views.filter(function (v) { return v.status === 'loading'; });
    if (loading.length) {
      const first = loading[0] || {};
      return {
        status: 'loading', range: range, total: loading.length, loaded: views.length - loading.length,
        daysLoaded: first.daysLoaded || 0, daysTotal: first.daysTotal || 0,
        bytesLoaded: first.bytesLoaded || 0, bytesTotal: first.bytesTotal || 0,
        index: first.index || null
      };
    }
    const failed = views.filter(function (v) { return v.status === 'error'; })[0];
    if (failed) return { status: 'error', error: failed.error || '物价历史加载失败', range: range };
    const trendPartial = views.some(function (v) { return v.partial || v.stale; });
    const columns = ((views.filter(function (v) { return v.points && v.points.length; })[0] || { points: [] }).points || []).map(function (point) { return point.at; });
    const items = selection.selected;
    const itemDenom = items.length;
    const groups = serverSkillGroups();
    const dataServers = [];
    const allReturns = [];
    views.forEach(function (view, index) {
      const server = servers[index];
      const points = view.points || [];
      if (!points.length) return;
      const start = points[0];
      const end = points[points.length - 1];
      const returns = [];
      const byKey = {};
      items.forEach(function (item) {
        const p0 = serverQuote(start, item);
        const p1 = serverQuote(end, item);
        if (!(p0 > 0 && p1 > 0)) return;
        const row = { item: item, p0: p0, p1: p1, ret: p1 / p0 - 1 };
        returns.push(row);
        byKey[item.key] = row;
        allReturns.push(row);
      });
      const median = serverMedian(returns.map(function (r) { return r.ret; }));
      const up = returns.filter(function (r) { return r.ret > 0.005; }).length;
      const down = returns.filter(function (r) { return r.ret < -0.005; }).length;
      const flat = returns.length - up - down;
      const comparable = returns.length;
      const coverage = itemDenom ? comparable / itemDenom : 0;
      // 全物品口径下大量物品持平，中位数常为 0；用净涨跌广度作为区服主排序指标。
      const score = comparable ? (up - down) / comparable : null;
      const low = itemDenom >= 30 && (comparable < 30 || coverage < 0.3);
      const heat = points.map(function (point) {
        let hUp = 0, hDown = 0, hCount = 0;
        items.forEach(function (item) {
          const p0 = serverQuote(start, item);
          const p1 = serverQuote(point, item);
          if (!(p0 > 0 && p1 > 0)) return;
          const ret = p1 / p0 - 1;
          hCount++;
          if (ret > 0.005) hUp++; else if (ret < -0.005) hDown++;
        });
        return hCount ? (hUp - hDown) / hCount : null;
      });
      const skillStats = {};
      const globalIndex = (DATA.servers || []).findIndex(function (s) { return s.id === server.id; });
      groups.forEach(function (group) {
        const groupItems = serverGroupItems(group, items);
        const vals = [];
        groupItems.forEach(function (item) {
          if (byKey[item.key]) vals.push(byKey[item.key].ret);
        });
        const sUp = vals.filter(function (v) { return v > 0.005; }).length;
        const sDown = vals.filter(function (v) { return v < -0.005; }).length;
        skillStats[group.id] = {
          median: serverMedian(vals), count: vals.length, up: sUp, down: sDown,
          score: vals.length ? (sUp - sDown) / vals.length : null
        };
      });
      const topUp = returns.slice().filter(function (r) { return r.ret > 0.005; }).sort(function (a, b) { return b.ret - a.ret; }).slice(0, 5);
      const topDown = returns.slice().filter(function (r) { return r.ret < -0.005; }).sort(function (a, b) { return a.ret - b.ret; }).slice(0, 5);
      dataServers.push({
        id: server.id, name: server.name, region: server.region || '',
        color: trendItemColor(globalIndex < 0 ? index : globalIndex), points: points, returns: returns, byKey: byKey,
        median: median, score: score, up: up, down: down, flat: flat, comparable: comparable, coverage: coverage, low: low,
        heat: heat, skillStats: skillStats, topUp: topUp, topDown: topDown
      });
    });
    dataServers.sort(function (a, b) {
      if (a.score == null) return 1;
      if (b.score == null) return -1;
      return b.score - a.score;
    });
    const nonLow = dataServers.filter(function (s) { return !s.low; });
    const lowCount = dataServers.length - nonLow.length;
    let selectedServer = p.sserver ? dataServers.filter(function (s) { return s.id === p.sserver; })[0] : null;
    if (!selectedServer) selectedServer = nonLow[0] || dataServers[0] || null;
    const selectedSkill = groups.filter(function (g) { return g.id === p.sskill; })[0] || null;
    const detailReturns = selectedServer
      ? (selectedSkill ? serverGroupItems(selectedSkill, items).filter(function (item) { return selectedServer.byKey[item.key]; }).map(function (item) { return selectedServer.byKey[item.key]; }) : selectedServer.returns)
      : [];
    const globalUp = allReturns.filter(function (r) { return r.ret > 0.005; }).length;
    const globalDown = allReturns.filter(function (r) { return r.ret < -0.005; }).length;
    const ctx = {
      status: 'ready', range: range, selection: selection, servers: dataServers,
      columns: columns, rank: dataServers, globalReturns: allReturns,
      globalUp: globalUp, globalDown: globalDown, lowCount: lowCount,
      selectedServer: selectedServer, selectedSkill: selectedSkill,
      detailReturns: detailReturns, skillGroups: groups,
      serverCount: servers.length, partial: trendPartial
    };
    ctx.keywords = serverKeywordChips(ctx, p);
    return ctx;
  }

  function serverItemBuild(p) {
    const base = serverBuild(Object.assign({}, p, { sitems: '', skeyword: '' }));
    if (!base || base.status !== 'ready') return base;
    const allItems = base.selection.all;
    const selectedServers = serverSelectedServers(p);
    const serverById = Object.create(null);
    base.servers.forEach(function (s) { serverById[s.id] = s; });
    function statsFor(item, includeRows) {
      const rows = [];
      let up = 0, down = 0, flat = 0, missing = 0;
      const returns = [];
      selectedServers.forEach(function (server) {
        const data = serverById[server.id];
        const hit = data && data.byKey[item.key];
        if (!hit) {
          missing++;
          if (includeRows) rows.push({ server: server, data: data, row: null, status: 'missing' });
          return;
        }
        const status = hit.ret > 0.005 ? 'up' : hit.ret < -0.005 ? 'down' : 'flat';
        if (status === 'up') up++; else if (status === 'down') down++; else flat++;
        returns.push(hit.ret);
        if (includeRows) rows.push({ server: server, data: data, row: hit, status: status });
      });
      const comparable = returns.length;
      const sorted = returns.slice().sort(function (a, b) { return a - b; });
      const median = serverMedian(returns);
      const upReturns = rows.filter(function (r) { return r.status === 'up'; }).map(function (r) { return r.row.ret; });
      const downReturns = rows.filter(function (r) { return r.status === 'down'; }).map(function (r) { return r.row.ret; });
      let max = null, min = null;
      if (includeRows) {
        rows.forEach(function (r) {
          if (!r.row) return;
          if (!max || r.row.ret > max.row.ret) max = r;
          if (!min || r.row.ret < min.row.ret) min = r;
        });
      }
      return {
        item: item, rows: includeRows ? rows : null, comparable: comparable,
        up: up, down: down, flat: flat, missing: missing,
        median: median,
        upAvg: upReturns.length ? upReturns.reduce(function (a, b) { return a + b; }, 0) / upReturns.length : null,
        downAvg: downReturns.length ? downReturns.reduce(function (a, b) { return a + b; }, 0) / downReturns.length : null,
        min: min, max: max,
        coverage: selectedServers.length ? comparable / selectedServers.length : 0,
        low: comparable < 3 || (selectedServers.length && comparable / selectedServers.length < 0.3),
        net: comparable ? (up - down) / comparable : null
      };
    }
    const ranking = allItems.map(function (item) { return statsFor(item, false); })
      .filter(function (row) { return row.comparable > 0; })
      .sort(function (a, b) {
        if (b.up !== a.up) return b.up - a.up;
        if (b.net !== a.net) return b.net - a.net;
        return b.coverage - a.coverage;
      });
    let item = allItems.filter(function (x) { return x.key === p.sitem; })[0] || null;
    if (!item) {
      const preferred = serverItemByName(allItems, '羊皮');
      item = (preferred && ranking.some(function (x) { return x.item.key === preferred.key; })) ? preferred : (ranking.length ? ranking[0].item : allItems[0] || null);
    }
    const itemStats = item ? statsFor(item, true) : null;
    if (itemStats && itemStats.rows) {
      itemStats.rows.sort(function (a, b) {
        if (!a.row && !b.row) return 0;
        if (!a.row) return 1;
        if (!b.row) return -1;
        return b.row.ret - a.row.ret;
      });
    }
    return Object.assign({}, base, {
      item: item, itemStats: itemStats, itemRanking: ranking,
      selectedServers: selectedServers
    });
  }

  function serverHead(ctx, viewLabel) {
    let meta = '';
    if (ctx && ctx.range) {
      const first = ctx.columns && ctx.columns.length ? serverTimeLabel(ctx.columns[0]) : '';
      const last = ctx.columns && ctx.columns.length ? serverTimeLabel(ctx.columns[ctx.columns.length - 1]) : '';
      const ready = ctx.status === 'ready';
      const selected = ready && ctx.selection ? ctx.selection.selected.length : serverCatalog().length;
      const total = ctx.selection && ctx.selection.all ? ctx.selection.all.length : serverCatalog().length;
      const scope = ready && !selected ? '未选物品' : (selected !== total ? '所选 ' + selected + ' 项物品' : '全部物品 ' + total + ' 项（含五行石）');
      const serverTotal = ctx.serverCount != null ? ctx.serverCount : (DATA.servers || []).length;
      meta = '<p class="page-sub server-page-sub">' + (viewLabel ? viewLabel + ' · ' : '') + scope + ' · ' + serverTotal + ' 服 · ' + ctx.range.label + (first ? ' ' + first + '–' + last : '') + (ctx.partial ? ' · 更新中' : '') + ' · 缺失报价留空</p>';
    }
    return '<div class="page-head"><div><h1 class="page-title">区服趋势</h1>' + meta + '</div></div>';
  }
  function serverViewSwitch(p) {
    const item = p.sview === 'item';
    return '<div class="server-view-switch" role="tablist" aria-label="区服趋势视角">' +
      '<button role="tab" class="' + (!item ? 'on' : '') + '" aria-selected="' + (!item ? 'true' : 'false') + '" data-server-view="server">区服视角</button>' +
      '<button role="tab" class="' + (item ? 'on' : '') + '" aria-selected="' + (item ? 'true' : 'false') + '" data-server-view="item">物品视角</button>' +
    '</div>';
  }
  function serverTimeLabel(at) {
    const text = String(at || '');
    return text.length >= 16 ? text.slice(5, 16).replace('T', ' ') : text;
  }
  function serverToneClass(value) {
    return value > 0.0005 ? 'pos' : value < -0.0005 ? 'neg' : 'dim';
  }
  function serverHeatStyle(value) {
    if (value == null || !Number.isFinite(value)) return '';
    const alpha = Math.min(0.5, 0.05 + Math.abs(value) / 0.06 * 0.45);
    if (Math.abs(value) < 0.0005) return '';
    return 'background:' + (value > 0 ? 'rgba(69,212,131,' : 'rgba(244,63,94,') + alpha.toFixed(3) + ')';
  }
  function serverFilterCard(ctx, p) {
    const range = ctx.range;
    const selection = ctx.selection;
    const allServers = selection.all ? DATA.servers : [];
    const selectedServers = serverSelectedServers(p).map(function (s) { return s.id; });
    const selectedServerSet = new Set(selectedServers);
    const selectedItemSet = new Set(selection.selected.map(function (item) { return item.key; }));
    const allItems = selection.all;
    const productOpen = ui.serverProductPickerOpen ? ' open' : '';
    const serverOpen = ui.serverPickerOpen ? ' open' : '';
    const totalItems = allItems.length;
    const productQuery = String(ui.serverProductQuery || '').trim();
    const productList = allItems.filter(function (item) {
      if (!productQuery) return true;
      return U.includes([item.name, item.skillName, item.tierName].join(' '), productQuery);
    });
    const serverCount = selectedServers.length;
    const totalServers = (DATA.servers || []).length;
    const selectedCount = selection.selected.length;
    const allProductSelected = selectedCount === totalItems && !selection.keyword;
    const serverAll = selectedServers.length === totalServers;
    let html = '<section class="card server-filter-card"><div class="card-body tight">';
    html += '<button class="server-filter-toggle' + (ui.serverFilterOpen ? ' open' : '') + '" data-action="toggle-server-filter">' + icon('filter') + '<span>筛选</span><span class="sum">' + serverCount + ' / ' + totalServers + ' 服 · ' + (allProductSelected ? '全部 ' + totalItems + ' 项' : '已选 ' + selectedCount + ' 项') + ' · ' + ctx.range.label + '</span>' + icon('chevronDown') + '</button>';
    html += '<div class="server-filter-body' + (ui.serverFilterOpen ? ' open' : '') + '"><div class="server-filter">';
    html += '<div class="seg seg-sm server-range">' +
      '<button class="' + (p.srange === '3d' || p.srange === '7d' || p.srange === '30d' ? '' : 'active') + '" data-server-range="today">今日</button>' +
      '<button class="' + (p.srange === '3d' ? 'active' : '') + '" data-server-range="3d">近 3 日</button>' +
      '<button class="' + (p.srange === '7d' || p.srange === '30d' ? 'active' : '') + '" data-server-range="7d">近 7 日</button>' +
    '</div><span class="server-range-note">最多保留 7 天</span>';
    html += '<details class="trend-picker server-picker"' + serverOpen + '><summary class="trend-picker-summary"><span>区服 <em>多选</em></span><b>' + serverCount + ' / ' + totalServers + '</b>' + icon('chevronDown') + '</summary>' +
      '<div class="trend-picker-panel"><div class="trend-picker-actions">' +
        '<label class="trend-check trend-check-all"><input type="checkbox" data-server-toggle-all' + (serverAll ? ' checked' : '') + '>全选</label>' +
        '<button class="btn btn-sm" data-action="server-select-none">清空</button>' +
        '<span class="tiny dim">已选 ' + serverCount + ' / ' + totalServers + '</span>' +
      '</div><div class="trend-picker-list">' +
        (DATA.servers || []).map(function (s, index) {
          return '<label class="trend-check"><input type="checkbox" data-server-toggle="' + U.esc(s.id) + '"' + (selectedServerSet.has(s.id) ? ' checked' : '') + '>' +
            '<span class="server-dot" style="--c:' + U.esc(trendItemColor(index)) + '"></span><span class="nm">' + U.esc(s.name) + '</span><span class="tier">' + U.esc(s.region || '') + '</span></label>';
        }).join('') +
      '</div></div></details>';
    html += '<details class="trend-picker server-product-picker"' + productOpen + '><summary class="trend-picker-summary"><span>指定产物 <em>多选</em></span><b>' + (allProductSelected ? '全部 ' + totalItems : selectedCount + ' / ' + totalItems) + '</b>' + icon('chevronDown') + '</summary>' +
      '<div class="trend-picker-panel"><div class="trend-picker-actions">' +
        '<label class="trend-check trend-check-all"><input type="checkbox" data-server-product-all-toggle' + (allProductSelected ? ' checked' : '') + '>全选</label>' +
        '<button class="btn btn-sm" data-action="server-product-none">清空</button>' +
        '<span class="tiny dim">已选 ' + selectedCount + ' / ' + totalItems + '</span>' +
      '</div><div class="trend-picker-search"><input class="input" type="search" placeholder="搜索材料 / 产物 / 五行石" value="' + U.esc(ui.serverProductQuery || '') + '" data-server-product-search data-fkey="server-product-search" aria-label="搜索指定产物"></div>' +
      '<div class="trend-picker-list">' +
        (productList.map(function (item) {
          return '<label class="trend-check" data-server-product-item data-server-product-text="' + U.esc([item.name, item.skillName, item.tierName].join(' ')) + '"><input type="checkbox" data-server-product-toggle="' + U.esc(item.key) + '"' + (selectedItemSet.has(item.key) ? ' checked' : '') + '>' +
            '<span class="trend-dot" style="--c:' + U.esc(item.color || '#64748B') + '"></span><span class="nm">' + U.esc(item.name) + '</span><span class="tier">' + U.esc(item.tierName || item.skillName) + '</span></label>';
        }).join('') || '<span class="tiny dim">没有匹配的物品</span>') +
      '</div></div></details>';
    html += '<button class="btn btn-sm" data-action="server-reset">' + icon('refresh') + '重置</button>';
    html += '<span class="filter-note"><span class="dot"></span>缺失报价留空 · 不计入分母</span>';
    html += '</div></div></div></section>';
    return html;
  }
  function serverKeywordBar(ctx, p) {
    const chips = ctx.keywords || [];
    if (!chips.length) return '';
    return '<div class="server-keywords"><span class="server-keywords-label">本期关键词</span>' +
      chips.map(function (chip) {
        const cls = 'server-kw ' + (chip.tone || '') + (chip.type === 'active' ? ' active' : '');
        const inner = (chip.dot ? '<i class="server-dot" style="--c:' + U.esc(chip.dot) + '"></i>' : '') +
          U.esc(chip.label) + (chip.value ? ' <b>' + U.esc(chip.value) + '</b>' : '');
        if (chip.type === 'item') return '<button class="' + cls + '" data-server-keyword="' + U.esc(chip.token) + '">' + inner + '</button>';
        if (chip.type === 'active') return '<button class="' + cls + '" data-server-clear-keyword="1">' + inner + ' ×</button>';
        return '<span class="' + cls + '">' + inner + '</span>';
      }).join('') +
      '<span class="server-keywords-hint">点击物品词筛选</span></div>';
  }
  function serverKpi(ctx) {
    const nonLow = ctx.rank.filter(function (s) { return !s.low && s.score != null; });
    const up = ctx.rank.filter(function (s) { return s.score > 0.0005; }).length;
    const down = ctx.rank.filter(function (s) { return s.score < -0.0005; }).length;
    const breadth = ctx.globalUp + ctx.globalDown ? ctx.globalUp / (ctx.globalUp + ctx.globalDown) : 0;
    const strongest = nonLow[0] || null;
    const weakest = nonLow.slice(-1)[0] || null;
    return '<div class="kpi-grid server-kpis">' +
      '<div class="kpi"><div class="kpi-label">净广度为正 / 为负</div><div class="kpi-value"><span class="pos">' + up + '</span><small>/</small><span class="neg">' + down + '</span><small>服</small></div><div class="kpi-meta"><span>全部 ' + ctx.rank.length + ' 服 · 低覆盖 ' + ctx.lowCount + ' 服</span></div></div>' +
      '<div class="kpi"><div class="kpi-label">全服涨跌广度</div><div class="kpi-value">' + U.fmt(breadth * 100, 0) + '<span class="kpi-unit">%</span></div><div class="mini-bar"><i style="width:' + Math.round(breadth * 100) + '%;background:var(--positive)"></i><i style="width:' + Math.round((1 - breadth) * 100) + '%;background:var(--danger)"></i></div><div class="kpi-meta"><span>上涨 ' + ctx.globalUp + ' · 下跌 ' + ctx.globalDown + '</span></div></div>' +
      '<div class="kpi"><div class="kpi-label">最强区服</div><div class="kpi-value">' + (strongest ? '<span class="server-dot" style="--c:' + U.esc(strongest.color) + ';display:inline-block;margin-right:6px"></span>' + U.esc(strongest.name) : '—') + '</div><div class="kpi-meta">' + (strongest ? '<span class="pos">' + serverBreadth(strongest.score) + '</span><span class="sep"></span><span>覆盖 ' + strongest.comparable + ' / ' + (ctx.selection.selected.length) + '</span>' : '样本不足') + '</div></div>' +
      '<div class="kpi"><div class="kpi-label">最弱区服</div><div class="kpi-value">' + (weakest ? '<span class="server-dot" style="--c:' + U.esc(weakest.color) + ';display:inline-block;margin-right:6px"></span>' + U.esc(weakest.name) : '—') + '</div><div class="kpi-meta">' + (weakest ? '<span class="neg">' + serverBreadth(weakest.score) + '</span><span class="sep"></span><span>覆盖 ' + weakest.comparable + ' / ' + (ctx.selection.selected.length) + '</span>' : '样本不足') + '</div></div>' +
    '</div>';
  }
  function serverHeatCard(ctx) {
    const selected = ctx.selectedServer;
    const columns = ctx.columns;
    const rows = ctx.rank;
    let html = '<section class="card col-7 server-heat-card"><div class="card-head"><div class="card-head-main"><h2 class="card-title">区服净广度热力图</h2><p class="card-sub">相对区间首点的上涨/下跌净占比 · 行按末点排序</p></div><div class="card-tools"><span class="chart-legend"><span class="item"><span class="swatch" style="--sw:var(--positive)"></span>涨</span><span class="item"><span class="swatch" style="--sw:var(--danger)"></span>跌</span></span></div></div>';
    html += '<div class="server-heat-wrap"><table class="trend-heatmap server-heatmap"><thead><tr><th class="sticky">区服</th>' +
      columns.map(function (at) { return '<th class="num">' + U.esc(serverTimeLabel(at)) + '</th>'; }).join('') + '</tr></thead><tbody>';
    rows.forEach(function (s) {
      html += '<tr class="' + (selected && selected.id === s.id ? 'sel' : '') + '" data-server-focus="' + U.esc(s.id) + '">' +
        '<th class="sticky"><span class="server-dot" style="--c:' + U.esc(s.color) + '"></span><span class="trend-heat-name">' + U.esc(s.name) + '</span>' + (s.low ? '<span class="low-badge">低覆盖</span>' : '') + '</th>' +
        columns.map(function (at, i) {
          const value = s.heat[i];
          return '<td class="num ' + serverToneClass(value) + '" style="' + serverHeatStyle(value) + '">' + (i === 0 || value == null ? '—' : serverBreadth(value)) + '</td>';
        }).join('') + '</tr>';
    });
    html += '</tbody></table></div></section>';
    return html;
  }
  function serverRankCard(ctx) {
    const selected = ctx.selectedServer;
    let html = '<section class="card col-5 server-rank-card"><div class="card-head"><div class="card-head-main"><h2 class="card-title">区服净广度榜</h2><p class="card-sub">' + ctx.rank.length + ' 服 · 全部物品 / 所选范围</p></div></div>' +
      '<div class="server-rank-wrap"><table class="data compact server-rank"><thead><tr><th>区服</th><th class="num">净广度</th><th class="num">涨/跌/平</th><th class="num">覆盖</th><th>主要上涨</th></tr></thead><tbody>';
    ctx.rank.forEach(function (s) {
      const top = s.topUp[0];
      html += '<tr class="' + (selected && selected.id === s.id ? 'sel' : '') + '" data-server-focus="' + U.esc(s.id) + '">' +
        '<td><span class="server-dot" style="--c:' + U.esc(s.color) + '"></span><span class="server-rank-name">' + U.esc(s.name) + '</span>' + (s.low ? '<span class="low-badge">低</span>' : '') + '</td>' +
        '<td class="num ' + serverToneClass(s.score) + '">' + serverBreadth(s.score) + '</td>' +
        '<td class="num"><span class="pos">' + s.up + '</span>/<span class="neg">' + s.down + '</span>/<span class="dim">' + s.flat + '</span></td>' +
        '<td class="num"><span class="server-coverage"><i style="width:' + Math.round((s.coverage || 0) * 100) + '%"></i></span>' + Math.round((s.coverage || 0) * 100) + '%</td>' +
        '<td class="server-rank-top">' + (top ? U.esc(top.item.name) + ' <span class="pos">' + serverPct(top.ret) + '</span>' : '—') + '</td></tr>';
    });
    html += '</tbody></table></div></section>';
    return html;
  }
  function serverSkillCard(ctx) {
    const selected = ctx.selectedServer;
    let html = '<section class="card col-12 server-skill-card"><div class="card-head"><div class="card-head-main"><h2 class="card-title">技艺 × 区服净广度矩阵</h2><p class="card-sub">制造取产物 · 采集取材料 · 五行石 6–8 级独立列 · 无数据留空</p></div><div class="card-tools"><span class="chart-legend"><span class="item"><span class="swatch" style="--sw:var(--positive)"></span>涨</span><span class="item"><span class="swatch" style="--sw:var(--danger)"></span>跌</span></span></div></div>';
    html += '<div class="server-skill-wrap"><table class="server-skill-table"><thead><tr><th>区服</th>' +
      ctx.skillGroups.map(function (g) { return '<th class="' + (g.id === 'stone' ? 'stone' : '') + '">' + U.esc(g.name) + '</th>'; }).join('') + '</tr></thead><tbody>';
    ctx.rank.forEach(function (s) {
      html += '<tr class="' + (selected && selected.id === s.id ? 'sel' : '') + '"><th><span class="server-dot" style="--c:' + U.esc(s.color) + '"></span><span class="server-rank-name">' + U.esc(s.name) + '</span>' + (s.low ? '<span class="low-badge">低</span>' : '') + '</th>' +
        ctx.skillGroups.map(function (g) {
          const stat = s.skillStats[g.id] || {};
          if (!stat.count) return '<td class="num miss">—</td>';
          return '<td class="num ' + serverToneClass(stat.score) + '" style="' + serverHeatStyle(stat.score) + '" data-server-focus="' + U.esc(s.id) + '" data-server-skill="' + U.esc(g.id) + '">' + serverBreadth(stat.score) + '<small>' + stat.count + '</small></td>';
        }).join('') + '</tr>';
    });
    html += '</tbody></table></div><div class="card-foot"><span>单元格下方数字为可比物品数；点击单元格聚焦区服 + 技艺</span></div></section>';
    return html;
  }
  function serverDetail(ctx) {
    const server = ctx.selectedServer;
    if (!server) return '';
    const skill = ctx.selectedSkill;
    const returns = ctx.detailReturns || [];
    const up = returns.filter(function (r) { return r.ret > 0.005; }).sort(function (a, b) { return b.ret - a.ret; }).slice(0, 5);
    const down = returns.filter(function (r) { return r.ret < -0.005; }).sort(function (a, b) { return a.ret - b.ret; }).slice(0, 5);
    const cats = [
      { label: '材料', kind: 'material' },
      { label: '产物', kind: 'product' },
      { label: '五行石', kind: 'stone' }
    ].map(function (cat) {
      const vals = returns.filter(function (r) { return r.item.kind === cat.kind; }).map(function (r) { return r.ret; });
      const cUp = vals.filter(function (v) { return v > 0.005; }).length;
      const cDown = vals.filter(function (v) { return v < -0.005; }).length;
      return { label: cat.label, score: vals.length ? (cUp - cDown) / vals.length : null, count: vals.length };
    });
    const title = server.name + ' · 主要变动' + (skill ? ' · ' + skill.name : '');
    let html = '<section class="card col-12 server-detail-card"><div class="card-head"><div class="card-head-main"><h2 class="card-title">' + U.esc(title) + '</h2><p class="card-sub">' + (skill ? '当前聚焦：' + U.esc(skill.name) + ' · ' : '') + '全部范围 · 涨幅/跌幅前 5</p></div><div class="card-tools"><span class="badge badge-outline">覆盖 ' + server.comparable + ' / ' + ctx.selection.selected.length + '</span>' +
      (skill ? '<button class="btn btn-sm" data-action="server-clear-skill">看全部技艺</button>' : '') +
      '<a class="btn btn-sm" href="' + Route.href('/trends', { server: server.id, tfrom: ctx.range.from, tto: ctx.range.to }) + '">查看该服物价走势 ' + icon('arrowRight') + '</a></div></div>';
    html += '<div class="server-detail-body"><div class="server-cats">' +
      cats.map(function (cat) {
        return '<div class="server-cat"><div class="k">' + cat.label + '</div><div class="v ' + serverToneClass(cat.score) + '">' + serverBreadth(cat.score) + '</div><div class="t">净广度 · ' + cat.count + ' 个可比</div></div>';
      }).join('') + '</div><div class="server-movers">' +
      '<div><div class="server-mover-head"><span class="pos">涨幅前 5</span></div>' + (up.length ? up.map(function (r) {
        return '<a class="server-mover-row" href="' + Route.href('/trends', { server: server.id, tfocus: r.item.key, tfrom: ctx.range.from, tto: ctx.range.to }) + '"><span class="nm">' + U.esc(r.item.name) + '</span><span class="chg pos">' + serverPct(r.ret) + '</span><span class="px">' + U.fmt(r.p1, 2) + ' 金</span></a>';
      }).join('') : '<div class="server-empty">—</div>') + '</div>' +
      '<div><div class="server-mover-head"><span class="neg">跌幅前 5</span></div>' + (down.length ? down.map(function (r) {
        return '<a class="server-mover-row" href="' + Route.href('/trends', { server: server.id, tfocus: r.item.key, tfrom: ctx.range.from, tto: ctx.range.to }) + '"><span class="nm">' + U.esc(r.item.name) + '</span><span class="chg neg">' + serverPct(r.ret) + '</span><span class="px">' + U.fmt(r.p1, 2) + ' 金</span></a>';
      }).join('') : '<div class="server-empty">—</div>') + '</div></div></div></section>';
    return html;
  }
  const SERVER_RECENT_KEY = 'jx3.serverItemRecent.v1';
  const SERVER_RECENT_MAX = 15;
  const SERVER_QUICK_ITEM_NAMES = ['羊皮', '骨头', '猫眼石', '鱼肉'];
  function serverSearchMatch(text, query) {
    const hay = String(text || '').toLowerCase().replace(/\s+/g, '');
    const needle = String(query || '').toLowerCase().replace(/\s+/g, '');
    if (!needle) return true;
    if (hay.indexOf(needle) !== -1) return true;
    // 轻量模糊匹配：按顺序出现即可，例如“青玉”可匹配“青魄玉”
    let pos = 0;
    for (let i = 0; i < hay.length && pos < needle.length; i++) {
      if (hay.charAt(i) === needle.charAt(pos)) pos++;
    }
    return pos === needle.length;
  }
  function serverRecentLoad() {
    try {
      const raw = window.localStorage.getItem(SERVER_RECENT_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(parsed)) return [];
      return parsed.filter(function (key) { return typeof key === 'string' && key; }).slice(0, SERVER_RECENT_MAX);
    } catch (err) {
      return [];
    }
  }
  function serverRecentSave(keys) {
    try { window.localStorage.setItem(SERVER_RECENT_KEY, JSON.stringify(keys)); } catch (err) { /* ignore */ }
  }
  function serverDefaultQuickKeys(all) {
    const keys = [];
    SERVER_QUICK_ITEM_NAMES.forEach(function (name) {
      const item = serverItemByName(all, name);
      if (item) keys.push(item.key);
    });
    const stone = serverItemStone(all, 6);
    if (stone) keys.push(stone.key);
    return keys;
  }
  function serverRecentKeys(ctx) {
    const all = ctx.selection.all;
    if (ui.serverRecentItems === null || ui.serverRecentItems === undefined) {
      let loaded = serverRecentLoad();
      if (!loaded.length) loaded = serverDefaultQuickKeys(all);
      ui.serverRecentItems = loaded;
    }
    let keys = ui.serverRecentItems.filter(function (key) {
      return all.some(function (item) { return item.key === key; });
    });
    if (ctx.item && keys.indexOf(ctx.item.key) === -1) keys.unshift(ctx.item.key);
    if (keys.length > SERVER_RECENT_MAX) keys = keys.slice(0, SERVER_RECENT_MAX);
    return keys;
  }
  function serverRememberItem(key) {
    if (!key) return;
    const all = serverCatalog();
    let keys = ui.serverRecentItems;
    if (!keys || !keys.length) keys = serverDefaultQuickKeys(all);
    keys = keys.filter(function (itemKey) { return itemKey !== key; });
    keys.unshift(key);
    if (keys.length > SERVER_RECENT_MAX) keys = keys.slice(0, SERVER_RECENT_MAX);
    ui.serverRecentItems = keys;
    serverRecentSave(keys);
  }
  function serverItemColor(item) {
    const all = serverCatalog();
    const index = all.findIndex(function (x) { return x.key === item.key; });
    return trendItemColor(index < 0 ? 0 : index);
  }
  function serverItemMeta(item) {
    if (!item) return '';
    return [serverItemKind(item), item.skillName || '', item.tierName || ''].filter(Boolean).join(' · ');
  }
  function serverItemByName(all, name) {
    return (all || []).filter(function (item) { return item.name === name; })[0] || null;
  }
  function serverItemStone(all, level) {
    return (all || []).filter(function (item) { return item.kind === 'stone' && String(item.level) === String(level); })[0] || null;
  }
  function serverItemQuick(ctx, p) {
    const all = ctx.selection.all;
    const recent = serverRecentKeys(ctx).map(function (key) {
      return all.filter(function (item) { return item.key === key; })[0];
    }).filter(Boolean);
    return '<div class="server-item-quick"><span class="lab">快速查看</span>' +
      recent.map(function (item) {
        return '<button class="server-quick-chip' + (ctx.item && ctx.item.key === item.key ? ' on' : '') + '" data-server-item-pick="' + U.esc(item.key) + '">' + U.esc(item.kind === 'stone' ? '五行石 · ' + item.level + ' 级' : item.name) + '</button>';
      }).join('') +
      '<span class="server-quick-note">最近 ' + SERVER_RECENT_MAX + ' 个 · 全部 ' + all.length + ' 项</span></div>';
  }
  function serverItemFilterCard(ctx, p) {
    const all = ctx.selection.all;
    const selectedServers = serverSelectedServers(p);
    const selectedSet = new Set(selectedServers.map(function (s) { return s.id; }));
    const totalServers = (DATA.servers || []).length;
    const serverOpen = ui.serverPickerOpen ? ' open' : '';
    const itemOpen = ui.serverItemPickerOpen ? ' open' : '';
    const query = String(ui.serverItemQuery || '').trim();
    const itemList = all.filter(function (item) {
      if (!query) return true;
      return serverSearchMatch([item.name, item.skillName, item.tierName, item.kind].join(' '), query);
    });
    const selectedItem = ctx.item;
    const allProductSelected = selectedServers.length === totalServers;
    const itemMeta = serverItemMeta(selectedItem);
    let html = '<section class="card server-filter-card"><div class="card-body tight">';
    html += '<button class="server-filter-toggle' + (ui.serverFilterOpen ? ' open' : '') + '" data-action="toggle-server-filter">' + icon('filter') + '<span>筛选</span><span class="sum">' + (selectedItem ? U.esc(selectedItem.name) : '未选物品') + ' · ' + selectedServers.length + '/' + totalServers + ' 服 · ' + ctx.range.label + '</span>' + icon('chevronDown') + '</button>';
    html += '<div class="server-filter-body' + (ui.serverFilterOpen ? ' open' : '') + '"><div class="server-filter server-item-filter">';
    html += '<div class="seg seg-sm server-range">' +
      '<button class="' + (p.srange === '3d' || p.srange === '7d' || p.srange === '30d' ? '' : 'active') + '" data-server-range="today">今日</button>' +
      '<button class="' + (p.srange === '3d' ? 'active' : '') + '" data-server-range="3d">近 3 日</button>' +
      '<button class="' + (p.srange === '7d' || p.srange === '30d' ? 'active' : '') + '" data-server-range="7d">近 7 日</button>' +
    '</div><span class="server-range-note">最多保留 7 天</span>';
    html += '<details class="trend-picker server-picker"' + serverOpen + '><summary class="trend-picker-summary"><span>区服 <em>多选</em></span><b>' + selectedServers.length + ' / ' + totalServers + '</b>' + icon('chevronDown') + '</summary>' +
      '<div class="trend-picker-panel"><div class="trend-picker-actions">' +
        '<label class="trend-check trend-check-all"><input type="checkbox" data-server-toggle-all' + (allProductSelected ? ' checked' : '') + '>全选</label>' +
        '<button class="btn btn-sm" data-action="server-select-none">清空</button>' +
        '<span class="tiny dim">已选 ' + selectedServers.length + ' / ' + totalServers + '</span>' +
      '</div><div class="trend-picker-list">' +
        (DATA.servers || []).map(function (s, index) {
          return '<label class="trend-check"><input type="checkbox" data-server-toggle="' + U.esc(s.id) + '"' + (selectedSet.has(s.id) ? ' checked' : '') + '>' +
            '<span class="server-dot" style="--c:' + U.esc(trendItemColor(index)) + '"></span><span class="nm">' + U.esc(s.name) + '</span><span class="tier">' + U.esc(s.region || '') + '</span></label>';
        }).join('') +
      '</div></div></details>';
    html += '<details class="trend-picker server-item-picker"' + itemOpen + '><summary class="trend-picker-summary"><span>物品</span><b>' + (selectedItem ? U.esc(selectedItem.name) : '选择物品') + '</b>' + icon('chevronDown') + '</summary>' +
      '<div class="trend-picker-panel server-item-panel"><div class="trend-picker-search"><input class="input" type="search" placeholder="搜索物品 / 技艺 / 类型" title="支持模糊搜索，回车选择第一项" value="' + U.esc(ui.serverItemQuery || '') + '" data-server-item-search data-fkey="server-item-search" aria-label="搜索物品"></div><div class="server-search-hint"><span data-server-item-count>' + itemList.length + '</span> 个匹配 · 支持模糊搜索 · 回车选择第一项</div>' +
      '<div class="trend-picker-list">' +
        (itemList.map(function (item) {
          return '<button type="button" class="server-item-option' + (selectedItem && selectedItem.key === item.key ? ' on' : '') + '" data-server-item-pick="' + U.esc(item.key) + '" data-server-item-text="' + U.esc([item.name, item.skillName, item.tierName, item.kind].join(' ')) + '">' +
            '<span class="nm">' + U.esc(item.name) + '</span><span class="meta">' + U.esc(serverItemMeta(item)) + '</span></button>';
        }).join('') || '<span class="tiny dim">没有匹配的物品</span>') +
      '</div></div></details>';
    html += '<button class="btn btn-sm" data-action="server-item-reset">' + icon('refresh') + '重置</button>';
    html += '<span class="filter-note"><span class="dot"></span>有报价才计入 · 缺失不算持平</span>';
    html += '</div></div></div></section>';
    return html;
  }
  function serverItemKpi(ctx) {
    const s = ctx.itemStats;
    if (!s) return '';
    const selected = ctx.selectedServers.length;
    const coverage = selected ? s.comparable / selected : 0;
    return '<div class="kpi-grid server-kpis five">' +
      '<div class="kpi"><div class="kpi-label">有报价区服</div><div class="kpi-value">' + s.comparable + '<small>/ ' + selected + '</small></div><div class="kpi-meta"><span>覆盖 ' + Math.round(coverage * 100) + '% · ' + (s.missing ? s.missing + ' 服无报价' : '无缺失') + '</span></div></div>' +
      '<div class="kpi"><div class="kpi-label">上涨区服</div><div class="kpi-value pos">' + s.up + '<span class="kpi-unit">服</span></div><div class="kpi-meta">平均涨幅 <span class="pos">' + serverPct(s.upAvg) + '</span></div></div>' +
      '<div class="kpi"><div class="kpi-label">下跌区服</div><div class="kpi-value neg">' + s.down + '<span class="kpi-unit">服</span></div><div class="kpi-meta">平均跌幅 <span class="neg">' + serverPct(s.downAvg) + '</span></div></div>' +
      '<div class="kpi"><div class="kpi-label">跨服中位涨跌</div><div class="kpi-value ' + serverToneClass(s.median) + '">' + serverPct(s.median) + '</div><div class="kpi-meta">' + s.flat + ' 服持平 · ' + s.comparable + ' 服可比</div></div>' +
      '<div class="kpi"><div class="kpi-label">区间极值</div><div class="kpi-value small-two"><span class="pos">' + (s.max ? serverPct(s.max.row.ret) : '—') + '</span> <span class="dim">/</span> <span class="neg">' + (s.min ? serverPct(s.min.row.ret) : '—') + '</span></div><div class="kpi-meta">' + (s.max ? U.esc(s.max.server.name) : '—') + ' / ' + (s.min ? U.esc(s.min.server.name) : '—') + '</div></div>' +
      (s.low ? '<div class="server-low-note">样本不足：仅 ' + s.comparable + ' 服有报价，结论仅供参考</div>' : '') +
    '</div>';
  }
  function serverDistLeft(value) {
    if (value == null || !Number.isFinite(value)) return 50;
    return 50 + (value >= 0 ? 1 : -1) * Math.sqrt(Math.abs(value)) * 26;
  }
  function serverItemChart(ctx) {
    const item = ctx.item;
    const stats = ctx.itemStats;
    if (!item || !stats) return '';
    const medianLeft = serverDistLeft(stats.median);
    let html = '<section class="card col-7 server-item-chart-card"><div class="card-head"><div><h2 class="card-title">' + U.esc(item.name) + ' · 区服涨跌分布</h2><p class="card-sub">按涨跌幅排序 · 条形为压缩刻度，数字为真实涨跌 · 蓝线为中位数 ' + serverPct(stats.median) + '</p></div><div class="card-tools"><span class="legend"><span class="sw" style="background:var(--positive)"></span>涨<span class="sw" style="background:var(--danger)"></span>跌<span class="sw" style="background:var(--muted-2)"></span>平</span><button class="icon-btn" title="下载图片" aria-label="下载图片">' + icon('download') + '</button></div></div>';
    html += '<div class="server-dist-wrap"><div class="server-dist-chart"><div class="server-dist-head"><span>区服</span><span class="sp"></span><span class="val">涨跌</span></div>';
    stats.rows.forEach(function (entry) {
      const ret = entry.row ? entry.row.ret : null;
      const left = serverDistLeft(ret);
      const width = Math.min(44, Math.abs(left - 50));
      const cls = entry.status === 'up' ? 'pos' : entry.status === 'down' ? 'neg' : entry.status === 'flat' ? 'flat' : 'missing';
      html += '<div class="server-dist-row"><div class="server-dist-name"><span class="server-dot" style="--c:' + U.esc(entry.data ? entry.data.color : '#64748B') + '"></span>' + U.esc(entry.server.name) + '<span class="reg">' + U.esc(entry.server.region || '') + '</span></div><div class="server-dist-track"><span class="server-dist-zero"></span><span class="server-dist-median" style="left:' + medianLeft.toFixed(2) + '%"></span>' +
        (entry.row ? '<span class="server-dist-bar ' + cls + '" style="--w:' + width.toFixed(2) + '%"></span>' : '<span class="server-dist-missing">无报价</span>') +
        '</div><div class="server-dist-val ' + (cls === 'pos' ? 'pos' : cls === 'neg' ? 'neg' : 'dim') + '">' + (entry.row ? serverPct(ret) : '—') + '</div></div>';
    });
    html += '<div class="server-dist-legend"><span><i style="background:var(--positive)"></i>上涨 ' + stats.up + '</span><span><i style="background:var(--danger)"></i>下跌 ' + stats.down + '</span><span><i style="background:var(--muted-2)"></i>持平 ' + stats.flat + '</span><span><span class="median-line"></span>中位 ' + serverPct(stats.median) + '</span></div><div class="server-dist-foot">条形长度使用平方根压缩，避免极端值压扁其余区服；实际数值以右侧数字为准。</div></div></div></section>';
    return html;
  }
  function serverItemRanking(ctx, p) {
    const all = ctx.itemRanking;
    const selected = ctx.item;
    let html = '<section class="card col-5 server-item-rank-card"><div class="card-head"><div><h2 class="card-title">物品跨服统计</h2><p class="card-sub">按上涨区服数排序 · ' + ctx.selection.all.length + ' 项中 ' + all.length + ' 项有可比样本</p></div><div class="card-tools"><button class="icon-btn" title="下载表格" aria-label="下载表格">' + icon('download') + '</button></div></div>';
    html += '<div class="server-rank-search"><input type="search" placeholder="搜索物品" aria-label="搜索物品" value="' + U.esc(ui.serverItemRankQuery || '') + '" data-server-item-rank-search data-fkey="server-item-rank-search"><span class="tiny dim"><b data-server-item-rank-count>' + all.length + '</b> 项 · 回车选择</span></div>';
    html += '<div class="server-item-rank-wrap"><table class="server-item-rank-table"><thead><tr><th>物品</th><th>涨/跌/平</th><th>中位</th><th>覆盖</th></tr></thead><tbody>';
    all.forEach(function (row) {
      const item = row.item;
      html += '<tr class="' + (selected && selected.key === item.key ? 'sel' : '') + '" data-server-item-pick="' + U.esc(item.key) + '" data-server-item-text="' + U.esc(item.name) + '"><td><span class="server-dot" style="--c:' + U.esc(serverItemColor(item)) + '"></span><span class="server-item-name">' + U.esc(item.name) + '</span></td><td class="updown"><span class="pos">' + row.up + '</span>/<span class="neg">' + row.down + '</span>/<span class="dim">' + row.flat + '</span></td><td class="' + serverToneClass(row.median) + '">' + serverPct(row.median) + '</td><td>' + row.comparable + '/' + ctx.selectedServers.length + '</td></tr>';
    });
    html += '</tbody></table></div><div class="server-rank-foot">物品选择含全部 ' + ctx.selection.all.length + ' 项 · 本榜仅列有可比样本的 ' + all.length + ' 项</div></section>';
    return html;
  }
  function serverItemTable(ctx) {
    const item = ctx.item;
    const stats = ctx.itemStats;
    if (!item || !stats) return '';
    let html = '<section class="card col-12 server-item-table-card"><div class="card-head"><div><h2 class="card-title">' + U.esc(item.name) + ' · 区服明细</h2><p class="card-sub">按涨跌幅排序 · 起始价 / 当前价 / 涨跌幅 · 点击行进入该服物价走势</p></div><div class="card-tools"><span class="tag">' + U.esc(serverItemMeta(item)) + '</span><button class="icon-btn" title="下载表格" aria-label="下载表格">' + icon('download') + '</button></div></div>';
    html += '<div class="server-item-table-wrap"><table class="server-item-table"><thead><tr><th>区服</th><th>起始价</th><th>当前价</th><th>涨跌幅</th><th>状态</th></tr></thead><tbody>';
    stats.rows.forEach(function (entry) {
      if (!entry.row) {
        html += '<tr class="miss"><td><span class="server-dot" style="--c:#64748B"></span>' + U.esc(entry.server.name) + ' <span class="dim">' + U.esc(entry.server.region || '') + '</span></td><td>—</td><td>—</td><td class="dim">—</td><td><span class="dim">无报价</span></td></tr>';
        return;
      }
      const cls = entry.status === 'up' ? 'pos' : entry.status === 'down' ? 'neg' : 'dim';
      const label = entry.status === 'up' ? '上涨' : entry.status === 'down' ? '下跌' : '持平';
      html += '<tr data-server-item-trends="' + U.esc(entry.server.id) + '" data-item-key="' + U.esc(item.key) + '"><td><span class="server-dot" style="--c:' + U.esc(entry.data.color) + '"></span>' + U.esc(entry.server.name) + ' <span class="dim">' + U.esc(entry.server.region || '') + '</span></td><td>' + U.fmt(entry.row.p0, 2) + ' 金</td><td>' + U.fmt(entry.row.p1, 2) + ' 金</td><td class="' + cls + '">' + serverPct(entry.row.ret) + '</td><td class="' + cls + '">' + label + '</td></tr>';
    });
    html += '</tbody></table></div></section>';
    return html;
  }
  function serverItemInsight(ctx) {
    const s = ctx.itemStats;
    if (!s) return '';
    return '<section class="col-12 server-item-insight">' +
      '<div class="item"><b>中位数说明</b><br>' + s.comparable + ' 个可比区服中 ' + s.up + ' 涨、' + s.down + ' 跌、' + s.flat + ' 平，跨服中位 ' + serverPct(s.median) + '。中位数比均值更能代表“典型区服”。</div>' +
      '<div class="item"><b>极端值</b><br>' + (s.max ? U.esc(s.max.server.name) + ' ' + serverPct(s.max.row.ret) : '—') + '，' + (s.min ? U.esc(s.min.server.name) + ' ' + serverPct(s.min.row.ret) : '—') + '；分布图用压缩刻度，但数字保留真实值。</div>' +
      '<div class="item"><b>口径</b><br>等权统计区服，不按成交量加权；无首尾报价的区服计入“无报价”，不当作持平。</div></section>';
  }
  function renderServerItemTrends(p) {
    const ctx = serverItemBuild(p);
    if (!ctx || ctx.status === 'loading') {
      return '<div class="page trend-page server-page">' + serverHead(ctx, '物品视角') + serverViewSwitch(p) + historyLoadingCard(ctx, '区服趋势 · 物品视角') + dataFoot() + '</div>';
    }
    if (ctx.status === 'error') {
      return '<div class="page trend-page server-page">' + serverHead(ctx, '物品视角') + serverViewSwitch(p) + '<div class="card"><div class="card-body">' + notice('无法加载物品行情：' + U.esc(ctx.error || '未知错误'), 'info') + '</div></div>' + dataFoot() + '</div>';
    }
    if (!ctx.item || !ctx.itemStats) {
      return '<div class="page trend-page server-page">' + serverHead(ctx, '物品视角') + serverViewSwitch(p) + '<div class="grid section-gap"><section class="card col-12"><div class="card-body">' + emptyState('当前筛选没有可统计的物品', '调整区服、时间或选择其他物品。', '', 'filter') + '</div></section></div>' + dataFoot() + '</div>';
    }
    let html = '<div class="page trend-page server-page server-item-page">' + serverHead(ctx, '物品视角') + serverViewSwitch(p);
    html += serverItemFilterCard(ctx, p);
    html += serverItemQuick(ctx, p);
    html += '<div class="profit-page-tabs" role="tablist" aria-label="物价与制作收益">' +
      '<button role="tab" aria-selected="' + (ui.serverItemTab !== 'profit' ? 'true' : 'false') + '" class="' + (ui.serverItemTab !== 'profit' ? 'on' : '') + '" data-server-item-tab="price">物价</button>' +
      '<button role="tab" aria-selected="' + (ui.serverItemTab === 'profit' ? 'true' : 'false') + '" class="' + (ui.serverItemTab === 'profit' ? 'on' : '') + '" data-server-item-tab="profit">精力收益比</button></div>';
    if (ui.serverItemTab === 'profit') {
      html += serverItemProfitSection(ctx);
    } else {
      html += serverItemKpi(ctx);
      html += '<div class="grid section-gap">' + serverItemChart(ctx) + serverItemRanking(ctx, p) + '</div>';
      html += '<div class="grid section-gap">' + serverItemTable(ctx) + '</div>';
      html += '<div class="grid section-gap">' + serverItemInsight(ctx) + '</div>';
    }
    html += dataFoot();
    return html + '</div>';
  }

  function renderServerTrends(p) {
    if (p.sview === 'item') return renderServerItemTrends(p);
    const ctx = serverBuild(p);
    if (!ctx || ctx.status === 'loading') {
      return '<div class="page">' + serverHead(ctx) + serverViewSwitch(p) + historyLoadingCard(ctx, '区服趋势') + dataFoot() + '</div>';
    }
    if (ctx.status === 'error') {
      return '<div class="page">' + serverHead(ctx) + serverViewSwitch(p) + '<div class="card"><div class="card-body">' + notice('无法加载区服行情：' + U.esc(ctx.error || '未知错误'), 'info') + '</div></div>' + dataFoot() + '</div>';
    }
    let html = '<div class="page trend-page server-page">' + serverHead(ctx) + serverViewSwitch(p);
    html += serverFilterCard(ctx, p);
    html += serverKeywordBar(ctx, p);
    if (!ctx.servers.length) {
      html += '<div class="grid section-gap"><section class="card col-12"><div class="card-body">' + emptyState('当前筛选没有可比物品或区服', '调整区服或指定产物范围。', '', 'filter') + '</div></section></div>';
      return html + dataFoot() + '</div>';
    }
    html += serverKpi(ctx);
    html += '<div class="grid section-gap">' + serverHeatCard(ctx) + serverRankCard(ctx) + '</div>';
    html += '<div class="grid section-gap">' + serverSkillCard(ctx) + '</div>';
    html += '<div class="grid section-gap">' + serverDetail(ctx) + '</div>';
    if (ctx.selectedServer && ctx.selectedServer.points && ctx.selectedServer.points.length) {
      const lastPoint = ctx.selectedServer.points[ctx.selectedServer.points.length - 1];
      html += '<div class="grid section-gap">' + profitTop10Html(ui.profitSkill || (profitSkillList()[0] || {}).id, lastPoint, 'server', '') + '</div>';
    }
    html += dataFoot();
    return html + '</div>';
  }

  function compareTable(a, b) {
    const dims = [
      { label: '总成本', av: a.calc.totalCost, bv: b.calc.totalCost, better: 'low', fmt: 2, unit: '金' },
      { label: '税后产值', av: a.calc.outputValue, bv: b.calc.outputValue, better: 'high', fmt: 2, unit: '金' },
      { label: '交易税', av: a.calc.tax, bv: b.calc.tax, better: 'low', fmt: 2, unit: '金' },
      { label: '单次利润', av: a.calc.profit, bv: b.calc.profit, better: 'high', fmt: 2, unit: '金' },
      { label: '精力', av: a.calc.energy, bv: b.calc.energy, better: null, fmt: 0, unit: '点' },
      { label: '精力收益', av: a.calc.perEnergy, bv: b.calc.perEnergy, better: 'high', fmt: 2, unit: '金/精力' },
      { label: '毛利率', av: a.calc.margin, bv: b.calc.margin, better: 'high', fmt: 'pct', unit: '' },
      { label: '满预算次数', av: Math.floor(settings().energyBudget / (a.calc.energy || 1)), bv: Math.floor(settings().energyBudget / (b.calc.energy || 1)), better: 'high', fmt: 0, unit: '次' }
    ];
    return '<div class="table-wrap" style="border-top:0;margin-top:12px"><table class="data compact"><thead><tr><th>维度</th><th class="num">' +
      U.esc(a.recipe.name) + '</th><th class="num">' + U.esc(b.recipe.name) + '</th><th class="num">优势</th></tr></thead><tbody>' +
      dims.map(function (d) {
        let winner = '—';
        if (d.better && d.av != null && d.bv != null && d.av !== d.bv) {
          const aWins = d.better === 'high' ? d.av > d.bv : d.av < d.bv;
          winner = aWins ? 'A' : 'B';
        }
        const fmt = function (v) {
          if (v == null) return '—';
          return d.fmt === 'pct' ? U.fmtPct(v, 0) : U.fmt(v, d.fmt);
        };
        return '<tr><td class="dim">' + d.label + '</td>' +
          '<td class="num ' + (winner === 'A' ? 'pos strong' : '') + '">' + fmt(d.av) + ' <span class="tiny dim">' + d.unit + '</span></td>' +
          '<td class="num ' + (winner === 'B' ? 'pos strong' : '') + '">' + fmt(d.bv) + ' <span class="tiny dim">' + d.unit + '</span></td>' +
          '<td class="num">' + (winner === '—' ? '<span class="dim">—</span>' : '<span class="badge ' + (winner === 'A' ? 'badge-info' : 'badge-custom') + '">' + winner + '</span>') + '</td></tr>';
      }).join('') + '</tbody></table></div>';
  }

  /* ------------------------------------------------------------------ */
  /* 五行石公式抽屉                                                     */
  /* ------------------------------------------------------------------ */
  function blankStoneDraft() {
    return {
      id: null, name: '自定义五行石公式', mode: 'optimal', target: 6, primary: 6,
      inputs: [{ level: 4, qty: 12 }], fee: 18.24, energy: 10,
      outcomes: [{ level: 6, chance: 0.9276 }, { level: 5, chance: 0.0724 }],
      note: '', source: '自定义公式', custom: true
    };
  }

  function openStoneRecipe(id, mode) {
    const r = id ? Stone.recipe(id) : null;
    if (id && !r) return;
    ui.lastFocus = document.activeElement;
    document.body.classList.add('has-drawer');
    ui.drawer = {
      type: 'stone',
      id: id,
      mode: mode === 'edit' ? 'edit' : 'view',
      draft: mode === 'edit' ? Stone.sanitizeRecipe(r || blankStoneDraft()) : null,
      errors: []
    };
    if (!id && mode === 'edit') ui.drawer.draft.id = null;
    renderDrawer();
  }

  function stoneLevelOptions(selected) {
    return Stone.levels.map(function (l) {
      return '<option value="' + l.level + '"' + (Number(selected) === l.level ? ' selected' : '') + '>' + l.level + '级</option>';
    }).join('');
  }

  function stoneDrawerView(id) {
    const r = Stone.recipe(id);
    if (!r) { closeDrawer(); return ''; }
    const serverId = Store.state.serverId;
    const plan = r.target >= 7 ? Stone.marketPlan(serverId) : Stone.buildPlan('craft-gold', { serverId: serverId });
    const ev = Stone.evalRecipe(r, plan, { serverId: serverId });
    const pstar = ev.breakEven && ev.breakEven.p;
    const isJack = r.target >= 7;
    const profit = isJack ? ev.profitPerAttempt : ev.profitPerTarget;
    const profitLabel = isJack ? '期望利润/次' : '利润/颗';
    let html = '<div class="drawer-head"><div class="t">' +
      '<h2 id="drawer-title">' + U.esc(r.name) + ' ' +
      (r.custom ? '<span class="badge badge-custom">自定义</span>' : r.edited ? '<span class="badge badge-info">已修改</span>' : '') +
      '</h2><p>' + stoneChip(r.target, { short: true }) + ' · ' + stoneMethodBadge('赌跳级') + ' · ' +
      (isJack ? '赌跳级公式' : (r.mode === 'fast' ? '快速合成' : '常规合成')) + '</p></div>' +
      '<button class="icon-btn" data-action="close-drawer" aria-label="关闭">' + icon('x') + '</button></div>';

    html += '<div class="drawer-body">';
    html += '<div class="drawer-kpis">' +
      '<div class="drawer-kpi"><span>单次投入</span><b>' + U.fmt(ev.cost, 2) + '<small>金</small></b></div>' +
      '<div class="drawer-kpi"><span>税后净价</span><b>' + U.fmt(ev.targetNet, 2) + '<small>金</small></b></div>' +
      '<div class="drawer-kpi"><span>' + profitLabel + '</span><b class="' + stoneProfitClass(profit) + '">' +
        (profit == null ? '—' : U.fmtSigned(profit, 2)) + '<small>金</small></b></div>' +
    '</div>';

    html += '<div class="flex" style="margin-bottom:14px">' +
      '<span class="badge ' + (ev.missing ? 'badge-warning' : profit > 0 ? 'badge-positive' : 'badge-danger') + '">' +
      (ev.missing ? '存在缺价' : profit > 0 ? '正收益' : profit < 0 ? '负收益' : '持平') + '</span>' +
      (isJack && pstar != null ? '<span class="badge badge-outline">盈亏线 ' + U.fmtPct(pstar, 2) + '</span>' : '') +
      '<span class="spacer"></span><span class="tiny dim">' + (isJack ? '售价已扣 ' + U.fmtPct(Stone.taxRate(), 0) + ' 交易税' : '单颗成本含前序合成') + '</span></div>';

    html += '<div class="section-title">配方<span class="line"></span></div>';
    html += '<div class="table-wrap" style="border-top:0"><table class="data compact"><thead><tr><th>投入</th><th class="num">数量</th><th class="num">单价（金）</th><th class="num">小计</th></tr></thead><tbody>' +
      r.inputs.map(function (x) {
        const p = Stone.price(serverId, x.level);
        return '<tr><td>' + stoneChip(x.level) + '</td><td class="num">' + x.qty + '</td>' +
          '<td class="num">' + U.fmt(p.v, 2) + '</td><td class="num">' + U.fmt(p.v * x.qty, 2) + '</td></tr>';
      }).join('') +
      '<tr><td class="dim">加工费</td><td class="num">1</td><td class="num">' + U.fmt(r.fee, 2) + '</td><td class="num">' + U.fmt(r.fee, 2) + '</td></tr>' +
      '</tbody></table></div>';

    html += '<div class="section-title">产出与概率<span class="line"></span></div>';
    html += '<div class="table-wrap" style="border-top:0"><table class="data compact"><thead><tr><th>产出</th><th class="num">概率</th><th class="num">净价（金）</th><th class="num">期望（金）</th></tr></thead><tbody>' +
      r.outcomes.map(function (o) {
        const np = Stone.netPrice(serverId, o.level);
        return '<tr><td>' + stoneChip(o.level) + (o.level === r.target ? ' <span class="badge badge-peak">目标</span>' : '') + '</td>' +
          '<td class="num">' + U.fmtPct(o.chance, o.chance < 0.01 ? 2 : 1) + '</td>' +
          '<td class="num">' + U.fmt(np, 2) + '</td><td class="num">' + U.fmt(np * o.chance, 2) + '</td></tr>';
      }).join('') +
      '</tbody></table></div>';

    html += '<div class="section-title">精力与盈亏<span class="line"></span></div>';
    html += '<div class="info-rows">' +
      '<div class="info-row"><span class="k">单次精力（含前序）</span><span class="v">' + U.fmt(ev.totalEnergy, 1) + ' 点</span></div>' +
      '<div class="info-row"><span class="k">出目标级概率</span><span class="v">' + U.fmtPct(ev.targetChance, 2) + '</span></div>' +
      (isJack ? '<div class="info-row"><span class="k">盈亏平衡爆率</span><span class="v warn">' + (pstar == null ? '—' : U.fmtPct(pstar, 2)) + '</span></div>' : '') +
      '<div class="info-row"><span class="k">' + profitLabel + '</span><span class="v ' + stoneProfitClass(profit) + '">' + (profit == null ? '—' : U.fmtSigned(profit, 2) + ' 金') + '</span></div>' +
      '<div class="info-row"><span class="k">精力收益</span><span class="v ' + stoneProfitClass(isJack ? ev.perEnergyAttempt : ev.perEnergyTarget) + '">' +
        (isJack ? (ev.perEnergyAttempt == null ? '—' : U.fmt(ev.perEnergyAttempt, 3)) : (ev.perEnergyTarget == null ? '—' : U.fmt(ev.perEnergyTarget, 3))) + ' 金/精力</span></div>' +
      '</div>';
    if (r.note) html += '<p class="tiny dim" style="line-height:17px;margin-top:10px">' + U.esc(r.note) + '</p>';
    if (r.source) html += '<p class="tiny dim" style="line-height:17px;margin-top:6px">来源：' + U.esc(r.source) + '</p>';
    html += '</div>';

    html += '<div class="drawer-foot">' +
      '<button class="btn" data-action="stone-edit-form" data-id="' + U.esc(r.id) + '">' + icon('edit') + '编辑公式</button>' +
      (r.custom ? '<button class="btn btn-danger" data-action="stone-delete" data-id="' + U.esc(r.id) + '">' + icon('trash') + '删除</button>' :
        '<button class="btn" data-action="stone-reset" data-id="' + U.esc(r.id) + '">' + icon('refresh') + '恢复默认</button>') +
      '<span class="spacer"></span><button class="btn" data-action="close-drawer">关闭</button></div>';
    return html;
  }

  function stoneDrawerEdit(d) {
    const errs = (ui.drawer && ui.drawer.errors) || [];
    let html = '<div class="drawer-head"><div class="t">' +
      '<h2 id="drawer-title">' + (d.id ? '编辑' : '新增') + '五行石公式 ' +
      '<span class="badge badge-custom">' + (d.id ? '编辑中' : '新建') + '</span></h2>' +
      '<p>修改后立即参与五行石页与总览/分析卡片计算</p></div>' +
      '<button class="icon-btn" data-action="close-drawer" aria-label="关闭">' + icon('x') + '</button></div>';
    html += '<div class="drawer-body">';
    if (errs.length) {
      html += '<div class="notice" style="margin-bottom:14px">' + icon('alert') + '<div><b>请检查：</b><ul style="margin:4px 0 0;padding-left:16px">' +
        errs.map(function (e) { return '<li>' + U.esc(e) + '</li>'; }).join('') + '</ul></div></div>';
    }
    html += '<div class="form-grid">' +
      '<label class="form-field full"><span>公式名称</span><input class="input" data-draft-stone="name" value="' + U.esc(d.name) + '" placeholder="例如：4精6 冲八"></label>' +
      '<label class="form-field"><span>类型</span><select class="select" data-draft-stone="mode">' +
        '<option value="optimal"' + (d.mode === 'optimal' ? ' selected' : '') + '>常规合成</option>' +
        '<option value="fast"' + (d.mode === 'fast' ? ' selected' : '') + '>快速合成</option>' +
        '<option value="jackpot"' + (d.mode === 'jackpot' ? ' selected' : '') + '>赌跳级</option></select></label>' +
      '<label class="form-field"><span>目标等级</span><select class="select" data-draft-stone="target">' + stoneLevelOptions(d.target) + '</select></label>' +
      '<label class="form-field"><span>保底产出等级</span><select class="select" data-draft-stone="primary">' + stoneLevelOptions(d.primary) + '</select><span class="hint">失败/未跳级时的主要产物</span></label>' +
      '<label class="form-field"><span>加工费（金）</span><input class="input" type="number" min="0" step="0.0001" data-draft-stone="fee" value="' + d.fee + '"></label>' +
      '<label class="form-field"><span>精力/次</span><input class="input" type="number" min="0" step="1" data-draft-stone="energy" value="' + d.energy + '"></label>' +
    '</div>';

    html += '<div class="section-title">投入材料<span class="line"></span><span class="tiny dim">最多 16 格，可跨等级</span></div>';
    html += '<div class="stone-edit-rows">' +
      d.inputs.map(function (x, i) {
        return '<div class="stone-edit-row" data-stone-input-row>' +
          '<select class="select" data-si-level>' + stoneLevelOptions(x.level) + '</select>' +
          '<input class="input" type="number" min="1" step="1" data-si-qty value="' + x.qty + '">' +
          '<button class="icon-btn" data-action="stone-remove-input" data-index="' + i + '" aria-label="移除">' + icon('x') + '</button></div>';
      }).join('') +
      '</div><button class="btn btn-sm" data-action="stone-add-input">' + icon('plus') + '添加材料</button>';

    html += '<div class="section-title">产出与概率<span class="line"></span><span class="tiny dim">概率合计 ≤ 100%，差额视为失败</span></div>';
    html += '<div class="stone-edit-rows">' +
      d.outcomes.map(function (o, i) {
        return '<div class="stone-edit-row" data-stone-outcome-row>' +
          '<select class="select" data-so-level>' + stoneLevelOptions(o.level) + '</select>' +
          '<input class="input" type="number" min="0" max="100" step="0.01" data-so-chance value="' + U.fmt(o.chance * 100, 2) + '"><span class="tiny dim">%</span>' +
          '<button class="icon-btn" data-action="stone-remove-outcome" data-index="' + i + '" aria-label="移除">' + icon('x') + '</button></div>';
      }).join('') +
      '</div><button class="btn btn-sm" data-action="stone-add-outcome">' + icon('plus') + '添加产出</button>';

    html += '<div class="section-title">备注与来源<span class="line"></span></div>' +
      '<textarea class="textarea" data-draft-stone="note" rows="3" placeholder="例如：游戏内面板实测 20 次，出 8 级 1 次">' + U.esc(d.note || '') + '</textarea>' +
      '<input class="input" style="margin-top:8px" data-draft-stone="source" value="' + U.esc(d.source || '') + '" placeholder="来源 / 校准说明">';
    html += '</div>';
    html += '<div class="drawer-foot">' +
      '<button class="btn btn-primary" data-action="stone-save">' + icon('check') + '保存公式</button>' +
      '<button class="btn" data-action="stone-cancel">取消</button>' +
      '<span class="spacer"></span><button class="btn" data-action="close-drawer">关闭</button></div>';
    return html;
  }

  function collectStoneDraft() {
    if (!ui.drawer || ui.drawer.type !== 'stone' || !ui.drawer.draft) return null;
    const d = ui.drawer.draft;
    document.querySelectorAll('[data-draft-stone]').forEach(function (el) {
      const k = el.getAttribute('data-draft-stone');
      if (el.type === 'number' || k === 'target' || k === 'primary') d[k] = Number(el.value) || 0;
      else d[k] = el.value;
    });
    const inputs = [];
    document.querySelectorAll('[data-stone-input-row]').forEach(function (row) {
      const lv = row.querySelector('[data-si-level]');
      const qty = row.querySelector('[data-si-qty]');
      if (lv && qty) inputs.push({ level: Number(lv.value) || 1, qty: Math.max(1, Math.round(Number(qty.value) || 1)) });
    });
    const outcomes = [];
    document.querySelectorAll('[data-stone-outcome-row]').forEach(function (row) {
      const lv = row.querySelector('[data-so-level]');
      const ch = row.querySelector('[data-so-chance]');
      if (lv && ch) outcomes.push({ level: Number(lv.value) || 1, chance: Math.max(0, Math.min(100, Number(ch.value) || 0)) / 100 });
    });
    d.inputs = inputs;
    d.outcomes = outcomes;
    return d;
  }

  function saveStoneRecipe() {
    const d = collectStoneDraft();
    if (!d) return;
    const errors = [];
    if (!String(d.name || '').trim()) errors.push('请填写公式名称');
    if (d.target < 2) errors.push('目标等级至少为 2 级');
    if (!d.inputs.length) errors.push('至少需要一种投入材料');
    if (!d.outcomes.length) errors.push('至少需要一种产出');
    if (!d.outcomes.some(function (o) { return o.level === d.target; })) errors.push('产出里缺少目标等级（' + d.target + '级）');
    if (!d.outcomes.some(function (o) { return o.level === d.primary; })) errors.push('产出里缺少保底等级（' + d.primary + '级）');
    const sum = d.outcomes.reduce(function (a, o) { return a + o.chance; }, 0);
    if (sum > 1.0001) errors.push('产出概率合计不能超过 100%（当前 ' + U.fmtPct(sum, 1) + '）');
    if (d.energy < 0 || d.fee < 0) errors.push('加工费与精力不能为负');
    if (errors.length) {
      ui.drawer.errors = errors;
      ui.drawer.draft = Object.assign({}, d);
      renderDrawer();
      return;
    }
    const payload = Object.assign({}, d, { name: String(d.name).trim() });
    let saved;
    if (d.id) {
      Stone.updateRecipe(payload);
      saved = Stone.recipe(d.id);
    } else {
      saved = Stone.addRecipe(payload);
    }
    ui.drawer = { type: 'stone', id: saved.id, mode: 'view', draft: null, errors: [] };
    renderDrawer();
    render();
    toast('已保存五行石公式「' + saved.name + '」');
  }

  /* ------------------------------------------------------------------ */
  /* 配方抽屉                                                           */
  /* ------------------------------------------------------------------ */
  function openRecipe(id, mode) {
    const r = recipe(id);
    if (!r) return;
    document.body.classList.add('has-drawer');
    ui.lastFocus = document.activeElement;
    ui.drawer = {
      type: 'recipe',
      id: id,
      mode: mode === 'edit' ? 'edit' : 'view',
      draft: mode === 'edit' ? draftFromRecipe(r) : null,
      errors: []
    };
    renderDrawer();
  }

  function openNewRecipe(skillId) {
    const sk = skill(skillId);
    document.body.classList.add('has-drawer');
    ui.lastFocus = document.activeElement;
    ui.drawer = {
      type: 'recipe',
      id: null,
      mode: 'edit',
      errors: [],
      draft: {
        id: null,
        kind: sk.type === 'gather' ? 'gather' : 'craft',
        skillId: sk.id,
        name: '',
        level: sk.type === 'gather' ? 10 : 20,
        tier: 1,
        energy: sk.type === 'gather' ? settings().gatherEnergy : settings().craftEnergy,
        fee: 0,
        note: '',
        outputs: [{ item: '', qty: 1, newName: '' }],
        materials: sk.type === 'gather' ? [] : [{ item: '', qty: 1, newName: '' }],
        verified: false,
        origin: '自定义',
        custom: true
      }
    };
    renderDrawer();
  }

  function draftFromRecipe(r) {
    return {
      id: r.id, kind: r.kind, skillId: r.skillId, name: r.name, level: r.level,
      tier: r.tier, energy: r.energy, fee: r.fee || 0, note: r.note || '',
      outputs: r.outputs.map(function (o) { return { item: o.item, qty: o.qty, chance: o.chance == null ? 1 : o.chance, newName: '' }; }),
      materials: (r.materials || []).map(function (m) { return { item: m.item, qty: m.qty, newName: '' }; }),
      verified: r.verified, origin: r.origin, custom: r.custom
    };
  }

  function closeDrawer() {
    ui.drawer = null;
    document.body.classList.remove('has-drawer');
    $('#drawer-root').innerHTML = '';
    if (ui.lastFocus && ui.lastFocus.focus) {
      try { ui.lastFocus.focus(); } catch (e) { /* ignore */ }
    }
  }

  function renderDrawer() {
    const root = $('#drawer-root');
    if (!root) return;
    if (!ui.drawer) { root.innerHTML = ''; return; }
    let inner = '';
    if (ui.drawer.type === 'stone') {
      inner = ui.drawer.mode === 'edit' ? stoneDrawerEdit(ui.drawer.draft) : stoneDrawerView(ui.drawer.id);
    } else if (ui.drawer.mode === 'edit') {
      inner = drawerEditHTML(ui.drawer.draft);
    } else {
      const r = recipe(ui.drawer.id);
      if (!r) { closeDrawer(); return; }
      inner = drawerViewHTML(r);
    }
    root.innerHTML = '<div class="scrim show" data-action="close-drawer"></div>' +
      '<aside class="drawer show" id="drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title">' + inner + '</aside>';
    const focusEl = root.querySelector('[autofocus], .drawer-body input, .drawer-body select, .drawer-foot .btn-primary, .drawer-foot .btn');
    if (focusEl) setTimeout(function () { try { focusEl.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }, 30);
  }

  function drawerViewHTML(r) {
    const basis = currentBasis(params());
    const c = Calc.recipe(r, { serverId: Store.state.serverId, basis: basis });
    const sk = skill(r.skillId);
    const t = tier(r.tier);
    const profitCls = c.missing ? 'dim' : c.profit >= 0 ? 'pos' : 'neg';
    const parts = c.materials.map(function (m, i) {
      return { name: m.name, value: m.sub, color: ['#1D6FE0', '#2E9E78', '#E88A2E', '#A75BE0', '#E04A7A'][i % 5] };
    });
    if (c.fee > 0) parts.push({ name: '手续费', value: c.fee, color: '#64748B' });
    const totalParts = parts.reduce(function (s, p) { return s + p.value; }, 0);

    let html = '<div class="drawer-head"><div class="t">' +
      '<h2 id="drawer-title">' + U.esc(r.name) + ' ' + verifiedBadge(r) + '</h2>' +
      '<p>' + U.esc(sk.name) + ' · ' + U.esc(t.name) + ' · Lv.' + r.level + ' · ' + (r.kind === 'gather' ? '采集点' : '制造配方') + '</p></div>' +
      '<button class="icon-btn" data-action="close-drawer" aria-label="关闭">' + icon('x') + '</button></div>';

    html += '<div class="drawer-body">';
    html += '<div class="drawer-kpis">' +
      '<div class="drawer-kpi"><span>总成本</span><b>' + U.fmt(c.totalCost, 2) + '<small>金</small></b></div>' +
      '<div class="drawer-kpi"><span>税后产值</span><b>' + U.fmt(c.outputValue, 2) + '<small>金</small></b></div>' +
      '<div class="drawer-kpi"><span>单次利润</span><b class="' + profitCls + '">' + (c.missing ? '—' : U.fmtSigned(c.profit, 2)) + '<small>金</small></b></div>' +
    '</div>';
    html += '<div class="flex" style="margin-bottom:14px"><span class="badge ' + (c.missing ? 'badge-warning' : c.profit >= 0 ? 'badge-positive' : 'badge-danger') + '">' +
      (c.missing ? '存在缺价，收益被低估' : c.profit >= 0 ? '盈利' : '亏损') + '</span>' +
      '<span class="tiny dim">精力收益</span><b class="' + (c.missing ? 'dim' : c.perEnergy >= 0 ? 'pos' : 'neg') + '" style="font-size:16px">' + perEnergyText(c.perEnergy) + '</b><span class="tiny dim">金/精力</span>' +
      '<span class="spacer"></span><span class="tiny dim">' + (basis === 'min' ? '成本口径：取最低（仅成本）' : '成本口径：市场价') + '</span></div>';

    if (c.missing) {
      html += notice('该配方有 ' + (c.missingMaterials + c.missingOutputs) + ' 项未定价，计算按 0 计。请在下方或行情补齐。', 'warn');
      html += '<div style="height:12px"></div>';
    }

    html += '<div class="section-title">产物与售价<span class="line"></span></div>';
    html += '<div class="table-wrap" style="border-top:0"><table class="data compact"><thead><tr><th>产物</th><th class="num">数量 / 掉率</th><th class="num">单价（金）</th><th class="num">税前小计</th></tr></thead><tbody>' +
      c.outputs.map(function (o) {
        return '<tr><td>' + U.esc(o.name) + (o.missing ? ' <span class="badge badge-warning">缺价</span>' : '') + '</td>' +
          '<td class="num">' + qtyText(o) + '</td><td class="num">' + priceInput(o.itemId, { sm: true }) + '</td>' +
          '<td class="num strong">' + U.fmt(o.sub, 2) + '</td></tr>';
      }).join('') + '</tbody></table></div>';

    if (r.kind === 'craft') {
      html += '<div class="section-title">材料清单<span class="line"></span></div>';
      if (!c.materials.length) {
        html += emptyState('还没有材料', '点击下方「编辑配方」添加材料。', '', 'list');
      } else {
        html += '<div class="table-wrap" style="border-top:0"><table class="data compact"><thead><tr><th>材料</th><th class="num">数量</th><th class="num">单价（金）</th><th class="num">小计</th><th>来源</th></tr></thead><tbody>' +
          c.materials.map(function (m) {
            const src = m.source === 'craft'
              ? '<span class="badge badge-info" title="按自制成本计价">自制</span>'
              : '<span class="dim tiny">市场</span>';
            return '<tr><td>' + U.esc(m.name) + (m.missing ? ' <span class="badge badge-warning">缺价</span>' : '') + '</td>' +
              '<td class="num">' + m.qty + '</td><td class="num">' + priceInput(m.itemId, { sm: true }) + '</td>' +
              '<td class="num">' + U.fmt(m.sub, 2) + '</td><td>' + src + '</td></tr>';
          }).join('') + '</tbody></table></div>';
      }
      if (parts.length) {
        html += '<div class="section-title">成本构成<span class="line"></span></div>';
        html += '<div class="cost-bar">' + parts.map(function (p) {
          const w = totalParts ? Math.max(0, p.value / totalParts * 100) : 0;
          return '<span style="width:' + w.toFixed(1) + '%;background:' + p.color + '" title="' + U.esc(p.name) + ' ' + U.fmt(p.value, 2) + ' 金"></span>';
        }).join('') + '</div>';
        html += '<div class="cost-legend">' + parts.slice(0, 6).map(function (p) {
          return '<div class="row"><span class="sw" style="--sw:' + p.color + '"></span><span class="nm">' + U.esc(p.name) + '</span><span class="vv">' + U.fmt(p.value, 2) + '</span></div>';
        }).join('') + (parts.length > 6 ? '<div class="row"><span class="nm dim">其余 ' + (parts.length - 6) + ' 项</span></div>' : '') + '</div>';
      }
    }

    html += '<div class="section-title">精力与口径<span class="line"></span></div>';
    html += '<div class="info-rows">' +
      '<div class="info-row"><span class="k">单次精力</span><span class="v">' + U.fmtInt(c.energy) + ' 点</span></div>' +
      '<div class="info-row"><span class="k">手续费</span><span class="v">' + U.fmt(c.fee, 2) + ' 金</span></div>' +
      '<div class="info-row"><span class="k">材料成本</span><span class="v">' + U.fmt(c.materialCost, 2) + ' 金</span></div>' +
      '<div class="info-row"><span class="k">税前产值</span><span class="v">' + U.fmt(c.outputValueGross, 2) + ' 金</span></div>' +
      '<div class="info-row"><span class="k">交易税（' + U.fmtPct(c.taxRate, 0) + '）</span><span class="v down">−' + U.fmt(c.tax, 2) + ' 金</span></div>' +
      '<div class="info-row"><span class="k">满 ' + U.fmtInt(settings().energyBudget) + ' 精力可做</span><span class="v">' + (c.energy > 0 ? Math.floor(settings().energyBudget / c.energy) + ' 次' : '—') + '</span></div>' +
      '<div class="info-row"><span class="k">毛利率</span><span class="v">' + (c.margin == null ? '—' : U.fmtPct(c.margin, 1)) + '</span></div>' +
      '</div>';
    html += '<p class="tiny dim" style="line-height:16px;margin-top:10px">成本 = Σ（材料数量 × 单价）+ 手续费；利润 = 税后产值 − 成本；精力收益 = 利润 ÷ 精力。售价已扣交易税；暴击额外产出与署名溢价未自动计入。</p>';

    if (r.note) {
      html += '<div class="section-title">备注<span class="line"></span></div><p style="font-size:12px;line-height:18px;color:var(--muted)">' + U.esc(r.note) + '</p>';
    }
    html += '<div class="section-title">数据来源<span class="line"></span></div>' +
      '<div class="verification"><span class="' + (r.verified ? 'ok' : '') + '">' + (r.verified ? '配方已核验' : '待校验') + '</span><span>' + U.esc(r.origin || DATA.meta.disclaimer) + '</span></div>';

    html += '</div>';
    html += '<div class="drawer-foot">' +
      '<button class="btn" data-action="edit-recipe" data-id="' + U.esc(r.id) + '">' + icon('edit') + '编辑配方</button>' +
      (r.custom ? '<button class="btn btn-danger" data-action="delete-recipe" data-id="' + U.esc(r.id) + '">' + icon('trash') + '删除</button>' :
        '<button class="btn" data-action="reset-recipe" data-id="' + U.esc(r.id) + '">' + icon('refresh') + '恢复示例</button>') +
      '<span class="spacer"></span><button class="btn" data-action="close-drawer">关闭</button></div>';
    return html;
  }

  function itemOptions(selected, placeholder, preferKind) {
    let html = '<option value="">' + U.esc(placeholder || '选择物品') + '</option>';
    const groups = {};
    Store.state.items.forEach(function (it) {
      const k = it.skillId + '|' + (it.kind === 'product' ? 'p' : 'm');
      if (!groups[k]) groups[k] = [];
      groups[k].push(it);
    });
    const order = preferKind === 'material' ? ['m', 'p'] : ['p', 'm'];
    DATA.skills.forEach(function (s) {
      order.forEach(function (kindKey) {
        const list = (groups[s.id + '|' + kindKey] || []).slice().sort(function (a, b) { return a.name.localeCompare(b.name, 'zh-CN'); });
        if (!list.length) return;
        html += '<optgroup label="' + U.esc(s.name + ' · ' + (kindKey === 'p' ? '成品' : '材料')) + '">';
        list.forEach(function (it) {
          html += '<option value="' + U.esc(it.id) + '"' + (selected === it.id ? ' selected' : '') + '>' + U.esc(it.name) + '（' + U.esc(tier(it.tier).name) + '）</option>';
        });
        html += '</optgroup>';
      });
    });
    html += '<option value="__new__"' + (selected === '__new__' ? ' selected' : '') + '>＋ 新建物品…</option>';
    return html;
  }

  function drawerEditHTML(d) {
    const isNew = !d.id;
    const errs = ui.drawer.errors || [];
    let html = '<div class="drawer-head"><div class="t"><h2 id="drawer-title">' + (isNew ? '新增' : '编辑') + (d.kind === 'gather' ? '采集点' : '配方') + ' ' +
      '<span class="badge badge-custom">' + (isNew ? '新建' : '编辑中') + '</span></h2>' +
      '<p>' + U.esc(skill(d.skillId).name) + ' · 修改后立即参与全站收益计算</p></div>' +
      '<button class="icon-btn" data-action="close-drawer" aria-label="关闭">' + icon('x') + '</button></div>';
    html += '<div class="drawer-body">';
    if (errs.length) {
      html += '<div class="notice" style="margin-bottom:14px">' + icon('alert') + '<div><b>请检查：</b><ul style="margin:4px 0 0;padding-left:16px">' +
        errs.map(function (e) { return '<li>' + U.esc(e) + '</li>'; }).join('') + '</ul></div></div>';
    }
    html += '<div class="form-grid">' +
      '<label class="form-field full"><span>名称</span><input class="input" data-draft-field="name" value="' + U.esc(d.name) + '" placeholder="例如：玄元星平衫 / 采集·马草坡"></label>' +
      '<label class="form-field"><span>技艺</span><select class="select" data-draft-field="skillId" data-draft-select>' +
        DATA.skills.map(function (s) { return '<option value="' + s.id + '"' + (d.skillId === s.id ? ' selected' : '') + '>' + U.esc(s.name) + '（' + (s.type === 'gather' ? '采集' : '制造') + '）</option>'; }).join('') +
      '</select></label>' +
      '<label class="form-field"><span>类型</span><select class="select" data-draft-field="kind" data-draft-select>' +
        '<option value="craft"' + (d.kind === 'craft' ? ' selected' : '') + '>制造配方</option>' +
        '<option value="gather"' + (d.kind === 'gather' ? ' selected' : '') + '>采集点</option></select></label>' +
      '<label class="form-field"><span>品阶</span><select class="select" data-draft-field="tier">' +
        DATA.tiers.map(function (t) { return '<option value="' + t.id + '"' + (String(d.tier) === String(t.id) ? ' selected' : '') + '>' + U.esc(t.name) + '</option>'; }).join('') +
      '</select></label>' +
      '<label class="form-field"><span>需求等级（1–50）</span><input class="input" type="number" min="1" max="50" step="1" data-draft-field="level" value="' + d.level + '"></label>' +
      '<label class="form-field"><span>单次精力</span><input class="input" type="number" min="0" step="1" data-draft-field="energy" value="' + d.energy + '"></label>' +
      '<label class="form-field"><span>手续费（金）</span><input class="input" type="number" min="0" step="0.01" data-draft-field="fee" value="' + d.fee + '"></label>' +
      '<label class="form-field full"><span>备注（选填）</span><input class="input" data-draft-field="note" value="' + U.esc(d.note) + '" placeholder="材料来源、暴击产出、署名等说明"></label>' +
    '</div>';

    html += '<div class="section-title">' + (d.kind === 'gather' ? '单次产出' : '产物') + '<span class="line"></span>' +
      '<button class="btn btn-sm" data-action="add-out">' + icon('plus') + '添加产出</button></div>';
    html += '<div class="mat-head out"><span>物品</span><span>数量</span><span></span></div>';
    d.outputs.forEach(function (o, i) {
      html += '<div class="mat-row out" data-output-row data-index="' + i + '">' +
        '<div class="field-stack"><select class="select" data-out-item data-draft-select>' + itemOptions(o.item, '选择物品', d.kind === 'gather' ? 'material' : 'product') + '</select>' +
          (o.item === '__new__' ? '<input class="input" data-out-new placeholder="新物品名称" value="' + U.esc(o.newName || '') + '">' : '') +
          (d.kind === 'gather' ? '<label class="chance-line"><span>掉率</span><input class="input" type="number" min="0" max="100" step="0.1" data-out-chance value="' + ((o.chance == null ? 1 : o.chance) * 100).toFixed(1).replace(/\.0$/, '') + '"><span>%</span></label>' : '') +
        '</div>' +
        '<input class="input" type="number" min="0" step="1" data-out-qty value="' + o.qty + '" aria-label="产出数量">' +
        '<button class="del" data-action="remove-out" data-index="' + i + '" aria-label="删除产出">' + icon('trash') + '</button>' +
      '</div>';
    });

    if (d.kind === 'craft') {
      html += '<div class="section-title">材料<span class="line"></span>' +
        '<button class="btn btn-sm" data-action="add-mat">' + icon('plus') + '添加材料</button></div>';
      html += '<div class="mat-head"><span>物品</span><span>数量</span><span class="num">参考小计</span><span></span></div>';
      if (!d.materials.length) {
        html += '<div class="tiny dim" style="padding:8px 0">还没有材料，点击「添加材料」。</div>';
      }
      d.materials.forEach(function (m, i) {
        const it = m.item && m.item !== '__new__' ? item(m.item) : null;
        const price = it ? Store.price(Store.state.serverId, it.id).v : 0;
        const subtotal = price * (Number(m.qty) || 0);
        html += '<div class="mat-row" data-material-row data-index="' + i + '">' +
          '<div class="field-stack"><select class="select" data-mat-item data-draft-select>' + itemOptions(m.item, '选择物品', 'material') + '</select>' +
            (m.item === '__new__' ? '<input class="input" data-mat-new placeholder="新材料名称" value="' + U.esc(m.newName || '') + '">' : '') +
          '</div>' +
          '<input class="input" type="number" min="0" step="1" data-mat-qty value="' + m.qty + '" aria-label="材料数量">' +
          '<span class="sub">' + (it ? U.fmt(subtotal, 2) : '—') + '</span>' +
          '<button class="del" data-action="remove-mat" data-index="' + i + '" aria-label="删除材料">' + icon('trash') + '</button>' +
        '</div>';
      });
      html += '<p class="tiny dim" style="margin-top:6px">只填数量，单价统一在「行情」维护；参考小计按当前本服价格。</p>';
    }

    html += '</div>';
    html += '<div class="drawer-foot">' +
      '<button class="btn btn-primary" data-action="save-recipe">' + icon('check') + '保存</button>' +
      '<button class="btn" data-action="cancel-edit">取消</button>' +
      '<span class="spacer"></span>' +
      (d.id && !d.custom ? '<button class="btn btn-danger" data-action="delete-recipe" data-id="' + U.esc(d.id) + '">删除</button>' : '') +
      (d.id && d.custom ? '<button class="btn btn-danger" data-action="delete-recipe" data-id="' + U.esc(d.id) + '">删除</button>' : '') +
      '</div>';
    return html;
  }

  function collectDraft() {
    const d = ui.drawer && ui.drawer.draft;
    if (!d) return;
    const root = $('#drawer');
    if (!root) return;
    root.querySelectorAll('[data-draft-field]').forEach(function (el) {
      const k = el.getAttribute('data-draft-field');
      d[k] = el.type === 'number' ? Number(el.value) : el.value;
    });
    d.outputs = Array.prototype.map.call(root.querySelectorAll('[data-output-row]'), function (row) {
      const it = row.querySelector('[data-out-item]');
      const qty = row.querySelector('[data-out-qty]');
      const nn = row.querySelector('[data-out-new]');
      const ch = row.querySelector('[data-out-chance]');
      return { item: it ? it.value : '', qty: qty ? Number(qty.value) : 0, chance: ch ? Math.max(0, Math.min(1, Number(ch.value) / 100)) : 1, newName: nn ? nn.value : '' };
    });
    d.materials = Array.prototype.map.call(root.querySelectorAll('[data-material-row]'), function (row) {
      const it = row.querySelector('[data-mat-item]');
      const qty = row.querySelector('[data-mat-qty]');
      const nn = row.querySelector('[data-mat-new]');
      return { item: it ? it.value : '', qty: qty ? Number(qty.value) : 0, newName: nn ? nn.value : '' };
    });
  }

  function validateDraft(d) {
    const errors = [];
    if (!d.name || !d.name.trim()) errors.push('名称不能为空。');
    if (!(d.energy > 0)) errors.push('单次精力必须大于 0。');
    if (d.level < 1 || d.level > 50) errors.push('需求等级需要在 1–50 之间。');
    if (d.fee < 0) errors.push('手续费不能为负数。');
    if (!d.outputs.length) errors.push('至少需要一个产物。');
    d.outputs.forEach(function (o, i) {
      if (!o.item) errors.push('产物 ' + (i + 1) + ' 尚未选择物品。');
      if (o.item === '__new__' && !(o.newName || '').trim()) errors.push('产物 ' + (i + 1) + ' 需要填写新物品名称。');
      if (!(o.qty > 0)) errors.push('产物 ' + (i + 1) + ' 数量必须大于 0。');
    });
    if (d.kind === 'craft') {
      if (!d.materials.length) errors.push('制造配方至少需要一种材料。');
      d.materials.forEach(function (m, i) {
        if (!m.item) errors.push('材料 ' + (i + 1) + ' 尚未选择物品。');
        if (m.item === '__new__' && !(m.newName || '').trim()) errors.push('材料 ' + (i + 1) + ' 需要填写新物品名称。');
        if (!(m.qty > 0)) errors.push('材料 ' + (i + 1) + ' 数量必须大于 0。');
      });
      const ids = d.materials.filter(function (m) { return m.item && m.item !== '__new__'; }).map(function (m) { return m.item; });
      if (new Set(ids).size !== ids.length) errors.push('同一种材料重复出现，请合并数量。');
      const outIds = d.outputs.filter(function (o) { return o.item && o.item !== '__new__'; }).map(function (o) { return o.item; });
      outIds.forEach(function (id) {
        if (ids.indexOf(id) !== -1) errors.push('产物「' + (item(id) ? item(id).name : id) + '」不能同时作为材料。');
      });
    }
    return errors;
  }

  function saveRecipe() {
    collectDraft();
    const d = ui.drawer.draft;
    const errors = validateDraft(d);
    if (errors.length) {
      ui.drawer.errors = errors;
      renderDrawer();
      return;
    }
    // 解析新建物品
    let newNames = [];
    function resolve(entry, kind) {
      if (entry.item !== '__new__') return entry.item;
      const name = entry.newName.trim();
      const exists = Store.state.items.find(function (i) { return i.name === name && i.skillId === d.skillId; });
      if (exists) return exists.id;
      const it = Store.addItem({ name: name, skillId: d.skillId, kind: kind, tier: d.tier });
      newNames.push(name);
      return it.id;
    }
    const outputs = d.outputs.map(function (o) {
      return { item: resolve(o, 'product'), qty: Math.max(1, Math.round(Number(o.qty) || 1)), chance: Math.max(0, Math.min(1, Number(o.chance == null ? 1 : o.chance))) };
    });
    const materials = d.kind === 'craft' ? d.materials.map(function (m) {
      return { item: resolve(m, 'material'), qty: Math.max(1, Math.round(Number(m.qty) || 1)) };
    }) : [];
    const rec = {
      id: d.id || null,
      kind: d.kind,
      skillId: d.skillId,
      name: d.name.trim(),
      level: Math.max(1, Math.min(50, Math.round(d.level))),
      tier: Number(d.tier) || 1,
      energy: Math.max(1, Math.round(d.energy)),
      fee: Math.max(0, Number(d.fee) || 0),
      note: d.note || '',
      outputs: outputs,
      materials: materials,
      verified: false,
      origin: d.id ? '用户编辑 · 原：' + (recipe(d.id) ? (recipe(d.id).origin || '示例') : '示例') : '自定义配方',
      custom: d.custom
    };
    let saved;
    if (d.id) {
      Store.updateRecipe(rec);
      saved = recipe(d.id);
    } else {
      saved = Store.addRecipe(rec);
    }
    ui.drawer = { type: 'recipe', id: saved.id, mode: 'view', draft: null, errors: [] };
    renderDrawer();
    render();
    toast('已保存「' + saved.name + '」');
    if (newNames.length) {
      toast('新增物品：' + newNames.join('、') + '，记得填写本服价格', 'warn');
    }
  }

  /* ------------------------------------------------------------------ */
  /* 弹窗                                                               */
  /* ------------------------------------------------------------------ */
  function openModal(type, data) {
    ui.lastFocus = document.activeElement;
    document.body.classList.add('has-modal');
    ui.modal = { type: type, data: data || {} };
    renderModal();
  }
  function closeModal() {
    ui.modal = null;
    document.body.classList.remove('has-modal');
    $('#modal-root').innerHTML = '';
    if (ui.lastFocus && ui.lastFocus.focus) {
      try { ui.lastFocus.focus(); } catch (e) { /* ignore */ }
    }
  }

  function renderModal() {
    const root = $('#modal-root');
    if (!root) return;
    if (!ui.modal) { root.innerHTML = ''; return; }
    let title = '', body = '', foot = '';
    if (ui.modal.type === 'settings') {
      title = '设置与备份';
      body = settingsBody();
      foot = '<button class="btn btn-primary" data-action="save-settings">保存设置</button><button class="btn" data-action="close-modal">关闭</button>';
    } else if (ui.modal.type === 'data') {
      title = '数据说明与版本核验';
      body = dataBody();
      foot = '<button class="btn btn-primary" data-action="open-settings">打开设置</button><button class="btn" data-action="close-modal">关闭</button>';
    } else if (ui.modal.type === 'add-server') {
      title = '新增服务器';
      body = '<div class="form-grid"><label class="form-field"><span>服务器名称</span><input class="input" id="new-server-name" placeholder="例如：梦江南" autofocus></label>' +
        '<label class="form-field"><span>大区 / 备注</span><input class="input" id="new-server-region" placeholder="例如：电信一区"></label></div>' +
        '<p class="tiny dim" style="margin-top:10px">新服务器会拥有一套独立的价格空间，配方库共享。</p>';
      foot = '<button class="btn btn-primary" data-action="add-server-save">新增并切换</button><button class="btn" data-action="close-modal">取消</button>';
    } else if (ui.modal.type === 'import-json') {
      title = '导入备份';
      body = '<p class="tiny dim" style="margin-bottom:10px">导入会覆盖当前配方、价格与设置。建议先导出当前备份。</p>' +
        '<textarea class="textarea" id="import-json-text" rows="10" placeholder="粘贴 JSON 备份内容，或选择文件"></textarea>' +
        '<div class="flex" style="margin-top:8px"><input type="file" id="import-json-file" accept="application/json,.json">' +
        '<span class="spacer"></span><span class="tiny dim">格式：剑网三物价助手 JSON 备份</span></div>';
      foot = '<button class="btn btn-primary" data-action="import-json-apply">覆盖并导入</button><button class="btn" data-action="close-modal">取消</button>';
    } else if (ui.modal.type === 'excel') {
      title = '下载 Excel 工作簿';
      body = '<div class="excel-download-list">' + EXCEL_DOWNLOADS.map(function (it) {
        return '<a class="excel-download-item" href="' + it.href + '" download="' + U.esc(it.file) + '">' +
          icon('download') +
          '<span class="stack"><span class="name">' + U.esc(it.name) + '</span><span class="desc">' + U.esc(it.desc) + '</span></span>' +
          '<span class="ext">' + U.esc(it.ext) + '</span></a>';
      }).join('') + '</div>' +
        '<p class="tiny dim" style="margin-top:12px">宏版需要启用宏；无宏自动版依赖 Excel Power Query；WPS / LibreOffice 建议用无宏静态版或 CSV。</p>';
      foot = '<button class="btn" data-action="close-modal">关闭</button>';
    } else if (ui.modal.type === 'confirm') {
      title = ui.modal.data.title || '确认操作';
      body = '<p style="font-size:13px;line-height:20px;color:var(--muted)">' + U.esc(ui.modal.data.message || '') + '</p>';
      foot = '<button class="btn ' + (ui.modal.data.danger ? 'btn-danger' : 'btn-primary') + '" data-action="confirm-yes">' +
        U.esc(ui.modal.data.confirmText || '确认') + '</button><button class="btn" data-action="confirm-no">取消</button>';
    }
    root.innerHTML = '<div class="scrim show modal-scrim" data-action="close-modal"></div>' +
      '<div class="modal-wrap" role="dialog" aria-modal="true" aria-labelledby="modal-title">' +
        '<div class="modal-card"><div class="modal-head"><h2 id="modal-title">' + U.esc(title) + '</h2>' +
        '<button class="icon-btn" data-action="close-modal" aria-label="关闭">' + icon('x') + '</button></div>' +
        '<div class="modal-body">' + body + '</div><div class="modal-foot">' + foot + '</div></div></div>';
    const focusEl = root.querySelector('[autofocus], .modal-body input, .modal-body select, .modal-body textarea, .modal-foot .btn-primary');
    if (focusEl) setTimeout(function () { try { focusEl.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }, 30);
  }

  function settingsBody() {
    const st = settings();
    return '<div class="form-grid">' +
      '<label class="form-field"><span>精力预算（模拟用）</span><input class="input" type="number" min="0" step="100" data-setting="energyBudget" value="' + st.energyBudget + '"><span class="hint">用于满精力预估与对比次数</span></label>' +
      '<label class="form-field"><span>交易税率（%）</span><input class="input" type="number" min="0" max="100" step="0.5" data-setting="taxRate" value="' + U.fmt(currentTaxRate() * 100, 1) + '"><span class="hint">默认 5%，按产物售价扣除</span></label>' +
      '<label class="form-field"><span>默认主题</span><select class="select" data-setting="theme"><option value="light"' + (st.theme === 'light' ? ' selected' : '') + '>亮色</option><option value="dark"' + (st.theme !== 'light' ? ' selected' : '') + '>暗色</option></select></label>' +
      '<label class="form-field"><span>新建采集默认精力</span><input class="input" type="number" min="1" step="1" data-setting="gatherEnergy" value="' + st.gatherEnergy + '"></label>' +
      '<label class="form-field"><span>新建制造默认精力</span><input class="input" type="number" min="1" step="1" data-setting="craftEnergy" value="' + st.craftEnergy + '"></label>' +
      '<label class="form-field full"><span>默认成本口径</span><select class="select" data-setting="basis"><option value="market"' + (st.basis !== 'min' ? ' selected' : '') + '>市场价</option><option value="min"' + (st.basis === 'min' ? ' selected' : '') + '>取最低（仅优化材料成本）</option></select></label>' +
    '</div>' +
    '<div class="section-title">服务器管理<span class="line"></span><span class="tiny dim">' + Store.state.servers.length + ' 个</span></div>' +
    '<div class="info-rows" style="max-height:190px;overflow:auto;border:1px solid var(--border);border-radius:6px;padding:0 10px">' +
      Store.state.servers.map(function (s) {
        return '<div class="info-row"><span><b>' + U.esc(s.name) + '</b> <span class="tiny dim">' + U.esc(s.region || '') + '</span>' +
          (s.id === Store.state.serverId ? ' <span class="badge badge-info">当前</span>' : '') + '</span>' +
          '<span><button class="btn btn-sm btn-danger" data-action="remove-server" data-id="' + U.esc(s.id) + '"' + (Store.state.servers.length <= 1 ? ' disabled' : '') + '>移除</button></span></div>';
      }).join('') +
    '</div>' +
    '<div class="flex" style="margin-top:8px"><input class="input" id="settings-new-server" placeholder="新服务器名称" style="flex:1">' +
      '<input class="input" id="settings-new-region" placeholder="大区" style="width:110px">' +
      '<button class="btn btn-sm btn-primary" data-action="add-server-save">新增</button></div>' +
    '<div class="section-title">数据<span class="line"></span></div>' +
    '<div class="flex" style="flex-wrap:wrap">' +
      '<button class="btn btn-sm" data-action="export-json">' + icon('download') + '导出 JSON 备份</button>' +
      '<button class="btn btn-sm" data-action="open-import-json">' + icon('upload') + '导入备份</button>' +
      '<button class="btn btn-sm" data-action="clear-prices">' + icon('refresh') + '清空本服价格</button>' +
      '<button class="btn btn-sm" data-action="reset-catalog">' + icon('refresh') + '恢复示例配方</button>' +
      '<button class="btn btn-sm" data-action="stone-reset-all">' + icon('refresh') + '恢复默认五行石公式</button>' +
      '<button class="btn btn-sm btn-danger" data-action="reset-all">' + icon('trash') + '重置全部数据</button>' +
    '</div>' +
    '<div class="section-title">安装到桌面<span class="line"></span></div>' +
    '<div class="info-rows">' +
      '<div class="info-row"><span class="k">iPhone / iPad</span><span class="v">Safari 底部分享 → 添加到主屏幕</span></div>' +
      '<div class="info-row"><span class="k">Android</span><span class="v">Chrome 菜单 → 安装应用 / 添加到主屏幕</span></div>' +
      '<div class="info-row"><span class="k">访问方式</span><span class="v">需 HTTPS；局域网 http 或 App 内置浏览器无法安装</span></div>' +
      '<div class="info-row"><span class="k">找不到选项</span><span class="v">退出私密浏览；检查屏幕使用时间限制；用 Safari 打开</span></div>' +
    '</div>' +
    '<div class="flex" style="margin-top:8px"><button class="btn btn-sm" data-action="show-install">' + icon('external') + '查看安装说明</button></div>' +
    '<div class="section-title">应用<span class="line"></span></div>' +
    '<div class="flex" style="flex-wrap:wrap;align-items:center;gap:10px">' +
      '<button class="btn btn-sm" data-action="check-update">' + icon('refresh') + '检查更新</button>' +
      '<span class="tiny dim">当前版本 ' + U.esc(appVersion()) + '</span>' +
      '<span class="tiny dim">PWA 会自动检测，也可以手动检查</span>' +
    '</div>' +
    '<div class="verification" style="margin-top:12px"><span class="ok">' + U.esc(DATA.meta.version) + '</span><span>数据版本 ' + U.esc(DATA.meta.catalogVersion) +
      ' · 核验于 ' + U.esc(DATA.meta.verifiedAt) + ' · 自定义配方 ' + Store.state.recipes.filter(function (r) { return r.custom; }).length + ' 个</span></div>';
  }

  function dataBody() {
    const src = DATA.meta.sources.map(function (s) {
      return '<div style="padding:8px 0;border-bottom:1px solid var(--border-soft)">' +
        '<a href="' + U.esc(s.url) + '" target="_blank" rel="noopener" style="font-weight:600;color:var(--text)">' + U.esc(s.label) + ' ' + icon('external') + '</a>' +
        '<div class="tiny dim" style="margin-top:3px;line-height:16px">' + U.esc(s.note) + '</div></div>';
    }).join('');
    return '<div class="verification" style="margin-bottom:14px"><span class="ok">已核验</span><span>版本：' + U.esc(DATA.meta.version) +
      ' · 核验日期：' + U.esc(DATA.meta.verifiedAt) + ' · 数据版本：' + U.esc(DATA.meta.catalogVersion) + '</span></div>' +
      '<div class="section-title">当前版本要点<span class="line"></span></div>' +
      '<ul style="margin:0;padding-left:18px;font-size:12px;line-height:20px;color:var(--muted)">' +
        '<li>制造技艺：<b style="color:var(--text)">锻造、缝纫、制药、烹饪、梓匠</b>；采集技艺：神农、采金、庖丁。</li>' +
        '<li>技艺等级重返 50 级，并新增「等级突破」；突破可提高制造暴击率。</li>' +
        '<li>紫色及以上产物带制作者署名；面对面交易/邮寄保留，上架交易行会抹除。</li>' +
        '<li>现有配方不删除；新配方与新材料在过云岭、云州、渝州、陕州探索与训练师处获得。</li>' +
        '<li>家园相关采集与梓匠配方等级已下调至 1 级；马草、路菜、挂件包亦下调。</li>' +
      '</ul>' +
      '<div class="section-title">计算口径<span class="line"></span></div>' +
      '<div class="info-rows">' +
        '<div class="info-row"><span class="k">材料成本</span><span class="v">Σ（数量 × 本服单价）</span></div>' +
        '<div class="info-row"><span class="k">总成本</span><span class="v">材料成本 + 手续费</span></div>' +
        '<div class="info-row"><span class="k">税前产值</span><span class="v">Σ（产物数量 × 本服单价）</span></div>' +
        '<div class="info-row"><span class="k">交易税</span><span class="v">税前产值 × ' + U.fmtPct(currentTaxRate(), 0) + '（可改）</span></div>' +
        '<div class="info-row"><span class="k">税后产值</span><span class="v">税前产值 − 交易税</span></div>' +
        '<div class="info-row"><span class="k">精力收益</span><span class="v">（税后产值 − 总成本）÷ 精力</span></div>' +
        '<div class="info-row"><span class="k">取最低口径</span><span class="v">逐层取低，仅优化成本、不计中间精力</span></div>' +
        '<div class="info-row"><span class="k">当前收录</span><span class="v">' + U.esc(DATA.meta.scope || '') + '</span></div>' +
      '</div>' +
      '<div class="section-title">五行石口径<span class="line"></span></div>' +
      '<div class="info-rows">' +
        '<div class="info-row"><span class="k">快速合成</span><span class="v">直接消耗 1 级石头，按游戏内快速精炼面板的加工费与精力</span></div>' +
        '<div class="info-row"><span class="k">最优合成</span><span class="v">低级自产、逐级合成；单颗成本含前序金币与累计精力</span></div>' +
        '<div class="info-row"><span class="k">7/8 级</span><span class="v">当前赛季无稳定保底公式；默认爆率 0，按盈亏线分析</span></div>' +
        '<div class="info-row"><span class="k">公式可编辑</span><span class="v">五行石页 → 任意公式的编辑按钮；可改材料、数量、加工费、精力、产物概率</span></div>' +
      '</div>' +
      '<div class="section-title">重要边界<span class="line"></span></div>' +
      '<div class="notice">' + icon('alert') + '<div>' +
        '<b>制造配方/等级/精力/材料/产出范围来自 JX3BOX 技艺助手 API（2026-11-18）；产出价优先用样本价，缺失/异常时按成本估算示例。</b>' +
        '旧版本（90/100/130 级）数值不适用；采集为待实测示例。采集在游戏内消耗体力，本工具按精力口径统一折算，可在设置中调整默认值。' +
        '交易税已按设置中的税率从售价扣除；暴击额外产出、署名溢价与市场深度未自动计入。五行石 7/8 级无稳定保底公式，默认爆率仅用于盈亏线，可在五行石页编辑。' +
      '</div></div>' +
      '<div class="section-title">来源<span class="line"></span></div>' + src +
      '<p class="tiny dim" style="margin-top:10px">' + U.esc(DATA.meta.disclaimer) + '</p>';
  }

  function confirmDialog(opts) {
    openModal('confirm', opts);
  }

  /* ------------------------------------------------------------------ */
  /* 导出                                                               */
  /* ------------------------------------------------------------------ */
  function csvAnalysis() {
    const p = params();
    const basis = currentBasis(p);
    let rows = filterRows(Calc.rows({ serverId: Store.state.serverId, basis: basis }), p);
    if (p.complete !== '0') rows = rows.filter(function (r) { return !r.calc.missing; });
    rows = sortRows(rows, p.sort || 'perEnergy', p.dir || 'desc');
    const out = [['排名', '配方', '技艺', '类型', '品阶', '等级', '产物', '材料成本', '手续费', '总成本', '税前产值', '交易税', '税后产值', '利润', '精力', '精力收益(金/精力)', '毛利率', '数据状态', '核验状态']];
    rows.forEach(function (r, i) {
      out.push([
        i + 1, r.recipe.name, r.skill.name, r.type === 'gather' ? '采集' : '制造', r.tier.name, r.recipe.level,
        r.outputNames, U.round(r.calc.materialCost, 2), U.round(r.calc.fee, 2), U.round(r.calc.totalCost, 2),
        U.round(r.calc.outputValueGross, 2), U.round(r.calc.tax, 2), U.round(r.calc.outputValue, 2), U.round(r.calc.profit, 2), r.calc.energy,
        r.calc.perEnergy == null ? '' : U.round(r.calc.perEnergy, 2),
        r.calc.margin == null ? '' : U.fmtPct(r.calc.margin, 1),
        r.calc.missing ? '缺价' : r.calc.profit < 0 ? '亏损' : '正常',
        r.recipe.custom ? '自定义' : r.recipe.verified ? '配方已核验' : '示例'
      ]);
    });
    U.download('剑网三物价助手_精力收益_' + server().name + '_' + new Date().toISOString().slice(0, 10) + '.csv', U.csv(out), 'text/csv;charset=utf-8');
    toast('已导出 ' + rows.length + ' 条收益数据');
  }

  function csvStones() {
    const serverId = Store.state.serverId;
    const rows = Stone.rows({ serverId: serverId });
    const out = [['目标', '方式', '公式', '投入', '加工费', '精力/次', '出目标级概率', '单次金币', '单颗成本', '税后净价', '利润/颗或次', '精力收益', '盈亏平衡爆率', '来源']];
    rows.forEach(function (r) {
      out.push([
        r.target + '级', r.method, r.recipe.name, stoneInputsText(r.recipe), U.round(r.fee, 4), U.round(r.totalEnergy, 1),
        U.fmtPct(r.targetChance, 2), U.round(r.cost, 2), Number.isFinite(r.costPerTarget) ? U.round(r.costPerTarget, 2) : '',
        U.round(r.targetNet, 2),
        r.target >= 7 ? U.round(r.profitPerAttempt, 2) : (r.profitPerTarget == null ? '' : U.round(r.profitPerTarget, 2)),
        r.target >= 7 ? (r.perEnergyAttempt == null ? '' : U.round(r.perEnergyAttempt, 3)) : (r.perEnergyTarget == null ? '' : U.round(r.perEnergyTarget, 3)),
        r.breakEven && r.breakEven.p != null ? U.fmtPct(r.breakEven.p, 2) : '',
        r.recipe.source || ''
      ]);
    });
    U.download('剑网三物价助手_五行石_' + server().name + '_' + new Date().toISOString().slice(0, 10) + '.csv', U.csv(out), 'text/csv;charset=utf-8');
    toast('已导出 ' + rows.length + ' 条五行石公式');
  }

  function csvStonePrices() {
    const serverId = Store.state.serverId;
    const updated = Stone.priceUpdatedAt ? Stone.priceUpdatedAt() : 0;
    const out = [['等级', '物品', '本服单价(金)', '税后净价(金)', '价格状态', '更新时间', '核验状态']];
    Stone.levels.forEach(function (l) {
      const p = Stone.price(serverId, l.level);
      out.push([
        l.level + '级', l.name, p.missing ? '' : U.round(p.v, 2), U.round(Stone.netPrice(serverId, l.level), 2),
        p.missing ? '缺价' : p.user ? '已校准' : '行情/示例',
        p.user ? U.fmtTime(p.t) : U.fmtTime(updated),
        '1-8级五行石'
      ]);
    });
    U.download('剑网三物价助手_五行石价格_' + server().name + '_' + new Date().toISOString().slice(0, 10) + '.csv', U.csv(out), 'text/csv;charset=utf-8');
    toast('已导出 ' + Stone.levels.length + ' 条五行石价格');
  }

  function csvPrices() {
    const items = filteredItems(params());
    const out = [['物品', '技艺', '类型', '品阶', '来源', '本服单价(金)', '价格状态', '更新时间', '核验状态', '来源说明']];
    items.forEach(function (it) {
      const p = Store.price(Store.state.serverId, it.id);
      out.push([
        it.name, skill(it.skillId).name, it.kind === 'product' ? '成品' : '材料', tier(it.tier).name,
        it.source, p.missing ? '' : U.round(p.v, 2), p.missing ? '缺价' : p.user ? '已校准' : '示例价',
        p.user ? U.fmtTime(p.t) : '示例', it.custom ? '自定义' : it.verified ? '名目已核验' : '未核验', it.origin || ''
      ]);
    });
    const stoneUpdated = Stone.priceUpdatedAt ? Stone.priceUpdatedAt() : 0;
    (Stone.levels || []).forEach(function (l) {
      const sp = Stone.price(Store.state.serverId, l.level);
      const t = DATA.tiers.find(function (x) { return x.id === l.quality; });
      out.push([
        l.name, '五行石', '材料', t ? t.name : '—', '交易行',
        sp.missing ? '' : U.round(sp.v, 2),
        sp.missing ? '缺价' : sp.user ? '已校准' : '行情价',
        sp.user ? U.fmtTime(sp.t) : U.fmtTime(stoneUpdated),
        '1-8级五行石', '与五行石合成页共用'
      ]);
    });
    U.download('剑网三物价助手_行情_' + server().name + '_' + new Date().toISOString().slice(0, 10) + '.csv', U.csv(out), 'text/csv;charset=utf-8');
    toast('已导出 ' + (items.length + (Stone.levels || []).length) + ' 条价格（含五行石）');
  }

  function exportChartPNG(targetId, filename) {
    const wrap = document.getElementById(targetId);
    const svg = wrap ? wrap.querySelector('svg') : null;
    if (!svg) { toast('没有可导出的图表', 'error'); return; }
    const clone = svg.cloneNode(true);
    clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    const vb = svg.viewBox && svg.viewBox.baseVal;
    const w = vb && vb.width ? vb.width : 760;
    const h = vb && vb.height ? vb.height : 360;
    const scale = 2;
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(w * scale);
    canvas.height = Math.round(h * scale);
    const ctx = canvas.getContext('2d');
    ctx.scale(scale, scale);
    ctx.fillStyle = ui.theme === 'light' ? '#ffffff' : '#020817';
    ctx.fillRect(0, 0, w, h);
    const data = new XMLSerializer().serializeToString(clone);
    const img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 0, 0, w, h);
      canvas.toBlob(function (blob) {
        U.download(filename + '_' + server().name + '.png', blob);
        toast('图表已导出 PNG');
      }, 'image/png');
    };
    img.onerror = function () { toast('图表导出失败', 'error'); };
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(data);
  }

  function downloadPriceTemplate() {
    const rows = [['物品名', '价格']];
    Store.state.items.forEach(function (it) { rows.push([it.name, '']); });
    U.download('剑网三物价助手_价格模板.csv', U.csv(rows), 'text/csv;charset=utf-8');
    toast('已下载价格录入模板');
  }

  /* ------------------------------------------------------------------ */
  /* 事件                                                               */
  /* ------------------------------------------------------------------ */
  function handleAction(el, e) {
    const action = el.getAttribute('data-action');
    const id = el.getAttribute('data-id');
    switch (action) {
      case 'close-drawer': closeDrawer(); break;
      case 'close-modal': closeModal(); break;
      case 'toggle-mobile-nav': {
        const sb = $('#sidebar');
        if (sb) sb.classList.toggle('open');
        break;
      }
      case 'toggle-server-menu': {
        const menu = document.querySelector('.server-menu');
        if (!menu) break;
        ui.serverMenuOpen = !menu.classList.contains('open');
        menu.classList.toggle('open', ui.serverMenuOpen);
        const trg = document.querySelector('.server-trigger');
        if (trg) trg.setAttribute('aria-expanded', ui.serverMenuOpen ? 'true' : 'false');
        break;
      }
      case 'set-server': {
        const sid = el.getAttribute('data-server');
        ui.serverMenuOpen = false;
        if (C.serverOf(sid)) {
          Store.setServer(sid);
          updateParams({ server: sid });
          toast('已切换到「' + C.serverOf(sid).name + '」');
        }
        break;
      }
      case 'open-settings': closeMenu(); openModal('settings'); break;
      case 'open-excel-downloads': closeMenu(); openModal('excel'); break;
      case 'check-update': checkForUpdates(); break;
      case 'show-install': closeModal(); if (window.__showInstallGuide) window.__showInstallGuide(true); else toast('请用 Safari 打开后，点分享 → 添加到主屏幕', 'warn'); break;
      case 'open-data': closeMenu(); openModal('data'); break;
      case 'open-import-json': closeModal(); openModal('import-json'); break;
      case 'open-add-server': closeMenu(); openModal('add-server'); break;
      case 'toggle-theme': {
        const next = ui.theme === 'light' ? 'dark' : 'light';
        Store.updateSettings({ theme: next, themePicked: true });
        applyTheme(next);
        render();
        toast('已切换到' + (next === 'light' ? '亮色' : '暗色') + '主题');
        break;
      }
      case 'stone-new': openStoneRecipe(null, 'edit'); break;
      case 'edit-stone': openStoneRecipe(id, 'view'); break;
      case 'stone-edit-form': openStoneRecipe(id, 'edit'); break;
      case 'stone-save': saveStoneRecipe(); break;
      case 'stone-cancel': {
        if (ui.drawer && ui.drawer.draft && ui.drawer.draft.id) {
          ui.drawer = { type: 'stone', id: ui.drawer.draft.id, mode: 'view', draft: null, errors: [] };
          renderDrawer();
        } else {
          closeDrawer();
        }
        break;
      }
      case 'stone-add-input': {
        collectStoneDraft();
        ui.drawer.draft.inputs.push({ level: 1, qty: 1 });
        renderDrawer();
        break;
      }
      case 'stone-remove-input': {
        collectStoneDraft();
        const idx = Number(el.getAttribute('data-index'));
        if (ui.drawer.draft.inputs.length > 1) ui.drawer.draft.inputs.splice(idx, 1);
        else toast('至少保留一种投入材料', 'warn');
        renderDrawer();
        break;
      }
      case 'stone-add-outcome': {
        collectStoneDraft();
        ui.drawer.draft.outcomes.push({ level: ui.drawer.draft.target || 6, chance: 0 });
        renderDrawer();
        break;
      }
      case 'stone-remove-outcome': {
        collectStoneDraft();
        const idx = Number(el.getAttribute('data-index'));
        if (ui.drawer.draft.outcomes.length > 1) ui.drawer.draft.outcomes.splice(idx, 1);
        else toast('至少保留一种产出', 'warn');
        renderDrawer();
        break;
      }
      case 'stone-delete': {
        const r = id ? Stone.recipe(id) : null;
        if (!r || !r.custom) break;
        confirmDialog({
          title: '删除自定义五行石公式？',
          message: '「' + r.name + '」将从本机公式库移除，无法撤销。内置公式不受影响。',
          confirmText: '删除',
          danger: true,
          onConfirm: function () {
            Stone.deleteRecipe(id);
            closeDrawer();
            render();
            toast('已删除「' + r.name + '」');
          }
        });
        break;
      }
      case 'stone-reset': {
        const r = id ? Stone.recipe(id) : null;
        if (!r) break;
        confirmDialog({
          title: '恢复默认五行石公式？',
          message: '将丢弃对「' + r.name + '」的本地修改，恢复为当前版本默认公式。',
          confirmText: '恢复',
          onConfirm: function () {
            Stone.resetRecipe(id);
            ui.drawer = { type: 'stone', id: id, mode: 'view', draft: null, errors: [] };
            renderDrawer();
            render();
            toast('已恢复默认公式');
          }
        });
        break;
      }
      case 'stone-reset-all': {
        confirmDialog({
          title: '恢复全部五行石默认公式？',
          message: '将移除所有自定义五行石公式，并把内置公式恢复默认。五行石价格与生活技艺配方不受影响。',
          confirmText: '恢复',
          danger: true,
          onConfirm: function () {
            Stone.resetAll();
            if (ui.drawer && ui.drawer.type === 'stone') closeDrawer();
            closeModal();
            render();
            toast('已恢复全部五行石默认公式');
          }
        });
        break;
      }
      case 'go-skill': go('/skills/' + el.getAttribute('data-skill')); break;
      case 'new-recipe': openNewRecipe(el.getAttribute('data-skill')); break;
      case 'edit-recipe': openRecipe(id, 'edit'); break;
      case 'save-recipe': saveRecipe(); break;
      case 'cancel-edit': {
        if (ui.drawer && ui.drawer.draft && ui.drawer.draft.id) {
          ui.drawer = { type: 'recipe', id: ui.drawer.draft.id, mode: 'view', draft: null, errors: [] };
          renderDrawer();
        } else {
          closeDrawer();
        }
        break;
      }
      case 'add-out': {
        collectDraft();
        ui.drawer.draft.outputs.push({ item: '', qty: 1, chance: 1, newName: '' });
        renderDrawer();
        break;
      }
      case 'remove-out': {
        collectDraft();
        const idx = Number(el.getAttribute('data-index'));
        if (ui.drawer.draft.outputs.length > 1) ui.drawer.draft.outputs.splice(idx, 1);
        else toast('至少保留一个产物', 'warn');
        renderDrawer();
        break;
      }
      case 'add-mat': {
        collectDraft();
        ui.drawer.draft.materials.push({ item: '', qty: 1, newName: '' });
        renderDrawer();
        break;
      }
      case 'remove-mat': {
        collectDraft();
        const idx = Number(el.getAttribute('data-index'));
        ui.drawer.draft.materials.splice(idx, 1);
        renderDrawer();
        break;
      }
      case 'delete-recipe': {
        const r = recipe(id);
        if (!r || !r.custom) break;
        confirmDialog({
          title: '删除自定义配方？',
          message: '「' + r.name + '」将从配方库移除，无法撤销。内置配方不受影响。',
          confirmText: '删除',
          danger: true,
          onConfirm: function () {
            Store.deleteRecipe(id);
            closeDrawer();
            render();
            toast('已删除「' + r.name + '」');
          }
        });
        break;
      }
      case 'reset-recipe': {
        const r = recipe(id);
        if (!r) break;
        confirmDialog({
          title: '恢复示例配方？',
          message: '将丢弃对「' + r.name + '」的本地修改，恢复为当前版本示例数据。',
          confirmText: '恢复',
          onConfirm: function () {
            Store.resetRecipe(id);
            ui.drawer = { type: 'recipe', id: id, mode: 'view', draft: null, errors: [] };
            renderDrawer();
            render();
            toast('已恢复示例配方');
          }
        });
        break;
      }
      case 'export-chart': {
        exportChartPNG(el.getAttribute('data-target') || 'chart-analysis', '剑网三物价助手_' + (el.getAttribute('data-target') || 'chart'));
        break;
      }
      case 'trend-retry': {
        if (window.JX3Trends) window.JX3Trends.retry();
        render();
        break;
      }
      case 'trend-refresh': {
        if (window.JX3Trends) window.JX3Trends.refresh();
        render();
        break;
      }
      case 'trend-export-raw': csvTrendRaw(); break;
      case 'trend-load-raw': {
        const T = window.JX3Trends;
        if (!T || !T.loadRaw) { toast('走势模块未加载', 'error'); break; }
        toast('正在读取原始数据…', 'info');
        const p = params();
        T.loadRaw(Store.state.serverId, { from: p.tfrom, to: p.tto }).then(function (raw) {
          if (raw && raw.status === 'ready') toast('原始数据已加载');
          else toast('原始数据尚未加载完成', 'warn');
          render();
        }).catch(function () { toast('原始数据加载失败', 'error'); });
        break;
      }
      case 'trend-export-series': csvTrendSeries(); break;
      case 'check-prices':
        if (window.App && window.App.checkDataUpdate) window.App.checkDataUpdate(true);
        else if (window.__JX3_DATA_SYNC__) window.__JX3_DATA_SYNC__.check();
        break;
      case 'toggle-trend-filter':
        ui.trendFilterOpen = !ui.trendFilterOpen;
        if (!ui.trendFilterOpen) {
          ui.trendPickerOpen = false;
          ui.trendPickerQuery = '';
        }
        render();
        break;
      case 'trend-download-chart': downloadTrendChart(el.closest('.card'), el.getAttribute('data-trend-label')); break;
      case 'trend-select-all': updateParams({ titems: '' }); break;
      case 'trend-select-none': updateParams({ titems: '__none__' }); break;
      case 'toggle-server-filter': ui.serverFilterOpen = !ui.serverFilterOpen; render(); break;
      case 'server-select-none': updateParams({ sservers: '__none__' }); break;
      case 'server-product-none': updateParams({ sitems: '__none__', skeyword: '' }); break;
      case 'server-clear-skill': updateParams({ sskill: '' }); break;
      case 'server-item-reset': updateParams({ srange: 'today', sservers: '', sitem: '', sview: 'item' }); break;
      case 'server-reset': updateParams({ srange: 'today', sservers: '', sitems: '', sserver: '', sskill: '', skeyword: '' }); break;
      case 'export-csv': {
        const kind = el.getAttribute('data-csv');
        if (kind === 'prices') csvPrices();
        else if (kind === 'stones') csvStones();
        else if (kind === 'stone-prices') csvStonePrices();
        else csvAnalysis();
        break;
      }
      case 'export-json': {
        U.download('剑网三物价助手_备份_' + new Date().toISOString().slice(0, 10) + '.json', Store.exportJSON(), 'application/json;charset=utf-8');
        toast('备份已导出');
        break;
      }
      case 'open-import-prices': {
        const t = document.getElementById('price-import-text');
        if (t) {
          t.scrollIntoView({ behavior: 'smooth', block: 'center' });
          t.focus();
        } else {
          go('/prices');
        }
        break;
      }
      case 'apply-price-import': {
        const t = document.getElementById('price-import-text');
        const res = Store.importPrices(t ? t.value : '', Store.state.serverId);
        if (!res.applied && !res.unmatched.length && !res.invalid.length) {
          toast('没有可导入的内容', 'error');
        } else {
          const extra = res.unmatched.length ? '；未匹配：' + res.unmatched.slice(0, 3).join('、') + (res.unmatched.length > 3 ? '…' : '') : '';
          const invalid = res.invalid.length ? '；格式错误 ' + res.invalid.length + ' 行' : '';
          toast('已导入 ' + res.applied + ' 项到「' + server().name + '」' + extra + invalid, res.unmatched.length || res.invalid.length ? 'warn' : '');
          render();
        }
        break;
      }
      case 'download-price-template': downloadPriceTemplate(); break;
      case 'clear-stone-price': {
        const level = Number(el.getAttribute('data-level'));
        Stone.clearPrice(Store.state.serverId, level);
        refreshAll();
        toast('已恢复「' + Stone.levelInfo(level).name + '」的行情价');
        break;
      }
      case 'clear-price': {
        const it = item(id);
        Store.clearPrice(Store.state.serverId, id);
        render();
        toast('已恢复「' + (it ? it.name : id) + '」的示例价');
        break;
      }
      case 'add-server-save': {
        const nameEl = document.getElementById('new-server-name') || document.getElementById('settings-new-server');
        const regionEl = document.getElementById('new-server-region') || document.getElementById('settings-new-region');
        const name = nameEl ? nameEl.value.trim() : '';
        const region = regionEl ? regionEl.value.trim() : '';
        if (!name) { toast('请输入服务器名称', 'error'); if (nameEl) nameEl.focus(); break; }
        if (Store.state.servers.some(function (s) { return s.name === name; })) {
          toast('已存在同名服务器', 'error');
          if (nameEl) nameEl.focus();
          break;
        }
        const sid = Store.addServer(name, region || '自定义');
        Store.setServer(sid);
        closeModal();
        updateParams({ server: sid });
        toast('已新增并切换到「' + name + '」');
        break;
      }
      case 'remove-server': {
        const sid = el.getAttribute('data-id');
        if (Store.state.servers.length <= 1) break;
        const sv = C.serverOf(sid);
        confirmDialog({
          title: '移除服务器？',
          message: '将删除「' + (sv ? sv.name : sid) + '」的全部已填价格，配方库与自定义配方不变。',
          confirmText: '移除',
          danger: true,
          onConfirm: function () {
            Store.removeServer(sid);
            Route.goPath(Route.parse().path, { server: Store.state.serverId }, { replace: true });
            openModal('settings');
            toast('已移除服务器');
          }
        });
        break;
      }
      case 'save-settings': {
        const root = document.getElementById('modal-root');
        const patch = {};
        if (root) {
          root.querySelectorAll('[data-setting]').forEach(function (inp) {
            const k = inp.getAttribute('data-setting');
            if (inp.type === 'number') {
              const n = Number(inp.value);
              patch[k] = Number.isFinite(n) ? n : 0;
            } else {
              patch[k] = inp.value;
            }
          });
        }
        if (patch.theme) patch.themePicked = true;
        if (patch.taxRate != null) patch.taxRate = Math.max(0, Math.min(100, Number(patch.taxRate) || 0)) / 100;
        if (patch.energyBudget != null) patch.energyBudget = Math.max(0, Math.round(patch.energyBudget));
        if (patch.gatherEnergy != null) patch.gatherEnergy = Math.max(1, Math.round(patch.gatherEnergy));
        if (patch.craftEnergy != null) patch.craftEnergy = Math.max(1, Math.round(patch.craftEnergy));
        Store.updateSettings(patch);
        if (patch.theme) applyTheme(patch.theme);
        closeModal();
        render();
        toast('设置已保存');
        break;
      }
      case 'clear-prices': {
        confirmDialog({
          title: '清空本服价格？',
          message: '将删除「' + server().name + '」所有手动校准的价格，恢复示例价。配方库不受影响。',
          confirmText: '清空',
          danger: true,
          onConfirm: function () {
            Store.clearServerPrices(Store.state.serverId);
            closeModal();
            render();
            toast('已清空本服价格');
          }
        });
        break;
      }
      case 'reset-catalog': {
        confirmDialog({
          title: '恢复示例配方库？',
          message: '将移除所有自定义配方与自定义物品，并把内置配方恢复为当前版本示例。已填价格记录会保留。',
          confirmText: '恢复',
          danger: true,
          onConfirm: function () {
            Store.resetCatalog();
            closeModal();
            render();
            toast('已恢复示例配方库');
          }
        });
        break;
      }
      case 'reset-all': {
        confirmDialog({
          title: '重置全部数据？',
          message: '将清除本机保存的配方、价格、服务器与设置，恢复初始状态。此操作不可撤销。',
          confirmText: '全部重置',
          danger: true,
          onConfirm: function () {
            Store.resetAll();
            applyTheme(settings().theme);
            closeModal();
            Route.go('/overview', { server: Store.state.serverId }, { replace: true });
            render();
            toast('已重置全部数据');
          }
        });
        break;
      }
      case 'import-json-apply': {
        const ta = document.getElementById('import-json-text');
        const text = ta ? ta.value.trim() : '';
        if (!text) { toast('请粘贴备份内容或选择文件', 'error'); break; }
        try {
          Store.importJSON(text);
          closeModal();
          applyTheme(settings().theme);
          updateParams({ server: Store.state.serverId }, { replace: true });
          render();
          toast('备份已导入');
        } catch (err) {
          toast(err.message || '导入失败', 'error');
        }
        break;
      }
      case 'confirm-yes': {
        const cb = ui.modal && ui.modal.data ? ui.modal.data.onConfirm : null;
        closeModal();
        if (cb) cb();
        break;
      }
      case 'confirm-no': {
        const cb = ui.modal && ui.modal.data ? ui.modal.data.onCancel : null;
        closeModal();
        if (cb) cb();
        break;
      }
      default: break;
    }
  }

  function closeMenu() {
    ui.serverMenuOpen = false;
    const menu = document.querySelector('.server-menu');
    if (menu) menu.classList.remove('open');
    const trg = document.querySelector('.server-trigger');
    if (trg) trg.setAttribute('aria-expanded', 'false');
  }

  function onClick(e) {
    const actionEl = e.target.closest('[data-action]');
    if (actionEl) {
      e.preventDefault();
      if (!e.target.closest('.server-wrap')) closeMenu();
      handleAction(actionEl, e);
      return;
    }
    if (!e.target.closest('.server-wrap')) closeMenu();
    const sb = document.getElementById('sidebar');
    if (sb && sb.classList.contains('open') && !e.target.closest('#sidebar') && !e.target.closest('[data-action="toggle-mobile-nav"]')) {
      sb.classList.remove('open');
    }

    const filterBtn = e.target.closest('button[data-filter]');
    if (filterBtn) {
      e.preventDefault();
      const key = filterBtn.getAttribute('data-filter');
      const value = filterBtn.getAttribute('data-value') || '';
      updateParams({ [key]: value });
      return;
    }
    const sortTh = e.target.closest('th[data-sort]');
    if (sortTh) {
      const key = sortTh.getAttribute('data-sort');
      const p = params();
      const dir = p.sort === key ? (p.dir === 'desc' ? 'asc' : 'desc') : 'desc';
      updateParams({ sort: key, dir: dir });
      return;
    }
    const skillRow = e.target.closest('[data-skill-link]');
    if (skillRow) {
      go('/skills/' + skillRow.getAttribute('data-skill-link'));
      return;
    }
    const trendTab = e.target.closest('[data-trend-tab]');
    if (trendTab) {
      ui.trendTab = trendTab.getAttribute('data-trend-tab') === 'profit' ? 'profit' : 'price';
      render();
      return;
    }
    const serverItemTab = e.target.closest('[data-server-item-tab]');
    if (serverItemTab) {
      ui.serverItemTab = serverItemTab.getAttribute('data-server-item-tab') === 'profit' ? 'profit' : 'price';
      render();
      return;
    }
    const profitSkill = e.target.closest('[data-profit-skill]');
    if (profitSkill) {
      ui.profitSkill = profitSkill.getAttribute('data-profit-skill');
      render();
      return;
    }
    const profitPick = e.target.closest('[data-profit-pick]');
    if (profitPick) {
      const id = profitPick.getAttribute('data-profit-pick');
      if (profitPick.getAttribute('data-profit-kind') === 'server') {
        ui.serverItemTab = 'profit';
        updateParams({ sview: 'item', sitem: id });
      } else {
        ui.trendTab = 'profit';
        updateParams({ tfocus: id });
      }
      return;
    }
    const serverView = e.target.closest('[data-server-view]');
    if (serverView) {
      const view = serverView.getAttribute('data-server-view');
      updateParams(view === 'item' ? { sview: 'item' } : { sview: '', sitem: '' });
      return;
    }
    const itemPick = e.target.closest('[data-server-item-pick]');
    if (itemPick) {
      const pickedKey = itemPick.getAttribute('data-server-item-pick');
      serverRememberItem(pickedKey);
      ui.serverItemPickerOpen = false;
      ui.serverItemQuery = '';
      ui.serverItemRankQuery = '';
      ui.profitSkill = '';
      updateParams({ sview: 'item', sitem: pickedKey });
      return;
    }
    const itemTrend = e.target.closest('[data-server-item-trends]');
    if (itemTrend) {
      go('/trends', {
        server: itemTrend.getAttribute('data-server-item-trends'),
        tfocus: itemTrend.getAttribute('data-item-key')
      });
      return;
    }
    const serverRange = e.target.closest('[data-server-range]');
    if (serverRange) {
      updateParams({ srange: serverRange.getAttribute('data-server-range'), sserver: '', sskill: '' });
      return;
    }
    const serverFocus = e.target.closest('[data-server-focus]');
    if (serverFocus) {
      updateParams({
        sserver: serverFocus.getAttribute('data-server-focus'),
        sskill: serverFocus.getAttribute('data-server-skill') || ''
      });
      return;
    }
    const serverKeyword = e.target.closest('[data-server-keyword]');
    if (serverKeyword) {
      const key = serverKeyword.getAttribute('data-server-keyword');
      updateParams({ skeyword: params().skeyword === key ? '' : key, sskill: '' });
      return;
    }
    const serverClearKeyword = e.target.closest('[data-server-clear-keyword]');
    if (serverClearKeyword) {
      updateParams({ skeyword: '' });
      return;
    }
    const trendNode = e.target.closest('[data-trend-node]');
    if (trendNode) {
      updateParams({ tnode: trendNode.getAttribute('data-trend-node') });
      return;
    }
    const focusEl = e.target.closest('[data-trend-focus]');
    if (focusEl) {
      captureTrendScroll();
      ui.trendCenterKey = focusEl.getAttribute('data-trend-focus');
      updateParams({ tfocus: ui.trendCenterKey });
      return;
    }
    const chartEl = e.target.closest('.chart-bar[data-recipe], .chart-point[data-recipe]');
    if (chartEl) {
      openRecipe(chartEl.getAttribute('data-recipe'));
      return;
    }
    const btRow = e.target.closest('tr[data-bt-skill]');
    if (btRow) {
      go('/breakthrough', { skill: btRow.getAttribute('data-bt-skill'), strategy: params().strategy, yield: params().yield });
      return;
    }
    const row = e.target.closest('tr[data-recipe-id]');
    if (row && !e.target.closest('input, select, button, a, label')) {
      openRecipe(row.getAttribute('data-recipe-id'));
    }
  }

  function onChange(e) {
    const t = e.target;
    if (t.matches('[data-stone-price]')) {
      const level = Number(t.getAttribute('data-stone-price'));
      const val = t.value.trim();
      const ok = val === '' ? Stone.clearPrice(Store.state.serverId, level) : Stone.setPrice(Store.state.serverId, level, val);
      if (!ok) toast('价格必须是非负数字', 'error');
      else toast('已更新「' + Stone.levelInfo(level).name + '」价格');
      setTimeout(refreshAll, 0);
      return;
    }
    if (t.matches('[data-stone-prob]')) {
      const rid = t.getAttribute('data-stone-prob');
      const level = Number(t.getAttribute('data-stone-prob-level'));
      const pct = Number(t.value);
      if (!Number.isFinite(pct) || pct < 0 || pct > 100) {
        toast('爆率必须在 0-100% 之间', 'error');
      } else {
        Stone.setChance(rid, level, pct / 100);
        toast('已更新爆率');
      }
      setTimeout(refreshAll, 0);
      return;
    }
    if (t.matches('[data-price-item]')) {
      const itemId = t.getAttribute('data-price-item');
      const val = t.value.trim();
      let ok;
      if (val === '') {
        Store.clearPrice(Store.state.serverId, itemId);
        ok = true;
      } else {
        ok = Store.setPrice(Store.state.serverId, itemId, val);
      }
      if (!ok) {
        toast('价格必须是非负数字', 'error');
      } else {
        const it = item(itemId);
        toast('已更新「' + (it ? it.name : itemId) + '」价格');
      }
      setTimeout(refreshAll, 0);
      return;
    }
    if (t.matches('[data-trend-toggle-all]')) {
      updateParams({ titems: t.checked ? '' : '__none__' });
      return;
    }
    if (t.matches('[data-server-toggle-all]')) {
      updateParams({ sservers: t.checked ? '' : '__none__' });
      return;
    }
    if (t.matches('[data-server-product-all-toggle]')) {
      updateParams({ sitems: t.checked ? '' : '__none__', skeyword: '' });
      return;
    }
    if (t.matches('[data-server-toggle]')) {
      const all = DATA.servers || [];
      const current = serverSelectedServers(params());
      const set = new Set(current.map(function (s) { return s.id; }));
      const key = t.getAttribute('data-server-toggle');
      if (t.checked) set.add(key); else set.delete(key);
      let value = '';
      if (!set.size) value = '__none__';
      else if (set.size < all.length) value = all.filter(function (s) { return set.has(s.id); }).map(function (s) { return s.id; }).join(',');
      updateParams({ sservers: value });
      return;
    }
    if (t.matches('[data-server-product-toggle]')) {
      const all = serverCatalog();
      const current = serverItemSelection(Object.assign({}, params(), { skeyword: '' }));
      const set = new Set(current.selected.map(function (item) { return item.key; }));
      const key = t.getAttribute('data-server-product-toggle');
      if (t.checked) set.add(key); else set.delete(key);
      const selected = all.filter(function (item) { return set.has(item.key); });
      // 多选后清空搜索词，保留已选，下一次输入从完整目录重新匹配。
      ui.serverProductQuery = '';
      const picker = document.querySelector('.server-product-picker');
      const search = picker && picker.querySelector('[data-server-product-search]');
      if (search) search.value = '';
      if (picker) picker.querySelectorAll('[data-server-product-item]').forEach(function (node) { node.hidden = false; });
      updateParams({ sitems: serverItemParam(selected, all), skeyword: '', sskill: '' });
      return;
    }
    if (t.matches('[data-trend-item-toggle]')) {
      const ctx = trendContext(params());
      if (!ctx || !ctx.scopeItems) return;
      const key = t.getAttribute('data-trend-item-toggle');
      const set = new Set(ctx.selectedKeys);
      if (t.checked) set.add(key); else set.delete(key);
      let value = '';
      if (!set.size) value = '__none__';
      else if (set.size < ctx.scopeKeys.length) value = ctx.scopeKeys.filter(function (k) { return set.has(k); }).join(',');
      // 多选后清空搜索词，保留已勾选项，下一次输入从完整目录重新匹配。
      ui.trendPickerQuery = '';
      const picker = document.querySelector('.trend-picker');
      const search = picker && picker.querySelector('[data-trend-picker-search]');
      if (search) search.value = '';
      if (picker) picker.querySelectorAll('[data-picker-item]').forEach(function (node) { node.hidden = false; });
      updateParams({ titems: value });
      return;
    }
    if (t.matches('[data-trend-range]')) {
      const which = t.getAttribute('data-trend-range').split('-')[0];
      const dateEl = document.querySelector('[data-trend-range="' + which + '-date"]');
      const hourEl = document.querySelector('[data-trend-range="' + which + '-hour"]');
      const date = dateEl ? dateEl.value : '';
      const hour = hourEl ? hourEl.value : '00';
      if (!date) return;
      updateParams({ [which === 'from' ? 'tfrom' : 'tto']: date + 'T' + hour + ':00' });
      return;
    }
    if (t.matches('[data-filter]')) {
      const key = t.getAttribute('data-filter');
      if (key === 'tskill' || key === 'tcategory' || key === 'ttype' || key === 'tmin' || key === 'tmax' || key === 'tdaxis' || key === 'tsaxis') {
        ui.trendPickerQuery = '';
      }
      updateParams({ [key]: t.value });
      return;
    }
    if (t.matches('[data-toggle]')) {
      const key = t.getAttribute('data-toggle');
      if (key === 'only') updateParams({ only: t.checked ? 'profit' : '' });
      if (key === 'complete') updateParams({ complete: t.checked ? '1' : '0' });
      if (key === 'missing') updateParams({ missing: t.checked ? '1' : '' });
      if (key === 'stone-all') updateParams({ all: t.checked ? '1' : '' });
      return;
    }
    if (t.matches('[data-compare]')) {
      updateParams({ [t.getAttribute('data-compare')]: t.value });
      return;
    }
    if (t.matches('[data-setting]') && !t.closest('#modal-root')) {
      const key = t.getAttribute('data-setting');
      let v = t.type === 'number' ? Number(t.value) : t.value;
      if (t.type === 'number' && !Number.isFinite(v)) v = 0;
      if (key === 'taxRate') v = Math.max(0, Math.min(100, v)) / 100;
      if (key === 'energyBudget') v = Math.max(0, Math.round(v));
      Store.updateSettings(key === 'theme' ? { theme: v, themePicked: true } : { [key]: v });
      render();
      toast('已更新「' + (key === 'energyBudget' ? '精力预算' : key) + '」');
      return;
    }
    if (t.matches('[data-draft-select]')) {
      collectDraft();
      const d = ui.drawer.draft;
      if (t.getAttribute('data-draft-field') === 'skillId' && !d.id) {
        const sk = skill(d.skillId);
        d.kind = sk.type === 'gather' ? 'gather' : 'craft';
      }
      if (t.matches('[data-out-item]') && !d.id) {
        const picked = item(t.value);
        if (picked) d.tier = picked.tier;
      }
      ui.drawer.errors = [];
      renderDrawer();
      return;
    }
    if (t.id === 'import-json-file' && t.files && t.files[0]) {
      const reader = new FileReader();
      reader.onload = function () {
        const ta = document.getElementById('import-json-text');
        if (ta) ta.value = String(reader.result || '');
        toast('文件已读取，点击「覆盖并导入」确认');
      };
      reader.readAsText(t.files[0]);
    }
  }

  function scheduleSearch(t) {
    clearTimeout(ui.searchTimer);
    const key = t.getAttribute('data-search');
    ui.searchTimer = setTimeout(function () {
      const el = document.querySelector('[data-search="' + key + '"]');
      const value = el ? el.value : '';
      updateParams({ [key]: value }, { replace: true });
      setTimeout(function () {
        const next = document.querySelector('[data-fkey="search"]');
        if (next) {
          next.focus({ preventScroll: true });
          if (next.setSelectionRange) {
            try { next.setSelectionRange(next.value.length, next.value.length); } catch (err) { /* ignore */ }
          }
        }
      }, 0);
    }, 220);
  }
  function onCompositionStart(e) {
    if (e.target.matches && e.target.matches('[data-search]')) {
      ui.composing = true;
      clearTimeout(ui.searchTimer);
    }
  }
  function onCompositionEnd(e) {
    if (!e.target.matches || !e.target.matches('[data-search]')) return;
    ui.composing = false;
    scheduleSearch(e.target);
  }
  function onInput(e) {
    const t = e.target;
    if (t.matches('[data-server-item-search]')) {
      const panel = t.closest('.server-item-picker');
      const q = t.value.trim();
      ui.serverItemQuery = t.value;
      if (panel) {
        let count = 0;
        panel.querySelectorAll('[data-server-item-text]').forEach(function (node) {
          const show = !q || serverSearchMatch(node.getAttribute('data-server-item-text') || '', q);
          node.hidden = !show;
          if (show) count++;
        });
        const countEl = panel.querySelector('[data-server-item-count]');
        if (countEl) countEl.textContent = String(count);
      }
      return;
    }
    if (t.matches('[data-server-item-rank-search]')) {
      const card = t.closest('.server-item-rank-card');
      const q = t.value.trim();
      ui.serverItemRankQuery = t.value;
      if (card) {
        let count = 0;
        card.querySelectorAll('tbody tr[data-server-item-text]').forEach(function (row) {
          const show = !q || serverSearchMatch(row.getAttribute('data-server-item-text') || '', q);
          row.hidden = !show;
          if (show) count++;
        });
        const countEl = card.querySelector('[data-server-item-rank-count]');
        if (countEl) countEl.textContent = String(count);
      }
      return;
    }
    if (t.matches('[data-server-product-search]')) {
      const panel = t.closest('.server-product-picker');
      const q = t.value.trim();
      ui.serverProductQuery = t.value;
      if (panel) {
        panel.querySelectorAll('[data-server-product-item]').forEach(function (label) {
          label.hidden = !!q && !U.includes(label.getAttribute('data-server-product-text') || '', q);
        });
      }
      return;
    }
    if (t.matches('[data-trend-picker-search]')) {
      const panel = t.closest('.trend-picker-panel');
      const q = t.value.trim();
      ui.trendPickerQuery = t.value;
      if (panel) {
        panel.querySelectorAll('[data-picker-item]').forEach(function (label) {
          label.hidden = !!q && !U.includes(label.getAttribute('data-picker-text') || '', q);
        });
      }
      return;
    }
    if (!t.matches('[data-search]')) return;
    if (e.isComposing || ui.composing) return;
    scheduleSearch(t);
  }

  function trapFocus(e) {
    if (e.key !== 'Tab') return;
    const root = ui.modal ? document.getElementById('modal-root') : ui.drawer ? document.getElementById('drawer-root') : null;
    if (!root) return;
    const focusables = Array.prototype.slice.call(root.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex="0"]'))
      .filter(function (el) { return el.offsetParent !== null; });
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function onKeydown(e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      const s = document.querySelector('[data-fkey="search"]');
      if (s) s.focus();
      else go('/analysis');
      return;
    }
    if ((e.metaKey || e.ctrlKey) && e.key === ',') {
      e.preventDefault();
      openModal('settings');
      return;
    }
    if (e.key === 'Escape') {
      if (ui.modal) { closeModal(); return; }
      if (ui.drawer) { closeDrawer(); return; }
      if (ui.serverMenuOpen) { closeMenu(); return; }
      const excelOpen = document.querySelector('.excel-menu-wrap[open]');
      if (excelOpen) { excelOpen.open = false; return; }
      const sb = document.getElementById('sidebar');
      if (sb && sb.classList.contains('open')) { sb.classList.remove('open'); return; }
    }
    if (e.key === 'Enter' && !e.isComposing && e.target.matches) {
      if (e.target.matches('[data-server-item-search]')) {
        e.preventDefault();
        const panel = e.target.closest('.server-item-picker');
        const first = panel ? panel.querySelector('.server-item-option:not([hidden])') : null;
        if (first) first.click();
        return;
      }
      if (e.target.matches('[data-server-item-rank-search]')) {
        e.preventDefault();
        const card = e.target.closest('.server-item-rank-card');
        const first = card ? card.querySelector('tbody tr[data-server-item-pick]:not([hidden])') : null;
        if (first) first.click();
        return;
      }
    }
    trapFocus(e);
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches('th[data-sort]')) {
      e.preventDefault();
      const key = e.target.getAttribute('data-sort');
      const p = params();
      const dir = p.sort === key ? (p.dir === 'desc' ? 'asc' : 'desc') : 'desc';
      updateParams({ sort: key, dir: dir });
      return;
    }
    if (e.key === 'Enter') {
      const row = e.target.closest && e.target.closest('tr[data-recipe-id], [data-skill-link]');
      if (row && e.target === row) {
        e.preventDefault();
        if (row.hasAttribute('data-skill-link')) go('/skills/' + row.getAttribute('data-skill-link'));
        else openRecipe(row.getAttribute('data-recipe-id'));
      }
    }
  }

  function showTip(el) {
    const text = el.getAttribute('data-tip');
    if (!text) return;
    const tip = document.getElementById('tooltip');
    tip.textContent = text;
    tip.classList.add('show');
    const r = el.getBoundingClientRect();
    const tw = tip.offsetWidth;
    const th = tip.offsetHeight;
    let left = r.left + r.width / 2 - tw / 2;
    left = Math.max(8, Math.min(window.innerWidth - tw - 8, left));
    let top = r.top - th - 8;
    if (top < 8) top = r.bottom + 8;
    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
  }
  function hideTip() {
    const tip = document.getElementById('tooltip');
    if (tip) tip.classList.remove('show');
  }

  function bindEvents() {
    document.addEventListener('click', onClick);
    document.addEventListener('change', onChange);
    document.addEventListener('input', onInput);
    document.addEventListener('compositionstart', onCompositionStart);
    document.addEventListener('compositionend', onCompositionEnd);
    document.addEventListener('scroll', function (e) {
      const el = e.target;
      if (!el || !el.matches || !el.matches('[data-trend-scroll]')) return;
      const key = el.getAttribute('data-trend-scroll');
      ui.trendScroll[key] = el.scrollLeft;
      if (key === 'distribution' || key === 'scatter') {
        const other = key === 'distribution' ? 'scatter' : 'distribution';
        const peer = document.querySelector('[data-trend-scroll="' + other + '"]');
        if (peer && Math.abs(peer.scrollLeft - el.scrollLeft) > 1) {
          peer.scrollLeft = el.scrollLeft;
          ui.trendScroll[other] = el.scrollLeft;
        }
      }
    }, true);
    document.addEventListener('keydown', onKeydown);
    document.addEventListener('toggle', function (e) {
      if (e.target && e.target.classList && e.target.classList.contains('trend-rank-all')) {
        ui.trendRankAllOpen = !!e.target.open;
      }
      if (e.target && e.target.classList && e.target.classList.contains('server-picker')) {
        ui.serverPickerOpen = !!e.target.open;
      }
      if (e.target && e.target.classList && e.target.classList.contains('server-item-picker')) {
        ui.serverItemPickerOpen = !!e.target.open;
        if (!e.target.open) {
          ui.serverItemQuery = '';
          const input = e.target.querySelector('[data-server-item-search]');
          if (input) input.value = '';
          e.target.querySelectorAll('[data-server-item-text]').forEach(function (node) { node.hidden = false; });
        }
      }
      if (e.target && e.target.classList && e.target.classList.contains('server-product-picker')) {
        ui.serverProductPickerOpen = !!e.target.open;
        if (!e.target.open) {
          ui.serverProductQuery = '';
          const input = e.target.querySelector('[data-server-product-search]');
          if (input) input.value = '';
          e.target.querySelectorAll('[data-server-product-item]').forEach(function (label) { label.hidden = false; });
        }
      }
      if (e.target && e.target.classList && e.target.classList.contains('trend-picker')) {
        ui.trendPickerOpen = !!e.target.open;
        if (!e.target.open) {
          ui.trendPickerQuery = '';
          const input = e.target.querySelector('[data-trend-picker-search]');
          if (input) input.value = '';
          e.target.querySelectorAll('[data-picker-item]').forEach(function (label) { label.hidden = false; });
        }
      }
    }, true);
    document.addEventListener('pointerover', function (e) {
      const el = e.target.closest && e.target.closest('[data-tip]');
      if (el) showTip(el);
    });
    document.addEventListener('pointerout', function (e) {
      const el = e.target.closest && e.target.closest('[data-tip]');
      if (el && !el.contains(e.relatedTarget)) hideTip();
    });
    document.addEventListener('focusin', function (e) {
      const el = e.target.closest && e.target.closest('[data-tip]');
      if (el) showTip(el);
    });
    document.addEventListener('focusout', function () { hideTip(); });
    document.addEventListener('click', function (e) {
      if (ui.serverMenuOpen && !e.target.closest('.server-wrap')) closeMenu();
      if (e.target.closest('.excel-menu a')) {
        const wrap = e.target.closest('.excel-menu-wrap');
        if (wrap) wrap.open = false;
      }
      if (!e.target.closest('.excel-menu-wrap')) {
        $$('.excel-menu-wrap[open]').forEach(function (d) { d.open = false; });
      }
    });
    window.addEventListener('hashchange', function () {
      if (ui.booted) render();
    });
    window.addEventListener('resize', hideTip);
  }

  /* ------------------------------------------------------------------ */
  /* 渲染 / 启动                                                        */
  /* ------------------------------------------------------------------ */
  function applyTheme(theme) {
    ui.theme = theme === 'light' ? 'light' : 'dark';
    document.documentElement.classList.toggle('light', ui.theme === 'light');
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', ui.theme === 'light' ? '#f5f5f5' : '#020817');
  }

  function refreshAll() {
    render();
    if (ui.drawer) renderDrawer();
    if (ui.modal) renderModal();
  }

  function setBootStatus(text) {
    if (typeof window.setBootStatus === 'function') window.setBootStatus(text);
  }

  function hideBootLoader() {
    const el = document.getElementById('boot-loader');
    if (!el || el.classList.contains('is-done')) return;
    el.setAttribute('aria-busy', 'false');
    const elapsed = (window.performance && performance.now) ? performance.now() : 0;
    const wait = Math.max(0, 520 - elapsed);
    setTimeout(function () {
      el.classList.add('is-done');
      document.body.classList.remove('booting');
      setTimeout(function () {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, 320);
    }, wait);
  }

  function renderSkeleton() {
    const page = document.getElementById('page');
    if (!page) return;
    page.innerHTML = '<div class="page">' +
      '<div class="skeleton" style="width:180px;height:26px;margin-bottom:10px"></div>' +
      '<div class="skeleton" style="width:460px;height:12px;margin-bottom:22px"></div>' +
      '<div class="kpi-grid">' + Array(4).join().split(',').map(function () {
        return '<div class="skeleton sk-card" style="height:112px"></div>';
      }).join('') + '</div>' +
      '<div class="grid section-gap"><div class="skeleton col-8" style="height:380px"></div><div class="skeleton col-4" style="height:380px"></div></div>' +
      '</div>';
  }

  function captureTrendScroll() {
    document.querySelectorAll('[data-trend-scroll]').forEach(function (el) {
      ui.trendScroll[el.getAttribute('data-trend-scroll')] = el.scrollLeft;
    });
  }
  function centerTrendKey(key) {
    const safe = String(key || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const target = document.querySelector('[data-trend-scroll="distribution"] [data-trend-focus="' + safe + '"]') ||
      document.querySelector('[data-trend-scroll="scatter"] [data-trend-focus="' + safe + '"]');
    if (!target) return;
    const wrap = target.closest('[data-trend-scroll]');
    if (!wrap) return;
    const wr = wrap.getBoundingClientRect();
    const tr = target.getBoundingClientRect();
    let left = wrap.scrollLeft + (tr.left - wr.left) - (wrap.clientWidth - tr.width) / 2;
    left = Math.max(0, Math.min(wrap.scrollWidth - wrap.clientWidth, left));
    document.querySelectorAll('[data-trend-scroll="distribution"], [data-trend-scroll="scatter"]').forEach(function (el) {
      el.scrollLeft = left;
      ui.trendScroll[el.getAttribute('data-trend-scroll')] = left;
    });
  }
  function restoreTrendScroll() {
    document.querySelectorAll('[data-trend-scroll]').forEach(function (el) {
      const value = ui.trendScroll[el.getAttribute('data-trend-scroll')];
      if (value) el.scrollLeft = value;
    });
    if (ui.trendCenterKey) {
      const key = ui.trendCenterKey;
      ui.trendCenterKey = null;
      centerTrendKey(key);
    }
  }

  function render() {
    const route = Route.parse();
    const p = route.params;
    syncServerFromParams(p);
    if (route.path === '/skills' || route.path === '/skills/') {
      history.replaceState(null, '', Route.href('/skills/shennong'));
      return render();
    }
    if (needsAudit(route.path) && !window.JX3Audit) {
      ensureAudit().then(render).catch(lazyLoadFailed);
      return;
    }
    if (route.path === '/breakthrough' && !window.JX3BT) {
      ensureBreakthrough().then(render).catch(lazyLoadFailed);
      return;
    }
    const active = document.activeElement;
    const fkey = active && active.getAttribute ? active.getAttribute('data-fkey') : null;
    const selStart = active && typeof active.selectionStart === 'number' ? active.selectionStart : null;
    const pathChanged = route.path !== ui.lastPath;

    if (pathChanged) {
      ui.trendPickerOpen = false;
      ui.trendPickerQuery = '';
      ui.trendFilterOpen = false;
      ui.trendRankAllOpen = false;
      ui.serverPickerOpen = false;
      ui.serverProductPickerOpen = false;
      ui.serverProductQuery = '';
      ui.serverFilterOpen = false;
      ui.serverItemPickerOpen = false;
      ui.serverItemQuery = '';
      ui.serverItemRankQuery = '';
      ui.trendTab = 'price';
      ui.serverItemTab = 'price';
      ui.profitSkill = '';
      ui.trendScroll = Object.create(null);
      ui.trendCenterKey = null;
      if (ui.drawer) {
        ui.drawer = null;
        document.body.classList.remove('has-drawer');
        const dr = document.getElementById('drawer-root');
        if (dr) dr.innerHTML = '';
      }
      if (ui.modal) {
        ui.modal = null;
        document.body.classList.remove('has-modal');
        const mr = document.getElementById('modal-root');
        if (mr) mr.innerHTML = '';
      }
    }

    renderShell(route.path, p);
    updateMarketStatus();

    let html = '';
    let title = '总览';
    if (route.path === '/' || route.path === '/overview') {
      html = renderOverview(p); title = '总览';
    } else if (route.path.indexOf('/skills') === 0) {
      html = renderSkills(route.path, p);
      const sid = route.path.split('/')[2];
      title = '生活技艺 · ' + (C.skillOf(sid) ? C.skillOf(sid).name : '');
    } else if (route.path === '/prices') {
      html = renderPrices(p); title = '行情';
    } else if (route.path === '/analysis') {
      html = renderAnalysis(p); title = '精力收益分析';
    } else if (route.path === '/trends') {
      html = renderTrends(p); title = '物价走势';
    } else if (route.path === '/server-trends') {
      html = renderServerTrends(p); title = '区服趋势';
    } else if (route.path === '/breakthrough') {
      html = renderBreakthrough(p); title = '突破升级';
    } else if (route.path === '/stones') {
      html = renderStones(p); title = '五行石合成';
    } else {
      html = '<div class="page"><div class="empty"><span class="ic">' + icon('info') + '</span><h3>页面不存在</h3><p>链接可能已失效。</p>' +
        '<a class="btn btn-primary" href="' + Route.href('/overview') + '">返回总览</a></div></div>';
      title = '未找到';
    }
    const page = document.getElementById('page');
    if (!page) return;
    const previousScroll = window.scrollY;
    page.innerHTML = html;
    const pageEl = page.querySelector('.page');
    if (pageEl && pathChanged) pageEl.classList.add('page-enter');
    document.title = (isDevDeployment() ? '[DEV] ' : '') + title + ' · 剑网三物价助手 | JX3 生活技艺计算器';
    const sb = document.getElementById('sidebar');
    if (sb) sb.classList.remove('open');
    if (window.innerWidth <= 768) {
      const activeSkill = document.querySelector('.skill-item.active');
      const nav = activeSkill ? activeSkill.closest('.skill-nav') : null;
      if (activeSkill && nav) {
        const nr = nav.getBoundingClientRect();
        const ar = activeSkill.getBoundingClientRect();
        nav.scrollLeft = Math.max(0, nav.scrollLeft + (ar.left - nr.left) - 12);
      }
    }
    if (pathChanged) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      ui.lastPath = route.path;
    } else if (previousScroll > 0) {
      // 同一路由内的筛选/改价/排序只重绘，不重置滚动位置，避免页面跳动
      window.scrollTo({ top: previousScroll, behavior: 'auto' });
    }
    if (fkey) {
      const el = document.querySelector('[data-fkey="' + fkey.replace(/"/g, '\\"') + '"]');
      if (el) {
        try {
          el.focus({ preventScroll: true });
          if (selStart != null && el.setSelectionRange) el.setSelectionRange(selStart, selStart);
        } catch (err) { /* ignore */ }
      }
    }
    requestAnimationFrame(restoreTrendScroll);
  }

  function boot() {
    Store.init();
    if (Stone && Stone.ensure) Stone.ensure();
    ui.theme = settings().theme === 'light' ? 'light' : 'dark';
    applyTheme(ui.theme);
    syncServerFromParams(Route.parse().params);
    if (!location.hash) {
      history.replaceState(null, '', Route.href('/overview'));
    }
    window.App = {
      handleRoute: function () {
        if (ui.booted) render();
      },
      checkDataUpdate: function (force) { checkForDataUpdate(force !== false); }
    };
    if (window.JX3Trends && window.JX3Trends.onUpdate) {
      window.JX3Trends.onUpdate(function () {
        if (!ui.booted) return;
        if (Route.parse().path === '/trends' || Route.parse().path === '/server-trends') render();
      });
    }
    bindEvents();
    renderSkeleton();
    setTimeout(dataSyncTick, isDevDeployment() ? 1200 : 5000);
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) checkForDataUpdate();
    });

    setTimeout(function () {
      ui.booted = true;
      setBootStatus('正在计算精力收益…');
      try {
        render();
        hideBootLoader();
      } catch (err) {
        if (window.console) console.error(err);
        if (typeof window.bootLoaderFail === 'function') {
          window.bootLoaderFail('加载失败，请刷新重试');
        }
        return;
      }
      if (Store.state.migratedFrom) {
        toast('已切换到苍生铸世 50 级内置配方目录，自定义配方已保留', 'warn');
      }
    }, 180);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
