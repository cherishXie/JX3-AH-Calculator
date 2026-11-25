import withTheme from '../../components/withTheme';
import { useEffect, useMemo, useState } from 'react';
import { View, Text, Picker, Canvas } from '@tarojs/components';
import Taro from '@tarojs/taro';
import PageHeader from '../../components/PageHeader';
import Section from '../../components/Section';
import StatGrid from '../../components/StatGrid';
import Kpi from '../../components/Kpi';
import Seg from '../../components/Seg';
import Empty from '../../components/Empty';
import DataNote from '../../components/DataNote';
import { useStore } from '../../store';
import { DATA } from '../../shared/engine';
import {
  getTrendData, getTrendMeta, loadTrendData, trendItems, buildPoints, filterPoints,
  seriesOf, summarize, rankItems, priceOfPoint, trendAtText
} from '../../shared/trends';
import { fmt, fmtPct } from '../../shared/format';

const RANGE_OPTIONS = [
  { value: '24h', label: '近 24 小时' },
  { value: 'all', label: '全部快照' }
];
const TYPE_OPTIONS = [
  { value: 'all', label: '全部' },
  { value: 'material', label: '材料' },
  { value: 'product', label: '成品' },
  { value: 'stone', label: '五行石' }
];

function timeText(at) {
  const text = String(at || '');
  return text.length >= 16 ? text.slice(11, 16) : '';
}

