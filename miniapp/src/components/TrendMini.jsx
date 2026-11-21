import { useMemo } from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useStore } from '../store';
import { useTrendData } from '../shared/useTrendData';
import { buildPoints, filterPoints, trendItems, rankItems, seriesOf, priceOfPoint, trendAtText } from '../shared/trends';
import { fmt } from '../shared/format';
import Empty from './Empty';

const IS_WEAPP = process.env.TARO_ENV === 'weapp';
/* 生活技艺最常用的四类材料：用均价做本服物价的「体温计」。 */
const BASKET_NAMES = ['羊皮', '骨头', '猫眼石', '鱼肉'];

function pctText(v) {
  if (v == null || !Number.isFinite(v)) return '—';
  return (v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(v).toFixed(1) + '%';
}

function toneOf(v) {
  return v > 0.5 ? 'pos' : v < -0.5 ? 'neg' : 'dim';
}

/**
 * 分析页 · 物价走势迷你卡
 * 不额外画 Canvas：用 View 柱条呈现近 24 小时「常用材料均价」，
 * 避免单个极端物品把曲线压成一根针。
 */
export default function TrendMini() {
  const [state] = useStore();
  const { data, meta } = useTrendData();

  const points = useMemo(function () {
    return filterPoints(buildPoints(state.serverId, data), '24h');
  }, [state.serverId, data]);

  const allItems = useMemo(function () {
    return trendItems({ type: 'all' });
  }, []);

  const ranked = useMemo(function () {
    return rankItems(points, allItems, 400);
  }, [points, allItems]);

  const basket = useMemo(function () {
    return BASKET_NAMES.map(function (name) {
      return allItems.filter(function (i) { return i.name === name; })[0];
    }).filter(Boolean);
  }, [allItems]);

  const topMover = ranked[0] || null;

  const chart = useMemo(function () {
    const rows = [];
    if (basket.length) {
      points.forEach(function (point) {
        const vals = basket.map(function (item) { return priceOfPoint(point, item); })
          .filter(function (v) { return v > 0; });
        if (!vals.length) return;
        rows.push({ at: point.at, price: vals.reduce(function (a, b) { return a + b; }, 0) / vals.length });
      });
    } else {
      const focus = ranked[0];
      if (focus) rows.push.apply(rows, seriesOf(points, focus.item));
    }
    const list = rows.slice(-24);
    if (!list.length) {
      return { list: [], bars: [], min: 0, max: 0, last: null, change: null };
    }
    let min = list[0].price;
    let max = list[0].price;
    list.forEach(function (p) {
      if (p.price < min) min = p.price;
      if (p.price > max) max = p.price;
    });
    const span = max - min || 1;
    const first = list[0].price;
    const last = list[list.length - 1].price;
    return {
      list: list,
      min: min,
      max: max,
      last: last,
      change: first > 0 ? (last / first - 1) * 100 : null,
      bars: list.map(function (p, i) {
        const prev = i > 0 ? list[i - 1].price : p.price;
        return {
          h: 8 + ((p.price - min) / span) * 92,
          up: p.price >= prev
        };
      })
    };
  }, [points, basket, ranked]);

  const stats = useMemo(function () {
    let up = 0;
    let down = 0;
    ranked.forEach(function (r) {
      const v = r.summary.changePct;
      if (v > 0.5) up++;
      else if (v < -0.5) down++;
    });
    return { up: up, down: down, total: ranked.length };
  }, [ranked]);

  const movers = ranked.slice(0, 4);

  function openTrends() {
    Taro.navigateTo({ url: '/pages/trends/index' });
  }

  return (
    <View className='card trend-mini'>
      <View className='card-head'>
        <View className='flex1'>
          <Text className='card-title'>物价走势</Text>
          <Text className='card-sub'>近 24 小时 · 材料均价</Text>
        </View>
        {IS_WEAPP ? (
          <View className='card-tool' onClick={openTrends}>
            <Text className='badge badge-info'>打开走势 ›</Text>
          </View>
        ) : null}
      </View>

      {ranked.length ? (
        <View className='card-body'>
          <View className='mini-kpis'>
            <View className='mini-kpi'>
              <Text className='k'>上涨 / 下跌</Text>
              <Text className='v'><Text className='pos'>{stats.up}</Text><Text className='dim'> / </Text><Text className='neg'>{stats.down}</Text></Text>
              <Text className='s'>{stats.total} 项有可比报价</Text>
            </View>
            <View className='mini-kpi'>
              <Text className='k'>最大波动</Text>
              <Text className={'v ' + toneOf(topMover ? topMover.summary.changePct : null)}>{topMover ? pctText(topMover.summary.changePct) : '—'}</Text>
              <Text className='s'>{topMover ? topMover.item.name : '暂无'}</Text>
            </View>
            <View className='mini-kpi'>
              <Text className='k'>材料均价</Text>
              <Text className='v'>{chart.last == null ? '—' : fmt(chart.last, 2)}</Text>
              <Text className='s'>金/件 · {pctText(chart.change)}</Text>
            </View>
          </View>

          <View className='tm-spark-wrap'>
            <View className='row-between'>
              <Text className='tiny dim'>{basket.length ? '常用材料均价 · ' + BASKET_NAMES.join(' / ') : '本服代表物品'}</Text>
              <Text className={'tiny ' + toneOf(chart.change)}>{pctText(chart.change)}</Text>
            </View>
            <View className='tm-spark'>
              {chart.bars.map(function (b, i) {
                return (
                  <View className='tm-spark-col' key={i}>
                    <View className={'tm-spark-bar ' + (b.up ? 'up' : 'down')} style={{ height: b.h + '%' }} />
                  </View>
                );
              })}
            </View>
            <View className='tm-spark-axis'>
              <Text>{chart.list.length ? trendAtText(chart.list[0].at).slice(5) : '—'}</Text>
              <Text>{chart.list.length ? trendAtText(chart.list[chart.list.length - 1].at).slice(5) : '—'}</Text>
            </View>
            <View className='row-between mt'>
              <Text className='tiny dim'>最低 {fmt(chart.min, 2)} 金</Text>
              <Text className='tiny dim'>最高 {fmt(chart.max, 2)} 金</Text>
              <Text className='tiny dim'>最新 {fmt(chart.last, 2)} 金</Text>
            </View>
          </View>

          <View className='tm-movers'>
            <Text className='tm-movers-title'>波动前 4</Text>
            {movers.map(function (r) {
              return (
                <View className='tm-mover' key={r.item.key}>
                  <View className='main'>
                    <Text className='nm'>{r.item.name}</Text>
                    <Text className='ds'>{r.item.skillName} · 现价 {fmt(r.summary.last, 2)} 金</Text>
                  </View>
                  <Text className={'tm-mover-val ' + toneOf(r.summary.changePct)}>{pctText(r.summary.changePct)}</Text>
                </View>
              );
            })}
          </View>
        </View>
      ) : (
        <View className='card-body'>
          <Empty title='暂时没有可比的价格节点' desc='等下一次行情同步后，这里会显示本服涨跌与波动榜。' />
        </View>
      )}

      <View className='card-foot'>
        {meta.points} 个节点 · 对比 24 小时前
      </View>
    </View>
  );
}
