import { useEffect } from 'react';
import { View } from '@tarojs/components';
import { useStore } from '../store';
import { applyTheme, getTheme } from '../shared/theme';

/**
 * 给每个页面包一层主题容器：
 * - 默认亮色（store 初始化即为 light）
 * - 切换后立即更新导航栏/TabBar，并把主题变量传给页面
 */
export default function withTheme(Page) {
  function ThemedPage(props) {
    const [state] = useStore();
    const theme = getTheme(state);

    useEffect(function () {
      applyTheme(theme);
    }, [theme]);

    return (
      <View className={'theme-root theme-' + theme}>
        <Page {...props} />
      </View>
    );
  }

  return ThemedPage;
}
