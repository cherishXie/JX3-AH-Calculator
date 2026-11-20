import { useEffect, useMemo, useState } from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useStore } from '../store';
import { useTrendData } from '../shared/useTrendData';
import { buildServerTrends } from '../shared/serverTrends';
import { fmtPct } from '../shared/format';
import Empty from './Empty';

const IS_WEAPP = process.env.TARO_ENV === 'weapp';

function signedPct(v) {
  if (v == null || !Number.isFinite(v)) return '—';
  return (v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(v * 100).toFixed(1) + '%';
}

function toneOf(v) {
  return v > 0.0005 ? 'pos' : v < -0.0005 ? 'neg' : 'dim';
}

/**
 * 分析页 · 区服趋势迷你卡
 * 17 服净广度计算量偏大，放到 setTimeout 里做，先出骨架再填数据。
 */
export default function ServerTrendMini() {
  const [state] = useStore();
  const { data, meta } = useTrendData();
  const [ctx, setCtx] = useState(null);

  useEffect(function () {
    let alive = true;
    const timer = setTimeout(function () {
      if (!alive) return;
      try {
        const ids = (state.servers || []).map(function (s) { return s.id; });
        setCtx(buildServerTrends(state, data, ids, 'today'));
      } catch (e) {
        setCtx({ servers: [], rank: [], items: [], globalUp: 0, globalDown: 0, globalBreadth: null, positive: 0, negative: 0, columns: [], skills: [] });
      }
    }, 30);
    return function () {
      alive = false;
      clearTimeout(timer);
    };
  }, [state, data]);

  const view = useMemo(function () {
    if (!ctx || !ctx.rank.length) return null;
    const rank = ctx.rank;
    const maxAbs = Math.max.apply(null, rank.map(function (s) { return Math.abs(s.score || 0); })) || 1;
    const current = ctx.servers.filter(function (s) { return s.id === state.serverId; })[0] || rank[0];
    return {
      best: rank[0],
      worst: rank[rank.length - 1],
      current: current,
      maxAbs: maxAbs,
      top: rank.slice(0, 4)
    };
  }, [ctx, state.serverId]);

  function openServerTrends() {
    Taro.navigateTo({ url: '/pages/server-trends/index' });
  }

  return (
    <View className='card trend-mini'>
      <View className='card-head'>
        <View className='flex1'>
          <Text className='card-title'>区服趋势</Text>
          <Text className='card-sub'>{(state.servers || []).length} 服今日净广度 · 跨服找价差</Text>
        </View>
        {IS_WEAPP ? (
          <View className='card-tool' onClick={openServerTrends}>
            <Text className='badge badge-info'>查看全局 ›</Text>
          </View>
        ) : null}
      </View>

      {!ctx ? (
        <View className='card-body'>
          <Text className='tiny dim' style={{ marginBottom: '14rpx' }}>正在计算 {(state.servers || []).length} 服净广度…</Text>
          <View className='sk-row short' />
          <View className='sk-row tall' />
          <View className='sk-row' />
          <View className='sk-row short' />
        </View>
      ) : view ? (
        <View className='card-body'>
          <View className='mini-kpis'>
            <View className='mini-kpi'>
              <Text className='k'>上涨 / 下跌服</Text>
              <Text className='v'><Text className='pos'>{ctx.positive}</Text><Text className='dim'> / </Text><Text className='neg'>{ctx.negative}</Text></Text>
              <Text className='s'>共 {ctx.rank.length} 服有可比价</Text>
            </View>
            <View className='mini-kpi'>
              <Text className='k'>全服净广度</Text>
              <Text className={'v ' + toneOf(ctx.globalBreadth)}>{signedPct(ctx.globalBreadth)}</Text>
              <Text className='s'>逐物品上涨 − 下跌</Text>
            </View>
            <View className='mini-kpi'>
              <Text className='k'>最强区服</Text>
              <Text className='v' style={{ fontSize: '28rpx' }}>{view.best.name}</Text>
              <Text className='s'>净广度 {signedPct(view.best.score)}</Text>
            </View>
          </View>

          <View className='stm-rank'>
            <View className='row-between mb'>
              <Text className='tiny dim'>区服净广度榜</Text>
              <Text className='tiny dim'>最弱 {view.worst.name} {signedPct(view.worst.score)}</Text>
            </View>
            {view.top.map(function (s, i) {
              return (
                <View className='stm-rank-row' key={s.id}>
                  <Text className='stm-rank-index'>{i + 1}</Text>
                  <View className='main'>
                    <View className='row-between'>
                      <Text className='nm'>{s.name}<Text className='tiny dim'> {s.region}</Text></Text>
                      <Text className={'stm-rank-val ' + toneOf(s.score)}>{signedPct(s.score)}</Text>
                    </View>
                    <View className='stm-bar-track'>
                      <View className={'stm-bar-fill ' + (s.score >= 0 ? 'pos' : 'neg')}
                        style={{ width: Math.max(4, Math.abs(s.score || 0) / view.maxAbs * 100) + '%' }} />
                    </View>
                    <Text className='stm-rank-meta'>涨 {s.up} · 跌 {s.down} · 覆盖 {Math.round(s.coverage * 100)}%</Text>
                  </View>
                </View>
              );
            })}
          </View>

          <View className='st-movers mt'>
            <View className='st-mover-col'>
              <Text className='st-mover-title pos'>{view.current.name} · 涨幅前 3</Text>
              {view.current.topUp.length ? view.current.topUp.slice(0, 3).map(function (r) {
                return <View className='st-mover-row' key={r.item.key}><Text className='st-mover-name'>{r.item.name}</Text><Text className='pos'>{fmtPct(r.ret, 1)}</Text></View>;
              }) : <Text className='tiny dim'>无上涨物品</Text>}
            </View>
            <View className='st-mover-col'>
              <Text className='st-mover-title neg'>跌幅前 3</Text>
              {view.current.topDown.length ? view.current.topDown.slice(0, 3).map(function (r) {
                return <View className='st-mover-row' key={r.item.key}><Text className='st-mover-name'>{r.item.name}</Text><Text className='neg'>{fmtPct(r.ret, 1)}</Text></View>;
              }) : <Text className='tiny dim'>无下跌物品</Text>}
            </View>
          </View>
        </View>
      ) : (
        <View className='card-body'>
          <Empty title='暂时没有可比的区服快照' desc='等历史行情同步后，这里会显示区服净广度与涨跌榜。' />
        </View>
      )}

      <View className='card-foot'>
        {meta.sourceLabel} · 今日节点 · 区服榜按净广度排序；覆盖不足的区服仅作参考
      </View>
    </View>
  );
}
