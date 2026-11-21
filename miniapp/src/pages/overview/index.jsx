import withTheme from '../../components/withTheme';
import { useMemo } from 'react';
import { View, Text } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import ServerBar from '../../components/ServerBar';
import DataNote from '../../components/DataNote';
import { syncRemotePrices } from '../../shared/remotePrices';
import { isCloudConfigured } from '../../shared/cloudConfig';
import { useStore, getState } from '../../store';
import { rowsOf, statsOf, simulate, isMarketFresh } from '../../shared/engine';
import { stoneSummary } from '../../shared/stones';
import { fmt, fmtInt, fmtWan } from '../../shared/format';

const IS_WEAPP = process.env.TARO_ENV === 'weapp';

function Overview() {
  const [state, actions] = useStore();

  useDidShow(function () {
    if (isCloudConfigured()) syncRemotePrices(actions, true, getState());
  });

  const rows = useMemo(function () {
    return rowsOf(state, { serverId: state.serverId, basis: state.settings.basis });
  }, [state]);

  const stats = statsOf(state, state.serverId);
  const budget = state.settings.energyBudget;
  const valid = rows
    .filter(function (r) { return !r.calc.missing && r.calc.perEnergy != null; })
    .sort(function (a, b) { return b.calc.perEnergy - a.calc.perEnergy; });
  const best = valid[0] || null;
  const alternatives = valid.slice(1, 3);
  const sim = simulate(rows, budget);
  const planCount = best
    ? (sim.allocations[0] && sim.allocations[0].row.recipe.id === best.recipe.id
      ? sim.allocations[0].count
      : Math.floor(budget / (best.calc.energy || 1)))
    : 0;

  const marketFresh = isMarketFresh(state);
  const sourceText = marketFresh ? '云端报价' : (stats.quote ? '本服报价' : '示例价');
  const hasQuote = stats.market + stats.quote > 0;
  const stripOk = !stats.missing && hasQuote;
  const stripText = stats.missing
    ? '有 ' + stats.missing + ' 项没填价格，收益会偏低'
    : (hasQuote ? '价格已更新 · 本服有报价 ' + (stats.market + stats.quote) + ' 项' : '价格仍是示例价，收益仅供比较');

  const stone = IS_WEAPP ? stoneSummary(state) : null;
  const bestStone = stone ? stone.bestOverall : null;
  const be7 = stone ? stone.be7 : null;

  function openRecipe(id) {
    Taro.navigateTo({ url: '/pages/recipe/index?id=' + id });
  }

  function openPrices() {
    Taro.switchTab({ url: '/pages/prices/index' });
  }

  return (
    <View className='page'>
      <ServerBar />

      {best ? (
        <View className='hero-card'>
          <View className='hero-top'>
            <Text className='hero-tag'>今天最赚</Text>
            <Text className='hero-source'>{sourceText} · 已扣税</Text>
          </View>
          <Text className='hero-name'>{best.recipe.name}</Text>
          <Text className='hero-meta'>{best.skill.name} · {best.tier.name} · 每次 {fmtInt(best.calc.energy)} 精力</Text>
          <View className='hero-number'>
            <Text className='n'>{fmt(best.calc.perEnergy, 2)}</Text>
            <Text className='u'>金 / 点精力</Text>
          </View>
          <View className='plan-grid'>
            <View className='plan-cell'>
              <Text className='k'>{fmtInt(budget)} 精力</Text>
              <Text className='v'>可做 {planCount} 次</Text>
            </View>
            <View className='plan-cell'>
              <Text className='k'>预计收益</Text>
              <Text className='v pos'>+{fmtWan(sim.profit, 2)}</Text>
            </View>
          </View>
          <View className='btn-primary-lg' onClick={function () { openRecipe(best.recipe.id); }}>查看做法</View>
        </View>
      ) : (
        <View className='card'>
          <View className='card-head'><View className='flex1'><Text className='card-title'>先填 3 个价格</Text><Text className='card-sub'>有了本服价格，才能算出今天做什么最赚</Text></View></View>
          <View className='card-body'>
            <View className='btn-primary-lg' onClick={openPrices}>开始填价</View>
          </View>
        </View>
      )}

      <View className={'price-strip' + (stripOk ? ' ok' : '')}>
        <Text className='txt'>{stripText}</Text>
        <View className='btn btn-sm btn-ghost' onClick={openPrices}>{stats.missing ? '去补价' : '校准'}</View>
      </View>

      {alternatives.length ? (
        <View className='card'>
          <View className='card-head'>
            <View className='flex1'>
              <Text className='card-title'>还有 {alternatives.length} 个也不差</Text>
              <Text className='card-sub'>按每点精力收益排序</Text>
            </View>
            <Text className='small dim' onClick={function () { Taro.navigateTo({ url: '/pages/analysis/index' }); }}>全部 ›</Text>
          </View>
          <View className='card-body' style={{ paddingTop: '6rpx' }}>
            {alternatives.map(function (r, i) {
              return (
                <View className='alt-row' key={r.recipe.id} onClick={function () { openRecipe(r.recipe.id); }}>
                  <View className='rank'>{i + 2}</View>
                  <View className='main'>
                    <Text className='nm'>{r.recipe.name}</Text>
                    <Text className='ds'>{r.skill.name} · {r.tier.name} · {fmtInt(r.calc.energy)} 精力</Text>
                  </View>
                  <View className='val'>
                    <Text className='v'>{fmt(r.calc.perEnergy, 2)}</Text>
                    <Text className='u'>金 / 点精力</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      ) : null}

      {IS_WEAPP && bestStone ? (
        <View className='card stone-quick' onClick={function () { Taro.switchTab({ url: '/pages/stones/index' }); }}>
          <View className='icon'>石</View>
          <View className='main'>
            <Text className='t'>五行石合到 <Text className='pos'>{bestStone.target} 级</Text> 最赚</Text>
            <Text className='s'>{fmt(bestStone.perEnergyTarget, 2)} 金/点精力 · {be7 && be7.breakEven.p != null ? '七级爆率线 ' + (be7.breakEven.p * 100).toFixed(1) + '%' : '暂无盈亏线'}</Text>
          </View>
          <Text className='chev'>›</Text>
        </View>
      ) : null}

      <DataNote />
    </View>
  );
}

export default withTheme(Overview);
