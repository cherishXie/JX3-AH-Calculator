import withTheme from '../../components/withTheme';
import { useMemo, useState } from 'react';
import { View, Text, Input, ScrollView } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import ServerBar from '../../components/ServerBar';
import Seg from '../../components/Seg';
import Toggle from '../../components/Toggle';
import Empty from '../../components/Empty';
import DataNote from '../../components/DataNote';
import { useStore } from '../../store';
import { DATA, rowsOf } from '../../shared/engine';
import { fmt, fmtInt } from '../../shared/format';

const PAGE_SIZE = 30;

function Rank() {
  const [state] = useStore();
  const router = useRouter();
  const [q, setQ] = useState('');
  const [type, setType] = useState('all');
  const [skillId, setSkillId] = useState((router.params && router.params.skill) || '');
  const [onlyComplete, setOnlyComplete] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [limit, setLimit] = useState(PAGE_SIZE);

  const rows = useMemo(function () {
    return rowsOf(state, { serverId: state.serverId, basis: state.settings.basis });
  }, [state]);

  const filtered = useMemo(function () {
    const keyword = q.trim().toLowerCase();
    const list = rows.filter(function (r) {
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
  }, [rows, q, type, skillId, onlyComplete]);

  const visible = filtered.slice(0, limit);
  const profitable = filtered.filter(function (r) { return !r.calc.missing && r.calc.profit > 0; }).length;
  const missing = filtered.filter(function (r) { return r.calc.missing; }).length;

  function changeType(next) {
    setType(next);
    setLimit(PAGE_SIZE);
  }

  function changeSkill(next) {
    setSkillId(next);
    setLimit(PAGE_SIZE);
  }

  function openRecipe(id) {
    Taro.navigateTo({ url: '/pages/recipe/index?id=' + id });
  }

  return (
    <View className='page'>
      <ServerBar />

      <View className='rank-search'>
        <Input
          className='input'
          value={q}
          placeholder='搜配方 / 产物'
          placeholderStyle='color:var(--muted-2)'
          onInput={function (e) { setQ(e.detail.value); setLimit(PAGE_SIZE); }}
        />
        <View className={'rank-filter' + (showFilter ? ' active' : '')} onClick={function () { setShowFilter(!showFilter); }}>筛</View>
      </View>

      {showFilter ? (
        <View className='card' style={{ paddingTop: '20rpx', paddingBottom: '12rpx' }}>
          <Seg value={type} options={[{ value: 'all', label: '全部' }, { value: 'craft', label: '制造' }, { value: 'gather', label: '采集' }]} onChange={changeType} />
          <View className='row-between' style={{ marginTop: '20rpx' }}>
            <Toggle label='只看有报价' value={onlyComplete} onChange={function (v) { setOnlyComplete(v); setLimit(PAGE_SIZE); }} />
            <Text className='small dim' onClick={function () { setQ(''); setType('all'); setSkillId(''); setOnlyComplete(false); setLimit(PAGE_SIZE); }}>重置</Text>
          </View>
        </View>
      ) : null}

      <ScrollView scrollX className='chips-scroll'>
        <View className='chips-inner'>
          <View className={'chip' + (!skillId ? ' active' : '')} onClick={function () { changeSkill(''); }}>全部</View>
          {DATA.skills.map(function (s) {
            return (
              <View key={s.id} className={'chip' + (skillId === s.id ? ' active' : '')} onClick={function () { changeSkill(s.id); }}>
                {s.name}
              </View>
            );
          })}
        </View>
      </ScrollView>

      <View className='rank-summary'>
        <Text>{filtered.length} 个配方 · {profitable} 个盈利</Text>
        <Text>{missing ? missing + ' 个待补价' : '按每点精力'}</Text>
      </View>

      {visible.length ? (
        <View className='rank-list'>
          {visible.map(function (r, i) {
            return (
              <View className='rank-row' key={r.recipe.id} onClick={function () { openRecipe(r.recipe.id); }}>
                <Text className={'no' + (i === 0 ? ' top' : '')}>{i + 1}</Text>
                <View className='main'>
                  <Text className='nm'>{r.recipe.name}</Text>
                  <Text className='ds'>{r.skill.name} · {r.tier.name} · {fmtInt(r.calc.energy)} 精力</Text>
                </View>
                <View className='val'>
                  {r.calc.missing ? (
                    <Text className='v missing'>待补价</Text>
                  ) : (
                    <Text className={'v ' + (r.calc.perEnergy >= 0 ? 'pos' : 'neg')}>{fmt(r.calc.perEnergy, 2)}</Text>
                  )}
                  <Text className='u'>金 / 点精力</Text>
                </View>
                <Text className='chev'>›</Text>
              </View>
            );
          })}
        </View>
      ) : (
        <Empty title='没有匹配的配方' desc='换一个关键词、技艺，或清空筛选。' />
      )}

      {filtered.length > visible.length ? (
        <View className='btn btn-ghost btn-block rank-more' onClick={function () { setLimit(limit + PAGE_SIZE); }}>
          加载更多 · {visible.length} / {filtered.length}
        </View>
      ) : null}

      <DataNote />
    </View>
  );
}

export default withTheme(Rank);
