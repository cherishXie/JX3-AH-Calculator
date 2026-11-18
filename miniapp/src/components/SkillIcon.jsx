import { View, Text } from '@tarojs/components';

export default function SkillIcon(props) {
  const s = props.skill || {};
  return (
    <View className='skill-ic' style={{ background: s.color || '#1d6fe0' }}>
      <Text>{(s.name || '?').slice(0, 1)}</Text>
    </View>
  );
}
