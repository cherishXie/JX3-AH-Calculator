/* =========================================================================
   剑网三物价助手 · 苍生铸世 50 级生活技艺数据
   数据版本：v3.9-medicine（2026-11-22）
   价格修订：2026-11-27T07:08:49+08:00 · JX3BOX 全服拍卖
   配方：318 条制造 + 21 条采集
   行情：1117 个物品 · 分类 10 个
   五行石：1-8 级拍卖价 + 快速/最优合成 + 7/8 爆率盈亏线
   ========================================================================= */
window.JX3Data = {
  "meta": {
    "game": "剑网3",
    "expansion": "苍生铸世",
    "levelCap": 50,
    "version": "苍生铸世 · 50 级",
    "catalogVersion": "v3.9-medicine",
    "seedVersion": "v3.9-medicine-2026-11-22",
    "updatedAt": "2026-11-22",
    "verifiedAt": "2026-11-22",
    "disclaimer": "制造配方与采集产出名称来自 JX3BOX 当前版本数据；采集按目标材料 + 稀有副产物掉率折算期望产值，稀有掉率为示例。各服务器价格由 scripts/update-jx3-prices.mjs 从 JX3BOX 拍卖自动更新；样本不足、无报价或异常高值回退梦江南示例价，请以本服交易行为准。",
    "sources": [
      {
        "label": "JX3BOX 技艺助手",
        "url": "https://www.jx3box.com/pvg/manufacture",
        "note": "2026-11-18 核验：制造技艺为锻造/缝纫/制药/烹饪/梓匠；玄元星平衫 50 级、200 精力、材料与梦江南昨日均价"
      },
      {
        "label": "官网 9-24 生活技艺焕新",
        "url": "https://news.17173.com/content/09242026/113440485.shtml",
        "note": "技艺等级重返 50 级、等级突破、产物暴击、紫色以上署名、新配方与新地图材料"
      },
      {
        "label": "咸鱼有话说 305 期（11-14）",
        "url": "https://news.17173.com/content/11142026/213539983.shtml",
        "note": "家园采集/梓匠配方等级下调；芦苇、珊瑚、竹子、木料、马草、拼布、木板、器物令、路菜、挂件包"
      },
      {
        "label": "咸鱼有话说306期（11-14）",
        "url": "https://weibo.com/ttarticle/p/show?id=2309405365124419945202",
        "note": "11-19 更新：家园原料/马草采集、拼布/木板/器物令、路菜/挂件包·背部/腰部制造等级降至1级；并非所有生活技艺取消等级限制。"
      },
      {
        "label": "剑网3 苍生铸世公测公告（10-29）",
        "url": "https://ol.3dmgame.com/news/202610/43603.html",
        "note": "50 级数值重构，生活技艺全面重塑，新服「九天」"
      },
      {
        "label": "JX3BOX 物品百科 · 苍生·巨灵磨石（仇恨）",
        "url": "https://www.jx3box.com/item/view/5_89594",
        "note": "核验名目、配方类型与获取途径（铸世行游商店）"
      },
      {
        "label": "JX3BOX 技艺助手 API · 配方详情",
        "url": "https://node.jx3box.com/manufacture/tailoring/1480?client=std",
        "note": "2026-11-18 抓取：等级、精力、材料数量、CreateItemMin/Max 产出范围"
      },
      {
        "label": "JX3BOX 技艺助手 · 当前配方名录",
        "url": "https://www.jx3box.com/pvg/manufacture",
        "note": "缝纫 / 烹饪 / 制药 / 锻造 / 梓匠 五个制造技艺的当前配方"
      },
      {
        "label": "JX3BOX 物品百科 · 云芝",
        "url": "https://www.jx3box.com/item/view/5_30845",
        "note": "神农采集有几率获得，神农专精提高掉落概率"
      },
      {
        "label": "JX3BOX 物品百科 · 鸡血石",
        "url": "https://www.jx3box.com/item/view/5_30856",
        "note": "各类采集额外掉落、采集精英怪产出"
      },
      {
        "label": "JX3BOX 物品百科 · 辉石",
        "url": "https://www.jx3box.com/item/view/5_30850",
        "note": "采金采集有几率获得，采金专精提高掉落概率"
      },
      {
        "label": "JX3BOX 物品百科 · 羊肉/羊杂/羊皮",
        "url": "https://www.jx3box.com/item/view/5_30874",
        "note": "黑山羊掉落：羊肉、羊杂、羊皮"
      },
      {
        "label": "面向萌新的五行石精炼方法与成本（2026-07-29 更新）",
        "url": "https://www.jx3box.com/community/6363",
        "note": "三级 12×一级；四级 3×三级+7×一级；五级 3×四级+2×三级；六级 3×五级+2×四级；含成功率、加工费与精力。"
      },
      {
        "label": "【苍生铸世】版本测试服全身精六汇算（2026-10-08 更新）",
        "url": "https://www.jx3box.com/community/6496",
        "note": "当前赛季测试服精六成本；6 级五行石约 518 金/块（2026-09-10 样本）。"
      },
      {
        "label": "《剑网3》新赛季门派动作与精炼规则持续优化中（2026-09-15）",
        "url": "https://news.17173.com/content/09152026/160051947.shtml",
        "note": "官方说明：这次精炼公式本身没有调整；衣服/下装精六为 16 颗 6 级五行石 100% 成功。"
      },
      {
        "label": "【苍生铸世】开荒必看！新赛季剥七&剥八一图示（2026-11-08 更新）",
        "url": "https://www.jx3box.com/community/6597",
        "note": "当前赛季 7/8 级剥离成本；6 级五行石按 520 金/块样本计算。"
      },
      {
        "label": "五行石精炼方式的成本及毛利计算（2025-03-16 更新）",
        "url": "https://www.jx3box.com/community/2815",
        "note": "快速合成 1-6 级成本/精力表；4 精 6 出 8 的 252 次实验与累积概率表。"
      },
      {
        "label": "JX3BOX 拍卖 · 五行石 1-8 级（2026-11-19）",
        "url": "https://next2.jx3box.com/api/auction/",
        "note": "17 个服务器 1-8 级五行石拍卖样本，用于本模块默认价。"
      },
      {
        "label": "JX3BOX 物品百科 · 马草/百脉根等",
        "url": "https://www.jx3box.com/item/name/百脉根",
        "note": "百脉根/紫花苜蓿/甜象草/皇竹草为神农采集马草；当前缺少可对应的拍卖样本，价格按示例价处理。"
      },
      {
        "label": "JX3BOX · 当前赛季 50 级与等级空缺配方",
        "url": "https://node.jx3box.com/manufactures",
        "note": "2026-11-21 扩容：当前赛季 50 级全部制造配方 + 1–50 级空缺等级代表配方"
      },
      {
        "label": "JX3BOX · 行情目录（家园/消耗品/强化等）",
        "url": "https://node.jx3box.com/item/search",
        "note": "2026-11-21 纳入 672 个有报价的生活技艺相关物品"
      },
      {
        "label": "JX3BOX · 当前赛季烹饪配方",
        "url": "https://node.jx3box.com/manufactures",
        "note": "2026-11-22 补齐 1–50 级烹饪 89 条，含风语 33 条"
      },
      {
        "label": "JX3BOX · 当前赛季制药配方",
        "url": "https://node.jx3box.com/manufactures",
        "note": "2026-11-22 补齐 1–50 级制药 62 条，含风语 28 条"
      }
    ],
    "scope": "收录 154 条当前版本制造配方 + 21 条按材料拆分的当前版本采集点（神农/采金/庖丁）",
    "priceUpdatedAt": "2026-11-27T07:08:49+08:00",
    "priceCoverage": {
      "updated": 769,
      "total": 1117,
      "source": "JX3BOX 拍卖 · 17 个服务器",
      "filtered": 44,
      "noQuote": 348
    },
    "serverCoverage": {
      "s_mengjiangnan": {
        "updated": 769,
        "total": 1117,
        "filtered": 44,
        "noQuote": 348
      },
      "s_pozhenzi": {
        "updated": 453,
        "total": 1117,
        "filtered": 54,
        "noQuote": 664
      },
      "s_dielianhua": {
        "updated": 390,
        "total": 1117,
        "filtered": 34,
        "noQuote": 727
      },
      "s_jiandan": {
        "updated": 421,
        "total": 1117,
        "filtered": 51,
        "noQuote": 696
      },
      "s_youyuelun": {
        "updated": 489,
        "total": 1117,
        "filtered": 53,
        "noQuote": 628
      },
      "s_longzheng": {
        "updated": 603,
        "total": 1117,
        "filtered": 49,
        "noQuote": 514
      },
      "s_changancheng": {
        "updated": 442,
        "total": 1117,
        "filtered": 36,
        "noQuote": 675
      },
      "s_douzhuang": {
        "updated": 470,
        "total": 1117,
        "filtered": 51,
        "noQuote": 647
      },
      "s_qiankun": {
        "updated": 571,
        "total": 1117,
        "filtered": 58,
        "noQuote": 546
      },
      "s_weiwo": {
        "updated": 762,
        "total": 1117,
        "filtered": 50,
        "noQuote": 355
      },
      "s_juedai": {
        "updated": 558,
        "total": 1117,
        "filtered": 52,
        "noQuote": 559
      },
      "s_tianeping": {
        "updated": 726,
        "total": 1117,
        "filtered": 55,
        "noQuote": 391
      },
      "s_feilong": {
        "updated": 371,
        "total": 1117,
        "filtered": 65,
        "noQuote": 746
      },
      "s_jiutian": {
        "updated": 232,
        "total": 1117,
        "filtered": 52,
        "noQuote": 885
      },
      "s_meijianxue": {
        "updated": 321,
        "total": 1117,
        "filtered": 52,
        "noQuote": 796
      },
      "s_shanhai": {
        "updated": 272,
        "total": 1117,
        "filtered": 23,
        "noQuote": 845
      },
      "s_aoxue": {
        "updated": 191,
        "total": 1117,
        "filtered": 24,
        "noQuote": 926
      }
    },
    "stonePriceUpdatedAt": "2026-11-27T07:08:49+08:00",
    "stoneVerifiedAt": "2026-11-19",
    "categories": [
      {
        "id": "equipment",
        "name": "装备/成品"
      },
      {
        "id": "homeland",
        "name": "家园"
      },
      {
        "id": "consumable",
        "name": "消耗品"
      },
      {
        "id": "enhance",
        "name": "物品强化"
      },
      {
        "id": "material",
        "name": "材料"
      },
      {
        "id": "package",
        "name": "包裹"
      },
      {
        "id": "trinket",
        "name": "挂件/小玩意"
      },
      {
        "id": "mount",
        "name": "坐骑"
      },
      {
        "id": "treasure",
        "name": "宝箱/钥匙"
      },
      {
        "id": "other",
        "name": "其他"
      }
    ]
  },
  "tiers": [
    {
      "id": 1,
      "name": "凡品",
      "color": "#94A3B8",
      "text": "白"
    },
    {
      "id": 2,
      "name": "良品",
      "color": "#4ADE80",
      "text": "绿"
    },
    {
      "id": 3,
      "name": "上品",
      "color": "#60A5FA",
      "text": "蓝"
    },
    {
      "id": 4,
      "name": "精品",
      "color": "#C084FC",
      "text": "紫"
    },
    {
      "id": 5,
      "name": "极品",
      "color": "#FBBF24",
      "text": "橙"
    }
  ],
  "skills": [
    {
      "id": "shennong",
      "name": "神农",
      "type": "gather",
      "verb": "采集",
      "icon": "leaf",
      "color": "#2E9E78",
      "desc": "采集紫苏、黄花菜、鱼腥草、虫草、甘草、芍药、珊瑚与马草（百脉根、紫花苜蓿、甜象草、皇竹草）等草药，并有几率获得云芝、鸡血石；掉率与专精影响期望产值。"
    },
    {
      "id": "caijin",
      "name": "采金",
      "type": "gather",
      "verb": "采集",
      "icon": "pickaxe",
      "color": "#D99A2B",
      "desc": "开采铁矿、铜矿、锡矿、铅锌矿、金沙、青石与辉石，并有几率获得鸡血石；掉率影响期望产值。"
    },
    {
      "id": "paoding",
      "name": "庖丁",
      "type": "gather",
      "verb": "庖丁",
      "icon": "knife",
      "color": "#D45A8A",
      "desc": "庖丁黑山羊、山野野兽与河鲜，获得羊肉、羊杂、羊皮、精肉、骨头、血、杂碎与鱼肉。"
    },
    {
      "id": "duanzao",
      "name": "锻造",
      "type": "craft",
      "verb": "锻造",
      "icon": "hammer",
      "color": "#1D6FE0",
      "desc": "打造武器、防具、磨石与熔锭。当前版本制造技艺为锻造（旧称铸造）。"
    },
    {
      "id": "fengren",
      "name": "缝纫",
      "type": "craft",
      "verb": "缝纫",
      "icon": "thread",
      "color": "#A75BE0",
      "desc": "制作玄元/风语装备、附魔绣、背包、挂件包与隔音帐。"
    },
    {
      "id": "zhiyao",
      "name": "制药",
      "type": "craft",
      "verb": "制药",
      "icon": "flask",
      "color": "#2AA5B8",
      "desc": "制作万灵丹、固阵丹、截元丹等药品与药引材料。"
    },
    {
      "id": "pengren",
      "name": "烹饪",
      "type": "craft",
      "verb": "烹饪",
      "icon": "pot",
      "color": "#E06A2E",
      "desc": "制作宴席、路菜、汤品与烹饪材料。"
    },
    {
      "id": "zijiang",
      "name": "梓匠",
      "type": "craft",
      "verb": "梓匠",
      "icon": "home",
      "color": "#7A9E2E",
      "desc": "苍生铸世家园制造：木板、卯榫、鱼胶、器物令与家具景观。"
    }
  ],
  "items": [
    {
      "id": "xuan_yuan_shan",
      "name": "玄元星平衫",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 30811.87,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "7_112590",
      "category": "equipment",
      "life": true
    },
    {
      "id": "dimai",
      "name": "地脉玄元",
      "skillId": "fengren",
      "kind": "material",
      "tier": 4,
      "source": "交易行",
      "base": 79999,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "gameKey": "5_89566",
      "category": "material",
      "life": true
    },
    {
      "id": "fengwangjiang",
      "name": "蜂王浆",
      "skillId": "fengren",
      "kind": "material",
      "tier": 4,
      "source": "交易行",
      "base": 191.96,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010327,
      "gameKey": "5_30854",
      "category": "material",
      "life": true
    },
    {
      "id": "shoupijiao",
      "name": "兽皮胶",
      "skillId": "fengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 70.6,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010278,
      "gameKey": "5_30851",
      "category": "material",
      "life": true
    },
    {
      "id": "qicaixian",
      "name": "七彩线",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 140,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010280,
      "gameKey": "5_89960",
      "category": "material",
      "life": true
    },
    {
      "id": "bairanxian",
      "name": "百染线",
      "skillId": "fengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 3.4,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795006664,
      "gameKey": "5_10175",
      "category": "other",
      "life": true
    },
    {
      "id": "xuan_yuan_xie",
      "name": "玄元星平鞋",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 30811.87,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "7_112572",
      "category": "equipment",
      "life": true
    },
    {
      "id": "xuan_yuan_wan",
      "name": "玄元星平护腕",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 38743.64,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "7_112560",
      "category": "equipment",
      "life": true
    },
    {
      "id": "fengyu_yi",
      "name": "风语·衣·绣（气血）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 1132.58,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794927575,
      "gameKey": "5_71208",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_m_5_30852",
      "name": "猫眼石",
      "skillId": "fengren",
      "kind": "material",
      "tier": 4,
      "source": "交易行",
      "base": 16.99,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010379,
      "gameKey": "5_30852",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_30853",
      "name": "珠贝母",
      "skillId": "fengren",
      "kind": "material",
      "tier": 4,
      "source": "交易行",
      "base": 91.38,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010341,
      "gameKey": "5_30853",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_30828",
      "name": "宝石",
      "skillId": "fengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 4.79,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010050,
      "gameKey": "5_30828",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_89165",
      "name": "绢带",
      "skillId": "fengren",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 10.64,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794990866,
      "gameKey": "5_89165",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_32000",
      "name": "棉线",
      "skillId": "fengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.6,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795002219,
      "gameKey": "5_32000",
      "category": "material",
      "life": true
    },
    {
      "id": "guajian_bei",
      "name": "挂件包·背部",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 52.73,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009827,
      "gameKey": "5_7165",
      "category": "package",
      "life": true
    },
    {
      "id": "baihua_bu",
      "name": "百花布",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 80,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010253,
      "gameKey": "5_89956",
      "category": "material",
      "life": true
    },
    {
      "id": "guajian_yao",
      "name": "挂件包·腰部",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 95.49,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009836,
      "gameKey": "5_7166",
      "category": "package",
      "life": true
    },
    {
      "id": "shuran_bu",
      "name": "蜀染布",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 108.13,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009947,
      "gameKey": "5_89957",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_32001",
      "name": "纺丝",
      "skillId": "fengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.57,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794992985,
      "gameKey": "5_32001",
      "category": "material",
      "life": true
    },
    {
      "id": "shuran_bag",
      "name": "蜀染布包",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 36.99,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794993159,
      "gameKey": "8_53",
      "category": "package",
      "life": true
    },
    {
      "id": "m_m_5_10173",
      "name": "百股线",
      "skillId": "fengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 32.99,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795002227,
      "gameKey": "5_10173",
      "category": "other",
      "life": true
    },
    {
      "id": "jinfeng_bag",
      "name": "锦缝春山囊",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 7357.5,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794876994,
      "gameKey": "8_36275",
      "category": "package",
      "life": true
    },
    {
      "id": "wuseshi",
      "name": "五色石",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 110,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795000705,
      "gameKey": "5_89958",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_30856",
      "name": "鸡血石",
      "skillId": "caijin",
      "kind": "material",
      "tier": 4,
      "source": "采集",
      "base": 16,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010398,
      "gameKey": "5_30856",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_30855",
      "name": "沉香木",
      "skillId": "fengren",
      "kind": "material",
      "tier": 4,
      "source": "交易行",
      "base": 159.82,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010337,
      "gameKey": "5_30855",
      "category": "material",
      "life": true
    },
    {
      "id": "geyin_zhang",
      "name": "隔音帐",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 129.5,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009564,
      "gameKey": "5_71422",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_89298",
      "name": "青魄玉",
      "skillId": "fengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 41.48,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010392,
      "gameKey": "5_89298",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_30679",
      "name": "硼砂",
      "skillId": "fengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 18.07,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010303,
      "gameKey": "5_30679",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_32004",
      "name": "石灰",
      "skillId": "fengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 3.61,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794991076,
      "gameKey": "5_32004",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_30847",
      "name": "银鳞",
      "skillId": "fengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 10.87,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010372,
      "gameKey": "5_30847",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_30846",
      "name": "玛瑙",
      "skillId": "fengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 1.42,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010364,
      "gameKey": "5_30846",
      "category": "material",
      "life": true
    },
    {
      "id": "yinsi_duan",
      "name": "银丝缎",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 120.41,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010131,
      "gameKey": "5_89959",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_32003",
      "name": "百花线",
      "skillId": "fengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 3.61,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794928908,
      "gameKey": "5_32003",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_30848",
      "name": "紫檀",
      "skillId": "fengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 18.04,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010254,
      "gameKey": "5_30848",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_32002",
      "name": "金线",
      "skillId": "fengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.66,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794992989,
      "gameKey": "5_32002",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_7_112589",
      "name": "玄元木声衫",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 34789.34,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "7_112589",
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_m_5_30850",
      "name": "辉石",
      "skillId": "caijin",
      "kind": "material",
      "tier": 3,
      "source": "采集",
      "base": 158.81,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010355,
      "gameKey": "5_30850",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_7_112588",
      "name": "玄元松绿衫",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 42041.09,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "7_112588",
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_m_5_30845",
      "name": "云芝",
      "skillId": "shennong",
      "kind": "material",
      "tier": 3,
      "source": "采集",
      "base": 199.99,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010399,
      "gameKey": "5_30845",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_31231",
      "name": "绝世上衣·【寒】",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 6739.79,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "5_31231",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_31397",
      "name": "蜃楼珠",
      "skillId": "fengren",
      "kind": "material",
      "tier": 4,
      "source": "交易行",
      "base": 0.94,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008398,
      "gameKey": "5_31397",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_89433",
      "name": "蜀锦绣·腕（身法）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 4297.97,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794928812,
      "gameKey": "5_89433",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_m_5_89435",
      "name": "蜀锦绣·腕（力道）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 5747.28,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010291,
      "gameKey": "5_89435",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_m_5_31253",
      "name": "寻踪觅宝·护手",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 530.22,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795001071,
      "gameKey": "5_31253",
      "category": "enhance",
      "life": true
    },
    {
      "id": "tongpao_fan",
      "name": "同袍营幡",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 4400,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "gameKey": "5_90033",
      "category": "other",
      "life": true
    },
    {
      "id": "m_m_5_30844",
      "name": "黄花菜",
      "skillId": "shennong",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 0.5,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010373,
      "gameKey": "5_30844",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_89166",
      "name": "黄蜡",
      "skillId": "fengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 0.01,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "5_89166",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_89568",
      "name": "璧·苍生",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 37783.26,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "5_89568",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_7_112569",
      "name": "玄元烽火鞋",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 36377.81,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "7_112569",
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_m_5_90338",
      "name": "境华",
      "skillId": "fengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 0.1,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "seed",
      "priceAt": 1795006138,
      "gameKey": "5_90338",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_7_112568",
      "name": "玄元赤地鞋",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 37121.15,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "7_112568",
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_m_5_31239",
      "name": "绝世鞋子·【寒】",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 4311.98,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "5_31239",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_7_112556",
      "name": "玄元赤地护腕",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 35999.4,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "7_112556",
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_m_7_112557",
      "name": "玄元烽火护腕",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 38428.18,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "7_112557",
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_m_5_31235",
      "name": "绝世护腕·【寒】",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 4681.69,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "5_31235",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_90210",
      "name": "驾驾伪装",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 500.14,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "gameKey": "5_90210",
      "category": "other",
      "life": true
    },
    {
      "id": "m_m_5_35718",
      "name": "麻絮",
      "skillId": "fengren",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 16.09,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794991184,
      "gameKey": "5_35718",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_35719",
      "name": "滑石粉",
      "skillId": "fengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 32.28,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794991189,
      "gameKey": "5_35719",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_30873",
      "name": "羊皮",
      "skillId": "paoding",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 32.82,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010327,
      "gameKey": "5_30873",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_90205",
      "name": "哼唧伪装",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 67.01,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794998574,
      "gameKey": "5_90205",
      "category": "other",
      "life": true
    },
    {
      "id": "m_m_8_614",
      "name": "灯笼",
      "skillId": "fengren",
      "kind": "product",
      "tier": 1,
      "source": "制造",
      "base": 95.98,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794978879,
      "gameKey": "8_614",
      "category": "trinket",
      "life": true
    },
    {
      "id": "shanshui_juan",
      "name": "山水刺绣手绢",
      "skillId": "fengren",
      "kind": "product",
      "tier": 2,
      "source": "制造",
      "base": 85,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794992074,
      "gameKey": "5_2466",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_3819",
      "name": "刺绣手绢",
      "skillId": "fengren",
      "kind": "product",
      "tier": 2,
      "source": "制造",
      "base": 100,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794996894,
      "gameKey": "5_3819",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_3779",
      "name": "小香包",
      "skillId": "fengren",
      "kind": "product",
      "tier": 1,
      "source": "制造",
      "base": 9.99,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794930555,
      "gameKey": "5_3779",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_8_36148",
      "name": "彩缕花绫包",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 1389.3,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010198,
      "gameKey": "8_36148",
      "category": "package",
      "life": true
    },
    {
      "id": "m_m_8_19",
      "name": "棉布包",
      "skillId": "fengren",
      "kind": "product",
      "tier": 1,
      "source": "制造",
      "base": 0.01,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794994263,
      "gameKey": "8_19",
      "category": "package",
      "life": true
    },
    {
      "id": "m_m_5_89475",
      "name": "河洛纹·鞋（跑速）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 1777.66,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "gameKey": "5_89475",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_m_5_89474",
      "name": "河洛纹·衣（御劲）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 1500,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795007088,
      "gameKey": "5_89474",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_m_5_3820",
      "name": "丹青染布画",
      "skillId": "fengren",
      "kind": "product",
      "tier": 2,
      "source": "制造",
      "base": 1.27,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794916585,
      "gameKey": "5_3820",
      "category": "consumable",
      "life": true
    },
    {
      "id": "shuizhuyu",
      "name": "百炼水煮鱼",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 3562.88,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "5_89321",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_30827",
      "name": "鱼肉",
      "skillId": "paoding",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 1.3,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010386,
      "gameKey": "5_30827",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_89970",
      "name": "酱料",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 204.97,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010261,
      "gameKey": "5_89970",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_32014",
      "name": "今朝醉",
      "skillId": "pengren",
      "kind": "material",
      "tier": 4,
      "source": "交易行",
      "base": 126.84,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794893373,
      "gameKey": "5_32014",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_31978",
      "name": "胡椒粉",
      "skillId": "pengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.64,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794962296,
      "gameKey": "5_31978",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_31985",
      "name": "红辣椒",
      "skillId": "pengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.6,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795006788,
      "gameKey": "5_31985",
      "category": "material",
      "life": true
    },
    {
      "id": "lucai",
      "name": "路菜",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 18.24,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010396,
      "gameKey": "5_76622",
      "category": "other",
      "life": true
    },
    {
      "id": "m_m_5_1831",
      "name": "西市腔",
      "skillId": "pengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 15.95,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009469,
      "gameKey": "5_1831",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_31973",
      "name": "精制面粉",
      "skillId": "pengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.65,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009297,
      "gameKey": "5_31973",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_30849",
      "name": "人参",
      "skillId": "pengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 5.82,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010399,
      "gameKey": "5_30849",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_71293",
      "name": "风语·老火骨汤",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 51.74,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795007613,
      "gameKey": "5_71293",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_30826",
      "name": "骨头",
      "skillId": "paoding",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 0.5,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009904,
      "gameKey": "5_30826",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_30825",
      "name": "血",
      "skillId": "paoding",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 0.14,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010366,
      "gameKey": "5_30825",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_89171",
      "name": "藤椒",
      "skillId": "pengren",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 10.68,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794941188,
      "gameKey": "5_89171",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_31974",
      "name": "料酒",
      "skillId": "pengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.65,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008321,
      "gameKey": "5_31974",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_31968",
      "name": "菌菇",
      "skillId": "pengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 5.49,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794752373,
      "gameKey": "5_31968",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_71292",
      "name": "风语·三鲜汤",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 45.6,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795003150,
      "gameKey": "5_71292",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_30824",
      "name": "精肉",
      "skillId": "paoding",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 0.29,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010246,
      "gameKey": "5_30824",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_31967",
      "name": "新鲜冬瓜",
      "skillId": "pengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.63,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794843040,
      "gameKey": "5_31967",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_71281",
      "name": "风语·鲜肉包子",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 22.4,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795007591,
      "gameKey": "5_71281",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_30823",
      "name": "碎肉",
      "skillId": "pengren",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 0.87,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009941,
      "gameKey": "5_30823",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_31969",
      "name": "老姜",
      "skillId": "pengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.65,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794919677,
      "gameKey": "5_31969",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_71277",
      "name": "风语·水煮肉片",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 40.04,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794973471,
      "gameKey": "5_71277",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_89315",
      "name": "云中珍馐宴（通用）",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 1344.5,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010165,
      "gameKey": "5_89315",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_1829",
      "name": "竹叶青",
      "skillId": "pengren",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 0.22,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "seed",
      "priceAt": 1794939525,
      "gameKey": "5_1829",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_89969",
      "name": "馅料",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 144.91,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010197,
      "gameKey": "5_89969",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_31976",
      "name": "调料",
      "skillId": "pengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.7,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008253,
      "gameKey": "5_31976",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_89303",
      "name": "巴渝珍馐宴（通用）",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 4587.78,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795006911,
      "gameKey": "5_89303",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_89971",
      "name": "卤料",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 204.04,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009602,
      "gameKey": "5_89971",
      "category": "consumable",
      "life": true
    },
    {
      "id": "lushui",
      "name": "露水",
      "skillId": "shennong",
      "kind": "material",
      "tier": 3,
      "source": "采集",
      "base": 14.31,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009938,
      "gameKey": "5_30840",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_30875",
      "name": "羊杂",
      "skillId": "paoding",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 0.78,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010322,
      "gameKey": "5_30875",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_30829",
      "name": "蛋",
      "skillId": "pengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 3.75,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794941224,
      "gameKey": "5_30829",
      "category": "other",
      "life": true
    },
    {
      "id": "m_m_5_30843",
      "name": "鱼腥草",
      "skillId": "shennong",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 0.56,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010388,
      "gameKey": "5_30843",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_30874",
      "name": "羊肉",
      "skillId": "paoding",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 30.9,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010392,
      "gameKey": "5_30874",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_30842",
      "name": "紫苏",
      "skillId": "shennong",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 0.6,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010395,
      "gameKey": "5_30842",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_5270",
      "name": "饺子馅",
      "skillId": "pengren",
      "kind": "product",
      "tier": 1,
      "source": "制造",
      "base": 0.6,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010139,
      "gameKey": "5_5270",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_31970",
      "name": "大葱",
      "skillId": "pengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.66,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795000652,
      "gameKey": "5_31970",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_5269",
      "name": "饺子皮",
      "skillId": "pengren",
      "kind": "product",
      "tier": 1,
      "source": "制造",
      "base": 0.02,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009216,
      "gameKey": "5_5269",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_31977",
      "name": "生粉",
      "skillId": "pengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.69,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794931002,
      "gameKey": "5_31977",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_31013",
      "name": "转神餐",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 189,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010220,
      "gameKey": "5_31013",
      "category": "consumable",
      "life": true
    },
    {
      "id": "gancao",
      "name": "甘草",
      "skillId": "shennong",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 2.49,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010071,
      "gameKey": "5_30830",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_31012",
      "name": "佛跳墙",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 337.9,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010087,
      "gameKey": "5_31012",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_90034",
      "name": "安营炊鼎",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 8000,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "gameKey": "5_90034",
      "category": "other",
      "life": true
    },
    {
      "id": "m_m_5_89172",
      "name": "酥油",
      "skillId": "pengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 21.86,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794917851,
      "gameKey": "5_89172",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_89304",
      "name": "巴山夜雨宴（外攻）",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 4121,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010288,
      "gameKey": "5_89304",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_24212",
      "name": "炼狱水煮鱼",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 879.3,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "5_24212",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_26057",
      "name": "膘然心动",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 2000,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795002356,
      "gameKey": "5_26057",
      "category": "other",
      "life": true
    },
    {
      "id": "m_m_5_26231",
      "name": "如意饺",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 1.6,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794993063,
      "gameKey": "5_26231",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_89352",
      "name": "云州刀削面",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 678.96,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010165,
      "gameKey": "5_89352",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_89350",
      "name": "山城毛血旺",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 618.72,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009691,
      "gameKey": "5_89350",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_71269",
      "name": "风语·红烧排骨",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 135.32,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009712,
      "gameKey": "5_71269",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_89346",
      "name": "云芝竹沥羹",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 748.7,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010261,
      "gameKey": "5_89346",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_89167",
      "name": "竹沥",
      "skillId": "pengren",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 10.62,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795006909,
      "gameKey": "5_89167",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_31984",
      "name": "老豆腐",
      "skillId": "pengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.01,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "seed",
      "priceAt": 1794962976,
      "gameKey": "5_31984",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_89348",
      "name": "开锅豆腐",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 190.6,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010162,
      "gameKey": "5_89348",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_71285",
      "name": "风语·杂锦鱼球粥",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 105.86,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010381,
      "gameKey": "5_71285",
      "category": "consumable",
      "life": true
    },
    {
      "id": "jieyuan_dan",
      "name": "截元丹",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 36.99,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008464,
      "gameKey": "5_31101",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_30836",
      "name": "虫草",
      "skillId": "shennong",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 0.64,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010398,
      "gameKey": "5_30836",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_30832",
      "name": "千里香",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 1.2,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010309,
      "gameKey": "5_30832",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_30833",
      "name": "枸杞",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 1.65,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010330,
      "gameKey": "5_30833",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_31997",
      "name": "葫芦",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 2.69,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009842,
      "gameKey": "5_31997",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_89324",
      "name": "竹沥凝心饮",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 219.49,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010233,
      "gameKey": "5_89324",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_30831",
      "name": "大黄",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 1,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010262,
      "gameKey": "5_30831",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_89973",
      "name": "药丸",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 187,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009958,
      "gameKey": "5_89973",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_31996",
      "name": "药囊",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.66,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010161,
      "gameKey": "5_31996",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_71241",
      "name": "风语·中品万灵丹",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 111.35,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794740009,
      "gameKey": "5_71241",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_71240",
      "name": "风语·上品万灵丹",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 48,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010194,
      "gameKey": "5_71240",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_31995",
      "name": "药罐",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.69,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010188,
      "gameKey": "5_31995",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_71266",
      "name": "风语·中品大力丸",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 55.57,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795003166,
      "gameKey": "5_71266",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_30838",
      "name": "彼岸花",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 0.71,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008734,
      "gameKey": "5_30838",
      "category": "material",
      "life": true
    },
    {
      "id": "shanhu",
      "name": "珊瑚",
      "skillId": "shennong",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 3.04,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010296,
      "gameKey": "5_30839",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_6646",
      "name": "药料",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 3.56,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794990998,
      "gameKey": "5_6646",
      "category": "other",
      "life": true
    },
    {
      "id": "m_m_5_89333",
      "name": "云州固阵丹",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 399,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "gameKey": "5_89333",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_30835",
      "name": "五味子",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 2.53,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010369,
      "gameKey": "5_30835",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_89974",
      "name": "药膏",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 70.73,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794997034,
      "gameKey": "5_89974",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_6648",
      "name": "药用黄丹",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 1.45,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010386,
      "gameKey": "5_6648",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_71267",
      "name": "风语·中品静心丸",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 58,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008563,
      "gameKey": "5_71267",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_90029",
      "name": "回神丹",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 389.74,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "gameKey": "5_90029",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_89168",
      "name": "药曲",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 22.29,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794927368,
      "gameKey": "5_89168",
      "category": "material",
      "life": true
    },
    {
      "id": "yaoyin",
      "name": "药引",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 197,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010315,
      "gameKey": "5_89972",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_31100",
      "name": "金针·影",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 12.07,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795005591,
      "gameKey": "5_31100",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_89322",
      "name": "竹沥清心露",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 388.88,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795007496,
      "gameKey": "5_89322",
      "category": "consumable",
      "life": true
    },
    {
      "id": "shaoyao",
      "name": "芍药",
      "skillId": "shennong",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 2.87,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010229,
      "gameKey": "5_30837",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_90206",
      "name": "踏波露",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 33.16,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795007570,
      "gameKey": "5_90206",
      "category": "other",
      "life": true
    },
    {
      "id": "m_m_5_31102",
      "name": "飞鱼丸",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 0.13,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795007742,
      "gameKey": "5_31102",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_30834",
      "name": "川贝",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 2.56,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010273,
      "gameKey": "5_30834",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_31998",
      "name": "金针",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 3.98,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794903393,
      "gameKey": "5_31998",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_90035",
      "name": "定魂丹砂",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 6189.88,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010272,
      "gameKey": "5_90035",
      "category": "other",
      "life": true
    },
    {
      "id": "m_m_5_89328",
      "name": "巴山凝神丹",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 847.67,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008257,
      "gameKey": "5_89328",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_89332",
      "name": "河洛生息丹",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 770.16,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795002008,
      "gameKey": "5_89332",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_89340",
      "name": "巴山凝神散",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 100.42,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010228,
      "gameKey": "5_89340",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_89325",
      "name": "五气归元丹",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 796.07,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010334,
      "gameKey": "5_89325",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_71258",
      "name": "风语·上品健体丸",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 74.46,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010331,
      "gameKey": "5_71258",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_31999",
      "name": "银针",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 3.58,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794987490,
      "gameKey": "5_31999",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_89327",
      "name": "五气培元丸",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 94.86,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010166,
      "gameKey": "5_89327",
      "category": "consumable",
      "life": true
    },
    {
      "id": "juling_chou",
      "name": "苍生·巨灵磨石（仇恨）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 135.64,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "5_89378",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_m_5_89966",
      "name": "镔铁锭",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 66.91,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795005670,
      "gameKey": "5_89966",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_10176",
      "name": "炼火石",
      "skillId": "duanzao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 5.99,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794929644,
      "gameKey": "5_10176",
      "category": "other",
      "life": true
    },
    {
      "id": "m_m_5_31991",
      "name": "火墨",
      "skillId": "duanzao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 1.19,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794934155,
      "gameKey": "5_31991",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_89377",
      "name": "苍生·絮泊磨石（疗伤）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 350,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795007041,
      "gameKey": "5_89377",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_m_5_89968",
      "name": "铅锭",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 154,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008858,
      "gameKey": "5_89968",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_31993",
      "name": "煤炭",
      "skillId": "duanzao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 1.19,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794941608,
      "gameKey": "5_31993",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_89376",
      "name": "苍生·坠宵磨石（攻击）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 399.64,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008362,
      "gameKey": "5_89376",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_m_5_89965",
      "name": "锡锭",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 109.74,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010396,
      "gameKey": "5_89965",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_31992",
      "name": "木炭",
      "skillId": "duanzao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 5.83,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794993574,
      "gameKey": "5_31992",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_89375",
      "name": "苍生·瀑沙磨石（武伤）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 111.66,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795004468,
      "gameKey": "5_89375",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_m_5_89963",
      "name": "黄铜锭",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 74,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008513,
      "gameKey": "5_89963",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_89370",
      "name": "苍生·巨灵熔锭（仇恨）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 612.75,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "5_89370",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_m_5_71192",
      "name": "风语·巨灵磨石（仇恨）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 25.92,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "gameKey": "5_71192",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_m_5_89169",
      "name": "松脂",
      "skillId": "duanzao",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 10.62,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794979874,
      "gameKey": "5_89169",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_71188",
      "name": "风语·兵·甲（仇恨）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 341.75,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794830387,
      "gameKey": "5_71188",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_m_5_31994",
      "name": "菜籽油",
      "skillId": "duanzao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 5.69,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794935740,
      "gameKey": "5_31994",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_7_112584",
      "name": "玄元星平帽",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 29202.03,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "7_112584",
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_m_5_89962",
      "name": "密银锭",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 59.55,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008938,
      "gameKey": "5_89962",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_7_112566",
      "name": "玄元星平护腰",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 36576.28,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "7_112566",
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_m_7_112578",
      "name": "玄元星平裤",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 33036.64,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "7_112578",
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_m_5_31139",
      "name": "龙血磨石",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 4399.4,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009997,
      "gameKey": "5_31139",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_m_5_89964",
      "name": "青铜锭",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 67.86,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009262,
      "gameKey": "5_89964",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_10027",
      "name": "素银钥匙",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 2,
      "source": "制造",
      "base": 76.4,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795002501,
      "gameKey": "5_10027",
      "category": "treasure",
      "life": true
    },
    {
      "id": "m_m_5_89961",
      "name": "熟铁锭",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 64.49,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010275,
      "gameKey": "5_89961",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_10029",
      "name": "素银钥匙模",
      "skillId": "duanzao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.03,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "seed",
      "priceAt": 1794882612,
      "gameKey": "5_10029",
      "category": "treasure",
      "life": true
    },
    {
      "id": "tiekuang",
      "name": "铁矿",
      "skillId": "caijin",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 2.82,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009930,
      "gameKey": "5_30677",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_30676",
      "name": "铅锌矿",
      "skillId": "caijin",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 1.82,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010258,
      "gameKey": "5_30676",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_30678",
      "name": "银矿",
      "skillId": "duanzao",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 1.58,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795006870,
      "gameKey": "5_30678",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_30674",
      "name": "铜矿",
      "skillId": "caijin",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 2.98,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009999,
      "gameKey": "5_30674",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_30675",
      "name": "锡矿",
      "skillId": "caijin",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 3.82,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009734,
      "gameKey": "5_30675",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_89967",
      "name": "生铁锭",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 66.47,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795001626,
      "gameKey": "5_89967",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_89367",
      "name": "苍生·瀑沙熔锭（武伤）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 879.88,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795007070,
      "gameKey": "5_89367",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_m_5_6246",
      "name": "青铜钥匙",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 2,
      "source": "制造",
      "base": 0.2,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009751,
      "gameKey": "5_6246",
      "category": "treasure",
      "life": true
    },
    {
      "id": "m_m_5_6249",
      "name": "青铜钥匙模",
      "skillId": "duanzao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.25,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794928656,
      "gameKey": "5_6249",
      "category": "treasure",
      "life": true
    },
    {
      "id": "m_m_7_112575",
      "name": "玄元烽火裤",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 31377,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "7_112575",
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_m_7_112573",
      "name": "玄元风鹤裤",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 90900,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "gameKey": "7_112573",
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_m_5_31209",
      "name": "绝世下装·【兹】",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 4698.26,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "5_31209",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_32787",
      "name": "切玉骨",
      "skillId": "duanzao",
      "kind": "material",
      "tier": 4,
      "source": "交易行",
      "base": 99.86,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794930400,
      "gameKey": "5_32787",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_7_112564",
      "name": "玄元松绿护腰",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 34631.78,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "7_112564",
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_m_7_112561",
      "name": "玄元风鹤护腰",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 33199.08,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "7_112561",
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_m_5_31211",
      "name": "绝世腰带·【兹】",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 3417.94,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "5_31211",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_8_25762",
      "name": "寄青荷",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 3.99,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795005989,
      "gameKey": "8_25762",
      "category": "other",
      "life": true
    },
    {
      "id": "m_m_5_30841",
      "name": "荷叶",
      "skillId": "duanzao",
      "kind": "material",
      "tier": 4,
      "source": "交易行",
      "base": 3.93,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010368,
      "gameKey": "5_30841",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_10172",
      "name": "旦火油",
      "skillId": "duanzao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 8,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "seed",
      "priceAt": 1794858087,
      "gameKey": "5_10172",
      "category": "other",
      "life": true
    },
    {
      "id": "m_m_5_35708",
      "name": "皮革",
      "skillId": "duanzao",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 6.98,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794999418,
      "gameKey": "5_35708",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_8_17541",
      "name": "银龙笼套",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 2,
      "source": "制造",
      "base": 1537.02,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "8_17541",
      "category": "mount",
      "life": true
    },
    {
      "id": "m_m_8_17538",
      "name": "铁纹鞍具",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 2,
      "source": "制造",
      "base": 313.36,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "priceAt": 1794420741,
      "gameKey": "8_17538",
      "category": "mount",
      "life": true
    },
    {
      "id": "m_m_7_112582",
      "name": "玄元松绿帽",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 39887.1,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "7_112582",
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_m_7_112583",
      "name": "玄元木声帽",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 34510.09,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "7_112583",
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_m_5_31210",
      "name": "绝世头饰·【兹】",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 2820.47,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "5_31210",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_90032",
      "name": "定营铁桩",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 1901.21,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "5_90032",
      "category": "other",
      "life": true
    },
    {
      "id": "m_m_5_89170",
      "name": "熟矾",
      "skillId": "duanzao",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 0.01,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "5_89170",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_89567",
      "name": "珠·苍生",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 26321.23,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "5_89567",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_8_632",
      "name": "玄武腰刀",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 2,
      "source": "制造",
      "base": 266.75,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794937799,
      "gameKey": "8_632",
      "category": "trinket",
      "life": true
    },
    {
      "id": "m_m_8_634",
      "name": "青龙腰刀",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 2,
      "source": "制造",
      "base": 305.19,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794837554,
      "gameKey": "8_634",
      "category": "trinket",
      "life": true
    },
    {
      "id": "m_m_8_636",
      "name": "麒麟腰刀",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 2,
      "source": "制造",
      "base": 50.49,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794910021,
      "gameKey": "8_636",
      "category": "trinket",
      "life": true
    },
    {
      "id": "m_m_5_90353",
      "name": "同门饕餮鼎",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 525.04,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "5_90353",
      "category": "other",
      "life": true
    },
    {
      "id": "m_m_5_90257",
      "name": "飞高高",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 72,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "5_90257",
      "category": "other",
      "life": true
    },
    {
      "id": "m_m_5_2578",
      "name": "铜偶",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 1,
      "source": "制造",
      "base": 10.36,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794751102,
      "gameKey": "5_2578",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_6072",
      "name": "鞭炮",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 2,
      "source": "制造",
      "base": 0.05,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794970538,
      "gameKey": "5_6072",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_6068",
      "name": "龙凤呈祥",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 2,
      "source": "制造",
      "base": 8.97,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "priceAt": 1794970526,
      "gameKey": "5_6068",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_m_5_6066",
      "name": "元宝灯",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 2,
      "source": "制造",
      "base": 0.01,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794965005,
      "gameKey": "5_6066",
      "category": "consumable",
      "life": true
    },
    {
      "id": "muban",
      "name": "木板",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 24.89,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010248,
      "gameKey": "5_35712",
      "category": "material",
      "life": true
    },
    {
      "id": "muliao",
      "name": "木料",
      "skillId": "zijiang",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 3.28,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010283,
      "gameKey": "5_35566",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_35707",
      "name": "清漆",
      "skillId": "zijiang",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 11.97,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008984,
      "gameKey": "5_35707",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_35703",
      "name": "绳索",
      "skillId": "zijiang",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 3.57,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008979,
      "gameKey": "5_35703",
      "category": "material",
      "life": true
    },
    {
      "id": "qiwuling",
      "name": "器物令",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 31.95,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010390,
      "gameKey": "5_38831",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_35716",
      "name": "鱼胶",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 16.93,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009057,
      "gameKey": "5_35716",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_35702",
      "name": "黏土",
      "skillId": "zijiang",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.63,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794843051,
      "gameKey": "5_35702",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_35715",
      "name": "篾条",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 13,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008878,
      "gameKey": "5_35715",
      "category": "material",
      "life": true
    },
    {
      "id": "zhuzi",
      "name": "竹子",
      "skillId": "zijiang",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 1.98,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010270,
      "gameKey": "5_35568",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_35567",
      "name": "芦苇杆",
      "skillId": "zijiang",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 1.52,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010369,
      "gameKey": "5_35567",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_35704",
      "name": "油布",
      "skillId": "zijiang",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 3.58,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794999655,
      "gameKey": "5_35704",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_35714",
      "name": "雕花",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 24,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794997916,
      "gameKey": "5_35714",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_35701",
      "name": "石材",
      "skillId": "zijiang",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 3.56,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008270,
      "gameKey": "5_35701",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_35713",
      "name": "卯榫",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 16.22,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010206,
      "gameKey": "5_35713",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_5_35705",
      "name": "楔子",
      "skillId": "zijiang",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 3.57,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794998817,
      "gameKey": "5_35705",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_10_1778",
      "name": "清漆药柜",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 1267.83,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794663425,
      "gameKey": "10_1778",
      "category": "homeland",
      "life": true
    },
    {
      "id": "m_m_10_948",
      "name": "简素椅",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 310.17,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795002116,
      "gameKey": "10_948",
      "category": "homeland",
      "life": true
    },
    {
      "id": "m_m_5_89260",
      "name": "归营旌",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 35000.33,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794847820,
      "gameKey": "5_89260",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_10_1779",
      "name": "锻炉",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 600.82,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794663430,
      "gameKey": "10_1779",
      "category": "homeland",
      "life": true
    },
    {
      "id": "m_m_10_1880",
      "name": "残烛柜架",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 1568.07,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794607481,
      "gameKey": "10_1880",
      "category": "homeland",
      "life": true
    },
    {
      "id": "m_m_10_2034",
      "name": "矩形回纹格",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 1430.11,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794607436,
      "gameKey": "10_2034",
      "category": "homeland",
      "life": true
    },
    {
      "id": "m_m_10_93",
      "name": "葵草席",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 1,
      "source": "制造",
      "base": 38.82,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794948186,
      "gameKey": "10_93",
      "category": "homeland",
      "life": true
    },
    {
      "id": "m_m_10_1882",
      "name": "禅心悬旗",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 1459,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794607513,
      "gameKey": "10_1882",
      "category": "homeland",
      "life": true
    },
    {
      "id": "m_m_5_35717",
      "name": "阎家样",
      "skillId": "zijiang",
      "kind": "material",
      "tier": 4,
      "source": "交易行",
      "base": 1.91,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010380,
      "gameKey": "5_35717",
      "category": "material",
      "life": true
    },
    {
      "id": "m_m_10_2037",
      "name": "铜雕踩球对狮·右",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 1460.83,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794607450,
      "gameKey": "10_2037",
      "category": "homeland",
      "life": true
    },
    {
      "id": "m_m_10_164",
      "name": "素髹桑木灯檠",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 1,
      "source": "制造",
      "base": 110,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794756888,
      "gameKey": "10_164",
      "category": "homeland",
      "life": true
    },
    {
      "id": "m_m_5_52337",
      "name": "地下室·8米木质标准包",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 1111.98,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009015,
      "gameKey": "5_52337",
      "category": "homeland",
      "life": true
    },
    {
      "id": "m_m_5_40232",
      "name": "竹篾篱·套件",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 2600.15,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009638,
      "gameKey": "5_40232",
      "category": "homeland",
      "life": true
    },
    {
      "id": "m_m_5_35772",
      "name": "兖石地墁·套件",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 1219.98,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009762,
      "gameKey": "5_35772",
      "category": "homeland",
      "life": true
    },
    {
      "id": "m_m_5_90211",
      "name": "飞毛腿伪装",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 21.71,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "priceAt": 1794853525,
      "gameKey": "5_90211",
      "category": "other",
      "life": true
    },
    {
      "id": "m_m_5_87917",
      "name": "拼布自选包",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 286.21,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009082,
      "gameKey": "5_87917",
      "category": "homeland",
      "life": true
    },
    {
      "id": "m_m_5_45721",
      "name": "铃兰·混彩",
      "skillId": "zijiang",
      "kind": "material",
      "tier": 4,
      "source": "交易行",
      "base": 128,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "seed",
      "gameKey": "10_1167",
      "category": "homeland",
      "life": true
    },
    {
      "id": "m_m_5_87881",
      "name": "拼布72色全包",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 7400,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008033,
      "gameKey": "5_87881",
      "category": "homeland",
      "life": true
    },
    {
      "id": "zasui",
      "name": "杂碎",
      "skillId": "paoding",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 0.65,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010384,
      "gameKey": "5_30682",
      "category": "material",
      "life": true
    },
    {
      "id": "g_5_30681",
      "name": "金沙",
      "skillId": "caijin",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 0.87,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010393,
      "gameKey": "5_30681",
      "category": "material",
      "life": true
    },
    {
      "id": "g_5_30680",
      "name": "青石",
      "skillId": "caijin",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 1,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010362,
      "gameKey": "5_30680",
      "category": "material",
      "life": true
    },
    {
      "id": "g_ma_baimaigen",
      "name": "百脉根",
      "skillId": "shennong",
      "kind": "material",
      "tier": 1,
      "source": "神农采集 · 马草",
      "base": 1.5,
      "verified": true,
      "origin": "神农采集 · 马草",
      "custom": false,
      "priceSource": "seed",
      "category": "material",
      "life": true
    },
    {
      "id": "g_ma_zihuamuxu",
      "name": "紫花苜蓿",
      "skillId": "shennong",
      "kind": "material",
      "tier": 2,
      "source": "神农采集 · 马草",
      "base": 3,
      "verified": true,
      "origin": "神农采集 · 马草",
      "custom": false,
      "priceSource": "seed",
      "category": "material",
      "life": true
    },
    {
      "id": "g_ma_tianxiangcao",
      "name": "甜象草",
      "skillId": "shennong",
      "kind": "material",
      "tier": 3,
      "source": "神农采集 · 马草",
      "base": 6,
      "verified": true,
      "origin": "神农采集 · 马草",
      "custom": false,
      "priceSource": "seed",
      "category": "material",
      "life": true
    },
    {
      "id": "g_ma_huangzhucao",
      "name": "皇竹草",
      "skillId": "shennong",
      "kind": "material",
      "tier": 4,
      "source": "神农采集 · 马草",
      "base": 12,
      "verified": true,
      "origin": "神农采集 · 马草",
      "custom": false,
      "priceSource": "seed",
      "category": "material",
      "life": true
    },
    {
      "id": "m_x_5_89353",
      "gameKey": "5_89353",
      "name": "酥油烧饼",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 469.98,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89359",
      "gameKey": "5_89359",
      "name": "酥油烧饼·精",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 800.94,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89354",
      "gameKey": "5_89354",
      "name": "菹菜拌腱肉",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89360",
      "gameKey": "5_89360",
      "name": "菹菜拌腱肉·精",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89305",
      "gameKey": "5_89305",
      "name": "嘉陵月夜宴（内攻）",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 4599.87,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89311",
      "gameKey": "5_89311",
      "name": "未央宫庭宴（内攻）",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89306",
      "gameKey": "5_89306",
      "name": "椒香暖玉宴（治疗）",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89312",
      "gameKey": "5_89312",
      "name": "渭水清和宴（治疗）",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89307",
      "gameKey": "5_89307",
      "name": "红汤沸鼎宴（仇恨）",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89313",
      "gameKey": "5_89313",
      "name": "秦川鼎烹宴（仇恨）",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89308",
      "gameKey": "5_89308",
      "name": "朝天门宴（防御）",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 5080,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89314",
      "gameKey": "5_89314",
      "name": "函谷关宴（防御）",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89349",
      "gameKey": "5_89349",
      "name": "渝州小面",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 633.68,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89355",
      "gameKey": "5_89355",
      "name": "渝州小面·精",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 1200.38,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89351",
      "gameKey": "5_89351",
      "name": "藤椒鱼片",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 533.17,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89357",
      "gameKey": "5_89357",
      "name": "藤椒鱼片·精",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 999.11,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89434",
      "gameKey": "5_89434",
      "name": "蜀锦绣·腕（元气）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 3296.92,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89448",
      "gameKey": "5_89448",
      "name": "云锦绣·腕（元气）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 35999,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89436",
      "gameKey": "5_89436",
      "name": "蜀锦绣·腕（根骨）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 4666.82,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89450",
      "gameKey": "5_89450",
      "name": "云锦绣·腕（根骨）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 23999.21,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89437",
      "gameKey": "5_89437",
      "name": "蜀锦绣·腕（仇恨）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89451",
      "gameKey": "5_89451",
      "name": "云锦绣·腕（仇恨）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89438",
      "gameKey": "5_89438",
      "name": "蜀锦绣·腕（破防）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 4999.86,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89452",
      "gameKey": "5_89452",
      "name": "云锦绣·腕（破防）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 28000,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89439",
      "gameKey": "5_89439",
      "name": "蜀锦绣·腕（会心）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 3700,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89453",
      "gameKey": "5_89453",
      "name": "云锦绣·腕（会心）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 26999.79,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89440",
      "gameKey": "5_89440",
      "name": "蜀锦绣·腕（无双）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 3659.99,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89454",
      "gameKey": "5_89454",
      "name": "云锦绣·腕（无双）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 19990,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89441",
      "gameKey": "5_89441",
      "name": "蜀锦绣·鞋（攻击）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 4199.98,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89455",
      "gameKey": "5_89455",
      "name": "云锦绣·鞋（攻击）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 26000,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89442",
      "gameKey": "5_89442",
      "name": "蜀锦绣·鞋（治疗）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89456",
      "gameKey": "5_89456",
      "name": "云锦绣·鞋（治疗）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 25555.55,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89443",
      "gameKey": "5_89443",
      "name": "蜀锦绣·鞋（加速）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 4488.99,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89457",
      "gameKey": "5_89457",
      "name": "云锦绣·鞋（加速）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89444",
      "gameKey": "5_89444",
      "name": "蜀锦绣·衣（体质）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 5500.5,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89458",
      "gameKey": "5_89458",
      "name": "云锦绣·衣（体质）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 15555,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89445",
      "gameKey": "5_89445",
      "name": "蜀锦绣·衣（化劲）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 4600,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89459",
      "gameKey": "5_89459",
      "name": "云锦绣·衣（化劲）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 28000,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89446",
      "gameKey": "5_89446",
      "name": "蜀锦绣·衣（御劲）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 7774.71,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89460",
      "gameKey": "5_89460",
      "name": "云锦绣·衣（御劲）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 39999,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_7_112586",
      "gameKey": "7_112586",
      "name": "玄元赤地衫",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112587",
      "gameKey": "7_112587",
      "name": "玄元烽火衫",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112585",
      "gameKey": "7_112585",
      "name": "玄元风鹤衫",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112567",
      "gameKey": "7_112567",
      "name": "玄元风鹤鞋",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112789",
      "gameKey": "7_112789",
      "name": "无观鞋·内·荒",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112790",
      "gameKey": "7_112790",
      "name": "无观鞋·内·荒",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112791",
      "gameKey": "7_112791",
      "name": "无观鞋·内·荒",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_114859",
      "gameKey": "7_114859",
      "name": "无观鞋·内·荒",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_114860",
      "gameKey": "7_114860",
      "name": "无观鞋·内·荒",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_114861",
      "gameKey": "7_114861",
      "name": "无观鞋·内·荒",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112571",
      "gameKey": "7_112571",
      "name": "玄元木声鞋",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112570",
      "gameKey": "7_112570",
      "name": "玄元松绿鞋",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112792",
      "gameKey": "7_112792",
      "name": "无观鞋·外·荒",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112793",
      "gameKey": "7_112793",
      "name": "无观鞋·外·荒",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112794",
      "gameKey": "7_112794",
      "name": "无观鞋·外·荒",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_114862",
      "gameKey": "7_114862",
      "name": "无观鞋·外·荒",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_114863",
      "gameKey": "7_114863",
      "name": "无观鞋·外·荒",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_114864",
      "gameKey": "7_114864",
      "name": "无观鞋·外·荒",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112555",
      "gameKey": "7_112555",
      "name": "玄元风鹤护腕",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112559",
      "gameKey": "7_112559",
      "name": "玄元木声护腕",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112558",
      "gameKey": "7_112558",
      "name": "玄元松绿护腕",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_5_89329",
      "gameKey": "5_89329",
      "name": "渝州摧锋丹",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 963.01,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89335",
      "gameKey": "5_89335",
      "name": "渝州摧锋丹·精",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 1666.26,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89330",
      "gameKey": "5_89330",
      "name": "函谷疾咏丹",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 633.32,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "consumable",
      "life": true,
      "priceSource": "auction"
    },
    {
      "id": "m_x_5_89336",
      "gameKey": "5_89336",
      "name": "函谷疾咏丹·精",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 1196.9,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89331",
      "gameKey": "5_89331",
      "name": "中原破阵丹",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 842.95,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89337",
      "gameKey": "5_89337",
      "name": "中原破阵丹·精",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 1184.01,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89368",
      "gameKey": "5_89368",
      "name": "苍生·坠宵熔锭（攻击）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 955.18,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89372",
      "gameKey": "5_89372",
      "name": "苍生·坠宵焠晶（攻击）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 1222.88,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89369",
      "gameKey": "5_89369",
      "name": "苍生·絮泊熔锭（疗伤）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 1187,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89373",
      "gameKey": "5_89373",
      "name": "苍生·絮泊焠晶（疗伤）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 3189.09,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_90436",
      "gameKey": "5_90436",
      "name": "青石锭",
      "skillId": "",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 85.01,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "material",
      "life": true
    },
    {
      "id": "m_x_5_89379",
      "gameKey": "5_89379",
      "name": "峡金铸·兵（攻击）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 4318.99,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89397",
      "gameKey": "5_89397",
      "name": "峡金焠·兵（攻击）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 26969,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89380",
      "gameKey": "5_89380",
      "name": "峡金铸·兵（疗伤）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 4498,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89398",
      "gameKey": "5_89398",
      "name": "峡金焠·兵（疗伤）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_90437",
      "gameKey": "5_90437",
      "name": "镀金锭",
      "skillId": "",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 48,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "material",
      "life": true
    },
    {
      "id": "m_x_5_89381",
      "gameKey": "5_89381",
      "name": "峡金铸·兵（武伤）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 7641.35,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89399",
      "gameKey": "5_89399",
      "name": "峡金焠·兵（武伤）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 30000,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89382",
      "gameKey": "5_89382",
      "name": "峡金铸·兵（仇恨）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89400",
      "gameKey": "5_89400",
      "name": "峡金焠·兵（仇恨）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89383",
      "gameKey": "5_89383",
      "name": "峡金铸·裤（身法）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 7777,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89401",
      "gameKey": "5_89401",
      "name": "峡金焠·裤（身法）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89384",
      "gameKey": "5_89384",
      "name": "峡金铸·裤（元气）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 5074.56,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89402",
      "gameKey": "5_89402",
      "name": "峡金焠·裤（元气）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89385",
      "gameKey": "5_89385",
      "name": "峡金铸·裤（力道）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 6555,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89403",
      "gameKey": "5_89403",
      "name": "峡金焠·裤（力道）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 40000.89,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89386",
      "gameKey": "5_89386",
      "name": "峡金铸·裤（根骨）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 5000.35,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89404",
      "gameKey": "5_89404",
      "name": "峡金焠·裤（根骨）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 21000.59,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89387",
      "gameKey": "5_89387",
      "name": "峡金铸·裤（仇恨）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89405",
      "gameKey": "5_89405",
      "name": "峡金焠·裤（仇恨）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89388",
      "gameKey": "5_89388",
      "name": "峡金铸·裤（破防）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 5270,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89406",
      "gameKey": "5_89406",
      "name": "峡金焠·裤（破防）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 47994.89,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89389",
      "gameKey": "5_89389",
      "name": "峡金铸·裤（会心）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 5500,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89407",
      "gameKey": "5_89407",
      "name": "峡金焠·裤（会心）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 27880.05,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89390",
      "gameKey": "5_89390",
      "name": "峡金铸·裤（无双）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 4500,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89408",
      "gameKey": "5_89408",
      "name": "峡金焠·裤（无双）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 12000,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89391",
      "gameKey": "5_89391",
      "name": "峡金铸·头（攻击）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 5000,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89409",
      "gameKey": "5_89409",
      "name": "峡金焠·头（攻击）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 58888.88,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89392",
      "gameKey": "5_89392",
      "name": "峡金铸·头（治疗）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 4199.89,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89410",
      "gameKey": "5_89410",
      "name": "峡金焠·头（治疗）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89393",
      "gameKey": "5_89393",
      "name": "峡金铸·头（加速）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 5400,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89411",
      "gameKey": "5_89411",
      "name": "峡金焠·头（加速）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 25000,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89394",
      "gameKey": "5_89394",
      "name": "峡金铸·腰（体质）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 6499.67,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89412",
      "gameKey": "5_89412",
      "name": "峡金焠·腰（体质）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 20999.3,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89395",
      "gameKey": "5_89395",
      "name": "峡金铸·腰（御劲）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 5888.89,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89413",
      "gameKey": "5_89413",
      "name": "峡金焠·腰（御劲）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 35000.33,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89396",
      "gameKey": "5_89396",
      "name": "峡金铸·腰（化劲）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 4548,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89414",
      "gameKey": "5_89414",
      "name": "峡金焠·腰（化劲）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89432",
      "gameKey": "5_89432",
      "name": "云冈石·兵（仇恨）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 1580.83,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_7_112580",
      "gameKey": "7_112580",
      "name": "玄元赤地帽",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112783",
      "gameKey": "7_112783",
      "name": "无观冠·内·荒",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112784",
      "gameKey": "7_112784",
      "name": "无观冠·内·荒",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112785",
      "gameKey": "7_112785",
      "name": "无观冠·内·荒",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_114853",
      "gameKey": "7_114853",
      "name": "无观冠·内·荒",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_114854",
      "gameKey": "7_114854",
      "name": "无观冠·内·荒",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_114855",
      "gameKey": "7_114855",
      "name": "无观冠·内·荒",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112581",
      "gameKey": "7_112581",
      "name": "玄元烽火帽",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112786",
      "gameKey": "7_112786",
      "name": "无观冠·外·荒",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112787",
      "gameKey": "7_112787",
      "name": "无观冠·外·荒",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112788",
      "gameKey": "7_112788",
      "name": "无观冠·外·荒",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_114856",
      "gameKey": "7_114856",
      "name": "无观冠·外·荒",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_114857",
      "gameKey": "7_114857",
      "name": "无观冠·外·荒",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_114858",
      "gameKey": "7_114858",
      "name": "无观冠·外·荒",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112579",
      "gameKey": "7_112579",
      "name": "玄元风鹤帽",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112562",
      "gameKey": "7_112562",
      "name": "玄元赤地护腰",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112563",
      "gameKey": "7_112563",
      "name": "玄元烽火护腰",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112565",
      "gameKey": "7_112565",
      "name": "玄元木声护腰",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112574",
      "gameKey": "7_112574",
      "name": "玄元赤地裤",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112577",
      "gameKey": "7_112577",
      "name": "玄元木声裤",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112576",
      "gameKey": "7_112576",
      "name": "玄元松绿裤",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_10_157",
      "gameKey": "10_157",
      "name": "邢窑白瓷罗合",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "homeland",
      "life": true
    },
    {
      "id": "m_x_5_20971",
      "gameKey": "5_20971",
      "name": "咸鱼",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 173,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "other",
      "life": true
    },
    {
      "id": "m_x_5_38122",
      "gameKey": "5_38122",
      "name": "积木·木质标准弧料包",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "homeland",
      "life": true
    },
    {
      "id": "m_x_10_1281",
      "gameKey": "10_1281",
      "name": "匾额·布坊",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "homeland",
      "life": true
    },
    {
      "id": "m_x_5_35026",
      "gameKey": "5_35026",
      "name": "紫色绣球花",
      "skillId": "",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "other",
      "life": true
    },
    {
      "id": "m_x_10_1894",
      "gameKey": "10_1894",
      "name": "槿花茵·一",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 45.82,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "homeland",
      "life": true
    },
    {
      "id": "m_x_5_35025",
      "gameKey": "5_35025",
      "name": "红色绣球花",
      "skillId": "",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "other",
      "life": true
    },
    {
      "id": "m_x_10_2229",
      "gameKey": "10_2229",
      "name": "暮春落花·一",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 299.19,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "homeland",
      "life": true
    },
    {
      "id": "m_x_5_89317",
      "gameKey": "5_89317",
      "name": "胡笳月夜宴（内攻）",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 1000.39,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_10_2028",
      "gameKey": "10_2028",
      "name": "鹰鳐纸鸢",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 979.92,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "homeland",
      "life": true
    },
    {
      "id": "m_x_10_2241",
      "gameKey": "10_2241",
      "name": "须弥座方柱",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 1087.9,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "homeland",
      "life": true
    },
    {
      "id": "m_x_5_89319",
      "gameKey": "5_89319",
      "name": "黄云牧火宴（仇恨）",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 15.24,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "consumable",
      "life": true,
      "priceSource": "auction"
    },
    {
      "id": "m_x_5_89320",
      "gameKey": "5_89320",
      "name": "云中关宴（防御）",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 390.01,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89426",
      "gameKey": "5_89426",
      "name": "云冈石·腰（体质）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 2754.47,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89427",
      "gameKey": "5_89427",
      "name": "云冈石·腰（御劲）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 1650,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89428",
      "gameKey": "5_89428",
      "name": "云冈石·腰（化劲）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 1666.66,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89309",
      "gameKey": "5_89309",
      "name": "长安珍馐宴（通用）",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89310",
      "gameKey": "5_89310",
      "name": "华岳开锋宴（外攻）",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 15304.86,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89347",
      "gameKey": "5_89347",
      "name": "云芝竹沥羹·精",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 1149.96,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89356",
      "gameKey": "5_89356",
      "name": "山城毛血旺·精",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 1268,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89358",
      "gameKey": "5_89358",
      "name": "云州刀削面·精",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 1199,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89447",
      "gameKey": "5_89447",
      "name": "云锦绣·腕（身法）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 24998,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89449",
      "gameKey": "5_89449",
      "name": "云锦绣·腕（力道）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_7_112790_2",
      "gameKey": "7_112790",
      "name": "无观鞋·内·荒",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112791_2",
      "gameKey": "7_112791",
      "name": "无观鞋·内·荒",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_114859_2",
      "gameKey": "7_114859",
      "name": "无观鞋·内·荒",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_114860_2",
      "gameKey": "7_114860",
      "name": "无观鞋·内·荒",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112793_2",
      "gameKey": "7_112793",
      "name": "无观鞋·外·荒",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112794_2",
      "gameKey": "7_112794",
      "name": "无观鞋·外·荒",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_114862_2",
      "gameKey": "7_114862",
      "name": "无观鞋·外·荒",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_114863_2",
      "gameKey": "7_114863",
      "name": "无观鞋·外·荒",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_5_89323",
      "gameKey": "5_89323",
      "name": "竹沥清心露·精",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 700.69,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89326",
      "gameKey": "5_89326",
      "name": "五气归元丹·精",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 1289.85,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89334",
      "gameKey": "5_89334",
      "name": "巴山凝神丹·精",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 1240.98,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89338",
      "gameKey": "5_89338",
      "name": "河洛生息丹·精",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89339",
      "gameKey": "5_89339",
      "name": "云州固阵丹·精",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 2000,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "consumable",
      "life": true
    },
    {
      "id": "m_x_5_89371",
      "gameKey": "5_89371",
      "name": "苍生·瀑沙焠晶（武伤）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 2555,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "priceSource": "auction",
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_5_89374",
      "gameKey": "5_89374",
      "name": "苍生·巨灵焠晶（仇恨）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "enhance",
      "life": true
    },
    {
      "id": "m_x_7_112784_2",
      "gameKey": "7_112784",
      "name": "无观冠·内·荒",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112785_2",
      "gameKey": "7_112785",
      "name": "无观冠·内·荒",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_114853_2",
      "gameKey": "7_114853",
      "name": "无观冠·内·荒",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_114854_2",
      "gameKey": "7_114854",
      "name": "无观冠·内·荒",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112787_2",
      "gameKey": "7_112787",
      "name": "无观冠·外·荒",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_112788_2",
      "gameKey": "7_112788",
      "name": "无观冠·外·荒",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_114856_2",
      "gameKey": "7_114856",
      "name": "无观冠·外·荒",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_7_114857_2",
      "gameKey": "7_114857",
      "name": "无观冠·外·荒",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 当前赛季配方 · 2026-11-21",
      "custom": false,
      "category": "equipment",
      "life": true
    },
    {
      "id": "m_x_5_11521",
      "gameKey": "5_11521",
      "name": "辣酱肉片",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 0.02,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_26232",
      "gameKey": "5_26232",
      "name": "煮烂的如意饺",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 2,
      "source": "制造",
      "base": 1.85,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_5232",
      "gameKey": "5_5232",
      "name": "戏凤饺",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 1.32,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_5231",
      "gameKey": "5_5231",
      "name": "煮烂的戏凤饺子",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 2,
      "source": "制造",
      "base": 1.84,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_5230",
      "gameKey": "5_5230",
      "name": "盘龙饺",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 1.89,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_5229",
      "gameKey": "5_5229",
      "name": "煮烂的盘龙饺子",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 2,
      "source": "制造",
      "base": 2.88,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31050",
      "gameKey": "5_31050",
      "name": "百味宴",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 153,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_2304",
      "gameKey": "5_2304",
      "name": "杂味宴",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 1,
      "source": "制造",
      "base": 9000.44,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31051",
      "gameKey": "5_31051",
      "name": "山河宴",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 488.48,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31052",
      "gameKey": "5_31052",
      "name": "汉宫宴",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 431.95,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31053",
      "gameKey": "5_31053",
      "name": "南山宴",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 500.25,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31054",
      "gameKey": "5_31054",
      "name": "东海宴",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 300.74,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31055",
      "gameKey": "5_31055",
      "name": "任侠宴",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 10000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_2299",
      "gameKey": "5_2299",
      "name": "没有酒的任侠餐",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 1,
      "source": "制造",
      "base": 6444.35,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31056",
      "gameKey": "5_31056",
      "name": "兄弟宴",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 10000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_2300",
      "gameKey": "5_2300",
      "name": "不够兄弟的兄弟宴",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 1,
      "source": "制造",
      "base": 8881.04,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31057",
      "gameKey": "5_31057",
      "name": "贵妃宴",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 2,
      "source": "制造",
      "base": 1888.88,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31058",
      "gameKey": "5_31058",
      "name": "欢庆宴",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 2,
      "source": "制造",
      "base": 10000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31059",
      "gameKey": "5_31059",
      "name": "三头宴",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 2,
      "source": "制造",
      "base": 10000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_2305",
      "gameKey": "5_2305",
      "name": "不地道的三头宴",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 1,
      "source": "制造",
      "base": 3666.51,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31060",
      "gameKey": "5_31060",
      "name": "洗尘宴",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 2,
      "source": "制造",
      "base": 130.15,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31061",
      "gameKey": "5_31061",
      "name": "迎客宴",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 2,
      "source": "制造",
      "base": 50.1,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31062",
      "gameKey": "5_31062",
      "name": "结缘宴",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 2,
      "source": "制造",
      "base": 339.58,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71268",
      "gameKey": "5_71268",
      "name": "风语·酸菜鱼",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 4,
      "source": "制造",
      "base": 145.55,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71270",
      "gameKey": "5_71270",
      "name": "风语·白肉血肠",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 4,
      "source": "制造",
      "base": 114,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_2302",
      "gameKey": "5_2302",
      "name": "肥腻血肠",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 1,
      "source": "制造",
      "base": 799.04,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71271",
      "gameKey": "5_71271",
      "name": "风语·红烧扣肉",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 4,
      "source": "制造",
      "base": 90.29,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71272",
      "gameKey": "5_71272",
      "name": "风语·太后饼",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 4,
      "source": "制造",
      "base": 120.52,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71273",
      "gameKey": "5_71273",
      "name": "风语·灌汤包",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 4,
      "source": "制造",
      "base": 129.49,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71274",
      "gameKey": "5_71274",
      "name": "风语·骨肉相连",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 4,
      "source": "制造",
      "base": 103.51,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71275",
      "gameKey": "5_71275",
      "name": "风语·炸酱面",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 4,
      "source": "制造",
      "base": 120.04,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71276",
      "gameKey": "5_71276",
      "name": "风语·鱼香肉丝",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 41.52,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71278",
      "gameKey": "5_71278",
      "name": "风语·毛血旺",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 28.09,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71279",
      "gameKey": "5_71279",
      "name": "风语·栗子烧肉",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 35.77,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_3505",
      "gameKey": "5_3505",
      "name": "不太香的栗子烧肉",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 1,
      "source": "制造",
      "base": 2000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71280",
      "gameKey": "5_71280",
      "name": "风语·煎饼果子",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 48.01,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_3485",
      "gameKey": "5_3485",
      "name": "带酸味的包子",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 1,
      "source": "制造",
      "base": 297.97,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71282",
      "gameKey": "5_71282",
      "name": "风语·白汁芦筋",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 88.85,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_3236",
      "gameKey": "5_3236",
      "name": "咬不动的蹄筋",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 1,
      "source": "制造",
      "base": 988,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71283",
      "gameKey": "5_71283",
      "name": "风语·杂碎面",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 91.11,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_2292",
      "gameKey": "5_2292",
      "name": "腻味的杂碎面",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 1,
      "source": "制造",
      "base": 4293,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71284",
      "gameKey": "5_71284",
      "name": "风语·皮蛋瘦肉粥",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 4,
      "source": "制造",
      "base": 137.85,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71286",
      "gameKey": "5_71286",
      "name": "风语·鱼片砂锅粥",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 4,
      "source": "制造",
      "base": 80.22,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71287",
      "gameKey": "5_71287",
      "name": "风语·三鲜粥",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 4,
      "source": "制造",
      "base": 80.2,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71288",
      "gameKey": "5_71288",
      "name": "风语·咸骨粥",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 4,
      "source": "制造",
      "base": 91.58,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71289",
      "gameKey": "5_71289",
      "name": "风语·贡丸汤",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 899,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71290",
      "gameKey": "5_71290",
      "name": "风语·杂碎汤",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 29.6,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71291",
      "gameKey": "5_71291",
      "name": "风语·鱼头豆腐汤",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 42,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71294",
      "gameKey": "5_71294",
      "name": "风语·水晶芙蓉宴（通用）",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 4,
      "source": "制造",
      "base": 750.03,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71295",
      "gameKey": "5_71295",
      "name": "风语·玉笛谁家听落梅（外攻）",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 4,
      "source": "制造",
      "base": 888.88,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71296",
      "gameKey": "5_71296",
      "name": "风语·二十四桥明月夜（内攻）",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 4,
      "source": "制造",
      "base": 690.93,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71297",
      "gameKey": "5_71297",
      "name": "风语·鸳鸯烩珍宴（治疗）",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 4,
      "source": "制造",
      "base": 255,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71298",
      "gameKey": "5_71298",
      "name": "风语·蜀味烘焙宴（仇恨）",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 4,
      "source": "制造",
      "base": 43.28,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71299",
      "gameKey": "5_71299",
      "name": "风语·鸿门宴（防御）",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 4,
      "source": "制造",
      "base": 484.4,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_2303",
      "gameKey": "5_2303",
      "name": "真正的鸿门宴",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 1,
      "source": "制造",
      "base": 11000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71300",
      "gameKey": "5_71300",
      "name": "风语·团圆宴（恢复）",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 4,
      "source": "制造",
      "base": 6.48,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89316",
      "gameKey": "5_89316",
      "name": "雁门猎风宴（外攻）",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 1750.59,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89318",
      "gameKey": "5_89318",
      "name": "塞外暖羊宴（治疗）",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 2300.11,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89361",
      "gameKey": "5_89361",
      "name": "渝州酸辣粉",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 59.48,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89362",
      "gameKey": "5_89362",
      "name": "灵宝羊肉汤",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 61.89,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89363",
      "gameKey": "5_89363",
      "name": "蒸河鱼",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 99.98,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89364",
      "gameKey": "5_89364",
      "name": "羊肉烩面",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 81.52,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89365",
      "gameKey": "5_89365",
      "name": "酥油烙馍",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 207.42,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89366",
      "gameKey": "5_89366",
      "name": "曲香蒸肉",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "pengren",
      "tier": 3,
      "source": "制造",
      "base": 555,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_618",
      "gameKey": "8_618",
      "name": "箭囊",
      "category": "trinket",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 1666.66,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_616",
      "gameKey": "8_616",
      "name": "大红花",
      "category": "trinket",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 300.98,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_617",
      "gameKey": "8_617",
      "name": "风车",
      "category": "trinket",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 699.99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_615",
      "gameKey": "8_615",
      "name": "风筝",
      "category": "trinket",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 200.72,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_3810",
      "gameKey": "5_3810",
      "name": "蹴鞠",
      "category": "other",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 80.71,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_3811",
      "gameKey": "5_3811",
      "name": "绫罗绣球",
      "category": "consumable",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 28.26,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_25",
      "gameKey": "8_25",
      "name": "轻容纱草药包",
      "category": "package",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 15,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_26",
      "gameKey": "8_26",
      "name": "轻容纱金石包",
      "category": "package",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 25.23,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_21",
      "gameKey": "8_21",
      "name": "彩锦皮包",
      "category": "package",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 0.38,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_3782",
      "gameKey": "5_3782",
      "name": "彩锦香包",
      "category": "consumable",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 1.2,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_3797",
      "gameKey": "5_3797",
      "name": "水波绫香袋",
      "category": "consumable",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 10000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_2433",
      "gameKey": "5_2433",
      "name": "绣花香包",
      "category": "consumable",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 10000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_20",
      "gameKey": "8_20",
      "name": "丝绸皮包",
      "category": "package",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 0.01,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_621",
      "gameKey": "8_621",
      "name": "娃娃",
      "category": "trinket",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 455.5,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_622",
      "gameKey": "8_622",
      "name": "香囊",
      "category": "trinket",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 400,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_623",
      "gameKey": "8_623",
      "name": "水囊",
      "category": "trinket",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 699.99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_624",
      "gameKey": "8_624",
      "name": "包裹",
      "category": "trinket",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 1299,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_625",
      "gameKey": "8_625",
      "name": "手帕",
      "category": "trinket",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 584.98,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_22",
      "gameKey": "8_22",
      "name": "绫罗草药包",
      "category": "package",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 20,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_23",
      "gameKey": "8_23",
      "name": "绫罗金石包",
      "category": "package",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 18.55,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_24",
      "gameKey": "8_24",
      "name": "绫罗皮包",
      "category": "package",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 0.6,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_28",
      "gameKey": "8_28",
      "name": "轻容百花包",
      "category": "package",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 0.02,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_626",
      "gameKey": "8_626",
      "name": "冷月伞",
      "category": "trinket",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 400.17,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_627",
      "gameKey": "8_627",
      "name": "烟雨伞",
      "category": "trinket",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 300.25,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_2467",
      "gameKey": "5_2467",
      "name": "山水丹青染布画",
      "category": "consumable",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 12.68,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_30",
      "gameKey": "8_30",
      "name": "百纳包",
      "category": "package",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 48.69,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_37",
      "gameKey": "8_37",
      "name": "百花草药包",
      "category": "package",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 21.97,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_38",
      "gameKey": "8_38",
      "name": "百编金石包",
      "category": "package",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 21.89,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_5245",
      "gameKey": "5_5245",
      "name": "五彩球·赤",
      "category": "other",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 60,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_5246",
      "gameKey": "5_5246",
      "name": "五彩球·蓝",
      "category": "other",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 80,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_6067",
      "gameKey": "5_6067",
      "name": "桃花灯",
      "category": "other",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 0.05,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_6077",
      "gameKey": "5_6077",
      "name": "彩云逐月",
      "category": "consumable",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 0.21,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_31",
      "gameKey": "8_31",
      "name": "天工锦缎皮包",
      "category": "package",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 3.09,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_69",
      "gameKey": "8_69",
      "name": "梨绒落绢包",
      "category": "package",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 170.65,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_70",
      "gameKey": "8_70",
      "name": "落花碧绒包",
      "category": "package",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 345.67,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_22145",
      "gameKey": "5_22145",
      "name": "挂件包·面部",
      "category": "package",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 63.7,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_22917",
      "gameKey": "5_22917",
      "name": "衣饰包·披风",
      "category": "package",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 108.47,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_22981",
      "gameKey": "5_22981",
      "name": "衣饰包·肩饰",
      "category": "package",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 169,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31252",
      "gameKey": "5_31252",
      "name": "寻踪觅宝·上衣",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 457.08,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31254",
      "gameKey": "5_31254",
      "name": "寻踪觅宝·鞋子",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 3369.99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31313",
      "gameKey": "5_31313",
      "name": "绝世鞋子·【引】",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_41551",
      "gameKey": "5_41551",
      "name": "乾元鞋子·【暖】",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71193",
      "gameKey": "5_71193",
      "name": "风语·腕·绣（身法）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1005.8,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71194",
      "gameKey": "5_71194",
      "name": "风语·腕·绣（元气）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1797.02,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71195",
      "gameKey": "5_71195",
      "name": "风语·腕·绣（力道）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1600.4,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71196",
      "gameKey": "5_71196",
      "name": "风语·腕·绣（根骨）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1100.98,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71197",
      "gameKey": "5_71197",
      "name": "风语·腕·绣（仇恨）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1775.76,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71198",
      "gameKey": "5_71198",
      "name": "风语·腕·绣（外破）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1480.55,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71199",
      "gameKey": "5_71199",
      "name": "风语·腕·绣（内破）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1195.85,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71200",
      "gameKey": "5_71200",
      "name": "风语·腕·绣（会心）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1780.91,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71201",
      "gameKey": "5_71201",
      "name": "风语·腕·绣（无双）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1355,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71202",
      "gameKey": "5_71202",
      "name": "风语·鞋·绣（外攻）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1080.1,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71203",
      "gameKey": "5_71203",
      "name": "风语·鞋·绣（内攻）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1870.6,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71204",
      "gameKey": "5_71204",
      "name": "风语·鞋·绣（治疗）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1443.86,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71205",
      "gameKey": "5_71205",
      "name": "风语·鞋·绣（无双）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1241,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71206",
      "gameKey": "5_71206",
      "name": "风语·鞋·绣（急速）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1820.45,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71207",
      "gameKey": "5_71207",
      "name": "风语·衣·绣（体质）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1552,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71209",
      "gameKey": "5_71209",
      "name": "风语·衣·绣（格挡）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1500,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71210",
      "gameKey": "5_71210",
      "name": "风语·衣·绣（闪避）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 3999,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71211",
      "gameKey": "5_71211",
      "name": "风语·衣·绣（外防）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1300.05,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71212",
      "gameKey": "5_71212",
      "name": "风语·衣·绣（内防）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2100.91,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71213",
      "gameKey": "5_71213",
      "name": "风语·衣·绣（招架）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2850,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71214",
      "gameKey": "5_71214",
      "name": "风语·衣·绣（化劲）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1083.74,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71215",
      "gameKey": "5_71215",
      "name": "风语·衣·绣（御劲）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2198.1,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71216",
      "gameKey": "5_71216",
      "name": "风语·腕·染（身法）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 260.42,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71217",
      "gameKey": "5_71217",
      "name": "风语·腕·染（元气）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 490.88,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71218",
      "gameKey": "5_71218",
      "name": "风语·腕·染（力道）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 659.45,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71219",
      "gameKey": "5_71219",
      "name": "风语·腕·染（根骨）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 420.93,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71220",
      "gameKey": "5_71220",
      "name": "风语·腕·染（仇恨）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 425.92,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71221",
      "gameKey": "5_71221",
      "name": "风语·腕·染（外破）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 325.92,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71222",
      "gameKey": "5_71222",
      "name": "风语·腕·染（内破）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 370.17,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71223",
      "gameKey": "5_71223",
      "name": "风语·腕·染（会心）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 285,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71224",
      "gameKey": "5_71224",
      "name": "风语·腕·染（无双）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 280.4,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71225",
      "gameKey": "5_71225",
      "name": "风语·鞋·染（外攻）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 330.78,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71226",
      "gameKey": "5_71226",
      "name": "风语·鞋·染（内攻）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 335.6,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71227",
      "gameKey": "5_71227",
      "name": "风语·鞋·染（治疗）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 440.64,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71228",
      "gameKey": "5_71228",
      "name": "风语·鞋·染（无双）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 487.7,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71229",
      "gameKey": "5_71229",
      "name": "风语·鞋·染（急速）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 320.23,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71230",
      "gameKey": "5_71230",
      "name": "风语·衣·染（体质）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 508.9,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71231",
      "gameKey": "5_71231",
      "name": "风语·衣·染（气血）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 579.82,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71232",
      "gameKey": "5_71232",
      "name": "风语·衣·染（格挡）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 798,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71233",
      "gameKey": "5_71233",
      "name": "风语·衣·染（闪避）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 599.29,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71234",
      "gameKey": "5_71234",
      "name": "风语·衣·染（外防）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 381.96,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71235",
      "gameKey": "5_71235",
      "name": "风语·衣·染（内防）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 888.86,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71236",
      "gameKey": "5_71236",
      "name": "风语·衣·染（招架）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 559,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71237",
      "gameKey": "5_71237",
      "name": "风语·衣·染（化劲）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 343.05,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71238",
      "gameKey": "5_71238",
      "name": "风语·衣·染（御劲）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 904.3,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71239",
      "gameKey": "5_71239",
      "name": "风语·鞋·染（跑速）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 692.44,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_54061",
      "gameKey": "5_54061",
      "name": "卓殊鞋子·【风】",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 330000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_54062",
      "gameKey": "5_54062",
      "name": "卓殊护腕·【风】",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 10000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71394",
      "gameKey": "5_71394",
      "name": "传说鞋子·【花】",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 5999,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_81654",
      "gameKey": "5_81654",
      "name": "传说鞋子·【江】",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 999,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_81655",
      "gameKey": "5_81655",
      "name": "传说护腕·【江】",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_81660",
      "gameKey": "5_81660",
      "name": "璧·山海",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_85649",
      "gameKey": "5_85649",
      "name": "传说上衣·【尧】",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 6738.3,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_85650",
      "gameKey": "5_85650",
      "name": "传说鞋子·【尧】",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1999,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_85647",
      "gameKey": "5_85647",
      "name": "璧·暗影",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89461",
      "gameKey": "5_89461",
      "name": "河洛纹·腕（身法）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1289.21,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89462",
      "gameKey": "5_89462",
      "name": "河洛纹·腕（元气）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1890.37,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89463",
      "gameKey": "5_89463",
      "name": "河洛纹·腕（力道）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1512.32,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89464",
      "gameKey": "5_89464",
      "name": "河洛纹·腕（根骨）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1140.67,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89465",
      "gameKey": "5_89465",
      "name": "河洛纹·腕（仇恨）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1111,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89466",
      "gameKey": "5_89466",
      "name": "河洛纹·腕（破防）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 950,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89467",
      "gameKey": "5_89467",
      "name": "河洛纹·腕（会心）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1628.34,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89468",
      "gameKey": "5_89468",
      "name": "河洛纹·腕（无双）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2250.27,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89469",
      "gameKey": "5_89469",
      "name": "河洛纹·鞋（攻击）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1440.43,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89470",
      "gameKey": "5_89470",
      "name": "河洛纹·鞋（治疗）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1700.2,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89471",
      "gameKey": "5_89471",
      "name": "河洛纹·鞋（加速）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2000.71,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89472",
      "gameKey": "5_89472",
      "name": "河洛纹·衣（体质）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1990,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89473",
      "gameKey": "5_89473",
      "name": "河洛纹·衣（化劲）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1500.07,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_90289",
      "gameKey": "5_90289",
      "name": "勘宝秘囊",
      "category": "other",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 629.76,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31099",
      "gameKey": "5_31099",
      "name": "金针·烟",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "制造",
      "base": 8.05,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31103",
      "gameKey": "5_31103",
      "name": "佳·纳元丹",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "制造",
      "base": 7.4,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31104",
      "gameKey": "5_31104",
      "name": "逍遥散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "制造",
      "base": 39.5,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31105",
      "gameKey": "5_31105",
      "name": "中品风身丸",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "制造",
      "base": 288,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31106",
      "gameKey": "5_31106",
      "name": "忘情水",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "制造",
      "base": 10,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31107",
      "gameKey": "5_31107",
      "name": "化功散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "制造",
      "base": 44.99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31108",
      "gameKey": "5_31108",
      "name": "健胃散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "制造",
      "base": 152,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_40538",
      "gameKey": "5_40538",
      "name": "鉴影散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 4,
      "source": "制造",
      "base": 44.74,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71242",
      "gameKey": "5_71242",
      "name": "风语·上品玉璃散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 4,
      "source": "制造",
      "base": 87.15,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71243",
      "gameKey": "5_71243",
      "name": "风语·上品破秽散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 4,
      "source": "制造",
      "base": 142.85,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71244",
      "gameKey": "5_71244",
      "name": "风语·上品凝神散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 4,
      "source": "制造",
      "base": 184.72,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71245",
      "gameKey": "5_71245",
      "name": "风语·上品活气散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 4,
      "source": "制造",
      "base": 88.53,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71246",
      "gameKey": "5_71246",
      "name": "风语·上品亢龙散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 4,
      "source": "制造",
      "base": 138.93,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71247",
      "gameKey": "5_71247",
      "name": "风语·上品展凤散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 4,
      "source": "制造",
      "base": 127.71,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71248",
      "gameKey": "5_71248",
      "name": "风语·上品益气散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 4,
      "source": "制造",
      "base": 116.83,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71249",
      "gameKey": "5_71249",
      "name": "风语·上品长恨散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 4,
      "source": "制造",
      "base": 115.41,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71250",
      "gameKey": "5_71250",
      "name": "风语·中品玉璃散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "制造",
      "base": 911,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71251",
      "gameKey": "5_71251",
      "name": "风语·中品破秽散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "制造",
      "base": 62.81,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71252",
      "gameKey": "5_71252",
      "name": "风语·中品凝神散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "制造",
      "base": 22.14,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71253",
      "gameKey": "5_71253",
      "name": "风语·中品活气散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "制造",
      "base": 55,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71254",
      "gameKey": "5_71254",
      "name": "风语·中品亢龙散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "制造",
      "base": 65.62,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71255",
      "gameKey": "5_71255",
      "name": "风语·中品展凤散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "制造",
      "base": 42,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71256",
      "gameKey": "5_71256",
      "name": "风语·中品益气散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "制造",
      "base": 78.02,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71257",
      "gameKey": "5_71257",
      "name": "风语·中品长恨散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "制造",
      "base": 57.61,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71259",
      "gameKey": "5_71259",
      "name": "风语·上品轻身丹",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 4,
      "source": "制造",
      "base": 133.78,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71260",
      "gameKey": "5_71260",
      "name": "风语·上品聚魂丹",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 4,
      "source": "制造",
      "base": 130.85,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71261",
      "gameKey": "5_71261",
      "name": "风语·上品大力丸",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 4,
      "source": "制造",
      "base": 130.32,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71262",
      "gameKey": "5_71262",
      "name": "风语·上品静心丸",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 4,
      "source": "制造",
      "base": 98.87,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71263",
      "gameKey": "5_71263",
      "name": "风语·中品健体丸",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "制造",
      "base": 80.01,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71264",
      "gameKey": "5_71264",
      "name": "风语·中品轻身丹",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "制造",
      "base": 62.36,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71265",
      "gameKey": "5_71265",
      "name": "风语·中品聚魂丹",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "制造",
      "base": 711,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89341",
      "gameKey": "5_89341",
      "name": "渝州摧锋散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "制造",
      "base": 102.94,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89342",
      "gameKey": "5_89342",
      "name": "函谷疾咏散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "制造",
      "base": 90.07,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89343",
      "gameKey": "5_89343",
      "name": "中原破阵散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "制造",
      "base": 177.75,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89344",
      "gameKey": "5_89344",
      "name": "河洛生息散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "制造",
      "base": 149.91,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89345",
      "gameKey": "5_89345",
      "name": "云州固阵散",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "制造",
      "base": 100.9,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89724",
      "gameKey": "5_89724",
      "name": "引元丹",
      "category": "consumable",
      "life": true,
      "kind": "product",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "制造",
      "base": 399.73,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_2589",
      "gameKey": "5_2589",
      "name": "连心锁",
      "category": "consumable",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 15.98,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_17540",
      "gameKey": "8_17540",
      "name": "铁纹蹄铁",
      "category": "mount",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 1109,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_2631",
      "gameKey": "5_2631",
      "name": "银精巧饰",
      "category": "consumable",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 17.5,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_629",
      "gameKey": "8_629",
      "name": "烟斗",
      "category": "trinket",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 288,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_630",
      "gameKey": "8_630",
      "name": "锅铲",
      "category": "trinket",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 374,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_631",
      "gameKey": "8_631",
      "name": "铃铛",
      "category": "trinket",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 279.25,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_2189",
      "gameKey": "5_2189",
      "name": "铜镜",
      "category": "consumable",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 10000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_2594",
      "gameKey": "5_2594",
      "name": "精致铜盒",
      "category": "consumable",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 10000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_17539",
      "gameKey": "8_17539",
      "name": "铁纹兽皮笼套",
      "category": "mount",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 598,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_2603",
      "gameKey": "5_2603",
      "name": "铁偶",
      "category": "consumable",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 11,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_633",
      "gameKey": "8_633",
      "name": "白虎腰刀",
      "category": "trinket",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 300000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_635",
      "gameKey": "8_635",
      "name": "朱雀腰刀",
      "category": "trinket",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 263.02,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_17542",
      "gameKey": "8_17542",
      "name": "银龙蹄铁",
      "category": "mount",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 1688.97,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_17543",
      "gameKey": "8_17543",
      "name": "银龙鞍具",
      "category": "mount",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 2333.99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_17544",
      "gameKey": "8_17544",
      "name": "银风笼套",
      "category": "mount",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2193.87,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_17545",
      "gameKey": "8_17545",
      "name": "银风蹄铁",
      "category": "mount",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2137.21,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_5044",
      "gameKey": "5_5044",
      "name": "精巧铁印",
      "category": "consumable",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 15.9,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_17546",
      "gameKey": "8_17546",
      "name": "银风鞍具",
      "category": "mount",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2121,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_17547",
      "gameKey": "8_17547",
      "name": "黑云笼套",
      "category": "mount",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1879,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_17548",
      "gameKey": "8_17548",
      "name": "黑云蹄铁",
      "category": "mount",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1986.66,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_8_17549",
      "gameKey": "8_17549",
      "name": "黑云鞍具",
      "category": "mount",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 300000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_6024",
      "gameKey": "5_6024",
      "name": "年年有鱼灯",
      "category": "other",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 10000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_6076",
      "gameKey": "5_6076",
      "name": "熠熠生辉",
      "category": "consumable",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 0.11,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_6069",
      "gameKey": "5_6069",
      "name": "火树银花",
      "category": "other",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 0.08,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_6070",
      "gameKey": "5_6070",
      "name": "窜天猴",
      "category": "consumable",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 0.07,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_6073",
      "gameKey": "5_6073",
      "name": "焰火棒",
      "category": "consumable",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 1,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_6247",
      "gameKey": "5_6247",
      "name": "锡制钥匙",
      "category": "treasure",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 1.07,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_6248",
      "gameKey": "5_6248",
      "name": "精铁钥匙",
      "category": "treasure",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 1.2,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_10028",
      "gameKey": "5_10028",
      "name": "鎏金钥匙",
      "category": "treasure",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 88,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31140",
      "gameKey": "5_31140",
      "name": "寻踪觅宝·武器",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 50.99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31141",
      "gameKey": "5_31141",
      "name": "寻踪觅宝·下装",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 99.99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31142",
      "gameKey": "5_31142",
      "name": "寻踪觅宝·头部",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 300.39,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31143",
      "gameKey": "5_31143",
      "name": "寻踪觅宝·腰带",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 248.6,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31122",
      "gameKey": "5_31122",
      "name": "绝世腰带·【寒】",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 3500,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31212",
      "gameKey": "5_31212",
      "name": "绝世下装·【宿】",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 5000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_39209",
      "gameKey": "5_39209",
      "name": "乾元头饰·【寂】",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_40539",
      "gameKey": "5_40539",
      "name": "乌银刺",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 63,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_41553",
      "gameKey": "5_41553",
      "name": "乾元头饰·【暖】",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_41554",
      "gameKey": "5_41554",
      "name": "乾元腰带·【暖】",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71129",
      "gameKey": "5_71129",
      "name": "风语·瀑沙熔锭（外攻）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 152.66,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71130",
      "gameKey": "5_71130",
      "name": "风语·坠宵熔锭（内攻）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 150.31,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71131",
      "gameKey": "5_71131",
      "name": "风语·絮泊熔锭（疗伤）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 109.21,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71132",
      "gameKey": "5_71132",
      "name": "风语·巨灵熔锭（仇恨）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 209.99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71133",
      "gameKey": "5_71133",
      "name": "风语·兵·铸（外攻）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 988.08,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71134",
      "gameKey": "5_71134",
      "name": "风语·兵·铸（内攻）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2029.09,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71135",
      "gameKey": "5_71135",
      "name": "风语·兵·铸（疗伤）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1926.92,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71136",
      "gameKey": "5_71136",
      "name": "风语·兵·铸（武伤）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1100,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71137",
      "gameKey": "5_71137",
      "name": "风语·兵·铸（仇恨）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 3288.88,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71138",
      "gameKey": "5_71138",
      "name": "风语·裤·铸（身法）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1707.75,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71139",
      "gameKey": "5_71139",
      "name": "风语·裤·铸（元气）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1448.84,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71140",
      "gameKey": "5_71140",
      "name": "风语·裤·铸（力道）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2045.95,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71141",
      "gameKey": "5_71141",
      "name": "风语·裤·铸（根骨）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1550,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71142",
      "gameKey": "5_71142",
      "name": "风语·裤·铸（仇恨）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 4999.62,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71143",
      "gameKey": "5_71143",
      "name": "风语·裤·铸（外破）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1875.38,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71144",
      "gameKey": "5_71144",
      "name": "风语·裤·铸（内破）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1750.79,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71145",
      "gameKey": "5_71145",
      "name": "风语·裤·铸（会心）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1090.76,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71146",
      "gameKey": "5_71146",
      "name": "风语·裤·铸（无双）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1899,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71147",
      "gameKey": "5_71147",
      "name": "风语·头·铸（外攻）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1830.2,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71148",
      "gameKey": "5_71148",
      "name": "风语·头·铸（内攻）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1200.01,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71149",
      "gameKey": "5_71149",
      "name": "风语·头·铸（治疗）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2321.25,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71150",
      "gameKey": "5_71150",
      "name": "风语·头·铸（无双）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1557.77,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71151",
      "gameKey": "5_71151",
      "name": "风语·头·铸（急速）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1240.08,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71152",
      "gameKey": "5_71152",
      "name": "风语·腰·铸（体质）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2300.1,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71153",
      "gameKey": "5_71153",
      "name": "风语·腰·铸（气血）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1600.22,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71155",
      "gameKey": "5_71155",
      "name": "风语·腰·铸（闪避）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2025.61,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71156",
      "gameKey": "5_71156",
      "name": "风语·腰·铸（外防）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 3999,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71157",
      "gameKey": "5_71157",
      "name": "风语·腰·铸（内防）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1938.43,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71159",
      "gameKey": "5_71159",
      "name": "风语·腰·铸（御劲）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1770.34,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71160",
      "gameKey": "5_71160",
      "name": "风语·腰·铸（化劲）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1100,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71161",
      "gameKey": "5_71161",
      "name": "风语·裤·甲（身法）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 398.45,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71162",
      "gameKey": "5_71162",
      "name": "风语·裤·甲（元气）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 489.22,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71163",
      "gameKey": "5_71163",
      "name": "风语·裤·甲（力道）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 450.62,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71164",
      "gameKey": "5_71164",
      "name": "风语·裤·甲（根骨）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 429.87,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71165",
      "gameKey": "5_71165",
      "name": "风语·裤·甲（仇恨）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 356.11,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71166",
      "gameKey": "5_71166",
      "name": "风语·裤·甲（外破）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 325.1,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71167",
      "gameKey": "5_71167",
      "name": "风语·裤·甲（内破）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 390,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71168",
      "gameKey": "5_71168",
      "name": "风语·裤·甲（会心）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 295.37,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71169",
      "gameKey": "5_71169",
      "name": "风语·裤·甲（无双）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 295.49,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71170",
      "gameKey": "5_71170",
      "name": "风语·头·甲（外攻）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 330.07,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71171",
      "gameKey": "5_71171",
      "name": "风语·头·甲（内攻）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 385.66,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71172",
      "gameKey": "5_71172",
      "name": "风语·头·甲（治疗）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 369.58,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71173",
      "gameKey": "5_71173",
      "name": "风语·头·甲（无双）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 542.24,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71174",
      "gameKey": "5_71174",
      "name": "风语·头·甲（急速）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 335.2,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71175",
      "gameKey": "5_71175",
      "name": "风语·腰·甲（体质）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 549.91,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71176",
      "gameKey": "5_71176",
      "name": "风语·腰·甲（气血）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 558.01,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71177",
      "gameKey": "5_71177",
      "name": "风语·腰·甲（格挡）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 207.03,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71179",
      "gameKey": "5_71179",
      "name": "风语·腰·甲（外防）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 888.94,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71180",
      "gameKey": "5_71180",
      "name": "风语·腰·甲（内防）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 888,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71181",
      "gameKey": "5_71181",
      "name": "风语·腰·甲（招架）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 327.57,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71182",
      "gameKey": "5_71182",
      "name": "风语·腰·甲（化劲）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 325.31,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71183",
      "gameKey": "5_71183",
      "name": "风语·腰·甲（御劲）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 500.2,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71184",
      "gameKey": "5_71184",
      "name": "风语·兵·甲（外攻）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 270,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71185",
      "gameKey": "5_71185",
      "name": "风语·兵·甲（内攻）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 325,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71186",
      "gameKey": "5_71186",
      "name": "风语·兵·甲（疗伤）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 430.2,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71187",
      "gameKey": "5_71187",
      "name": "风语·兵·甲（武伤）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 323,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71189",
      "gameKey": "5_71189",
      "name": "风语·瀑沙磨石（外攻）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 32.33,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71190",
      "gameKey": "5_71190",
      "name": "风语·坠宵磨石（内攻）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 44,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71191",
      "gameKey": "5_71191",
      "name": "风语·絮泊磨石（疗伤）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 29.36,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_54056",
      "gameKey": "5_54056",
      "name": "珠·万灵",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 9999,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_54537",
      "gameKey": "5_54537",
      "name": "碎空石",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 99.88,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_78159",
      "gameKey": "5_78159",
      "name": "传说腰带·【月】",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 6788,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_81656",
      "gameKey": "5_81656",
      "name": "传说头饰·【江】",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 800,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_81657",
      "gameKey": "5_81657",
      "name": "传说腰带·【江】",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 3999,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_81658",
      "gameKey": "5_81658",
      "name": "传说下装·【江】",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2328.2,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_85652",
      "gameKey": "5_85652",
      "name": "传说头饰·【尧】",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 999,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_85654",
      "gameKey": "5_85654",
      "name": "传说下装·【尧】",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 5987.71,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_85646",
      "gameKey": "5_85646",
      "name": "珠·暗影",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2332.33,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89415",
      "gameKey": "5_89415",
      "name": "云冈石·裤（身法）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1221.84,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89416",
      "gameKey": "5_89416",
      "name": "云冈石·裤（元气）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1555,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89417",
      "gameKey": "5_89417",
      "name": "云冈石·裤（力道）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2459.04,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89418",
      "gameKey": "5_89418",
      "name": "云冈石·裤（根骨）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1088,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89419",
      "gameKey": "5_89419",
      "name": "云冈石·裤（仇恨）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2351.81,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89420",
      "gameKey": "5_89420",
      "name": "云冈石·裤（破防）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1839.99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89421",
      "gameKey": "5_89421",
      "name": "云冈石·裤（会心）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1000.22,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89422",
      "gameKey": "5_89422",
      "name": "云冈石·裤（无双）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1660.48,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89423",
      "gameKey": "5_89423",
      "name": "云冈石·头（攻击）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1058,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89424",
      "gameKey": "5_89424",
      "name": "云冈石·头（治疗）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1400,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89425",
      "gameKey": "5_89425",
      "name": "云冈石·头（加速）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1990.7,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89429",
      "gameKey": "5_89429",
      "name": "云冈石·兵（攻击）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2230.26,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89430",
      "gameKey": "5_89430",
      "name": "云冈石·兵（疗伤）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2200,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_89431",
      "gameKey": "5_89431",
      "name": "云冈石·兵（武伤）",
      "category": "enhance",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1982.71,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_90213",
      "gameKey": "5_90213",
      "name": "飞爪",
      "category": "other",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 7.14,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_171",
      "gameKey": "10_171",
      "name": "溪山图经瓶·菡萏",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2897.48,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_172",
      "gameKey": "10_172",
      "name": "跃龙兵器架",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 3900.01,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_35004",
      "gameKey": "5_35004",
      "name": "红荣素·臻",
      "category": "other",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2.19,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_35005",
      "gameKey": "5_35005",
      "name": "鸦青素·臻",
      "category": "other",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2.9,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_35006",
      "gameKey": "5_35006",
      "name": "曦晖素·臻",
      "category": "other",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2.62,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_35007",
      "gameKey": "5_35007",
      "name": "寒信素·臻",
      "category": "other",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2.76,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_35044",
      "gameKey": "5_35044",
      "name": "沉夜素·臻",
      "category": "other",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 0.04,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_151",
      "gameKey": "10_151",
      "name": "竹挂幔·四",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 5900.03,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_152",
      "gameKey": "10_152",
      "name": "潮思篾编灯笼",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1562,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_153",
      "gameKey": "10_153",
      "name": "三叠锡灯笼",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 488.47,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_154",
      "gameKey": "10_154",
      "name": "榧木帨架",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1950.9,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_155",
      "gameKey": "10_155",
      "name": "沉香木帨架",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 3729.01,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_156",
      "gameKey": "10_156",
      "name": "素髹桐木笔架",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 797.71,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_158",
      "gameKey": "10_158",
      "name": "铸铁煎壶",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 798,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_159",
      "gameKey": "10_159",
      "name": "木兰花妆奁",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 3125.21,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_160",
      "gameKey": "10_160",
      "name": "涂胡粉坐障",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 5589.89,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_161",
      "gameKey": "10_161",
      "name": "金线影枝毡",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 4859,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_162",
      "gameKey": "10_162",
      "name": "鱼牙映园",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 3700.76,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_163",
      "gameKey": "10_163",
      "name": "桑木灯檠",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 48.35,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_165",
      "gameKey": "10_165",
      "name": "天竺石仿仓楼灯",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 582.29,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_166",
      "gameKey": "10_166",
      "name": "零陵石灯",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 2276.83,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_167",
      "gameKey": "10_167",
      "name": "赤漆灯檠",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 2670,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_168",
      "gameKey": "10_168",
      "name": "鎏金香浮屠",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 1785.93,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_169",
      "gameKey": "10_169",
      "name": "溶溶月",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 3299,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_170",
      "gameKey": "10_170",
      "name": "竹制风灯",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_94",
      "gameKey": "10_94",
      "name": "低矮木榻",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 124,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_95",
      "gameKey": "10_95",
      "name": "桑木架",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 111,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_96",
      "gameKey": "10_96",
      "name": "榧木架",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 122,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_97",
      "gameKey": "10_97",
      "name": "花梨木矮柜",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 120.67,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_98",
      "gameKey": "10_98",
      "name": "花梨木曲柜",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 104,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_99",
      "gameKey": "10_99",
      "name": "赤漆铜平脱药柜",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 132,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_100",
      "gameKey": "10_100",
      "name": "赤漆药柜",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 109,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_101",
      "gameKey": "10_101",
      "name": "回字平脱案",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 10000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_103",
      "gameKey": "10_103",
      "name": "桑木榻足几",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 3996,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_104",
      "gameKey": "10_104",
      "name": "赤漆台案",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 297,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_105",
      "gameKey": "10_105",
      "name": "桐木凳",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 170,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_106",
      "gameKey": "10_106",
      "name": "芦苇蒲团",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 310,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_107",
      "gameKey": "10_107",
      "name": "火毛团花绣舞筵",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 1886,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_108",
      "gameKey": "10_108",
      "name": "旧时帘",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 210.55,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_109",
      "gameKey": "10_109",
      "name": "故窗忆·一",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 90.36,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_110",
      "gameKey": "10_110",
      "name": "故窗忆·二",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 100,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_35771",
      "gameKey": "5_35771",
      "name": "绿竹墙·套件",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 795.02,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_35773",
      "gameKey": "5_35773",
      "name": "翠泠竹篱·套件",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 446.09,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_35774",
      "gameKey": "5_35774",
      "name": "杂色竹篱·套件",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 413.28,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_35775",
      "gameKey": "5_35775",
      "name": "青竹篱·套件",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 304.49,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_131",
      "gameKey": "10_131",
      "name": "桐木书灯",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 10000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_132",
      "gameKey": "10_132",
      "name": "桐木灯檠",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 3265.33,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_133",
      "gameKey": "10_133",
      "name": "荼蘼灯笼",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 210.23,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_134",
      "gameKey": "10_134",
      "name": "细布灯笼",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 333.43,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_135",
      "gameKey": "10_135",
      "name": "悬铜铃灯笼",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 3520.85,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_136",
      "gameKey": "10_136",
      "name": "锡灯笼",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 560.01,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_137",
      "gameKey": "10_137",
      "name": "长系锡灯笼",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 2266.11,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_139",
      "gameKey": "10_139",
      "name": "板车",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 1500,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_140",
      "gameKey": "10_140",
      "name": "明霞锦被褥",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 4299.72,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_141",
      "gameKey": "10_141",
      "name": "莞草茵席",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 6677,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_142",
      "gameKey": "10_142",
      "name": "桑木柜",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 442.64,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_143",
      "gameKey": "10_143",
      "name": "云石台案",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1125.91,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_145",
      "gameKey": "10_145",
      "name": "雕枋桌",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 888.03,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_146",
      "gameKey": "10_146",
      "name": "铜平脱扶手椅",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1760.19,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_147",
      "gameKey": "10_147",
      "name": "榧木椅",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 3253,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_148",
      "gameKey": "10_148",
      "name": "蕉叶酒胡椅",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 115,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_149",
      "gameKey": "10_149",
      "name": "溪山图立屏",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2435,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_150",
      "gameKey": "10_150",
      "name": "二君子五牒屏",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2877,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_130",
      "gameKey": "10_130",
      "name": "扁青涂花梨木书灯",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 1000.2,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_111",
      "gameKey": "10_111",
      "name": "桐木灯笼",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 108,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_112",
      "gameKey": "10_112",
      "name": "木桶·一",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 295.99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_113",
      "gameKey": "10_113",
      "name": "篾编竹篮·二",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 299.99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_114",
      "gameKey": "10_114",
      "name": "赤漆妆奁",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 500,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_115",
      "gameKey": "10_115",
      "name": "古怪坐垫",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 464.5,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_116",
      "gameKey": "10_116",
      "name": "蓝染布卷",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 1,
      "source": "制造",
      "base": 998,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_117",
      "gameKey": "10_117",
      "name": "织锦席",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 1999,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_118",
      "gameKey": "10_118",
      "name": "赤漆柜",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 393.57,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_119",
      "gameKey": "10_119",
      "name": "赤漆木几",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 389.5,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_120",
      "gameKey": "10_120",
      "name": "葵草台案",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 194.96,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_121",
      "gameKey": "10_121",
      "name": "葵草坐垫",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 3590.55,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_122",
      "gameKey": "10_122",
      "name": "桑木长凳",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 287.88,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_123",
      "gameKey": "10_123",
      "name": "绮罗人物四牒屏",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 2499,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_124",
      "gameKey": "10_124",
      "name": "彩锦半拢·一",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 2300.63,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_125",
      "gameKey": "10_125",
      "name": "彩锦半拢·二",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 1168.92,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_126",
      "gameKey": "10_126",
      "name": "彩锦半拢·三",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 1471.91,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_127",
      "gameKey": "10_127",
      "name": "彩锦半拢·四",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 1628,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_128",
      "gameKey": "10_128",
      "name": "彩锦半拢·五",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 1158.6,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_129",
      "gameKey": "10_129",
      "name": "彩锦半拢·六",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 2,
      "source": "制造",
      "base": 3150,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_421",
      "gameKey": "10_421",
      "name": "飒飒黄叶席",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1700,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_427",
      "gameKey": "10_427",
      "name": "原木牌桌",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 3222.61,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_429",
      "gameKey": "10_429",
      "name": "主位壸门凳",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 999.91,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_433",
      "gameKey": "10_433",
      "name": "毛竹无脚椅",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 455.01,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_434",
      "gameKey": "10_434",
      "name": "黄杨木椅",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 460.51,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_436",
      "gameKey": "10_436",
      "name": "黄杨立屏",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 3977.05,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_437",
      "gameKey": "10_437",
      "name": "曲面黄杨立屏·左",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 3992.92,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_438",
      "gameKey": "10_438",
      "name": "曲面黄杨立屏·右",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2899.97,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_444",
      "gameKey": "10_444",
      "name": "仿官制团花毡",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 3577.83,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_446",
      "gameKey": "10_446",
      "name": "丝绸挂幔·一",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2699,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_447",
      "gameKey": "10_447",
      "name": "丝绸挂幔·二",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1971.33,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_450",
      "gameKey": "10_450",
      "name": "秋宵长时",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 3575.51,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_469",
      "gameKey": "10_469",
      "name": "云深处",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 5320.15,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_470",
      "gameKey": "10_470",
      "name": "三叶红",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1743.79,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_471",
      "gameKey": "10_471",
      "name": "天泽灯笼",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2675,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_478",
      "gameKey": "10_478",
      "name": "沧海泪·一",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 4202.07,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_479",
      "gameKey": "10_479",
      "name": "沧海泪·二",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 8888.88,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_490",
      "gameKey": "10_490",
      "name": "遗世仙灯檠",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 3280.13,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_492",
      "gameKey": "10_492",
      "name": "赤漆灯联",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 3992.9,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_493",
      "gameKey": "10_493",
      "name": "福光临门",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 3666.91,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_504",
      "gameKey": "10_504",
      "name": "贡案",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1897.91,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_38127",
      "gameKey": "5_38127",
      "name": "地下室·木质标准包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 790.62,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_38373",
      "gameKey": "5_38373",
      "name": "积木·木质标准包·优",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2100.52,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_38374",
      "gameKey": "5_38374",
      "name": "积木·木质标准补充包·优",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 999.99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_38927",
      "gameKey": "5_38927",
      "name": "驯兽密语笺",
      "category": "material",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 4.21,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_671",
      "gameKey": "10_671",
      "name": "红木矮柜",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1099.99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_672",
      "gameKey": "10_672",
      "name": "红日升山竹木几",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2667.9,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_673",
      "gameKey": "10_673",
      "name": "夕暮流云椅",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 530.31,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_674",
      "gameKey": "10_674",
      "name": "祥云纹水蓝纱屏",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1699.99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_675",
      "gameKey": "10_675",
      "name": "靛蓝麻布毯",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2471,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_676",
      "gameKey": "10_676",
      "name": "驼绒绣毯",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 869.9,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_677",
      "gameKey": "10_677",
      "name": "方正书灯",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1650.32,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_678",
      "gameKey": "10_678",
      "name": "纹竹灯笼",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 3222.6,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_679",
      "gameKey": "10_679",
      "name": "点梅灯笼",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2487.91,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_680",
      "gameKey": "10_680",
      "name": "红木凤头三叠灯",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1699.99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_681",
      "gameKey": "10_681",
      "name": "故纸堆",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 444.11,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_682",
      "gameKey": "10_682",
      "name": "望南屏图",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2299.99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_683",
      "gameKey": "10_683",
      "name": "飞瀑图",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1692,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_684",
      "gameKey": "10_684",
      "name": "竹排庭灯",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1380.01,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_685",
      "gameKey": "10_685",
      "name": "雕花仿楼灯",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2999,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_686",
      "gameKey": "10_686",
      "name": "红陶炉",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 960.49,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_957",
      "gameKey": "10_957",
      "name": "燃木庭灯",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 687,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1082",
      "gameKey": "10_1082",
      "name": "木制花池架",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 520,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1083",
      "gameKey": "10_1083",
      "name": "碧海锦帘",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 650,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1084",
      "gameKey": "10_1084",
      "name": "承流云锦帘",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 888,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1085",
      "gameKey": "10_1085",
      "name": "旧铡刀",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 250.88,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1086",
      "gameKey": "10_1086",
      "name": "迷沼枯藤·一",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 488,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1087",
      "gameKey": "10_1087",
      "name": "迷沼枯藤·二",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 488,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1088",
      "gameKey": "10_1088",
      "name": "迷沼枯藤·三",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 520,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1089",
      "gameKey": "10_1089",
      "name": "迷沼枯藤·四",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 488.1,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1090",
      "gameKey": "10_1090",
      "name": "迷沼枯藤·五",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 486,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1277",
      "gameKey": "10_1277",
      "name": "匾额·古董",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 10000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1278",
      "gameKey": "10_1278",
      "name": "匾额·书院",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 10000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1279",
      "gameKey": "10_1279",
      "name": "匾额·书库",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 10000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1280",
      "gameKey": "10_1280",
      "name": "匾额·钱庄",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 10000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_687",
      "gameKey": "10_687",
      "name": "木檐旧立牌",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2918.18,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_688",
      "gameKey": "10_688",
      "name": "新竹小架",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 888.91,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_943",
      "gameKey": "10_943",
      "name": "悠然自得床",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 690.4,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_944",
      "gameKey": "10_944",
      "name": "明棠灯笼",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 668.24,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_945",
      "gameKey": "10_945",
      "name": "自华屏",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1098.93,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_946",
      "gameKey": "10_946",
      "name": "一线牵幔",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 460,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_947",
      "gameKey": "10_947",
      "name": "简素台",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 830.83,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_949",
      "gameKey": "10_949",
      "name": "简素摆灯",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 688.58,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_950",
      "gameKey": "10_950",
      "name": "伴茶碟",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 399,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_951",
      "gameKey": "10_951",
      "name": "封螯盏",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 499,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_952",
      "gameKey": "10_952",
      "name": "方纹纱格挂落·二",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 3993,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_953",
      "gameKey": "10_953",
      "name": "榉木转角柜",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1650,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_954",
      "gameKey": "10_954",
      "name": "锦葵和露",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1140.77,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_955",
      "gameKey": "10_955",
      "name": "幽华一枝岚",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_956",
      "gameKey": "10_956",
      "name": "簇篷庭灯",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 630,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1570",
      "gameKey": "10_1570",
      "name": "半日归园",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 455.22,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1571",
      "gameKey": "10_1571",
      "name": "玲珑多宝赤漆柜·一",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 939,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1572",
      "gameKey": "10_1572",
      "name": "玲珑多宝赤漆柜·二",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1070.11,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1573",
      "gameKey": "10_1573",
      "name": "素皎瓷器·一",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 677,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1574",
      "gameKey": "10_1574",
      "name": "素皎瓷器·二",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 320.02,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1575",
      "gameKey": "10_1575",
      "name": "素皎瓷器·三",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 348.06,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1576",
      "gameKey": "10_1576",
      "name": "素皎瓷器·四",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 320.71,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1577",
      "gameKey": "10_1577",
      "name": "素皎瓷器·五",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 330.31,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1578",
      "gameKey": "10_1578",
      "name": "素皎瓷器·六",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 320.73,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1587",
      "gameKey": "10_1587",
      "name": "菡萏池灯·四",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 499.99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1605",
      "gameKey": "10_1605",
      "name": "黑山冥蛇·一",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 638.21,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1606",
      "gameKey": "10_1606",
      "name": "黑山冥蛇·二",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 520,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1607",
      "gameKey": "10_1607",
      "name": "黑山冥蛇·三",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1220.01,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1772",
      "gameKey": "10_1772",
      "name": "章草",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2150,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1773",
      "gameKey": "10_1773",
      "name": "偶作",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2222,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1774",
      "gameKey": "10_1774",
      "name": "清漆矮柜",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 3530,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1775",
      "gameKey": "10_1775",
      "name": "清漆素纹架",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1826,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1776",
      "gameKey": "10_1776",
      "name": "清漆博古架",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1820.83,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1777",
      "gameKey": "10_1777",
      "name": "夏风晚荷架",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1857.25,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1282",
      "gameKey": "10_1282",
      "name": "招牌·马商",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 20000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1283",
      "gameKey": "10_1283",
      "name": "招牌·铁匠",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 20000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1284",
      "gameKey": "10_1284",
      "name": "招牌·钱庄",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 20000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1285",
      "gameKey": "10_1285",
      "name": "招牌·药店",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 20000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1286",
      "gameKey": "10_1286",
      "name": "招牌·茶馆",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 555.65,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1477",
      "gameKey": "10_1477",
      "name": "武器架·展开",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 520,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1453",
      "gameKey": "10_1453",
      "name": "缘东窗",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 500,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1454",
      "gameKey": "10_1454",
      "name": "香辞·红",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 32.55,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1455",
      "gameKey": "10_1455",
      "name": "香辞·白",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 28.08,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1456",
      "gameKey": "10_1456",
      "name": "香辞·粉",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 59.96,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1457",
      "gameKey": "10_1457",
      "name": "香辞·紫",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 55.88,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1458",
      "gameKey": "10_1458",
      "name": "香辞·蓝",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 32.36,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1459",
      "gameKey": "10_1459",
      "name": "声声慢",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 652.22,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1460",
      "gameKey": "10_1460",
      "name": "松风寒",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1029.9,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1461",
      "gameKey": "10_1461",
      "name": "梧桐月",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 580,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1462",
      "gameKey": "10_1462",
      "name": "望春风",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2889.9,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1463",
      "gameKey": "10_1463",
      "name": "飞骏庭灯",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 666.66,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1464",
      "gameKey": "10_1464",
      "name": "悬壶问世",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 999.99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1465",
      "gameKey": "10_1465",
      "name": "香料鹿车",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 2499,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2036",
      "gameKey": "10_2036",
      "name": "铜雕踩球对狮·左",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1466,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2097",
      "gameKey": "10_2097",
      "name": "双层杂木架",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 620.02,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2098",
      "gameKey": "10_2098",
      "name": "三层杂木架",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 600.03,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2099",
      "gameKey": "10_2099",
      "name": "杂木长架",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 620,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2100",
      "gameKey": "10_2100",
      "name": "木桁架",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 420.66,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2101",
      "gameKey": "10_2101",
      "name": "绿叶红荷",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 310.24,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2102",
      "gameKey": "10_2102",
      "name": "田田莲叶·一",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 335.12,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2103",
      "gameKey": "10_2103",
      "name": "田田莲叶·二",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 285.72,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2104",
      "gameKey": "10_2104",
      "name": "菡萏香莲",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 255.03,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2105",
      "gameKey": "10_2105",
      "name": "芰荷含苞",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 310.03,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2106",
      "gameKey": "10_2106",
      "name": "独支莲叶·一",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 239.89,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2107",
      "gameKey": "10_2107",
      "name": "独支莲叶·二",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 230.06,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2230",
      "gameKey": "10_2230",
      "name": "暮春落花·二",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 200.44,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2231",
      "gameKey": "10_2231",
      "name": "暮春落花·三",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 267.33,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2232",
      "gameKey": "10_2232",
      "name": "暮春落花·四",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 294.66,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1780",
      "gameKey": "10_1780",
      "name": "絮语飘铃",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 518.27,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1879",
      "gameKey": "10_1879",
      "name": "绀云霞照毯",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1665,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1895",
      "gameKey": "10_1895",
      "name": "槿花茵·二",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 123.88,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1896",
      "gameKey": "10_1896",
      "name": "槿花茵·三",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 92.3,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1897",
      "gameKey": "10_1897",
      "name": "槿花茵·四",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 75.06,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1898",
      "gameKey": "10_1898",
      "name": "槿花茵·五",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 78.85,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_1881",
      "gameKey": "10_1881",
      "name": "彩饰宝幢",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1340.94,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2029",
      "gameKey": "10_2029",
      "name": "飞燕纸鸢",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 888.12,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2030",
      "gameKey": "10_2030",
      "name": "要努力纸鸢",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 980.15,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2031",
      "gameKey": "10_2031",
      "name": "大眼萌纸鸢",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 720,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2032",
      "gameKey": "10_2032",
      "name": "刚买的纸鸢",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 411.06,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2033",
      "gameKey": "10_2033",
      "name": "一串纸鸢",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 400.62,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2035",
      "gameKey": "10_2035",
      "name": "大满格",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1340.53,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2233",
      "gameKey": "10_2233",
      "name": "暮春落花·五",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 299.22,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2234",
      "gameKey": "10_2234",
      "name": "报春花落·一",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 220.53,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2235",
      "gameKey": "10_2235",
      "name": "报春花落·二",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 256.12,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2236",
      "gameKey": "10_2236",
      "name": "报春花落·三",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 270.62,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2237",
      "gameKey": "10_2237",
      "name": "报春花落·四",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 233.55,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2238",
      "gameKey": "10_2238",
      "name": "报春花落·五",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 250.94,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2242",
      "gameKey": "10_2242",
      "name": "云雷槽纹方柱",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1095.02,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2243",
      "gameKey": "10_2243",
      "name": "兽座槽纹圆柱",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 3375.31,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_10_2244",
      "gameKey": "10_2244",
      "name": "云纹莲座圆柱",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 4,
      "source": "制造",
      "base": 1086.79,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87875",
      "gameKey": "5_87875",
      "name": "拼布灰7补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2200.16,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87874",
      "gameKey": "5_87874",
      "name": "拼布灰5补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 3280.93,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87873",
      "gameKey": "5_87873",
      "name": "拼布灰4补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 900.66,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87872",
      "gameKey": "5_87872",
      "name": "拼布灰3补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 900,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87871",
      "gameKey": "5_87871",
      "name": "拼布灰2补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 750.15,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87870",
      "gameKey": "5_87870",
      "name": "拼布灰1补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 900.48,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87869",
      "gameKey": "5_87869",
      "name": "拼布褐13补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 730.38,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87868",
      "gameKey": "5_87868",
      "name": "拼布褐9补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 800.16,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87867",
      "gameKey": "5_87867",
      "name": "拼布褐8补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 788.2,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87866",
      "gameKey": "5_87866",
      "name": "拼布褐7补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 800.16,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87865",
      "gameKey": "5_87865",
      "name": "拼布褐5补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 730.23,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87864",
      "gameKey": "5_87864",
      "name": "拼布褐3补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 800.3,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87863",
      "gameKey": "5_87863",
      "name": "拼布褐2补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 3200.95,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87862",
      "gameKey": "5_87862",
      "name": "拼布褐1补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 800,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87861",
      "gameKey": "5_87861",
      "name": "拼布红13补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2235.95,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87860",
      "gameKey": "5_87860",
      "name": "拼布红10补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 730.68,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87859",
      "gameKey": "5_87859",
      "name": "拼布红8补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 800,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87858",
      "gameKey": "5_87858",
      "name": "拼布红7补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 800.69,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87857",
      "gameKey": "5_87857",
      "name": "拼布红5补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 800.94,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87856",
      "gameKey": "5_87856",
      "name": "拼布粉13补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 800,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87855",
      "gameKey": "5_87855",
      "name": "拼布粉12补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 800.39,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87854",
      "gameKey": "5_87854",
      "name": "拼布粉8补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1500.99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87853",
      "gameKey": "5_87853",
      "name": "拼布粉7补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1559.64,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87852",
      "gameKey": "5_87852",
      "name": "拼布粉5补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2200,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87851",
      "gameKey": "5_87851",
      "name": "拼布粉4补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 999.99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87850",
      "gameKey": "5_87850",
      "name": "拼布粉3补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 800.61,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87849",
      "gameKey": "5_87849",
      "name": "拼布粉2补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 820.73,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87848",
      "gameKey": "5_87848",
      "name": "拼布粉1补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 800.65,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87847",
      "gameKey": "5_87847",
      "name": "拼布紫21补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 800.69,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87846",
      "gameKey": "5_87846",
      "name": "拼布紫20补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2330.51,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87845",
      "gameKey": "5_87845",
      "name": "拼布紫19补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 800.17,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87844",
      "gameKey": "5_87844",
      "name": "拼布紫18补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 680,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87843",
      "gameKey": "5_87843",
      "name": "拼布紫16补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2300.69,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87842",
      "gameKey": "5_87842",
      "name": "拼布紫15补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 730,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87841",
      "gameKey": "5_87841",
      "name": "拼布紫14补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 800,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87840",
      "gameKey": "5_87840",
      "name": "拼布紫13补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 750.89,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87839",
      "gameKey": "5_87839",
      "name": "拼布紫12补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 800.71,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87838",
      "gameKey": "5_87838",
      "name": "拼布紫11补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 800.91,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87837",
      "gameKey": "5_87837",
      "name": "拼布紫9补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 900.11,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87836",
      "gameKey": "5_87836",
      "name": "拼布紫8补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 800.97,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87835",
      "gameKey": "5_87835",
      "name": "拼布紫7补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 800.83,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87834",
      "gameKey": "5_87834",
      "name": "拼布紫6补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2200.49,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87833",
      "gameKey": "5_87833",
      "name": "拼布紫3补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 799.88,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87832",
      "gameKey": "5_87832",
      "name": "拼布紫2补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1507.08,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87831",
      "gameKey": "5_87831",
      "name": "拼布蓝16补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 909.45,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87830",
      "gameKey": "5_87830",
      "name": "拼布蓝13补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 800.01,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87829",
      "gameKey": "5_87829",
      "name": "拼布蓝11补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1500,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87828",
      "gameKey": "5_87828",
      "name": "拼布蓝10补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 799.35,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87827",
      "gameKey": "5_87827",
      "name": "拼布蓝8补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 900.66,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87826",
      "gameKey": "5_87826",
      "name": "拼布蓝7补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 777.77,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87825",
      "gameKey": "5_87825",
      "name": "拼布蓝6补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 750.08,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87824",
      "gameKey": "5_87824",
      "name": "拼布蓝5补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 800.11,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87823",
      "gameKey": "5_87823",
      "name": "拼布蓝3补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 799.99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87822",
      "gameKey": "5_87822",
      "name": "拼布蓝2补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 790.72,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87821",
      "gameKey": "5_87821",
      "name": "拼布绿20补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 730.78,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87820",
      "gameKey": "5_87820",
      "name": "拼布绿19补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 799,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87819",
      "gameKey": "5_87819",
      "name": "拼布绿18补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 800.77,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87818",
      "gameKey": "5_87818",
      "name": "拼布绿17补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2288.53,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87817",
      "gameKey": "5_87817",
      "name": "拼布绿14补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 3300.41,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87816",
      "gameKey": "5_87816",
      "name": "拼布绿12补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 798.77,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87815",
      "gameKey": "5_87815",
      "name": "拼布绿10补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 799.69,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87814",
      "gameKey": "5_87814",
      "name": "拼布绿8补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 740.12,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87813",
      "gameKey": "5_87813",
      "name": "拼布绿7补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 799.01,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87812",
      "gameKey": "5_87812",
      "name": "拼布绿5补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 798.88,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87811",
      "gameKey": "5_87811",
      "name": "拼布绿3补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87810",
      "gameKey": "5_87810",
      "name": "拼布黄13补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 900.04,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87809",
      "gameKey": "5_87809",
      "name": "拼布黄11补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 800,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87808",
      "gameKey": "5_87808",
      "name": "拼布黄10补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 730,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87807",
      "gameKey": "5_87807",
      "name": "拼布黄7补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 2249.58,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87806",
      "gameKey": "5_87806",
      "name": "拼布黄6补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 800.42,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87805",
      "gameKey": "5_87805",
      "name": "拼布黄4补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 790.96,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_87804",
      "gameKey": "5_87804",
      "name": "拼布黄3补充包",
      "category": "homeland",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 1038.97,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_90212",
      "gameKey": "5_90212",
      "name": "黑山伪装",
      "category": "other",
      "life": false,
      "kind": "product",
      "skillId": "",
      "tier": 3,
      "source": "制造",
      "base": 300,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31983",
      "gameKey": "5_31983",
      "name": "青菜",
      "category": "material",
      "life": true,
      "kind": "material",
      "skillId": "pengren",
      "tier": 1,
      "source": "交易行",
      "base": 0.63,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_1830",
      "gameKey": "5_1830",
      "name": "郎官清",
      "category": "material",
      "life": true,
      "kind": "material",
      "skillId": "pengren",
      "tier": 2,
      "source": "交易行",
      "base": 12.99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31975",
      "gameKey": "5_31975",
      "name": "白糖",
      "category": "material",
      "life": true,
      "kind": "material",
      "skillId": "pengren",
      "tier": 1,
      "source": "交易行",
      "base": 0.64,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_1832",
      "gameKey": "5_1832",
      "name": "富水",
      "category": "material",
      "life": true,
      "kind": "material",
      "skillId": "pengren",
      "tier": 3,
      "source": "交易行",
      "base": 9995,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31979",
      "gameKey": "5_31979",
      "name": "青瓜",
      "category": "material",
      "life": true,
      "kind": "material",
      "skillId": "pengren",
      "tier": 1,
      "source": "交易行",
      "base": 3.59,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31981",
      "gameKey": "5_31981",
      "name": "红萝卜",
      "category": "material",
      "life": true,
      "kind": "material",
      "skillId": "pengren",
      "tier": 1,
      "source": "交易行",
      "base": 10000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31971",
      "gameKey": "5_31971",
      "name": "莲藕",
      "category": "material",
      "life": true,
      "kind": "material",
      "skillId": "pengren",
      "tier": 1,
      "source": "交易行",
      "base": 0.65,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_32007",
      "gameKey": "5_32007",
      "name": "黄酒",
      "category": "material",
      "life": true,
      "kind": "material",
      "skillId": "pengren",
      "tier": 1,
      "source": "交易行",
      "base": 10000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_32008",
      "gameKey": "5_32008",
      "name": "秋露白",
      "category": "material",
      "life": true,
      "kind": "material",
      "skillId": "pengren",
      "tier": 1,
      "source": "交易行",
      "base": 0.5,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_32010",
      "gameKey": "5_32010",
      "name": "土窟春",
      "category": "material",
      "life": true,
      "kind": "material",
      "skillId": "pengren",
      "tier": 1,
      "source": "交易行",
      "base": 2.5,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_32011",
      "gameKey": "5_32011",
      "name": "新丰酒",
      "category": "material",
      "life": true,
      "kind": "material",
      "skillId": "pengren",
      "tier": 1,
      "source": "交易行",
      "base": 10000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_32012",
      "gameKey": "5_32012",
      "name": "若下",
      "category": "material",
      "life": true,
      "kind": "material",
      "skillId": "pengren",
      "tier": 1,
      "source": "交易行",
      "base": 10000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31980",
      "gameKey": "5_31980",
      "name": "粟米",
      "category": "material",
      "life": true,
      "kind": "material",
      "skillId": "pengren",
      "tier": 1,
      "source": "交易行",
      "base": 0.63,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_31982",
      "gameKey": "5_31982",
      "name": "蒜苗",
      "category": "material",
      "life": true,
      "kind": "material",
      "skillId": "pengren",
      "tier": 1,
      "source": "交易行",
      "base": 0.65,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_34184",
      "gameKey": "5_34184",
      "name": "连金泥",
      "category": "material",
      "life": false,
      "kind": "material",
      "skillId": "",
      "tier": 4,
      "source": "交易行",
      "base": 6.53,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_35786",
      "gameKey": "5_35786",
      "name": "观日玉",
      "category": "material",
      "life": false,
      "kind": "material",
      "skillId": "",
      "tier": 4,
      "source": "交易行",
      "base": 664,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_36491",
      "gameKey": "5_36491",
      "name": "流波玉",
      "category": "material",
      "life": false,
      "kind": "material",
      "skillId": "",
      "tier": 4,
      "source": "交易行",
      "base": 2.88,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_39235",
      "gameKey": "5_39235",
      "name": "五元砂",
      "category": "material",
      "life": false,
      "kind": "material",
      "skillId": "",
      "tier": 4,
      "source": "交易行",
      "base": 65.31,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_41556",
      "gameKey": "5_41556",
      "name": "雷墨砂",
      "category": "material",
      "life": false,
      "kind": "material",
      "skillId": "",
      "tier": 4,
      "source": "交易行",
      "base": 2.71,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_44402",
      "gameKey": "5_44402",
      "name": "龙堂砂",
      "category": "material",
      "life": false,
      "kind": "material",
      "skillId": "",
      "tier": 4,
      "source": "交易行",
      "base": 10,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_47758",
      "gameKey": "5_47758",
      "name": "星汉砂",
      "category": "material",
      "life": false,
      "kind": "material",
      "skillId": "",
      "tier": 4,
      "source": "交易行",
      "base": 10.88,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_50736",
      "gameKey": "5_50736",
      "name": "玄黄砂",
      "category": "material",
      "life": false,
      "kind": "material",
      "skillId": "",
      "tier": 4,
      "source": "交易行",
      "base": 270,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_54059",
      "gameKey": "5_54059",
      "name": "泣麟砂",
      "category": "material",
      "life": false,
      "kind": "material",
      "skillId": "",
      "tier": 4,
      "source": "交易行",
      "base": 1,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_68121",
      "gameKey": "5_68121",
      "name": "龙朔砂",
      "category": "material",
      "life": false,
      "kind": "material",
      "skillId": "",
      "tier": 4,
      "source": "交易行",
      "base": 20000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_71402",
      "gameKey": "5_71402",
      "name": "阳燧珠",
      "category": "material",
      "life": false,
      "kind": "material",
      "skillId": "",
      "tier": 4,
      "source": "交易行",
      "base": 1.47,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_78164",
      "gameKey": "5_78164",
      "name": "玉龙子",
      "category": "material",
      "life": false,
      "kind": "material",
      "skillId": "",
      "tier": 4,
      "source": "交易行",
      "base": 0.99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_81662",
      "gameKey": "5_81662",
      "name": "天山碧髓",
      "category": "material",
      "life": false,
      "kind": "material",
      "skillId": "",
      "tier": 4,
      "source": "交易行",
      "base": 1.1,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_85795",
      "gameKey": "5_85795",
      "name": "阆风炎魄",
      "category": "material",
      "life": false,
      "kind": "material",
      "skillId": "",
      "tier": 4,
      "source": "交易行",
      "base": 398,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_40562",
      "gameKey": "5_40562",
      "name": "砭石",
      "category": "material",
      "life": true,
      "kind": "material",
      "skillId": "zhiyao",
      "tier": 3,
      "source": "交易行",
      "base": 10000,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_6250",
      "gameKey": "5_6250",
      "name": "锡制钥匙模",
      "category": "treasure",
      "life": false,
      "kind": "material",
      "skillId": "",
      "tier": 1,
      "source": "交易行",
      "base": 0.66,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_6251",
      "gameKey": "5_6251",
      "name": "精铁钥匙模",
      "category": "treasure",
      "life": false,
      "kind": "material",
      "skillId": "",
      "tier": 1,
      "source": "交易行",
      "base": 0.8,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_10030",
      "gameKey": "5_10030",
      "name": "鎏金钥匙模",
      "category": "treasure",
      "life": false,
      "kind": "material",
      "skillId": "",
      "tier": 1,
      "source": "交易行",
      "base": 13,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_35780",
      "gameKey": "5_35780",
      "name": "密陀油",
      "category": "material",
      "life": false,
      "kind": "material",
      "skillId": "",
      "tier": 2,
      "source": "交易行",
      "base": 6.49,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_2871",
      "gameKey": "5_2871",
      "name": "五彩墨",
      "category": "material",
      "life": false,
      "kind": "material",
      "skillId": "",
      "tier": 2,
      "source": "交易行",
      "base": 2,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_3573",
      "gameKey": "5_3573",
      "name": "水纹纸",
      "category": "material",
      "life": false,
      "kind": "material",
      "skillId": "",
      "tier": 1,
      "source": "交易行",
      "base": 0.15,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_3843",
      "gameKey": "5_3843",
      "name": "徽墨",
      "category": "material",
      "life": false,
      "kind": "material",
      "skillId": "",
      "tier": 2,
      "source": "交易行",
      "base": 2.99,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_3574",
      "gameKey": "5_3574",
      "name": "浣花笺",
      "category": "material",
      "life": false,
      "kind": "material",
      "skillId": "",
      "tier": 2,
      "source": "交易行",
      "base": 0.7,
      "priceSource": "auction",
      "verified": true,
      "origin": "JX3BOX 行情目录 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_x_5_32009",
      "gameKey": "5_32009",
      "name": "干和",
      "category": "material",
      "life": true,
      "kind": "material",
      "skillId": "pengren",
      "tier": 1,
      "source": "交易行",
      "base": 0,
      "verified": true,
      "origin": "JX3BOX 烹饪配方 · 2026-11-22",
      "custom": false
    }
  ],
  "recipes": [
    {
      "id": "m_tailoring_1480",
      "kind": "craft",
      "skillId": "fengren",
      "name": "玄元星平衫",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "xuan_yuan_shan",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "fengwangjiang",
          "qty": 10
        },
        {
          "item": "shoupijiao",
          "qty": 20
        },
        {
          "item": "qicaixian",
          "qty": 20
        },
        {
          "item": "bairanxian",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1486",
      "kind": "craft",
      "skillId": "fengren",
      "name": "玄元星平鞋",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "xuan_yuan_xie",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "fengwangjiang",
          "qty": 10
        },
        {
          "item": "shoupijiao",
          "qty": 20
        },
        {
          "item": "qicaixian",
          "qty": 20
        },
        {
          "item": "bairanxian",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1492",
      "kind": "craft",
      "skillId": "fengren",
      "name": "玄元星平护腕",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "xuan_yuan_wan",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "fengwangjiang",
          "qty": 10
        },
        {
          "item": "shoupijiao",
          "qty": 20
        },
        {
          "item": "qicaixian",
          "qty": 20
        },
        {
          "item": "bairanxian",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1384",
      "kind": "craft",
      "skillId": "fengren",
      "name": "风语·衣·绣（气血）",
      "level": 30,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "fengyu_yi",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30852",
          "qty": 5
        },
        {
          "item": "m_m_5_30853",
          "qty": 5
        },
        {
          "item": "m_m_5_30828",
          "qty": 10
        },
        {
          "item": "m_m_5_89165",
          "qty": 10
        },
        {
          "item": "m_m_5_32000",
          "qty": 20
        }
      ],
      "note": "刺绣 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_tailoring_519",
      "kind": "craft",
      "skillId": "fengren",
      "name": "挂件包·背部",
      "level": 1,
      "tier": 3,
      "energy": 40,
      "fee": 0,
      "outputs": [
        {
          "item": "guajian_bei",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "baihua_bu",
          "qty": 1
        },
        {
          "item": "bairanxian",
          "qty": 2
        },
        {
          "item": "m_m_5_32000",
          "qty": 5
        }
      ],
      "note": "背包 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_tailoring_520",
      "kind": "craft",
      "skillId": "fengren",
      "name": "挂件包·腰部",
      "level": 1,
      "tier": 3,
      "energy": 40,
      "fee": 0,
      "outputs": [
        {
          "item": "guajian_yao",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "shuran_bu",
          "qty": 1
        },
        {
          "item": "bairanxian",
          "qty": 2
        },
        {
          "item": "m_m_5_32001",
          "qty": 5
        }
      ],
      "note": "背包 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_tailoring_694",
      "kind": "craft",
      "skillId": "fengren",
      "name": "蜀染布包",
      "level": 14,
      "tier": 3,
      "energy": 80,
      "fee": 0,
      "outputs": [
        {
          "item": "shuran_bag",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "shuran_bu",
          "qty": 1
        },
        {
          "item": "m_m_5_10173",
          "qty": 1
        },
        {
          "item": "bairanxian",
          "qty": 3
        }
      ],
      "note": "背包 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_tailoring_1497",
      "kind": "craft",
      "skillId": "fengren",
      "name": "锦缝春山囊",
      "level": 50,
      "tier": 4,
      "energy": 150,
      "fee": 0,
      "outputs": [
        {
          "item": "jinfeng_bag",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "shuran_bu",
          "qty": 10
        },
        {
          "item": "wuseshi",
          "qty": 10
        },
        {
          "item": "m_m_5_30856",
          "qty": 6
        },
        {
          "item": "m_m_5_30855",
          "qty": 6
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1432",
      "kind": "craft",
      "skillId": "fengren",
      "name": "隔音帐",
      "level": 10,
      "tier": 4,
      "energy": 100,
      "fee": 0,
      "outputs": [
        {
          "item": "geyin_zhang",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_10173",
          "qty": 4
        },
        {
          "item": "m_m_5_30852",
          "qty": 2
        },
        {
          "item": "bairanxian",
          "qty": 10
        }
      ],
      "note": "制品 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_tailoring_1289",
      "kind": "craft",
      "skillId": "fengren",
      "name": "七彩线",
      "level": 9,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "qicaixian",
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89298",
          "qty": 5
        },
        {
          "item": "m_m_5_30679",
          "qty": 2
        },
        {
          "item": "m_m_5_10173",
          "qty": 1
        },
        {
          "item": "bairanxian",
          "qty": 10
        },
        {
          "item": "m_m_5_32004",
          "qty": 10
        }
      ],
      "note": "制品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_tailoring_1286",
      "kind": "craft",
      "skillId": "fengren",
      "name": "蜀染布",
      "level": 6,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "shuran_bu",
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89298",
          "qty": 5
        },
        {
          "item": "m_m_5_30847",
          "qty": 2
        },
        {
          "item": "m_m_5_10173",
          "qty": 1
        },
        {
          "item": "bairanxian",
          "qty": 10
        },
        {
          "item": "m_m_5_32001",
          "qty": 10
        }
      ],
      "note": "制品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_tailoring_1285",
      "kind": "craft",
      "skillId": "fengren",
      "name": "百花布",
      "level": 1,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "baihua_bu",
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89298",
          "qty": 5
        },
        {
          "item": "m_m_5_30846",
          "qty": 2
        },
        {
          "item": "m_m_5_10173",
          "qty": 1
        },
        {
          "item": "bairanxian",
          "qty": 10
        },
        {
          "item": "m_m_5_32000",
          "qty": 10
        }
      ],
      "note": "制品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_tailoring_1288",
      "kind": "craft",
      "skillId": "fengren",
      "name": "银丝缎",
      "level": 8,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "yinsi_duan",
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89298",
          "qty": 5
        },
        {
          "item": "m_m_5_30828",
          "qty": 2
        },
        {
          "item": "m_m_5_10173",
          "qty": 1
        },
        {
          "item": "bairanxian",
          "qty": 10
        },
        {
          "item": "m_m_5_32003",
          "qty": 10
        }
      ],
      "note": "制品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_tailoring_1287",
      "kind": "craft",
      "skillId": "fengren",
      "name": "五色石",
      "level": 7,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "wuseshi",
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89298",
          "qty": 5
        },
        {
          "item": "m_m_5_30848",
          "qty": 2
        },
        {
          "item": "m_m_5_10173",
          "qty": 1
        },
        {
          "item": "bairanxian",
          "qty": 10
        },
        {
          "item": "m_m_5_32002",
          "qty": 10
        }
      ],
      "note": "制品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_tailoring_1478",
      "kind": "craft",
      "skillId": "fengren",
      "name": "玄元木声衫",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_7_112589",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30856",
          "qty": 10
        },
        {
          "item": "m_m_5_30850",
          "qty": 20
        },
        {
          "item": "wuseshi",
          "qty": 20
        },
        {
          "item": "bairanxian",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1479",
      "kind": "craft",
      "skillId": "fengren",
      "name": "玄元松绿衫",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_7_112588",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30853",
          "qty": 10
        },
        {
          "item": "m_m_5_30845",
          "qty": 20
        },
        {
          "item": "yinsi_duan",
          "qty": 20
        },
        {
          "item": "bairanxian",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1222",
      "kind": "craft",
      "skillId": "fengren",
      "name": "绝世上衣·【寒】",
      "level": 9,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_31231",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_31397",
          "qty": 1
        },
        {
          "item": "m_m_5_30855",
          "qty": 10
        },
        {
          "item": "m_m_5_30847",
          "qty": 20
        },
        {
          "item": "wuseshi",
          "qty": 20
        },
        {
          "item": "bairanxian",
          "qty": 20
        }
      ],
      "note": "上衣 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_tailoring_1446",
      "kind": "craft",
      "skillId": "fengren",
      "name": "蜀锦绣·腕（身法）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89433",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89447",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30855",
          "qty": 6
        },
        {
          "item": "m_m_5_30853",
          "qty": 5
        },
        {
          "item": "m_m_5_30850",
          "qty": 10
        },
        {
          "item": "yinsi_duan",
          "qty": 10
        },
        {
          "item": "m_m_5_32003",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1448",
      "kind": "craft",
      "skillId": "fengren",
      "name": "蜀锦绣·腕（力道）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89435",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89449",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30856",
          "qty": 6
        },
        {
          "item": "m_m_5_30855",
          "qty": 5
        },
        {
          "item": "m_m_5_30845",
          "qty": 10
        },
        {
          "item": "qicaixian",
          "qty": 10
        },
        {
          "item": "m_m_5_32004",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1236",
      "kind": "craft",
      "skillId": "fengren",
      "name": "寻踪觅宝·护腕",
      "level": 15,
      "tier": 3,
      "energy": 80,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_31253",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30848",
          "qty": 1
        },
        {
          "item": "yinsi_duan",
          "qty": 1
        },
        {
          "item": "bairanxian",
          "qty": 10
        },
        {
          "item": "m_m_5_32001",
          "qty": 20
        }
      ],
      "note": "刺绣 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_tailoring_1493",
      "kind": "craft",
      "skillId": "fengren",
      "name": "同袍营幡",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "tongpao_fan",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "baihua_bu",
          "qty": 6
        },
        {
          "item": "shoupijiao",
          "qty": 4
        },
        {
          "item": "m_m_5_30844",
          "qty": 10
        },
        {
          "item": "m_m_5_89165",
          "qty": 6
        },
        {
          "item": "m_m_5_89166",
          "qty": 2
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1498",
      "kind": "craft",
      "skillId": "fengren",
      "name": "璧·苍生",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89568",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30856",
          "qty": 10
        },
        {
          "item": "m_m_5_30828",
          "qty": 20
        },
        {
          "item": "qicaixian",
          "qty": 20
        },
        {
          "item": "bairanxian",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1482",
      "kind": "craft",
      "skillId": "fengren",
      "name": "玄元烽火鞋",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_7_112569",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.7600002288818359
        },
        {
          "item": "m_x_7_114864",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.013333320617675781
        },
        {
          "item": "m_x_7_112793_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.013333320617675781
        },
        {
          "item": "m_x_7_112794_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.013333320617675781
        },
        {
          "item": "m_x_7_114862_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.0666666030883789
        },
        {
          "item": "m_x_7_114863_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.0666666030883789
        },
        {
          "item": "m_x_7_114864",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.0666666030883789
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30853",
          "qty": 10
        },
        {
          "item": "m_m_5_30845",
          "qty": 20
        },
        {
          "item": "yinsi_duan",
          "qty": 20
        },
        {
          "item": "m_m_5_90338",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1481",
      "kind": "craft",
      "skillId": "fengren",
      "name": "玄元赤地鞋",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_7_112568",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.7600002288818359
        },
        {
          "item": "m_x_7_114861",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.013333320617675781
        },
        {
          "item": "m_x_7_112790_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.013333320617675781
        },
        {
          "item": "m_x_7_112791_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.013333320617675781
        },
        {
          "item": "m_x_7_114859_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.0666666030883789
        },
        {
          "item": "m_x_7_114860_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.0666666030883789
        },
        {
          "item": "m_x_7_114861",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.0666666030883789
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30856",
          "qty": 10
        },
        {
          "item": "m_m_5_30850",
          "qty": 20
        },
        {
          "item": "wuseshi",
          "qty": 20
        },
        {
          "item": "m_m_5_90338",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1230",
      "kind": "craft",
      "skillId": "fengren",
      "name": "绝世鞋子·【寒】",
      "level": 9,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_31239",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_31397",
          "qty": 1
        },
        {
          "item": "m_m_5_30853",
          "qty": 10
        },
        {
          "item": "m_m_5_30828",
          "qty": 20
        },
        {
          "item": "qicaixian",
          "qty": 20
        },
        {
          "item": "bairanxian",
          "qty": 20
        }
      ],
      "note": "鞋 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_tailoring_1487",
      "kind": "craft",
      "skillId": "fengren",
      "name": "玄元赤地护腕",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_7_112556",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30856",
          "qty": 10
        },
        {
          "item": "m_m_5_30850",
          "qty": 20
        },
        {
          "item": "wuseshi",
          "qty": 20
        },
        {
          "item": "bairanxian",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1488",
      "kind": "craft",
      "skillId": "fengren",
      "name": "玄元烽火护腕",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_7_112557",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30853",
          "qty": 10
        },
        {
          "item": "m_m_5_30845",
          "qty": 20
        },
        {
          "item": "yinsi_duan",
          "qty": 20
        },
        {
          "item": "bairanxian",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1226",
      "kind": "craft",
      "skillId": "fengren",
      "name": "绝世护腕·【寒】",
      "level": 9,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_31235",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_31397",
          "qty": 1
        },
        {
          "item": "m_m_5_30852",
          "qty": 10
        },
        {
          "item": "m_m_5_30848",
          "qty": 20
        },
        {
          "item": "yinsi_duan",
          "qty": 20
        },
        {
          "item": "bairanxian",
          "qty": 20
        }
      ],
      "note": "护手 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_tailoring_1495",
      "kind": "craft",
      "skillId": "fengren",
      "name": "驾驾伪装",
      "level": 45,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_90210",
          "qty": 8,
          "qtyMin": 7,
          "qtyMax": 9
        }
      ],
      "materials": [
        {
          "item": "m_m_5_35718",
          "qty": 2
        },
        {
          "item": "m_m_5_35719",
          "qty": 2
        },
        {
          "item": "m_m_5_30873",
          "qty": 4
        }
      ],
      "note": "其他 · JX3BOX 当前版本配方 · 产出 7~9",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_tailoring_1494",
      "kind": "craft",
      "skillId": "fengren",
      "name": "哼唧伪装",
      "level": 35,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_90205",
          "qty": 8,
          "qtyMin": 7,
          "qtyMax": 9
        }
      ],
      "materials": [
        {
          "item": "m_m_5_35718",
          "qty": 2
        },
        {
          "item": "m_m_5_35719",
          "qty": 2
        },
        {
          "item": "m_m_5_30873",
          "qty": 4
        }
      ],
      "note": "其他 · JX3BOX 当前版本配方 · 产出 7~9",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_tailoring_13",
      "kind": "craft",
      "skillId": "fengren",
      "name": "灯笼",
      "level": 1,
      "tier": 1,
      "energy": 100,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_8_614",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "baihua_bu",
          "qty": 5
        },
        {
          "item": "m_m_5_10173",
          "qty": 5
        },
        {
          "item": "m_m_5_32002",
          "qty": 10
        }
      ],
      "note": "其他 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_tailoring_183",
      "kind": "craft",
      "skillId": "fengren",
      "name": "山水刺绣手绢",
      "level": 11,
      "tier": 2,
      "energy": 27,
      "fee": 0,
      "outputs": [
        {
          "item": "shanshui_juan",
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "wuseshi",
          "qty": 2
        },
        {
          "item": "bairanxian",
          "qty": 8
        },
        {
          "item": "m_m_5_32004",
          "qty": 20
        }
      ],
      "note": "礼品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_tailoring_143",
      "kind": "craft",
      "skillId": "fengren",
      "name": "刺绣手绢",
      "level": 10,
      "tier": 2,
      "energy": 21,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_3819",
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "qicaixian",
          "qty": 1
        },
        {
          "item": "bairanxian",
          "qty": 8
        },
        {
          "item": "m_m_5_32001",
          "qty": 20
        }
      ],
      "note": "礼品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_tailoring_9",
      "kind": "craft",
      "skillId": "fengren",
      "name": "小香包",
      "level": 1,
      "tier": 1,
      "energy": 6,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_3779",
          "qty": 5,
          "qtyMin": 4,
          "qtyMax": 6
        }
      ],
      "materials": [
        {
          "item": "baihua_bu",
          "qty": 1
        },
        {
          "item": "bairanxian",
          "qty": 2
        },
        {
          "item": "m_m_5_32000",
          "qty": 5
        }
      ],
      "note": "礼品 · JX3BOX 当前版本配方 · 产出 4~6",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_tailoring_1437",
      "kind": "craft",
      "skillId": "fengren",
      "name": "彩缕花绫包",
      "level": 30,
      "tier": 3,
      "energy": 150,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_8_36148",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "shuran_bu",
          "qty": 10
        },
        {
          "item": "baihua_bu",
          "qty": 10
        },
        {
          "item": "m_m_5_30852",
          "qty": 6
        },
        {
          "item": "m_m_5_30853",
          "qty": 6
        }
      ],
      "note": "背包 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_tailoring_19",
      "kind": "craft",
      "skillId": "fengren",
      "name": "棉布包",
      "level": 2,
      "tier": 1,
      "energy": 15,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_8_19",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_32000",
          "qty": 5
        },
        {
          "item": "m_m_5_32003",
          "qty": 5
        }
      ],
      "note": "背包 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_tailoring_1474",
      "kind": "craft",
      "skillId": "fengren",
      "name": "河洛纹·鞋（跑速）",
      "level": 46,
      "tier": 3,
      "energy": 80,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89475",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "shoupijiao",
          "qty": 5
        },
        {
          "item": "wuseshi",
          "qty": 5
        },
        {
          "item": "bairanxian",
          "qty": 10
        },
        {
          "item": "m_m_5_32002",
          "qty": 20
        }
      ],
      "note": "印染 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_tailoring_1473",
      "kind": "craft",
      "skillId": "fengren",
      "name": "河洛纹·衣（御劲）",
      "level": 44,
      "tier": 3,
      "energy": 80,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89474",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "shoupijiao",
          "qty": 5
        },
        {
          "item": "yinsi_duan",
          "qty": 5
        },
        {
          "item": "bairanxian",
          "qty": 10
        },
        {
          "item": "m_m_5_32003",
          "qty": 20
        }
      ],
      "note": "印染 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_tailoring_146",
      "kind": "craft",
      "skillId": "fengren",
      "name": "丹青染布画",
      "level": 10,
      "tier": 2,
      "energy": 21,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_3820",
          "qty": 5,
          "qtyMin": 4,
          "qtyMax": 6
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89165",
          "qty": 1
        },
        {
          "item": "bairanxian",
          "qty": 8
        },
        {
          "item": "m_m_5_32001",
          "qty": 20
        }
      ],
      "note": "印染 · JX3BOX 当前版本配方 · 产出 4~6",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_cooking_417",
      "kind": "craft",
      "skillId": "pengren",
      "name": "百炼水煮鱼",
      "level": 20,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "shuizhuyu",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30827",
          "qty": 20
        },
        {
          "item": "m_m_5_89970",
          "qty": 15
        },
        {
          "item": "m_m_5_32014",
          "qty": 1
        },
        {
          "item": "m_m_5_31978",
          "qty": 20
        },
        {
          "item": "m_m_5_31985",
          "qty": 20
        }
      ],
      "note": "烹饪 · 20级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_418",
      "kind": "craft",
      "skillId": "pengren",
      "name": "路菜",
      "level": 1,
      "tier": 3,
      "energy": 100,
      "fee": 0,
      "outputs": [
        {
          "item": "lucai",
          "qty": 10,
          "qtyMin": 10,
          "qtyMax": 13
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89298",
          "qty": 2
        },
        {
          "item": "m_m_5_1831",
          "qty": 5
        },
        {
          "item": "m_m_5_31973",
          "qty": 20
        },
        {
          "item": "m_m_5_30849",
          "qty": 5
        },
        {
          "item": "m_m_5_30827",
          "qty": 10
        }
      ],
      "note": "烹饪 · 1级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_409",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·老火骨汤",
      "level": 30,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_71293",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30826",
          "qty": 5
        },
        {
          "item": "m_m_5_30825",
          "qty": 5
        },
        {
          "item": "m_m_5_89171",
          "qty": 1
        },
        {
          "item": "m_m_5_31974",
          "qty": 5
        },
        {
          "item": "m_m_5_31968",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_408",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·三鲜汤",
      "level": 30,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_71292",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30824",
          "qty": 5
        },
        {
          "item": "m_m_5_30826",
          "qty": 5
        },
        {
          "item": "m_m_5_89171",
          "qty": 1
        },
        {
          "item": "m_m_5_31968",
          "qty": 5
        },
        {
          "item": "m_m_5_31967",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_397",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·鲜肉包子",
      "level": 30,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_71281",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.9499998092651367
        },
        {
          "item": "m_x_5_3485",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.05000019073486328
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30823",
          "qty": 5
        },
        {
          "item": "m_m_5_30825",
          "qty": 5
        },
        {
          "item": "m_m_5_89171",
          "qty": 1
        },
        {
          "item": "m_m_5_31973",
          "qty": 5
        },
        {
          "item": "m_m_5_31969",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_393",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·水煮肉片",
      "level": 30,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_71277",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30824",
          "qty": 5
        },
        {
          "item": "m_m_5_30827",
          "qty": 5
        },
        {
          "item": "m_m_5_89171",
          "qty": 1
        },
        {
          "item": "m_m_5_31974",
          "qty": 5
        },
        {
          "item": "m_m_5_31985",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_431",
      "kind": "craft",
      "skillId": "pengren",
      "name": "云中珍馐宴（通用）",
      "level": 18,
      "tier": 3,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89315",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_1829",
          "qty": 10
        },
        {
          "item": "m_m_5_89969",
          "qty": 7
        },
        {
          "item": "m_m_5_30827",
          "qty": 10
        },
        {
          "item": "m_m_5_30845",
          "qty": 1
        },
        {
          "item": "m_m_5_31976",
          "qty": 20
        }
      ],
      "note": "烹饪 · 18级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_419",
      "kind": "craft",
      "skillId": "pengren",
      "name": "巴渝珍馐宴（通用）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89303",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89309",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_32014",
          "qty": 2
        },
        {
          "item": "m_m_5_89971",
          "qty": 15
        },
        {
          "item": "m_m_5_30853",
          "qty": 2
        },
        {
          "item": "m_m_5_30827",
          "qty": 20
        },
        {
          "item": "m_m_5_31976",
          "qty": 20
        }
      ],
      "note": "烹饪 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_363",
      "kind": "craft",
      "skillId": "pengren",
      "name": "馅料",
      "level": 5,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89969",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "lushui",
          "qty": 2
        },
        {
          "item": "m_m_5_89298",
          "qty": 6
        },
        {
          "item": "m_m_5_30844",
          "qty": 5
        },
        {
          "item": "m_m_5_30875",
          "qty": 5
        },
        {
          "item": "m_m_5_30829",
          "qty": 20
        }
      ],
      "note": "烹饪 · 5级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_362",
      "kind": "craft",
      "skillId": "pengren",
      "name": "酱料",
      "level": 3,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89970",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "lushui",
          "qty": 2
        },
        {
          "item": "m_m_5_89298",
          "qty": 6
        },
        {
          "item": "m_m_5_30843",
          "qty": 5
        },
        {
          "item": "m_m_5_30874",
          "qty": 5
        },
        {
          "item": "m_m_5_31985",
          "qty": 20
        }
      ],
      "note": "烹饪 · 3级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_361",
      "kind": "craft",
      "skillId": "pengren",
      "name": "卤料",
      "level": 4,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89971",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "lushui",
          "qty": 2
        },
        {
          "item": "m_m_5_89298",
          "qty": 6
        },
        {
          "item": "m_m_5_30842",
          "qty": 5
        },
        {
          "item": "m_m_5_30873",
          "qty": 5
        },
        {
          "item": "m_m_5_31976",
          "qty": 20
        }
      ],
      "note": "烹饪 · 4级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_121",
      "kind": "craft",
      "skillId": "pengren",
      "name": "饺子馅",
      "level": 2,
      "tier": 1,
      "energy": 7,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_5270",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30823",
          "qty": 1
        },
        {
          "item": "m_m_5_31970",
          "qty": 1
        },
        {
          "item": "m_m_5_31976",
          "qty": 1
        }
      ],
      "note": "烹饪 · 2级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_120",
      "kind": "craft",
      "skillId": "pengren",
      "name": "饺子皮",
      "level": 1,
      "tier": 1,
      "energy": 7,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_5269",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_31973",
          "qty": 1
        },
        {
          "item": "m_m_5_31977",
          "qty": 1
        }
      ],
      "note": "烹饪 · 1级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_329",
      "kind": "craft",
      "skillId": "pengren",
      "name": "转神餐",
      "level": 9,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_31013",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89171",
          "qty": 2
        },
        {
          "item": "m_m_5_31976",
          "qty": 15
        },
        {
          "item": "m_m_5_30845",
          "qty": 2
        },
        {
          "item": "gancao",
          "qty": 3
        }
      ],
      "note": "烹饪 · 9级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_328",
      "kind": "craft",
      "skillId": "pengren",
      "name": "佛跳墙",
      "level": 9,
      "tier": 4,
      "energy": 75,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_31012",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 1
        },
        {
          "item": "m_m_5_30827",
          "qty": 15
        },
        {
          "item": "m_m_5_89971",
          "qty": 3
        },
        {
          "item": "m_m_5_31976",
          "qty": 10
        },
        {
          "item": "m_m_5_31974",
          "qty": 10
        }
      ],
      "note": "烹饪 · 9级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_451",
      "kind": "craft",
      "skillId": "pengren",
      "name": "安营炊鼎",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_90034",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89971",
          "qty": 4
        },
        {
          "item": "m_m_5_30845",
          "qty": 4
        },
        {
          "item": "m_m_5_30843",
          "qty": 10
        },
        {
          "item": "m_m_5_30873",
          "qty": 8
        },
        {
          "item": "m_m_5_89172",
          "qty": 4
        },
        {
          "item": "m_m_5_89171",
          "qty": 4
        }
      ],
      "note": "烹饪 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_420",
      "kind": "craft",
      "skillId": "pengren",
      "name": "巴山夜雨宴（外攻）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89304",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89310",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_32014",
          "qty": 2
        },
        {
          "item": "m_m_5_89971",
          "qty": 15
        },
        {
          "item": "m_m_5_30856",
          "qty": 2
        },
        {
          "item": "m_m_5_30874",
          "qty": 20
        },
        {
          "item": "m_m_5_89171",
          "qty": 1
        }
      ],
      "note": "烹饪 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_302",
      "kind": "craft",
      "skillId": "pengren",
      "name": "炼狱水煮鱼",
      "level": 5,
      "tier": 4,
      "energy": 80,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_24212",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30827",
          "qty": 10
        },
        {
          "item": "m_m_5_89970",
          "qty": 5
        },
        {
          "item": "m_m_5_31976",
          "qty": 10
        },
        {
          "item": "m_m_5_31978",
          "qty": 10
        },
        {
          "item": "m_m_5_31985",
          "qty": 10
        }
      ],
      "note": "烹饪 · 5级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_452",
      "kind": "craft",
      "skillId": "pengren",
      "name": "膘然心动",
      "level": 50,
      "tier": 4,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_26057",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89969",
          "qty": 3
        },
        {
          "item": "m_m_5_89172",
          "qty": 2
        },
        {
          "item": "m_m_5_89171",
          "qty": 2
        },
        {
          "item": "m_m_5_30874",
          "qty": 5
        },
        {
          "item": "m_m_5_30845",
          "qty": 1
        },
        {
          "item": "m_m_5_30843",
          "qty": 3
        }
      ],
      "note": "烹饪 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_358",
      "kind": "craft",
      "skillId": "pengren",
      "name": "如意饺",
      "level": 3,
      "tier": 3,
      "energy": 37,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_26231",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.6499996185302734
        },
        {
          "item": "m_x_5_26232",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.35000038146972656
        }
      ],
      "materials": [
        {
          "item": "m_m_5_5269",
          "qty": 2
        },
        {
          "item": "m_m_5_5270",
          "qty": 2
        },
        {
          "item": "m_m_5_31976",
          "qty": 2
        }
      ],
      "note": "烹饪 · 3级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_441",
      "kind": "craft",
      "skillId": "pengren",
      "name": "云州刀削面",
      "level": 50,
      "tier": 4,
      "energy": 75,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89352",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89358",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 1
        },
        {
          "item": "m_m_5_30874",
          "qty": 15
        },
        {
          "item": "m_m_5_89969",
          "qty": 3
        },
        {
          "item": "m_m_5_31973",
          "qty": 10
        },
        {
          "item": "m_m_5_31976",
          "qty": 10
        }
      ],
      "note": "烹饪 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_439",
      "kind": "craft",
      "skillId": "pengren",
      "name": "山城毛血旺",
      "level": 50,
      "tier": 4,
      "energy": 75,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89350",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89356",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 1
        },
        {
          "item": "m_m_5_30875",
          "qty": 15
        },
        {
          "item": "m_m_5_89971",
          "qty": 3
        },
        {
          "item": "m_m_5_31976",
          "qty": 10
        },
        {
          "item": "m_m_5_31974",
          "qty": 10
        }
      ],
      "note": "烹饪 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_385",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·红烧排骨",
      "level": 30,
      "tier": 4,
      "energy": 75,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_71269",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 1
        },
        {
          "item": "m_m_5_30826",
          "qty": 15
        },
        {
          "item": "m_m_5_89171",
          "qty": 3
        },
        {
          "item": "m_m_5_31976",
          "qty": 10
        },
        {
          "item": "m_m_5_31970",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_437",
      "kind": "craft",
      "skillId": "pengren",
      "name": "云芝竹沥羹",
      "level": 50,
      "tier": 4,
      "energy": 75,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89346",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89347",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 1
        },
        {
          "item": "m_m_5_30845",
          "qty": 3
        },
        {
          "item": "m_m_5_89970",
          "qty": 3
        },
        {
          "item": "m_m_5_89167",
          "qty": 1
        },
        {
          "item": "m_m_5_31984",
          "qty": 10
        }
      ],
      "note": "烹饪 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_444",
      "kind": "craft",
      "skillId": "pengren",
      "name": "开锅豆腐",
      "level": 36,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89348",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30845",
          "qty": 2
        },
        {
          "item": "m_m_5_30842",
          "qty": 4
        },
        {
          "item": "m_m_5_89171",
          "qty": 1
        },
        {
          "item": "m_m_5_31984",
          "qty": 18
        }
      ],
      "note": "烹饪 · 36级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_401",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·杂锦鱼球粥",
      "level": 30,
      "tier": 4,
      "energy": 75,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_71285",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 1
        },
        {
          "item": "m_m_5_30827",
          "qty": 15
        },
        {
          "item": "m_m_5_89171",
          "qty": 3
        },
        {
          "item": "m_m_5_31978",
          "qty": 10
        },
        {
          "item": "m_m_5_31984",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_353",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "截元丹",
      "level": 8,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "jieyuan_dan",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 2
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30836",
          "qty": 5
        },
        {
          "item": "m_m_5_30832",
          "qty": 5
        },
        {
          "item": "m_m_5_30833",
          "qty": 10
        },
        {
          "item": "m_m_5_30847",
          "qty": 1
        },
        {
          "item": "m_m_5_31997",
          "qty": 10
        }
      ],
      "note": "制药 · 8级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_401",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "竹沥凝心饮",
      "level": 18,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89324",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "gancao",
          "qty": 5
        },
        {
          "item": "m_m_5_30831",
          "qty": 5
        },
        {
          "item": "m_m_5_30832",
          "qty": 10
        },
        {
          "item": "m_m_5_89973",
          "qty": 1
        },
        {
          "item": "m_m_5_31996",
          "qty": 10
        }
      ],
      "note": "制药 · 18级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_366",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·中品万灵丹",
      "level": 30,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_71241",
          "qty": 3,
          "qtyMin": 3,
          "qtyMax": 4
        }
      ],
      "materials": [
        {
          "item": "gancao",
          "qty": 5
        },
        {
          "item": "m_m_5_30831",
          "qty": 5
        },
        {
          "item": "m_m_5_30832",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 1
        },
        {
          "item": "m_m_5_31996",
          "qty": 10
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_365",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·上品万灵丹",
      "level": 30,
      "tier": 4,
      "energy": 90,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_71240",
          "qty": 3,
          "qtyMin": 3,
          "qtyMax": 4
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 1
        },
        {
          "item": "gancao",
          "qty": 10
        },
        {
          "item": "m_m_5_30831",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 4
        },
        {
          "item": "m_m_5_31995",
          "qty": 20
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_391",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·中品大力丸",
      "level": 30,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_71266",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30832",
          "qty": 5
        },
        {
          "item": "m_m_5_30838",
          "qty": 5
        },
        {
          "item": "shanhu",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 1
        },
        {
          "item": "m_m_5_6646",
          "qty": 10
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_400",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "云州固阵丹",
      "level": 50,
      "tier": 4,
      "energy": 90,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89333",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89339",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30855",
          "qty": 1
        },
        {
          "item": "gancao",
          "qty": 10
        },
        {
          "item": "m_m_5_30835",
          "qty": 4
        },
        {
          "item": "m_m_5_89974",
          "qty": 5
        },
        {
          "item": "m_m_5_6648",
          "qty": 20
        }
      ],
      "note": "制药 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_392",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·中品静心丸",
      "level": 30,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_71267",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30833",
          "qty": 5
        },
        {
          "item": "shanhu",
          "qty": 5
        },
        {
          "item": "gancao",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 1
        },
        {
          "item": "m_m_5_6648",
          "qty": 10
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_410",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "回神丹",
      "level": 45,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_90029",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89167",
          "qty": 2
        },
        {
          "item": "m_m_5_89168",
          "qty": 2
        },
        {
          "item": "m_m_5_30842",
          "qty": 6
        },
        {
          "item": "m_m_5_30844",
          "qty": 6
        },
        {
          "item": "yaoyin",
          "qty": 1
        }
      ],
      "note": "制药 · 45级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_352",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "金针·影",
      "level": 7,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_31100",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30835",
          "qty": 5
        },
        {
          "item": "m_m_5_30831",
          "qty": 5
        },
        {
          "item": "m_m_5_30832",
          "qty": 10
        },
        {
          "item": "m_m_5_30849",
          "qty": 1
        },
        {
          "item": "m_m_5_31996",
          "qty": 10
        }
      ],
      "note": "制药 · 7级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_362",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "药丸",
      "level": 3,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89973",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30848",
          "qty": 2
        },
        {
          "item": "m_m_5_30845",
          "qty": 1
        },
        {
          "item": "m_m_5_31996",
          "qty": 10
        },
        {
          "item": "m_m_5_31995",
          "qty": 10
        },
        {
          "item": "m_m_5_89298",
          "qty": 5
        }
      ],
      "note": "制药 · 3级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_363",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "药膏",
      "level": 4,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89974",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30849",
          "qty": 2
        },
        {
          "item": "m_m_5_30845",
          "qty": 1
        },
        {
          "item": "m_m_5_31996",
          "qty": 10
        },
        {
          "item": "m_m_5_31995",
          "qty": 10
        },
        {
          "item": "m_m_5_89298",
          "qty": 5
        }
      ],
      "note": "制药 · 4级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_361",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "药引",
      "level": 2,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "yaoyin",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30847",
          "qty": 2
        },
        {
          "item": "m_m_5_30845",
          "qty": 1
        },
        {
          "item": "m_m_5_31996",
          "qty": 10
        },
        {
          "item": "m_m_5_31995",
          "qty": 10
        },
        {
          "item": "m_m_5_89298",
          "qty": 5
        }
      ],
      "note": "制药 · 2级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_393",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "竹沥清心露",
      "level": 50,
      "tier": 4,
      "energy": 90,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89322",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89323",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 1
        },
        {
          "item": "gancao",
          "qty": 10
        },
        {
          "item": "shaoyao",
          "qty": 3
        },
        {
          "item": "m_m_5_89973",
          "qty": 4
        },
        {
          "item": "m_m_5_31995",
          "qty": 20
        }
      ],
      "note": "制药 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_412",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "踏波露",
      "level": 48,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_90206",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89167",
          "qty": 1
        },
        {
          "item": "m_m_5_89168",
          "qty": 1
        },
        {
          "item": "m_m_5_30842",
          "qty": 4
        }
      ],
      "note": "制药 · 48级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_354",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "飞鱼丸",
      "level": 1,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_31102",
          "qty": 5,
          "qtyMin": 5,
          "qtyMax": 10
        }
      ],
      "materials": [
        {
          "item": "shaoyao",
          "qty": 5
        },
        {
          "item": "m_m_5_30833",
          "qty": 5
        },
        {
          "item": "m_m_5_30834",
          "qty": 10
        },
        {
          "item": "lushui",
          "qty": 1
        },
        {
          "item": "m_m_5_31998",
          "qty": 10
        }
      ],
      "note": "制药 · 1级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_411",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "定魂丹砂",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_90035",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "yaoyin",
          "qty": 4
        },
        {
          "item": "m_m_5_30842",
          "qty": 10
        },
        {
          "item": "m_m_5_30845",
          "qty": 4
        },
        {
          "item": "m_m_5_89167",
          "qty": 10
        },
        {
          "item": "m_m_5_89168",
          "qty": 10
        }
      ],
      "note": "制药 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_395",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "巴山凝神丹",
      "level": 50,
      "tier": 4,
      "energy": 90,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89328",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89334",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 1
        },
        {
          "item": "gancao",
          "qty": 10
        },
        {
          "item": "m_m_5_30835",
          "qty": 4
        },
        {
          "item": "yaoyin",
          "qty": 5
        },
        {
          "item": "m_m_5_31995",
          "qty": 20
        }
      ],
      "note": "制药 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_399",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "河洛生息丹",
      "level": 50,
      "tier": 4,
      "energy": 90,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89332",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89338",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 1
        },
        {
          "item": "gancao",
          "qty": 10
        },
        {
          "item": "m_m_5_30835",
          "qty": 4
        },
        {
          "item": "m_m_5_89973",
          "qty": 5
        },
        {
          "item": "m_m_5_6646",
          "qty": 20
        }
      ],
      "note": "制药 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_403",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "巴山凝神散",
      "level": 25,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89340",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "gancao",
          "qty": 5
        },
        {
          "item": "m_m_5_30835",
          "qty": 2
        },
        {
          "item": "shaoyao",
          "qty": 10
        },
        {
          "item": "yaoyin",
          "qty": 1
        },
        {
          "item": "m_m_5_31998",
          "qty": 10
        }
      ],
      "note": "制药 · 25级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_394",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "五气归元丹",
      "level": 50,
      "tier": 4,
      "energy": 90,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89325",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89326",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 1
        },
        {
          "item": "gancao",
          "qty": 10
        },
        {
          "item": "m_m_5_30835",
          "qty": 4
        },
        {
          "item": "yaoyin",
          "qty": 5
        },
        {
          "item": "m_m_5_31995",
          "qty": 20
        }
      ],
      "note": "制药 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_383",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·上品健体丸",
      "level": 30,
      "tier": 4,
      "energy": 90,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_71258",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30855",
          "qty": 1
        },
        {
          "item": "gancao",
          "qty": 10
        },
        {
          "item": "m_m_5_30831",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 4
        },
        {
          "item": "m_m_5_31999",
          "qty": 20
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_402",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "五气培元丸",
      "level": 22,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89327",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "gancao",
          "qty": 5
        },
        {
          "item": "m_m_5_30835",
          "qty": 12
        },
        {
          "item": "yaoyin",
          "qty": 1
        },
        {
          "item": "m_m_5_6646",
          "qty": 10
        }
      ],
      "note": "制药 · 22级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_founding_1282",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "苍生·巨灵磨石（仇恨）",
      "level": 50,
      "tier": 3,
      "energy": 30,
      "fee": 0,
      "outputs": [
        {
          "item": "juling_chou",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30850",
          "qty": 1
        },
        {
          "item": "m_m_5_89966",
          "qty": 1
        },
        {
          "item": "m_m_5_10176",
          "qty": 5
        },
        {
          "item": "m_m_5_31991",
          "qty": 10
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1281",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "苍生·絮泊磨石（疗伤）",
      "level": 48,
      "tier": 3,
      "energy": 30,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89377",
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "shoupijiao",
          "qty": 1
        },
        {
          "item": "m_m_5_89968",
          "qty": 1
        },
        {
          "item": "m_m_5_10176",
          "qty": 5
        },
        {
          "item": "m_m_5_31993",
          "qty": 10
        }
      ],
      "note": "消耗品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_1280",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "苍生·坠宵磨石（攻击）",
      "level": 46,
      "tier": 3,
      "energy": 30,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89376",
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30845",
          "qty": 1
        },
        {
          "item": "m_m_5_89965",
          "qty": 1
        },
        {
          "item": "m_m_5_10176",
          "qty": 5
        },
        {
          "item": "m_m_5_31992",
          "qty": 10
        }
      ],
      "note": "消耗品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_1279",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "苍生·瀑沙磨石（武伤）",
      "level": 44,
      "tier": 3,
      "energy": 30,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89375",
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30850",
          "qty": 1
        },
        {
          "item": "m_m_5_89963",
          "qty": 1
        },
        {
          "item": "m_m_5_10176",
          "qty": 5
        },
        {
          "item": "m_m_5_31991",
          "qty": 10
        }
      ],
      "note": "消耗品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_1278",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "苍生·巨灵熔锭（仇恨）",
      "level": 50,
      "tier": 4,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89370",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89374",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30856",
          "qty": 1
        },
        {
          "item": "m_m_5_30850",
          "qty": 5
        },
        {
          "item": "m_m_5_89966",
          "qty": 5
        },
        {
          "item": "m_m_5_31991",
          "qty": 10
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1245",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "风语·巨灵磨石（仇恨）",
      "level": 30,
      "tier": 3,
      "energy": 30,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_71192",
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30846",
          "qty": 1
        },
        {
          "item": "m_m_5_89169",
          "qty": 1
        },
        {
          "item": "m_m_5_10176",
          "qty": 5
        },
        {
          "item": "m_m_5_31991",
          "qty": 10
        }
      ],
      "note": "消耗品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_1241",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "风语·兵·甲（仇恨）",
      "level": 30,
      "tier": 3,
      "energy": 80,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_71188",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30846",
          "qty": 5
        },
        {
          "item": "m_m_5_89169",
          "qty": 5
        },
        {
          "item": "m_m_5_10176",
          "qty": 10
        },
        {
          "item": "m_m_5_31994",
          "qty": 20
        }
      ],
      "note": "消耗品 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_1324",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "玄元星平帽",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_7_112584",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "fengwangjiang",
          "qty": 10
        },
        {
          "item": "shoupijiao",
          "qty": 20
        },
        {
          "item": "m_m_5_89962",
          "qty": 20
        },
        {
          "item": "m_m_5_10176",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1330",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "玄元星平护腰",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_7_112566",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "fengwangjiang",
          "qty": 10
        },
        {
          "item": "shoupijiao",
          "qty": 20
        },
        {
          "item": "m_m_5_89962",
          "qty": 20
        },
        {
          "item": "m_m_5_10176",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1336",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "玄元星平裤",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_7_112578",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "fengwangjiang",
          "qty": 10
        },
        {
          "item": "shoupijiao",
          "qty": 20
        },
        {
          "item": "m_m_5_89962",
          "qty": 20
        },
        {
          "item": "m_m_5_10176",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1007",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "龙血磨石",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_31139",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30856",
          "qty": 7
        },
        {
          "item": "fengwangjiang",
          "qty": 7
        },
        {
          "item": "shoupijiao",
          "qty": 20
        },
        {
          "item": "m_m_5_89964",
          "qty": 20
        },
        {
          "item": "m_m_5_31994",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_458",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "素银钥匙",
      "level": 8,
      "tier": 2,
      "energy": 10,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_10027",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89961",
          "qty": 1
        },
        {
          "item": "m_m_5_10029",
          "qty": 1
        },
        {
          "item": "m_m_5_31992",
          "qty": 1
        },
        {
          "item": "m_m_5_10176",
          "qty": 5
        }
      ],
      "note": "消耗品 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_1157",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "镔铁锭",
      "level": 7,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89966",
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89298",
          "qty": 5
        },
        {
          "item": "m_m_5_30679",
          "qty": 2
        },
        {
          "item": "tiekuang",
          "qty": 5
        },
        {
          "item": "m_m_5_30676",
          "qty": 5
        },
        {
          "item": "m_m_5_31994",
          "qty": 20
        }
      ],
      "note": "制品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_1153",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "密银锭",
      "level": 8,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89962",
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89298",
          "qty": 5
        },
        {
          "item": "m_m_5_30679",
          "qty": 2
        },
        {
          "item": "m_m_5_30678",
          "qty": 10
        },
        {
          "item": "m_m_5_31993",
          "qty": 20
        }
      ],
      "note": "制品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_1152",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "熟铁锭",
      "level": 7,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89961",
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89298",
          "qty": 5
        },
        {
          "item": "m_m_5_30679",
          "qty": 2
        },
        {
          "item": "tiekuang",
          "qty": 5
        },
        {
          "item": "m_m_5_31992",
          "qty": 20
        }
      ],
      "note": "制品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_1155",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "青铜锭",
      "level": 2,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89964",
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89298",
          "qty": 5
        },
        {
          "item": "m_m_5_30679",
          "qty": 2
        },
        {
          "item": "m_m_5_30674",
          "qty": 5
        },
        {
          "item": "m_m_5_30675",
          "qty": 5
        },
        {
          "item": "m_m_5_31991",
          "qty": 20
        }
      ],
      "note": "制品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_1156",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "锡锭",
      "level": 2,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89965",
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89298",
          "qty": 5
        },
        {
          "item": "m_m_5_30679",
          "qty": 2
        },
        {
          "item": "m_m_5_30675",
          "qty": 10
        },
        {
          "item": "m_m_5_31993",
          "qty": 20
        }
      ],
      "note": "制品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_1154",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "黄铜锭",
      "level": 4,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89963",
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89298",
          "qty": 5
        },
        {
          "item": "m_m_5_30679",
          "qty": 2
        },
        {
          "item": "m_m_5_30674",
          "qty": 5
        },
        {
          "item": "m_m_5_30676",
          "qty": 5
        },
        {
          "item": "m_m_5_31992",
          "qty": 20
        }
      ],
      "note": "制品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_1159",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "铅锭",
      "level": 4,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89968",
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89298",
          "qty": 5
        },
        {
          "item": "m_m_5_30679",
          "qty": 2
        },
        {
          "item": "m_m_5_30676",
          "qty": 10
        },
        {
          "item": "m_m_5_31994",
          "qty": 20
        }
      ],
      "note": "制品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_1158",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "生铁锭",
      "level": 6,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89967",
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89298",
          "qty": 5
        },
        {
          "item": "m_m_5_30679",
          "qty": 2
        },
        {
          "item": "tiekuang",
          "qty": 5
        },
        {
          "item": "m_m_5_31991",
          "qty": 20
        }
      ],
      "note": "制品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_1275",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "苍生·瀑沙熔锭（武伤）",
      "level": 50,
      "tier": 4,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89367",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89371",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30856",
          "qty": 1
        },
        {
          "item": "m_m_5_30850",
          "qty": 5
        },
        {
          "item": "m_m_5_89963",
          "qty": 5
        },
        {
          "item": "m_m_5_31991",
          "qty": 10
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_268",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "青铜钥匙",
      "level": 1,
      "tier": 2,
      "energy": 4,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_6246",
          "qty": 4.5,
          "qtyMin": 4,
          "qtyMax": 5
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30674",
          "qty": 1
        },
        {
          "item": "m_m_5_6249",
          "qty": 1
        },
        {
          "item": "m_m_5_31992",
          "qty": 1
        }
      ],
      "note": "消耗品 · JX3BOX 当前版本配方 · 产出 4~5",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_1332",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "玄元烽火裤",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_7_112575",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30853",
          "qty": 10
        },
        {
          "item": "m_m_5_30845",
          "qty": 20
        },
        {
          "item": "m_m_5_89965",
          "qty": 20
        },
        {
          "item": "m_m_5_10176",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1333",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "玄元风鹤裤",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_7_112573",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "fengwangjiang",
          "qty": 10
        },
        {
          "item": "shoupijiao",
          "qty": 20
        },
        {
          "item": "m_m_5_89968",
          "qty": 20
        },
        {
          "item": "m_m_5_10176",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1076",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "绝世下装·【兹】",
      "level": 9,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_31209",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_32787",
          "qty": 1
        },
        {
          "item": "m_m_5_30855",
          "qty": 10
        },
        {
          "item": "m_m_5_30847",
          "qty": 20
        },
        {
          "item": "m_m_5_89963",
          "qty": 20
        },
        {
          "item": "m_m_5_10176",
          "qty": 20
        }
      ],
      "note": "裤子 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_1329",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "玄元松绿护腰",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_7_112564",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30853",
          "qty": 10
        },
        {
          "item": "m_m_5_30845",
          "qty": 20
        },
        {
          "item": "m_m_5_89967",
          "qty": 20
        },
        {
          "item": "m_m_5_10176",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1327",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "玄元风鹤护腰",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_7_112561",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "fengwangjiang",
          "qty": 10
        },
        {
          "item": "shoupijiao",
          "qty": 20
        },
        {
          "item": "m_m_5_89968",
          "qty": 20
        },
        {
          "item": "m_m_5_10176",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1078",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "绝世腰带·【兹】",
      "level": 9,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_31211",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_32787",
          "qty": 1
        },
        {
          "item": "m_m_5_30853",
          "qty": 10
        },
        {
          "item": "m_m_5_30828",
          "qty": 20
        },
        {
          "item": "m_m_5_89968",
          "qty": 20
        },
        {
          "item": "m_m_5_10176",
          "qty": 20
        }
      ],
      "note": "腰带 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_1169",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "寄青荷",
      "level": 16,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_8_25762",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30841",
          "qty": 10
        },
        {
          "item": "m_m_5_10172",
          "qty": 2
        },
        {
          "item": "m_m_5_35708",
          "qty": 5
        },
        {
          "item": "m_m_5_30675",
          "qty": 10
        }
      ],
      "note": "马具 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_164",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "银龙笼套",
      "level": 15,
      "tier": 2,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_8_17541",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89967",
          "qty": 5
        },
        {
          "item": "m_m_5_89962",
          "qty": 5
        },
        {
          "item": "m_m_5_10176",
          "qty": 10
        },
        {
          "item": "m_m_5_31993",
          "qty": 10
        }
      ],
      "note": "马具 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_103",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "铁制鞍具",
      "level": 7,
      "tier": 2,
      "energy": 30,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_8_17538",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89967",
          "qty": 1
        },
        {
          "item": "m_m_5_89968",
          "qty": 1
        },
        {
          "item": "m_m_5_10176",
          "qty": 5
        },
        {
          "item": "m_m_5_31994",
          "qty": 10
        }
      ],
      "note": "马具 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_1323",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "玄元松绿帽",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_7_112582",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.7600002288818359
        },
        {
          "item": "m_x_7_114858",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.013333320617675781
        },
        {
          "item": "m_x_7_112787_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.013333320617675781
        },
        {
          "item": "m_x_7_112788_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.013333320617675781
        },
        {
          "item": "m_x_7_114856_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.0666666030883789
        },
        {
          "item": "m_x_7_114857_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.0666666030883789
        },
        {
          "item": "m_x_7_114858",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.0666666030883789
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30853",
          "qty": 10
        },
        {
          "item": "m_m_5_30845",
          "qty": 20
        },
        {
          "item": "m_m_5_89967",
          "qty": 20
        },
        {
          "item": "m_m_5_90338",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1322",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "玄元木声帽",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_7_112583",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30856",
          "qty": 10
        },
        {
          "item": "m_m_5_30850",
          "qty": 20
        },
        {
          "item": "m_m_5_89966",
          "qty": 20
        },
        {
          "item": "m_m_5_10176",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1077",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "绝世头饰·【兹】",
      "level": 9,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_31210",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_32787",
          "qty": 1
        },
        {
          "item": "m_m_5_30852",
          "qty": 10
        },
        {
          "item": "m_m_5_30848",
          "qty": 20
        },
        {
          "item": "m_m_5_89965",
          "qty": 20
        },
        {
          "item": "m_m_5_10176",
          "qty": 20
        }
      ],
      "note": "帽子 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_1337",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "定营铁桩",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_90032",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89961",
          "qty": 8
        },
        {
          "item": "m_m_5_30850",
          "qty": 4
        },
        {
          "item": "m_m_5_89169",
          "qty": 5
        },
        {
          "item": "m_m_5_89170",
          "qty": 3
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1343",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "珠·苍生",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89567",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30856",
          "qty": 10
        },
        {
          "item": "m_m_5_30847",
          "qty": 20
        },
        {
          "item": "m_m_5_89966",
          "qty": 20
        },
        {
          "item": "m_m_5_10176",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_120",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "玄武腰刀",
      "level": 9,
      "tier": 2,
      "energy": 100,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_8_632",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89967",
          "qty": 5
        },
        {
          "item": "m_m_5_89962",
          "qty": 5
        },
        {
          "item": "m_m_5_10172",
          "qty": 2
        },
        {
          "item": "m_m_5_31993",
          "qty": 10
        }
      ],
      "note": "挂件 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_146",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "青龙腰刀",
      "level": 9,
      "tier": 2,
      "energy": 100,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_8_634",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89962",
          "qty": 5
        },
        {
          "item": "m_m_5_89963",
          "qty": 5
        },
        {
          "item": "m_m_5_10172",
          "qty": 2
        },
        {
          "item": "m_m_5_31991",
          "qty": 10
        }
      ],
      "note": "挂件 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_163",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "麒麟腰刀",
      "level": 3,
      "tier": 2,
      "energy": 100,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_8_636",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89964",
          "qty": 5
        },
        {
          "item": "m_m_5_89965",
          "qty": 5
        },
        {
          "item": "m_m_5_10172",
          "qty": 2
        },
        {
          "item": "m_m_5_31993",
          "qty": 10
        }
      ],
      "note": "挂件 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_1340",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "同门饕餮鼎",
      "level": 50,
      "tier": 4,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_90353",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30856",
          "qty": 5
        },
        {
          "item": "m_m_5_89166",
          "qty": 8
        },
        {
          "item": "m_m_5_89169",
          "qty": 8
        },
        {
          "item": "m_m_5_89963",
          "qty": 4
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1339",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "飞高高",
      "level": 45,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_90257",
          "qty": 8,
          "qtyMin": 7,
          "qtyMax": 9
        }
      ],
      "materials": [
        {
          "item": "m_m_5_35718",
          "qty": 4
        },
        {
          "item": "m_m_5_35719",
          "qty": 2
        },
        {
          "item": "m_m_5_30850",
          "qty": 2
        }
      ],
      "note": "礼品 · JX3BOX 当前版本配方 · 产出 7~9",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_5",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "铜偶",
      "level": 7,
      "tier": 1,
      "energy": 6,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_2578",
          "qty": 5,
          "qtyMin": 4,
          "qtyMax": 6
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89963",
          "qty": 1
        },
        {
          "item": "m_m_5_10176",
          "qty": 2
        },
        {
          "item": "m_m_5_31994",
          "qty": 5
        }
      ],
      "note": "礼品 · JX3BOX 当前版本配方 · 产出 4~6",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_263",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "鞭炮",
      "level": 9,
      "tier": 2,
      "energy": 2,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_6072",
          "qty": 1.5,
          "qtyMin": 1,
          "qtyMax": 2
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30678",
          "qty": 2
        },
        {
          "item": "m_m_5_32004",
          "qty": 2
        },
        {
          "item": "m_m_5_31992",
          "qty": 2
        }
      ],
      "note": "烟火 · JX3BOX 当前版本配方 · 产出 1~2",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_262",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "龙凤呈祥",
      "level": 7,
      "tier": 2,
      "energy": 2,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_6068",
          "qty": 1.5,
          "qtyMin": 1,
          "qtyMax": 2
        }
      ],
      "materials": [
        {
          "item": "tiekuang",
          "qty": 2
        },
        {
          "item": "m_m_5_32003",
          "qty": 2
        },
        {
          "item": "m_m_5_31992",
          "qty": 2
        }
      ],
      "note": "烟火 · JX3BOX 当前版本配方 · 产出 1~2",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_founding_259",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "元宝灯",
      "level": 1,
      "tier": 2,
      "energy": 2,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_6066",
          "qty": 1.5,
          "qtyMin": 1,
          "qtyMax": 2
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30674",
          "qty": 2
        },
        {
          "item": "m_m_5_32000",
          "qty": 2
        },
        {
          "item": "m_m_5_31992",
          "qty": 2
        }
      ],
      "note": "烟火 · JX3BOX 当前版本配方 · 产出 1~2",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_furniture_58",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "木板",
      "level": 1,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "muban",
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "muliao",
          "qty": 5
        },
        {
          "item": "m_m_5_35707",
          "qty": 5
        },
        {
          "item": "m_m_5_35703",
          "qty": 5
        }
      ],
      "note": "材料 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_furniture_203",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "器物令",
      "level": 1,
      "tier": 3,
      "energy": 40,
      "fee": 0,
      "outputs": [
        {
          "item": "qiwuling",
          "qty": 3,
          "qtyMin": 3,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "tiekuang",
          "qty": 15
        },
        {
          "item": "shanhu",
          "qty": 15
        }
      ],
      "note": "材料 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_furniture_62",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "鱼胶",
      "level": 5,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_35716",
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30827",
          "qty": 5
        },
        {
          "item": "m_m_5_35708",
          "qty": 5
        },
        {
          "item": "m_m_5_35702",
          "qty": 5
        }
      ],
      "note": "材料 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_furniture_61",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "篾条",
      "level": 5,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_35715",
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "zhuzi",
          "qty": 5
        },
        {
          "item": "m_m_5_35567",
          "qty": 5
        },
        {
          "item": "m_m_5_35704",
          "qty": 5
        }
      ],
      "note": "材料 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_furniture_60",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "雕花",
      "level": 5,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_35714",
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "muliao",
          "qty": 5
        },
        {
          "item": "m_m_5_35707",
          "qty": 5
        },
        {
          "item": "m_m_5_35701",
          "qty": 5
        }
      ],
      "note": "材料 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_furniture_59",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "卯榫",
      "level": 5,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_35713",
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "muliao",
          "qty": 5
        },
        {
          "item": "zhuzi",
          "qty": 5
        },
        {
          "item": "m_m_5_35705",
          "qty": 5
        }
      ],
      "note": "材料 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_furniture_301",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "清漆药柜",
      "level": 20,
      "tier": 3,
      "energy": 57,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_10_1778",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "muban",
          "qty": 20
        },
        {
          "item": "m_m_5_35713",
          "qty": 10
        },
        {
          "item": "m_m_5_30848",
          "qty": 5
        },
        {
          "item": "m_m_5_35707",
          "qty": 20
        }
      ],
      "note": "家具 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_furniture_232",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "简素椅",
      "level": 16,
      "tier": 4,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_10_948",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_35716",
          "qty": 5
        },
        {
          "item": "muban",
          "qty": 5
        }
      ],
      "note": "家具 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_furniture_425",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "归营旌",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_89260",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_90032",
          "qty": 1
        },
        {
          "item": "tongpao_fan",
          "qty": 1
        },
        {
          "item": "m_m_5_90034",
          "qty": 1
        },
        {
          "item": "m_m_5_90035",
          "qty": 1
        },
        {
          "item": "m_m_5_30856",
          "qty": 5
        }
      ],
      "note": "梓匠 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_furniture_302",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "锻炉",
      "level": 20,
      "tier": 4,
      "energy": 69,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_10_1779",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30852",
          "qty": 20
        },
        {
          "item": "m_m_5_30679",
          "qty": 10
        }
      ],
      "note": "景观 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_furniture_305",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "残烛柜架",
      "level": 30,
      "tier": 4,
      "energy": 57,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_10_1880",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "muban",
          "qty": 20
        },
        {
          "item": "m_m_5_35714",
          "qty": 20
        },
        {
          "item": "m_m_5_30848",
          "qty": 5
        }
      ],
      "note": "家具 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_furniture_319",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "矩形回纹格",
      "level": 27,
      "tier": 4,
      "energy": 57,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_10_2034",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "muban",
          "qty": 10
        },
        {
          "item": "m_m_5_35714",
          "qty": 10
        },
        {
          "item": "m_m_5_35713",
          "qty": 10
        },
        {
          "item": "m_m_5_30855",
          "qty": 2
        }
      ],
      "note": "家具 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_furniture_63",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "葵草席",
      "level": 6,
      "tier": 1,
      "energy": 40,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_10_93",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_35715",
          "qty": 1
        },
        {
          "item": "m_m_5_35567",
          "qty": 1
        }
      ],
      "note": "家具 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_furniture_312",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "禅心悬旗",
      "level": 30,
      "tier": 4,
      "energy": 69,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_10_1882",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_35717",
          "qty": 1
        },
        {
          "item": "m_m_5_30853",
          "qty": 10
        },
        {
          "item": "m_m_5_35713",
          "qty": 15
        },
        {
          "item": "m_m_5_10172",
          "qty": 10
        }
      ],
      "note": "景观 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_furniture_322",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "铜雕踩球对狮·右",
      "level": 29,
      "tier": 4,
      "energy": 69,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_10_2037",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_35717",
          "qty": 10
        },
        {
          "item": "m_m_5_30852",
          "qty": 20
        },
        {
          "item": "m_m_5_35713",
          "qty": 20
        },
        {
          "item": "m_m_5_30674",
          "qty": 20
        },
        {
          "item": "m_m_5_30679",
          "qty": 10
        }
      ],
      "note": "景观 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_furniture_134",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "素髹桑木灯檠",
      "level": 6,
      "tier": 1,
      "energy": 40,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_10_164",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_35715",
          "qty": 1
        },
        {
          "item": "muban",
          "qty": 1
        },
        {
          "item": "m_m_5_35704",
          "qty": 5
        }
      ],
      "note": "景观 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_furniture_281",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "地下室·8米木质标准包",
      "level": 20,
      "tier": 4,
      "energy": 350,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_52337",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_35717",
          "qty": 1
        },
        {
          "item": "m_m_5_35713",
          "qty": 6
        },
        {
          "item": "m_m_5_35715",
          "qty": 6
        },
        {
          "item": "muban",
          "qty": 10
        },
        {
          "item": "m_m_5_30679",
          "qty": 10
        }
      ],
      "note": "建筑 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_furniture_204",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "竹篾篱·套件",
      "level": 18,
      "tier": 4,
      "energy": 800,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_40232",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "muban",
          "qty": 20
        },
        {
          "item": "m_m_5_35716",
          "qty": 20
        },
        {
          "item": "m_m_5_30855",
          "qty": 5
        },
        {
          "item": "m_m_5_30679",
          "qty": 20
        },
        {
          "item": "m_m_5_35715",
          "qty": 20
        }
      ],
      "note": "建筑 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_furniture_54",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "兖石地墁·套件",
      "level": 11,
      "tier": 4,
      "energy": 800,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_35772",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "muliao",
          "qty": 20
        },
        {
          "item": "zhuzi",
          "qty": 20
        },
        {
          "item": "muban",
          "qty": 10
        },
        {
          "item": "m_m_5_35701",
          "qty": 20
        }
      ],
      "note": "建筑 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_furniture_426",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "飞毛腿伪装",
      "level": 45,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_90211",
          "qty": 8,
          "qtyMin": 7,
          "qtyMax": 9
        }
      ],
      "materials": [
        {
          "item": "m_m_5_35718",
          "qty": 2
        },
        {
          "item": "m_m_5_35719",
          "qty": 2
        },
        {
          "item": "m_m_5_30873",
          "qty": 4
        }
      ],
      "note": "材料 · JX3BOX 当前版本配方 · 产出 7~9",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_furniture_423",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "拼布自选包",
      "level": 1,
      "tier": 4,
      "energy": 100,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_87917",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_10173",
          "qty": 2
        },
        {
          "item": "m_m_5_35715",
          "qty": 3
        },
        {
          "item": "zhuzi",
          "qty": 10
        },
        {
          "item": "m_m_5_45721",
          "qty": 5
        }
      ],
      "note": "JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_furniture_424",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "拼布72色全包",
      "level": 1,
      "tier": 4,
      "energy": 100,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_87881",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30855",
          "qty": 15
        },
        {
          "item": "m_m_5_30853",
          "qty": 15
        },
        {
          "item": "fengwangjiang",
          "qty": 15
        },
        {
          "item": "m_m_5_10173",
          "qty": 20
        },
        {
          "item": "zhuzi",
          "qty": 20
        }
      ],
      "note": "JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "r_g_sn_zisu",
      "kind": "gather",
      "skillId": "shennong",
      "name": "神农·紫苏",
      "level": 45,
      "tier": 4,
      "energy": 45,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_30842",
          "qty": 1,
          "chance": 1
        },
        {
          "item": "m_m_5_30845",
          "qty": 1,
          "chance": 0.02
        },
        {
          "item": "m_m_5_30856",
          "qty": 1,
          "chance": 0.01
        }
      ],
      "materials": [],
      "note": "等级/精力按当前采集材料；稀有掉率为示例，产值按掉率折算",
      "verified": true,
      "origin": "JX3BOX 物品百科 · 采集产物 / 掉率为示例",
      "custom": false
    },
    {
      "id": "r_g_sn_huanghuacai",
      "kind": "gather",
      "skillId": "shennong",
      "name": "神农·黄花菜",
      "level": 50,
      "tier": 4,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_30844",
          "qty": 1,
          "chance": 1
        },
        {
          "item": "m_m_5_30845",
          "qty": 1,
          "chance": 0.02
        },
        {
          "item": "m_m_5_30856",
          "qty": 1,
          "chance": 0.01
        }
      ],
      "materials": [],
      "note": "等级/精力按当前采集材料；稀有掉率为示例，产值按掉率折算",
      "verified": true,
      "origin": "JX3BOX 物品百科 · 采集产物 / 掉率为示例",
      "custom": false
    },
    {
      "id": "r_g_sn_yuxingcao",
      "kind": "gather",
      "skillId": "shennong",
      "name": "神农·鱼腥草",
      "level": 50,
      "tier": 4,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_30843",
          "qty": 1,
          "chance": 1
        },
        {
          "item": "m_m_5_30845",
          "qty": 1,
          "chance": 0.02
        },
        {
          "item": "m_m_5_30856",
          "qty": 1,
          "chance": 0.01
        }
      ],
      "materials": [],
      "note": "等级/精力按当前采集材料；稀有掉率为示例，产值按掉率折算",
      "verified": true,
      "origin": "JX3BOX 物品百科 · 采集产物 / 掉率为示例",
      "custom": false
    },
    {
      "id": "r_g_sn_chongcao",
      "kind": "gather",
      "skillId": "shennong",
      "name": "神农·虫草",
      "level": 50,
      "tier": 4,
      "energy": 40,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_30836",
          "qty": 1,
          "chance": 1
        },
        {
          "item": "m_m_5_30845",
          "qty": 1,
          "chance": 0.02
        },
        {
          "item": "m_m_5_30856",
          "qty": 1,
          "chance": 0.01
        }
      ],
      "materials": [],
      "note": "等级/精力按当前采集材料；稀有掉率为示例，产值按掉率折算",
      "verified": true,
      "origin": "JX3BOX 物品百科 · 采集产物 / 掉率为示例",
      "custom": false
    },
    {
      "id": "r_g_sn_gancao",
      "kind": "gather",
      "skillId": "shennong",
      "name": "神农·甘草",
      "level": 10,
      "tier": 3,
      "energy": 40,
      "fee": 0,
      "outputs": [
        {
          "item": "gancao",
          "qty": 1,
          "chance": 1
        },
        {
          "item": "lushui",
          "qty": 1,
          "chance": 0.2
        }
      ],
      "materials": [],
      "note": "等级/精力按当前采集材料；稀有掉率为示例，产值按掉率折算",
      "verified": true,
      "origin": "JX3BOX 物品百科 · 采集产物 / 掉率为示例",
      "custom": false
    },
    {
      "id": "r_g_sn_shaoyao",
      "kind": "gather",
      "skillId": "shennong",
      "name": "神农·芍药",
      "level": 15,
      "tier": 3,
      "energy": 40,
      "fee": 0,
      "outputs": [
        {
          "item": "shaoyao",
          "qty": 1,
          "chance": 1
        },
        {
          "item": "lushui",
          "qty": 1,
          "chance": 0.2
        }
      ],
      "materials": [],
      "note": "等级/精力按当前采集材料；稀有掉率为示例，产值按掉率折算",
      "verified": true,
      "origin": "JX3BOX 物品百科 · 采集产物 / 掉率为示例",
      "custom": false
    },
    {
      "id": "r_g_sn_shanhu",
      "kind": "gather",
      "skillId": "shennong",
      "name": "神农·珊瑚",
      "level": 1,
      "tier": 3,
      "energy": 40,
      "fee": 0,
      "outputs": [
        {
          "item": "shanhu",
          "qty": 1,
          "chance": 1
        },
        {
          "item": "lushui",
          "qty": 1,
          "chance": 0.2
        },
        {
          "item": "m_m_5_30845",
          "qty": 1,
          "chance": 0.01
        }
      ],
      "materials": [],
      "note": "等级/精力按当前采集材料；稀有掉率为示例，产值按掉率折算",
      "verified": true,
      "origin": "JX3BOX 物品百科 · 采集产物 / 掉率为示例",
      "custom": false
    },
    {
      "id": "r_g_cj_huishi",
      "kind": "gather",
      "skillId": "caijin",
      "name": "采金·辉石",
      "level": 50,
      "tier": 4,
      "energy": 40,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_30850",
          "qty": 1,
          "chance": 1
        },
        {
          "item": "m_m_5_30856",
          "qty": 1,
          "chance": 0.01
        }
      ],
      "materials": [],
      "note": "等级/精力按当前采集材料；稀有掉率为示例，产值按掉率折算",
      "verified": true,
      "origin": "JX3BOX 物品百科 · 采集产物 / 掉率为示例",
      "custom": false
    },
    {
      "id": "r_g_cj_tiekuang",
      "kind": "gather",
      "skillId": "caijin",
      "name": "采金·铁矿",
      "level": 20,
      "tier": 4,
      "energy": 40,
      "fee": 0,
      "outputs": [
        {
          "item": "tiekuang",
          "qty": 1,
          "chance": 1
        },
        {
          "item": "m_m_5_30850",
          "qty": 1,
          "chance": 0.01
        },
        {
          "item": "m_m_5_30856",
          "qty": 1,
          "chance": 0.005
        }
      ],
      "materials": [],
      "note": "等级/精力按当前采集材料；稀有掉率为示例，产值按掉率折算",
      "verified": true,
      "origin": "JX3BOX 物品百科 · 采集产物 / 掉率为示例",
      "custom": false
    },
    {
      "id": "r_g_cj_tongkuang",
      "kind": "gather",
      "skillId": "caijin",
      "name": "采金·铜矿",
      "level": 20,
      "tier": 4,
      "energy": 40,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_30674",
          "qty": 1,
          "chance": 1
        },
        {
          "item": "m_m_5_30850",
          "qty": 1,
          "chance": 0.01
        },
        {
          "item": "m_m_5_30856",
          "qty": 1,
          "chance": 0.005
        }
      ],
      "materials": [],
      "note": "等级/精力按当前采集材料；稀有掉率为示例，产值按掉率折算",
      "verified": true,
      "origin": "JX3BOX 物品百科 · 采集产物 / 掉率为示例",
      "custom": false
    },
    {
      "id": "r_g_cj_xikuang",
      "kind": "gather",
      "skillId": "caijin",
      "name": "采金·锡矿",
      "level": 30,
      "tier": 4,
      "energy": 40,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_30675",
          "qty": 1,
          "chance": 1
        },
        {
          "item": "m_m_5_30850",
          "qty": 1,
          "chance": 0.01
        },
        {
          "item": "m_m_5_30856",
          "qty": 1,
          "chance": 0.005
        }
      ],
      "materials": [],
      "note": "等级/精力按当前采集材料；稀有掉率为示例，产值按掉率折算",
      "verified": true,
      "origin": "JX3BOX 物品百科 · 采集产物 / 掉率为示例",
      "custom": false
    },
    {
      "id": "r_g_cj_qianxinkuang",
      "kind": "gather",
      "skillId": "caijin",
      "name": "采金·铅锌矿",
      "level": 35,
      "tier": 4,
      "energy": 40,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_30676",
          "qty": 1,
          "chance": 1
        },
        {
          "item": "m_m_5_30850",
          "qty": 1,
          "chance": 0.01
        },
        {
          "item": "m_m_5_30856",
          "qty": 1,
          "chance": 0.005
        }
      ],
      "materials": [],
      "note": "等级/精力按当前采集材料；稀有掉率为示例，产值按掉率折算",
      "verified": true,
      "origin": "JX3BOX 物品百科 · 采集产物 / 掉率为示例",
      "custom": false
    },
    {
      "id": "r_g_cj_jinsha",
      "kind": "gather",
      "skillId": "caijin",
      "name": "采金·金沙",
      "level": 40,
      "tier": 4,
      "energy": 40,
      "fee": 0,
      "outputs": [
        {
          "item": "g_5_30681",
          "qty": 1,
          "chance": 1
        },
        {
          "item": "m_m_5_30850",
          "qty": 1,
          "chance": 0.01
        },
        {
          "item": "m_m_5_30856",
          "qty": 1,
          "chance": 0.005
        }
      ],
      "materials": [],
      "note": "等级/精力按当前采集材料；稀有掉率为示例，产值按掉率折算",
      "verified": true,
      "origin": "JX3BOX 物品百科 · 采集产物 / 掉率为示例",
      "custom": false
    },
    {
      "id": "r_g_cj_qingshi",
      "kind": "gather",
      "skillId": "caijin",
      "name": "采金·青石",
      "level": 25,
      "tier": 3,
      "energy": 40,
      "fee": 0,
      "outputs": [
        {
          "item": "g_5_30680",
          "qty": 1,
          "chance": 1
        },
        {
          "item": "m_m_5_30850",
          "qty": 1,
          "chance": 0.01
        }
      ],
      "materials": [],
      "note": "等级/精力按当前采集材料；稀有掉率为示例，产值按掉率折算",
      "verified": true,
      "origin": "JX3BOX 物品百科 · 采集产物 / 掉率为示例",
      "custom": false
    },
    {
      "id": "r_g_pd_heishanyang",
      "kind": "gather",
      "skillId": "paoding",
      "name": "庖丁·黑山羊",
      "level": 50,
      "tier": 2,
      "energy": 40,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_30874",
          "qty": 1,
          "chance": 1
        },
        {
          "item": "m_m_5_30875",
          "qty": 1,
          "chance": 1
        },
        {
          "item": "m_m_5_30873",
          "qty": 1,
          "chance": 1
        }
      ],
      "materials": [],
      "note": "等级/精力按当前采集材料；稀有掉率为示例，产值按掉率折算",
      "verified": true,
      "origin": "JX3BOX 物品百科 · 采集产物 / 掉率为示例",
      "custom": false
    },
    {
      "id": "r_g_pd_shanye",
      "kind": "gather",
      "skillId": "paoding",
      "name": "庖丁·山野野兽",
      "level": 30,
      "tier": 2,
      "energy": 40,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_30824",
          "qty": 1,
          "chance": 1
        },
        {
          "item": "m_m_5_30826",
          "qty": 1,
          "chance": 1
        },
        {
          "item": "m_m_5_30825",
          "qty": 1,
          "chance": 1
        },
        {
          "item": "zasui",
          "qty": 1,
          "chance": 1
        }
      ],
      "materials": [],
      "note": "等级/精力按当前采集材料；稀有掉率为示例，产值按掉率折算",
      "verified": true,
      "origin": "JX3BOX 物品百科 · 采集产物 / 掉率为示例",
      "custom": false
    },
    {
      "id": "r_g_pd_hexian",
      "kind": "gather",
      "skillId": "paoding",
      "name": "庖丁·河鲜",
      "level": 20,
      "tier": 2,
      "energy": 40,
      "fee": 0,
      "outputs": [
        {
          "item": "m_m_5_30827",
          "qty": 1,
          "chance": 1
        },
        {
          "item": "zasui",
          "qty": 1,
          "chance": 1
        }
      ],
      "materials": [],
      "note": "等级/精力按当前采集材料；稀有掉率为示例，产值按掉率折算",
      "verified": true,
      "origin": "JX3BOX 物品百科 · 采集产物 / 掉率为示例",
      "custom": false
    },
    {
      "id": "r_shennong_baimaigen",
      "name": "神农·百脉根",
      "skillId": "shennong",
      "kind": "gather",
      "level": 1,
      "tier": 1,
      "energy": 40,
      "fee": 0,
      "materials": [],
      "outputs": [
        {
          "item": "g_ma_baimaigen",
          "qty": 1,
          "chance": 1
        }
      ],
      "verified": true,
      "note": "马草"
    },
    {
      "id": "r_shennong_zihuamuxu",
      "name": "神农·紫花苜蓿",
      "skillId": "shennong",
      "kind": "gather",
      "level": 1,
      "tier": 2,
      "energy": 40,
      "fee": 0,
      "materials": [],
      "outputs": [
        {
          "item": "g_ma_zihuamuxu",
          "qty": 1,
          "chance": 1
        }
      ],
      "verified": true,
      "note": "马草"
    },
    {
      "id": "r_shennong_tianxiangcao",
      "name": "神农·甜象草",
      "skillId": "shennong",
      "kind": "gather",
      "level": 1,
      "tier": 3,
      "energy": 40,
      "fee": 0,
      "materials": [],
      "outputs": [
        {
          "item": "g_ma_tianxiangcao",
          "qty": 1,
          "chance": 1
        }
      ],
      "verified": true,
      "note": "马草"
    },
    {
      "id": "r_shennong_huangzhucao",
      "name": "神农·皇竹草",
      "skillId": "shennong",
      "kind": "gather",
      "level": 1,
      "tier": 4,
      "energy": 40,
      "fee": 0,
      "materials": [],
      "outputs": [
        {
          "item": "g_ma_huangzhucao",
          "qty": 1,
          "chance": 1
        }
      ],
      "verified": true,
      "note": "马草"
    },
    {
      "id": "m_cooking_442",
      "kind": "craft",
      "skillId": "pengren",
      "name": "酥油烧饼",
      "level": 50,
      "tier": 4,
      "energy": 75,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89353",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89359",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 1
        },
        {
          "item": "m_m_5_30842",
          "qty": 15
        },
        {
          "item": "m_m_5_89969",
          "qty": 3
        },
        {
          "item": "m_m_5_89172",
          "qty": 1
        },
        {
          "item": "m_m_5_31973",
          "qty": 10
        }
      ],
      "note": "烹饪 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_443",
      "kind": "craft",
      "skillId": "pengren",
      "name": "菹菜拌腱肉",
      "level": 50,
      "tier": 4,
      "energy": 75,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89354",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89360",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 1
        },
        {
          "item": "m_m_5_30874",
          "qty": 15
        },
        {
          "item": "m_m_5_89971",
          "qty": 3
        },
        {
          "item": "m_m_5_30843",
          "qty": 1
        },
        {
          "item": "m_m_5_31976",
          "qty": 10
        }
      ],
      "note": "烹饪 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_421",
      "kind": "craft",
      "skillId": "pengren",
      "name": "嘉陵月夜宴（内攻）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89305",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89311",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_32014",
          "qty": 2
        },
        {
          "item": "m_m_5_89970",
          "qty": 15
        },
        {
          "item": "m_m_5_30853",
          "qty": 2
        },
        {
          "item": "m_m_5_30827",
          "qty": 20
        },
        {
          "item": "m_m_5_31974",
          "qty": 20
        }
      ],
      "note": "烹饪 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_422",
      "kind": "craft",
      "skillId": "pengren",
      "name": "椒香暖玉宴（治疗）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89306",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89312",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_32014",
          "qty": 2
        },
        {
          "item": "m_m_5_89970",
          "qty": 15
        },
        {
          "item": "fengwangjiang",
          "qty": 2
        },
        {
          "item": "m_m_5_30874",
          "qty": 20
        },
        {
          "item": "m_m_5_89171",
          "qty": 1
        }
      ],
      "note": "烹饪 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_423",
      "kind": "craft",
      "skillId": "pengren",
      "name": "红汤沸鼎宴（仇恨）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89307",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89313",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_32014",
          "qty": 2
        },
        {
          "item": "m_m_5_89971",
          "qty": 15
        },
        {
          "item": "m_m_5_30853",
          "qty": 2
        },
        {
          "item": "m_m_5_30875",
          "qty": 20
        },
        {
          "item": "m_m_5_31985",
          "qty": 20
        }
      ],
      "note": "烹饪 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_424",
      "kind": "craft",
      "skillId": "pengren",
      "name": "朝天门宴（防御）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89308",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89314",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_32014",
          "qty": 2
        },
        {
          "item": "m_m_5_89971",
          "qty": 15
        },
        {
          "item": "m_m_5_30856",
          "qty": 2
        },
        {
          "item": "m_m_5_30874",
          "qty": 20
        },
        {
          "item": "m_m_5_89171",
          "qty": 1
        }
      ],
      "note": "烹饪 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_438",
      "kind": "craft",
      "skillId": "pengren",
      "name": "渝州小面",
      "level": 50,
      "tier": 4,
      "energy": 75,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89349",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89355",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 1
        },
        {
          "item": "m_m_5_30874",
          "qty": 15
        },
        {
          "item": "m_m_5_89970",
          "qty": 3
        },
        {
          "item": "m_m_5_31973",
          "qty": 10
        },
        {
          "item": "m_m_5_31976",
          "qty": 10
        }
      ],
      "note": "烹饪 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_440",
      "kind": "craft",
      "skillId": "pengren",
      "name": "藤椒鱼片",
      "level": 50,
      "tier": 4,
      "energy": 75,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89351",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89357",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 1
        },
        {
          "item": "m_m_5_30827",
          "qty": 15
        },
        {
          "item": "m_m_5_89970",
          "qty": 3
        },
        {
          "item": "m_m_5_89171",
          "qty": 1
        },
        {
          "item": "m_m_5_31974",
          "qty": 10
        }
      ],
      "note": "烹饪 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_tailoring_1447",
      "kind": "craft",
      "skillId": "fengren",
      "name": "蜀锦绣·腕（元气）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89434",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89448",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30856",
          "qty": 6
        },
        {
          "item": "m_m_5_30853",
          "qty": 5
        },
        {
          "item": "m_m_5_30845",
          "qty": 10
        },
        {
          "item": "baihua_bu",
          "qty": 10
        },
        {
          "item": "m_m_5_32000",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1449",
      "kind": "craft",
      "skillId": "fengren",
      "name": "蜀锦绣·腕（根骨）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89436",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89450",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 6
        },
        {
          "item": "m_m_5_30855",
          "qty": 5
        },
        {
          "item": "m_m_5_30845",
          "qty": 10
        },
        {
          "item": "qicaixian",
          "qty": 10
        },
        {
          "item": "m_m_5_32004",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1450",
      "kind": "craft",
      "skillId": "fengren",
      "name": "蜀锦绣·腕（仇恨）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89437",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89451",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30855",
          "qty": 6
        },
        {
          "item": "m_m_5_30856",
          "qty": 5
        },
        {
          "item": "m_m_5_30850",
          "qty": 10
        },
        {
          "item": "wuseshi",
          "qty": 10
        },
        {
          "item": "m_m_5_32002",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1451",
      "kind": "craft",
      "skillId": "fengren",
      "name": "蜀锦绣·腕（破防）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89438",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89452",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 6
        },
        {
          "item": "m_m_5_30855",
          "qty": 5
        },
        {
          "item": "m_m_5_30845",
          "qty": 10
        },
        {
          "item": "yinsi_duan",
          "qty": 10
        },
        {
          "item": "m_m_5_32003",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1452",
      "kind": "craft",
      "skillId": "fengren",
      "name": "蜀锦绣·腕（会心）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89439",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89453",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 6
        },
        {
          "item": "m_m_5_30856",
          "qty": 5
        },
        {
          "item": "m_m_5_30850",
          "qty": 10
        },
        {
          "item": "yinsi_duan",
          "qty": 10
        },
        {
          "item": "m_m_5_32003",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1453",
      "kind": "craft",
      "skillId": "fengren",
      "name": "蜀锦绣·腕（无双）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89440",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89454",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30855",
          "qty": 6
        },
        {
          "item": "m_m_5_30853",
          "qty": 5
        },
        {
          "item": "shoupijiao",
          "qty": 10
        },
        {
          "item": "baihua_bu",
          "qty": 10
        },
        {
          "item": "m_m_5_32000",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1454",
      "kind": "craft",
      "skillId": "fengren",
      "name": "蜀锦绣·鞋（攻击）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89441",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89455",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 6
        },
        {
          "item": "m_m_5_30855",
          "qty": 5
        },
        {
          "item": "m_m_5_30850",
          "qty": 10
        },
        {
          "item": "qicaixian",
          "qty": 10
        },
        {
          "item": "m_m_5_32004",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1455",
      "kind": "craft",
      "skillId": "fengren",
      "name": "蜀锦绣·鞋（治疗）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89442",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89456",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30856",
          "qty": 6
        },
        {
          "item": "m_m_5_30853",
          "qty": 5
        },
        {
          "item": "m_m_5_30845",
          "qty": 10
        },
        {
          "item": "baihua_bu",
          "qty": 10
        },
        {
          "item": "m_m_5_32000",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1456",
      "kind": "craft",
      "skillId": "fengren",
      "name": "蜀锦绣·鞋（急速）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89443",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89457",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30855",
          "qty": 6
        },
        {
          "item": "fengwangjiang",
          "qty": 5
        },
        {
          "item": "m_m_5_30845",
          "qty": 10
        },
        {
          "item": "yinsi_duan",
          "qty": 10
        },
        {
          "item": "m_m_5_32003",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1457",
      "kind": "craft",
      "skillId": "fengren",
      "name": "蜀锦绣·衣（体质）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89444",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89458",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 6
        },
        {
          "item": "fengwangjiang",
          "qty": 5
        },
        {
          "item": "m_m_5_30845",
          "qty": 10
        },
        {
          "item": "baihua_bu",
          "qty": 10
        },
        {
          "item": "m_m_5_32000",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1458",
      "kind": "craft",
      "skillId": "fengren",
      "name": "蜀锦绣·衣（化劲）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89445",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89459",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30855",
          "qty": 6
        },
        {
          "item": "fengwangjiang",
          "qty": 5
        },
        {
          "item": "m_m_5_30845",
          "qty": 10
        },
        {
          "item": "shuran_bu",
          "qty": 10
        },
        {
          "item": "m_m_5_32001",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1459",
      "kind": "craft",
      "skillId": "fengren",
      "name": "蜀锦绣·衣（御劲）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89446",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89460",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30856",
          "qty": 6
        },
        {
          "item": "m_m_5_30855",
          "qty": 5
        },
        {
          "item": "shoupijiao",
          "qty": 10
        },
        {
          "item": "yinsi_duan",
          "qty": 10
        },
        {
          "item": "m_m_5_32003",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1475",
      "kind": "craft",
      "skillId": "fengren",
      "name": "玄元赤地衫",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_7_112586",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30856",
          "qty": 10
        },
        {
          "item": "m_m_5_30850",
          "qty": 20
        },
        {
          "item": "wuseshi",
          "qty": 20
        },
        {
          "item": "bairanxian",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1476",
      "kind": "craft",
      "skillId": "fengren",
      "name": "玄元烽火衫",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_7_112587",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30853",
          "qty": 10
        },
        {
          "item": "m_m_5_30845",
          "qty": 20
        },
        {
          "item": "yinsi_duan",
          "qty": 20
        },
        {
          "item": "bairanxian",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1477",
      "kind": "craft",
      "skillId": "fengren",
      "name": "玄元风鹤衫",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_7_112585",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "fengwangjiang",
          "qty": 10
        },
        {
          "item": "shoupijiao",
          "qty": 20
        },
        {
          "item": "qicaixian",
          "qty": 20
        },
        {
          "item": "bairanxian",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1483",
      "kind": "craft",
      "skillId": "fengren",
      "name": "玄元风鹤鞋",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_7_112567",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.7600002288818359
        },
        {
          "item": "m_x_7_114861",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.013333320617675781
        },
        {
          "item": "m_x_7_112790_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.013333320617675781
        },
        {
          "item": "m_x_7_112791_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.013333320617675781
        },
        {
          "item": "m_x_7_114859_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.0666666030883789
        },
        {
          "item": "m_x_7_114860_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.0666666030883789
        },
        {
          "item": "m_x_7_114861",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.0666666030883789
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "fengwangjiang",
          "qty": 10
        },
        {
          "item": "shoupijiao",
          "qty": 20
        },
        {
          "item": "qicaixian",
          "qty": 20
        },
        {
          "item": "m_m_5_90338",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1484",
      "kind": "craft",
      "skillId": "fengren",
      "name": "玄元木声鞋",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_7_112571",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30856",
          "qty": 10
        },
        {
          "item": "m_m_5_30850",
          "qty": 20
        },
        {
          "item": "wuseshi",
          "qty": 20
        },
        {
          "item": "bairanxian",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1485",
      "kind": "craft",
      "skillId": "fengren",
      "name": "玄元松绿鞋",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_7_112570",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.7600002288818359
        },
        {
          "item": "m_x_7_114864",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.013333320617675781
        },
        {
          "item": "m_x_7_112793_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.013333320617675781
        },
        {
          "item": "m_x_7_112794_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.013333320617675781
        },
        {
          "item": "m_x_7_114862_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.0666666030883789
        },
        {
          "item": "m_x_7_114863_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.0666666030883789
        },
        {
          "item": "m_x_7_114864",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.0666666030883789
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30853",
          "qty": 10
        },
        {
          "item": "m_m_5_30845",
          "qty": 20
        },
        {
          "item": "yinsi_duan",
          "qty": 20
        },
        {
          "item": "m_m_5_90338",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1489",
      "kind": "craft",
      "skillId": "fengren",
      "name": "玄元风鹤护腕",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_7_112555",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "fengwangjiang",
          "qty": 10
        },
        {
          "item": "shoupijiao",
          "qty": 20
        },
        {
          "item": "qicaixian",
          "qty": 20
        },
        {
          "item": "bairanxian",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1490",
      "kind": "craft",
      "skillId": "fengren",
      "name": "玄元木声护腕",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_7_112559",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30856",
          "qty": 10
        },
        {
          "item": "m_m_5_30850",
          "qty": 20
        },
        {
          "item": "wuseshi",
          "qty": 20
        },
        {
          "item": "bairanxian",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_tailoring_1491",
      "kind": "craft",
      "skillId": "fengren",
      "name": "玄元松绿护腕",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_7_112558",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30853",
          "qty": 10
        },
        {
          "item": "m_m_5_30845",
          "qty": 20
        },
        {
          "item": "yinsi_duan",
          "qty": 20
        },
        {
          "item": "bairanxian",
          "qty": 20
        }
      ],
      "note": "缝纫 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_medicine_396",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "渝州摧锋丹",
      "level": 50,
      "tier": 4,
      "energy": 90,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89329",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89335",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 1
        },
        {
          "item": "gancao",
          "qty": 10
        },
        {
          "item": "m_m_5_30835",
          "qty": 4
        },
        {
          "item": "m_m_5_89973",
          "qty": 5
        },
        {
          "item": "m_m_5_6646",
          "qty": 20
        }
      ],
      "note": "制药 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_397",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "函谷疾咏丹",
      "level": 50,
      "tier": 4,
      "energy": 90,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89330",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89336",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30855",
          "qty": 1
        },
        {
          "item": "gancao",
          "qty": 10
        },
        {
          "item": "m_m_5_30835",
          "qty": 4
        },
        {
          "item": "m_m_5_89974",
          "qty": 5
        },
        {
          "item": "m_m_5_6648",
          "qty": 20
        }
      ],
      "note": "制药 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_398",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "中原破阵丹",
      "level": 50,
      "tier": 4,
      "energy": 90,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89331",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89337",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 1
        },
        {
          "item": "gancao",
          "qty": 10
        },
        {
          "item": "m_m_5_30835",
          "qty": 4
        },
        {
          "item": "yaoyin",
          "qty": 5
        },
        {
          "item": "m_m_5_31995",
          "qty": 20
        }
      ],
      "note": "制药 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_founding_1276",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "苍生·坠宵熔锭（攻击）",
      "level": 50,
      "tier": 4,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89368",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89372",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 1
        },
        {
          "item": "m_m_5_30845",
          "qty": 5
        },
        {
          "item": "m_m_5_89965",
          "qty": 5
        },
        {
          "item": "m_m_5_31992",
          "qty": 10
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1277",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "苍生·絮泊熔锭（疗伤）",
      "level": 50,
      "tier": 4,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89369",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89373",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 1
        },
        {
          "item": "shoupijiao",
          "qty": 5
        },
        {
          "item": "m_m_5_89968",
          "qty": 5
        },
        {
          "item": "m_m_5_31993",
          "qty": 10
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1283",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "峡金铸·兵（攻击）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89379",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89397",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 6
        },
        {
          "item": "m_m_5_30856",
          "qty": 5
        },
        {
          "item": "m_m_5_30850",
          "qty": 20
        },
        {
          "item": "m_x_5_90436",
          "qty": 4
        },
        {
          "item": "m_m_5_31991",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1284",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "峡金铸·兵（疗伤）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89380",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89398",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 6
        },
        {
          "item": "m_m_5_30855",
          "qty": 5
        },
        {
          "item": "m_m_5_30850",
          "qty": 20
        },
        {
          "item": "m_m_5_89961",
          "qty": 4
        },
        {
          "item": "m_m_5_31991",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1285",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "峡金铸·兵（武伤）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89381",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89399",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 6
        },
        {
          "item": "m_m_5_30856",
          "qty": 5
        },
        {
          "item": "m_m_5_30845",
          "qty": 20
        },
        {
          "item": "m_x_5_90437",
          "qty": 2
        },
        {
          "item": "m_m_5_31992",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1286",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "峡金铸·兵（仇恨）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89382",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89400",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30855",
          "qty": 6
        },
        {
          "item": "m_m_5_30856",
          "qty": 5
        },
        {
          "item": "m_m_5_30850",
          "qty": 20
        },
        {
          "item": "m_m_5_89963",
          "qty": 4
        },
        {
          "item": "m_m_5_31993",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1287",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "峡金铸·裤（身法）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89383",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89401",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 6
        },
        {
          "item": "m_m_5_30855",
          "qty": 5
        },
        {
          "item": "m_m_5_30850",
          "qty": 20
        },
        {
          "item": "m_m_5_89961",
          "qty": 4
        },
        {
          "item": "m_m_5_31991",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1288",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "峡金铸·裤（元气）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89384",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89402",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 6
        },
        {
          "item": "m_m_5_30853",
          "qty": 5
        },
        {
          "item": "shoupijiao",
          "qty": 20
        },
        {
          "item": "m_m_5_89962",
          "qty": 4
        },
        {
          "item": "m_m_5_31992",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1289",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "峡金铸·裤（力道）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89385",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89403",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 6
        },
        {
          "item": "m_m_5_30853",
          "qty": 5
        },
        {
          "item": "m_m_5_30850",
          "qty": 20
        },
        {
          "item": "m_x_5_90436",
          "qty": 4
        },
        {
          "item": "m_m_5_31992",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1290",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "峡金铸·裤（根骨）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89386",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89404",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30856",
          "qty": 6
        },
        {
          "item": "m_m_5_30853",
          "qty": 5
        },
        {
          "item": "m_m_5_30845",
          "qty": 20
        },
        {
          "item": "m_m_5_89968",
          "qty": 4
        },
        {
          "item": "m_m_5_31994",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1291",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "峡金铸·裤（仇恨）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89387",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89405",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 6
        },
        {
          "item": "m_m_5_30856",
          "qty": 5
        },
        {
          "item": "m_m_5_30850",
          "qty": 20
        },
        {
          "item": "m_x_5_90437",
          "qty": 2
        },
        {
          "item": "m_m_5_31991",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1292",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "峡金铸·裤（破防）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89388",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89406",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30856",
          "qty": 6
        },
        {
          "item": "m_m_5_30853",
          "qty": 5
        },
        {
          "item": "m_m_5_30845",
          "qty": 20
        },
        {
          "item": "m_m_5_89968",
          "qty": 4
        },
        {
          "item": "m_m_5_31994",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1293",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "峡金铸·裤（会心）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89389",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89407",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30856",
          "qty": 6
        },
        {
          "item": "m_m_5_30853",
          "qty": 5
        },
        {
          "item": "m_m_5_30845",
          "qty": 20
        },
        {
          "item": "m_m_5_89968",
          "qty": 4
        },
        {
          "item": "m_m_5_31994",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1294",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "峡金铸·裤（无双）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89390",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89408",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 6
        },
        {
          "item": "fengwangjiang",
          "qty": 5
        },
        {
          "item": "shoupijiao",
          "qty": 20
        },
        {
          "item": "m_m_5_89965",
          "qty": 4
        },
        {
          "item": "m_m_5_31991",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1295",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "峡金铸·头（攻击）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89391",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89409",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30856",
          "qty": 6
        },
        {
          "item": "m_m_5_30855",
          "qty": 5
        },
        {
          "item": "m_m_5_30845",
          "qty": 20
        },
        {
          "item": "m_x_5_90436",
          "qty": 4
        },
        {
          "item": "m_m_5_31994",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1296",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "峡金铸·头（治疗）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89392",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89410",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 6
        },
        {
          "item": "fengwangjiang",
          "qty": 5
        },
        {
          "item": "shoupijiao",
          "qty": 20
        },
        {
          "item": "m_m_5_89965",
          "qty": 4
        },
        {
          "item": "m_m_5_31991",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1297",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "峡金铸·头（急速）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89393",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89411",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 6
        },
        {
          "item": "m_m_5_30855",
          "qty": 5
        },
        {
          "item": "m_m_5_30845",
          "qty": 20
        },
        {
          "item": "m_x_5_90437",
          "qty": 2
        },
        {
          "item": "m_m_5_31992",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1298",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "峡金铸·腰（体质）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89394",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89412",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 6
        },
        {
          "item": "m_m_5_30853",
          "qty": 5
        },
        {
          "item": "m_m_5_30850",
          "qty": 20
        },
        {
          "item": "m_m_5_89966",
          "qty": 4
        },
        {
          "item": "m_m_5_31992",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1299",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "峡金铸·腰（御劲）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89395",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89413",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30856",
          "qty": 6
        },
        {
          "item": "fengwangjiang",
          "qty": 5
        },
        {
          "item": "shoupijiao",
          "qty": 20
        },
        {
          "item": "m_m_5_89964",
          "qty": 4
        },
        {
          "item": "m_m_5_31994",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1300",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "峡金铸·腰（化劲）",
      "level": 50,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89396",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9600000381469727
        },
        {
          "item": "m_x_5_89414",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.039999961853027344
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30855",
          "qty": 6
        },
        {
          "item": "fengwangjiang",
          "qty": 5
        },
        {
          "item": "shoupijiao",
          "qty": 20
        },
        {
          "item": "m_m_5_89967",
          "qty": 4
        },
        {
          "item": "m_m_5_31993",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1318",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "云冈石·兵（仇恨）",
      "level": 50,
      "tier": 3,
      "energy": 80,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89432",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "shoupijiao",
          "qty": 5
        },
        {
          "item": "m_m_5_89965",
          "qty": 5
        },
        {
          "item": "m_m_5_10176",
          "qty": 10
        },
        {
          "item": "m_m_5_31991",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1319",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "玄元赤地帽",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_7_112580",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.7600002288818359
        },
        {
          "item": "m_x_7_114855",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.013333320617675781
        },
        {
          "item": "m_x_7_112784_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.013333320617675781
        },
        {
          "item": "m_x_7_112785_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.013333320617675781
        },
        {
          "item": "m_x_7_114853_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.0666666030883789
        },
        {
          "item": "m_x_7_114854_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.0666666030883789
        },
        {
          "item": "m_x_7_114855",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.0666666030883789
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30856",
          "qty": 10
        },
        {
          "item": "m_m_5_30850",
          "qty": 20
        },
        {
          "item": "m_m_5_89963",
          "qty": 20
        },
        {
          "item": "m_m_5_90338",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1320",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "玄元烽火帽",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_7_112581",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.7600002288818359
        },
        {
          "item": "m_x_7_114858",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.013333320617675781
        },
        {
          "item": "m_x_7_112787_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.013333320617675781
        },
        {
          "item": "m_x_7_112788_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.013333320617675781
        },
        {
          "item": "m_x_7_114856_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.0666666030883789
        },
        {
          "item": "m_x_7_114857_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.0666666030883789
        },
        {
          "item": "m_x_7_114858",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.0666666030883789
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30853",
          "qty": 10
        },
        {
          "item": "m_m_5_30845",
          "qty": 20
        },
        {
          "item": "m_m_5_89965",
          "qty": 20
        },
        {
          "item": "m_m_5_90338",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1321",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "玄元风鹤帽",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_7_112579",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.7600002288818359
        },
        {
          "item": "m_x_7_114855",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.013333320617675781
        },
        {
          "item": "m_x_7_112784_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.013333320617675781
        },
        {
          "item": "m_x_7_112785_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.013333320617675781
        },
        {
          "item": "m_x_7_114853_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.0666666030883789
        },
        {
          "item": "m_x_7_114854_2",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.0666666030883789
        },
        {
          "item": "m_x_7_114855",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.0666666030883789
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "fengwangjiang",
          "qty": 10
        },
        {
          "item": "shoupijiao",
          "qty": 20
        },
        {
          "item": "m_m_5_89968",
          "qty": 20
        },
        {
          "item": "m_m_5_90338",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1325",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "玄元赤地护腰",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_7_112562",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30856",
          "qty": 10
        },
        {
          "item": "m_m_5_30850",
          "qty": 20
        },
        {
          "item": "m_m_5_89963",
          "qty": 20
        },
        {
          "item": "m_m_5_10176",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1326",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "玄元烽火护腰",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_7_112563",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30853",
          "qty": 10
        },
        {
          "item": "m_m_5_30845",
          "qty": 20
        },
        {
          "item": "m_m_5_89965",
          "qty": 20
        },
        {
          "item": "m_m_5_10176",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1328",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "玄元木声护腰",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_7_112565",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30856",
          "qty": 10
        },
        {
          "item": "m_m_5_30850",
          "qty": 20
        },
        {
          "item": "m_m_5_89966",
          "qty": 20
        },
        {
          "item": "m_m_5_10176",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1331",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "玄元赤地裤",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_7_112574",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30856",
          "qty": 10
        },
        {
          "item": "m_m_5_30850",
          "qty": 20
        },
        {
          "item": "m_m_5_89963",
          "qty": 20
        },
        {
          "item": "m_m_5_10176",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1334",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "玄元木声裤",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_7_112577",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30856",
          "qty": 10
        },
        {
          "item": "m_m_5_30850",
          "qty": 20
        },
        {
          "item": "m_m_5_89966",
          "qty": 20
        },
        {
          "item": "m_m_5_10176",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1335",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "玄元松绿裤",
      "level": 50,
      "tier": 4,
      "energy": 200,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_7_112576",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "dimai",
          "qty": 1
        },
        {
          "item": "m_m_5_30853",
          "qty": 10
        },
        {
          "item": "m_m_5_30845",
          "qty": 20
        },
        {
          "item": "m_m_5_89967",
          "qty": 20
        },
        {
          "item": "m_m_5_10176",
          "qty": 20
        }
      ],
      "note": "锻造 · 50级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_furniture_127",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "邢窑白瓷罗合",
      "level": 12,
      "tier": 3,
      "energy": 126,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_10_157",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "wuseshi",
          "qty": 5
        },
        {
          "item": "m_m_5_35707",
          "qty": 10
        },
        {
          "item": "m_m_5_35702",
          "qty": 20
        }
      ],
      "note": "梓匠 · 12级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_cooking_356",
      "kind": "craft",
      "skillId": "pengren",
      "name": "咸鱼",
      "level": 13,
      "tier": 4,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_20971",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30827",
          "qty": 10
        },
        {
          "item": "m_m_5_31976",
          "qty": 10
        }
      ],
      "note": "烹饪 · 13级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_furniture_198",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "积木·木质标准弧料包",
      "level": 17,
      "tier": 4,
      "energy": 400,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_38122",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_35717",
          "qty": 1
        },
        {
          "item": "m_m_5_35713",
          "qty": 6
        },
        {
          "item": "m_m_5_35716",
          "qty": 6
        },
        {
          "item": "muban",
          "qty": 10
        },
        {
          "item": "m_m_5_30679",
          "qty": 10
        }
      ],
      "note": "梓匠 · 17级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_furniture_261",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "匾额·布坊",
      "level": 19,
      "tier": 4,
      "energy": 69,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_10_1281",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30852",
          "qty": 5
        },
        {
          "item": "m_m_5_35717",
          "qty": 1
        },
        {
          "item": "m_m_5_35714",
          "qty": 1
        }
      ],
      "note": "梓匠 · 19级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_furniture_306",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "槿花茵·一",
      "level": 21,
      "tier": 4,
      "energy": 69,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_10_1894",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 2
        }
      ],
      "materials": [
        {
          "item": "m_m_5_35717",
          "qty": 3
        },
        {
          "item": "m_m_5_30852",
          "qty": 1
        },
        {
          "item": "m_x_5_35026",
          "qty": 20
        }
      ],
      "note": "梓匠 · 21级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_furniture_337",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "暮春落花·一",
      "level": 23,
      "tier": 4,
      "energy": 69,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_10_2229",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 2
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30841",
          "qty": 10
        },
        {
          "item": "m_m_5_30852",
          "qty": 5
        },
        {
          "item": "m_x_5_35025",
          "qty": 20
        }
      ],
      "note": "梓匠 · 23级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_cooking_433",
      "kind": "craft",
      "skillId": "pengren",
      "name": "胡笳月夜宴（内攻）",
      "level": 24,
      "tier": 3,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89317",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_1829",
          "qty": 10
        },
        {
          "item": "m_m_5_89970",
          "qty": 7
        },
        {
          "item": "m_m_5_30827",
          "qty": 10
        },
        {
          "item": "m_m_5_30843",
          "qty": 5
        },
        {
          "item": "m_m_5_31974",
          "qty": 20
        }
      ],
      "note": "烹饪 · 24级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_furniture_313",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "鹰鳐纸鸢",
      "level": 26,
      "tier": 4,
      "energy": 57,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_10_2028",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_35717",
          "qty": 4
        },
        {
          "item": "m_m_5_35715",
          "qty": 10
        },
        {
          "item": "m_m_5_35716",
          "qty": 5
        },
        {
          "item": "m_m_5_10173",
          "qty": 10
        },
        {
          "item": "m_m_5_35704",
          "qty": 10
        }
      ],
      "note": "梓匠 · 26级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_furniture_347",
      "kind": "craft",
      "skillId": "zijiang",
      "name": "须弥座方柱",
      "level": 28,
      "tier": 4,
      "energy": 69,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_10_2241",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_35717",
          "qty": 10
        },
        {
          "item": "m_m_5_30853",
          "qty": 5
        },
        {
          "item": "m_m_5_35713",
          "qty": 20
        },
        {
          "item": "m_m_5_35701",
          "qty": 20
        }
      ],
      "note": "梓匠 · 28级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_cooking_435",
      "kind": "craft",
      "skillId": "pengren",
      "name": "黄云牧火宴（仇恨）",
      "level": 32,
      "tier": 3,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89319",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_1829",
          "qty": 10
        },
        {
          "item": "m_m_5_89971",
          "qty": 7
        },
        {
          "item": "m_m_5_30875",
          "qty": 10
        },
        {
          "item": "m_m_5_30845",
          "qty": 1
        },
        {
          "item": "m_m_5_31985",
          "qty": 20
        }
      ],
      "note": "烹饪 · 32级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_436",
      "kind": "craft",
      "skillId": "pengren",
      "name": "云中关宴（防御）",
      "level": 34,
      "tier": 3,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89320",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_1829",
          "qty": 10
        },
        {
          "item": "m_m_5_89971",
          "qty": 7
        },
        {
          "item": "m_m_5_30875",
          "qty": 10
        },
        {
          "item": "m_m_5_30842",
          "qty": 5
        },
        {
          "item": "m_m_5_31976",
          "qty": 20
        }
      ],
      "note": "烹饪 · 34级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_founding_1312",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "云冈石·腰（体质）",
      "level": 38,
      "tier": 3,
      "energy": 80,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89426",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30845",
          "qty": 5
        },
        {
          "item": "m_m_5_89962",
          "qty": 5
        },
        {
          "item": "m_m_5_10176",
          "qty": 10
        },
        {
          "item": "m_m_5_31992",
          "qty": 20
        }
      ],
      "note": "锻造 · 38级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1313",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "云冈石·腰（御劲）",
      "level": 40,
      "tier": 3,
      "energy": 80,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89427",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30850",
          "qty": 5
        },
        {
          "item": "m_m_5_89964",
          "qty": 5
        },
        {
          "item": "m_m_5_10176",
          "qty": 10
        },
        {
          "item": "m_m_5_31994",
          "qty": 20
        }
      ],
      "note": "锻造 · 40级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_founding_1314",
      "kind": "craft",
      "skillId": "duanzao",
      "name": "云冈石·腰（化劲）",
      "level": 42,
      "tier": 3,
      "energy": 80,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89428",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30845",
          "qty": 5
        },
        {
          "item": "m_m_5_89967",
          "qty": 5
        },
        {
          "item": "m_m_5_10176",
          "qty": 10
        },
        {
          "item": "m_m_5_31993",
          "qty": 20
        }
      ],
      "note": "锻造 · 42级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-21",
      "custom": false
    },
    {
      "id": "m_cooking_357",
      "kind": "craft",
      "skillId": "pengren",
      "name": "辣酱肉片",
      "level": 15,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_11521",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30824",
          "qty": 4
        },
        {
          "item": "m_m_5_31985",
          "qty": 1
        },
        {
          "item": "m_m_5_31976",
          "qty": 1
        }
      ],
      "note": "烹饪 · 15级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_359",
      "kind": "craft",
      "skillId": "pengren",
      "name": "戏凤饺",
      "level": 3,
      "tier": 3,
      "energy": 37,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_5232",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.6499996185302734
        },
        {
          "item": "m_x_5_5231",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.35000038146972656
        }
      ],
      "materials": [
        {
          "item": "m_m_5_5269",
          "qty": 1
        },
        {
          "item": "m_m_5_5270",
          "qty": 1
        },
        {
          "item": "m_m_5_31976",
          "qty": 1
        }
      ],
      "note": "烹饪 · 3级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_360",
      "kind": "craft",
      "skillId": "pengren",
      "name": "盘龙饺",
      "level": 3,
      "tier": 3,
      "energy": 37,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_5230",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.6499996185302734
        },
        {
          "item": "m_x_5_5229",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.35000038146972656
        }
      ],
      "materials": [
        {
          "item": "m_m_5_5269",
          "qty": 1
        },
        {
          "item": "m_m_5_5270",
          "qty": 1
        },
        {
          "item": "m_m_5_31976",
          "qty": 1
        }
      ],
      "note": "烹饪 · 3级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_371",
      "kind": "craft",
      "skillId": "pengren",
      "name": "百味宴",
      "level": 15,
      "tier": 3,
      "energy": 80,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_31050",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9499998092651367
        },
        {
          "item": "m_x_5_2304",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.05000019073486328
        }
      ],
      "materials": [
        {
          "item": "m_m_5_1829",
          "qty": 10
        },
        {
          "item": "m_m_5_89171",
          "qty": 5
        },
        {
          "item": "m_m_5_30824",
          "qty": 10
        },
        {
          "item": "m_m_5_31973",
          "qty": 10
        },
        {
          "item": "m_x_5_31983",
          "qty": 10
        }
      ],
      "note": "烹饪 · 15级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_372",
      "kind": "craft",
      "skillId": "pengren",
      "name": "山河宴",
      "level": 15,
      "tier": 3,
      "energy": 80,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_31051",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_x_5_1830",
          "qty": 10
        },
        {
          "item": "m_m_5_89171",
          "qty": 5
        },
        {
          "item": "m_m_5_30825",
          "qty": 10
        },
        {
          "item": "m_m_5_31974",
          "qty": 10
        },
        {
          "item": "m_m_5_31984",
          "qty": 10
        }
      ],
      "note": "烹饪 · 15级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_373",
      "kind": "craft",
      "skillId": "pengren",
      "name": "汉宫宴",
      "level": 15,
      "tier": 3,
      "energy": 80,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_31052",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_1831",
          "qty": 10
        },
        {
          "item": "m_m_5_89171",
          "qty": 5
        },
        {
          "item": "m_m_5_30826",
          "qty": 10
        },
        {
          "item": "m_x_5_31975",
          "qty": 10
        },
        {
          "item": "m_m_5_31967",
          "qty": 10
        }
      ],
      "note": "烹饪 · 15级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_374",
      "kind": "craft",
      "skillId": "pengren",
      "name": "南山宴",
      "level": 15,
      "tier": 3,
      "energy": 80,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_31053",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_x_5_1832",
          "qty": 10
        },
        {
          "item": "m_m_5_89171",
          "qty": 5
        },
        {
          "item": "m_m_5_30827",
          "qty": 10
        },
        {
          "item": "m_m_5_31976",
          "qty": 10
        },
        {
          "item": "m_m_5_31968",
          "qty": 10
        }
      ],
      "note": "烹饪 · 15级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_375",
      "kind": "craft",
      "skillId": "pengren",
      "name": "东海宴",
      "level": 15,
      "tier": 3,
      "energy": 80,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_31054",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_1829",
          "qty": 10
        },
        {
          "item": "m_m_5_89171",
          "qty": 5
        },
        {
          "item": "zasui",
          "qty": 10
        },
        {
          "item": "m_m_5_31977",
          "qty": 10
        },
        {
          "item": "m_x_5_31979",
          "qty": 10
        }
      ],
      "note": "烹饪 · 15级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_376",
      "kind": "craft",
      "skillId": "pengren",
      "name": "任侠宴",
      "level": 15,
      "tier": 3,
      "energy": 80,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_31055",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9499998092651367
        },
        {
          "item": "m_x_5_2299",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.05000019073486328
        }
      ],
      "materials": [
        {
          "item": "m_x_5_1830",
          "qty": 10
        },
        {
          "item": "m_m_5_89171",
          "qty": 5
        },
        {
          "item": "m_m_5_30823",
          "qty": 10
        },
        {
          "item": "m_m_5_31978",
          "qty": 10
        },
        {
          "item": "m_x_5_31981",
          "qty": 10
        }
      ],
      "note": "烹饪 · 15级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_377",
      "kind": "craft",
      "skillId": "pengren",
      "name": "兄弟宴",
      "level": 15,
      "tier": 3,
      "energy": 80,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_31056",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9499998092651367
        },
        {
          "item": "m_x_5_2300",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.05000019073486328
        }
      ],
      "materials": [
        {
          "item": "m_m_5_1831",
          "qty": 10
        },
        {
          "item": "m_m_5_89171",
          "qty": 5
        },
        {
          "item": "m_m_5_30824",
          "qty": 10
        },
        {
          "item": "m_m_5_31985",
          "qty": 5
        },
        {
          "item": "m_x_5_31971",
          "qty": 5
        }
      ],
      "note": "烹饪 · 15级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_378",
      "kind": "craft",
      "skillId": "pengren",
      "name": "贵妃宴",
      "level": 9,
      "tier": 2,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_31057",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_x_5_32007",
          "qty": 10
        },
        {
          "item": "m_m_5_89171",
          "qty": 2
        },
        {
          "item": "m_m_5_30825",
          "qty": 10
        },
        {
          "item": "m_m_5_31973",
          "qty": 5
        },
        {
          "item": "m_x_5_31983",
          "qty": 5
        }
      ],
      "note": "烹饪 · 9级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_379",
      "kind": "craft",
      "skillId": "pengren",
      "name": "欢庆宴",
      "level": 9,
      "tier": 2,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_31058",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_x_5_32008",
          "qty": 10
        },
        {
          "item": "m_m_5_89171",
          "qty": 2
        },
        {
          "item": "m_m_5_30826",
          "qty": 10
        },
        {
          "item": "m_m_5_31974",
          "qty": 5
        },
        {
          "item": "m_m_5_31984",
          "qty": 5
        }
      ],
      "note": "烹饪 · 9级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_380",
      "kind": "craft",
      "skillId": "pengren",
      "name": "三头宴",
      "level": 9,
      "tier": 2,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_31059",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9499998092651367
        },
        {
          "item": "m_x_5_2305",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.05000019073486328
        }
      ],
      "materials": [
        {
          "item": "m_x_5_32009",
          "qty": 10
        },
        {
          "item": "m_m_5_89171",
          "qty": 2
        },
        {
          "item": "m_m_5_30827",
          "qty": 10
        },
        {
          "item": "m_x_5_31975",
          "qty": 5
        },
        {
          "item": "m_m_5_31967",
          "qty": 5
        }
      ],
      "note": "烹饪 · 9级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_381",
      "kind": "craft",
      "skillId": "pengren",
      "name": "洗尘宴",
      "level": 9,
      "tier": 2,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_31060",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_x_5_32010",
          "qty": 10
        },
        {
          "item": "m_m_5_89171",
          "qty": 2
        },
        {
          "item": "zasui",
          "qty": 10
        },
        {
          "item": "m_m_5_31976",
          "qty": 5
        },
        {
          "item": "m_m_5_31968",
          "qty": 5
        }
      ],
      "note": "烹饪 · 9级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_382",
      "kind": "craft",
      "skillId": "pengren",
      "name": "迎客宴",
      "level": 9,
      "tier": 2,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_31061",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_x_5_32011",
          "qty": 10
        },
        {
          "item": "m_m_5_89171",
          "qty": 2
        },
        {
          "item": "m_m_5_30823",
          "qty": 10
        },
        {
          "item": "m_m_5_31977",
          "qty": 5
        },
        {
          "item": "m_x_5_31979",
          "qty": 5
        }
      ],
      "note": "烹饪 · 9级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_383",
      "kind": "craft",
      "skillId": "pengren",
      "name": "结缘宴",
      "level": 9,
      "tier": 2,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_31062",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_x_5_32012",
          "qty": 10
        },
        {
          "item": "m_m_5_89171",
          "qty": 2
        },
        {
          "item": "m_m_5_30824",
          "qty": 10
        },
        {
          "item": "m_m_5_31978",
          "qty": 5
        },
        {
          "item": "m_x_5_31981",
          "qty": 5
        }
      ],
      "note": "烹饪 · 9级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_384",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·酸菜鱼",
      "level": 30,
      "tier": 4,
      "energy": 75,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71268",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 1
        },
        {
          "item": "m_m_5_30827",
          "qty": 15
        },
        {
          "item": "m_m_5_89171",
          "qty": 3
        },
        {
          "item": "m_m_5_31985",
          "qty": 10
        },
        {
          "item": "m_m_5_31969",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_386",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·白肉血肠",
      "level": 30,
      "tier": 4,
      "energy": 75,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71270",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.9499998092651367
        },
        {
          "item": "m_x_5_2302",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.05000019073486328
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 1
        },
        {
          "item": "m_m_5_30825",
          "qty": 15
        },
        {
          "item": "m_m_5_89171",
          "qty": 3
        },
        {
          "item": "m_m_5_31985",
          "qty": 10
        },
        {
          "item": "m_m_5_31978",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_387",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·红烧扣肉",
      "level": 30,
      "tier": 4,
      "energy": 75,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71271",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 1
        },
        {
          "item": "m_m_5_30824",
          "qty": 15
        },
        {
          "item": "m_m_5_89171",
          "qty": 3
        },
        {
          "item": "m_m_5_31978",
          "qty": 10
        },
        {
          "item": "m_x_5_31975",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_388",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·太后饼",
      "level": 30,
      "tier": 4,
      "energy": 75,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71272",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 1
        },
        {
          "item": "m_m_5_30823",
          "qty": 15
        },
        {
          "item": "m_m_5_89171",
          "qty": 3
        },
        {
          "item": "m_m_5_31973",
          "qty": 10
        },
        {
          "item": "m_m_5_30829",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_389",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·灌汤包",
      "level": 30,
      "tier": 4,
      "energy": 75,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71273",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 1
        },
        {
          "item": "m_m_5_30823",
          "qty": 15
        },
        {
          "item": "m_m_5_89171",
          "qty": 3
        },
        {
          "item": "m_m_5_31973",
          "qty": 10
        },
        {
          "item": "m_m_5_31977",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_390",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·骨肉相连",
      "level": 30,
      "tier": 4,
      "energy": 75,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71274",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 1
        },
        {
          "item": "m_m_5_30826",
          "qty": 15
        },
        {
          "item": "m_m_5_89171",
          "qty": 3
        },
        {
          "item": "m_m_5_31974",
          "qty": 10
        },
        {
          "item": "m_m_5_31976",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_391",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·炸酱面",
      "level": 30,
      "tier": 4,
      "energy": 75,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71275",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 1
        },
        {
          "item": "zasui",
          "qty": 15
        },
        {
          "item": "m_m_5_89171",
          "qty": 3
        },
        {
          "item": "m_m_5_31973",
          "qty": 10
        },
        {
          "item": "m_m_5_31976",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_392",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·鱼香肉丝",
      "level": 30,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71276",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30827",
          "qty": 5
        },
        {
          "item": "m_m_5_30826",
          "qty": 5
        },
        {
          "item": "m_m_5_89171",
          "qty": 1
        },
        {
          "item": "m_m_5_31976",
          "qty": 5
        },
        {
          "item": "m_m_5_31985",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_394",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·毛血旺",
      "level": 30,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71278",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30825",
          "qty": 5
        },
        {
          "item": "zasui",
          "qty": 5
        },
        {
          "item": "m_m_5_89171",
          "qty": 1
        },
        {
          "item": "m_m_5_31978",
          "qty": 5
        },
        {
          "item": "m_m_5_31976",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_395",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·栗子烧肉",
      "level": 30,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71279",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.9499998092651367
        },
        {
          "item": "m_x_5_3505",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.05000019073486328
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30824",
          "qty": 5
        },
        {
          "item": "m_m_5_30823",
          "qty": 5
        },
        {
          "item": "m_m_5_89171",
          "qty": 1
        },
        {
          "item": "m_m_5_31976",
          "qty": 5
        },
        {
          "item": "m_x_5_31980",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_396",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·煎饼果子",
      "level": 30,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71280",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30823",
          "qty": 5
        },
        {
          "item": "m_m_5_30824",
          "qty": 5
        },
        {
          "item": "m_m_5_89171",
          "qty": 1
        },
        {
          "item": "m_m_5_31973",
          "qty": 5
        },
        {
          "item": "m_m_5_31968",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_398",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·白汁芦筋",
      "level": 30,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71282",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.9499998092651367
        },
        {
          "item": "m_x_5_3236",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.05000019073486328
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30826",
          "qty": 5
        },
        {
          "item": "zasui",
          "qty": 5
        },
        {
          "item": "m_m_5_89171",
          "qty": 1
        },
        {
          "item": "m_x_5_31975",
          "qty": 5
        },
        {
          "item": "m_m_5_31970",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_399",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·杂碎面",
      "level": 30,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71283",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3,
          "chance": 0.9499998092651367
        },
        {
          "item": "m_x_5_2292",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.05000019073486328
        }
      ],
      "materials": [
        {
          "item": "zasui",
          "qty": 5
        },
        {
          "item": "m_m_5_30827",
          "qty": 5
        },
        {
          "item": "m_m_5_89171",
          "qty": 1
        },
        {
          "item": "m_m_5_31976",
          "qty": 5
        },
        {
          "item": "m_m_5_31973",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_400",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·皮蛋瘦肉粥",
      "level": 30,
      "tier": 4,
      "energy": 75,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71284",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 1
        },
        {
          "item": "m_m_5_30824",
          "qty": 15
        },
        {
          "item": "m_m_5_89171",
          "qty": 3
        },
        {
          "item": "m_m_5_31977",
          "qty": 10
        },
        {
          "item": "m_m_5_30829",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_402",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·鱼片砂锅粥",
      "level": 30,
      "tier": 4,
      "energy": 75,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71286",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 1
        },
        {
          "item": "m_m_5_30827",
          "qty": 15
        },
        {
          "item": "m_m_5_89171",
          "qty": 3
        },
        {
          "item": "m_m_5_31976",
          "qty": 10
        },
        {
          "item": "m_m_5_31969",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_403",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·三鲜粥",
      "level": 30,
      "tier": 4,
      "energy": 75,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71287",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 1
        },
        {
          "item": "zasui",
          "qty": 15
        },
        {
          "item": "m_m_5_89171",
          "qty": 3
        },
        {
          "item": "m_m_5_31969",
          "qty": 10
        },
        {
          "item": "m_m_5_31977",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_404",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·咸骨粥",
      "level": 30,
      "tier": 4,
      "energy": 75,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71288",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 1
        },
        {
          "item": "m_m_5_30826",
          "qty": 15
        },
        {
          "item": "m_m_5_89171",
          "qty": 3
        },
        {
          "item": "m_m_5_31974",
          "qty": 10
        },
        {
          "item": "m_x_5_31982",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_405",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·贡丸汤",
      "level": 30,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71289",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30823",
          "qty": 5
        },
        {
          "item": "m_m_5_30827",
          "qty": 5
        },
        {
          "item": "m_m_5_89171",
          "qty": 1
        },
        {
          "item": "m_m_5_31973",
          "qty": 5
        },
        {
          "item": "m_x_5_31983",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_406",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·杂碎汤",
      "level": 30,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71290",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "zasui",
          "qty": 5
        },
        {
          "item": "m_m_5_30823",
          "qty": 5
        },
        {
          "item": "m_m_5_89171",
          "qty": 1
        },
        {
          "item": "m_m_5_31976",
          "qty": 5
        },
        {
          "item": "m_m_5_31984",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_407",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·鱼头豆腐汤",
      "level": 30,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71291",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30827",
          "qty": 5
        },
        {
          "item": "m_m_5_30823",
          "qty": 5
        },
        {
          "item": "m_m_5_89171",
          "qty": 1
        },
        {
          "item": "m_m_5_31977",
          "qty": 5
        },
        {
          "item": "m_m_5_31984",
          "qty": 10
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_410",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·水晶芙蓉宴",
      "level": 30,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71294",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_32014",
          "qty": 2
        },
        {
          "item": "m_m_5_89171",
          "qty": 15
        },
        {
          "item": "m_m_5_30823",
          "qty": 20
        },
        {
          "item": "zasui",
          "qty": 20
        },
        {
          "item": "m_x_5_31983",
          "qty": 20
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_411",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·玉笛谁家听落梅",
      "level": 30,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71295",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_32014",
          "qty": 2
        },
        {
          "item": "m_m_5_89171",
          "qty": 15
        },
        {
          "item": "m_m_5_30824",
          "qty": 20
        },
        {
          "item": "m_m_5_30823",
          "qty": 20
        },
        {
          "item": "m_m_5_31984",
          "qty": 20
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_412",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·二十四桥明月夜",
      "level": 30,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71296",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_32014",
          "qty": 2
        },
        {
          "item": "m_m_5_89171",
          "qty": 15
        },
        {
          "item": "m_m_5_30825",
          "qty": 20
        },
        {
          "item": "m_m_5_30824",
          "qty": 20
        },
        {
          "item": "m_m_5_31967",
          "qty": 20
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_413",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·鸳鸯烩珍宴",
      "level": 30,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71297",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_32014",
          "qty": 2
        },
        {
          "item": "m_m_5_89171",
          "qty": 15
        },
        {
          "item": "m_m_5_30826",
          "qty": 20
        },
        {
          "item": "m_m_5_30825",
          "qty": 20
        },
        {
          "item": "m_m_5_31968",
          "qty": 20
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_414",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·蜀味烘焙宴",
      "level": 30,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71298",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_32014",
          "qty": 2
        },
        {
          "item": "m_m_5_89171",
          "qty": 15
        },
        {
          "item": "m_m_5_30827",
          "qty": 20
        },
        {
          "item": "m_m_5_30826",
          "qty": 20
        },
        {
          "item": "m_x_5_31979",
          "qty": 20
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_415",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·鸿门宴",
      "level": 30,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71299",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.9499998092651367
        },
        {
          "item": "m_x_5_2303",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1,
          "chance": 0.05000019073486328
        }
      ],
      "materials": [
        {
          "item": "m_m_5_32014",
          "qty": 2
        },
        {
          "item": "m_m_5_89171",
          "qty": 15
        },
        {
          "item": "zasui",
          "qty": 20
        },
        {
          "item": "m_m_5_30827",
          "qty": 20
        },
        {
          "item": "m_x_5_31981",
          "qty": 20
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_416",
      "kind": "craft",
      "skillId": "pengren",
      "name": "风语·团圆宴",
      "level": 30,
      "tier": 4,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71300",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_32014",
          "qty": 2
        },
        {
          "item": "m_m_5_89171",
          "qty": 15
        },
        {
          "item": "m_m_5_30823",
          "qty": 20
        },
        {
          "item": "zasui",
          "qty": 20
        },
        {
          "item": "m_x_5_31971",
          "qty": 20
        }
      ],
      "note": "烹饪 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_432",
      "kind": "craft",
      "skillId": "pengren",
      "name": "雁门猎风宴（外攻）",
      "level": 21,
      "tier": 3,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89316",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_1829",
          "qty": 10
        },
        {
          "item": "m_m_5_89971",
          "qty": 7
        },
        {
          "item": "m_m_5_30874",
          "qty": 10
        },
        {
          "item": "m_m_5_30842",
          "qty": 5
        },
        {
          "item": "m_m_5_31978",
          "qty": 20
        }
      ],
      "note": "烹饪 · 21级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_434",
      "kind": "craft",
      "skillId": "pengren",
      "name": "塞外暖羊宴（治疗）",
      "level": 27,
      "tier": 3,
      "energy": 120,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89318",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_m_5_1829",
          "qty": 10
        },
        {
          "item": "m_m_5_89971",
          "qty": 7
        },
        {
          "item": "m_m_5_30874",
          "qty": 10
        },
        {
          "item": "m_m_5_30844",
          "qty": 5
        },
        {
          "item": "m_m_5_31974",
          "qty": 20
        }
      ],
      "note": "烹饪 · 27级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_445",
      "kind": "craft",
      "skillId": "pengren",
      "name": "渝州酸辣粉",
      "level": 38,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89361",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "lushui",
          "qty": 2
        },
        {
          "item": "m_m_5_30843",
          "qty": 4
        },
        {
          "item": "m_m_5_89171",
          "qty": 1
        },
        {
          "item": "m_m_5_31973",
          "qty": 18
        }
      ],
      "note": "烹饪 · 38级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_446",
      "kind": "craft",
      "skillId": "pengren",
      "name": "灵宝羊肉汤",
      "level": 40,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89362",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89168",
          "qty": 2
        },
        {
          "item": "m_m_5_31973",
          "qty": 15
        },
        {
          "item": "m_m_5_30875",
          "qty": 10
        },
        {
          "item": "m_m_5_30874",
          "qty": 1
        }
      ],
      "note": "烹饪 · 40级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_447",
      "kind": "craft",
      "skillId": "pengren",
      "name": "蒸河鱼",
      "level": 42,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89363",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89171",
          "qty": 2
        },
        {
          "item": "m_m_5_31974",
          "qty": 15
        },
        {
          "item": "lushui",
          "qty": 2
        },
        {
          "item": "m_m_5_30827",
          "qty": 3
        }
      ],
      "note": "烹饪 · 42级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_448",
      "kind": "craft",
      "skillId": "pengren",
      "name": "羊肉烩面",
      "level": 44,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89364",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "lushui",
          "qty": 2
        },
        {
          "item": "m_m_5_30874",
          "qty": 4
        },
        {
          "item": "m_m_5_89171",
          "qty": 1
        },
        {
          "item": "m_m_5_31973",
          "qty": 18
        }
      ],
      "note": "烹饪 · 44级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_449",
      "kind": "craft",
      "skillId": "pengren",
      "name": "酥油烙馍",
      "level": 46,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89365",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89172",
          "qty": 2
        },
        {
          "item": "m_m_5_31973",
          "qty": 15
        },
        {
          "item": "m_m_5_30845",
          "qty": 2
        },
        {
          "item": "m_m_5_30842",
          "qty": 1
        }
      ],
      "note": "烹饪 · 46级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_cooking_450",
      "kind": "craft",
      "skillId": "pengren",
      "name": "曲香蒸肉",
      "level": 48,
      "tier": 3,
      "energy": 50,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89366",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89168",
          "qty": 2
        },
        {
          "item": "m_m_5_31974",
          "qty": 15
        },
        {
          "item": "lushui",
          "qty": 2
        },
        {
          "item": "m_m_5_30824",
          "qty": 1
        }
      ],
      "note": "烹饪 · 48级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_364",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "鉴影散",
      "level": 6,
      "tier": 4,
      "energy": 40,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_40538",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 1
        }
      ],
      "materials": [
        {
          "item": "m_x_5_40562",
          "qty": 1
        },
        {
          "item": "m_m_5_30835",
          "qty": 10
        }
      ],
      "note": "制药 · 6级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_367",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·上品玉璃散",
      "level": 30,
      "tier": 4,
      "energy": 90,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71242",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 1
        },
        {
          "item": "m_m_5_30834",
          "qty": 10
        },
        {
          "item": "m_m_5_30835",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 4
        },
        {
          "item": "m_m_5_31997",
          "qty": 20
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_368",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·上品破秽散",
      "level": 30,
      "tier": 4,
      "energy": 90,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71243",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 1
        },
        {
          "item": "m_m_5_30835",
          "qty": 10
        },
        {
          "item": "m_m_5_30836",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 4
        },
        {
          "item": "m_m_5_31998",
          "qty": 20
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_369",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·上品凝神散",
      "level": 30,
      "tier": 4,
      "energy": 90,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71244",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30855",
          "qty": 1
        },
        {
          "item": "m_m_5_30836",
          "qty": 10
        },
        {
          "item": "shaoyao",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 4
        },
        {
          "item": "m_m_5_31999",
          "qty": 20
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_370",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·上品活气散",
      "level": 30,
      "tier": 4,
      "energy": 90,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71245",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 1
        },
        {
          "item": "shaoyao",
          "qty": 10
        },
        {
          "item": "m_m_5_30838",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 4
        },
        {
          "item": "m_m_5_6646",
          "qty": 20
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_371",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·上品亢龙散",
      "level": 30,
      "tier": 4,
      "energy": 90,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71246",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 1
        },
        {
          "item": "m_m_5_30838",
          "qty": 10
        },
        {
          "item": "shanhu",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 4
        },
        {
          "item": "m_m_5_6648",
          "qty": 20
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_372",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·上品展凤散",
      "level": 30,
      "tier": 4,
      "energy": 90,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71247",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30855",
          "qty": 1
        },
        {
          "item": "shanhu",
          "qty": 10
        },
        {
          "item": "gancao",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 4
        },
        {
          "item": "m_m_5_31995",
          "qty": 20
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_373",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·上品益气散",
      "level": 30,
      "tier": 4,
      "energy": 90,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71248",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 1
        },
        {
          "item": "gancao",
          "qty": 10
        },
        {
          "item": "m_m_5_30831",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 4
        },
        {
          "item": "m_m_5_31996",
          "qty": 20
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_374",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·上品长恨散",
      "level": 30,
      "tier": 4,
      "energy": 90,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71249",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 1
        },
        {
          "item": "m_m_5_30831",
          "qty": 10
        },
        {
          "item": "m_m_5_30832",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 4
        },
        {
          "item": "m_m_5_31997",
          "qty": 20
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_375",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·中品玉璃散",
      "level": 30,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71250",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30831",
          "qty": 5
        },
        {
          "item": "m_m_5_30832",
          "qty": 5
        },
        {
          "item": "m_m_5_30833",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 1
        },
        {
          "item": "m_m_5_31998",
          "qty": 10
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_376",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·中品破秽散",
      "level": 30,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71251",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30832",
          "qty": 5
        },
        {
          "item": "m_m_5_30833",
          "qty": 5
        },
        {
          "item": "m_m_5_30834",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 1
        },
        {
          "item": "m_m_5_31999",
          "qty": 10
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_377",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·中品凝神散",
      "level": 30,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71252",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30833",
          "qty": 5
        },
        {
          "item": "m_m_5_30834",
          "qty": 5
        },
        {
          "item": "m_m_5_30835",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 1
        },
        {
          "item": "m_m_5_6646",
          "qty": 10
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_378",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·中品活气散",
      "level": 30,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71253",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30834",
          "qty": 5
        },
        {
          "item": "m_m_5_30835",
          "qty": 5
        },
        {
          "item": "m_m_5_30836",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 1
        },
        {
          "item": "m_m_5_6648",
          "qty": 10
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_379",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·中品亢龙散",
      "level": 30,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71254",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30835",
          "qty": 5
        },
        {
          "item": "m_m_5_30836",
          "qty": 5
        },
        {
          "item": "shaoyao",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 1
        },
        {
          "item": "m_m_5_31995",
          "qty": 10
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_380",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·中品展凤散",
      "level": 30,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71255",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30836",
          "qty": 5
        },
        {
          "item": "shaoyao",
          "qty": 5
        },
        {
          "item": "m_m_5_30838",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 1
        },
        {
          "item": "m_m_5_31996",
          "qty": 10
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_404",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "渝州摧锋散",
      "level": 42,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89341",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "gancao",
          "qty": 5
        },
        {
          "item": "m_m_5_30835",
          "qty": 2
        },
        {
          "item": "m_m_5_30838",
          "qty": 10
        },
        {
          "item": "m_m_5_89973",
          "qty": 1
        },
        {
          "item": "m_m_5_31999",
          "qty": 10
        }
      ],
      "note": "制药 · 42级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_405",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "函谷疾咏散",
      "level": 32,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89342",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "gancao",
          "qty": 5
        },
        {
          "item": "m_m_5_30835",
          "qty": 2
        },
        {
          "item": "shanhu",
          "qty": 10
        },
        {
          "item": "m_m_5_89974",
          "qty": 1
        },
        {
          "item": "m_m_5_6646",
          "qty": 10
        }
      ],
      "note": "制药 · 32级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_406",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "中原破阵散",
      "level": 38,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89343",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30842",
          "qty": 5
        },
        {
          "item": "m_m_5_30835",
          "qty": 2
        },
        {
          "item": "gancao",
          "qty": 10
        },
        {
          "item": "yaoyin",
          "qty": 1
        },
        {
          "item": "m_m_5_6648",
          "qty": 10
        }
      ],
      "note": "制药 · 38级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_407",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "河洛生息散",
      "level": 40,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89344",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "gancao",
          "qty": 5
        },
        {
          "item": "m_m_5_30835",
          "qty": 2
        },
        {
          "item": "m_m_5_30832",
          "qty": 10
        },
        {
          "item": "m_m_5_89973",
          "qty": 1
        },
        {
          "item": "m_m_5_31996",
          "qty": 10
        }
      ],
      "note": "制药 · 40级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_408",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "云州固阵散",
      "level": 28,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89345",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "gancao",
          "qty": 5
        },
        {
          "item": "m_m_5_30835",
          "qty": 2
        },
        {
          "item": "m_m_5_30833",
          "qty": 10
        },
        {
          "item": "m_m_5_89973",
          "qty": 1
        },
        {
          "item": "m_m_5_31998",
          "qty": 10
        }
      ],
      "note": "制药 · 28级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_409",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "引元丹",
      "level": 35,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_89724",
          "qty": 3,
          "qtyMin": 3,
          "qtyMax": 5
        }
      ],
      "materials": [
        {
          "item": "m_m_5_89167",
          "qty": 4
        },
        {
          "item": "m_m_5_89168",
          "qty": 4
        },
        {
          "item": "m_m_5_30842",
          "qty": 6
        },
        {
          "item": "m_m_5_30843",
          "qty": 6
        },
        {
          "item": "yaoyin",
          "qty": 2
        }
      ],
      "note": "制药 · 35级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_381",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·中品益气散",
      "level": 30,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71256",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "shaoyao",
          "qty": 5
        },
        {
          "item": "m_m_5_30838",
          "qty": 5
        },
        {
          "item": "shanhu",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 1
        },
        {
          "item": "m_m_5_31997",
          "qty": 10
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_382",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·中品长恨散",
      "level": 30,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71257",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30838",
          "qty": 5
        },
        {
          "item": "shanhu",
          "qty": 5
        },
        {
          "item": "gancao",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 1
        },
        {
          "item": "m_m_5_31998",
          "qty": 10
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_384",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·上品轻身丹",
      "level": 30,
      "tier": 4,
      "energy": 90,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71259",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 1
        },
        {
          "item": "m_m_5_30831",
          "qty": 10
        },
        {
          "item": "m_m_5_30832",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 4
        },
        {
          "item": "m_m_5_6646",
          "qty": 20
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_385",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·上品聚魂丹",
      "level": 30,
      "tier": 4,
      "energy": 90,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71260",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "fengwangjiang",
          "qty": 1
        },
        {
          "item": "m_m_5_30832",
          "qty": 10
        },
        {
          "item": "m_m_5_30833",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 4
        },
        {
          "item": "m_m_5_6648",
          "qty": 20
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_386",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·上品大力丸",
      "level": 30,
      "tier": 4,
      "energy": 90,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71261",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30855",
          "qty": 1
        },
        {
          "item": "m_m_5_30833",
          "qty": 10
        },
        {
          "item": "m_m_5_30834",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 4
        },
        {
          "item": "m_m_5_31995",
          "qty": 20
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_387",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·上品静心丸",
      "level": 30,
      "tier": 4,
      "energy": 90,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71262",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30853",
          "qty": 1
        },
        {
          "item": "m_m_5_30834",
          "qty": 10
        },
        {
          "item": "m_m_5_30835",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 4
        },
        {
          "item": "m_m_5_31996",
          "qty": 20
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_388",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·中品健体丸",
      "level": 30,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71263",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "shanhu",
          "qty": 5
        },
        {
          "item": "m_m_5_30835",
          "qty": 5
        },
        {
          "item": "m_m_5_30836",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 1
        },
        {
          "item": "m_m_5_31997",
          "qty": 10
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_389",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·中品轻身丹",
      "level": 30,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71264",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "gancao",
          "qty": 5
        },
        {
          "item": "m_m_5_30836",
          "qty": 5
        },
        {
          "item": "shaoyao",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 1
        },
        {
          "item": "m_m_5_31998",
          "qty": 10
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_390",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风语·中品聚魂丹",
      "level": 30,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_71265",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30831",
          "qty": 5
        },
        {
          "item": "shaoyao",
          "qty": 5
        },
        {
          "item": "m_m_5_30838",
          "qty": 10
        },
        {
          "item": "m_m_5_89167",
          "qty": 1
        },
        {
          "item": "m_m_5_31999",
          "qty": 10
        }
      ],
      "note": "制药 · 30级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_351",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "金针·烟",
      "level": 6,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_31099",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30834",
          "qty": 5
        },
        {
          "item": "gancao",
          "qty": 5
        },
        {
          "item": "m_m_5_30831",
          "qty": 10
        },
        {
          "item": "m_m_5_30849",
          "qty": 1
        },
        {
          "item": "m_m_5_31995",
          "qty": 10
        }
      ],
      "note": "制药 · 6级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_355",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "佳·纳元丹",
      "level": 5,
      "tier": 3,
      "energy": 20,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_31103",
          "qty": 6,
          "qtyMin": 6,
          "qtyMax": 8
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30838",
          "qty": 5
        },
        {
          "item": "m_m_5_30834",
          "qty": 5
        },
        {
          "item": "m_m_5_30835",
          "qty": 10
        },
        {
          "item": "m_m_5_89974",
          "qty": 1
        },
        {
          "item": "m_m_5_31999",
          "qty": 10
        }
      ],
      "note": "制药 · 5级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_356",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "逍遥散",
      "level": 9,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_31104",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 2
        }
      ],
      "materials": [
        {
          "item": "shanhu",
          "qty": 5
        },
        {
          "item": "m_m_5_30835",
          "qty": 5
        },
        {
          "item": "m_m_5_30836",
          "qty": 10
        },
        {
          "item": "m_m_5_30849",
          "qty": 1
        },
        {
          "item": "m_m_5_6646",
          "qty": 10
        }
      ],
      "note": "制药 · 9级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_357",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "风身丸",
      "level": 10,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_31105",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 2
        }
      ],
      "materials": [
        {
          "item": "gancao",
          "qty": 5
        },
        {
          "item": "m_m_5_30836",
          "qty": 5
        },
        {
          "item": "shaoyao",
          "qty": 10
        },
        {
          "item": "m_m_5_89973",
          "qty": 1
        },
        {
          "item": "m_m_5_6648",
          "qty": 10
        }
      ],
      "note": "制药 · 10级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_358",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "忘情水",
      "level": 11,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_31106",
          "qty": 1,
          "qtyMin": 1,
          "qtyMax": 2
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30831",
          "qty": 5
        },
        {
          "item": "shaoyao",
          "qty": 5
        },
        {
          "item": "m_m_5_30838",
          "qty": 10
        },
        {
          "item": "m_m_5_30849",
          "qty": 1
        },
        {
          "item": "m_m_5_31995",
          "qty": 10
        }
      ],
      "note": "制药 · 11级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_359",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "化功散",
      "level": 13,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_31107",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30832",
          "qty": 5
        },
        {
          "item": "m_m_5_30838",
          "qty": 5
        },
        {
          "item": "shanhu",
          "qty": 10
        },
        {
          "item": "m_m_5_30847",
          "qty": 1
        },
        {
          "item": "m_m_5_31996",
          "qty": 10
        }
      ],
      "note": "制药 · 13级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    },
    {
      "id": "m_medicine_360",
      "kind": "craft",
      "skillId": "zhiyao",
      "name": "健胃散",
      "level": 15,
      "tier": 3,
      "energy": 60,
      "fee": 0,
      "outputs": [
        {
          "item": "m_x_5_31108",
          "qty": 2,
          "qtyMin": 2,
          "qtyMax": 3
        }
      ],
      "materials": [
        {
          "item": "m_m_5_30833",
          "qty": 5
        },
        {
          "item": "shanhu",
          "qty": 5
        },
        {
          "item": "gancao",
          "qty": 10
        },
        {
          "item": "m_m_5_30848",
          "qty": 1
        },
        {
          "item": "m_m_5_31997",
          "qty": 10
        }
      ],
      "note": "制药 · 15级 · JX3BOX 当前赛季配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-22",
      "custom": false
    }
  ],
  "servers": [
    {
      "id": "s_mengjiangnan",
      "name": "梦江南",
      "region": "电信一区"
    },
    {
      "id": "s_pozhenzi",
      "name": "破阵子",
      "region": "双线一区"
    },
    {
      "id": "s_dielianhua",
      "name": "蝶恋花",
      "region": "双线一区"
    },
    {
      "id": "s_jiandan",
      "name": "剑胆琴心",
      "region": "双线一区"
    },
    {
      "id": "s_youyuelun",
      "name": "幽月轮",
      "region": "双线一区"
    },
    {
      "id": "s_longzheng",
      "name": "龙争虎斗",
      "region": "双线二区"
    },
    {
      "id": "s_changancheng",
      "name": "长安城",
      "region": "双线二区"
    },
    {
      "id": "s_douzhuang",
      "name": "斗转星移",
      "region": "电信一区"
    },
    {
      "id": "s_qiankun",
      "name": "乾坤一掷",
      "region": "电信一区"
    },
    {
      "id": "s_weiwo",
      "name": "唯我独尊",
      "region": "电信一区"
    },
    {
      "id": "s_juedai",
      "name": "绝代天骄",
      "region": "电信五区"
    },
    {
      "id": "s_tianeping",
      "name": "天鹅坪",
      "region": "电信五区"
    },
    {
      "id": "s_feilong",
      "name": "飞龙在天",
      "region": "双线二区"
    },
    {
      "id": "s_jiutian",
      "name": "九天",
      "region": "电信新区"
    },
    {
      "id": "s_meijianxue",
      "name": "眉间雪",
      "region": "电信五区"
    },
    {
      "id": "s_shanhai",
      "name": "山海相逢",
      "region": "电信五区"
    },
    {
      "id": "s_aoxue",
      "name": "傲血戰意",
      "region": "双线三区"
    }
  ],
  "serverPrices": {
    "s_mengjiangnan": {
      "dimai": 79999,
      "fengwangjiang": 191.96,
      "shoupijiao": 70.6,
      "qicaixian": 140,
      "bairanxian": 3.4,
      "fengyu_yi": 1132.58,
      "m_m_5_30852": 16.99,
      "m_m_5_30853": 91.38,
      "m_m_5_30828": 4.79,
      "m_m_5_32000": 0.6,
      "guajian_bei": 52.73,
      "baihua_bu": 80,
      "guajian_yao": 95.49,
      "shuran_bu": 108.13,
      "shuran_bag": 36.99,
      "m_m_5_10173": 32.99,
      "jinfeng_bag": 7357.5,
      "wuseshi": 110,
      "m_m_5_30856": 16,
      "m_m_5_30855": 159.82,
      "geyin_zhang": 129.5,
      "m_m_5_89298": 41.48,
      "m_m_5_30679": 18.07,
      "m_m_5_32004": 3.61,
      "m_m_5_30847": 10.87,
      "m_m_5_30846": 1.42,
      "yinsi_duan": 120.41,
      "m_m_5_32003": 3.61,
      "m_m_5_30848": 18.04,
      "m_m_5_32002": 0.66,
      "m_m_5_30850": 158.81,
      "m_m_5_30845": 199.99,
      "m_m_5_31397": 0.94,
      "m_m_5_89433": 4297.97,
      "m_m_5_89435": 5747.28,
      "m_m_5_31253": 530.22,
      "tongpao_fan": 4400,
      "m_m_5_30844": 0.5,
      "m_m_5_90210": 500.14,
      "m_m_5_35718": 16.09,
      "m_m_5_35719": 32.28,
      "m_m_5_30873": 32.82,
      "m_m_5_90205": 67.01,
      "m_m_8_614": 95.98,
      "shanshui_juan": 85,
      "m_m_5_3819": 100,
      "m_m_5_3779": 9.99,
      "m_m_8_36148": 1389.3,
      "m_m_5_89475": 1777.66,
      "m_m_5_89474": 1500,
      "m_m_5_3820": 1.27,
      "m_m_5_30827": 1.3,
      "m_m_5_89970": 204.97,
      "m_m_5_32014": 126.84,
      "m_m_5_31978": 0.64,
      "m_m_5_31985": 0.6,
      "lucai": 18.24,
      "m_m_5_1831": 15.95,
      "m_m_5_31973": 0.65,
      "m_m_5_30849": 5.82,
      "m_m_5_71293": 51.74,
      "m_m_5_30826": 0.5,
      "m_m_5_30825": 0.14,
      "m_m_5_89171": 10.68,
      "m_m_5_31974": 0.65,
      "m_m_5_31968": 5.49,
      "m_m_5_30824": 0.29,
      "m_m_5_71281": 22.4,
      "m_m_5_30823": 0.87,
      "m_m_5_31969": 0.65,
      "m_m_5_71277": 40.04,
      "m_m_5_89315": 1344.5,
      "m_m_5_89969": 144.91,
      "m_m_5_31976": 0.7,
      "m_m_5_89303": 4587.78,
      "m_m_5_89971": 204.04,
      "lushui": 14.31,
      "m_m_5_30875": 0.78,
      "m_m_5_30829": 3.75,
      "m_m_5_30843": 0.56,
      "m_m_5_30874": 30.9,
      "m_m_5_30842": 0.6,
      "m_m_5_5270": 0.6,
      "m_m_5_31970": 0.66,
      "m_m_5_5269": 0.02,
      "m_m_5_31977": 0.69,
      "m_m_5_31013": 189,
      "gancao": 2.49,
      "m_m_5_31012": 337.9,
      "m_m_5_90034": 8000,
      "m_m_5_89172": 21.86,
      "m_m_5_89304": 4121,
      "m_m_5_26057": 2000,
      "m_m_5_89352": 678.96,
      "m_m_5_89350": 618.72,
      "m_m_5_71269": 135.32,
      "m_m_5_89346": 748.7,
      "m_m_5_89167": 10.62,
      "m_m_5_89348": 190.6,
      "m_m_5_71285": 105.86,
      "jieyuan_dan": 36.99,
      "m_m_5_30836": 0.64,
      "m_m_5_30832": 1.2,
      "m_m_5_30833": 1.65,
      "m_m_5_31997": 2.69,
      "m_m_5_89324": 219.49,
      "m_m_5_30831": 1,
      "m_m_5_89973": 187,
      "m_m_5_31996": 0.66,
      "m_m_5_71241": 111.35,
      "m_m_5_71240": 48,
      "m_m_5_31995": 0.69,
      "m_m_5_30838": 0.71,
      "shanhu": 3.04,
      "m_m_5_6646": 3.56,
      "m_m_5_89333": 399,
      "m_m_5_30835": 2.53,
      "m_m_5_89974": 70.73,
      "m_m_5_6648": 1.45,
      "m_m_5_90029": 389.74,
      "m_m_5_89168": 22.29,
      "yaoyin": 197,
      "m_m_5_31100": 12.07,
      "m_m_5_89322": 388.88,
      "shaoyao": 2.87,
      "m_m_5_90206": 33.16,
      "m_m_5_31102": 0.13,
      "m_m_5_30834": 2.56,
      "m_m_5_31998": 3.98,
      "m_m_5_90035": 6189.88,
      "m_m_5_89328": 847.67,
      "m_m_5_89340": 100.42,
      "m_m_5_89325": 796.07,
      "m_m_5_71258": 74.46,
      "m_m_5_31999": 3.58,
      "m_m_5_89327": 94.86,
      "m_m_5_89966": 66.91,
      "m_m_5_10176": 5.99,
      "m_m_5_31991": 1.19,
      "m_m_5_89377": 350,
      "m_m_5_89968": 154,
      "m_m_5_31993": 1.19,
      "m_m_5_89376": 399.64,
      "m_m_5_89965": 109.74,
      "m_m_5_31992": 5.83,
      "m_m_5_89963": 74,
      "m_m_5_71192": 25.92,
      "m_m_5_89169": 10.62,
      "m_m_5_71188": 341.75,
      "m_m_5_31994": 5.69,
      "m_m_5_89962": 59.55,
      "m_m_5_31139": 4399.4,
      "m_m_5_89964": 67.86,
      "m_m_5_10027": 76.4,
      "m_m_5_89961": 64.49,
      "tiekuang": 2.82,
      "m_m_5_30676": 1.82,
      "m_m_5_30678": 1.58,
      "m_m_5_30674": 2.98,
      "m_m_5_30675": 3.82,
      "m_m_5_89967": 66.47,
      "m_m_5_89367": 879.88,
      "m_m_5_6246": 0.2,
      "m_m_5_32787": 99.86,
      "m_m_8_25762": 3.99,
      "m_m_5_30841": 3.93,
      "m_m_5_35708": 6.98,
      "m_m_8_632": 266.75,
      "m_m_8_634": 305.19,
      "m_m_8_636": 50.49,
      "m_m_5_2578": 10.36,
      "m_m_5_6072": 0.05,
      "muban": 24.89,
      "muliao": 3.28,
      "m_m_5_35707": 11.97,
      "m_m_5_35703": 3.57,
      "qiwuling": 31.95,
      "m_m_5_35716": 16.93,
      "m_m_5_35702": 0.63,
      "zhuzi": 1.98,
      "m_m_5_35567": 1.52,
      "m_m_5_35704": 3.58,
      "m_m_5_35714": 24,
      "m_m_5_35701": 3.56,
      "m_m_5_35713": 16.22,
      "m_m_5_35705": 3.57,
      "m_m_10_948": 310.17,
      "m_m_5_89260": 35000.33,
      "m_m_10_93": 38.82,
      "m_m_5_35717": 1.91,
      "m_m_10_164": 110,
      "m_m_5_52337": 1111.98,
      "m_m_5_40232": 2600.15,
      "m_m_5_35772": 1219.98,
      "m_m_5_87917": 286.21,
      "zasui": 0.65,
      "g_5_30681": 0.87,
      "g_5_30680": 1,
      "m_x_5_89353": 469.98,
      "m_x_5_89359": 800.94,
      "m_x_5_89305": 4599.87,
      "m_x_5_89349": 633.68,
      "m_x_5_89351": 533.17,
      "m_x_5_89357": 999.11,
      "m_x_5_89434": 3296.92,
      "m_x_5_89448": 35999,
      "m_x_5_89436": 4666.82,
      "m_x_5_89450": 23999.21,
      "m_x_5_89438": 4999.86,
      "m_x_5_89452": 28000,
      "m_x_5_89439": 3700,
      "m_x_5_89453": 26999.79,
      "m_x_5_89440": 3659.99,
      "m_x_5_89454": 19990,
      "m_x_5_89441": 4199.98,
      "m_x_5_89455": 26000,
      "m_x_5_89443": 4488.99,
      "m_x_5_89444": 5500.5,
      "m_x_5_89445": 4600,
      "m_x_5_89459": 28000,
      "m_x_5_89446": 7774.71,
      "m_x_5_89329": 963.01,
      "m_x_5_89335": 1666.26,
      "m_x_5_89330": 633.32,
      "m_x_5_89336": 1196.9,
      "m_x_5_89331": 842.95,
      "m_x_5_89337": 1184.01,
      "m_x_5_89368": 955.18,
      "m_x_5_89372": 1222.88,
      "m_x_5_89369": 1187,
      "m_x_5_89373": 3189.09,
      "m_x_5_90436": 85.01,
      "m_x_5_89379": 4318.99,
      "m_x_5_89397": 26969,
      "m_x_5_89380": 4498,
      "m_x_5_90437": 48,
      "m_x_5_89381": 7641.35,
      "m_x_5_89399": 30000,
      "m_x_5_89383": 7777,
      "m_x_5_89384": 5074.56,
      "m_x_5_89385": 6555,
      "m_x_5_89403": 40000.89,
      "m_x_5_89386": 5000.35,
      "m_x_5_89404": 21000.59,
      "m_x_5_89388": 5270,
      "m_x_5_89406": 47994.89,
      "m_x_5_89389": 5500,
      "m_x_5_89407": 27880.05,
      "m_x_5_89390": 4500,
      "m_x_5_89391": 5000,
      "m_x_5_89409": 58888.88,
      "m_x_5_89392": 4199.89,
      "m_x_5_89393": 5400,
      "m_x_5_89394": 6499.67,
      "m_x_5_89395": 5888.89,
      "m_x_5_89413": 35000.33,
      "m_x_5_89396": 4548,
      "m_x_5_20971": 173,
      "m_x_10_1894": 45.82,
      "m_x_10_2229": 299.19,
      "m_x_5_89317": 1000.39,
      "m_x_10_2241": 1087.9,
      "m_x_5_89320": 390.01,
      "m_x_5_89426": 2754.47,
      "m_x_5_89427": 1650,
      "m_x_5_89428": 1666.66,
      "m_x_5_89347": 1149.96,
      "m_x_5_89356": 1268,
      "m_x_5_89358": 1199,
      "m_x_5_89447": 24998,
      "m_x_5_89323": 700.69,
      "m_x_5_89326": 1289.85,
      "m_x_5_89334": 1240.98,
      "m_x_5_89339": 2000,
      "m_x_5_89371": 2555,
      "m_x_5_5232": 1.32,
      "m_x_5_5231": 1.84,
      "m_x_5_5230": 1.89,
      "m_x_5_5229": 2.88,
      "m_x_5_31050": 153,
      "m_x_5_2304": 9000.44,
      "m_x_5_31051": 488.48,
      "m_x_5_31052": 431.95,
      "m_x_5_31053": 500.25,
      "m_x_5_31054": 300.74,
      "m_x_5_31055": 10000,
      "m_x_5_2299": 6444.35,
      "m_x_5_31056": 10000,
      "m_x_5_2300": 8881.04,
      "m_x_5_31057": 1888.88,
      "m_x_5_31058": 10000,
      "m_x_5_31059": 10000,
      "m_x_5_2305": 3666.51,
      "m_x_5_31060": 130.15,
      "m_x_5_31062": 339.58,
      "m_x_5_71268": 145.55,
      "m_x_5_71270": 114,
      "m_x_5_2302": 799.04,
      "m_x_5_71271": 90.29,
      "m_x_5_71272": 120.52,
      "m_x_5_71273": 129.49,
      "m_x_5_71274": 103.51,
      "m_x_5_71275": 120.04,
      "m_x_5_71276": 41.52,
      "m_x_5_71278": 28.09,
      "m_x_5_71279": 35.77,
      "m_x_5_3505": 2000,
      "m_x_5_71280": 48.01,
      "m_x_5_3485": 297.97,
      "m_x_5_71282": 88.85,
      "m_x_5_3236": 988,
      "m_x_5_71283": 91.11,
      "m_x_5_2292": 4293,
      "m_x_5_71284": 137.85,
      "m_x_5_71286": 80.22,
      "m_x_5_71287": 80.2,
      "m_x_5_71288": 91.58,
      "m_x_5_71289": 899,
      "m_x_5_71290": 29.6,
      "m_x_5_71291": 42,
      "m_x_5_71294": 750.03,
      "m_x_5_71295": 888.88,
      "m_x_5_71296": 690.93,
      "m_x_5_71297": 255,
      "m_x_5_71298": 43.28,
      "m_x_5_71300": 6.48,
      "m_x_5_89316": 1750.59,
      "m_x_5_89318": 2300.11,
      "m_x_5_89361": 59.48,
      "m_x_5_89362": 61.89,
      "m_x_5_89363": 99.98,
      "m_x_5_89364": 81.52,
      "m_x_5_89365": 207.42,
      "m_x_8_616": 300.98,
      "m_x_8_617": 699.99,
      "m_x_8_615": 200.72,
      "m_x_5_3810": 80.71,
      "m_x_5_3811": 28.26,
      "m_x_8_25": 15,
      "m_x_8_26": 25.23,
      "m_x_8_21": 0.38,
      "m_x_5_3797": 10000,
      "m_x_5_2433": 10000,
      "m_x_8_20": 0.01,
      "m_x_8_621": 455.5,
      "m_x_8_622": 400,
      "m_x_8_623": 699.99,
      "m_x_8_22": 20,
      "m_x_8_23": 18.55,
      "m_x_8_24": 0.6,
      "m_x_8_627": 300.25,
      "m_x_5_2467": 12.68,
      "m_x_8_30": 48.69,
      "m_x_5_5245": 60,
      "m_x_5_5246": 80,
      "m_x_5_6077": 0.21,
      "m_x_8_31": 3.09,
      "m_x_8_69": 170.65,
      "m_x_8_70": 345.67,
      "m_x_5_22145": 63.7,
      "m_x_5_22917": 108.47,
      "m_x_5_22981": 169,
      "m_x_5_31252": 457.08,
      "m_x_5_31254": 3369.99,
      "m_x_5_71193": 1005.8,
      "m_x_5_71194": 1797.02,
      "m_x_5_71195": 1600.4,
      "m_x_5_71196": 1100.98,
      "m_x_5_71197": 1775.76,
      "m_x_5_71198": 1480.55,
      "m_x_5_71199": 1195.85,
      "m_x_5_71200": 1780.91,
      "m_x_5_71201": 1355,
      "m_x_5_71202": 1080.1,
      "m_x_5_71203": 1870.6,
      "m_x_5_71204": 1443.86,
      "m_x_5_71205": 1241,
      "m_x_5_71206": 1820.45,
      "m_x_5_71207": 1552,
      "m_x_5_71211": 1300.05,
      "m_x_5_71212": 2100.91,
      "m_x_5_71214": 1083.74,
      "m_x_5_71215": 2198.1,
      "m_x_5_71218": 659.45,
      "m_x_5_71219": 420.93,
      "m_x_5_71220": 425.92,
      "m_x_5_71221": 325.92,
      "m_x_5_71222": 370.17,
      "m_x_5_71223": 285,
      "m_x_5_71224": 280.4,
      "m_x_5_71225": 330.78,
      "m_x_5_71226": 335.6,
      "m_x_5_71227": 440.64,
      "m_x_5_71228": 487.7,
      "m_x_5_71229": 320.23,
      "m_x_5_71230": 508.9,
      "m_x_5_71231": 579.82,
      "m_x_5_71234": 381.96,
      "m_x_5_71237": 343.05,
      "m_x_5_71239": 692.44,
      "m_x_5_89461": 1289.21,
      "m_x_5_89462": 1890.37,
      "m_x_5_89463": 1512.32,
      "m_x_5_89464": 1140.67,
      "m_x_5_89465": 1111,
      "m_x_5_89466": 950,
      "m_x_5_89467": 1628.34,
      "m_x_5_89468": 2250.27,
      "m_x_5_89469": 1440.43,
      "m_x_5_89470": 1700.2,
      "m_x_5_89471": 2000.71,
      "m_x_5_89472": 1990,
      "m_x_5_89473": 1500.07,
      "m_x_5_90289": 629.76,
      "m_x_5_31099": 8.05,
      "m_x_5_31103": 7.4,
      "m_x_5_31104": 39.5,
      "m_x_5_31105": 288,
      "m_x_5_31106": 10,
      "m_x_5_31107": 44.99,
      "m_x_5_31108": 152,
      "m_x_5_40538": 44.74,
      "m_x_5_71242": 87.15,
      "m_x_5_71243": 142.85,
      "m_x_5_71244": 184.72,
      "m_x_5_71245": 88.53,
      "m_x_5_71246": 138.93,
      "m_x_5_71247": 127.71,
      "m_x_5_71248": 116.83,
      "m_x_5_71249": 115.41,
      "m_x_5_71250": 911,
      "m_x_5_71252": 22.14,
      "m_x_5_71253": 55,
      "m_x_5_71255": 42,
      "m_x_5_71256": 78.02,
      "m_x_5_71257": 57.61,
      "m_x_5_71259": 133.78,
      "m_x_5_71260": 130.85,
      "m_x_5_71261": 130.32,
      "m_x_5_71262": 98.87,
      "m_x_5_71263": 80.01,
      "m_x_5_71264": 62.36,
      "m_x_5_71265": 711,
      "m_x_5_89341": 102.94,
      "m_x_5_89342": 90.07,
      "m_x_5_89343": 177.75,
      "m_x_5_89344": 149.91,
      "m_x_5_89345": 100.9,
      "m_x_5_89724": 399.73,
      "m_x_5_2589": 15.98,
      "m_x_8_17540": 1109,
      "m_x_5_2631": 17.5,
      "m_x_8_629": 288,
      "m_x_8_630": 374,
      "m_x_8_631": 279.25,
      "m_x_5_2189": 10000,
      "m_x_5_2594": 10000,
      "m_x_5_2603": 11,
      "m_x_8_635": 263.02,
      "m_x_8_17542": 1688.97,
      "m_x_8_17543": 2333.99,
      "m_x_8_17545": 2137.21,
      "m_x_5_5044": 15.9,
      "m_x_8_17546": 2121,
      "m_x_8_17547": 1879,
      "m_x_8_17548": 1986.66,
      "m_x_5_6024": 10000,
      "m_x_5_6076": 0.11,
      "m_x_5_6070": 0.07,
      "m_x_5_6073": 1,
      "m_x_5_6247": 1.07,
      "m_x_5_6248": 1.2,
      "m_x_5_10028": 88,
      "m_x_5_31140": 50.99,
      "m_x_5_31143": 248.6,
      "m_x_5_40539": 63,
      "m_x_5_71129": 152.66,
      "m_x_5_71130": 150.31,
      "m_x_5_71131": 109.21,
      "m_x_5_71132": 209.99,
      "m_x_5_71133": 988.08,
      "m_x_5_71134": 2029.09,
      "m_x_5_71135": 1926.92,
      "m_x_5_71136": 1100,
      "m_x_5_71138": 1707.75,
      "m_x_5_71140": 2045.95,
      "m_x_5_71141": 1550,
      "m_x_5_71143": 1875.38,
      "m_x_5_71144": 1750.79,
      "m_x_5_71145": 1090.76,
      "m_x_5_71146": 1899,
      "m_x_5_71147": 1830.2,
      "m_x_5_71148": 1200.01,
      "m_x_5_71149": 2321.25,
      "m_x_5_71150": 1557.77,
      "m_x_5_71151": 1240.08,
      "m_x_5_71152": 2300.1,
      "m_x_5_71153": 1600.22,
      "m_x_5_71157": 1938.43,
      "m_x_5_71159": 1770.34,
      "m_x_5_71160": 1100,
      "m_x_5_71161": 398.45,
      "m_x_5_71162": 489.22,
      "m_x_5_71163": 450.62,
      "m_x_5_71164": 429.87,
      "m_x_5_71165": 356.11,
      "m_x_5_71166": 325.1,
      "m_x_5_71167": 390,
      "m_x_5_71168": 295.37,
      "m_x_5_71169": 295.49,
      "m_x_5_71170": 330.07,
      "m_x_5_71171": 385.66,
      "m_x_5_71172": 369.58,
      "m_x_5_71173": 542.24,
      "m_x_5_71174": 335.2,
      "m_x_5_71175": 549.91,
      "m_x_5_71176": 558.01,
      "m_x_5_71177": 207.03,
      "m_x_5_71181": 327.57,
      "m_x_5_71182": 325.31,
      "m_x_5_71184": 270,
      "m_x_5_71185": 325,
      "m_x_5_71186": 430.2,
      "m_x_5_71187": 323,
      "m_x_5_71189": 32.33,
      "m_x_5_71190": 44,
      "m_x_5_71191": 29.36,
      "m_x_5_54537": 99.88,
      "m_x_5_85652": 999,
      "m_x_5_89415": 1221.84,
      "m_x_5_89416": 1555,
      "m_x_5_89417": 2459.04,
      "m_x_5_89418": 1088,
      "m_x_5_89419": 2351.81,
      "m_x_5_89420": 1839.99,
      "m_x_5_89421": 1000.22,
      "m_x_5_89422": 1660.48,
      "m_x_5_89423": 1058,
      "m_x_5_89424": 1400,
      "m_x_5_89425": 1990.7,
      "m_x_5_89429": 2230.26,
      "m_x_5_89430": 2200,
      "m_x_5_89431": 1982.71,
      "m_x_5_90213": 7.14,
      "m_x_5_35004": 2.19,
      "m_x_5_35005": 2.9,
      "m_x_5_35006": 2.62,
      "m_x_5_35007": 2.76,
      "m_x_5_35044": 0.04,
      "m_x_10_151": 5900.03,
      "m_x_10_152": 1562,
      "m_x_10_155": 3729.01,
      "m_x_10_156": 797.71,
      "m_x_10_163": 48.35,
      "m_x_10_166": 2276.83,
      "m_x_10_168": 1785.93,
      "m_x_10_169": 3299,
      "m_x_10_170": 99,
      "m_x_10_94": 124,
      "m_x_10_95": 111,
      "m_x_10_96": 122,
      "m_x_10_97": 120.67,
      "m_x_10_98": 104,
      "m_x_10_99": 132,
      "m_x_10_100": 109,
      "m_x_10_101": 10000,
      "m_x_10_104": 297,
      "m_x_10_105": 170,
      "m_x_10_106": 310,
      "m_x_10_108": 210.55,
      "m_x_10_109": 90.36,
      "m_x_10_110": 100,
      "m_x_5_35771": 795.02,
      "m_x_5_35773": 446.09,
      "m_x_5_35774": 413.28,
      "m_x_5_35775": 304.49,
      "m_x_10_132": 3265.33,
      "m_x_10_133": 210.23,
      "m_x_10_134": 333.43,
      "m_x_10_135": 3520.85,
      "m_x_10_139": 1500,
      "m_x_10_140": 4299.72,
      "m_x_10_141": 6677,
      "m_x_10_145": 888.03,
      "m_x_10_146": 1760.19,
      "m_x_10_147": 3253,
      "m_x_10_148": 115,
      "m_x_10_130": 1000.2,
      "m_x_10_111": 108,
      "m_x_10_112": 295.99,
      "m_x_10_114": 500,
      "m_x_10_120": 194.96,
      "m_x_10_121": 3590.55,
      "m_x_10_122": 287.88,
      "m_x_10_427": 3222.61,
      "m_x_10_433": 455.01,
      "m_x_10_434": 460.51,
      "m_x_10_436": 3977.05,
      "m_x_10_444": 3577.83,
      "m_x_10_450": 3575.51,
      "m_x_10_469": 5320.15,
      "m_x_10_490": 3280.13,
      "m_x_5_38127": 790.62,
      "m_x_5_38373": 2100.52,
      "m_x_5_38374": 999.99,
      "m_x_5_38927": 4.21,
      "m_x_10_676": 869.9,
      "m_x_10_677": 1650.32,
      "m_x_10_678": 3222.6,
      "m_x_10_681": 444.11,
      "m_x_10_684": 1380.01,
      "m_x_10_686": 960.49,
      "m_x_10_957": 687,
      "m_x_10_1083": 650,
      "m_x_10_1085": 250.88,
      "m_x_10_688": 888.91,
      "m_x_10_943": 690.4,
      "m_x_10_945": 1098.93,
      "m_x_10_946": 460,
      "m_x_10_947": 830.83,
      "m_x_10_950": 399,
      "m_x_10_954": 1140.77,
      "m_x_10_955": 1000,
      "m_x_10_956": 630,
      "m_x_10_1570": 455.22,
      "m_x_10_1571": 939,
      "m_x_10_1572": 1070.11,
      "m_x_10_1573": 677,
      "m_x_10_1574": 320.02,
      "m_x_10_1575": 348.06,
      "m_x_10_1576": 320.71,
      "m_x_10_1577": 330.31,
      "m_x_10_1578": 320.73,
      "m_x_10_1587": 499.99,
      "m_x_10_1605": 638.21,
      "m_x_10_1606": 520,
      "m_x_10_1607": 1220.01,
      "m_x_10_1773": 2222,
      "m_x_10_1774": 3530,
      "m_x_10_1775": 1826,
      "m_x_10_1776": 1820.83,
      "m_x_10_1777": 1857.25,
      "m_x_10_1286": 555.65,
      "m_x_10_1477": 520,
      "m_x_10_1454": 32.55,
      "m_x_10_1455": 28.08,
      "m_x_10_1456": 59.96,
      "m_x_10_1457": 55.88,
      "m_x_10_1458": 32.36,
      "m_x_10_2097": 620.02,
      "m_x_10_2098": 600.03,
      "m_x_10_2099": 620,
      "m_x_10_2100": 420.66,
      "m_x_10_2101": 310.24,
      "m_x_10_2102": 335.12,
      "m_x_10_2103": 285.72,
      "m_x_10_2104": 255.03,
      "m_x_10_2105": 310.03,
      "m_x_10_2106": 239.89,
      "m_x_10_2107": 230.06,
      "m_x_10_2230": 200.44,
      "m_x_10_2231": 267.33,
      "m_x_10_2232": 294.66,
      "m_x_10_1879": 1665,
      "m_x_10_1895": 123.88,
      "m_x_10_1896": 92.3,
      "m_x_10_1897": 75.06,
      "m_x_10_1898": 78.85,
      "m_x_10_2233": 299.22,
      "m_x_10_2234": 220.53,
      "m_x_10_2235": 256.12,
      "m_x_10_2236": 270.62,
      "m_x_10_2237": 233.55,
      "m_x_10_2238": 250.94,
      "m_x_10_2242": 1095.02,
      "m_x_10_2243": 3375.31,
      "m_x_10_2244": 1086.79,
      "m_x_5_87875": 2200.16,
      "m_x_5_87874": 3280.93,
      "m_x_5_87873": 900.66,
      "m_x_5_87872": 900,
      "m_x_5_87871": 750.15,
      "m_x_5_87870": 900.48,
      "m_x_5_87869": 730.38,
      "m_x_5_87868": 800.16,
      "m_x_5_87867": 788.2,
      "m_x_5_87866": 800.16,
      "m_x_5_87865": 730.23,
      "m_x_5_87864": 800.3,
      "m_x_5_87863": 3200.95,
      "m_x_5_87861": 2235.95,
      "m_x_5_87860": 730.68,
      "m_x_5_87859": 800,
      "m_x_5_87858": 800.69,
      "m_x_5_87857": 800.94,
      "m_x_5_87856": 800,
      "m_x_5_87855": 800.39,
      "m_x_5_87854": 1500.99,
      "m_x_5_87853": 1559.64,
      "m_x_5_87852": 2200,
      "m_x_5_87850": 800.61,
      "m_x_5_87849": 820.73,
      "m_x_5_87848": 800.65,
      "m_x_5_87847": 800.69,
      "m_x_5_87846": 2330.51,
      "m_x_5_87845": 800.17,
      "m_x_5_87844": 680,
      "m_x_5_87843": 2300.69,
      "m_x_5_87842": 730,
      "m_x_5_87841": 800,
      "m_x_5_87840": 750.89,
      "m_x_5_87839": 800.71,
      "m_x_5_87838": 800.91,
      "m_x_5_87837": 900.11,
      "m_x_5_87836": 800.97,
      "m_x_5_87835": 800.83,
      "m_x_5_87834": 2200.49,
      "m_x_5_87832": 1507.08,
      "m_x_5_87831": 909.45,
      "m_x_5_87830": 800.01,
      "m_x_5_87829": 1500,
      "m_x_5_87828": 799.35,
      "m_x_5_87827": 900.66,
      "m_x_5_87826": 777.77,
      "m_x_5_87825": 750.08,
      "m_x_5_87824": 800.11,
      "m_x_5_87822": 790.72,
      "m_x_5_87821": 730.78,
      "m_x_5_87819": 800.77,
      "m_x_5_87818": 2288.53,
      "m_x_5_87817": 3300.41,
      "m_x_5_87815": 799.69,
      "m_x_5_87814": 740.12,
      "m_x_5_87811": 2000,
      "m_x_5_87810": 900.04,
      "m_x_5_87809": 800,
      "m_x_5_87808": 730,
      "m_x_5_87807": 2249.58,
      "m_x_5_87806": 800.42,
      "m_x_5_87805": 790.96,
      "m_x_5_87804": 1038.97,
      "m_x_5_31983": 0.63,
      "m_x_5_1830": 12.99,
      "m_x_5_31975": 0.64,
      "m_x_5_1832": 9995,
      "m_x_5_31979": 3.59,
      "m_x_5_31981": 10000,
      "m_x_5_31971": 0.65,
      "m_x_5_32008": 0.5,
      "m_x_5_32010": 2.5,
      "m_x_5_31980": 0.63,
      "m_x_5_31982": 0.65,
      "m_x_5_34184": 6.53,
      "m_x_5_35786": 664,
      "m_x_5_36491": 2.88,
      "m_x_5_39235": 65.31,
      "m_x_5_41556": 2.71,
      "m_x_5_47758": 10.88,
      "m_x_5_50736": 270,
      "m_x_5_81662": 1.1,
      "m_x_5_85795": 398,
      "m_x_5_40562": 10000,
      "m_x_5_6250": 0.66,
      "m_x_5_6251": 0.8,
      "m_x_5_35780": 6.49,
      "m_x_5_2871": 2,
      "m_x_5_3573": 0.15,
      "m_x_5_3843": 2.99,
      "m_x_5_3574": 0.7
    },
    "s_pozhenzi": {
      "dimai": 83999.99,
      "fengwangjiang": 163.7,
      "shoupijiao": 64.76,
      "qicaixian": 145.96,
      "bairanxian": 3.09,
      "fengyu_yi": 1003.02,
      "m_m_5_30852": 18.17,
      "m_m_5_30853": 83.12,
      "m_m_5_30828": 7.58,
      "guajian_bei": 58.29,
      "baihua_bu": 69,
      "guajian_yao": 79.07,
      "shuran_bu": 80,
      "shuran_bag": 60.38,
      "jinfeng_bag": 7000,
      "wuseshi": 119.98,
      "m_m_5_30856": 13.6,
      "m_m_5_30855": 151.65,
      "geyin_zhang": 125.06,
      "m_m_5_89298": 36.64,
      "m_m_5_30679": 17.24,
      "m_m_5_30847": 9.37,
      "m_m_5_30846": 3,
      "yinsi_duan": 129.5,
      "m_m_5_30848": 19.62,
      "m_m_5_30850": 141.15,
      "m_m_5_30845": 162.15,
      "m_m_5_89435": 9899.09,
      "m_m_5_31253": 23.23,
      "m_m_5_30844": 0.39,
      "m_m_5_30873": 33.38,
      "m_m_5_90205": 30.01,
      "shanshui_juan": 180,
      "m_m_5_3779": 5.09,
      "m_m_8_36148": 1043.67,
      "m_m_5_30827": 1.18,
      "m_m_5_89970": 177.67,
      "m_m_5_32014": 188.14,
      "m_m_5_31985": 0.89,
      "lucai": 16.91,
      "m_m_5_1831": 12.45,
      "m_m_5_30849": 6.07,
      "m_m_5_71293": 30.2,
      "m_m_5_30826": 0.5,
      "m_m_5_30825": 0.08,
      "m_m_5_89171": 8.13,
      "m_m_5_31968": 1.6,
      "m_m_5_71292": 42.66,
      "m_m_5_30824": 0.4,
      "m_m_5_71281": 34.52,
      "m_m_5_30823": 0.47,
      "m_m_5_71277": 33.66,
      "m_m_5_89315": 1695,
      "m_m_5_89969": 140,
      "m_m_5_89303": 4795.4,
      "m_m_5_89971": 199.98,
      "lushui": 14.8,
      "m_m_5_30875": 1.51,
      "m_m_5_30843": 0.82,
      "m_m_5_30874": 25.16,
      "m_m_5_30842": 0.48,
      "m_m_5_5270": 1.46,
      "m_m_5_5269": 0.03,
      "m_m_5_31013": 169.79,
      "gancao": 2.92,
      "m_m_5_31012": 288.99,
      "m_m_5_89304": 4385.93,
      "m_m_5_26057": 2059.63,
      "m_m_5_89352": 597.94,
      "m_m_5_89350": 611.99,
      "m_m_5_71269": 99.56,
      "m_m_5_89346": 635,
      "m_m_5_89348": 196,
      "m_m_5_71285": 97.93,
      "jieyuan_dan": 190.89,
      "m_m_5_30836": 1.27,
      "m_m_5_30832": 1.2,
      "m_m_5_30833": 2.85,
      "m_m_5_89324": 40.55,
      "m_m_5_30831": 1.11,
      "m_m_5_89973": 127,
      "m_m_5_71241": 60.18,
      "m_m_5_71240": 85.18,
      "m_m_5_71266": 88.02,
      "m_m_5_30838": 0.99,
      "shanhu": 3.37,
      "m_m_5_6646": 4.99,
      "m_m_5_30835": 3,
      "m_m_5_89974": 160,
      "m_m_5_71267": 49.54,
      "m_m_5_89168": 20,
      "yaoyin": 140.33,
      "m_m_5_31100": 87.96,
      "shaoyao": 1.72,
      "m_m_5_90206": 40,
      "m_m_5_31102": 0.08,
      "m_m_5_30834": 1.97,
      "m_m_5_89340": 83.85,
      "m_m_5_89325": 792.33,
      "m_m_5_71258": 59.9,
      "m_m_5_89327": 87.1,
      "m_m_5_89966": 105,
      "m_m_5_31991": 0.92,
      "m_m_5_89968": 68.66,
      "m_m_5_89376": 266.81,
      "m_m_5_89965": 100,
      "m_m_5_31992": 1.39,
      "m_m_5_89963": 60.96,
      "m_m_5_71188": 699.99,
      "m_m_5_89962": 62.87,
      "m_m_5_31139": 4979.37,
      "m_m_5_89964": 66,
      "m_m_5_10027": 56.93,
      "m_m_5_89961": 160.36,
      "tiekuang": 3.43,
      "m_m_5_30676": 4.01,
      "m_m_5_30678": 2.19,
      "m_m_5_30674": 3.58,
      "m_m_5_30675": 3.53,
      "m_m_5_89967": 100.16,
      "m_m_5_6246": 0.1,
      "m_m_5_32787": 2.01,
      "m_m_8_25762": 1,
      "m_m_5_30841": 2.22,
      "m_m_5_35708": 9,
      "m_m_5_90032": 4500,
      "m_m_8_636": 120.56,
      "m_m_5_90353": 2000,
      "m_m_5_6072": 0.01,
      "muban": 20.55,
      "muliao": 2.37,
      "m_m_5_35707": 20,
      "m_m_5_35703": 1.75,
      "qiwuling": 24.18,
      "m_m_5_35716": 15.99,
      "m_m_5_35715": 17.55,
      "zhuzi": 1.57,
      "m_m_5_35567": 1.5,
      "m_m_5_35714": 89.5,
      "m_m_5_35701": 2.52,
      "m_m_5_35713": 22.86,
      "m_m_5_35717": 3.89,
      "m_m_10_2037": 1984,
      "m_m_5_52337": 1498.99,
      "m_m_5_35772": 1100.84,
      "m_m_5_87917": 379.8,
      "m_m_5_87881": 6200.78,
      "zasui": 0.64,
      "g_5_30681": 0.82,
      "g_5_30680": 0.85,
      "m_x_5_89353": 700.11,
      "m_x_5_89359": 1148.42,
      "m_x_5_89305": 4998.65,
      "m_x_5_89349": 621.18,
      "m_x_5_89355": 999,
      "m_x_5_89434": 9987,
      "m_x_5_89436": 6675,
      "m_x_5_89450": 38880,
      "m_x_5_89438": 6555.55,
      "m_x_5_89452": 33946.53,
      "m_x_5_89439": 5335.63,
      "m_x_5_89453": 29500,
      "m_x_5_89440": 4889.16,
      "m_x_5_89441": 4000,
      "m_x_5_89455": 29470,
      "m_x_5_89443": 6699.06,
      "m_x_5_89445": 6901.86,
      "m_x_5_89335": 1980,
      "m_x_5_89330": 961.54,
      "m_x_5_89331": 885.55,
      "m_x_5_89337": 1200.85,
      "m_x_5_89368": 898,
      "m_x_5_89372": 1490.04,
      "m_x_5_89369": 988,
      "m_x_5_90436": 64,
      "m_x_5_89379": 4399.99,
      "m_x_5_89380": 4700.98,
      "m_x_5_90437": 64.89,
      "m_x_5_89384": 4553.88,
      "m_x_5_89388": 5241.41,
      "m_x_5_89389": 5241.98,
      "m_x_5_89390": 4785.88,
      "m_x_5_89391": 5457,
      "m_x_5_89396": 6888,
      "m_x_5_20971": 10,
      "m_x_10_2229": 259.64,
      "m_x_5_89317": 494.32,
      "m_x_10_2241": 1999.49,
      "m_x_5_89320": 1400.8,
      "m_x_5_89426": 2005.01,
      "m_x_5_89428": 2299.97,
      "m_x_5_89310": 10000,
      "m_x_5_89347": 965.87,
      "m_x_5_89356": 1298.2,
      "m_x_5_89358": 1698.87,
      "m_x_5_89326": 1466.36,
      "m_x_5_5232": 1,
      "m_x_5_5231": 0.88,
      "m_x_5_5230": 1.08,
      "m_x_5_5229": 2.42,
      "m_x_5_31050": 120,
      "m_x_5_2304": 18000,
      "m_x_5_31056": 10000,
      "m_x_5_31058": 10000,
      "m_x_5_2305": 3543,
      "m_x_5_31062": 480.39,
      "m_x_5_71268": 90.15,
      "m_x_5_71270": 110.91,
      "m_x_5_2302": 720.74,
      "m_x_5_71271": 88.61,
      "m_x_5_71272": 89.15,
      "m_x_5_71273": 80.56,
      "m_x_5_71274": 115.56,
      "m_x_5_71276": 50,
      "m_x_5_71278": 28.14,
      "m_x_5_71279": 44.8,
      "m_x_5_71280": 52,
      "m_x_5_3485": 478,
      "m_x_5_71282": 88.32,
      "m_x_5_71283": 29.47,
      "m_x_5_2292": 3888.82,
      "m_x_5_71284": 80,
      "m_x_5_71286": 75,
      "m_x_5_71287": 84.53,
      "m_x_5_71288": 78.78,
      "m_x_5_71289": 29.28,
      "m_x_5_71290": 29.57,
      "m_x_5_71291": 39.17,
      "m_x_5_71294": 738,
      "m_x_5_71295": 450,
      "m_x_5_71296": 429.49,
      "m_x_5_71297": 60,
      "m_x_5_71298": 44.99,
      "m_x_5_71299": 1149.99,
      "m_x_5_71300": 38.88,
      "m_x_5_89316": 1483.17,
      "m_x_5_89318": 2588,
      "m_x_5_89361": 70.71,
      "m_x_5_89362": 117.77,
      "m_x_5_89363": 168.7,
      "m_x_5_89364": 222.75,
      "m_x_5_89365": 259.33,
      "m_x_5_89366": 299,
      "m_x_8_618": 98.88,
      "m_x_8_616": 130.32,
      "m_x_5_3810": 75,
      "m_x_5_3811": 60.8,
      "m_x_8_26": 100,
      "m_x_8_21": 0.8,
      "m_x_5_3797": 5.07,
      "m_x_5_2433": 16.88,
      "m_x_8_622": 55.33,
      "m_x_8_623": 220.99,
      "m_x_8_625": 200.99,
      "m_x_8_23": 40.4,
      "m_x_8_626": 523,
      "m_x_8_627": 333,
      "m_x_5_2467": 60.91,
      "m_x_8_37": 12.33,
      "m_x_5_6077": 1,
      "m_x_8_31": 15.4,
      "m_x_8_69": 320.22,
      "m_x_8_70": 155.13,
      "m_x_5_22145": 155.86,
      "m_x_5_22917": 155.55,
      "m_x_5_22981": 149.96,
      "m_x_5_31252": 211.11,
      "m_x_5_31254": 180,
      "m_x_5_71193": 2000.16,
      "m_x_5_71194": 1996.75,
      "m_x_5_71195": 2554.84,
      "m_x_5_71196": 1300.98,
      "m_x_5_71198": 1460.04,
      "m_x_5_71199": 1185.01,
      "m_x_5_71200": 1722.36,
      "m_x_5_71201": 1311.02,
      "m_x_5_71202": 994.01,
      "m_x_5_71203": 1788.09,
      "m_x_5_71205": 1676.7,
      "m_x_5_71206": 1691.83,
      "m_x_5_71207": 1864.02,
      "m_x_5_71214": 1090.87,
      "m_x_5_71221": 999.98,
      "m_x_5_71222": 677.9,
      "m_x_5_71223": 593.27,
      "m_x_5_71225": 983.41,
      "m_x_5_71228": 610.13,
      "m_x_5_71229": 440.67,
      "m_x_5_71237": 999.98,
      "m_x_5_71238": 999.99,
      "m_x_5_71239": 582.25,
      "m_x_5_89461": 1790.01,
      "m_x_5_89462": 1680,
      "m_x_5_89463": 1146,
      "m_x_5_89464": 1694.94,
      "m_x_5_89465": 1687.08,
      "m_x_5_89466": 748,
      "m_x_5_89467": 999.97,
      "m_x_5_89468": 1999.39,
      "m_x_5_89469": 1000.6,
      "m_x_5_89471": 1999.98,
      "m_x_5_90289": 500.71,
      "m_x_5_31103": 12.5,
      "m_x_5_31104": 69.99,
      "m_x_5_31105": 129.98,
      "m_x_5_31106": 8.1,
      "m_x_5_31107": 175.4,
      "m_x_5_31108": 64.99,
      "m_x_5_40538": 99.29,
      "m_x_5_71242": 82.81,
      "m_x_5_71243": 106.71,
      "m_x_5_71244": 70.61,
      "m_x_5_71245": 48.94,
      "m_x_5_71246": 104.61,
      "m_x_5_71247": 92.25,
      "m_x_5_71248": 91.12,
      "m_x_5_71249": 80,
      "m_x_5_71250": 45.49,
      "m_x_5_71251": 48.1,
      "m_x_5_71253": 130.07,
      "m_x_5_71254": 68.53,
      "m_x_5_71255": 43.09,
      "m_x_5_71256": 88.08,
      "m_x_5_71259": 80.11,
      "m_x_5_71260": 99.64,
      "m_x_5_71261": 83.41,
      "m_x_5_71262": 87.85,
      "m_x_5_71263": 88.78,
      "m_x_5_71265": 57.31,
      "m_x_5_89341": 80,
      "m_x_5_89342": 58,
      "m_x_5_89343": 96.85,
      "m_x_5_89345": 76,
      "m_x_5_89724": 150,
      "m_x_5_2631": 99.33,
      "m_x_8_629": 66.98,
      "m_x_8_630": 1666.66,
      "m_x_5_2603": 11,
      "m_x_5_5044": 14.38,
      "m_x_5_6024": 10000,
      "m_x_5_6247": 0.69,
      "m_x_5_6248": 0.98,
      "m_x_5_10028": 70.28,
      "m_x_5_31140": 111.23,
      "m_x_5_31141": 699.99,
      "m_x_5_31142": 674.77,
      "m_x_5_31143": 684.52,
      "m_x_5_40539": 449.93,
      "m_x_5_71129": 126.9,
      "m_x_5_71130": 107.59,
      "m_x_5_71131": 95,
      "m_x_5_71132": 192.5,
      "m_x_5_71133": 1604.09,
      "m_x_5_71134": 1993.06,
      "m_x_5_71135": 1975.25,
      "m_x_5_71136": 1100.77,
      "m_x_5_71137": 2299.19,
      "m_x_5_71139": 1979.93,
      "m_x_5_71141": 1886.7,
      "m_x_5_71143": 2068.73,
      "m_x_5_71144": 1689.66,
      "m_x_5_71145": 1095.32,
      "m_x_5_71146": 1993.88,
      "m_x_5_71147": 2081.66,
      "m_x_5_71148": 1998.88,
      "m_x_5_71149": 2000.26,
      "m_x_5_71150": 1457.36,
      "m_x_5_71151": 1194.14,
      "m_x_5_71152": 2186.74,
      "m_x_5_71153": 1550.67,
      "m_x_5_71160": 1054.32,
      "m_x_5_71164": 999.95,
      "m_x_5_71166": 999.94,
      "m_x_5_71167": 995,
      "m_x_5_71168": 633.6,
      "m_x_5_71173": 976.76,
      "m_x_5_71174": 601.45,
      "m_x_5_71176": 399.99,
      "m_x_5_71184": 605.18,
      "m_x_5_71185": 494.24,
      "m_x_5_71189": 68,
      "m_x_5_71190": 35,
      "m_x_5_71191": 63.77,
      "m_x_5_54537": 99.93,
      "m_x_5_89415": 800.67,
      "m_x_5_89416": 1688,
      "m_x_5_89417": 2000,
      "m_x_5_89418": 990.94,
      "m_x_5_89419": 1599.99,
      "m_x_5_89420": 2278.29,
      "m_x_5_89421": 888.55,
      "m_x_5_89422": 1499.88,
      "m_x_5_89423": 1554.88,
      "m_x_5_89424": 1815.98,
      "m_x_5_89425": 1699.99,
      "m_x_5_89429": 3999.67,
      "m_x_5_90213": 22.51,
      "m_x_5_35004": 2.29,
      "m_x_5_35005": 1.76,
      "m_x_5_35006": 1.62,
      "m_x_5_35007": 1.7,
      "m_x_10_155": 1888.88,
      "m_x_5_35771": 690,
      "m_x_5_35773": 999.67,
      "m_x_5_35775": 348.42,
      "m_x_10_148": 100.32,
      "m_x_10_434": 999.99,
      "m_x_5_38127": 1983.06,
      "m_x_5_38373": 2497.96,
      "m_x_5_38927": 7.9,
      "m_x_10_671": 887.49,
      "m_x_10_675": 1199.99,
      "m_x_10_683": 1499.99,
      "m_x_10_1082": 788,
      "m_x_10_1084": 888,
      "m_x_10_1572": 1499.99,
      "m_x_10_1774": 748.88,
      "m_x_10_1777": 2093.68,
      "m_x_10_1477": 1299.99,
      "m_x_10_2036": 1984,
      "m_x_10_2098": 2000.65,
      "m_x_10_2101": 400,
      "m_x_10_2102": 400.7,
      "m_x_10_2103": 425.26,
      "m_x_10_2104": 425.21,
      "m_x_10_2105": 455.01,
      "m_x_10_2106": 415.69,
      "m_x_10_2107": 424.85,
      "m_x_10_2230": 374.13,
      "m_x_10_2231": 190.91,
      "m_x_10_2232": 488.88,
      "m_x_10_1897": 350.04,
      "m_x_10_1898": 239.3,
      "m_x_10_2233": 375.56,
      "m_x_10_2234": 397.01,
      "m_x_10_2235": 218.81,
      "m_x_10_2236": 488.88,
      "m_x_10_2237": 374.92,
      "m_x_10_2238": 340.37,
      "m_x_10_2242": 1998.49,
      "m_x_10_2243": 1998.49,
      "m_x_10_2244": 1999.47,
      "m_x_5_87871": 666.88,
      "m_x_5_87870": 388.88,
      "m_x_5_90212": 300,
      "m_x_5_1830": 10,
      "m_x_5_32007": 10000,
      "m_x_5_32010": 3.38,
      "m_x_5_36491": 3.53,
      "m_x_5_41556": 1.04,
      "m_x_5_44402": 51.66,
      "m_x_5_54059": 1.39,
      "m_x_5_6250": 2
    },
    "s_dielianhua": {
      "dimai": 79888.05,
      "fengwangjiang": 171.72,
      "shoupijiao": 77.9,
      "qicaixian": 119.5,
      "bairanxian": 3.28,
      "fengyu_yi": 2059.09,
      "m_m_5_30852": 16,
      "m_m_5_30853": 83.5,
      "m_m_5_30828": 4.9,
      "guajian_bei": 62.04,
      "baihua_bu": 88.41,
      "guajian_yao": 99.68,
      "shuran_bu": 89.99,
      "shuran_bag": 49.06,
      "m_m_5_10173": 31,
      "wuseshi": 170.67,
      "m_m_5_30856": 14.99,
      "m_m_5_30855": 150,
      "geyin_zhang": 94.02,
      "m_m_5_89298": 34.45,
      "m_m_5_30679": 15.11,
      "m_m_5_30847": 8.5,
      "m_m_5_30846": 2.11,
      "yinsi_duan": 119.9,
      "m_m_5_32003": 0.7,
      "m_m_5_30848": 16.04,
      "m_m_5_30850": 145.56,
      "m_m_5_30845": 167.54,
      "m_m_5_31397": 1.04,
      "m_m_5_89433": 9999,
      "m_m_5_89435": 8888,
      "m_m_5_31253": 343.94,
      "m_m_5_30844": 0.12,
      "m_m_5_90210": 100,
      "m_m_5_35719": 32.39,
      "m_m_5_30873": 27.35,
      "shanshui_juan": 180.06,
      "m_m_8_36148": 1497.6,
      "m_m_5_3820": 1,
      "m_m_5_30827": 1.02,
      "m_m_5_89970": 254.98,
      "m_m_5_31985": 0.67,
      "lucai": 17.06,
      "m_m_5_31973": 0.67,
      "m_m_5_30849": 6.06,
      "m_m_5_71293": 50.1,
      "m_m_5_30826": 0.64,
      "m_m_5_89171": 10.63,
      "m_m_5_31968": 0.66,
      "m_m_5_71292": 19.05,
      "m_m_5_30824": 0.3,
      "m_m_5_30823": 0.17,
      "m_m_5_71277": 31.05,
      "m_m_5_89315": 1300.95,
      "m_m_5_89969": 130,
      "m_m_5_89971": 234,
      "lushui": 12.17,
      "m_m_5_30875": 0.87,
      "m_m_5_30843": 0.25,
      "m_m_5_30874": 29.12,
      "m_m_5_30842": 0.35,
      "m_m_5_5270": 0.9,
      "m_m_5_5269": 0.01,
      "m_m_5_31977": 0.66,
      "m_m_5_31013": 257.99,
      "gancao": 2,
      "m_m_5_31012": 479.92,
      "m_m_5_26057": 3000,
      "m_m_5_89352": 648,
      "m_m_5_89350": 749.44,
      "m_m_5_71269": 86.23,
      "m_m_5_89346": 876.14,
      "m_m_5_89167": 10.63,
      "m_m_5_89348": 229.03,
      "m_m_5_71285": 258.5,
      "jieyuan_dan": 150.57,
      "m_m_5_30836": 1.06,
      "m_m_5_30832": 3.16,
      "m_m_5_30833": 2.97,
      "m_m_5_89324": 70.06,
      "m_m_5_30831": 3.87,
      "m_m_5_89973": 199.09,
      "m_m_5_31996": 0.67,
      "m_m_5_71241": 10,
      "m_m_5_71240": 27.76,
      "m_m_5_31995": 0.67,
      "m_m_5_71266": 34.53,
      "m_m_5_30838": 3.11,
      "shanhu": 5.2,
      "m_m_5_6646": 1.95,
      "m_m_5_89974": 89.49,
      "m_m_5_6648": 3.99,
      "m_m_5_90029": 133,
      "yaoyin": 188.86,
      "m_m_5_31100": 46,
      "m_m_5_89322": 999,
      "shaoyao": 2.45,
      "m_m_5_30834": 5.29,
      "m_m_5_31998": 0.68,
      "m_m_5_89328": 878.9,
      "m_m_5_89340": 90.94,
      "m_m_5_89325": 883.15,
      "m_m_5_71258": 60.52,
      "m_m_5_89327": 111.67,
      "m_m_5_89966": 88.14,
      "m_m_5_31991": 0.66,
      "m_m_5_89968": 105.86,
      "m_m_5_31993": 0.7,
      "m_m_5_89965": 125,
      "m_m_5_31992": 0.67,
      "m_m_5_89963": 93.39,
      "m_m_5_89169": 10.63,
      "m_m_5_89962": 192.37,
      "m_m_5_31139": 4149.99,
      "m_m_5_89964": 61.12,
      "m_m_5_10027": 53.86,
      "m_m_5_89961": 69,
      "tiekuang": 2.57,
      "m_m_5_30676": 7.99,
      "m_m_5_30678": 2.22,
      "m_m_5_30674": 2.43,
      "m_m_5_30675": 3.11,
      "m_m_5_89967": 282.87,
      "m_m_5_89367": 666.26,
      "m_m_5_6246": 0.88,
      "m_m_5_6249": 0.46,
      "m_m_5_32787": 20,
      "m_m_5_30841": 8.22,
      "m_m_5_35708": 6.49,
      "m_m_8_632": 799.99,
      "m_m_8_634": 566.32,
      "m_m_8_636": 280,
      "m_m_5_2578": 6.66,
      "muban": 99.57,
      "muliao": 1.84,
      "qiwuling": 18.79,
      "m_m_5_35716": 89.22,
      "m_m_5_35715": 19.52,
      "zhuzi": 1.69,
      "m_m_5_35567": 1.29,
      "m_m_5_35714": 89.16,
      "m_m_5_35701": 0.67,
      "m_m_5_35713": 28.89,
      "m_m_10_1778": 910,
      "m_m_10_93": 58.21,
      "m_m_5_35717": 2.11,
      "m_m_10_164": 299.99,
      "m_m_5_52337": 1033.79,
      "m_m_5_35772": 916.62,
      "m_m_5_87917": 260.35,
      "zasui": 0.2,
      "g_5_30681": 1.63,
      "g_5_30680": 0.98,
      "m_x_5_89305": 3324.22,
      "m_x_5_89349": 772.22,
      "m_x_5_89355": 1394.94,
      "m_x_5_89436": 6850,
      "m_x_5_89438": 5493.41,
      "m_x_5_89439": 5298.01,
      "m_x_5_89441": 5044.22,
      "m_x_5_89455": 20922.92,
      "m_x_5_89443": 5666.42,
      "m_x_5_89329": 883.74,
      "m_x_5_89330": 699.45,
      "m_x_5_89331": 761.72,
      "m_x_5_89337": 1212.87,
      "m_x_5_89368": 772.68,
      "m_x_5_89372": 1658.05,
      "m_x_5_89369": 950,
      "m_x_5_90436": 65.5,
      "m_x_5_89380": 4542.74,
      "m_x_5_90437": 155,
      "m_x_5_89383": 4888,
      "m_x_5_89385": 4988.15,
      "m_x_5_89406": 20422.51,
      "m_x_5_89391": 5219.48,
      "m_x_5_89409": 18800.66,
      "m_x_5_89392": 3297.45,
      "m_x_5_89394": 6600.9,
      "m_x_5_20971": 299,
      "m_x_5_89317": 599,
      "m_x_5_89320": 1800,
      "m_x_5_89427": 1771,
      "m_x_5_89428": 1947.97,
      "m_x_5_89347": 1111.72,
      "m_x_5_89358": 1400.33,
      "m_x_5_89326": 1429.01,
      "m_x_5_89371": 4664,
      "m_x_5_5232": 1,
      "m_x_5_5231": 5,
      "m_x_5_5230": 2,
      "m_x_5_31054": 688.78,
      "m_x_5_31058": 10000,
      "m_x_5_71268": 100.39,
      "m_x_5_71270": 124.87,
      "m_x_5_71271": 80,
      "m_x_5_71272": 94.28,
      "m_x_5_71273": 84.92,
      "m_x_5_71274": 125.76,
      "m_x_5_71276": 30,
      "m_x_5_71278": 15.06,
      "m_x_5_71279": 232,
      "m_x_5_3236": 2080.89,
      "m_x_5_71284": 80.23,
      "m_x_5_71286": 80.06,
      "m_x_5_71287": 80.06,
      "m_x_5_71288": 123.3,
      "m_x_5_71289": 3.22,
      "m_x_5_71290": 10,
      "m_x_5_71291": 26.1,
      "m_x_5_71294": 499.47,
      "m_x_5_71295": 660.33,
      "m_x_5_71296": 547.84,
      "m_x_5_71297": 195.8,
      "m_x_5_71298": 33.39,
      "m_x_5_71299": 1999.98,
      "m_x_5_71300": 13.11,
      "m_x_5_89316": 1244.9,
      "m_x_5_89318": 2416.21,
      "m_x_5_89361": 101,
      "m_x_5_89362": 52.61,
      "m_x_5_89363": 30.99,
      "m_x_5_89364": 184.6,
      "m_x_5_3797": 49.99,
      "m_x_8_24": 3.94,
      "m_x_8_627": 799.99,
      "m_x_5_2467": 10.98,
      "m_x_8_37": 14.38,
      "m_x_8_31": 18.81,
      "m_x_8_69": 239.88,
      "m_x_8_70": 249.35,
      "m_x_5_22145": 79.23,
      "m_x_5_22917": 89.32,
      "m_x_5_22981": 116.55,
      "m_x_5_31254": 506.55,
      "m_x_5_71193": 2988.74,
      "m_x_5_71194": 2252,
      "m_x_5_71195": 2888.93,
      "m_x_5_71196": 1555.42,
      "m_x_5_71198": 1500,
      "m_x_5_71199": 1300,
      "m_x_5_71200": 2109.24,
      "m_x_5_71201": 1300.6,
      "m_x_5_71202": 1186.66,
      "m_x_5_71203": 1800,
      "m_x_5_71204": 2231,
      "m_x_5_71205": 1418,
      "m_x_5_71206": 2185.72,
      "m_x_5_71214": 1886.02,
      "m_x_5_71219": 942.47,
      "m_x_5_71221": 384.57,
      "m_x_5_71222": 396.33,
      "m_x_5_71223": 396.74,
      "m_x_5_71224": 395.74,
      "m_x_5_71225": 451.58,
      "m_x_5_71226": 699.38,
      "m_x_5_71227": 927.24,
      "m_x_5_71229": 486.93,
      "m_x_5_71230": 1218.32,
      "m_x_5_71237": 498.74,
      "m_x_5_71239": 557.01,
      "m_x_5_89461": 1290.09,
      "m_x_5_89462": 1544,
      "m_x_5_89463": 1091.1,
      "m_x_5_89464": 1121.05,
      "m_x_5_89465": 1333.11,
      "m_x_5_89466": 1207.77,
      "m_x_5_89467": 1251.05,
      "m_x_5_89468": 1175.6,
      "m_x_5_89469": 1394.84,
      "m_x_5_89470": 1191.92,
      "m_x_5_89471": 1855.03,
      "m_x_5_89472": 1571.32,
      "m_x_5_89473": 1999.41,
      "m_x_5_31103": 12.06,
      "m_x_5_31104": 69.99,
      "m_x_5_31105": 125.98,
      "m_x_5_31106": 45.97,
      "m_x_5_31107": 148.85,
      "m_x_5_31108": 154.94,
      "m_x_5_40538": 180,
      "m_x_5_71242": 195.92,
      "m_x_5_71243": 82.69,
      "m_x_5_71244": 121.01,
      "m_x_5_71245": 22,
      "m_x_5_71246": 105.67,
      "m_x_5_71247": 134.54,
      "m_x_5_71248": 120.88,
      "m_x_5_71250": 26.01,
      "m_x_5_71251": 15.83,
      "m_x_5_71252": 39.66,
      "m_x_5_71254": 31.05,
      "m_x_5_71255": 22.75,
      "m_x_5_71256": 55,
      "m_x_5_71259": 288.64,
      "m_x_5_71260": 219.18,
      "m_x_5_71261": 231.64,
      "m_x_5_71262": 80,
      "m_x_5_71264": 33.13,
      "m_x_5_71265": 25.73,
      "m_x_5_89341": 104.05,
      "m_x_5_89343": 90.16,
      "m_x_5_89344": 135.51,
      "m_x_5_89345": 79.66,
      "m_x_8_630": 199,
      "m_x_8_631": 799.99,
      "m_x_8_633": 250,
      "m_x_5_6073": 1,
      "m_x_5_6247": 1.23,
      "m_x_5_6248": 1.17,
      "m_x_5_10028": 73.98,
      "m_x_5_31140": 271.86,
      "m_x_5_40539": 450.99,
      "m_x_5_71129": 103.1,
      "m_x_5_71130": 105.91,
      "m_x_5_71131": 112.46,
      "m_x_5_71132": 155.31,
      "m_x_5_71133": 1111.69,
      "m_x_5_71134": 2213.44,
      "m_x_5_71135": 2224.04,
      "m_x_5_71140": 1500,
      "m_x_5_71141": 1851,
      "m_x_5_71143": 1937.57,
      "m_x_5_71144": 2113.15,
      "m_x_5_71145": 1279.9,
      "m_x_5_71147": 2360.57,
      "m_x_5_71148": 1678.96,
      "m_x_5_71149": 2282.83,
      "m_x_5_71150": 1542.78,
      "m_x_5_71151": 1435.12,
      "m_x_5_71152": 2205.72,
      "m_x_5_71153": 2127.88,
      "m_x_5_71159": 2217.79,
      "m_x_5_71160": 1288.44,
      "m_x_5_71164": 300,
      "m_x_5_71166": 715.99,
      "m_x_5_71167": 464.75,
      "m_x_5_71168": 437.23,
      "m_x_5_71169": 384.45,
      "m_x_5_71171": 486.49,
      "m_x_5_71172": 510.07,
      "m_x_5_71173": 473.82,
      "m_x_5_71174": 742.65,
      "m_x_5_71182": 370.53,
      "m_x_5_71184": 341.16,
      "m_x_5_71185": 393.22,
      "m_x_5_71186": 1211.49,
      "m_x_5_71189": 35.9,
      "m_x_5_71190": 60.76,
      "m_x_5_54537": 200,
      "m_x_5_89415": 987.61,
      "m_x_5_89416": 1081.4,
      "m_x_5_89418": 1060.51,
      "m_x_5_89419": 1631.88,
      "m_x_5_89420": 1949,
      "m_x_5_89421": 839.02,
      "m_x_5_89422": 829,
      "m_x_5_89423": 1038,
      "m_x_5_89424": 1156.52,
      "m_x_5_89425": 1326.84,
      "m_x_5_89429": 1932.04,
      "m_x_5_89430": 2166.03,
      "m_x_5_89431": 1999,
      "m_x_5_90213": 10.08,
      "m_x_5_35004": 2.07,
      "m_x_5_35005": 2.16,
      "m_x_5_35006": 3.28,
      "m_x_10_159": 489.66,
      "m_x_10_97": 299.99,
      "m_x_10_98": 299.99,
      "m_x_10_100": 299.99,
      "m_x_10_105": 299.99,
      "m_x_5_35771": 577.91,
      "m_x_5_35773": 306.13,
      "m_x_10_113": 40,
      "m_x_10_117": 689.95,
      "m_x_10_122": 160,
      "m_x_10_492": 1296.65,
      "m_x_5_38127": 1000,
      "m_x_5_38927": 6.99,
      "m_x_10_956": 400,
      "m_x_10_1606": 420,
      "m_x_10_1774": 908,
      "m_x_10_1775": 1598,
      "m_x_5_1830": 20.7,
      "m_x_5_1832": 30,
      "m_x_5_36491": 8,
      "m_x_5_81662": 1.18,
      "m_x_5_6251": 1.19,
      "m_x_5_35780": 6.49
    },
    "s_jiandan": {
      "dimai": 82999.99,
      "fengwangjiang": 156.93,
      "shoupijiao": 115.98,
      "qicaixian": 119,
      "bairanxian": 3.39,
      "m_m_5_30852": 15.79,
      "m_m_5_30853": 94.06,
      "m_m_5_30828": 8.95,
      "m_m_5_89165": 10.64,
      "guajian_bei": 66.34,
      "baihua_bu": 60.05,
      "guajian_yao": 89.98,
      "shuran_bu": 90.71,
      "shuran_bag": 42.14,
      "wuseshi": 119.73,
      "m_m_5_30856": 12.01,
      "m_m_5_30855": 153.11,
      "geyin_zhang": 268.2,
      "m_m_5_89298": 31.17,
      "m_m_5_30679": 14.73,
      "m_m_5_32004": 0.69,
      "m_m_5_30847": 8.34,
      "yinsi_duan": 109.99,
      "m_m_5_30848": 21,
      "m_m_5_32002": 0.55,
      "m_m_5_30850": 137.11,
      "m_m_5_30845": 179.78,
      "m_m_5_31397": 0.8,
      "m_m_5_30844": 0.32,
      "m_m_5_90210": 200,
      "m_m_5_35719": 32.4,
      "m_m_5_30873": 39.55,
      "m_m_5_90205": 38,
      "shanshui_juan": 150,
      "m_m_5_3779": 4,
      "m_m_8_36148": 1588.87,
      "m_m_5_3820": 10,
      "m_m_5_30827": 1.34,
      "m_m_5_89970": 184.25,
      "m_m_5_32014": 128.95,
      "m_m_5_31978": 0.66,
      "m_m_5_31985": 0.68,
      "lucai": 15.98,
      "m_m_5_1831": 12.61,
      "m_m_5_30849": 6,
      "m_m_5_71293": 50.15,
      "m_m_5_30826": 0.26,
      "m_m_5_30825": 0.01,
      "m_m_5_89171": 10.63,
      "m_m_5_31974": 0.4,
      "m_m_5_31968": 0.68,
      "m_m_5_71292": 20.84,
      "m_m_5_30824": 0.62,
      "m_m_5_71281": 15.64,
      "m_m_5_30823": 0.31,
      "m_m_5_71277": 53,
      "m_m_5_89315": 1190,
      "m_m_5_89969": 140.94,
      "m_m_5_31976": 2.7,
      "m_m_5_89971": 190.68,
      "lushui": 10.96,
      "m_m_5_30875": 0.8,
      "m_m_5_30843": 0.5,
      "m_m_5_30874": 33,
      "m_m_5_30842": 0.67,
      "m_m_5_5270": 0.99,
      "m_m_5_31977": 0.68,
      "m_m_5_31013": 197.9,
      "gancao": 1.69,
      "m_m_5_31012": 328.18,
      "m_m_5_89352": 864.85,
      "m_m_5_89350": 979.85,
      "m_m_5_71269": 109.87,
      "m_m_5_89346": 878.33,
      "m_m_5_89167": 10.64,
      "m_m_5_89348": 306,
      "m_m_5_71285": 80.06,
      "jieyuan_dan": 153.01,
      "m_m_5_30836": 0.9,
      "m_m_5_30832": 1.82,
      "m_m_5_30833": 2.45,
      "m_m_5_89324": 139.84,
      "m_m_5_30831": 0.53,
      "m_m_5_89973": 130.3,
      "m_m_5_31996": 0.66,
      "m_m_5_71241": 25,
      "m_m_5_71240": 88.99,
      "m_m_5_71266": 98.32,
      "m_m_5_30838": 2.99,
      "shanhu": 2.39,
      "m_m_5_30835": 2.99,
      "m_m_5_89974": 54.99,
      "m_m_5_71267": 48.88,
      "m_m_5_90029": 222.51,
      "m_m_5_89168": 21.89,
      "yaoyin": 178,
      "m_m_5_31100": 49.29,
      "shaoyao": 2.18,
      "m_m_5_90206": 100.01,
      "m_m_5_31102": 0.2,
      "m_m_5_30834": 1.66,
      "m_m_5_31998": 0.66,
      "m_m_5_89332": 944.47,
      "m_m_5_89340": 98.33,
      "m_m_5_89325": 812.91,
      "m_m_5_71258": 44.08,
      "m_m_5_89327": 78.47,
      "m_m_5_89966": 110,
      "m_m_5_10176": 3.39,
      "m_m_5_89968": 78.6,
      "m_m_5_31993": 0.68,
      "m_m_5_89376": 521,
      "m_m_5_89965": 129.99,
      "m_m_5_31992": 0.65,
      "m_m_5_89963": 50.53,
      "m_m_5_71192": 99.07,
      "m_m_5_89169": 10.63,
      "m_m_5_89962": 69.94,
      "m_m_5_31139": 4000.5,
      "m_m_5_89964": 119.09,
      "m_m_5_10027": 48.99,
      "m_m_5_89961": 54.57,
      "tiekuang": 2.32,
      "m_m_5_30676": 3.74,
      "m_m_5_30678": 1.17,
      "m_m_5_30674": 3.95,
      "m_m_5_30675": 3.35,
      "m_m_5_89967": 90.69,
      "m_m_5_6246": 0.22,
      "m_m_5_6249": 0.4,
      "m_m_5_30841": 5.66,
      "m_m_8_632": 1000,
      "m_m_8_636": 198.19,
      "m_m_5_2578": 5.01,
      "m_m_5_6068": 0.4,
      "m_m_5_6066": 0.01,
      "muban": 89,
      "muliao": 1.97,
      "m_m_5_35707": 6.47,
      "qiwuling": 24.92,
      "m_m_5_35716": 9.7,
      "m_m_5_35715": 85.49,
      "zhuzi": 1.49,
      "m_m_5_35567": 1.98,
      "m_m_5_35714": 24.95,
      "m_m_5_35713": 18.94,
      "m_m_10_93": 10.02,
      "m_m_5_35717": 2.34,
      "m_m_5_52337": 1399.93,
      "m_m_5_40232": 3465.65,
      "m_m_5_35772": 1445,
      "m_m_5_87917": 271.89,
      "m_m_5_87881": 7900,
      "zasui": 0.45,
      "g_5_30681": 0.95,
      "g_5_30680": 0.79,
      "m_x_5_89349": 889.52,
      "m_x_5_89436": 5450,
      "m_x_5_89438": 7255.91,
      "m_x_5_89440": 7909.68,
      "m_x_5_89441": 8585.99,
      "m_x_5_89444": 6851.45,
      "m_x_5_89459": 27531.33,
      "m_x_5_89329": 883.17,
      "m_x_5_89335": 3437.87,
      "m_x_5_89331": 849.43,
      "m_x_5_89337": 1540,
      "m_x_5_89368": 1046.27,
      "m_x_5_89372": 1760,
      "m_x_5_90436": 140.38,
      "m_x_5_89379": 5174.28,
      "m_x_5_90437": 49.77,
      "m_x_5_89384": 9999,
      "m_x_5_89385": 6888.44,
      "m_x_5_89386": 4199,
      "m_x_5_89388": 5396,
      "m_x_5_89390": 5489.92,
      "m_x_5_89391": 5990,
      "m_x_5_89409": 29999,
      "m_x_5_89393": 4924.97,
      "m_x_5_20971": 199.26,
      "m_x_5_38122": 944.02,
      "m_x_5_89317": 798.9,
      "m_x_5_89426": 2888,
      "m_x_5_89427": 2336,
      "m_x_5_89428": 2333,
      "m_x_5_89347": 1296,
      "m_x_5_89356": 1669.29,
      "m_x_5_89358": 1116.88,
      "m_x_5_89326": 1590.82,
      "m_x_5_89334": 4947.48,
      "m_x_5_5231": 0.8,
      "m_x_5_5230": 0.8,
      "m_x_5_31058": 10000,
      "m_x_5_31062": 230.62,
      "m_x_5_71268": 109.47,
      "m_x_5_71270": 120,
      "m_x_5_2302": 2100.95,
      "m_x_5_71271": 100.89,
      "m_x_5_71272": 115.53,
      "m_x_5_71273": 182.38,
      "m_x_5_71274": 83.5,
      "m_x_5_71276": 71.13,
      "m_x_5_71278": 5.13,
      "m_x_5_71279": 22.02,
      "m_x_5_71280": 39,
      "m_x_5_3485": 565.47,
      "m_x_5_71282": 3.99,
      "m_x_5_3236": 1900.8,
      "m_x_5_71283": 1.07,
      "m_x_5_71284": 118.31,
      "m_x_5_71286": 89.16,
      "m_x_5_71287": 120.7,
      "m_x_5_71288": 80,
      "m_x_5_71289": 2.73,
      "m_x_5_71290": 6.62,
      "m_x_5_71291": 39.04,
      "m_x_5_71294": 575,
      "m_x_5_71295": 485.37,
      "m_x_5_71296": 899.99,
      "m_x_5_71297": 253.01,
      "m_x_5_71299": 197.99,
      "m_x_5_2303": 13000.78,
      "m_x_5_71300": 3,
      "m_x_5_89316": 1583,
      "m_x_5_89318": 2500.86,
      "m_x_5_89361": 50.7,
      "m_x_5_89362": 120,
      "m_x_5_89363": 84.62,
      "m_x_5_89364": 200.26,
      "m_x_8_618": 796,
      "m_x_8_616": 430,
      "m_x_5_3810": 77.52,
      "m_x_5_3797": 37.73,
      "m_x_5_2433": 9.99,
      "m_x_8_621": 400,
      "m_x_8_624": 426,
      "m_x_8_22": 23.16,
      "m_x_8_23": 36.5,
      "m_x_5_2467": 17.3,
      "m_x_5_5245": 110,
      "m_x_8_31": 10.21,
      "m_x_8_69": 120.2,
      "m_x_8_70": 228.8,
      "m_x_5_22145": 79,
      "m_x_5_22917": 90.33,
      "m_x_5_22981": 129.9,
      "m_x_5_71194": 2796.11,
      "m_x_5_71195": 3499.26,
      "m_x_5_71196": 1555.16,
      "m_x_5_71197": 2573.76,
      "m_x_5_71198": 1888.4,
      "m_x_5_71199": 1058.9,
      "m_x_5_71200": 1786.92,
      "m_x_5_71201": 1677.5,
      "m_x_5_71202": 1058.28,
      "m_x_5_71203": 2333.44,
      "m_x_5_71204": 1599.81,
      "m_x_5_71205": 1800.27,
      "m_x_5_71206": 1879.21,
      "m_x_5_71207": 1999.55,
      "m_x_5_71214": 1083.71,
      "m_x_5_71215": 2333.32,
      "m_x_5_71216": 150.14,
      "m_x_5_71217": 1000.54,
      "m_x_5_71219": 837.68,
      "m_x_5_71221": 950.31,
      "m_x_5_71223": 499.94,
      "m_x_5_71224": 798.05,
      "m_x_5_71225": 763.31,
      "m_x_5_71226": 686.9,
      "m_x_5_71229": 287.47,
      "m_x_5_71230": 1110.64,
      "m_x_5_71231": 880.38,
      "m_x_5_71237": 850.42,
      "m_x_5_71239": 822.66,
      "m_x_5_89461": 1330.87,
      "m_x_5_89462": 1600.41,
      "m_x_5_89463": 1711.11,
      "m_x_5_89464": 1311.7,
      "m_x_5_89465": 1766.62,
      "m_x_5_89466": 879.88,
      "m_x_5_89467": 1500,
      "m_x_5_89468": 1320,
      "m_x_5_89469": 1000,
      "m_x_5_89470": 1300.08,
      "m_x_5_89471": 2890.99,
      "m_x_5_89472": 2000.72,
      "m_x_5_31099": 47.92,
      "m_x_5_31103": 13.89,
      "m_x_5_31104": 50,
      "m_x_5_31105": 144.3,
      "m_x_5_31107": 169.4,
      "m_x_5_31108": 135.18,
      "m_x_5_40538": 202.94,
      "m_x_5_71242": 80.74,
      "m_x_5_71243": 88.75,
      "m_x_5_71244": 100.61,
      "m_x_5_71245": 35,
      "m_x_5_71246": 123.48,
      "m_x_5_71247": 152.19,
      "m_x_5_71248": 120.42,
      "m_x_5_71250": 28.65,
      "m_x_5_71251": 38.08,
      "m_x_5_71253": 66.61,
      "m_x_5_71254": 33.4,
      "m_x_5_71255": 25.14,
      "m_x_5_71259": 76.05,
      "m_x_5_71260": 80,
      "m_x_5_71261": 119.5,
      "m_x_5_71262": 87.03,
      "m_x_5_71264": 25.82,
      "m_x_5_71265": 40.52,
      "m_x_5_89341": 199.32,
      "m_x_5_89342": 82.11,
      "m_x_5_89343": 110.38,
      "m_x_5_89345": 128.27,
      "m_x_5_89724": 200,
      "m_x_5_2589": 10.88,
      "m_x_5_2631": 13,
      "m_x_8_629": 299.99,
      "m_x_8_630": 240,
      "m_x_5_2603": 35.83,
      "m_x_5_6024": 3.66,
      "m_x_5_6069": 0.33,
      "m_x_5_6073": 0.33,
      "m_x_5_6247": 1.34,
      "m_x_5_6248": 0.88,
      "m_x_5_10028": 70.39,
      "m_x_5_40539": 430.22,
      "m_x_5_71129": 109.86,
      "m_x_5_71130": 130.17,
      "m_x_5_71131": 99.95,
      "m_x_5_71133": 964.51,
      "m_x_5_71134": 1810,
      "m_x_5_71135": 2603.84,
      "m_x_5_71136": 900,
      "m_x_5_71139": 1409.82,
      "m_x_5_71140": 2559.59,
      "m_x_5_71141": 1666.81,
      "m_x_5_71144": 1999.68,
      "m_x_5_71145": 1111.82,
      "m_x_5_71146": 2200,
      "m_x_5_71147": 1994.91,
      "m_x_5_71148": 1100.11,
      "m_x_5_71149": 1760,
      "m_x_5_71150": 1630.11,
      "m_x_5_71151": 1330.53,
      "m_x_5_71152": 2687.97,
      "m_x_5_71160": 997.74,
      "m_x_5_71164": 720.21,
      "m_x_5_71166": 688.3,
      "m_x_5_71167": 350.79,
      "m_x_5_71168": 298.93,
      "m_x_5_71169": 444.8,
      "m_x_5_71170": 498.86,
      "m_x_5_71171": 330.26,
      "m_x_5_71172": 299.91,
      "m_x_5_71173": 299.74,
      "m_x_5_71174": 829.91,
      "m_x_5_71175": 599.8,
      "m_x_5_71176": 849.92,
      "m_x_5_71184": 449.32,
      "m_x_5_71185": 898.18,
      "m_x_5_71187": 778.4,
      "m_x_5_71189": 32.61,
      "m_x_5_71190": 47,
      "m_x_5_54537": 430,
      "m_x_5_89415": 1903.69,
      "m_x_5_89416": 1130.62,
      "m_x_5_89417": 1110.67,
      "m_x_5_89418": 1199.98,
      "m_x_5_89419": 2221.36,
      "m_x_5_89420": 2173.54,
      "m_x_5_89421": 998.09,
      "m_x_5_89422": 1197,
      "m_x_5_89423": 1500.07,
      "m_x_5_89425": 1999,
      "m_x_5_89429": 3000,
      "m_x_5_90213": 31.84,
      "m_x_5_35005": 1,
      "m_x_5_35006": 2,
      "m_x_5_35007": 1.9,
      "m_x_10_165": 900,
      "m_x_5_35771": 740.87,
      "m_x_5_35773": 56.6,
      "m_x_10_121": 800,
      "m_x_5_38127": 818.88,
      "m_x_5_38927": 5.84,
      "m_x_10_1083": 597.6,
      "m_x_10_1085": 450,
      "m_x_10_687": 1320,
      "m_x_10_947": 940,
      "m_x_10_1464": 449,
      "m_x_10_2101": 229,
      "m_x_10_2102": 229,
      "m_x_10_2103": 229,
      "m_x_10_2104": 229,
      "m_x_10_2105": 229,
      "m_x_10_2106": 229,
      "m_x_10_2107": 229,
      "m_x_10_2232": 503.83,
      "m_x_10_1895": 294,
      "m_x_10_1897": 276.12,
      "m_x_10_2235": 558.64,
      "m_x_10_2236": 250,
      "m_x_10_2238": 513.97,
      "m_x_5_87857": 188.88,
      "m_x_5_90212": 222.22,
      "m_x_5_1830": 23.05,
      "m_x_5_1832": 10000,
      "m_x_5_31981": 10000,
      "m_x_5_32011": 10000,
      "m_x_5_32012": 10000,
      "m_x_5_36491": 6.66,
      "m_x_5_54059": 0.97,
      "m_x_5_6250": 0.74,
      "m_x_5_6251": 0.92,
      "m_x_5_35780": 6.48,
      "m_x_5_2871": 4.88,
      "m_x_5_3574": 2.54
    },
    "s_youyuelun": {
      "dimai": 79900.32,
      "fengwangjiang": 173.92,
      "shoupijiao": 64.7,
      "qicaixian": 113,
      "bairanxian": 3,
      "fengyu_yi": 999.82,
      "m_m_5_30852": 16.18,
      "m_m_5_30853": 100,
      "m_m_5_30828": 6.9,
      "m_m_5_89165": 10.63,
      "guajian_bei": 52.95,
      "baihua_bu": 70.51,
      "guajian_yao": 80.96,
      "shuran_bu": 86.33,
      "shuran_bag": 15.03,
      "wuseshi": 133.97,
      "m_m_5_30856": 16.28,
      "m_m_5_30855": 154.61,
      "geyin_zhang": 159,
      "m_m_5_89298": 36.28,
      "m_m_5_30679": 15.46,
      "m_m_5_30847": 10,
      "m_m_5_30846": 1.1,
      "yinsi_duan": 124.98,
      "m_m_5_30848": 26,
      "m_m_5_30850": 142.28,
      "m_m_5_30845": 173.02,
      "m_m_5_31397": 1.33,
      "m_m_5_30844": 0.3,
      "m_m_5_30873": 42.87,
      "m_m_8_614": 160.81,
      "shanshui_juan": 180.55,
      "m_m_5_3779": 9.99,
      "m_m_8_36148": 798,
      "m_m_5_30827": 1.27,
      "m_m_5_89970": 196.53,
      "m_m_5_31978": 0.66,
      "m_m_5_31985": 0.67,
      "lucai": 17.93,
      "m_m_5_31973": 0.67,
      "m_m_5_30849": 6,
      "m_m_5_71293": 63.7,
      "m_m_5_30826": 0.69,
      "m_m_5_30825": 0.05,
      "m_m_5_89171": 10.69,
      "m_m_5_71292": 40,
      "m_m_5_30824": 0.27,
      "m_m_5_71281": 22.58,
      "m_m_5_30823": 0.89,
      "m_m_5_31969": 0.66,
      "m_m_5_71277": 29.71,
      "m_m_5_89315": 1364.23,
      "m_m_5_89969": 132.23,
      "m_m_5_31976": 0.66,
      "m_m_5_89303": 4500,
      "m_m_5_89971": 219.88,
      "lushui": 13.87,
      "m_m_5_30875": 1,
      "m_m_5_30829": 0.99,
      "m_m_5_30843": 1.31,
      "m_m_5_30874": 31.41,
      "m_m_5_30842": 1,
      "m_m_5_5270": 1.41,
      "m_m_5_31970": 0.67,
      "m_m_5_5269": 0.09,
      "m_m_5_31977": 0.67,
      "m_m_5_31013": 182.62,
      "gancao": 3,
      "m_m_5_31012": 307,
      "m_m_5_89172": 22.39,
      "m_m_5_89304": 5663,
      "m_m_5_26231": 0.78,
      "m_m_5_89352": 692.88,
      "m_m_5_71269": 100.12,
      "m_m_5_89346": 706,
      "m_m_5_89167": 10.63,
      "m_m_5_89348": 205.84,
      "m_m_5_71285": 179.42,
      "jieyuan_dan": 153.01,
      "m_m_5_30836": 0.99,
      "m_m_5_30832": 1.91,
      "m_m_5_30833": 1.95,
      "m_m_5_89324": 66.72,
      "m_m_5_30831": 0.86,
      "m_m_5_89973": 220.86,
      "m_m_5_31996": 0.68,
      "m_m_5_71241": 88.64,
      "m_m_5_71240": 79.6,
      "m_m_5_31995": 0.67,
      "m_m_5_30838": 5.02,
      "shanhu": 3.25,
      "m_m_5_6646": 2,
      "m_m_5_30835": 3.96,
      "m_m_5_89974": 105.98,
      "m_m_5_6648": 3.9,
      "m_m_5_71267": 76.54,
      "m_m_5_89168": 21.79,
      "yaoyin": 212.7,
      "m_m_5_31100": 39.99,
      "m_m_5_89322": 1000,
      "shaoyao": 5,
      "m_m_5_30834": 2.01,
      "m_m_5_89328": 788.65,
      "m_m_5_89340": 108,
      "m_m_5_89325": 829.79,
      "m_m_5_71258": 74.85,
      "m_m_5_31999": 0.66,
      "m_m_5_89327": 81.59,
      "m_m_5_89966": 65.76,
      "m_m_5_10176": 3.39,
      "m_m_5_31991": 0.95,
      "m_m_5_89968": 70.01,
      "m_m_5_89376": 299.81,
      "m_m_5_89965": 140,
      "m_m_5_31992": 1.95,
      "m_m_5_89963": 71.77,
      "m_m_5_89370": 700,
      "m_m_5_89169": 10.66,
      "m_m_5_71188": 612.69,
      "m_m_5_31994": 0.7,
      "m_m_5_89962": 53.81,
      "m_m_5_31139": 3976.99,
      "m_m_5_89964": 58,
      "m_m_5_10027": 51,
      "m_m_5_89961": 40.86,
      "tiekuang": 2.44,
      "m_m_5_30676": 1.92,
      "m_m_5_30678": 1.51,
      "m_m_5_30674": 4,
      "m_m_5_30675": 3,
      "m_m_5_89967": 92,
      "m_m_5_89367": 1549.99,
      "m_m_5_6246": 0.1,
      "m_m_8_25762": 29.99,
      "m_m_5_30841": 3.19,
      "m_m_5_10172": 32.99,
      "m_m_5_35708": 6.49,
      "m_m_8_632": 800.29,
      "m_m_8_634": 499.06,
      "m_m_5_6066": 0.01,
      "muban": 22.39,
      "muliao": 2.18,
      "m_m_5_35707": 6.99,
      "m_m_5_35703": 0.67,
      "qiwuling": 24.48,
      "m_m_5_35716": 13.62,
      "m_m_5_35715": 14,
      "zhuzi": 2.2,
      "m_m_5_35567": 1.38,
      "m_m_5_35714": 10.89,
      "m_m_5_35713": 14.87,
      "m_m_5_35717": 7.38,
      "m_m_10_2037": 1388.59,
      "m_m_10_164": 99.98,
      "m_m_5_52337": 1580,
      "m_m_5_35772": 1499.08,
      "m_m_5_87917": 250.97,
      "m_m_5_87881": 8000.8,
      "zasui": 0.94,
      "g_5_30681": 1.15,
      "g_5_30680": 0.74,
      "m_x_5_89353": 573.5,
      "m_x_5_89359": 2033.1,
      "m_x_5_89354": 860,
      "m_x_5_89305": 3507.59,
      "m_x_5_89355": 1270,
      "m_x_5_89434": 4566.63,
      "m_x_5_89448": 39991.01,
      "m_x_5_89436": 6337.4,
      "m_x_5_89438": 6000,
      "m_x_5_89452": 35000.08,
      "m_x_5_89439": 6888.88,
      "m_x_5_89453": 28888.34,
      "m_x_5_89440": 4294.38,
      "m_x_5_89441": 4880.55,
      "m_x_5_89443": 8188.88,
      "m_x_5_89444": 6999.93,
      "m_x_5_89445": 6088.88,
      "m_x_5_89446": 7855.02,
      "m_x_5_89329": 783.76,
      "m_x_5_89335": 1986.92,
      "m_x_5_89330": 1192.54,
      "m_x_5_89331": 809,
      "m_x_5_89337": 1178.09,
      "m_x_5_89368": 999.56,
      "m_x_5_89372": 1998.87,
      "m_x_5_89369": 1499.9,
      "m_x_5_90436": 83.3,
      "m_x_5_89379": 5887.77,
      "m_x_5_89397": 30899,
      "m_x_5_89380": 5990,
      "m_x_5_90437": 33.82,
      "m_x_5_89381": 12970,
      "m_x_5_89383": 6466.91,
      "m_x_5_89384": 6000.15,
      "m_x_5_89385": 5081.92,
      "m_x_5_89386": 6666.34,
      "m_x_5_89388": 6887.3,
      "m_x_5_89406": 24666.59,
      "m_x_5_89389": 6665.85,
      "m_x_5_89390": 4288.54,
      "m_x_5_89391": 5800.61,
      "m_x_5_89392": 6998.93,
      "m_x_5_89393": 8099,
      "m_x_5_89394": 6500,
      "m_x_5_89396": 5899.87,
      "m_x_5_20971": 199.68,
      "m_x_10_2229": 280.65,
      "m_x_5_89317": 400.97,
      "m_x_10_2241": 1280,
      "m_x_5_89428": 2499.28,
      "m_x_5_89310": 10999.36,
      "m_x_5_89347": 1455,
      "m_x_5_89356": 990,
      "m_x_5_89358": 1078,
      "m_x_5_89326": 1089.55,
      "m_x_5_89334": 1649.51,
      "m_x_5_89339": 3000,
      "m_x_5_5232": 1.97,
      "m_x_5_5231": 0.91,
      "m_x_5_5230": 0.65,
      "m_x_5_5229": 0.95,
      "m_x_5_31050": 1.75,
      "m_x_5_31051": 380.97,
      "m_x_5_31054": 500.12,
      "m_x_5_31055": 0.48,
      "m_x_5_2299": 7600.08,
      "m_x_5_31056": 300.62,
      "m_x_5_31057": 300.77,
      "m_x_5_31058": 4.99,
      "m_x_5_31059": 0.4,
      "m_x_5_31060": 188.97,
      "m_x_5_31062": 300.75,
      "m_x_5_71268": 97.52,
      "m_x_5_71270": 213.72,
      "m_x_5_2302": 3997.66,
      "m_x_5_71271": 199.57,
      "m_x_5_71272": 113.39,
      "m_x_5_71273": 159.76,
      "m_x_5_71274": 120.3,
      "m_x_5_71276": 59,
      "m_x_5_71278": 30.77,
      "m_x_5_71279": 32.18,
      "m_x_5_3505": 1388,
      "m_x_5_71280": 37,
      "m_x_5_3485": 252,
      "m_x_5_71282": 40,
      "m_x_5_71283": 33.94,
      "m_x_5_2292": 3111.08,
      "m_x_5_71284": 107.74,
      "m_x_5_71286": 110.87,
      "m_x_5_71287": 98.6,
      "m_x_5_71288": 110,
      "m_x_5_71289": 30.67,
      "m_x_5_71290": 99,
      "m_x_5_71291": 30.51,
      "m_x_5_71294": 579.03,
      "m_x_5_71295": 454.77,
      "m_x_5_71296": 469.13,
      "m_x_5_71297": 261.28,
      "m_x_5_71298": 44.09,
      "m_x_5_71300": 4.34,
      "m_x_5_89316": 2220.75,
      "m_x_5_89318": 2499,
      "m_x_5_89361": 101.55,
      "m_x_5_89362": 129.49,
      "m_x_5_89363": 120,
      "m_x_5_89364": 189.6,
      "m_x_8_616": 788.18,
      "m_x_8_617": 128.88,
      "m_x_5_3810": 60.76,
      "m_x_5_3811": 60.98,
      "m_x_8_25": 31.97,
      "m_x_8_24": 1,
      "m_x_8_627": 350.75,
      "m_x_5_2467": 6.19,
      "m_x_8_30": 51.96,
      "m_x_8_37": 18.14,
      "m_x_8_38": 19.66,
      "m_x_5_5245": 98.8,
      "m_x_5_5246": 88.54,
      "m_x_8_31": 5.45,
      "m_x_8_69": 135.92,
      "m_x_8_70": 179.8,
      "m_x_5_22145": 88.28,
      "m_x_5_22917": 95.27,
      "m_x_5_22981": 120.53,
      "m_x_5_31252": 288.67,
      "m_x_5_71193": 985.43,
      "m_x_5_71194": 1580.19,
      "m_x_5_71195": 1587.02,
      "m_x_5_71196": 891.87,
      "m_x_5_71197": 1478.1,
      "m_x_5_71198": 1393.73,
      "m_x_5_71199": 1094.95,
      "m_x_5_71200": 1573.58,
      "m_x_5_71201": 1182.13,
      "m_x_5_71202": 949.34,
      "m_x_5_71203": 1850.33,
      "m_x_5_71204": 1183.68,
      "m_x_5_71205": 795.23,
      "m_x_5_71206": 1539.17,
      "m_x_5_71207": 1498.98,
      "m_x_5_71214": 2800.09,
      "m_x_5_71215": 1675,
      "m_x_5_71219": 250.98,
      "m_x_5_71220": 246.54,
      "m_x_5_71221": 288.65,
      "m_x_5_71222": 338.68,
      "m_x_5_71223": 245.77,
      "m_x_5_71224": 237.62,
      "m_x_5_71225": 346.94,
      "m_x_5_71226": 396.96,
      "m_x_5_71227": 219.85,
      "m_x_5_71228": 288.96,
      "m_x_5_71229": 390.93,
      "m_x_5_71230": 368.92,
      "m_x_5_71231": 288.03,
      "m_x_5_71237": 245,
      "m_x_5_89461": 1398.42,
      "m_x_5_89462": 1588.88,
      "m_x_5_89463": 1499.98,
      "m_x_5_89464": 1495.99,
      "m_x_5_89465": 1198,
      "m_x_5_89466": 1098.96,
      "m_x_5_89467": 1250.33,
      "m_x_5_89469": 1488.8,
      "m_x_5_89471": 2333.21,
      "m_x_5_89472": 2717.23,
      "m_x_5_89473": 2797,
      "m_x_5_31099": 47.98,
      "m_x_5_31103": 19.71,
      "m_x_5_31104": 21.05,
      "m_x_5_31105": 86.71,
      "m_x_5_31106": 24.5,
      "m_x_5_31107": 80,
      "m_x_5_31108": 99.48,
      "m_x_5_40538": 128,
      "m_x_5_71242": 86.28,
      "m_x_5_71243": 143.67,
      "m_x_5_71244": 119,
      "m_x_5_71245": 45.89,
      "m_x_5_71246": 126.56,
      "m_x_5_71247": 150.38,
      "m_x_5_71248": 151.86,
      "m_x_5_71250": 120,
      "m_x_5_71251": 88.44,
      "m_x_5_71254": 99.3,
      "m_x_5_71255": 44.98,
      "m_x_5_71259": 108.81,
      "m_x_5_71260": 93.16,
      "m_x_5_71261": 114.14,
      "m_x_5_71262": 80.06,
      "m_x_5_71265": 44.18,
      "m_x_5_89341": 113,
      "m_x_5_89342": 96,
      "m_x_5_89343": 93.3,
      "m_x_5_89345": 140,
      "m_x_5_89724": 300.09,
      "m_x_5_2589": 13.99,
      "m_x_5_2631": 30.12,
      "m_x_8_629": 475.64,
      "m_x_8_630": 666.66,
      "m_x_8_631": 399,
      "m_x_8_635": 391.2,
      "m_x_5_5044": 5.48,
      "m_x_5_6073": 1,
      "m_x_5_6247": 1.05,
      "m_x_5_6248": 0.97,
      "m_x_5_10028": 66.2,
      "m_x_5_31140": 230,
      "m_x_5_31141": 100,
      "m_x_5_40539": 66.88,
      "m_x_5_71129": 106.91,
      "m_x_5_71130": 120.67,
      "m_x_5_71131": 139.33,
      "m_x_5_71132": 226.2,
      "m_x_5_71133": 982.08,
      "m_x_5_71134": 1799.52,
      "m_x_5_71136": 1008.44,
      "m_x_5_71138": 1499.85,
      "m_x_5_71140": 1899.99,
      "m_x_5_71141": 1349.69,
      "m_x_5_71143": 1546.58,
      "m_x_5_71145": 947.27,
      "m_x_5_71146": 1398.15,
      "m_x_5_71147": 1773.92,
      "m_x_5_71148": 1094.52,
      "m_x_5_71149": 1887.25,
      "m_x_5_71150": 1191.88,
      "m_x_5_71151": 1594.33,
      "m_x_5_71152": 1998.99,
      "m_x_5_71153": 1480.88,
      "m_x_5_71159": 1389.75,
      "m_x_5_71160": 883.55,
      "m_x_5_71162": 263.23,
      "m_x_5_71163": 384.99,
      "m_x_5_71164": 381.48,
      "m_x_5_71165": 244.84,
      "m_x_5_71166": 379.73,
      "m_x_5_71167": 397.93,
      "m_x_5_71168": 297.87,
      "m_x_5_71169": 271.84,
      "m_x_5_71170": 297.98,
      "m_x_5_71171": 380.67,
      "m_x_5_71172": 389.89,
      "m_x_5_71174": 299.75,
      "m_x_5_71175": 337.11,
      "m_x_5_71176": 293.55,
      "m_x_5_71182": 283.96,
      "m_x_5_71183": 298.92,
      "m_x_5_71185": 266.56,
      "m_x_5_71186": 710.65,
      "m_x_5_71187": 612.49,
      "m_x_5_71189": 40,
      "m_x_5_71190": 69.05,
      "m_x_5_71191": 111.58,
      "m_x_5_54537": 99.06,
      "m_x_5_89415": 2222.33,
      "m_x_5_89416": 1200.82,
      "m_x_5_89417": 2295.59,
      "m_x_5_89418": 1255.79,
      "m_x_5_89419": 899.55,
      "m_x_5_89420": 1088.11,
      "m_x_5_89421": 993.13,
      "m_x_5_89422": 944.5,
      "m_x_5_89423": 998.77,
      "m_x_5_89425": 1998.86,
      "m_x_5_90213": 14.42,
      "m_x_5_35004": 3.86,
      "m_x_5_35005": 2.14,
      "m_x_5_35006": 3.84,
      "m_x_5_35007": 2,
      "m_x_5_35044": 0.2,
      "m_x_10_152": 690,
      "m_x_10_155": 990,
      "m_x_10_163": 88.65,
      "m_x_10_94": 99,
      "m_x_10_95": 99.94,
      "m_x_10_103": 140,
      "m_x_10_106": 99.94,
      "m_x_10_108": 99.24,
      "m_x_10_110": 99.65,
      "m_x_5_35771": 800.4,
      "m_x_5_35774": 1900.96,
      "m_x_5_35775": 799,
      "m_x_10_133": 290,
      "m_x_10_148": 27.76,
      "m_x_10_120": 320,
      "m_x_10_122": 298.78,
      "m_x_5_38373": 1500.21,
      "m_x_5_38374": 800.57,
      "m_x_5_38927": 5.08,
      "m_x_10_673": 455,
      "m_x_10_680": 1599,
      "m_x_10_946": 500,
      "m_x_10_1454": 49,
      "m_x_10_1455": 35.07,
      "m_x_10_1456": 35,
      "m_x_10_1457": 30.88,
      "m_x_10_1458": 29.98,
      "m_x_10_1459": 489.2,
      "m_x_10_1463": 700,
      "m_x_10_1464": 800,
      "m_x_10_2036": 1377,
      "m_x_10_2230": 280,
      "m_x_10_2231": 268,
      "m_x_10_2232": 277.75,
      "m_x_10_1895": 688.73,
      "m_x_10_1896": 369.97,
      "m_x_10_1881": 980,
      "m_x_10_2233": 266.22,
      "m_x_10_2234": 280.02,
      "m_x_10_2235": 288.98,
      "m_x_10_2236": 350.3,
      "m_x_10_2238": 228.63,
      "m_x_10_2242": 1155,
      "m_x_5_87875": 488.44,
      "m_x_5_87874": 388,
      "m_x_5_87861": 322.88,
      "m_x_5_31983": 0.6,
      "m_x_5_31981": 10000,
      "m_x_5_32010": 1.48,
      "m_x_5_36491": 10,
      "m_x_5_41556": 2,
      "m_x_5_40562": 10000,
      "m_x_5_6250": 0.69,
      "m_x_5_6251": 1.2,
      "m_x_5_35780": 6.2
    },
    "s_longzheng": {
      "dimai": 89000.01,
      "fengwangjiang": 158.45,
      "shoupijiao": 106.57,
      "qicaixian": 199,
      "bairanxian": 3.4,
      "fengyu_yi": 1888.57,
      "m_m_5_30852": 18.55,
      "m_m_5_30853": 91.86,
      "m_m_5_30828": 5.9,
      "m_m_5_89165": 10.64,
      "guajian_bei": 54.97,
      "baihua_bu": 75,
      "guajian_yao": 84.56,
      "shuran_bu": 104,
      "shuran_bag": 31.38,
      "jinfeng_bag": 11000.82,
      "wuseshi": 122.5,
      "m_m_5_30856": 18.59,
      "m_m_5_30855": 154.93,
      "geyin_zhang": 217.49,
      "m_m_5_89298": 35.17,
      "m_m_5_30679": 15.96,
      "m_m_5_32004": 0.69,
      "m_m_5_30847": 10.43,
      "m_m_5_30846": 1.78,
      "yinsi_duan": 138,
      "m_m_5_32003": 0.6,
      "m_m_5_30848": 18.32,
      "m_m_5_32002": 0.6,
      "m_m_5_30850": 154.73,
      "m_m_5_30845": 181.49,
      "m_m_5_89435": 6666.91,
      "tongpao_fan": 9998,
      "m_m_5_30844": 0.92,
      "m_m_5_90210": 75,
      "m_m_5_35719": 32.39,
      "m_m_5_30873": 32.3,
      "m_m_5_90205": 200,
      "m_m_8_614": 699.99,
      "m_m_8_36148": 1107.8,
      "m_m_5_89475": 1988,
      "m_m_5_89474": 1419.99,
      "m_m_5_3820": 7.55,
      "m_m_5_30827": 1.16,
      "m_m_5_89970": 180.9,
      "m_m_5_32014": 229,
      "m_m_5_31985": 0.66,
      "lucai": 18.65,
      "m_m_5_31973": 0.67,
      "m_m_5_30849": 6,
      "m_m_5_71293": 30,
      "m_m_5_30826": 0.74,
      "m_m_5_30825": 0.2,
      "m_m_5_89171": 10.8,
      "m_m_5_31974": 0.6,
      "m_m_5_31968": 0.5,
      "m_m_5_71292": 40.23,
      "m_m_5_30824": 0.5,
      "m_m_5_31967": 0.55,
      "m_m_5_71281": 26,
      "m_m_5_30823": 0.5,
      "m_m_5_31969": 0.65,
      "m_m_5_71277": 28.09,
      "m_m_5_89315": 1350.04,
      "m_m_5_89969": 159.98,
      "m_m_5_31976": 0.68,
      "m_m_5_89303": 3545.03,
      "m_m_5_89971": 190.14,
      "lushui": 15,
      "m_m_5_30875": 1.37,
      "m_m_5_30829": 1.11,
      "m_m_5_30843": 0.94,
      "m_m_5_30874": 22.21,
      "m_m_5_30842": 0.97,
      "m_m_5_5270": 2.99,
      "m_m_5_31970": 0.67,
      "m_m_5_31977": 0.55,
      "m_m_5_31013": 170.66,
      "gancao": 3.15,
      "m_m_5_31012": 303.88,
      "m_m_5_90034": 4999.98,
      "m_m_5_26057": 3301.01,
      "m_m_5_89352": 746.58,
      "m_m_5_89350": 1014.11,
      "m_m_5_71269": 161.87,
      "m_m_5_89346": 748.32,
      "m_m_5_89167": 10.63,
      "m_m_5_89348": 198.04,
      "m_m_5_71285": 103.99,
      "jieyuan_dan": 90,
      "m_m_5_30836": 3.16,
      "m_m_5_30832": 2.54,
      "m_m_5_30833": 2.29,
      "m_m_5_89324": 105.07,
      "m_m_5_30831": 3.2,
      "m_m_5_89973": 205.77,
      "m_m_5_31996": 0.66,
      "m_m_5_71240": 100.01,
      "m_m_5_31995": 0.67,
      "m_m_5_71266": 29.13,
      "m_m_5_30838": 1.1,
      "shanhu": 6.99,
      "m_m_5_6646": 1.59,
      "m_m_5_30835": 2.5,
      "m_m_5_89974": 155,
      "m_m_5_71267": 76.39,
      "m_m_5_90029": 380,
      "m_m_5_89168": 22.99,
      "yaoyin": 175.75,
      "m_m_5_31100": 40,
      "shaoyao": 4.02,
      "m_m_5_31102": 0.23,
      "m_m_5_30834": 1.93,
      "m_m_5_31998": 0.68,
      "m_m_5_90035": 13000,
      "m_m_5_89328": 922.87,
      "m_m_5_89340": 100,
      "m_m_5_89325": 803.21,
      "m_m_5_71258": 85.01,
      "m_m_5_31999": 0.55,
      "m_m_5_89327": 78,
      "m_m_5_89966": 79.67,
      "m_m_5_31991": 0.67,
      "m_m_5_89968": 120.7,
      "m_m_5_89376": 521.31,
      "m_m_5_89965": 90.01,
      "m_m_5_31992": 0.67,
      "m_m_5_89963": 75.57,
      "m_m_5_89370": 999,
      "m_m_5_71192": 5,
      "m_m_5_89169": 10.64,
      "m_m_5_71188": 588.66,
      "m_m_5_31994": 2,
      "m_m_5_89962": 60.27,
      "m_m_5_31139": 3795,
      "m_m_5_89964": 54.32,
      "m_m_5_10027": 59,
      "m_m_5_89961": 84,
      "tiekuang": 2.34,
      "m_m_5_30676": 3.97,
      "m_m_5_30678": 2.37,
      "m_m_5_30674": 3.66,
      "m_m_5_30675": 3.33,
      "m_m_5_89967": 142,
      "m_m_5_89367": 1599.79,
      "m_m_5_6246": 0.34,
      "m_m_5_6249": 0.49,
      "m_m_5_32787": 6.31,
      "m_m_8_25762": 2.13,
      "m_m_5_30841": 3.06,
      "m_m_5_35708": 6.46,
      "m_m_5_90032": 5900,
      "m_m_8_632": 330.33,
      "m_m_8_634": 299.99,
      "m_m_8_636": 60,
      "m_m_5_90353": 2998.88,
      "m_m_5_90257": 98,
      "muban": 89,
      "muliao": 3.17,
      "m_m_5_35707": 6.49,
      "qiwuling": 25.98,
      "m_m_5_35716": 7.41,
      "m_m_5_35715": 12,
      "zhuzi": 1.94,
      "m_m_5_35567": 1.89,
      "m_m_5_35704": 0.67,
      "m_m_5_35714": 89.54,
      "m_m_5_35701": 0.65,
      "m_m_5_35713": 89.19,
      "m_m_5_35705": 0.66,
      "m_m_10_1778": 910,
      "m_m_10_948": 599.99,
      "m_m_5_89260": 29000,
      "m_m_10_2034": 1888.88,
      "m_m_10_93": 299.99,
      "m_m_10_2037": 1999.99,
      "m_m_5_35772": 1165,
      "m_m_5_87917": 254.45,
      "m_m_5_87881": 7200.25,
      "zasui": 0.87,
      "g_5_30681": 1,
      "g_5_30680": 2.34,
      "m_x_5_89359": 1500,
      "m_x_5_89305": 3872.86,
      "m_x_5_89308": 4357.1,
      "m_x_5_89349": 683.75,
      "m_x_5_89355": 1895.66,
      "m_x_5_89351": 597.89,
      "m_x_5_89434": 5173.38,
      "m_x_5_89448": 45000.9,
      "m_x_5_89436": 5394,
      "m_x_5_89438": 4388.67,
      "m_x_5_89452": 28885.08,
      "m_x_5_89439": 4300,
      "m_x_5_89453": 23000,
      "m_x_5_89440": 9999,
      "m_x_5_89454": 25888.88,
      "m_x_5_89441": 4600,
      "m_x_5_89455": 28888.53,
      "m_x_5_89456": 38887.95,
      "m_x_5_89443": 6170,
      "m_x_5_89445": 4993,
      "m_x_5_89446": 6666.63,
      "m_x_5_89335": 1050.93,
      "m_x_5_89331": 816.32,
      "m_x_5_89337": 2782.3,
      "m_x_5_89368": 999.99,
      "m_x_5_89372": 1234,
      "m_x_5_89369": 700.85,
      "m_x_5_90436": 65,
      "m_x_5_89379": 4080.59,
      "m_x_5_89397": 27999.68,
      "m_x_5_89380": 5239.99,
      "m_x_5_90437": 48.6,
      "m_x_5_89381": 5200,
      "m_x_5_89383": 6500.6,
      "m_x_5_89384": 4999.22,
      "m_x_5_89385": 5333,
      "m_x_5_89386": 4987,
      "m_x_5_89388": 4680.51,
      "m_x_5_89389": 4680,
      "m_x_5_89390": 4170.5,
      "m_x_5_89391": 5500,
      "m_x_5_89409": 36666.03,
      "m_x_5_89392": 4230.02,
      "m_x_5_89393": 6350.22,
      "m_x_5_89411": 31949,
      "m_x_5_89412": 20000,
      "m_x_5_89395": 7000,
      "m_x_5_89396": 4360,
      "m_x_5_20971": 198.09,
      "m_x_10_1281": 599.99,
      "m_x_10_1894": 199.99,
      "m_x_10_2229": 599.99,
      "m_x_5_89317": 1048,
      "m_x_10_2241": 1599.99,
      "m_x_5_89319": 10,
      "m_x_5_89320": 1450.88,
      "m_x_5_89426": 1499.74,
      "m_x_5_89427": 1350,
      "m_x_5_89428": 1999.23,
      "m_x_5_89310": 10888,
      "m_x_5_89347": 1098,
      "m_x_5_89356": 1556,
      "m_x_5_89358": 1099.88,
      "m_x_5_89447": 28886,
      "m_x_5_89326": 1319.17,
      "m_x_5_89334": 1888.79,
      "m_x_5_26232": 4,
      "m_x_5_5232": 1.27,
      "m_x_5_5230": 5,
      "m_x_5_5229": 7.01,
      "m_x_5_31055": 50,
      "m_x_5_31056": 10000,
      "m_x_5_31057": 1000,
      "m_x_5_31058": 10000,
      "m_x_5_31059": 2.55,
      "m_x_5_31062": 362.42,
      "m_x_5_71268": 110.5,
      "m_x_5_71270": 105.16,
      "m_x_5_2302": 5996.18,
      "m_x_5_71271": 141.64,
      "m_x_5_71272": 153.25,
      "m_x_5_71273": 133.48,
      "m_x_5_71274": 113.61,
      "m_x_5_71276": 99,
      "m_x_5_71278": 24.45,
      "m_x_5_71279": 55.2,
      "m_x_5_3505": 10000,
      "m_x_5_71280": 33.2,
      "m_x_5_3485": 175.12,
      "m_x_5_71282": 32.98,
      "m_x_5_3236": 1755.92,
      "m_x_5_2292": 4999.98,
      "m_x_5_71284": 98.61,
      "m_x_5_71286": 103.7,
      "m_x_5_71287": 89.56,
      "m_x_5_71288": 83.62,
      "m_x_5_71290": 22.31,
      "m_x_5_71291": 29,
      "m_x_5_71294": 730.33,
      "m_x_5_71295": 572,
      "m_x_5_71296": 739.38,
      "m_x_5_71297": 150.23,
      "m_x_5_71298": 43.98,
      "m_x_5_71299": 488,
      "m_x_5_2303": 7500,
      "m_x_5_89316": 1749.53,
      "m_x_5_89318": 2397.97,
      "m_x_5_89361": 50.91,
      "m_x_5_89362": 138.3,
      "m_x_5_89363": 150.13,
      "m_x_5_89364": 149.88,
      "m_x_5_89365": 255.88,
      "m_x_5_3810": 80,
      "m_x_5_3811": 35,
      "m_x_8_25": 36.2,
      "m_x_8_21": 2.1,
      "m_x_5_3797": 49.99,
      "m_x_8_624": 899.99,
      "m_x_8_22": 31.82,
      "m_x_8_23": 35.29,
      "m_x_8_24": 3.94,
      "m_x_8_627": 469,
      "m_x_5_2467": 15.76,
      "m_x_5_5245": 99.88,
      "m_x_8_31": 12.74,
      "m_x_8_69": 164.1,
      "m_x_8_70": 231.56,
      "m_x_5_22145": 62.23,
      "m_x_5_22917": 88.88,
      "m_x_5_22981": 162.74,
      "m_x_5_31252": 999.6,
      "m_x_5_31254": 160.27,
      "m_x_5_71193": 1555,
      "m_x_5_71196": 1400,
      "m_x_5_71198": 1700,
      "m_x_5_71199": 1330,
      "m_x_5_71200": 1940,
      "m_x_5_71201": 1860.91,
      "m_x_5_71202": 1333,
      "m_x_5_71203": 1851.31,
      "m_x_5_71204": 1747.87,
      "m_x_5_71205": 1362.9,
      "m_x_5_71206": 1766,
      "m_x_5_71214": 1368,
      "m_x_5_71215": 2210.25,
      "m_x_5_71216": 888.3,
      "m_x_5_71220": 588.87,
      "m_x_5_71221": 806.68,
      "m_x_5_71222": 824.9,
      "m_x_5_71223": 800.28,
      "m_x_5_71224": 622.67,
      "m_x_5_71225": 998.11,
      "m_x_5_71226": 794.05,
      "m_x_5_71227": 728.72,
      "m_x_5_71229": 464.69,
      "m_x_5_71237": 928,
      "m_x_5_71239": 799,
      "m_x_5_89461": 1622.3,
      "m_x_5_89462": 1433.52,
      "m_x_5_89463": 1800.19,
      "m_x_5_89464": 1474.47,
      "m_x_5_89465": 1890.89,
      "m_x_5_89466": 1420.7,
      "m_x_5_89467": 1888.88,
      "m_x_5_89468": 1467.04,
      "m_x_5_89469": 1440.87,
      "m_x_5_89470": 1587.87,
      "m_x_5_89471": 1788.12,
      "m_x_5_89472": 1399,
      "m_x_5_89473": 1500.71,
      "m_x_5_90289": 1300,
      "m_x_5_31099": 17.47,
      "m_x_5_31103": 7.64,
      "m_x_5_31104": 88.19,
      "m_x_5_31105": 130.98,
      "m_x_5_31106": 9.02,
      "m_x_5_31107": 44.99,
      "m_x_5_31108": 153,
      "m_x_5_40538": 48.14,
      "m_x_5_71242": 149.81,
      "m_x_5_71243": 129,
      "m_x_5_71244": 100.91,
      "m_x_5_71246": 144.23,
      "m_x_5_71247": 109.37,
      "m_x_5_71248": 126.53,
      "m_x_5_71250": 82,
      "m_x_5_71251": 30.07,
      "m_x_5_71252": 35.85,
      "m_x_5_71253": 86.8,
      "m_x_5_71254": 88.48,
      "m_x_5_71255": 25.99,
      "m_x_5_71256": 88.88,
      "m_x_5_71259": 112.46,
      "m_x_5_71260": 89.57,
      "m_x_5_71261": 166.58,
      "m_x_5_71262": 88.12,
      "m_x_5_71263": 65.66,
      "m_x_5_71265": 33.05,
      "m_x_5_89341": 95.73,
      "m_x_5_89342": 87.54,
      "m_x_5_89343": 112,
      "m_x_5_89344": 190.7,
      "m_x_5_89345": 86.74,
      "m_x_5_89724": 270.3,
      "m_x_5_2589": 10.99,
      "m_x_5_2631": 59.97,
      "m_x_5_2594": 500,
      "m_x_5_6247": 1.04,
      "m_x_5_6248": 1.49,
      "m_x_5_10028": 58.66,
      "m_x_5_31140": 366.15,
      "m_x_5_31142": 600.3,
      "m_x_5_31143": 200.99,
      "m_x_5_40539": 80.45,
      "m_x_5_71129": 108,
      "m_x_5_71130": 103,
      "m_x_5_71131": 150.72,
      "m_x_5_71132": 213.38,
      "m_x_5_71133": 1368.61,
      "m_x_5_71134": 1800.4,
      "m_x_5_71135": 1900.6,
      "m_x_5_71136": 1300.05,
      "m_x_5_71137": 2188.4,
      "m_x_5_71138": 1888,
      "m_x_5_71141": 1888,
      "m_x_5_71142": 1888.55,
      "m_x_5_71143": 2100.66,
      "m_x_5_71144": 1400.55,
      "m_x_5_71145": 1100.19,
      "m_x_5_71146": 2013.61,
      "m_x_5_71147": 2110.41,
      "m_x_5_71148": 1400.67,
      "m_x_5_71149": 1999.98,
      "m_x_5_71150": 1628.27,
      "m_x_5_71151": 1466.68,
      "m_x_5_71152": 2824.3,
      "m_x_5_71159": 2221.33,
      "m_x_5_71160": 1122.21,
      "m_x_5_71164": 997.98,
      "m_x_5_71165": 500.74,
      "m_x_5_71166": 763.5,
      "m_x_5_71167": 850,
      "m_x_5_71168": 658.68,
      "m_x_5_71169": 604.04,
      "m_x_5_71170": 721.77,
      "m_x_5_71171": 888.07,
      "m_x_5_71172": 715.52,
      "m_x_5_71173": 999.27,
      "m_x_5_71174": 665.88,
      "m_x_5_71182": 666.41,
      "m_x_5_71184": 541.32,
      "m_x_5_71186": 792.66,
      "m_x_5_71187": 577.22,
      "m_x_5_71189": 44,
      "m_x_5_71190": 50.59,
      "m_x_5_54537": 333,
      "m_x_5_89415": 1610.04,
      "m_x_5_89416": 1229.59,
      "m_x_5_89417": 1378,
      "m_x_5_89418": 1198.87,
      "m_x_5_89419": 1412.67,
      "m_x_5_89420": 2149,
      "m_x_5_89421": 1029.95,
      "m_x_5_89422": 1588.18,
      "m_x_5_89423": 1429.8,
      "m_x_5_89424": 2088.13,
      "m_x_5_89425": 1700.54,
      "m_x_5_89429": 2780.48,
      "m_x_5_89430": 2554.89,
      "m_x_5_89431": 2041.83,
      "m_x_5_90213": 22.02,
      "m_x_5_35004": 2.54,
      "m_x_5_35005": 2.37,
      "m_x_5_35006": 3.99,
      "m_x_5_35007": 4.28,
      "m_x_10_152": 994.55,
      "m_x_10_160": 2688.88,
      "m_x_10_170": 23.7,
      "m_x_5_35771": 688.88,
      "m_x_5_35773": 100.95,
      "m_x_5_35774": 954.9,
      "m_x_5_35775": 600.73,
      "m_x_10_133": 499.99,
      "m_x_10_115": 500,
      "m_x_10_421": 1399.99,
      "m_x_10_427": 1788.85,
      "m_x_10_429": 799.99,
      "m_x_10_434": 799.99,
      "m_x_10_436": 1699.99,
      "m_x_10_437": 1699.99,
      "m_x_10_438": 1699.99,
      "m_x_10_444": 2888.88,
      "m_x_10_446": 1399.99,
      "m_x_10_447": 1399.99,
      "m_x_10_450": 1399.99,
      "m_x_10_469": 1788.86,
      "m_x_10_471": 1788.88,
      "m_x_10_479": 8888.88,
      "m_x_10_490": 1888.47,
      "m_x_5_38373": 2100.1,
      "m_x_5_38374": 790.92,
      "m_x_5_38927": 4.99,
      "m_x_10_671": 1099.99,
      "m_x_10_672": 2199.99,
      "m_x_10_673": 799.99,
      "m_x_10_674": 1699.99,
      "m_x_10_675": 999.99,
      "m_x_10_676": 480,
      "m_x_10_677": 2299.99,
      "m_x_10_679": 1399.99,
      "m_x_10_680": 1699.99,
      "m_x_10_681": 599.99,
      "m_x_10_682": 2299.99,
      "m_x_10_683": 999.99,
      "m_x_10_684": 1999.99,
      "m_x_10_685": 2888.62,
      "m_x_10_686": 1299.99,
      "m_x_10_957": 999.99,
      "m_x_10_1277": 499.99,
      "m_x_10_1278": 499.99,
      "m_x_10_1279": 499.99,
      "m_x_10_1280": 499.99,
      "m_x_10_687": 2199.99,
      "m_x_10_688": 1299.99,
      "m_x_10_943": 1199.99,
      "m_x_10_944": 588.88,
      "m_x_10_945": 1499.99,
      "m_x_10_946": 999.99,
      "m_x_10_947": 1499.99,
      "m_x_10_949": 999.99,
      "m_x_10_950": 799.99,
      "m_x_10_951": 699.99,
      "m_x_10_952": 2199.99,
      "m_x_10_953": 1699.99,
      "m_x_10_954": 1499.99,
      "m_x_10_955": 350,
      "m_x_10_956": 999.99,
      "m_x_10_1570": 1299.99,
      "m_x_10_1571": 815,
      "m_x_10_1572": 1688.88,
      "m_x_10_1573": 290,
      "m_x_10_1574": 290,
      "m_x_10_1575": 290,
      "m_x_10_1576": 290,
      "m_x_10_1577": 290,
      "m_x_10_1578": 290,
      "m_x_10_1587": 200,
      "m_x_10_1605": 1199.99,
      "m_x_10_1606": 1199.99,
      "m_x_10_1607": 1688.88,
      "m_x_10_1772": 1920,
      "m_x_10_1774": 920,
      "m_x_10_1775": 1583,
      "m_x_10_1776": 1639,
      "m_x_10_1777": 1998.02,
      "m_x_10_1282": 599.99,
      "m_x_10_1283": 599.99,
      "m_x_10_1284": 599.99,
      "m_x_10_1285": 599.99,
      "m_x_10_1286": 599.99,
      "m_x_10_1453": 599.99,
      "m_x_10_1456": 24.99,
      "m_x_10_1458": 30.64,
      "m_x_10_1459": 623.5,
      "m_x_10_1460": 623.88,
      "m_x_10_1461": 547.03,
      "m_x_10_1462": 653.05,
      "m_x_10_1463": 699.99,
      "m_x_10_1464": 699.99,
      "m_x_10_1465": 745.6,
      "m_x_10_2036": 1093.12,
      "m_x_10_2097": 888.88,
      "m_x_10_2098": 888.88,
      "m_x_10_2099": 888.88,
      "m_x_10_2100": 888.88,
      "m_x_10_2101": 599.99,
      "m_x_10_2102": 155,
      "m_x_10_2103": 599.99,
      "m_x_10_2104": 599.99,
      "m_x_10_2105": 599.99,
      "m_x_10_2106": 599.99,
      "m_x_10_2107": 599.99,
      "m_x_10_2230": 599.99,
      "m_x_10_2231": 599.99,
      "m_x_10_2232": 599.99,
      "m_x_10_1895": 199.99,
      "m_x_10_1896": 199.99,
      "m_x_10_1897": 199.99,
      "m_x_10_1898": 199.99,
      "m_x_10_1881": 815,
      "m_x_10_2031": 575,
      "m_x_10_2035": 1888.88,
      "m_x_10_2233": 599.99,
      "m_x_10_2234": 599.99,
      "m_x_10_2235": 599.99,
      "m_x_10_2236": 599.99,
      "m_x_10_2237": 533,
      "m_x_10_2238": 511.55,
      "m_x_10_2242": 1599.99,
      "m_x_10_2243": 1599.99,
      "m_x_10_2244": 1599.99,
      "m_x_5_87872": 400,
      "m_x_5_1830": 20.32,
      "m_x_5_31975": 0.66,
      "m_x_5_1832": 10000,
      "m_x_5_31981": 10000,
      "m_x_5_32007": 10000,
      "m_x_5_32010": 1.91,
      "m_x_5_32011": 10000,
      "m_x_5_32012": 10000,
      "m_x_5_31982": 0.53,
      "m_x_5_35786": 25.84,
      "m_x_5_36491": 8.55,
      "m_x_5_41556": 0.94,
      "m_x_5_44402": 2.2,
      "m_x_5_40562": 10000,
      "m_x_5_6250": 0.9,
      "m_x_5_35780": 6.04,
      "m_x_5_2871": 3.37,
      "m_x_5_3843": 3.93,
      "m_x_5_3574": 2.7
    },
    "s_changancheng": {
      "dimai": 78885.49,
      "fengwangjiang": 167.77,
      "shoupijiao": 63,
      "qicaixian": 110.45,
      "fengyu_yi": 2300.64,
      "m_m_5_30852": 21,
      "m_m_5_30853": 89,
      "m_m_5_30828": 4,
      "guajian_bei": 66.83,
      "baihua_bu": 79.29,
      "guajian_yao": 66.13,
      "shuran_bu": 76.9,
      "m_m_5_32001": 0.65,
      "shuran_bag": 35.96,
      "m_m_5_10173": 31.98,
      "wuseshi": 140.96,
      "m_m_5_30856": 22.98,
      "m_m_5_30855": 150.21,
      "geyin_zhang": 46.08,
      "m_m_5_89298": 32.34,
      "m_m_5_30679": 21.11,
      "m_m_5_30847": 8.99,
      "m_m_5_30846": 1.44,
      "yinsi_duan": 134.52,
      "m_m_5_30848": 17.85,
      "m_m_5_32002": 0.66,
      "m_m_5_30850": 144.06,
      "m_m_5_30845": 158.53,
      "m_m_5_31253": 200,
      "m_m_5_30844": 0.55,
      "m_m_5_35718": 15.98,
      "m_m_5_35719": 29.99,
      "m_m_5_30873": 23,
      "m_m_5_90205": 300,
      "m_m_8_614": 449,
      "m_m_5_3819": 78,
      "m_m_8_36148": 1117.27,
      "m_m_5_89474": 2888,
      "m_m_5_30827": 1.24,
      "m_m_5_89970": 165.4,
      "m_m_5_32014": 129.94,
      "m_m_5_31985": 0.64,
      "lucai": 18.67,
      "m_m_5_1831": 12.33,
      "m_m_5_31973": 0.65,
      "m_m_5_30849": 5.9,
      "m_m_5_71293": 49.19,
      "m_m_5_30826": 1.5,
      "m_m_5_30825": 0.09,
      "m_m_5_89171": 10.62,
      "m_m_5_31974": 0.67,
      "m_m_5_71292": 47.52,
      "m_m_5_30824": 0.35,
      "m_m_5_31967": 0.62,
      "m_m_5_71281": 10,
      "m_m_5_30823": 0.22,
      "m_m_5_71277": 35.52,
      "m_m_5_89315": 1680,
      "m_m_5_89969": 130.15,
      "m_m_5_31976": 0.66,
      "m_m_5_89971": 179.85,
      "lushui": 12.1,
      "m_m_5_30875": 0.94,
      "m_m_5_30829": 0.66,
      "m_m_5_30843": 0.68,
      "m_m_5_30874": 27.49,
      "m_m_5_30842": 0.66,
      "m_m_5_5270": 1.97,
      "m_m_5_31977": 0.64,
      "m_m_5_31013": 184.19,
      "gancao": 1.67,
      "m_m_5_31012": 450.14,
      "m_m_5_89172": 22.39,
      "m_m_5_89304": 5294.69,
      "m_m_5_89352": 830.24,
      "m_m_5_71269": 137.89,
      "m_m_5_89346": 780.59,
      "m_m_5_89167": 10.64,
      "m_m_5_89348": 140.45,
      "m_m_5_71285": 101.67,
      "jieyuan_dan": 153.25,
      "m_m_5_30836": 0.48,
      "m_m_5_30832": 0.99,
      "m_m_5_30833": 1.2,
      "m_m_5_31997": 0.64,
      "m_m_5_89324": 44.11,
      "m_m_5_30831": 0.88,
      "m_m_5_89973": 150.18,
      "m_m_5_31996": 0.67,
      "m_m_5_71240": 42.43,
      "m_m_5_31995": 0.67,
      "m_m_5_71266": 24.86,
      "m_m_5_30838": 0.29,
      "shanhu": 2,
      "m_m_5_6646": 0.65,
      "m_m_5_30835": 1.5,
      "m_m_5_89974": 95.34,
      "m_m_5_6648": 3,
      "m_m_5_71267": 55,
      "yaoyin": 159.11,
      "m_m_5_31100": 18.26,
      "shaoyao": 1.37,
      "m_m_5_30834": 6,
      "m_m_5_31998": 0.68,
      "m_m_5_89340": 145.91,
      "m_m_5_89325": 779.57,
      "m_m_5_71258": 64.65,
      "m_m_5_89327": 90,
      "m_m_5_89966": 95.83,
      "m_m_5_31991": 0.65,
      "m_m_5_89377": 588.88,
      "m_m_5_89968": 120.43,
      "m_m_5_31993": 0.67,
      "m_m_5_89376": 666,
      "m_m_5_89965": 113.65,
      "m_m_5_31992": 0.64,
      "m_m_5_89963": 77.23,
      "m_m_5_89169": 10.64,
      "m_m_5_31994": 0.67,
      "m_m_5_89962": 60.15,
      "m_m_5_31139": 4486.2,
      "m_m_5_89964": 80.25,
      "m_m_5_10027": 99.77,
      "m_m_5_89961": 80.4,
      "tiekuang": 1.8,
      "m_m_5_30676": 1.69,
      "m_m_5_30678": 2.3,
      "m_m_5_30674": 2.05,
      "m_m_5_30675": 3.77,
      "m_m_5_89967": 74.32,
      "m_m_5_6246": 0.27,
      "m_m_5_6249": 0.67,
      "m_m_8_25762": 25.37,
      "m_m_5_30841": 4,
      "m_m_5_10172": 31.96,
      "m_m_8_634": 449.9,
      "m_m_5_6068": 1,
      "muban": 21,
      "muliao": 2.09,
      "m_m_5_35707": 6.49,
      "m_m_5_35703": 0.66,
      "qiwuling": 21.64,
      "m_m_5_35716": 8.9,
      "m_m_5_35715": 89.7,
      "zhuzi": 1.73,
      "m_m_5_35567": 1,
      "m_m_5_35704": 0.67,
      "m_m_5_35714": 14.54,
      "m_m_5_35701": 0.66,
      "m_m_5_35713": 14.99,
      "m_m_5_35705": 0.65,
      "m_m_5_35717": 1.5,
      "m_m_5_52337": 1240.11,
      "m_m_5_35772": 984.87,
      "m_m_5_87917": 261.68,
      "m_m_5_87881": 7500,
      "zasui": 2.5,
      "g_5_30681": 0.8,
      "g_5_30680": 0.9,
      "m_x_5_89353": 688,
      "m_x_5_89305": 4800.89,
      "m_x_5_89349": 820.19,
      "m_x_5_89351": 1019.28,
      "m_x_5_89436": 6777.66,
      "m_x_5_89438": 7766.94,
      "m_x_5_89440": 5660.56,
      "m_x_5_89454": 29996.89,
      "m_x_5_89441": 6757.32,
      "m_x_5_89444": 6888,
      "m_x_5_89335": 2000.04,
      "m_x_5_89331": 825.82,
      "m_x_5_89337": 1175,
      "m_x_5_89368": 954.06,
      "m_x_5_89372": 1200,
      "m_x_5_89369": 1222.99,
      "m_x_5_90436": 75,
      "m_x_5_89379": 7666.66,
      "m_x_5_89397": 22222.9,
      "m_x_5_90437": 84.95,
      "m_x_5_89386": 5880.34,
      "m_x_5_89388": 7888.96,
      "m_x_5_89389": 5970.23,
      "m_x_5_89407": 28888,
      "m_x_5_89390": 4499.9,
      "m_x_5_89391": 7660.82,
      "m_x_5_89409": 16968.13,
      "m_x_5_89393": 6668.93,
      "m_x_5_89396": 5554.72,
      "m_x_10_157": 410,
      "m_x_5_20971": 106.99,
      "m_x_5_89317": 1185.01,
      "m_x_5_89319": 70,
      "m_x_5_89426": 3282.7,
      "m_x_5_89427": 2288,
      "m_x_5_89347": 1275.18,
      "m_x_5_89356": 1183.25,
      "m_x_5_89358": 1339.09,
      "m_x_5_89326": 1155.3,
      "m_x_5_89334": 1400,
      "m_x_5_5231": 0.64,
      "m_x_5_5230": 0.75,
      "m_x_5_5229": 0.99,
      "m_x_5_31050": 196,
      "m_x_5_2304": 37301,
      "m_x_5_31055": 199.99,
      "m_x_5_31056": 666,
      "m_x_5_2300": 39999,
      "m_x_5_31058": 85.98,
      "m_x_5_31059": 30,
      "m_x_5_71268": 168.57,
      "m_x_5_71270": 111,
      "m_x_5_71271": 123.98,
      "m_x_5_71272": 148.29,
      "m_x_5_71273": 143.2,
      "m_x_5_71275": 93.51,
      "m_x_5_71276": 24.19,
      "m_x_5_71278": 32.87,
      "m_x_5_71279": 111,
      "m_x_5_71280": 22.13,
      "m_x_5_3485": 360.48,
      "m_x_5_71282": 8.98,
      "m_x_5_3236": 5489.99,
      "m_x_5_71283": 188,
      "m_x_5_2292": 3994,
      "m_x_5_71284": 77.48,
      "m_x_5_71286": 102.5,
      "m_x_5_71287": 102.3,
      "m_x_5_71288": 146.34,
      "m_x_5_71289": 9.64,
      "m_x_5_71290": 20,
      "m_x_5_71291": 20.01,
      "m_x_5_71294": 727.99,
      "m_x_5_71295": 388.25,
      "m_x_5_71296": 998.88,
      "m_x_5_71297": 500,
      "m_x_5_71298": 44.54,
      "m_x_5_71299": 1500,
      "m_x_5_2303": 34997.99,
      "m_x_5_71300": 8.83,
      "m_x_5_89316": 2098.37,
      "m_x_5_89318": 2836.06,
      "m_x_5_89361": 30.27,
      "m_x_5_89362": 65.48,
      "m_x_5_89363": 91.78,
      "m_x_5_89364": 299.2,
      "m_x_5_89365": 250.09,
      "m_x_5_3810": 41.66,
      "m_x_5_3811": 50,
      "m_x_8_25": 32.19,
      "m_x_8_26": 30.97,
      "m_x_5_3797": 45.88,
      "m_x_8_23": 28.88,
      "m_x_5_2467": 54.21,
      "m_x_8_37": 8.84,
      "m_x_8_31": 23.87,
      "m_x_8_70": 145.1,
      "m_x_5_22145": 79.5,
      "m_x_5_22917": 70.49,
      "m_x_5_22981": 126.69,
      "m_x_5_31252": 420,
      "m_x_5_31254": 422.17,
      "m_x_5_71196": 2147.45,
      "m_x_5_71198": 2459.47,
      "m_x_5_71199": 1298.27,
      "m_x_5_71200": 2500.46,
      "m_x_5_71201": 1368,
      "m_x_5_71202": 1988,
      "m_x_5_71204": 2841,
      "m_x_5_71205": 2502.95,
      "m_x_5_71206": 2144.82,
      "m_x_5_71207": 2400.86,
      "m_x_5_71215": 2345.5,
      "m_x_5_71219": 754.51,
      "m_x_5_71221": 679.05,
      "m_x_5_71222": 519.27,
      "m_x_5_71224": 966.11,
      "m_x_5_71225": 999.49,
      "m_x_5_71226": 876.79,
      "m_x_5_71228": 999.03,
      "m_x_5_71229": 499.28,
      "m_x_5_71230": 555.33,
      "m_x_5_71237": 342.39,
      "m_x_5_71239": 1056.74,
      "m_x_5_89461": 1327.13,
      "m_x_5_89462": 1997.29,
      "m_x_5_89463": 1931.51,
      "m_x_5_89464": 1346.59,
      "m_x_5_89465": 1456.97,
      "m_x_5_89466": 1222.11,
      "m_x_5_89467": 1567.3,
      "m_x_5_89468": 1399.96,
      "m_x_5_89469": 1773.69,
      "m_x_5_89470": 2288,
      "m_x_5_89471": 2600.88,
      "m_x_5_89472": 2388.88,
      "m_x_5_31099": 13.87,
      "m_x_5_31103": 19.99,
      "m_x_5_31104": 32.28,
      "m_x_5_31105": 111.11,
      "m_x_5_31107": 18.96,
      "m_x_5_31108": 32.88,
      "m_x_5_40538": 55,
      "m_x_5_71242": 147.96,
      "m_x_5_71244": 128.36,
      "m_x_5_71245": 126.99,
      "m_x_5_71246": 136.59,
      "m_x_5_71247": 109.59,
      "m_x_5_71248": 196.99,
      "m_x_5_71250": 100,
      "m_x_5_71251": 22.97,
      "m_x_5_71252": 57.33,
      "m_x_5_71253": 58.88,
      "m_x_5_71254": 24.52,
      "m_x_5_71255": 66.66,
      "m_x_5_71256": 45,
      "m_x_5_71259": 149,
      "m_x_5_71260": 79.67,
      "m_x_5_71261": 175.72,
      "m_x_5_71262": 101.82,
      "m_x_5_71264": 44,
      "m_x_5_71265": 45.69,
      "m_x_5_89341": 158,
      "m_x_5_89342": 144,
      "m_x_5_89343": 75,
      "m_x_5_89345": 93.9,
      "m_x_5_89724": 200,
      "m_x_5_2631": 55.53,
      "m_x_8_629": 449.01,
      "m_x_5_2189": 80,
      "m_x_5_2594": 80,
      "m_x_5_5044": 90.9,
      "m_x_5_6024": 1,
      "m_x_5_6073": 1,
      "m_x_5_6247": 0.98,
      "m_x_5_6248": 0.98,
      "m_x_5_10028": 69.24,
      "m_x_5_31140": 69.05,
      "m_x_5_31141": 500.88,
      "m_x_5_31142": 555,
      "m_x_5_31143": 500,
      "m_x_5_40539": 488.05,
      "m_x_5_71129": 134.46,
      "m_x_5_71130": 130.37,
      "m_x_5_71131": 90,
      "m_x_5_71132": 172.48,
      "m_x_5_71133": 1918.49,
      "m_x_5_71140": 2500.84,
      "m_x_5_71141": 1879.44,
      "m_x_5_71143": 1985,
      "m_x_5_71144": 1845.29,
      "m_x_5_71145": 1884.57,
      "m_x_5_71148": 1688.19,
      "m_x_5_71150": 2068.94,
      "m_x_5_71151": 1551.83,
      "m_x_5_71159": 2099.78,
      "m_x_5_71160": 2052.04,
      "m_x_5_71163": 755.84,
      "m_x_5_71166": 333.29,
      "m_x_5_71167": 787.55,
      "m_x_5_71168": 749.5,
      "m_x_5_71169": 888,
      "m_x_5_71170": 888,
      "m_x_5_71171": 899.31,
      "m_x_5_71173": 611.71,
      "m_x_5_71174": 888.99,
      "m_x_5_71176": 999.95,
      "m_x_5_71184": 899.45,
      "m_x_5_71185": 884.11,
      "m_x_5_71189": 35.01,
      "m_x_5_71190": 44,
      "m_x_5_71191": 40,
      "m_x_5_54537": 20.98,
      "m_x_5_89415": 1188.17,
      "m_x_5_89416": 1496,
      "m_x_5_89417": 1416,
      "m_x_5_89418": 1200.68,
      "m_x_5_89419": 2399.48,
      "m_x_5_89420": 1900.61,
      "m_x_5_89421": 1322.53,
      "m_x_5_89422": 1493.94,
      "m_x_5_89423": 1380,
      "m_x_5_89424": 1400.91,
      "m_x_5_89425": 1587.02,
      "m_x_5_89429": 1866.51,
      "m_x_5_89430": 2501,
      "m_x_5_90213": 16,
      "m_x_5_35004": 2.59,
      "m_x_5_35006": 2.13,
      "m_x_5_35007": 3.19,
      "m_x_10_151": 1399.99,
      "m_x_10_153": 999.99,
      "m_x_10_159": 999.99,
      "m_x_10_170": 40.5,
      "m_x_10_97": 299.99,
      "m_x_10_98": 299.99,
      "m_x_10_108": 299.99,
      "m_x_5_35771": 595.57,
      "m_x_5_35773": 52.32,
      "m_x_10_134": 395,
      "m_x_10_148": 111,
      "m_x_10_150": 1888.88,
      "m_x_10_114": 599.99,
      "m_x_10_122": 499.99,
      "m_x_10_493": 1100,
      "m_x_5_38927": 6.8,
      "m_x_10_682": 1139.66,
      "m_x_10_683": 999.99,
      "m_x_10_957": 999.99,
      "m_x_10_1083": 1299.99,
      "m_x_10_1085": 888.88,
      "m_x_10_1090": 699.99,
      "m_x_10_688": 1099.99,
      "m_x_10_945": 735,
      "m_x_10_952": 2399.99,
      "m_x_10_955": 1299.99,
      "m_x_10_956": 999.99,
      "m_x_10_1573": 699.99,
      "m_x_10_1575": 699.99,
      "m_x_10_1477": 1199.99,
      "m_x_10_2230": 570,
      "m_x_10_2231": 599,
      "m_x_10_2232": 194,
      "m_x_10_1895": 65.01,
      "m_x_10_1896": 65.01,
      "m_x_10_1897": 65,
      "m_x_10_1898": 67,
      "m_x_10_2233": 570,
      "m_x_10_2234": 570,
      "m_x_10_2235": 550,
      "m_x_10_2236": 198,
      "m_x_10_2238": 570,
      "m_x_5_90212": 399,
      "m_x_5_1830": 18.6,
      "m_x_5_32008": 0.96,
      "m_x_5_32010": 3.58,
      "m_x_5_32011": 10000,
      "m_x_5_31982": 0.63,
      "m_x_5_54059": 2,
      "m_x_5_6250": 0.74,
      "m_x_5_6251": 1.49,
      "m_x_5_35780": 6.99,
      "m_x_5_3574": 2.13
    },
    "s_douzhuang": {
      "dimai": 85998,
      "fengwangjiang": 177.4,
      "shoupijiao": 83.26,
      "qicaixian": 139.97,
      "bairanxian": 3.12,
      "fengyu_yi": 970.66,
      "m_m_5_30852": 17.98,
      "m_m_5_30853": 85.76,
      "m_m_5_30828": 5.15,
      "m_m_5_89165": 10.64,
      "m_m_5_32000": 0.62,
      "guajian_bei": 55.65,
      "baihua_bu": 97,
      "guajian_yao": 69.91,
      "shuran_bu": 105.99,
      "m_m_5_32001": 0.66,
      "shuran_bag": 18,
      "wuseshi": 162.84,
      "m_m_5_30856": 15.36,
      "m_m_5_30855": 152.43,
      "geyin_zhang": 95,
      "m_m_5_89298": 33.34,
      "m_m_5_30679": 17,
      "m_m_5_30847": 9.33,
      "m_m_5_30846": 1.79,
      "yinsi_duan": 161.1,
      "m_m_5_30848": 20,
      "m_m_5_30850": 148.13,
      "m_m_5_30845": 159.31,
      "m_m_5_31397": 2.03,
      "m_m_5_89435": 6100,
      "m_m_5_31253": 198.37,
      "m_m_5_30844": 3.36,
      "m_m_5_30873": 42,
      "m_m_8_614": 300,
      "shanshui_juan": 200.21,
      "m_m_5_3779": 9.99,
      "m_m_8_36148": 866.11,
      "m_m_5_30827": 1.3,
      "m_m_5_89970": 252.32,
      "m_m_5_31985": 0.69,
      "lucai": 16.87,
      "m_m_5_1831": 12.91,
      "m_m_5_31973": 0.6,
      "m_m_5_30849": 6,
      "m_m_5_71293": 37.94,
      "m_m_5_30826": 0.6,
      "m_m_5_89171": 10.65,
      "m_m_5_31968": 0.68,
      "m_m_5_71292": 35.14,
      "m_m_5_30824": 0.17,
      "m_m_5_71281": 9,
      "m_m_5_30823": 0.3,
      "m_m_5_31969": 0.69,
      "m_m_5_71277": 35.62,
      "m_m_5_89315": 1259.87,
      "m_m_5_89969": 125.62,
      "m_m_5_89971": 208.44,
      "lushui": 16.82,
      "m_m_5_30875": 2,
      "m_m_5_30843": 1,
      "m_m_5_30874": 49.34,
      "m_m_5_30842": 0.55,
      "m_m_5_5270": 0.89,
      "m_m_5_5269": 0.04,
      "m_m_5_31977": 0.67,
      "m_m_5_31013": 170.31,
      "gancao": 2.7,
      "m_m_5_31012": 315.66,
      "m_m_5_89172": 22.49,
      "m_m_5_89304": 5500,
      "m_m_5_26057": 3000,
      "m_m_5_89352": 757.46,
      "m_m_5_89350": 730.22,
      "m_m_5_71269": 108.49,
      "m_m_5_89346": 758.83,
      "m_m_5_89167": 10.63,
      "m_m_5_89348": 235.62,
      "m_m_5_71285": 80,
      "jieyuan_dan": 150.43,
      "m_m_5_30836": 0.6,
      "m_m_5_30832": 0.96,
      "m_m_5_30833": 1.2,
      "m_m_5_89324": 75.58,
      "m_m_5_30831": 1.7,
      "m_m_5_89973": 180.97,
      "m_m_5_31996": 0.68,
      "m_m_5_71240": 76.4,
      "m_m_5_31995": 0.67,
      "m_m_5_71266": 48.17,
      "m_m_5_30838": 0.99,
      "shanhu": 4.02,
      "m_m_5_6646": 1.52,
      "m_m_5_30835": 2.86,
      "m_m_5_89974": 48.17,
      "m_m_5_6648": 3.96,
      "m_m_5_71267": 62.37,
      "m_m_5_90029": 1200,
      "yaoyin": 238.11,
      "m_m_5_31100": 45,
      "shaoyao": 1.97,
      "m_m_5_31102": 0.09,
      "m_m_5_30834": 1.69,
      "m_m_5_89328": 949.43,
      "m_m_5_89340": 80,
      "m_m_5_89325": 749.32,
      "m_m_5_71258": 48.28,
      "m_m_5_31999": 0.66,
      "m_m_5_89327": 90,
      "m_m_5_89966": 128,
      "m_m_5_10176": 3.39,
      "m_m_5_31991": 0.64,
      "m_m_5_89968": 75.04,
      "m_m_5_89376": 280.94,
      "m_m_5_89965": 100.3,
      "m_m_5_31992": 0.67,
      "m_m_5_89963": 58.35,
      "m_m_5_71192": 15.22,
      "m_m_5_89169": 10.64,
      "m_m_5_31994": 0.69,
      "m_m_5_89962": 76,
      "m_m_5_31139": 3899.99,
      "m_m_5_89964": 55.6,
      "m_m_5_10027": 200.99,
      "m_m_5_89961": 50.27,
      "tiekuang": 3.89,
      "m_m_5_30676": 2.18,
      "m_m_5_30678": 1.43,
      "m_m_5_30674": 3.86,
      "m_m_5_30675": 2.96,
      "m_m_5_89967": 91.01,
      "m_m_5_6246": 0.09,
      "m_m_5_6249": 0.51,
      "m_m_5_32787": 66.99,
      "m_m_5_30841": 3.01,
      "m_m_5_35708": 6.49,
      "m_m_8_636": 300.18,
      "m_m_5_2578": 4.99,
      "muban": 20.3,
      "muliao": 1.95,
      "m_m_5_35707": 6.46,
      "qiwuling": 21.04,
      "m_m_5_35716": 16.85,
      "m_m_5_35715": 89.1,
      "zhuzi": 1.57,
      "m_m_5_35567": 1.57,
      "m_m_5_35704": 0.67,
      "m_m_5_35714": 24.49,
      "m_m_5_35701": 0.65,
      "m_m_5_35713": 16.23,
      "m_m_5_89260": 30000,
      "m_m_10_1779": 859.98,
      "m_m_5_35717": 2.75,
      "m_m_5_52337": 1500,
      "m_m_5_35772": 1415.68,
      "m_m_5_87917": 394.93,
      "m_m_5_87881": 7300.87,
      "zasui": 0.43,
      "g_5_30681": 0.69,
      "g_5_30680": 0.67,
      "m_x_5_89353": 1107,
      "m_x_5_89349": 870,
      "m_x_5_89355": 1592,
      "m_x_5_89351": 940.43,
      "m_x_5_89434": 5000.45,
      "m_x_5_89438": 6000.84,
      "m_x_5_89441": 5395.98,
      "m_x_5_89455": 20500.44,
      "m_x_5_89443": 6199,
      "m_x_5_89445": 5628.65,
      "m_x_5_89329": 992.43,
      "m_x_5_89335": 1988.27,
      "m_x_5_89331": 758.52,
      "m_x_5_89337": 1319,
      "m_x_5_89368": 998.98,
      "m_x_5_89372": 1500.21,
      "m_x_5_89369": 744.49,
      "m_x_5_90436": 70.55,
      "m_x_5_89379": 5787.97,
      "m_x_5_89380": 6629.74,
      "m_x_5_90437": 30.82,
      "m_x_5_89383": 5346.18,
      "m_x_5_89385": 4050,
      "m_x_5_89386": 6400.13,
      "m_x_5_89389": 5708.91,
      "m_x_5_89390": 5079.13,
      "m_x_5_89391": 5550.28,
      "m_x_5_89393": 6400.52,
      "m_x_5_89396": 5111.55,
      "m_x_5_20971": 199.97,
      "m_x_10_2229": 399.99,
      "m_x_5_89317": 1414.25,
      "m_x_10_2241": 1088.65,
      "m_x_5_89320": 2999,
      "m_x_5_89426": 1899.98,
      "m_x_5_89310": 9999.34,
      "m_x_5_89347": 1280.4,
      "m_x_5_89356": 1872.99,
      "m_x_5_89358": 1220.75,
      "m_x_5_89326": 1299.88,
      "m_x_5_89334": 1989.09,
      "m_x_5_5232": 0.97,
      "m_x_5_5231": 0.9,
      "m_x_5_5230": 0.97,
      "m_x_5_5229": 0.92,
      "m_x_5_31050": 16.67,
      "m_x_5_2304": 12222.11,
      "m_x_5_31051": 788.67,
      "m_x_5_31055": 10000,
      "m_x_5_2299": 14480.01,
      "m_x_5_31056": 39.57,
      "m_x_5_31058": 10000,
      "m_x_5_31060": 502.31,
      "m_x_5_71268": 98.34,
      "m_x_5_71270": 79.68,
      "m_x_5_71271": 96.49,
      "m_x_5_71272": 156.63,
      "m_x_5_71273": 160.32,
      "m_x_5_71274": 105.44,
      "m_x_5_71275": 80.37,
      "m_x_5_71276": 33.3,
      "m_x_5_71278": 8.97,
      "m_x_5_71279": 10,
      "m_x_5_71280": 30,
      "m_x_5_3485": 219.35,
      "m_x_5_71282": 7.05,
      "m_x_5_3236": 2000,
      "m_x_5_71284": 82.19,
      "m_x_5_71286": 80,
      "m_x_5_71287": 89.6,
      "m_x_5_71288": 80.32,
      "m_x_5_71289": 809,
      "m_x_5_71290": 13.99,
      "m_x_5_71291": 34,
      "m_x_5_71294": 794.52,
      "m_x_5_71295": 573,
      "m_x_5_71296": 579,
      "m_x_5_71297": 288,
      "m_x_5_71298": 44.17,
      "m_x_5_71299": 1100.24,
      "m_x_5_71300": 8.99,
      "m_x_5_89316": 1440,
      "m_x_5_89318": 2079.41,
      "m_x_5_89361": 54,
      "m_x_5_89362": 73,
      "m_x_5_89363": 45.09,
      "m_x_5_89364": 110.68,
      "m_x_5_89365": 172.92,
      "m_x_8_618": 600.28,
      "m_x_8_616": 488.88,
      "m_x_8_617": 200.11,
      "m_x_8_615": 444.16,
      "m_x_5_3810": 80.04,
      "m_x_5_3811": 60.64,
      "m_x_8_26": 30.16,
      "m_x_8_21": 0.5,
      "m_x_5_3782": 3,
      "m_x_5_3797": 4.51,
      "m_x_5_2433": 11.94,
      "m_x_8_621": 507.89,
      "m_x_8_623": 488.35,
      "m_x_8_624": 743,
      "m_x_8_24": 0.47,
      "m_x_8_627": 642,
      "m_x_5_2467": 15,
      "m_x_8_37": 2.02,
      "m_x_8_31": 9.52,
      "m_x_8_69": 108.58,
      "m_x_8_70": 221.84,
      "m_x_5_22145": 94.73,
      "m_x_5_22917": 81.05,
      "m_x_5_22981": 128,
      "m_x_5_31252": 224.08,
      "m_x_5_31254": 249,
      "m_x_5_71193": 1496.63,
      "m_x_5_71194": 2643.83,
      "m_x_5_71195": 2337.65,
      "m_x_5_71198": 1351.54,
      "m_x_5_71199": 1125.53,
      "m_x_5_71201": 1270.65,
      "m_x_5_71202": 1020.11,
      "m_x_5_71203": 1848.15,
      "m_x_5_71204": 1353.45,
      "m_x_5_71205": 899.05,
      "m_x_5_71206": 1723.51,
      "m_x_5_71207": 1995,
      "m_x_5_71214": 1020.4,
      "m_x_5_71221": 537.67,
      "m_x_5_71222": 370.12,
      "m_x_5_71223": 293.72,
      "m_x_5_71224": 285.09,
      "m_x_5_71225": 321.6,
      "m_x_5_71226": 372.28,
      "m_x_5_71227": 293.73,
      "m_x_5_71229": 332.58,
      "m_x_5_71231": 294.69,
      "m_x_5_71237": 320.03,
      "m_x_5_71239": 365.57,
      "m_x_5_89461": 1220.01,
      "m_x_5_89462": 1799.6,
      "m_x_5_89463": 1499.4,
      "m_x_5_89464": 1461.24,
      "m_x_5_89465": 1943.99,
      "m_x_5_89466": 999.99,
      "m_x_5_89467": 1100,
      "m_x_5_89468": 1170.39,
      "m_x_5_89469": 1060.99,
      "m_x_5_89470": 1856.85,
      "m_x_5_89472": 2284.95,
      "m_x_5_31099": 46.96,
      "m_x_5_31103": 9.82,
      "m_x_5_31104": 40.65,
      "m_x_5_31105": 135.8,
      "m_x_5_31106": 4,
      "m_x_5_31107": 49.98,
      "m_x_5_31108": 98.03,
      "m_x_5_40538": 68.9,
      "m_x_5_71242": 164.44,
      "m_x_5_71243": 139.15,
      "m_x_5_71244": 90,
      "m_x_5_71245": 50.12,
      "m_x_5_71246": 124.42,
      "m_x_5_71247": 126.31,
      "m_x_5_71248": 93.62,
      "m_x_5_71250": 24,
      "m_x_5_71251": 63.85,
      "m_x_5_71252": 20,
      "m_x_5_71254": 44.88,
      "m_x_5_71255": 90.82,
      "m_x_5_71256": 68.54,
      "m_x_5_71259": 200.56,
      "m_x_5_71260": 158.8,
      "m_x_5_71261": 183.99,
      "m_x_5_71262": 80.33,
      "m_x_5_71263": 88.25,
      "m_x_5_71264": 41.31,
      "m_x_5_71265": 51,
      "m_x_5_89341": 90.06,
      "m_x_5_89342": 31.98,
      "m_x_5_89343": 90.4,
      "m_x_5_89344": 190.29,
      "m_x_5_89345": 81.01,
      "m_x_5_89724": 1200,
      "m_x_5_2631": 89.59,
      "m_x_8_629": 325.81,
      "m_x_8_631": 588.88,
      "m_x_5_2189": 6.11,
      "m_x_5_5044": 1.94,
      "m_x_5_6076": 0.88,
      "m_x_5_6247": 0.69,
      "m_x_5_6248": 1.05,
      "m_x_5_10028": 68,
      "m_x_5_31140": 320.1,
      "m_x_5_31141": 376.74,
      "m_x_5_31142": 414,
      "m_x_5_31143": 357,
      "m_x_5_40539": 128.79,
      "m_x_5_71129": 113.41,
      "m_x_5_71130": 107,
      "m_x_5_71131": 117,
      "m_x_5_71132": 290.63,
      "m_x_5_71133": 1100.75,
      "m_x_5_71134": 1960.42,
      "m_x_5_71135": 1599.52,
      "m_x_5_71136": 1089.65,
      "m_x_5_71138": 1585.97,
      "m_x_5_71139": 2279.5,
      "m_x_5_71140": 1989.57,
      "m_x_5_71141": 1689.24,
      "m_x_5_71143": 1846.64,
      "m_x_5_71144": 1662.88,
      "m_x_5_71145": 1097.81,
      "m_x_5_71146": 1800,
      "m_x_5_71147": 1769.99,
      "m_x_5_71148": 1129,
      "m_x_5_71149": 1868.64,
      "m_x_5_71150": 1714.97,
      "m_x_5_71151": 1230.44,
      "m_x_5_71152": 2200.61,
      "m_x_5_71160": 1070.86,
      "m_x_5_71164": 422.48,
      "m_x_5_71166": 318.3,
      "m_x_5_71167": 375.8,
      "m_x_5_71168": 306.32,
      "m_x_5_71169": 277.9,
      "m_x_5_71171": 322.79,
      "m_x_5_71172": 294.18,
      "m_x_5_71173": 280.17,
      "m_x_5_71174": 338.66,
      "m_x_5_71175": 898.83,
      "m_x_5_71184": 280.41,
      "m_x_5_71185": 366.71,
      "m_x_5_71186": 249.6,
      "m_x_5_71187": 999.07,
      "m_x_5_71189": 66.32,
      "m_x_5_71190": 48.6,
      "m_x_5_71191": 80.01,
      "m_x_5_54537": 99.64,
      "m_x_5_89415": 1668.45,
      "m_x_5_89416": 1496.58,
      "m_x_5_89417": 1350.99,
      "m_x_5_89418": 1100.97,
      "m_x_5_89419": 2799.08,
      "m_x_5_89420": 1290,
      "m_x_5_89421": 943,
      "m_x_5_89422": 1325.22,
      "m_x_5_89423": 1459.16,
      "m_x_5_89425": 1850.46,
      "m_x_5_89429": 2499.88,
      "m_x_5_90213": 3,
      "m_x_5_35004": 2.3,
      "m_x_5_35005": 1.88,
      "m_x_5_35006": 2.19,
      "m_x_5_35007": 3.48,
      "m_x_5_35044": 0.07,
      "m_x_10_104": 888.12,
      "m_x_10_105": 888,
      "m_x_5_35771": 799.99,
      "m_x_5_35773": 196,
      "m_x_5_35775": 339.97,
      "m_x_10_133": 145.11,
      "m_x_10_112": 888.99,
      "m_x_10_120": 73,
      "m_x_10_433": 430,
      "m_x_10_434": 1450,
      "m_x_5_38127": 600.31,
      "m_x_5_38373": 3449.89,
      "m_x_5_38374": 2580.21,
      "m_x_5_38927": 5,
      "m_x_10_1454": 35,
      "m_x_10_1458": 34.05,
      "m_x_10_2230": 318.75,
      "m_x_10_2231": 399.99,
      "m_x_10_2232": 311.34,
      "m_x_10_2233": 289.2,
      "m_x_10_2234": 272.65,
      "m_x_10_2235": 268.91,
      "m_x_10_2236": 309.97,
      "m_x_10_2237": 168.26,
      "m_x_10_2238": 299.99,
      "m_x_10_2242": 1176.81,
      "m_x_10_2243": 1249,
      "m_x_10_2244": 1198.05,
      "m_x_5_87875": 569.25,
      "m_x_5_87874": 588.88,
      "m_x_5_87873": 588.59,
      "m_x_5_87871": 488,
      "m_x_5_87870": 588,
      "m_x_5_87867": 588.88,
      "m_x_5_87863": 588.88,
      "m_x_5_87862": 588.88,
      "m_x_5_90212": 500,
      "m_x_5_1830": 20.09,
      "m_x_5_31975": 0.66,
      "m_x_5_1832": 10000,
      "m_x_5_31981": 10000,
      "m_x_5_32010": 1.63,
      "m_x_5_31980": 0.65,
      "m_x_5_34184": 29.99,
      "m_x_5_35786": 800.8,
      "m_x_5_36491": 2.11,
      "m_x_5_54059": 5,
      "m_x_5_81662": 8.46,
      "m_x_5_40562": 37.18,
      "m_x_5_6250": 0.8,
      "m_x_5_6251": 2.99,
      "m_x_5_35780": 6.47,
      "m_x_5_2871": 5.75,
      "m_x_5_3573": 0.97,
      "m_x_5_3574": 1.66
    },
    "s_qiankun": {
      "dimai": 74000,
      "fengwangjiang": 184.51,
      "shoupijiao": 70.28,
      "qicaixian": 120.5,
      "bairanxian": 3.4,
      "fengyu_yi": 990,
      "m_m_5_30852": 18.09,
      "m_m_5_30853": 91.19,
      "m_m_5_30828": 8.39,
      "m_m_5_89165": 10.63,
      "guajian_bei": 58.87,
      "baihua_bu": 70.09,
      "guajian_yao": 90.94,
      "shuran_bu": 100.31,
      "m_m_5_32001": 0.67,
      "shuran_bag": 19.9,
      "m_m_5_10173": 31.99,
      "wuseshi": 140.52,
      "m_m_5_30856": 13,
      "m_m_5_30855": 159.16,
      "geyin_zhang": 169.33,
      "m_m_5_89298": 43.58,
      "m_m_5_30679": 20.35,
      "m_m_5_30847": 12.11,
      "m_m_5_30846": 2.44,
      "yinsi_duan": 137.89,
      "m_m_5_32003": 0.7,
      "m_m_5_30848": 26.13,
      "m_m_5_30850": 136.18,
      "m_m_5_30845": 175.12,
      "m_m_5_31397": 1,
      "m_m_5_89433": 6666,
      "m_m_5_89435": 5999.03,
      "m_m_5_30844": 0.98,
      "m_m_5_35718": 16.18,
      "m_m_5_35719": 32.49,
      "m_m_5_30873": 39.95,
      "m_m_5_90205": 24.98,
      "m_m_8_614": 399.32,
      "shanshui_juan": 110.2,
      "m_m_5_3779": 3.72,
      "m_m_8_36148": 1098.16,
      "m_m_5_30827": 1.1,
      "m_m_5_89970": 248.7,
      "m_m_5_32014": 120.81,
      "m_m_5_31978": 0.67,
      "lucai": 17.64,
      "m_m_5_1831": 15.21,
      "m_m_5_31973": 0.78,
      "m_m_5_30849": 6,
      "m_m_5_71293": 42.3,
      "m_m_5_30826": 1.21,
      "m_m_5_30825": 0.39,
      "m_m_5_89171": 10.69,
      "m_m_5_31968": 0.65,
      "m_m_5_71292": 45.01,
      "m_m_5_30824": 0.6,
      "m_m_5_30823": 0.85,
      "m_m_5_71277": 31,
      "m_m_5_89315": 1523.98,
      "m_m_5_89969": 129.8,
      "m_m_5_89303": 3500,
      "m_m_5_89971": 212,
      "lushui": 13.84,
      "m_m_5_30875": 1.33,
      "m_m_5_30829": 0.99,
      "m_m_5_30843": 0.53,
      "m_m_5_30874": 28.63,
      "m_m_5_30842": 0.92,
      "m_m_5_5270": 1.03,
      "m_m_5_5269": 0.1,
      "m_m_5_31977": 0.65,
      "m_m_5_31013": 197.76,
      "gancao": 3.64,
      "m_m_5_31012": 350,
      "m_m_5_89172": 20,
      "m_m_5_26057": 4493,
      "m_m_5_26231": 0.99,
      "m_m_5_89352": 732.2,
      "m_m_5_89350": 799,
      "m_m_5_71269": 94.24,
      "m_m_5_89346": 722.99,
      "m_m_5_89167": 10.74,
      "m_m_5_89348": 147.79,
      "m_m_5_71285": 103.08,
      "jieyuan_dan": 65.27,
      "m_m_5_30836": 1.39,
      "m_m_5_30832": 2,
      "m_m_5_30833": 2.2,
      "m_m_5_89324": 84.99,
      "m_m_5_30831": 3,
      "m_m_5_89973": 176.63,
      "m_m_5_71241": 52.84,
      "m_m_5_71240": 80.52,
      "m_m_5_31995": 0.65,
      "m_m_5_71266": 72.01,
      "m_m_5_30838": 1,
      "shanhu": 3,
      "m_m_5_6646": 0.98,
      "m_m_5_30835": 2.71,
      "m_m_5_89974": 69.1,
      "m_m_5_6648": 3.71,
      "m_m_5_71267": 84,
      "m_m_5_90029": 496.95,
      "m_m_5_89168": 22.38,
      "yaoyin": 172,
      "m_m_5_31100": 90.8,
      "shaoyao": 2.29,
      "m_m_5_31102": 0.18,
      "m_m_5_30834": 2.34,
      "m_m_5_89328": 881.5,
      "m_m_5_89340": 146.97,
      "m_m_5_89325": 761.51,
      "m_m_5_71258": 99.21,
      "m_m_5_89327": 75.91,
      "m_m_5_89966": 61.46,
      "m_m_5_10176": 3.14,
      "m_m_5_31991": 0.64,
      "m_m_5_89377": 444.42,
      "m_m_5_89968": 129,
      "m_m_5_31993": 0.67,
      "m_m_5_89376": 350.13,
      "m_m_5_89965": 150.57,
      "m_m_5_31992": 0.69,
      "m_m_5_89963": 80,
      "m_m_5_71192": 28,
      "m_m_5_89169": 10.63,
      "m_m_5_31994": 0.74,
      "m_m_5_89962": 65.25,
      "m_m_5_31139": 4300,
      "m_m_5_89964": 66.5,
      "m_m_5_10027": 69.09,
      "m_m_5_89961": 60,
      "tiekuang": 3.41,
      "m_m_5_30676": 3.02,
      "m_m_5_30678": 2.3,
      "m_m_5_30674": 2.89,
      "m_m_5_30675": 6,
      "m_m_5_89967": 100.93,
      "m_m_5_6246": 0.26,
      "m_m_5_32787": 24.49,
      "m_m_5_30841": 3.91,
      "m_m_5_10172": 29.11,
      "m_m_5_35708": 6.49,
      "m_m_8_632": 330.68,
      "m_m_8_634": 350,
      "m_m_8_636": 349.14,
      "m_m_5_2578": 8.11,
      "m_m_5_6068": 1.01,
      "muban": 29.84,
      "muliao": 2.59,
      "qiwuling": 24,
      "m_m_5_35716": 12.99,
      "m_m_5_35715": 14.25,
      "zhuzi": 2.4,
      "m_m_5_35567": 2.72,
      "m_m_5_35714": 23.7,
      "m_m_5_35713": 15.07,
      "m_m_10_1778": 939.74,
      "m_m_10_1779": 700.85,
      "m_m_5_35717": 1.64,
      "m_m_10_2037": 1310.9,
      "m_m_10_164": 59.04,
      "m_m_5_52337": 1193.9,
      "m_m_5_35772": 1250.18,
      "m_m_5_87917": 322.81,
      "m_m_5_87881": 7444.25,
      "zasui": 0.48,
      "g_5_30681": 1.21,
      "g_5_30680": 1.39,
      "m_x_5_89353": 811.99,
      "m_x_5_89359": 1200,
      "m_x_5_89308": 5280.33,
      "m_x_5_89349": 868.26,
      "m_x_5_89355": 1418.38,
      "m_x_5_89351": 520,
      "m_x_5_89357": 1800,
      "m_x_5_89434": 7887.35,
      "m_x_5_89448": 35548,
      "m_x_5_89436": 5500.6,
      "m_x_5_89450": 27734.03,
      "m_x_5_89438": 4500.07,
      "m_x_5_89439": 4942.34,
      "m_x_5_89440": 5855.55,
      "m_x_5_89441": 4666.6,
      "m_x_5_89443": 5388.08,
      "m_x_5_89444": 8078.55,
      "m_x_5_89445": 4288.91,
      "m_x_5_89446": 9689.16,
      "m_x_5_89329": 729.12,
      "m_x_5_89335": 1200.5,
      "m_x_5_89330": 685.36,
      "m_x_5_89336": 2738.52,
      "m_x_5_89331": 743.53,
      "m_x_5_89337": 1110.01,
      "m_x_5_89368": 980.17,
      "m_x_5_89372": 1450.01,
      "m_x_5_89369": 760.01,
      "m_x_5_90436": 70.88,
      "m_x_5_89379": 4500.54,
      "m_x_5_89397": 22997.89,
      "m_x_5_89380": 4966.32,
      "m_x_5_90437": 60.88,
      "m_x_5_89383": 6000.26,
      "m_x_5_89384": 4111.01,
      "m_x_5_89385": 5807,
      "m_x_5_89386": 3555.49,
      "m_x_5_89388": 6539.36,
      "m_x_5_89389": 4796.24,
      "m_x_5_89390": 9999,
      "m_x_5_89391": 5285.97,
      "m_x_5_89409": 35308,
      "m_x_5_89392": 3699.8,
      "m_x_5_89393": 6162.92,
      "m_x_5_89394": 4545.99,
      "m_x_5_89395": 12800.32,
      "m_x_5_89396": 5149.16,
      "m_x_10_157": 600.91,
      "m_x_5_20971": 122.71,
      "m_x_5_38122": 884.55,
      "m_x_10_1281": 271.77,
      "m_x_10_2229": 435.18,
      "m_x_5_89317": 905.14,
      "m_x_10_2241": 1265,
      "m_x_5_89426": 2489.96,
      "m_x_5_89427": 2569,
      "m_x_5_89428": 2999,
      "m_x_5_89310": 9978.02,
      "m_x_5_89347": 1200.63,
      "m_x_5_89356": 920,
      "m_x_5_89358": 1195.88,
      "m_x_5_89326": 990.87,
      "m_x_5_89334": 1000,
      "m_x_5_26232": 0.68,
      "m_x_5_5232": 1.2,
      "m_x_5_5231": 1,
      "m_x_5_5229": 1.31,
      "m_x_5_31050": 13.67,
      "m_x_5_2304": 9000,
      "m_x_5_31051": 300.03,
      "m_x_5_31052": 405.2,
      "m_x_5_31053": 413,
      "m_x_5_31054": 432.53,
      "m_x_5_31055": 10000,
      "m_x_5_2299": 11800.93,
      "m_x_5_31056": 10000,
      "m_x_5_2300": 8252.09,
      "m_x_5_31057": 10000,
      "m_x_5_31058": 10000,
      "m_x_5_31059": 10000,
      "m_x_5_2305": 2980.56,
      "m_x_5_31060": 100.08,
      "m_x_5_71268": 80.08,
      "m_x_5_71270": 94.11,
      "m_x_5_2302": 1776.43,
      "m_x_5_71271": 88.64,
      "m_x_5_71272": 131.94,
      "m_x_5_71273": 126.48,
      "m_x_5_71274": 125.32,
      "m_x_5_71276": 40.37,
      "m_x_5_71278": 25.6,
      "m_x_5_71279": 43.67,
      "m_x_5_3505": 1299.38,
      "m_x_5_71280": 45.44,
      "m_x_5_71282": 90.99,
      "m_x_5_3236": 2999.2,
      "m_x_5_71283": 88.9,
      "m_x_5_2292": 4000,
      "m_x_5_71284": 93.55,
      "m_x_5_71286": 85.72,
      "m_x_5_71287": 90.7,
      "m_x_5_71288": 87.14,
      "m_x_5_71289": 27.22,
      "m_x_5_71290": 25.4,
      "m_x_5_71291": 30.02,
      "m_x_5_71294": 540.71,
      "m_x_5_71295": 549.97,
      "m_x_5_71296": 491,
      "m_x_5_71297": 297.99,
      "m_x_5_71298": 30.97,
      "m_x_5_71299": 456,
      "m_x_5_2303": 11888.49,
      "m_x_5_71300": 8.88,
      "m_x_5_89316": 2199.91,
      "m_x_5_89318": 2727,
      "m_x_5_89361": 75.5,
      "m_x_5_89362": 60.09,
      "m_x_5_89363": 78.17,
      "m_x_5_89364": 108.78,
      "m_x_5_89365": 200.07,
      "m_x_8_617": 399,
      "m_x_5_3810": 30.99,
      "m_x_5_3811": 13.1,
      "m_x_8_26": 39.97,
      "m_x_5_3797": 4.66,
      "m_x_5_2433": 10.99,
      "m_x_8_24": 1.02,
      "m_x_5_2467": 25.74,
      "m_x_8_37": 15.19,
      "m_x_8_38": 6.68,
      "m_x_5_5245": 97,
      "m_x_5_5246": 98.94,
      "m_x_8_31": 4.69,
      "m_x_8_69": 120,
      "m_x_8_70": 150,
      "m_x_5_22145": 68.23,
      "m_x_5_22917": 89.99,
      "m_x_5_22981": 132.99,
      "m_x_5_71193": 1000,
      "m_x_5_71194": 1650.15,
      "m_x_5_71195": 1501.58,
      "m_x_5_71196": 1190.07,
      "m_x_5_71198": 1249.68,
      "m_x_5_71199": 1008.5,
      "m_x_5_71200": 1550,
      "m_x_5_71201": 1189.51,
      "m_x_5_71202": 880.42,
      "m_x_5_71203": 1800,
      "m_x_5_71204": 1400.89,
      "m_x_5_71205": 800,
      "m_x_5_71206": 1682,
      "m_x_5_71207": 1400,
      "m_x_5_71214": 1099.91,
      "m_x_5_71215": 1940.04,
      "m_x_5_71219": 413,
      "m_x_5_71221": 451.67,
      "m_x_5_71222": 299,
      "m_x_5_71223": 347.2,
      "m_x_5_71224": 240,
      "m_x_5_71225": 252.28,
      "m_x_5_71226": 533.67,
      "m_x_5_71227": 244.29,
      "m_x_5_71228": 289.94,
      "m_x_5_71229": 460.63,
      "m_x_5_71230": 420.01,
      "m_x_5_71231": 369.25,
      "m_x_5_71237": 150.29,
      "m_x_5_71239": 656,
      "m_x_5_81655": 1000,
      "m_x_5_89461": 1488.92,
      "m_x_5_89462": 1468.86,
      "m_x_5_89463": 1597.68,
      "m_x_5_89464": 795.3,
      "m_x_5_89465": 1200,
      "m_x_5_89466": 937,
      "m_x_5_89467": 1298.98,
      "m_x_5_89468": 1800.86,
      "m_x_5_89469": 1492.56,
      "m_x_5_89470": 1677.12,
      "m_x_5_89471": 2550.75,
      "m_x_5_89472": 2749,
      "m_x_5_89473": 2895.21,
      "m_x_5_90289": 300,
      "m_x_5_31099": 43.94,
      "m_x_5_31103": 10.27,
      "m_x_5_31104": 40.92,
      "m_x_5_31105": 88.95,
      "m_x_5_31107": 99.43,
      "m_x_5_31108": 130.3,
      "m_x_5_40538": 46.21,
      "m_x_5_71242": 80.92,
      "m_x_5_71243": 244.85,
      "m_x_5_71244": 119.31,
      "m_x_5_71245": 95.41,
      "m_x_5_71246": 285.99,
      "m_x_5_71247": 133.97,
      "m_x_5_71248": 80.46,
      "m_x_5_71250": 70.98,
      "m_x_5_71251": 85.77,
      "m_x_5_71252": 53.21,
      "m_x_5_71253": 58.5,
      "m_x_5_71254": 81.96,
      "m_x_5_71256": 85.78,
      "m_x_5_71259": 88.29,
      "m_x_5_71260": 85,
      "m_x_5_71261": 150.55,
      "m_x_5_71262": 185.92,
      "m_x_5_71263": 99.68,
      "m_x_5_71264": 100,
      "m_x_5_71265": 63.74,
      "m_x_5_89341": 89.73,
      "m_x_5_89342": 84.99,
      "m_x_5_89343": 93.01,
      "m_x_5_89344": 135.13,
      "m_x_5_89345": 88,
      "m_x_5_89724": 400,
      "m_x_5_2589": 8.8,
      "m_x_5_2631": 28.8,
      "m_x_8_631": 599.99,
      "m_x_5_2189": 9.18,
      "m_x_5_2594": 10000,
      "m_x_5_2603": 9.62,
      "m_x_8_633": 299.99,
      "m_x_8_635": 399,
      "m_x_8_17545": 1000.6,
      "m_x_5_5044": 9.72,
      "m_x_5_6247": 0.83,
      "m_x_5_6248": 0.98,
      "m_x_5_10028": 70.3,
      "m_x_5_31140": 100.7,
      "m_x_5_31141": 100,
      "m_x_5_31142": 257,
      "m_x_5_31143": 100.1,
      "m_x_5_40539": 163.97,
      "m_x_5_71129": 115.65,
      "m_x_5_71130": 110.96,
      "m_x_5_71131": 122.35,
      "m_x_5_71132": 258.63,
      "m_x_5_71133": 1126.68,
      "m_x_5_71134": 1800.01,
      "m_x_5_71135": 1699.87,
      "m_x_5_71136": 887,
      "m_x_5_71138": 1524.56,
      "m_x_5_71139": 1498.63,
      "m_x_5_71140": 1750.54,
      "m_x_5_71141": 1800.01,
      "m_x_5_71142": 1292.05,
      "m_x_5_71143": 1789.2,
      "m_x_5_71144": 1750.23,
      "m_x_5_71145": 995.01,
      "m_x_5_71146": 1868.04,
      "m_x_5_71147": 1899.11,
      "m_x_5_71148": 997.01,
      "m_x_5_71149": 1780,
      "m_x_5_71150": 1325.24,
      "m_x_5_71151": 997,
      "m_x_5_71152": 2132.21,
      "m_x_5_71153": 1459.41,
      "m_x_5_71159": 1750.53,
      "m_x_5_71160": 999.99,
      "m_x_5_71161": 207.27,
      "m_x_5_71162": 698.96,
      "m_x_5_71164": 390,
      "m_x_5_71166": 300.2,
      "m_x_5_71167": 450.37,
      "m_x_5_71168": 220.77,
      "m_x_5_71169": 245,
      "m_x_5_71170": 600.67,
      "m_x_5_71171": 694.05,
      "m_x_5_71172": 480.92,
      "m_x_5_71174": 385.79,
      "m_x_5_71175": 420.01,
      "m_x_5_71176": 380.02,
      "m_x_5_71182": 250,
      "m_x_5_71184": 333.33,
      "m_x_5_71185": 320,
      "m_x_5_71186": 280.01,
      "m_x_5_71187": 339.63,
      "m_x_5_71189": 33.01,
      "m_x_5_71190": 46.64,
      "m_x_5_71191": 80.25,
      "m_x_5_54537": 49.97,
      "m_x_5_89415": 1333.5,
      "m_x_5_89416": 1318.23,
      "m_x_5_89417": 1200.55,
      "m_x_5_89418": 655.31,
      "m_x_5_89419": 2610.88,
      "m_x_5_89420": 1099.49,
      "m_x_5_89421": 758.95,
      "m_x_5_89422": 899.88,
      "m_x_5_89423": 965.93,
      "m_x_5_89424": 1998,
      "m_x_5_89425": 1065.49,
      "m_x_5_89429": 1500.38,
      "m_x_5_89430": 1954.71,
      "m_x_5_89431": 999,
      "m_x_5_35004": 2.44,
      "m_x_5_35005": 1.7,
      "m_x_5_35006": 3.27,
      "m_x_5_35007": 2.39,
      "m_x_10_151": 1499,
      "m_x_10_155": 1198.04,
      "m_x_10_163": 94,
      "m_x_10_170": 200.93,
      "m_x_10_98": 91.01,
      "m_x_10_105": 94,
      "m_x_10_107": 82,
      "m_x_5_35771": 660.96,
      "m_x_5_35773": 397.24,
      "m_x_5_35774": 537.96,
      "m_x_5_35775": 435,
      "m_x_10_139": 300.9,
      "m_x_10_141": 1900,
      "m_x_10_148": 200.32,
      "m_x_10_114": 210,
      "m_x_10_116": 699,
      "m_x_10_119": 200.9,
      "m_x_10_124": 725.2,
      "m_x_10_126": 910,
      "m_x_10_127": 900.51,
      "m_x_10_434": 435.07,
      "m_x_10_447": 1247.96,
      "m_x_10_450": 1649,
      "m_x_10_479": 3891,
      "m_x_5_38373": 1775.94,
      "m_x_5_38374": 794.96,
      "m_x_5_38927": 5.17,
      "m_x_10_672": 1619.94,
      "m_x_10_680": 1278,
      "m_x_10_1085": 193.87,
      "m_x_10_1086": 310.04,
      "m_x_10_1087": 310.04,
      "m_x_10_1088": 310.75,
      "m_x_10_1089": 310.04,
      "m_x_10_1090": 299.83,
      "m_x_10_1278": 273.91,
      "m_x_10_1279": 270.75,
      "m_x_10_1280": 268.06,
      "m_x_10_949": 460.7,
      "m_x_10_954": 900.8,
      "m_x_10_955": 1300,
      "m_x_10_1574": 288,
      "m_x_10_1772": 2038.49,
      "m_x_10_1774": 939.74,
      "m_x_10_1283": 246.71,
      "m_x_10_1284": 270.72,
      "m_x_10_1285": 271.75,
      "m_x_10_1286": 270.05,
      "m_x_10_1454": 31.39,
      "m_x_10_1456": 75.71,
      "m_x_10_2097": 380,
      "m_x_10_2098": 379.73,
      "m_x_10_2099": 380,
      "m_x_10_2100": 380,
      "m_x_10_2101": 211.97,
      "m_x_10_2102": 211.96,
      "m_x_10_2106": 211.97,
      "m_x_10_2107": 211.97,
      "m_x_10_2230": 100.13,
      "m_x_10_2231": 435.86,
      "m_x_10_2232": 150.81,
      "m_x_10_1780": 640.17,
      "m_x_10_2233": 399.99,
      "m_x_10_2234": 339.59,
      "m_x_10_2235": 354.49,
      "m_x_10_2236": 299.31,
      "m_x_10_2237": 359.99,
      "m_x_10_2238": 255.33,
      "m_x_10_2242": 1259.95,
      "m_x_10_2243": 1161.05,
      "m_x_10_2244": 1159.95,
      "m_x_5_87875": 610.13,
      "m_x_5_87874": 555.53,
      "m_x_5_87873": 788.88,
      "m_x_5_87872": 688.88,
      "m_x_5_87871": 588.88,
      "m_x_5_87867": 400.88,
      "m_x_5_87805": 511.88,
      "m_x_5_1830": 20.2,
      "m_x_5_31975": 0.66,
      "m_x_5_1832": 15.97,
      "m_x_5_31979": 0.66,
      "m_x_5_31981": 10000,
      "m_x_5_32007": 10000,
      "m_x_5_32010": 2.01,
      "m_x_5_32011": 10000,
      "m_x_5_34184": 1.37,
      "m_x_5_35786": 4,
      "m_x_5_36491": 1.3,
      "m_x_5_41556": 10.89,
      "m_x_5_44402": 1.7,
      "m_x_5_47758": 11,
      "m_x_5_54059": 0.74,
      "m_x_5_81662": 0.8,
      "m_x_5_40562": 100,
      "m_x_5_6250": 0.66,
      "m_x_5_6251": 1.31,
      "m_x_5_35780": 6.39,
      "m_x_5_2871": 5.57,
      "m_x_5_3843": 5.55,
      "m_x_5_3574": 1.83
    },
    "s_weiwo": {
      "fengwangjiang": 173.45,
      "shoupijiao": 75.71,
      "qicaixian": 140,
      "fengyu_yi": 1107.06,
      "m_m_5_30852": 19.1,
      "m_m_5_30853": 90.98,
      "m_m_5_30828": 5.97,
      "m_m_5_89165": 10.62,
      "guajian_bei": 64.86,
      "baihua_bu": 64.58,
      "guajian_yao": 89,
      "shuran_bu": 79.99,
      "m_m_5_32001": 0.55,
      "shuran_bag": 24.37,
      "jinfeng_bag": 7500,
      "wuseshi": 121.22,
      "m_m_5_30856": 15,
      "m_m_5_30855": 163.64,
      "geyin_zhang": 179,
      "m_m_5_89298": 44.77,
      "m_m_5_30679": 20.44,
      "m_m_5_30847": 11.83,
      "m_m_5_30846": 1.98,
      "yinsi_duan": 129.98,
      "m_m_5_32003": 0.7,
      "m_m_5_30848": 20.1,
      "m_m_5_32002": 0.62,
      "m_m_5_30850": 164.52,
      "m_m_5_30845": 203.82,
      "m_m_5_89433": 5500,
      "m_m_5_89435": 4900,
      "m_m_5_31253": 188.4,
      "m_m_5_30844": 0.38,
      "m_m_5_90210": 1999.99,
      "m_m_5_35718": 16,
      "m_m_5_35719": 32.29,
      "m_m_5_30873": 35.7,
      "m_m_5_90205": 79.87,
      "shanshui_juan": 210.78,
      "m_m_5_3819": 99.93,
      "m_m_8_36148": 1436.33,
      "m_m_5_89474": 3000.88,
      "m_m_5_30827": 1.36,
      "m_m_5_89970": 196,
      "m_m_5_32014": 149.99,
      "m_m_5_31978": 0.64,
      "m_m_5_31985": 0.59,
      "lucai": 19.77,
      "m_m_5_1831": 13.84,
      "m_m_5_31973": 0.65,
      "m_m_5_30849": 6,
      "m_m_5_71293": 42.32,
      "m_m_5_30826": 0.4,
      "m_m_5_30825": 0.01,
      "m_m_5_89171": 10.75,
      "m_m_5_31974": 0.69,
      "m_m_5_31968": 0.59,
      "m_m_5_71292": 29,
      "m_m_5_30824": 0.49,
      "m_m_5_71281": 75,
      "m_m_5_30823": 0.16,
      "m_m_5_31969": 0.66,
      "m_m_5_71277": 40.43,
      "m_m_5_89315": 1489,
      "m_m_5_89969": 135.11,
      "m_m_5_31976": 0.69,
      "m_m_5_89303": 5369.53,
      "m_m_5_89971": 214.58,
      "lushui": 14.16,
      "m_m_5_30875": 1.09,
      "m_m_5_30829": 0.66,
      "m_m_5_30843": 1,
      "m_m_5_30874": 32.2,
      "m_m_5_30842": 1.97,
      "m_m_5_5270": 0.94,
      "m_m_5_5269": 0.03,
      "m_m_5_31977": 0.64,
      "m_m_5_31013": 199.83,
      "gancao": 3.05,
      "m_m_5_31012": 340.21,
      "m_m_5_90034": 2666,
      "m_m_5_89172": 22.29,
      "m_m_5_26057": 3000,
      "m_m_5_26231": 4.22,
      "m_m_5_89352": 639.63,
      "m_m_5_89350": 547.18,
      "m_m_5_71269": 141.59,
      "m_m_5_89346": 767.55,
      "m_m_5_89167": 10.63,
      "m_m_5_89348": 218.74,
      "m_m_5_71285": 107.39,
      "jieyuan_dan": 196,
      "m_m_5_30836": 1.5,
      "m_m_5_30832": 1.81,
      "m_m_5_30833": 2.39,
      "m_m_5_89324": 98.57,
      "m_m_5_30831": 3.71,
      "m_m_5_89973": 152.61,
      "m_m_5_31996": 0.66,
      "m_m_5_71241": 70.85,
      "m_m_5_71240": 180,
      "m_m_5_31995": 0.66,
      "m_m_5_71266": 82,
      "m_m_5_30838": 0.97,
      "shanhu": 3.55,
      "m_m_5_6646": 0.64,
      "m_m_5_89333": 400,
      "m_m_5_30835": 3.31,
      "m_m_5_89974": 80.87,
      "m_m_5_6648": 1.82,
      "m_m_5_71267": 55.84,
      "m_m_5_90029": 470,
      "m_m_5_89168": 20,
      "yaoyin": 176.88,
      "m_m_5_31100": 48.97,
      "shaoyao": 2.79,
      "m_m_5_31102": 0.09,
      "m_m_5_30834": 2.2,
      "m_m_5_31998": 0.66,
      "m_m_5_90035": 4999.55,
      "m_m_5_89328": 691.39,
      "m_m_5_89332": 871.23,
      "m_m_5_89340": 89.3,
      "m_m_5_89325": 739.71,
      "m_m_5_71258": 110,
      "m_m_5_89327": 95.89,
      "m_m_5_89966": 88.65,
      "m_m_5_31991": 0.66,
      "m_m_5_89377": 486,
      "m_m_5_89968": 102.76,
      "m_m_5_31993": 0.59,
      "m_m_5_89376": 348.95,
      "m_m_5_89965": 120.2,
      "m_m_5_31992": 0.65,
      "m_m_5_89375": 550.92,
      "m_m_5_89963": 55.43,
      "m_m_5_71192": 188.02,
      "m_m_5_89169": 10.63,
      "m_m_5_71188": 367.99,
      "m_m_5_31994": 0.66,
      "m_m_5_89962": 75.01,
      "m_m_5_31139": 3950.88,
      "m_m_5_89964": 63.01,
      "m_m_5_10027": 70.5,
      "m_m_5_89961": 92,
      "tiekuang": 3.26,
      "m_m_5_30676": 1.98,
      "m_m_5_30678": 1.88,
      "m_m_5_30674": 3.1,
      "m_m_5_30675": 3.66,
      "m_m_5_89967": 92.01,
      "m_m_5_89367": 888.72,
      "m_m_5_6246": 0.08,
      "m_m_5_6249": 0.24,
      "m_m_5_30841": 3.51,
      "m_m_5_35708": 6.58,
      "m_m_8_632": 255.41,
      "m_m_8_634": 389.88,
      "m_m_5_90257": 290.29,
      "m_m_5_6068": 0.19,
      "muban": 22.29,
      "muliao": 4.65,
      "m_m_5_35707": 6.88,
      "m_m_5_35703": 0.63,
      "qiwuling": 28.01,
      "m_m_5_35716": 16.39,
      "m_m_5_35715": 19.97,
      "zhuzi": 2.09,
      "m_m_5_35567": 1.62,
      "m_m_5_35704": 0.63,
      "m_m_5_35714": 23.96,
      "m_m_5_35701": 0.64,
      "m_m_5_35713": 16,
      "m_m_5_35705": 0.64,
      "m_m_10_1778": 1194.28,
      "m_m_10_948": 248.49,
      "m_m_5_89260": 23456,
      "m_m_10_1779": 743.56,
      "m_m_10_1880": 2191.37,
      "m_m_10_2034": 2698.58,
      "m_m_10_93": 40,
      "m_m_10_1882": 1300,
      "m_m_5_35717": 2.48,
      "m_m_10_2037": 1257.36,
      "m_m_10_164": 57.64,
      "m_m_5_52337": 1799,
      "m_m_5_35772": 1295.82,
      "m_m_5_87917": 260.07,
      "m_m_5_87881": 9999.66,
      "zasui": 0.93,
      "g_5_30681": 1,
      "g_5_30680": 0.69,
      "m_x_5_89353": 491.72,
      "m_x_5_89359": 778,
      "m_x_5_89308": 4981.1,
      "m_x_5_89349": 421.99,
      "m_x_5_89355": 1297.59,
      "m_x_5_89351": 560.25,
      "m_x_5_89357": 1666.26,
      "m_x_5_89434": 3300,
      "m_x_5_89448": 30008.37,
      "m_x_5_89436": 5555.98,
      "m_x_5_89438": 4994.76,
      "m_x_5_89452": 26666.44,
      "m_x_5_89439": 4888.99,
      "m_x_5_89440": 4299,
      "m_x_5_89454": 12000,
      "m_x_5_89441": 4900.15,
      "m_x_5_89443": 6000,
      "m_x_5_89458": 50000,
      "m_x_5_89445": 4444,
      "m_x_5_89329": 596,
      "m_x_5_89335": 1489.83,
      "m_x_5_89330": 906.3,
      "m_x_5_89331": 745.93,
      "m_x_5_89337": 1083,
      "m_x_5_89368": 955,
      "m_x_5_89372": 1874.98,
      "m_x_5_89369": 999,
      "m_x_5_89373": 2200.2,
      "m_x_5_90436": 76,
      "m_x_5_89379": 4418.99,
      "m_x_5_89397": 32252.91,
      "m_x_5_89380": 7000.45,
      "m_x_5_90437": 47.25,
      "m_x_5_89381": 5888.71,
      "m_x_5_89384": 5600.5,
      "m_x_5_89385": 6808.86,
      "m_x_5_89386": 5500.1,
      "m_x_5_89388": 5300.96,
      "m_x_5_89389": 5895.91,
      "m_x_5_89391": 4520.66,
      "m_x_5_89392": 4994.52,
      "m_x_5_89393": 6386.68,
      "m_x_5_89412": 30000,
      "m_x_5_89413": 59000,
      "m_x_5_89396": 4450.99,
      "m_x_5_20971": 40,
      "m_x_10_1281": 599.98,
      "m_x_10_1894": 100,
      "m_x_10_2229": 1000.97,
      "m_x_5_89317": 865.99,
      "m_x_10_2028": 695.09,
      "m_x_10_2241": 1099.7,
      "m_x_5_89319": 30,
      "m_x_5_89320": 38,
      "m_x_5_89426": 2250,
      "m_x_5_89427": 2209.93,
      "m_x_5_89428": 2323.78,
      "m_x_5_89347": 1053.65,
      "m_x_5_89356": 899.37,
      "m_x_5_89358": 1190,
      "m_x_5_89326": 999.11,
      "m_x_5_89334": 1477.14,
      "m_x_5_89371": 2300.43,
      "m_x_5_11521": 0.13,
      "m_x_5_26232": 0.64,
      "m_x_5_5232": 1.6,
      "m_x_5_5231": 1.11,
      "m_x_5_5230": 1.4,
      "m_x_5_5229": 1.66,
      "m_x_5_31050": 28,
      "m_x_5_2304": 9999,
      "m_x_5_31051": 198,
      "m_x_5_31052": 474.94,
      "m_x_5_31053": 240,
      "m_x_5_31054": 387.79,
      "m_x_5_31055": 10000,
      "m_x_5_2299": 13599.3,
      "m_x_5_31056": 10000,
      "m_x_5_31058": 10000,
      "m_x_5_2305": 9999.6,
      "m_x_5_31060": 150,
      "m_x_5_71268": 101.87,
      "m_x_5_71270": 112.63,
      "m_x_5_2302": 1194.4,
      "m_x_5_71271": 133.26,
      "m_x_5_71272": 133.04,
      "m_x_5_71273": 122.38,
      "m_x_5_71274": 125.68,
      "m_x_5_71276": 22.88,
      "m_x_5_71278": 22,
      "m_x_5_71279": 55.62,
      "m_x_5_3505": 2500.63,
      "m_x_5_71280": 44.04,
      "m_x_5_3485": 2222.03,
      "m_x_5_71282": 50,
      "m_x_5_3236": 6099.39,
      "m_x_5_71283": 55.07,
      "m_x_5_2292": 2100.08,
      "m_x_5_71284": 88.78,
      "m_x_5_71286": 89.13,
      "m_x_5_71287": 118.09,
      "m_x_5_71288": 94.71,
      "m_x_5_71290": 66.72,
      "m_x_5_71291": 28.73,
      "m_x_5_71294": 519,
      "m_x_5_71295": 479.98,
      "m_x_5_71296": 658.59,
      "m_x_5_71297": 132.52,
      "m_x_5_71298": 39.72,
      "m_x_5_71299": 244,
      "m_x_5_71300": 18.06,
      "m_x_5_89316": 1688.27,
      "m_x_5_89318": 2299.02,
      "m_x_5_89361": 59.69,
      "m_x_5_89362": 62.57,
      "m_x_5_89363": 68.11,
      "m_x_5_89364": 136.58,
      "m_x_5_89365": 379.25,
      "m_x_5_89366": 555,
      "m_x_8_618": 1599.99,
      "m_x_8_616": 1599.88,
      "m_x_8_617": 1599.99,
      "m_x_8_615": 1599.99,
      "m_x_5_3810": 66.04,
      "m_x_5_3811": 105.99,
      "m_x_8_21": 1.93,
      "m_x_5_3797": 2.5,
      "m_x_5_2433": 11.31,
      "m_x_8_20": 0.07,
      "m_x_8_22": 20,
      "m_x_8_23": 22.21,
      "m_x_8_24": 0.99,
      "m_x_8_626": 1599.99,
      "m_x_8_627": 1599.99,
      "m_x_8_37": 14.26,
      "m_x_8_38": 19.6,
      "m_x_5_5245": 55.79,
      "m_x_5_5246": 80,
      "m_x_8_31": 13.95,
      "m_x_8_69": 158,
      "m_x_8_70": 200,
      "m_x_5_22145": 78,
      "m_x_5_22917": 88.26,
      "m_x_5_22981": 130,
      "m_x_5_31252": 278.51,
      "m_x_5_31254": 188.1,
      "m_x_5_71193": 999,
      "m_x_5_71194": 1780.04,
      "m_x_5_71195": 1718.97,
      "m_x_5_71196": 1000.55,
      "m_x_5_71198": 1199.99,
      "m_x_5_71199": 1129.66,
      "m_x_5_71200": 1600,
      "m_x_5_71201": 1338.07,
      "m_x_5_71202": 993,
      "m_x_5_71203": 1699.9,
      "m_x_5_71204": 1345,
      "m_x_5_71205": 950.75,
      "m_x_5_71206": 1750.75,
      "m_x_5_71207": 1800.24,
      "m_x_5_71209": 1964.15,
      "m_x_5_71210": 2500,
      "m_x_5_71212": 2050.77,
      "m_x_5_71214": 988.98,
      "m_x_5_71215": 1980.53,
      "m_x_5_71216": 200.01,
      "m_x_5_71217": 495.84,
      "m_x_5_71218": 608.99,
      "m_x_5_71219": 533.8,
      "m_x_5_71221": 445.54,
      "m_x_5_71222": 445.4,
      "m_x_5_71223": 452.7,
      "m_x_5_71224": 339.14,
      "m_x_5_71225": 445.57,
      "m_x_5_71226": 445.57,
      "m_x_5_71227": 390.7,
      "m_x_5_71228": 710.04,
      "m_x_5_71229": 370.4,
      "m_x_5_71230": 580.52,
      "m_x_5_71231": 500.28,
      "m_x_5_71232": 412.58,
      "m_x_5_71237": 345.04,
      "m_x_5_71238": 655.6,
      "m_x_5_71239": 650.44,
      "m_x_5_89461": 1799,
      "m_x_5_89462": 2566.62,
      "m_x_5_89463": 1350.89,
      "m_x_5_89464": 1689.06,
      "m_x_5_89465": 1500.09,
      "m_x_5_89466": 999.26,
      "m_x_5_89467": 2066.06,
      "m_x_5_89469": 1250.19,
      "m_x_5_89470": 999.27,
      "m_x_5_89471": 2080.03,
      "m_x_5_89472": 2000.01,
      "m_x_5_89473": 1100.95,
      "m_x_5_90289": 798.4,
      "m_x_5_31099": 58.99,
      "m_x_5_31103": 9.41,
      "m_x_5_31104": 99.47,
      "m_x_5_31105": 280.54,
      "m_x_5_31106": 48.85,
      "m_x_5_31107": 77.8,
      "m_x_5_31108": 99.68,
      "m_x_5_40538": 55,
      "m_x_5_71242": 141.33,
      "m_x_5_71243": 146.65,
      "m_x_5_71244": 339.99,
      "m_x_5_71245": 98.52,
      "m_x_5_71246": 173.79,
      "m_x_5_71247": 125.65,
      "m_x_5_71248": 179.63,
      "m_x_5_71250": 83.87,
      "m_x_5_71251": 98,
      "m_x_5_71252": 44.14,
      "m_x_5_71253": 50,
      "m_x_5_71254": 88.75,
      "m_x_5_71255": 70.36,
      "m_x_5_71256": 78.95,
      "m_x_5_71257": 107,
      "m_x_5_71259": 119.51,
      "m_x_5_71260": 159.98,
      "m_x_5_71261": 145.32,
      "m_x_5_71262": 113.8,
      "m_x_5_71263": 598,
      "m_x_5_71264": 50.54,
      "m_x_5_71265": 40.21,
      "m_x_5_89341": 249.76,
      "m_x_5_89342": 70.2,
      "m_x_5_89343": 83.08,
      "m_x_5_89344": 149.5,
      "m_x_5_89345": 130.78,
      "m_x_5_89724": 320.99,
      "m_x_5_2589": 16.98,
      "m_x_5_2631": 49.37,
      "m_x_8_629": 180.07,
      "m_x_8_630": 300.99,
      "m_x_8_631": 210.13,
      "m_x_5_2189": 13.99,
      "m_x_5_2594": 102,
      "m_x_8_633": 399.99,
      "m_x_8_635": 266.99,
      "m_x_8_17544": 1093.91,
      "m_x_5_5044": 12.9,
      "m_x_8_17547": 1099.99,
      "m_x_8_17548": 1099.99,
      "m_x_8_17549": 1099.93,
      "m_x_5_6024": 1.8,
      "m_x_5_6069": 0.13,
      "m_x_5_6070": 0.15,
      "m_x_5_6247": 0.9,
      "m_x_5_6248": 0.99,
      "m_x_5_10028": 99.99,
      "m_x_5_31141": 140.09,
      "m_x_5_31142": 297,
      "m_x_5_31143": 28.99,
      "m_x_5_40539": 100.92,
      "m_x_5_71129": 110,
      "m_x_5_71130": 108.91,
      "m_x_5_71131": 108.99,
      "m_x_5_71132": 1000.5,
      "m_x_5_71133": 954,
      "m_x_5_71134": 1880.62,
      "m_x_5_71135": 1879.04,
      "m_x_5_71136": 1097,
      "m_x_5_71137": 2491.25,
      "m_x_5_71138": 1557,
      "m_x_5_71139": 1500,
      "m_x_5_71140": 1930.22,
      "m_x_5_71141": 1599,
      "m_x_5_71143": 1886.95,
      "m_x_5_71144": 1786.8,
      "m_x_5_71145": 950.95,
      "m_x_5_71146": 1948.99,
      "m_x_5_71147": 2040.15,
      "m_x_5_71148": 1066.06,
      "m_x_5_71149": 2080.74,
      "m_x_5_71150": 1450.03,
      "m_x_5_71151": 1218,
      "m_x_5_71152": 2310,
      "m_x_5_71153": 1619.91,
      "m_x_5_71157": 2282.22,
      "m_x_5_71160": 957,
      "m_x_5_71161": 622.18,
      "m_x_5_71162": 668.7,
      "m_x_5_71164": 425.86,
      "m_x_5_71165": 300.01,
      "m_x_5_71166": 290.08,
      "m_x_5_71167": 440.75,
      "m_x_5_71168": 365.8,
      "m_x_5_71169": 280.52,
      "m_x_5_71170": 420.48,
      "m_x_5_71171": 420.65,
      "m_x_5_71172": 375,
      "m_x_5_71173": 518.06,
      "m_x_5_71174": 370,
      "m_x_5_71175": 538.14,
      "m_x_5_71176": 490.76,
      "m_x_5_71182": 421.42,
      "m_x_5_71184": 325.66,
      "m_x_5_71185": 385.84,
      "m_x_5_71186": 503.77,
      "m_x_5_71187": 257,
      "m_x_5_71189": 33.35,
      "m_x_5_71190": 11.99,
      "m_x_5_71191": 100.32,
      "m_x_5_54537": 196.19,
      "m_x_5_81656": 666,
      "m_x_5_89415": 1399,
      "m_x_5_89416": 1258.17,
      "m_x_5_89417": 1250.48,
      "m_x_5_89418": 1000.16,
      "m_x_5_89419": 1300,
      "m_x_5_89420": 2008,
      "m_x_5_89421": 964,
      "m_x_5_89422": 980,
      "m_x_5_89423": 1500,
      "m_x_5_89424": 1368.6,
      "m_x_5_89425": 2548.7,
      "m_x_5_89429": 2583.29,
      "m_x_5_90213": 45.78,
      "m_x_10_172": 3399.99,
      "m_x_5_35004": 1.87,
      "m_x_5_35005": 1.67,
      "m_x_5_35006": 2.06,
      "m_x_5_35007": 2.14,
      "m_x_5_35044": 0.1,
      "m_x_10_151": 2698.28,
      "m_x_10_154": 1300,
      "m_x_10_158": 1599.07,
      "m_x_10_159": 2598.87,
      "m_x_10_160": 4999.65,
      "m_x_10_163": 49.19,
      "m_x_10_166": 500,
      "m_x_10_167": 2199.99,
      "m_x_10_168": 500,
      "m_x_10_170": 200,
      "m_x_10_94": 48,
      "m_x_10_95": 50,
      "m_x_10_97": 692.23,
      "m_x_10_98": 48.19,
      "m_x_10_104": 48.18,
      "m_x_10_107": 60,
      "m_x_10_108": 114.29,
      "m_x_5_35771": 838.98,
      "m_x_5_35773": 300,
      "m_x_5_35774": 400,
      "m_x_5_35775": 400,
      "m_x_10_133": 200.63,
      "m_x_10_134": 200,
      "m_x_10_135": 1086.88,
      "m_x_10_114": 221.59,
      "m_x_10_120": 50.13,
      "m_x_10_122": 232.03,
      "m_x_10_124": 1298.64,
      "m_x_10_421": 2192.67,
      "m_x_10_427": 1391.7,
      "m_x_10_429": 397.68,
      "m_x_10_433": 397.59,
      "m_x_10_434": 400,
      "m_x_10_436": 2393.63,
      "m_x_10_437": 2292.64,
      "m_x_10_438": 2194.59,
      "m_x_10_444": 3399.99,
      "m_x_10_446": 2699,
      "m_x_10_447": 2697.54,
      "m_x_10_450": 2697.61,
      "m_x_10_469": 2693.73,
      "m_x_10_471": 2693.69,
      "m_x_10_478": 4599,
      "m_x_10_479": 9999.99,
      "m_x_10_490": 2193.71,
      "m_x_10_492": 2193.7,
      "m_x_10_493": 2693.65,
      "m_x_10_504": 2693.4,
      "m_x_5_38127": 1098.21,
      "m_x_5_38373": 1750.76,
      "m_x_5_38374": 1399.32,
      "m_x_5_38927": 7.55,
      "m_x_10_671": 641.06,
      "m_x_10_672": 2184.33,
      "m_x_10_673": 480,
      "m_x_10_674": 1268.13,
      "m_x_10_675": 688.99,
      "m_x_10_677": 2691.7,
      "m_x_10_678": 848.11,
      "m_x_10_679": 850,
      "m_x_10_680": 1180,
      "m_x_10_681": 219.73,
      "m_x_10_682": 1170,
      "m_x_10_683": 448.51,
      "m_x_10_686": 889.81,
      "m_x_10_957": 699,
      "m_x_10_1083": 750,
      "m_x_10_1085": 399,
      "m_x_10_1086": 329.33,
      "m_x_10_1087": 328.8,
      "m_x_10_1088": 328,
      "m_x_10_1089": 328.82,
      "m_x_10_1090": 330,
      "m_x_10_1277": 399,
      "m_x_10_1278": 399,
      "m_x_10_1279": 399,
      "m_x_10_1280": 399,
      "m_x_10_688": 890,
      "m_x_10_943": 726.21,
      "m_x_10_944": 500,
      "m_x_10_945": 820.78,
      "m_x_10_946": 699.99,
      "m_x_10_947": 850,
      "m_x_10_949": 398.43,
      "m_x_10_950": 499,
      "m_x_10_951": 174.35,
      "m_x_10_952": 3196.43,
      "m_x_10_953": 1258.53,
      "m_x_10_955": 690,
      "m_x_10_956": 597.64,
      "m_x_10_1570": 380,
      "m_x_10_1571": 880,
      "m_x_10_1572": 880,
      "m_x_10_1573": 290,
      "m_x_10_1574": 290,
      "m_x_10_1575": 400,
      "m_x_10_1576": 290,
      "m_x_10_1577": 400,
      "m_x_10_1578": 290,
      "m_x_10_1587": 399,
      "m_x_10_1605": 498.89,
      "m_x_10_1606": 498.89,
      "m_x_10_1607": 2698.05,
      "m_x_10_1772": 2990.34,
      "m_x_10_1773": 2990.27,
      "m_x_10_1774": 1499.57,
      "m_x_10_1775": 1841.95,
      "m_x_10_1777": 1900,
      "m_x_10_1282": 699.99,
      "m_x_10_1283": 699.99,
      "m_x_10_1284": 699.99,
      "m_x_10_1286": 699.99,
      "m_x_10_1454": 35,
      "m_x_10_1455": 37.85,
      "m_x_10_1456": 49,
      "m_x_10_1457": 120,
      "m_x_10_1458": 49,
      "m_x_10_1459": 500,
      "m_x_10_1460": 500,
      "m_x_10_1461": 580,
      "m_x_10_1462": 580,
      "m_x_10_1463": 424.79,
      "m_x_10_1464": 899.99,
      "m_x_10_1465": 599.71,
      "m_x_10_2036": 1257.1,
      "m_x_10_2097": 438.26,
      "m_x_10_2098": 438.28,
      "m_x_10_2099": 440,
      "m_x_10_2100": 439.85,
      "m_x_10_2101": 200,
      "m_x_10_2102": 200,
      "m_x_10_2103": 199.88,
      "m_x_10_2104": 200,
      "m_x_10_2105": 200,
      "m_x_10_2106": 256.38,
      "m_x_10_2107": 255.23,
      "m_x_10_2230": 980.1,
      "m_x_10_2231": 1000.66,
      "m_x_10_2232": 1099.97,
      "m_x_10_1780": 640,
      "m_x_10_1879": 380,
      "m_x_10_1895": 100,
      "m_x_10_1896": 97.99,
      "m_x_10_1897": 99,
      "m_x_10_1898": 94.64,
      "m_x_10_1881": 898.95,
      "m_x_10_2029": 695.64,
      "m_x_10_2030": 755.42,
      "m_x_10_2031": 696.17,
      "m_x_10_2032": 430,
      "m_x_10_2033": 429.61,
      "m_x_10_2035": 1155.11,
      "m_x_10_2233": 1000.4,
      "m_x_10_2234": 1000.84,
      "m_x_10_2235": 1000,
      "m_x_10_2236": 1000.71,
      "m_x_10_2237": 1000.11,
      "m_x_10_2238": 1000.96,
      "m_x_10_2242": 1099.7,
      "m_x_10_2243": 1997.95,
      "m_x_10_2244": 1099.95,
      "m_x_5_87875": 300,
      "m_x_5_87874": 500.51,
      "m_x_5_87873": 300.33,
      "m_x_5_87871": 300,
      "m_x_5_87870": 330.94,
      "m_x_5_87869": 299,
      "m_x_5_87868": 350,
      "m_x_5_87867": 299.32,
      "m_x_5_87866": 299,
      "m_x_5_87865": 299,
      "m_x_5_87864": 299.97,
      "m_x_5_87863": 300.96,
      "m_x_5_87862": 299,
      "m_x_5_87861": 240.98,
      "m_x_5_87860": 299,
      "m_x_5_87859": 299,
      "m_x_5_87858": 299,
      "m_x_5_87857": 300,
      "m_x_5_87856": 299,
      "m_x_5_87855": 349,
      "m_x_5_87854": 370,
      "m_x_5_87853": 370.39,
      "m_x_5_87852": 398,
      "m_x_5_87849": 400,
      "m_x_5_87848": 340,
      "m_x_5_87847": 380,
      "m_x_5_87846": 400,
      "m_x_5_87845": 370,
      "m_x_5_87844": 600,
      "m_x_5_87842": 433.01,
      "m_x_5_87839": 530.99,
      "m_x_5_87838": 480,
      "m_x_5_87837": 598,
      "m_x_5_87836": 540.99,
      "m_x_5_87835": 600,
      "m_x_5_87834": 400,
      "m_x_5_87833": 620,
      "m_x_5_87832": 390,
      "m_x_5_87831": 370.06,
      "m_x_5_87830": 370.99,
      "m_x_5_87829": 400,
      "m_x_5_87828": 330,
      "m_x_5_87827": 370,
      "m_x_5_87826": 370,
      "m_x_5_87825": 380.58,
      "m_x_5_87823": 360,
      "m_x_5_87821": 400,
      "m_x_5_87820": 370,
      "m_x_5_87819": 400,
      "m_x_5_87818": 371,
      "m_x_5_87816": 400,
      "m_x_5_87815": 400,
      "m_x_5_87814": 400,
      "m_x_5_87813": 400,
      "m_x_5_87812": 366.48,
      "m_x_5_87810": 370,
      "m_x_5_87809": 369.99,
      "m_x_5_87807": 370.99,
      "m_x_5_87806": 360,
      "m_x_5_87804": 370,
      "m_x_5_31983": 0.59,
      "m_x_5_1830": 12.98,
      "m_x_5_31975": 0.64,
      "m_x_5_1832": 6.8,
      "m_x_5_31979": 0.45,
      "m_x_5_31981": 0.4,
      "m_x_5_32007": 0.63,
      "m_x_5_32008": 1.61,
      "m_x_5_32010": 3,
      "m_x_5_32011": 0.63,
      "m_x_5_31982": 0.66,
      "m_x_5_34184": 1.02,
      "m_x_5_35786": 99.88,
      "m_x_5_41556": 1.1,
      "m_x_5_54059": 1,
      "m_x_5_40562": 10000,
      "m_x_5_6250": 0.64,
      "m_x_5_6251": 0.9,
      "m_x_5_35780": 6.58,
      "m_x_5_2871": 2.99,
      "m_x_5_3573": 0.12,
      "m_x_5_3574": 1.34
    },
    "s_juedai": {
      "dimai": 68888.28,
      "fengwangjiang": 167.71,
      "shoupijiao": 70.14,
      "qicaixian": 117.93,
      "bairanxian": 3.39,
      "m_m_5_30852": 23.22,
      "m_m_5_30853": 86.9,
      "m_m_5_30828": 4.5,
      "m_m_5_89165": 10.63,
      "guajian_bei": 52.7,
      "baihua_bu": 58.08,
      "guajian_yao": 71.1,
      "shuran_bu": 93.53,
      "shuran_bag": 30.6,
      "jinfeng_bag": 5888.59,
      "wuseshi": 159.55,
      "m_m_5_30856": 16.11,
      "m_m_5_30855": 152.39,
      "geyin_zhang": 344.34,
      "m_m_5_89298": 40.17,
      "m_m_5_30679": 16.62,
      "m_m_5_30847": 11,
      "m_m_5_30846": 1.69,
      "yinsi_duan": 129,
      "m_m_5_30848": 22.15,
      "m_m_5_30850": 143.36,
      "m_m_5_30845": 171.75,
      "m_m_5_31397": 1.08,
      "m_m_5_89433": 4000.43,
      "m_m_5_89435": 5688.17,
      "m_m_5_31253": 322.39,
      "m_m_5_30844": 0.29,
      "m_m_5_35719": 32.39,
      "m_m_5_30873": 33.98,
      "m_m_5_90205": 200,
      "m_m_8_614": 688.67,
      "m_m_5_3819": 60.47,
      "m_m_5_3779": 6.99,
      "m_m_8_36148": 950.13,
      "m_m_5_89474": 2184.99,
      "m_m_5_3820": 4.88,
      "m_m_5_30827": 1.24,
      "m_m_5_89970": 170.27,
      "m_m_5_31978": 0.67,
      "m_m_5_31985": 0.67,
      "lucai": 17.06,
      "m_m_5_1831": 12.29,
      "m_m_5_31973": 0.63,
      "m_m_5_30849": 5.95,
      "m_m_5_71293": 32.49,
      "m_m_5_30826": 0.42,
      "m_m_5_30825": 0.01,
      "m_m_5_89171": 10.68,
      "m_m_5_31974": 0.69,
      "m_m_5_31968": 0.45,
      "m_m_5_71292": 46.46,
      "m_m_5_30824": 0.29,
      "m_m_5_31967": 0.47,
      "m_m_5_71281": 36.19,
      "m_m_5_30823": 0.74,
      "m_m_5_31969": 0.67,
      "m_m_5_71277": 17.75,
      "m_m_5_89315": 1465.83,
      "m_m_5_89969": 124.07,
      "m_m_5_31976": 0.68,
      "m_m_5_89303": 4500.48,
      "m_m_5_89971": 194.5,
      "lushui": 15.39,
      "m_m_5_30875": 1.34,
      "m_m_5_30843": 0.55,
      "m_m_5_30874": 29.99,
      "m_m_5_30842": 0.54,
      "m_m_5_5270": 1.28,
      "m_m_5_31970": 0.69,
      "m_m_5_5269": 0.02,
      "m_m_5_31977": 0.68,
      "m_m_5_31013": 165.26,
      "gancao": 1.66,
      "m_m_5_31012": 315.29,
      "m_m_5_26057": 6666,
      "m_m_5_26231": 1.06,
      "m_m_5_89352": 668.59,
      "m_m_5_89350": 652.84,
      "m_m_5_71269": 118.19,
      "m_m_5_89346": 710.29,
      "m_m_5_89167": 10.63,
      "m_m_5_89348": 120,
      "m_m_5_71285": 115.15,
      "jieyuan_dan": 64.49,
      "m_m_5_30836": 0.47,
      "m_m_5_30832": 2.05,
      "m_m_5_30833": 1.93,
      "m_m_5_89324": 47.19,
      "m_m_5_30831": 0.66,
      "m_m_5_89973": 164.83,
      "m_m_5_31996": 0.66,
      "m_m_5_71240": 88.01,
      "m_m_5_71266": 97.85,
      "m_m_5_30838": 0.78,
      "shanhu": 3.16,
      "m_m_5_6646": 0.98,
      "m_m_5_30835": 1.7,
      "m_m_5_89974": 74.99,
      "m_m_5_6648": 2.99,
      "m_m_5_71267": 150.61,
      "m_m_5_89168": 22.99,
      "yaoyin": 161.92,
      "m_m_5_31100": 45.97,
      "shaoyao": 2.22,
      "m_m_5_90206": 100.45,
      "m_m_5_31102": 0.1,
      "m_m_5_30834": 2.49,
      "m_m_5_31998": 0.64,
      "m_m_5_89328": 694.96,
      "m_m_5_89340": 75.6,
      "m_m_5_89325": 673.14,
      "m_m_5_71258": 44.05,
      "m_m_5_31999": 0.68,
      "m_m_5_89327": 79.3,
      "m_m_5_89966": 70,
      "m_m_5_10176": 3.38,
      "m_m_5_31991": 1.99,
      "m_m_5_89968": 95,
      "m_m_5_31993": 0.69,
      "m_m_5_89376": 393.28,
      "m_m_5_89965": 131.99,
      "m_m_5_31992": 0.69,
      "m_m_5_89375": 272,
      "m_m_5_89963": 128,
      "m_m_5_71192": 5.68,
      "m_m_5_89169": 10.64,
      "m_m_5_71188": 597.81,
      "m_m_5_31994": 0.69,
      "m_m_5_89962": 55.14,
      "m_m_5_31139": 3666.06,
      "m_m_5_89964": 51,
      "m_m_5_10027": 76.19,
      "m_m_5_89961": 43.06,
      "tiekuang": 2.17,
      "m_m_5_30676": 3.38,
      "m_m_5_30678": 2.56,
      "m_m_5_30674": 3.03,
      "m_m_5_30675": 3.3,
      "m_m_5_89967": 124.85,
      "m_m_5_6246": 0.08,
      "m_m_8_25762": 10,
      "m_m_5_30841": 3.12,
      "m_m_5_10172": 32.99,
      "m_m_5_35708": 6.49,
      "m_m_8_632": 788.49,
      "m_m_5_90353": 3528.16,
      "m_m_5_90257": 450,
      "m_m_5_2578": 6.66,
      "m_m_5_6068": 1.01,
      "muban": 20.9,
      "muliao": 3,
      "m_m_5_35707": 6.49,
      "qiwuling": 23.2,
      "m_m_5_35716": 19.98,
      "m_m_5_35715": 19.99,
      "zhuzi": 2.04,
      "m_m_5_35567": 1.51,
      "m_m_5_35714": 18.5,
      "m_m_5_35701": 0.69,
      "m_m_5_35713": 24.95,
      "m_m_10_1778": 919,
      "m_m_10_1880": 1197.55,
      "m_m_10_2034": 1291.3,
      "m_m_10_93": 10.71,
      "m_m_10_1882": 1409,
      "m_m_5_35717": 2,
      "m_m_10_164": 79.94,
      "m_m_5_52337": 1340.19,
      "m_m_5_35772": 1180.75,
      "m_m_5_87917": 308.95,
      "m_m_5_87881": 9999.99,
      "zasui": 0.27,
      "g_5_30681": 0.78,
      "g_5_30680": 1,
      "m_x_5_89353": 422.21,
      "m_x_5_89359": 2000,
      "m_x_5_89349": 626.55,
      "m_x_5_89355": 899.89,
      "m_x_5_89351": 544.38,
      "m_x_5_89357": 1000,
      "m_x_5_89436": 5870.31,
      "m_x_5_89450": 24000.25,
      "m_x_5_89438": 5777.77,
      "m_x_5_89439": 6799.26,
      "m_x_5_89440": 4221,
      "m_x_5_89441": 5887.75,
      "m_x_5_89443": 5500.68,
      "m_x_5_89444": 7955,
      "m_x_5_89445": 6849,
      "m_x_5_89335": 2989.27,
      "m_x_5_89331": 690.71,
      "m_x_5_89337": 1088.05,
      "m_x_5_89368": 965.66,
      "m_x_5_89372": 1400.13,
      "m_x_5_89369": 500.42,
      "m_x_5_90436": 71,
      "m_x_5_89379": 5798,
      "m_x_5_89397": 29967.17,
      "m_x_5_90437": 48.36,
      "m_x_5_89384": 5000.28,
      "m_x_5_89385": 6111.07,
      "m_x_5_89386": 4800,
      "m_x_5_89404": 15000.46,
      "m_x_5_89388": 6100,
      "m_x_5_89389": 5888.66,
      "m_x_5_89390": 5951,
      "m_x_5_89391": 6660.29,
      "m_x_5_89393": 6000.55,
      "m_x_5_89394": 15000,
      "m_x_5_89395": 7390.49,
      "m_x_5_89396": 6997.24,
      "m_x_5_20971": 110.42,
      "m_x_10_1281": 265.76,
      "m_x_10_2229": 399.3,
      "m_x_5_89317": 609.67,
      "m_x_10_2241": 1599.99,
      "m_x_5_89320": 1000,
      "m_x_5_89426": 2150,
      "m_x_5_89310": 8799.63,
      "m_x_5_89347": 1090.15,
      "m_x_5_89356": 1200,
      "m_x_5_89358": 995.99,
      "m_x_5_89326": 990.55,
      "m_x_5_89334": 4694.45,
      "m_x_5_26232": 1,
      "m_x_5_5232": 1,
      "m_x_5_5231": 1,
      "m_x_5_5230": 11.11,
      "m_x_5_5229": 1.6,
      "m_x_5_31050": 80,
      "m_x_5_31051": 683.68,
      "m_x_5_31052": 319.18,
      "m_x_5_31053": 470.53,
      "m_x_5_31054": 500.3,
      "m_x_5_31055": 20.16,
      "m_x_5_2299": 6666,
      "m_x_5_31056": 10000,
      "m_x_5_2300": 19999.98,
      "m_x_5_31057": 348.99,
      "m_x_5_31058": 10000,
      "m_x_5_31059": 10000,
      "m_x_5_2305": 3999.25,
      "m_x_5_71268": 139.65,
      "m_x_5_71270": 125.05,
      "m_x_5_71271": 117.57,
      "m_x_5_71272": 80.07,
      "m_x_5_71273": 107.08,
      "m_x_5_71274": 86.9,
      "m_x_5_71276": 44.56,
      "m_x_5_71278": 9.77,
      "m_x_5_71279": 44.05,
      "m_x_5_3505": 888.22,
      "m_x_5_71280": 36.29,
      "m_x_5_3485": 89.81,
      "m_x_5_2292": 4999.99,
      "m_x_5_71284": 87.85,
      "m_x_5_71286": 77.58,
      "m_x_5_71287": 80,
      "m_x_5_71288": 84.49,
      "m_x_5_71289": 7.67,
      "m_x_5_71290": 44.97,
      "m_x_5_71291": 26.05,
      "m_x_5_71294": 555.48,
      "m_x_5_71295": 493.23,
      "m_x_5_71296": 480.14,
      "m_x_5_71297": 234.95,
      "m_x_5_71298": 44.43,
      "m_x_5_71299": 222,
      "m_x_5_2303": 14444.55,
      "m_x_5_89316": 1445.15,
      "m_x_5_89318": 2000.31,
      "m_x_5_89361": 35.1,
      "m_x_5_89362": 63.67,
      "m_x_5_89363": 97.5,
      "m_x_5_89364": 157,
      "m_x_5_89365": 80.31,
      "m_x_8_616": 188.78,
      "m_x_8_617": 200.48,
      "m_x_8_615": 145.5,
      "m_x_5_3810": 80.92,
      "m_x_5_3811": 68.88,
      "m_x_5_3782": 2,
      "m_x_5_3797": 28.54,
      "m_x_5_2433": 9.99,
      "m_x_8_621": 694.16,
      "m_x_8_623": 651.1,
      "m_x_8_625": 655.08,
      "m_x_8_22": 29.59,
      "m_x_8_23": 15.91,
      "m_x_8_28": 0.09,
      "m_x_5_2467": 12.8,
      "m_x_8_37": 7.09,
      "m_x_8_38": 9.7,
      "m_x_5_5245": 108,
      "m_x_5_6077": 0.99,
      "m_x_8_31": 3.03,
      "m_x_8_69": 130.62,
      "m_x_8_70": 240.09,
      "m_x_5_22145": 60.5,
      "m_x_5_22917": 93,
      "m_x_5_22981": 154,
      "m_x_5_31252": 592,
      "m_x_5_31254": 332.99,
      "m_x_5_71193": 1350.19,
      "m_x_5_71194": 2687.26,
      "m_x_5_71195": 2300,
      "m_x_5_71196": 1300.01,
      "m_x_5_71197": 2275.89,
      "m_x_5_71198": 1600,
      "m_x_5_71199": 1250,
      "m_x_5_71200": 1579.99,
      "m_x_5_71201": 1580.71,
      "m_x_5_71202": 1000,
      "m_x_5_71203": 1840.25,
      "m_x_5_71204": 1799,
      "m_x_5_71205": 1300.82,
      "m_x_5_71206": 1567.28,
      "m_x_5_71207": 1700.9,
      "m_x_5_71211": 3250,
      "m_x_5_71212": 2000.3,
      "m_x_5_71214": 970.06,
      "m_x_5_71215": 2003.43,
      "m_x_5_71216": 694.56,
      "m_x_5_71219": 555.05,
      "m_x_5_71222": 480,
      "m_x_5_71223": 399.86,
      "m_x_5_71224": 453.8,
      "m_x_5_71225": 595.22,
      "m_x_5_71226": 550,
      "m_x_5_71227": 437,
      "m_x_5_71228": 300.99,
      "m_x_5_71229": 588.5,
      "m_x_5_71230": 785.29,
      "m_x_5_71231": 607.07,
      "m_x_5_89461": 1300,
      "m_x_5_89462": 1300,
      "m_x_5_89463": 1399.76,
      "m_x_5_89464": 997,
      "m_x_5_89465": 1200.76,
      "m_x_5_89466": 1099.96,
      "m_x_5_89467": 1218.86,
      "m_x_5_89468": 949.73,
      "m_x_5_89469": 1350.59,
      "m_x_5_89470": 1250.96,
      "m_x_5_89471": 2849.7,
      "m_x_5_89472": 1565.97,
      "m_x_5_89473": 1080.12,
      "m_x_5_90289": 400,
      "m_x_5_31099": 4.69,
      "m_x_5_31103": 8.23,
      "m_x_5_31104": 68.99,
      "m_x_5_31105": 119.99,
      "m_x_5_31106": 18.42,
      "m_x_5_31107": 130.34,
      "m_x_5_31108": 99.99,
      "m_x_5_40538": 180.24,
      "m_x_5_71243": 88.9,
      "m_x_5_71244": 120.62,
      "m_x_5_71245": 43.09,
      "m_x_5_71246": 103.36,
      "m_x_5_71247": 81.77,
      "m_x_5_71248": 135.68,
      "m_x_5_71250": 86.78,
      "m_x_5_71251": 97.78,
      "m_x_5_71252": 25.32,
      "m_x_5_71253": 30.87,
      "m_x_5_71254": 37.46,
      "m_x_5_71255": 44.03,
      "m_x_5_71256": 120.37,
      "m_x_5_71257": 49.01,
      "m_x_5_71259": 159,
      "m_x_5_71260": 110.18,
      "m_x_5_71261": 147.24,
      "m_x_5_71262": 85.2,
      "m_x_5_71263": 21.2,
      "m_x_5_71264": 31.38,
      "m_x_5_89342": 40.68,
      "m_x_5_89343": 83,
      "m_x_5_89344": 100.1,
      "m_x_5_89345": 80,
      "m_x_5_89724": 360.05,
      "m_x_5_2589": 8.99,
      "m_x_5_2631": 79.98,
      "m_x_8_629": 699.39,
      "m_x_8_630": 688.66,
      "m_x_8_631": 688.82,
      "m_x_5_2189": 9.07,
      "m_x_5_2594": 3,
      "m_x_5_2603": 1.2,
      "m_x_8_633": 585.01,
      "m_x_8_635": 688,
      "m_x_8_17546": 955.55,
      "m_x_5_6024": 10000,
      "m_x_5_6247": 0.73,
      "m_x_5_6248": 0.53,
      "m_x_5_10028": 59.56,
      "m_x_5_31140": 99.08,
      "m_x_5_31143": 559.53,
      "m_x_5_71129": 118.16,
      "m_x_5_71130": 108.25,
      "m_x_5_71131": 85.89,
      "m_x_5_71132": 129.43,
      "m_x_5_71133": 1109.03,
      "m_x_5_71134": 1900.9,
      "m_x_5_71135": 2099.94,
      "m_x_5_71136": 1100.11,
      "m_x_5_71137": 1933.99,
      "m_x_5_71139": 1597.83,
      "m_x_5_71140": 2847.56,
      "m_x_5_71141": 1755,
      "m_x_5_71143": 1815,
      "m_x_5_71144": 2371.9,
      "m_x_5_71145": 1226.2,
      "m_x_5_71146": 1700.12,
      "m_x_5_71147": 2000.89,
      "m_x_5_71148": 1090.33,
      "m_x_5_71149": 1888.88,
      "m_x_5_71150": 1750,
      "m_x_5_71151": 1196.5,
      "m_x_5_71152": 2350,
      "m_x_5_71153": 2200.21,
      "m_x_5_71159": 2307.89,
      "m_x_5_71160": 2998.97,
      "m_x_5_71164": 694,
      "m_x_5_71165": 695.26,
      "m_x_5_71166": 480,
      "m_x_5_71167": 596.79,
      "m_x_5_71168": 555.7,
      "m_x_5_71169": 519.82,
      "m_x_5_71170": 599.9,
      "m_x_5_71171": 724,
      "m_x_5_71172": 555.74,
      "m_x_5_71173": 545.64,
      "m_x_5_71174": 587.99,
      "m_x_5_71175": 887.6,
      "m_x_5_71176": 1283.53,
      "m_x_5_71182": 409.5,
      "m_x_5_71184": 500.8,
      "m_x_5_71185": 600,
      "m_x_5_71186": 564.19,
      "m_x_5_71187": 399.76,
      "m_x_5_71189": 18.66,
      "m_x_5_71190": 37,
      "m_x_5_54537": 34.99,
      "m_x_5_89415": 1177,
      "m_x_5_89416": 1243.98,
      "m_x_5_89417": 1429,
      "m_x_5_89418": 896.99,
      "m_x_5_89419": 1950.99,
      "m_x_5_89420": 1592.86,
      "m_x_5_89421": 797,
      "m_x_5_89422": 1006,
      "m_x_5_89423": 933,
      "m_x_5_89424": 2004,
      "m_x_5_89425": 1380,
      "m_x_5_89429": 2442.91,
      "m_x_5_89430": 2456.23,
      "m_x_5_89431": 1301.56,
      "m_x_5_90213": 39,
      "m_x_5_35004": 1.9,
      "m_x_5_35005": 1.34,
      "m_x_5_35006": 1.8,
      "m_x_5_35007": 3.18,
      "m_x_5_35044": 0.25,
      "m_x_10_155": 1250.5,
      "m_x_10_159": 858.31,
      "m_x_10_163": 40.27,
      "m_x_10_95": 78.98,
      "m_x_10_103": 80.62,
      "m_x_10_105": 70.32,
      "m_x_10_108": 80.29,
      "m_x_5_35771": 748.64,
      "m_x_5_35773": 17,
      "m_x_5_35774": 1248.46,
      "m_x_5_35775": 200.42,
      "m_x_10_133": 172.32,
      "m_x_10_446": 1650,
      "m_x_10_447": 1689.87,
      "m_x_10_479": 2859.56,
      "m_x_10_490": 1750.92,
      "m_x_5_38373": 1855,
      "m_x_5_38374": 1222.98,
      "m_x_5_38927": 4.95,
      "m_x_10_1083": 693.95,
      "m_x_10_1278": 294.86,
      "m_x_10_1279": 299.96,
      "m_x_10_1280": 231.21,
      "m_x_10_1772": 2020,
      "m_x_10_1774": 964.55,
      "m_x_10_1282": 268.89,
      "m_x_10_1285": 297.9,
      "m_x_10_1454": 30.05,
      "m_x_10_1455": 60.29,
      "m_x_10_1456": 21.35,
      "m_x_10_1457": 40.59,
      "m_x_10_1458": 60.47,
      "m_x_10_1461": 459.37,
      "m_x_10_1462": 445.01,
      "m_x_10_2097": 376.05,
      "m_x_10_2098": 375.43,
      "m_x_10_2099": 376.34,
      "m_x_10_2100": 376.59,
      "m_x_10_2101": 265,
      "m_x_10_2102": 235,
      "m_x_10_2103": 225,
      "m_x_10_2104": 245,
      "m_x_10_2105": 225,
      "m_x_10_2106": 225,
      "m_x_10_2107": 235,
      "m_x_10_2230": 200.51,
      "m_x_10_2231": 390,
      "m_x_10_2232": 144.96,
      "m_x_10_1879": 481.16,
      "m_x_10_1895": 286,
      "m_x_10_1896": 128.46,
      "m_x_10_1898": 150.97,
      "m_x_10_1881": 849.27,
      "m_x_10_2233": 200.4,
      "m_x_10_2234": 240,
      "m_x_10_2235": 378,
      "m_x_10_2236": 295.98,
      "m_x_10_2237": 390,
      "m_x_10_2238": 420,
      "m_x_10_2242": 1599.99,
      "m_x_10_2243": 1599.99,
      "m_x_10_2244": 1599.99,
      "m_x_5_87875": 478.48,
      "m_x_5_87874": 688.88,
      "m_x_5_87873": 663.65,
      "m_x_5_87871": 688.88,
      "m_x_5_87870": 450.87,
      "m_x_5_87822": 588.88,
      "m_x_5_1830": 18.05,
      "m_x_5_31975": 0.67,
      "m_x_5_1832": 30,
      "m_x_5_31979": 0.55,
      "m_x_5_31981": 10000,
      "m_x_5_32007": 0.7,
      "m_x_5_32008": 1,
      "m_x_5_32010": 1.12,
      "m_x_5_32011": 1.87,
      "m_x_5_36491": 1.99,
      "m_x_5_39235": 1,
      "m_x_5_41556": 19.83,
      "m_x_5_44402": 10,
      "m_x_5_81662": 1.77,
      "m_x_5_6250": 1.31,
      "m_x_5_6251": 1.46,
      "m_x_5_35780": 6.49,
      "m_x_5_2871": 6.99,
      "m_x_5_3573": 0.97,
      "m_x_5_3843": 5.37,
      "m_x_5_3574": 2.65
    },
    "s_tianeping": {
      "dimai": 74500.94,
      "fengwangjiang": 185.02,
      "shoupijiao": 67.03,
      "qicaixian": 163.09,
      "bairanxian": 3.32,
      "fengyu_yi": 2553,
      "m_m_5_30852": 22.03,
      "m_m_5_30853": 90,
      "m_m_5_30828": 6.19,
      "m_m_5_89165": 10,
      "m_m_5_32000": 0.7,
      "guajian_bei": 55.52,
      "baihua_bu": 74.51,
      "guajian_yao": 79.7,
      "shuran_bu": 90.21,
      "m_m_5_32001": 0.62,
      "m_m_5_10173": 60.7,
      "wuseshi": 99.79,
      "m_m_5_30856": 14,
      "m_m_5_30855": 155.88,
      "geyin_zhang": 150.95,
      "m_m_5_89298": 35.99,
      "m_m_5_30679": 17.86,
      "m_m_5_32004": 1.17,
      "m_m_5_30847": 11.36,
      "m_m_5_30846": 2.33,
      "yinsi_duan": 128.56,
      "m_m_5_32003": 2.91,
      "m_m_5_30848": 25.15,
      "m_m_5_30850": 142.46,
      "m_m_5_30845": 189.03,
      "m_m_5_31397": 1,
      "m_m_5_89435": 6599.96,
      "m_m_5_30844": 0.43,
      "m_m_5_90210": 120.66,
      "m_m_5_30873": 38.83,
      "m_m_5_90205": 29.54,
      "m_m_8_614": 197.66,
      "shanshui_juan": 50,
      "m_m_5_3819": 60,
      "m_m_5_3779": 0.88,
      "m_m_8_36148": 698.99,
      "m_m_5_89474": 3528.4,
      "m_m_5_30827": 1.1,
      "m_m_5_89970": 214.9,
      "m_m_5_32014": 121.64,
      "m_m_5_31978": 0.47,
      "m_m_5_31985": 1.67,
      "lucai": 17.89,
      "m_m_5_1831": 23.22,
      "m_m_5_31973": 1.79,
      "m_m_5_30849": 5.79,
      "m_m_5_71293": 30.52,
      "m_m_5_30826": 0.4,
      "m_m_5_30825": 0.01,
      "m_m_5_89171": 11,
      "m_m_5_71292": 35,
      "m_m_5_30824": 0.18,
      "m_m_5_71281": 17.01,
      "m_m_5_30823": 0.5,
      "m_m_5_31969": 0.58,
      "m_m_5_71277": 29.14,
      "m_m_5_89315": 1300.66,
      "m_m_5_89969": 130,
      "m_m_5_31976": 0.72,
      "m_m_5_89303": 5288.25,
      "m_m_5_89971": 214.83,
      "lushui": 14.24,
      "m_m_5_30875": 0.99,
      "m_m_5_30843": 0.97,
      "m_m_5_30874": 31,
      "m_m_5_30842": 0.49,
      "m_m_5_5270": 0.7,
      "m_m_5_31970": 0.59,
      "m_m_5_5269": 0.05,
      "m_m_5_31977": 0.55,
      "m_m_5_31013": 180.5,
      "gancao": 12.04,
      "m_m_5_31012": 338.77,
      "m_m_5_89172": 59.95,
      "m_m_5_89304": 5555.78,
      "m_m_5_26057": 2091.11,
      "m_m_5_89352": 617.38,
      "m_m_5_89350": 594.79,
      "m_m_5_71269": 97.49,
      "m_m_5_89346": 754.49,
      "m_m_5_89167": 26.42,
      "m_m_5_89348": 229.58,
      "m_m_5_71285": 109.87,
      "jieyuan_dan": 96.9,
      "m_m_5_30836": 3.78,
      "m_m_5_30832": 1.37,
      "m_m_5_30833": 1.79,
      "m_m_5_89324": 185.05,
      "m_m_5_30831": 0.98,
      "m_m_5_89973": 159.99,
      "m_m_5_31996": 2.57,
      "m_m_5_71241": 77.77,
      "m_m_5_71240": 78.85,
      "m_m_5_71266": 43.99,
      "m_m_5_30838": 1,
      "shanhu": 3,
      "m_m_5_6646": 2.22,
      "m_m_5_30835": 3.09,
      "m_m_5_89974": 50.53,
      "m_m_5_6648": 0.95,
      "m_m_5_71267": 95.23,
      "m_m_5_89168": 44.88,
      "yaoyin": 176.9,
      "m_m_5_31100": 89.25,
      "m_m_5_89322": 870,
      "shaoyao": 2.04,
      "m_m_5_31102": 0.12,
      "m_m_5_30834": 2.25,
      "m_m_5_89328": 719.7,
      "m_m_5_89332": 1230.29,
      "m_m_5_89340": 85,
      "m_m_5_89325": 696.22,
      "m_m_5_71258": 77.38,
      "m_m_5_89327": 70.39,
      "m_m_5_89966": 85.12,
      "m_m_5_10176": 2.6,
      "m_m_5_89377": 400.31,
      "m_m_5_89968": 70,
      "m_m_5_31993": 2.99,
      "m_m_5_89376": 220,
      "m_m_5_89965": 127.69,
      "m_m_5_89375": 489,
      "m_m_5_89963": 88.19,
      "m_m_5_71192": 2.05,
      "m_m_5_71188": 553.81,
      "m_m_5_31994": 0.99,
      "m_m_5_89962": 77.77,
      "m_m_5_31139": 3803.9,
      "m_m_5_89964": 64.01,
      "m_m_5_10027": 78.88,
      "m_m_5_89961": 139.88,
      "tiekuang": 5.87,
      "m_m_5_30676": 3.89,
      "m_m_5_30678": 1.39,
      "m_m_5_30674": 3,
      "m_m_5_30675": 9.88,
      "m_m_5_89967": 143.77,
      "m_m_5_6246": 0.1,
      "m_m_5_32787": 1.03,
      "m_m_8_25762": 19.09,
      "m_m_5_30841": 3.21,
      "m_m_5_35708": 12,
      "m_m_5_90032": 9999,
      "m_m_8_632": 778,
      "m_m_8_634": 965.2,
      "m_m_5_2578": 1.38,
      "m_m_5_6068": 1,
      "muban": 20.6,
      "muliao": 3.8,
      "m_m_5_35707": 7.04,
      "m_m_5_35703": 1.3,
      "qiwuling": 21.39,
      "m_m_5_35716": 18.26,
      "m_m_5_35702": 3.42,
      "m_m_5_35715": 19.6,
      "zhuzi": 1.62,
      "m_m_5_35567": 1.54,
      "m_m_5_35714": 15,
      "m_m_5_35701": 1.07,
      "m_m_5_35713": 17.49,
      "m_m_5_35705": 0.96,
      "m_m_10_1778": 899.26,
      "m_m_10_948": 843.83,
      "m_m_10_1880": 1472.73,
      "m_m_10_2034": 1972,
      "m_m_10_93": 10.73,
      "m_m_5_35717": 2.04,
      "m_m_10_164": 186,
      "m_m_5_52337": 1636.89,
      "m_m_5_40232": 4309.51,
      "m_m_5_35772": 1893.59,
      "m_m_5_87917": 282.67,
      "m_m_5_87881": 8088.59,
      "zasui": 0.29,
      "g_5_30681": 0.71,
      "g_5_30680": 0.82,
      "m_x_5_89359": 2147.64,
      "m_x_5_89355": 1329.91,
      "m_x_5_89351": 588.81,
      "m_x_5_89357": 3981.91,
      "m_x_5_89434": 7070.4,
      "m_x_5_89436": 6799.91,
      "m_x_5_89438": 5999.63,
      "m_x_5_89439": 9999,
      "m_x_5_89440": 4800.56,
      "m_x_5_89441": 5150.77,
      "m_x_5_89443": 6598.5,
      "m_x_5_89444": 5672.45,
      "m_x_5_89445": 6150.14,
      "m_x_5_89329": 818.7,
      "m_x_5_89335": 1277.89,
      "m_x_5_89331": 716.03,
      "m_x_5_89337": 2167.93,
      "m_x_5_89368": 982.76,
      "m_x_5_89372": 1480.01,
      "m_x_5_89369": 1266,
      "m_x_5_90436": 78.01,
      "m_x_5_89379": 4654.6,
      "m_x_5_90437": 34.44,
      "m_x_5_89383": 9999,
      "m_x_5_89385": 5298.87,
      "m_x_5_89386": 8611.65,
      "m_x_5_89388": 5170.22,
      "m_x_5_89389": 6554,
      "m_x_5_89390": 4444,
      "m_x_5_89391": 5581.99,
      "m_x_5_89392": 7199.79,
      "m_x_5_89393": 9180.26,
      "m_x_5_89394": 9998.22,
      "m_x_5_89396": 6150,
      "m_x_5_20971": 180.09,
      "m_x_10_1894": 59.99,
      "m_x_10_2229": 321.06,
      "m_x_5_89317": 1050,
      "m_x_10_2028": 1543.38,
      "m_x_10_2241": 1599.38,
      "m_x_5_89320": 1300.99,
      "m_x_5_89426": 2199.84,
      "m_x_5_89428": 1792.07,
      "m_x_5_89310": 11597.64,
      "m_x_5_89347": 1054.39,
      "m_x_5_89356": 1589.94,
      "m_x_5_89358": 1680.01,
      "m_x_5_89326": 1098.56,
      "m_x_5_89334": 1293.59,
      "m_x_5_26232": 1,
      "m_x_5_5232": 2.05,
      "m_x_5_5231": 1.65,
      "m_x_5_5230": 2.64,
      "m_x_5_5229": 1.23,
      "m_x_5_31050": 12.52,
      "m_x_5_2304": 5999,
      "m_x_5_31051": 586.05,
      "m_x_5_31052": 569.79,
      "m_x_5_31053": 640.98,
      "m_x_5_31054": 455.99,
      "m_x_5_31055": 5.66,
      "m_x_5_31056": 67.97,
      "m_x_5_2300": 5555.33,
      "m_x_5_31057": 302.99,
      "m_x_5_31058": 10000,
      "m_x_5_31060": 347.19,
      "m_x_5_31061": 359.98,
      "m_x_5_71268": 113.61,
      "m_x_5_71270": 115.76,
      "m_x_5_2302": 3291.19,
      "m_x_5_71271": 80.02,
      "m_x_5_71272": 160.69,
      "m_x_5_71273": 112.54,
      "m_x_5_71274": 288.71,
      "m_x_5_71275": 80,
      "m_x_5_71276": 33,
      "m_x_5_71278": 17.98,
      "m_x_5_71279": 44.09,
      "m_x_5_3505": 2110.25,
      "m_x_5_71280": 111.79,
      "m_x_5_3485": 888.86,
      "m_x_5_71282": 17.9,
      "m_x_5_3236": 6481.93,
      "m_x_5_71283": 99.89,
      "m_x_5_2292": 2211.12,
      "m_x_5_71284": 86.15,
      "m_x_5_71286": 80.05,
      "m_x_5_71287": 79.87,
      "m_x_5_71288": 109.15,
      "m_x_5_71289": 40.99,
      "m_x_5_71291": 34.97,
      "m_x_5_71294": 540.37,
      "m_x_5_71295": 519.22,
      "m_x_5_71296": 476.21,
      "m_x_5_71297": 198.54,
      "m_x_5_71298": 44.68,
      "m_x_5_71299": 615.6,
      "m_x_5_2303": 10999.01,
      "m_x_5_71300": 5.77,
      "m_x_5_89316": 1590.2,
      "m_x_5_89318": 2290.5,
      "m_x_5_89361": 40,
      "m_x_5_89362": 45.99,
      "m_x_5_89363": 84.98,
      "m_x_5_89364": 149.99,
      "m_x_5_89365": 280,
      "m_x_8_616": 1199.88,
      "m_x_8_617": 1399.46,
      "m_x_8_615": 1499.82,
      "m_x_5_3810": 47.5,
      "m_x_5_3811": 60.73,
      "m_x_8_25": 20.82,
      "m_x_8_26": 20.99,
      "m_x_8_21": 0.27,
      "m_x_5_3782": 6.62,
      "m_x_5_3797": 5,
      "m_x_5_2433": 20,
      "m_x_8_622": 1000,
      "m_x_8_623": 1299.62,
      "m_x_8_624": 1299,
      "m_x_8_23": 24.62,
      "m_x_8_24": 3.99,
      "m_x_8_627": 194.89,
      "m_x_5_2467": 60.93,
      "m_x_8_37": 2.6,
      "m_x_8_38": 13.12,
      "m_x_5_5245": 60.72,
      "m_x_5_5246": 20.65,
      "m_x_5_6077": 0.99,
      "m_x_8_31": 5,
      "m_x_8_69": 266.58,
      "m_x_8_70": 235.8,
      "m_x_5_22145": 65.9,
      "m_x_5_22917": 88.06,
      "m_x_5_22981": 101.88,
      "m_x_5_31252": 198.05,
      "m_x_5_31254": 180,
      "m_x_5_71193": 1544.91,
      "m_x_5_71194": 1888,
      "m_x_5_71195": 1999.91,
      "m_x_5_71196": 1173.23,
      "m_x_5_71197": 2000.03,
      "m_x_5_71198": 1399.44,
      "m_x_5_71199": 1022,
      "m_x_5_71200": 1699.22,
      "m_x_5_71201": 1176,
      "m_x_5_71202": 1021,
      "m_x_5_71203": 1711.86,
      "m_x_5_71204": 1898.88,
      "m_x_5_71205": 844,
      "m_x_5_71207": 2000.63,
      "m_x_5_71211": 1398.6,
      "m_x_5_71214": 920.72,
      "m_x_5_71215": 1760.2,
      "m_x_5_71216": 225.73,
      "m_x_5_71218": 543,
      "m_x_5_71219": 420,
      "m_x_5_71220": 441.34,
      "m_x_5_71221": 343.02,
      "m_x_5_71222": 342.01,
      "m_x_5_71223": 444,
      "m_x_5_71224": 344.01,
      "m_x_5_71225": 388,
      "m_x_5_71226": 355.56,
      "m_x_5_71227": 500,
      "m_x_5_71228": 298.96,
      "m_x_5_71229": 512.77,
      "m_x_5_71230": 666.91,
      "m_x_5_71231": 777.84,
      "m_x_5_71233": 599.29,
      "m_x_5_71234": 598.38,
      "m_x_5_71235": 555.99,
      "m_x_5_71236": 559,
      "m_x_5_71237": 365.1,
      "m_x_5_71238": 609.6,
      "m_x_5_71239": 677.75,
      "m_x_5_89461": 1560.6,
      "m_x_5_89462": 1600.16,
      "m_x_5_89463": 1200.23,
      "m_x_5_89464": 1345.65,
      "m_x_5_89465": 1420.99,
      "m_x_5_89466": 999,
      "m_x_5_89467": 2423.23,
      "m_x_5_89468": 1679.77,
      "m_x_5_89469": 1221.28,
      "m_x_5_89470": 1515.86,
      "m_x_5_89471": 2177,
      "m_x_5_89472": 2999.95,
      "m_x_5_89473": 3899.88,
      "m_x_5_90289": 886.03,
      "m_x_5_31099": 33.08,
      "m_x_5_31103": 19.43,
      "m_x_5_31104": 72.26,
      "m_x_5_31105": 288.25,
      "m_x_5_31106": 23,
      "m_x_5_31107": 134.98,
      "m_x_5_31108": 130.91,
      "m_x_5_40538": 85.68,
      "m_x_5_71242": 80.05,
      "m_x_5_71243": 165.2,
      "m_x_5_71244": 94.43,
      "m_x_5_71245": 107.8,
      "m_x_5_71246": 178.51,
      "m_x_5_71247": 170.17,
      "m_x_5_71248": 92.44,
      "m_x_5_71249": 60,
      "m_x_5_71250": 46.57,
      "m_x_5_71251": 37.52,
      "m_x_5_71252": 59.98,
      "m_x_5_71253": 66.72,
      "m_x_5_71254": 88.47,
      "m_x_5_71255": 37,
      "m_x_5_71256": 85.89,
      "m_x_5_71257": 40,
      "m_x_5_71259": 86.53,
      "m_x_5_71260": 139.89,
      "m_x_5_71261": 127.63,
      "m_x_5_71262": 97.3,
      "m_x_5_71263": 111.21,
      "m_x_5_71264": 44.35,
      "m_x_5_71265": 26.79,
      "m_x_5_89341": 101.82,
      "m_x_5_89342": 49.74,
      "m_x_5_89343": 80.44,
      "m_x_5_89344": 247,
      "m_x_5_89345": 77.34,
      "m_x_5_89724": 366,
      "m_x_8_17540": 698,
      "m_x_5_2631": 16.07,
      "m_x_8_629": 100.16,
      "m_x_8_631": 160.4,
      "m_x_5_2189": 9.04,
      "m_x_5_2594": 7.02,
      "m_x_8_17539": 590,
      "m_x_5_2603": 12.47,
      "m_x_8_633": 550.24,
      "m_x_8_17544": 500.51,
      "m_x_8_17546": 700,
      "m_x_5_6024": 0.94,
      "m_x_5_6076": 0.88,
      "m_x_5_6247": 0.83,
      "m_x_5_6248": 0.65,
      "m_x_5_10028": 61,
      "m_x_5_31140": 135.18,
      "m_x_5_31141": 324,
      "m_x_5_31142": 271.31,
      "m_x_5_31143": 77,
      "m_x_5_40539": 299.9,
      "m_x_5_71129": 107.45,
      "m_x_5_71130": 119.74,
      "m_x_5_71131": 90.01,
      "m_x_5_71132": 200,
      "m_x_5_71133": 1099.91,
      "m_x_5_71134": 1844.75,
      "m_x_5_71135": 2440.66,
      "m_x_5_71136": 977.99,
      "m_x_5_71137": 2999.97,
      "m_x_5_71138": 1998.31,
      "m_x_5_71139": 1698.87,
      "m_x_5_71140": 2666.11,
      "m_x_5_71141": 1697.72,
      "m_x_5_71143": 1911.99,
      "m_x_5_71144": 1533.89,
      "m_x_5_71145": 945,
      "m_x_5_71146": 1900,
      "m_x_5_71147": 1722,
      "m_x_5_71148": 1041.54,
      "m_x_5_71149": 2100.18,
      "m_x_5_71150": 1299,
      "m_x_5_71151": 1144.97,
      "m_x_5_71152": 2997.82,
      "m_x_5_71153": 2555.41,
      "m_x_5_71159": 2511.93,
      "m_x_5_71160": 1090.4,
      "m_x_5_71161": 111.11,
      "m_x_5_71163": 699.59,
      "m_x_5_71164": 300.71,
      "m_x_5_71166": 228,
      "m_x_5_71167": 343.05,
      "m_x_5_71168": 200.66,
      "m_x_5_71169": 388.51,
      "m_x_5_71170": 555.88,
      "m_x_5_71171": 511.02,
      "m_x_5_71172": 666.96,
      "m_x_5_71173": 334.12,
      "m_x_5_71174": 498.84,
      "m_x_5_71175": 600.53,
      "m_x_5_71176": 532,
      "m_x_5_71177": 555,
      "m_x_5_71181": 599,
      "m_x_5_71182": 332.91,
      "m_x_5_71184": 322.71,
      "m_x_5_71186": 399,
      "m_x_5_71189": 80,
      "m_x_5_71190": 99,
      "m_x_5_71191": 111.25,
      "m_x_5_54537": 261.22,
      "m_x_5_89415": 1799.47,
      "m_x_5_89416": 1199.32,
      "m_x_5_89417": 1500,
      "m_x_5_89418": 1021,
      "m_x_5_89419": 1926,
      "m_x_5_89420": 1312.65,
      "m_x_5_89421": 1211.92,
      "m_x_5_89423": 1277.15,
      "m_x_5_89424": 1703.99,
      "m_x_5_89425": 1220.17,
      "m_x_5_89429": 1788,
      "m_x_5_89430": 2771.01,
      "m_x_5_90213": 19,
      "m_x_10_171": 1931.93,
      "m_x_10_172": 2862.57,
      "m_x_5_35004": 2,
      "m_x_5_35005": 2,
      "m_x_5_35006": 2.87,
      "m_x_5_35007": 2,
      "m_x_5_35044": 0.01,
      "m_x_10_151": 1182.01,
      "m_x_10_152": 1983.87,
      "m_x_10_154": 1869.84,
      "m_x_10_155": 2660,
      "m_x_10_156": 700.7,
      "m_x_10_158": 790,
      "m_x_10_159": 1976.84,
      "m_x_10_160": 2858.87,
      "m_x_10_161": 2872,
      "m_x_10_162": 2754.93,
      "m_x_10_166": 1676,
      "m_x_10_167": 1492.56,
      "m_x_10_169": 1670.56,
      "m_x_10_94": 173.61,
      "m_x_10_95": 335.43,
      "m_x_10_96": 193,
      "m_x_10_97": 166.43,
      "m_x_10_98": 338.43,
      "m_x_10_99": 214.43,
      "m_x_10_100": 385.71,
      "m_x_10_101": 146,
      "m_x_10_103": 326,
      "m_x_10_104": 498.71,
      "m_x_10_105": 164.7,
      "m_x_10_106": 281.43,
      "m_x_10_107": 209.43,
      "m_x_10_108": 184.43,
      "m_x_10_109": 58.62,
      "m_x_10_110": 94.43,
      "m_x_5_35771": 886.66,
      "m_x_5_35773": 159.59,
      "m_x_10_131": 964.87,
      "m_x_10_132": 399.87,
      "m_x_10_133": 586.7,
      "m_x_10_134": 625.74,
      "m_x_10_135": 696.02,
      "m_x_10_136": 469.62,
      "m_x_10_137": 773.87,
      "m_x_10_139": 686,
      "m_x_10_140": 1465,
      "m_x_10_141": 2675.56,
      "m_x_10_142": 441.64,
      "m_x_10_143": 1114.84,
      "m_x_10_145": 1267,
      "m_x_10_146": 894,
      "m_x_10_147": 1197,
      "m_x_10_148": 8,
      "m_x_10_149": 2426,
      "m_x_10_150": 2875,
      "m_x_10_130": 530,
      "m_x_10_111": 246.49,
      "m_x_10_112": 119,
      "m_x_10_113": 52.77,
      "m_x_10_114": 359.14,
      "m_x_10_115": 459.43,
      "m_x_10_117": 1795.92,
      "m_x_10_121": 459.74,
      "m_x_10_122": 300.72,
      "m_x_10_123": 2000.33,
      "m_x_10_125": 1162.7,
      "m_x_10_126": 1236.7,
      "m_x_10_127": 2456.83,
      "m_x_10_128": 2500,
      "m_x_10_129": 1477.51,
      "m_x_10_421": 1657,
      "m_x_10_427": 2661.83,
      "m_x_10_429": 989.93,
      "m_x_10_433": 1467.93,
      "m_x_10_434": 1458.84,
      "m_x_10_436": 3983.93,
      "m_x_10_437": 3982.93,
      "m_x_10_438": 2188.43,
      "m_x_10_444": 1900,
      "m_x_10_446": 1471,
      "m_x_10_447": 1971.04,
      "m_x_10_450": 1195.73,
      "m_x_10_469": 2659.87,
      "m_x_10_470": 978.91,
      "m_x_10_471": 2667,
      "m_x_10_492": 3983.83,
      "m_x_10_493": 3656.93,
      "m_x_5_38127": 1500,
      "m_x_5_38373": 2205.78,
      "m_x_5_38374": 1589.06,
      "m_x_5_38927": 4.57,
      "m_x_10_672": 2658.84,
      "m_x_10_673": 1192.87,
      "m_x_10_675": 2460.92,
      "m_x_10_677": 2257.71,
      "m_x_10_678": 1641,
      "m_x_10_679": 2477.93,
      "m_x_10_680": 1548,
      "m_x_10_681": 448.22,
      "m_x_10_682": 2176.78,
      "m_x_10_683": 1684,
      "m_x_10_685": 2964.72,
      "m_x_10_686": 1573.71,
      "m_x_10_957": 676.22,
      "m_x_10_1082": 795,
      "m_x_10_1083": 613.36,
      "m_x_10_1085": 584,
      "m_x_10_1086": 872.7,
      "m_x_10_1087": 624.7,
      "m_x_10_1088": 1499.7,
      "m_x_10_1089": 594.7,
      "m_x_10_1090": 886.96,
      "m_x_10_1277": 1142.85,
      "m_x_10_1278": 946.84,
      "m_x_10_1279": 1062.86,
      "m_x_10_687": 2910.52,
      "m_x_10_688": 2989.53,
      "m_x_10_943": 1395.37,
      "m_x_10_944": 665.79,
      "m_x_10_946": 983.51,
      "m_x_10_950": 582.9,
      "m_x_10_951": 483.9,
      "m_x_10_952": 3985,
      "m_x_10_955": 811.01,
      "m_x_10_956": 1192.1,
      "m_x_10_1570": 1550.53,
      "m_x_10_1572": 1963.51,
      "m_x_10_1573": 622.7,
      "m_x_10_1574": 622.7,
      "m_x_10_1575": 1089.84,
      "m_x_10_1576": 537.73,
      "m_x_10_1577": 623.7,
      "m_x_10_1578": 995.85,
      "m_x_10_1605": 1012.38,
      "m_x_10_1606": 1627.54,
      "m_x_10_1772": 2899,
      "m_x_10_1773": 2886.51,
      "m_x_10_1774": 1163.54,
      "m_x_10_1283": 1258.84,
      "m_x_10_1284": 497.84,
      "m_x_10_1286": 255.97,
      "m_x_10_1453": 666,
      "m_x_10_1454": 60.37,
      "m_x_10_1455": 45.82,
      "m_x_10_1456": 60.84,
      "m_x_10_1457": 32.01,
      "m_x_10_1458": 45.88,
      "m_x_10_1460": 1022.7,
      "m_x_10_1461": 487.67,
      "m_x_10_1462": 2880.84,
      "m_x_10_1463": 1583.84,
      "m_x_10_1464": 994.7,
      "m_x_10_2036": 3074.77,
      "m_x_10_2097": 490.35,
      "m_x_10_2098": 1059.98,
      "m_x_10_2101": 1599,
      "m_x_10_2102": 1599,
      "m_x_10_2103": 200,
      "m_x_10_2104": 1599,
      "m_x_10_2105": 1599,
      "m_x_10_2106": 1599,
      "m_x_10_2107": 1599,
      "m_x_10_2230": 364.99,
      "m_x_10_2231": 199.09,
      "m_x_10_2232": 325.99,
      "m_x_10_1879": 957.4,
      "m_x_10_1895": 289.05,
      "m_x_10_1896": 149.44,
      "m_x_10_1897": 199.66,
      "m_x_10_1898": 199.22,
      "m_x_10_1881": 891.06,
      "m_x_10_2029": 2496,
      "m_x_10_2031": 2967.51,
      "m_x_10_2032": 747.17,
      "m_x_10_2033": 358.31,
      "m_x_10_2035": 2560.38,
      "m_x_10_2233": 265,
      "m_x_10_2234": 199.26,
      "m_x_10_2235": 299,
      "m_x_10_2236": 211.08,
      "m_x_10_2237": 250,
      "m_x_10_2238": 250,
      "m_x_10_2242": 1575.2,
      "m_x_5_87875": 399.96,
      "m_x_5_87874": 400,
      "m_x_5_87872": 800,
      "m_x_5_87871": 799.34,
      "m_x_5_87870": 400,
      "m_x_5_87869": 400,
      "m_x_5_87868": 799.88,
      "m_x_5_87867": 400,
      "m_x_5_87866": 400,
      "m_x_5_87864": 799.99,
      "m_x_5_87861": 400,
      "m_x_5_87859": 400,
      "m_x_5_87857": 400,
      "m_x_5_87856": 400,
      "m_x_5_87855": 400,
      "m_x_5_87849": 400,
      "m_x_5_87848": 799.99,
      "m_x_5_87847": 799.99,
      "m_x_5_87846": 400,
      "m_x_5_87845": 400,
      "m_x_5_87835": 799.66,
      "m_x_5_87834": 799.66,
      "m_x_5_87833": 799.66,
      "m_x_5_87827": 790.77,
      "m_x_5_87826": 400,
      "m_x_5_87822": 800,
      "m_x_5_87816": 800,
      "m_x_5_87810": 999.99,
      "m_x_5_87808": 799.66,
      "m_x_5_87807": 799.99,
      "m_x_5_87805": 400,
      "m_x_5_90212": 80,
      "m_x_5_31983": 0.9,
      "m_x_5_1830": 9.09,
      "m_x_5_31975": 2.55,
      "m_x_5_1832": 11.99,
      "m_x_5_31979": 0.4,
      "m_x_5_31981": 10000,
      "m_x_5_32007": 10000,
      "m_x_5_32010": 4.59,
      "m_x_5_32011": 10000,
      "m_x_5_31982": 0.59,
      "m_x_5_34184": 1.65,
      "m_x_5_35786": 5,
      "m_x_5_36491": 1.02,
      "m_x_5_41556": 1.04,
      "m_x_5_81662": 1,
      "m_x_5_40562": 31.36,
      "m_x_5_35780": 6.87,
      "m_x_5_3574": 2.59
    },
    "s_feilong": {
      "fengwangjiang": 154.16,
      "shoupijiao": 64.09,
      "qicaixian": 121.11,
      "fengyu_yi": 866,
      "m_m_5_30852": 17.02,
      "m_m_5_30853": 80.1,
      "m_m_5_30828": 6.4,
      "guajian_bei": 57.23,
      "baihua_bu": 70.54,
      "guajian_yao": 79.81,
      "shuran_bu": 72,
      "shuran_bag": 57.24,
      "m_m_5_10173": 30.9,
      "jinfeng_bag": 20000,
      "wuseshi": 98.34,
      "m_m_5_30856": 13.96,
      "m_m_5_30855": 168.96,
      "geyin_zhang": 197.88,
      "m_m_5_89298": 29.97,
      "m_m_5_30679": 19.89,
      "m_m_5_30847": 14.87,
      "m_m_5_30846": 3,
      "yinsi_duan": 130.57,
      "m_m_5_32003": 8,
      "m_m_5_30848": 20,
      "m_m_5_30850": 143.41,
      "m_m_5_30845": 160.57,
      "m_m_5_31397": 5,
      "m_m_5_30844": 1,
      "m_m_5_90210": 100,
      "m_m_5_30873": 28.08,
      "m_m_5_90205": 8.33,
      "m_m_5_3779": 1,
      "m_m_8_36148": 1219,
      "m_m_5_30827": 1.07,
      "m_m_5_89970": 180.98,
      "lucai": 15.95,
      "m_m_5_31973": 3.38,
      "m_m_5_30849": 6,
      "m_m_5_71293": 42,
      "m_m_5_30825": 0.6,
      "m_m_5_89171": 25.61,
      "m_m_5_71292": 35,
      "m_m_5_30824": 0.24,
      "m_m_5_71281": 15,
      "m_m_5_30823": 1,
      "m_m_5_89315": 1843,
      "m_m_5_89969": 119.95,
      "m_m_5_89971": 189.59,
      "lushui": 14.88,
      "m_m_5_30875": 2.75,
      "m_m_5_30843": 0.67,
      "m_m_5_30874": 26.64,
      "m_m_5_30842": 0.62,
      "m_m_5_5270": 0.8,
      "m_m_5_31013": 178.72,
      "gancao": 2.96,
      "m_m_5_31012": 440,
      "m_m_5_89304": 5000.99,
      "m_m_5_26057": 3999,
      "m_m_5_89352": 690.45,
      "m_m_5_89350": 699.32,
      "m_m_5_71269": 140.34,
      "m_m_5_89346": 804.73,
      "m_m_5_89348": 161.79,
      "m_m_5_71285": 112.82,
      "jieyuan_dan": 180.79,
      "m_m_5_30836": 0.75,
      "m_m_5_30832": 1,
      "m_m_5_30833": 2.19,
      "m_m_5_89324": 50,
      "m_m_5_30831": 3,
      "m_m_5_89973": 148.6,
      "m_m_5_71240": 39.33,
      "m_m_5_71266": 39,
      "m_m_5_30838": 4.23,
      "shanhu": 3.13,
      "m_m_5_30835": 2,
      "m_m_5_89974": 85.99,
      "m_m_5_71267": 34,
      "m_m_5_90029": 2000,
      "yaoyin": 177,
      "shaoyao": 3.75,
      "m_m_5_31102": 0.1,
      "m_m_5_30834": 3.52,
      "m_m_5_31998": 30.53,
      "m_m_5_89340": 75.61,
      "m_m_5_89325": 647,
      "m_m_5_71258": 110.35,
      "m_m_5_89327": 66.23,
      "m_m_5_89966": 127.8,
      "m_m_5_10176": 9,
      "m_m_5_89968": 110.41,
      "m_m_5_89376": 176,
      "m_m_5_89965": 110.99,
      "m_m_5_31992": 5.9,
      "m_m_5_89963": 124,
      "m_m_5_71192": 16.04,
      "m_m_5_71188": 399,
      "m_m_5_31994": 9.99,
      "m_m_5_89962": 60,
      "m_m_5_31139": 4100,
      "m_m_5_89964": 98.56,
      "m_m_5_10027": 73.98,
      "m_m_5_89961": 70.6,
      "tiekuang": 3,
      "m_m_5_30676": 3.52,
      "m_m_5_30678": 2.32,
      "m_m_5_30674": 2.96,
      "m_m_5_30675": 3.3,
      "m_m_5_89967": 99.4,
      "m_m_5_6246": 0.04,
      "m_m_5_30841": 3.94,
      "m_m_8_632": 1660,
      "m_m_8_634": 1666,
      "muban": 23.22,
      "muliao": 3.37,
      "m_m_5_35707": 12.89,
      "qiwuling": 34.33,
      "m_m_5_35716": 88.98,
      "m_m_5_35715": 89.72,
      "zhuzi": 3.25,
      "m_m_5_35567": 2.28,
      "m_m_5_35714": 89,
      "m_m_5_35713": 24.16,
      "m_m_5_89260": 20000,
      "m_m_5_35717": 1.71,
      "m_m_5_52337": 1799,
      "m_m_5_35772": 2054.79,
      "m_m_5_87917": 300.71,
      "m_m_5_87881": 9999,
      "zasui": 0.77,
      "g_5_30681": 1.22,
      "g_5_30680": 0.9,
      "m_x_5_89355": 2077,
      "m_x_5_89436": 4555,
      "m_x_5_89438": 5555,
      "m_x_5_89439": 5110.76,
      "m_x_5_89440": 3333,
      "m_x_5_89444": 4533,
      "m_x_5_89329": 872,
      "m_x_5_89335": 1254,
      "m_x_5_89330": 1212.52,
      "m_x_5_89331": 687,
      "m_x_5_89337": 966,
      "m_x_5_89368": 838.87,
      "m_x_5_89372": 1260.6,
      "m_x_5_89369": 1485,
      "m_x_5_90436": 89.72,
      "m_x_5_89379": 3966,
      "m_x_5_89380": 4588,
      "m_x_5_90437": 79.79,
      "m_x_5_89391": 5799.66,
      "m_x_5_89392": 3222,
      "m_x_5_89394": 4200.8,
      "m_x_5_89396": 4999,
      "m_x_5_20971": 199,
      "m_x_5_89317": 953.73,
      "m_x_5_89426": 3191.18,
      "m_x_5_89427": 3000,
      "m_x_5_89428": 2555,
      "m_x_5_89347": 987.99,
      "m_x_5_89356": 1099.86,
      "m_x_5_89326": 944,
      "m_x_5_5232": 1.34,
      "m_x_5_5231": 3.77,
      "m_x_5_5230": 1.2,
      "m_x_5_5229": 1.7,
      "m_x_5_31050": 25,
      "m_x_5_31056": 286.41,
      "m_x_5_31057": 495.7,
      "m_x_5_31058": 10000,
      "m_x_5_31059": 10000,
      "m_x_5_71268": 126.2,
      "m_x_5_71270": 121.55,
      "m_x_5_2302": 5544.93,
      "m_x_5_71271": 104.47,
      "m_x_5_71272": 150.21,
      "m_x_5_71273": 141.25,
      "m_x_5_71274": 125.49,
      "m_x_5_71276": 22.47,
      "m_x_5_71278": 4.44,
      "m_x_5_71279": 45.6,
      "m_x_5_71280": 36,
      "m_x_5_71282": 2,
      "m_x_5_71284": 80.02,
      "m_x_5_71286": 111.33,
      "m_x_5_71287": 107.1,
      "m_x_5_71288": 101.07,
      "m_x_5_71289": 6.06,
      "m_x_5_71290": 12,
      "m_x_5_71291": 31.83,
      "m_x_5_71294": 868.01,
      "m_x_5_71295": 521.56,
      "m_x_5_71296": 465.57,
      "m_x_5_71297": 70.91,
      "m_x_5_71298": 67.51,
      "m_x_5_71299": 564.99,
      "m_x_5_89318": 2868.66,
      "m_x_5_89361": 55,
      "m_x_5_89362": 51.99,
      "m_x_5_89363": 188,
      "m_x_5_89364": 253.11,
      "m_x_5_89365": 200,
      "m_x_8_616": 300.55,
      "m_x_5_3810": 37.9,
      "m_x_5_3782": 3.05,
      "m_x_5_3797": 59.88,
      "m_x_5_2433": 37,
      "m_x_8_625": 1199,
      "m_x_8_23": 33.53,
      "m_x_5_2467": 21.06,
      "m_x_8_37": 10.25,
      "m_x_8_38": 60,
      "m_x_8_31": 10.97,
      "m_x_8_69": 191.82,
      "m_x_8_70": 256.24,
      "m_x_5_22145": 80.91,
      "m_x_5_22917": 89.4,
      "m_x_5_22981": 88.38,
      "m_x_5_71196": 998,
      "m_x_5_71198": 1311,
      "m_x_5_71199": 1100,
      "m_x_5_71200": 1666,
      "m_x_5_71201": 1298,
      "m_x_5_71202": 998,
      "m_x_5_71203": 1932,
      "m_x_5_71204": 1333,
      "m_x_5_71205": 962,
      "m_x_5_71206": 1777,
      "m_x_5_71207": 1343,
      "m_x_5_71214": 977,
      "m_x_5_71215": 1777,
      "m_x_5_71219": 275,
      "m_x_5_71221": 266,
      "m_x_5_71222": 366,
      "m_x_5_71223": 311,
      "m_x_5_71224": 276.62,
      "m_x_5_71225": 366,
      "m_x_5_71226": 355,
      "m_x_5_71227": 255,
      "m_x_5_71228": 299,
      "m_x_5_71229": 422,
      "m_x_5_71231": 444,
      "m_x_5_71237": 299,
      "m_x_5_71239": 766,
      "m_x_5_89461": 1443.55,
      "m_x_5_89462": 1433,
      "m_x_5_89463": 1443.99,
      "m_x_5_89464": 988,
      "m_x_5_89466": 1168,
      "m_x_5_89467": 988.88,
      "m_x_5_89469": 1800.41,
      "m_x_5_89471": 1799.31,
      "m_x_5_90289": 332.45,
      "m_x_5_31099": 50,
      "m_x_5_31103": 8,
      "m_x_5_31104": 99.96,
      "m_x_5_31105": 96.99,
      "m_x_5_31107": 211.96,
      "m_x_5_31108": 96.88,
      "m_x_5_40538": 223.16,
      "m_x_5_71242": 96.91,
      "m_x_5_71243": 161.18,
      "m_x_5_71244": 99,
      "m_x_5_71245": 120.64,
      "m_x_5_71246": 115.59,
      "m_x_5_71247": 152.86,
      "m_x_5_71248": 132.69,
      "m_x_5_71250": 20,
      "m_x_5_71252": 19,
      "m_x_5_71255": 31,
      "m_x_5_71259": 83.49,
      "m_x_5_71260": 115.61,
      "m_x_5_71261": 153,
      "m_x_5_71262": 94.46,
      "m_x_5_71264": 19,
      "m_x_5_71265": 29,
      "m_x_5_89341": 98,
      "m_x_5_89342": 210.09,
      "m_x_5_89343": 174.39,
      "m_x_5_89345": 79,
      "m_x_5_89724": 375,
      "m_x_8_629": 1666,
      "m_x_5_2189": 15.88,
      "m_x_8_633": 411.77,
      "m_x_8_635": 1666,
      "m_x_5_5044": 6.7,
      "m_x_5_6024": 11,
      "m_x_5_6069": 0.5,
      "m_x_5_6073": 0.1,
      "m_x_5_6247": 1.18,
      "m_x_5_6248": 1,
      "m_x_5_10028": 80,
      "m_x_5_71129": 118.62,
      "m_x_5_71130": 99.75,
      "m_x_5_71131": 123.03,
      "m_x_5_71132": 177,
      "m_x_5_71133": 1033,
      "m_x_5_71134": 2222,
      "m_x_5_71135": 1666,
      "m_x_5_71136": 1166,
      "m_x_5_71141": 1410,
      "m_x_5_71144": 1622,
      "m_x_5_71145": 942,
      "m_x_5_71146": 1999,
      "m_x_5_71147": 1788,
      "m_x_5_71148": 1222,
      "m_x_5_71150": 1288,
      "m_x_5_71151": 1288,
      "m_x_5_71152": 2111,
      "m_x_5_71153": 1411,
      "m_x_5_71159": 1444,
      "m_x_5_71160": 933,
      "m_x_5_71164": 277,
      "m_x_5_71166": 277,
      "m_x_5_71167": 311,
      "m_x_5_71168": 266,
      "m_x_5_71169": 233,
      "m_x_5_71170": 299,
      "m_x_5_71171": 648,
      "m_x_5_71172": 255,
      "m_x_5_71173": 333,
      "m_x_5_71174": 699,
      "m_x_5_71175": 355,
      "m_x_5_71176": 366,
      "m_x_5_71182": 666,
      "m_x_5_71184": 333,
      "m_x_5_71185": 288,
      "m_x_5_71186": 299,
      "m_x_5_71187": 166,
      "m_x_5_71189": 36,
      "m_x_5_71190": 13.66,
      "m_x_5_54537": 298,
      "m_x_5_89415": 1186,
      "m_x_5_89416": 1199.92,
      "m_x_5_89417": 1222,
      "m_x_5_89418": 1097.99,
      "m_x_5_89420": 1200,
      "m_x_5_89421": 900.64,
      "m_x_5_89422": 900,
      "m_x_5_89423": 880,
      "m_x_5_89425": 2800.46,
      "m_x_5_89429": 1487.99,
      "m_x_5_90213": 18.35,
      "m_x_5_35004": 3,
      "m_x_5_35005": 3.99,
      "m_x_5_35006": 3.56,
      "m_x_5_35007": 3.99,
      "m_x_10_160": 2498,
      "m_x_10_167": 888,
      "m_x_10_100": 340.88,
      "m_x_10_103": 388,
      "m_x_10_104": 350.88,
      "m_x_10_107": 388,
      "m_x_10_108": 388,
      "m_x_5_35771": 846.34,
      "m_x_5_35773": 150,
      "m_x_10_148": 800,
      "m_x_5_38927": 5.74,
      "m_x_10_672": 1750,
      "m_x_10_1454": 55,
      "m_x_10_1456": 59.98,
      "m_x_10_1458": 60,
      "m_x_5_87873": 588.88,
      "m_x_5_87871": 588.88,
      "m_x_5_87870": 588.89,
      "m_x_5_34184": 18.08,
      "m_x_5_35786": 5,
      "m_x_5_41556": 2.8,
      "m_x_5_35780": 10.09
    },
    "s_jiutian": {
      "shoupijiao": 60.17,
      "qicaixian": 80.35,
      "bairanxian": 5.3,
      "m_m_5_30852": 16.99,
      "m_m_5_30853": 550,
      "m_m_5_30828": 4.07,
      "m_m_5_89165": 50,
      "m_m_5_32000": 4,
      "guajian_bei": 45.33,
      "baihua_bu": 40.55,
      "guajian_yao": 65.44,
      "shuran_bu": 49.36,
      "m_m_5_32001": 3.91,
      "shuran_bag": 185.26,
      "m_m_5_10173": 40.61,
      "wuseshi": 49.88,
      "m_m_5_30856": 15.69,
      "m_m_5_30855": 128.8,
      "geyin_zhang": 300.9,
      "m_m_5_89298": 10.99,
      "m_m_5_30679": 21.51,
      "m_m_5_30847": 8.88,
      "m_m_5_30846": 5,
      "yinsi_duan": 57.16,
      "m_m_5_30848": 12.96,
      "m_m_5_30850": 90.82,
      "m_m_5_30845": 208.81,
      "m_m_5_30844": 0.98,
      "m_m_5_30873": 16.95,
      "m_m_5_30827": 2.82,
      "m_m_5_89970": 89.5,
      "lucai": 13.76,
      "m_m_5_31973": 1.52,
      "m_m_5_30849": 6.15,
      "m_m_5_71293": 150.1,
      "m_m_5_30826": 0.19,
      "m_m_5_30825": 0.04,
      "m_m_5_89171": 20,
      "m_m_5_31974": 1.29,
      "m_m_5_30824": 0.2,
      "m_m_5_31967": 3,
      "m_m_5_30823": 0.25,
      "m_m_5_71277": 100.83,
      "m_m_5_89315": 750.98,
      "m_m_5_89969": 48.61,
      "m_m_5_31976": 0.96,
      "m_m_5_89303": 4200,
      "m_m_5_89971": 92,
      "lushui": 8.4,
      "m_m_5_30875": 3.73,
      "m_m_5_30843": 0.9,
      "m_m_5_30874": 16.56,
      "m_m_5_30842": 1,
      "m_m_5_5270": 0.98,
      "m_m_5_31970": 1,
      "m_m_5_5269": 0.01,
      "m_m_5_31013": 187,
      "gancao": 4.09,
      "m_m_5_31012": 340.45,
      "m_m_5_89304": 2576,
      "m_m_5_26231": 2.99,
      "m_m_5_89352": 1664,
      "m_m_5_89350": 1659,
      "m_m_5_89346": 1049,
      "m_m_5_89348": 489.76,
      "jieyuan_dan": 24.99,
      "m_m_5_30836": 3.24,
      "m_m_5_30832": 3.25,
      "m_m_5_30833": 2.98,
      "m_m_5_89324": 40.99,
      "m_m_5_30831": 3.22,
      "m_m_5_89973": 111.01,
      "m_m_5_31996": 2.74,
      "m_m_5_30838": 4.68,
      "shanhu": 2.18,
      "m_m_5_30835": 1.98,
      "m_m_5_89974": 99,
      "m_m_5_89168": 100,
      "yaoyin": 103.97,
      "m_m_5_31100": 59.88,
      "shaoyao": 2.83,
      "m_m_5_31102": 0.36,
      "m_m_5_30834": 2.97,
      "m_m_5_31998": 14.99,
      "m_m_5_89328": 1666.18,
      "m_m_5_89340": 270.39,
      "m_m_5_89325": 850,
      "m_m_5_89327": 196,
      "m_m_5_89966": 199.94,
      "m_m_5_31991": 5.58,
      "m_m_5_89377": 666,
      "m_m_5_89968": 52.08,
      "m_m_5_31993": 2.89,
      "m_m_5_89376": 455.93,
      "m_m_5_89965": 70.28,
      "m_m_5_31992": 6.49,
      "m_m_5_89375": 287,
      "m_m_5_89963": 114,
      "m_m_5_89962": 78.99,
      "m_m_5_89964": 44,
      "m_m_5_10027": 70,
      "m_m_5_89961": 50.72,
      "tiekuang": 3.72,
      "m_m_5_30676": 4.75,
      "m_m_5_30678": 3.66,
      "m_m_5_30674": 3.03,
      "m_m_5_30675": 5.88,
      "m_m_5_6246": 0.2,
      "m_m_5_6249": 0.75,
      "m_m_5_30841": 30.58,
      "m_m_8_636": 47.99,
      "m_m_5_90257": 555,
      "muban": 19.6,
      "muliao": 3.66,
      "qiwuling": 39,
      "m_m_5_35716": 59.97,
      "m_m_5_35715": 18,
      "zhuzi": 5.81,
      "m_m_5_35567": 2,
      "m_m_5_35714": 44.86,
      "m_m_5_35713": 18.95,
      "m_m_5_35717": 4,
      "m_m_5_52337": 1500,
      "m_m_5_35772": 3675,
      "zasui": 0.42,
      "g_5_30681": 1.98,
      "g_5_30680": 2.48,
      "m_x_5_89305": 5300,
      "m_x_5_89349": 1999.53,
      "m_x_5_89351": 1441,
      "m_x_5_89438": 16666.14,
      "m_x_5_89439": 12576.65,
      "m_x_5_89329": 1775.68,
      "m_x_5_89331": 1200.88,
      "m_x_5_89337": 2222.83,
      "m_x_5_89368": 1200.49,
      "m_x_5_89372": 3999,
      "m_x_5_90436": 43.06,
      "m_x_5_90437": 44.65,
      "m_x_5_89396": 12222.88,
      "m_x_5_20971": 1.55,
      "m_x_5_89317": 1286.98,
      "m_x_5_89428": 2594.2,
      "m_x_5_89347": 2300,
      "m_x_5_89358": 2219,
      "m_x_5_5232": 2.4,
      "m_x_5_5230": 2.78,
      "m_x_5_5229": 1,
      "m_x_5_31052": 999.88,
      "m_x_5_31062": 588,
      "m_x_5_71268": 888,
      "m_x_5_71276": 288.52,
      "m_x_5_71279": 222,
      "m_x_5_71280": 250.63,
      "m_x_5_71294": 1978,
      "m_x_5_71295": 1337,
      "m_x_5_71296": 1278,
      "m_x_5_89316": 1472.52,
      "m_x_5_89318": 2554.99,
      "m_x_5_89361": 358.9,
      "m_x_5_89363": 500,
      "m_x_5_89364": 359,
      "m_x_8_22": 50.21,
      "m_x_8_627": 162.25,
      "m_x_5_2467": 29.93,
      "m_x_8_69": 192,
      "m_x_8_70": 279.95,
      "m_x_5_22145": 67.84,
      "m_x_5_22917": 200,
      "m_x_5_22981": 230,
      "m_x_5_31254": 888.4,
      "m_x_5_71214": 5298,
      "m_x_5_71229": 1598,
      "m_x_5_89461": 998.85,
      "m_x_5_89462": 1555.9,
      "m_x_5_89463": 989.87,
      "m_x_5_89464": 1099.73,
      "m_x_5_89466": 999.79,
      "m_x_5_89467": 1989,
      "m_x_5_89468": 1200,
      "m_x_5_89469": 1707.2,
      "m_x_5_89470": 2555.52,
      "m_x_5_89471": 2650,
      "m_x_5_89472": 1566,
      "m_x_5_90289": 1000,
      "m_x_5_31099": 48.16,
      "m_x_5_31103": 15.72,
      "m_x_5_31104": 19.97,
      "m_x_5_31105": 138.42,
      "m_x_5_31106": 70,
      "m_x_5_40538": 222.14,
      "m_x_5_71247": 569,
      "m_x_5_71261": 588,
      "m_x_5_89341": 354,
      "m_x_5_89342": 600,
      "m_x_5_89343": 349,
      "m_x_5_89724": 500,
      "m_x_8_17546": 488.74,
      "m_x_5_6247": 1.22,
      "m_x_5_6248": 2.66,
      "m_x_5_10028": 84.88,
      "m_x_5_31141": 199,
      "m_x_5_31142": 99.09,
      "m_x_5_31143": 450.98,
      "m_x_5_40539": 186.28,
      "m_x_5_71129": 1100,
      "m_x_5_71190": 265,
      "m_x_5_89415": 779.29,
      "m_x_5_89416": 1800.42,
      "m_x_5_89417": 1550.1,
      "m_x_5_89418": 1600,
      "m_x_5_89420": 1865.5,
      "m_x_5_89421": 1385,
      "m_x_5_89423": 888.3,
      "m_x_5_89424": 2289.31,
      "m_x_5_89425": 2510.03,
      "m_x_5_89429": 2630.37,
      "m_x_5_35004": 1.14,
      "m_x_5_35005": 0.42,
      "m_x_5_35006": 1,
      "m_x_5_35007": 4,
      "m_x_10_96": 445,
      "m_x_10_101": 455,
      "m_x_10_108": 445,
      "m_x_5_35771": 998.88,
      "m_x_5_35773": 3333,
      "m_x_5_35775": 998,
      "m_x_5_38374": 5808,
      "m_x_5_36491": 1.2,
      "m_x_5_6250": 0.8,
      "m_x_5_10030": 19.08,
      "m_x_5_35780": 41
    },
    "s_meijianxue": {
      "dimai": 79995,
      "fengwangjiang": 167.29,
      "shoupijiao": 82.03,
      "qicaixian": 135,
      "bairanxian": 10.1,
      "m_m_5_30852": 16.43,
      "m_m_5_30853": 80.67,
      "m_m_5_30828": 3.45,
      "guajian_bei": 75.99,
      "baihua_bu": 79.66,
      "guajian_yao": 70.5,
      "shuran_bu": 148,
      "wuseshi": 160.73,
      "m_m_5_30856": 11.8,
      "m_m_5_30855": 161,
      "geyin_zhang": 99,
      "m_m_5_89298": 40,
      "m_m_5_30679": 14.73,
      "m_m_5_30847": 9.95,
      "m_m_5_30846": 1.79,
      "yinsi_duan": 107.96,
      "m_m_5_30848": 20.55,
      "m_m_5_30850": 190.5,
      "m_m_5_30845": 200.72,
      "m_m_5_31397": 7,
      "m_m_5_89433": 6110,
      "m_m_5_30844": 0.67,
      "m_m_5_30873": 31.09,
      "m_m_8_36148": 899.99,
      "m_m_5_89474": 2555.66,
      "m_m_5_30827": 1.04,
      "m_m_5_89970": 215.99,
      "m_m_5_32014": 302,
      "lucai": 16.99,
      "m_m_5_31973": 1.77,
      "m_m_5_30849": 6.56,
      "m_m_5_71293": 30.26,
      "m_m_5_30826": 0.45,
      "m_m_5_30825": 0.14,
      "m_m_5_31968": 7,
      "m_m_5_71292": 23.26,
      "m_m_5_30824": 0.49,
      "m_m_5_30823": 0.25,
      "m_m_5_71277": 22.96,
      "m_m_5_89315": 1599.96,
      "m_m_5_89969": 173.73,
      "m_m_5_89971": 197.74,
      "lushui": 14.98,
      "m_m_5_30829": 1,
      "m_m_5_30843": 0.98,
      "m_m_5_30874": 38.8,
      "m_m_5_30842": 0.94,
      "m_m_5_5270": 1.58,
      "m_m_5_5269": 0.02,
      "m_m_5_31013": 200,
      "gancao": 2.85,
      "m_m_5_31012": 377,
      "m_m_5_89304": 4797.77,
      "m_m_5_89352": 785,
      "m_m_5_89350": 608,
      "m_m_5_71269": 111.65,
      "m_m_5_89346": 719,
      "m_m_5_89348": 180.65,
      "m_m_5_71285": 112.06,
      "jieyuan_dan": 110.67,
      "m_m_5_30836": 2.7,
      "m_m_5_30832": 2.25,
      "m_m_5_30833": 1.86,
      "m_m_5_89324": 108.66,
      "m_m_5_30831": 1.9,
      "m_m_5_89973": 158.11,
      "m_m_5_71241": 26,
      "m_m_5_71240": 64.84,
      "m_m_5_31995": 1.06,
      "m_m_5_30838": 1.39,
      "shanhu": 3.02,
      "m_m_5_6646": 27,
      "m_m_5_30835": 2.4,
      "m_m_5_89974": 110,
      "m_m_5_71267": 86.46,
      "m_m_5_89168": 90,
      "yaoyin": 215.99,
      "m_m_5_31100": 66.19,
      "shaoyao": 2.1,
      "m_m_5_30834": 2.79,
      "m_m_5_89340": 90.66,
      "m_m_5_89325": 699.14,
      "m_m_5_71258": 120,
      "m_m_5_89327": 123.66,
      "m_m_5_89966": 130,
      "m_m_5_89968": 93.77,
      "m_m_5_89376": 666.34,
      "m_m_5_89965": 85,
      "m_m_5_89963": 55.05,
      "m_m_5_71192": 10.88,
      "m_m_5_89962": 98.55,
      "m_m_5_31139": 4499.98,
      "m_m_5_89964": 87,
      "m_m_5_10027": 77,
      "m_m_5_89961": 98,
      "tiekuang": 3.48,
      "m_m_5_30676": 2.47,
      "m_m_5_30678": 1.9,
      "m_m_5_30674": 3.05,
      "m_m_5_30675": 5.02,
      "m_m_5_89967": 75,
      "m_m_5_6246": 0.06,
      "m_m_5_30841": 2.79,
      "muban": 29.85,
      "muliao": 3.2,
      "qiwuling": 23.65,
      "m_m_5_35716": 13.98,
      "m_m_5_35715": 89.2,
      "zhuzi": 2.94,
      "m_m_5_35567": 5,
      "m_m_5_35714": 20,
      "m_m_5_35713": 27,
      "m_m_10_93": 1,
      "m_m_5_35717": 1.98,
      "m_m_5_52337": 1888,
      "m_m_5_35772": 1484.34,
      "m_m_5_87917": 250.46,
      "m_m_5_87881": 9999,
      "zasui": 0.3,
      "g_5_30681": 0.7,
      "g_5_30680": 0.89,
      "m_x_5_89353": 1600.23,
      "m_x_5_89305": 4299.98,
      "m_x_5_89349": 920,
      "m_x_5_89355": 1900.33,
      "m_x_5_89351": 1063.57,
      "m_x_5_89357": 2787.91,
      "m_x_5_89438": 5777.22,
      "m_x_5_89439": 5333.68,
      "m_x_5_89441": 5888.71,
      "m_x_5_89443": 5666.95,
      "m_x_5_89445": 5555.8,
      "m_x_5_89329": 849.65,
      "m_x_5_89335": 1111,
      "m_x_5_89330": 443.96,
      "m_x_5_89331": 800.1,
      "m_x_5_89337": 999,
      "m_x_5_89368": 817,
      "m_x_5_89372": 1100,
      "m_x_5_90436": 95.9,
      "m_x_5_89379": 5332,
      "m_x_5_90437": 49.53,
      "m_x_5_89383": 7999.8,
      "m_x_5_89388": 5555,
      "m_x_5_89389": 5888.96,
      "m_x_5_89390": 5555.71,
      "m_x_5_89391": 5778,
      "m_x_5_89393": 6999,
      "m_x_5_89394": 10000,
      "m_x_5_89396": 5333.5,
      "m_x_5_89317": 1000,
      "m_x_5_89320": 1200,
      "m_x_5_89347": 900,
      "m_x_5_89356": 1999,
      "m_x_5_89358": 1050,
      "m_x_5_89326": 999,
      "m_x_5_5230": 1,
      "m_x_5_31050": 92.33,
      "m_x_5_31055": 998,
      "m_x_5_31056": 88.99,
      "m_x_5_31058": 3,
      "m_x_5_31059": 10000,
      "m_x_5_71268": 115.23,
      "m_x_5_71270": 82.93,
      "m_x_5_71271": 120,
      "m_x_5_71272": 99.66,
      "m_x_5_71273": 105.32,
      "m_x_5_71274": 121.97,
      "m_x_5_71275": 110,
      "m_x_5_71276": 32.16,
      "m_x_5_71278": 12,
      "m_x_5_71279": 29.99,
      "m_x_5_71280": 24.95,
      "m_x_5_71282": 28.75,
      "m_x_5_71284": 149.06,
      "m_x_5_71286": 100.78,
      "m_x_5_71287": 99.41,
      "m_x_5_71288": 110.85,
      "m_x_5_71289": 34,
      "m_x_5_71291": 18.29,
      "m_x_5_71294": 799.93,
      "m_x_5_71295": 593.27,
      "m_x_5_71296": 617.6,
      "m_x_5_71298": 21.63,
      "m_x_5_71299": 298.98,
      "m_x_5_71300": 29.6,
      "m_x_5_89316": 2000.74,
      "m_x_5_89318": 2288.23,
      "m_x_5_89361": 65,
      "m_x_5_89362": 137.8,
      "m_x_5_89363": 50.86,
      "m_x_5_89364": 220.9,
      "m_x_5_3810": 80.96,
      "m_x_5_3811": 50,
      "m_x_5_3797": 3.03,
      "m_x_5_2433": 50,
      "m_x_8_37": 30,
      "m_x_5_6067": 0.04,
      "m_x_8_31": 8.08,
      "m_x_8_69": 150.6,
      "m_x_8_70": 298,
      "m_x_5_22145": 55.87,
      "m_x_5_22917": 114.99,
      "m_x_5_22981": 197,
      "m_x_5_71196": 1388.37,
      "m_x_5_71199": 1531.88,
      "m_x_5_71201": 1474.89,
      "m_x_5_71202": 1199.11,
      "m_x_5_71203": 1888,
      "m_x_5_71204": 1800.16,
      "m_x_5_71206": 1941.88,
      "m_x_5_71214": 900.21,
      "m_x_5_71215": 1831.64,
      "m_x_5_71223": 350,
      "m_x_5_71224": 299,
      "m_x_5_71229": 600.72,
      "m_x_5_71239": 1096,
      "m_x_5_89461": 2600.55,
      "m_x_5_89462": 1799.8,
      "m_x_5_89463": 1398.09,
      "m_x_5_89464": 1888.07,
      "m_x_5_89466": 1190,
      "m_x_5_89467": 1538.73,
      "m_x_5_89468": 1475,
      "m_x_5_89469": 1081,
      "m_x_5_89470": 845,
      "m_x_5_89471": 2222,
      "m_x_5_89472": 2495,
      "m_x_5_31103": 7.98,
      "m_x_5_31104": 59.99,
      "m_x_5_31105": 51.81,
      "m_x_5_31106": 49.99,
      "m_x_5_31107": 172,
      "m_x_5_31108": 152.94,
      "m_x_5_40538": 86.31,
      "m_x_5_71242": 114.34,
      "m_x_5_71243": 189.4,
      "m_x_5_71244": 188.9,
      "m_x_5_71245": 90,
      "m_x_5_71246": 182.71,
      "m_x_5_71247": 130.48,
      "m_x_5_71248": 145.98,
      "m_x_5_71250": 46.5,
      "m_x_5_71251": 159.68,
      "m_x_5_71254": 29.28,
      "m_x_5_71259": 102.22,
      "m_x_5_71260": 196,
      "m_x_5_71261": 135.68,
      "m_x_5_71262": 120,
      "m_x_5_71263": 14.39,
      "m_x_5_71265": 20.5,
      "m_x_5_89341": 189.89,
      "m_x_5_89342": 120,
      "m_x_5_89343": 150.68,
      "m_x_5_89344": 50,
      "m_x_5_89345": 71.1,
      "m_x_5_2589": 15,
      "m_x_5_2631": 20.02,
      "m_x_5_5044": 20,
      "m_x_5_6024": 10000,
      "m_x_5_6247": 0.48,
      "m_x_5_6248": 1.22,
      "m_x_5_10028": 79,
      "m_x_5_40539": 350.47,
      "m_x_5_71129": 128.02,
      "m_x_5_71130": 106,
      "m_x_5_71131": 109.1,
      "m_x_5_71133": 1299.41,
      "m_x_5_71143": 1977.2,
      "m_x_5_71144": 1769,
      "m_x_5_71145": 1395.15,
      "m_x_5_71147": 1598,
      "m_x_5_71148": 1199,
      "m_x_5_71151": 1299,
      "m_x_5_71152": 2600.3,
      "m_x_5_71160": 1088.93,
      "m_x_5_71169": 444.39,
      "m_x_5_71171": 390,
      "m_x_5_71173": 407.11,
      "m_x_5_71174": 570.85,
      "m_x_5_71182": 444.92,
      "m_x_5_71184": 333.41,
      "m_x_5_71185": 600.19,
      "m_x_5_71189": 61.59,
      "m_x_5_71190": 36.52,
      "m_x_5_71191": 19.83,
      "m_x_5_54537": 185,
      "m_x_5_89415": 1000,
      "m_x_5_89416": 1067.31,
      "m_x_5_89417": 1399,
      "m_x_5_89418": 920,
      "m_x_5_89420": 1200.8,
      "m_x_5_89421": 870,
      "m_x_5_89422": 1170,
      "m_x_5_89423": 987.98,
      "m_x_5_89425": 1777.48,
      "m_x_5_89429": 7888.86,
      "m_x_5_89431": 2597,
      "m_x_5_35004": 3.49,
      "m_x_5_35005": 3.6,
      "m_x_5_35006": 3.99,
      "m_x_5_35007": 3.38,
      "m_x_10_170": 28.88,
      "m_x_10_106": 50.88,
      "m_x_10_109": 100,
      "m_x_10_110": 100,
      "m_x_5_35771": 758.84,
      "m_x_5_35773": 1999.46,
      "m_x_10_134": 500,
      "m_x_10_148": 194,
      "m_x_5_38374": 1922.31,
      "m_x_10_2031": 1250.87,
      "m_x_10_2033": 728.88,
      "m_x_5_32007": 50.54,
      "m_x_5_32010": 0.8,
      "m_x_5_54059": 6
    },
    "s_shanhai": {
      "dimai": 84988,
      "fengwangjiang": 245.94,
      "shoupijiao": 127.46,
      "qicaixian": 155,
      "bairanxian": 20.48,
      "m_m_5_30852": 14.98,
      "m_m_5_30853": 82.99,
      "m_m_5_30828": 3.98,
      "guajian_bei": 57.98,
      "baihua_bu": 100.98,
      "guajian_yao": 73,
      "shuran_bu": 102.99,
      "wuseshi": 298.91,
      "m_m_5_30856": 13.47,
      "m_m_5_30855": 159.27,
      "geyin_zhang": 88.43,
      "m_m_5_89298": 38.24,
      "m_m_5_30679": 15.04,
      "m_m_5_30847": 8.4,
      "m_m_5_30846": 1.53,
      "yinsi_duan": 189.84,
      "m_m_5_30848": 18,
      "m_m_5_30850": 185,
      "m_m_5_30845": 201,
      "m_m_5_30844": 2,
      "m_m_5_30873": 50.25,
      "m_m_5_90205": 120.87,
      "m_m_8_36148": 1299,
      "m_m_5_30827": 0.9,
      "m_m_5_89970": 195.85,
      "m_m_5_32014": 219.99,
      "lucai": 20.9,
      "m_m_5_1831": 100,
      "m_m_5_30849": 6,
      "m_m_5_71293": 30.4,
      "m_m_5_30826": 0.24,
      "m_m_5_30825": 0.01,
      "m_m_5_89171": 29.5,
      "m_m_5_30824": 0.65,
      "m_m_5_30823": 0.38,
      "m_m_5_71277": 21.7,
      "m_m_5_89315": 1419.13,
      "m_m_5_89969": 259.89,
      "m_m_5_31976": 1,
      "m_m_5_89303": 4555.48,
      "m_m_5_89971": 175.99,
      "lushui": 12.9,
      "m_m_5_30875": 1.11,
      "m_m_5_30843": 1,
      "m_m_5_30874": 29.6,
      "m_m_5_30842": 0.48,
      "m_m_5_5270": 0.6,
      "m_m_5_5269": 0.07,
      "m_m_5_31013": 188,
      "gancao": 2.5,
      "m_m_5_31012": 269.5,
      "m_m_5_89352": 707.4,
      "m_m_5_89350": 653.93,
      "m_m_5_71269": 119.11,
      "m_m_5_89346": 694.87,
      "m_m_5_89348": 225.76,
      "m_m_5_71285": 70.2,
      "jieyuan_dan": 30,
      "m_m_5_30836": 1.05,
      "m_m_5_30832": 2,
      "m_m_5_30833": 1.99,
      "m_m_5_89324": 77.95,
      "m_m_5_30831": 0.69,
      "m_m_5_89973": 146.99,
      "m_m_5_71266": 28.39,
      "m_m_5_30838": 0.97,
      "shanhu": 3.21,
      "m_m_5_30835": 3,
      "m_m_5_89974": 80,
      "yaoyin": 168,
      "shaoyao": 2.1,
      "m_m_5_30834": 5.9,
      "m_m_5_89328": 853.92,
      "m_m_5_89340": 109.96,
      "m_m_5_89325": 766.17,
      "m_m_5_71258": 121,
      "m_m_5_89327": 108.44,
      "m_m_5_89966": 89,
      "m_m_5_89968": 82.39,
      "m_m_5_89376": 454.97,
      "m_m_5_89965": 99.99,
      "m_m_5_89375": 200,
      "m_m_5_89963": 90,
      "m_m_5_89962": 80,
      "m_m_5_31139": 6900,
      "m_m_5_89964": 72,
      "m_m_5_10027": 95.48,
      "m_m_5_89961": 84.96,
      "tiekuang": 2.7,
      "m_m_5_30676": 2.44,
      "m_m_5_30678": 1.67,
      "m_m_5_30674": 2.32,
      "m_m_5_30675": 3.82,
      "m_m_5_89967": 77.8,
      "m_m_5_6246": 0.07,
      "m_m_5_30841": 4.97,
      "muban": 20,
      "muliao": 2.97,
      "qiwuling": 32,
      "m_m_5_35716": 13.92,
      "m_m_5_35715": 33.8,
      "zhuzi": 2.48,
      "m_m_5_35567": 1.92,
      "m_m_5_35714": 89.1,
      "m_m_5_35713": 29.1,
      "m_m_5_35717": 1.5,
      "m_m_5_52337": 2198,
      "m_m_5_35772": 2010,
      "zasui": 0.4,
      "g_5_30681": 0.8,
      "g_5_30680": 0.8,
      "m_x_5_89353": 749.99,
      "m_x_5_89305": 4600.8,
      "m_x_5_89349": 1514.36,
      "m_x_5_89351": 600,
      "m_x_5_89438": 7000,
      "m_x_5_89439": 7777,
      "m_x_5_89455": 23333,
      "m_x_5_89443": 6988.97,
      "m_x_5_89445": 7901,
      "m_x_5_89329": 1106.99,
      "m_x_5_89331": 808.07,
      "m_x_5_89337": 1150,
      "m_x_5_89368": 976.12,
      "m_x_5_89369": 1100.1,
      "m_x_5_90436": 65.69,
      "m_x_5_89379": 5288,
      "m_x_5_89380": 5664.2,
      "m_x_5_90437": 64.98,
      "m_x_5_89388": 5399,
      "m_x_5_89389": 6443.82,
      "m_x_5_89407": 20000,
      "m_x_5_89390": 3999,
      "m_x_5_89396": 6800.63,
      "m_x_5_89317": 799,
      "m_x_5_89426": 2918.75,
      "m_x_5_89310": 21000,
      "m_x_5_89347": 944.82,
      "m_x_5_89358": 999.08,
      "m_x_5_89326": 1070,
      "m_x_5_5230": 1.36,
      "m_x_5_31056": 10000,
      "m_x_5_31057": 1000,
      "m_x_5_31058": 2.55,
      "m_x_5_31060": 588.88,
      "m_x_5_71268": 109.33,
      "m_x_5_71271": 135.55,
      "m_x_5_71272": 127.63,
      "m_x_5_71273": 115.38,
      "m_x_5_71274": 178.71,
      "m_x_5_71275": 186.97,
      "m_x_5_71278": 8.7,
      "m_x_5_71280": 24.24,
      "m_x_5_71282": 12,
      "m_x_5_71284": 140.01,
      "m_x_5_71286": 79.97,
      "m_x_5_71287": 87.21,
      "m_x_5_71288": 87.64,
      "m_x_5_71289": 10.99,
      "m_x_5_71290": 11,
      "m_x_5_71294": 480,
      "m_x_5_71295": 400,
      "m_x_5_71296": 300.51,
      "m_x_5_71297": 340,
      "m_x_5_71299": 2602.63,
      "m_x_5_89316": 1500.25,
      "m_x_5_89318": 1880,
      "m_x_5_89361": 246.06,
      "m_x_5_89362": 45,
      "m_x_5_89363": 188,
      "m_x_5_89364": 115,
      "m_x_8_617": 220,
      "m_x_5_3782": 2,
      "m_x_8_22": 8,
      "m_x_8_23": 100,
      "m_x_5_2467": 19.98,
      "m_x_8_30": 1,
      "m_x_8_31": 20,
      "m_x_5_22917": 92.79,
      "m_x_5_22981": 93,
      "m_x_5_71196": 1588.93,
      "m_x_5_71199": 1868,
      "m_x_5_71200": 2499.86,
      "m_x_5_71201": 1488,
      "m_x_5_71202": 1489.92,
      "m_x_5_71203": 2390,
      "m_x_5_71204": 1700,
      "m_x_5_71205": 1489.97,
      "m_x_5_71206": 1930.23,
      "m_x_5_71207": 2000.4,
      "m_x_5_71214": 1100,
      "m_x_5_71221": 600.54,
      "m_x_5_71224": 400.95,
      "m_x_5_71225": 600,
      "m_x_5_71226": 600.07,
      "m_x_5_71229": 700.52,
      "m_x_5_71230": 1288.61,
      "m_x_5_89461": 1193.93,
      "m_x_5_89463": 1220,
      "m_x_5_89464": 888.88,
      "m_x_5_89465": 1666,
      "m_x_5_89466": 1096.26,
      "m_x_5_89468": 1333,
      "m_x_5_89469": 1488,
      "m_x_5_89471": 3121.36,
      "m_x_5_31103": 11.94,
      "m_x_5_31104": 7,
      "m_x_5_31105": 500,
      "m_x_5_31107": 77.75,
      "m_x_5_31108": 49.88,
      "m_x_5_40538": 200,
      "m_x_5_71242": 95.89,
      "m_x_5_71243": 134.79,
      "m_x_5_71244": 100.08,
      "m_x_5_71245": 70.56,
      "m_x_5_71246": 140.64,
      "m_x_5_71247": 128.4,
      "m_x_5_71248": 200,
      "m_x_5_71249": 97.94,
      "m_x_5_71251": 27.24,
      "m_x_5_71252": 27.03,
      "m_x_5_71255": 50,
      "m_x_5_71259": 90.14,
      "m_x_5_71260": 87.71,
      "m_x_5_71261": 130.46,
      "m_x_5_71262": 98.87,
      "m_x_5_71263": 40,
      "m_x_5_89341": 300,
      "m_x_5_89342": 80.52,
      "m_x_5_89343": 80.49,
      "m_x_5_6247": 0.9,
      "m_x_5_6248": 1.22,
      "m_x_5_40539": 480.31,
      "m_x_5_71129": 98,
      "m_x_5_71130": 120.27,
      "m_x_5_71131": 89,
      "m_x_5_71133": 1181.97,
      "m_x_5_71134": 1995,
      "m_x_5_71141": 1697.97,
      "m_x_5_71144": 1700.88,
      "m_x_5_71145": 1978.02,
      "m_x_5_71147": 1749.74,
      "m_x_5_71148": 1439.98,
      "m_x_5_71150": 1500,
      "m_x_5_71151": 1200.33,
      "m_x_5_71174": 600.08,
      "m_x_5_71185": 677.21,
      "m_x_5_71189": 60.34,
      "m_x_5_71190": 46,
      "m_x_5_89415": 1005.5,
      "m_x_5_89417": 1700,
      "m_x_5_89418": 886.7,
      "m_x_5_89419": 2219,
      "m_x_5_89420": 1187.7,
      "m_x_5_89421": 1200,
      "m_x_5_89422": 500,
      "m_x_5_89423": 2190.86,
      "m_x_5_89425": 1000,
      "m_x_5_89429": 2222,
      "m_x_5_35004": 2.26,
      "m_x_5_35005": 3.33,
      "m_x_5_35006": 5.57,
      "m_x_5_35007": 2.18,
      "m_x_5_35771": 880,
      "m_x_5_38927": 6.96,
      "m_x_5_32010": 1.5,
      "m_x_5_32012": 10000
    },
    "s_aoxue": {
      "fengwangjiang": 555,
      "shoupijiao": 70,
      "qicaixian": 650,
      "m_m_5_30852": 24.9,
      "m_m_5_30853": 69.01,
      "m_m_5_30828": 12.59,
      "guajian_bei": 70,
      "baihua_bu": 250,
      "guajian_yao": 90,
      "shuran_bu": 300,
      "shuran_bag": 222,
      "wuseshi": 599,
      "m_m_5_30856": 24.24,
      "m_m_5_30855": 250,
      "geyin_zhang": 200,
      "m_m_5_89298": 100,
      "m_m_5_30679": 12.88,
      "m_m_5_30847": 9,
      "m_m_5_30850": 93.24,
      "m_m_5_30845": 210,
      "m_m_5_30844": 0.79,
      "m_m_5_30873": 29,
      "m_m_8_36148": 4999.99,
      "m_m_5_30827": 0.2,
      "m_m_5_89970": 666,
      "lucai": 99.66,
      "m_m_5_30826": 0.94,
      "m_m_5_30825": 0.9,
      "m_m_5_30824": 0.97,
      "m_m_5_71281": 5,
      "m_m_5_30823": 1.17,
      "m_m_5_89315": 1999.99,
      "m_m_5_89969": 350,
      "m_m_5_89971": 400,
      "lushui": 20.33,
      "m_m_5_30843": 1.19,
      "m_m_5_30874": 67.45,
      "m_m_5_30842": 0.82,
      "m_m_5_31013": 259.99,
      "gancao": 1,
      "m_m_5_31012": 563,
      "m_m_5_89350": 2500,
      "m_m_5_71269": 275.88,
      "m_m_5_89346": 1199,
      "m_m_5_71285": 40,
      "m_m_5_30832": 0.76,
      "m_m_5_30833": 1.29,
      "m_m_5_89324": 250,
      "m_m_5_30831": 0.72,
      "m_m_5_89973": 350,
      "m_m_5_71241": 10,
      "m_m_5_71240": 24,
      "m_m_5_71266": 30,
      "m_m_5_30838": 2,
      "shanhu": 1,
      "m_m_5_30835": 0.98,
      "m_m_5_71267": 12,
      "yaoyin": 679.89,
      "shaoyao": 1.56,
      "m_m_5_31102": 0.56,
      "m_m_5_30834": 1.39,
      "m_m_5_89340": 475,
      "m_m_5_89325": 1700,
      "m_m_5_71258": 50,
      "m_m_5_89966": 400,
      "m_m_5_89968": 400,
      "m_m_5_71192": 50,
      "m_m_5_89962": 260,
      "m_m_5_31139": 6000,
      "m_m_5_89964": 400,
      "m_m_5_10027": 109.99,
      "m_m_5_89961": 240,
      "tiekuang": 2.35,
      "m_m_5_30676": 1.89,
      "m_m_5_30678": 1.96,
      "m_m_5_30674": 2.38,
      "m_m_5_30675": 1.9,
      "m_m_5_6246": 0.07,
      "muban": 35,
      "muliao": 1.95,
      "qiwuling": 4.9,
      "m_m_5_35716": 30,
      "m_m_5_35715": 50,
      "m_m_5_35714": 40,
      "m_m_5_35713": 30,
      "m_m_10_1880": 2170,
      "m_m_5_35717": 12,
      "m_m_5_52337": 2200,
      "m_m_5_35772": 2200.33,
      "zasui": 1.08,
      "g_5_30680": 1.01,
      "m_x_5_89331": 800,
      "m_x_5_89368": 1037.5,
      "m_x_5_89379": 6500,
      "m_x_5_90437": 300,
      "m_x_5_89347": 4000,
      "m_x_5_89358": 4900,
      "m_x_5_5232": 5,
      "m_x_5_71268": 250,
      "m_x_5_71271": 211.99,
      "m_x_5_71272": 290,
      "m_x_5_71273": 290,
      "m_x_5_71274": 280,
      "m_x_5_71286": 40,
      "m_x_5_71287": 70,
      "m_x_5_71288": 70,
      "m_x_5_71289": 9,
      "m_x_5_71290": 33,
      "m_x_5_71294": 600,
      "m_x_5_71295": 600,
      "m_x_5_71296": 1110.97,
      "m_x_5_71297": 600,
      "m_x_5_71299": 500,
      "m_x_5_89361": 230,
      "m_x_5_89364": 220,
      "m_x_5_3810": 222,
      "m_x_8_69": 599.95,
      "m_x_5_22145": 249.99,
      "m_x_5_22917": 130,
      "m_x_5_22981": 280,
      "m_x_5_71196": 700.57,
      "m_x_5_71198": 1100,
      "m_x_5_71199": 1100,
      "m_x_5_71200": 1200,
      "m_x_5_71201": 1200,
      "m_x_5_71202": 400,
      "m_x_5_71203": 2000,
      "m_x_5_71206": 1100,
      "m_x_5_71207": 1900,
      "m_x_5_71214": 400,
      "m_x_5_71225": 400.98,
      "m_x_5_71229": 799.99,
      "m_x_5_31103": 25.69,
      "m_x_5_31104": 100.27,
      "m_x_5_40538": 30,
      "m_x_5_71242": 188.12,
      "m_x_5_71243": 270,
      "m_x_5_71245": 20,
      "m_x_5_71246": 270,
      "m_x_5_71247": 280,
      "m_x_5_71248": 115.5,
      "m_x_5_71250": 49.99,
      "m_x_5_71251": 50,
      "m_x_5_71252": 19.09,
      "m_x_5_71254": 50,
      "m_x_5_71255": 30.2,
      "m_x_5_71256": 55,
      "m_x_5_71257": 50,
      "m_x_5_71259": 90,
      "m_x_5_71260": 120.3,
      "m_x_5_71261": 100,
      "m_x_5_71262": 150,
      "m_x_5_71263": 50,
      "m_x_5_71264": 20,
      "m_x_5_71265": 59.99,
      "m_x_5_89341": 800,
      "m_x_5_89342": 300,
      "m_x_5_2631": 55,
      "m_x_5_2189": 111,
      "m_x_5_6247": 1.18,
      "m_x_5_6248": 1.71,
      "m_x_5_10028": 399.98,
      "m_x_5_40539": 200,
      "m_x_5_71129": 69,
      "m_x_5_71130": 90,
      "m_x_5_71131": 144,
      "m_x_5_71132": 320,
      "m_x_5_71133": 900,
      "m_x_5_71134": 1300.42,
      "m_x_5_71136": 1200,
      "m_x_5_71141": 1500.98,
      "m_x_5_71144": 1600.19,
      "m_x_5_71145": 900,
      "m_x_5_71146": 1400,
      "m_x_5_71147": 2500,
      "m_x_5_71148": 1000.46,
      "m_x_5_71150": 2199.99,
      "m_x_5_71151": 900.97,
      "m_x_5_71191": 13,
      "m_x_5_54537": 100,
      "m_x_5_35004": 3.9,
      "m_x_5_35005": 1.89,
      "m_x_5_35006": 4.99,
      "m_x_5_35007": 2.1,
      "m_x_5_35044": 0.13,
      "m_x_5_35771": 1650,
      "m_x_5_35773": 1500,
      "m_x_10_139": 599,
      "m_x_5_38927": 5.85,
      "m_x_10_1879": 969.99,
      "m_x_10_1881": 1299
    }
  },
  "stoneMeta": {
    "version": "cs50-stone-2026-11-19",
    "season": "苍生铸世",
    "verifiedAt": "2026-11-19",
    "taxRate": 0.05,
    "scope": "1-8 级五行石；快速合成 / 最优合成 / 7-8 级爆率盈亏线",
    "note": "当前赛季官方未逐条公布五行石合成公式；3-6 级默认值来自 2026-07 精炼面板攻略，并用 2026-09 官方「精炼公式未调整」与测试服精六成本交叉核对。7-8 级无稳定保底公式，按可编辑爆率建模。所有公式均可在页面内修改。",
    "sources": [
      {
        "label": "面向萌新的五行石精炼方法与成本（2026-07-29 更新）",
        "url": "https://www.jx3box.com/community/6363",
        "note": "三级 12×一级；四级 3×三级+7×一级；五级 3×四级+2×三级；六级 3×五级+2×四级；含成功率、加工费与精力。"
      },
      {
        "label": "【苍生铸世】版本测试服全身精六汇算（2026-10-08 更新）",
        "url": "https://www.jx3box.com/community/6496",
        "note": "当前赛季测试服精六成本；6 级五行石约 518 金/块（2026-09-10 样本）。"
      },
      {
        "label": "《剑网3》新赛季门派动作与精炼规则持续优化中（2026-09-15）",
        "url": "https://news.17173.com/content/09152026/160051947.shtml",
        "note": "官方说明：这次精炼公式本身没有调整；衣服/下装精六为 16 颗 6 级五行石 100% 成功。"
      },
      {
        "label": "【苍生铸世】开荒必看！新赛季剥七&剥八一图示（2026-11-08 更新）",
        "url": "https://www.jx3box.com/community/6597",
        "note": "当前赛季 7/8 级剥离成本；6 级五行石按 520 金/块样本计算。"
      },
      {
        "label": "五行石精炼方式的成本及毛利计算（2025-03-16 更新）",
        "url": "https://www.jx3box.com/community/2815",
        "note": "快速合成 1-6 级成本/精力表；4 精 6 出 8 的 252 次实验与累积概率表。"
      },
      {
        "label": "JX3BOX 拍卖 · 五行石 1-8 级（2026-11-19）",
        "url": "https://next2.jx3box.com/api/auction/",
        "note": "17 个服务器 1-8 级五行石拍卖样本，用于本模块默认价。"
      }
    ]
  },
  "stones": [
    {
      "level": 1,
      "itemId": "5_24423",
      "name": "五行石（一级）",
      "quality": 2,
      "color": "#94A3B8",
      "base": 0.81
    },
    {
      "level": 2,
      "itemId": "5_24424",
      "name": "五行石（二级）",
      "quality": 2,
      "color": "#94A3B8",
      "base": 4.58
    },
    {
      "level": 3,
      "itemId": "5_24425",
      "name": "五行石（三级）",
      "quality": 3,
      "color": "#60A5FA",
      "base": 14.79
    },
    {
      "level": 4,
      "itemId": "5_24426",
      "name": "五行石（四级）",
      "quality": 3,
      "color": "#60A5FA",
      "base": 48.26
    },
    {
      "level": 5,
      "itemId": "5_24427",
      "name": "五行石（五级）",
      "quality": 4,
      "color": "#C084FC",
      "base": 164.08
    },
    {
      "level": 6,
      "itemId": "5_24428",
      "name": "五行石（六级）",
      "quality": 4,
      "color": "#C084FC",
      "base": 549.8
    },
    {
      "level": 7,
      "itemId": "5_24429",
      "name": "五行石（七级）",
      "quality": 5,
      "color": "#FBBF24",
      "base": 8720.66
    },
    {
      "level": 8,
      "itemId": "5_24430",
      "name": "五行石（八级）",
      "quality": 5,
      "color": "#FBBF24",
      "base": 27990.5
    }
  ],
  "stonePrices": {
    "s_mengjiangnan": {
      "1": 0.81,
      "2": 4.16,
      "3": 13.54,
      "4": 55.55,
      "5": 168,
      "6": 550.88,
      "7": 8499.66,
      "8": 26885.85
    },
    "s_pozhenzi": {
      "1": 0.83,
      "2": 5.7,
      "3": 13.01,
      "4": 52.97,
      "5": 161,
      "6": 519.94,
      "7": 8500,
      "8": 24900.77
    },
    "s_dielianhua": {
      "1": 0.8,
      "2": 4.03,
      "3": 13.42,
      "4": 54.5,
      "5": 168.88,
      "6": 517.06,
      "7": 10888.88,
      "8": 25375.53
    },
    "s_jiandan": {
      "1": 0.83,
      "2": 4.94,
      "3": 13.45,
      "4": 55.7,
      "5": 156.6,
      "6": 510.83,
      "7": 9000,
      "8": 24000.25
    },
    "s_youyuelun": {
      "1": 0.81,
      "2": 5.3,
      "3": 13.28,
      "4": 54.2,
      "5": 149.65,
      "6": 521.52,
      "7": 8474.64,
      "8": 24290.47
    },
    "s_longzheng": {
      "1": 0.8,
      "2": 6.45,
      "3": 13,
      "4": 49,
      "5": 155.87,
      "6": 510.72,
      "7": 8499.16,
      "8": 25444.21
    },
    "s_changancheng": {
      "1": 0.81,
      "2": 4.9,
      "3": 12.31,
      "4": 47.27,
      "5": 161.11,
      "6": 512.62,
      "7": 8111.24,
      "8": 28660.43
    },
    "s_douzhuang": {
      "1": 0.85,
      "2": 5.52,
      "3": 13.32,
      "4": 47,
      "5": 152.9,
      "6": 513.79,
      "7": 9999,
      "8": 24399.44
    },
    "s_qiankun": {
      "1": 0.82,
      "2": 4.79,
      "3": 13.43,
      "4": 49.3,
      "5": 163.13,
      "6": 538.92,
      "7": 9390.82,
      "8": 24835.61
    },
    "s_weiwo": {
      "1": 0.83,
      "2": 5.43,
      "3": 13.73,
      "4": 46.5,
      "5": 167.31,
      "6": 557.31,
      "7": 9400.03,
      "8": 26000.88
    },
    "s_juedai": {
      "1": 0.81,
      "2": 5.82,
      "3": 14.88,
      "4": 51.41,
      "5": 153.98,
      "6": 517.06,
      "7": 8480.64,
      "8": 24880.96
    },
    "s_tianeping": {
      "1": 0.81,
      "2": 14.65,
      "3": 14.15,
      "4": 56.98,
      "5": 151.46,
      "6": 531.8,
      "7": 9555.01,
      "8": 24400.64
    },
    "s_feilong": {
      "1": 0.81,
      "2": 4.5,
      "3": 13.88,
      "4": 47.99,
      "5": 161.1,
      "6": 510.74,
      "7": 8205.89,
      "8": 24330.65
    },
    "s_jiutian": {
      "1": 0.82,
      "2": 5.91,
      "3": 15.4,
      "4": 52.64,
      "5": 175.8,
      "6": 635.8,
      "7": 20000,
      "8": 46624.45
    },
    "s_meijianxue": {
      "1": 0.81,
      "2": 4.98,
      "3": 15.76,
      "4": 46.89,
      "5": 168.88,
      "6": 532.99,
      "7": 8288.48,
      "8": 31111.91
    },
    "s_shanhai": {
      "1": 0.81,
      "3": 13.59,
      "4": 58,
      "5": 168.88,
      "6": 535,
      "7": 7799,
      "8": 25888.88
    },
    "s_aoxue": {
      "1": 1,
      "3": 41.58,
      "4": 81.14,
      "5": 210,
      "6": 570,
      "7": 6500,
      "8": 27823
    }
  },
  "stoneRecipes": [
    {
      "id": "fast_2",
      "name": "快速合成 · 二级",
      "mode": "fast",
      "target": 2,
      "primary": 2,
      "inputs": [
        {
          "level": 1,
          "qty": 4
        }
      ],
      "fee": 0.12,
      "energy": 10,
      "outcomes": [
        {
          "level": 2,
          "chance": 1
        }
      ],
      "verified": true,
      "source": "游戏内快速精炼面板 · 2024-10 成本表（2026-09 官方确认公式未调整）",
      "note": "快速精炼自动填入 1 级五行石，无需中间产物。"
    },
    {
      "id": "fast_3",
      "name": "快速合成 · 三级",
      "mode": "fast",
      "target": 3,
      "primary": 3,
      "inputs": [
        {
          "level": 1,
          "qty": 13
        }
      ],
      "fee": 0.39,
      "energy": 10,
      "outcomes": [
        {
          "level": 3,
          "chance": 1
        }
      ],
      "verified": true,
      "source": "游戏内快速精炼面板 · 2024-10 成本表",
      "note": "13 颗一级加 0.39 金加工费，100% 出三级。"
    },
    {
      "id": "fast_4",
      "name": "快速合成 · 四级",
      "mode": "fast",
      "target": 4,
      "primary": 4,
      "inputs": [
        {
          "level": 1,
          "qty": 46
        }
      ],
      "fee": 2.76,
      "energy": 47,
      "outcomes": [
        {
          "level": 4,
          "chance": 1
        }
      ],
      "verified": true,
      "source": "游戏内快速精炼面板 · 2024-10 成本表",
      "note": "直接消耗 46 颗一级，精力 47 点。"
    },
    {
      "id": "fast_5",
      "name": "快速合成 · 五级",
      "mode": "fast",
      "target": 5,
      "primary": 5,
      "inputs": [
        {
          "level": 1,
          "qty": 170
        }
      ],
      "fee": 10.2,
      "energy": 147,
      "outcomes": [
        {
          "level": 5,
          "chance": 1
        }
      ],
      "verified": true,
      "source": "游戏内快速精炼面板 · 2024-10 成本表",
      "note": "直接消耗 170 颗一级，精力 147 点。"
    },
    {
      "id": "fast_6",
      "name": "快速合成 · 六级",
      "mode": "fast",
      "target": 6,
      "primary": 6,
      "inputs": [
        {
          "level": 1,
          "qty": 599
        }
      ],
      "fee": 53.91,
      "energy": 554,
      "outcomes": [
        {
          "level": 6,
          "chance": 1
        }
      ],
      "verified": true,
      "source": "游戏内快速精炼面板 · 2024-10 成本表",
      "note": "直接消耗 599 颗一级，精力 554 点；2026 赛季仍可在精炼面板快速填充。"
    },
    {
      "id": "opt_3",
      "name": "最优合成 · 三级（12×一级）",
      "mode": "optimal",
      "target": 3,
      "primary": 3,
      "inputs": [
        {
          "level": 1,
          "qty": 12
        }
      ],
      "fee": 0.36,
      "energy": 10,
      "outcomes": [
        {
          "level": 3,
          "chance": 0.9276
        },
        {
          "level": 2,
          "chance": 0.0724
        }
      ],
      "verified": true,
      "source": "2026-07 攻略 · 精炼面板成功率",
      "note": "比快速三级略省金币，但只有 92.76% 出三级，其余 7.24% 为二级。"
    },
    {
      "id": "opt_4",
      "name": "最优合成 · 四级（3×三级 + 7×一级）",
      "mode": "optimal",
      "target": 4,
      "primary": 4,
      "inputs": [
        {
          "level": 3,
          "qty": 3
        },
        {
          "level": 1,
          "qty": 7
        }
      ],
      "fee": 1.4421,
      "energy": 10,
      "outcomes": [
        {
          "level": 4,
          "chance": 0.9911
        },
        {
          "level": 5,
          "chance": 0.0072
        },
        {
          "level": 3,
          "chance": 0.0017
        }
      ],
      "verified": true,
      "source": "2026-07 攻略 · 精炼面板成功率",
      "note": "16 格配方；99.11% 出四级，0.72% 跳五级，0.17% 退回三级。"
    },
    {
      "id": "opt_4_alt",
      "name": "四级（4×三级）",
      "mode": "optimal",
      "target": 4,
      "primary": 4,
      "inputs": [
        {
          "level": 3,
          "qty": 4
        }
      ],
      "fee": 1.6428,
      "energy": 10,
      "outcomes": [
        {
          "level": 4,
          "chance": 0.9436
        },
        {
          "level": 5,
          "chance": 0.0564
        }
      ],
      "verified": true,
      "source": "2025-03 成本表 · 4 精 5 同源配方",
      "note": "94.36% 出四级，5.64% 跳五级；按当前价格有时比 3+7 更省金币，但更耗精力。"
    },
    {
      "id": "opt_5",
      "name": "最优合成 · 五级（3×四级 + 2×三级）",
      "mode": "optimal",
      "target": 5,
      "primary": 5,
      "inputs": [
        {
          "level": 4,
          "qty": 3
        },
        {
          "level": 3,
          "qty": 2
        }
      ],
      "fee": 5.3801,
      "energy": 10,
      "outcomes": [
        {
          "level": 5,
          "chance": 0.9915
        },
        {
          "level": 6,
          "chance": 0.0085
        }
      ],
      "verified": true,
      "source": "2026-07 攻略 · 精炼面板成功率",
      "note": "99.15% 出五级，0.85% 跳六级。"
    },
    {
      "id": "opt_5_alt",
      "name": "五级（4×四级）",
      "mode": "optimal",
      "target": 5,
      "primary": 5,
      "inputs": [
        {
          "level": 4,
          "qty": 4
        }
      ],
      "fee": 6.0783,
      "energy": 10,
      "outcomes": [
        {
          "level": 5,
          "chance": 0.9436
        },
        {
          "level": 6,
          "chance": 0.0564
        }
      ],
      "verified": true,
      "source": "2025-03 成本表 · 4 精 5",
      "note": "94.36% 出五级，5.64% 跳六级。"
    },
    {
      "id": "opt_6_a",
      "name": "最优合成 · 六级（12×四级）",
      "mode": "optimal",
      "target": 6,
      "primary": 6,
      "inputs": [
        {
          "level": 4,
          "qty": 12
        }
      ],
      "fee": 18.24,
      "energy": 10,
      "outcomes": [
        {
          "level": 6,
          "chance": 0.9276
        },
        {
          "level": 5,
          "chance": 0.0724
        }
      ],
      "verified": true,
      "source": "2025-03 成本表 · 4 精 6",
      "note": "92.76% 出六级，7.24% 出五级；通常是最省金币的六级路线。"
    },
    {
      "id": "opt_6_b",
      "name": "高成功率 · 六级（11×四级 + 6×三级）",
      "mode": "optimal",
      "target": 6,
      "primary": 6,
      "inputs": [
        {
          "level": 4,
          "qty": 11
        },
        {
          "level": 3,
          "qty": 6
        }
      ],
      "fee": 19.18,
      "energy": 10,
      "outcomes": [
        {
          "level": 6,
          "chance": 0.9885
        },
        {
          "level": 5,
          "chance": 0.0115
        }
      ],
      "verified": true,
      "source": "2025-03 成本表 · 4 精 6",
      "note": "98.85% 出六级，1.15% 出五级；金币成本略高，但成功更稳。"
    },
    {
      "id": "opt_6_c",
      "name": "稳妥 · 六级（3×五级 + 2×四级）",
      "mode": "optimal",
      "target": 6,
      "primary": 6,
      "inputs": [
        {
          "level": 5,
          "qty": 3
        },
        {
          "level": 4,
          "qty": 2
        }
      ],
      "fee": 19.9066,
      "energy": 10,
      "outcomes": [
        {
          "level": 6,
          "chance": 0.9955
        }
      ],
      "verified": true,
      "source": "2026-07 攻略 · 精炼面板成功率",
      "note": "99.55% 出六级，0.45% 失败；成功率最高但五级底料更贵。"
    },
    {
      "id": "opt_6_d",
      "name": "保底 · 六级（13×四级）",
      "mode": "optimal",
      "target": 6,
      "primary": 6,
      "inputs": [
        {
          "level": 4,
          "qty": 13
        }
      ],
      "fee": 19.75,
      "energy": 10,
      "outcomes": [
        {
          "level": 6,
          "chance": 1
        }
      ],
      "verified": false,
      "source": "社区常用 13×四级保底公式",
      "note": "社区常用保底路线，2026 赛季面板待复核；默认按 100% 出六级。"
    },
    {
      "id": "jack_7",
      "name": "赌跳 · 七级（4×六级）",
      "mode": "jackpot",
      "target": 7,
      "primary": 6,
      "inputs": [
        {
          "level": 6,
          "qty": 4
        }
      ],
      "fee": 40,
      "energy": 10,
      "outcomes": [
        {
          "level": 6,
          "chance": 1
        },
        {
          "level": 7,
          "chance": 0
        }
      ],
      "verified": false,
      "source": "7/8 级无稳定保底公式；模板用于爆率盈亏线",
      "note": "默认 0% 爆率，仅计算“要多少爆率才不亏”。请按游戏内面板或实测把七级概率改成实际值。"
    },
    {
      "id": "jack_8",
      "name": "赌跳 · 八级（15×六级）",
      "mode": "jackpot",
      "target": 8,
      "primary": 6,
      "inputs": [
        {
          "level": 6,
          "qty": 15
        }
      ],
      "fee": 100,
      "energy": 10,
      "outcomes": [
        {
          "level": 6,
          "chance": 1
        },
        {
          "level": 8,
          "chance": 0
        }
      ],
      "verified": false,
      "source": "7/8 级无稳定保底公式；模板用于爆率盈亏线",
      "note": "默认 0% 爆率；15 颗六级是常见的冲八模板，实际配方与爆率请按面板校准。"
    },
    {
      "id": "jack_8_alt",
      "name": "赌跳 · 八级（16×六级）",
      "mode": "jackpot",
      "target": 8,
      "primary": 6,
      "inputs": [
        {
          "level": 6,
          "qty": 16
        }
      ],
      "fee": 100,
      "energy": 10,
      "outcomes": [
        {
          "level": 6,
          "chance": 1
        },
        {
          "level": 8,
          "chance": 0
        }
      ],
      "verified": false,
      "source": "7/8 级无稳定保底公式；模板用于爆率盈亏线",
      "note": "填满 16 格的冲八模板；与 15 颗方案对比单次成本与盈亏线。"
    },
    {
      "id": "jack_8_from4",
      "name": "赌跳 · 4 精 6 冲八（12×四级）",
      "mode": "jackpot",
      "target": 8,
      "primary": 6,
      "inputs": [
        {
          "level": 4,
          "qty": 12
        }
      ],
      "fee": 18.24,
      "energy": 10,
      "outcomes": [
        {
          "level": 6,
          "chance": 0.9276
        },
        {
          "level": 5,
          "chance": 0.0724
        },
        {
          "level": 8,
          "chance": 0
        }
      ],
      "verified": false,
      "source": "2025-03 实验：252 次 4 精 6 未出 8",
      "note": "基础产出六级通常已盈利，八级是额外收益；252 次未出八，95% 置信上限约 1.2%。"
    }
  ]
};
