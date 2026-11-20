import { View } from '@tarojs/components';

/**
 * Tab 切换的轻量进度条：不阻塞、不遮挡内容，只给一次「正在切换」的视觉反馈。
 * 每次 show 由父级换 key 重新挂载，动画自然重播。
 */
export default function TabLoading() {
  return (
    <View className='tab-loading' aria-hidden>
      <View className='tab-loading-bar'>
        <View className='tab-loading-dot' />
      </View>
    </View>
  );
}
