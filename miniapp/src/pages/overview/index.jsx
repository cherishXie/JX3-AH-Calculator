import withTheme from '../../components/withTheme';
import { useMemo, useState } from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import ServerBar from '../../components/ServerBar';
import DataNote from '../../components/DataNote';
import { syncRemotePrices } from '../../shared/remotePrices';
import { isCloudConfigured } from '../../shared/cloudConfig';
import { useStore, getState } from '../../store';
import { DATA, rowsOf, statsOf, isMarketFresh } from '../../shared/engine';
import { stoneSummary } from '../../shared/stones';
import { fmt, fmtInt } from '../../shared/format';

const IS_WEAPP = process.env.TARO_ENV === 'weapp';
const PAGE_SIZE = 12;

function Overview() {
  const [state, actions] = useStore();

  useDidShow(function () {
    if (isCloudConfigured()) syncRemotePrices(actions, true, getState());
  });

  const rows = useMemo(function () {
    return rowsOf(state, { serverId: state.serverId, basis: state.settings.basis });
  }, [state]);

  const stats = statsOf(state, state.serverId);
  const valid = useMemo(function () {
    return rows
      .filter(function (r) { return !r.calc.missing && r.calc.perEnergy != null; })
      .sort(function (a, b) { return b.calc.perEnergy - a.calc.perEnergy; });
  }, [rows]);

  const defaultSkill = (valid[0] && valid[0].skill.id) || (DATA.skills[0] && DATA.skills[0].id);
  const [skillId, setSkillId] = useState(defaultSkill);
  const currentSkill = DATA.skills.find(function (s) { return s.id === skillId; }) || DATA.skills[0];
  const skillRows = valid.filter(function (r) { return r.skill.id === skillId; });
  const visible = skillRows.slice(0, PAGE_SIZE);
  const totalBySkill = {};
  valid.forEach(function (r) { totalBySkill[r.skill.id] = (totalBySkill[r.skill.id] || 0) + 1; });

  const marketFresh = isMarketFresh(state);
  const sourceText = marketFresh ? '云端报价' : (stats.quote ? '本服报价' : '示例价');

  const stone = IS_WEAPP ? stoneSummary(state) : null;
  const bestStone = stone ? stone.bestOverall : null;
  const be7 = stone ? stone.be7 : null;

  function openRecipe(id) {
    Taro.navigateTo({ url: '/pages/recipe/index?id=' + id });
  }

  function openPrices() {
    Taro.navigateTo({ url: '/pages/prices/index' });
  }

  function openFullRank() {
    Taro.navigateTo({ url: '/pages/rank/index?skill=' + skillId });
  }

  return (
    <View className='page has-fab'>
      <ServerBar />

      <View className='today-head'>
        <Text className='t'>各技艺收益排行</Text>
        <Text className='s'>选一个技艺，只看本技艺的配方；{stats.total} 项参与计算 · {sourceText}</Text>
      </View>

      <View className='today-price' onClick={openPrices}>
        <Text>{stats.missing ? '缺价 ' + stats.missing + ' 项，收益会偏低' : '价格已更新 · 本服有报价 ' + (stats.market + stats.quote) + ' 项'}</Text>
        <Text className='act'>{stats.missing ? '去补价 ›' : '校准 ›'}</Text>
      </View>

      <ScrollView scrollX scrollWithAnimation scrollIntoView={'skill-' + skillId} className='chips-scroll'>
        <View className='chips-inner'>
          {DATA.skills.map(function (s) {
            return (
              <View id={'skill-' + s.id} key={s.id} className={'chip' + (skillId === s.id ? ' active' : '')}
                onClick={function () { setSkillId(s.id); }}>
                {s.name}
              </View>
            );
          })}
        </View>
      </ScrollView>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>{currentSkill.name} · 收益排行</Text>
            <Text className='card-sub'>{totalBySkill[skillId] || 0} 个可算配方 · 按每点精力收益排序</Text>
          </View>
          <Text className='small dim' onClick={openFullRank}>完整 ›</Text>
        </View>

        <View className='card-body' style={{ paddingTop: '6rpx' }}>
          {visible.length ? visible.map(function (r, i) {
            return (
              <View className='today-rank-row' key={r.recipe.id} onClick={function () { openRecipe(r.recipe.id); }}>
                <View className={'rank' + (i === 0 ? ' top' : '')}>{i + 1}</View>
                <View className='main'>
                  <View className='row'>
                    <Text className='nm'>{r.recipe.name}</Text>
                    {r.recipe.kind === 'gather' ? <Text className='badge badge-neutral' style={{ marginLeft: '8rpx' }}>采集</Text> : null}
                  </View>
                  <Text className='ds'>{r.tier.name} · {fmtInt(r.calc.energy)} 精力 · 单次 {fmt(r.calc.profit, 2)} 金</Text>
                </View>
                <View className='val'>
                  <Text className={'v ' + (r.calc.perEnergy >= 0 ? 'pos' : 'neg')}>{fmt(r.calc.perEnergy, 2)}</Text>
                  <Text className='u'>金 / 点精力</Text>
                </View>
              </View>
            );
          }) : (
            <View className='today-empty'>
              <Text className='t'>这个技艺暂无可算配方</Text>
              <Text className='s'>可能是材料缺价，或本技艺没有可制造配方。去补价后再看。</Text>
              <View className='btn btn-ghost btn-sm' onClick={openPrices}>去补价</View>
            </View>
          )}
        </View>

        {skillRows.length > visible.length ? (
          <View className='card-foot' onClick={openFullRank}>还有 {skillRows.length - visible.length} 个 · 看完整排行 ›</View>
        ) : null}
      </View>

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

      <View className={'market-fab' + (process.env.TARO_ENV === 'h5' ? ' h5' : '')} onClick={openPrices}>
        <View className='main'>
          <Text className='label'>全部物品行情</Text>
          <Text className='count'>{stats.total} 项 · 改价 / 搜索 / 分类</Text>
        </View>
        <Text className='arrow'>›</Text>
      </View>
    </View>
  );
}

export default withTheme(Overview);
