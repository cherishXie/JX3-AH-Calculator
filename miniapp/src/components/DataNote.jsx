import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';

export default function DataNote(props) {
  return (
    <View className='data-note'>
      <Text>苍生铸世 · 50 级 · 154 条制造配方来自 JX3BOX 当前版本 API（2026-11-18）；价格为示例 </Text>
      <Text
        className='link'
        onClick={function () { Taro.navigateTo({ url: '/pages/settings/index?section=data' }); }}
      >数据说明</Text>
      {props.extra ? <Text> · {props.extra}</Text> : null}
    </View>
  );
}
