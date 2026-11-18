import { View, Text, Picker } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useStore } from '../store';

export default function TopBar(props) {
  const [state, actions] = useStore();
  const servers = state.servers || [];
  const idx = Math.max(0, servers.findIndex(function (s) { return s.id === state.serverId; }));
  const sv = servers[idx] || { name: '—', region: '' };
  const range = servers.map(function (s) { return s.name + ' · ' + (s.region || '自定义'); });

  return (
    <View className='topbar'>
      <View className='topbar-main'>
        {props.showTitle === false ? null : <Text className='topbar-title'>{props.title || '剑网三物价助手'}</Text>}
        {props.subtitle ? <Text className='topbar-sub'>{props.subtitle}</Text> : null}
        <Text className='brand-tag'>苍生铸世 · 50级</Text>
      </View>
      <View className='topbar-actions'>
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
          <View className='server-pill'>
            <Text className='sname'>{sv.name}</Text>
            <Text className='caret'>⌄</Text>
          </View>
        </Picker>
        <View
          className='icon-btn'
          onClick={function () { Taro.navigateTo({ url: '/pages/settings/index' }); }}
        >
          ⚙
        </View>
      </View>
    </View>
  );
}
