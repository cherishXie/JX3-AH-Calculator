import withTheme from '../../components/withTheme';
import { useMemo, useState } from 'react';
import { View, Text } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import TopBar from '../../components/TopBar';
import Kpi from '../../components/Kpi';
import BarList from '../../components/BarList';
import Seg from '../../components/Seg';
import SkillIcon from '../../components/SkillIcon';
import Empty from '../../components/Empty';
import DataNote from '../../components/DataNote';
import { syncRemotePrices } from '../../shared/remotePrices';
import { isCloudConfigured } from '../../shared/cloudConfig';
import StoneMiniCard from '../../components/StoneMiniCard';
import { useStore, getState } from '../../store';
import { DATA, rowsOf, statsOf, simulate, median, avg, sortRows, isMarketFresh } from '../../shared/engine';
import { fmt, fmtTime, fmtInt, fmtPct, fmtSigned } from '../../shared/format';

function Overview() {
  const [state, actions] = useStore();
  const [type, setType] = useState('all');

  useDidShow(function () {
    if (isCloudConfigured()) syncRemotePrices(actions, true, getState());
  });

  const rows = useMemo(function () {
    return rowsOf(state, { serverId: state.serverId, basis: state.settings.basis });
  }, [state]);

  const stats = statsOf(state, state.serverId);
  const marketFresh = isMarketFresh(state);
  const marketStamp = marketFresh ? Date.parse(state.marketMeta.priceUpdatedAt || '') : NaN;
  const seedStamp = Date.parse(DATA.meta.priceUpdatedAt || '');
  const priceStamp = Number.isFinite(marketStamp) ? marketStamp : seedStamp;
  const priceSource = marketFresh ? '云端行情' : (stats.quote ? '包内本服报价' : '包内示例');
  const valid = rows.filter(function (r) { return !r.calc.missing && r.calc.perEnergy != null; });
  const best = valid.slice().sort(function (a, b) { return b.calc.perEnergy - a.calc.perEnergy; })[0];
  const med = median(valid.map(function (r) { return r.calc.perEnergy; }));
  const positives = rows.filter(function (r) { return !r.calc.missing && r.calc.profit > 0; }).length;
  const negatives = rows.filter(function (r) { return !r.calc.missing && r.calc.profit < 0; }).length;
  const missing = rows.filter(function (r) { return r.calc.missing; }).length;
  const sim = simulate(rows, state.settings.energyBudget);
  const filtered = type === 'all' ? rows : rows.filter(function (r) { return r.type === type; });
  const chartRows = sortRows(filtered.filter(function (r) { return !r.calc.missing; }), 'perEnergy', 'desc')
    .slice(0, 5).map(function (r, i) {
      return {
        id: r.recipe.id, label: r.recipe.name, meta: (i + 1) + ' · ' + r.skill.name,
        value: r.calc.perEnergy, type: r.type
      };
    });
  const recs = sortRows(rows.filter(function (r) { return !r.calc.missing && r.calc.profit > 0; }), 'perEnergy', 'desc').slice(0, 3);
  const gatherAvg = avg(rows.filter(function (r) { return r.type === 'gather' && !r.calc.missing; }).map(function (r) { return r.calc.perEnergy; }));
  const craftAvg = avg(rows.filter(function (r) { return r.type === 'craft' && !r.calc.missing; }).map(function (r) { return r.calc.perEnergy; }));

  function openRecipe(id) {
    Taro.navigateTo({ url: '/pages/recipe/index?id=' + id });
  }
  function goSkill(id) {
    Taro.setStorageSync('activeSkill', id);
    Taro.switchTab({ url: '/pages/skills/index' });
  }

  const budget = state.settings.energyBudget;

  return (
    <View className='page'>
      <TopBar title='总览' subtitle='生活技艺成本与精力收益一览' />

      <View className='kpi-grid'>
        <Kpi label='最优精力收益' value={best ? fmt(best.calc.perEnergy, 2) : '—'} unit='金/精力'
          meta={best ? best.recipe.name + ' · ' + best.skill.name : '补齐材料价格后计算'} tone={best ? 'pos' : ''} />
        <Kpi label='盈利配方' value={String(positives)} unit={'/ ' + rows.length + ' 个'}
          meta={'亏损 ' + negatives + ' · 缺价 ' + missing} />
        <Kpi label='本服校准' value={String(Math.round(stats.calibrated * 100))} unit='%'
          meta={stats.user + ' 项已校准 · ' + (stats.market + stats.quote ? (stats.market + stats.quote) + ' 项有报价' : stats.seed + ' 项示例')} progress={stats.calibrated * 100} progressTone='warn' />
        <Kpi label='满精力预估' value={fmt(sim.profit, 2)} unit='金'
          meta={'预算 ' + fmtInt(budget) + ' · 用尽 ' + fmtInt(sim.used)} tone='pos' />
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>现在做什么最赚精力？</Text>
            <Text className='card-sub'>按每点精力收益排序 · Top 5</Text>
          </View>
        </View>
        <View className='card-body'>
          <View className='mb'>
            <Seg
              value={type}
              options={[{ value: 'all', label: '全部' }, { value: 'craft', label: '制造' }, { value: 'gather', label: '采集' }]}
              onChange={setType}
            />
          </View>
          <BarList rows={chartRows} onPick={openRecipe} limit={5} />
          <View className='row-between mt'>
            <Text className='tiny dim'>全站中位 {med == null ? '—' : fmt(med, 2)} 金/精力</Text>
            <Text className='tiny dim' onClick={function () { Taro.switchTab({ url: '/pages/analysis/index' }); }}>查看完整分析 ›</Text>
          </View>
        </View>
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>今天精力怎么花？</Text>
            <Text className='card-sub'>按精力预算贪心分配 · 可重复制作</Text>
          </View>
        </View>
        <View className='card-body'>
          {recs.length ? (
            <View>
              {recs.map(function (r, i) {
                return (
                  <View className='rec' key={r.recipe.id} onClick={function () { openRecipe(r.recipe.id); }}>
                    <View className={'rank' + (i === 0 ? ' top' : '')}>{i + 1}</View>
                    <View className='main'>
                      <View className='row'>
                        <Text className='nm'>{r.recipe.name}</Text>
                        {i === 0 ? <Text className='badge badge-peak' style={{ marginLeft: '8rpx' }}>首选</Text> : null}
                      </View>
                      <Text className='ds'>{r.skill.name} · 单次 {fmtSigned(r.calc.profit, 2)} 金 · {fmtInt(r.calc.energy)} 精力</Text>
                    </View>
                    <View className='val'>
                      <Text className='v pos'>{fmt(r.calc.perEnergy, 2)}</Text>
                      <Text className='u'> 金/精力</Text>
                    </View>
                  </View>
                );
              })}
              <View className='divider' />
              <View className='kv'><Text className='k'>首选做满 {fmtInt(budget)} 精力</Text><Text className='v'>{sim.allocations[0] ? sim.allocations[0].count : 0} 次</Text></View>
              <View className='kv'><Text className='k'>预计总收益</Text><Text className='v pos'>+{fmt(sim.profit, 2)} 金</Text></View>
            </View>
          ) : <Empty title='暂无正向收益配方' desc='补齐价格或切换到市场价口径。' />}
        </View>
        <View className='card-foot'>已扣 {fmtPct(state.settings.taxRate, 0)} 交易税，不含暴击额外产出与市场深度</View>
      </View>

      <StoneMiniCard />

      {process.env.TARO_ENV === 'weapp' ? (
        <View className='card trend-entry' onClick={function () { Taro.navigateTo({ url: '/pages/trends/index' }); }}>
          <View className='card-head'>
            <View className='flex1'>
              <Text className='card-title'>物价走势</Text>
              <Text className='card-sub'>本服历史报价 · 涨跌榜与单品曲线</Text>
            </View>
            <View className='card-tool'><Text className='badge badge-info'>查看走势 ›</Text></View>
          </View>
          <View className='card-body'>
            <Text className='tiny dim'>按历史快照看区间涨跌、最高 / 最低与节点价格；不会覆盖你的手动校准。</Text>
          </View>
        </View>
      ) : null}

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>哪个技艺整体更划算？</Text>
            <Text className='card-sub'>按配方等权平均 · 含采集与制造</Text>
          </View>
        </View>
        <View className='card-body' style={{ paddingTop: '4rpx' }}>
          <View className='row-between' style={{ padding: '0 0 10rpx' }}>
            <Text className='tiny dim'>采集平均 {gatherAvg == null ? '—' : fmt(gatherAvg, 2)} 金/精力</Text>
            <Text className='tiny dim'>制造平均 {craftAvg == null ? '—' : fmt(craftAvg, 2)} 金/精力</Text>
          </View>
          {DATA.skills.map(function (s) {
            const srows = rows.filter(function (r) { return r.recipe.skillId === s.id; });
            const sv = srows.filter(function (r) { return !r.calc.missing; });
            const a = avg(sv.map(function (r) { return r.calc.perEnergy; }));
            return (
              <View className='list-row' key={s.id} onClick={function () { goSkill(s.id); }}>
                <SkillIcon skill={s} />
                <View className='main'>
                  <View className='row'>
                    <Text className='nm'>{s.name}</Text>
                    <Text className={'badge ' + (s.type === 'gather' ? 'badge-positive' : 'badge-info')} style={{ marginLeft: '8rpx' }}>
                      {s.type === 'gather' ? '采集' : '制造'}
                    </Text>
                  </View>
                  <Text className='ds'>{srows.length} 个 · 平均 {a == null ? '—' : fmt(a, 2)} 金/精力</Text>
                </View>
                <Text className='chev'>›</Text>
              </View>
            );
          })}
        </View>
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>本服行情准备好了吗？</Text>
            <Text className='card-sub'>价格决定收益，先校准最常用的材料</Text>
          </View>
        </View>
        <View className='card-body'>
          <View className='kv'><Text className='k'>当前服务器</Text><Text className='v'>{state.servers.find(function (s) { return s.id === state.serverId; })?.name || '—'}</Text></View>
          <View className='kv'><Text className='k'>已校准价格</Text><Text className='v'>{stats.user} / {stats.total}</Text></View>
          <View className='kv'><Text className='k'>行情时间</Text><Text className='v'>{fmtTime(priceStamp)}</Text></View>
          <View className='kv'><Text className='k'>行情来源</Text><Text className='v'>{priceSource}</Text></View>
          <View className='kv'><Text className='k'>云端行情</Text><Text className='v'>{stats.market} 项</Text></View>
          <View className='kv'><Text className='k'>本服报价</Text><Text className='v'>{stats.quote} 项</Text></View>
          <View className='kv'><Text className='k'>示例价</Text><Text className='v'>{stats.seed} 项</Text></View>
          <View className='kv'><Text className='k'>缺少价格</Text><Text className={'v ' + (stats.missing ? 'neg' : 'pos')}>{stats.missing} 项</Text></View>
          <View className='progress'><View className='progress-fill warn' style={{ width: Math.round(stats.calibrated * 100) + '%' }} /></View>
          <View className='btn-row mt'>
            <View className='btn btn-primary btn-sm' onClick={function () { Taro.switchTab({ url: '/pages/prices/index' }); }}>校准价格库</View>
            <View className='btn btn-ghost btn-sm' onClick={function () { Taro.navigateTo({ url: '/pages/settings/index' }); }}>设置</View>
          </View>
        </View>
      </View>

      <DataNote />
    </View>
  );
}

export default withTheme(Overview);
