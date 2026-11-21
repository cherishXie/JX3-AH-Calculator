import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { DATA } from '../shared/engine';

export default function DataNote(props) {
  return (
    <View className='data-note'>
      <Text>数据 {DATA.meta.catalogVersion} · {DATA.recipes.length} 配方 · </Text>
      <Text
        className='link'
        onClick={function () { Taro.navigateTo({ url: '/pages/settings/index?section=data' }); }}
      >说明</Text>
      {props.extra ? <Text> · {props.extra}</Text> : null}
    </View>
  );
}
