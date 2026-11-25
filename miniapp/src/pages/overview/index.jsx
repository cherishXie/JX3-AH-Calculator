import withTheme from '../../components/withTheme';
import { useMemo, useState } from 'react';
import { View, Text } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import PageHeader from '../../components/PageHeader';
import Section from '../../components/Section';
import StatGrid from '../../components/StatGrid';
import DataNote from '../../components/DataNote';
import { syncRemotePrices } from '../../shared/remotePrices';
import { isCloudConfigured } from '../../shared/cloudConfig';
import { useStore, getState } from '../../store';
import { DATA, rowsOf, statsOf, simulate, isMarketFresh } from '../../shared/engine';
import { stoneSummary } from '../../shared/stones';
import { gradeOf, visibleByGrade, gradeCounts } from '../../shared/landability';
import { fmt, fmtInt, fmtPct, fmtWan } from '../../shared/format';

const IS_WEAPP = process.env.TARO_ENV === 'weapp';
const BUDGETS = [200, 500, 1000, 3000];

function Overview() {
  const [state, actions] = useStore();
  const [budget, setBudget] = useState(state.settings.energyBudget || 3000);
  const [type, setType] = useState('all');
  const [showAll, setShowAll] = useState(false);

  useDidShow(function () {
    if (isCloudConfigured()) syncRemotePrices(actions, true, getState());
  });

  const rows = useMemo(function () {
    return rowsOf(state, { serverId: state.serverId, basis: state.settings.basis });
  }, [state]);

  const stats = statsOf(state, state.serverId);
  const scopedRows = useMemo(function () {
    return showAll ? rows : visibleByGrade(rows, state.serverId);
  }, [rows, showAll, state.serverId]);
  const grades = useMemo(function () { return gradeCounts(rows, state.serverId); }, [rows, state.serverId]);
  const complete = useMemo(function () {
    return scopedRows.filter(function (r) { return !r.calc.missing && r.calc.perEnergy != null; });
  }, [scopedRows]);
  const valid = useMemo(function () {
    return complete.slice().sort(function (a, b) { return b.calc.perEnergy - a.calc.perEnergy; });
  }, [complete]);
  const best = valid[0] || null;
  const positives = complete.filter(function (r) { return r.calc.profit > 0; }).length;
  const negatives = complete.filter(function (r) { return r.calc.profit < 0; }).length;
  const missing = scopedRows.filter(function (r) { return r.calc.missing; }).length;
  const median = useMemo(function () {
    if (!complete.length) return null;
    const vals = complete.map(function (r) { return r.calc.perEnergy; }).sort(function (a, b) { return a - b; });
    const mid = Math.floor(vals.length / 2);
    return vals.length % 2 ? vals[mid] : (vals[mid - 1] + vals[mid]) / 2;
  }, [complete]);

  const sim = useMemo(function () { return simulate(scopedRows, budget); }, [scopedRows, budget]);
  const typeRows = useMemo(function () {
    return valid.filter(function (r) { return type === 'all' || r.type === type; }).slice(0, 10);
  }, [valid, type]);
  const maxPer = typeRows.length ? Math.max.apply(null, typeRows.map(function (r) { return Math.max(0, r.calc.perEnergy); })) : 0;

  const skillStats = useMemo(function () {
    return DATA.skills.map(function (s) {
      const list = complete.filter(function (r) { return r.recipe.skillId === s.id; });
      const avg = list.length ? list.reduce(function (sum, r) { return sum + r.calc.perEnergy; }, 0) / list.length : null;
      const top = list.slice().sort(function (a, b) { return b.calc.perEnergy - a.calc.perEnergy; })[0] || null;
      return { skill: s, count: scopedRows.filter(function (r) { return r.recipe.skillId === s.id; }).length, avg: avg, top: top };
    }).sort(function (a, b) { return (b.avg == null ? -1e9 : b.avg) - (a.avg == null ? -1e9 : a.avg); });
  }, [complete, scopedRows]);
  const maxSkillAvg = Math.max.apply(null, skillStats.map(function (x) { return Math.max(0, x.avg || 0); }).concat([1]));

  const marketFresh = isMarketFresh(state);
  const sourceText = marketFresh ? '云端报价' : (stats.quote ? '本服报价' : '示例价');
  const stone = IS_WEAPP ? stoneSummary(state) : null;
  const bestStone = stone ? stone.bestOverall : null;
  const be7 = stone ? stone.be7 : null;

  function openAnalysis() {
    Taro.navigateTo({ url: '/pages/analysis/index' });
  }
  function openRank() {
    Taro.navigateTo({ url: '/pages/rank/index' });
  }
  function openRecipe(id) {
    Taro.navigateTo({ url: '/pages/recipe/index?id=' + id });
  }
  function openPrices() {
    Taro.switchTab({ url: '/pages/prices/index' });
  }
  function openSkills() {
    Taro.switchTab({ url: '/pages/skills/index' });
  }
  function openSettings() {
    Taro.switchTab({ url: '/pages/settings/index' });
  }
  function openPage(url) {
    Taro.navigateTo({ url: url });
  }

  return (
    <View className='v2-page'>
      <PageHeader
        actions={
          <View hoverClass='v2-pressed' hoverStayTime={80} className='v2-icon-btn' onClick={openSettings}>⚙</View>
        }
      />

      <View className='v2-hero'>
        <View className='v2-kicker'>苍生铸世 · 50 级 · {sourceText}</View>
        <View className='v2-h1'>
          今天精力<Text style={{ color: '#fd7b4c' }}>做什么？</Text>
        </View>
        <View className='v2-hero-sub'>
          {best ? (
            <Text>
              本服最赚：<Text style={{ color: '#fff', fontWeight: 700 }}>{best.recipe.name}</Text>
              {' '}· {best.skill.name} · <Text style={{ color: '#4ade80', fontWeight: 700 }}>{fmt(best.calc.perEnergy, 2)}</Text> 金/精力
            </Text>
          ) : (
            <Text>补齐材料与产物价格后，自动排出本服最优配方。</Text>
          )}
        </View>
      </View>

      <StatGrid
        items={[
          { k: '最优精力收益', v: best ? fmt(best.calc.perEnergy, 2) : '—', u: '金/精力', m: best ? best.recipe.name : '缺价' },
          { k: '盈利配方', v: positives, u: '/ ' + scopedRows.length, m: '亏损 ' + negatives + ' · 缺价 ' + missing, tone: positives ? 'v2-pos' : '' },
          { k: '行情校准', v: Math.round(stats.calibrated * 100), u: '%', m: '已校准 ' + stats.user + ' / ' + stats.total + ' 项' },
          { k: '满精力预估', v: fmtWan(sim.profit, 2), u: '金', m: '精确 ' + fmt(sim.profit, 2) + ' · 用尽 ' + fmtInt(sim.used), tone: 'v2-pos' }
        ]}
      />

      <Section title='今天精力怎么花' sub='按收益贪心分配 · 已扣交易税' action='调预算' onAction={openSettings}>
        <View className='v2-chip-row'>
          {BUDGETS.map(function (b) {
            return (
              <View key={b} className={'v2-chip' + (budget === b ? ' on' : '')} onClick={function () { setBudget(b); }}>
                {b} 精力
              </View>
            );
          })}
        </View>
        <View className='v2-plan'>
          <View className='v2-plan-top'>
            <View>
              <View className='v2-plan-k'>预计总收益</View>
              <View className='v2-plan-v v2-pos'>+{fmtWan(sim.profit, 2)}<Text className='u'>金</Text></View>
            </View>
            <View style={{ textAlign: 'right' }}>
              <View className='v2-plan-k'>精力用尽</View>
              <View className='v2-row-v'>{fmtInt(sim.used)} / {fmtInt(budget)}</View>
            </View>
          </View>
          <View style={{ marginTop: '14rpx' }}>
            {sim.allocations.slice(0, 3).map(function (a, i) {
              return (
                <View className='v2-alloc' key={a.row.recipe.id}>
                  <Text className='n'>{i + 1}</Text>
                  <Text className='nm'>{a.row.recipe.name} × {a.count}</Text>
                  <Text className='v'>+{fmtWan(a.profit, 2)}</Text>
                </View>
              );
            })}
            {!sim.allocations.length ? (
              <View className='v2-tiny'>当前预算下没有正收益配方，先校准行情或调高预算。</View>
            ) : null}
          </View>
          <View className='v2-tiny' style={{ marginTop: '10rpx' }}>
            {sim.allocations.length ? '其余 ' + Math.max(0, sim.allocations.length - 3) + ' 项已计入总收益 · ' : ''}
            中位 {median == null ? '—' : fmt(median, 2)} 金/精力 · 不建模市场深度
          </View>
        </View>
      </Section>

      <Section title='现在做什么最赚' sub={'Top 10 · 金/精力 · 已排除缺价 · 可做 ' + grades.A + ' / 谨慎 ' + grades.B} action='完整排行' onAction={openRank}>
        <View className='v2-chip-row'>
          <View className={'v2-chip' + (showAll ? '' : ' on')} onClick={function () { setShowAll(false); }}>可做 / 谨慎</View>
          <View className={'v2-chip' + (showAll ? ' on' : '')} onClick={function () { setShowAll(true); }}>全部（含不可做）</View>
        </View>
        <View className='v2-chip-row'>
          <View hoverClass='v2-pressed' hoverStayTime={80} className={'v2-chip' + (type === 'all' ? ' on' : '')} onClick={function () { setType('all'); }}>全部</View>
          <View hoverClass='v2-pressed' hoverStayTime={80} className={'v2-chip' + (type === 'craft' ? ' on' : '')} onClick={function () { setType('craft'); }}>制造</View>
          <View hoverClass='v2-pressed' hoverStayTime={80} className={'v2-chip' + (type === 'gather' ? ' on' : '')} onClick={function () { setType('gather'); }}>采集</View>
        </View>
        <View className='v2-rows' style={{ marginTop: '8rpx' }}>
          {typeRows.map(function (r, i) {
            const w = maxPer > 0 ? Math.max(6, Math.round((Math.max(0, r.calc.perEnergy) / maxPer) * 100)) : 0;
            return (
              <View className='v2-row' key={r.recipe.id} onClick={function () { openRecipe(r.recipe.id); }}>
                <View className='v2-bar' style={{ width: w + '%' }} />
                <Text className={'v2-no' + (i === 0 ? ' top' : '')}>{i + 1}</Text>
                <View className='v2-row-main'>
                  <View className='v2-flex' style={{ gap: '8rpx' }}>
                    <Text className='v2-row-nm'>{r.recipe.name}</Text>
                    <Text className={'v2-tag ' + gradeOf(r.recipe, state.serverId).cls}>{gradeOf(r.recipe, state.serverId).label}</Text>
                  </View>
                  <Text className='v2-row-ds'>{r.skill.name} · {fmtInt(r.calc.energy)} 精力 · 单次 {fmt(r.calc.profit, 2)} 金</Text>
                </View>
                <View className='v2-row-val'>
                  <Text className={'v2-row-v ' + (r.calc.perEnergy >= 0 ? 'v2-pos' : 'v2-neg')}>{fmt(r.calc.perEnergy, 2)}</Text>
                  <Text className='v2-row-u'>金 / 点精力</Text>
                </View>
              </View>
            );
          })}
          {!typeRows.length ? <View className='v2-empty'><View className='t'>暂无完整数据</View><View className='s'>去行情页补几个材料价格。</View></View> : null}
        </View>
        {showAll ? (
          <View className='v2-tiny' style={{ marginTop: '10rpx' }}>
            含不可做：可能来自高价挂单、低流动性或缺价回退，不能当作实际可成交收益。
          </View>
        ) : null}
      </Section>

      <Section title='哪个技艺更划算' sub='配方等权平均 · 含采集与制造' action='去技艺页' onAction={openSkills}>
        <View className='v2-card-pad' style={{ background: 'var(--card)', border: '1rpx solid var(--border)' }}>
          {skillStats.map(function (x, i) {
            const w = x.avg == null ? 0 : Math.max(4, Math.round((Math.max(0, x.avg) / maxSkillAvg) * 100));
            return (
              <View className='v2-row' key={x.skill.id} style={{ minHeight: '88rpx' }} onClick={openSkills}>
                <View className='v2-bar' style={{ width: w + '%', top: '10rpx', bottom: '10rpx' }} />
                <Text className={'v2-no' + (i === 0 ? ' top' : '')}>{i + 1}</Text>
                <View className='v2-row-main'>
                  <Text className='v2-row-nm'>{x.skill.name}</Text>
                  <Text className='v2-row-ds'>{x.count} 个{x.skill.type === 'gather' ? '采集点' : '配方'} · {x.top ? '最优 ' + x.top.recipe.name : '暂无完整数据'}</Text>
                </View>
                <View className='v2-row-val'>
                  <Text className={'v2-row-v ' + (x.avg > 0 ? 'v2-pos' : x.avg < 0 ? 'v2-neg' : '')}>{x.avg == null ? '—' : fmt(x.avg, 2)}</Text>
                  <Text className='v2-row-u'>平均金/精力</Text>
                </View>
              </View>
            );
          })}
        </View>
      </Section>

      <Section title='深度分析' sub='能不能做、做哪个、怎么分配'>
        <View className='v2-card-pad' style={{ background: 'linear-gradient(135deg, rgba(253,123,76,.18), rgba(179,107,255,.12))', border: '1rpx solid rgba(253,123,76,.32)' }} onClick={openAnalysis}>
          <View className='v2-flex'>
            <View style={{ flex: 1, minWidth: 0 }}>
              <View className='v2-sec-t' style={{ fontSize: '30rpx' }}>精力收益分析</View>
              <View className='v2-tiny' style={{ marginTop: '6rpx' }}>可做/谨慎/不可做 · 满精力组合 · 双制品对比 · 散点</View>
            </View>
            <Text style={{ fontSize: '36rpx', color: '#fd7b4c' }}>›</Text>
          </View>
        </View>
        <View className='v2-stats' style={{ gridTemplateColumns: IS_WEAPP ? '1fr 1fr 1fr' : '1fr', gap: '12rpx', marginTop: '12rpx' }}>
          {IS_WEAPP ? (
            <View className='v2-stat' style={{ padding: '18rpx 16rpx' }} onClick={function () { openPage('/pages/trends/index'); }}>
              <View className='v2-stat-k'>物价走势</View>
              <View style={{ fontSize: '30rpx', fontWeight: 800, marginTop: '8rpx' }}>看涨跌</View>
              <View className='v2-stat-m'>历史节点</View>
            </View>
          ) : null}
          {IS_WEAPP ? (
            <View className='v2-stat' style={{ padding: '18rpx 16rpx' }} onClick={function () { openPage('/pages/server-trends/index'); }}>
              <View className='v2-stat-k'>区服趋势</View>
              <View style={{ fontSize: '30rpx', fontWeight: 800, marginTop: '8rpx' }}>比 17 服</View>
              <View className='v2-stat-m'>净广度</View>
            </View>
          ) : null}
          <View className='v2-stat' style={{ padding: '18rpx 16rpx' }} onClick={function () { openPage('/pages/breakthrough/index'); }}>
            <View className='v2-stat-k'>突破升级</View>
            <View style={{ fontSize: '30rpx', fontWeight: 800, marginTop: '8rpx' }}>1→50</View>
            <View className='v2-stat-m'>8 技艺路线</View>
          </View>
        </View>
      </Section>

      {IS_WEAPP && bestStone ? (
        <Section title='五行石' action='去合成' onAction={function () { Taro.switchTab({ url: '/pages/stones/index' }); }}>
          <View className='v2-card-pad' style={{ background: 'var(--card)', border: '1rpx solid var(--border)' }} onClick={function () { Taro.switchTab({ url: '/pages/stones/index' }); }}>
            <View className='v2-flex'>
              <View style={{ flex: 1, minWidth: 0 }}>
                <View className='v2-row-nm'>合到 {bestStone.target} 级最赚</View>
                <View className='v2-row-ds'>单颗 {fmt(bestStone.perEnergyTarget, 2)} 金/精力 · {be7 && be7.breakEven.p != null ? '七级爆率线 ' + fmtPct(be7.breakEven.p, 1) : '暂无爆率线'}</View>
              </View>
              <Text style={{ fontSize: '32rpx', color: '#fd7b4c' }}>›</Text>
            </View>
          </View>
        </Section>
      ) : null}

      <Section title='本服行情准备好了吗' sub={'行情决定收益 · ' + sourceText}>
        <View className='v2-row' style={{ minHeight: '80rpx' }} onClick={openPrices}>
          <View className='v2-row-main'>
            <Text className='v2-row-nm'>{stats.missing ? '缺价 ' + stats.missing + ' 项' : '本服报价已覆盖'}</Text>
            <Text className='v2-row-ds'>已校准 {stats.user} · 本服报价 {stats.quote} · 示例 {stats.seed}</Text>
          </View>
          <View hoverClass='v2-pressed' hoverStayTime={80} className='v2-btn sm primary'>去补价</View>
        </View>
      </Section>

      <DataNote extra={'5 Tab · 今日/技艺/行情/五行石/我的'} />
    </View>
  );
}

export default withTheme(Overview);
