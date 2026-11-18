import { View, Text } from '@tarojs/components';

export default function Kpi(props) {
  return (
    <View className='kpi'>
      <Text className='kpi-label'>{props.label}</Text>
      <View className='row' style={{ alignItems: 'baseline' }}>
        <Text className={'kpi-value ' + (props.tone || '')}>{props.value}</Text>
        {props.unit ? <Text className='kpi-unit'>{props.unit}</Text> : null}
      </View>
      {props.meta ? <Text className='kpi-meta'>{props.meta}</Text> : null}
      {props.progress != null ? (
        <View className='progress'>
          <View className={'progress-fill ' + (props.progressTone || '')} style={{ width: Math.max(0, Math.min(100, props.progress)) + '%' }} />
        </View>
      ) : null}
    </View>
  );
}