function drawChart(series, theme) {
  series = (series || []).filter(function (p) { return p && Number.isFinite(Number(p.price)); });
  if (!series.length) return;
  setTimeout(function () {
    const query = Taro.createSelectorQuery();
    query.select('#trend-canvas').fields({ node: true, size: true }).exec(function (res) {
      const info = res && res[0];
      if (!info || !info.node) return;
      const canvas = info.node;
      const width = Math.max(1, info.width);
      const height = Math.max(1, info.height);
      const dpr = (Taro.getSystemInfoSync().pixelRatio) || 2;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const light = theme === 'light';
      const gridColor = light ? 'rgba(15,23,42,0.12)' : 'rgba(148,163,184,0.18)';
      const labelColor = light ? '#64748b' : '#94a3b8';
      const lineColor = light ? '#0f9f6e' : '#61DDAA';
      const pointStroke = light ? '#ffffff' : '#0F172A';
      const padL = 58;
      const padR = 12;
      const padT = 16;
      const padB = 24;
      const plotW = Math.max(1, width - padL - padR);
      const plotH = Math.max(1, height - padT - padB);
      let min = series[0].price;
      let max = series[0].price;
      series.forEach(function (p) {
        if (p.price < min) min = p.price;
        if (p.price > max) max = p.price;
      });
      if (max === min) {
        max = max * 1.08 + 0.01;
        min = Math.max(0, min * 0.92 - 0.01);
      }
      const yOf = function (v) {
        return padT + (1 - (v - min) / (max - min)) * plotH;
      };
      const xOf = function (i) {
        return series.length <= 1 ? padL + plotW / 2 : padL + (i / (series.length - 1)) * plotW;
      };

      ctx.font = '10px sans-serif';
      ctx.fillStyle = labelColor;
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      for (let i = 0; i < 3; i++) {
        const y = padT + (plotH / 2) * i;
        ctx.beginPath();
        ctx.moveTo(padL, y);
        ctx.lineTo(width - padR, y);
        ctx.stroke();
      }
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillText(fmt(max, 2), padL - 6, padT);
      ctx.fillText(fmt((max + min) / 2, 2), padL - 6, padT + plotH / 2);
      ctx.fillText(fmt(min, 2), padL - 6, padT + plotH);

      const grad = ctx.createLinearGradient(0, padT, 0, padT + plotH);
      grad.addColorStop(0, light ? 'rgba(15,159,110,0.18)' : 'rgba(97,221,170,0.24)');
      grad.addColorStop(1, light ? 'rgba(15,159,110,0.01)' : 'rgba(97,221,170,0.01)');
      ctx.beginPath();
      series.forEach(function (p, i) {
        const x = xOf(i);
        const y = yOf(p.price);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.lineTo(xOf(series.length - 1), padT + plotH);
      ctx.lineTo(xOf(0), padT + plotH);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.beginPath();
      series.forEach(function (p, i) {
        const x = xOf(i);
        const y = yOf(p.price);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 2;
      ctx.stroke();

      series.forEach(function (p, i) {
        const x = xOf(i);
        const y = yOf(p.price);
        ctx.beginPath();
        ctx.arc(x, y, 2.6, 0, Math.PI * 2);
        ctx.fillStyle = lineColor;
        ctx.fill();
        ctx.strokeStyle = pointStroke;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      ctx.fillStyle = labelColor;
      ctx.textBaseline = 'top';
      ctx.textAlign = 'left';
      ctx.fillText(timeText(series[0].at), padL, padT + plotH + 8);
      if (series.length > 1) {
        ctx.textAlign = 'right';
        ctx.fillText(timeText(series[series.length - 1].at), width - padR, padT + plotH + 8);
      }
    });
  }, 40);
}

function Trends() {
  const [state] = useStore();
  const [range, setRange] = useState('24h');
  const [type, setType] = useState('all');
  const [skillId, setSkillId] = useState('');
  const [focusKey, setFocusKey] = useState('');
  const [trendData, setTrendData] = useState(getTrendData());
  const [meta, setMeta] = useState(getTrendMeta());
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    let alive = true;
    setLoading(true);
    loadTrendData(false).then(function () {
      if (!alive) return;
      setTrendData(getTrendData());
      setMeta(getTrendMeta());
      setLoading(false);
    });
    return function () { alive = false; };
  }, []);

  async function refreshTrends() {
    if (loading) return;
    setLoading(true);
    Taro.showLoading({ title: '同步历史...' });
    const res = await loadTrendData(true);
    Taro.hideLoading();
    setTrendData(getTrendData());
    setMeta(getTrendMeta());
    setLoading(false);
    if (res.ok && res.source === 'cloud') Taro.showToast({ title: '云端历史已更新', icon: 'none' });
    else if (res.error) Taro.showToast({ title: '云端不可用，已用本地快照', icon: 'none' });
    else Taro.showToast({ title: '已是最新', icon: 'none' });
  }

  const skillOptions = ['全部技艺'].concat(DATA.skills.map(function (s) { return s.name; })).concat(['五行石']);
  const skillIdx = skillId === 'stone' ? skillOptions.length - 1 : (skillId ? DATA.skills.findIndex(function (s) { return s.id === skillId; }) + 1 : 0);

  const allItems = useMemo(function () {
    return trendItems({ type: type, skillId: skillId });
  }, [type, skillId]);

  const points = useMemo(function () {
    return buildPoints(state.serverId, trendData);
  }, [state.serverId, trendData]);

  const viewPoints = useMemo(function () {
    return filterPoints(points, range);
  }, [points, range]);

  const ranked = useMemo(function () {
    return rankItems(viewPoints, allItems, 12);
  }, [viewPoints, allItems]);

  const focusItem = useMemo(function () {
    const found = allItems.find(function (i) { return i.key === focusKey; });
    if (found) return found;
    if (ranked.length) {
      // 默认展示涨跌榜中最新价最高的成品，避免把 0.02→0.09 的噪声当主图。
      const products = ranked.filter(function (r) { return r.item.kind === 'product'; });
      const pool = products.length ? products : ranked;
      return pool.slice().sort(function (a, b) { return b.summary.last - a.summary.last; })[0].item;
    }
    return allItems[0] || null;
  }, [allItems, focusKey, ranked]);

  const focusSeries = useMemo(function () {
    return seriesOf(viewPoints, focusItem);
  }, [viewPoints, focusItem]);

  const summary = useMemo(function () {
    return summarize(focusSeries);
  }, [focusSeries]);

  const isCustom = meta.serverIds.indexOf(state.serverId) === -1;
  const serverName = (state.servers.find(function (s) { return s.id === state.serverId; }) || {}).name || '—';
  const focusIdx = Math.max(0, allItems.findIndex(function (i) { return focusItem && i.key === focusItem.key; }));

  useEffect(function () {
    drawChart(focusSeries, state.settings.theme === 'dark' ? 'dark' : 'light');
  }, [focusSeries, focusItem, state.settings.theme]);

  function copyNodes() {
    const lines = ['时间,价格,有价物品,变化物品,来源'];
    viewPoints.slice().reverse().forEach(function (point) {
      const price = focusItem ? priceOfPoint(point, focusItem) : null;
      lines.push([trendAtText(point.at), price == null ? '' : price, point.pricedCount, point.changed, point.source === 'seed' ? '基准' : '更新'].join(','));
    });
    Taro.setClipboardData({ data: lines.join('\n') });
    Taro.showToast({ title: '已复制历史节点 CSV', icon: 'none' });
  }

  if (!meta.points) {
    return (
      <View className='v2-page'>
        <PageHeader />
        <Empty title='暂无物价历史' desc='等待下次快照同步。' />
        <DataNote />
      </View>
    );
  }

  return (
    <View className='v2-page'>
      <PageHeader
        actions={<View hoverClass='v2-pressed' hoverStayTime={80} className='v2-icon-btn' onClick={refreshTrends}>{loading ? '…' : '↻'}</View>}
      />

      <View className='v2-hero'>
        <View className='v2-kicker'>物价走势 · {meta.sourceLabel}</View>
        <View className='v2-h1' style={{ fontSize: '50rpx' }}>{focusItem ? focusItem.name : '本服物价'}</View>
        <View className='v2-hero-sub'>
          {serverName} · {meta.days} 天 · {meta.points} 个节点 · {allItems.length} 个物品
          {focusItem ? ' · ' + focusItem.skillName : ''}
        </View>
      </View>

      <View className='v2-card-pad' style={{ marginTop: '18rpx', background: 'var(--card)', border: '1rpx solid var(--border)' }}>
        <View className='v2-tiny' style={{ marginBottom: '8rpx' }}>时间范围</View>
        <Seg value={range} options={RANGE_OPTIONS} onChange={setRange} />
        <View className='v2-tiny' style={{ margin: '16rpx 0 8rpx' }}>类型</View>
        <Seg value={type} options={TYPE_OPTIONS} onChange={setType} />
        <View className='v2-flex' style={{ gap: '12rpx', marginTop: '16rpx' }}>
          <Picker mode='selector' range={skillOptions} value={skillIdx}
            onChange={function (e) {
              const i = Number(e.detail.value);
              setSkillId(i === skillOptions.length - 1 ? 'stone' : i ? DATA.skills[i - 1].id : '');
            }}>
            <View className='v2-input' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text>{skillOptions[skillIdx]}</Text><Text className='v2-muted'>⌄</Text>
            </View>
          </Picker>
          <Picker mode='selector' range={allItems.map(function (i) { return i.name; })} value={focusIdx}
            onChange={function (e) {
              const item = allItems[Number(e.detail.value)];
              if (item) setFocusKey(item.key);
            }}>
            <View className='v2-input' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ maxWidth: '240rpx', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{focusItem ? focusItem.name : '选择物品'}</Text>
              <Text className='v2-muted'>⌄</Text>
            </View>
          </Picker>
        </View>
        <View className='v2-tiny' style={{ marginTop: '10rpx' }}>快照 {meta.updatedAt ? meta.updatedAt.slice(0, 16).replace('T', ' ') : '—'} · 数据 {meta.catalogVersion}</View>
      </View>

      {isCustom ? (
        <View className='v2-tiny' style={{ marginTop: '10rpx' }}>自定义服无历史，按基准价展示。</View>
      ) : null}

      <StatGrid
        items={[
          { k: '最新价', v: summary.last == null ? '—' : fmt(summary.last, 2), u: '金', m: summary.source },
          { k: '区间涨跌', v: summary.changePct == null ? '—' : fmtPct(summary.changePct / 100, 1), m: summary.count + ' 个节点', tone: summary.changePct > 0 ? 'v2-pos' : summary.changePct < 0 ? 'v2-neg' : '' },
          { k: '区间最高', v: summary.max == null ? '—' : fmt(summary.max, 2), u: '金', m: '区间内采用价' },
          { k: '区间最低', v: summary.min == null ? '—' : fmt(summary.min, 2), u: '金', m: '来源 ' + summary.source }
        ]}
      />

      <Section title='价格曲线' sub={'本服报价优先，缺失时用基准价 · ' + summary.count + ' 个节点'}>
        <View className='trend-canvas-wrap'>
          <Canvas type='2d' id='trend-canvas' canvasId='trend-canvas' className='trend-canvas' style={{ width: '100%', height: '320rpx' }} />
          {!focusSeries.length ? <View className='trend-canvas-empty'><Text className='tiny dim'>当前筛选没有价格节点</Text></View> : null}
        </View>
        <View className='v2-tiny' style={{ marginTop: '8rpx' }}>不覆盖价格库里的手动校准；先在本服行情改价，曲线只反映历史快照。</View>
      </Section>

      <Section title='区间涨跌榜' sub={'按涨跌幅 · ' + ranked.length + ' 项'}>
        <View className='v2-rows'>
          {ranked.slice(0, 20).map(function (row, i) {
            const change = row.summary.changePct;
            return (
              <View className={'v2-row' + (focusItem && row.item.key === focusItem.key ? ' active' : '')} key={row.item.key}
                onClick={function () { setFocusKey(row.item.key); }} style={{ minHeight: '92rpx' }}>
                <Text className={'v2-no' + (i === 0 ? ' top' : '')}>{i + 1}</Text>
                <View className='v2-row-main'>
                  <Text className='v2-row-nm'>{row.item.name}</Text>
                  <Text className='v2-row-ds'>{row.item.skillName} · 最新 {fmt(row.summary.last, 2)} 金 · {row.summary.count} 节点</Text>
                </View>
                <View className='v2-row-val'>
                  <Text className={'v2-row-v ' + (change > 0 ? 'v2-pos' : change < 0 ? 'v2-neg' : '')}>{fmtPct(change / 100, 1)}</Text>
                  <Text className='v2-row-u'>区间涨跌</Text>
                </View>
              </View>
            );
          })}
          {!ranked.length ? <Empty title='当前筛选没有可比较的物品' desc='调整筛选。' /> : null}
        </View>
      </Section>

      <Section title='历史节点' sub='当前物品 · 时间倒序' action='复制 CSV' onAction={copyNodes}>
        <View className='v2-rows'>
          {viewPoints.slice().reverse().map(function (point, i) {
            const price = focusItem ? priceOfPoint(point, focusItem) : null;
            return (
              <View className='v2-row' key={point.at + i} style={{ minHeight: '84rpx' }}>
                <View className='v2-row-main'>
                  <Text className='v2-row-nm'>{trendAtText(point.at)}</Text>
                  <Text className='v2-row-ds'>{point.pricedCount} 项有价 · {point.changed} 项变化 · {point.source === 'seed' ? '基准' : '更新'}</Text>
                </View>
                <View className='v2-row-val'>
                  <Text className='v2-row-v'>{price == null ? '—' : fmt(price, 2)}</Text>
                  <Text className='v2-row-u'>金</Text>
                </View>
              </View>
            );
          })}
        </View>
      </Section>

      <DataNote />
    </View>
  );
}

export default withTheme(Trends);
