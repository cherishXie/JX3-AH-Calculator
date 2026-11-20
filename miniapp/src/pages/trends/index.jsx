import { useEffect, useMemo, useState } from 'react';
import { View, Text, Picker, Canvas } from '@tarojs/components';
import Taro from '@tarojs/taro';
import TopBar from '../../components/TopBar';
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

function drawChart(series) {
  if (!series || !series.length) return;
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
      ctx.fillStyle = '#94a3b8';
      ctx.strokeStyle = 'rgba(148,163,184,0.18)';
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
      grad.addColorStop(0, 'rgba(97,221,170,0.24)');
      grad.addColorStop(1, 'rgba(97,221,170,0.01)');
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
      ctx.strokeStyle = '#61DDAA';
      ctx.lineWidth = 2;
      ctx.stroke();

      series.forEach(function (p, i) {
        const x = xOf(i);
        const y = yOf(p.price);
        ctx.beginPath();
        ctx.arc(x, y, 2.6, 0, Math.PI * 2);
        ctx.fillStyle = '#61DDAA';
        ctx.fill();
        ctx.strokeStyle = '#0F172A';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      ctx.fillStyle = '#94a3b8';
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

export default function Trends() {
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
    drawChart(focusSeries);
  }, [focusSeries, focusItem]);

  if (!meta.points) {
    return (
      <View className='page'>
        <TopBar title='物价走势' subtitle='本服历史报价 · 离线快照' />
        <Empty title='暂无物价历史' desc='等待下一次物价快照生成后再同步小程序。' />
        <DataNote extra='离线历史快照' />
      </View>
    );
  }

  return (
    <View className='page trend-page'>
      <TopBar title='物价走势' subtitle='本服历史报价 · 离线快照' />

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>历史快照</Text>
            <Text className='card-sub'>{meta.days} 天 · {meta.points} 个节点 · 数据 {meta.catalogVersion}</Text>
          </View>
          <View className='card-tool'>
            <Text className={'badge ' + (meta.kind === 'cloud' ? 'badge-positive' : 'badge-neutral')} style={{ marginRight: '8rpx' }}>{meta.sourceLabel}</Text>
            <View className='btn btn-ghost btn-sm' onClick={refreshTrends}>{loading ? '同步中' : '刷新'}</View>
          </View>
        </View>
        <View className='card-body'>
          <View className='kv'><Text className='k'>当前服务器</Text><Text className='v'>{serverName}</Text></View>
          <View className='kv'><Text className='k'>快照时间</Text><Text className='v'>{meta.updatedAt ? meta.updatedAt.slice(0, 16).replace('T', ' ') : '—'}</Text></View>
          <View className='kv'><Text className='k'>数据范围</Text><Text className='v'>{viewPoints.length} 个节点 · {allItems.length} 个物品</Text></View>
          <View className='trend-filter-block'>
            <Text className='form-label'>时间范围</Text>
            <Seg value={range} options={RANGE_OPTIONS} onChange={setRange} />
          </View>
          <View className='trend-filter-block'>
            <Text className='form-label'>类型</Text>
            <Seg value={type} options={TYPE_OPTIONS} onChange={setType} />
          </View>
          <View className='filter-row mt'>
            <Picker mode='selector' range={skillOptions} value={skillIdx}
              onChange={function (e) {
                const i = Number(e.detail.value);
                setSkillId(i === skillOptions.length - 1 ? 'stone' : i ? DATA.skills[i - 1].id : '');
              }}>
              <View className='picker picker-sm'><Text>{skillOptions[skillIdx]}</Text><Text className='arrow'>⌄</Text></View>
            </Picker>
            <Picker mode='selector' range={allItems.map(function (i) { return i.name; })} value={focusIdx}
              onChange={function (e) {
                const item = allItems[Number(e.detail.value)];
                if (item) setFocusKey(item.key);
              }}>
              <View className='picker picker-sm' style={{ flex: 1 }}><Text>{focusItem ? focusItem.name : '选择物品'}</Text><Text className='arrow'>⌄</Text></View>
            </Picker>
          </View>
        </View>
      </View>

      {isCustom ? (
        <View className='notice'>
          <Text className='ic'>!</Text>
          <Text>自定义服务器没有拍卖历史，按快照基准价展示；切换到内置区服可看本服报价。</Text>
        </View>
      ) : null}

      <View className='kpi-grid'>
        <Kpi label='最新价' value={summary.last == null ? '—' : fmt(summary.last, 2)} unit='金'
          meta={(focusItem ? focusItem.name : '选择物品') + ' · ' + summary.source} />
        <Kpi label='区间涨跌' value={summary.changePct == null ? '—' : fmtPct(summary.changePct / 100, 1)}
          meta={summary.count + ' 个节点'} tone={summary.changePct > 0 ? 'pos' : summary.changePct < 0 ? 'neg' : ''} />
        <Kpi label='区间最高' value={summary.max == null ? '—' : fmt(summary.max, 2)} unit='金' meta='区间内采用价' />
        <Kpi label='区间最低' value={summary.min == null ? '—' : fmt(summary.min, 2)} unit='金' meta={'来源 ' + summary.source} />
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>{focusItem ? focusItem.name : '物价变化'}</Text>
            <Text className='card-sub'>{focusItem ? focusItem.skillName + ' · ' + focusItem.tierName : '选择物品'} · {summary.count} 个节点</Text>
          </View>
        </View>
        <View className='trend-canvas-wrap'>
          <Canvas type='2d' id='trend-canvas' canvasId='trend-canvas' className='trend-canvas' style={{ width: '100%', height: '320rpx' }} />
          {!focusSeries.length ? <View className='trend-canvas-empty'><Text className='tiny dim'>当前筛选没有价格节点</Text></View> : null}
        </View>
        <View className='card-foot'>本服报价优先，缺失时使用基准价；不覆盖价格库里的手动校准。</View>
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>区间涨跌榜</Text>
            <Text className='card-sub'>按相对区间首点的涨跌幅绝对值排序</Text>
          </View>
        </View>
        <View className='card-body' style={{ paddingTop: '4rpx' }}>
          {ranked.length ? ranked.map(function (row, i) {
            const change = row.summary.changePct;
            return (
              <View className={'trend-rank-row' + (focusItem && row.item.key === focusItem.key ? ' active' : '')}
                key={row.item.key} onClick={function () { setFocusKey(row.item.key); }}>
                <Text className='trend-rank-index'>{i + 1}</Text>
                <View className='main'>
                  <Text className='nm'>{row.item.name}</Text>
                  <Text className='ds'>{row.item.skillName} · 最新 {fmt(row.summary.last, 2)} 金 · {row.summary.count} 个节点</Text>
                </View>
                <Text className={'trend-rank-change ' + (change > 0 ? 'pos' : change < 0 ? 'neg' : '')}>
                  {fmtPct(change / 100, 1)}
                </Text>
              </View>
            );
          }) : <Empty title='当前筛选没有可比较的物品' desc='换一个类型、技艺或时间范围。' />}
        </View>
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>历史节点</Text>
            <Text className='card-sub'>按时间倒序 · 显示当前关注物品的采用价</Text>
          </View>
        </View>
        <View className='card-body' style={{ paddingTop: '4rpx' }}>
          {viewPoints.slice().reverse().map(function (point, i) {
            const price = focusItem ? priceOfPoint(point, focusItem) : null;
            return (
              <View className='trend-node-row' key={point.at + i}>
                <View className='main'>
                  <Text className='nm'>{trendAtText(point.at)}</Text>
                  <Text className='ds'>{point.pricedCount} 项有价 · {point.changed} 项变化 · {point.source === 'seed' ? '基准' : '更新'}</Text>
                </View>
                <View className='val'>
                  <Text className='v'>{price == null ? '—' : fmt(price, 2)}</Text>
                  <Text className='u'>金</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>

      <DataNote extra={meta.kind === 'cloud' ? '云端历史 · 缓存 1 小时' : '离线历史快照 · 随小程序版本更新'} />
    </View>
  );
}
