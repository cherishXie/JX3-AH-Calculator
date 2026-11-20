import { useEffect, useState } from 'react';
import { useDidShow } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { useStore } from '../store';
import { applyTheme, getTheme, isTabPage } from '../shared/theme';
import TabLoading from './TabLoading';

/**
 * 给每个页面包一层主题容器：
 * - 默认亮色（store 初始化即为 light）
 * - 切换后立即更新导航栏/TabBar，并把主题变量传给页面
 * - Tab 页每次 show 触发一次顶部进度条，缓解切页时的空白/卡顿感
 */
export default function withTheme(Page) {
  function ThemedPage(props) {
    const [state] = useStore();
    const [loadingKey, setLoadingKey] = useState(0);
    const theme = getTheme(state);

    useEffect(function () {
      applyTheme(theme);
    }, [theme]);

    useDidShow(function () {
      applyTheme(theme);
      if (isTabPage()) setLoadingKey(function (n) { return n + 1; });
    });

    return (
      <View className={'theme-root theme-' + theme}>
        {loadingKey ? <TabLoading key={loadingKey} /> : null}
        <Page {...props} />
      </View>
    );
  }

  return ThemedPage;
}
