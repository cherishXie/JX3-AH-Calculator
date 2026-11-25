import { View, Text } from '@tarojs/components';

/**
 * 2 列 KPI 卡。
 * items: [{ k, v, u, m, tone, wide, onClick }]
 */
export default function StatGrid(props) {
  const items = props.items || [];
  return (
    <View className={'v2-stats' + (props.className ? ' ' + props.className : '')}>
      {items.map(function (it, i) {
        return (
          <View
            key={it.key || i}
            hoverClass={it.onClick ? 'v2-pressed' : 'none'}
            hoverStayTime={80}
            className={'v2-stat' + (it.wide ? ' wide' : '')}
            onClick={it.onClick || undefined}
          >
            <View className='v2-stat-k'>{it.k}</View>
            <View className={'v2-stat-v ' + (it.tone || '')}>
              {it.v}
              {it.u ? <Text className='u'>{it.u}</Text> : null}
            </View>
            {it.m ? <View className='v2-stat-m'>{it.m}</View> : null}
          </View>
        );
      })}
    </View>
  );
}
