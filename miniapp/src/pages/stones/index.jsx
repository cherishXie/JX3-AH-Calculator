import withTheme from '../../components/withTheme';
import { useMemo, useState } from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import ServerBar from '../../components/ServerBar';
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
    <View className='page'>
      <ServerBar />

      {best ? (
        <View className='stone-hero'>
          <View className='hero-top'>
            <Text className='hero-tag'>最赚精力</Text>
            <Text className='hero-source'>已扣 {fmtPct(tax, 0)} 税</Text>
          </View>
          <Text className='hero-name'>合到 {best.target} 级</Text>
          <Text className='hero-meta'>{best.method} · 每次 {fmtInt(best.energyPerTarget || 0)} 精力</Text>
          <View className='hero-number'>
            <Text className='n'>{fmt(best.perEnergyTarget, 2)}</Text>
            <Text className='u'>金 / 点精力</Text>
          </View>
        </View>
      ) : (
        <View className='card'>
          <View className='card-head'><View className='flex1'><Text className='card-title'>先填五行石价格</Text><Text className='card-sub'>有了 1–8 级价格，才能算出合到几级最赚</Text></View></View>
        </View>
      )}

      <View className={'price-strip' + (priceCount === STONE_LEVELS.length ? ' ok' : '')}>
        <Text className='txt'>1–8 级价格 · 已校准 {priceCount}/{STONE_LEVELS.length}</Text>
        <View className='btn btn-sm btn-ghost' onClick={function () { setShowPrices(!showPrices); }}>{showPrices ? '收起' : '改价'}</View>
      </View>

      {showPrices ? (
        <View className='card'>
          <View className='card-body' style={{ paddingTop: '0' }}>
            {STONE_LEVELS.map(function (l) {
              const p = stonePrice(state, state.serverId, l.level);
              return (
                <View className='market-row' key={l.level}>
                  <View className='main'>
                    <Text className='nm'>{l.level} 级</Text>
                    <Text className='ds'>{l.user ? '已校准' : l.market ? '云端价' : p.missing ? '缺价' : '包内报价'}</Text>
                  </View>
                  <PriceInput value={p.missing ? '' : p.v} onSave={function (v) { savePrice(l.level, v); }} />
                </View>
              );
            })}
          </View>
        </View>
      ) : null}

      <Seg
        value={mode}
        options={[
          { value: 'fast', label: '快速合成' },
          { value: 'profit', label: '最赚精力' },
          { value: 'gold', label: '最低金币' }
        ]}
        onChange={setMode}
      />

      {levels.length ? (
        <View className='stone-levels' style={{ marginTop: '20rpx' }}>
          {levels.map(function (r) {
            const info = stoneLevelInfo(r.target);
            return (
              <View className='stone-level-row' key={r.key || r.recipe.id} onClick={function () { openFormula(r.recipe.id); }}>
                <View className='stone-lv-badge' style={{ background: info.color }}>{r.target}级</View>
                <View className='main'>
                  <Text className='nm'>{r.method} · {r.target} 级</Text>
                  <Text className='ds'>成本 {fmt(r.costPerTarget, 2)} 金/颗 · 精力 {fmtInt(r.energyPerTarget)}/颗</Text>
                </View>
                <View className='val'>
                  <Text className='v'>{fmt(r.perEnergyTarget, 2)}</Text>
                  <Text className='u'>金 / 点精力</Text>
                </View>
                <Text className='chev'>›</Text>
              </View>
            );
          })}
        </View>
      ) : <Empty title='暂无合成方案' desc='补齐 1–6 级价格后自动出现。' />}

      <View className='stone-jack'>
        {[summary.be7, summary.be8].filter(Boolean).map(function (r) {
          const p = r.breakEven && r.breakEven.p;
          return (
            <View className='stone-jack-row' key={r.recipe.id} onClick={function () { openFormula(r.recipe.id); }}>
              <View className='main'>
                <Text className='t'>{r.recipe.name}</Text>
                <Text className='s'>爆率要 ≥ {p == null ? '—' : fmtPct(p, 1)} 才不亏 · 净售 {fmt(r.targetNet, 0)} 金/颗</Text>
              </View>
              <Text className={'badge ' + (p == null ? 'badge-neutral' : 'badge-warning')}>{p == null ? '无法计算' : fmtPct(p, 1)}</Text>
              <Text className='chev'>›</Text>
            </View>
          );
        })}
      </View>

      <DataNote extra='五行石价格与生活技艺价格库分开保存' />
    </View>
  );
}

export default withTheme(Stones);
