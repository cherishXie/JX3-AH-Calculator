import { View, Text, Picker } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useStore } from '../store';
import { DATA, isMarketFresh } from '../shared/engine';
import { fmtTime } from '../shared/format';

/**
 * 4 Tab 页面统一的区服行。
 * 原生导航栏已经显示页面标题，页面内不再重复大标题，只保留区服与行情时间。
 */
export default function ServerBar() {
  const [state, actions] = useStore();
  const servers = state.servers || [];
  const idx = Math.max(0, servers.findIndex(function (s) { return s.id === state.serverId; }));
  const server = servers[idx] || { name: '—', region: '' };
  const range = servers.map(function (s) { return s.name + ' · ' + (s.region || '自定义'); });
  const fresh = state.marketMeta && isMarketFresh(state);
  const stamp = fresh
    ? Date.parse(state.marketMeta.priceUpdatedAt || '')
    : Date.parse(DATA.meta.priceUpdatedAt || '');
  const clock = Number.isFinite(stamp) ? fmtTime(stamp).slice(-5) : '';
  const updateText = clock ? '行情 ' + clock : '包内价';

  return (
    <View className='server-bar'>
      <Picker mode='selector' range={range} value={idx}
        onChange={function (e) {
          const next = servers[Number(e.detail.value)];
          if (next && next.id !== state.serverId) {
            actions.setServer(next.id);
            Taro.showToast({ title: '已切换到 ' + next.name, icon: 'none' });
          }
        }}>
        <View className='server-pill-lg'>
          <Text className='nm'>{server.name}</Text>
          <Text className='caret'>⌄</Text>
        </View>
      </Picker>
      <Text className='server-meta'>{updateText}</Text>
    </View>
  );
}
