import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { DATA } from '../shared/engine';

export default function DataNote(props) {
  return (
    <View className='data-note'>
      <Text>苍生铸世 · 50 级 · {DATA.recipes.length} 条配方 · 数据 {DATA.meta.catalogVersion}（核验 {DATA.meta.verifiedAt}）；价格为样本/示例 </Text>
      <Text
        className='link'
        onClick={function () { Taro.navigateTo({ url: '/pages/settings/index?section=data' }); }}
      >数据说明</Text>
      {props.extra ? <Text> · {props.extra}</Text> : null}
    </View>
  );
}
