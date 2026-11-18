import { useMemo, useState } from 'react';
import { View, Text, Input, Picker } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import TopBar from '../../components/TopBar';
import Kpi from '../../components/Kpi';
import BarList from '../../components/BarList';
import Seg from '../../components/Seg';
import Toggle from '../../components/Toggle';
import Empty from '../../components/Empty';
import DataNote from '../../components/DataNote';
import { useStore, getState } from '../../store';
import { DATA, rowsOf, filterRows, sortRows, median, simulate } from '../../shared/engine';
import { fmt, fmtInt, fmtPct, fmtSigned } from '../../shared/format';

export default function Analysis() {
  const [state, actions] = useStore();
  const [type, setType] = useState('all');
  const [skillId, setSkillId] = useState('');
  const [tier, setTier] = useState('');
  const [complete, setComplete] = useState(true);
  const [aId, setAId] = useState('');
  const [bId, setBId] = useState('');
  const [budget, setBudget] = useState(String(state.settings.energyBudget));

  useDidShow(function () {
    setBudget(String(getState().settings.energyBudget));
  });

  const rows = useMemo(function () {
    return rowsOf(state, { serverId: state.serverId, basis: state.settings.basis });
  }, [state]);

  const names = ['全部技艺'].concat(DATA.skills.map(function (s) { return s.name; }));
  const skillIdx = skillId ? DATA.skills.findIndex(function (s) { return s.id === skillId; }) + 1 : 0;
  const tierNames = ['全部品阶'].concat(DATA.tiers.map(function (t) { return t.name; }));
  const tierIdx = tier ? Number(tier) : 0;

  const filtered = sortRows(filterRows(rows, {
    type: type, skillId: skillId, tier: tier, complete: complete
  }), 'perEnergy', 'desc');
  const valid = rows.filter(function (r) { return !r.calc.missing; });
  const best = filtered.filter(function (r) { return !r.calc.missing; })[0];
  const med = median(valid.map(function (r) { return r.calc.perEnergy; }));
  const negatives = filtered.filter(function (r) { return !r.calc.missing && r.calc.profit < 0; }).length;
  const sim = simulate(filtered, state.settings.energyBudget);
  const chartRows = filtered.filter(function (r) { return !r.calc.missing; }).slice(0, 12).map(function (r, i) {
    return { id: r.recipe.id, label: r.recipe.name, meta: (i + 1) + ' · ' + r.skill.name, value: r.calc.perEnergy, type: r.type };
  });

  const pool = filtered.filter(function (r) { return !r.calc.missing; });
  const a = pool.find(function (r) { return r.recipe.id === aId; }) || pool[0];
  const b = pool.find(function (r) { return r.recipe.id === bId && r !== a; }) || pool.find(function (r) { return r !== a; }) || pool[0];
  const poolNames = pool.map(function (r) { return r.recipe.name; });
  const aIdx = a ? pool.indexOf(a) : 0;
  const bIdx = b ? pool.indexOf(b) : 0;

  function saveBudget() {
    const n = Number(budget);
    if (!Number.isFinite(n) || n < 0) {
      Taro.showToast({ title: '预算需为非负数字', icon: 'none' });
      setBudget(String(state.settings.energyBudget));
      return;
    }
    actions.setSetting('energyBudget', Math.round(n));
    Taro.showToast({ title: '预算已更新', icon: 'none' });
  }

  const dims = a && b ? [
    { k: '总成本', av: a.calc.totalCost, bv: b.calc.totalCost, low: true, fmt: 2 },
    { k: '产值', av: a.calc.outputValue, bv: b.calc.outputValue, fmt: 2 },
    { k: '单次利润', av: a.calc.profit, bv: b.calc.profit, fmt: 2 },
    { k: '精力', av: a.calc.energy, bv: b.calc.energy, fmt: 0 },
    { k: '精力收益', av: a.calc.perEnergy, bv: b.calc.perEnergy, fmt: 2 },
    { k: '毛利率', av: a.calc.margin, bv: b.calc.margin, pct: true },
    { k: '满预算次数', av: Math.floor(state.settings.energyBudget / (a.calc.energy || 1)), bv: Math.floor(state.settings.energyBudget / (b.calc.energy || 1)), fmt: 0 }
  ] : [];

  return (
    <View className='page'>
      <TopBar title='精力收益分析' subtitle='比较采集与制造、成本与收益、单次与满精力产出' />

      <View className='kpi-grid'>
        <Kpi label='最高精力收益' value={best ? fmt(best.calc.perEnergy, 2) : '—'} unit='金/精力' meta={best ? best.recipe.name : '当前筛选无数据'} tone='pos' />
        <Kpi label='全站中位' value={med == null ? '—' : fmt(med, 2)} unit='金/精力' meta='判断是否值得做的基准' />
        <Kpi label='亏损配方' value={String(negatives)} unit={'/ ' + filtered.length + ' 项'} meta='利润为负，建议观望或改价' tone={negatives ? 'neg' : ''} />
        <Kpi label='满精力预估' value={fmt(sim.profit, 2)} unit='金' meta={'预算 ' + fmtInt(state.settings.energyBudget)} tone='pos' />
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>精力收益排行</Text>
            <Text className='card-sub'>Top 12 · 点击查看配方</Text>
          </View>
        </View>
        <View className='card-body'>
          <View className='mb'><Seg value={type} options={[{ value: 'all', label: '全部' }, { value: 'craft', label: '制造' }, { value: 'gather', label: '采集' }]} onChange={setType} /></View>
          <View className='filter-row'>
            <Picker mode='selector' range={names} value={skillIdx}
              onChange={function (e) { const i = Number(e.detail.value); setSkillId(i ? DATA.skills[i - 1].id : ''); }}>
              <View className='picker picker-sm'><Text>{skillIdx ? DATA.skills[skillIdx - 1].name : '全部技艺'}</Text><Text className='arrow'>⌄</Text></View>
            </Picker>
            <Picker mode='selector' range={tierNames} value={tierIdx}
              onChange={function (e) { const i = Number(e.detail.value); setTier(i === 0 ? '' : String(i)); }}>
              <View className='picker picker-sm'><Text>{tierIdx ? DATA.tiers[tierIdx - 1].name : '全部品阶'}</Text><Text className='arrow'>⌄</Text></View>
            </Picker>
          </View>
          <View className='row-between mb'>
            <Toggle label='仅数据完整' value={complete} onChange={setComplete} />
            <Text className='tiny dim'>{filtered.length} 项</Text>
          </View>
          <BarList rows={chartRows} limit={12} onPick={function (id) { Taro.navigateTo({ url: '/pages/recipe/index?id=' + id }); }} />
          <Text className='tiny dim mt'>虚线基准：全站中位 {med == null ? '—' : fmt(med, 2)} 金/精力</Text>
        </View>
        <View className='card-foot'>数字为「利润 ÷ 精力」；不含交易税与暴击产出</View>
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>两个制品，做哪个？</Text>
            <Text className='card-sub'>同口径对比成本、产值、精力与满预算产出</Text>
          </View>
        </View>
        <View className='card-body'>
          {a && b ? (
            <View>
              <View className='form-field'>
                <Text className='form-label'>制品 A</Text>
                <Picker mode='selector' range={poolNames} value={aIdx} onChange={function (e) { setAId(pool[Number(e.detail.value)].recipe.id); }}>
                  <View className='picker'><Text>{a.recipe.name} · {a.skill.name}</Text><Text className='arrow'>⌄</Text></View>
                </Picker>
              </View>
              <View className='form-field'>
                <Text className='form-label'>制品 B</Text>
                <Picker mode='selector' range={poolNames} value={bIdx} onChange={function (e) { setBId(pool[Number(e.detail.value)].recipe.id); }}>
                  <View className='picker'><Text>{b.recipe.name} · {b.skill.name}</Text><Text className='arrow'>⌄</Text></View>
                </Picker>
              </View>
              <View className='compare-row head'>
                <Text className='k'>维度</Text><Text className='a'>{a.recipe.name}</Text><Text className='b'>{b.recipe.name}</Text><Text className='win'>优势</Text>
              </View>
              {dims.map(function (d) {
                let win = '';
                if (d.low ? d.av < d.bv : d.av > d.bv) win = 'A';
                else if (d.low ? d.bv < d.av : d.bv > d.av) win = 'B';
                function show(v) { return v == null ? '—' : d.pct ? fmtPct(v, 0) : fmt(v, d.fmt); }
                return (
                  <View className='compare-row' key={d.k}>
                    <Text className='k'>{d.k}</Text>
                    <Text className={'a ' + (win === 'A' ? 'pos strong' : '')}>{show(d.av)}</Text>
                    <Text className={'b ' + (win === 'B' ? 'pos strong' : '')}>{show(d.bv)}</Text>
                    <Text className='win'>{win ? <Text className={'badge ' + (win === 'A' ? 'badge-info' : 'badge-custom')}>{win}</Text> : '—'}</Text>
                  </View>
                );
              })}
              <Text className='tiny dim mt'>精力越多不一定越好；请结合「精力收益」和可做次数判断。</Text>
            </View>
          ) : <Empty title='暂无可对比配方' desc='调整筛选或补齐价格。' />}
        </View>
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>满精力怎么分配？</Text>
            <Text className='card-sub'>按收益/精力从高到低贪心分配</Text>
          </View>
        </View>
        <View className='card-body'>
          <View className='row'>
            <Text className='form-label' style={{ marginBottom: 0, marginRight: '10rpx' }}>精力预算</Text>
            <Input className='input input-sm' style={{ flex: 1 }} type='number' value={budget}
              onInput={function (e) { setBudget(e.detail.value); }} onBlur={saveBudget} onConfirm={saveBudget} />
            <Text className='tiny dim' style={{ marginLeft: '8rpx' }}>点</Text>
          </View>
          <View className='divider' />
          <View className='kv'><Text className='k'>预计总收益</Text><Text className='v pos'>+{fmt(sim.profit, 2)} 金</Text></View>
          <View className='kv'><Text className='k'>精力用尽</Text><Text className='v'>{fmtInt(sim.used)} / {fmtInt(sim.budget)}</Text></View>
          <View className='kv'><Text className='k'>剩余精力</Text><Text className='v'>{fmtInt(sim.remaining)}</Text></View>
          {sim.allocations.slice(0, 5).map(function (x, i) {
            return (
              <View className='list-row' key={x.row.recipe.id}>
                <View className='rank'>{i + 1}</View>
                <View className='main'>
                  <Text className='nm'>{x.row.recipe.name}</Text>
                  <Text className='ds'>{x.row.skill.name} · {x.count} 次 × {fmtInt(x.row.calc.energy)} 精力</Text>
                </View>
                <View className='val'><Text className='v pos'>+{fmt(x.profit, 2)}</Text><Text className='u'> 金</Text></View>
              </View>
            );
          })}
        </View>
        <View className='card-foot'>模拟不计交易税、暴击额外产出与市场深度</View>
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>完整收益榜</Text>
            <Text className='card-sub'>{filtered.length} 项 · 点击查看配方详情</Text>
          </View>
        </View>
        <View className='card-body' style={{ paddingTop: '4rpx' }}>
          {filtered.length ? filtered.map(function (r, i) {
            return (
              <View className='list-row' key={r.recipe.id} onClick={function () { Taro.navigateTo({ url: '/pages/recipe/index?id=' + r.recipe.id }); }}>
                <View className={'rank' + (i === 0 ? ' top' : '')}>{i + 1}</View>
                <View className='main'>
                  <Text className='nm'>{r.recipe.name}</Text>
                  <Text className='ds'>{r.skill.name} · 成本 {fmt(r.calc.totalCost, 2)} · 利润 {fmtSigned(r.calc.profit, 2)}</Text>
                </View>
                <View className='val'>
                  <Text className={'v ' + (r.calc.perEnergy >= 0 ? 'pos' : 'neg')}>{r.calc.missing ? '—' : fmt(r.calc.perEnergy, 2)}</Text>
                  <Text className='u'> 金/精力</Text>
                </View>
              </View>
            );
          }) : <Empty title='没有匹配的配方' desc='清空筛选条件再试。' />}
        </View>
      </View>

      <DataNote />
    </View>
  );
}
