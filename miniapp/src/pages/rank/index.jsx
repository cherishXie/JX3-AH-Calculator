import withTheme from '../../components/withTheme';
import { useMemo, useState } from 'react';
import { View, Text, Input } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import PageHeader from '../../components/PageHeader';
import Section from '../../components/Section';
import Seg from '../../components/Seg';
import Toggle from '../../components/Toggle';
import Empty from '../../components/Empty';
import DataNote from '../../components/DataNote';
import { useStore } from '../../store';
import { DATA, rowsOf } from '../../shared/engine';
import { gradeOf, isVisibleGrade } from '../../shared/landability';
import { fmt, fmtInt } from '../../shared/format';

const PAGE_SIZE = 30;

function Rank() {
  const [state] = useStore();
  const router = useRouter();
  const [q, setQ] = useState('');
  const [type, setType] = useState('all');
  const [skillId, setSkillId] = useState((router.params && router.params.skill) || '');
  const [onlyComplete, setOnlyComplete] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [limit, setLimit] = useState(PAGE_SIZE);

  const rows = useMemo(function () {
    return rowsOf(state, { serverId: state.serverId, basis: state.settings.basis });
  }, [state]);

  const filtered = useMemo(function () {
    const keyword = q.trim().toLowerCase();
    const list = rows.filter(function (r) {
      if (!showAll && !isVisibleGrade(gradeOf(r.recipe, state.serverId).grade)) return false;
      if (type !== 'all' && r.type !== type) return false;
      if (skillId && r.recipe.skillId !== skillId) return false;
      if (onlyComplete && r.calc.missing) return false;
      if (keyword && (r.recipe.name + ' ' + r.skill.name).toLowerCase().indexOf(keyword) === -1) return false;
      return true;
    });
    return list.sort(function (a, b) {
      if (a.calc.missing !== b.calc.missing) return a.calc.missing ? 1 : -1;
      return b.calc.perEnergy - a.calc.perEnergy;
    });
  }, [rows, q, type, skillId, onlyComplete, showAll, state.serverId]);

  const visible = filtered.slice(0, limit);
  const profitable = filtered.filter(function (r) { return !r.calc.missing && r.calc.profit > 0; }).length;
  const missing = filtered.filter(function (r) { return r.calc.missing; }).length;
  const maxPer = filtered.length ? Math.max.apply(null, filtered.map(function (r) { return Math.max(0, r.calc.perEnergy || 0); })) : 0;

  function openRecipe(id) {
    Taro.navigateTo({ url: '/pages/recipe/index?id=' + id });
  }

  return (
    <View className='v2-page'>
      <PageHeader />

      <View className='v2-hero'>
        <View className='v2-kicker'>全部配方 · 金/精力</View>
        <View className='v2-h1'>收益<Text style={{ color: '#fd7b4c' }}>排行</Text></View>
        <View className='v2-hero-sub'>{filtered.length} 个配方 · {profitable} 个盈利 · {missing} 个待补价</View>
      </View>

      <View className='v2-search' style={{ marginTop: '18rpx' }}>
        <Text className='v2-search-ic'>搜</Text>
        <Input
          className='v2-input'
          value={q}
          placeholder='配方 / 产物'
          placeholderStyle='color:var(--muted-3)'
          onInput={function (e) { setQ(e.detail.value); setLimit(PAGE_SIZE); }}
        />
      </View>

      <View className='v2-chip-row' style={{ marginTop: '14rpx' }}>
        <View hoverClass='v2-pressed' hoverStayTime={80} className={'v2-chip' + (!skillId ? ' on' : '')} onClick={function () { setSkillId(''); setLimit(PAGE_SIZE); }}>全部技艺</View>
        {DATA.skills.map(function (s) {
          return (
            <View key={s.id} className={'v2-chip' + (skillId === s.id ? ' on' : '')} onClick={function () { setSkillId(s.id); setLimit(PAGE_SIZE); }}>
              {s.name}
            </View>
          );
        })}
      </View>

      <View style={{ marginTop: '16rpx' }}>
        <Seg value={type} options={[{ value: 'all', label: '全部' }, { value: 'craft', label: '制造' }, { value: 'gather', label: '采集' }]} onChange={function (v) { setType(v); setLimit(PAGE_SIZE); }} />
      </View>
      <View style={{ marginTop: '14rpx' }}>
        <Toggle label='只看有报价（排除缺价）' value={onlyComplete} onChange={function (v) { setOnlyComplete(v); setLimit(PAGE_SIZE); }} />
      </View>

      <Section title='配方列表' sub={visible.length + ' / ' + filtered.length} right={<Text className='v2-more' onClick={function () { setQ(''); setType('all'); setSkillId(''); setOnlyComplete(false); setShowAll(false); setLimit(PAGE_SIZE); }}>重置</Text>}>
        <View className='v2-rows'>
          {visible.map(function (r, i) {
            const w = maxPer > 0 && r.calc.perEnergy > 0 ? Math.max(6, Math.round((r.calc.perEnergy / maxPer) * 100)) : 0;
            return (
              <View className='v2-row' key={r.recipe.id} onClick={function () { openRecipe(r.recipe.id); }}>
                {w ? <View className='v2-bar' style={{ width: w + '%' }} /> : null}
                <Text className={'v2-no' + (i === 0 ? ' top' : '')}>{i + 1}</Text>
                <View className='v2-row-main'>
                  <View className='v2-flex' style={{ gap: '8rpx' }}>
                    <Text className='v2-row-nm'>{r.recipe.name}</Text>
                    <Text className={'v2-tag ' + gradeOf(r.recipe, state.serverId).cls}>{gradeOf(r.recipe, state.serverId).label}</Text>
                  </View>
                  <Text className='v2-row-ds'>{r.skill.name} · {r.tier.name} · {fmtInt(r.calc.energy)} 精力 · 利润 {fmt(r.calc.profit, 0)}</Text>
                </View>
                <View className='v2-row-val'>
                  <Text className={'v2-row-v ' + (r.calc.missing ? 'v2-muted' : r.calc.perEnergy >= 0 ? 'v2-pos' : 'v2-neg')}>
                    {r.calc.missing ? '待补价' : fmt(r.calc.perEnergy, 2)}
                  </Text>
                  <Text className='v2-row-u'>金 / 点精力</Text>
                </View>
              </View>
            );
          })}
        </View>
        {!visible.length ? <Empty title='没有匹配的配方' desc='换个关键词或清空筛选。' /> : null}
        {filtered.length > visible.length ? (
          <View hoverClass='v2-pressed' hoverStayTime={80} className='v2-btn ghost block' style={{ marginTop: '16rpx' }} onClick={function () { setLimit(limit + PAGE_SIZE); }}>
            加载更多 · {visible.length} / {filtered.length}
          </View>
        ) : null}
      </Section>

      <DataNote />
    </View>
  );
}

export default withTheme(Rank);
