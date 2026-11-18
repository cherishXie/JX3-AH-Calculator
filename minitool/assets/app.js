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

  const $ = function (sel) { return document.querySelector(sel); };
  const $$ = function (sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); };

  const ui = {
    booted: false,
    theme: 'dark',
    focusKey: null,
    searchTimer: null,
    drawer: null,
    modal: null,
    lastFocus: null,
    lastPath: null
  };

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
    coin: '<circle cx="12" cy="12" r="8.5"/><path d="M9 9h6v6H9z"/><path d="M12 3v3M12 18v3"/>',
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
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"' +
      (cls ? ' class="' + cls + '"' : '') + ' aria-hidden="true">' + p + '</svg>';
  }

  /* ------------------------------------------------------------------ */
  /* 基础读取 / 格式化                                                   */
  /* ------------------------------------------------------------------ */
  function state() { return Store.state; }
  function settings() { return Store.state.settings; }
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
  function currentServerUpdatedAt() {
    let ts = 0;
    const bucket = Store.state.prices[Store.state.serverId] || {};
    Object.keys(bucket).forEach(function (k) {
      const t = bucket[k] && bucket[k].t;
      if (t && t > ts) ts = t;
    });
    return ts ? U.fmtTime(ts) : U.fmtTime(C.SEED_TS);
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
    '/prices': '价格库',
    '/analysis': '精力收益分析'
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
        group: '行情与配方', items: [
          { href: Route.href('/skills/shennong'), label: '生活技艺', icon: 'hammer', path: '/skills', badge: DATA.skills.length },
          { href: Route.href('/prices'), label: '价格库', icon: 'database', path: '/prices', badge: miss || '' }
        ]
      },
      {
        group: '分析', items: [
          { href: Route.href('/analysis'), label: '精力收益', icon: 'chart', path: '/analysis', badge: rows.filter(function (r) { return !r.calc.missing; }).length }
        ]
      }
    ];
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
        '<button class="side-link" data-action="open-data">' + icon('shield') + '<span class="label">数据说明</span></button>' +
        '<button class="side-link" data-action="open-settings">' + icon('settings') + '<span class="label">设置与备份</span></button>' +
        '<button class="side-link" data-action="export-json">' + icon('download') + '<span class="label">查看备份</span><span class="ext">JSON</span></button>' +
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
        '<span class="header-version"><span class="dot"></span><span class="v">' + U.esc(DATA.meta.version) + '</span></span>' +
        '<div class="server-wrap" style="position:relative">' +
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
      '<p class="page-sub">苍生铸世 50 级 · 生活技艺成本与精力收益一览。所有价格按「' + U.esc(server().name) + '」计算，示例价可直接使用，校准后更贴近本服。</p></div>' +
      '<div class="page-tools">' +
        '<span class="badge badge-outline" title="可在设置中修改默认成本口径">成本口径：' + (currentBasis(p) === 'min' ? '取最低' : '市场价') + '</span>' +
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
        '<div class="kpi-meta"><span>' + stats.user + ' 项已校准</span><span class="sep"></span><span>' + stats.seed + ' 项示例价</span><span class="sep"></span><span class="warn">' + stats.missing + ' 项缺价</span></div>' +
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
        '<div class="card-foot"><span>仅按精力收益排序，不含交易税与暴击产出</span><span class="spacer"></span>' +
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
          '<div class="flex" style="margin-top:4px"><a class="btn btn-sm" href="' + Route.href('/prices') + '">校准价格库 ' + icon('arrowRight') + '</a>' +
          '<button class="btn btn-sm" data-action="toggle-server-menu">切换服务器</button></div>' +
        '</div>' +
      '</section>' +
    '</div>';

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
        '<a class="btn" href="' + Route.href('/prices') + '">' + icon('database') + '<span class="txt">价格库</span></a>' +
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
          '<a class="link" href="' + Route.href('/prices') + '">去价格库补价</a>') + '</div>' : '') +
      '</div>';

    if (!filtered.length) {
      html += emptyState('没有匹配的配方', '换一个关键词或品阶，或新建自定义配方。', '<button class="btn btn-sm" data-action="new-recipe" data-skill="' + sk.id + '">' + icon('plus') + '新增</button>', 'list');
    } else {
      html += '<div class="table-wrap tall" style="margin-top:12px"><table class="data"><thead><tr>' +
        '<th class="sticky">' + (sk.type === 'gather' ? '采集点' : '配方 / 产物') + '</th>' +
        '<th>品阶</th>' +
        '<th class="num">' + (sk.type === 'gather' ? '单次产出' : '成本') + '</th>' +
        '<th class="num">产值</th>' +
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
            '<td class="num">' + (sk.type === 'gather' ? U.esc(r.outputNames) : U.fmt(c.totalCost, 2)) + '</td>' +
            '<td class="num">' + U.fmt(c.outputValue, 2) + '</td>' +
            '<td class="num ' + profitCls + '">' + (c.missing ? '—' : U.fmtSigned(c.profit, 2)) + '</td>' +
            '<td class="num">' + U.fmtInt(c.energy) + '</td>' +
            '<td class="num"><b class="' + (c.missing ? 'dim' : c.perEnergy >= 0 ? 'pos' : 'neg') + '">' + perEnergyText(c.perEnergy) + '</b></td>' +
            '<td>' + statusBadge(r) + '</td>' +
            '<td class="actions"><button class="icon-btn" data-action="edit-recipe" data-id="' + U.esc(r.recipe.id) + '" aria-label="编辑 ' + U.esc(r.recipe.name) + '">' + icon('edit') + '</button></td>' +
          '</tr>';
        }).join('') +
        '</tbody></table></div>';
    }
    html += '<div class="card-foot"><span>成本 = 材料 + 手续费；精力收益 = 利润 / 精力</span>' +
      '<span class="sep">·</span><span>' + (basis === 'min' ? '取最低：仅优化材料成本，不计自制中间产物的精力' : '市场价：材料按本服单价计') + '</span>' +
      '<span class="spacer"></span>' +
      (sk.type === 'gather' ? '<span>采集期望产值 = Σ（数量 × 掉率 × 单价）；精力按单次采集折算</span>' : '<span>点击行查看配方详情</span>') + '</div>';
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
      '<div class="card-tools"><a class="btn btn-sm" href="' + Route.href('/prices', { skill: sk.id }) + '">打开完整价格库 ' + icon('arrowRight') + '</a></div></div>' +
      '<div class="table-wrap medium"><table class="data compact"><thead><tr><th>物品</th><th>类型</th><th>品阶</th><th>来源</th><th class="num">本服单价（金）</th><th>状态</th><th class="num">更新时间</th></tr></thead><tbody>' +
      items.map(function (it) {
        const p = Store.price(Store.state.serverId, it.id);
        return '<tr><td><div class="cell-main"><span class="t1">' + U.esc(it.name) + '</span></div></td>' +
          '<td><span class="dim">' + (it.kind === 'product' ? '成品' : '材料') + '</span></td>' +
          '<td>' + tierBadge(tier(it.tier)) + '</td>' +
          '<td class="dim">' + U.esc(it.source || '—') + '</td>' +
          '<td class="num">' + priceInput(it.id, { sm: true }) + '</td>' +
          '<td>' + priceStateBadge(p) + '</td>' +
          '<td class="num dim tiny">' + U.fmtTime(p.t) + '</td></tr>';
      }).join('') +
      '</tbody></table></div><div class="card-foot"><span>示例价来自当前版本样本行情，不代表实时交易行</span></div></section>';
  }

  function dataFoot() {
    const sources = DATA.meta.sources.map(function (s) {
      return '<span class="source-ref">' + U.esc(s.label) + '</span>';
    }).join(' · ');
    return '<div class="data-foot">' + icon('shield') +
      '<div><b style="color:var(--muted)">苍生铸世 · 50 级数据口径</b> · 核验于 ' + U.esc(DATA.meta.verifiedAt) +
      ' · 制造配方/等级/精力/材料来自 JX3BOX 当前版本 API（2026-11-18），收录 154 条代表配方；价格采用 JX3BOX 17 个服务器拍卖样本（梦江南 ' + (DATA.meta.priceCoverage ? DATA.meta.priceCoverage.updated : '—') + '/' + (DATA.meta.priceCoverage ? DATA.meta.priceCoverage.total : '—') + ' 项有效），无报价回退梦江南示例价；采集产出名称已核验，数量为示例。请以本服交易行为准。' +
      '<div style="margin-top:4px">来源：' + sources + '</div></div>' +
      '<div class="links"><button class="btn btn-sm" data-action="open-data">数据说明</button>' +
      '<button class="btn btn-sm" data-action="open-settings">设置</button></div></div>';
  }

  /* ------------------------------------------------------------------ */
  /* 价格库                                                             */
  /* ------------------------------------------------------------------ */
  function filteredItems(p) {
    const q = (p.q || '').trim();
    const skillId = p.skill || '';
    const kind = p.kind || '';
    const missingOnly = p.missing === '1';
    return Store.state.items.filter(function (it) {
      if (skillId && it.skillId !== skillId) return false;
      if (kind && it.kind !== kind) return false;
      if (missingOnly && !Store.price(Store.state.serverId, it.id).missing) return false;
      if (q && !U.includes(it.name + ' ' + skill(it.skillId).name + ' ' + (it.origin || ''), q)) return false;
      return true;
    }).sort(function (a, b) {
      const pa = Store.price(Store.state.serverId, a.id);
      const pb = Store.price(Store.state.serverId, b.id);
      if (pa.missing !== pb.missing) return pa.missing ? 1 : -1;
      return a.name.localeCompare(b.name, 'zh-CN');
    });
  }

  function renderPrices(p) {
    const stats = Calc.stats(Store.state.serverId);
    const items = filteredItems(p);
    const spreads = serverSpreads();
    const opportunity = spreads.filter(function (s) { return s.ratio >= 0.12; }).length;
    const q = p.q || '';

    let html = '<div class="page">';
    html += '<div class="page-head"><div><h1 class="page-title">价格库</h1>' +
      '<p class="page-sub">为「' + U.esc(server().name) + '」填写每种材料与成品的交易行价格。示例价基于当前版本样本行情，可直接参与计算；校准后收益更贴近本服。</p></div>' +
      '<div class="page-tools">' +
        '<button class="btn" data-action="export-csv" data-csv="prices">' + icon('download') + '<span class="txt">查看 CSV</span></button>' +
        '<a class="btn btn-primary" href="' + Route.href('/analysis') + '">' + icon('chart') + '<span class="txt">看收益分析</span></a>' +
      '</div></div>';

    html += '<div class="kpi-grid">' +
      '<div class="kpi"><div class="kpi-label">已校准</div><div class="kpi-value">' + stats.user + '<span class="kpi-unit">/ ' + stats.total + ' 项</span></div>' +
        '<div class="kpi-meta"><span>手动填入的本服价格</span></div><div class="progress is-positive"><i style="width:' + Math.round(stats.calibrated * 100) + '%"></i></div></div>' +
      '<div class="kpi"><div class="kpi-label">示例 / 昨日均价</div><div class="kpi-value">' + stats.seed + '<span class="kpi-unit">项</span></div>' +
        '<div class="kpi-meta"><span>未校准项直接参与计算，标注为「示例」</span></div></div>' +
      '<div class="kpi"><div class="kpi-label">缺少价格</div><div class="kpi-value">' + stats.missing + '<span class="kpi-unit">项</span></div>' +
        '<div class="kpi-meta"><span class="warn">缺价项按 0 计，相关配方标记「缺价」</span></div></div>' +
      '<div class="kpi"><div class="kpi-label">跨服价差机会</div><div class="kpi-value">' + opportunity + '<span class="kpi-unit">项</span></div>' +
        '<div class="kpi-meta"><span>最高价 / 最低价差 ≥ 12% 的物品</span></div></div>' +
    '</div>';

    html += '<div class="grid section-gap">';
    html += '<section class="card col-8"><div class="card-head"><div class="card-head-main">' +
      '<h2 class="card-title">本服物品价格</h2><p class="card-sub">直接在表格中改价，失焦或回车即保存 · 共 ' + items.length + ' 项</p></div>' +
      '<div class="card-tools">' +
        '<div class="search-box">' + icon('search') + '<input class="input" type="search" placeholder="搜索物品" value="' + U.esc(q) + '" data-search="q" data-fkey="search" aria-label="搜索物品"></div>' +
        '<select class="select" data-filter="skill" aria-label="技艺筛选" style="width:96px">' + skillOptions(p.skill || '') + '</select>' +
        '<select class="select" data-filter="kind" aria-label="类型筛选" style="width:88px"><option value="">全部类型</option>' +
          '<option value="material"' + (p.kind === 'material' ? ' selected' : '') + '>材料</option>' +
          '<option value="product"' + (p.kind === 'product' ? ' selected' : '') + '>成品</option></select>' +
        '<label class="switch"><input type="checkbox" data-toggle="missing" data-value="1"' + (p.missing === '1' ? ' checked' : '') + '><span class="track"></span>仅缺价</label>' +
        '<button class="icon-btn" data-action="open-import-prices" aria-label="批量导入价格">' + icon('upload') + '</button>' +
      '</div></div>';

    if (!items.length) {
      html += emptyState('没有匹配的物品', '调整搜索或筛选条件；也可以在价格库新增自定义成品后补价。', '<a class="btn btn-sm" href="' + Route.href('/skills/shennong') + '">去生活技艺</a>');
    } else {
      html += '<div class="table-wrap tall"><table class="data"><thead><tr>' +
        '<th class="sticky">物品</th><th>技艺</th><th>类型</th><th>品阶</th><th>来源</th>' +
        '<th class="num">本服单价（金）</th><th>价格状态</th><th class="num">更新时间</th><th></th>' +
      '</tr></thead><tbody>' +
      items.map(function (it) {
        const p = Store.price(Store.state.serverId, it.id);
        const sk = skill(it.skillId);
        return '<tr data-item-row="' + U.esc(it.id) + '">' +
          '<td class="sticky"><div class="cell-main">' + skillIcon(sk, 'sm') + '<div class="txt"><div class="t1">' + U.esc(it.name) +
            (it.custom ? ' <span class="badge badge-custom">自定义</span>' : '') +
            '</div><div class="t2">' + U.esc(it.origin || '') + '</div></div></div></td>' +
          '<td class="dim">' + U.esc(sk.name) + '</td>' +
          '<td><span class="dim">' + (it.kind === 'product' ? '成品' : '材料') + '</span></td>' +
          '<td>' + tierBadge(tier(it.tier)) + '</td>' +
          '<td class="dim">' + U.esc(it.source || '—') + '</td>' +
          '<td class="num">' + priceInput(it.id) + '</td>' +
          '<td>' + priceStateBadge(p) + '</td>' +
          '<td class="num dim tiny">' + U.fmtTime(p.t) + '</td>' +
          '<td class="actions">' + (p.user ? '<button class="icon-btn" data-action="clear-price" data-id="' + U.esc(it.id) + '" title="恢复示例价" aria-label="恢复 ' + U.esc(it.name) + ' 的示例价">' + icon('refresh') + '</button>' : '') + '</td>' +
        '</tr>';
      }).join('') +
      '</tbody></table></div>' +
      '<div class="card-foot"><span>各服优先取 JX3BOX 拍卖样本；无报价回退梦江南示例价</span><span class="spacer"></span><span>共 ' + items.length + ' 项</span></div>';
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
      '<p class="tiny dim" style="line-height:16px">物品名目来自 JX3BOX 当前版本配方；各服优先取 JX3BOX 拍卖样本，过滤异常/低样本；该服无报价时回退梦江南示例价。所有价格都可编辑，不代表实时行情。</p>' +
      '<div class="flex" style="margin-top:10px"><button class="btn btn-sm" data-action="open-data">查看完整来源</button></div>' +
      '</div></section>';
    html += '</aside></div>';

    html += '<div class="grid section-gap"><section class="card col-12"><div class="card-head"><div class="card-head-main">' +
      '<h2 class="card-title">跨服比价</h2><p class="card-sub">同一物品各服最高/最低价 · 用于换服采购与上架参考</p></div>' +
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
      '</section></div>';

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
  function renderAnalysis(p) {
    const basis = currentBasis(p);
    const complete = p.complete !== '0';
    const type = p.type || 'all';
    const rows0 = currentRows(p);
    let rows = filterRows(rows0, p);
    if (complete) rows = rows.filter(function (r) { return !r.calc.missing; });
    const sorted = sortRows(rows, p.sort || 'perEnergy', p.dir || 'desc');
    const valid = rows0.filter(function (r) { return !r.calc.missing && r.calc.perEnergy != null; });
    const best = Calc.bestOf(rows);
    const median = Calc.median(valid.map(function (r) { return r.calc.perEnergy; }));
    const negatives = rows.filter(function (r) { return !r.calc.missing && r.calc.profit < 0; }).length;
    const sim = Calc.simulate(rows, settings().energyBudget);
    const scatterRows = rows.filter(function (r) { return !r.calc.missing; });

    let html = '<div class="page">';
    html += '<div class="page-head"><div><h1 class="page-title">精力收益分析</h1>' +
      '<p class="page-sub">把每一份精力换成金币：比较采集与制造、成本与收益、单次与满精力产出。成本口径为「' + (basis === 'min' ? '市场价与自制成本取低（仅优化成本，不计中间产物精力）' : '市场价') + '」。</p></div>' +
      '<div class="page-tools">' +
        '<div class="seg" role="group" aria-label="成本口径">' +
          '<button class="' + (basis === 'market' ? 'active' : '') + '" data-filter="basis" data-value="" title="材料按本服市场价计算">市场价</button>' +
          '<button class="' + (basis === 'min' ? 'active' : '') + '" data-filter="basis" data-value="min" title="材料取市场价与自制成本较低者；不把自制中间产物的精力计入本配方">取最低（仅成本）</button>' +
        '</div>' +
        '<button class="btn" data-action="export-csv" data-csv="analysis">' + icon('download') + '<span class="txt">查看 CSV</span></button>' +
      '</div></div>';

    html += '<div class="kpi-grid">' +
      '<div class="kpi"><div class="kpi-label">最高精力收益</div><div class="kpi-value">' + (best ? U.fmt(best.calc.perEnergy, 2) : '—') + '<span class="kpi-unit">金/精力</span></div>' +
        '<div class="kpi-meta">' + (best ? icon('spark') + '<span class="strong">' + U.esc(best.recipe.name) + '</span><span class="sep"></span><span>' + U.esc(best.skill.name) + '</span>' : '<span>当前筛选无完整数据</span>') + '</div></div>' +
      '<div class="kpi"><div class="kpi-label">全站中位</div><div class="kpi-value">' + (median == null ? '—' : U.fmt(median, 2)) + '<span class="kpi-unit">金/精力</span></div>' +
        '<div class="kpi-meta"><span>用于判断一个配方是否值得做</span></div></div>' +
      '<div class="kpi"><div class="kpi-label">亏损配方</div><div class="kpi-value">' + negatives + '<span class="kpi-unit">/ ' + rows.length + ' 项</span></div>' +
        '<div class="kpi-meta"><span class="down">利润为负，建议观望或改价</span></div><div class="progress is-warn"><i style="width:' + (rows.length ? Math.round(negatives / rows.length * 100) : 0) + '%"></i></div></div>' +
      '<div class="kpi"><div class="kpi-label">满精力预估</div><div class="kpi-value">' + U.fmt(sim.profit, 2) + '<span class="kpi-unit">金</span></div>' +
        '<div class="kpi-meta"><span>预算 ' + U.fmtInt(settings().energyBudget) + ' 精力 · 用尽 ' + U.fmtInt(sim.used) + '</span></div></div>' +
    '</div>';

    const chartRows = sorted.filter(function (r) { return !r.calc.missing && r.calc.perEnergy != null; }).slice(0, 15).map(function (r) {
      return {
        label: r.recipe.name, meta: r.skill.name, value: r.calc.perEnergy,
        color: r.type === 'gather' ? Charts.color.gather : Charts.color.craft,
        id: r.recipe.id,
        tip: r.recipe.name + ' · ' + U.fmt(r.calc.profit, 2) + ' 金利润 / ' + U.fmtInt(r.calc.energy) + ' 精力'
      };
    });

    html += '<div class="grid section-gap"><section class="card col-12"><div class="card-head"><div class="card-head-main">' +
      '<h2 class="card-title">精力收益排行</h2><p class="card-sub">按每点精力收益排序 · 最多 15 项 · 虚线为全站中位<span class="mobile-only"> · 左右滑动查看</span></p></div>' +
      '<div class="card-tools">' +
        '<div class="seg seg-sm" role="group" aria-label="类型筛选">' +
          '<button class="' + (type === 'all' ? 'active' : '') + '" data-filter="type" data-value="">全部</button>' +
          '<button class="' + (type === 'craft' ? 'active' : '') + '" data-filter="type" data-value="craft">制造</button>' +
          '<button class="' + (type === 'gather' ? 'active' : '') + '" data-filter="type" data-value="gather">采集</button>' +
        '</div>' +
        '<select class="select" data-filter="skill" aria-label="技艺筛选" style="width:92px">' + skillOptions(p.skill || '') + '</select>' +
        '<select class="select" data-filter="tier" aria-label="品阶筛选" style="width:92px">' + tierOptions(p.tier || '') + '</select>' +
        '<label class="switch"><input type="checkbox" data-toggle="complete" data-value="1"' + (complete ? ' checked' : '') + '><span class="track"></span>仅数据完整</label>' +
        '<button class="icon-btn" data-action="export-chart" data-target="chart-analysis" aria-label="导出排行图">' + icon('download') + '</button>' +
      '</div></div>' +
      '<div class="card-body tight" id="chart-analysis">' +
        Charts.barH(chartRows, {
          palette: Charts.palette(ui.theme), unit: ' 金/精力', refLine: median,
          refLabel: '全站中位', limit: 15, emptyText: '当前筛选无完整数据', ariaLabel: '精力收益排行'
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
    const comparePool = sortRows(rows0.filter(function (r) { return !r.calc.missing; }), 'perEnergy', 'desc');
    const aId = p.a && comparePool.some(function (r) { return r.recipe.id === p.a; }) ? p.a : (comparePool[0] ? comparePool[0].recipe.id : '');
    const bId = p.b && comparePool.some(function (r) { return r.recipe.id === p.b; }) ? p.b : (comparePool[1] ? comparePool[1].recipe.id : '');
    const ra = comparePool.find(function (r) { return r.recipe.id === aId; });
    const rb = comparePool.find(function (r) { return r.recipe.id === bId; });

    html += '<div class="grid section-gap">' +
      '<section class="card col-7"><div class="card-head"><div class="card-head-main"><h2 class="card-title">两个制品，做哪个？</h2>' +
        '<p class="card-sub">同口径对比成本、产值、精力与满预算产出</p></div></div>' +
        '<div class="card-body">' +
          '<div class="split-2" style="gap:10px">' +
            '<label class="form-field"><span style="font-size:10.5px;color:var(--muted)">制品 A</span><select class="select" data-compare="a">' +
              comparePool.map(function (r) { return '<option value="' + U.esc(r.recipe.id) + '"' + (r.recipe.id === aId ? ' selected' : '') + '>' + U.esc(r.recipe.name) + ' · ' + U.esc(r.skill.name) + '</option>'; }).join('') +
            '</select></label>' +
            '<label class="form-field"><span style="font-size:10.5px;color:var(--muted)">制品 B</span><select class="select" data-compare="b">' +
              comparePool.map(function (r) { return '<option value="' + U.esc(r.recipe.id) + '"' + (r.recipe.id === bId ? ' selected' : '') + '>' + U.esc(r.recipe.name) + ' · ' + U.esc(r.skill.name) + '</option>'; }).join('') +
            '</select></label>' +
          '</div>' +
          (ra && rb ? compareTable(ra, rb) + '<div class="hairline"></div>' +
            '<div class="tiny dim" style="margin-bottom:4px">精力收益对比（金/精力）</div>' +
            Charts.diffBar({ label: ra.recipe.name, value: ra.calc.perEnergy || 0 }, { label: rb.recipe.name, value: rb.calc.perEnergy || 0 }, { palette: Charts.palette(ui.theme), aColor: Charts.color.craft, bColor: Charts.color.warning }) +
            '<div class="reading-guide" style="padding:4px 0 0">按当前成本口径与服务器价格计算；精力按满预算可做次数折算。</div>'
            : emptyState('暂无可对比的完整配方', '补齐价格或关闭「仅数据完整」。', '', 'compare')) +
        '</div></section>' +

      '<section class="card col-5"><div class="card-head"><div class="card-head-main"><h2 class="card-title">满精力怎么分配？</h2>' +
        '<p class="card-sub">按收益/精力从高到低贪心分配，可重复制作</p></div></div>' +
        '<div class="card-body">' +
          '<div class="flex" style="margin-bottom:12px"><label class="tiny dim" for="budget-input">精力预算</label>' +
          '<input class="input" id="budget-input" type="number" min="0" step="100" value="' + settings().energyBudget + '" data-setting="energyBudget" style="width:110px">' +
          '<span class="tiny dim">点</span><span class="spacer"></span><span class="badge badge-outline">' + U.fmtInt(sim.allocations.length) + ' 项参与</span></div>' +
          (sim.allocations.length ? '<div class="info-rows">' +
            '<div class="info-row"><span class="k">预计总收益</span><span class="v pos">+' + U.fmt(sim.profit, 2) + ' 金</span></div>' +
            '<div class="info-row"><span class="k">精力用尽</span><span class="v">' + U.fmtInt(sim.used) + ' / ' + U.fmtInt(sim.budget) + '</span></div>' +
            '<div class="info-row"><span class="k">剩余精力</span><span class="v">' + U.fmtInt(sim.remaining) + '</span></div>' +
            '</div><div class="hairline"></div><div class="rec-list">' +
            sim.allocations.slice(0, 5).map(function (a, i) {
              return '<div class="rec-item"><span class="rec-rank">' + (i + 1) + '</span><div class="rec-main"><div class="nm">' + U.esc(a.row.recipe.name) + '</div>' +
                '<div class="ds">' + U.esc(a.row.skill.name) + ' · ' + a.count + ' 次 × ' + U.fmtInt(a.row.calc.energy) + ' 精力</div></div>' +
                '<div class="rec-val"><b class="pos">+' + U.fmt(a.profit, 2) + '</b><span>金</span></div></div>';
            }).join('') + '</div>' +
            (sim.allocations.length > 5 ? '<div class="tiny dim" style="margin-top:8px">其余 ' + (sim.allocations.length - 5) + ' 项已计入总收益</div>' : '')
            : emptyState('当前预算下没有正收益配方', '提高预算、校准价格，或切换成本口径。', '', 'coin')) +
        '</div>' +
        '<div class="card-foot"><span>模拟不计交易税、暴击额外产出与市场深度</span></div></section>' +
    '</div>';

    html += '<div class="grid section-gap"><section class="card col-12"><div class="card-head"><div class="card-head-main">' +
      '<h2 class="card-title">完整配方收益表</h2><p class="card-sub">' + sorted.length + ' 条 · 点击行查看成本拆解与配方编辑</p></div>' +
      '<div class="card-tools"><button class="btn btn-sm" data-action="export-csv" data-csv="analysis">' + icon('download') + ' 导出</button></div></div>' +
      '<div class="table-wrap tall"><table class="data"><thead><tr>' +
        '<th class="sticky"># / 配方</th><th>技艺</th><th>类型</th>' +
        sortHeader('总成本', 'cost', p, 'num') + sortHeader('产值', 'output', p, 'num') +
        sortHeader('利润', 'profit', p, 'num') + sortHeader('精力', 'energy', p, 'num') +
        sortHeader('收益/精力', 'perEnergy', p, 'num') + sortHeader('毛利率', 'margin', p, 'num') +
        '<th>状态</th>' +
      '</tr></thead><tbody>' +
      (sorted.length ? sorted.map(function (r, i) {
        const c = r.calc;
        return '<tr class="clickable" data-recipe-id="' + U.esc(r.recipe.id) + '" tabindex="0">' +
          '<td class="sticky"><div class="cell-main"><span class="rec-rank">' + (i + 1) + '</span><div class="txt"><div class="t1">' + U.esc(r.recipe.name) + '</div>' +
            '<div class="t2">' + U.esc(r.outputNames) + '</div></div></div></td>' +
          '<td class="dim">' + U.esc(r.skill.name) + '</td>' +
          '<td>' + typeBadge(r.type) + '</td>' +
          '<td class="num">' + U.fmt(c.totalCost, 2) + '</td>' +
          '<td class="num">' + U.fmt(c.outputValue, 2) + '</td>' +
          '<td class="num ' + (c.missing ? 'dim' : c.profit >= 0 ? 'pos' : 'neg') + '">' + (c.missing ? '—' : U.fmtSigned(c.profit, 2)) + '</td>' +
          '<td class="num">' + U.fmtInt(c.energy) + '</td>' +
          '<td class="num"><b class="' + (c.missing ? 'dim' : c.perEnergy >= 0 ? 'pos' : 'neg') + '">' + perEnergyText(c.perEnergy) + '</b></td>' +
          '<td class="num dim">' + (c.margin == null ? '—' : U.fmtPct(c.margin, 0)) + '</td>' +
          '<td>' + statusBadge(r) + '</td>' +
        '</tr>';
      }).join('') : '<tr><td colspan="10">' + emptyState('没有匹配的配方', '清空搜索或筛选条件再试。', '', 'search') + '</td></tr>') +
      '</tbody></table></div>' +
      '<div class="card-foot"><span>精力收益 =（产值 − 材料成本 − 手续费）÷ 精力；毛利率 = 利润 ÷ 产值</span><span class="spacer"></span><span>已排除/标记缺价项</span></div>' +
      '</section></div>';

    html += dataFoot();
    html += '</div>';
    return html;
  }

  function compareTable(a, b) {
    const dims = [
      { label: '总成本', av: a.calc.totalCost, bv: b.calc.totalCost, better: 'low', fmt: 2, unit: '金' },
      { label: '产值', av: a.calc.outputValue, bv: b.calc.outputValue, better: 'high', fmt: 2, unit: '金' },
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
    if (ui.drawer.mode === 'edit') {
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
      '<div class="drawer-kpi"><span>产值</span><b>' + U.fmt(c.outputValue, 2) + '<small>金</small></b></div>' +
      '<div class="drawer-kpi"><span>单次利润</span><b class="' + profitCls + '">' + (c.missing ? '—' : U.fmtSigned(c.profit, 2)) + '<small>金</small></b></div>' +
    '</div>';
    html += '<div class="flex" style="margin-bottom:14px"><span class="badge ' + (c.missing ? 'badge-warning' : c.profit >= 0 ? 'badge-positive' : 'badge-danger') + '">' +
      (c.missing ? '存在缺价，收益被低估' : c.profit >= 0 ? '盈利' : '亏损') + '</span>' +
      '<span class="tiny dim">精力收益</span><b class="' + (c.missing ? 'dim' : c.perEnergy >= 0 ? 'pos' : 'neg') + '" style="font-size:16px">' + perEnergyText(c.perEnergy) + '</b><span class="tiny dim">金/精力</span>' +
      '<span class="spacer"></span><span class="tiny dim">' + (basis === 'min' ? '成本口径：取最低（仅成本）' : '成本口径：市场价') + '</span></div>';

    if (c.missing) {
      html += notice('该配方有 ' + (c.missingMaterials + c.missingOutputs) + ' 项未定价，计算按 0 计。请在下方或价格库补齐。', 'warn');
      html += '<div style="height:12px"></div>';
    }

    html += '<div class="section-title">产物与售价<span class="line"></span></div>';
    html += '<div class="table-wrap" style="border-top:0"><table class="data compact"><thead><tr><th>产物</th><th class="num">数量 / 掉率</th><th class="num">单价（金）</th><th class="num">期望小计</th></tr></thead><tbody>' +
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
      '<div class="info-row"><span class="k">满 ' + U.fmtInt(settings().energyBudget) + ' 精力可做</span><span class="v">' + (c.energy > 0 ? Math.floor(settings().energyBudget / c.energy) + ' 次' : '—') + '</span></div>' +
      '<div class="info-row"><span class="k">毛利率</span><span class="v">' + (c.margin == null ? '—' : U.fmtPct(c.margin, 1)) + '</span></div>' +
      '</div>';
    html += '<p class="tiny dim" style="line-height:16px;margin-top:10px">成本 = Σ（材料数量 × 单价）+ 手续费；利润 = 产值 − 成本；精力收益 = 利润 ÷ 精力。交易税、暴击额外产出与署名溢价未自动计入。</p>';

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
      html += '<p class="tiny dim" style="margin-top:6px">只填数量，单价统一在「价格库」维护；参考小计按当前本服价格。</p>';
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
  function showExportModal(detail) {
    if (!detail || detail.binary) {
      toast('小工具内不支持导出图片，请查看数据说明', 'warn');
      return;
    }
    openModal('export-text', detail);
  }
  window.addEventListener('jx3-export', function (event) {
    showExportModal(event.detail || {});
  });

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
    } else if (ui.modal.type === 'export-text') {
      const d = ui.modal.data || {};
      title = d.filename || '导出内容';
      body = '<p class="tiny dim" style="margin-bottom:8px;line-height:18px">小工具内不提供文件下载。请长按或选中下方文本，使用系统菜单复制；关闭后内容不会保留。</p>' +
        '<textarea class="textarea" rows="12" readonly spellcheck="false">' + U.esc(d.content || '') + '</textarea>';
      foot = '<button class="btn btn-primary" data-action="close-modal">关闭</button>';
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
      '<label class="form-field"><span>默认主题</span><select class="select" data-setting="theme"><option value="dark"' + (st.theme !== 'light' ? ' selected' : '') + '>暗色</option><option value="light"' + (st.theme === 'light' ? ' selected' : '') + '>亮色</option></select></label>' +
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
      '<button class="btn btn-sm" data-action="export-json">' + icon('download') + '查看 JSON 备份</button>' +
      '<button class="btn btn-sm" data-action="open-import-json">' + icon('upload') + '导入备份</button>' +
      '<button class="btn btn-sm" data-action="clear-prices">' + icon('refresh') + '清空本服价格</button>' +
      '<button class="btn btn-sm" data-action="reset-catalog">' + icon('refresh') + '恢复示例配方</button>' +
      '<button class="btn btn-sm btn-danger" data-action="reset-all">' + icon('trash') + '重置全部数据</button>' +
    '</div>' +
    '<div class="verification" style="margin-top:12px"><span class="ok">' + U.esc(DATA.meta.version) + '</span><span>数据版本 ' + U.esc(DATA.meta.catalogVersion) +
      ' · 核验于 ' + U.esc(DATA.meta.verifiedAt) + ' · 自定义配方 ' + Store.state.recipes.filter(function (r) { return r.custom; }).length + ' 个</span></div>';
  }

  function dataBody() {
    const src = DATA.meta.sources.map(function (s) {
      return '<div style="padding:8px 0;border-bottom:1px solid var(--border-soft)">' +
        '<div style="font-weight:600;color:var(--text)">' + U.esc(s.label) + '</div>' +
        '<div class="tiny dim" style="margin-top:3px;line-height:16px">' + U.esc(s.note) + '</div>' +
        '</div>';
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
        '<div class="info-row"><span class="k">产值</span><span class="v">Σ（产物数量 × 本服单价）</span></div>' +
        '<div class="info-row"><span class="k">精力收益</span><span class="v">（产值 − 总成本）÷ 精力</span></div>' +
        '<div class="info-row"><span class="k">取最低口径</span><span class="v">逐层取低，仅优化成本、不计中间精力</span></div>' +
        '<div class="info-row"><span class="k">当前收录</span><span class="v">' + U.esc(DATA.meta.scope || '') + '</span></div>' +
      '</div>' +
      '<div class="section-title">重要边界<span class="line"></span></div>' +
      '<div class="notice">' + icon('alert') + '<div>' +
        '<b>制造配方/等级/精力/材料/产出范围来自 JX3BOX 技艺助手 API（2026-11-18）；产出价优先用样本价，缺失/异常时按成本估算示例。</b>' +
        '旧版本（90/100/130 级）数值不适用；采集为待实测示例。采集在游戏内消耗体力，本工具按精力口径统一折算，可在设置中调整默认值。' +
        '交易税、暴击额外产出、署名溢价与市场深度未自动计入，可通过手续费或材料成本手动修正。' +
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
    const out = [['排名', '配方', '技艺', '类型', '品阶', '等级', '产物', '材料成本', '手续费', '总成本', '产值', '利润', '精力', '精力收益(金/精力)', '毛利率', '数据状态', '核验状态']];
    rows.forEach(function (r, i) {
      out.push([
        i + 1, r.recipe.name, r.skill.name, r.type === 'gather' ? '采集' : '制造', r.tier.name, r.recipe.level,
        r.outputNames, U.round(r.calc.materialCost, 2), U.round(r.calc.fee, 2), U.round(r.calc.totalCost, 2),
        U.round(r.calc.outputValue, 2), U.round(r.calc.profit, 2), r.calc.energy,
        r.calc.perEnergy == null ? '' : U.round(r.calc.perEnergy, 2),
        r.calc.margin == null ? '' : U.fmtPct(r.calc.margin, 1),
        r.calc.missing ? '缺价' : r.calc.profit < 0 ? '亏损' : '正常',
        r.recipe.custom ? '自定义' : r.recipe.verified ? '配方已核验' : '示例'
      ]);
    });
    U.emitExport('剑网三物价助手_精力收益_' + server().name + '_' + new Date().toISOString().slice(0, 10) + '.csv', U.csv(out), 'text/csv;charset=utf-8');
    toast(window.__MINITOOL__ ? '导出内容已打开，可长按复制' : '已导出 ' + rows.length + ' 条收益数据');
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
    U.emitExport('剑网三物价助手_价格库_' + server().name + '_' + new Date().toISOString().slice(0, 10) + '.csv', U.csv(out), 'text/csv;charset=utf-8');
    toast(window.__MINITOOL__ ? '导出内容已打开，可长按复制' : '已导出 ' + items.length + ' 条价格');
  }

  function exportChartPNG(targetId, filename) {
    if (window.__MINITOOL__) { toast('小工具内不支持导出图片，请查看数据说明', 'warn'); return; }
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
        U.emitExport(filename + '_' + server().name + '.png', blob);
        toast('图表已导出 PNG');
      }, 'image/png');
    };
    img.onerror = function () { toast('图表导出失败', 'error'); };
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(data);
  }

  function downloadPriceTemplate() {
    const rows = [['物品名', '价格']];
    Store.state.items.forEach(function (it) { rows.push([it.name, '']); });
    U.emitExport('剑网三物价助手_价格模板.csv', U.csv(rows), 'text/csv;charset=utf-8');
    toast(window.__MINITOOL__ ? '模板已打开，可长按复制' : '已下载价格录入模板');
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
      case 'open-data': closeMenu(); openModal('data'); break;
      case 'open-import-json': closeModal(); openModal('import-json'); break;
      case 'open-add-server': closeMenu(); openModal('add-server'); break;
      case 'toggle-theme': {
        const next = ui.theme === 'light' ? 'dark' : 'light';
        Store.updateSettings({ theme: next });
        applyTheme(next);
        render();
        toast('已切换到' + (next === 'light' ? '亮色' : '暗色') + '主题');
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
      case 'export-csv': {
        if (el.getAttribute('data-csv') === 'prices') csvPrices();
        else csvAnalysis();
        break;
      }
      case 'export-json': {
        U.emitExport('剑网三物价助手_备份_' + new Date().toISOString().slice(0, 10) + '.json', Store.exportJSON(), 'application/json;charset=utf-8');
        toast(window.__MINITOOL__ ? '备份内容已打开，可长按复制' : '备份已导出');
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
    const chartEl = e.target.closest('.chart-bar[data-recipe], .chart-point[data-recipe]');
    if (chartEl) {
      openRecipe(chartEl.getAttribute('data-recipe'));
      return;
    }
    const row = e.target.closest('tr[data-recipe-id]');
    if (row && !e.target.closest('input, select, button, a, label')) {
      openRecipe(row.getAttribute('data-recipe-id'));
    }
  }

  function onChange(e) {
    const t = e.target;
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
      refreshAll();
      return;
    }
    if (t.matches('[data-filter]')) {
      const key = t.getAttribute('data-filter');
      updateParams({ [key]: t.value });
      return;
    }
    if (t.matches('[data-toggle]')) {
      const key = t.getAttribute('data-toggle');
      if (key === 'only') updateParams({ only: t.checked ? 'profit' : '' });
      if (key === 'complete') updateParams({ complete: t.checked ? '1' : '0' });
      if (key === 'missing') updateParams({ missing: t.checked ? '1' : '' });
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
      if (key === 'energyBudget') v = Math.max(0, Math.round(v));
      Store.updateSettings({ [key]: v });
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

  function onInput(e) {
    const t = e.target;
    if (t.matches('[data-search]')) {
      clearTimeout(ui.searchTimer);
      ui.searchTimer = setTimeout(function () {
        const el = document.querySelector('[data-search="' + t.getAttribute('data-search') + '"]');
        const value = el ? el.value : '';
        updateParams({ [t.getAttribute('data-search')]: value }, { replace: true });
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
      const sb = document.getElementById('sidebar');
      if (sb && sb.classList.contains('open')) { sb.classList.remove('open'); return; }
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
    document.addEventListener('keydown', onKeydown);
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
  }

  function refreshAll() {
    render();
    if (ui.drawer) renderDrawer();
    if (ui.modal) renderModal();
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

  function render() {
    const route = Route.parse();
    const p = route.params;
    syncServerFromParams(p);
    if (route.path === '/skills' || route.path === '/skills/') {
      history.replaceState(null, '', Route.href('/skills/shennong'));
      return render();
    }
    const active = document.activeElement;
    const fkey = active && active.getAttribute ? active.getAttribute('data-fkey') : null;
    const selStart = active && typeof active.selectionStart === 'number' ? active.selectionStart : null;
    const pathChanged = route.path !== ui.lastPath;

    if (pathChanged) {
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

    let html = '';
    let title = '总览';
    if (route.path === '/' || route.path === '/overview') {
      html = renderOverview(p); title = '总览';
    } else if (route.path.indexOf('/skills') === 0) {
      html = renderSkills(route.path, p);
      const sid = route.path.split('/')[2];
      title = '生活技艺 · ' + (C.skillOf(sid) ? C.skillOf(sid).name : '');
    } else if (route.path === '/prices') {
      html = renderPrices(p); title = '价格库';
    } else if (route.path === '/analysis') {
      html = renderAnalysis(p); title = '精力收益分析';
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
    document.title = title + ' · 剑网三物价助手 | JX3 生活技艺计算器';
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
  }

  function boot() {
    function startApp() {
      Store.init();
    ui.theme = settings().theme === 'light' ? 'light' : 'dark';
    applyTheme(ui.theme);
    syncServerFromParams(Route.parse().params);
    if (!location.hash) {
      history.replaceState(null, '', Route.href('/overview'));
    }
    window.App = {
      handleRoute: function () {
        if (ui.booted) render();
      }
    };
    bindEvents();
    renderSkeleton();
    setTimeout(function () {
      ui.booted = true;
      render();
      if (Store.state.migratedFrom) {
        toast('已切换到苍生铸世 50 级内置配方目录，自定义配方已保留', 'warn');
      }
    }, 180);
  
    }
    var ready = window.__JX3StorageReady;
    if (ready && typeof ready.then === 'function') ready.then(startApp, startApp);
    else startApp();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
