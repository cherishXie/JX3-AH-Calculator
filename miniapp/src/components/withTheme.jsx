import { Component, useEffect, useState } from 'react';
import Taro, { useDidShow } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { useStore } from '../store';
import { applyTheme, getTheme, isTabPage } from '../shared/theme';
import TabLoading from './TabLoading';

class PageBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error: error };
  }

  componentDidCatch(error, info) {
    console.error('[page-error]', error, info);
  }

  backToday() {
    Taro.switchTab({ url: '/pages/overview/index' });
  }

  render() {
    if (this.state.error) {
      return (
        <View className='page'>
          <View className='card' style={{ marginTop: '48rpx' }}>
            <View className='card-head'>
              <View className='flex1'>
                <Text className='card-title'>页面加载失败</Text>
                <Text className='card-sub'>已拦截错误，避免整页黑屏。可返回今日后重试。</Text>
              </View>
            </View>
            <View className='card-body'>
              <Text className='tiny dim' selectable>{String(this.state.error && this.state.error.message || this.state.error || '未知错误')}</Text>
              <View className='btn btn-primary btn-block mt' onClick={this.backToday}>返回今日</View>
            </View>
          </View>
        </View>
      );
    }
    return this.props.children;
  }
}

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
        <PageBoundary>
          <Page {...props} />
        </PageBoundary>
      </View>
    );
  }

  return ThemedPage;
}
