import { View, Text, Picker } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useStore } from '../store';
import { isMarketFresh } from '../shared/engine';
import { DATA } from '../shared/engine';
import { fmtTime } from '../shared/format';

/**
 * 统一顶部上下文条：区服切换 + 行情时间 + 页面动作。
 * 页面标题由原生导航栏承担，避免重复。
 */
export default function PageHeader(props) {
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
  const meta = props.meta != null ? props.meta : (clock ? '行情 ' + clock : '包内价');

  return (
    <View className='v2-topbar'>
      <Picker
        mode='selector'
        range={range}
        value={idx}
        onChange={function (e) {
          const next = servers[Number(e.detail.value)];
          if (next && next.id !== state.serverId) {
            actions.setServer(next.id);
            Taro.showToast({ title: '已切换到 ' + next.name, icon: 'none' });
          }
        }}
      >
        <View className='v2-server-pill'>
          <Text>{server.name}</Text>
          <Text className='caret'>⌄</Text>
        </View>
      </Picker>
      {meta ? <Text className='v2-topbar-meta'>{meta}</Text> : null}
      {props.actions ? <View className='v2-topbar-actions'>{props.actions}</View> : null}
    </View>
  );
}
