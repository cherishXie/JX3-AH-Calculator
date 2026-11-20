import Taro from '@tarojs/taro';

const LIGHT_TABS = [
  { icon: 'assets/tabs/home-light.png', selected: 'assets/tabs/home-on-light.png' },
  { icon: 'assets/tabs/skills-light.png', selected: 'assets/tabs/skills-on-light.png' },
  { icon: 'assets/tabs/prices-light.png', selected: 'assets/tabs/prices-on-light.png' },
  { icon: 'assets/tabs/analysis-light.png', selected: 'assets/tabs/analysis-on-light.png' },
  { icon: 'assets/tabs/stones-light.png', selected: 'assets/tabs/stones-on-light.png' }
];
const DARK_TABS = [
  { icon: 'assets/tabs/home.png', selected: 'assets/tabs/home-on.png' },
  { icon: 'assets/tabs/skills.png', selected: 'assets/tabs/skills-on.png' },
  { icon: 'assets/tabs/prices.png', selected: 'assets/tabs/prices-on.png' },
  { icon: 'assets/tabs/analysis.png', selected: 'assets/tabs/analysis-on.png' },
  { icon: 'assets/tabs/stones.png', selected: 'assets/tabs/stones-on.png' }
];

export function getTheme(state) {
  return state && state.settings && state.settings.theme === 'dark' ? 'dark' : 'light';
}

function safe(fn) {
  try {
    const res = fn();
    if (res && typeof res.catch === 'function') res.catch(function () {});
  } catch (e) { /* 平台不支持时保持静态配置 */ }
}

/** 同步原生导航栏、页面底色、TabBar 颜色与图标。 */
export function applyTheme(theme) {
  const light = theme !== 'dark';
  const mini = process.env.TARO_ENV === 'weapp';
  const bg = light ? '#f5f5f5' : '#020817';
  const fg = light ? '#0f172a' : '#f8fafc';
  const muted = light ? '#64748b' : '#94a3b8';
  if (mini) {
    safe(function () {
      Taro.setNavigationBarColor({
        frontColor: light ? '#000000' : '#ffffff',
        backgroundColor: bg,
        animation: { duration: 0 }
      });
    });
    safe(function () {
      Taro.setBackgroundColor({
        backgroundColor: bg,
        backgroundColorTop: bg,
        backgroundColorBottom: bg
      });
    });
    safe(function () {
      Taro.setTabBarStyle({
        color: muted,
        selectedColor: fg,
        backgroundColor: light ? '#ffffff' : '#0f172a',
        borderStyle: light ? 'white' : 'black'
      });
    });
  }
  if (typeof document !== 'undefined') {
    try {
      document.body.style.backgroundColor = bg;
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', bg);
    } catch (e) { /* H5 环境才更新 */ }
  }
  if (mini) {
    const tabs = light ? LIGHT_TABS : DARK_TABS;
    tabs.forEach(function (item, index) {
      safe(function () {
        Taro.setTabBarItem({
          index: index,
          iconPath: item.icon,
          selectedIconPath: item.selected
        });
      });
    });
  }
}
