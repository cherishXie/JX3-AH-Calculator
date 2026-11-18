import { View } from '@tarojs/components';

export default function Empty(props) {
  return (
    <View className='empty'>
      <View className='e1'>{props.title || '暂无数据'}</View>
      <View className='e2'>{props.desc || '调整筛选条件后再试。'}</View>
      {props.children}
    </View>
  );
}
