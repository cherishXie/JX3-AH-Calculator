import { useMemo, useState } from 'react';
import { View, Text, ScrollView, Input, Picker } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import TopBar from '../../components/TopBar';
import SkillIcon from '../../components/SkillIcon';
import Empty from '../../components/Empty';
import PriceInput from '../../components/PriceInput';
import Toggle from '../../components/Toggle';
import DataNote from '../../components/DataNote';
import { useStore } from '../../store';
import { DATA, priceOf, rowsOf, filterRows, sortRows, avg, findItem } from '../../shared/engine';
import { fmt, fmtInt, fmtSigned } from '../../shared/format';

export default function Skills() {
  const [state, actions] = useStore();
  const storedSkill = Taro.getStorageSync('activeSkill');
  const [activeSkill, setActiveSkill] = useState(DATA.skills.some(function (s) { return s.id === storedSkill; }) ? storedSkill : 'shennong');
  const [q, setQ] = useState('');
  const [tier, setTier] = useState('');
  const [onlyProfit, setOnlyProfit] = useState(false);

  useDidShow(function () {
    const s = Taro.getStorageSync('activeSkill');
    if (s && DATA.skills.some(function (x) { return x.id === s; })) {
      setActiveSkill(s);
      Taro.removeStorageSync('activeSkill');
    }
  });

  const sk = DATA.skills.find(function (s) { return s.id === activeSkill; }) || DATA.skills[0];
  const allRows = useMemo(function () {
    return rowsOf(state, { serverId: state.serverId, basis: state.settings.basis });
  }, [state]);
  const rows = allRows.filter(function (r) { return r.recipe.skillId === sk.id; });
  const filtered = sortRows(filterRows(rows, {
    q: q, tier: tier, onlyProfit: onlyProfit
  }), 'perEnergy', 'desc');
  const valid = rows.filter(function (r) { return !r.calc.missing; });
  const a = avg(valid.map(function (r) { return r.calc.perEnergy; }));
  const best = valid.slice().sort(function (x, y) { return y.calc.perEnergy - x.calc.perEnergy; })[0];
  const missingRows = rows.filter(function (r) { return r.calc.missing; }).length;

  const tierNames = ['全部品阶'].concat(DATA.tiers.map(function (t) { return t.name; }));
  const tierIdx = tier ? Number(tier) : 0;

  const materialIds = [];
  rows.forEach(function (r) {
    r.recipe.materials.forEach(function (m) { if (materialIds.indexOf(m.item) === -1) materialIds.push(m.item); });
    if (sk.type === 'gather') r.recipe.outputs.forEach(function (o) { if (materialIds.indexOf(o.item) === -1) materialIds.push(o.item); });
  });
  const materials = materialIds.map(function (id) { return findItem(state, id); }).filter(Boolean);

  function openRecipe(id) {
    Taro.navigateTo({ url: '/pages/recipe/index?id=' + id });
  }
  function savePrice(itemId, val) {
    if (!actions.setPrice(itemId, val)) {
      Taro.showToast({ title: '价格需为非负数字', icon: 'none' });
    } else {
      Taro.showToast({ title: '已更新价格', icon: 'none' });
    }
  }

  return (
    <View className='page'>
      <TopBar title='生活技艺' subtitle='采集 3 · 制造 5 · 苍生铸世 50 级' />

      <ScrollView scrollX className='skill-scroll' scrollIntoView={'tab-' + sk.id}>
        <View className='skill-tabs-inner'>
          {DATA.skills.map(function (s) {
            return (
              <View key={s.id} id={'tab-' + s.id} className={'skill-tab' + (s.id === sk.id ? ' active' : '')}
                onClick={function () { setActiveSkill(s.id); setQ(''); setTier(''); }}>
                <View className='type-dot' style={{ background: s.color }} />
                <Text>{s.name}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <View className='row'>
              <SkillIcon skill={sk} />
              <View>
                <Text className='card-title'>{sk.name}</Text>
                <Text className={'badge ' + (sk.type === 'gather' ? 'badge-positive' : 'badge-info')} style={{ marginLeft: '8rpx' }}>
                  {sk.type === 'gather' ? '采集类' : '制造类'}
                </Text>
              </View>
            </View>
            <Text className='card-sub'>{sk.desc}</Text>
          </View>
          <View className='card-tool'>
            <View className='btn btn-primary btn-sm' onClick={function () {
              Taro.navigateTo({ url: '/pages/recipe/index?new=1&skill=' + sk.id });
            }}>＋ 新增</View>
          </View>
        </View>
        <View className='card-body'>
          <View className='row-wrap' style={{ justifyContent: 'space-between' }}>
            <View className='kpi' style={{ width: '31.5%', marginBottom: '10rpx' }}>
              <Text className='kpi-label'>配方</Text>
              <Text className='kpi-value' style={{ fontSize: '36rpx', lineHeight: '46rpx' }}>{rows.length}</Text>
            </View>
            <View className='kpi' style={{ width: '31.5%', marginBottom: '10rpx' }}>
              <Text className='kpi-label'>平均收益</Text>
              <Text className={'kpi-value ' + (a > 0 ? 'pos' : a < 0 ? 'neg' : '')} style={{ fontSize: '36rpx', lineHeight: '46rpx' }}>{a == null ? '—' : fmt(a, 2)}</Text>
            </View>
            <View className='kpi' style={{ width: '31.5%', marginBottom: '10rpx' }}>
              <Text className='kpi-label'>最优</Text>
              <Text className='kpi-value' style={{ fontSize: '30rpx', lineHeight: '46rpx' }}>{best ? fmt(best.calc.perEnergy, 2) : '—'}</Text>
            </View>
          </View>

          <View className='filter-row mt'>
            <Input className='input input-sm' value={q} placeholder='搜索配方 / 产物' placeholderStyle='color:#475569'
              onInput={function (e) { setQ(e.detail.value); }} />
            <Picker mode='selector' range={tierNames} value={tierIdx}
              onChange={function (e) { const i = Number(e.detail.value); setTier(i === 0 ? '' : String(i)); }}>
              <View className='picker picker-sm'><Text>{tierIdx === 0 ? '全部品阶' : DATA.tiers[tierIdx - 1].name}</Text><Text className='arrow'>⌄</Text></View>
            </Picker>
          </View>
          <View className='row-between'>
            <Toggle label='仅看盈利' value={onlyProfit} onChange={setOnlyProfit} />
            <Text className='tiny dim'>{filtered.length} 条结果</Text>
          </View>
          {missingRows ? <View className='notice mt'><Text className='ic'>!</Text><Text>{missingRows} 个配方有未定价材料或产物，收益会被低估。</Text></View> : null}
        </View>

        <View style={{ padding: '0 24rpx 8rpx' }}>
          {filtered.length ? filtered.map(function (r) {
            const c = r.calc;
            const cls = c.missing ? 'dim' : c.profit >= 0 ? 'pos' : 'neg';
            return (
              <View className='list-row' key={r.recipe.id} onClick={function () { openRecipe(r.recipe.id); }}>
                <View className='main'>
                  <View className='row'>
                    <Text className='nm'>{r.recipe.name}</Text>
                    {r.recipe.verified ? <Text className='badge badge-positive' style={{ marginLeft: '8rpx' }}>已核验</Text> : null}
                    {r.recipe.custom ? <Text className='badge badge-custom' style={{ marginLeft: '8rpx' }}>自定义</Text> : null}
                  </View>
                  <Text className='ds'>{r.outputNames} · 成本 {fmt(c.totalCost, 2)} · 精力 {fmtInt(c.energy)}</Text>
                  <View className='row' style={{ marginTop: '4rpx' }}>
                    <Text className={'badge ' + (c.missing ? 'badge-warning' : c.profit < 0 ? 'badge-danger' : 'badge-neutral')}>
                      {c.missing ? '缺价' : c.profit < 0 ? '亏损' : '正常'}
                    </Text>
                    <Text className='tiny dim' style={{ marginLeft: '8rpx' }}>{r.tier.name}</Text>
                  </View>
                </View>
                <View className='val'>
                  <Text className={'v ' + cls}>{fmtSigned(c.profit, 2)}</Text>
                  <Text className='u'> 金</Text>
                  <View className='tiny dim' style={{ marginTop: '2rpx' }}>{c.missing ? '—' : fmt(c.perEnergy, 2)} 金/精力</View>
                </View>
                <Text className='chev'>›</Text>
              </View>
            );
          }) : <Empty title='没有匹配的配方' desc='换一个关键词、品阶，或新建自定义配方。' />}
        </View>
        <View className='card-foot'>成本 = 材料 + 手续费；精力收益 = 利润 ÷ 精力</View>
      </View>

      <View className='card'>
        <View className='card-head'>
          <View className='flex1'>
            <Text className='card-title'>本技艺材料行情</Text>
            <Text className='card-sub'>直接改价，本页收益即时重算 · {materials.length} 项</Text>
          </View>
        </View>
        <View className='card-body' style={{ paddingTop: '4rpx' }}>
          {materials.map(function (it) {
            const p = priceOf(state, it.id, state.serverId);
            return (
              <View className='price-line' key={it.id}>
                <View className='main'>
                  <Text className='nm'>{it.name}</Text>
                  <Text className='ds'>{it.kind === 'product' ? '成品' : '材料'} · {it.source}</Text>
                </View>
                <View style={{ textAlign: 'right' }}>
                  <PriceInput value={p.missing ? '' : p.v} onSave={function (v) { savePrice(it.id, v); }} />
                  <Text className={'price-state ' + (p.missing ? 'missing' : p.user ? 'user' : '')}>
                    {p.missing ? '缺价' : p.user ? '已校准' : '示例'}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
        <View className='card-foot' onClick={function () { Taro.switchTab({ url: '/pages/prices/index' }); }}>打开完整价格库 ›</View>
      </View>

      <DataNote />
    </View>
  );
}
