import Taro from '@tarojs/taro';

const WEAPP = process.env.TARO_ENV === 'weapp';
const WEAPP_TAB_ROUTES = [
  { route: 'pages/overview/index', icon: 'home' },
  { route: 'pages/skills/index', icon: 'skills' },
  { route: 'pages/prices/index', icon: 'prices' },
  { route: 'pages/stones/index', icon: 'stones' },
  { route: 'pages/settings/index', icon: 'me' }
];
const XHS_TAB_ROUTES = [
  { route: 'pages/overview/index', icon: 'home' },
  { route: 'pages/skills/index', icon: 'skills' },
  { route: 'pages/prices/index', icon: 'prices' },
  { route: 'pages/settings/index', icon: 'me' }
];
const TAB_ROUTES = (WEAPP ? WEAPP_TAB_ROUTES : XHS_TAB_ROUTES).map(function (t) { return t.route; });
const TAB_ICONS = WEAPP ? WEAPP_TAB_ROUTES : XHS_TAB_ROUTES;

const LIGHT_TABS = TAB_ICONS.map(function (t) {
  return { icon: 'assets/tabs/' + t.icon + '-light.png', selected: 'assets/tabs/' + t.icon + '-on-light.png' };
});
const DARK_TABS = TAB_ICONS.map(function (t) {
  return { icon: 'assets/tabs/' + t.icon + '.png', selected: 'assets/tabs/' + t.icon + '-on.png' };
});

export function isTabPage() {
  try {
    const pages = Taro.getCurrentPages ? Taro.getCurrentPages() : [];
    const current = pages && pages[pages.length - 1];
    const route = current && (current.route || current.__route__);
    return !!route && TAB_ROUTES.indexOf(String(route).replace(/^\//, '')) !== -1;
  } catch (e) {
    return false;
  }
}

export function getTheme(state) {
  const t = state && state.settings && state.settings.theme;
  return t === 'dark' || t === 'tech' ? t : 'light';
}

function safe(fn) {
  try {
    const res = fn();
    if (res && typeof res.catch === 'function') res.catch(function () {});
  } catch (e) { /* 平台不支持时保持静态配置 */ }
}

/**
 * 同步原生导航栏、页面底色、TabBar 颜色与图标。
 *
 * 底部安全区（tabBar 下沿 / Home 指示条）取的是窗口底色，而不是 tabBar 自身
 * 背景色；若窗口底色仍用页面深色 #020817，暗色模式下就会在 tabBar 下方留一条
 * 纯黑长条，亮色模式切换 Tab 时也会闪一下黑底。这里让窗口底部与 tabBar 同色，
 * 并让 `page` 本身保持透明（见 app.css），由窗口底色兜底。
 */
export function applyTheme(theme) {
  const light = theme === 'light';
  const tech = theme === 'tech';
  const mini = process.env.TARO_ENV === 'weapp';
  const bg = light ? '#f5f5f5' : tech ? '#120d2a' : '#020817';
  const tabBg = light ? '#ffffff' : tech ? '#120d2a' : '#0f172a';
  const fg = light ? '#0f172a' : '#f8fafc';
  const muted = light ? '#64748b' : tech ? 'rgba(255,255,255,0.62)' : '#94a3b8';
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
        // 底部安全区必须与 TabBar 同色，否则暗色模式会出现黑色底条。
        backgroundColorBottom: tabBg
      });
    });
    safe(function () {
      Taro.setTabBarStyle({
        color: muted,
        selectedColor: light ? '#1D6FE0' : tech ? '#FD7B4C' : '#5B9CFF',
        backgroundColor: tabBg,
        borderStyle: light ? 'white' : 'black'
      });
    });
  }
  if (typeof document !== 'undefined') {
    try {
      document.body.style.backgroundColor = bg;
      document.body.classList.toggle('theme-tech', tech);
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', bg);
    } catch (e) { /* H5 环境才更新 */ }
  }
  if (mini && isTabPage()) {
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
