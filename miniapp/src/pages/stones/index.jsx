import withTheme from '../../components/withTheme';
import { useMemo, useState } from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import PageHeader from '../../components/PageHeader';
import Section from '../../components/Section';
import StatGrid from '../../components/StatGrid';
import Sheet from '../../components/Sheet';
import Seg from '../../components/Seg';
import PriceInput from '../../components/PriceInput';
import Empty from '../../components/Empty';
import DataNote from '../../components/DataNote';
import { useStore } from '../../store';
import {
  STONE_LEVELS, stonePrice, stoneSummary, stoneLevelInfo, stoneTaxRate
} from '../../shared/stones';
import { fmt, fmtInt, fmtPct } from '../../shared/format';

function Stones() {
  const [state, actions] = useStore();
  const [mode, setMode] = useState('profit');
  const [showPrices, setShowPrices] = useState(false);
  const summary = useMemo(function () { return stoneSummary(state); }, [state]);
  const tax = stoneTaxRate(state);
  const best = summary.bestOverall;

  const levels = useMemo(function () {
    if (mode === 'fast') {
      return summary.all.filter(function (r) { return r.method === '快速合成' && r.target >= 2 && r.target <= 6; });
    }
    if (mode === 'gold') {
      const gold = summary.all.filter(function (r) { return r.method === '最低金币'; });
      return gold.length ? gold : [3, 4, 5, 6].map(function (l) { return summary.best[l]; }).filter(Boolean);
    }
    return [3, 4, 5, 6].map(function (l) { return summary.best[l]; }).filter(Boolean);
  }, [summary, mode]);
  const priceCount = STONE_LEVELS.filter(function (l) { return stonePrice(state, state.serverId, l.level).user; }).length;

  function savePrice(level, val) {
    if (!actions.setStonePrice(level, val)) {
      Taro.showToast({ title: '价格需为非负数字', icon: 'none' });
      return;
    }
    Taro.showToast({ title: '已保存本服五行石价', icon: 'none' });
  }
  function openFormula(id) {
    Taro.navigateTo({ url: '/pages/stone-formula/index' + (id ? '?id=' + id : '?new=1') });
  }

  return (
    <View className='v2-page'>
      <PageHeader
        actions={
          <View hoverClass='v2-pressed' hoverStayTime={80} className='v2-btn sm ghost' onClick={function () { Taro.navigateTo({ url: '/pages/stone-formula/index' }); }}>公式</View>
        }
      />

      <View className='v2-hero'>
        <View className='v2-kicker'>五行石 · 已扣 {fmtPct(tax, 0)} 交易税</View>
        {best ? (
          <View>
            <View className='v2-h1'>合到 <Text style={{ color: '#fd7b4c' }}>{best.target} 级</Text> 最赚</View>
            <View className='v2-hero-sub'>{best.method} · 单颗 {fmt(best.profitPerTarget, 2)} 金利润 · {fmtInt(best.energyPerTarget)} 精力</View>
          </View>
        ) : (
          <View>
            <View className='v2-h1'>先填 <Text style={{ color: '#fd7b4c' }}>1–8 级</Text> 价格</View>
            <View className='v2-hero-sub'>补齐本服五行石价格后，自动比较快速 / 最优 / 最低金币。</View>
          </View>
        )}
      </View>

      <StatGrid
        items={[
          { k: '单颗利润', v: best ? fmt(best.profitPerTarget, 2) : '—', u: '金', m: best ? best.method : '缺价', tone: 'v2-pos' },
          { k: '精力 / 颗', v: best ? fmtInt(best.energyPerTarget) : '—', u: '点', m: '含前序合成' },
          { k: '七级爆率线', v: summary.be7 && summary.be7.breakEven.p != null ? fmtPct(summary.be7.breakEven.p, 1) : '—', m: '低于此爆率亏', tone: 'v2-warn' },
          { k: '八级爆率线', v: summary.be8 && summary.be8.breakEven.p != null ? fmtPct(summary.be8.breakEven.p, 1) : '—', m: '低于此爆率亏', tone: 'v2-warn' }
        ]}
      />

      <View className='v2-card-pad' style={{ marginTop: '18rpx', background: 'var(--card)', border: '1rpx solid var(--border)' }}>
        <View className='v2-flex'>
          <View style={{ flex: 1 }}>
            <View className='v2-row-nm'>1–8 级本服价格</View>
            <View className='v2-row-ds'>已校准 {priceCount}/{STONE_LEVELS.length} · 改价后即时重算</View>
          </View>
          <View hoverClass='v2-pressed' hoverStayTime={80} className='v2-btn sm ghost' onClick={function () { setShowPrices(true); }}>改价</View>
        </View>
        <View className='v2-stats' style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '10rpx', marginTop: '16rpx' }}>
          {STONE_LEVELS.map(function (l) {
            const p = stonePrice(state, state.serverId, l.level);
            return (
              <View key={l.level} className='v2-stat' style={{ padding: '14rpx 12rpx', borderRadius: '18rpx' }} onClick={function () { setShowPrices(true); }}>
                <View className='v2-stat-k'>{l.level} 级</View>
                <View style={{ fontSize: '26rpx', fontWeight: 800, marginTop: '4rpx' }} className={p.user ? 'v2-pos' : p.missing ? 'v2-neg' : ''}>
                  {p.missing ? '缺' : fmt(p.v, 0)}
                </View>
              </View>
            );
          })}
        </View>
      </View>

      <Section title='合成路线' sub='点行可编辑该公式'>
        <Seg
          value={mode}
          options={[
            { value: 'fast', label: '快速合成' },
            { value: 'profit', label: '最赚精力' },
            { value: 'gold', label: '最低金币' }
          ]}
          onChange={setMode}
        />
        <View className='v2-rows' style={{ marginTop: '12rpx' }}>
          {levels.map(function (r) {
            const info = stoneLevelInfo(r.target);
            return (
              <View className='v2-row' key={r.key || r.recipe.id} onClick={function () { openFormula(r.recipe.id); }}>
                <View
                  style={{
                    width: '58rpx', height: '58rpx', borderRadius: '16rpx', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: info.color + '33', color: info.color, fontSize: '22rpx', fontWeight: 800
                  }}
                >{r.target}级</View>
                <View className='v2-row-main'>
                  <Text className='v2-row-nm'>{r.method} · {r.target} 级</Text>
                  <Text className='v2-row-ds'>成本 {fmt(r.costPerTarget, 2)} 金/颗 · 精力 {fmtInt(r.energyPerTarget)}/颗</Text>
                </View>
                <View className='v2-row-val'>
                  <Text className={'v2-row-v ' + (r.perEnergyTarget >= 0 ? 'v2-pos' : 'v2-neg')}>{fmt(r.perEnergyTarget, 2)}</Text>
                  <Text className='v2-row-u'>金 / 点精力</Text>
                </View>
              </View>
            );
          })}
        </View>
        {!levels.length ? <Empty title='暂无合成方案' desc='需 1–6 级价格。' /> : null}
      </Section>

      <Section title='7 / 8 级爆率盈亏线' sub='没有稳定保底公式，按可编辑模板计算'>
        <View className='v2-rows'>
          {[summary.be7, summary.be8, summary.be8alt].filter(Boolean).map(function (r) {
            const p = r.breakEven && r.breakEven.p;
            return (
              <View className='v2-row' key={r.recipe.id} onClick={function () { openFormula(r.recipe.id); }}>
                <View className='v2-row-main'>
                  <Text className='v2-row-nm'>{r.recipe.name}</Text>
                  <Text className='v2-row-ds'>爆率 ≥ {p == null ? '—' : fmtPct(p, 1)} 才不亏 · 净售 {fmt(r.targetNet, 0)} 金/颗</Text>
                </View>
                <View className='v2-row-val'>
                  <Text className={'v2-row-v ' + (p == null ? 'v2-muted' : 'v2-warn')}>{p == null ? '无法计算' : fmtPct(p, 1)}</Text>
                  <Text className='v2-row-u'>盈亏线</Text>
                </View>
              </View>
            );
          })}
        </View>
        <View className='v2-tiny' style={{ marginTop: '10rpx' }}>
          剥七/剥八受装备等级、精炼等级与剥离费影响，这里只给「按当前 6 级价与模板」的爆率线；请以游戏内面板为准。
        </View>
      </Section>

      <DataNote extra={'五行石公式全可编辑 · 售价扣 ' + fmtPct(tax, 0) + ' 交易税'} />

      <Sheet
        open={showPrices}
        title='1–8 级五行石价格'
        onClose={function () { setShowPrices(false); }}
        footer={<View hoverClass='v2-pressed' hoverStayTime={80} className='v2-btn primary block' onClick={function () { setShowPrices(false); }}>完成</View>}
      >
        {STONE_LEVELS.map(function (l) {
          const p = stonePrice(state, state.serverId, l.level);
          return (
            <View className='v2-row' key={l.level} style={{ minHeight: '92rpx' }}>
              <View className='v2-row-main'>
                <Text className='v2-row-nm'>{l.level} 级五行石</Text>
                <Text className='v2-row-ds'>{p.user ? '已校准' : p.market ? '云端价' : p.missing ? '缺价' : '包内报价'}</Text>
              </View>
              <PriceInput value={p.missing ? '' : p.v} onSave={function (v) { savePrice(l.level, v); }} />
            </View>
          );
        })}
      </Sheet>
    </View>
  );
}

export default withTheme(Stones);
