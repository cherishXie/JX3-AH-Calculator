/* 微信端额外提供五行石/公式编辑；小红书端为今日 / 分析 / 我的 3 Tab */
const IS_WEAPP = process.env.TARO_ENV === 'weapp';

const PAGES = [];
if (IS_WEAPP) PAGES.push('pages/guide/index');
PAGES.push(
  'pages/overview/index',
  'pages/prices/index',
  'pages/analysis/index',
  'pages/rank/index'
);

if (IS_WEAPP) PAGES.push('pages/stones/index', 'pages/stone-formula/index', 'pages/trends/index', 'pages/server-trends/index');

// 672 项行情目录只查价/记价，不参与配方收益；放微信分包，避免撑大主包。
const SUB_PACKAGES = IS_WEAPP
  ? [{ root: 'market', pages: ['pages/directory/index'] }]
  : [];

PAGES.push('pages/breakthrough/index', 'pages/recipe/index', 'pages/settings/index');

const TAB_LIST = [
  { pagePath: 'pages/overview/index', text: '今日', iconPath: 'assets/tabs/home-light.png', selectedIconPath: 'assets/tabs/home-on-light.png' },
  { pagePath: 'pages/analysis/index', text: '分析', iconPath: 'assets/tabs/analysis-light.png', selectedIconPath: 'assets/tabs/analysis-on-light.png' }
];

if (IS_WEAPP) {
  TAB_LIST.push({ pagePath: 'pages/stones/index', text: '五行石', iconPath: 'assets/tabs/stones-light.png', selectedIconPath: 'assets/tabs/stones-on-light.png' });
}
TAB_LIST.push({ pagePath: 'pages/settings/index', text: '我的', iconPath: 'assets/tabs/me-light.png', selectedIconPath: 'assets/tabs/me-on-light.png' });

export default {
  // 微信代码质量「组件按需注入」：只注入页面实际用到的自定义组件。
  ...(IS_WEAPP ? { lazyCodeLoading: 'requiredComponents' } : {}),
  pages: PAGES,
  ...(SUB_PACKAGES.length ? { subPackages: SUB_PACKAGES } : {}),
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#f5f5f5',
    navigationBarTitleText: '精力做什么',
    navigationBarTextStyle: 'black',
    backgroundColor: '#f5f5f5'
  },
  tabBar: {
    color: '#64748B',
    selectedColor: '#1D6FE0',
    backgroundColor: '#FFFFFF',
    borderStyle: 'white',
    list: TAB_LIST
  }
};
