import { useMemo } from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useStore } from '../store';
import { allSkillsSummary, SKILL_IDS } from '../shared/breakthrough';
import { fmt, fmtInt, fmtSigned } from '../shared/format';

export default function BreakthroughMini() {
  const [state] = useStore();
  const list = useMemo(function () {
    return allSkillsSummary(state, 'gold');
  }, [state]);
  const top = list.slice(0, 4);
  const energyMin = Math.min.apply(null, list.map(function (s) { return s.energy; }));
  const energyMax = Math.max.apply(null, list.map(function (s) { return s.energy; }));

  function open(skillId) {
    Taro.navigateTo({ url: '/pages/breakthrough/index?skill=' + (skillId || 'duanzao') });
  }

  return (
    <View className='card'>
      <View className='card-head'>
        <View className='flex1'>
          <Text className='card-title'>突破升级 · 1→50</Text>
          <Text className='card-sub'>晋秩突破 · 按本服物价算 1→50 最优路线</Text>
        </View>
        <View className='card-tool' onClick={function () { open(); }}>
          <Text className='badge badge-info'>查看路线 ›</Text>
        </View>
      </View>
      <View className='card-body' style={{ paddingTop: '6rpx' }}>
        <View className='bt-mini-kpis'>
          <View className='bt-mini'>
            <Text className='k'>1→50 经验</Text>
            <Text className='v'>{fmtInt(list[0] ? list[0].exp : 0)}</Text>
            <Text className='s'>按级别估算，八技艺一致</Text>
          </View>
          <View className='bt-mini'>
            <Text className='k'>精力区间</Text>
            <Text className='v'>{fmtInt(energyMin)}–{fmtInt(energyMax)}</Text>
            <Text className='s'>制造经验 = 精力 ×2</Text>
          </View>
        </View>
        {top.map(function (s, i) {
          return (
            <View className='bt-sum-row' key={s.skillId} onClick={function () { open(s.skillId); }}>
              <View className='rank'>{i + 1}</View>
              <View className='bt-sum-main'>
                <Text className='nm'>{s.name}<Text className='tiny dim'> · {s.type === 'gather' ? '采集' : '制造'}</Text></Text>
                <Text className='ds'>精力 {fmtInt(s.energy)} · 升级收益 {fmtSigned(s.profit, 0)} 金 · 突破材料 {fmt(s.gateCost, 0)} 金</Text>
              </View>
              <View className='bt-val'>
                <Text className={'v ' + (s.total > 0 ? 'pos' : s.total < 0 ? 'neg' : '')}>{fmtSigned(s.total, 0)}</Text>
                <Text className='u'>金</Text>
              </View>
            </View>
          );
        })}
      </View>
      <View className='card-foot'>
        合计收益 = 升级收益（产出 − 材料）− 突破材料；正数为赚。当前展示前 4 项，共 {SKILL_IDS.length} 项技艺。
      </View>
    </View>
  );
}
