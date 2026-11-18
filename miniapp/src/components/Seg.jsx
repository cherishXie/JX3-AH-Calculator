import { View, Text } from '@tarojs/components';

export default function Seg(props) {
  return (
    <View className='seg'>
      {(props.options || []).map(function (o) {
        return (
          <View
            key={o.value}
            className={'seg-item' + (String(props.value) === String(o.value) ? ' active' : '')}
            onClick={function () { if (props.onChange) props.onChange(o.value); }}
          >
            <Text>{o.label}</Text>
          </View>
        );
      })}
    </View>
  );
}
