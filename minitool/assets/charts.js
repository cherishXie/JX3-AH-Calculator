/* =========================================================================
   剑网三物价助手 · 图表（纯 SVG，无外部依赖）
   ========================================================================= */
(function () {
  'use strict';

  const C = window.JX3Core;
  const U = C.U;

  const DARK = {
    bg: '#020817', text: '#F8FAFC', muted: '#94A3B8', grid: 'rgba(148,163,184,.14)',
    axis: 'rgba(148,163,184,.35)'
  };
  const LIGHT = {
    bg: '#FFFFFF', text: '#0F172A', muted: '#64748B', grid: 'rgba(100,116,139,.16)',
    axis: 'rgba(100,116,139,.35)'
  };

  const COLOR = {
    craft: '#1D6FE0',
    gather: '#2E9E78',
    peak: '#B36BFF',
    danger: '#F43F5E',
    warning: '#F59E0B',
    info: '#3B82F6'
  };

  function palette(theme) {
    return theme === 'light' ? LIGHT : DARK;
  }

  function attr(s) {
    return U.esc(s);
  }

  function niceMax(v) {
    if (!(v > 0)) return 10;
    const exp = Math.floor(Math.log10(v));
    const f = v / Math.pow(10, exp);
    const nf = f <= 1 ? 1 : f <= 1.5 ? 1.5 : f <= 2 ? 2 : f <= 3 ? 3 : f <= 5 ? 5 : 10;
    return nf * Math.pow(10, exp);
  }

  function ticks(max, count) {
    const out = [];
    for (let i = 0; i <= count; i++) out.push((max / count) * i);
    return out;
  }

  function truncate(s, n) {
    s = String(s);
    return s.length > n ? s.slice(0, n - 1) + '…' : s;
  }

  function labelText(v, unit) {
    return (v > 0 ? '+' : '') + U.fmt(v, 2) + (unit || '');
  }

  function emptyChart(width, height, text, P) {
    return '<svg class="chart-svg" viewBox="0 0 ' + width + ' ' + height + '" role="img" aria-label="' + attr(text) + '">' +
      '<rect width="' + width + '" height="' + height + '" fill="' + P.bg + '"/>' +
      '<text x="' + width / 2 + '" y="' + height / 2 + '" text-anchor="middle" font-size="12" fill="' + P.muted + '">' + U.esc(text) + '</text>' +
      '</svg>';
  }

  /* ------------------------------------------------------------------ */
  /* 水平条形图（排行）                                                  */
  /* ------------------------------------------------------------------ */
  function barH(rows, opts) {
    opts = opts || {};
    const P = opts.palette || DARK;
    const width = opts.width || 760;
    const rowH = 32;
    const top = 26;
    const left = opts.left || 166;
    const right = 74;
    const data = rows.slice(0, opts.limit || 10);
    if (!data.length) return emptyChart(width, 240, opts.emptyText || '当前筛选无数据', P);

    const height = top + data.length * rowH + 12;
    const maxVal = niceMax(Math.max.apply(null, data.map(function (d) { return Math.max(0, d.value); })) || 1);
    const plotW = width - left - right;
    const x = function (v) { return left + (Math.max(0, v) / maxVal) * plotW; };
    const tk = ticks(maxVal, 4);
    const topValue = Math.max.apply(null, data.map(function (d) { return d.value; }));
    let svg = '<svg class="chart-svg" viewBox="0 0 ' + width + ' ' + height + '" role="img" aria-label="' +
      attr(opts.ariaLabel || '精力收益排行') + '">';
    svg += '<rect width="' + width + '" height="' + height + '" fill="' + P.bg + '"/>';

    tk.forEach(function (t) {
      const xx = x(t);
      svg += '<line x1="' + xx.toFixed(1) + '" y1="' + (top - 8) + '" x2="' + xx.toFixed(1) + '" y2="' + (height - 8) +
        '" stroke="' + P.grid + '" stroke-width="1"/>';
      svg += '<text x="' + xx.toFixed(1) + '" y="' + (top - 14) + '" text-anchor="middle" font-size="10" fill="' + P.muted + '">' +
        U.fmt(t, 0) + '</text>';
    });

    data.forEach(function (d, i) {
      const y = top + i * rowH;
      const isTop = d.value === topValue && d.value > 0 && i === 0;
      const color = isTop ? COLOR.peak : (d.color || COLOR.craft);
      const barW = Math.max(2, x(d.value) - left);
      const tip = (d.tip || d.label) + '：' + labelText(d.value, opts.unit || '');
      svg += '<g class="chart-bar" tabindex="0" role="listitem" data-tip="' + attr(tip) + '"' +
        (d.id ? ' data-recipe="' + attr(d.id) + '"' : '') + ' aria-label="' + attr(tip) + '">';
      svg += '<rect x="0" y="' + (y - 2) + '" width="' + width + '" height="' + (rowH - 2) + '" fill="transparent"/>';
      if (isTop) {
        svg += '<rect x="0" y="' + (y - 2) + '" width="3" height="' + (rowH - 6) + '" fill="' + COLOR.peak + '" rx="1.5"/>';
      }
      svg += '<text x="10" y="' + (y + 14) + '" font-size="11" font-weight="500" fill="' + (isTop ? COLOR.peak : P.text) + '">' +
        U.esc(truncate(d.label, 13)) + '</text>';
      svg += '<text x="' + (left - 10) + '" y="' + (y + 14) + '" text-anchor="end" font-size="10" fill="' + P.muted + '">' +
        U.esc(d.meta || '') + '</text>';
      svg += '<rect x="' + left + '" y="' + (y + 4) + '" width="' + barW.toFixed(1) + '" height="' + (rowH - 14) +
        '" rx="3" fill="' + color + '" opacity="' + (isTop ? '1' : '.82') + '"/>';
      svg += '<text x="' + (width - 8) + '" y="' + (y + 15) + '" text-anchor="end" font-size="11" font-weight="600" fill="' +
        (isTop ? COLOR.peak : P.text) + '" style="font-variant-numeric:tabular-nums">' + U.fmt(d.value, 2) + '</text>';
      svg += '</g>';
    });

    if (opts.refLine != null) {
      const xx = x(opts.refLine);
      if (xx >= left && xx <= left + plotW) {
        svg += '<line x1="' + xx.toFixed(1) + '" y1="' + (top - 4) + '" x2="' + xx.toFixed(1) + '" y2="' + (height - 10) +
          '" stroke="' + P.muted + '" stroke-width="1" stroke-dasharray="3 3" opacity=".7"/>';
        svg += '<text x="' + (xx + 4) + '" y="' + (height - 2) + '" font-size="9" fill="' + P.muted + '">' +
          U.esc(opts.refLabel || '参考线') + ' ' + U.fmt(opts.refLine, 2) + '</text>';
      }
    }
    svg += '</svg>';
    return svg;
  }

  /* ------------------------------------------------------------------ */
  /* 散点图：成本 × 精力收益 × 精力                                      */
  /* ------------------------------------------------------------------ */
  function scatter(rows, opts) {
    opts = opts || {};
    const P = opts.palette || DARK;
    const width = 760, height = 360;
    const ml = 58, mr = 18, mt = 18, mb = 42;
    const data = rows.filter(function (r) {
      return !r.calc.missing && r.calc.perEnergy != null && r.calc.totalCost >= 0;
    });
    if (!data.length) return emptyChart(width, height, '当前筛选无完整数据', P);

    const xs = data.map(function (r) { return r.calc.totalCost; });
    const ys = data.map(function (r) { return r.calc.perEnergy; });
    const xMax = niceMax(Math.max.apply(null, xs) * 1.05 || 1);
    const yMax = niceMax(Math.max.apply(null, ys.concat([0])) * 1.08);
    const yMin = Math.min(0, Math.min.apply(null, ys) * 1.2);
    const plotW = width - ml - mr;
    const plotH = height - mt - mb;
    const x = function (v) { return ml + (v / xMax) * plotW; };
    const y = function (v) { return mt + plotH - ((v - yMin) / (yMax - yMin)) * plotH; };
    const maxEnergy = Math.max.apply(null, data.map(function (r) { return r.calc.energy || 1; }));
    const rOf = function (e) { return 3.5 + Math.sqrt((e || 1) / maxEnergy) * 7; };

    let svg = '<svg class="chart-svg" viewBox="0 0 ' + width + ' ' + height + '" role="img" aria-label="' +
      attr(opts.ariaLabel || '成本与精力收益散点图') + '">';
    svg += '<rect width="' + width + '" height="' + height + '" fill="' + P.bg + '"/>';

    const yTicks = ticks(yMax - yMin, 4).map(function (t) { return yMin + t; });
    yTicks.forEach(function (t) {
      const yy = y(t);
      svg += '<line x1="' + ml + '" y1="' + yy.toFixed(1) + '" x2="' + (width - mr) + '" y2="' + yy.toFixed(1) +
        '" stroke="' + (Math.abs(t) < 1e-9 ? P.axis : P.grid) + '" stroke-width="1"/>';
      svg += '<text x="' + (ml - 8) + '" y="' + (yy + 3).toFixed(1) + '" text-anchor="end" font-size="10" fill="' + P.muted + '">' +
        U.fmt(t, 1) + '</text>';
    });
    const xTicks = ticks(xMax, 4);
    xTicks.forEach(function (t) {
      const xx = x(t);
      svg += '<line x1="' + xx.toFixed(1) + '" y1="' + mt + '" x2="' + xx.toFixed(1) + '" y2="' + (height - mb) +
        '" stroke="' + P.grid + '" stroke-width="1"/>';
      svg += '<text x="' + xx.toFixed(1) + '" y="' + (height - mb + 16) + '" text-anchor="middle" font-size="10" fill="' + P.muted + '">' +
        U.fmt(t, 0) + '</text>';
    });
    svg += '<text x="' + (width - mr) + '" y="' + (height - 8) + '" text-anchor="end" font-size="10" fill="' + P.muted + '">单次成本（金）</text>';
    svg += '<text x="' + ml + '" y="' + (mt + 8) + '" font-size="10" fill="' + P.muted + '">精力收益（金/精力）</text>';

    const sorted = data.slice().sort(function (a, b) { return b.calc.perEnergy - a.calc.perEnergy; });
    const topIds = new Set(sorted.slice(0, 3).map(function (r) { return r.recipe.id; }));

    data.forEach(function (r) {
      const cx = x(r.calc.totalCost);
      const cy = y(r.calc.perEnergy);
      const isTop = topIds.has(r.recipe.id);
      const color = isTop ? COLOR.peak : (r.type === 'gather' ? COLOR.gather : COLOR.craft);
      const rad = rOf(r.calc.energy);
      const tip = r.recipe.name + ' · ' + U.fmt(r.calc.totalCost, 2) + ' 金成本 · ' +
        U.fmt(r.calc.perEnergy, 2) + ' 金/精力 · ' + U.fmtInt(r.calc.energy) + ' 精力';
      svg += '<circle class="chart-point" tabindex="0" data-tip="' + attr(tip) + '" data-recipe="' + attr(r.recipe.id) + '"' +
        ' cx="' + cx.toFixed(1) + '" cy="' + cy.toFixed(1) + '" r="' + rad.toFixed(1) + '" fill="' + color +
        '" fill-opacity="' + (isTop ? '.95' : '.66') + '" stroke="' + (isTop ? color : 'transparent') +
        '" stroke-width="' + (isTop ? '2' : '0') + '" aria-label="' + attr(tip) + '"/>';
    });
    svg += '</svg>';
    return svg;
  }

  /* ------------------------------------------------------------------ */
  /* 箱线图：各技艺精力收益分布                                          */
  /* ------------------------------------------------------------------ */
  function boxPlot(rows, opts) {
    opts = opts || {};
    const P = opts.palette || DARK;
    const width = 760;
    const rowH = 38;
    const mt = 22, ml = 78, mr = 24, mb = 26;
    const groups = opts.groups || [];
    const values = [];
    groups.forEach(function (g) { g.values.forEach(function (v) { values.push(v); }); });
    if (!values.length) return emptyChart(width, 260, '当前筛选无完整数据', P);

    const minV = Math.min(0, Math.min.apply(null, values));
    const maxV = Math.max.apply(null, values);
    const span = maxV - minV || 1;
    const lo = minV - span * 0.08;
    const hi = maxV + span * 0.08;
    const height = mt + groups.length * rowH + mb;
    const plotW = width - ml - mr;
    const x = function (v) { return ml + ((v - lo) / (hi - lo)) * plotW; };

    let svg = '<svg class="chart-svg" viewBox="0 0 ' + width + ' ' + height + '" role="img" aria-label="' +
      attr(opts.ariaLabel || '各技艺精力收益分布') + '">';
    svg += '<rect width="' + width + '" height="' + height + '" fill="' + P.bg + '"/>';

    const ticksArr = 4;
    for (let i = 0; i <= ticksArr; i++) {
      const v = lo + (hi - lo) * (i / ticksArr);
      const xx = x(v);
      svg += '<line x1="' + xx.toFixed(1) + '" y1="' + mt + '" x2="' + xx.toFixed(1) + '" y2="' + (height - mb) +
        '" stroke="' + P.grid + '" stroke-width="1"/>';
      svg += '<text x="' + xx.toFixed(1) + '" y="' + (height - 8) + '" text-anchor="middle" font-size="10" fill="' + P.muted + '">' +
        U.fmt(v, 1) + '</text>';
    }

    groups.forEach(function (g, i) {
      const cy = mt + i * rowH + rowH / 2;
      const color = g.type === 'gather' ? COLOR.gather : COLOR.craft;
      const vals = g.values.slice().sort(function (a, b) { return a - b; });
      const q = function (p) {
        const pos = (vals.length - 1) * p;
        const base = Math.floor(pos), rest = pos - base;
        return vals[base + 1] !== undefined ? vals[base] + rest * (vals[base + 1] - vals[base]) : vals[base];
      };
      const median = q(0.5), q1 = q(0.25), q3 = q(0.75);
      const iqr = q3 - q1;
      const lowW = Math.max(vals[0], q1 - iqr * 1.5);
      const highW = Math.min(vals[vals.length - 1], q3 + iqr * 1.5);
      const tip = g.name + '：中位 ' + U.fmt(median, 2) + '，Q1 ' + U.fmt(q1, 2) + '，Q3 ' + U.fmt(q3, 2) + '（' + vals.length + ' 个配方）';
      svg += '<g class="chart-box" tabindex="0" data-tip="' + attr(tip) + '" aria-label="' + attr(tip) + '">';
      svg += '<text x="' + (ml - 12) + '" y="' + (cy + 4) + '" text-anchor="end" font-size="11" fill="' + P.text + '">' + U.esc(g.name) + '</text>';
      svg += '<line x1="' + x(lowW).toFixed(1) + '" y1="' + cy + '" x2="' + x(highW).toFixed(1) + '" y2="' + cy + '" stroke="' + color + '" stroke-width="1.5" opacity=".7"/>';
      svg += '<line x1="' + x(lowW).toFixed(1) + '" y1="' + (cy - 5) + '" x2="' + x(lowW).toFixed(1) + '" y2="' + (cy + 5) + '" stroke="' + color + '" stroke-width="1.5" opacity=".7"/>';
      svg += '<line x1="' + x(highW).toFixed(1) + '" y1="' + (cy - 5) + '" x2="' + x(highW).toFixed(1) + '" y2="' + (cy + 5) + '" stroke="' + color + '" stroke-width="1.5" opacity=".7"/>';
      svg += '<rect x="' + x(q1).toFixed(1) + '" y="' + (cy - 8) + '" width="' + Math.max(2, x(q3) - x(q1)).toFixed(1) +
        '" height="16" rx="3" fill="' + color + '" fill-opacity=".28" stroke="' + color + '" stroke-width="1.2"/>';
      svg += '<line x1="' + x(median).toFixed(1) + '" y1="' + (cy - 8) + '" x2="' + x(median).toFixed(1) + '" y2="' + (cy + 8) +
        '" stroke="' + P.bg + '" stroke-width="3"/>';
      svg += '<line x1="' + x(median).toFixed(1) + '" y1="' + (cy - 8) + '" x2="' + x(median).toFixed(1) + '" y2="' + (cy + 8) +
        '" stroke="' + color + '" stroke-width="1.5"/>';
      vals.forEach(function (v) {
        if (v < lowW || v > highW) {
          svg += '<circle cx="' + x(v).toFixed(1) + '" cy="' + cy + '" r="2.4" fill="' + color + '" fill-opacity=".8"/>';
        }
      });
      svg += '</g>';
    });

    svg += '<line x1="' + x(0).toFixed(1) + '" y1="' + mt + '" x2="' + x(0).toFixed(1) + '" y2="' + (height - mb) +
      '" stroke="' + P.muted + '" stroke-width="1" stroke-dasharray="4 3" opacity=".7"/>';
    svg += '</svg>';
    return svg;
  }

  /* ------------------------------------------------------------------ */
  /* 分组柱状：采集 vs 制造                                              */
  /* ------------------------------------------------------------------ */
  function diffBar(a, b, opts) {
    opts = opts || {};
    const P = opts.palette || DARK;
    const width = 380, height = 150;
    const ml = 68, mr = 20, mt = 20, mb = 24;
    const max = niceMax(Math.max(a.value, b.value, 0.001) * 1.12);
    const plotW = width - ml - mr;
    const x = function (v) { return ml + (Math.max(0, v) / max) * plotW; };
    const rows = [
      { label: a.label, value: a.value, color: opts.aColor || COLOR.gather, type: 'gather' },
      { label: b.label, value: b.value, color: opts.bColor || COLOR.craft, type: 'craft' }
    ];
    let svg = '<svg class="chart-svg" viewBox="0 0 ' + width + ' ' + height + '" role="img" aria-label="' +
      attr(opts.ariaLabel || '采集与制造精力收益对比') + '">';
    svg += '<rect width="' + width + '" height="' + height + '" fill="' + P.bg + '"/>';
    for (let i = 0; i <= 3; i++) {
      const xx = x((max / 3) * i);
      svg += '<line x1="' + xx.toFixed(1) + '" y1="' + mt + '" x2="' + xx.toFixed(1) + '" y2="' + (height - mb) +
        '" stroke="' + P.grid + '"/>';
    }
    rows.forEach(function (r, i) {
      const y = mt + i * 46;
      const tip = r.label + '：平均 ' + U.fmt(r.value, 2) + ' 金/精力';
      svg += '<g data-tip="' + attr(tip) + '" tabindex="0" aria-label="' + attr(tip) + '">';
      svg += '<text x="' + (ml - 10) + '" y="' + (y + 20) + '" text-anchor="end" font-size="11" fill="' + P.text + '">' + U.esc(r.label) + '</text>';
      svg += '<rect x="' + ml + '" y="' + (y + 8) + '" width="' + Math.max(2, x(r.value) - ml).toFixed(1) + '" height="20" rx="3" fill="' + r.color + '" fill-opacity=".85"/>';
      svg += '<text x="' + (width - 6) + '" y="' + (y + 23) + '" text-anchor="end" font-size="11" font-weight="600" fill="' + P.text + '">' + U.fmt(r.value, 2) + '</text>';
      svg += '</g>';
    });
    svg += '</svg>';
    return svg;
  }

  window.JX3Charts = {
    palette: palette,
    color: COLOR,
    barH: barH,
    scatter: scatter,
    boxPlot: boxPlot,
    diffBar: diffBar,
    emptyChart: emptyChart
  };
})();
