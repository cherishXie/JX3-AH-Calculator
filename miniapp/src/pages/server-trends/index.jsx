import { useEffect, useMemo, useState } from 'react';
import { View, Text, ScrollView, Input } from '@tarojs/components';
import Taro from '@tarojs/taro';
import TopBar from '../../components/TopBar';
import Kpi from '../../components/Kpi';
import Seg from '../../components/Seg';
import Empty from '../../components/Empty';
import DataNote from '../../components/DataNote';
import { useStore } from '../../store';
import { loadTrendData, getTrendData, getTrendMeta } from '../../shared/trends';
import { buildServerTrends, buildItemTrends, serverItems } from '../../shared/serverTrends';
import { fmt, fmtPct } from '../../shared/format';
import withTheme from '../../components/withTheme';

const RANGE_OPTIONS = [
  { value: 'today', label: '今日' },
  { value: '3d', label: '近 3 日' },
  { value: '7d', label: '近 7 日' }
];
const RECENT_KEY = 'jx3-mp-server-items-v1';
const QUICK_NAMES = ['羊皮', '骨头', '猫眼石', '鱼肉'];

function pct(v) {
  return v == null || !Number.isFinite(v) ? '—' : fmtPct(v, 1);
}
function timeText(at) {
  const text = String(at || '');
  return text.length >= 16 ? text.slice(11, 16) : text;
}
function heatColor(v) {
  if (v == null || !Number.isFinite(v)) return 'transparent';
  if (Math.abs(v) < 0.0005) return 'transparent';
  const alpha = Math.min(0.5, 0.08 + Math.abs(v) / 0.06 * 0.42);
  return v > 0 ? 'rgba(69,212,131,' + alpha.toFixed(3) + ')' : 'rgba(244,63,94,' + alpha.toFixed(3) + ')';
}
function toneClass(v) {
  return v > 0.0005 ? 'pos' : v < -0.0005 ? 'neg' : 'dim';
}
function readRecent() {
  try {
    const raw = Taro.getStorageSync(RECENT_KEY);
    const list = typeof raw === 'string' ? JSON.parse(raw) : raw;
    return Array.isArray(list) ? list.filter(function (k) { return typeof k === 'string'; }).slice(0, 8) : [];
  } catch (e) {
    return [];
  }
}
function writeRecent(list) {
  try { Taro.setStorageSync(RECENT_KEY, list.slice(0, 8)); } catch (e) { /* ignore */ }
}

