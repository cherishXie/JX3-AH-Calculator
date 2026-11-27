/* =========================================================================
   剑网三物价助手 · 苍生铸世 50 级生活技艺数据
   数据版本：v3.9-medicine（2026-11-22）
   价格修订：2026-11-28T06:08:52+08:00 · JX3BOX 全服拍卖
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
    "priceUpdatedAt": "2026-11-28T06:08:52+08:00",
    "priceCoverage": {
      "updated": 770,
      "total": 1117,
      "source": "JX3BOX 拍卖 · 17 个服务器",
      "filtered": 46,
      "noQuote": 347
    },
    "serverCoverage": {
      "s_mengjiangnan": {
        "updated": 770,
        "total": 1117,
        "filtered": 46,
        "noQuote": 347
      },
      "s_pozhenzi": {
        "updated": 445,
        "total": 1117,
        "filtered": 57,
        "noQuote": 672
      },
      "s_dielianhua": {
        "updated": 395,
        "total": 1117,
        "filtered": 33,
        "noQuote": 722
      },
      "s_jiandan": {
        "updated": 421,
        "total": 1117,
        "filtered": 55,
        "noQuote": 696
      },
      "s_youyuelun": {
        "updated": 500,
        "total": 1117,
        "filtered": 57,
        "noQuote": 617
      },
      "s_longzheng": {
        "updated": 602,
        "total": 1117,
        "filtered": 47,
        "noQuote": 515
      },
      "s_changancheng": {
        "updated": 445,
        "total": 1117,
        "filtered": 45,
        "noQuote": 672
      },
      "s_douzhuang": {
        "updated": 475,
        "total": 1117,
        "filtered": 59,
        "noQuote": 642
      },
      "s_qiankun": {
        "updated": 571,
        "total": 1117,
        "filtered": 59,
        "noQuote": 546
      },
      "s_weiwo": {
        "updated": 761,
        "total": 1117,
        "filtered": 49,
        "noQuote": 356
      },
      "s_juedai": {
        "updated": 586,
        "total": 1117,
        "filtered": 59,
        "noQuote": 531
      },
      "s_tianeping": {
        "updated": 721,
        "total": 1117,
        "filtered": 58,
        "noQuote": 396
      },
      "s_feilong": {
        "updated": 369,
        "total": 1117,
        "filtered": 63,
        "noQuote": 748
      },
      "s_jiutian": {
        "updated": 221,
        "total": 1117,
        "filtered": 52,
        "noQuote": 896
      },
      "s_meijianxue": {
        "updated": 319,
        "total": 1117,
        "filtered": 50,
        "noQuote": 798
      },
      "s_shanhai": {
        "updated": 265,
        "total": 1117,
        "filtered": 23,
        "noQuote": 852
      },
      "s_aoxue": {
        "updated": 189,
        "total": 1117,
        "filtered": 21,
        "noQuote": 928
      }
    },
    "stonePriceUpdatedAt": "2026-11-28T06:08:52+08:00",
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
      "base": 69990.31,
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
      "base": 171.2,
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
      "base": 65.99,
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
      "base": 127,
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
      "base": 3.25,
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
      "base": 16.3,
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
      "base": 97,
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
      "base": 4.17,
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
      "base": 73.7,
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
      "base": 95.48,
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
      "base": 88.64,
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
      "base": 0.66,
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
      "base": 33.98,
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
      "base": 132,
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
      "base": 14.45,
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
      "base": 163.4,
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
      "base": 174.97,
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
      "base": 38,
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
      "base": 15.94,
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
      "base": 10.99,
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
      "base": 1.71,
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
      "base": 122.01,
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
      "base": 19.44,
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
      "base": 145.12,
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
      "base": 172.88,
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
      "base": 0.89,
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
      "base": 6999.98,
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
      "base": 5200,
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
      "base": 210.99,
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
      "base": 3999.99,
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
      "base": 0.45,
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
      "base": 16.25,
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
      "base": 39.42,
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
      "base": 50,
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
      "base": 116.47,
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
      "base": 1090.31,
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
      "base": 1.38,
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
      "base": 178.4,
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
      "base": 0.66,
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
      "base": 15,
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
      "base": 8.96,
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
      "base": 50.02,
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
      "base": 0.55,
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
      "base": 10.75,
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
      "base": 0.64,
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
      "base": 88.19,
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
      "base": 0.3,
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
      "base": 0.35,
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
      "base": 38.35,
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
      "base": 1500.51,
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
      "base": 133.05,
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
      "base": 0.65,
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
      "base": 4155.72,
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
      "base": 197.98,
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
      "base": 14.99,
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
      "base": 1.62,
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
      "base": 0.49,
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
      "base": 29.65,
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
      "base": 0.5,
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
      "base": 187.73,
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
      "base": 3,
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
      "base": 328,
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
      "base": 8888.88,
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
      "base": 21.07,
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
      "base": 4069.47,
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
      "base": 1499,
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
      "base": 633.28,
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
      "base": 594.93,
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
      "base": 125.47,
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
      "base": 708.8,
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
      "base": 10.63,
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
      "base": 170,
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
      "base": 94.67,
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
      "base": 36.98,
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
      "base": 0.88,
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
      "base": 1.97,
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
      "base": 1.59,
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
      "base": 150,
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
      "base": 0.85,
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
      "base": 172.11,
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
      "base": 47.09,
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
      "base": 1,
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
      "base": 3,
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
      "base": 300.89,
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
      "base": 2.79,
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
      "base": 59.3,
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
      "base": 1.39,
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
      "base": 165.83,
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
      "base": 49.57,
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
      "base": 649,
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
      "base": 2.6,
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
      "base": 0.15,
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
      "base": 1.92,
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
      "base": 768.26,
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
      "base": 741.18,
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
      "base": 88.24,
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
      "base": 694.38,
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
      "base": 67.08,
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
      "base": 79,
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
      "base": 64.56,
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
      "base": 3.8,
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
      "base": 0.79,
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
      "base": 64.44,
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
      "base": 0.89,
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
      "base": 398.51,
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
      "base": 99.7,
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
      "base": 388.29,
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
      "base": 120.67,
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
      "base": 50.03,
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
      "base": 4299.11,
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
      "base": 59.98,
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
      "base": 63.48,
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
      "base": 3.78,
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
      "base": 1.63,
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
      "base": 1.45,
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
      "base": 2.77,
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
      "base": 2.91,
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
      "base": 155.21,
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
      "base": 883.33,
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
      "base": 0.12,
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
      "base": 2.48,
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
      "base": 3.08,
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
      "base": 29.1,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
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
      "base": 266.5,
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
      "base": 299,
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
      "base": 2.78,
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
      "base": 31.74,
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
      "base": 10.25,
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
      "base": 15.43,
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
      "base": 4.99,
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
      "base": 1.7,
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
      "base": 21,
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
      "base": 310.12,
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
      "base": 1.96,
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
      "base": 1110.99,
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
      "base": 1200.92,
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
      "base": 277.86,
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
      "base": 0.21,
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
      "base": 0.94,
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
      "base": 0.9,
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
      "base": 4454,
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
      "base": 572.38,
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
      "base": 2145.81,
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
      "base": 529.07,
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
      "base": 999.08,
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
      "base": 3295.99,
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
      "base": 35968,
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
      "base": 21999.19,
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
      "base": 4998.19,
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
      "base": 21110.59,
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
      "base": 3600,
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
      "base": 18680,
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
      "base": 3788.69,
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
      "base": 24999.45,
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
      "base": 24900,
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
      "base": 4290,
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
      "base": 3999.8,
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
      "base": 4000,
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
      "base": 36666,
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
      "base": 7774.32,
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
      "base": 60000,
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
      "base": 930,
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
      "base": 1661,
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
      "base": 594.51,
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
      "base": 1480.21,
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
      "base": 689.95,
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
      "base": 950,
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
      "base": 827.19,
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
      "base": 1399.83,
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
      "base": 2999,
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
      "base": 82.19,
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
      "base": 3576.62,
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
      "base": 23000,
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
      "base": 4497,
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
      "base": 4150.81,
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
      "base": 4498.88,
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
      "base": 21000.1,
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
      "base": 4397,
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
      "base": 38888.78,
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
      "base": 3991,
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
      "base": 3900,
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
      "base": 3998.18,
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
      "base": 39999,
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
      "base": 4995.45,
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
      "base": 4500,
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
      "base": 4541,
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
      "base": 999.21,
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
      "base": 1700,
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
      "base": 1600.92,
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
      "base": 1660,
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
      "base": 12895.2,
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
      "base": 1133.94,
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
      "base": 1000,
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
      "base": 1155.79,
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
      "base": 24997,
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
      "base": 988,
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
      "base": 1200.01,
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
      "base": 8.57,
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
      "base": 20.17,
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
      "base": 3660.73,
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
      "base": 133.99,
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
      "base": 104.99,
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
      "base": 699.99,
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
      "base": 75.1,
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
      "base": 115.11,
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
      "base": 120.07,
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
      "base": 95.22,
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
      "base": 22.86,
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
      "base": 5000,
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
      "base": 39.36,
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
      "base": 855.12,
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
      "base": 4292,
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
      "base": 120.14,
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
      "base": 80.16,
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
      "base": 80.35,
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
      "base": 82.25,
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
      "base": 26.1,
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
      "base": 40.89,
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
      "base": 654.91,
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
      "base": 480.26,
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
      "base": 585.88,
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
      "base": 42.26,
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
      "base": 1749.99,
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
      "base": 2290.17,
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
      "base": 55.2,
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
      "base": 45.17,
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
      "base": 78.45,
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
      "base": 78.1,
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
      "base": 699.99,
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
      "base": 11,
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
      "base": 59,
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
      "base": 3,
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
      "base": 200.67,
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
      "base": 62.66,
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
      "base": 167.99,
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
      "base": 100.09,
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
      "base": 1005.61,
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
      "base": 1600.39,
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
      "base": 1100.77,
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
      "base": 1449.12,
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
      "base": 1194.44,
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
      "base": 1750.89,
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
      "base": 1345.31,
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
      "base": 1068.8,
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
      "base": 1860.6,
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
      "base": 1430.86,
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
      "base": 1800.86,
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
      "base": 1550.98,
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
      "base": 1040.6,
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
      "base": 586.78,
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
      "base": 522.51,
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
      "base": 420.83,
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
      "base": 425.91,
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
      "base": 315.7,
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
      "base": 360.36,
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
      "base": 290,
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
      "base": 270.33,
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
      "base": 320.11,
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
      "base": 325.45,
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
      "base": 410.95,
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
      "base": 310.08,
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
      "base": 325.04,
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
      "base": 1199.97,
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
      "base": 1679.79,
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
      "base": 1265,
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
      "base": 1110.87,
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
      "base": 2450.02,
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
      "base": 948.48,
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
      "base": 1608.2,
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
      "base": 1690.18,
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
      "base": 1166,
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
      "base": 1560.2,
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
      "base": 1666.21,
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
      "base": 1888.88,
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
      "base": 1498.98,
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
      "base": 609,
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
      "base": 49.82,
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
      "base": 7.35,
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
      "base": 71.33,
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
      "base": 39.99,
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
      "base": 80.1,
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
      "base": 129.6,
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
      "base": 100,
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
      "base": 55.36,
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
      "base": 129,
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
      "base": 114.11,
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
      "base": 104.98,
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
      "base": 48.64,
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
      "base": 60.66,
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
      "base": 118.78,
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
      "base": 116.21,
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
      "base": 119.47,
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
      "base": 94.86,
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
      "base": 59.07,
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
      "base": 100.24,
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
      "base": 80.66,
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
      "base": 140,
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
      "base": 17.4,
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
      "base": 1.17,
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
      "base": 0.9,
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
      "base": 65.11,
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
      "base": 50.98,
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
      "base": 260.67,
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
      "base": 444,
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
      "base": 241.67,
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
      "base": 42.43,
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
      "base": 137.42,
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
      "base": 138.76,
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
      "base": 108.97,
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
      "base": 209.98,
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
      "base": 966.42,
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
      "base": 1899,
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
      "base": 1919.75,
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
      "base": 1093,
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
      "base": 1707.73,
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
      "base": 1518.71,
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
      "base": 1635.05,
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
      "base": 1822.82,
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
      "base": 1700.85,
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
      "base": 1020.3,
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
      "base": 1888.15,
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
      "base": 1828.4,
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
      "base": 1098.76,
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
      "base": 2150.39,
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
      "base": 1557.31,
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
      "base": 1229.99,
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
      "base": 2200.07,
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
      "base": 1764.29,
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
      "base": 1098.26,
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
      "base": 398.36,
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
      "base": 650.37,
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
      "base": 429.7,
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
      "base": 305.6,
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
      "base": 365.77,
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
      "base": 270.88,
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
      "base": 285.48,
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
      "base": 320.77,
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
      "base": 365.56,
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
      "base": 335.4,
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
      "base": 310.06,
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
      "base": 315.31,
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
      "base": 260.78,
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
      "base": 315,
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
      "base": 420.2,
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
      "base": 31.01,
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
      "base": 35.31,
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
      "base": 40.8,
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
      "base": 1215.23,
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
      "base": 1299.28,
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
      "base": 1392.66,
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
      "base": 900.01,
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
      "base": 2343.28,
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
      "base": 1366.66,
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
      "base": 999.13,
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
      "base": 900.38,
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
      "base": 844.98,
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
      "base": 1888.98,
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
      "base": 1600,
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
      "base": 2187.99,
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
      "base": 2100.97,
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
      "base": 1596.4,
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
      "base": 11.32,
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
      "base": 2.09,
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
      "base": 2.75,
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
      "base": 2,
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
      "base": 2.65,
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
      "base": 193.18,
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
      "base": 200.55,
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
      "base": 764.27,
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
      "base": 3000.11,
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
      "base": 255.26,
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
      "base": 3520.83,
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
      "base": 1999.91,
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
      "base": 650.61,
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
      "base": 444.08,
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
      "base": 830.86,
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
      "base": 399.99,
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
      "base": 26.5,
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
      "base": 720.84,
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
      "base": 720,
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
      "base": 650.66,
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
      "base": 720.68,
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
      "base": 720,
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
      "base": 720.64,
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
      "base": 720.45,
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
      "base": 720,
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
      "base": 720.3,
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
      "base": 720.42,
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
      "base": 8.42,
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
      "base": 0.66,
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
      "base": 0.72,
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
      "base": 1,
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
      "base": 1.67,
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
      "base": 0.49,
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
      "base": 1.08,
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
      "base": 11.11,
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
      "fengwangjiang": 171.2,
      "shoupijiao": 65.99,
      "qicaixian": 127,
      "bairanxian": 3.25,
      "fengyu_yi": 1132.58,
      "m_m_5_30852": 16.3,
      "m_m_5_30853": 97,
      "m_m_5_30828": 4.17,
      "m_m_5_32000": 0.6,
      "guajian_bei": 52.73,
      "baihua_bu": 73.7,
      "guajian_yao": 95.48,
      "shuran_bu": 88.64,
      "m_m_5_32001": 0.66,
      "shuran_bag": 33.98,
      "jinfeng_bag": 7357.5,
      "wuseshi": 132,
      "m_m_5_30856": 14.45,
      "m_m_5_30855": 163.4,
      "geyin_zhang": 174.97,
      "m_m_5_89298": 38,
      "m_m_5_30679": 15.94,
      "m_m_5_32004": 3.61,
      "m_m_5_30847": 10.99,
      "m_m_5_30846": 1.71,
      "yinsi_duan": 122.01,
      "m_m_5_32003": 3.61,
      "m_m_5_30848": 19.44,
      "m_m_5_32002": 0.66,
      "m_m_5_30850": 145.12,
      "m_m_5_30845": 172.88,
      "m_m_5_89433": 6999.98,
      "m_m_5_89435": 5200,
      "m_m_5_31253": 210.99,
      "tongpao_fan": 3999.99,
      "m_m_5_30844": 0.45,
      "m_m_5_90210": 500.14,
      "m_m_5_35718": 16.25,
      "m_m_5_35719": 32.28,
      "m_m_5_30873": 39.42,
      "m_m_5_90205": 50,
      "m_m_8_614": 95.98,
      "shanshui_juan": 116.47,
      "m_m_5_3819": 100,
      "m_m_5_3779": 9.99,
      "m_m_8_36148": 1090.31,
      "m_m_5_89474": 1500,
      "m_m_5_3820": 1.27,
      "m_m_5_30827": 1.38,
      "m_m_5_89970": 178.4,
      "m_m_5_31978": 0.64,
      "m_m_5_31985": 0.66,
      "lucai": 18.24,
      "m_m_5_1831": 15,
      "m_m_5_31973": 0.65,
      "m_m_5_30849": 8.96,
      "m_m_5_71293": 50.02,
      "m_m_5_30826": 0.55,
      "m_m_5_30825": 0.14,
      "m_m_5_89171": 10.75,
      "m_m_5_31974": 0.64,
      "m_m_5_31968": 5.49,
      "m_m_5_71292": 88.19,
      "m_m_5_30824": 0.3,
      "m_m_5_71281": 22.4,
      "m_m_5_30823": 0.35,
      "m_m_5_31969": 0.65,
      "m_m_5_71277": 38.35,
      "m_m_5_89315": 1500.51,
      "m_m_5_89969": 133.05,
      "m_m_5_31976": 0.65,
      "m_m_5_89303": 4155.72,
      "m_m_5_89971": 197.98,
      "lushui": 14.99,
      "m_m_5_30875": 1.62,
      "m_m_5_30829": 3.75,
      "m_m_5_30843": 0.49,
      "m_m_5_30874": 29.65,
      "m_m_5_30842": 0.5,
      "m_m_5_31970": 0.66,
      "m_m_5_5269": 0.02,
      "m_m_5_31977": 0.69,
      "m_m_5_31013": 187.73,
      "gancao": 3,
      "m_m_5_31012": 328,
      "m_m_5_90034": 8888.88,
      "m_m_5_89172": 21.07,
      "m_m_5_89304": 4069.47,
      "m_m_5_26057": 1499,
      "m_m_5_89352": 633.28,
      "m_m_5_89350": 594.93,
      "m_m_5_71269": 125.47,
      "m_m_5_89346": 708.8,
      "m_m_5_89167": 10.63,
      "m_m_5_89348": 170,
      "m_m_5_71285": 94.67,
      "jieyuan_dan": 36.98,
      "m_m_5_30836": 0.88,
      "m_m_5_30832": 1.97,
      "m_m_5_30833": 1.59,
      "m_m_5_31997": 2.69,
      "m_m_5_89324": 150,
      "m_m_5_30831": 0.85,
      "m_m_5_89973": 172.11,
      "m_m_5_31996": 0.66,
      "m_m_5_71241": 111.35,
      "m_m_5_71240": 47.09,
      "m_m_5_31995": 0.69,
      "m_m_5_30838": 1,
      "shanhu": 3,
      "m_m_5_6646": 3.56,
      "m_m_5_89333": 300.89,
      "m_m_5_30835": 2.79,
      "m_m_5_89974": 59.3,
      "m_m_5_6648": 1.39,
      "m_m_5_90029": 389.74,
      "m_m_5_89168": 22.29,
      "yaoyin": 165.83,
      "m_m_5_31100": 49.57,
      "m_m_5_89322": 649,
      "shaoyao": 2.6,
      "m_m_5_90206": 33.16,
      "m_m_5_31102": 0.15,
      "m_m_5_30834": 1.92,
      "m_m_5_31998": 3.98,
      "m_m_5_90035": 6189.88,
      "m_m_5_89328": 768.26,
      "m_m_5_89332": 741.18,
      "m_m_5_89340": 88.24,
      "m_m_5_89325": 694.38,
      "m_m_5_71258": 67.08,
      "m_m_5_31999": 3.58,
      "m_m_5_89327": 79,
      "m_m_5_89966": 64.56,
      "m_m_5_10176": 3.8,
      "m_m_5_31991": 0.79,
      "m_m_5_89377": 350,
      "m_m_5_89968": 64.44,
      "m_m_5_31993": 0.89,
      "m_m_5_89376": 398.51,
      "m_m_5_89965": 99.7,
      "m_m_5_31992": 5.83,
      "m_m_5_89375": 388.29,
      "m_m_5_89963": 120.67,
      "m_m_5_71192": 25.92,
      "m_m_5_89169": 10.62,
      "m_m_5_71188": 341.75,
      "m_m_5_31994": 5.69,
      "m_m_5_89962": 50.03,
      "m_m_5_31139": 4299.11,
      "m_m_5_89964": 59.98,
      "m_m_5_10027": 76.4,
      "m_m_5_89961": 63.48,
      "tiekuang": 3.78,
      "m_m_5_30676": 1.63,
      "m_m_5_30678": 1.45,
      "m_m_5_30674": 2.77,
      "m_m_5_30675": 2.91,
      "m_m_5_89967": 155.21,
      "m_m_5_89367": 883.33,
      "m_m_5_6246": 0.12,
      "m_m_5_32787": 99.86,
      "m_m_8_25762": 2.48,
      "m_m_5_30841": 3.08,
      "m_m_5_10172": 29.1,
      "m_m_5_35708": 6.98,
      "m_m_8_632": 266.5,
      "m_m_8_634": 305.19,
      "m_m_8_636": 299,
      "m_m_5_2578": 10.36,
      "m_m_5_6072": 0.05,
      "muban": 24.89,
      "muliao": 2.78,
      "m_m_5_35707": 11.97,
      "m_m_5_35703": 3.57,
      "qiwuling": 31.74,
      "m_m_5_35716": 10.25,
      "m_m_5_35702": 0.63,
      "m_m_5_35715": 15.43,
      "zhuzi": 4.99,
      "m_m_5_35567": 1.7,
      "m_m_5_35704": 3.58,
      "m_m_5_35714": 24,
      "m_m_5_35701": 3.56,
      "m_m_5_35713": 21,
      "m_m_5_35705": 3.57,
      "m_m_10_948": 310.12,
      "m_m_5_89260": 35000.33,
      "m_m_10_93": 38.82,
      "m_m_5_35717": 1.96,
      "m_m_10_164": 110,
      "m_m_5_52337": 1110.99,
      "m_m_5_40232": 2600.15,
      "m_m_5_35772": 1200.92,
      "m_m_5_87917": 277.86,
      "zasui": 0.21,
      "g_5_30681": 0.94,
      "g_5_30680": 0.9,
      "m_x_5_89353": 469.98,
      "m_x_5_89359": 800.94,
      "m_x_5_89305": 4454,
      "m_x_5_89355": 2145.81,
      "m_x_5_89351": 529.07,
      "m_x_5_89357": 999.08,
      "m_x_5_89434": 3295.99,
      "m_x_5_89448": 35968,
      "m_x_5_89436": 4666.82,
      "m_x_5_89450": 21999.19,
      "m_x_5_89438": 4998.19,
      "m_x_5_89452": 21110.59,
      "m_x_5_89439": 3700,
      "m_x_5_89453": 26999.79,
      "m_x_5_89440": 3600,
      "m_x_5_89441": 3788.69,
      "m_x_5_89455": 24999.45,
      "m_x_5_89456": 24900,
      "m_x_5_89443": 4290,
      "m_x_5_89444": 3999.8,
      "m_x_5_89445": 4000,
      "m_x_5_89459": 36666,
      "m_x_5_89446": 7774.32,
      "m_x_5_89460": 60000,
      "m_x_5_89329": 930,
      "m_x_5_89335": 1661,
      "m_x_5_89330": 594.51,
      "m_x_5_89336": 1480.21,
      "m_x_5_89331": 689.95,
      "m_x_5_89337": 950,
      "m_x_5_89368": 827.19,
      "m_x_5_89372": 1399.83,
      "m_x_5_89369": 1187,
      "m_x_5_89373": 2999,
      "m_x_5_90436": 82.19,
      "m_x_5_89379": 3576.62,
      "m_x_5_89397": 23000,
      "m_x_5_89380": 4497,
      "m_x_5_90437": 48,
      "m_x_5_89381": 7641.35,
      "m_x_5_89399": 30000,
      "m_x_5_89384": 5074.56,
      "m_x_5_89385": 4150.81,
      "m_x_5_89403": 40000.89,
      "m_x_5_89386": 4498.88,
      "m_x_5_89404": 21000.1,
      "m_x_5_89388": 4397,
      "m_x_5_89406": 38888.78,
      "m_x_5_89389": 3991,
      "m_x_5_89407": 27880.05,
      "m_x_5_89390": 3900,
      "m_x_5_89391": 3998.18,
      "m_x_5_89409": 39999,
      "m_x_5_89392": 4199.89,
      "m_x_5_89393": 4995.45,
      "m_x_5_89395": 5888.89,
      "m_x_5_89413": 35000.33,
      "m_x_5_89396": 4541,
      "m_x_5_20971": 173,
      "m_x_10_1894": 45.82,
      "m_x_10_2229": 299.19,
      "m_x_5_89317": 999.21,
      "m_x_10_2241": 1087.9,
      "m_x_5_89320": 390.01,
      "m_x_5_89426": 1700,
      "m_x_5_89427": 1600.92,
      "m_x_5_89428": 1660,
      "m_x_5_89347": 1133.94,
      "m_x_5_89356": 1000,
      "m_x_5_89358": 1155.79,
      "m_x_5_89447": 24997,
      "m_x_5_89323": 700.69,
      "m_x_5_89326": 988,
      "m_x_5_89334": 1200.01,
      "m_x_5_89339": 2000,
      "m_x_5_89371": 2555,
      "m_x_5_5232": 8.57,
      "m_x_5_5230": 20.17,
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
      "m_x_5_2305": 3660.73,
      "m_x_5_31060": 130.15,
      "m_x_5_31062": 339.58,
      "m_x_5_71268": 133.99,
      "m_x_5_71270": 104.99,
      "m_x_5_2302": 699.99,
      "m_x_5_71271": 75.1,
      "m_x_5_71272": 115.11,
      "m_x_5_71273": 120.07,
      "m_x_5_71274": 95.22,
      "m_x_5_71275": 120.04,
      "m_x_5_71276": 41.52,
      "m_x_5_71278": 22.86,
      "m_x_5_71279": 35.77,
      "m_x_5_3505": 5000,
      "m_x_5_71280": 39.36,
      "m_x_5_3485": 297.97,
      "m_x_5_71282": 88.85,
      "m_x_5_3236": 855.12,
      "m_x_5_71283": 91.11,
      "m_x_5_2292": 4292,
      "m_x_5_71284": 120.14,
      "m_x_5_71286": 80.16,
      "m_x_5_71287": 80.35,
      "m_x_5_71288": 82.25,
      "m_x_5_71289": 899,
      "m_x_5_71290": 26.1,
      "m_x_5_71291": 40.89,
      "m_x_5_71294": 654.91,
      "m_x_5_71295": 480.26,
      "m_x_5_71296": 585.88,
      "m_x_5_71297": 255,
      "m_x_5_71298": 42.26,
      "m_x_5_71300": 6.48,
      "m_x_5_89316": 1749.99,
      "m_x_5_89318": 2290.17,
      "m_x_5_89361": 55.2,
      "m_x_5_89362": 45.17,
      "m_x_5_89363": 78.45,
      "m_x_5_89364": 78.1,
      "m_x_5_89365": 207.42,
      "m_x_8_616": 300.98,
      "m_x_8_617": 699.99,
      "m_x_8_615": 699.99,
      "m_x_5_3810": 80.71,
      "m_x_5_3811": 28.26,
      "m_x_8_25": 11,
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
      "m_x_5_5245": 59,
      "m_x_5_5246": 80,
      "m_x_5_6077": 0.21,
      "m_x_8_31": 3,
      "m_x_8_69": 170.65,
      "m_x_8_70": 200.67,
      "m_x_5_22145": 62.66,
      "m_x_5_22917": 108.47,
      "m_x_5_22981": 167.99,
      "m_x_5_31252": 457.08,
      "m_x_5_31254": 100.09,
      "m_x_5_71193": 1005.61,
      "m_x_5_71194": 1797.02,
      "m_x_5_71195": 1600.39,
      "m_x_5_71196": 1100.77,
      "m_x_5_71197": 1775.76,
      "m_x_5_71198": 1449.12,
      "m_x_5_71199": 1194.44,
      "m_x_5_71200": 1750.89,
      "m_x_5_71201": 1345.31,
      "m_x_5_71202": 1068.8,
      "m_x_5_71203": 1860.6,
      "m_x_5_71204": 1430.86,
      "m_x_5_71205": 1241,
      "m_x_5_71206": 1800.86,
      "m_x_5_71207": 1550.98,
      "m_x_5_71211": 1300.05,
      "m_x_5_71212": 2100.91,
      "m_x_5_71214": 1040.6,
      "m_x_5_71215": 2198.1,
      "m_x_5_71216": 586.78,
      "m_x_5_71218": 522.51,
      "m_x_5_71219": 420.83,
      "m_x_5_71220": 425.91,
      "m_x_5_71221": 315.7,
      "m_x_5_71222": 360.36,
      "m_x_5_71223": 290,
      "m_x_5_71224": 270.33,
      "m_x_5_71225": 320.11,
      "m_x_5_71226": 325.45,
      "m_x_5_71227": 410.95,
      "m_x_5_71228": 487.7,
      "m_x_5_71229": 310.08,
      "m_x_5_71230": 508.9,
      "m_x_5_71231": 579.82,
      "m_x_5_71234": 381.96,
      "m_x_5_71237": 325.04,
      "m_x_5_71239": 692.44,
      "m_x_5_89461": 1199.97,
      "m_x_5_89462": 1679.79,
      "m_x_5_89463": 1265,
      "m_x_5_89464": 1110.87,
      "m_x_5_89465": 2450.02,
      "m_x_5_89466": 948.48,
      "m_x_5_89467": 1608.2,
      "m_x_5_89468": 1690.18,
      "m_x_5_89469": 1166,
      "m_x_5_89470": 1560.2,
      "m_x_5_89471": 1666.21,
      "m_x_5_89472": 1888.88,
      "m_x_5_89473": 1498.98,
      "m_x_5_90289": 609,
      "m_x_5_31099": 49.82,
      "m_x_5_31103": 7.35,
      "m_x_5_31104": 39.5,
      "m_x_5_31105": 71.33,
      "m_x_5_31106": 10,
      "m_x_5_31107": 39.99,
      "m_x_5_31108": 152,
      "m_x_5_40538": 44.74,
      "m_x_5_71242": 80.1,
      "m_x_5_71243": 129.6,
      "m_x_5_71244": 100,
      "m_x_5_71245": 55.36,
      "m_x_5_71246": 129,
      "m_x_5_71247": 114.11,
      "m_x_5_71248": 104.98,
      "m_x_5_71249": 115.41,
      "m_x_5_71250": 911,
      "m_x_5_71251": 48.64,
      "m_x_5_71252": 22.14,
      "m_x_5_71253": 60.66,
      "m_x_5_71255": 42,
      "m_x_5_71256": 78.02,
      "m_x_5_71257": 57.61,
      "m_x_5_71259": 118.78,
      "m_x_5_71260": 116.21,
      "m_x_5_71261": 119.47,
      "m_x_5_71262": 94.86,
      "m_x_5_71263": 80.01,
      "m_x_5_71264": 59.07,
      "m_x_5_71265": 711,
      "m_x_5_89341": 100.24,
      "m_x_5_89342": 80.66,
      "m_x_5_89343": 140,
      "m_x_5_89344": 149.91,
      "m_x_5_89345": 100.9,
      "m_x_5_89724": 399.73,
      "m_x_5_2589": 15.98,
      "m_x_8_17540": 1109,
      "m_x_5_2631": 17.4,
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
      "m_x_5_6069": 0.08,
      "m_x_5_6070": 0.07,
      "m_x_5_6073": 1,
      "m_x_5_6247": 1.17,
      "m_x_5_6248": 0.9,
      "m_x_5_10028": 65.11,
      "m_x_5_31140": 50.98,
      "m_x_5_31141": 260.67,
      "m_x_5_31142": 444,
      "m_x_5_31143": 241.67,
      "m_x_5_40539": 42.43,
      "m_x_5_71129": 137.42,
      "m_x_5_71130": 138.76,
      "m_x_5_71131": 108.97,
      "m_x_5_71132": 209.98,
      "m_x_5_71133": 966.42,
      "m_x_5_71134": 1899,
      "m_x_5_71135": 1919.75,
      "m_x_5_71136": 1093,
      "m_x_5_71138": 1707.73,
      "m_x_5_71139": 1518.71,
      "m_x_5_71140": 2045.95,
      "m_x_5_71141": 1635.05,
      "m_x_5_71143": 1822.82,
      "m_x_5_71144": 1700.85,
      "m_x_5_71145": 1020.3,
      "m_x_5_71146": 1888.15,
      "m_x_5_71147": 1828.4,
      "m_x_5_71148": 1098.76,
      "m_x_5_71149": 2150.39,
      "m_x_5_71150": 1557.31,
      "m_x_5_71151": 1229.99,
      "m_x_5_71152": 2200.07,
      "m_x_5_71153": 1600.22,
      "m_x_5_71157": 1938.43,
      "m_x_5_71159": 1764.29,
      "m_x_5_71160": 1098.26,
      "m_x_5_71161": 398.36,
      "m_x_5_71162": 489.22,
      "m_x_5_71163": 650.37,
      "m_x_5_71164": 429.7,
      "m_x_5_71165": 356.11,
      "m_x_5_71166": 305.6,
      "m_x_5_71167": 365.77,
      "m_x_5_71168": 270.88,
      "m_x_5_71169": 285.48,
      "m_x_5_71170": 320.77,
      "m_x_5_71171": 365.56,
      "m_x_5_71172": 335.4,
      "m_x_5_71173": 542.24,
      "m_x_5_71174": 310.06,
      "m_x_5_71175": 549.91,
      "m_x_5_71176": 558.01,
      "m_x_5_71177": 207.03,
      "m_x_5_71181": 327.57,
      "m_x_5_71182": 315.31,
      "m_x_5_71184": 260.78,
      "m_x_5_71185": 315,
      "m_x_5_71186": 420.2,
      "m_x_5_71187": 323,
      "m_x_5_71189": 31.01,
      "m_x_5_71190": 35.31,
      "m_x_5_71191": 40.8,
      "m_x_5_54537": 99.88,
      "m_x_5_85652": 999,
      "m_x_5_89415": 1215.23,
      "m_x_5_89416": 1299.28,
      "m_x_5_89417": 1392.66,
      "m_x_5_89418": 900.01,
      "m_x_5_89419": 2343.28,
      "m_x_5_89420": 1366.66,
      "m_x_5_89421": 999.13,
      "m_x_5_89422": 900.38,
      "m_x_5_89423": 844.98,
      "m_x_5_89424": 1888.98,
      "m_x_5_89425": 1600,
      "m_x_5_89429": 2187.99,
      "m_x_5_89430": 2100.97,
      "m_x_5_89431": 1596.4,
      "m_x_5_90213": 11.32,
      "m_x_5_35004": 2.09,
      "m_x_5_35005": 2.75,
      "m_x_5_35006": 2,
      "m_x_5_35007": 2.65,
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
      "m_x_10_106": 193.18,
      "m_x_10_108": 200.55,
      "m_x_10_109": 90.36,
      "m_x_10_110": 100,
      "m_x_5_35771": 764.27,
      "m_x_5_35773": 446.09,
      "m_x_5_35774": 413.28,
      "m_x_5_35775": 304.49,
      "m_x_10_132": 3000.11,
      "m_x_10_133": 210.23,
      "m_x_10_134": 255.26,
      "m_x_10_135": 3520.83,
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
      "m_x_10_116": 1999.91,
      "m_x_10_120": 194.96,
      "m_x_10_121": 3590.55,
      "m_x_10_122": 287.88,
      "m_x_10_427": 3222.61,
      "m_x_10_433": 455.01,
      "m_x_10_434": 460.51,
      "m_x_10_436": 3977.05,
      "m_x_10_444": 3577.83,
      "m_x_10_469": 5320.15,
      "m_x_10_490": 3280.13,
      "m_x_5_38127": 650.61,
      "m_x_5_38373": 2100.52,
      "m_x_5_38374": 999.99,
      "m_x_5_38927": 4.21,
      "m_x_10_676": 869.9,
      "m_x_10_677": 1650.32,
      "m_x_10_678": 3222.6,
      "m_x_10_681": 444.08,
      "m_x_10_684": 1380.01,
      "m_x_10_686": 960.49,
      "m_x_10_957": 687,
      "m_x_10_1083": 650,
      "m_x_10_1085": 250.88,
      "m_x_10_943": 690.4,
      "m_x_10_945": 1098.93,
      "m_x_10_946": 460,
      "m_x_10_947": 830.86,
      "m_x_10_950": 399,
      "m_x_10_951": 399.99,
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
      "m_x_10_1775": 1826,
      "m_x_10_1776": 1820.83,
      "m_x_10_1777": 1857.25,
      "m_x_10_1286": 555.65,
      "m_x_10_1477": 520,
      "m_x_10_1454": 32.55,
      "m_x_10_1455": 28.08,
      "m_x_10_1456": 59.96,
      "m_x_10_1457": 55.88,
      "m_x_10_1458": 26.5,
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
      "m_x_5_87874": 720.84,
      "m_x_5_87873": 900.66,
      "m_x_5_87872": 720,
      "m_x_5_87871": 650.66,
      "m_x_5_87870": 900.48,
      "m_x_5_87869": 730.38,
      "m_x_5_87868": 800.16,
      "m_x_5_87867": 788.2,
      "m_x_5_87866": 800.16,
      "m_x_5_87865": 730.23,
      "m_x_5_87864": 800.3,
      "m_x_5_87863": 3200.95,
      "m_x_5_87861": 2235.95,
      "m_x_5_87860": 720.68,
      "m_x_5_87859": 800,
      "m_x_5_87858": 800.69,
      "m_x_5_87857": 800.94,
      "m_x_5_87856": 800,
      "m_x_5_87855": 800.39,
      "m_x_5_87854": 1500.99,
      "m_x_5_87853": 720,
      "m_x_5_87852": 2200,
      "m_x_5_87850": 800.61,
      "m_x_5_87849": 820.73,
      "m_x_5_87848": 800.65,
      "m_x_5_87847": 800.69,
      "m_x_5_87846": 720.64,
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
      "m_x_5_87831": 720.45,
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
      "m_x_5_87808": 720,
      "m_x_5_87807": 720.3,
      "m_x_5_87806": 720.42,
      "m_x_5_87805": 790.96,
      "m_x_5_87804": 1038.97,
      "m_x_5_31983": 0.63,
      "m_x_5_1830": 8.42,
      "m_x_5_31975": 0.64,
      "m_x_5_1832": 9995,
      "m_x_5_31979": 3.59,
      "m_x_5_31981": 10000,
      "m_x_5_31971": 0.66,
      "m_x_5_32008": 0.72,
      "m_x_5_32010": 1,
      "m_x_5_32011": 10000,
      "m_x_5_31980": 0.63,
      "m_x_5_31982": 0.65,
      "m_x_5_35786": 664,
      "m_x_5_39235": 65.31,
      "m_x_5_41556": 1.67,
      "m_x_5_44402": 0.49,
      "m_x_5_47758": 10.88,
      "m_x_5_50736": 270,
      "m_x_5_54059": 1,
      "m_x_5_81662": 1.08,
      "m_x_5_85795": 398,
      "m_x_5_40562": 10000,
      "m_x_5_6250": 0.66,
      "m_x_5_6251": 0.8,
      "m_x_5_35780": 11.11,
      "m_x_5_2871": 2,
      "m_x_5_3573": 0.15,
      "m_x_5_3843": 2.99,
      "m_x_5_3574": 0.7
    },
    "s_pozhenzi": {
      "dimai": 79888,
      "fengwangjiang": 154.35,
      "shoupijiao": 60,
      "qicaixian": 145,
      "bairanxian": 3.09,
      "fengyu_yi": 994.44,
      "m_m_5_30852": 15.59,
      "m_m_5_30853": 82.12,
      "m_m_5_30828": 5.35,
      "guajian_bei": 58.16,
      "baihua_bu": 67.99,
      "guajian_yao": 75,
      "shuran_bu": 80,
      "shuran_bag": 60.38,
      "jinfeng_bag": 7000,
      "wuseshi": 118.85,
      "m_m_5_30856": 11.01,
      "m_m_5_30855": 151.16,
      "geyin_zhang": 125.06,
      "m_m_5_89298": 31.7,
      "m_m_5_30679": 15.9,
      "m_m_5_30847": 10.02,
      "m_m_5_30846": 1.85,
      "yinsi_duan": 129.32,
      "m_m_5_30848": 20.49,
      "m_m_5_30850": 128.36,
      "m_m_5_30845": 156.7,
      "m_m_5_31397": 3.35,
      "m_m_5_89435": 9899.09,
      "m_m_5_31253": 20.2,
      "m_m_5_30844": 0.6,
      "m_m_5_30873": 32.19,
      "m_m_5_90205": 29.99,
      "shanshui_juan": 180,
      "m_m_5_3779": 5.09,
      "m_m_8_36148": 1043.67,
      "m_m_5_30827": 1.2,
      "m_m_5_89970": 179.55,
      "m_m_5_32014": 188.14,
      "lucai": 17.78,
      "m_m_5_1831": 12.36,
      "m_m_5_31973": 0.69,
      "m_m_5_30849": 6,
      "m_m_5_71293": 29.99,
      "m_m_5_30826": 0.57,
      "m_m_5_30825": 0.08,
      "m_m_5_89171": 8.13,
      "m_m_5_31968": 1.6,
      "m_m_5_71292": 40.66,
      "m_m_5_30824": 0.28,
      "m_m_5_71281": 34.52,
      "m_m_5_30823": 1.11,
      "m_m_5_71277": 43.66,
      "m_m_5_89315": 1438,
      "m_m_5_89969": 132.54,
      "m_m_5_89971": 195.12,
      "lushui": 21.86,
      "m_m_5_30875": 1.39,
      "m_m_5_30843": 0.55,
      "m_m_5_30874": 23.91,
      "m_m_5_30842": 0.52,
      "m_m_5_5270": 1.43,
      "m_m_5_5269": 0.03,
      "m_m_5_31977": 0.5,
      "m_m_5_31013": 164.2,
      "gancao": 3.28,
      "m_m_5_31012": 318.25,
      "m_m_5_89304": 4300.11,
      "m_m_5_26057": 2059.63,
      "m_m_5_89352": 547.79,
      "m_m_5_89350": 565,
      "m_m_5_71269": 90.63,
      "m_m_5_89346": 607.69,
      "m_m_5_89348": 150,
      "m_m_5_71285": 90.42,
      "jieyuan_dan": 190.89,
      "m_m_5_30836": 1.25,
      "m_m_5_30832": 3.33,
      "m_m_5_30833": 2.71,
      "m_m_5_89324": 35.06,
      "m_m_5_30831": 1.17,
      "m_m_5_89973": 122,
      "m_m_5_71241": 25.76,
      "m_m_5_71240": 80.18,
      "m_m_5_71266": 68,
      "m_m_5_30838": 4.93,
      "shanhu": 3.3,
      "m_m_5_30835": 3,
      "m_m_5_89974": 160,
      "m_m_5_71267": 48.68,
      "m_m_5_89168": 20,
      "yaoyin": 133.33,
      "m_m_5_31100": 87.96,
      "shaoyao": 1.72,
      "m_m_5_90206": 5,
      "m_m_5_31102": 0.06,
      "m_m_5_30834": 1.97,
      "m_m_5_89328": 875.39,
      "m_m_5_89340": 82.7,
      "m_m_5_89325": 762.44,
      "m_m_5_71258": 52.66,
      "m_m_5_89327": 86.99,
      "m_m_5_89966": 87.01,
      "m_m_5_31991": 0.92,
      "m_m_5_89968": 66.16,
      "m_m_5_89376": 256.43,
      "m_m_5_89965": 96.99,
      "m_m_5_89375": 138,
      "m_m_5_89963": 60,
      "m_m_5_71188": 699.99,
      "m_m_5_89962": 60.23,
      "m_m_5_31139": 4233.59,
      "m_m_5_89964": 63.33,
      "m_m_5_10027": 55.62,
      "m_m_5_89961": 70.86,
      "tiekuang": 3.07,
      "m_m_5_30676": 2.59,
      "m_m_5_30678": 2.1,
      "m_m_5_30674": 2.84,
      "m_m_5_30675": 3.5,
      "m_m_5_89967": 100.16,
      "m_m_5_6246": 0.09,
      "m_m_5_32787": 2.01,
      "m_m_8_25762": 0.99,
      "m_m_5_30841": 3,
      "m_m_5_90032": 4500,
      "m_m_8_636": 120.56,
      "m_m_5_90353": 2000,
      "m_m_5_6072": 0.01,
      "muban": 19.09,
      "muliao": 2.18,
      "m_m_5_35707": 19.76,
      "m_m_5_35703": 1.75,
      "qiwuling": 99.58,
      "m_m_5_35716": 15.98,
      "m_m_5_35715": 17.55,
      "zhuzi": 1.52,
      "m_m_5_35567": 1.5,
      "m_m_5_35714": 89.5,
      "m_m_5_35701": 1.44,
      "m_m_5_35713": 22.86,
      "m_m_5_35717": 1,
      "m_m_5_52337": 1498.99,
      "m_m_5_35772": 1099,
      "m_m_5_87917": 299.99,
      "m_m_5_87881": 8888.99,
      "zasui": 0.54,
      "g_5_30681": 0.82,
      "g_5_30680": 0.84,
      "m_x_5_89359": 1148.42,
      "m_x_5_89305": 4994.29,
      "m_x_5_89349": 609.44,
      "m_x_5_89355": 988,
      "m_x_5_89351": 545.62,
      "m_x_5_89434": 9987,
      "m_x_5_89436": 6400.98,
      "m_x_5_89450": 28880,
      "m_x_5_89438": 6555.49,
      "m_x_5_89452": 33946.53,
      "m_x_5_89439": 5335.63,
      "m_x_5_89453": 29500,
      "m_x_5_89440": 4889.16,
      "m_x_5_89441": 3999,
      "m_x_5_89455": 29470,
      "m_x_5_89443": 5898.08,
      "m_x_5_89444": 7999.99,
      "m_x_5_89445": 6901.86,
      "m_x_5_89335": 1980,
      "m_x_5_89331": 825.64,
      "m_x_5_89337": 1100.88,
      "m_x_5_89368": 785.99,
      "m_x_5_89372": 1200,
      "m_x_5_89369": 988,
      "m_x_5_90436": 63,
      "m_x_5_89379": 3554,
      "m_x_5_89380": 4700.98,
      "m_x_5_90437": 50.52,
      "m_x_5_89386": 4666.55,
      "m_x_5_89388": 5100.74,
      "m_x_5_89389": 5240.97,
      "m_x_5_89390": 4782.88,
      "m_x_5_89391": 5457,
      "m_x_5_89393": 5999.99,
      "m_x_5_89396": 6706,
      "m_x_5_20971": 10,
      "m_x_10_2229": 259.64,
      "m_x_5_89317": 450.85,
      "m_x_10_2241": 1999.49,
      "m_x_5_89320": 560,
      "m_x_5_89426": 2005.01,
      "m_x_5_89428": 2299.97,
      "m_x_5_89347": 918,
      "m_x_5_89356": 1255,
      "m_x_5_89358": 1690.8,
      "m_x_5_89326": 1399,
      "m_x_5_5232": 9.81,
      "m_x_5_5231": 0.88,
      "m_x_5_5230": 1.08,
      "m_x_5_5229": 1.91,
      "m_x_5_31050": 520,
      "m_x_5_2304": 18000,
      "m_x_5_31056": 10000,
      "m_x_5_31058": 10000,
      "m_x_5_31062": 480.39,
      "m_x_5_71268": 80.69,
      "m_x_5_71270": 100.41,
      "m_x_5_71271": 80.01,
      "m_x_5_71272": 80.17,
      "m_x_5_71273": 80.36,
      "m_x_5_71274": 100.92,
      "m_x_5_71276": 50,
      "m_x_5_71278": 28.14,
      "m_x_5_71279": 44.8,
      "m_x_5_71280": 28,
      "m_x_5_3485": 478,
      "m_x_5_71282": 28.18,
      "m_x_5_71283": 29.46,
      "m_x_5_2292": 3888.82,
      "m_x_5_71284": 80,
      "m_x_5_71286": 94.62,
      "m_x_5_71287": 80.14,
      "m_x_5_71288": 76.77,
      "m_x_5_71289": 29.28,
      "m_x_5_71290": 29.56,
      "m_x_5_71291": 39.17,
      "m_x_5_71294": 733.49,
      "m_x_5_71295": 448,
      "m_x_5_71296": 565.84,
      "m_x_5_71297": 190,
      "m_x_5_71298": 44.99,
      "m_x_5_71299": 1149.99,
      "m_x_5_71300": 38.88,
      "m_x_5_89318": 2333,
      "m_x_5_89361": 70.62,
      "m_x_5_89362": 116.86,
      "m_x_5_89363": 118.39,
      "m_x_5_89364": 222,
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
      "m_x_8_69": 180.23,
      "m_x_8_70": 120.95,
      "m_x_5_22145": 155.86,
      "m_x_5_22917": 155.55,
      "m_x_5_22981": 149.96,
      "m_x_5_31252": 211.11,
      "m_x_5_31254": 180,
      "m_x_5_71193": 2000.16,
      "m_x_5_71194": 1996.75,
      "m_x_5_71195": 2554.84,
      "m_x_5_71196": 1249.98,
      "m_x_5_71198": 1460.04,
      "m_x_5_71199": 1185.01,
      "m_x_5_71200": 1722.36,
      "m_x_5_71201": 1300.35,
      "m_x_5_71202": 988.01,
      "m_x_5_71203": 1776.98,
      "m_x_5_71205": 1674,
      "m_x_5_71206": 1691.61,
      "m_x_5_71214": 999.75,
      "m_x_5_71219": 699.34,
      "m_x_5_71221": 999.98,
      "m_x_5_71222": 677.87,
      "m_x_5_71223": 593.27,
      "m_x_5_71224": 494.6,
      "m_x_5_71225": 983.41,
      "m_x_5_71228": 599.3,
      "m_x_5_71229": 437.68,
      "m_x_5_71237": 999.98,
      "m_x_5_71238": 999.99,
      "m_x_5_71239": 582.25,
      "m_x_5_89461": 1250,
      "m_x_5_89462": 1500,
      "m_x_5_89463": 1099.85,
      "m_x_5_89464": 1689.99,
      "m_x_5_89465": 1687.08,
      "m_x_5_89466": 920.5,
      "m_x_5_89467": 999.97,
      "m_x_5_89468": 1999.39,
      "m_x_5_89469": 950,
      "m_x_5_89470": 919.25,
      "m_x_5_89471": 1999.98,
      "m_x_5_89472": 2999.99,
      "m_x_5_31099": 68.9,
      "m_x_5_31103": 12.5,
      "m_x_5_31104": 69.99,
      "m_x_5_31105": 129.96,
      "m_x_5_31106": 8.1,
      "m_x_5_31107": 175.4,
      "m_x_5_31108": 64.99,
      "m_x_5_40538": 99.29,
      "m_x_5_71242": 80.06,
      "m_x_5_71243": 96.34,
      "m_x_5_71244": 70.61,
      "m_x_5_71245": 41.42,
      "m_x_5_71246": 93.26,
      "m_x_5_71247": 83.93,
      "m_x_5_71248": 80,
      "m_x_5_71249": 80,
      "m_x_5_71250": 45.49,
      "m_x_5_71251": 48.1,
      "m_x_5_71253": 130.07,
      "m_x_5_71254": 63.98,
      "m_x_5_71255": 39,
      "m_x_5_71256": 68.07,
      "m_x_5_71259": 80.04,
      "m_x_5_71260": 98.64,
      "m_x_5_71261": 80.08,
      "m_x_5_71262": 81.33,
      "m_x_5_71263": 88.78,
      "m_x_5_71265": 57.31,
      "m_x_5_89341": 108,
      "m_x_5_89342": 58,
      "m_x_5_89343": 96.85,
      "m_x_5_89344": 257,
      "m_x_5_89345": 76,
      "m_x_5_2631": 99.33,
      "m_x_8_630": 1666.66,
      "m_x_5_2603": 11,
      "m_x_5_5044": 14.38,
      "m_x_5_6024": 10000,
      "m_x_5_6247": 0.65,
      "m_x_5_6248": 1,
      "m_x_5_10028": 70.57,
      "m_x_5_31141": 699.99,
      "m_x_5_31142": 674.77,
      "m_x_5_31143": 684.52,
      "m_x_5_71129": 105.05,
      "m_x_5_71130": 94.94,
      "m_x_5_71131": 60,
      "m_x_5_71132": 192,
      "m_x_5_71133": 1604.09,
      "m_x_5_71134": 1890,
      "m_x_5_71135": 1875.82,
      "m_x_5_71136": 1100.77,
      "m_x_5_71139": 1978.69,
      "m_x_5_71141": 1886.45,
      "m_x_5_71143": 1962.3,
      "m_x_5_71144": 1670.57,
      "m_x_5_71145": 1095.32,
      "m_x_5_71146": 1992.88,
      "m_x_5_71147": 2075.66,
      "m_x_5_71148": 1994.66,
      "m_x_5_71149": 2000.26,
      "m_x_5_71150": 1448.8,
      "m_x_5_71151": 1298.11,
      "m_x_5_71152": 2186.74,
      "m_x_5_71153": 1550.67,
      "m_x_5_71160": 1054.32,
      "m_x_5_71164": 998.19,
      "m_x_5_71166": 999.94,
      "m_x_5_71167": 400,
      "m_x_5_71173": 976.76,
      "m_x_5_71174": 600.48,
      "m_x_5_71176": 399.99,
      "m_x_5_71184": 605.18,
      "m_x_5_71185": 491.81,
      "m_x_5_71189": 68,
      "m_x_5_71190": 35.27,
      "m_x_5_71191": 49.01,
      "m_x_5_54537": 99.33,
      "m_x_5_89415": 2254.45,
      "m_x_5_89416": 1400,
      "m_x_5_89417": 1598.99,
      "m_x_5_89418": 758.44,
      "m_x_5_89419": 1599.96,
      "m_x_5_89420": 1690.38,
      "m_x_5_89421": 780.46,
      "m_x_5_89422": 1288.88,
      "m_x_5_89423": 1254.71,
      "m_x_5_89424": 1815.98,
      "m_x_5_89425": 1864.83,
      "m_x_5_89429": 2999.49,
      "m_x_5_90213": 18.06,
      "m_x_5_35004": 4.88,
      "m_x_5_35005": 1.6,
      "m_x_5_35006": 1.53,
      "m_x_5_35007": 1.4,
      "m_x_10_155": 1888.88,
      "m_x_5_35771": 627.24,
      "m_x_5_35773": 999.67,
      "m_x_5_35775": 348.42,
      "m_x_10_434": 999.99,
      "m_x_10_490": 1999.99,
      "m_x_5_38127": 1983.06,
      "m_x_5_38373": 2497.96,
      "m_x_5_38927": 7.9,
      "m_x_10_671": 887.49,
      "m_x_10_683": 1499.99,
      "m_x_10_1082": 788,
      "m_x_10_1084": 888,
      "m_x_10_1774": 748.88,
      "m_x_10_1777": 2093.68,
      "m_x_10_1477": 1299.99,
      "m_x_10_2036": 1996.12,
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
      "m_x_5_87875": 588.88,
      "m_x_5_87871": 666.88,
      "m_x_5_87870": 388.88,
      "m_x_5_90212": 300,
      "m_x_5_1830": 9.99,
      "m_x_5_32007": 10000,
      "m_x_5_32010": 3.38,
      "m_x_5_36491": 3.22,
      "m_x_5_41556": 1.04,
      "m_x_5_6250": 2,
      "m_x_5_35780": 17.02
    },
    "s_dielianhua": {
      "dimai": 69998.88,
      "fengwangjiang": 153.33,
      "shoupijiao": 67,
      "qicaixian": 118.88,
      "bairanxian": 3.28,
      "fengyu_yi": 2045.04,
      "m_m_5_30852": 18.37,
      "m_m_5_30853": 83.33,
      "m_m_5_30828": 4.09,
      "guajian_bei": 61.96,
      "baihua_bu": 85.09,
      "guajian_yao": 90.15,
      "shuran_bu": 139.99,
      "shuran_bag": 49.06,
      "m_m_5_10173": 31,
      "wuseshi": 129.97,
      "m_m_5_30856": 15.45,
      "m_m_5_30855": 149.5,
      "geyin_zhang": 94.02,
      "m_m_5_89298": 34.27,
      "m_m_5_30679": 15.06,
      "m_m_5_30847": 22.98,
      "m_m_5_30846": 9.99,
      "yinsi_duan": 119.2,
      "m_m_5_32003": 0.7,
      "m_m_5_30848": 17.77,
      "m_m_5_30850": 129.58,
      "m_m_5_30845": 158.47,
      "m_m_5_31397": 1.04,
      "m_m_5_89433": 9999,
      "m_m_5_89435": 8888,
      "m_m_5_31253": 343.94,
      "m_m_5_30844": 1.32,
      "m_m_5_90210": 100,
      "m_m_5_35719": 32.39,
      "m_m_5_30873": 39,
      "m_m_5_90205": 150.22,
      "shanshui_juan": 180.06,
      "m_m_8_36148": 1300,
      "m_m_5_89474": 1429,
      "m_m_5_30827": 1,
      "m_m_5_89970": 178.7,
      "m_m_5_31985": 0.67,
      "lucai": 17,
      "m_m_5_1831": 15.99,
      "m_m_5_31973": 0.67,
      "m_m_5_30849": 5.97,
      "m_m_5_71293": 50.1,
      "m_m_5_30826": 0.48,
      "m_m_5_30825": 0.01,
      "m_m_5_89171": 10.63,
      "m_m_5_31968": 0.66,
      "m_m_5_71292": 19.05,
      "m_m_5_30824": 0.3,
      "m_m_5_30823": 0.2,
      "m_m_5_71277": 23,
      "m_m_5_89315": 1200.99,
      "m_m_5_89969": 123.41,
      "m_m_5_89971": 228.31,
      "lushui": 22.52,
      "m_m_5_30875": 0.88,
      "m_m_5_30843": 1.37,
      "m_m_5_30874": 28.98,
      "m_m_5_30842": 0.97,
      "m_m_5_5269": 0.01,
      "m_m_5_31977": 0.66,
      "m_m_5_31013": 186.49,
      "gancao": 1.94,
      "m_m_5_31012": 440.52,
      "m_m_5_26057": 3000,
      "m_m_5_89352": 609.88,
      "m_m_5_71269": 81.74,
      "m_m_5_89346": 742.98,
      "m_m_5_89167": 10.63,
      "m_m_5_89348": 219.99,
      "m_m_5_71285": 114.98,
      "jieyuan_dan": 150.57,
      "m_m_5_30836": 0.8,
      "m_m_5_30832": 3,
      "m_m_5_30833": 2.49,
      "m_m_5_89324": 70.06,
      "m_m_5_30831": 2.98,
      "m_m_5_89973": 165.43,
      "m_m_5_31996": 0.67,
      "m_m_5_71241": 10,
      "m_m_5_71240": 27.76,
      "m_m_5_31995": 0.67,
      "m_m_5_71266": 34.53,
      "m_m_5_30838": 0.99,
      "shanhu": 5.2,
      "m_m_5_6646": 1.95,
      "m_m_5_30835": 2.99,
      "m_m_5_89974": 88.88,
      "m_m_5_6648": 3.99,
      "m_m_5_90029": 133,
      "yaoyin": 149.98,
      "m_m_5_31100": 46,
      "m_m_5_89322": 999,
      "shaoyao": 1.99,
      "m_m_5_30834": 2,
      "m_m_5_31998": 0.68,
      "m_m_5_89328": 872.48,
      "m_m_5_89340": 88.92,
      "m_m_5_89325": 870.12,
      "m_m_5_71258": 52.97,
      "m_m_5_89327": 106,
      "m_m_5_89966": 86.11,
      "m_m_5_31991": 0.66,
      "m_m_5_89968": 104.36,
      "m_m_5_31993": 0.7,
      "m_m_5_89965": 117,
      "m_m_5_31992": 0.67,
      "m_m_5_89963": 93.28,
      "m_m_5_71192": 25.99,
      "m_m_5_89169": 10.63,
      "m_m_5_89962": 139.98,
      "m_m_5_31139": 3950,
      "m_m_5_89964": 98.86,
      "m_m_5_10027": 53.79,
      "m_m_5_89961": 69,
      "tiekuang": 2.07,
      "m_m_5_30676": 1.75,
      "m_m_5_30678": 1.22,
      "m_m_5_30674": 7.95,
      "m_m_5_30675": 3.37,
      "m_m_5_89967": 175.38,
      "m_m_5_89367": 688.88,
      "m_m_5_6246": 0.17,
      "m_m_5_6249": 0.46,
      "m_m_5_32787": 10,
      "m_m_5_30841": 12.75,
      "m_m_5_35708": 6.49,
      "m_m_8_632": 799.99,
      "m_m_8_634": 566.32,
      "m_m_8_636": 280,
      "m_m_5_2578": 6.66,
      "muban": 99.57,
      "muliao": 2.48,
      "qiwuling": 25.79,
      "m_m_5_35715": 89.5,
      "zhuzi": 4.26,
      "m_m_5_35567": 1.99,
      "m_m_5_35714": 15.39,
      "m_m_5_35701": 0.67,
      "m_m_5_35713": 89.5,
      "m_m_10_1778": 910,
      "m_m_10_93": 58.21,
      "m_m_5_35717": 2.38,
      "m_m_10_164": 299.99,
      "m_m_5_52337": 1033.09,
      "m_m_5_35772": 845.61,
      "m_m_5_87917": 253.99,
      "zasui": 0.62,
      "g_5_30681": 1.13,
      "g_5_30680": 0.95,
      "m_x_5_89349": 764.21,
      "m_x_5_89355": 1388,
      "m_x_5_89436": 6350,
      "m_x_5_89438": 4891.33,
      "m_x_5_89439": 4983,
      "m_x_5_89454": 20001,
      "m_x_5_89441": 4942.84,
      "m_x_5_89443": 4520.24,
      "m_x_5_89329": 826.13,
      "m_x_5_89330": 694.36,
      "m_x_5_89331": 760.51,
      "m_x_5_89337": 1210,
      "m_x_5_89368": 769.49,
      "m_x_5_89372": 1657.32,
      "m_x_5_89369": 700,
      "m_x_5_90436": 64.48,
      "m_x_5_89379": 3911,
      "m_x_5_89380": 4542.74,
      "m_x_5_90437": 143.87,
      "m_x_5_89383": 4888,
      "m_x_5_89385": 4988.15,
      "m_x_5_89388": 4395.63,
      "m_x_5_89389": 3971.02,
      "m_x_5_89390": 5000,
      "m_x_5_89392": 3291.45,
      "m_x_5_89394": 5121.86,
      "m_x_5_89396": 4282.85,
      "m_x_5_20971": 299,
      "m_x_5_89317": 1884,
      "m_x_5_89319": 65.66,
      "m_x_5_89320": 1800,
      "m_x_5_89426": 1972.78,
      "m_x_5_89427": 1735,
      "m_x_5_89428": 1939.97,
      "m_x_5_89347": 948.99,
      "m_x_5_89358": 1150.21,
      "m_x_5_89326": 1420,
      "m_x_5_89371": 4664,
      "m_x_5_5232": 1.11,
      "m_x_5_5230": 2,
      "m_x_5_31054": 688.78,
      "m_x_5_31058": 10000,
      "m_x_5_71268": 93.21,
      "m_x_5_71270": 124.87,
      "m_x_5_71271": 219.92,
      "m_x_5_71272": 88.32,
      "m_x_5_71273": 80.67,
      "m_x_5_71274": 120.29,
      "m_x_5_71276": 30,
      "m_x_5_71278": 15.06,
      "m_x_5_71279": 232,
      "m_x_5_3236": 2080.89,
      "m_x_5_71284": 80.67,
      "m_x_5_71286": 80.06,
      "m_x_5_71287": 80.1,
      "m_x_5_71288": 107.08,
      "m_x_5_71289": 3.22,
      "m_x_5_71290": 10,
      "m_x_5_71291": 23.98,
      "m_x_5_71294": 498.88,
      "m_x_5_71295": 650.55,
      "m_x_5_71296": 500.05,
      "m_x_5_71297": 100.97,
      "m_x_5_71298": 33.39,
      "m_x_5_71299": 1999.98,
      "m_x_5_71300": 13.11,
      "m_x_5_89316": 2234.23,
      "m_x_5_89318": 2400,
      "m_x_5_89361": 50,
      "m_x_5_89362": 80.48,
      "m_x_5_89363": 109.25,
      "m_x_5_89364": 165.06,
      "m_x_5_3811": 54.84,
      "m_x_5_3797": 49.99,
      "m_x_8_24": 3.94,
      "m_x_8_627": 799.99,
      "m_x_5_2467": 10.98,
      "m_x_8_37": 14.28,
      "m_x_8_31": 18.81,
      "m_x_8_69": 239.88,
      "m_x_8_70": 249.35,
      "m_x_5_22145": 78.55,
      "m_x_5_22917": 89.32,
      "m_x_5_22981": 116.55,
      "m_x_5_31254": 498.88,
      "m_x_5_71193": 2988.31,
      "m_x_5_71194": 2244.8,
      "m_x_5_71195": 2888.61,
      "m_x_5_71196": 1550.42,
      "m_x_5_71198": 1500,
      "m_x_5_71199": 1300,
      "m_x_5_71200": 2107.7,
      "m_x_5_71201": 1300.6,
      "m_x_5_71202": 1186.66,
      "m_x_5_71204": 2231,
      "m_x_5_71205": 1389.05,
      "m_x_5_71206": 2000.24,
      "m_x_5_71214": 1596.97,
      "m_x_5_71219": 942.47,
      "m_x_5_71221": 384.57,
      "m_x_5_71222": 392.31,
      "m_x_5_71223": 396.74,
      "m_x_5_71224": 381,
      "m_x_5_71225": 451.58,
      "m_x_5_71226": 696.34,
      "m_x_5_71227": 927.24,
      "m_x_5_71229": 478.92,
      "m_x_5_71230": 1218.32,
      "m_x_5_71237": 498.74,
      "m_x_5_71239": 557.01,
      "m_x_5_89461": 1279.4,
      "m_x_5_89462": 1498,
      "m_x_5_89463": 1197.75,
      "m_x_5_89464": 1105.04,
      "m_x_5_89465": 1333.11,
      "m_x_5_89466": 969.01,
      "m_x_5_89467": 1133.04,
      "m_x_5_89468": 1073.59,
      "m_x_5_89469": 1327.81,
      "m_x_5_89470": 1191.92,
      "m_x_5_89471": 1841.01,
      "m_x_5_89472": 1503.31,
      "m_x_5_89473": 1999.41,
      "m_x_5_31099": 153.86,
      "m_x_5_31103": 12.06,
      "m_x_5_31104": 16.92,
      "m_x_5_31105": 125.98,
      "m_x_5_31106": 45.97,
      "m_x_5_31107": 148.85,
      "m_x_5_31108": 154.94,
      "m_x_5_40538": 180,
      "m_x_5_71242": 145,
      "m_x_5_71243": 80.47,
      "m_x_5_71244": 121.01,
      "m_x_5_71245": 22,
      "m_x_5_71246": 98.57,
      "m_x_5_71247": 125.03,
      "m_x_5_71248": 101.09,
      "m_x_5_71250": 26.01,
      "m_x_5_71251": 75.88,
      "m_x_5_71252": 15.16,
      "m_x_5_71254": 31.05,
      "m_x_5_71255": 22.75,
      "m_x_5_71256": 55,
      "m_x_5_71259": 182.11,
      "m_x_5_71260": 184.89,
      "m_x_5_71261": 208.23,
      "m_x_5_71262": 115.47,
      "m_x_5_71264": 33.13,
      "m_x_5_71265": 23.86,
      "m_x_5_89341": 99,
      "m_x_5_89342": 197,
      "m_x_5_89343": 162.51,
      "m_x_5_89344": 135.51,
      "m_x_5_89345": 79.64,
      "m_x_8_630": 199,
      "m_x_8_631": 799.99,
      "m_x_8_633": 250,
      "m_x_5_6073": 1,
      "m_x_5_6247": 1.21,
      "m_x_5_6248": 1.03,
      "m_x_5_10028": 73.98,
      "m_x_5_31140": 271.86,
      "m_x_5_71129": 103.1,
      "m_x_5_71130": 103.9,
      "m_x_5_71131": 110.31,
      "m_x_5_71132": 155.31,
      "m_x_5_71133": 1111.64,
      "m_x_5_71134": 2213.44,
      "m_x_5_71135": 2224.04,
      "m_x_5_71140": 1500,
      "m_x_5_71141": 1846,
      "m_x_5_71143": 1934.57,
      "m_x_5_71144": 2113.15,
      "m_x_5_71145": 1279.9,
      "m_x_5_71146": 1787.1,
      "m_x_5_71147": 2216.01,
      "m_x_5_71148": 1669.28,
      "m_x_5_71149": 2275.88,
      "m_x_5_71150": 1542.78,
      "m_x_5_71151": 1429.12,
      "m_x_5_71152": 2201.72,
      "m_x_5_71153": 2127.88,
      "m_x_5_71159": 2217.79,
      "m_x_5_71160": 1978.44,
      "m_x_5_71164": 300,
      "m_x_5_71166": 411.68,
      "m_x_5_71167": 442.75,
      "m_x_5_71168": 437.23,
      "m_x_5_71169": 441,
      "m_x_5_71170": 413.32,
      "m_x_5_71171": 800.6,
      "m_x_5_71172": 510.07,
      "m_x_5_71173": 473.82,
      "m_x_5_71174": 730.01,
      "m_x_5_71182": 370.53,
      "m_x_5_71184": 323.11,
      "m_x_5_71185": 388.22,
      "m_x_5_71186": 1211.49,
      "m_x_5_71189": 35.9,
      "m_x_5_71190": 60.76,
      "m_x_5_54537": 200,
      "m_x_5_89415": 1069.1,
      "m_x_5_89416": 1098.4,
      "m_x_5_89417": 1956.96,
      "m_x_5_89418": 1060.51,
      "m_x_5_89419": 1631.88,
      "m_x_5_89420": 1995.14,
      "m_x_5_89421": 839.02,
      "m_x_5_89422": 800.21,
      "m_x_5_89423": 1036.53,
      "m_x_5_89424": 1156.52,
      "m_x_5_89425": 1321.44,
      "m_x_5_89431": 1999,
      "m_x_5_90213": 10.08,
      "m_x_5_35005": 3.58,
      "m_x_5_35006": 2.27,
      "m_x_10_159": 489.66,
      "m_x_10_97": 299.99,
      "m_x_10_98": 299.99,
      "m_x_10_100": 299.99,
      "m_x_10_104": 299.99,
      "m_x_10_105": 299.99,
      "m_x_5_35771": 576.67,
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
      "m_x_5_1832": 10000,
      "m_x_5_35786": 4.52,
      "m_x_5_36491": 8,
      "m_x_5_81662": 1.18,
      "m_x_5_6251": 1.19,
      "m_x_5_35780": 6.49
    },
    "s_jiandan": {
      "fengwangjiang": 153.59,
      "shoupijiao": 90.94,
      "qicaixian": 169.54,
      "bairanxian": 3.39,
      "m_m_5_30852": 15.28,
      "m_m_5_30853": 82,
      "m_m_5_30828": 4.2,
      "m_m_5_89165": 10.64,
      "guajian_bei": 66.34,
      "baihua_bu": 109.91,
      "guajian_yao": 89.98,
      "shuran_bu": 80.12,
      "shuran_bag": 42.14,
      "wuseshi": 115.21,
      "m_m_5_30856": 12,
      "m_m_5_30855": 150,
      "geyin_zhang": 268.2,
      "m_m_5_89298": 32.67,
      "m_m_5_30679": 15.19,
      "m_m_5_32004": 0.68,
      "m_m_5_30847": 9.21,
      "m_m_5_30846": 2.1,
      "yinsi_duan": 99.32,
      "m_m_5_30848": 20,
      "m_m_5_32002": 0.55,
      "m_m_5_30850": 123,
      "m_m_5_30845": 163.82,
      "m_m_5_31397": 0.8,
      "m_m_5_30844": 0.85,
      "m_m_5_90210": 200,
      "m_m_5_35719": 32.4,
      "m_m_5_30873": 42.66,
      "m_m_5_90205": 124.19,
      "m_m_5_3779": 4,
      "m_m_8_36148": 1110.09,
      "m_m_5_3820": 10,
      "m_m_5_30827": 1.23,
      "m_m_5_89970": 184.22,
      "m_m_5_32014": 128.95,
      "m_m_5_31978": 0.66,
      "m_m_5_31985": 0.68,
      "lucai": 19.56,
      "m_m_5_1831": 12.61,
      "m_m_5_30849": 6,
      "m_m_5_71293": 31.33,
      "m_m_5_30826": 0.68,
      "m_m_5_30825": 0.01,
      "m_m_5_89171": 10.63,
      "m_m_5_31974": 0.4,
      "m_m_5_31968": 0.68,
      "m_m_5_71292": 20.84,
      "m_m_5_30824": 0.43,
      "m_m_5_71281": 15.64,
      "m_m_5_30823": 0.31,
      "m_m_5_71277": 50,
      "m_m_5_89315": 1090.97,
      "m_m_5_89969": 140.94,
      "m_m_5_31976": 2.7,
      "m_m_5_89971": 170.24,
      "lushui": 15.99,
      "m_m_5_30875": 1.88,
      "m_m_5_30843": 0.97,
      "m_m_5_30874": 30.53,
      "m_m_5_30842": 1.24,
      "m_m_5_5270": 0.99,
      "m_m_5_31977": 0.68,
      "m_m_5_31013": 177.04,
      "gancao": 3.15,
      "m_m_5_31012": 314.97,
      "m_m_5_89304": 4541.2,
      "m_m_5_26057": 6666.66,
      "m_m_5_26231": 2.47,
      "m_m_5_89352": 750.77,
      "m_m_5_89350": 927.6,
      "m_m_5_71269": 101.6,
      "m_m_5_89346": 798.7,
      "m_m_5_89167": 10.64,
      "m_m_5_89348": 300.35,
      "m_m_5_71285": 80,
      "jieyuan_dan": 153.01,
      "m_m_5_30836": 0.9,
      "m_m_5_30832": 1.75,
      "m_m_5_30833": 2.35,
      "m_m_5_89324": 100,
      "m_m_5_30831": 0.48,
      "m_m_5_89973": 202.61,
      "m_m_5_31996": 0.66,
      "m_m_5_71241": 25,
      "m_m_5_71240": 88.79,
      "m_m_5_31995": 0.64,
      "m_m_5_71266": 98.32,
      "m_m_5_30838": 0.76,
      "shanhu": 2.35,
      "m_m_5_30835": 2.1,
      "m_m_5_89974": 54.83,
      "m_m_5_71267": 48.88,
      "m_m_5_89168": 21.89,
      "yaoyin": 160.4,
      "m_m_5_31100": 49.29,
      "shaoyao": 2,
      "m_m_5_90206": 100,
      "m_m_5_30834": 1.51,
      "m_m_5_31998": 0.66,
      "m_m_5_89328": 640.1,
      "m_m_5_89332": 943.15,
      "m_m_5_89340": 90.94,
      "m_m_5_89325": 789.86,
      "m_m_5_71258": 44.12,
      "m_m_5_89327": 69.47,
      "m_m_5_89966": 99.13,
      "m_m_5_10176": 3.39,
      "m_m_5_89968": 74.17,
      "m_m_5_89376": 521,
      "m_m_5_89965": 139,
      "m_m_5_31992": 0.65,
      "m_m_5_89963": 50.53,
      "m_m_5_71192": 99.07,
      "m_m_5_89169": 10.63,
      "m_m_5_89962": 57.88,
      "m_m_5_31139": 4000,
      "m_m_5_89964": 113.4,
      "m_m_5_10027": 48.99,
      "m_m_5_89961": 48.67,
      "tiekuang": 2.08,
      "m_m_5_30676": 2.8,
      "m_m_5_30678": 1.17,
      "m_m_5_30674": 3.32,
      "m_m_5_30675": 3.17,
      "m_m_5_89967": 75.66,
      "m_m_5_6246": 0.19,
      "m_m_5_6249": 0.4,
      "m_m_5_30841": 3.14,
      "m_m_8_632": 1000,
      "m_m_8_636": 180.14,
      "m_m_5_2578": 5.01,
      "m_m_5_6068": 0.4,
      "m_m_5_6066": 0.01,
      "muban": 24.67,
      "muliao": 1.82,
      "m_m_5_35707": 6.47,
      "qiwuling": 23.88,
      "m_m_5_35716": 9.7,
      "m_m_5_35715": 85.49,
      "zhuzi": 1.67,
      "m_m_5_35567": 1.92,
      "m_m_5_35714": 24.95,
      "m_m_5_35713": 16.97,
      "m_m_10_93": 10.02,
      "m_m_5_35717": 2.53,
      "m_m_5_52337": 1399.96,
      "m_m_5_40232": 3465.65,
      "m_m_5_35772": 1200.32,
      "m_m_5_87917": 269.88,
      "zasui": 0.71,
      "g_5_30681": 3.86,
      "g_5_30680": 1.97,
      "m_x_5_89305": 5871.4,
      "m_x_5_89349": 880.52,
      "m_x_5_89351": 954.25,
      "m_x_5_89436": 5440,
      "m_x_5_89438": 5999.06,
      "m_x_5_89439": 4999.98,
      "m_x_5_89440": 7909.65,
      "m_x_5_89441": 7998.63,
      "m_x_5_89459": 27531.33,
      "m_x_5_89329": 872.86,
      "m_x_5_89335": 3422.9,
      "m_x_5_89331": 740.66,
      "m_x_5_89337": 1529,
      "m_x_5_89368": 888.88,
      "m_x_5_89372": 1700,
      "m_x_5_90436": 80.37,
      "m_x_5_89379": 4488.25,
      "m_x_5_90437": 48.19,
      "m_x_5_89384": 6243.46,
      "m_x_5_89385": 6888.44,
      "m_x_5_89386": 3999,
      "m_x_5_89388": 5389,
      "m_x_5_89390": 4999.86,
      "m_x_5_89391": 5887.99,
      "m_x_5_89393": 4924.97,
      "m_x_5_20971": 199.26,
      "m_x_5_38122": 944.02,
      "m_x_5_89317": 740,
      "m_x_5_89426": 2888,
      "m_x_5_89427": 2336,
      "m_x_5_89428": 2333,
      "m_x_5_89347": 1248,
      "m_x_5_89356": 1554.99,
      "m_x_5_89358": 1115.66,
      "m_x_5_89326": 1400.37,
      "m_x_5_89334": 4947.48,
      "m_x_5_26232": 2.3,
      "m_x_5_5231": 0.8,
      "m_x_5_5230": 0.8,
      "m_x_5_31058": 10000,
      "m_x_5_31062": 230.62,
      "m_x_5_71268": 109.47,
      "m_x_5_71270": 120,
      "m_x_5_2302": 2100.95,
      "m_x_5_71271": 87.98,
      "m_x_5_71272": 98.98,
      "m_x_5_71273": 175.05,
      "m_x_5_71274": 80.03,
      "m_x_5_71276": 34.48,
      "m_x_5_71278": 5.04,
      "m_x_5_71279": 22.02,
      "m_x_5_3485": 565.47,
      "m_x_5_71282": 9.73,
      "m_x_5_3236": 1900.8,
      "m_x_5_71283": 1.07,
      "m_x_5_71284": 109.76,
      "m_x_5_71286": 81.16,
      "m_x_5_71287": 109.32,
      "m_x_5_71288": 79.97,
      "m_x_5_71289": 2.7,
      "m_x_5_71290": 5.85,
      "m_x_5_71294": 480.96,
      "m_x_5_71295": 666.64,
      "m_x_5_71296": 666.99,
      "m_x_5_71297": 253.01,
      "m_x_5_2303": 11000.76,
      "m_x_5_71300": 2.97,
      "m_x_5_89316": 1500,
      "m_x_5_89318": 2400,
      "m_x_5_89361": 35.12,
      "m_x_5_89362": 117.6,
      "m_x_5_89363": 84.62,
      "m_x_5_89364": 200.26,
      "m_x_8_618": 796,
      "m_x_8_616": 430,
      "m_x_8_615": 700,
      "m_x_5_3810": 77.52,
      "m_x_5_3797": 37.73,
      "m_x_5_2433": 9.99,
      "m_x_8_621": 400,
      "m_x_8_624": 426,
      "m_x_8_22": 23.16,
      "m_x_8_23": 36.5,
      "m_x_5_2467": 17.3,
      "m_x_5_5245": 110,
      "m_x_8_31": 5,
      "m_x_8_69": 120.2,
      "m_x_8_70": 228.8,
      "m_x_5_22145": 79,
      "m_x_5_22917": 90.33,
      "m_x_5_22981": 123,
      "m_x_5_71194": 2796.11,
      "m_x_5_71195": 3499.26,
      "m_x_5_71196": 1500.79,
      "m_x_5_71197": 2573.76,
      "m_x_5_71198": 1888.23,
      "m_x_5_71199": 1058.62,
      "m_x_5_71200": 1786.75,
      "m_x_5_71201": 1677.4,
      "m_x_5_71202": 1058.28,
      "m_x_5_71203": 2333.2,
      "m_x_5_71204": 1599.54,
      "m_x_5_71205": 1800.27,
      "m_x_5_71206": 1879.03,
      "m_x_5_71207": 1999.47,
      "m_x_5_71214": 1022.71,
      "m_x_5_71215": 2333.32,
      "m_x_5_71216": 150.14,
      "m_x_5_71217": 1000.54,
      "m_x_5_71219": 837.68,
      "m_x_5_71221": 950.31,
      "m_x_5_71223": 499.94,
      "m_x_5_71224": 798.05,
      "m_x_5_71225": 763.31,
      "m_x_5_71226": 686.87,
      "m_x_5_71229": 287.36,
      "m_x_5_71230": 1110.64,
      "m_x_5_71231": 880.38,
      "m_x_5_71237": 850.42,
      "m_x_5_71239": 822.41,
      "m_x_5_89461": 1234,
      "m_x_5_89462": 1600.37,
      "m_x_5_89463": 1611.05,
      "m_x_5_89464": 1234.53,
      "m_x_5_89465": 1766.62,
      "m_x_5_89466": 850.87,
      "m_x_5_89467": 900.3,
      "m_x_5_89468": 1199.99,
      "m_x_5_89469": 999.99,
      "m_x_5_89470": 1300.08,
      "m_x_5_89471": 2890.99,
      "m_x_5_89472": 1999.32,
      "m_x_5_31099": 47.92,
      "m_x_5_31103": 13.89,
      "m_x_5_31104": 50,
      "m_x_5_31105": 144.3,
      "m_x_5_31107": 169.4,
      "m_x_5_31108": 135.18,
      "m_x_5_40538": 202.94,
      "m_x_5_71242": 80.02,
      "m_x_5_71243": 80.05,
      "m_x_5_71244": 100.61,
      "m_x_5_71245": 30.5,
      "m_x_5_71246": 109.09,
      "m_x_5_71247": 162.11,
      "m_x_5_71248": 114.58,
      "m_x_5_71251": 38.08,
      "m_x_5_71253": 66.61,
      "m_x_5_71254": 33.4,
      "m_x_5_71255": 25.14,
      "m_x_5_71259": 81.28,
      "m_x_5_71260": 80,
      "m_x_5_71261": 107.83,
      "m_x_5_71262": 80.15,
      "m_x_5_71264": 25.82,
      "m_x_5_89341": 199.32,
      "m_x_5_89342": 82.11,
      "m_x_5_89343": 110.38,
      "m_x_5_89345": 128.27,
      "m_x_5_89724": 200,
      "m_x_5_2589": 10.88,
      "m_x_5_2631": 20,
      "m_x_8_629": 299.99,
      "m_x_8_630": 240,
      "m_x_5_2603": 35.83,
      "m_x_8_17546": 3000.01,
      "m_x_5_6024": 3.66,
      "m_x_5_6069": 0.33,
      "m_x_5_6073": 0.33,
      "m_x_5_6247": 1.21,
      "m_x_5_6248": 0.88,
      "m_x_5_10028": 70.34,
      "m_x_5_71129": 125.39,
      "m_x_5_71130": 113.39,
      "m_x_5_71131": 49.72,
      "m_x_5_71133": 900.73,
      "m_x_5_71134": 1700,
      "m_x_5_71135": 2603.84,
      "m_x_5_71136": 900,
      "m_x_5_71138": 2121.49,
      "m_x_5_71139": 1409.82,
      "m_x_5_71140": 2559.59,
      "m_x_5_71141": 1666.75,
      "m_x_5_71144": 1900.27,
      "m_x_5_71145": 1111.72,
      "m_x_5_71146": 2000.94,
      "m_x_5_71147": 1888.48,
      "m_x_5_71148": 1336.42,
      "m_x_5_71149": 1760,
      "m_x_5_71150": 1298.87,
      "m_x_5_71151": 1300.01,
      "m_x_5_71152": 2687.97,
      "m_x_5_71164": 720.21,
      "m_x_5_71166": 688.3,
      "m_x_5_71167": 350.79,
      "m_x_5_71168": 280.78,
      "m_x_5_71169": 364,
      "m_x_5_71170": 288.96,
      "m_x_5_71171": 286.96,
      "m_x_5_71172": 299.91,
      "m_x_5_71173": 299.74,
      "m_x_5_71174": 799.6,
      "m_x_5_71175": 599.8,
      "m_x_5_71176": 849.92,
      "m_x_5_71184": 230.31,
      "m_x_5_71185": 898.09,
      "m_x_5_71187": 416.3,
      "m_x_5_71189": 10.09,
      "m_x_5_71190": 47,
      "m_x_5_54537": 430,
      "m_x_5_89415": 1250.98,
      "m_x_5_89416": 1130.05,
      "m_x_5_89417": 1110.67,
      "m_x_5_89418": 1190.5,
      "m_x_5_89419": 2221.35,
      "m_x_5_89420": 2173.54,
      "m_x_5_89421": 998.09,
      "m_x_5_89422": 1197,
      "m_x_5_89423": 1200.37,
      "m_x_5_89425": 1777,
      "m_x_5_89429": 2500,
      "m_x_5_90213": 31.81,
      "m_x_5_35005": 1.5,
      "m_x_5_35006": 2.04,
      "m_x_5_35007": 1.95,
      "m_x_10_153": 900,
      "m_x_10_156": 400,
      "m_x_10_165": 900,
      "m_x_5_35771": 649.93,
      "m_x_5_35773": 56.6,
      "m_x_10_121": 800,
      "m_x_5_38127": 818.88,
      "m_x_5_38927": 5.77,
      "m_x_10_1083": 597.6,
      "m_x_10_1085": 450,
      "m_x_10_687": 1320,
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
      "m_x_5_87874": 588.88,
      "m_x_5_87862": 688.88,
      "m_x_5_87857": 188.88,
      "m_x_5_90212": 216.67,
      "m_x_5_1830": 23.05,
      "m_x_5_1832": 10000,
      "m_x_5_31981": 10000,
      "m_x_5_32012": 10000,
      "m_x_5_36491": 5.05,
      "m_x_5_54059": 0.97,
      "m_x_5_6250": 0.74,
      "m_x_5_6251": 0.92,
      "m_x_5_35780": 6.48,
      "m_x_5_2871": 4.88,
      "m_x_5_3574": 2.53
    },
    "s_youyuelun": {
      "dimai": 79900.32,
      "fengwangjiang": 154.06,
      "shoupijiao": 60.58,
      "qicaixian": 111,
      "fengyu_yi": 999.82,
      "m_m_5_30852": 17.34,
      "m_m_5_30853": 89.43,
      "m_m_5_30828": 6.18,
      "m_m_5_89165": 10.64,
      "guajian_bei": 63.47,
      "baihua_bu": 60,
      "guajian_yao": 79.57,
      "shuran_bu": 80,
      "shuran_bag": 39.9,
      "wuseshi": 133.94,
      "m_m_5_30856": 15,
      "m_m_5_30855": 151.87,
      "geyin_zhang": 160,
      "m_m_5_89298": 33.22,
      "m_m_5_30679": 15.03,
      "m_m_5_30847": 12,
      "m_m_5_30846": 1.9,
      "yinsi_duan": 117.5,
      "m_m_5_30848": 23.5,
      "m_m_5_30850": 128.82,
      "m_m_5_30845": 157.81,
      "m_m_5_31397": 1.33,
      "m_m_5_89435": 4835.32,
      "m_m_5_31253": 200,
      "m_m_5_30844": 0.55,
      "m_m_5_90210": 487,
      "m_m_5_30873": 35.77,
      "m_m_8_614": 160.81,
      "shanshui_juan": 180.55,
      "m_m_5_3779": 9.99,
      "m_m_5_30827": 1.44,
      "m_m_5_89970": 177.77,
      "m_m_5_31978": 0.59,
      "m_m_5_31985": 0.69,
      "lucai": 16.62,
      "m_m_5_31973": 0.67,
      "m_m_5_30849": 6,
      "m_m_5_71293": 63.7,
      "m_m_5_30826": 0.3,
      "m_m_5_30825": 0.01,
      "m_m_5_89171": 10.8,
      "m_m_5_71292": 40,
      "m_m_5_30824": 0.48,
      "m_m_5_71281": 22.58,
      "m_m_5_30823": 0.55,
      "m_m_5_31969": 0.66,
      "m_m_5_71277": 29.71,
      "m_m_5_89315": 1362.82,
      "m_m_5_89969": 116.25,
      "m_m_5_31976": 0.66,
      "m_m_5_89303": 4349.54,
      "m_m_5_89971": 216.87,
      "lushui": 13.01,
      "m_m_5_30875": 2.57,
      "m_m_5_30829": 0.95,
      "m_m_5_30843": 1,
      "m_m_5_30874": 35.58,
      "m_m_5_30842": 0.6,
      "m_m_5_5270": 1.41,
      "m_m_5_31970": 0.67,
      "m_m_5_5269": 0.09,
      "m_m_5_31977": 0.67,
      "m_m_5_31013": 157.99,
      "gancao": 4.88,
      "m_m_5_31012": 301.89,
      "m_m_5_89172": 22.39,
      "m_m_5_89304": 5499,
      "m_m_5_26231": 0.78,
      "m_m_5_89352": 668.73,
      "m_m_5_89350": 579.09,
      "m_m_5_71269": 86.36,
      "m_m_5_89346": 680.66,
      "m_m_5_89167": 10.63,
      "m_m_5_89348": 200.73,
      "m_m_5_71285": 164.24,
      "jieyuan_dan": 153.01,
      "m_m_5_30836": 0.98,
      "m_m_5_30832": 2.35,
      "m_m_5_30833": 1.96,
      "m_m_5_89324": 56.49,
      "m_m_5_30831": 1.94,
      "m_m_5_89973": 158.89,
      "m_m_5_71241": 88.64,
      "m_m_5_71240": 79.61,
      "m_m_5_30838": 0.94,
      "shanhu": 2.99,
      "m_m_5_6646": 1.33,
      "m_m_5_30835": 2.02,
      "m_m_5_89974": 100.41,
      "m_m_5_6648": 3.88,
      "m_m_5_71267": 76.54,
      "m_m_5_90029": 780,
      "m_m_5_89168": 21.79,
      "yaoyin": 151.5,
      "m_m_5_31100": 15.16,
      "m_m_5_89322": 1000,
      "shaoyao": 2.29,
      "m_m_5_30834": 4.32,
      "m_m_5_89328": 781.26,
      "m_m_5_89340": 95,
      "m_m_5_89325": 817.39,
      "m_m_5_71258": 69.74,
      "m_m_5_31999": 0.66,
      "m_m_5_89327": 81.59,
      "m_m_5_89966": 65.76,
      "m_m_5_10176": 3.39,
      "m_m_5_31991": 0.9,
      "m_m_5_89968": 70,
      "m_m_5_89376": 299.81,
      "m_m_5_89965": 131.9,
      "m_m_5_31992": 1.05,
      "m_m_5_89963": 72.3,
      "m_m_5_89370": 700,
      "m_m_5_89169": 10.66,
      "m_m_5_71188": 612.69,
      "m_m_5_31994": 0.7,
      "m_m_5_89962": 100.51,
      "m_m_5_31139": 3928.98,
      "m_m_5_89964": 49.99,
      "m_m_5_10027": 51,
      "m_m_5_89961": 168,
      "tiekuang": 2.75,
      "m_m_5_30676": 4.88,
      "m_m_5_30678": 1.48,
      "m_m_5_30674": 4.12,
      "m_m_5_30675": 3.46,
      "m_m_5_89967": 88.38,
      "m_m_5_89367": 1549.99,
      "m_m_5_6246": 0.08,
      "m_m_5_30841": 4.24,
      "m_m_5_10172": 32.99,
      "m_m_5_35708": 6.49,
      "m_m_8_632": 555.55,
      "m_m_8_634": 500,
      "m_m_8_636": 888,
      "m_m_5_6068": 1.01,
      "muban": 22.3,
      "muliao": 1.95,
      "m_m_5_35707": 6.99,
      "m_m_5_35703": 0.67,
      "qiwuling": 30.49,
      "m_m_5_35716": 12.62,
      "m_m_5_35715": 14.12,
      "zhuzi": 1.51,
      "m_m_5_35567": 1.39,
      "m_m_5_35714": 10.89,
      "m_m_5_35713": 14.85,
      "m_m_5_35717": 1.84,
      "m_m_10_2037": 1388.59,
      "m_m_10_164": 99.98,
      "m_m_5_52337": 1580,
      "m_m_5_35772": 1497.96,
      "m_m_5_87917": 517.48,
      "m_m_5_87881": 7500.52,
      "zasui": 0.72,
      "g_5_30681": 1.11,
      "g_5_30680": 1.2,
      "m_x_5_89353": 548.4,
      "m_x_5_89359": 2033.1,
      "m_x_5_89354": 860,
      "m_x_5_89355": 1100,
      "m_x_5_89434": 4566.34,
      "m_x_5_89448": 39991.01,
      "m_x_5_89436": 6335.73,
      "m_x_5_89438": 5000.37,
      "m_x_5_89452": 30000.49,
      "m_x_5_89439": 5188.81,
      "m_x_5_89453": 28888.29,
      "m_x_5_89440": 4000.15,
      "m_x_5_89441": 3500.5,
      "m_x_5_89443": 6100.34,
      "m_x_5_89444": 6999.84,
      "m_x_5_89445": 5886.16,
      "m_x_5_89446": 4435.88,
      "m_x_5_89329": 1371.8,
      "m_x_5_89335": 1980.04,
      "m_x_5_89330": 1187.15,
      "m_x_5_89331": 791.53,
      "m_x_5_89337": 1170.06,
      "m_x_5_89368": 987.8,
      "m_x_5_89372": 1998.87,
      "m_x_5_89369": 1250.88,
      "m_x_5_90436": 74.99,
      "m_x_5_89379": 4799.99,
      "m_x_5_89397": 19997,
      "m_x_5_89380": 5887,
      "m_x_5_90437": 34.26,
      "m_x_5_89381": 12965,
      "m_x_5_89383": 6400,
      "m_x_5_89384": 6000.13,
      "m_x_5_89385": 5080.09,
      "m_x_5_89386": 5900,
      "m_x_5_89388": 4887.86,
      "m_x_5_89406": 24666.59,
      "m_x_5_89389": 6665.81,
      "m_x_5_89390": 4288.54,
      "m_x_5_89391": 5188,
      "m_x_5_89392": 6799.98,
      "m_x_5_89393": 8099,
      "m_x_5_89411": 18888,
      "m_x_5_89394": 5700,
      "m_x_5_89396": 4887,
      "m_x_5_20971": 199.68,
      "m_x_10_2229": 280.65,
      "m_x_5_89317": 989.9,
      "m_x_10_2241": 1280,
      "m_x_5_89428": 2499.28,
      "m_x_5_89310": 10001.16,
      "m_x_5_89347": 1252,
      "m_x_5_89356": 989.85,
      "m_x_5_89358": 1036.44,
      "m_x_5_89326": 1086,
      "m_x_5_89334": 1627.71,
      "m_x_5_89339": 3000,
      "m_x_5_5232": 1.97,
      "m_x_5_5231": 0.91,
      "m_x_5_5230": 0.65,
      "m_x_5_5229": 0.95,
      "m_x_5_31050": 25.35,
      "m_x_5_31051": 380.94,
      "m_x_5_31054": 500.1,
      "m_x_5_31055": 0.48,
      "m_x_5_2299": 7600.08,
      "m_x_5_31056": 300.61,
      "m_x_5_31057": 300.75,
      "m_x_5_31058": 4.99,
      "m_x_5_31059": 0.4,
      "m_x_5_31060": 300.96,
      "m_x_5_31062": 300.73,
      "m_x_5_71268": 84.15,
      "m_x_5_71271": 199.57,
      "m_x_5_71272": 99.3,
      "m_x_5_71273": 145.5,
      "m_x_5_71274": 113.13,
      "m_x_5_71276": 59,
      "m_x_5_71278": 30.77,
      "m_x_5_71279": 29.94,
      "m_x_5_3505": 1388,
      "m_x_5_71280": 37,
      "m_x_5_3485": 244,
      "m_x_5_71283": 33.93,
      "m_x_5_2292": 3111.09,
      "m_x_5_71284": 101.06,
      "m_x_5_71286": 101.14,
      "m_x_5_71287": 91.34,
      "m_x_5_71288": 101.27,
      "m_x_5_71289": 25.38,
      "m_x_5_71290": 99,
      "m_x_5_71291": 25.52,
      "m_x_5_71294": 578.42,
      "m_x_5_71295": 399.93,
      "m_x_5_71296": 467.88,
      "m_x_5_71297": 261.28,
      "m_x_5_71298": 44.09,
      "m_x_5_71299": 400,
      "m_x_5_71300": 4.34,
      "m_x_5_89316": 2220.69,
      "m_x_5_89318": 2300.36,
      "m_x_5_89361": 98,
      "m_x_5_89362": 121.21,
      "m_x_5_89363": 120,
      "m_x_5_89364": 189.45,
      "m_x_8_616": 788.18,
      "m_x_8_617": 128.88,
      "m_x_5_3810": 60.76,
      "m_x_5_3811": 60.98,
      "m_x_8_25": 31.97,
      "m_x_8_24": 1,
      "m_x_8_627": 350.75,
      "m_x_5_2467": 6.01,
      "m_x_8_30": 51.96,
      "m_x_8_37": 18.71,
      "m_x_8_38": 19.66,
      "m_x_5_5245": 98.8,
      "m_x_5_5246": 88.54,
      "m_x_8_31": 5.45,
      "m_x_8_69": 129.98,
      "m_x_8_70": 179.8,
      "m_x_5_22145": 87.29,
      "m_x_5_22917": 95.25,
      "m_x_5_22981": 120.53,
      "m_x_5_31254": 178.66,
      "m_x_5_71193": 985.43,
      "m_x_5_71194": 1580.19,
      "m_x_5_71195": 1587.02,
      "m_x_5_71196": 890.57,
      "m_x_5_71197": 1478.1,
      "m_x_5_71198": 1391.89,
      "m_x_5_71199": 1092.44,
      "m_x_5_71200": 1572.17,
      "m_x_5_71201": 1166.49,
      "m_x_5_71202": 948.09,
      "m_x_5_71203": 1849.03,
      "m_x_5_71204": 1183.68,
      "m_x_5_71205": 793.05,
      "m_x_5_71206": 1530.83,
      "m_x_5_71207": 1498.98,
      "m_x_5_71214": 1879.92,
      "m_x_5_71215": 1675,
      "m_x_5_71219": 250.98,
      "m_x_5_71220": 246.54,
      "m_x_5_71221": 288.47,
      "m_x_5_71222": 337.52,
      "m_x_5_71223": 245.77,
      "m_x_5_71224": 237.62,
      "m_x_5_71225": 344.77,
      "m_x_5_71226": 395.91,
      "m_x_5_71227": 219.8,
      "m_x_5_71228": 288.96,
      "m_x_5_71229": 389.66,
      "m_x_5_71230": 368.92,
      "m_x_5_71231": 288.03,
      "m_x_5_71237": 245,
      "m_x_5_89461": 1373.93,
      "m_x_5_89462": 1588.85,
      "m_x_5_89463": 1499.98,
      "m_x_5_89464": 1170,
      "m_x_5_89465": 1109.16,
      "m_x_5_89466": 999.99,
      "m_x_5_89467": 1250.33,
      "m_x_5_89468": 1455.5,
      "m_x_5_89469": 1333.33,
      "m_x_5_89470": 1100.45,
      "m_x_5_89471": 2333.14,
      "m_x_5_89472": 2717.23,
      "m_x_5_89473": 2797,
      "m_x_5_31099": 99.98,
      "m_x_5_31103": 19.71,
      "m_x_5_31104": 20,
      "m_x_5_31105": 86,
      "m_x_5_31106": 24.49,
      "m_x_5_31107": 80,
      "m_x_5_31108": 99.48,
      "m_x_5_40538": 128,
      "m_x_5_71242": 80.1,
      "m_x_5_71243": 125.45,
      "m_x_5_71244": 119,
      "m_x_5_71245": 40.01,
      "m_x_5_71246": 112.7,
      "m_x_5_71247": 139.08,
      "m_x_5_71248": 133.48,
      "m_x_5_71250": 120,
      "m_x_5_71251": 80.44,
      "m_x_5_71254": 99.3,
      "m_x_5_71255": 44.98,
      "m_x_5_71259": 99.23,
      "m_x_5_71260": 86.12,
      "m_x_5_71261": 107.81,
      "m_x_5_71262": 80.12,
      "m_x_5_71265": 44.18,
      "m_x_5_89341": 110,
      "m_x_5_89342": 96,
      "m_x_5_89343": 93.17,
      "m_x_5_89344": 149.99,
      "m_x_5_89345": 115.48,
      "m_x_5_89724": 300.71,
      "m_x_5_2589": 13.99,
      "m_x_5_2631": 30.12,
      "m_x_8_629": 475.64,
      "m_x_8_630": 666.66,
      "m_x_8_631": 399,
      "m_x_8_635": 391.2,
      "m_x_5_5044": 16.47,
      "m_x_5_6073": 1,
      "m_x_5_6247": 1.05,
      "m_x_5_6248": 0.95,
      "m_x_5_10028": 66.2,
      "m_x_5_31140": 230,
      "m_x_5_31141": 100,
      "m_x_5_40539": 58.16,
      "m_x_5_71129": 106.54,
      "m_x_5_71130": 112.86,
      "m_x_5_71131": 139.31,
      "m_x_5_71132": 226.2,
      "m_x_5_71133": 980.34,
      "m_x_5_71134": 1700.52,
      "m_x_5_71136": 1008.44,
      "m_x_5_71138": 1499.85,
      "m_x_5_71139": 1180.07,
      "m_x_5_71140": 1695.96,
      "m_x_5_71141": 1389.47,
      "m_x_5_71143": 1898.4,
      "m_x_5_71144": 1597.05,
      "m_x_5_71145": 946.5,
      "m_x_5_71146": 1398,
      "m_x_5_71147": 1773.92,
      "m_x_5_71148": 1093.52,
      "m_x_5_71149": 1887.25,
      "m_x_5_71150": 1191.88,
      "m_x_5_71151": 1594.33,
      "m_x_5_71152": 1998.99,
      "m_x_5_71153": 1480.09,
      "m_x_5_71159": 1389.75,
      "m_x_5_71160": 883.53,
      "m_x_5_71162": 263.23,
      "m_x_5_71164": 381.48,
      "m_x_5_71165": 244.84,
      "m_x_5_71166": 379.73,
      "m_x_5_71167": 396.88,
      "m_x_5_71168": 297.87,
      "m_x_5_71169": 271.84,
      "m_x_5_71170": 296.87,
      "m_x_5_71171": 379.6,
      "m_x_5_71172": 389.89,
      "m_x_5_71174": 299.7,
      "m_x_5_71175": 337.11,
      "m_x_5_71176": 293.55,
      "m_x_5_71182": 283.96,
      "m_x_5_71183": 298.92,
      "m_x_5_71185": 266.48,
      "m_x_5_71186": 310.55,
      "m_x_5_71187": 252.24,
      "m_x_5_71189": 38,
      "m_x_5_71190": 34.6,
      "m_x_5_71191": 111.58,
      "m_x_5_54537": 99.06,
      "m_x_5_89415": 2210.33,
      "m_x_5_89416": 1111.11,
      "m_x_5_89417": 2240,
      "m_x_5_89418": 1248.04,
      "m_x_5_89419": 899.55,
      "m_x_5_89420": 1077.02,
      "m_x_5_89421": 993.13,
      "m_x_5_89422": 944.22,
      "m_x_5_89423": 983.84,
      "m_x_5_89425": 1998.86,
      "m_x_5_90213": 14.4,
      "m_x_5_35004": 3.86,
      "m_x_5_35005": 3.83,
      "m_x_5_35006": 2.47,
      "m_x_5_35007": 1.75,
      "m_x_10_152": 690,
      "m_x_10_155": 990,
      "m_x_10_163": 88.65,
      "m_x_10_170": 40.03,
      "m_x_10_94": 99,
      "m_x_10_95": 99.94,
      "m_x_10_103": 140,
      "m_x_10_106": 99.94,
      "m_x_10_108": 99.24,
      "m_x_10_110": 99.65,
      "m_x_5_35771": 788.98,
      "m_x_5_35774": 1900.9,
      "m_x_5_35775": 799,
      "m_x_10_133": 290,
      "m_x_10_148": 27.76,
      "m_x_10_120": 320,
      "m_x_10_122": 298.78,
      "m_x_5_38373": 1500.21,
      "m_x_5_38374": 800.53,
      "m_x_5_38927": 5.08,
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
      "m_x_10_2101": 290,
      "m_x_10_2102": 290,
      "m_x_10_2103": 290,
      "m_x_10_2104": 290,
      "m_x_10_2105": 290,
      "m_x_10_2106": 290,
      "m_x_10_2107": 290,
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
      "m_x_5_87875": 299.96,
      "m_x_5_87874": 388,
      "m_x_5_87872": 688.88,
      "m_x_5_87848": 688.88,
      "m_x_5_90212": 988.88,
      "m_x_5_31983": 0.6,
      "m_x_5_32010": 1.45,
      "m_x_5_36491": 10,
      "m_x_5_41556": 2,
      "m_x_5_81662": 1.14,
      "m_x_5_40562": 10000,
      "m_x_5_6250": 0.69,
      "m_x_5_6251": 1.2,
      "m_x_5_35780": 6.2
    },
    "s_longzheng": {
      "dimai": 69997.34,
      "fengwangjiang": 153.76,
      "shoupijiao": 78,
      "qicaixian": 134.99,
      "bairanxian": 3.4,
      "fengyu_yi": 1888.57,
      "m_m_5_30852": 18.09,
      "m_m_5_30853": 91.06,
      "m_m_5_30828": 6.69,
      "m_m_5_89165": 10.64,
      "guajian_bei": 54.9,
      "baihua_bu": 72.41,
      "guajian_yao": 79.3,
      "shuran_bu": 107.05,
      "shuran_bag": 36.74,
      "jinfeng_bag": 11000.82,
      "wuseshi": 122.36,
      "m_m_5_30856": 14.63,
      "m_m_5_30855": 151.07,
      "geyin_zhang": 180.68,
      "m_m_5_89298": 31.86,
      "m_m_5_30679": 15.13,
      "m_m_5_32004": 0.69,
      "m_m_5_30847": 19.06,
      "m_m_5_30846": 4.99,
      "yinsi_duan": 129.55,
      "m_m_5_32003": 0.6,
      "m_m_5_30848": 20,
      "m_m_5_32002": 0.6,
      "m_m_5_30850": 142.42,
      "m_m_5_30845": 168.02,
      "m_m_5_31397": 0.64,
      "m_m_5_89433": 5555.76,
      "m_m_5_89435": 6666.91,
      "tongpao_fan": 9998,
      "m_m_5_30844": 0.62,
      "m_m_5_90210": 75,
      "m_m_5_35719": 32.39,
      "m_m_5_30873": 33,
      "m_m_5_90205": 200,
      "m_m_8_614": 699.99,
      "m_m_8_36148": 1001.29,
      "m_m_5_89475": 1988,
      "m_m_5_89474": 1419.99,
      "m_m_5_3820": 5.55,
      "m_m_5_30827": 1.33,
      "m_m_5_89970": 173,
      "m_m_5_32014": 229,
      "m_m_5_31985": 0.66,
      "lucai": 18.07,
      "m_m_5_31973": 0.67,
      "m_m_5_30849": 6,
      "m_m_5_71293": 29.5,
      "m_m_5_30826": 0.69,
      "m_m_5_30825": 0.02,
      "m_m_5_89171": 10.8,
      "m_m_5_31974": 0.67,
      "m_m_5_31968": 0.5,
      "m_m_5_71292": 40.23,
      "m_m_5_30824": 0.84,
      "m_m_5_31967": 0.55,
      "m_m_5_71281": 26,
      "m_m_5_30823": 0.87,
      "m_m_5_31969": 0.65,
      "m_m_5_71277": 28.09,
      "m_m_5_89315": 1200,
      "m_m_5_89969": 110.84,
      "m_m_5_31976": 0.63,
      "m_m_5_89971": 183.27,
      "lushui": 13.74,
      "m_m_5_30875": 1,
      "m_m_5_30829": 1.11,
      "m_m_5_30843": 0.99,
      "m_m_5_30874": 23,
      "m_m_5_30842": 0.85,
      "m_m_5_5270": 2.99,
      "m_m_5_31970": 0.67,
      "m_m_5_5269": 0.05,
      "m_m_5_31977": 0.6,
      "m_m_5_31013": 195.5,
      "gancao": 3.08,
      "m_m_5_31012": 325.66,
      "m_m_5_90034": 4000,
      "m_m_5_26057": 3203.03,
      "m_m_5_89352": 725.81,
      "m_m_5_89350": 832.77,
      "m_m_5_71269": 152.55,
      "m_m_5_89346": 719.73,
      "m_m_5_89167": 10.63,
      "m_m_5_89348": 194.63,
      "m_m_5_71285": 123.11,
      "jieyuan_dan": 49.97,
      "m_m_5_30836": 3.78,
      "m_m_5_30832": 4.99,
      "m_m_5_30833": 2.26,
      "m_m_5_89324": 79,
      "m_m_5_30831": 4.18,
      "m_m_5_89973": 155,
      "m_m_5_31996": 0.66,
      "m_m_5_71240": 100.01,
      "m_m_5_71266": 29.13,
      "m_m_5_30838": 5,
      "shanhu": 5.66,
      "m_m_5_6646": 1.59,
      "m_m_5_30835": 3.42,
      "m_m_5_89974": 149.08,
      "m_m_5_6648": 2.93,
      "m_m_5_71267": 76.39,
      "m_m_5_90029": 380,
      "m_m_5_89168": 22.99,
      "yaoyin": 158,
      "m_m_5_31100": 40,
      "shaoyao": 3.89,
      "m_m_5_31102": 0.21,
      "m_m_5_30834": 3.42,
      "m_m_5_31998": 0.68,
      "m_m_5_89328": 919.18,
      "m_m_5_89332": 1096.65,
      "m_m_5_89340": 70.28,
      "m_m_5_89325": 792.87,
      "m_m_5_71258": 65.36,
      "m_m_5_31999": 0.55,
      "m_m_5_89327": 73,
      "m_m_5_89966": 79.66,
      "m_m_5_89968": 120.7,
      "m_m_5_89376": 521.31,
      "m_m_5_89965": 144.78,
      "m_m_5_31992": 0.67,
      "m_m_5_89963": 74.98,
      "m_m_5_89370": 999,
      "m_m_5_71192": 5,
      "m_m_5_89169": 10.64,
      "m_m_5_71188": 588.66,
      "m_m_5_31994": 0.7,
      "m_m_5_89962": 58.27,
      "m_m_5_31139": 3795,
      "m_m_5_89964": 54.32,
      "m_m_5_10027": 50.13,
      "m_m_5_89961": 66.9,
      "tiekuang": 2.32,
      "m_m_5_30676": 3.17,
      "m_m_5_30678": 2.86,
      "m_m_5_30674": 3.25,
      "m_m_5_30675": 3.26,
      "m_m_5_89967": 70,
      "m_m_5_89367": 1599.79,
      "m_m_5_6246": 0.14,
      "m_m_5_6249": 0.49,
      "m_m_5_32787": 6.31,
      "m_m_8_25762": 6.08,
      "m_m_5_30841": 4.08,
      "m_m_5_35708": 6.46,
      "m_m_5_90032": 5697.98,
      "m_m_8_634": 299.99,
      "m_m_8_636": 60,
      "m_m_5_90353": 2900.88,
      "m_m_5_90257": 98,
      "m_m_5_6066": 0.01,
      "muban": 24.16,
      "muliao": 2.89,
      "m_m_5_35707": 6.49,
      "qiwuling": 24,
      "m_m_5_35716": 7.4,
      "m_m_5_35715": 12,
      "zhuzi": 1.9,
      "m_m_5_35567": 1.65,
      "m_m_5_35704": 0.68,
      "m_m_5_35714": 89.54,
      "m_m_5_35701": 0.65,
      "m_m_5_35713": 89.19,
      "m_m_5_35705": 0.66,
      "m_m_10_1778": 910,
      "m_m_10_948": 599.99,
      "m_m_5_89260": 27000,
      "m_m_10_2034": 1888.88,
      "m_m_10_93": 299.99,
      "m_m_5_35717": 1.2,
      "m_m_10_2037": 1999.99,
      "m_m_5_52337": 3888.74,
      "m_m_5_35772": 1153,
      "m_m_5_87917": 254.45,
      "m_m_5_87881": 7200.25,
      "zasui": 0.79,
      "g_5_30681": 2.04,
      "g_5_30680": 1.5,
      "m_x_5_89353": 497.55,
      "m_x_5_89359": 1400.67,
      "m_x_5_89305": 3439.79,
      "m_x_5_89308": 4357.1,
      "m_x_5_89349": 683.75,
      "m_x_5_89355": 1895.66,
      "m_x_5_89351": 597.89,
      "m_x_5_89434": 5173.38,
      "m_x_5_89448": 45000.9,
      "m_x_5_89436": 5355.55,
      "m_x_5_89438": 4889.98,
      "m_x_5_89452": 28885,
      "m_x_5_89439": 4109.34,
      "m_x_5_89453": 22888,
      "m_x_5_89440": 9999,
      "m_x_5_89454": 25888.88,
      "m_x_5_89441": 4299.8,
      "m_x_5_89456": 24800.93,
      "m_x_5_89443": 5666,
      "m_x_5_89445": 4780.85,
      "m_x_5_89446": 6666.63,
      "m_x_5_89335": 1050.93,
      "m_x_5_89331": 764.19,
      "m_x_5_89337": 998.58,
      "m_x_5_89368": 938.61,
      "m_x_5_89372": 1100.35,
      "m_x_5_89369": 700.85,
      "m_x_5_90436": 64,
      "m_x_5_89379": 3858.93,
      "m_x_5_89397": 27399,
      "m_x_5_89380": 4550.07,
      "m_x_5_90437": 47.57,
      "m_x_5_89381": 5200,
      "m_x_5_89383": 6500.6,
      "m_x_5_89384": 4999.22,
      "m_x_5_89386": 4987,
      "m_x_5_89388": 3930.55,
      "m_x_5_89389": 3600,
      "m_x_5_89407": 34991,
      "m_x_5_89391": 4490,
      "m_x_5_89409": 36666.03,
      "m_x_5_89392": 4160.02,
      "m_x_5_89393": 5000.96,
      "m_x_5_89411": 31949,
      "m_x_5_89412": 20000,
      "m_x_5_89395": 7000,
      "m_x_5_89396": 3930,
      "m_x_5_20971": 198.09,
      "m_x_10_1281": 599.99,
      "m_x_10_1894": 199.99,
      "m_x_10_2229": 599.99,
      "m_x_5_89317": 1020.28,
      "m_x_10_2241": 1599.99,
      "m_x_5_89320": 2000.74,
      "m_x_5_89426": 1499.72,
      "m_x_5_89427": 1350,
      "m_x_5_89428": 1888.88,
      "m_x_5_89310": 11000,
      "m_x_5_89347": 1049.74,
      "m_x_5_89356": 1550.77,
      "m_x_5_89358": 1388.86,
      "m_x_5_89326": 1233.96,
      "m_x_5_89334": 1466.11,
      "m_x_5_26232": 4,
      "m_x_5_5231": 1.96,
      "m_x_5_5230": 2,
      "m_x_5_5229": 7.01,
      "m_x_5_31055": 50,
      "m_x_5_31056": 10000,
      "m_x_5_31057": 1000,
      "m_x_5_31058": 10000,
      "m_x_5_31059": 2.55,
      "m_x_5_2305": 9999.99,
      "m_x_5_31062": 362.42,
      "m_x_5_71268": 98.24,
      "m_x_5_71270": 100.16,
      "m_x_5_71271": 141.64,
      "m_x_5_71272": 115.72,
      "m_x_5_71273": 123.19,
      "m_x_5_71274": 103.46,
      "m_x_5_71276": 39,
      "m_x_5_71278": 24.99,
      "m_x_5_71279": 55.2,
      "m_x_5_3505": 10000,
      "m_x_5_71280": 33.2,
      "m_x_5_3485": 175.09,
      "m_x_5_71282": 25,
      "m_x_5_3236": 1755.92,
      "m_x_5_2292": 4999.98,
      "m_x_5_71284": 98.61,
      "m_x_5_71286": 90.93,
      "m_x_5_71287": 81.91,
      "m_x_5_71288": 80.7,
      "m_x_5_71290": 30.09,
      "m_x_5_71291": 19.99,
      "m_x_5_71294": 730.33,
      "m_x_5_71295": 572,
      "m_x_5_71296": 739.04,
      "m_x_5_71297": 218.23,
      "m_x_5_71298": 43.99,
      "m_x_5_71299": 466,
      "m_x_5_2303": 7500,
      "m_x_5_89316": 1599.02,
      "m_x_5_89318": 2395.94,
      "m_x_5_89361": 50.91,
      "m_x_5_89362": 140.31,
      "m_x_5_89363": 150.13,
      "m_x_5_89364": 149.88,
      "m_x_5_89365": 255.88,
      "m_x_5_3810": 80,
      "m_x_5_3811": 35,
      "m_x_8_25": 36.2,
      "m_x_8_21": 2.1,
      "m_x_5_3797": 49.99,
      "m_x_8_22": 31.82,
      "m_x_8_23": 35.29,
      "m_x_8_24": 3.94,
      "m_x_8_627": 469,
      "m_x_5_2467": 15.76,
      "m_x_5_5245": 99.88,
      "m_x_8_31": 12.74,
      "m_x_8_69": 155.55,
      "m_x_8_70": 231.56,
      "m_x_5_22145": 65.99,
      "m_x_5_22917": 72.04,
      "m_x_5_22981": 162.74,
      "m_x_5_31252": 999.6,
      "m_x_5_31254": 160.26,
      "m_x_5_71193": 1550.06,
      "m_x_5_71196": 1400,
      "m_x_5_71198": 1699.95,
      "m_x_5_71199": 1328.9,
      "m_x_5_71200": 1940,
      "m_x_5_71201": 1780.38,
      "m_x_5_71202": 1330.99,
      "m_x_5_71203": 1850.6,
      "m_x_5_71204": 1747.87,
      "m_x_5_71205": 1362.88,
      "m_x_5_71206": 1764,
      "m_x_5_71207": 1993,
      "m_x_5_71214": 1300.09,
      "m_x_5_71215": 2100.55,
      "m_x_5_71216": 888.3,
      "m_x_5_71220": 588.87,
      "m_x_5_71221": 806.68,
      "m_x_5_71222": 824.9,
      "m_x_5_71223": 666.17,
      "m_x_5_71224": 622.67,
      "m_x_5_71225": 998.11,
      "m_x_5_71226": 733.08,
      "m_x_5_71227": 728.72,
      "m_x_5_71229": 464.58,
      "m_x_5_71237": 928,
      "m_x_5_71239": 799,
      "m_x_5_89461": 1500.79,
      "m_x_5_89462": 2300,
      "m_x_5_89463": 1722,
      "m_x_5_89464": 1288,
      "m_x_5_89465": 1888,
      "m_x_5_89466": 1420.4,
      "m_x_5_89467": 1802.2,
      "m_x_5_89468": 1395.74,
      "m_x_5_89469": 1580.85,
      "m_x_5_89470": 1587.87,
      "m_x_5_89471": 1788.12,
      "m_x_5_89472": 1399,
      "m_x_5_89473": 3509,
      "m_x_5_90289": 1300,
      "m_x_5_31099": 17.47,
      "m_x_5_31103": 7.58,
      "m_x_5_31104": 88.19,
      "m_x_5_31105": 80.65,
      "m_x_5_31106": 9.02,
      "m_x_5_31107": 44.98,
      "m_x_5_31108": 153,
      "m_x_5_40538": 27.22,
      "m_x_5_71242": 129.25,
      "m_x_5_71243": 118.8,
      "m_x_5_71244": 100.91,
      "m_x_5_71246": 126.45,
      "m_x_5_71247": 95,
      "m_x_5_71248": 113.66,
      "m_x_5_71250": 67.27,
      "m_x_5_71251": 30.07,
      "m_x_5_71252": 35.85,
      "m_x_5_71253": 86.8,
      "m_x_5_71254": 88.48,
      "m_x_5_71255": 54.99,
      "m_x_5_71256": 88.88,
      "m_x_5_71259": 86.17,
      "m_x_5_71260": 80.04,
      "m_x_5_71261": 135.88,
      "m_x_5_71262": 81.65,
      "m_x_5_71263": 64.98,
      "m_x_5_71265": 37.09,
      "m_x_5_89341": 95.73,
      "m_x_5_89342": 62.99,
      "m_x_5_89343": 98.71,
      "m_x_5_89344": 188.58,
      "m_x_5_89345": 55.96,
      "m_x_5_89724": 270.3,
      "m_x_5_2589": 10.99,
      "m_x_5_2631": 8.88,
      "m_x_5_2594": 500,
      "m_x_5_6247": 0.99,
      "m_x_5_6248": 0.9,
      "m_x_5_10028": 58,
      "m_x_5_31140": 366.15,
      "m_x_5_31142": 600.3,
      "m_x_5_31143": 200.99,
      "m_x_5_40539": 78.45,
      "m_x_5_71129": 106.55,
      "m_x_5_71130": 98.07,
      "m_x_5_71131": 139.63,
      "m_x_5_71132": 213.3,
      "m_x_5_71133": 1359.11,
      "m_x_5_71134": 1800,
      "m_x_5_71135": 1900.6,
      "m_x_5_71136": 900.88,
      "m_x_5_71137": 2188.4,
      "m_x_5_71138": 1888,
      "m_x_5_71141": 1888,
      "m_x_5_71142": 1888.54,
      "m_x_5_71143": 2100.66,
      "m_x_5_71144": 1600.46,
      "m_x_5_71145": 1100.19,
      "m_x_5_71146": 2012.42,
      "m_x_5_71147": 1978.66,
      "m_x_5_71148": 1388,
      "m_x_5_71149": 1999.98,
      "m_x_5_71150": 1628.27,
      "m_x_5_71151": 1333.6,
      "m_x_5_71152": 2824.3,
      "m_x_5_71159": 2221.3,
      "m_x_5_71160": 1100.21,
      "m_x_5_71163": 833.29,
      "m_x_5_71164": 997.98,
      "m_x_5_71166": 763,
      "m_x_5_71167": 650,
      "m_x_5_71168": 658.68,
      "m_x_5_71169": 604.04,
      "m_x_5_71170": 721.77,
      "m_x_5_71171": 888.07,
      "m_x_5_71172": 715.52,
      "m_x_5_71173": 999.27,
      "m_x_5_71174": 621.01,
      "m_x_5_71182": 666.41,
      "m_x_5_71184": 541.32,
      "m_x_5_71186": 792.66,
      "m_x_5_71187": 480.48,
      "m_x_5_71189": 44.77,
      "m_x_5_71190": 45,
      "m_x_5_54537": 333,
      "m_x_5_89415": 1411.04,
      "m_x_5_89416": 1229.54,
      "m_x_5_89417": 1375,
      "m_x_5_89418": 987,
      "m_x_5_89419": 1412.66,
      "m_x_5_89420": 1739.98,
      "m_x_5_89421": 1000.93,
      "m_x_5_89422": 1199.99,
      "m_x_5_89423": 1350.88,
      "m_x_5_89424": 2087.94,
      "m_x_5_89425": 1699.4,
      "m_x_5_89429": 2778.39,
      "m_x_5_89430": 2554.89,
      "m_x_5_89431": 2041.83,
      "m_x_5_90213": 18,
      "m_x_5_35004": 2.28,
      "m_x_5_35005": 3.42,
      "m_x_5_35006": 4.99,
      "m_x_5_35007": 4,
      "m_x_10_152": 994.45,
      "m_x_10_160": 2688.88,
      "m_x_10_170": 23.66,
      "m_x_5_35771": 687.69,
      "m_x_5_35773": 100.94,
      "m_x_5_35774": 954.88,
      "m_x_5_35775": 350.73,
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
      "m_x_5_38373": 2000.39,
      "m_x_5_38374": 1387.72,
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
      "m_x_5_1830": 20.32,
      "m_x_5_31975": 0.66,
      "m_x_5_1832": 10000,
      "m_x_5_31981": 10000,
      "m_x_5_32007": 10000,
      "m_x_5_32010": 1.6,
      "m_x_5_32011": 10000,
      "m_x_5_32012": 10000,
      "m_x_5_31982": 0.67,
      "m_x_5_34184": 1.1,
      "m_x_5_35786": 25.84,
      "m_x_5_36491": 8.55,
      "m_x_5_41556": 0.94,
      "m_x_5_44402": 2.2,
      "m_x_5_40562": 10000,
      "m_x_5_6250": 0.9,
      "m_x_5_35780": 6.49,
      "m_x_5_2871": 3,
      "m_x_5_3843": 3.93,
      "m_x_5_3574": 2.7
    },
    "s_changancheng": {
      "dimai": 80000.5,
      "fengwangjiang": 158.92,
      "shoupijiao": 55.4,
      "qicaixian": 110.39,
      "fengyu_yi": 2300.64,
      "m_m_5_30852": 15.33,
      "m_m_5_30853": 88.29,
      "m_m_5_30828": 3.98,
      "m_m_5_89165": 10.64,
      "guajian_bei": 65,
      "baihua_bu": 67.7,
      "guajian_yao": 88.42,
      "shuran_bu": 75,
      "m_m_5_32001": 0.65,
      "shuran_bag": 35.96,
      "m_m_5_10173": 31.98,
      "wuseshi": 122,
      "m_m_5_30856": 14.97,
      "m_m_5_30855": 280.23,
      "geyin_zhang": 46.08,
      "m_m_5_89298": 31.08,
      "m_m_5_30679": 19.87,
      "m_m_5_30847": 10.09,
      "m_m_5_30846": 2.93,
      "yinsi_duan": 109,
      "m_m_5_30848": 20.14,
      "m_m_5_32002": 0.66,
      "m_m_5_30850": 130.7,
      "m_m_5_30845": 156.86,
      "m_m_5_31253": 200,
      "m_m_5_30844": 0.69,
      "m_m_5_35718": 15.98,
      "m_m_5_35719": 29.99,
      "m_m_5_30873": 50.11,
      "m_m_5_90205": 100,
      "m_m_5_3819": 78,
      "m_m_8_36148": 1117.27,
      "m_m_5_89474": 2888,
      "m_m_5_30827": 1.85,
      "m_m_5_89970": 178.14,
      "m_m_5_32014": 129,
      "m_m_5_31978": 0.64,
      "m_m_5_31985": 0.64,
      "lucai": 18.67,
      "m_m_5_1831": 12.33,
      "m_m_5_31973": 0.65,
      "m_m_5_30849": 5.73,
      "m_m_5_71293": 37.52,
      "m_m_5_30826": 0.59,
      "m_m_5_30825": 0.09,
      "m_m_5_89171": 10.63,
      "m_m_5_31974": 0.67,
      "m_m_5_31968": 0.67,
      "m_m_5_71292": 46.71,
      "m_m_5_30824": 0.37,
      "m_m_5_71281": 10,
      "m_m_5_30823": 0.2,
      "m_m_5_71277": 35.52,
      "m_m_5_89315": 1299.99,
      "m_m_5_89969": 127.9,
      "m_m_5_31976": 0.66,
      "m_m_5_89971": 196.38,
      "lushui": 12,
      "m_m_5_30875": 1,
      "m_m_5_30829": 0.67,
      "m_m_5_30843": 1.28,
      "m_m_5_30874": 28.2,
      "m_m_5_30842": 0.66,
      "m_m_5_5270": 0.98,
      "m_m_5_31977": 0.64,
      "m_m_5_31013": 160.01,
      "gancao": 12.59,
      "m_m_5_31012": 450.14,
      "m_m_5_89172": 22.39,
      "m_m_5_89304": 5286.08,
      "m_m_5_89352": 759.04,
      "m_m_5_89350": 750.1,
      "m_m_5_71269": 122.31,
      "m_m_5_89346": 710.84,
      "m_m_5_89167": 10.64,
      "m_m_5_89348": 140.45,
      "m_m_5_71285": 86.19,
      "jieyuan_dan": 153.25,
      "m_m_5_30836": 0.43,
      "m_m_5_30832": 0.85,
      "m_m_5_30833": 1.11,
      "m_m_5_31997": 0.64,
      "m_m_5_89324": 41.76,
      "m_m_5_30831": 0.75,
      "m_m_5_89973": 148.21,
      "m_m_5_31996": 0.67,
      "m_m_5_71240": 42.43,
      "m_m_5_31995": 0.67,
      "m_m_5_71266": 24.83,
      "shanhu": 2.98,
      "m_m_5_6646": 0.65,
      "m_m_5_30835": 1.65,
      "m_m_5_89974": 95.2,
      "m_m_5_6648": 2.99,
      "m_m_5_71267": 54.99,
      "yaoyin": 145.52,
      "m_m_5_31100": 18.26,
      "shaoyao": 1.31,
      "m_m_5_30834": 1.76,
      "m_m_5_31998": 0.67,
      "m_m_5_89340": 98.01,
      "m_m_5_89325": 771.44,
      "m_m_5_71258": 55.57,
      "m_m_5_31999": 0.58,
      "m_m_5_89327": 82,
      "m_m_5_89966": 95.82,
      "m_m_5_89377": 588.88,
      "m_m_5_89968": 60,
      "m_m_5_89376": 500.94,
      "m_m_5_89965": 351.99,
      "m_m_5_31992": 0.64,
      "m_m_5_89963": 77.23,
      "m_m_5_89169": 10.64,
      "m_m_5_31994": 0.67,
      "m_m_5_89962": 60.06,
      "m_m_5_31139": 4486.2,
      "m_m_5_89964": 70,
      "m_m_5_10027": 66,
      "m_m_5_89961": 65.09,
      "tiekuang": 1.7,
      "m_m_5_30676": 1.56,
      "m_m_5_30678": 1.3,
      "m_m_5_30674": 2.09,
      "m_m_5_30675": 3.65,
      "m_m_5_89967": 74.32,
      "m_m_5_6246": 0.11,
      "m_m_5_6249": 0.67,
      "m_m_8_25762": 15.83,
      "m_m_5_30841": 3.96,
      "m_m_5_10172": 31.96,
      "m_m_8_634": 449.9,
      "m_m_5_6068": 1,
      "muban": 20,
      "muliao": 1.97,
      "m_m_5_35707": 6.49,
      "m_m_5_35703": 0.55,
      "qiwuling": 21.62,
      "m_m_5_35702": 0.65,
      "m_m_5_35715": 89.7,
      "zhuzi": 1.75,
      "m_m_5_35567": 1.49,
      "m_m_5_35704": 0.67,
      "m_m_5_35714": 89.85,
      "m_m_5_35701": 0.66,
      "m_m_5_35713": 14.97,
      "m_m_5_35717": 1.3,
      "m_m_5_52337": 1050.5,
      "m_m_5_35772": 984.71,
      "m_m_5_87917": 261.68,
      "m_m_5_87881": 7500,
      "zasui": 0.58,
      "g_5_30681": 0.89,
      "g_5_30680": 0.63,
      "m_x_5_89353": 688,
      "m_x_5_89305": 4783.13,
      "m_x_5_89438": 7758.57,
      "m_x_5_89439": 5551.13,
      "m_x_5_89453": 29999.99,
      "m_x_5_89440": 5660.55,
      "m_x_5_89454": 29996.89,
      "m_x_5_89441": 6650.36,
      "m_x_5_89443": 7888.65,
      "m_x_5_89444": 6888,
      "m_x_5_89329": 911.7,
      "m_x_5_89335": 2000.04,
      "m_x_5_89331": 793.1,
      "m_x_5_89337": 1500,
      "m_x_5_89368": 944.81,
      "m_x_5_89372": 1428,
      "m_x_5_90436": 70,
      "m_x_5_89379": 6776.47,
      "m_x_5_89397": 22222.89,
      "m_x_5_89380": 6440,
      "m_x_5_90437": 70,
      "m_x_5_89386": 5880.34,
      "m_x_5_89388": 7888.96,
      "m_x_5_89389": 5965.21,
      "m_x_5_89407": 26666,
      "m_x_5_89390": 4499.9,
      "m_x_5_89391": 7649.18,
      "m_x_5_89393": 5300.65,
      "m_x_5_89396": 5553,
      "m_x_10_157": 410,
      "m_x_5_20971": 106.99,
      "m_x_5_89317": 1115.84,
      "m_x_5_89426": 3078,
      "m_x_5_89427": 2288,
      "m_x_5_89428": 2311.3,
      "m_x_5_89347": 1177.27,
      "m_x_5_89356": 1583.2,
      "m_x_5_89358": 1330.04,
      "m_x_5_89326": 1150,
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
      "m_x_5_2305": 3999.99,
      "m_x_5_71268": 148.49,
      "m_x_5_71270": 111,
      "m_x_5_71271": 101.33,
      "m_x_5_71272": 168.29,
      "m_x_5_71273": 123.68,
      "m_x_5_71274": 146.14,
      "m_x_5_71275": 93.51,
      "m_x_5_71276": 24.18,
      "m_x_5_71278": 31.22,
      "m_x_5_71279": 111,
      "m_x_5_71280": 22.13,
      "m_x_5_3485": 999.84,
      "m_x_5_71282": 8.98,
      "m_x_5_3236": 5489.99,
      "m_x_5_71283": 188,
      "m_x_5_2292": 3994,
      "m_x_5_71284": 77.48,
      "m_x_5_71286": 88.88,
      "m_x_5_71287": 93.66,
      "m_x_5_71288": 131.97,
      "m_x_5_71289": 9.64,
      "m_x_5_71290": 20,
      "m_x_5_71291": 20.01,
      "m_x_5_71294": 727.99,
      "m_x_5_71295": 980.86,
      "m_x_5_71296": 998.88,
      "m_x_5_71297": 249.98,
      "m_x_5_71298": 44.54,
      "m_x_5_71299": 1500,
      "m_x_5_2303": 20000,
      "m_x_5_71300": 8.83,
      "m_x_5_89316": 2098.02,
      "m_x_5_89318": 1993.99,
      "m_x_5_89361": 30.27,
      "m_x_5_89362": 40.77,
      "m_x_5_89363": 88.7,
      "m_x_5_89364": 260,
      "m_x_5_89365": 250.09,
      "m_x_8_616": 498.52,
      "m_x_5_3810": 41.66,
      "m_x_5_3811": 50,
      "m_x_8_25": 32.17,
      "m_x_8_26": 30.96,
      "m_x_8_23": 28.88,
      "m_x_5_2467": 4.71,
      "m_x_8_37": 8.84,
      "m_x_8_31": 23.87,
      "m_x_8_70": 145.1,
      "m_x_5_22145": 98.5,
      "m_x_5_22981": 159.99,
      "m_x_5_31252": 420,
      "m_x_5_31254": 422.17,
      "m_x_5_71196": 2147.31,
      "m_x_5_71198": 2458.63,
      "m_x_5_71199": 1398.42,
      "m_x_5_71200": 2500.32,
      "m_x_5_71201": 1368,
      "m_x_5_71202": 1494,
      "m_x_5_71204": 2841,
      "m_x_5_71205": 2502.95,
      "m_x_5_71206": 2059.89,
      "m_x_5_71207": 2400.86,
      "m_x_5_71214": 2291.27,
      "m_x_5_71215": 2345.5,
      "m_x_5_71219": 754.51,
      "m_x_5_71221": 679.05,
      "m_x_5_71222": 519.27,
      "m_x_5_71224": 966.11,
      "m_x_5_71225": 999.49,
      "m_x_5_71226": 876.79,
      "m_x_5_71228": 999.03,
      "m_x_5_71229": 465.99,
      "m_x_5_71230": 555.33,
      "m_x_5_71237": 342.39,
      "m_x_5_71239": 1056.74,
      "m_x_5_89461": 1326.43,
      "m_x_5_89462": 1984.98,
      "m_x_5_89463": 1928,
      "m_x_5_89464": 1346.59,
      "m_x_5_89465": 1388.28,
      "m_x_5_89466": 1215.11,
      "m_x_5_89467": 1244.24,
      "m_x_5_89469": 1768.98,
      "m_x_5_89471": 2600.88,
      "m_x_5_89472": 2388.88,
      "m_x_5_31099": 10.54,
      "m_x_5_31103": 19.99,
      "m_x_5_31104": 30.24,
      "m_x_5_31105": 90.77,
      "m_x_5_31107": 18.96,
      "m_x_5_31108": 39.99,
      "m_x_5_40538": 55,
      "m_x_5_71242": 119.25,
      "m_x_5_71243": 150.74,
      "m_x_5_71244": 128.36,
      "m_x_5_71245": 82.12,
      "m_x_5_71246": 123.6,
      "m_x_5_71247": 96.28,
      "m_x_5_71248": 184.89,
      "m_x_5_71250": 90.3,
      "m_x_5_71251": 22.97,
      "m_x_5_71252": 57.33,
      "m_x_5_71253": 58.88,
      "m_x_5_71254": 24.52,
      "m_x_5_71255": 66.66,
      "m_x_5_71256": 45,
      "m_x_5_71259": 140.15,
      "m_x_5_71260": 79.44,
      "m_x_5_71261": 197.55,
      "m_x_5_71262": 88.25,
      "m_x_5_71264": 44,
      "m_x_5_71265": 45.69,
      "m_x_5_89341": 150.99,
      "m_x_5_89342": 93,
      "m_x_5_89343": 80.33,
      "m_x_5_89345": 86.9,
      "m_x_5_2631": 55.53,
      "m_x_8_629": 449.01,
      "m_x_5_2189": 80,
      "m_x_5_2594": 80,
      "m_x_8_17543": 200.98,
      "m_x_5_5044": 90.9,
      "m_x_5_6024": 1,
      "m_x_5_6073": 1,
      "m_x_5_6247": 1.1,
      "m_x_5_6248": 5.39,
      "m_x_5_10028": 69.24,
      "m_x_5_31140": 69.05,
      "m_x_5_31141": 500.88,
      "m_x_5_31142": 555,
      "m_x_5_31143": 500,
      "m_x_5_71129": 108.62,
      "m_x_5_71130": 125,
      "m_x_5_71131": 89.05,
      "m_x_5_71132": 172.48,
      "m_x_5_71133": 1490,
      "m_x_5_71134": 2100.01,
      "m_x_5_71140": 2500.84,
      "m_x_5_71141": 1879.44,
      "m_x_5_71143": 1985,
      "m_x_5_71144": 1845.29,
      "m_x_5_71145": 1884.33,
      "m_x_5_71148": 1666.68,
      "m_x_5_71150": 2068.94,
      "m_x_5_71151": 1488.7,
      "m_x_5_71152": 2598.81,
      "m_x_5_71159": 2099.78,
      "m_x_5_71160": 2051.52,
      "m_x_5_71163": 755.84,
      "m_x_5_71166": 333.29,
      "m_x_5_71167": 787.55,
      "m_x_5_71168": 749.5,
      "m_x_5_71169": 888,
      "m_x_5_71170": 887.98,
      "m_x_5_71171": 899.31,
      "m_x_5_71173": 611.71,
      "m_x_5_71174": 888.99,
      "m_x_5_71176": 999.95,
      "m_x_5_71184": 899.45,
      "m_x_5_71185": 884.11,
      "m_x_5_71189": 30,
      "m_x_5_71190": 43.7,
      "m_x_5_71191": 40,
      "m_x_5_54537": 20.98,
      "m_x_5_89415": 1188.17,
      "m_x_5_89416": 1486.95,
      "m_x_5_89417": 1322.43,
      "m_x_5_89418": 1180.08,
      "m_x_5_89419": 2398,
      "m_x_5_89420": 1900.61,
      "m_x_5_89421": 1322.53,
      "m_x_5_89422": 1493.94,
      "m_x_5_89423": 1088,
      "m_x_5_89424": 1400.91,
      "m_x_5_89425": 1587.02,
      "m_x_5_89429": 1800.86,
      "m_x_5_89430": 2501,
      "m_x_5_90213": 15.77,
      "m_x_5_35007": 2,
      "m_x_10_151": 1399.99,
      "m_x_10_153": 999.99,
      "m_x_10_159": 999.99,
      "m_x_10_170": 40.5,
      "m_x_10_97": 299.99,
      "m_x_10_98": 299.99,
      "m_x_10_108": 299.99,
      "m_x_5_35771": 594.49,
      "m_x_5_35773": 52.32,
      "m_x_10_134": 395,
      "m_x_10_148": 111,
      "m_x_10_150": 1888.88,
      "m_x_10_114": 599.99,
      "m_x_10_122": 499.99,
      "m_x_10_493": 1100,
      "m_x_5_38927": 4.71,
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
      "m_x_5_31983": 0.64,
      "m_x_5_1830": 18.44,
      "m_x_5_31979": 0.64,
      "m_x_5_31981": 10000,
      "m_x_5_32008": 0.96,
      "m_x_5_32010": 3.57,
      "m_x_5_32011": 10000,
      "m_x_5_31980": 0.64,
      "m_x_5_31982": 0.64,
      "m_x_5_54059": 1.9,
      "m_x_5_6250": 0.74,
      "m_x_5_6251": 1.49,
      "m_x_5_35780": 6.41,
      "m_x_5_3574": 2.13
    },
    "s_douzhuang": {
      "dimai": 77777.76,
      "fengwangjiang": 168.08,
      "shoupijiao": 54,
      "qicaixian": 115,
      "bairanxian": 3.12,
      "fengyu_yi": 970.5,
      "m_m_5_30852": 15.57,
      "m_m_5_30853": 95,
      "m_m_5_30828": 5.78,
      "m_m_5_89165": 10.64,
      "m_m_5_32000": 0.62,
      "guajian_bei": 54.09,
      "baihua_bu": 94,
      "guajian_yao": 69.49,
      "shuran_bu": 98.92,
      "m_m_5_32001": 0.66,
      "shuran_bag": 18,
      "wuseshi": 129.98,
      "m_m_5_30856": 13.36,
      "m_m_5_30855": 152.22,
      "geyin_zhang": 98.06,
      "m_m_5_89298": 32.06,
      "m_m_5_30679": 15.86,
      "m_m_5_30847": 11.8,
      "m_m_5_30846": 1.8,
      "yinsi_duan": 129,
      "m_m_5_30848": 19.15,
      "m_m_5_30850": 134.95,
      "m_m_5_30845": 190.32,
      "m_m_5_31397": 2.03,
      "m_m_5_89435": 5444,
      "m_m_5_31253": 198.37,
      "m_m_5_30844": 0.26,
      "m_m_5_30873": 31.08,
      "m_m_5_90205": 15,
      "m_m_8_614": 300,
      "shanshui_juan": 200.21,
      "m_m_5_3779": 9.99,
      "m_m_8_36148": 855.11,
      "m_m_5_30827": 1.17,
      "m_m_5_89970": 168.99,
      "m_m_5_31985": 0.69,
      "lucai": 16.68,
      "m_m_5_1831": 12.9,
      "m_m_5_31973": 0.6,
      "m_m_5_30849": 5.8,
      "m_m_5_71293": 37.94,
      "m_m_5_30826": 0.4,
      "m_m_5_89171": 10.65,
      "m_m_5_31968": 0.68,
      "m_m_5_71292": 35.14,
      "m_m_5_30824": 0.58,
      "m_m_5_71281": 9,
      "m_m_5_30823": 0.24,
      "m_m_5_31969": 0.69,
      "m_m_5_71277": 35.62,
      "m_m_5_89315": 1240.45,
      "m_m_5_89969": 150.61,
      "m_m_5_89303": 4386.13,
      "m_m_5_89971": 194.62,
      "lushui": 13.37,
      "m_m_5_30875": 1.84,
      "m_m_5_30843": 0.58,
      "m_m_5_30874": 30,
      "m_m_5_30842": 0.48,
      "m_m_5_5270": 0.27,
      "m_m_5_5269": 0.04,
      "m_m_5_31977": 0.67,
      "m_m_5_31013": 170.3,
      "gancao": 1.84,
      "m_m_5_31012": 315.69,
      "m_m_5_89172": 22.49,
      "m_m_5_26057": 3000,
      "m_m_5_89352": 709.33,
      "m_m_5_89350": 718.38,
      "m_m_5_71269": 98.12,
      "m_m_5_89346": 729.69,
      "m_m_5_89167": 10.63,
      "m_m_5_89348": 150.63,
      "m_m_5_71285": 80,
      "jieyuan_dan": 40.51,
      "m_m_5_30836": 0.6,
      "m_m_5_30832": 2.98,
      "m_m_5_30833": 2.31,
      "m_m_5_89324": 70.55,
      "m_m_5_30831": 1.82,
      "m_m_5_89973": 139.92,
      "m_m_5_31996": 0.68,
      "m_m_5_71240": 76.4,
      "m_m_5_31995": 0.67,
      "m_m_5_71266": 48.17,
      "m_m_5_30838": 0.94,
      "shanhu": 3.11,
      "m_m_5_30835": 2.38,
      "m_m_5_89974": 48.1,
      "m_m_5_6648": 3.96,
      "m_m_5_71267": 62.38,
      "m_m_5_90029": 1200,
      "yaoyin": 147,
      "m_m_5_31100": 44.99,
      "shaoyao": 1.67,
      "m_m_5_31102": 0.1,
      "m_m_5_30834": 1.88,
      "m_m_5_89328": 949.43,
      "m_m_5_89340": 78.54,
      "m_m_5_89325": 700.22,
      "m_m_5_71258": 44.27,
      "m_m_5_31999": 0.66,
      "m_m_5_89327": 82.2,
      "m_m_5_89966": 75.45,
      "m_m_5_10176": 3.39,
      "m_m_5_31991": 0.64,
      "m_m_5_89968": 137.41,
      "m_m_5_89376": 280.93,
      "m_m_5_89965": 98.97,
      "m_m_5_89963": 58.35,
      "m_m_5_71192": 15.22,
      "m_m_5_89169": 10.64,
      "m_m_5_31994": 0.69,
      "m_m_5_89962": 75.01,
      "m_m_5_31139": 3899.98,
      "m_m_5_89964": 50,
      "m_m_5_10027": 79.99,
      "m_m_5_89961": 50.26,
      "tiekuang": 2.68,
      "m_m_5_30676": 2.68,
      "m_m_5_30678": 1.43,
      "m_m_5_30674": 2.51,
      "m_m_5_30675": 2.65,
      "m_m_5_89967": 91.01,
      "m_m_5_6246": 0.09,
      "m_m_5_6249": 0.51,
      "m_m_5_32787": 66.99,
      "m_m_5_30841": 3.03,
      "m_m_5_35708": 6.49,
      "m_m_8_636": 300.18,
      "m_m_5_2578": 4.99,
      "muban": 20,
      "muliao": 2.08,
      "m_m_5_35707": 6.46,
      "qiwuling": 20.11,
      "m_m_5_35716": 16.85,
      "m_m_5_35715": 89.1,
      "zhuzi": 1.96,
      "m_m_5_35567": 2.28,
      "m_m_5_35704": 0.67,
      "m_m_5_35714": 24.49,
      "m_m_5_35713": 26,
      "m_m_5_89260": 30000,
      "m_m_10_1779": 859.98,
      "m_m_5_35717": 1.5,
      "m_m_5_52337": 1500,
      "m_m_5_35772": 1415,
      "m_m_5_87917": 394.93,
      "m_m_5_87881": 12222,
      "zasui": 0.28,
      "g_5_30681": 0.6,
      "g_5_30680": 1.08,
      "m_x_5_89353": 860,
      "m_x_5_89305": 3885.83,
      "m_x_5_89349": 870,
      "m_x_5_89351": 940.43,
      "m_x_5_89434": 5000,
      "m_x_5_89438": 5450.51,
      "m_x_5_89441": 4555,
      "m_x_5_89443": 5307.22,
      "m_x_5_89445": 5628.65,
      "m_x_5_89329": 979.38,
      "m_x_5_89335": 1980.05,
      "m_x_5_89331": 705.25,
      "m_x_5_89337": 1300.06,
      "m_x_5_89368": 899.76,
      "m_x_5_89372": 1304.2,
      "m_x_5_89369": 744.49,
      "m_x_5_90436": 67,
      "m_x_5_89379": 4700.56,
      "m_x_5_89380": 6629.66,
      "m_x_5_90437": 66.12,
      "m_x_5_89383": 5346.18,
      "m_x_5_89385": 4050,
      "m_x_5_89386": 6400.13,
      "m_x_5_89388": 5209.29,
      "m_x_5_89389": 5690,
      "m_x_5_89390": 3938.84,
      "m_x_5_89391": 4859.76,
      "m_x_5_89393": 6100.33,
      "m_x_5_89396": 5011.32,
      "m_x_5_20971": 199.97,
      "m_x_10_1281": 279.06,
      "m_x_10_2229": 399.99,
      "m_x_5_89317": 2414.24,
      "m_x_10_2241": 1088.65,
      "m_x_5_89320": 2999,
      "m_x_5_89426": 1899.98,
      "m_x_5_89310": 9995.5,
      "m_x_5_89347": 1209.42,
      "m_x_5_89356": 996,
      "m_x_5_89358": 1190.14,
      "m_x_5_89326": 1294.11,
      "m_x_5_89334": 1989.09,
      "m_x_5_5230": 0.97,
      "m_x_5_31050": 16.66,
      "m_x_5_2304": 12222.01,
      "m_x_5_31051": 788.67,
      "m_x_5_31055": 6.75,
      "m_x_5_2299": 14480,
      "m_x_5_31056": 39.57,
      "m_x_5_2300": 7000.03,
      "m_x_5_31058": 10000,
      "m_x_5_31060": 500.64,
      "m_x_5_71268": 89.99,
      "m_x_5_71270": 79.06,
      "m_x_5_71271": 87.74,
      "m_x_5_71272": 135.8,
      "m_x_5_71273": 139.56,
      "m_x_5_71274": 90.03,
      "m_x_5_71275": 79.96,
      "m_x_5_71276": 33.3,
      "m_x_5_71278": 8.97,
      "m_x_5_71279": 10,
      "m_x_5_71280": 30,
      "m_x_5_3485": 219.35,
      "m_x_5_71282": 7.05,
      "m_x_5_3236": 2000,
      "m_x_5_71284": 80,
      "m_x_5_71286": 80,
      "m_x_5_71287": 80.03,
      "m_x_5_71288": 80.04,
      "m_x_5_71289": 809,
      "m_x_5_71290": 13.99,
      "m_x_5_71294": 794.47,
      "m_x_5_71295": 570.59,
      "m_x_5_71296": 578,
      "m_x_5_71297": 288,
      "m_x_5_71298": 44.17,
      "m_x_5_71299": 1100.24,
      "m_x_5_71300": 8.99,
      "m_x_5_89316": 1436.98,
      "m_x_5_89318": 2008.33,
      "m_x_5_89361": 51,
      "m_x_5_89362": 70,
      "m_x_5_89363": 45.09,
      "m_x_5_89364": 99.99,
      "m_x_5_89365": 172.92,
      "m_x_8_618": 600.28,
      "m_x_8_616": 299,
      "m_x_8_617": 200.11,
      "m_x_8_615": 444.16,
      "m_x_5_3810": 80.04,
      "m_x_5_3811": 60.64,
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
      "m_x_8_31": 7,
      "m_x_8_69": 108.58,
      "m_x_8_70": 221.84,
      "m_x_5_22145": 94.22,
      "m_x_5_22917": 81.05,
      "m_x_5_22981": 128,
      "m_x_5_31252": 224.08,
      "m_x_5_31254": 249,
      "m_x_5_71193": 1496.63,
      "m_x_5_71194": 2643.83,
      "m_x_5_71195": 2337.65,
      "m_x_5_71196": 984.43,
      "m_x_5_71198": 1351.48,
      "m_x_5_71199": 1125.5,
      "m_x_5_71200": 1700.6,
      "m_x_5_71201": 1270.55,
      "m_x_5_71202": 1015.07,
      "m_x_5_71203": 1845.03,
      "m_x_5_71204": 1353.42,
      "m_x_5_71205": 899.04,
      "m_x_5_71206": 1723.4,
      "m_x_5_71207": 1995,
      "m_x_5_71214": 1020.26,
      "m_x_5_71220": 486.84,
      "m_x_5_71221": 537.67,
      "m_x_5_71222": 370.12,
      "m_x_5_71223": 293.7,
      "m_x_5_71224": 285.09,
      "m_x_5_71225": 321.54,
      "m_x_5_71226": 372.28,
      "m_x_5_71227": 293.66,
      "m_x_5_71228": 280.17,
      "m_x_5_71229": 332.4,
      "m_x_5_71231": 294.65,
      "m_x_5_71237": 320.02,
      "m_x_5_71238": 788.17,
      "m_x_5_71239": 365.57,
      "m_x_5_85649": 999,
      "m_x_5_89461": 1220.01,
      "m_x_5_89462": 1099,
      "m_x_5_89463": 998.51,
      "m_x_5_89464": 1047.55,
      "m_x_5_89465": 1779,
      "m_x_5_89466": 899.99,
      "m_x_5_89467": 1009,
      "m_x_5_89468": 1070.39,
      "m_x_5_89469": 1060.99,
      "m_x_5_89470": 1856.85,
      "m_x_5_89472": 2284.3,
      "m_x_5_31099": 44.99,
      "m_x_5_31103": 13.26,
      "m_x_5_31104": 40.65,
      "m_x_5_31105": 135.8,
      "m_x_5_31106": 49.98,
      "m_x_5_31107": 49.97,
      "m_x_5_31108": 98.03,
      "m_x_5_40538": 68.9,
      "m_x_5_71242": 153.73,
      "m_x_5_71243": 126.49,
      "m_x_5_71244": 90,
      "m_x_5_71245": 50.12,
      "m_x_5_71246": 116.78,
      "m_x_5_71247": 123.41,
      "m_x_5_71248": 83.86,
      "m_x_5_71250": 24,
      "m_x_5_71251": 63.85,
      "m_x_5_71252": 20,
      "m_x_5_71254": 44.88,
      "m_x_5_71255": 90.82,
      "m_x_5_71256": 68.54,
      "m_x_5_71259": 150.56,
      "m_x_5_71260": 149.61,
      "m_x_5_71261": 155.9,
      "m_x_5_71262": 80.06,
      "m_x_5_71263": 64.21,
      "m_x_5_71264": 41.31,
      "m_x_5_89341": 90.05,
      "m_x_5_89342": 100.38,
      "m_x_5_89343": 92.99,
      "m_x_5_89344": 190.29,
      "m_x_5_89345": 99.62,
      "m_x_5_2631": 89.59,
      "m_x_8_629": 325.81,
      "m_x_8_631": 588.88,
      "m_x_5_2189": 6.11,
      "m_x_5_5044": 1.94,
      "m_x_5_6076": 0.88,
      "m_x_5_6073": 0.13,
      "m_x_5_6247": 0.97,
      "m_x_5_6248": 0.89,
      "m_x_5_10028": 64.96,
      "m_x_5_31140": 320.1,
      "m_x_5_31141": 376.74,
      "m_x_5_31142": 414,
      "m_x_5_31143": 357,
      "m_x_5_40539": 128.79,
      "m_x_5_71129": 122.16,
      "m_x_5_71130": 118.3,
      "m_x_5_71131": 111,
      "m_x_5_71132": 290.63,
      "m_x_5_71133": 1100.74,
      "m_x_5_71134": 1930,
      "m_x_5_71135": 1599.52,
      "m_x_5_71136": 1089.62,
      "m_x_5_71138": 1585,
      "m_x_5_71139": 2279.5,
      "m_x_5_71140": 1988,
      "m_x_5_71141": 1689.24,
      "m_x_5_71143": 1837,
      "m_x_5_71144": 1662.85,
      "m_x_5_71145": 1067.8,
      "m_x_5_71146": 1800,
      "m_x_5_71147": 1769.87,
      "m_x_5_71148": 1122.96,
      "m_x_5_71149": 1868.64,
      "m_x_5_71150": 1714.97,
      "m_x_5_71151": 1229.74,
      "m_x_5_71152": 2100.13,
      "m_x_5_71164": 422.48,
      "m_x_5_71165": 211.11,
      "m_x_5_71166": 318.23,
      "m_x_5_71168": 300,
      "m_x_5_71169": 277.9,
      "m_x_5_71172": 294.18,
      "m_x_5_71174": 338.66,
      "m_x_5_71175": 898.81,
      "m_x_5_71176": 302.89,
      "m_x_5_71185": 366.72,
      "m_x_5_71186": 249.6,
      "m_x_5_71187": 999.07,
      "m_x_5_71189": 43.33,
      "m_x_5_71190": 48.6,
      "m_x_5_71191": 80.01,
      "m_x_5_54537": 99.64,
      "m_x_5_89415": 1600.71,
      "m_x_5_89416": 1496.58,
      "m_x_5_89417": 1350,
      "m_x_5_89418": 1100.97,
      "m_x_5_89419": 2799.08,
      "m_x_5_89420": 1199.66,
      "m_x_5_89421": 680.88,
      "m_x_5_89422": 1322.06,
      "m_x_5_89423": 1439.16,
      "m_x_5_89425": 1850,
      "m_x_5_89429": 2499.88,
      "m_x_5_90213": 2.99,
      "m_x_5_35004": 1.8,
      "m_x_5_35005": 2.1,
      "m_x_5_35006": 1.88,
      "m_x_5_35007": 1.89,
      "m_x_10_101": 888,
      "m_x_10_104": 888.12,
      "m_x_10_105": 888,
      "m_x_5_35771": 780,
      "m_x_5_35773": 196,
      "m_x_5_35775": 1400.14,
      "m_x_10_133": 145.11,
      "m_x_10_112": 888.99,
      "m_x_10_120": 73,
      "m_x_10_433": 430,
      "m_x_10_434": 1450,
      "m_x_5_38127": 600.31,
      "m_x_5_38373": 3449.89,
      "m_x_5_38374": 2580.21,
      "m_x_5_38927": 4.97,
      "m_x_10_1277": 289.99,
      "m_x_10_1282": 555.94,
      "m_x_10_1283": 290,
      "m_x_10_1284": 555.98,
      "m_x_10_1286": 298.25,
      "m_x_10_1454": 35,
      "m_x_10_1455": 29.26,
      "m_x_10_1457": 50.43,
      "m_x_10_1458": 34.05,
      "m_x_10_1459": 888.89,
      "m_x_10_1460": 888.99,
      "m_x_10_1463": 420,
      "m_x_10_1465": 888.99,
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
      "m_x_5_90212": 500,
      "m_x_5_1830": 20.09,
      "m_x_5_31975": 0.66,
      "m_x_5_1832": 10000,
      "m_x_5_31981": 10000,
      "m_x_5_32010": 1.98,
      "m_x_5_31980": 0.65,
      "m_x_5_34184": 20,
      "m_x_5_35786": 800.8,
      "m_x_5_36491": 2.11,
      "m_x_5_39235": 66,
      "m_x_5_54059": 5,
      "m_x_5_40562": 37.18,
      "m_x_5_6250": 0.8,
      "m_x_5_6251": 2.88,
      "m_x_5_35780": 6.47,
      "m_x_5_2871": 5.75,
      "m_x_5_3573": 0.97,
      "m_x_5_3574": 1.66
    },
    "s_qiankun": {
      "fengwangjiang": 166.33,
      "shoupijiao": 52.1,
      "qicaixian": 119,
      "bairanxian": 3.4,
      "fengyu_yi": 990,
      "m_m_5_30852": 40.21,
      "m_m_5_30853": 90,
      "m_m_5_30828": 6.99,
      "m_m_5_89165": 10.63,
      "guajian_bei": 55.01,
      "baihua_bu": 65.11,
      "guajian_yao": 87.11,
      "shuran_bu": 88.59,
      "m_m_5_32001": 0.67,
      "shuran_bag": 19.8,
      "wuseshi": 128.16,
      "m_m_5_30856": 14.99,
      "m_m_5_30855": 153.64,
      "geyin_zhang": 228.3,
      "m_m_5_89298": 36.11,
      "m_m_5_30679": 19.25,
      "m_m_5_30847": 9.98,
      "m_m_5_30846": 1.83,
      "yinsi_duan": 120.6,
      "m_m_5_32003": 0.7,
      "m_m_5_30848": 24,
      "m_m_5_30850": 125.93,
      "m_m_5_30845": 171.85,
      "m_m_5_31397": 1,
      "m_m_5_89433": 5700,
      "m_m_5_89435": 4900.55,
      "m_m_5_31253": 199,
      "m_m_5_30844": 0.38,
      "m_m_5_35718": 16.18,
      "m_m_5_35719": 32.49,
      "m_m_5_30873": 46.91,
      "m_m_8_614": 399.32,
      "shanshui_juan": 110.2,
      "m_m_5_3779": 6.99,
      "m_m_8_36148": 1097,
      "m_m_5_30827": 1.5,
      "m_m_5_89970": 180.87,
      "m_m_5_32014": 149.96,
      "m_m_5_31978": 0.67,
      "lucai": 17.2,
      "m_m_5_1831": 12.39,
      "m_m_5_31973": 0.78,
      "m_m_5_30849": 6,
      "m_m_5_71293": 37.28,
      "m_m_5_30826": 0.5,
      "m_m_5_30825": 0.03,
      "m_m_5_89171": 10.96,
      "m_m_5_71292": 44.44,
      "m_m_5_30824": 0.46,
      "m_m_5_30823": 0.7,
      "m_m_5_71277": 31,
      "m_m_5_89315": 1509.72,
      "m_m_5_89969": 119,
      "m_m_5_31976": 0.68,
      "m_m_5_89971": 209.99,
      "lushui": 12.83,
      "m_m_5_30875": 2.2,
      "m_m_5_30829": 0.99,
      "m_m_5_30843": 0.66,
      "m_m_5_30874": 37.33,
      "m_m_5_30842": 0.42,
      "m_m_5_5270": 1,
      "m_m_5_5269": 0.1,
      "m_m_5_31977": 0.64,
      "m_m_5_31013": 178.83,
      "gancao": 3.17,
      "m_m_5_31012": 346.86,
      "m_m_5_89172": 22.38,
      "m_m_5_89304": 4464.37,
      "m_m_5_26057": 4490.98,
      "m_m_5_26231": 5,
      "m_m_5_89352": 707.64,
      "m_m_5_89350": 732.66,
      "m_m_5_71269": 179.23,
      "m_m_5_89346": 675.05,
      "m_m_5_89167": 10.74,
      "m_m_5_89348": 140,
      "m_m_5_71285": 95,
      "jieyuan_dan": 19,
      "m_m_5_30836": 1.41,
      "m_m_5_30832": 1.8,
      "m_m_5_30833": 2.27,
      "m_m_5_89324": 66,
      "m_m_5_30831": 2.63,
      "m_m_5_89973": 145.64,
      "m_m_5_71241": 75.25,
      "m_m_5_71240": 139,
      "m_m_5_31995": 0.65,
      "m_m_5_71266": 89.99,
      "m_m_5_30838": 0.8,
      "shanhu": 2.8,
      "m_m_5_6646": 0.88,
      "m_m_5_30835": 4.99,
      "m_m_5_89974": 64.54,
      "m_m_5_6648": 4.8,
      "m_m_5_71267": 69.15,
      "m_m_5_90029": 696.95,
      "m_m_5_89168": 22.38,
      "yaoyin": 153,
      "m_m_5_31100": 90.79,
      "shaoyao": 2.69,
      "m_m_5_31102": 0.14,
      "m_m_5_30834": 1.68,
      "m_m_5_31998": 0.65,
      "m_m_5_89328": 867.25,
      "m_m_5_89332": 497.27,
      "m_m_5_89340": 94,
      "m_m_5_89325": 698.33,
      "m_m_5_71258": 92.2,
      "m_m_5_89327": 58,
      "m_m_5_89966": 60.01,
      "m_m_5_10176": 3.14,
      "m_m_5_31991": 0.67,
      "m_m_5_89377": 444.42,
      "m_m_5_89968": 119.99,
      "m_m_5_31993": 0.69,
      "m_m_5_89376": 345.49,
      "m_m_5_89965": 125.87,
      "m_m_5_31992": 0.7,
      "m_m_5_89963": 60.01,
      "m_m_5_71192": 28,
      "m_m_5_89169": 10.63,
      "m_m_5_31994": 0.69,
      "m_m_5_89962": 64.47,
      "m_m_5_31139": 4200,
      "m_m_5_89964": 65,
      "m_m_5_10027": 69.09,
      "m_m_5_89961": 54.88,
      "tiekuang": 3.19,
      "m_m_5_30676": 2.71,
      "m_m_5_30678": 2,
      "m_m_5_30674": 2.77,
      "m_m_5_30675": 3.7,
      "m_m_5_89967": 100.9,
      "m_m_5_6246": 0.13,
      "m_m_5_6249": 0.44,
      "m_m_5_32787": 24.49,
      "m_m_5_30841": 3.89,
      "m_m_5_10172": 29.11,
      "m_m_5_35708": 6.49,
      "m_m_8_632": 330.68,
      "m_m_8_634": 350,
      "m_m_8_636": 202.9,
      "m_m_5_2578": 8.11,
      "m_m_5_6068": 1.01,
      "muban": 24.38,
      "muliao": 3.53,
      "qiwuling": 24,
      "m_m_5_35716": 8.7,
      "m_m_5_35715": 14.18,
      "zhuzi": 1.72,
      "m_m_5_35567": 2.18,
      "m_m_5_35714": 17.99,
      "m_m_5_35713": 17.95,
      "m_m_10_1779": 700.85,
      "m_m_5_35717": 1.41,
      "m_m_10_2037": 1310.9,
      "m_m_10_164": 59.04,
      "m_m_5_52337": 1192.84,
      "m_m_5_35772": 1960.21,
      "m_m_5_87917": 322.81,
      "m_m_5_87881": 7444.25,
      "zasui": 0.46,
      "g_5_30681": 1,
      "g_5_30680": 1.16,
      "m_x_5_89353": 788.55,
      "m_x_5_89359": 1199,
      "m_x_5_89308": 4998.33,
      "m_x_5_89349": 861.76,
      "m_x_5_89355": 1392.18,
      "m_x_5_89351": 499.94,
      "m_x_5_89357": 1500,
      "m_x_5_89434": 6886,
      "m_x_5_89448": 35545.54,
      "m_x_5_89436": 6666.57,
      "m_x_5_89450": 25700,
      "m_x_5_89438": 4488,
      "m_x_5_89439": 4942.34,
      "m_x_5_89440": 5850.83,
      "m_x_5_89441": 3997.22,
      "m_x_5_89455": 24548.75,
      "m_x_5_89443": 5330.54,
      "m_x_5_89444": 4573.6,
      "m_x_5_89445": 4288.91,
      "m_x_5_89459": 31204.18,
      "m_x_5_89446": 9689.16,
      "m_x_5_89329": 723.88,
      "m_x_5_89335": 1888,
      "m_x_5_89330": 673.93,
      "m_x_5_89336": 2730.38,
      "m_x_5_89331": 728.94,
      "m_x_5_89337": 1104.99,
      "m_x_5_89368": 968.95,
      "m_x_5_89372": 1790.01,
      "m_x_5_89369": 760.01,
      "m_x_5_90436": 70.11,
      "m_x_5_89379": 4000.01,
      "m_x_5_89397": 22995.79,
      "m_x_5_89380": 4888.05,
      "m_x_5_90437": 60.88,
      "m_x_5_89383": 6000.05,
      "m_x_5_89384": 4109,
      "m_x_5_89385": 5800,
      "m_x_5_89386": 4450.9,
      "m_x_5_89388": 4997.29,
      "m_x_5_89389": 4796.24,
      "m_x_5_89390": 4000,
      "m_x_5_89391": 5199,
      "m_x_5_89409": 30000,
      "m_x_5_89392": 3699.8,
      "m_x_5_89393": 6162.45,
      "m_x_5_89411": 25875.55,
      "m_x_5_89394": 4545.26,
      "m_x_5_89395": 12800.32,
      "m_x_5_89396": 4899.64,
      "m_x_10_157": 600.91,
      "m_x_5_20971": 123.43,
      "m_x_5_38122": 884.55,
      "m_x_10_1281": 271.77,
      "m_x_10_2229": 435.06,
      "m_x_5_89317": 2100,
      "m_x_10_2241": 1261.99,
      "m_x_5_89426": 2489.96,
      "m_x_5_89427": 1200.62,
      "m_x_5_89428": 2999,
      "m_x_5_89310": 9978.02,
      "m_x_5_89347": 1176,
      "m_x_5_89356": 899.99,
      "m_x_5_89358": 1150,
      "m_x_5_89326": 1219.11,
      "m_x_5_89334": 1399.29,
      "m_x_5_26232": 0.68,
      "m_x_5_5232": 6.16,
      "m_x_5_5231": 1,
      "m_x_5_5229": 1.28,
      "m_x_5_31050": 13.67,
      "m_x_5_2304": 9000,
      "m_x_5_31051": 1888.88,
      "m_x_5_31055": 10000,
      "m_x_5_2299": 11800.93,
      "m_x_5_2300": 8252.09,
      "m_x_5_31058": 10000,
      "m_x_5_31059": 10000,
      "m_x_5_2305": 2980.56,
      "m_x_5_31060": 100.08,
      "m_x_5_71268": 80.05,
      "m_x_5_71270": 108.35,
      "m_x_5_2302": 1775.55,
      "m_x_5_71271": 80.06,
      "m_x_5_71272": 124.63,
      "m_x_5_71273": 120.83,
      "m_x_5_71274": 116.07,
      "m_x_5_71275": 364.57,
      "m_x_5_71276": 39,
      "m_x_5_71278": 25,
      "m_x_5_71279": 43.67,
      "m_x_5_3505": 1299.38,
      "m_x_5_71280": 42.65,
      "m_x_5_71282": 80.84,
      "m_x_5_3236": 2999.2,
      "m_x_5_71284": 86.98,
      "m_x_5_71286": 80.21,
      "m_x_5_71287": 80.13,
      "m_x_5_71288": 81.62,
      "m_x_5_71289": 24.2,
      "m_x_5_71290": 25.4,
      "m_x_5_71291": 29,
      "m_x_5_71294": 846.89,
      "m_x_5_71295": 539.98,
      "m_x_5_71296": 492,
      "m_x_5_71297": 297.98,
      "m_x_5_71298": 30.97,
      "m_x_5_71299": 456,
      "m_x_5_71300": 8.88,
      "m_x_5_89316": 2079.67,
      "m_x_5_89318": 2494.18,
      "m_x_5_89361": 75.49,
      "m_x_5_89362": 49.77,
      "m_x_5_89363": 77.16,
      "m_x_5_89364": 107.68,
      "m_x_5_89365": 200.06,
      "m_x_8_616": 400,
      "m_x_8_617": 399,
      "m_x_8_615": 449.5,
      "m_x_5_3810": 80.99,
      "m_x_5_3811": 13.1,
      "m_x_8_26": 39.97,
      "m_x_8_21": 1.51,
      "m_x_5_3782": 3.03,
      "m_x_5_3797": 4,
      "m_x_5_2433": 10.99,
      "m_x_8_24": 1.02,
      "m_x_5_2467": 8.4,
      "m_x_8_37": 15.19,
      "m_x_8_38": 6.68,
      "m_x_5_5245": 97,
      "m_x_5_5246": 98.94,
      "m_x_8_31": 4.69,
      "m_x_8_69": 110.27,
      "m_x_8_70": 144,
      "m_x_5_22145": 68.14,
      "m_x_5_22917": 89.99,
      "m_x_5_22981": 132.99,
      "m_x_5_31254": 130,
      "m_x_5_71193": 1000,
      "m_x_5_71194": 1650.15,
      "m_x_5_71195": 1501.58,
      "m_x_5_71196": 1190.07,
      "m_x_5_71198": 1249.68,
      "m_x_5_71199": 1001.95,
      "m_x_5_71201": 1189.51,
      "m_x_5_71202": 880.4,
      "m_x_5_71203": 1798,
      "m_x_5_71204": 1400.89,
      "m_x_5_71205": 700,
      "m_x_5_71206": 1669,
      "m_x_5_71207": 1400,
      "m_x_5_71214": 1099.71,
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
      "m_x_5_71229": 410.63,
      "m_x_5_71230": 420.01,
      "m_x_5_71231": 369.25,
      "m_x_5_71237": 150.29,
      "m_x_5_71239": 655.98,
      "m_x_5_89461": 1480,
      "m_x_5_89462": 1468.86,
      "m_x_5_89463": 1331.81,
      "m_x_5_89464": 795,
      "m_x_5_89465": 2000.79,
      "m_x_5_89466": 936,
      "m_x_5_89467": 1298.98,
      "m_x_5_89468": 1050.86,
      "m_x_5_89469": 1488.47,
      "m_x_5_89470": 1399.67,
      "m_x_5_89471": 2400.99,
      "m_x_5_89472": 2749,
      "m_x_5_89473": 2895.21,
      "m_x_5_90289": 299.99,
      "m_x_5_31099": 9.19,
      "m_x_5_31103": 10.25,
      "m_x_5_31104": 40.92,
      "m_x_5_31105": 88.95,
      "m_x_5_31106": 2.3,
      "m_x_5_31107": 99.43,
      "m_x_5_31108": 130.3,
      "m_x_5_40538": 46.21,
      "m_x_5_71242": 80.71,
      "m_x_5_71243": 185.66,
      "m_x_5_71244": 117.63,
      "m_x_5_71246": 256.14,
      "m_x_5_71247": 122.31,
      "m_x_5_71248": 80.87,
      "m_x_5_71250": 70.98,
      "m_x_5_71251": 79.26,
      "m_x_5_71254": 68.77,
      "m_x_5_71255": 94.46,
      "m_x_5_71256": 65.77,
      "m_x_5_71259": 80.85,
      "m_x_5_71260": 83.66,
      "m_x_5_71261": 133.45,
      "m_x_5_71262": 150.95,
      "m_x_5_71263": 68.58,
      "m_x_5_71264": 100,
      "m_x_5_71265": 52.75,
      "m_x_5_89341": 79,
      "m_x_5_89342": 80.87,
      "m_x_5_89343": 66.91,
      "m_x_5_89344": 135.13,
      "m_x_5_89345": 83,
      "m_x_5_89724": 380,
      "m_x_5_2589": 8.8,
      "m_x_5_2631": 28.8,
      "m_x_8_630": 500.71,
      "m_x_8_631": 599.99,
      "m_x_5_2189": 8.59,
      "m_x_5_2594": 10000,
      "m_x_5_2603": 9.62,
      "m_x_8_633": 299.99,
      "m_x_8_635": 399,
      "m_x_8_17545": 500.6,
      "m_x_8_17547": 1999,
      "m_x_5_6247": 0.8,
      "m_x_5_6248": 0.7,
      "m_x_5_10028": 95,
      "m_x_5_31140": 100.7,
      "m_x_5_31141": 100,
      "m_x_5_31142": 257,
      "m_x_5_31143": 100.1,
      "m_x_5_40539": 163.96,
      "m_x_5_71129": 113.51,
      "m_x_5_71130": 109.9,
      "m_x_5_71131": 121.45,
      "m_x_5_71132": 258.63,
      "m_x_5_71133": 880.35,
      "m_x_5_71134": 1700.09,
      "m_x_5_71135": 1699.87,
      "m_x_5_71136": 800,
      "m_x_5_71138": 1524.56,
      "m_x_5_71139": 1498.63,
      "m_x_5_71140": 1750.54,
      "m_x_5_71141": 1750.01,
      "m_x_5_71142": 1292.05,
      "m_x_5_71143": 1789.18,
      "m_x_5_71144": 1750,
      "m_x_5_71145": 992.97,
      "m_x_5_71146": 1858,
      "m_x_5_71147": 1899.11,
      "m_x_5_71148": 996.94,
      "m_x_5_71149": 1780,
      "m_x_5_71150": 1325.24,
      "m_x_5_71151": 996,
      "m_x_5_71152": 2132.21,
      "m_x_5_71153": 1459.41,
      "m_x_5_71159": 1750.53,
      "m_x_5_71160": 999.99,
      "m_x_5_71161": 207.27,
      "m_x_5_71162": 698.96,
      "m_x_5_71164": 390,
      "m_x_5_71166": 300.2,
      "m_x_5_71167": 439.12,
      "m_x_5_71168": 320.77,
      "m_x_5_71169": 245,
      "m_x_5_71170": 600.67,
      "m_x_5_71171": 694.05,
      "m_x_5_71172": 480.92,
      "m_x_5_71173": 549.47,
      "m_x_5_71174": 385.55,
      "m_x_5_71175": 420.01,
      "m_x_5_71176": 380.02,
      "m_x_5_71182": 250,
      "m_x_5_71184": 333.33,
      "m_x_5_71185": 320,
      "m_x_5_71186": 280.01,
      "m_x_5_71187": 339.63,
      "m_x_5_71189": 33.01,
      "m_x_5_71190": 46.36,
      "m_x_5_71191": 80.25,
      "m_x_5_54537": 37.97,
      "m_x_5_89415": 1333.5,
      "m_x_5_89416": 1287.76,
      "m_x_5_89417": 1188.13,
      "m_x_5_89418": 2395.56,
      "m_x_5_89419": 2000.56,
      "m_x_5_89420": 994,
      "m_x_5_89421": 758.95,
      "m_x_5_89422": 849,
      "m_x_5_89423": 898.99,
      "m_x_5_89424": 1998,
      "m_x_5_89425": 1054.1,
      "m_x_5_89429": 1500.39,
      "m_x_5_89430": 1954.71,
      "m_x_5_90213": 57.47,
      "m_x_5_35004": 3.18,
      "m_x_5_35005": 2.39,
      "m_x_5_35006": 3.26,
      "m_x_5_35007": 1.41,
      "m_x_10_155": 1198.04,
      "m_x_10_163": 94,
      "m_x_10_170": 200.93,
      "m_x_10_98": 91.01,
      "m_x_10_105": 94,
      "m_x_10_107": 82,
      "m_x_5_35771": 649.87,
      "m_x_5_35773": 394.21,
      "m_x_5_35774": 535.95,
      "m_x_5_35775": 300,
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
      "m_x_10_447": 1247.02,
      "m_x_10_450": 1649,
      "m_x_10_479": 3891,
      "m_x_5_38127": 1000,
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
      "m_x_10_1283": 246.71,
      "m_x_10_1284": 270.72,
      "m_x_10_1285": 271.75,
      "m_x_10_1286": 270.05,
      "m_x_10_1454": 31.39,
      "m_x_10_1456": 75.71,
      "m_x_10_1457": 120,
      "m_x_10_2097": 380,
      "m_x_10_2098": 379.73,
      "m_x_10_2099": 380,
      "m_x_10_2100": 380,
      "m_x_10_2101": 211.97,
      "m_x_10_2102": 211.96,
      "m_x_10_2106": 211.97,
      "m_x_10_2107": 211.97,
      "m_x_10_2230": 514,
      "m_x_10_2231": 430.64,
      "m_x_10_2232": 100.09,
      "m_x_10_1780": 640.17,
      "m_x_10_2233": 100.53,
      "m_x_10_2234": 339.22,
      "m_x_10_2235": 350.68,
      "m_x_10_2236": 299.3,
      "m_x_10_2237": 359.99,
      "m_x_10_2238": 255.33,
      "m_x_10_2242": 1258.01,
      "m_x_10_2243": 1159.9,
      "m_x_10_2244": 1158.71,
      "m_x_5_87875": 551.12,
      "m_x_5_87874": 510.66,
      "m_x_5_87873": 588.88,
      "m_x_5_87872": 488.88,
      "m_x_5_87871": 554,
      "m_x_5_87870": 306.24,
      "m_x_5_87869": 488.88,
      "m_x_5_87863": 688.88,
      "m_x_5_87804": 443.54,
      "m_x_5_1830": 20.2,
      "m_x_5_31975": 0.65,
      "m_x_5_1832": 15.97,
      "m_x_5_31979": 0.66,
      "m_x_5_31981": 10000,
      "m_x_5_32007": 10000,
      "m_x_5_32010": 2,
      "m_x_5_32011": 10000,
      "m_x_5_31982": 0.65,
      "m_x_5_34184": 1.37,
      "m_x_5_35786": 4,
      "m_x_5_36491": 1.07,
      "m_x_5_41556": 10.89,
      "m_x_5_44402": 1.7,
      "m_x_5_47758": 11,
      "m_x_5_54059": 0.74,
      "m_x_5_81662": 0.8,
      "m_x_5_40562": 100,
      "m_x_5_35780": 6.36,
      "m_x_5_2871": 5.57,
      "m_x_5_3843": 5.55,
      "m_x_5_3574": 1.83
    },
    "s_weiwo": {
      "fengwangjiang": 173.37,
      "shoupijiao": 64.86,
      "qicaixian": 125.46,
      "bairanxian": 3,
      "fengyu_yi": 1107.06,
      "m_m_5_30852": 16.98,
      "m_m_5_30853": 90.98,
      "m_m_5_30828": 5,
      "m_m_5_89165": 10.62,
      "guajian_bei": 55.87,
      "baihua_bu": 61.18,
      "guajian_yao": 78.12,
      "shuran_bu": 75.7,
      "shuran_bag": 24.37,
      "jinfeng_bag": 7500,
      "wuseshi": 137.99,
      "m_m_5_30856": 16.67,
      "m_m_5_30855": 158.13,
      "geyin_zhang": 172.98,
      "m_m_5_89298": 39.22,
      "m_m_5_30679": 19.05,
      "m_m_5_30847": 11,
      "m_m_5_30846": 2.77,
      "yinsi_duan": 105,
      "m_m_5_32003": 0.7,
      "m_m_5_30848": 19.76,
      "m_m_5_32002": 0.62,
      "m_m_5_30850": 154.11,
      "m_m_5_30845": 191.45,
      "m_m_5_31397": 5,
      "m_m_5_89435": 4900,
      "m_m_5_31253": 188.4,
      "tongpao_fan": 3000,
      "m_m_5_30844": 0.31,
      "m_m_5_90210": 1986,
      "m_m_5_35718": 16,
      "m_m_5_35719": 32.29,
      "m_m_5_30873": 40.25,
      "m_m_5_90205": 79.87,
      "shanshui_juan": 210.78,
      "m_m_5_3819": 99.93,
      "m_m_8_36148": 1199.89,
      "m_m_5_89474": 3000.88,
      "m_m_5_30827": 1.24,
      "m_m_5_89970": 172.04,
      "m_m_5_32014": 149.99,
      "m_m_5_31978": 0.66,
      "m_m_5_31985": 0.69,
      "lucai": 18.2,
      "m_m_5_1831": 15.99,
      "m_m_5_30849": 6,
      "m_m_5_71293": 40.3,
      "m_m_5_30826": 0.89,
      "m_m_5_30825": 0.01,
      "m_m_5_89171": 10.75,
      "m_m_5_31974": 0.69,
      "m_m_5_31968": 0.59,
      "m_m_5_71292": 25.79,
      "m_m_5_30824": 0.21,
      "m_m_5_31967": 0.57,
      "m_m_5_71281": 75,
      "m_m_5_30823": 0.24,
      "m_m_5_31969": 0.66,
      "m_m_5_71277": 30.5,
      "m_m_5_89315": 1199.01,
      "m_m_5_89969": 137.97,
      "m_m_5_31976": 3.05,
      "m_m_5_89303": 4000,
      "m_m_5_89971": 204.57,
      "lushui": 14.95,
      "m_m_5_30875": 1.93,
      "m_m_5_30829": 0.66,
      "m_m_5_30843": 0.55,
      "m_m_5_30874": 30,
      "m_m_5_30842": 0.44,
      "m_m_5_5270": 0.9,
      "m_m_5_31977": 0.66,
      "m_m_5_31013": 188.08,
      "gancao": 3.42,
      "m_m_5_31012": 350.19,
      "m_m_5_90034": 2666,
      "m_m_5_89172": 22.29,
      "m_m_5_26057": 3000.7,
      "m_m_5_26231": 1.32,
      "m_m_5_89352": 620.12,
      "m_m_5_89350": 646.9,
      "m_m_5_71269": 129.26,
      "m_m_5_89346": 672.9,
      "m_m_5_89167": 10.63,
      "m_m_5_89348": 168.68,
      "m_m_5_71285": 99.49,
      "jieyuan_dan": 9.28,
      "m_m_5_30836": 1.88,
      "m_m_5_30832": 2.05,
      "m_m_5_30833": 2.4,
      "m_m_5_89324": 96,
      "m_m_5_30831": 3.16,
      "m_m_5_89973": 148.49,
      "m_m_5_31996": 0.66,
      "m_m_5_71241": 70.85,
      "m_m_5_71240": 200.72,
      "m_m_5_31995": 0.66,
      "m_m_5_71266": 49,
      "m_m_5_30838": 0.89,
      "shanhu": 3.45,
      "m_m_5_6646": 0.64,
      "m_m_5_89333": 400,
      "m_m_5_30835": 3.43,
      "m_m_5_89974": 79.38,
      "m_m_5_6648": 1.82,
      "m_m_5_71267": 55.59,
      "m_m_5_90029": 470,
      "m_m_5_89168": 20,
      "yaoyin": 159,
      "m_m_5_31100": 48.97,
      "shaoyao": 4.37,
      "m_m_5_31102": 0.21,
      "m_m_5_30834": 2.19,
      "m_m_5_31998": 0.66,
      "m_m_5_90035": 3890.38,
      "m_m_5_89332": 834.46,
      "m_m_5_89340": 81.11,
      "m_m_5_89325": 709.78,
      "m_m_5_71258": 100.23,
      "m_m_5_89327": 82.88,
      "m_m_5_89966": 88.01,
      "m_m_5_31991": 0.55,
      "m_m_5_89377": 485,
      "m_m_5_89968": 100.79,
      "m_m_5_31993": 0.75,
      "m_m_5_89376": 506.66,
      "m_m_5_89965": 110.87,
      "m_m_5_31992": 0.65,
      "m_m_5_89375": 550.92,
      "m_m_5_89963": 55.43,
      "m_m_5_71192": 188.02,
      "m_m_5_89169": 10.63,
      "m_m_5_31994": 0.66,
      "m_m_5_89962": 71.11,
      "m_m_5_31139": 3950.82,
      "m_m_5_89964": 54.99,
      "m_m_5_10027": 70.5,
      "m_m_5_89961": 74.96,
      "tiekuang": 3.07,
      "m_m_5_30676": 2.01,
      "m_m_5_30678": 1.71,
      "m_m_5_30674": 3.16,
      "m_m_5_30675": 3.79,
      "m_m_5_89967": 90,
      "m_m_5_89367": 1026.62,
      "m_m_5_6246": 0.06,
      "m_m_5_6249": 0.24,
      "m_m_5_32787": 2.91,
      "m_m_8_25762": 3.9,
      "m_m_5_30841": 3.02,
      "m_m_5_35708": 6.58,
      "m_m_8_632": 255.41,
      "m_m_8_634": 150.91,
      "m_m_8_636": 1599.99,
      "m_m_5_90257": 290.29,
      "m_m_5_6068": 0.19,
      "muban": 22.29,
      "muliao": 3,
      "m_m_5_35707": 6.88,
      "m_m_5_35703": 0.63,
      "qiwuling": 27.43,
      "m_m_5_35716": 16.39,
      "m_m_5_35715": 19.97,
      "zhuzi": 2.36,
      "m_m_5_35567": 1.77,
      "m_m_5_35704": 0.63,
      "m_m_5_35714": 24,
      "m_m_5_35701": 0.64,
      "m_m_5_35713": 29.88,
      "m_m_10_948": 248.49,
      "m_m_5_89260": 23456,
      "m_m_10_1779": 743.56,
      "m_m_10_1880": 2191.37,
      "m_m_10_2034": 2697.73,
      "m_m_10_93": 40,
      "m_m_10_1882": 1300,
      "m_m_5_35717": 1.98,
      "m_m_10_2037": 1256.38,
      "m_m_10_164": 57.64,
      "m_m_5_52337": 1679.72,
      "m_m_5_35772": 2024.86,
      "m_m_5_87917": 262.9,
      "m_m_5_87881": 9999.66,
      "zasui": 0.8,
      "g_5_30681": 0.66,
      "g_5_30680": 0.69,
      "m_x_5_89353": 486.22,
      "m_x_5_89308": 4981.04,
      "m_x_5_89349": 420.3,
      "m_x_5_89355": 1291,
      "m_x_5_89357": 1666.26,
      "m_x_5_89434": 3000,
      "m_x_5_89448": 30008.37,
      "m_x_5_89436": 4755.9,
      "m_x_5_89438": 4500.76,
      "m_x_5_89452": 26666.44,
      "m_x_5_89439": 4000,
      "m_x_5_89440": 4000,
      "m_x_5_89454": 10000,
      "m_x_5_89441": 3860.59,
      "m_x_5_89443": 4800,
      "m_x_5_89458": 50000,
      "m_x_5_89445": 4000,
      "m_x_5_89459": 26666.23,
      "m_x_5_89329": 670.84,
      "m_x_5_89335": 1488.14,
      "m_x_5_89330": 858.21,
      "m_x_5_89336": 1075,
      "m_x_5_89331": 710.41,
      "m_x_5_89337": 1048.89,
      "m_x_5_89368": 820.01,
      "m_x_5_89372": 1388.11,
      "m_x_5_89369": 900.13,
      "m_x_5_89373": 2200.2,
      "m_x_5_90436": 65,
      "m_x_5_89379": 3777.91,
      "m_x_5_89397": 29989.43,
      "m_x_5_89380": 5488.42,
      "m_x_5_90437": 44.06,
      "m_x_5_89383": 7664.08,
      "m_x_5_89384": 5190,
      "m_x_5_89385": 6808,
      "m_x_5_89386": 5990.39,
      "m_x_5_89388": 5098.42,
      "m_x_5_89389": 5565.49,
      "m_x_5_89390": 6652.48,
      "m_x_5_89408": 23449.71,
      "m_x_5_89391": 3786.66,
      "m_x_5_89392": 4500,
      "m_x_5_89393": 6300,
      "m_x_5_89394": 5899.09,
      "m_x_5_89412": 30000,
      "m_x_5_89395": 7000,
      "m_x_5_89413": 59000,
      "m_x_5_89396": 3900.5,
      "m_x_5_20971": 40,
      "m_x_10_1281": 499.99,
      "m_x_10_1894": 100,
      "m_x_10_2229": 1000.97,
      "m_x_5_89317": 800,
      "m_x_10_2028": 689.48,
      "m_x_10_2241": 1099.7,
      "m_x_5_89426": 2000.12,
      "m_x_5_89427": 2209.93,
      "m_x_5_89428": 2123.78,
      "m_x_5_89310": 7777.77,
      "m_x_5_89347": 989.3,
      "m_x_5_89356": 899.37,
      "m_x_5_89358": 1190,
      "m_x_5_89326": 989.91,
      "m_x_5_89334": 1465.24,
      "m_x_5_89371": 2300.43,
      "m_x_5_26232": 1,
      "m_x_5_5231": 1.11,
      "m_x_5_5230": 1.15,
      "m_x_5_5229": 1.55,
      "m_x_5_31050": 28,
      "m_x_5_2304": 9999,
      "m_x_5_31051": 198,
      "m_x_5_31052": 474.94,
      "m_x_5_31053": 240,
      "m_x_5_31055": 10000,
      "m_x_5_2299": 13599.3,
      "m_x_5_31056": 10000,
      "m_x_5_31058": 10000,
      "m_x_5_2305": 9999.6,
      "m_x_5_31060": 150,
      "m_x_5_71268": 91.09,
      "m_x_5_71270": 112.53,
      "m_x_5_2302": 1194.4,
      "m_x_5_71271": 121.6,
      "m_x_5_71272": 131.04,
      "m_x_5_71273": 110.23,
      "m_x_5_71274": 113.3,
      "m_x_5_71276": 41,
      "m_x_5_71278": 20.88,
      "m_x_5_71279": 19,
      "m_x_5_3505": 2500.61,
      "m_x_5_71280": 39.31,
      "m_x_5_3485": 233.71,
      "m_x_5_71282": 50,
      "m_x_5_3236": 6099.39,
      "m_x_5_71283": 55.07,
      "m_x_5_2292": 2100.08,
      "m_x_5_71284": 80.16,
      "m_x_5_71286": 80,
      "m_x_5_71287": 106.24,
      "m_x_5_71288": 89.34,
      "m_x_5_71289": 70,
      "m_x_5_71290": 32.92,
      "m_x_5_71291": 28.73,
      "m_x_5_71294": 515,
      "m_x_5_71295": 466.59,
      "m_x_5_71296": 647.99,
      "m_x_5_71297": 132.52,
      "m_x_5_71298": 39.71,
      "m_x_5_71299": 244,
      "m_x_5_71300": 18,
      "m_x_5_89316": 2188.6,
      "m_x_5_89318": 2298,
      "m_x_5_89361": 58.55,
      "m_x_5_89362": 48,
      "m_x_5_89363": 56.01,
      "m_x_5_89364": 92.85,
      "m_x_5_89365": 284.55,
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
      "m_x_8_622": 1599.99,
      "m_x_8_22": 19.99,
      "m_x_8_23": 22.21,
      "m_x_8_24": 0.99,
      "m_x_8_626": 449.63,
      "m_x_8_627": 1599.99,
      "m_x_5_2467": 15.79,
      "m_x_8_37": 15.05,
      "m_x_8_38": 19.6,
      "m_x_5_5245": 45.95,
      "m_x_5_5246": 80,
      "m_x_8_31": 13.8,
      "m_x_8_69": 119.89,
      "m_x_8_70": 200,
      "m_x_5_22145": 75.96,
      "m_x_5_22917": 99,
      "m_x_5_22981": 130,
      "m_x_5_31252": 280.77,
      "m_x_5_31254": 188.1,
      "m_x_5_71193": 999,
      "m_x_5_71194": 1780.04,
      "m_x_5_71195": 1718.97,
      "m_x_5_71196": 995.91,
      "m_x_5_71198": 1199.98,
      "m_x_5_71199": 1114,
      "m_x_5_71200": 1599,
      "m_x_5_71201": 1300.36,
      "m_x_5_71202": 900.49,
      "m_x_5_71203": 1840.95,
      "m_x_5_71204": 1298.3,
      "m_x_5_71205": 950,
      "m_x_5_71206": 1748.7,
      "m_x_5_71207": 1755.23,
      "m_x_5_71209": 1964.15,
      "m_x_5_71210": 2500,
      "m_x_5_71212": 2050.77,
      "m_x_5_71214": 980.67,
      "m_x_5_71215": 1980.53,
      "m_x_5_71216": 300.81,
      "m_x_5_71217": 495.84,
      "m_x_5_71218": 608.99,
      "m_x_5_71219": 533.8,
      "m_x_5_71221": 435.54,
      "m_x_5_71222": 435.4,
      "m_x_5_71223": 425.69,
      "m_x_5_71224": 315.14,
      "m_x_5_71225": 435.57,
      "m_x_5_71226": 430.57,
      "m_x_5_71227": 405.11,
      "m_x_5_71228": 710.04,
      "m_x_5_71229": 350.11,
      "m_x_5_71230": 580.52,
      "m_x_5_71231": 500.28,
      "m_x_5_71232": 412.58,
      "m_x_5_71237": 335.04,
      "m_x_5_71238": 655.6,
      "m_x_5_71239": 650.44,
      "m_x_5_89461": 1908.33,
      "m_x_5_89462": 1889.42,
      "m_x_5_89463": 1183.58,
      "m_x_5_89464": 1649.34,
      "m_x_5_89465": 1500.09,
      "m_x_5_89466": 914.98,
      "m_x_5_89467": 1888.2,
      "m_x_5_89468": 2040.43,
      "m_x_5_89469": 1250.18,
      "m_x_5_89470": 1689.13,
      "m_x_5_89471": 2070.97,
      "m_x_5_89472": 1800.4,
      "m_x_5_89473": 11009.88,
      "m_x_5_90289": 750,
      "m_x_5_31099": 58.99,
      "m_x_5_31103": 19.47,
      "m_x_5_31104": 22.5,
      "m_x_5_31105": 186.99,
      "m_x_5_31106": 48.84,
      "m_x_5_31107": 152,
      "m_x_5_31108": 99.68,
      "m_x_5_40538": 28.49,
      "m_x_5_71242": 129.13,
      "m_x_5_71243": 132.24,
      "m_x_5_71244": 339.99,
      "m_x_5_71245": 91.87,
      "m_x_5_71246": 159.06,
      "m_x_5_71247": 119.73,
      "m_x_5_71248": 171.93,
      "m_x_5_71250": 66.11,
      "m_x_5_71251": 98,
      "m_x_5_71252": 43.88,
      "m_x_5_71254": 87.75,
      "m_x_5_71255": 69.67,
      "m_x_5_71256": 78.95,
      "m_x_5_71259": 104.91,
      "m_x_5_71260": 135.54,
      "m_x_5_71261": 132.92,
      "m_x_5_71262": 105.11,
      "m_x_5_71263": 598,
      "m_x_5_71264": 50.54,
      "m_x_5_71265": 32.78,
      "m_x_5_89341": 73,
      "m_x_5_89342": 67.59,
      "m_x_5_89343": 83.09,
      "m_x_5_89344": 140.4,
      "m_x_5_89345": 79.06,
      "m_x_5_89724": 320.99,
      "m_x_5_2589": 109,
      "m_x_5_2631": 49.37,
      "m_x_8_629": 119.99,
      "m_x_8_630": 300.99,
      "m_x_5_2189": 13.99,
      "m_x_5_2594": 102,
      "m_x_8_633": 399.99,
      "m_x_8_635": 1599.99,
      "m_x_8_17544": 1093.91,
      "m_x_5_5044": 12.9,
      "m_x_8_17547": 1099.99,
      "m_x_8_17548": 1099.99,
      "m_x_8_17549": 619.17,
      "m_x_5_6024": 1.8,
      "m_x_5_6069": 0.13,
      "m_x_5_6070": 0.15,
      "m_x_5_6247": 1.2,
      "m_x_5_6248": 0.99,
      "m_x_5_10028": 95.39,
      "m_x_5_31141": 140.09,
      "m_x_5_31142": 297,
      "m_x_5_31143": 9,
      "m_x_5_40539": 64.22,
      "m_x_5_71129": 106.4,
      "m_x_5_71130": 108.56,
      "m_x_5_71131": 107.87,
      "m_x_5_71132": 1000.5,
      "m_x_5_71133": 949,
      "m_x_5_71134": 2000.07,
      "m_x_5_71135": 1800.25,
      "m_x_5_71136": 1097,
      "m_x_5_71137": 2491.2,
      "m_x_5_71138": 1557,
      "m_x_5_71139": 1500,
      "m_x_5_71140": 1930.21,
      "m_x_5_71141": 1599,
      "m_x_5_71143": 1880.94,
      "m_x_5_71144": 1786.79,
      "m_x_5_71145": 1149.53,
      "m_x_5_71146": 1945,
      "m_x_5_71147": 1818,
      "m_x_5_71148": 1220.56,
      "m_x_5_71149": 2080.69,
      "m_x_5_71150": 1450.03,
      "m_x_5_71151": 1214.28,
      "m_x_5_71152": 2310,
      "m_x_5_71153": 1619.91,
      "m_x_5_71157": 2282.22,
      "m_x_5_71160": 954,
      "m_x_5_71161": 622.18,
      "m_x_5_71162": 668.7,
      "m_x_5_71164": 425.86,
      "m_x_5_71165": 300.01,
      "m_x_5_71166": 280.08,
      "m_x_5_71167": 420.75,
      "m_x_5_71168": 355.8,
      "m_x_5_71169": 260.49,
      "m_x_5_71170": 450.63,
      "m_x_5_71171": 415.65,
      "m_x_5_71172": 370,
      "m_x_5_71173": 458.06,
      "m_x_5_71174": 350.7,
      "m_x_5_71175": 538.13,
      "m_x_5_71176": 330.76,
      "m_x_5_71182": 421.42,
      "m_x_5_71184": 320.66,
      "m_x_5_71185": 375.84,
      "m_x_5_71186": 395.76,
      "m_x_5_71187": 257,
      "m_x_5_71189": 55.37,
      "m_x_5_71190": 55.3,
      "m_x_5_71191": 99.32,
      "m_x_5_54537": 143.51,
      "m_x_5_81656": 666,
      "m_x_5_89415": 1299.5,
      "m_x_5_89416": 1558.17,
      "m_x_5_89417": 1250.48,
      "m_x_5_89418": 1000,
      "m_x_5_89419": 1300,
      "m_x_5_89420": 1444,
      "m_x_5_89421": 800.12,
      "m_x_5_89422": 1145,
      "m_x_5_89423": 1200,
      "m_x_5_89424": 1368.6,
      "m_x_5_89425": 1999.89,
      "m_x_5_89429": 2180.78,
      "m_x_5_89430": 2000.61,
      "m_x_5_89431": 1300.47,
      "m_x_5_90213": 45.78,
      "m_x_10_172": 3399.99,
      "m_x_5_35004": 2.07,
      "m_x_5_35005": 2.58,
      "m_x_5_35006": 10.99,
      "m_x_5_35007": 10.99,
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
      "m_x_10_97": 49.55,
      "m_x_10_104": 48.18,
      "m_x_10_107": 60,
      "m_x_10_108": 114.29,
      "m_x_5_35771": 778.7,
      "m_x_5_35773": 300,
      "m_x_5_35774": 400,
      "m_x_5_35775": 400,
      "m_x_10_133": 200,
      "m_x_10_134": 200,
      "m_x_10_135": 1086.88,
      "m_x_10_114": 221.59,
      "m_x_10_120": 90,
      "m_x_10_122": 232.03,
      "m_x_10_124": 1298.64,
      "m_x_10_128": 1871.43,
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
      "m_x_10_471": 2692.76,
      "m_x_10_478": 4599,
      "m_x_10_479": 9999.99,
      "m_x_10_490": 2193.71,
      "m_x_10_492": 2193.7,
      "m_x_10_493": 2693.65,
      "m_x_10_504": 2693.4,
      "m_x_5_38127": 1098.2,
      "m_x_5_38373": 1650.76,
      "m_x_5_38374": 1399.32,
      "m_x_5_38927": 7.31,
      "m_x_10_671": 641.06,
      "m_x_10_672": 2184.33,
      "m_x_10_673": 480,
      "m_x_10_674": 1268.13,
      "m_x_10_675": 500,
      "m_x_10_677": 2691.7,
      "m_x_10_678": 848.11,
      "m_x_10_679": 850,
      "m_x_10_680": 1180,
      "m_x_10_682": 1170,
      "m_x_10_683": 448.51,
      "m_x_10_686": 889.81,
      "m_x_10_957": 699,
      "m_x_10_1083": 750,
      "m_x_10_1085": 399,
      "m_x_10_1090": 330,
      "m_x_10_1277": 300,
      "m_x_10_1278": 300,
      "m_x_10_1279": 300,
      "m_x_10_1280": 300,
      "m_x_10_688": 890,
      "m_x_10_943": 729.65,
      "m_x_10_944": 500,
      "m_x_10_945": 840,
      "m_x_10_946": 500,
      "m_x_10_947": 849.65,
      "m_x_10_949": 397.55,
      "m_x_10_950": 499,
      "m_x_10_951": 399.78,
      "m_x_10_952": 3196.43,
      "m_x_10_953": 1258.53,
      "m_x_10_954": 1149.65,
      "m_x_10_955": 690,
      "m_x_10_956": 597.64,
      "m_x_10_1570": 380,
      "m_x_10_1571": 879.65,
      "m_x_10_1572": 879.65,
      "m_x_10_1573": 290,
      "m_x_10_1574": 289.65,
      "m_x_10_1575": 400,
      "m_x_10_1577": 400,
      "m_x_10_1578": 400,
      "m_x_10_1587": 399,
      "m_x_10_1607": 2698.05,
      "m_x_10_1772": 2990.34,
      "m_x_10_1773": 2990.27,
      "m_x_10_1775": 1900,
      "m_x_10_1776": 1900,
      "m_x_10_1777": 1900,
      "m_x_10_1282": 499.99,
      "m_x_10_1283": 499.99,
      "m_x_10_1284": 499.99,
      "m_x_10_1285": 499.99,
      "m_x_10_1286": 499.99,
      "m_x_10_1453": 399,
      "m_x_10_1454": 35,
      "m_x_10_1455": 29.61,
      "m_x_10_1456": 49,
      "m_x_10_1457": 120,
      "m_x_10_1458": 49,
      "m_x_10_1459": 500,
      "m_x_10_1460": 500,
      "m_x_10_1461": 600,
      "m_x_10_1462": 555.19,
      "m_x_10_1463": 430,
      "m_x_10_1464": 699.99,
      "m_x_10_2036": 1256.22,
      "m_x_10_2097": 440,
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
      "m_x_10_1780": 639.65,
      "m_x_10_1879": 380,
      "m_x_10_1895": 100,
      "m_x_10_1896": 97.99,
      "m_x_10_1897": 99,
      "m_x_10_1898": 94.64,
      "m_x_10_1881": 898.95,
      "m_x_10_2029": 690,
      "m_x_10_2030": 690,
      "m_x_10_2031": 690,
      "m_x_10_2032": 430,
      "m_x_10_2033": 428.56,
      "m_x_10_2035": 1154.61,
      "m_x_10_2233": 1000.4,
      "m_x_10_2234": 1000.84,
      "m_x_10_2235": 1000,
      "m_x_10_2236": 1000.71,
      "m_x_10_2237": 1000.11,
      "m_x_10_2238": 1000.96,
      "m_x_10_2242": 1099.7,
      "m_x_10_2243": 1997.88,
      "m_x_10_2244": 1099.95,
      "m_x_5_87875": 296,
      "m_x_5_87874": 500,
      "m_x_5_87873": 300.32,
      "m_x_5_87872": 289.99,
      "m_x_5_87871": 399.01,
      "m_x_5_87870": 330.94,
      "m_x_5_87869": 299,
      "m_x_5_87868": 350,
      "m_x_5_87867": 299.32,
      "m_x_5_87866": 299,
      "m_x_5_87865": 299,
      "m_x_5_87864": 299.97,
      "m_x_5_87863": 300.96,
      "m_x_5_87862": 289.99,
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
      "m_x_5_87848": 310.98,
      "m_x_5_87847": 380,
      "m_x_5_87846": 400,
      "m_x_5_87845": 370,
      "m_x_5_87844": 600,
      "m_x_5_87839": 530.99,
      "m_x_5_87838": 480,
      "m_x_5_87837": 520,
      "m_x_5_87836": 540.99,
      "m_x_5_87835": 600,
      "m_x_5_87834": 400,
      "m_x_5_87833": 570,
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
      "m_x_5_87810": 360,
      "m_x_5_87809": 369.99,
      "m_x_5_87807": 370.99,
      "m_x_5_87806": 400.99,
      "m_x_5_87804": 370,
      "m_x_5_90212": 400,
      "m_x_5_31983": 0.59,
      "m_x_5_1830": 10.66,
      "m_x_5_31975": 0.64,
      "m_x_5_1832": 10000,
      "m_x_5_31979": 0.63,
      "m_x_5_31981": 0.4,
      "m_x_5_31971": 0.66,
      "m_x_5_32007": 0.63,
      "m_x_5_32008": 1.61,
      "m_x_5_32010": 3,
      "m_x_5_32011": 0.63,
      "m_x_5_31982": 0.66,
      "m_x_5_34184": 1.02,
      "m_x_5_35786": 99.88,
      "m_x_5_36491": 3.23,
      "m_x_5_39235": 1.04,
      "m_x_5_41556": 0.87,
      "m_x_5_54059": 1,
      "m_x_5_78164": 2,
      "m_x_5_40562": 10000,
      "m_x_5_6250": 0.66,
      "m_x_5_6251": 1.29,
      "m_x_5_35780": 6.58,
      "m_x_5_2871": 2.25,
      "m_x_5_3573": 0.12,
      "m_x_5_3574": 1.34
    },
    "s_juedai": {
      "dimai": 85000,
      "fengwangjiang": 152.25,
      "shoupijiao": 63.14,
      "qicaixian": 116.91,
      "bairanxian": 3.4,
      "fengyu_yi": 2837.85,
      "m_m_5_30852": 15.96,
      "m_m_5_30853": 95.21,
      "m_m_5_30828": 4.98,
      "m_m_5_89165": 10.63,
      "guajian_bei": 57.99,
      "baihua_bu": 60.84,
      "guajian_yao": 70.46,
      "shuran_bu": 88.51,
      "shuran_bag": 30.6,
      "jinfeng_bag": 5888.59,
      "wuseshi": 145.98,
      "m_m_5_30856": 19.95,
      "m_m_5_30855": 152.54,
      "geyin_zhang": 344.34,
      "m_m_5_89298": 36.8,
      "m_m_5_30679": 16.1,
      "m_m_5_32004": 0.64,
      "m_m_5_30847": 12.65,
      "m_m_5_30846": 2.33,
      "yinsi_duan": 123.68,
      "m_m_5_30848": 20,
      "m_m_5_30850": 129.91,
      "m_m_5_30845": 155.31,
      "m_m_5_31397": 1.88,
      "m_m_5_89433": 4222.43,
      "m_m_5_89435": 5688.17,
      "m_m_5_31253": 322.39,
      "m_m_5_30844": 0.86,
      "m_m_5_90210": 360,
      "m_m_5_35719": 32.39,
      "m_m_5_30873": 42.22,
      "m_m_5_90205": 188,
      "m_m_8_614": 688.67,
      "m_m_5_3779": 6.99,
      "m_m_8_36148": 855.25,
      "m_m_5_89474": 2985.75,
      "m_m_5_3820": 4.88,
      "m_m_5_30827": 1.2,
      "m_m_5_89970": 165.2,
      "m_m_5_31978": 0.55,
      "m_m_5_31985": 0.67,
      "lucai": 17.54,
      "m_m_5_1831": 12.28,
      "m_m_5_31973": 0.63,
      "m_m_5_30849": 6,
      "m_m_5_71293": 32.49,
      "m_m_5_30826": 0.4,
      "m_m_5_30825": 0.01,
      "m_m_5_89171": 10.69,
      "m_m_5_31974": 0.69,
      "m_m_5_31968": 0.45,
      "m_m_5_71292": 46.46,
      "m_m_5_30824": 0.21,
      "m_m_5_31967": 0.47,
      "m_m_5_71281": 36.19,
      "m_m_5_30823": 0.32,
      "m_m_5_31969": 0.67,
      "m_m_5_71277": 17.75,
      "m_m_5_89315": 1408.03,
      "m_m_5_89969": 133.92,
      "m_m_5_89303": 4097.19,
      "m_m_5_89971": 184.09,
      "lushui": 14.89,
      "m_m_5_30875": 1.05,
      "m_m_5_30843": 0.87,
      "m_m_5_30874": 29.1,
      "m_m_5_30842": 0.49,
      "m_m_5_5270": 1.28,
      "m_m_5_31970": 0.69,
      "m_m_5_5269": 0.02,
      "m_m_5_31977": 0.68,
      "m_m_5_31013": 157.4,
      "gancao": 2.32,
      "m_m_5_31012": 303.85,
      "m_m_5_89304": 4487.83,
      "m_m_5_26057": 6666,
      "m_m_5_26231": 1.06,
      "m_m_5_89352": 619.25,
      "m_m_5_89350": 599.34,
      "m_m_5_71269": 104.51,
      "m_m_5_89346": 646.95,
      "m_m_5_89167": 10.63,
      "m_m_5_89348": 119,
      "m_m_5_71285": 81.72,
      "jieyuan_dan": 40.07,
      "m_m_5_30836": 1.79,
      "m_m_5_30832": 1.75,
      "m_m_5_30833": 1.93,
      "m_m_5_89324": 45.99,
      "m_m_5_30831": 1.89,
      "m_m_5_89973": 119.24,
      "m_m_5_31996": 0.66,
      "m_m_5_71240": 88.01,
      "m_m_5_71266": 97.85,
      "m_m_5_30838": 0.7,
      "shanhu": 2.94,
      "m_m_5_6646": 0.98,
      "m_m_5_30835": 2.68,
      "m_m_5_89974": 70,
      "m_m_5_6648": 2.99,
      "m_m_5_71267": 150.61,
      "m_m_5_89168": 22.99,
      "yaoyin": 144.99,
      "m_m_5_31100": 5.86,
      "shaoyao": 2,
      "m_m_5_90206": 100.45,
      "m_m_5_31102": 0.1,
      "m_m_5_30834": 1.8,
      "m_m_5_89328": 675.8,
      "m_m_5_89340": 69.99,
      "m_m_5_89325": 660.98,
      "m_m_5_71258": 44.11,
      "m_m_5_31999": 0.68,
      "m_m_5_89327": 61.66,
      "m_m_5_89966": 64,
      "m_m_5_10176": 3.38,
      "m_m_5_89377": 500,
      "m_m_5_89968": 91,
      "m_m_5_89376": 343.23,
      "m_m_5_89965": 99.89,
      "m_m_5_89375": 272,
      "m_m_5_89963": 100.38,
      "m_m_5_71192": 4.52,
      "m_m_5_71188": 468.78,
      "m_m_5_31994": 0.68,
      "m_m_5_89962": 55.76,
      "m_m_5_31139": 3478,
      "m_m_5_89964": 48,
      "m_m_5_10027": 66.19,
      "m_m_5_89961": 42.87,
      "tiekuang": 2.13,
      "m_m_5_30676": 3.49,
      "m_m_5_30678": 2.4,
      "m_m_5_30674": 3.28,
      "m_m_5_30675": 3.3,
      "m_m_5_89967": 111.07,
      "m_m_5_6246": 0.08,
      "m_m_8_25762": 10,
      "m_m_5_30841": 3.38,
      "m_m_5_35708": 6.49,
      "m_m_8_632": 788.49,
      "m_m_8_636": 622.49,
      "m_m_5_90353": 3528.16,
      "m_m_5_90257": 450,
      "m_m_5_6068": 1.01,
      "m_m_5_6066": 0.01,
      "muban": 20.76,
      "muliao": 2.29,
      "m_m_5_35707": 6.49,
      "qiwuling": 21.76,
      "m_m_5_35716": 19.98,
      "m_m_5_35715": 16.61,
      "zhuzi": 2.49,
      "m_m_5_35567": 4.39,
      "m_m_5_35714": 18.1,
      "m_m_5_35701": 0.69,
      "m_m_5_35713": 16.4,
      "m_m_10_1778": 919,
      "m_m_10_1880": 1200,
      "m_m_10_2034": 1291.3,
      "m_m_10_93": 10.71,
      "m_m_10_1882": 1409,
      "m_m_5_35717": 1.84,
      "m_m_10_164": 79.94,
      "m_m_5_52337": 1337.99,
      "m_m_5_35772": 1176.85,
      "m_m_5_87917": 303.67,
      "m_m_5_87881": 9999.99,
      "zasui": 0.31,
      "g_5_30681": 0.66,
      "g_5_30680": 0.99,
      "m_x_5_89359": 2000,
      "m_x_5_89349": 626.55,
      "m_x_5_89355": 3453.31,
      "m_x_5_89351": 544.38,
      "m_x_5_89357": 1979.08,
      "m_x_5_89436": 5870.31,
      "m_x_5_89450": 24000.25,
      "m_x_5_89438": 5775.99,
      "m_x_5_89439": 5000,
      "m_x_5_89440": 3220.42,
      "m_x_5_89454": 16666.66,
      "m_x_5_89441": 4244.92,
      "m_x_5_89443": 4488.05,
      "m_x_5_89444": 7953,
      "m_x_5_89445": 6841.74,
      "m_x_5_89329": 870,
      "m_x_5_89335": 2989.27,
      "m_x_5_89331": 670.88,
      "m_x_5_89337": 1083.99,
      "m_x_5_89368": 950.02,
      "m_x_5_89372": 1397.48,
      "m_x_5_90436": 65,
      "m_x_5_89379": 5398.8,
      "m_x_5_89397": 29948.74,
      "m_x_5_90437": 48.36,
      "m_x_5_89384": 5000.28,
      "m_x_5_89385": 5405.38,
      "m_x_5_89386": 4800,
      "m_x_5_89404": 15000.46,
      "m_x_5_89388": 4900,
      "m_x_5_89389": 5885.7,
      "m_x_5_89390": 5220.95,
      "m_x_5_89391": 5249.8,
      "m_x_5_89393": 5000.55,
      "m_x_5_89394": 8888.87,
      "m_x_5_89395": 7390.49,
      "m_x_5_89396": 6114.7,
      "m_x_5_20971": 110.42,
      "m_x_10_1281": 265.76,
      "m_x_10_1894": 150.43,
      "m_x_10_2229": 399.3,
      "m_x_5_89317": 609.07,
      "m_x_10_2241": 1599.99,
      "m_x_5_89320": 1000,
      "m_x_5_89426": 2150,
      "m_x_5_89310": 8499.76,
      "m_x_5_89347": 989,
      "m_x_5_89356": 1000.1,
      "m_x_5_89358": 1100.89,
      "m_x_5_89326": 979.99,
      "m_x_5_89334": 1299.66,
      "m_x_5_11521": 0.11,
      "m_x_5_26232": 0.17,
      "m_x_5_5231": 1,
      "m_x_5_5230": 1.7,
      "m_x_5_5229": 1.6,
      "m_x_5_31050": 80,
      "m_x_5_31051": 683.68,
      "m_x_5_31052": 319.18,
      "m_x_5_31053": 470.53,
      "m_x_5_31054": 500.3,
      "m_x_5_31055": 20.16,
      "m_x_5_2299": 18357.49,
      "m_x_5_31056": 10000,
      "m_x_5_2300": 19999.98,
      "m_x_5_31057": 348.99,
      "m_x_5_31058": 10000,
      "m_x_5_31059": 10000,
      "m_x_5_2305": 3999.25,
      "m_x_5_71268": 124.14,
      "m_x_5_71270": 125.05,
      "m_x_5_71271": 101.64,
      "m_x_5_71272": 80.02,
      "m_x_5_71273": 95.84,
      "m_x_5_71274": 81.54,
      "m_x_5_71275": 100.17,
      "m_x_5_71276": 42.87,
      "m_x_5_71278": 88.23,
      "m_x_5_71279": 44.05,
      "m_x_5_3505": 10000,
      "m_x_5_71280": 41.24,
      "m_x_5_3485": 89.81,
      "m_x_5_71284": 80.07,
      "m_x_5_71286": 89.94,
      "m_x_5_71287": 79.99,
      "m_x_5_71288": 78.8,
      "m_x_5_71289": 10.94,
      "m_x_5_71290": 43.59,
      "m_x_5_71291": 26.05,
      "m_x_5_71294": 532.19,
      "m_x_5_71295": 410.2,
      "m_x_5_71296": 480.13,
      "m_x_5_71297": 234.95,
      "m_x_5_71298": 44.43,
      "m_x_5_71299": 177.79,
      "m_x_5_2303": 14444.55,
      "m_x_5_89316": 2000.93,
      "m_x_5_89318": 1950.85,
      "m_x_5_89361": 35.1,
      "m_x_5_89362": 43.5,
      "m_x_5_89363": 97.5,
      "m_x_5_89364": 146.9,
      "m_x_5_89365": 80.31,
      "m_x_8_616": 593.7,
      "m_x_8_617": 200.48,
      "m_x_8_615": 145.5,
      "m_x_5_3810": 80,
      "m_x_5_3811": 68.88,
      "m_x_5_3782": 2,
      "m_x_5_3797": 28.54,
      "m_x_8_621": 694.16,
      "m_x_8_623": 651.1,
      "m_x_8_625": 655.08,
      "m_x_8_22": 29.59,
      "m_x_8_23": 15.9,
      "m_x_5_2467": 12.8,
      "m_x_8_37": 7.09,
      "m_x_8_38": 9.7,
      "m_x_5_5245": 108,
      "m_x_5_5246": 77.77,
      "m_x_5_6077": 0.99,
      "m_x_8_31": 2.02,
      "m_x_8_69": 130.62,
      "m_x_8_70": 240.09,
      "m_x_5_22145": 60.5,
      "m_x_5_22917": 93,
      "m_x_5_22981": 112.38,
      "m_x_5_31252": 592,
      "m_x_5_31254": 332.99,
      "m_x_5_71193": 1299.29,
      "m_x_5_71194": 2685.68,
      "m_x_5_71195": 2300,
      "m_x_5_71196": 1298.99,
      "m_x_5_71197": 2275.89,
      "m_x_5_71198": 1499.85,
      "m_x_5_71199": 1250,
      "m_x_5_71200": 2550.55,
      "m_x_5_71201": 1580.71,
      "m_x_5_71202": 999.77,
      "m_x_5_71203": 1599.12,
      "m_x_5_71204": 1799,
      "m_x_5_71205": 1300.82,
      "m_x_5_71206": 1557.23,
      "m_x_5_71207": 1700.7,
      "m_x_5_71211": 3250,
      "m_x_5_71212": 1892.31,
      "m_x_5_71214": 940.05,
      "m_x_5_71215": 2003.43,
      "m_x_5_71216": 694.56,
      "m_x_5_71219": 412,
      "m_x_5_71222": 480,
      "m_x_5_71223": 399.86,
      "m_x_5_71224": 452,
      "m_x_5_71225": 595.22,
      "m_x_5_71226": 550,
      "m_x_5_71227": 437,
      "m_x_5_71228": 350,
      "m_x_5_71229": 588.11,
      "m_x_5_71230": 785.29,
      "m_x_5_71231": 607.07,
      "m_x_5_71237": 550,
      "m_x_5_71239": 1105.94,
      "m_x_5_89461": 1100.03,
      "m_x_5_89462": 1250.78,
      "m_x_5_89463": 1290.33,
      "m_x_5_89464": 950,
      "m_x_5_89465": 1120.35,
      "m_x_5_89466": 940.34,
      "m_x_5_89467": 1215.88,
      "m_x_5_89468": 949.01,
      "m_x_5_89469": 1340.89,
      "m_x_5_89470": 1198,
      "m_x_5_89471": 2549.7,
      "m_x_5_89472": 1265,
      "m_x_5_89473": 1080.12,
      "m_x_5_90289": 800,
      "m_x_5_31099": 99.77,
      "m_x_5_31103": 11.26,
      "m_x_5_31104": 10.07,
      "m_x_5_31105": 79.39,
      "m_x_5_31106": 18.42,
      "m_x_5_31107": 130.34,
      "m_x_5_31108": 99.98,
      "m_x_5_40538": 180.24,
      "m_x_5_71242": 150.01,
      "m_x_5_71243": 80.08,
      "m_x_5_71244": 120.62,
      "m_x_5_71245": 40.01,
      "m_x_5_71246": 92.88,
      "m_x_5_71247": 80.06,
      "m_x_5_71248": 127.89,
      "m_x_5_71250": 86.78,
      "m_x_5_71251": 97.78,
      "m_x_5_71252": 25.32,
      "m_x_5_71254": 88.66,
      "m_x_5_71255": 44.03,
      "m_x_5_71256": 120.37,
      "m_x_5_71257": 49.01,
      "m_x_5_71259": 150.77,
      "m_x_5_71260": 99.91,
      "m_x_5_71261": 127.34,
      "m_x_5_71262": 80.03,
      "m_x_5_71263": 30.55,
      "m_x_5_71264": 31.38,
      "m_x_5_71265": 25,
      "m_x_5_89341": 92,
      "m_x_5_89342": 39.98,
      "m_x_5_89343": 75.98,
      "m_x_5_89344": 100.1,
      "m_x_5_89345": 80,
      "m_x_5_89724": 359.38,
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
      "m_x_5_6247": 0.6,
      "m_x_5_6248": 0.88,
      "m_x_5_10028": 58,
      "m_x_5_31140": 99.08,
      "m_x_5_31141": 1266.98,
      "m_x_5_31142": 1800.28,
      "m_x_5_31143": 559.53,
      "m_x_5_71129": 114.98,
      "m_x_5_71130": 105.42,
      "m_x_5_71131": 85.89,
      "m_x_5_71132": 129.43,
      "m_x_5_71133": 954.36,
      "m_x_5_71134": 1900.9,
      "m_x_5_71135": 2099.93,
      "m_x_5_71136": 1100.1,
      "m_x_5_71137": 1933.99,
      "m_x_5_71139": 1597.8,
      "m_x_5_71140": 2847.56,
      "m_x_5_71141": 1554.56,
      "m_x_5_71143": 1968.74,
      "m_x_5_71144": 2371.3,
      "m_x_5_71145": 1219.03,
      "m_x_5_71146": 1600.12,
      "m_x_5_71147": 2000.89,
      "m_x_5_71148": 1090.33,
      "m_x_5_71149": 1888.88,
      "m_x_5_71150": 1750,
      "m_x_5_71151": 1190.53,
      "m_x_5_71152": 2350,
      "m_x_5_71153": 2200.21,
      "m_x_5_71159": 2202.92,
      "m_x_5_71160": 2000.97,
      "m_x_5_71163": 910.78,
      "m_x_5_71164": 694,
      "m_x_5_71165": 695.26,
      "m_x_5_71166": 480,
      "m_x_5_71167": 596.79,
      "m_x_5_71168": 555.7,
      "m_x_5_71169": 519.82,
      "m_x_5_71170": 599.9,
      "m_x_5_71171": 755,
      "m_x_5_71172": 555.74,
      "m_x_5_71173": 654,
      "m_x_5_71174": 586.84,
      "m_x_5_71176": 1283.53,
      "m_x_5_71182": 409.5,
      "m_x_5_71183": 411.77,
      "m_x_5_71184": 500.8,
      "m_x_5_71185": 600,
      "m_x_5_71186": 564.19,
      "m_x_5_71187": 399.76,
      "m_x_5_71189": 18.66,
      "m_x_5_71190": 37,
      "m_x_5_54537": 31.99,
      "m_x_5_89415": 997.44,
      "m_x_5_89416": 1100.3,
      "m_x_5_89417": 1419.84,
      "m_x_5_89418": 744.29,
      "m_x_5_89419": 1620,
      "m_x_5_89420": 1590.04,
      "m_x_5_89421": 837,
      "m_x_5_89422": 1659.8,
      "m_x_5_89423": 850,
      "m_x_5_89424": 2004,
      "m_x_5_89425": 1300,
      "m_x_5_89429": 2122.91,
      "m_x_5_89430": 2456.2,
      "m_x_5_89431": 1301.56,
      "m_x_5_90213": 30.85,
      "m_x_5_35004": 1.83,
      "m_x_5_35005": 1.55,
      "m_x_5_35006": 1.69,
      "m_x_5_35007": 1.61,
      "m_x_10_155": 1250.5,
      "m_x_10_159": 858.31,
      "m_x_10_161": 1950,
      "m_x_10_162": 1819,
      "m_x_10_163": 40.27,
      "m_x_10_167": 889.73,
      "m_x_10_94": 79.04,
      "m_x_10_95": 78.41,
      "m_x_10_97": 83.29,
      "m_x_10_98": 79.95,
      "m_x_10_101": 81.99,
      "m_x_10_105": 79.32,
      "m_x_10_107": 78.77,
      "m_x_10_108": 80.29,
      "m_x_5_35771": 745.59,
      "m_x_5_35773": 17,
      "m_x_5_35774": 1248.39,
      "m_x_5_35775": 200.42,
      "m_x_10_133": 172.25,
      "m_x_10_140": 1099.73,
      "m_x_10_112": 99,
      "m_x_10_116": 340.5,
      "m_x_10_121": 215,
      "m_x_10_125": 889.82,
      "m_x_10_429": 427.28,
      "m_x_10_446": 1650,
      "m_x_10_447": 1689.87,
      "m_x_10_469": 1700.41,
      "m_x_10_479": 2859.56,
      "m_x_10_490": 1750.92,
      "m_x_10_504": 1620.82,
      "m_x_5_38373": 1855,
      "m_x_5_38374": 1255,
      "m_x_5_38927": 4.94,
      "m_x_10_673": 395.96,
      "m_x_10_675": 538.93,
      "m_x_10_681": 211.43,
      "m_x_10_1082": 429.73,
      "m_x_10_1083": 693.95,
      "m_x_10_1088": 317.97,
      "m_x_10_1278": 294.86,
      "m_x_10_1279": 299.96,
      "m_x_10_1280": 231.21,
      "m_x_10_945": 938.96,
      "m_x_10_950": 604.21,
      "m_x_10_952": 1298.99,
      "m_x_10_1576": 280,
      "m_x_10_1578": 284.3,
      "m_x_10_1606": 688.22,
      "m_x_10_1607": 924.7,
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
      "m_x_10_1879": 480.79,
      "m_x_10_1895": 285.99,
      "m_x_10_1896": 128.44,
      "m_x_10_1897": 177.2,
      "m_x_10_1898": 150.97,
      "m_x_10_1881": 848.82,
      "m_x_10_2233": 200.4,
      "m_x_10_2234": 240,
      "m_x_10_2235": 378,
      "m_x_10_2236": 295.98,
      "m_x_10_2237": 390,
      "m_x_10_2238": 420,
      "m_x_10_2242": 1599.99,
      "m_x_10_2243": 1599.99,
      "m_x_10_2244": 1599.99,
      "m_x_5_87875": 475,
      "m_x_5_87874": 688.88,
      "m_x_5_87873": 663.65,
      "m_x_5_87871": 688.88,
      "m_x_5_87822": 588.88,
      "m_x_5_90212": 288,
      "m_x_5_1830": 18.05,
      "m_x_5_31975": 0.67,
      "m_x_5_1832": 30,
      "m_x_5_31979": 0.55,
      "m_x_5_31981": 10000,
      "m_x_5_32007": 0.7,
      "m_x_5_32008": 1,
      "m_x_5_32010": 0.99,
      "m_x_5_32011": 1.87,
      "m_x_5_81662": 1.77,
      "m_x_5_6250": 1.31,
      "m_x_5_6251": 1.46,
      "m_x_5_35780": 6.49,
      "m_x_5_2871": 6.99,
      "m_x_5_3573": 0.97,
      "m_x_5_3843": 2.14,
      "m_x_5_3574": 2.65
    },
    "s_tianeping": {
      "dimai": 90001.98,
      "fengwangjiang": 170.61,
      "shoupijiao": 54.28,
      "qicaixian": 140,
      "bairanxian": 3.32,
      "fengyu_yi": 2552.5,
      "m_m_5_30852": 19,
      "m_m_5_30853": 89.95,
      "m_m_5_30828": 9.34,
      "m_m_5_89165": 10,
      "m_m_5_32000": 0.7,
      "guajian_bei": 54.99,
      "baihua_bu": 59.99,
      "guajian_yao": 75,
      "shuran_bu": 89.98,
      "m_m_5_32001": 0.62,
      "shuran_bag": 12.57,
      "m_m_5_10173": 45.97,
      "wuseshi": 99.79,
      "m_m_5_30856": 12.64,
      "m_m_5_30855": 152.11,
      "geyin_zhang": 150.95,
      "m_m_5_89298": 35.11,
      "m_m_5_30679": 16.33,
      "m_m_5_30847": 12.88,
      "m_m_5_30846": 1.88,
      "yinsi_duan": 128.1,
      "m_m_5_32003": 2.9,
      "m_m_5_30848": 20.25,
      "m_m_5_30850": 129.43,
      "m_m_5_30845": 171.26,
      "m_m_5_31397": 1,
      "m_m_5_89435": 4999.95,
      "m_m_5_30844": 1,
      "m_m_5_90210": 120.33,
      "m_m_5_30873": 39.79,
      "m_m_5_90205": 28.4,
      "m_m_8_614": 196.89,
      "shanshui_juan": 50,
      "m_m_5_3819": 50,
      "m_m_5_3779": 0.88,
      "m_m_8_36148": 688.88,
      "m_m_5_89474": 3528.4,
      "m_m_5_30827": 1.13,
      "m_m_5_89970": 169.49,
      "m_m_5_32014": 121.64,
      "m_m_5_31978": 0.47,
      "lucai": 17.85,
      "m_m_5_1831": 24,
      "m_m_5_31973": 0.8,
      "m_m_5_30849": 8.23,
      "m_m_5_71293": 32.51,
      "m_m_5_30826": 0.4,
      "m_m_5_89171": 11,
      "m_m_5_71292": 35,
      "m_m_5_30824": 0.42,
      "m_m_5_31967": 2.41,
      "m_m_5_71281": 17.01,
      "m_m_5_30823": 0.92,
      "m_m_5_31969": 0.58,
      "m_m_5_71277": 29.14,
      "m_m_5_89315": 1199.19,
      "m_m_5_89969": 120,
      "m_m_5_31976": 0.7,
      "m_m_5_89303": 4495,
      "m_m_5_89971": 206.83,
      "lushui": 15,
      "m_m_5_30875": 1.03,
      "m_m_5_30843": 0.97,
      "m_m_5_30874": 28.99,
      "m_m_5_30842": 0.77,
      "m_m_5_5270": 0.3,
      "m_m_5_31970": 0.59,
      "m_m_5_5269": 0.02,
      "m_m_5_31013": 168.39,
      "gancao": 2.88,
      "m_m_5_31012": 347.59,
      "m_m_5_89172": 59.95,
      "m_m_5_89304": 4990.56,
      "m_m_5_26057": 2091,
      "m_m_5_26231": 3.75,
      "m_m_5_89352": 611.29,
      "m_m_5_89350": 665.27,
      "m_m_5_71269": 87.53,
      "m_m_5_89346": 691.13,
      "m_m_5_89167": 26.42,
      "m_m_5_89348": 205.39,
      "m_m_5_71285": 80,
      "jieyuan_dan": 95.53,
      "m_m_5_30836": 1,
      "m_m_5_30832": 2.99,
      "m_m_5_30833": 2,
      "m_m_5_89324": 149.6,
      "m_m_5_30831": 1.27,
      "m_m_5_89973": 149.99,
      "m_m_5_31996": 0.77,
      "m_m_5_71240": 78.85,
      "m_m_5_71266": 24.58,
      "m_m_5_30838": 1.01,
      "shanhu": 3.46,
      "m_m_5_6646": 2.22,
      "m_m_5_30835": 2.59,
      "m_m_5_89974": 99.99,
      "m_m_5_6648": 0.95,
      "m_m_5_71267": 93.77,
      "m_m_5_89168": 44.88,
      "yaoyin": 152.3,
      "m_m_5_31100": 87.23,
      "m_m_5_89322": 888,
      "shaoyao": 4.02,
      "m_m_5_90206": 100,
      "m_m_5_30834": 1.8,
      "m_m_5_89328": 679.42,
      "m_m_5_89340": 65.64,
      "m_m_5_89325": 637.18,
      "m_m_5_71258": 65.16,
      "m_m_5_89327": 70.3,
      "m_m_5_89966": 60.79,
      "m_m_5_10176": 2.6,
      "m_m_5_89377": 400.31,
      "m_m_5_89968": 70,
      "m_m_5_89376": 218,
      "m_m_5_89965": 99.8,
      "m_m_5_31992": 0.7,
      "m_m_5_89375": 489,
      "m_m_5_89963": 70.01,
      "m_m_5_71192": 2.05,
      "m_m_5_71188": 553.81,
      "m_m_5_31994": 0.99,
      "m_m_5_89962": 62.71,
      "m_m_5_31139": 3803.51,
      "m_m_5_89964": 57.7,
      "m_m_5_10027": 78.88,
      "m_m_5_89961": 83,
      "tiekuang": 3.03,
      "m_m_5_30676": 3,
      "m_m_5_30678": 2.99,
      "m_m_5_30674": 3.75,
      "m_m_5_30675": 3.98,
      "m_m_5_89967": 96.02,
      "m_m_5_6246": 0.19,
      "m_m_5_6249": 1.68,
      "m_m_5_32787": 1.03,
      "m_m_8_25762": 16.68,
      "m_m_5_30841": 3.04,
      "m_m_5_35708": 12,
      "m_m_5_90032": 9999,
      "m_m_8_632": 100.09,
      "m_m_8_634": 221,
      "m_m_8_636": 50.41,
      "m_m_5_90257": 200,
      "m_m_5_2578": 1.38,
      "m_m_5_6068": 1,
      "muban": 50.79,
      "muliao": 3.2,
      "m_m_5_35707": 7.03,
      "qiwuling": 25.74,
      "m_m_5_35716": 18.26,
      "m_m_5_35702": 3.42,
      "m_m_5_35715": 19.6,
      "zhuzi": 1.6,
      "m_m_5_35567": 1.75,
      "m_m_5_35714": 89.87,
      "m_m_5_35701": 1.07,
      "m_m_5_35713": 16.99,
      "m_m_10_1778": 899.26,
      "m_m_10_948": 842.93,
      "m_m_10_1880": 1472.73,
      "m_m_10_2034": 1970,
      "m_m_10_93": 10.73,
      "m_m_10_1882": 2399.95,
      "m_m_5_35717": 1.97,
      "m_m_10_164": 185,
      "m_m_5_52337": 1636.8,
      "m_m_5_40232": 4308.99,
      "m_m_5_35772": 1297.45,
      "m_m_5_87917": 257.49,
      "m_m_5_87881": 8080.55,
      "zasui": 0.29,
      "g_5_30681": 0.76,
      "g_5_30680": 0.7,
      "m_x_5_89353": 826.63,
      "m_x_5_89359": 2134.49,
      "m_x_5_89305": 4450.46,
      "m_x_5_89349": 840,
      "m_x_5_89355": 1200,
      "m_x_5_89351": 579.26,
      "m_x_5_89357": 3970.07,
      "m_x_5_89434": 7273.09,
      "m_x_5_89436": 6450.91,
      "m_x_5_89438": 5555.75,
      "m_x_5_89439": 9999,
      "m_x_5_89441": 4870.5,
      "m_x_5_89444": 5672.45,
      "m_x_5_89445": 6090.09,
      "m_x_5_89335": 1276.25,
      "m_x_5_89330": 699.32,
      "m_x_5_89331": 649,
      "m_x_5_89337": 1498.37,
      "m_x_5_89368": 958.07,
      "m_x_5_89372": 1390,
      "m_x_5_89369": 1266,
      "m_x_5_90436": 74,
      "m_x_5_89379": 4566,
      "m_x_5_89397": 31888,
      "m_x_5_89380": 6598.48,
      "m_x_5_90437": 31.44,
      "m_x_5_89381": 7898,
      "m_x_5_89383": 9999,
      "m_x_5_89385": 5298.87,
      "m_x_5_89386": 4699.98,
      "m_x_5_89388": 3990.01,
      "m_x_5_89389": 6554,
      "m_x_5_89390": 4444,
      "m_x_5_89391": 5162.01,
      "m_x_5_89409": 34950,
      "m_x_5_89392": 7000,
      "m_x_5_89393": 8998.9,
      "m_x_5_89394": 9994.85,
      "m_x_5_20971": 7.3,
      "m_x_10_1894": 59.99,
      "m_x_10_2229": 300.04,
      "m_x_5_89317": 800,
      "m_x_10_2028": 1542.89,
      "m_x_5_89320": 1299.99,
      "m_x_5_89426": 2100.84,
      "m_x_5_89428": 1792.07,
      "m_x_5_89310": 11254.4,
      "m_x_5_89347": 939.34,
      "m_x_5_89356": 1566.57,
      "m_x_5_89358": 1665.99,
      "m_x_5_89326": 1097.99,
      "m_x_5_89334": 1196.99,
      "m_x_5_26232": 1,
      "m_x_5_5232": 2.05,
      "m_x_5_5231": 1.01,
      "m_x_5_5230": 1.5,
      "m_x_5_5229": 1.23,
      "m_x_5_31050": 12.52,
      "m_x_5_2304": 5999,
      "m_x_5_31051": 586.05,
      "m_x_5_31052": 569.79,
      "m_x_5_31053": 640.98,
      "m_x_5_31054": 455.99,
      "m_x_5_31055": 10000,
      "m_x_5_31056": 67.97,
      "m_x_5_2300": 5555.33,
      "m_x_5_31057": 302.99,
      "m_x_5_31058": 10000,
      "m_x_5_31060": 347.19,
      "m_x_5_31061": 359.98,
      "m_x_5_71268": 99.86,
      "m_x_5_71270": 112.76,
      "m_x_5_2302": 3291.19,
      "m_x_5_71271": 80.99,
      "m_x_5_71272": 145.06,
      "m_x_5_71273": 100.51,
      "m_x_5_71274": 277.97,
      "m_x_5_71275": 80,
      "m_x_5_71276": 33,
      "m_x_5_71278": 16.98,
      "m_x_5_71279": 44.09,
      "m_x_5_3505": 2110.25,
      "m_x_5_71280": 99.93,
      "m_x_5_3485": 888.86,
      "m_x_5_71282": 17.9,
      "m_x_5_71283": 34.29,
      "m_x_5_71284": 80,
      "m_x_5_71286": 80.04,
      "m_x_5_71287": 116.92,
      "m_x_5_71288": 87.8,
      "m_x_5_71289": 200.31,
      "m_x_5_71290": 12,
      "m_x_5_71291": 27.21,
      "m_x_5_71294": 530,
      "m_x_5_71295": 547.1,
      "m_x_5_71296": 598,
      "m_x_5_71297": 198.54,
      "m_x_5_71298": 44.68,
      "m_x_5_71299": 499.11,
      "m_x_5_2303": 10999.01,
      "m_x_5_71300": 5.77,
      "m_x_5_89316": 1966.61,
      "m_x_5_89318": 2196.71,
      "m_x_5_89361": 39.45,
      "m_x_5_89362": 42.52,
      "m_x_5_89363": 78.85,
      "m_x_5_89364": 149.99,
      "m_x_5_89365": 280,
      "m_x_8_616": 252.94,
      "m_x_8_617": 1399.46,
      "m_x_8_615": 1499.82,
      "m_x_5_3810": 47.2,
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
      "m_x_8_625": 1299.17,
      "m_x_8_23": 24.62,
      "m_x_8_627": 1499.48,
      "m_x_5_2467": 60.93,
      "m_x_8_37": 2.6,
      "m_x_8_38": 14.25,
      "m_x_5_5245": 60.72,
      "m_x_5_5246": 20.65,
      "m_x_5_6077": 0.99,
      "m_x_8_31": 5,
      "m_x_8_69": 266.57,
      "m_x_8_70": 235.8,
      "m_x_5_22145": 65.9,
      "m_x_5_22917": 88.06,
      "m_x_5_22981": 101.88,
      "m_x_5_31252": 198.05,
      "m_x_5_31254": 180,
      "m_x_5_71193": 1544.91,
      "m_x_5_71194": 1888,
      "m_x_5_71195": 1999.91,
      "m_x_5_71196": 1170,
      "m_x_5_71197": 2000.03,
      "m_x_5_71198": 1399.44,
      "m_x_5_71199": 1022,
      "m_x_5_71200": 1699.21,
      "m_x_5_71201": 1174.99,
      "m_x_5_71202": 988.86,
      "m_x_5_71203": 1710.3,
      "m_x_5_71204": 1898,
      "m_x_5_71205": 844,
      "m_x_5_71206": 1777.3,
      "m_x_5_71207": 1800,
      "m_x_5_71211": 1398.6,
      "m_x_5_71214": 920.68,
      "m_x_5_71215": 1760.2,
      "m_x_5_71216": 202.66,
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
      "m_x_5_71229": 512.74,
      "m_x_5_71230": 666.91,
      "m_x_5_71231": 777.84,
      "m_x_5_71233": 555.25,
      "m_x_5_71234": 598.38,
      "m_x_5_71235": 555.99,
      "m_x_5_71236": 559,
      "m_x_5_71237": 365.1,
      "m_x_5_71238": 500.75,
      "m_x_5_71239": 677.55,
      "m_x_5_89461": 1359.57,
      "m_x_5_89462": 1600.15,
      "m_x_5_89463": 1186.73,
      "m_x_5_89464": 1035.79,
      "m_x_5_89465": 1410.89,
      "m_x_5_89466": 750,
      "m_x_5_89467": 2409.86,
      "m_x_5_89468": 1679.77,
      "m_x_5_89469": 1050.81,
      "m_x_5_89470": 1125,
      "m_x_5_89471": 2165,
      "m_x_5_89472": 2599.93,
      "m_x_5_89473": 3899.88,
      "m_x_5_90289": 886.03,
      "m_x_5_31099": 29.97,
      "m_x_5_31103": 8.03,
      "m_x_5_31104": 72.26,
      "m_x_5_31105": 161.31,
      "m_x_5_31106": 15,
      "m_x_5_31107": 134.98,
      "m_x_5_31108": 130.91,
      "m_x_5_40538": 85.68,
      "m_x_5_71242": 80.03,
      "m_x_5_71243": 148,
      "m_x_5_71244": 92.87,
      "m_x_5_71245": 92.58,
      "m_x_5_71246": 163.16,
      "m_x_5_71247": 147.71,
      "m_x_5_71248": 87.37,
      "m_x_5_71249": 59,
      "m_x_5_71250": 90,
      "m_x_5_71251": 35.87,
      "m_x_5_71252": 43,
      "m_x_5_71253": 66.72,
      "m_x_5_71254": 88.47,
      "m_x_5_71255": 34.31,
      "m_x_5_71256": 85.89,
      "m_x_5_71257": 40,
      "m_x_5_71259": 80.03,
      "m_x_5_71260": 126.27,
      "m_x_5_71261": 117.25,
      "m_x_5_71262": 88.08,
      "m_x_5_71263": 51.24,
      "m_x_5_71264": 35.36,
      "m_x_5_71265": 26.83,
      "m_x_5_89341": 70.55,
      "m_x_5_89342": 42.4,
      "m_x_5_89343": 100.06,
      "m_x_5_89344": 247,
      "m_x_5_89345": 77.34,
      "m_x_5_89724": 366,
      "m_x_8_17540": 698,
      "m_x_5_2631": 16.07,
      "m_x_8_629": 100.16,
      "m_x_8_631": 150.8,
      "m_x_5_2189": 9.04,
      "m_x_5_2594": 7.02,
      "m_x_8_17539": 590,
      "m_x_5_2603": 12.47,
      "m_x_8_633": 550.24,
      "m_x_8_17544": 500.51,
      "m_x_8_17546": 700,
      "m_x_5_6024": 0.94,
      "m_x_5_6076": 0.88,
      "m_x_5_6247": 0.73,
      "m_x_5_6248": 0.71,
      "m_x_5_10028": 58.88,
      "m_x_5_31140": 399.19,
      "m_x_5_31141": 324,
      "m_x_5_31143": 77,
      "m_x_5_40539": 299.89,
      "m_x_5_71129": 106.19,
      "m_x_5_71130": 109,
      "m_x_5_71131": 89.01,
      "m_x_5_71132": 278.93,
      "m_x_5_71133": 1099.9,
      "m_x_5_71134": 1999.07,
      "m_x_5_71135": 2440.66,
      "m_x_5_71136": 977.99,
      "m_x_5_71137": 2999.97,
      "m_x_5_71138": 1998.31,
      "m_x_5_71139": 1698.87,
      "m_x_5_71140": 2666.11,
      "m_x_5_71141": 1970.29,
      "m_x_5_71142": 2999.99,
      "m_x_5_71143": 1911.99,
      "m_x_5_71144": 1533.89,
      "m_x_5_71145": 945,
      "m_x_5_71146": 1900,
      "m_x_5_71147": 1700,
      "m_x_5_71148": 1041,
      "m_x_5_71149": 2100.1,
      "m_x_5_71150": 1299,
      "m_x_5_71151": 1144.12,
      "m_x_5_71152": 2997.82,
      "m_x_5_71153": 2555.41,
      "m_x_5_71159": 2511.92,
      "m_x_5_71160": 1090.39,
      "m_x_5_71161": 111.11,
      "m_x_5_71163": 699.59,
      "m_x_5_71164": 300.71,
      "m_x_5_71166": 225,
      "m_x_5_71167": 343.05,
      "m_x_5_71168": 200.66,
      "m_x_5_71169": 388.51,
      "m_x_5_71170": 555.87,
      "m_x_5_71171": 510,
      "m_x_5_71172": 666.95,
      "m_x_5_71173": 334.12,
      "m_x_5_71174": 498.83,
      "m_x_5_71175": 600.52,
      "m_x_5_71176": 532,
      "m_x_5_71177": 555,
      "m_x_5_71181": 599,
      "m_x_5_71182": 332.91,
      "m_x_5_71184": 322.71,
      "m_x_5_71185": 433.42,
      "m_x_5_71186": 399,
      "m_x_5_71189": 76.43,
      "m_x_5_71190": 47,
      "m_x_5_71191": 40.25,
      "m_x_5_54537": 240.19,
      "m_x_5_89415": 1662.88,
      "m_x_5_89416": 1199,
      "m_x_5_89417": 1400.87,
      "m_x_5_89418": 759.95,
      "m_x_5_89419": 1313.88,
      "m_x_5_89420": 1200.11,
      "m_x_5_89421": 761,
      "m_x_5_89422": 1022,
      "m_x_5_89423": 838,
      "m_x_5_89424": 1559.99,
      "m_x_5_89425": 1000.15,
      "m_x_5_89429": 1300,
      "m_x_5_89430": 2771.01,
      "m_x_5_90213": 13.31,
      "m_x_10_171": 1931.93,
      "m_x_10_172": 2860.93,
      "m_x_5_35004": 2.97,
      "m_x_5_35005": 2,
      "m_x_5_35006": 3.55,
      "m_x_5_35007": 2.55,
      "m_x_10_151": 1182.01,
      "m_x_10_152": 1983,
      "m_x_10_154": 1868.94,
      "m_x_10_155": 2658,
      "m_x_10_156": 700.7,
      "m_x_10_158": 788,
      "m_x_10_159": 1975.93,
      "m_x_10_160": 2858,
      "m_x_10_161": 2872,
      "m_x_10_162": 2754.93,
      "m_x_10_166": 1676,
      "m_x_10_167": 1490.91,
      "m_x_10_169": 1670,
      "m_x_10_94": 173.61,
      "m_x_10_95": 335,
      "m_x_10_96": 192,
      "m_x_10_97": 165.96,
      "m_x_10_98": 337.95,
      "m_x_10_99": 214,
      "m_x_10_100": 383.93,
      "m_x_10_101": 145,
      "m_x_10_103": 325,
      "m_x_10_104": 497.95,
      "m_x_10_105": 163.95,
      "m_x_10_106": 279.96,
      "m_x_10_107": 209,
      "m_x_10_108": 183.95,
      "m_x_10_109": 58.62,
      "m_x_10_110": 93.18,
      "m_x_5_35771": 850.74,
      "m_x_5_35773": 159.59,
      "m_x_5_35774": 942.95,
      "m_x_5_35775": 111.11,
      "m_x_10_131": 964,
      "m_x_10_132": 399.87,
      "m_x_10_133": 585.93,
      "m_x_10_134": 625,
      "m_x_10_135": 696.02,
      "m_x_10_136": 450,
      "m_x_10_137": 773,
      "m_x_10_139": 683.92,
      "m_x_10_140": 1465,
      "m_x_10_141": 2674,
      "m_x_10_142": 441.64,
      "m_x_10_143": 1113.93,
      "m_x_10_145": 1266,
      "m_x_10_146": 893.93,
      "m_x_10_147": 1196,
      "m_x_10_148": 8,
      "m_x_10_149": 2425,
      "m_x_10_150": 2875,
      "m_x_10_130": 530,
      "m_x_10_111": 245.43,
      "m_x_10_112": 118,
      "m_x_10_113": 52.77,
      "m_x_10_114": 359.14,
      "m_x_10_115": 458.96,
      "m_x_10_116": 990,
      "m_x_10_117": 1795.92,
      "m_x_10_121": 459,
      "m_x_10_122": 300.35,
      "m_x_10_123": 2000.22,
      "m_x_10_124": 2498.77,
      "m_x_10_125": 1161.92,
      "m_x_10_126": 1235.92,
      "m_x_10_127": 2455.93,
      "m_x_10_128": 2499.99,
      "m_x_10_129": 1474.89,
      "m_x_10_421": 1656.93,
      "m_x_10_427": 2660.93,
      "m_x_10_429": 989.93,
      "m_x_10_433": 1467.93,
      "m_x_10_434": 1457.9,
      "m_x_10_436": 3983.93,
      "m_x_10_437": 3982.93,
      "m_x_10_444": 1900,
      "m_x_10_446": 1470,
      "m_x_10_447": 1971.03,
      "m_x_10_450": 1195,
      "m_x_10_469": 2659,
      "m_x_10_470": 977.58,
      "m_x_10_471": 2665,
      "m_x_10_492": 3982.93,
      "m_x_10_493": 3656.93,
      "m_x_5_38127": 1487.99,
      "m_x_5_38373": 2200.74,
      "m_x_5_38374": 1589.05,
      "m_x_5_38927": 4.58,
      "m_x_10_672": 2657.93,
      "m_x_10_673": 1192,
      "m_x_10_675": 2460.92,
      "m_x_10_677": 2256.93,
      "m_x_10_678": 1639,
      "m_x_10_679": 2477.93,
      "m_x_10_680": 1548,
      "m_x_10_681": 448.22,
      "m_x_10_682": 2174.93,
      "m_x_10_683": 1682,
      "m_x_10_684": 1287.42,
      "m_x_10_685": 2963.93,
      "m_x_10_686": 1572.94,
      "m_x_10_957": 676.22,
      "m_x_10_1082": 795,
      "m_x_10_1083": 610.48,
      "m_x_10_1085": 999.85,
      "m_x_10_1086": 871.93,
      "m_x_10_1087": 623.93,
      "m_x_10_1088": 1497.93,
      "m_x_10_1089": 593.93,
      "m_x_10_1090": 885.93,
      "m_x_10_1277": 1141.92,
      "m_x_10_1278": 945.92,
      "m_x_10_1279": 1062,
      "m_x_10_1280": 1197.93,
      "m_x_10_687": 2906.94,
      "m_x_10_688": 2986.96,
      "m_x_10_943": 1393.94,
      "m_x_10_944": 664.19,
      "m_x_10_946": 981.94,
      "m_x_10_950": 580.99,
      "m_x_10_951": 481.99,
      "m_x_10_952": 3983,
      "m_x_10_953": 1057.42,
      "m_x_10_954": 1086.53,
      "m_x_10_955": 811.01,
      "m_x_10_956": 1190.07,
      "m_x_10_1570": 1548.94,
      "m_x_10_1572": 1960.94,
      "m_x_10_1573": 621.93,
      "m_x_10_1574": 621.93,
      "m_x_10_1575": 1088.93,
      "m_x_10_1576": 537,
      "m_x_10_1577": 622.93,
      "m_x_10_1578": 994.92,
      "m_x_10_1605": 1011.87,
      "m_x_10_1606": 1625.94,
      "m_x_10_1772": 2898.9,
      "m_x_10_1773": 2884.9,
      "m_x_10_1774": 1163.54,
      "m_x_10_1282": 499.18,
      "m_x_10_1283": 1257.92,
      "m_x_10_1284": 496.92,
      "m_x_10_1286": 1499,
      "m_x_10_1477": 697.38,
      "m_x_10_1453": 665,
      "m_x_10_1454": 60.37,
      "m_x_10_1455": 45.82,
      "m_x_10_1456": 60.84,
      "m_x_10_1457": 32.01,
      "m_x_10_1458": 45.88,
      "m_x_10_1460": 1021.92,
      "m_x_10_1462": 2879.92,
      "m_x_10_1463": 1582.92,
      "m_x_10_1464": 993.92,
      "m_x_10_2036": 3072.93,
      "m_x_10_2230": 364.77,
      "m_x_10_2231": 199.09,
      "m_x_10_2232": 325.77,
      "m_x_10_1879": 955.92,
      "m_x_10_1895": 289.03,
      "m_x_10_1896": 149.44,
      "m_x_10_1897": 199.66,
      "m_x_10_1898": 199.09,
      "m_x_10_1881": 891.06,
      "m_x_10_2029": 2494,
      "m_x_10_2031": 2965.93,
      "m_x_10_2032": 747.17,
      "m_x_10_2033": 1598.83,
      "m_x_10_2035": 2559.88,
      "m_x_10_2233": 264.99,
      "m_x_10_2234": 199.26,
      "m_x_10_2235": 299,
      "m_x_10_2236": 211.08,
      "m_x_10_2237": 249.99,
      "m_x_10_2238": 249.99,
      "m_x_10_2242": 1575.2,
      "m_x_5_87875": 399.95,
      "m_x_5_87874": 799.88,
      "m_x_5_87872": 777.33,
      "m_x_5_87871": 780.21,
      "m_x_5_87870": 400,
      "m_x_5_87869": 400,
      "m_x_5_87868": 799.88,
      "m_x_5_87867": 400,
      "m_x_5_87864": 799.99,
      "m_x_5_87859": 400,
      "m_x_5_87856": 400,
      "m_x_5_87855": 400,
      "m_x_5_87849": 400,
      "m_x_5_87848": 799.99,
      "m_x_5_87847": 799.99,
      "m_x_5_87846": 400,
      "m_x_5_87835": 799.55,
      "m_x_5_87834": 799.55,
      "m_x_5_87822": 799.99,
      "m_x_5_87814": 699,
      "m_x_5_87810": 800,
      "m_x_5_87807": 799.88,
      "m_x_5_87805": 400,
      "m_x_5_90212": 80,
      "m_x_5_31983": 0.9,
      "m_x_5_1830": 9.09,
      "m_x_5_31975": 2.55,
      "m_x_5_1832": 11.99,
      "m_x_5_31979": 0.4,
      "m_x_5_31981": 10000,
      "m_x_5_31971": 0.93,
      "m_x_5_32007": 10000,
      "m_x_5_32010": 1.6,
      "m_x_5_32011": 10000,
      "m_x_5_31982": 0.59,
      "m_x_5_34184": 1.65,
      "m_x_5_35786": 5,
      "m_x_5_41556": 1,
      "m_x_5_81662": 1,
      "m_x_5_40562": 31.36,
      "m_x_5_6250": 1.87,
      "m_x_5_35780": 14.95,
      "m_x_5_3574": 1.99
    },
    "s_feilong": {
      "fengwangjiang": 150.36,
      "shoupijiao": 58.87,
      "qicaixian": 110.98,
      "fengyu_yi": 822,
      "m_m_5_30852": 13.77,
      "m_m_5_30853": 81.13,
      "m_m_5_30828": 6.39,
      "guajian_bei": 57.12,
      "baihua_bu": 68.95,
      "guajian_yao": 69.8,
      "shuran_bu": 72,
      "shuran_bag": 57.24,
      "m_m_5_10173": 30.9,
      "jinfeng_bag": 9999,
      "wuseshi": 180.27,
      "m_m_5_30856": 13.65,
      "m_m_5_30855": 153.68,
      "geyin_zhang": 179.82,
      "m_m_5_89298": 30.77,
      "m_m_5_30679": 15.96,
      "m_m_5_30847": 13.48,
      "m_m_5_30846": 2.87,
      "yinsi_duan": 130.44,
      "m_m_5_32003": 8,
      "m_m_5_30848": 17.98,
      "m_m_5_30850": 125,
      "m_m_5_30845": 152.79,
      "m_m_5_31397": 5,
      "m_m_5_30844": 0.54,
      "m_m_5_90210": 100,
      "m_m_5_30873": 39.09,
      "m_m_5_90205": 8.33,
      "m_m_5_3779": 1,
      "m_m_8_36148": 1980,
      "m_m_5_30827": 1.12,
      "m_m_5_89970": 162.44,
      "lucai": 15.38,
      "m_m_5_1831": 49,
      "m_m_5_31973": 3.37,
      "m_m_5_30849": 6,
      "m_m_5_71293": 42,
      "m_m_5_30826": 0.2,
      "m_m_5_30825": 0.4,
      "m_m_5_71292": 35,
      "m_m_5_30824": 0.21,
      "m_m_5_71281": 15,
      "m_m_5_30823": 0.77,
      "m_m_5_89315": 1298,
      "m_m_5_89969": 119.95,
      "m_m_5_89971": 164.81,
      "lushui": 14.84,
      "m_m_5_30875": 1.15,
      "m_m_5_30843": 0.65,
      "m_m_5_30874": 26.47,
      "m_m_5_30842": 0.53,
      "m_m_5_5270": 0.75,
      "m_m_5_5269": 0.03,
      "m_m_5_31013": 174.45,
      "gancao": 2.74,
      "m_m_5_31012": 380.9,
      "m_m_5_26057": 3999,
      "m_m_5_89352": 678.58,
      "m_m_5_71269": 129.79,
      "m_m_5_89346": 721.25,
      "m_m_5_89167": 9,
      "m_m_5_89348": 161.79,
      "m_m_5_71285": 98.34,
      "jieyuan_dan": 180.79,
      "m_m_5_30836": 2.99,
      "m_m_5_30832": 3.34,
      "m_m_5_30833": 2.06,
      "m_m_5_89324": 80.53,
      "m_m_5_30831": 2.08,
      "m_m_5_89973": 142.5,
      "m_m_5_71240": 39.33,
      "m_m_5_71266": 39,
      "m_m_5_30838": 2.78,
      "shanhu": 2.99,
      "m_m_5_30835": 1.5,
      "m_m_5_89974": 75.59,
      "m_m_5_71267": 27,
      "m_m_5_90029": 2000,
      "yaoyin": 155,
      "m_m_5_31100": 48.97,
      "shaoyao": 3.47,
      "m_m_5_90206": 100,
      "m_m_5_31102": 0.1,
      "m_m_5_30834": 3.18,
      "m_m_5_31998": 30.53,
      "m_m_5_89340": 74.94,
      "m_m_5_89325": 610.67,
      "m_m_5_71258": 110.35,
      "m_m_5_89327": 68,
      "m_m_5_89966": 127.8,
      "m_m_5_10176": 9,
      "m_m_5_89968": 89.14,
      "m_m_5_89376": 155,
      "m_m_5_89965": 99.54,
      "m_m_5_31992": 5.9,
      "m_m_5_89963": 89.77,
      "m_m_5_71188": 399,
      "m_m_5_31994": 9.99,
      "m_m_5_89962": 59,
      "m_m_5_31139": 4087.94,
      "m_m_5_89964": 98.56,
      "m_m_5_10027": 73.98,
      "m_m_5_89961": 67.33,
      "tiekuang": 2.87,
      "m_m_5_30676": 3.5,
      "m_m_5_30678": 3,
      "m_m_5_30674": 4.06,
      "m_m_5_30675": 4.91,
      "m_m_5_89967": 110.09,
      "m_m_5_6246": 0.06,
      "m_m_5_30841": 2.53,
      "m_m_8_632": 1660,
      "m_m_8_634": 999.54,
      "m_m_8_636": 1666,
      "muban": 30.03,
      "m_m_5_35707": 12.89,
      "qiwuling": 34.33,
      "m_m_5_35715": 89.72,
      "zhuzi": 3.54,
      "m_m_5_35567": 4.27,
      "m_m_5_35714": 89,
      "m_m_5_35713": 84.42,
      "m_m_5_89260": 20000,
      "m_m_10_93": 200,
      "m_m_5_35717": 1.7,
      "m_m_5_52337": 1798.99,
      "m_m_5_35772": 2054.79,
      "m_m_5_87917": 348.86,
      "m_m_5_87881": 9666,
      "zasui": 0.7,
      "g_5_30681": 1.12,
      "g_5_30680": 0.7,
      "m_x_5_89355": 1065,
      "m_x_5_89436": 4555,
      "m_x_5_89438": 5555,
      "m_x_5_89441": 4555,
      "m_x_5_89444": 4533,
      "m_x_5_89446": 3222,
      "m_x_5_89335": 1254,
      "m_x_5_89330": 1212.52,
      "m_x_5_89331": 678.39,
      "m_x_5_89337": 964.53,
      "m_x_5_89368": 829.06,
      "m_x_5_89372": 1260.6,
      "m_x_5_89369": 1485,
      "m_x_5_90436": 86.87,
      "m_x_5_89379": 3888,
      "m_x_5_89397": 16666,
      "m_x_5_90437": 71.55,
      "m_x_5_89383": 3999,
      "m_x_5_89389": 4444,
      "m_x_5_89391": 5099,
      "m_x_5_89393": 6200,
      "m_x_5_89394": 4200.8,
      "m_x_5_89396": 5399,
      "m_x_5_20971": 199,
      "m_x_5_89317": 900.41,
      "m_x_5_89320": 1940.87,
      "m_x_5_89426": 2915.34,
      "m_x_5_89427": 3000,
      "m_x_5_89428": 2555,
      "m_x_5_89347": 980,
      "m_x_5_89356": 1099.86,
      "m_x_5_89358": 1111,
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
      "m_x_5_71268": 123.18,
      "m_x_5_71270": 121.55,
      "m_x_5_2302": 5544.91,
      "m_x_5_71271": 104.47,
      "m_x_5_71272": 233.85,
      "m_x_5_71273": 131.48,
      "m_x_5_71274": 108.34,
      "m_x_5_71278": 4.44,
      "m_x_5_71279": 45.6,
      "m_x_5_71280": 36,
      "m_x_5_71282": 2,
      "m_x_5_71283": 9.22,
      "m_x_5_71284": 80.02,
      "m_x_5_71286": 100.63,
      "m_x_5_71287": 98.41,
      "m_x_5_71288": 91.83,
      "m_x_5_71289": 6.06,
      "m_x_5_71290": 18.59,
      "m_x_5_71291": 31.83,
      "m_x_5_71294": 860.28,
      "m_x_5_71295": 521.56,
      "m_x_5_71296": 465,
      "m_x_5_71297": 70.91,
      "m_x_5_71299": 564.99,
      "m_x_5_89316": 2000,
      "m_x_5_89318": 2600.7,
      "m_x_5_89361": 55,
      "m_x_5_89362": 51.99,
      "m_x_5_89363": 188,
      "m_x_5_89364": 253,
      "m_x_5_89365": 200,
      "m_x_8_616": 300.55,
      "m_x_5_3810": 37.9,
      "m_x_5_3782": 3.05,
      "m_x_5_3797": 59.88,
      "m_x_5_2433": 37,
      "m_x_8_625": 1199,
      "m_x_5_2467": 21.06,
      "m_x_8_37": 10.25,
      "m_x_8_38": 60,
      "m_x_8_31": 3.94,
      "m_x_8_69": 191.82,
      "m_x_8_70": 256.24,
      "m_x_5_22145": 78.38,
      "m_x_5_22917": 89.4,
      "m_x_5_22981": 88.03,
      "m_x_5_71196": 998,
      "m_x_5_71198": 1277,
      "m_x_5_71200": 1665.55,
      "m_x_5_71201": 1211,
      "m_x_5_71202": 998,
      "m_x_5_71203": 1599,
      "m_x_5_71204": 1333,
      "m_x_5_71205": 962,
      "m_x_5_71207": 1433,
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
      "m_x_5_89461": 1443.54,
      "m_x_5_89462": 1433,
      "m_x_5_89463": 1443.99,
      "m_x_5_89464": 988,
      "m_x_5_89466": 1111,
      "m_x_5_89469": 1798.46,
      "m_x_5_89471": 1799.31,
      "m_x_5_90289": 332.45,
      "m_x_5_31099": 44.95,
      "m_x_5_31103": 7.92,
      "m_x_5_31104": 99.96,
      "m_x_5_31105": 96.99,
      "m_x_5_31107": 211.96,
      "m_x_5_31108": 96.88,
      "m_x_5_40538": 223.16,
      "m_x_5_71242": 89.38,
      "m_x_5_71243": 152.29,
      "m_x_5_71244": 99,
      "m_x_5_71245": 40.04,
      "m_x_5_71246": 104.86,
      "m_x_5_71247": 136.07,
      "m_x_5_71248": 116.86,
      "m_x_5_71250": 28,
      "m_x_5_71252": 19,
      "m_x_5_71255": 31,
      "m_x_5_71259": 80.39,
      "m_x_5_71260": 104.86,
      "m_x_5_71261": 150.16,
      "m_x_5_71262": 86.1,
      "m_x_5_71264": 19,
      "m_x_5_71265": 29,
      "m_x_5_89341": 80,
      "m_x_5_89342": 150.21,
      "m_x_5_89343": 159.98,
      "m_x_5_89345": 70,
      "m_x_5_89724": 375,
      "m_x_5_2189": 15.88,
      "m_x_8_633": 411.77,
      "m_x_8_635": 1666,
      "m_x_5_5044": 6.7,
      "m_x_5_6024": 11,
      "m_x_5_6073": 6.1,
      "m_x_5_6247": 0.99,
      "m_x_5_6248": 1,
      "m_x_5_10028": 78.88,
      "m_x_5_71129": 118.57,
      "m_x_5_71130": 227.61,
      "m_x_5_71131": 123.03,
      "m_x_5_71132": 177,
      "m_x_5_71133": 1033,
      "m_x_5_71134": 1777,
      "m_x_5_71135": 1666,
      "m_x_5_71136": 1166,
      "m_x_5_71144": 1622,
      "m_x_5_71145": 942,
      "m_x_5_71146": 1999,
      "m_x_5_71147": 1733,
      "m_x_5_71148": 999.33,
      "m_x_5_71150": 1288,
      "m_x_5_71151": 1098,
      "m_x_5_71152": 1933,
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
      "m_x_5_71172": 199,
      "m_x_5_71173": 333,
      "m_x_5_71174": 699,
      "m_x_5_71175": 355,
      "m_x_5_71176": 366,
      "m_x_5_71182": 666,
      "m_x_5_71184": 333,
      "m_x_5_71186": 299,
      "m_x_5_71187": 166,
      "m_x_5_71189": 36,
      "m_x_5_71190": 36,
      "m_x_5_54537": 298,
      "m_x_5_89415": 1186,
      "m_x_5_89416": 1199.92,
      "m_x_5_89417": 1199,
      "m_x_5_89418": 1097.99,
      "m_x_5_89420": 1100,
      "m_x_5_89422": 750,
      "m_x_5_89423": 878.39,
      "m_x_5_89425": 2800.46,
      "m_x_5_89429": 1586.63,
      "m_x_5_90213": 18.35,
      "m_x_5_35004": 2.8,
      "m_x_5_35005": 2.95,
      "m_x_5_35006": 3.1,
      "m_x_5_35007": 2.5,
      "m_x_10_160": 2498,
      "m_x_10_167": 888,
      "m_x_10_100": 340.88,
      "m_x_10_103": 388,
      "m_x_10_104": 350.88,
      "m_x_10_107": 388,
      "m_x_10_108": 388,
      "m_x_5_35771": 840.78,
      "m_x_5_35773": 150,
      "m_x_10_148": 800,
      "m_x_5_38927": 5,
      "m_x_10_672": 1750,
      "m_x_10_1278": 388,
      "m_x_10_1454": 55,
      "m_x_10_1456": 59.98,
      "m_x_10_1458": 60,
      "m_x_5_87873": 588.88,
      "m_x_5_87871": 588.88,
      "m_x_5_87870": 310.31,
      "m_x_5_34184": 18.08,
      "m_x_5_35786": 5,
      "m_x_5_41556": 2.8,
      "m_x_5_40562": 10000,
      "m_x_5_35780": 10.09
    },
    "s_jiutian": {
      "shoupijiao": 55.17,
      "qicaixian": 78.37,
      "bairanxian": 5.3,
      "m_m_5_30852": 19.05,
      "m_m_5_30853": 647.99,
      "m_m_5_30828": 3.8,
      "m_m_5_89165": 50,
      "m_m_5_32000": 4,
      "guajian_bei": 45.33,
      "baihua_bu": 39.88,
      "guajian_yao": 64.38,
      "shuran_bu": 48,
      "shuran_bag": 185.26,
      "wuseshi": 49.88,
      "m_m_5_30856": 17.6,
      "m_m_5_30855": 129.7,
      "geyin_zhang": 300.9,
      "m_m_5_89298": 13.98,
      "m_m_5_30679": 22.04,
      "m_m_5_30847": 8.66,
      "m_m_5_30846": 1.99,
      "yinsi_duan": 54.96,
      "m_m_5_30848": 11,
      "m_m_5_30850": 83.84,
      "m_m_5_30845": 196.83,
      "m_m_5_30844": 0.54,
      "m_m_5_30873": 16.93,
      "m_m_5_30827": 2.99,
      "m_m_5_89970": 86,
      "lucai": 11.29,
      "m_m_5_31973": 1.52,
      "m_m_5_30849": 5,
      "m_m_5_71293": 150.1,
      "m_m_5_30826": 0.19,
      "m_m_5_30825": 0.01,
      "m_m_5_89171": 20,
      "m_m_5_31974": 1.29,
      "m_m_5_71292": 200,
      "m_m_5_30824": 0.14,
      "m_m_5_30823": 2.13,
      "m_m_5_89315": 850.16,
      "m_m_5_89969": 47.98,
      "m_m_5_31976": 0.96,
      "m_m_5_89971": 84.79,
      "lushui": 9,
      "m_m_5_30875": 2.37,
      "m_m_5_30843": 0.87,
      "m_m_5_30874": 25.95,
      "m_m_5_30842": 1,
      "m_m_5_5270": 0.99,
      "m_m_5_31970": 1,
      "m_m_5_5269": 0.01,
      "m_m_5_31013": 195,
      "gancao": 2.78,
      "m_m_5_31012": 399,
      "m_m_5_26231": 2.99,
      "m_m_5_89352": 1620,
      "m_m_5_89350": 1398,
      "m_m_5_89346": 1287,
      "m_m_5_89348": 470.11,
      "jieyuan_dan": 24.99,
      "m_m_5_30836": 3.12,
      "m_m_5_30832": 3,
      "m_m_5_30833": 3.57,
      "m_m_5_89324": 40.99,
      "m_m_5_30831": 2.93,
      "m_m_5_89973": 111.01,
      "m_m_5_31996": 2.74,
      "m_m_5_30838": 2.42,
      "shanhu": 6.96,
      "m_m_5_30835": 2.17,
      "m_m_5_89974": 99,
      "m_m_5_89168": 100,
      "yaoyin": 98.21,
      "m_m_5_31100": 59.88,
      "shaoyao": 2.06,
      "m_m_5_30834": 3.97,
      "m_m_5_31998": 14.99,
      "m_m_5_89328": 1666.18,
      "m_m_5_89340": 270.39,
      "m_m_5_89325": 820,
      "m_m_5_89327": 169,
      "m_m_5_89966": 199.94,
      "m_m_5_31991": 5.58,
      "m_m_5_89377": 666,
      "m_m_5_89968": 52.08,
      "m_m_5_31993": 2.89,
      "m_m_5_89376": 236.51,
      "m_m_5_89965": 70.28,
      "m_m_5_31992": 6.49,
      "m_m_5_89375": 287,
      "m_m_5_89963": 114,
      "m_m_5_89962": 77.71,
      "m_m_5_89964": 35,
      "m_m_5_10027": 70,
      "m_m_5_89961": 46.03,
      "tiekuang": 3.24,
      "m_m_5_30676": 3,
      "m_m_5_30678": 2.37,
      "m_m_5_30674": 3,
      "m_m_5_30675": 4.48,
      "m_m_5_6246": 0.15,
      "m_m_5_6249": 0.5,
      "m_m_5_30841": 18.7,
      "m_m_8_636": 47.99,
      "muban": 153,
      "muliao": 3.04,
      "qiwuling": 38,
      "m_m_5_35716": 59.97,
      "m_m_5_35715": 18,
      "zhuzi": 3.99,
      "m_m_5_35567": 2,
      "m_m_5_35714": 44.86,
      "m_m_5_35713": 18.95,
      "m_m_5_52337": 1500,
      "m_m_5_35772": 3197,
      "zasui": 0.21,
      "g_5_30681": 1.78,
      "g_5_30680": 2,
      "m_x_5_89305": 6163,
      "m_x_5_89349": 1999.53,
      "m_x_5_89351": 1441,
      "m_x_5_89438": 16666.14,
      "m_x_5_89329": 1775.68,
      "m_x_5_89331": 850,
      "m_x_5_89337": 2222.83,
      "m_x_5_89368": 1111.52,
      "m_x_5_89372": 3999,
      "m_x_5_90436": 43.06,
      "m_x_5_90437": 44.65,
      "m_x_5_89388": 8489,
      "m_x_5_89396": 11164.06,
      "m_x_5_89317": 1286.98,
      "m_x_5_89428": 2594.2,
      "m_x_5_89347": 2300,
      "m_x_5_89358": 2209,
      "m_x_5_5232": 2.4,
      "m_x_5_5230": 2.78,
      "m_x_5_5229": 1.12,
      "m_x_5_31052": 999.88,
      "m_x_5_71276": 200.08,
      "m_x_5_71279": 222,
      "m_x_5_71280": 150.98,
      "m_x_5_71294": 1978,
      "m_x_5_71295": 1337,
      "m_x_5_71296": 1278,
      "m_x_5_89316": 860.47,
      "m_x_5_89318": 2298.99,
      "m_x_5_89361": 273.92,
      "m_x_5_89362": 308.89,
      "m_x_5_89363": 500,
      "m_x_5_89364": 359,
      "m_x_8_22": 50.21,
      "m_x_8_627": 162.25,
      "m_x_5_2467": 29.93,
      "m_x_8_31": 10.87,
      "m_x_8_69": 192,
      "m_x_8_70": 190.97,
      "m_x_5_22145": 65.8,
      "m_x_5_22917": 200,
      "m_x_5_22981": 230,
      "m_x_5_71229": 1394,
      "m_x_5_89461": 880,
      "m_x_5_89462": 1555.9,
      "m_x_5_89463": 989.57,
      "m_x_5_89464": 999.94,
      "m_x_5_89466": 999.55,
      "m_x_5_89467": 1700.4,
      "m_x_5_89468": 1200,
      "m_x_5_89469": 1700.67,
      "m_x_5_89470": 2289.02,
      "m_x_5_89471": 2650,
      "m_x_5_89472": 1566,
      "m_x_5_90289": 1000,
      "m_x_5_31099": 48.16,
      "m_x_5_31103": 15.68,
      "m_x_5_31104": 19.97,
      "m_x_5_31105": 138.42,
      "m_x_5_31106": 70,
      "m_x_5_40538": 222.14,
      "m_x_5_71247": 560,
      "m_x_5_71261": 588,
      "m_x_5_89341": 345,
      "m_x_5_89342": 599,
      "m_x_5_89343": 343,
      "m_x_5_89724": 500,
      "m_x_8_17546": 488.74,
      "m_x_5_6247": 4.88,
      "m_x_5_6248": 2.48,
      "m_x_5_10028": 79.88,
      "m_x_5_31141": 199,
      "m_x_5_31142": 99.09,
      "m_x_5_31143": 450.98,
      "m_x_5_40539": 186.28,
      "m_x_5_71130": 374,
      "m_x_5_71190": 265,
      "m_x_5_89415": 779.29,
      "m_x_5_89416": 1050,
      "m_x_5_89417": 1550.1,
      "m_x_5_89418": 1600,
      "m_x_5_89420": 1863.09,
      "m_x_5_89421": 1200,
      "m_x_5_89423": 888.3,
      "m_x_5_89424": 2289.31,
      "m_x_5_89429": 2630.27,
      "m_x_5_35005": 3.73,
      "m_x_5_35006": 3,
      "m_x_5_35007": 4.11,
      "m_x_5_35044": 0.26,
      "m_x_10_103": 444,
      "m_x_10_110": 159,
      "m_x_5_35771": 998.88,
      "m_x_5_35773": 3333,
      "m_x_5_35775": 900,
      "m_x_5_38373": 6000,
      "m_x_5_38374": 5808,
      "m_x_5_36491": 1.2,
      "m_x_5_6250": 0.8,
      "m_x_5_6251": 5.4,
      "m_x_5_10030": 19.08,
      "m_x_5_35780": 41
    },
    "s_meijianxue": {
      "dimai": 79995,
      "fengwangjiang": 166.84,
      "shoupijiao": 70,
      "qicaixian": 135,
      "bairanxian": 10.1,
      "m_m_5_30852": 16.83,
      "m_m_5_30853": 86,
      "m_m_5_30828": 3.15,
      "guajian_bei": 75.99,
      "baihua_bu": 99.88,
      "guajian_yao": 83,
      "shuran_bu": 109.42,
      "wuseshi": 119.99,
      "m_m_5_30856": 23.98,
      "m_m_5_30855": 161.64,
      "geyin_zhang": 99,
      "m_m_5_89298": 50.39,
      "m_m_5_30679": 14.8,
      "m_m_5_30847": 9.44,
      "m_m_5_30846": 2.98,
      "yinsi_duan": 107.96,
      "m_m_5_30848": 29.15,
      "m_m_5_30850": 185.66,
      "m_m_5_30845": 188.58,
      "m_m_5_31397": 7,
      "m_m_5_89433": 6110,
      "m_m_5_30844": 0.44,
      "m_m_5_30873": 26,
      "m_m_8_36148": 899.99,
      "m_m_5_89474": 2555.66,
      "m_m_5_30827": 1.7,
      "m_m_5_89970": 188.65,
      "m_m_5_32014": 302,
      "lucai": 16,
      "m_m_5_31973": 1.22,
      "m_m_5_30849": 5.9,
      "m_m_5_71293": 35,
      "m_m_5_30826": 0.59,
      "m_m_5_30825": 0.14,
      "m_m_5_31974": 0.95,
      "m_m_5_31968": 7,
      "m_m_5_71292": 23.26,
      "m_m_5_30824": 0.5,
      "m_m_5_71281": 30.06,
      "m_m_5_30823": 0.14,
      "m_m_5_89315": 1598.92,
      "m_m_5_89969": 143.76,
      "m_m_5_89971": 195,
      "lushui": 14.95,
      "m_m_5_30875": 2,
      "m_m_5_30829": 1,
      "m_m_5_30843": 0.69,
      "m_m_5_30874": 26,
      "m_m_5_30842": 0.67,
      "m_m_5_5269": 0.02,
      "m_m_5_31013": 184.86,
      "gancao": 3.99,
      "m_m_5_31012": 350.88,
      "m_m_5_89304": 4779.97,
      "m_m_5_89352": 779.5,
      "m_m_5_89350": 607.91,
      "m_m_5_71269": 159,
      "m_m_5_89346": 714.85,
      "m_m_5_89348": 180.57,
      "m_m_5_71285": 111.99,
      "jieyuan_dan": 110.67,
      "m_m_5_30836": 2.7,
      "m_m_5_30832": 2.25,
      "m_m_5_30833": 1.98,
      "m_m_5_89324": 98.66,
      "m_m_5_30831": 0.46,
      "m_m_5_89973": 156.46,
      "m_m_5_71240": 88.9,
      "m_m_5_31995": 1.06,
      "m_m_5_30838": 3.13,
      "shanhu": 2.49,
      "m_m_5_30835": 2.39,
      "m_m_5_89974": 100,
      "m_m_5_71267": 81.24,
      "m_m_5_89168": 90,
      "yaoyin": 174.75,
      "m_m_5_31100": 66.18,
      "shaoyao": 2.79,
      "m_m_5_30834": 4.44,
      "m_m_5_89340": 90.65,
      "m_m_5_89325": 799.45,
      "m_m_5_71258": 120,
      "m_m_5_31999": 28.57,
      "m_m_5_89327": 122,
      "m_m_5_89966": 130,
      "m_m_5_89968": 93.57,
      "m_m_5_89376": 560.48,
      "m_m_5_89965": 85,
      "m_m_5_89963": 55.05,
      "m_m_5_71192": 10.88,
      "m_m_5_89962": 96.3,
      "m_m_5_31139": 4499.98,
      "m_m_5_89964": 87,
      "m_m_5_10027": 77,
      "m_m_5_89961": 97,
      "tiekuang": 3.17,
      "m_m_5_30676": 2.45,
      "m_m_5_30678": 1.9,
      "m_m_5_30674": 4.86,
      "m_m_5_30675": 4.16,
      "m_m_5_89967": 75,
      "m_m_5_30841": 2.69,
      "muban": 27,
      "muliao": 5.9,
      "qiwuling": 23.65,
      "m_m_5_35715": 89.2,
      "zhuzi": 10,
      "m_m_5_35567": 5,
      "m_m_5_35714": 20,
      "m_m_5_35713": 89.97,
      "m_m_10_93": 1,
      "m_m_5_35717": 1.68,
      "m_m_5_52337": 1887,
      "m_m_5_35772": 1285,
      "m_m_5_87917": 250.46,
      "m_m_5_87881": 9999,
      "zasui": 0.28,
      "g_5_30681": 0.69,
      "g_5_30680": 0.89,
      "m_x_5_89353": 1600.23,
      "m_x_5_89305": 4288,
      "m_x_5_89349": 920,
      "m_x_5_89355": 1900.33,
      "m_x_5_89351": 1063.57,
      "m_x_5_89357": 2787.91,
      "m_x_5_89439": 5333.68,
      "m_x_5_89440": 4640.75,
      "m_x_5_89441": 5998.13,
      "m_x_5_89455": 23552.32,
      "m_x_5_89443": 5666.95,
      "m_x_5_89445": 5244.17,
      "m_x_5_89329": 828.6,
      "m_x_5_89335": 999.88,
      "m_x_5_89330": 443.96,
      "m_x_5_89331": 750,
      "m_x_5_89337": 1200,
      "m_x_5_89368": 998.66,
      "m_x_5_90436": 94.8,
      "m_x_5_89379": 5332,
      "m_x_5_90437": 49,
      "m_x_5_89383": 7999.8,
      "m_x_5_89388": 4999,
      "m_x_5_89389": 5888.96,
      "m_x_5_89390": 5555.71,
      "m_x_5_89391": 5778,
      "m_x_5_89393": 6000,
      "m_x_5_89394": 10000,
      "m_x_5_89396": 5333.5,
      "m_x_5_89317": 998.98,
      "m_x_5_89347": 987.99,
      "m_x_5_89356": 1999,
      "m_x_5_89358": 1038,
      "m_x_5_89326": 1100,
      "m_x_5_31050": 92.33,
      "m_x_5_31055": 998,
      "m_x_5_31056": 88.99,
      "m_x_5_31058": 3,
      "m_x_5_31059": 10000,
      "m_x_5_71268": 150.22,
      "m_x_5_71270": 82.93,
      "m_x_5_71271": 119,
      "m_x_5_71272": 160.66,
      "m_x_5_71273": 188.21,
      "m_x_5_71274": 121.97,
      "m_x_5_71275": 110,
      "m_x_5_71276": 32.16,
      "m_x_5_71278": 12,
      "m_x_5_71279": 15.99,
      "m_x_5_71280": 24.95,
      "m_x_5_71282": 28.75,
      "m_x_5_71284": 149.06,
      "m_x_5_71286": 96.66,
      "m_x_5_71287": 98.4,
      "m_x_5_71288": 110.79,
      "m_x_5_71289": 34,
      "m_x_5_71291": 18.29,
      "m_x_5_71294": 799.93,
      "m_x_5_71295": 593.27,
      "m_x_5_71296": 500.48,
      "m_x_5_71298": 21.63,
      "m_x_5_71299": 497.99,
      "m_x_5_71300": 29.6,
      "m_x_5_89316": 1888,
      "m_x_5_89318": 2286.42,
      "m_x_5_89361": 65,
      "m_x_5_89362": 117.76,
      "m_x_5_89363": 50.86,
      "m_x_5_89364": 220.88,
      "m_x_5_89366": 200,
      "m_x_5_3810": 80.96,
      "m_x_5_3811": 50,
      "m_x_5_3797": 3.03,
      "m_x_8_37": 30,
      "m_x_5_6067": 0.04,
      "m_x_8_31": 8.08,
      "m_x_8_69": 150.5,
      "m_x_8_70": 200.61,
      "m_x_5_22145": 55.87,
      "m_x_5_22917": 114.1,
      "m_x_5_22981": 197,
      "m_x_5_71195": 1999.88,
      "m_x_5_71196": 1388.37,
      "m_x_5_71199": 1531.41,
      "m_x_5_71201": 1474.89,
      "m_x_5_71202": 1199.11,
      "m_x_5_71203": 1888,
      "m_x_5_71204": 1658.16,
      "m_x_5_71206": 1941.88,
      "m_x_5_71214": 900.21,
      "m_x_5_71215": 1831.64,
      "m_x_5_71223": 350,
      "m_x_5_71224": 299,
      "m_x_5_71229": 600.72,
      "m_x_5_71239": 1096,
      "m_x_5_89461": 2599.98,
      "m_x_5_89462": 1788.8,
      "m_x_5_89464": 1888.07,
      "m_x_5_89466": 1022,
      "m_x_5_89467": 1538.73,
      "m_x_5_89468": 1422,
      "m_x_5_89469": 995,
      "m_x_5_89470": 845,
      "m_x_5_89471": 2222,
      "m_x_5_89472": 2495,
      "m_x_5_31099": 66.2,
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
      "m_x_5_71245": 83.94,
      "m_x_5_71246": 182.71,
      "m_x_5_71247": 130.48,
      "m_x_5_71248": 145.98,
      "m_x_5_71250": 46.5,
      "m_x_5_71254": 29.28,
      "m_x_5_71255": 33.32,
      "m_x_5_71259": 101,
      "m_x_5_71260": 193,
      "m_x_5_71261": 135.68,
      "m_x_5_71262": 119.66,
      "m_x_5_71263": 14.39,
      "m_x_5_71265": 20.5,
      "m_x_5_89341": 189.89,
      "m_x_5_89342": 95.94,
      "m_x_5_89343": 120.35,
      "m_x_5_89344": 50,
      "m_x_5_89345": 48.88,
      "m_x_5_2589": 15,
      "m_x_5_2631": 20.02,
      "m_x_5_5044": 20,
      "m_x_5_6024": 10000,
      "m_x_5_6247": 5.67,
      "m_x_5_6248": 1.22,
      "m_x_5_10028": 79,
      "m_x_5_71129": 128.02,
      "m_x_5_71130": 105.99,
      "m_x_5_71131": 103.71,
      "m_x_5_71133": 1299.41,
      "m_x_5_71143": 1977.2,
      "m_x_5_71144": 1900,
      "m_x_5_71145": 1395.15,
      "m_x_5_71147": 1586,
      "m_x_5_71148": 1197,
      "m_x_5_71149": 1466.21,
      "m_x_5_71151": 1299,
      "m_x_5_71152": 2600.3,
      "m_x_5_71160": 1088.93,
      "m_x_5_71164": 549.64,
      "m_x_5_71169": 444.39,
      "m_x_5_71171": 390,
      "m_x_5_71173": 407.11,
      "m_x_5_71174": 570.85,
      "m_x_5_71182": 333,
      "m_x_5_71184": 333.41,
      "m_x_5_71185": 600.16,
      "m_x_5_71189": 61.59,
      "m_x_5_71190": 36.52,
      "m_x_5_71191": 19.83,
      "m_x_5_54537": 185,
      "m_x_5_89415": 999,
      "m_x_5_89416": 1067.31,
      "m_x_5_89417": 1348,
      "m_x_5_89418": 920,
      "m_x_5_89420": 1200.8,
      "m_x_5_89421": 870,
      "m_x_5_89422": 1170,
      "m_x_5_89423": 962.88,
      "m_x_5_89425": 1777.48,
      "m_x_5_89429": 7888.86,
      "m_x_5_89431": 2597,
      "m_x_5_35005": 3.6,
      "m_x_10_170": 28.88,
      "m_x_10_106": 50.88,
      "m_x_10_109": 100,
      "m_x_10_110": 100,
      "m_x_5_35771": 758,
      "m_x_5_35773": 1999.46,
      "m_x_10_134": 500,
      "m_x_10_148": 194,
      "m_x_5_38374": 1922.31,
      "m_x_10_1086": 358.88,
      "m_x_10_1087": 128.88,
      "m_x_10_1088": 388.88,
      "m_x_10_1090": 400.88,
      "m_x_10_2031": 1250.87,
      "m_x_5_32007": 50.54,
      "m_x_5_32010": 0.8,
      "m_x_5_54059": 6
    },
    "s_shanhai": {
      "dimai": 80000,
      "fengwangjiang": 218.7,
      "shoupijiao": 100.45,
      "qicaixian": 150,
      "bairanxian": 20,
      "m_m_5_30852": 30.64,
      "m_m_5_30853": 80.79,
      "m_m_5_30828": 3.34,
      "guajian_bei": 59.21,
      "baihua_bu": 87.55,
      "guajian_yao": 69,
      "shuran_bu": 102.99,
      "wuseshi": 298.91,
      "m_m_5_30856": 16.3,
      "m_m_5_30855": 150,
      "geyin_zhang": 88.43,
      "m_m_5_89298": 35.44,
      "m_m_5_30679": 14.98,
      "m_m_5_30847": 10.62,
      "m_m_5_30846": 1.45,
      "yinsi_duan": 179.99,
      "m_m_5_30848": 19,
      "m_m_5_30850": 170.67,
      "m_m_5_30845": 198,
      "m_m_5_30844": 0.48,
      "m_m_5_30873": 33.29,
      "m_m_5_90205": 120.87,
      "m_m_8_36148": 1299,
      "m_m_5_30827": 0.88,
      "m_m_5_89970": 175.93,
      "m_m_5_32014": 219.99,
      "lucai": 16.39,
      "m_m_5_1831": 100,
      "m_m_5_30849": 6,
      "m_m_5_71293": 30.4,
      "m_m_5_30826": 0.22,
      "m_m_5_30825": 0.01,
      "m_m_5_89171": 29.5,
      "m_m_5_30824": 0.4,
      "m_m_5_30823": 0.22,
      "m_m_5_71277": 21.7,
      "m_m_5_89315": 1388.99,
      "m_m_5_89969": 157.05,
      "m_m_5_31976": 1,
      "m_m_5_89303": 4555.48,
      "m_m_5_89971": 170,
      "lushui": 16.24,
      "m_m_5_30875": 0.98,
      "m_m_5_30843": 0.85,
      "m_m_5_30874": 28.17,
      "m_m_5_30842": 0.99,
      "m_m_5_5270": 0.6,
      "m_m_5_5269": 0.07,
      "m_m_5_31013": 185,
      "gancao": 2.76,
      "m_m_5_31012": 294.98,
      "m_m_5_89352": 707.14,
      "m_m_5_89350": 750,
      "m_m_5_71269": 200,
      "m_m_5_89346": 691.04,
      "m_m_5_89348": 344.59,
      "m_m_5_71285": 130.93,
      "jieyuan_dan": 30,
      "m_m_5_30836": 2.88,
      "m_m_5_30832": 2,
      "m_m_5_30833": 2.01,
      "m_m_5_89324": 110.45,
      "m_m_5_30831": 3.89,
      "m_m_5_89973": 140.8,
      "m_m_5_71266": 28.3,
      "m_m_5_30838": 0.77,
      "shanhu": 3.2,
      "m_m_5_30835": 2.49,
      "m_m_5_89974": 79,
      "yaoyin": 195.36,
      "m_m_5_31100": 135.95,
      "shaoyao": 2.08,
      "m_m_5_30834": 4.08,
      "m_m_5_89328": 853.92,
      "m_m_5_89340": 109.91,
      "m_m_5_89325": 759.92,
      "m_m_5_71258": 121,
      "m_m_5_89327": 108.4,
      "m_m_5_89966": 85,
      "m_m_5_89968": 82.39,
      "m_m_5_89376": 454,
      "m_m_5_89965": 99.99,
      "m_m_5_31992": 1.01,
      "m_m_5_89375": 200,
      "m_m_5_89963": 90,
      "m_m_5_89962": 78.99,
      "m_m_5_31139": 6900,
      "m_m_5_89964": 72,
      "m_m_5_10027": 89.81,
      "m_m_5_89961": 75.04,
      "tiekuang": 2.64,
      "m_m_5_30676": 2.44,
      "m_m_5_30678": 1.67,
      "m_m_5_30674": 2.48,
      "m_m_5_30675": 3.68,
      "m_m_5_89967": 77.8,
      "m_m_5_6246": 0.07,
      "m_m_5_30841": 3.08,
      "muban": 89.92,
      "muliao": 3.86,
      "qiwuling": 25,
      "m_m_5_35716": 13.92,
      "m_m_5_35715": 27,
      "zhuzi": 2.4,
      "m_m_5_35567": 1.92,
      "m_m_5_35714": 89.1,
      "m_m_5_35713": 29.07,
      "m_m_5_35717": 4.89,
      "m_m_5_52337": 2099.97,
      "m_m_5_35772": 1997.99,
      "zasui": 0.39,
      "g_5_30681": 0.7,
      "g_5_30680": 0.63,
      "m_x_5_89353": 749.99,
      "m_x_5_89305": 4600.8,
      "m_x_5_89349": 1514.36,
      "m_x_5_89351": 600,
      "m_x_5_89438": 5600,
      "m_x_5_89439": 7777,
      "m_x_5_89441": 4999,
      "m_x_5_89455": 23333,
      "m_x_5_89443": 6988.97,
      "m_x_5_89445": 7901,
      "m_x_5_89329": 989.83,
      "m_x_5_89331": 770,
      "m_x_5_89337": 1140.01,
      "m_x_5_89368": 952.3,
      "m_x_5_89369": 1100.1,
      "m_x_5_90436": 65.55,
      "m_x_5_89379": 5288,
      "m_x_5_89380": 5664.2,
      "m_x_5_90437": 57.96,
      "m_x_5_89388": 5300,
      "m_x_5_89389": 6443.82,
      "m_x_5_89407": 20000,
      "m_x_5_89390": 3999,
      "m_x_5_89396": 6800.63,
      "m_x_5_89317": 799,
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
      "m_x_5_71272": 125.58,
      "m_x_5_71273": 200,
      "m_x_5_71274": 178.71,
      "m_x_5_71275": 186.97,
      "m_x_5_71278": 8.7,
      "m_x_5_71280": 24.24,
      "m_x_5_71282": 12,
      "m_x_5_71284": 140.01,
      "m_x_5_71286": 150,
      "m_x_5_71287": 150,
      "m_x_5_71288": 150.54,
      "m_x_5_71289": 10.99,
      "m_x_5_71290": 11,
      "m_x_5_71294": 480,
      "m_x_5_71295": 400,
      "m_x_5_71296": 300.51,
      "m_x_5_71297": 340,
      "m_x_5_71299": 2602.63,
      "m_x_5_89316": 1500.25,
      "m_x_5_89318": 1869,
      "m_x_5_89361": 246.06,
      "m_x_5_89362": 45,
      "m_x_5_89363": 188,
      "m_x_5_89364": 109.99,
      "m_x_8_617": 220,
      "m_x_5_3782": 2,
      "m_x_5_2467": 9,
      "m_x_8_31": 20,
      "m_x_5_22917": 91.97,
      "m_x_5_22981": 93,
      "m_x_5_71196": 1588.92,
      "m_x_5_71198": 1800,
      "m_x_5_71199": 1868,
      "m_x_5_71200": 2499.86,
      "m_x_5_71201": 1488,
      "m_x_5_71202": 1400.11,
      "m_x_5_71203": 2390,
      "m_x_5_71204": 1700,
      "m_x_5_71205": 1489.97,
      "m_x_5_71206": 1930.22,
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
      "m_x_5_89465": 1666,
      "m_x_5_89466": 1200.84,
      "m_x_5_89468": 1333,
      "m_x_5_89469": 1433,
      "m_x_5_89471": 3121.36,
      "m_x_5_31099": 86.18,
      "m_x_5_31103": 11.94,
      "m_x_5_31104": 7,
      "m_x_5_31105": 500,
      "m_x_5_31107": 153.75,
      "m_x_5_31108": 49.88,
      "m_x_5_40538": 200,
      "m_x_5_71242": 95.89,
      "m_x_5_71243": 134.79,
      "m_x_5_71244": 100.08,
      "m_x_5_71245": 70.56,
      "m_x_5_71247": 122,
      "m_x_5_71248": 200,
      "m_x_5_71249": 97.94,
      "m_x_5_71251": 27.24,
      "m_x_5_71252": 55,
      "m_x_5_71259": 158.14,
      "m_x_5_71260": 100.54,
      "m_x_5_71261": 123.49,
      "m_x_5_71262": 98.86,
      "m_x_5_71263": 39.66,
      "m_x_5_89341": 300,
      "m_x_5_89342": 80.52,
      "m_x_5_89343": 107,
      "m_x_5_6248": 1.22,
      "m_x_5_71129": 100.38,
      "m_x_5_71130": 119.32,
      "m_x_5_71131": 89,
      "m_x_5_71133": 1181.92,
      "m_x_5_71134": 1994.58,
      "m_x_5_71141": 1697.97,
      "m_x_5_71144": 1450.88,
      "m_x_5_71145": 1894.47,
      "m_x_5_71147": 1748.73,
      "m_x_5_71148": 1439.98,
      "m_x_5_71150": 1500,
      "m_x_5_71151": 1300,
      "m_x_5_71185": 677.21,
      "m_x_5_89415": 998.4,
      "m_x_5_89417": 1699.85,
      "m_x_5_89418": 886.7,
      "m_x_5_89419": 1219,
      "m_x_5_89420": 1187.7,
      "m_x_5_89421": 910,
      "m_x_5_89422": 500,
      "m_x_5_89423": 2190.86,
      "m_x_5_89425": 1000,
      "m_x_5_89429": 2222,
      "m_x_5_35004": 3.6,
      "m_x_5_35005": 3.33,
      "m_x_5_35006": 3.57,
      "m_x_5_35007": 2,
      "m_x_5_35044": 0.02,
      "m_x_5_35771": 879,
      "m_x_5_38927": 6.91,
      "m_x_5_32012": 10000
    },
    "s_aoxue": {
      "fengwangjiang": 555,
      "shoupijiao": 70,
      "qicaixian": 250,
      "m_m_5_30852": 75.03,
      "m_m_5_30853": 66.73,
      "m_m_5_30828": 12.59,
      "guajian_bei": 70,
      "baihua_bu": 250,
      "guajian_yao": 60,
      "shuran_bu": 300,
      "shuran_bag": 222,
      "wuseshi": 599,
      "m_m_5_30856": 18,
      "m_m_5_30855": 250,
      "geyin_zhang": 200,
      "m_m_5_30679": 18.07,
      "m_m_5_30847": 7,
      "m_m_5_30846": 13,
      "m_m_5_30850": 93.24,
      "m_m_5_30845": 201.99,
      "m_m_5_30844": 0.75,
      "m_m_5_30873": 29,
      "m_m_8_36148": 4999.99,
      "m_m_5_30827": 0.2,
      "m_m_5_89970": 666,
      "lucai": 99.66,
      "m_m_5_30826": 0.92,
      "m_m_5_30825": 0.18,
      "m_m_5_30824": 0.97,
      "m_m_5_71281": 5,
      "m_m_5_30823": 1.15,
      "m_m_5_89315": 1999.99,
      "m_m_5_89969": 300,
      "m_m_5_89971": 350,
      "lushui": 6.3,
      "m_m_5_30875": 12,
      "m_m_5_30843": 1.5,
      "m_m_5_30874": 120,
      "m_m_5_30842": 0.82,
      "m_m_5_31013": 259.99,
      "gancao": 1.67,
      "m_m_5_31012": 563,
      "m_m_5_89352": 1500,
      "m_m_5_89350": 2500,
      "m_m_5_71269": 275.88,
      "m_m_5_89346": 1650,
      "m_m_5_71285": 50,
      "m_m_5_30836": 2.9,
      "m_m_5_30832": 0.85,
      "m_m_5_30833": 1.18,
      "m_m_5_89324": 200,
      "m_m_5_30831": 0.76,
      "m_m_5_89973": 350,
      "m_m_5_71241": 10,
      "m_m_5_71240": 24,
      "m_m_5_71266": 30,
      "m_m_5_30838": 1.56,
      "shanhu": 1.96,
      "m_m_5_30835": 1.09,
      "m_m_5_71267": 111,
      "yaoyin": 350,
      "m_m_5_31102": 0.28,
      "m_m_5_30834": 1.67,
      "m_m_5_89340": 475,
      "m_m_5_89325": 1700,
      "m_m_5_71258": 50,
      "m_m_5_89966": 400,
      "m_m_5_89968": 240,
      "m_m_5_71192": 50,
      "m_m_5_89962": 240,
      "m_m_5_31139": 5000,
      "m_m_5_89964": 400,
      "m_m_5_10027": 109.99,
      "m_m_5_89961": 240,
      "tiekuang": 2.15,
      "m_m_5_30676": 1.87,
      "m_m_5_30678": 1.96,
      "m_m_5_30674": 2.38,
      "m_m_5_30675": 1.9,
      "m_m_5_6246": 0.07,
      "muban": 30,
      "muliao": 2.36,
      "qiwuling": 4.9,
      "m_m_5_35716": 30,
      "m_m_5_35715": 50,
      "zhuzi": 2.37,
      "m_m_5_35714": 40,
      "m_m_5_35713": 20,
      "m_m_10_1880": 2170,
      "m_m_5_35717": 5,
      "m_m_5_52337": 2500,
      "m_m_5_35772": 2200.33,
      "g_5_30681": 7.14,
      "g_5_30680": 1.01,
      "m_x_5_89441": 23999.5,
      "m_x_5_89331": 800,
      "m_x_5_89368": 1037.5,
      "m_x_5_90436": 400,
      "m_x_5_89379": 6269.33,
      "m_x_5_90437": 300,
      "m_x_5_89391": 7777,
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
      "m_x_5_71290": 33,
      "m_x_5_71294": 1111.09,
      "m_x_5_71295": 600,
      "m_x_5_71296": 1110.97,
      "m_x_5_71297": 600,
      "m_x_5_71299": 500,
      "m_x_5_89361": 230,
      "m_x_5_89364": 220,
      "m_x_5_3810": 222,
      "m_x_8_69": 599.95,
      "m_x_5_22145": 249.99,
      "m_x_5_22917": 90,
      "m_x_5_22981": 280,
      "m_x_5_71196": 700.57,
      "m_x_5_71198": 1100,
      "m_x_5_71199": 1300.38,
      "m_x_5_71200": 1100,
      "m_x_5_71201": 1100,
      "m_x_5_71202": 800.12,
      "m_x_5_71203": 2000,
      "m_x_5_71206": 1600,
      "m_x_5_71207": 1900,
      "m_x_5_71214": 400,
      "m_x_5_71225": 400.98,
      "m_x_5_71229": 799.99,
      "m_x_5_31103": 25.69,
      "m_x_5_31104": 100.27,
      "m_x_5_40538": 30,
      "m_x_5_71242": 187.27,
      "m_x_5_71243": 270,
      "m_x_5_71245": 20,
      "m_x_5_71246": 270,
      "m_x_5_71247": 280,
      "m_x_5_71248": 115.5,
      "m_x_5_71250": 49.99,
      "m_x_5_71251": 50,
      "m_x_5_71252": 19.09,
      "m_x_5_71254": 50,
      "m_x_5_71255": 111,
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
      "m_x_5_6247": 1,
      "m_x_5_6248": 1.71,
      "m_x_5_10028": 399.98,
      "m_x_5_40539": 200,
      "m_x_5_71129": 60,
      "m_x_5_71130": 120,
      "m_x_5_71131": 144,
      "m_x_5_71132": 320,
      "m_x_5_71133": 1000,
      "m_x_5_71144": 1600.19,
      "m_x_5_71150": 1861.1,
      "m_x_5_71151": 900.97,
      "m_x_5_71191": 13,
      "m_x_5_54537": 100,
      "m_x_5_35004": 3.9,
      "m_x_5_35005": 1.89,
      "m_x_5_35006": 4.99,
      "m_x_5_35007": 2.09,
      "m_x_5_35044": 0.13,
      "m_x_5_35771": 1400,
      "m_x_5_35773": 1500,
      "m_x_10_139": 599,
      "m_x_5_38927": 3.69,
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
      "2": 4.14,
      "3": 14.68,
      "4": 48.97,
      "5": 165.98,
      "6": 554.14,
      "7": 8499.95,
      "8": 26600.17
    },
    "s_pozhenzi": {
      "1": 0.81,
      "2": 5.67,
      "3": 12.99,
      "4": 52.95,
      "5": 160.11,
      "6": 512.67,
      "7": 8500,
      "8": 25000.48
    },
    "s_dielianhua": {
      "1": 0.8,
      "2": 3.97,
      "3": 13.37,
      "4": 49.79,
      "5": 168.76,
      "6": 516.22,
      "7": 10888.88,
      "8": 25000.51
    },
    "s_jiandan": {
      "1": 0.84,
      "2": 4.93,
      "3": 13.33,
      "4": 10000,
      "5": 155.31,
      "6": 514.2,
      "7": 8887.99,
      "8": 26383.36
    },
    "s_youyuelun": {
      "1": 0.81,
      "2": 5.3,
      "3": 13.28,
      "4": 52.98,
      "5": 189,
      "6": 510.28,
      "7": 8398.33,
      "8": 25998.43
    },
    "s_longzheng": {
      "1": 0.8,
      "2": 3.79,
      "3": 12.98,
      "4": 48.98,
      "5": 180.49,
      "6": 512.21,
      "7": 9999.07,
      "8": 27847.22
    },
    "s_changancheng": {
      "1": 0.8,
      "2": 4.88,
      "3": 18.88,
      "4": 47.27,
      "5": 160,
      "6": 510.93,
      "7": 10888.88,
      "8": 28555.11
    },
    "s_douzhuang": {
      "1": 0.85,
      "2": 5.52,
      "3": 13.32,
      "4": 47.36,
      "5": 177.24,
      "6": 511.94,
      "7": 9999,
      "8": 24200.4
    },
    "s_qiankun": {
      "1": 0.81,
      "2": 4.79,
      "3": 13.84,
      "4": 51.74,
      "5": 178.3,
      "6": 524.9,
      "7": 9390.82,
      "8": 24740.33
    },
    "s_weiwo": {
      "1": 0.83,
      "2": 4.2,
      "3": 14.1,
      "4": 52.75,
      "5": 162.92,
      "6": 573.35,
      "7": 9100.47,
      "8": 27200.22
    },
    "s_juedai": {
      "1": 0.81,
      "2": 5.82,
      "3": 14.88,
      "4": 51.97,
      "5": 154.54,
      "6": 511.06,
      "7": 10888.88,
      "8": 24660.96
    },
    "s_tianeping": {
      "1": 0.81,
      "2": 14.65,
      "3": 14.13,
      "4": 55,
      "5": 152,
      "6": 520.35,
      "7": 9500.01,
      "8": 26922.64
    },
    "s_feilong": {
      "1": 0.81,
      "2": 4.5,
      "3": 12,
      "4": 56.65,
      "5": 158.99,
      "6": 510.74,
      "7": 9696,
      "8": 26253.99
    },
    "s_jiutian": {
      "1": 0.81,
      "2": 5.91,
      "3": 17.1,
      "4": 76.87,
      "5": 192.97,
      "6": 637.82,
      "7": 20500.69,
      "8": 46624.45
    },
    "s_meijianxue": {
      "1": 0.81,
      "2": 4.95,
      "3": 15.44,
      "4": 46.89,
      "5": 188.33,
      "6": 534.52,
      "7": 8200,
      "8": 31111.91
    },
    "s_shanhai": {
      "1": 0.81,
      "3": 13.59,
      "4": 58,
      "5": 155.08,
      "6": 550,
      "7": 8999,
      "8": 25888.88
    },
    "s_aoxue": {
      "1": 1,
      "3": 41.58,
      "4": 81.14,
      "5": 210,
      "6": 666.92,
      "7": 6500,
      "8": 25996.23
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
