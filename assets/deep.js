/* =========================================================================
   剑网三物价助手 · 深度分析
   -------------------------------------------------------------------------
   纯计算模块：把「一线采集物 / 中间物 / 成品」的价格变化，与配方成本、
   主产物收入放在同一口径下，输出每日 / 每周的涨跌结构、成本传导与利润
   挤压。页面渲染留在 app.js，方便在 Node 里单独测试。
   ========================================================================= */
(function () {
  'use strict';

  const DATA = window.JX3Data || {};

  const CLASSES = {
    raw: {
      id: 'raw',
      name: '一线采集物',
      short: '一线',
      desc: '采集产出，以及未被任何配方制造、但会进入配方的上游原料',
      color: '#2E9E78'
    },
    mid: {
      id: 'mid',
      name: '中间物',
      short: '中间',
      desc: '由配方制造、又被其他配方继续消耗的半成品',
      color: '#E8B44A'
    },
    fin: {
      id: 'fin',
      name: '成品',
      short: '成品',
      desc: '配方最终产物，不再作为其他配方的材料',
      color: '#5B8FF9'
    }
  };
  const CLASS_ORDER = ['raw', 'mid', 'fin'];

  // 低价物品的百分比很容易被 1 铜的跳动放大；只影响榜单，不影响中位数。
  const TOP_MIN_PRICE = 1;
  const TOP_MIN_CHANGE = 0.02;
  const MIN_ROW_PRICE = 0.05;

  function isPrice(value) {
    return typeof value === 'number' && isFinite(value) && value > 0;
  }

  function median(values) {
    const list = (values || []).filter(function (v) { return typeof v === 'number' && isFinite(v); })
      .sort(function (a, b) { return a - b; });
    if (!list.length) return null;
    const mid = Math.floor((list.length - 1) / 2);
    return list.length % 2 ? list[mid] : (list[mid] + list[mid + 1]) / 2;
  }

  function mean(values) {
    const list = (values || []).filter(function (v) { return typeof v === 'number' && isFinite(v); });
    if (!list.length) return null;
    return list.reduce(function (sum, v) { return sum + v; }, 0) / list.length;
  }

  function dayKey(at) {
    return String(at || '').slice(0, 10);
  }

  function dayDistance(from, to) {
    const a = Date.parse(String(from) + 'T00:00:00+08:00');
    const b = Date.parse(String(to) + 'T00:00:00+08:00');
    if (!isFinite(a) || !isFinite(b)) return 0;
    return Math.max(0, Math.round((b - a) / 86400000));
  }

  function priceOf(point, id) {
    const value = point && point.prices && point.prices[id];
    return isPrice(value) ? value : null;
  }

  function quoteOf(point, id) {
    const value = point && point.quotes && point.quotes[id];
    return isPrice(value) ? value : null;
  }

  function skillName(id) {
    const skill = (DATA.skills || []).filter(function (s) { return s.id === id; })[0];
    return skill ? skill.name : '';
  }

  function tierName(id) {
    const tier = (DATA.tiers || []).filter(function (t) { return t.id === id; })[0];
    return tier ? tier.name : '';
  }

  /* ------------------------------------------------------------------ */
  /* 目录：物品分类 + 配方主产物                                         */
  /* ------------------------------------------------------------------ */
  let catalogCache = null;

  function buildCatalog() {
    if (catalogCache) return catalogCache;

    const items = Object.create(null);
    const list = [];
    const gatherSkill = Object.create(null);
    const gatherRecipe = Object.create(null);
    const produceInfo = Object.create(null);
    const consumeInfo = Object.create(null);
    const craftRecipes = [];

    (DATA.recipes || []).forEach(function (recipe) {
      if (!recipe) return;
      const outputs = Array.isArray(recipe.outputs) ? recipe.outputs : [];
      const materials = Array.isArray(recipe.materials) ? recipe.materials : [];
      if (recipe.kind === 'gather') {
        outputs.forEach(function (out) {
          if (!out || !out.item) return;
          if (!gatherSkill[out.item]) gatherSkill[out.item] = recipe.skillId || '';
          if (!gatherRecipe[out.item]) gatherRecipe[out.item] = recipe.id;
        });
        return;
      }
      outputs.forEach(function (out) {
        if (!out || !out.item) return;
        const info = produceInfo[out.item] || (produceInfo[out.item] = { skills: [], recipes: [] });
        if (recipe.skillId && info.skills.indexOf(recipe.skillId) === -1) info.skills.push(recipe.skillId);
        if (recipe.id) info.recipes.push(recipe.id);
      });
      materials.forEach(function (mat) {
        if (!mat || !mat.item) return;
        const info = consumeInfo[mat.item] || (consumeInfo[mat.item] = { skills: [], recipes: [] });
        if (recipe.skillId && info.skills.indexOf(recipe.skillId) === -1) info.skills.push(recipe.skillId);
        if (recipe.id) info.recipes.push(recipe.id);
      });

      const primary = outputs.filter(function (out) { return out && out.item; })[0];
      if (!primary) return;
      const productItem = (DATA.items || []).filter(function (item) { return item.id === primary.item; })[0];
      craftRecipes.push({
        id: recipe.id,
        name: recipe.name || (productItem ? productItem.name : primary.item),
        skillId: recipe.skillId || '',
        skillName: skillName(recipe.skillId),
        level: recipe.level,
        tier: recipe.tier,
        energy: recipe.energy,
        productId: primary.item,
        productName: productItem ? productItem.name : primary.item,
        productQty: Number(primary.qty) > 0 ? Number(primary.qty) : 1,
        materials: materials.filter(function (mat) { return mat && mat.item; }).map(function (mat) {
          return { id: mat.item, qty: Number(mat.qty) > 0 ? Number(mat.qty) : 1 };
        })
      });
    });

    (DATA.items || []).forEach(function (item) {
      if (!item || !item.id) return;
      const produced = produceInfo[item.id];
      const consumed = consumeInfo[item.id];
      let cls = '';
      if (gatherSkill[item.id]) cls = 'raw';
      else if (produced && consumed) cls = 'mid';
      else if (produced) cls = 'fin';
      else if (consumed) cls = 'raw';
      if (!cls) return;

      const skills = cls === 'raw'
        ? (gatherSkill[item.id] ? [gatherSkill[item.id]] : (consumed ? consumed.skills : []))
        : (produced ? produced.skills : []);
      const recipeId = cls === 'raw'
        ? (gatherRecipe[item.id] || (consumed ? consumed.recipes[0] : null))
        : (produced ? produced.recipes[0] : null);

      const row = {
        id: item.id,
        name: item.name || item.id,
        cls: cls,
        tier: item.tier,
        tierName: tierName(item.tier),
        skillIds: skills,
        skillName: skills.map(skillName).filter(Boolean).join(' / ') || (cls === 'raw' ? '交易行' : ''),
        category: item.category || '',
        recipeId: recipeId || null
      };
      items[item.id] = row;
      list.push(row);
    });

    catalogCache = {
      items: items,
      list: list,
      craftRecipes: craftRecipes,
      classes: CLASSES,
      order: CLASS_ORDER
    };
    return catalogCache;
  }

  /* ------------------------------------------------------------------ */
  /* 汇总                                                               */
  /* ------------------------------------------------------------------ */
  function emptySummary() {
    return {
      n: 0, up: 0, down: 0, flat: 0, movers: 0, upShare: null, flatShare: null,
      breadth: null, median: null, mean: null, medianAbs: null
    };
  }

  function topMovers(rows, direction, limit) {
    const filtered = rows.filter(function (row) {
      if (direction > 0 ? !(row.change > 0) : !(row.change < 0)) return false;
      // 起价和现价都要过线：0.01 → 0.06 这种低价跳动不进榜。
      if (row.start < TOP_MIN_PRICE || row.latest < TOP_MIN_PRICE) return false;
      return Math.abs(row.change) >= TOP_MIN_CHANGE;
    }).sort(function (a, b) {
      return direction > 0 ? b.change - a.change : a.change - b.change;
    });
    if (filtered.length >= Math.min(limit, 3)) return filtered.slice(0, limit);
    // 行情很淡时放宽涨跌幅门槛，至少给出可读的涨跌方向。
    return rows.filter(function (row) {
      return (direction > 0 ? row.change > 0 : row.change < 0) && row.latest >= 0.5;
    }).sort(function (a, b) {
      return direction > 0 ? b.change - a.change : a.change - b.change;
    }).slice(0, limit);
  }

  function summarize(rows) {
    if (!rows.length) {
      return Object.assign(emptySummary(), { topUp: [], topDown: [] });
    }
    let up = 0, down = 0, flat = 0;
    const changes = [];
    const abs = [];
    rows.forEach(function (row) {
      if (row.change > 0) up++;
      else if (row.change < 0) down++;
      else flat++;
      changes.push(row.changePct);
      abs.push(Math.abs(row.changePct));
    });
    const movers = up + down;
    return {
      n: rows.length, up: up, down: down, flat: flat, movers: movers,
      // 涨跌占比只在「有变化」的物品里算，避免大量持平把温度稀释成 0。
      upShare: movers ? up / movers * 100 : null,
      flatShare: rows.length ? flat / rows.length * 100 : null,
      breadth: movers ? (up - down) / movers * 100 : null,
      median: median(changes),
      mean: mean(changes),
      medianAbs: median(abs),
      topUp: topMovers(rows, 1, 3),
      topDown: topMovers(rows, -1, 3)
    };
  }

  /* ------------------------------------------------------------------ */
  /* 区间内的逐日节奏                                                    */
  /* ------------------------------------------------------------------ */
  function categoryDailyChange(a, b, cls, catalog) {
    const values = [];
    catalog.list.forEach(function (item) {
      if (item.cls !== cls) return;
      if (quoteOf(a, item.id) == null || quoteOf(b, item.id) == null) return;
      const p1 = priceOf(a, item.id);
      const p2 = priceOf(b, item.id);
      if (!p1 || !p2) return;
      values.push(p2 / p1 - 1);
    });
    const med = median(values);
    return { value: values.length >= 5 && med != null ? med * 100 : null, n: values.length };
  }

  function pearson(xs, ys) {
    const pairs = [];
    for (let i = 0; i < xs.length; i++) {
      if (typeof xs[i] === 'number' && isFinite(xs[i]) && typeof ys[i] === 'number' && isFinite(ys[i])) {
        pairs.push([xs[i], ys[i]]);
      }
    }
    if (pairs.length < 4) return null;
    const mx = mean(pairs.map(function (p) { return p[0]; }));
    const my = mean(pairs.map(function (p) { return p[1]; }));
    let cov = 0, vx = 0, vy = 0;
    pairs.forEach(function (p) {
      const dx = p[0] - mx;
      const dy = p[1] - my;
      cov += dx * dy;
      vx += dx * dx;
      vy += dy * dy;
    });
    if (!(vx > 0) || !(vy > 0)) return null;
    return cov / Math.sqrt(vx * vy);
  }

  function buildRhythm(dates, byDate, catalog) {
    const points = [];
    for (let i = 1; i < dates.length; i++) {
      const prev = byDate[dates[i - 1]];
      const cur = byDate[dates[i]];
      if (!prev || !cur) continue;
      const raw = categoryDailyChange(prev, cur, 'raw', catalog);
      const mid = categoryDailyChange(prev, cur, 'mid', catalog);
      const fin = categoryDailyChange(prev, cur, 'fin', catalog);
      points.push({ date: dates[i], raw: raw.value, mid: mid.value, fin: fin.value, n: { raw: raw.n, mid: mid.n, fin: fin.n } });
    }
    const rawVals = points.map(function (p) { return p.raw; });
    const finVals = points.map(function (p) { return p.fin; });
    let same = 0, comparable = 0;
    points.forEach(function (p) {
      if (p.raw == null || p.fin == null || p.raw === 0 || p.fin === 0) return;
      comparable++;
      if ((p.raw > 0) === (p.fin > 0)) same++;
    });
    return {
      points: points,
      n: points.length,
      corrRawFin: pearson(rawVals, finVals),
      sameDirRate: comparable ? same / comparable * 100 : null,
      latest: points.length ? points[points.length - 1] : null
    };
  }

  /* ------------------------------------------------------------------ */
  /* 配方：材料成本 → 主产物收入                                          */
  /* ------------------------------------------------------------------ */
  function buildRecipes(rows, catalog) {
    const byId = Object.create(null);
    rows.forEach(function (row) { byId[row.id] = row; });

    const usable = [];
    catalog.craftRecipes.forEach(function (recipe) {
      const product = byId[recipe.productId];
      if (!product) return;
      let costStart = 0, costEnd = 0;
      let minSpan = Number.MAX_SAFE_INTEGER;
      let complete = true;
      recipe.materials.forEach(function (mat) {
        const row = byId[mat.id];
        if (!row) { complete = false; return; }
        costStart += row.start * mat.qty;
        costEnd += row.end * mat.qty;
        minSpan = Math.min(minSpan, row.spanDays);
      });
      if (!complete || !(costStart > 0) || !(costEnd > 0)) return;
      // 低于 0.5 金的成本/产物容易被 1 铜的跳动放大，先排除，避免榜单失真。
      if (product.end < 0.5 || costStart < 0.5) return;

      const revenueStart = product.start * recipe.productQty;
      const revenueEnd = product.end * recipe.productQty;
      const marginStart = revenueStart - costStart;
      const marginEnd = revenueEnd - costEnd;
      const costChange = costEnd / costStart - 1;
      const productChange = product.change;
      const spread = (productChange - costChange) * 100;
      const marginDelta = marginEnd - marginStart;
      const quadrant = productChange >= 0
        ? (costChange >= 0 ? 'both-up' : 'improve')
        : (costChange >= 0 ? 'squeeze' : 'both-down');
      usable.push({
        id: recipe.id,
        name: recipe.name,
        skillId: recipe.skillId,
        skillName: recipe.skillName,
        level: recipe.level,
        tier: recipe.tier,
        energy: recipe.energy,
        productId: recipe.productId,
        productName: recipe.productName,
        costStart: costStart,
        costEnd: costEnd,
        revenueStart: revenueStart,
        revenueEnd: revenueEnd,
        marginStart: marginStart,
        marginEnd: marginEnd,
        costChange: costChange,
        productChange: productChange,
        costChangePct: costChange * 100,
        productChangePct: productChange * 100,
        spread: spread,
        marginDelta: marginDelta,
        spanDays: minSpan === Number.MAX_SAFE_INTEGER ? 1 : minSpan,
        quadrant: quadrant
      });
    });

    usable.sort(function (a, b) { return b.spread - a.spread; });

    const quadrants = { improve: 0, squeeze: 0, 'both-up': 0, 'both-down': 0 };
    let same = 0, comparable = 0;
    usable.forEach(function (row) {
      quadrants[row.quadrant] = (quadrants[row.quadrant] || 0) + 1;
      if (row.costChange !== 0 && row.productChange !== 0) {
        comparable++;
        if ((row.costChange > 0) === (row.productChange > 0)) same++;
      }
    });
    const spreads = usable.map(function (row) { return row.spread; });
    const improved = usable.filter(function (row) { return row.spread > 0; }).length;
    const squeezed = usable.filter(function (row) { return row.spread < 0; }).length;

    return {
      rows: usable,
      usable: usable.length,
      improved: improved,
      squeezed: squeezed,
      neutral: usable.length - improved - squeezed,
      medianSpread: median(spreads),
      medianCostChange: median(usable.map(function (row) { return row.costChangePct; })),
      medianProductChange: median(usable.map(function (row) { return row.productChangePct; })),
      sameDirRate: comparable ? same / comparable * 100 : null,
      quadrants: quadrants,
      topImproved: usable.slice(0, 6),
      topSqueezed: usable.slice(-6).reverse()
    };
  }

  /* ------------------------------------------------------------------ */
  /* 结论                                                               */
  /* ------------------------------------------------------------------ */
  function fmtPct(value, digits) {
    if (value == null || !isFinite(value)) return '—';
    if (Math.abs(value) < 0.05) return '0.0%';
    return (value >= 0 ? '+' : '−') + Math.abs(value).toFixed(digits == null ? 1 : digits) + '%';
  }
  function fmtPp(value, digits) {
    if (value == null || !isFinite(value)) return '—';
    if (Math.abs(value) < 0.05) return '0.0 pp';
    return (value >= 0 ? '+' : '−') + Math.abs(value).toFixed(digits == null ? 1 : digits) + ' pp';
  }

  function buildInsights(report) {
    const out = [];
    const o = report.overall;
    const c = report.categories;
    const r = report.recipes;

    if (o.n && o.movers) {
      let tone = 'info';
      let tail = '涨跌分化，适合挑结构而不是追整体。';
      if (o.upShare >= 58) { tone = 'pos'; tail = '上涨面偏宽，市场情绪偏热，注意追高风险。'; }
      else if (o.upShare <= 42) { tone = 'neg'; tail = '下跌面偏宽，市场偏冷，制作端更适合等成本回落。'; }
      out.push({
        tone: tone,
        title: '涨跌温度',
        text: '上涨 ' + o.up + ' 个、下跌 ' + o.down + ' 个、持平 ' + o.flat + ' 个；有变化物品中上涨占 ' +
          o.upShare.toFixed(0) + '%，中位 ' + fmtPct(o.median) + '。' + tail
      });
    }

    if (c.raw.movers && c.fin.movers) {
      // 用「涨跌中的上涨占比」比较上下游，比中位数更抗大量持平样本。
      const gap = c.fin.upShare - c.raw.upShare;
      let tone = 'info';
      let tail = '成本与成品涨跌面接近，制作利润变化不大。';
      if (gap <= -5) { tone = 'neg'; tail = '成品端上涨面明显弱于原料端，制作利润被压缩。'; }
      else if (gap >= 5) { tone = 'pos'; tail = '成品端上涨面强于原料端，制作利润空间改善。'; }
      out.push({
        tone: tone,
        title: '上游 vs 成品',
        text: '一线中位 ' + fmtPct(c.raw.median) + '、上涨面 ' + c.raw.upShare.toFixed(0) +
          '%；成品中位 ' + fmtPct(c.fin.median) + '、上涨面 ' + c.fin.upShare.toFixed(0) +
          '%；上涨面差 ' + fmtPp(gap) + '。' + tail
      });
    }

    if (r.usable) {
      let tone = 'info';
      if (r.squeezed > r.improved * 1.2) tone = 'warn';
      else if (r.improved > r.squeezed * 1.2) tone = 'pos';
      out.push({
        tone: tone,
        title: '配方传导',
        text: r.usable + ' 个配方可完整计算；成本与成品同向率 ' + (r.sameDirRate == null ? '—' : r.sameDirRate.toFixed(0) + '%') +
          '，中位传导差 ' + fmtPp(r.medianSpread) + '。利润改善 ' + r.improved + ' 个、压缩 ' + r.squeezed + ' 个。'
      });
    }

    if (r.topSqueezed.length) {
      const names = r.topSqueezed.slice(0, 3).map(function (row) { return row.name; });
      out.push({
        tone: 'warn',
        title: '需要盯住的配方',
        text: names.join('、') + ' 等出现「原料涨 / 成品跌」或传导不足，短期更适合观望，等材料回落或产物补涨再动手。'
      });
    } else if (report.rhythm && report.rhythm.n >= 3) {
      out.push({
        tone: 'info',
        title: '周内节奏',
        text: '近 ' + report.rhythm.n + ' 个相邻日里，上游与成品同向 ' +
          (report.rhythm.sameDirRate == null ? '—' : report.rhythm.sameDirRate.toFixed(0) + '%') +
          '；相关系数 ' + (report.rhythm.corrRawFin == null ? '—' : report.rhythm.corrRawFin.toFixed(2)) +
          '（越接近 1 越同步，样本较少时仅供参考）。'
      });
    }
    return out;
  }

  /* ------------------------------------------------------------------ */
  /* 主分析                                                             */
  /* ------------------------------------------------------------------ */
  function emptyReport(window) {
    return {
      window: window,
      mode: window,
      dates: [],
      latestDate: '',
      startDate: '',
      latestAt: '',
      startAt: '',
      rows: [],
      overall: summarize([]),
      categories: { raw: summarize([]), mid: summarize([]), fin: summarize([]) },
      recipes: buildRecipes([], buildCatalog()),
      rhythm: { points: [], n: 0, corrRawFin: null, sameDirRate: null, latest: null },
      insights: [],
      scope: { catalog: buildCatalog().list.length, quoted: 0, skipped: 0 }
    };
  }

  function analyze(points, opts) {
    opts = opts || {};
    const window = opts.window === 'week' ? 'week' : 'day';
    const catalog = buildCatalog();
    const list = (points || []).filter(function (point) { return point && point.at; })
      .slice().sort(function (a, b) { return Date.parse(a.at) - Date.parse(b.at); });
    if (!list.length) return emptyReport(window);

    const dates = [];
    const byDate = Object.create(null);
    const firstByDate = Object.create(null);
    list.forEach(function (point) {
      const date = dayKey(point.at);
      if (!byDate[date]) { dates.push(date); firstByDate[date] = point; }
      byDate[date] = point;
    });

    const latestDate = dates[dates.length - 1];
    const latestPoint = byDate[latestDate];
    const prevDate = dates.length > 1 ? dates[dates.length - 2] : '';
    const prevPoint = prevDate ? byDate[prevDate] : null;
    const intraday = window === 'day' && !prevPoint;

    const track = Object.create(null);
    list.forEach(function (point) {
      const date = dayKey(point.at);
      catalog.list.forEach(function (item) {
        const px = priceOf(point, item.id);
        if (!px) return;
        let row = track[item.id];
        if (!row) {
          row = track[item.id] = {
            min: px, max: px, first: null, firstQuote: null, last: null, lastQuote: null
          };
        }
        if (px < row.min) row.min = px;
        if (px > row.max) row.max = px;
        if (!row.first) row.first = { price: px, at: point.at, date: date };
        const quote = quoteOf(point, item.id);
        if (quote != null) {
          if (!row.firstQuote) row.firstQuote = { price: px, at: point.at, date: date };
          row.lastQuote = { price: px, at: point.at, date: date };
        }
        row.last = { price: px, at: point.at, date: date, quote: quote != null };
      });
    });

    const rows = [];
    let skipped = 0;
    catalog.list.forEach(function (item) {
      const state = track[item.id];
      if (!state) { skipped++; return; }

      let start, end, spanDays, mode;
      if (window === 'week') {
        if (!state.last || !state.last.quote || !state.firstQuote) { skipped++; return; }
        if (state.firstQuote.at === state.last.at) { skipped++; return; }
        start = state.firstQuote;
        end = state.last;
        spanDays = dayDistance(start.date, latestDate) + 1;
        mode = 'week';
      } else if (intraday) {
        const first = firstByDate[latestDate];
        const p1 = priceOf(first, item.id);
        const p2 = priceOf(latestPoint, item.id);
        if (!p1 || !p2) { skipped++; return; }
        if (quoteOf(first, item.id) == null || quoteOf(latestPoint, item.id) == null) { skipped++; return; }
        start = { price: p1, at: first.at, date: latestDate };
        end = { price: p2, at: latestPoint.at, date: latestDate };
        spanDays = 0;
        mode = 'intraday';
      } else {
        const p1 = priceOf(prevPoint, item.id);
        const p2 = priceOf(latestPoint, item.id);
        if (!p1 || !p2) { skipped++; return; }
        if (quoteOf(prevPoint, item.id) == null || quoteOf(latestPoint, item.id) == null) { skipped++; return; }
        start = { price: p1, at: prevPoint.at, date: prevDate };
        end = { price: p2, at: latestPoint.at, date: latestDate };
        spanDays = 1;
        mode = 'day';
      }

      const change = end.price / start.price - 1;
      if (!isFinite(change)) { skipped++; return; }
      if (end.price < MIN_ROW_PRICE) { skipped++; return; }

      rows.push({
        id: item.id,
        name: item.name,
        cls: item.cls,
        className: CLASSES[item.cls].name,
        clsShort: CLASSES[item.cls].short,
        color: CLASSES[item.cls].color,
        tier: item.tier,
        tierName: item.tierName,
        skillName: item.skillName,
        recipeId: item.recipeId,
        start: start.price,
        end: end.price,
        latest: end.price,
        change: change,
        changePct: change * 100,
        absPct: Math.abs(change * 100),
        startAt: start.at,
        endAt: end.at,
        startDate: start.date,
        endDate: end.date,
        spanDays: spanDays,
        rangePct: start.price > 0 ? (state.max - state.min) / start.price * 100 : 0
      });
    });

    rows.sort(function (a, b) { return b.changePct - a.changePct; });

    const categories = {};
    CLASS_ORDER.forEach(function (cls) {
      categories[cls] = summarize(rows.filter(function (row) { return row.cls === cls; }));
    });

    const report = {
      window: window,
      mode: rows.length ? (window === 'week' ? 'week' : (intraday ? 'intraday' : 'day')) : window,
      dates: dates,
      latestDate: latestDate,
      startDate: window === 'week' ? dates[0] : (prevDate || latestDate),
      latestAt: latestPoint.at,
      startAt: window === 'week' ? (list[0] ? list[0].at : '') : (prevPoint ? prevPoint.at : latestPoint.at),
      rows: rows,
      overall: summarize(rows),
      categories: categories,
      scope: { catalog: catalog.list.length, quoted: rows.length, skipped: skipped }
    };
    report.recipes = buildRecipes(rows, catalog);
    report.rhythm = buildRhythm(dates, byDate, catalog);
    report.insights = buildInsights(report);
    return report;
  }

  window.JX3Deep = {
    analyze: analyze,
    catalog: buildCatalog,
    classes: CLASSES,
    classOrder: CLASS_ORDER,
    _test: {
      median: median,
      summarize: summarize,
      buildRecipes: buildRecipes,
      buildRhythm: buildRhythm,
      pearson: pearson,
      dayDistance: dayDistance
    }
  };
})();
