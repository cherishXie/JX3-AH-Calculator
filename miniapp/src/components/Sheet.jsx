import { View, Text } from '@tarojs/components';

/** 底部弹层：筛选、批量录入、改价等。 */
export default function Sheet(props) {
  if (!props.open) return null;
  return (
    <View>
      <View className='v2-mask' onClick={props.onClose} />
      <View className='v2-sheet' onClick={function (e) { e.stopPropagation(); }}>
        <View className='v2-sheet-grip' />
        <View className='v2-sheet-head'>
          <Text className='v2-sheet-t'>{props.title || ''}</Text>
          <Text className='v2-sheet-x' onClick={props.onClose}>✕</Text>
        </View>
        <View className='v2-sheet-body'>{props.children}</View>
        {props.footer ? <View className='v2-sheet-foot'>{props.footer}</View> : null}
      </View>
    </View>
  );
}
