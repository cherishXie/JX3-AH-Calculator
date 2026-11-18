import { Text } from '@tarojs/components';

export default function Badge(props) {
  return <Text className={'badge ' + (props.tone || 'badge-neutral')}>{props.children}</Text>;
}
