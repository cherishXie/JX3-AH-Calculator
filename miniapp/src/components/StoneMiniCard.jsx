import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useStore } from '../store';
import { stoneSummary } from '../shared/stones';
import { fmt, fmtPct } from '../shared/format';

const IS_WEAPP = process.env.TARO_ENV === 'weapp';

function mini(label, value, sub, tone) {
  return (
    <View className='stone-mini' key={label}>
      <Text className='k'>{label}</Text>
      <Text className={'v ' + (tone || '')}>{value}</Text>
      <Text className='s'>{sub}</Text>
    </View>
  );
}

export default function StoneMiniCard() {
  const [state] = useStore();
  if (!IS_WEAPP) return null;
  const s = stoneSummary(state);
  const best5 = s.best[5];
  const best6 = s.best[6];
  const be7 = s.be7;
  const be8 = s.be8;

  return (
    <View className='card'>
      <View className='card-head'>
        <View className='flex1'>
          <Text className='card-title'>五行石：合到几级最赚精力？</Text>
          <Text className='card-sub'>快速 vs 最优 · 7/8 级爆率线 · 售价已扣 {fmtPct(s.taxRate, 0)} 交易税</Text>
        </View>
        <View className='card-tool'>
          <View className='btn btn-ghost btn-sm' onClick={function () { Taro.switchTab({ url: '/pages/stones/index' }); }}>打开 ›</View>
        </View>
      </View>
      <View className='card-body'>
        <View className='stone-mini-grid'>
          {mini('5 级最优 · 金/精力', best5 ? fmt(best5.perEnergyTarget, 2) : '—',
            best5 ? best5.method + ' · ' + fmt(best5.costPerTarget, 2) + ' 金/颗' : '暂无完整方案',
            best5 ? (best5.perEnergyTarget >= 0 ? 'pos' : 'neg') : 'dim')}
          {mini('6 级最优 · 金/精力', best6 ? fmt(best6.perEnergyTarget, 2) : '—',
            best6 ? best6.method + ' · ' + fmt(best6.costPerTarget, 2) + ' 金/颗' : '暂无完整方案',
            best6 ? (best6.perEnergyTarget >= 0 ? 'pos' : 'neg') : 'dim')}
          {mini('7 级盈亏线', be7 && be7.breakEven.p != null ? fmtPct(be7.breakEven.p, 1) : '—',
            be7 ? '净售 ' + fmt(be7.targetNet, 0) + ' 金/颗' : '暂无公式', 'warn')}
          {mini('8 级盈亏线', be8 && be8.breakEven.p != null ? fmtPct(be8.breakEven.p, 1) : '—',
            be8 ? '净售 ' + fmt(be8.targetNet, 0) + ' 金/颗' : '暂无公式', 'warn')}
        </View>
      </View>
    </View>
  );
}