function ServerTrends() {
  const [state] = useStore();
  const allItems = useMemo(function () { return serverItems(); }, []);
  const [trendData, setTrendData] = useState(getTrendData());
  const [meta, setMeta] = useState(getTrendMeta());
  const [view, setView] = useState('server');
  const [range, setRange] = useState('today');
  const [selectedIds, setSelectedIds] = useState(function () { return state.servers.map(function (s) { return s.id; }); });
  const [selectedServerId, setSelectedServerId] = useState('');
  const [focusKey, setFocusKey] = useState('');
  const [query, setQuery] = useState('');
  const [recent, setRecent] = useState(readRecent);
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

  const selectedSet = useMemo(function () {
    const map = {};
    selectedIds.forEach(function (id) { map[id] = true; });
    return map;
  }, [selectedIds]);

  const serverCtx = useMemo(function () {
    return buildServerTrends(state, trendData, selectedIds, range);
  }, [state, trendData, selectedIds, range]);

  const itemCtx = useMemo(function () {
    if (view !== 'item') return null;
    return buildItemTrends(state, trendData, focusKey, selectedIds, range, serverCtx);
  }, [view, state, trendData, focusKey, selectedIds, range, serverCtx]);

  const selectedServer = useMemo(function () {
    if (!serverCtx.servers.length) return null;
    return serverCtx.servers.filter(function (s) { return s.id === selectedServerId; })[0] || serverCtx.servers[0];
  }, [serverCtx, selectedServerId]);

  const quickKeys = useMemo(function () {
    const keys = [];
    const source = recent.length ? recent : QUICK_NAMES.map(function (name) {
      const item = allItems.filter(function (i) { return i.name === name; })[0];
      return item ? item.key : '';
    }).concat(['stone:6']);
    source.forEach(function (key) {
      if (key && allItems.some(function (i) { return i.key === key; }) && keys.indexOf(key) === -1) keys.push(key);
    });
    return keys.slice(0, 8);
  }, [recent, allItems]);

  const searchItems = useMemo(function () {
    const q = String(query || '').trim().toLowerCase().replace(/\s+/g, '');
    if (!q) return [];
    return allItems.filter(function (item) {
      const text = (item.name + ' ' + item.skillName + ' ' + item.tierName).toLowerCase().replace(/\s+/g, '');
      return text.indexOf(q) !== -1;
    }).slice(0, 12);
  }, [query, allItems]);

  const toggleServer = function (id) {
    setSelectedIds(function (list) {
      if (list.indexOf(id) !== -1) return list.filter(function (x) { return x !== id; });
      return list.concat(id);
    });
  };
  const rememberItem = function (key) {
    if (!key) return;
    setRecent(function (list) {
      const next = [key].concat(list.filter(function (k) { return k !== key; })).slice(0, 8);
      writeRecent(next);
      return next;
    });
  };
  const chooseItem = function (key) {
    setFocusKey(key);
    setQuery('');
    rememberItem(key);
  };

  if (!meta.points) {
    return (
      <View className='page'>
        <TopBar title='区服趋势' subtitle='17 服净涨跌与物品跨服统计' />
        <Empty title='暂无历史数据' desc='等待物价快照同步后再查看区服趋势。' />
        <DataNote extra='区服趋势使用走势历史快照' />
      </View>
    );
  }

  return (
    <View className='page st-page'>
      <TopBar title='区服趋势' subtitle={loading ? '正在同步历史…' : '17 服净涨跌 · 物品跨服统计'} />

      <View className='card'>
        <View className='card-body'>
          <View className='st-view-tabs'>
            <View className={'st-view-tab' + (view === 'server' ? ' active' : '')} onClick={function () { setView('server'); }}>区服视角</View>
            <View className={'st-view-tab item' + (view === 'item' ? ' active' : '')} onClick={function () { setView('item'); }}>物品视角</View>
          </View>
          <View className='mt'><Seg value={range} options={RANGE_OPTIONS} onChange={setRange} /></View>
          <View className='st-filter-head'>
            <Text className='tiny dim'>区服 {selectedIds.length}/{state.servers.length}</Text>
            <View className='st-filter-actions'>
              <Text className='st-link' onClick={function () { setSelectedIds(state.servers.map(function (s) { return s.id; })); }}>全选</Text>
              <Text className='st-link' onClick={function () { setSelectedIds([]); }}>清空</Text>
            </View>
          </View>
          <ScrollView scrollX className='st-server-scroll' showScrollbar={false}>
            <View className='st-server-chips'>
              {state.servers.map(function (s) {
                return (
                  <View className={'st-server-chip' + (selectedSet[s.id] ? ' on' : '')} key={s.id} onClick={function () { toggleServer(s.id); }}>
                    <Text>{s.name}</Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
          {!selectedIds.length ? <Text className='tiny dim'>至少选择一个区服后查看趋势。</Text> : null}
          <Text className='tiny dim st-data-source'>{meta.sourceLabel} · 最多 7 天 · {meta.points} 个节点 · {meta.updatedAt ? meta.updatedAt.slice(5, 16).replace('T', ' ') : '—'}</Text>
        </View>
      </View>

      {view === 'server' ? (
        <View>
          <View className='kpi-grid'>
            <Kpi label='净广度正 / 负' value={serverCtx.positive + ' / ' + serverCtx.negative} unit='服' meta={'上涨 ' + serverCtx.globalUp + ' · 下跌 ' + serverCtx.globalDown} />
            <Kpi label='全服净广度' value={pct(serverCtx.globalBreadth)} meta='逐物品上涨/下跌净占比' tone={serverCtx.globalBreadth > 0 ? 'pos' : serverCtx.globalBreadth < 0 ? 'neg' : ''} />
            <Kpi label='最强区服' value={serverCtx.rank[0] ? serverCtx.rank[0].name : '—'} meta={serverCtx.rank[0] ? pct(serverCtx.rank[0].score) : ''} tone='pos' />
            <Kpi label='最弱区服' value={serverCtx.rank.length ? serverCtx.rank[serverCtx.rank.length - 1].name : '—'} meta={serverCtx.rank.length ? pct(serverCtx.rank[serverCtx.rank.length - 1].score) : ''} tone='neg' />
          </View>

          <View className='card'>
            <View className='card-head'><View className='flex1'><Text className='card-title'>区服净广度热力图</Text><Text className='card-sub'>逐物品净涨跌 · 左右滑动查看全部节点</Text></View></View>
            <ScrollView scrollX className='st-heat-scroll' showScrollbar={false}>
              <View className='st-heat-table'>
                <View className='st-heat-row'>
                  <Text className='st-heat-name'>区服</Text>
                  {serverCtx.columns.map(function (at) { return <Text className='st-heat-head' key={at}>{timeText(at)}</Text>; })}
                </View>
                {serverCtx.servers.map(function (s) {
                  return (
                    <View className='st-heat-row' key={s.id}>
                      <Text className='st-heat-name'>{s.name}</Text>
                      {s.heat.map(function (v, i) {
                        return <View className='st-heat-cell' key={i} style={{ background: heatColor(v) }}><Text className={'st-heat-val ' + toneClass(v)}>{v == null ? '—' : pct(v)}</Text></View>;
                      })}
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>

          <View className='card'>
            <View className='card-head'><View className='flex1'><Text className='card-title'>技艺 × 区服净广度</Text><Text className='card-sub'>按制造产物 / 采集材料分组 · 左右滑动查看</Text></View></View>
            <ScrollView scrollX className='st-heat-scroll' showScrollbar={false}>
              <View className='st-heat-table'>
                <View className='st-heat-row'>
                  <Text className='st-heat-name'>区服</Text>
                  {serverCtx.skills.map(function (sk) { return <Text className='st-heat-head st-skill-head' key={sk.id}>{sk.name}</Text>; })}
                </View>
                {serverCtx.servers.map(function (s) {
                  return (
                    <View className='st-heat-row' key={s.id}>
                      <Text className='st-heat-name'>{s.name}</Text>
                      {(s.skills || []).map(function (sk) {
                        return <View className='st-heat-cell st-skill-cell' key={sk.id} style={{ background: heatColor(sk.net) }}><Text className={'st-heat-val ' + toneClass(sk.net)}>{sk.net == null ? '—' : pct(sk.net)}</Text></View>;
                      })}
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>

          <View className='card'>
            <View className='card-head'><View className='flex1'><Text className='card-title'>区服净广度榜</Text><Text className='card-sub'>按净涨跌广度排序 · 覆盖不足仅作参考</Text></View></View>
            <View className='card-body' style={{ paddingTop: '4rpx' }}>
              {serverCtx.rank.map(function (s, i) {
                return (
                  <View className={'st-rank-row' + (selectedServer && selectedServer.id === s.id ? ' active' : '')} key={s.id} onClick={function () { setSelectedServerId(s.id); }}>
                    <Text className='st-rank-index'>{i + 1}</Text>
                    <View className='main'>
                      <Text className='nm'>{s.name}<Text className='tiny dim'> {s.region}</Text></Text>
                      <Text className='ds'>涨 {s.up} · 跌 {s.down} · 平 {s.flat} · 覆盖 {Math.round(s.coverage * 100)}%</Text>
                    </View>
                    <Text className={'st-rank-value ' + toneClass(s.score)}>{pct(s.score)}</Text>
                  </View>
                );
              })}
            </View>
          </View>

          {selectedServer ? (
            <View className='card'>
              <View className='card-head'><View className='flex1'><Text className='card-title'>{selectedServer.name} · 主要变动</Text><Text className='card-sub'>覆盖 {selectedServer.comparable}/{serverCtx.items.length} 项 · 点击区服榜切换</Text></View></View>
              <View className='card-body st-movers'>
                <View className='st-mover-col'>
                  <Text className='st-mover-title pos'>涨幅前 5</Text>
                  {selectedServer.topUp.length ? selectedServer.topUp.map(function (r) {
                    return <View className='st-mover-row' key={r.item.key}><Text className='st-mover-name'>{r.item.name}</Text><Text className='pos'>{pct(r.ret)}</Text></View>;
                  }) : <Text className='tiny dim'>无上涨物品</Text>}
                </View>
                <View className='st-mover-col'>
                  <Text className='st-mover-title neg'>跌幅前 5</Text>
                  {selectedServer.topDown.length ? selectedServer.topDown.map(function (r) {
                    return <View className='st-mover-row' key={r.item.key}><Text className='st-mover-name'>{r.item.name}</Text><Text className='neg'>{pct(r.ret)}</Text></View>;
                  }) : <Text className='tiny dim'>无下跌物品</Text>}
                </View>
              </View>
            </View>
          ) : null}
        </View>
      ) : (
        <View>
          <View className='card'>
            <View className='card-head'><View className='flex1'><Text className='card-title'>关注物品</Text><Text className='card-sub'>快速查看最近物品，或搜索名称/技艺</Text></View></View>
            <View className='card-body'>
              <ScrollView scrollX className='st-server-scroll' showScrollbar={false}>
                <View className='st-server-chips'>
                  {quickKeys.map(function (key) {
                    const item = allItems.filter(function (i) { return i.key === key; })[0];
                    if (!item) return null;
                    return <View className={'st-server-chip' + (itemCtx && itemCtx.item && itemCtx.item.key === key ? ' on' : '')} key={key} onClick={function () { chooseItem(key); }}><Text>{item.name}</Text></View>;
                  })}
                </View>
              </ScrollView>
              <Input className='input input-sm mt' value={query} placeholder='搜索物品 / 技艺 / 品阶' placeholderStyle='color: var(--muted-3)'
                onInput={function (e) { setQuery(e.detail.value); }} />
              {query ? (
                <View className='st-search-results'>
                  {searchItems.length ? searchItems.map(function (item) {
                    return <View className='st-search-row' key={item.key} onClick={function () { chooseItem(item.key); }}><Text>{item.name}</Text><Text className='tiny dim'>{item.skillName}</Text></View>;
                  }) : <Text className='tiny dim'>没有匹配物品</Text>}
                </View>
              ) : null}
            </View>
          </View>

          {itemCtx && itemCtx.item && itemCtx.stats ? (
            <View>
              <View className='kpi-grid'>
                <Kpi label='有报价区服' value={itemCtx.stats.comparable + ' / ' + itemCtx.selectedServers.length} unit='服' meta={'覆盖 ' + Math.round(itemCtx.stats.coverage * 100) + '%'} />
                <Kpi label='上涨 / 下跌' value={itemCtx.stats.up + ' / ' + itemCtx.stats.down} unit='服' meta={itemCtx.stats.flat + ' 服持平'} tone={itemCtx.stats.up > itemCtx.stats.down ? 'pos' : itemCtx.stats.up < itemCtx.stats.down ? 'neg' : ''} />
                <Kpi label='跨服中位' value={pct(itemCtx.stats.median)} meta='等权统计 17 服' tone={toneClass(itemCtx.stats.median)} />
                <Kpi label='区间极值' value={itemCtx.stats.max ? pct(itemCtx.stats.max.row.ret) : '—'} meta={itemCtx.stats.max ? itemCtx.stats.max.server.name : ''} />
              </View>

              <View className='card'>
                <View className='card-head'><View className='flex1'><Text className='card-title'>{itemCtx.item.name} · 区服涨跌</Text><Text className='card-sub'>{itemCtx.item.skillName} · {itemCtx.item.tierName}</Text></View></View>
                <View className='card-body st-dist'>
                  {itemCtx.stats.rows.map(function (row) {
                    const ret = row.row ? row.row.ret : null;
                    const width = ret == null ? 0 : Math.min(100, Math.abs(ret) * 100);
                    return (
                      <View className='st-dist-row' key={row.server.id}>
                        <Text className='st-dist-name'>{row.server.name}</Text>
                        <View className='st-dist-track'>
                          <View className={'st-dist-bar ' + (ret == null ? 'missing' : ret >= 0 ? 'pos' : 'neg')} style={{ width: width + '%' }} />
                        </View>
                        <Text className={'st-dist-val ' + (row.status === 'up' ? 'pos' : row.status === 'down' ? 'neg' : 'dim')}>{ret == null ? '缺价' : pct(ret)}</Text>
                      </View>
                    );
                  })}
                </View>
                <View className='card-foot'>中位 {pct(itemCtx.stats.median)} · 上涨均值 {pct(itemCtx.stats.upAvg)} · 下跌均值 {pct(itemCtx.stats.downAvg)}</View>
              </View>

              <View className='card'>
                <View className='card-head'><View className='flex1'><Text className='card-title'>物品跨服统计</Text><Text className='card-sub'>按上涨区服数排序 · 点击切换</Text></View></View>
                <View className='card-body' style={{ paddingTop: '4rpx' }}>
                  {itemCtx.ranking.slice(0, 18).map(function (r) {
                    return (
                      <View className={'st-rank-row' + (r.item.key === itemCtx.item.key ? ' active' : '')} key={r.item.key} onClick={function () { chooseItem(r.item.key); }}>
                        <View className='main'><Text className='nm'>{r.item.name}</Text><Text className='ds'>涨 {r.up} · 跌 {r.down} · 覆盖 {r.comparable}/{itemCtx.selectedServers.length}</Text></View>
                        <Text className={'st-rank-value ' + toneClass(r.median)}>{pct(r.median)}</Text>
                      </View>
                    );
                  })}
                </View>
              </View>

              <View className='card'>
                <View className='card-head'><View className='flex1'><Text className='card-title'>{itemCtx.item.name} · 区服明细</Text><Text className='card-sub'>起始价 / 当前价 / 涨跌幅</Text></View></View>
                <View className='card-body' style={{ paddingTop: '4rpx' }}>
                  {itemCtx.stats.rows.map(function (row) {
                    return (
                      <View className='st-detail-row' key={row.server.id}>
                        <Text className='st-detail-name'>{row.server.name}</Text>
                        <Text className='st-detail-num'>{row.row ? fmt(row.row.p0, 2) : '—'}</Text>
                        <Text className='st-detail-num'>{row.row ? fmt(row.row.p1, 2) : '—'}</Text>
                        <Text className={'st-detail-change ' + (row.status === 'up' ? 'pos' : row.status === 'down' ? 'neg' : 'dim')}>{row.row ? pct(row.row.ret) : '缺价'}</Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          ) : <Empty title='当前筛选没有可比物品' desc='调整区服、时间或选择其他物品。' />}
        </View>
      )}

      <DataNote extra={meta.kind === 'cloud' ? '区服趋势 · 云端历史缓存 1 小时' : '区服趋势 · 离线历史快照'} />
    </View>
  );
}

export default withTheme(ServerTrends);
