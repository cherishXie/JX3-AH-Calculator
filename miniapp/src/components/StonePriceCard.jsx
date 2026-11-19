import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import PriceInput from './PriceInput';
import { useStore } from '../store';
import { STONE_LEVELS, stonePrice, stoneNetPrice, stoneTaxRate, stonePriceUpdatedAt } from '../shared/stones';
import { fmt, fmtPct, fmtTime } from '../shared/format';

const IS_WEAPP = process.env.TARO_ENV === 'weapp';

export default function StonePriceCard() {
  const [state, actions] = useStore();
  if (!IS_WEAPP) return null;

  function save(level, val) {
    if (!actions.setStonePrice(level, val)) {
      Taro.showToast({ title: '价格需为非负数字', icon: 'none' });
    } else {
      Taro.showToast({ title: '已保存五行石价', icon: 'none' });
    }
  }

  return (
    <View className='card'>
      <View className='card-head'>
        <View className='flex1'>
          <Text className='card-title'>五行石行情</Text>
          <Text className='card-sub'>1–8 级独立价格 · 与五行石合成页共用 · 售价按 {fmtPct(stoneTaxRate(state), 0)} 交易税折算</Text>
        </View>
        <View className='card-tool'>
          <View className='btn btn-ghost btn-sm' onClick={function () { Taro.switchTab({ url: '/pages/stones/index' }); }}>合成 ›</View>
        </View>
      </View>
      <View style={{ padding: '0 24rpx 8rpx' }}>
        {STONE_LEVELS.map(function (l) {
          const p = stonePrice(state, state.serverId, l.level);
          return (
            <View className='price-line' key={l.level}>
              <View className='main'>
                <View className='row'>
                  <View className='tier-dot' style={{ background: l.color }} />
                  <Text className='nm'>{l.level} 级</Text>
                  <Text className={'badge ' + (p.user ? 'badge-positive' : p.market ? 'badge-info' : p.missing ? 'badge-warning' : 'badge-neutral')}
                    style={{ marginLeft: '8rpx' }}>
                    {p.user ? '已校准' : p.market ? '行情' : p.missing ? '缺价' : '示例'}
                  </Text>
                </View>
                <Text className='ds'>{l.name} · 净价 {fmt(stoneNetPrice(state, state.serverId, l.level), 2)} 金</Text>
              </View>
              <PriceInput value={p.missing ? '' : p.v} onSave={function (v) { save(l.level, v); }} />
            </View>
          );
        })}
      </View>
      <View className='card-foot'>行情时间 {fmtTime(stonePriceUpdatedAt(state))} · 五行石价格与生活技艺价格库分开保存</View>
    </View>
  );
}
