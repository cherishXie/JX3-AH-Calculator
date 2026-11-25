import { View, Text } from '@tarojs/components';

/** 带橘色竖条的区块标题；action 放在右侧，点按区域 ≥88rpx。 */
export default function Section(props) {
  return (
    <View className={'v2-sec' + (props.className ? ' ' + props.className : '')}>
      <View className='v2-sec-h'>
        <View style={{ minWidth: 0 }}>
          <View className='v2-sec-t'>{props.title}</View>
          {props.sub ? <View className='v2-sec-s'>{props.sub}</View> : null}
        </View>
        {props.action ? (
          <View hoverClass='v2-pressed' hoverStayTime={80} className='v2-more' onClick={props.onAction}>
            {props.action} ›
          </View>
        ) : null}
        {props.right || null}
      </View>
      {props.children}
    </View>
  );
}
