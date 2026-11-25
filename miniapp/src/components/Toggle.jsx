import { View, Text } from '@tarojs/components';

/** 开关：整行 88rpx 可点，右侧轨道，按下有反馈。 */
export default function Toggle(props) {
  return (
    <View
      className={'v2-switch-row' + (props.value ? ' on' : '')}
      onClick={function () { if (props.onChange) props.onChange(!props.value); }}
    >
      <Text className='v2-switch-label'>{props.label}</Text>
      <View className='v2-switch'><View className='v2-switch-thumb' /></View>
    </View>
  );
}
