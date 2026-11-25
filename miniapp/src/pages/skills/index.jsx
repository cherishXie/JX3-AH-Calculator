import withTheme from '../../components/withTheme';
import { useMemo, useState } from 'react';
import { View, Text, ScrollView, Input, Picker } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import PageHeader from '../../components/PageHeader';
import Section from '../../components/Section';
import StatGrid from '../../components/StatGrid';
import Sheet from '../../components/Sheet';
import PriceInput from '../../components/PriceInput';
import Toggle from '../../components/Toggle';
import Empty from '../../components/Empty';
import DataNote from '../../components/DataNote';
import { useStore } from '../../store';
import { DATA, priceOf, rowsOf, filterRows, sortRows, findItem } from '../../shared/engine';
import { fmt, fmtInt, fmtPct, fmtSigned } from '../../shared/format';

function Skills() {
  const [state, actions] = useStore();
  const storedSkill = Taro.getStorageSync('activeSkill');
  const [activeSkill, setActiveSkill] = useState(DATA.skills.some(function (s) { return s.id === storedSkill; }) ? storedSkill : 'shennong');
  const [q, setQ] = useState('');
  const [tier, setTier] = useState('');
  const [onlyProfit, setOnlyProfit] = useState(false);
  const [onlyComplete, setOnlyComplete] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

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
    q: q, tier: tier, onlyProfit: onlyProfit, complete: onlyComplete
  }), 'perEnergy', 'desc');
  const complete = rows.filter(function (r) { return !r.calc.missing && r.calc.perEnergy != null; });
  const doable = complete.filter(function (r) { return r.calc.profit > 0; });
  const avgDoable = doable.length ? doable.reduce(function (s, r) { return s + r.calc.perEnergy; }, 0) / doable.length : null;
  const avgAll = complete.length ? complete.reduce(function (s, r) { return s + r.calc.perEnergy; }, 0) / complete.length : null;
  const best = complete.slice().sort(function (x, y) { return y.calc.perEnergy - x.calc.perEnergy; })[0];
  const missingRows = rows.filter(function (r) { return r.calc.missing; }).length;

  const tierNames = ['全部品阶'].concat(DATA.tiers.map(function (t) { return t.name; }));
  const tierIdx = tier ? DATA.tiers.findIndex(function (t) { return String(t.id) === String(tier); }) + 1 : 0;

  const materialIds = [];
  rows.forEach(function (r) {
    r.recipe.materials.forEach(function (m) { if (materialIds.indexOf(m.item) === -1) materialIds.push(m.item); });
    if (sk.type === 'gather') r.recipe.outputs.forEach(function (o) { if (materialIds.indexOf(o.item) === -1) materialIds.push(o.item); });
  });
  const materials = materialIds.map(function (id) { return findItem(state, id); }).filter(Boolean);

  const maxPer = filtered.length ? Math.max.apply(null, filtered.map(function (r) { return Math.max(0, r.calc.perEnergy || 0); })) : 0;

  function openRecipe(id) {
    Taro.navigateTo({ url: '/pages/recipe/index?id=' + id });
  }
  function openAnalysis() {
    Taro.navigateTo({ url: '/pages/analysis/index?skill=' + sk.id });
  }
  function savePrice(itemId, val) {
    if (!actions.setPrice(itemId, val)) Taro.showToast({ title: '价格需为非负数字', icon: 'none' });
    else Taro.showToast({ title: '已更新价格', icon: 'none' });
  }
  function priceLabel(p) {
    if (p.missing) return { text: '缺价', cls: 'warn' };
    if (p.user) return { text: '已校准', cls: 'hot' };
    if (p.market) return { text: '云端', cls: 'info' };
    if (p.quote) return { text: '本服报价', cls: 'info' };
    return { text: '示例', cls: '' };
  }
  function resetFilter() {
    setQ(''); setTier(''); setOnlyProfit(false); setOnlyComplete(false);
  }

  return (
    <View className='v2-page has-cta'>
      <PageHeader
        actions={
          <View hoverClass='v2-pressed' hoverStayTime={80} className='v2-btn sm ghost' onClick={openAnalysis}>收益分析</View>
        }
      />

      <ScrollView scrollX className='v2-chip-row' scrollIntoView={'tab-' + sk.id}>
        {DATA.skills.map(function (s) {
          return (
            <View
              key={s.id}
              id={'tab-' + s.id}
              className={'v2-chip' + (s.id === sk.id ? ' on' : '')}
              onClick={function () { setActiveSkill(s.id); setQ(''); setTier(''); }}
            >
              <View className='dot' style={{ background: s.id === sk.id ? '#1a1020' : s.color }} />
              {s.name}
            </View>
          );
        })}
      </ScrollView>

      <View className='v2-hero' style={{ marginTop: '18rpx' }}>
        <View className='v2-kicker'>{sk.type === 'gather' ? '采集技艺' : '制造技艺'} · 苍生铸世 50 级</View>
        <View className='v2-h1' style={{ fontSize: '50rpx' }}>{sk.name}</View>
        <View className='v2-hero-sub v2-clamp2'>{sk.desc || '按本服物价计算材料成本与精力收益。'}</View>
        <View className='v2-tiny' style={{ marginTop: '8rpx' }}>
          {rows.length} 个{sk.type === 'gather' ? '采集点' : '配方'} · 可做 {doable.length} 个 · {missingRows ? '缺价 ' + missingRows + ' 个' : '数据齐全'}
        </View>
      </View>

      <StatGrid
        items={[
          { k: '可做均值', v: avgDoable == null ? '—' : fmt(avgDoable, 2), u: '金/精力', m: '盈利且数据完整', tone: avgDoable > 0 ? 'v2-pos' : '' },
          { k: '全部均值', v: avgAll == null ? '—' : fmt(avgAll, 2), u: '金/精力', m: '含亏损 / 薄利配方' },
          { k: '最优配方', v: best ? fmt(best.calc.perEnergy, 2) : '—', u: '金/精力', m: best ? best.recipe.name : '暂无完整数据' },
          sk.type === 'gather'
            ? { k: '平均单次精力', v: complete.length ? fmtInt(complete.reduce(function (s, r) { return s + r.calc.energy; }, 0) / complete.length) : '—', u: '点', m: '采集一次消耗' }
            : { k: '平均成本', v: complete.length ? fmt(complete.reduce(function (s, r) { return s + r.calc.totalCost; }, 0) / complete.length, 0) : '—', u: '金', m: '单次材料 + 手续费' }
        ]}
      />

      <View className='v2-search' style={{ marginTop: '22rpx' }}>
        <Text className='v2-search-ic'>搜</Text>
        <Input
          className='v2-input'
          value={q}
          placeholder='配方 / 产物'
          placeholderStyle='color:var(--muted-3)'
          onInput={function (e) { setQ(e.detail.value); }}
        />
        <View hoverClass='v2-pressed' hoverStayTime={80} className={'v2-filter-btn' + (showFilter ? ' on' : '')} onClick={function () { setShowFilter(true); }}>
          筛{tier || onlyProfit || onlyComplete ? '·' : ''}
        </View>
      </View>

      <Section
        title='配方与收益'
        sub={filtered.length + ' 条 · 按金/精力排序'}
        right={<Text className='v2-more' onClick={resetFilter}>重置</Text>}
      >
        <View className='v2-rows'>
          {filtered.map(function (r, i) {
            const c = r.calc;
            const w = maxPer > 0 && c.perEnergy > 0 ? Math.max(6, Math.round((c.perEnergy / maxPer) * 100)) : 0;
            return (
              <View className='v2-row' key={r.recipe.id} onClick={function () { openRecipe(r.recipe.id); }}>
                {w ? <View className='v2-bar' style={{ width: w + '%' }} /> : null}
                <Text className={'v2-no' + (i === 0 ? ' top' : '')}>{i + 1}</Text>
                <View className='v2-row-main'>
                  <View className='v2-flex' style={{ gap: '8rpx' }}>
                    <Text className='v2-row-nm'>{r.recipe.name}</Text>
                    {r.recipe.custom ? <Text className='v2-tag hot'>自定义</Text> : null}
                    {r.recipe.verified ? <Text className='v2-tag pos'>已核验</Text> : null}
                  </View>
                  <Text className='v2-row-ds'>{r.outputNames} · {r.tier.name} · 成本 {fmt(c.totalCost, 0)} · {fmtInt(c.energy)} 精力</Text>
                </View>
                <View className='v2-row-val'>
                  <Text className={'v2-row-v ' + (c.missing ? 'v2-muted' : c.perEnergy >= 0 ? 'v2-pos' : 'v2-neg')}>
                    {c.missing ? '待补价' : fmt(c.perEnergy, 2)}
                  </Text>
                  <Text className='v2-row-u'>{c.missing ? '材料或产物缺价' : '利润 ' + fmtSigned(c.profit, 0) + ' 金'}</Text>
                </View>
              </View>
            );
          })}
        </View>
        {!filtered.length ? <Empty title='没有匹配的配方' desc='换个关键词、品阶，或新建自定义配方。' /> : null}
      </Section>

      <Section
        title='本技艺材料行情'
        sub={'直接改价，本页收益即时重算 · ' + materials.length + ' 项'}
        action='完整价格库'
        onAction={function () { Taro.switchTab({ url: '/pages/prices/index' }); }}
      >
        <View className='v2-card-pad' style={{ background: 'var(--card)', border: '1rpx solid var(--border)', padding: '8rpx 22rpx' }}>
          {materials.map(function (it) {
            const p = priceOf(state, it.id, state.serverId);
            const lb = priceLabel(p);
            return (
              <View className='v2-row' key={it.id} style={{ minHeight: '92rpx' }}>
                <View className='v2-row-main'>
                  <View className='v2-flex' style={{ gap: '8rpx' }}>
                    <Text className='v2-row-nm'>{it.name}</Text>
                    <Text className={'v2-tag ' + lb.cls}>{lb.text}</Text>
                  </View>
                  <Text className='v2-row-ds'>{it.kind === 'product' ? '成品' : '材料'} · {it.source || 'JX3BOX'}</Text>
                </View>
                <PriceInput value={p.missing ? '' : p.v} onSave={function (v) { savePrice(it.id, v); }} />
              </View>
            );
          })}
          {!materials.length ? <View className='v2-empty'><View className='t'>本技艺暂无可改价材料</View></View> : null}
        </View>
      </Section>

      <DataNote extra={'成本 = 材料 + 手续费 · 售价扣 ' + fmtPct(state.settings.taxRate, 0) + ' 交易税'} />

      <View className='v2-cta'>
        <View hoverClass='v2-pressed' hoverStayTime={80} className='v2-btn primary block' onClick={function () {
          Taro.navigateTo({ url: '/pages/recipe/index?new=1&skill=' + sk.id });
        }}>
          ＋ 新增{sk.type === 'gather' ? '采集点' : '配方'}
        </View>
      </View>

      <Sheet
        open={showFilter}
        title='筛选配方'
        onClose={function () { setShowFilter(false); }}
        footer={
          <View hoverClass='v2-pressed' hoverStayTime={80} className='v2-btn primary block' onClick={function () { setShowFilter(false); }}>查看 {filtered.length} 条结果</View>
        }
      >
        <View className='v2-tiny' style={{ marginBottom: '10rpx' }}>品阶</View>
        <Picker mode='selector' range={tierNames} value={tierIdx}
          onChange={function (e) { const i = Number(e.detail.value); setTier(i === 0 ? '' : String(DATA.tiers[i - 1].id)); }}>
          <View className='v2-input' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text>{tierIdx === 0 ? '全部品阶' : DATA.tiers[tierIdx - 1].name}</Text>
            <Text className='v2-muted'>⌄</Text>
          </View>
        </Picker>
        <View style={{ marginTop: '20rpx' }}>
          <Toggle label='仅看盈利' value={onlyProfit} onChange={setOnlyProfit} />
        </View>
        <View style={{ marginTop: '12rpx' }}>
          <Toggle label='仅看数据完整（排除缺价）' value={onlyComplete} onChange={setOnlyComplete} />
        </View>
        <View hoverClass='v2-pressed' hoverStayTime={80} className='v2-btn ghost sm' style={{ marginTop: '24rpx' }} onClick={resetFilter}>清空筛选</View>
      </Sheet>
    </View>
  );
}

export default withTheme(Skills);
