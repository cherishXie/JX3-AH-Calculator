import { View, Text } from '@tarojs/components';

export default function Toggle(props) {
  return (
    <View className={'toggle' + (props.value ? ' on' : '')} onClick={function () { if (props.onChange) props.onChange(!props.value); }}>
      <View className='track'><View className='thumb' /></View>
      <Text>{props.label}</Text>
    </View>
  );
}
