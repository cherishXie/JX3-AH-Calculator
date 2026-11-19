/* 微信端额外提供五行石/公式编辑；小红书端保持原有 4 Tab，避免影响现有工具布局 */
const IS_WEAPP = process.env.TARO_ENV === 'weapp';

const PAGES = [
  'pages/overview/index',
  'pages/skills/index',
  'pages/prices/index',
  'pages/analysis/index'
];

if (IS_WEAPP) PAGES.push('pages/stones/index', 'pages/stone-formula/index');

PAGES.push('pages/breakthrough/index', 'pages/recipe/index', 'pages/settings/index');

const TAB_LIST = [
  { pagePath: 'pages/overview/index', text: '总览', iconPath: 'assets/tabs/home.png', selectedIconPath: 'assets/tabs/home-on.png' },
  { pagePath: 'pages/skills/index', text: '技艺', iconPath: 'assets/tabs/skills.png', selectedIconPath: 'assets/tabs/skills-on.png' },
  { pagePath: 'pages/prices/index', text: '价格', iconPath: 'assets/tabs/prices.png', selectedIconPath: 'assets/tabs/prices-on.png' },
  { pagePath: 'pages/analysis/index', text: '分析', iconPath: 'assets/tabs/analysis.png', selectedIconPath: 'assets/tabs/analysis-on.png' }
];

if (IS_WEAPP) {
  TAB_LIST.push({ pagePath: 'pages/stones/index', text: '五行石', iconPath: 'assets/tabs/stones.png', selectedIconPath: 'assets/tabs/stones-on.png' });
}

export default {
  pages: PAGES,
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#020817',
    navigationBarTitleText: '精力做什么',
    navigationBarTextStyle: 'white',
    backgroundColor: '#020817'
  },
  tabBar: {
    color: '#94A3B8',
    selectedColor: '#F8FAFC',
    backgroundColor: '#0F172A',
    borderStyle: 'black',
    list: TAB_LIST
  }
};
