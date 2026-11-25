import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { DATA } from '../shared/engine';

export default function DataNote(props) {
  return (
    <View className='data-note'>
      <Text>数据 {DATA.meta.catalogVersion} · {DATA.recipes.length} 配方 · </Text>
      <Text
        className='link'
        onClick={function () {
          try { Taro.setStorageSync('settingsSection', 'data'); } catch (e) {}
          Taro.switchTab({ url: '/pages/settings/index' });
        }}
      >说明</Text>
      {props.extra ? <Text> · {props.extra}</Text> : null}
    </View>
  );
}
