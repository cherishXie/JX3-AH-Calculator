import { View, Text } from '@tarojs/components';
import { fmt } from '../shared/format';

export default function BarList(props) {
  const rows = (props.rows || []).filter(function (r) { return r.value > 0; }).slice(0, props.limit || 15);
  if (!rows.length) {
    return (
      <View className='empty'>
        <View className='e1'>暂无可排序数据</View>
        <View className='e2'>补齐材料与产物价格后自动生成。</View>
      </View>
    );
  }
  const max = Math.max.apply(null, rows.map(function (r) { return r.value; })) || 1;
  return (
    <View>
      {rows.map(function (r, i) {
        const top = i === 0;
        const color = top ? '#b36bff' : (r.color || (r.type === 'gather' ? '#2e9e78' : '#1d6fe0'));
        return (
          <View className='bar-row' key={r.id || i} onClick={function () { if (props.onPick && r.id) props.onPick(r.id); }}>
            <View className='bar-label'>
              <Text className='n' style={top ? { color: '#c79bff' } : null}>{r.label}</Text>
              <Text className='m'>{r.meta || ''}</Text>
            </View>
            <View className='bar-track'>
              <View className='bar-fill' style={{ width: Math.max(2, (r.value / max) * 100) + '%', background: color }} />
            </View>
            <Text className='bar-val' style={top ? { color: '#c79bff' } : null}>{fmt(r.value, 2)}</Text>
          </View>
        );
      })}
    </View>
  );
}
