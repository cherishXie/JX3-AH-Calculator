/* =========================================================================
   剑网三物价助手 · 苍生铸世 50 级生活技艺数据
   数据版本：v3.3（2026-11-18）
   价格修订：2026-11-18T22:15:09+08:00 · JX3BOX 全服拍卖
   制造：JX3BOX 技艺助手 API · 154 条代表配方
   采集：17 条按材料拆分；产值按掉率折算
   ========================================================================= */
window.JX3Data = {
  "meta": {
    "game": "剑网3",
    "expansion": "苍生铸世",
    "levelCap": 50,
    "version": "苍生铸世 · 50 级",
    "catalogVersion": "v3.3",
    "seedVersion": "cs50-v3.3-p20261118221509",
    "updatedAt": "2026-11-18",
    "verifiedAt": "2026-11-18",
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
      }
    ],
    "scope": "收录 154 条当前版本制造配方 + 17 条按材料拆分的当前版本采集点（神农/采金/庖丁）",
    "priceUpdatedAt": "2026-11-18T22:15:09+08:00",
    "priceCoverage": {
      "updated": 199,
      "total": 263,
      "source": "JX3BOX 拍卖 · 17 个服务器",
      "filtered": 18,
      "noQuote": 64
    },
    "serverCoverage": {
      "s_mengjiangnan": {
        "updated": 199,
        "total": 263,
        "filtered": 18,
        "noQuote": 64
      },
      "s_pozhenzi": {
        "updated": 148,
        "total": 263,
        "filtered": 32,
        "noQuote": 115
      },
      "s_dielianhua": {
        "updated": 148,
        "total": 263,
        "filtered": 21,
        "noQuote": 115
      },
      "s_jiandan": {
        "updated": 146,
        "total": 263,
        "filtered": 29,
        "noQuote": 117
      },
      "s_youyuelun": {
        "updated": 165,
        "total": 263,
        "filtered": 26,
        "noQuote": 98
      },
      "s_longzheng": {
        "updated": 179,
        "total": 263,
        "filtered": 20,
        "noQuote": 84
      },
      "s_changancheng": {
        "updated": 149,
        "total": 263,
        "filtered": 23,
        "noQuote": 114
      },
      "s_douzhuang": {
        "updated": 160,
        "total": 263,
        "filtered": 29,
        "noQuote": 103
      },
      "s_qiankun": {
        "updated": 166,
        "total": 263,
        "filtered": 27,
        "noQuote": 97
      },
      "s_weiwo": {
        "updated": 197,
        "total": 263,
        "filtered": 15,
        "noQuote": 66
      },
      "s_juedai": {
        "updated": 174,
        "total": 263,
        "filtered": 26,
        "noQuote": 89
      },
      "s_tianeping": {
        "updated": 172,
        "total": 263,
        "filtered": 29,
        "noQuote": 91
      },
      "s_feilong": {
        "updated": 138,
        "total": 263,
        "filtered": 33,
        "noQuote": 125
      },
      "s_jiutian": {
        "updated": 115,
        "total": 263,
        "filtered": 40,
        "noQuote": 148
      },
      "s_meijianxue": {
        "updated": 132,
        "total": 263,
        "filtered": 22,
        "noQuote": 131
      },
      "s_shanhai": {
        "updated": 116,
        "total": 263,
        "filtered": 21,
        "noQuote": 147
      },
      "s_aoxue": {
        "updated": 77,
        "total": 263,
        "filtered": 13,
        "noQuote": 186
      }
    }
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
      "desc": "采集紫苏、黄花菜、鱼腥草、虫草、甘草、芍药与珊瑚等草药，并有几率获得云芝、鸡血石；掉率与专精影响期望产值。"
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
      "priceSource": "seed"
    },
    {
      "id": "dimai",
      "name": "地脉玄元",
      "skillId": "fengren",
      "kind": "material",
      "tier": 4,
      "source": "交易行",
      "base": 24000,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "seed"
    },
    {
      "id": "fengwangjiang",
      "name": "蜂王浆",
      "skillId": "fengren",
      "kind": "material",
      "tier": 4,
      "source": "交易行",
      "base": 187.95,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010327
    },
    {
      "id": "shoupijiao",
      "name": "兽皮胶",
      "skillId": "fengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 50.96,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010278
    },
    {
      "id": "qicaixian",
      "name": "七彩线",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 169.09,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010280
    },
    {
      "id": "bairanxian",
      "name": "百染线",
      "skillId": "fengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 3.69,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795006664
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
      "priceSource": "seed"
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
      "priceSource": "seed"
    },
    {
      "id": "fengyu_yi",
      "name": "风语·衣·绣（气血）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 1034.91,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794927575
    },
    {
      "id": "m_m_5_30852",
      "name": "猫眼石",
      "skillId": "fengren",
      "kind": "material",
      "tier": 4,
      "source": "交易行",
      "base": 15.05,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010379
    },
    {
      "id": "m_m_5_30853",
      "name": "珠贝母",
      "skillId": "fengren",
      "kind": "material",
      "tier": 4,
      "source": "交易行",
      "base": 93.2,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010341
    },
    {
      "id": "m_m_5_30828",
      "name": "宝石",
      "skillId": "fengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 5.58,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010050
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
      "priceAt": 1794990866
    },
    {
      "id": "m_m_5_32000",
      "name": "棉线",
      "skillId": "fengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.63,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795002219
    },
    {
      "id": "guajian_bei",
      "name": "挂件包·背部",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 58.11,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009827
    },
    {
      "id": "baihua_bu",
      "name": "百花布",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 89.79,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010253
    },
    {
      "id": "guajian_yao",
      "name": "挂件包·腰部",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 89.47,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009836
    },
    {
      "id": "shuran_bu",
      "name": "蜀染布",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 133.91,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009947
    },
    {
      "id": "m_m_5_32001",
      "name": "纺丝",
      "skillId": "fengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 8,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "seed",
      "priceAt": 1794992985
    },
    {
      "id": "shuran_bag",
      "name": "蜀染布包",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 18.32,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794993159
    },
    {
      "id": "m_m_5_10173",
      "name": "百股线",
      "skillId": "fengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 281,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795002227
    },
    {
      "id": "jinfeng_bag",
      "name": "锦缝春山囊",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 5666.66,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794876994
    },
    {
      "id": "wuseshi",
      "name": "五色石",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 140.73,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795000705
    },
    {
      "id": "m_m_5_30856",
      "name": "鸡血石",
      "skillId": "caijin",
      "kind": "material",
      "tier": 4,
      "source": "采集",
      "base": 20.2,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010398
    },
    {
      "id": "m_m_5_30855",
      "name": "沉香木",
      "skillId": "fengren",
      "kind": "material",
      "tier": 4,
      "source": "交易行",
      "base": 177.6,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010337
    },
    {
      "id": "geyin_zhang",
      "name": "隔音帐",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 165.48,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009564
    },
    {
      "id": "m_m_5_89298",
      "name": "青魄玉",
      "skillId": "fengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 52.19,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010392
    },
    {
      "id": "m_m_5_30679",
      "name": "硼砂",
      "skillId": "fengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 15.02,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010303
    },
    {
      "id": "m_m_5_32004",
      "name": "石灰",
      "skillId": "fengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 3.58,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794991076
    },
    {
      "id": "m_m_5_30847",
      "name": "银鳞",
      "skillId": "fengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 9.05,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010372
    },
    {
      "id": "m_m_5_30846",
      "name": "玛瑙",
      "skillId": "fengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 1.4,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010364
    },
    {
      "id": "yinsi_duan",
      "name": "银丝缎",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 166.69,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010131
    },
    {
      "id": "m_m_5_32003",
      "name": "百花线",
      "skillId": "fengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.61,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794928908
    },
    {
      "id": "m_m_5_30848",
      "name": "紫檀",
      "skillId": "fengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 16.7,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010254
    },
    {
      "id": "m_m_5_32002",
      "name": "金线",
      "skillId": "fengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.7,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794992989
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
      "priceSource": "seed"
    },
    {
      "id": "m_m_5_30850",
      "name": "辉石",
      "skillId": "caijin",
      "kind": "material",
      "tier": 3,
      "source": "采集",
      "base": 145.95,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010355
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
      "priceSource": "seed"
    },
    {
      "id": "m_m_5_30845",
      "name": "云芝",
      "skillId": "shennong",
      "kind": "material",
      "tier": 3,
      "source": "采集",
      "base": 210.5,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010399
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
      "priceSource": "seed"
    },
    {
      "id": "m_m_5_31397",
      "name": "蜃楼珠",
      "skillId": "fengren",
      "kind": "material",
      "tier": 4,
      "source": "交易行",
      "base": 1.03,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008398
    },
    {
      "id": "m_m_5_89433",
      "name": "蜀锦绣·腕（身法）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 9000,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794928812
    },
    {
      "id": "m_m_5_89435",
      "name": "蜀锦绣·腕（力道）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 9499.34,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010291
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
      "priceAt": 1795001071
    },
    {
      "id": "tongpao_fan",
      "name": "同袍营幡",
      "skillId": "fengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 867.08,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed"
    },
    {
      "id": "m_m_5_30844",
      "name": "黄花菜",
      "skillId": "shennong",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 0.3,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010373
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
      "priceSource": "seed"
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
      "priceSource": "seed"
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
      "priceSource": "seed"
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
      "priceAt": 1795006138
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
      "priceSource": "seed"
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
      "priceSource": "seed"
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
      "priceSource": "seed"
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
      "priceSource": "seed"
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
      "priceSource": "seed"
    },
    {
      "id": "m_m_5_90210",
      "name": "驾驾伪装",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 72,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed"
    },
    {
      "id": "m_m_5_35718",
      "name": "麻絮",
      "skillId": "fengren",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 16.18,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794991184
    },
    {
      "id": "m_m_5_35719",
      "name": "滑石粉",
      "skillId": "fengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 32.39,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794991189
    },
    {
      "id": "m_m_5_30873",
      "name": "羊皮",
      "skillId": "paoding",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 14.49,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010327
    },
    {
      "id": "m_m_5_90205",
      "name": "哼唧伪装",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 48.11,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794998574
    },
    {
      "id": "m_m_8_614",
      "name": "灯笼",
      "skillId": "fengren",
      "kind": "product",
      "tier": 1,
      "source": "制造",
      "base": 395.98,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794978879
    },
    {
      "id": "shanshui_juan",
      "name": "山水刺绣手绢",
      "skillId": "fengren",
      "kind": "product",
      "tier": 2,
      "source": "制造",
      "base": 270.39,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794992074
    },
    {
      "id": "m_m_5_3819",
      "name": "刺绣手绢",
      "skillId": "fengren",
      "kind": "product",
      "tier": 2,
      "source": "制造",
      "base": 200,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794996894
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
      "priceAt": 1794930555
    },
    {
      "id": "m_m_8_36148",
      "name": "彩缕花绫包",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 939.55,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010198
    },
    {
      "id": "m_m_8_19",
      "name": "棉布包",
      "skillId": "fengren",
      "kind": "product",
      "tier": 1,
      "source": "制造",
      "base": 0.48,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794994263
    },
    {
      "id": "m_m_5_89475",
      "name": "河洛纹·鞋（跑速）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 1335.66,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed"
    },
    {
      "id": "m_m_5_89474",
      "name": "河洛纹·衣（御劲）",
      "skillId": "fengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 2534.8,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795007088
    },
    {
      "id": "m_m_5_3820",
      "name": "丹青染布画",
      "skillId": "fengren",
      "kind": "product",
      "tier": 2,
      "source": "制造",
      "base": 5.3,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794916585
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
      "priceSource": "seed"
    },
    {
      "id": "m_m_5_30827",
      "name": "鱼肉",
      "skillId": "paoding",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 1.2,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010386
    },
    {
      "id": "m_m_5_89970",
      "name": "酱料",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 174.36,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010261
    },
    {
      "id": "m_m_5_32014",
      "name": "今朝醉",
      "skillId": "pengren",
      "kind": "material",
      "tier": 4,
      "source": "交易行",
      "base": 233,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794893373
    },
    {
      "id": "m_m_5_31978",
      "name": "胡椒粉",
      "skillId": "pengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 8,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "seed",
      "priceAt": 1794962296
    },
    {
      "id": "m_m_5_31985",
      "name": "红辣椒",
      "skillId": "pengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.65,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795006788
    },
    {
      "id": "lucai",
      "name": "路菜",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 19,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010396
    },
    {
      "id": "m_m_5_1831",
      "name": "西市腔",
      "skillId": "pengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 30.34,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009469
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
      "priceAt": 1795009297
    },
    {
      "id": "m_m_5_30849",
      "name": "人参",
      "skillId": "pengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 5.05,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010399
    },
    {
      "id": "m_m_5_71293",
      "name": "风语·老火骨汤",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 52,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795007613
    },
    {
      "id": "m_m_5_30826",
      "name": "骨头",
      "skillId": "paoding",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 0.7,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009904
    },
    {
      "id": "m_m_5_30825",
      "name": "血",
      "skillId": "paoding",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 0.2,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010366
    },
    {
      "id": "m_m_5_89171",
      "name": "藤椒",
      "skillId": "pengren",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 10.77,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794941188
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
      "priceAt": 1795008321
    },
    {
      "id": "m_m_5_31968",
      "name": "菌菇",
      "skillId": "pengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.45,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794752373
    },
    {
      "id": "m_m_5_71292",
      "name": "风语·三鲜汤",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 55.64,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795003150
    },
    {
      "id": "m_m_5_30824",
      "name": "精肉",
      "skillId": "paoding",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 0.55,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010246
    },
    {
      "id": "m_m_5_31967",
      "name": "新鲜冬瓜",
      "skillId": "pengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 8,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "seed",
      "priceAt": 1794843040
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
      "priceAt": 1795007591
    },
    {
      "id": "m_m_5_30823",
      "name": "碎肉",
      "skillId": "pengren",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 0.6,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009941
    },
    {
      "id": "m_m_5_31969",
      "name": "老姜",
      "skillId": "pengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.66,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794919677
    },
    {
      "id": "m_m_5_71277",
      "name": "风语·水煮肉片",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 84.6,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794973471
    },
    {
      "id": "m_m_5_89315",
      "name": "云中珍馐宴（通用）",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 1500,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010165
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
      "priceAt": 1794939525
    },
    {
      "id": "m_m_5_89969",
      "name": "馅料",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 160.39,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010197
    },
    {
      "id": "m_m_5_31976",
      "name": "调料",
      "skillId": "pengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.68,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008253
    },
    {
      "id": "m_m_5_89303",
      "name": "巴渝珍馐宴（通用）",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 3498.95,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795006911
    },
    {
      "id": "m_m_5_89971",
      "name": "卤料",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 175.14,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009602
    },
    {
      "id": "lushui",
      "name": "露水",
      "skillId": "shennong",
      "kind": "material",
      "tier": 3,
      "source": "采集",
      "base": 12.37,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009938
    },
    {
      "id": "m_m_5_30875",
      "name": "羊杂",
      "skillId": "paoding",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 1.85,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010322
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
      "priceAt": 1794941224
    },
    {
      "id": "m_m_5_30843",
      "name": "鱼腥草",
      "skillId": "shennong",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 0.6,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010388
    },
    {
      "id": "m_m_5_30874",
      "name": "羊肉",
      "skillId": "paoding",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 31.5,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010392
    },
    {
      "id": "m_m_5_30842",
      "name": "紫苏",
      "skillId": "shennong",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 0.62,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010395
    },
    {
      "id": "m_m_5_5270",
      "name": "饺子馅",
      "skillId": "pengren",
      "kind": "product",
      "tier": 1,
      "source": "制造",
      "base": 2.84,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010139
    },
    {
      "id": "m_m_5_31970",
      "name": "大葱",
      "skillId": "pengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.59,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795000652
    },
    {
      "id": "m_m_5_5269",
      "name": "饺子皮",
      "skillId": "pengren",
      "kind": "product",
      "tier": 1,
      "source": "制造",
      "base": 0.1,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009216
    },
    {
      "id": "m_m_5_31977",
      "name": "生粉",
      "skillId": "pengren",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 8,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "seed",
      "priceAt": 1794931002
    },
    {
      "id": "m_m_5_31013",
      "name": "转神餐",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 188.99,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010220
    },
    {
      "id": "gancao",
      "name": "甘草",
      "skillId": "shennong",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 1.88,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010071
    },
    {
      "id": "m_m_5_31012",
      "name": "佛跳墙",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 299.47,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010087
    },
    {
      "id": "m_m_5_90034",
      "name": "安营炊鼎",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 2213.84,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed"
    },
    {
      "id": "m_m_5_89172",
      "name": "酥油",
      "skillId": "pengren",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 22.39,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794917851
    },
    {
      "id": "m_m_5_89304",
      "name": "巴山夜雨宴（外攻）",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 4029.83,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010288
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
      "priceSource": "seed"
    },
    {
      "id": "m_m_5_26057",
      "name": "膘然心动",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 4999,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795002356
    },
    {
      "id": "m_m_5_26231",
      "name": "如意饺",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 2.91,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794993063
    },
    {
      "id": "m_m_5_89352",
      "name": "云州刀削面",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 633.83,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010165
    },
    {
      "id": "m_m_5_89350",
      "name": "山城毛血旺",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 549.76,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009691
    },
    {
      "id": "m_m_5_71269",
      "name": "风语·红烧排骨",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 158.53,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009712
    },
    {
      "id": "m_m_5_89346",
      "name": "云芝竹沥羹",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 718.48,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010261
    },
    {
      "id": "m_m_5_89167",
      "name": "竹沥",
      "skillId": "pengren",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 10.64,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795006909
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
      "priceAt": 1794962976
    },
    {
      "id": "m_m_5_89348",
      "name": "开锅豆腐",
      "skillId": "pengren",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 225.98,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010162
    },
    {
      "id": "m_m_5_71285",
      "name": "风语·杂锦鱼球粥",
      "skillId": "pengren",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 108,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010381
    },
    {
      "id": "jieyuan_dan",
      "name": "截元丹",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 10.09,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008464
    },
    {
      "id": "m_m_5_30836",
      "name": "虫草",
      "skillId": "shennong",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 0.66,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010398
    },
    {
      "id": "m_m_5_30832",
      "name": "千里香",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 0.95,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010309
    },
    {
      "id": "m_m_5_30833",
      "name": "枸杞",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 2.84,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010330
    },
    {
      "id": "m_m_5_31997",
      "name": "葫芦",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 3.55,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009842
    },
    {
      "id": "m_m_5_89324",
      "name": "竹沥凝心饮",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 99,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010233
    },
    {
      "id": "m_m_5_30831",
      "name": "大黄",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 0.5,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010262
    },
    {
      "id": "m_m_5_89973",
      "name": "药丸",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 138,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009958
    },
    {
      "id": "m_m_5_31996",
      "name": "药囊",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 3.67,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010161
    },
    {
      "id": "m_m_5_71241",
      "name": "风语·中品万灵丹",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 16.26,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794740009
    },
    {
      "id": "m_m_5_71240",
      "name": "风语·上品万灵丹",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 43.27,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010194
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
      "priceAt": 1795010188
    },
    {
      "id": "m_m_5_71266",
      "name": "风语·中品大力丸",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 80.13,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795003166
    },
    {
      "id": "m_m_5_30838",
      "name": "彼岸花",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 0.72,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008734
    },
    {
      "id": "shanhu",
      "name": "珊瑚",
      "skillId": "shennong",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 3.22,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010296
    },
    {
      "id": "m_m_5_6646",
      "name": "药料",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 3.54,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794990998
    },
    {
      "id": "m_m_5_89333",
      "name": "云州固阵丹",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 128,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed"
    },
    {
      "id": "m_m_5_30835",
      "name": "五味子",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 1.71,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010369
    },
    {
      "id": "m_m_5_89974",
      "name": "药膏",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 89.73,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794997034
    },
    {
      "id": "m_m_5_6648",
      "name": "药用黄丹",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 2.99,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010386
    },
    {
      "id": "m_m_5_71267",
      "name": "风语·中品静心丸",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 82.92,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008563
    },
    {
      "id": "m_m_5_90029",
      "name": "回神丹",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 416.31,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed"
    },
    {
      "id": "m_m_5_89168",
      "name": "药曲",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 3,
      "source": "交易行",
      "base": 22.3,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794927368
    },
    {
      "id": "yaoyin",
      "name": "药引",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 185,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010315
    },
    {
      "id": "m_m_5_31100",
      "name": "金针·影",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 9.73,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "priceAt": 1795005591
    },
    {
      "id": "m_m_5_89322",
      "name": "竹沥清心露",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 679.91,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795007496
    },
    {
      "id": "shaoyao",
      "name": "芍药",
      "skillId": "shennong",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 2,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010229
    },
    {
      "id": "m_m_5_90206",
      "name": "踏波露",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 39.59,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795007570
    },
    {
      "id": "m_m_5_31102",
      "name": "飞鱼丸",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 0.12,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795007742
    },
    {
      "id": "m_m_5_30834",
      "name": "川贝",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 1.97,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010273
    },
    {
      "id": "m_m_5_31998",
      "name": "金针",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.89,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794903393
    },
    {
      "id": "m_m_5_90035",
      "name": "定魂丹砂",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 8888,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010272
    },
    {
      "id": "m_m_5_89328",
      "name": "巴山凝神丹",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 818.92,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008257
    },
    {
      "id": "m_m_5_89332",
      "name": "河洛生息丹",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 827.07,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795002008
    },
    {
      "id": "m_m_5_89340",
      "name": "巴山凝神散",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 96.07,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010228
    },
    {
      "id": "m_m_5_89325",
      "name": "五气归元丹",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 870.15,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010334
    },
    {
      "id": "m_m_5_71258",
      "name": "风语·上品健体丸",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 122.08,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010331
    },
    {
      "id": "m_m_5_31999",
      "name": "银针",
      "skillId": "zhiyao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 8,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "seed",
      "priceAt": 1794987490
    },
    {
      "id": "m_m_5_89327",
      "name": "五气培元丸",
      "skillId": "zhiyao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 85,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010166
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
      "priceSource": "seed"
    },
    {
      "id": "m_m_5_89966",
      "name": "镔铁锭",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 119,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795005670
    },
    {
      "id": "m_m_5_10176",
      "name": "炼火石",
      "skillId": "duanzao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 2,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794929644
    },
    {
      "id": "m_m_5_31991",
      "name": "火墨",
      "skillId": "duanzao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.98,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794934155
    },
    {
      "id": "m_m_5_89377",
      "name": "苍生·絮泊磨石（疗伤）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 490,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795007041
    },
    {
      "id": "m_m_5_89968",
      "name": "铅锭",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 110.15,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008858
    },
    {
      "id": "m_m_5_31993",
      "name": "煤炭",
      "skillId": "duanzao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.88,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794941608
    },
    {
      "id": "m_m_5_89376",
      "name": "苍生·坠宵磨石（攻击）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 250.37,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008362
    },
    {
      "id": "m_m_5_89965",
      "name": "锡锭",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 120.97,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010396
    },
    {
      "id": "m_m_5_31992",
      "name": "木炭",
      "skillId": "duanzao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 3.81,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794993574
    },
    {
      "id": "m_m_5_89375",
      "name": "苍生·瀑沙磨石（武伤）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 222.97,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795004468
    },
    {
      "id": "m_m_5_89963",
      "name": "黄铜锭",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 87.66,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008513
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
      "priceSource": "seed"
    },
    {
      "id": "m_m_5_71192",
      "name": "风语·巨灵磨石（仇恨）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 13.14,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed"
    },
    {
      "id": "m_m_5_89169",
      "name": "松脂",
      "skillId": "duanzao",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 10.63,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794979874
    },
    {
      "id": "m_m_5_71188",
      "name": "风语·兵·甲（仇恨）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 620.01,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794830387
    },
    {
      "id": "m_m_5_31994",
      "name": "菜籽油",
      "skillId": "duanzao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 3.67,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794935740
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
      "priceSource": "seed"
    },
    {
      "id": "m_m_5_89962",
      "name": "密银锭",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 128.9,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008938
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
      "priceSource": "seed"
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
      "priceSource": "seed"
    },
    {
      "id": "m_m_5_31139",
      "name": "龙血磨石",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 3388.81,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009997
    },
    {
      "id": "m_m_5_89964",
      "name": "青铜锭",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 100,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009262
    },
    {
      "id": "m_m_5_10027",
      "name": "素银钥匙",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 2,
      "source": "制造",
      "base": 54.88,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795002501
    },
    {
      "id": "m_m_5_89961",
      "name": "熟铁锭",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 118.57,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010275
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
      "priceAt": 1794882612
    },
    {
      "id": "tiekuang",
      "name": "铁矿",
      "skillId": "caijin",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 2.9,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009930
    },
    {
      "id": "m_m_5_30676",
      "name": "铅锌矿",
      "skillId": "caijin",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 1.94,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010258
    },
    {
      "id": "m_m_5_30678",
      "name": "银矿",
      "skillId": "duanzao",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 2.23,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795006870
    },
    {
      "id": "m_m_5_30674",
      "name": "铜矿",
      "skillId": "caijin",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 2.9,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009999
    },
    {
      "id": "m_m_5_30675",
      "name": "锡矿",
      "skillId": "caijin",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 3.1,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009734
    },
    {
      "id": "m_m_5_89967",
      "name": "生铁锭",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 100,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795001626
    },
    {
      "id": "m_m_5_89367",
      "name": "苍生·瀑沙熔锭（武伤）",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 950.59,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795007070
    },
    {
      "id": "m_m_5_6246",
      "name": "青铜钥匙",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 2,
      "source": "制造",
      "base": 0.19,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009751
    },
    {
      "id": "m_m_5_6249",
      "name": "青铜钥匙模",
      "skillId": "duanzao",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 3.26,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794928656
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
      "priceSource": "seed"
    },
    {
      "id": "m_m_7_112573",
      "name": "玄元风鹤裤",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 26792.24,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed"
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
      "priceSource": "seed"
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
      "priceAt": 1794930400
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
      "priceSource": "seed"
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
      "priceSource": "seed"
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
      "priceSource": "seed"
    },
    {
      "id": "m_m_8_25762",
      "name": "寄青荷",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 15.04,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795005989
    },
    {
      "id": "m_m_5_30841",
      "name": "荷叶",
      "skillId": "duanzao",
      "kind": "material",
      "tier": 4,
      "source": "交易行",
      "base": 3.53,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010368
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
      "priceAt": 1794858087
    },
    {
      "id": "m_m_5_35708",
      "name": "皮革",
      "skillId": "duanzao",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 11.17,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794999418
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
      "priceSource": "seed"
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
      "priceAt": 1794420741
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
      "priceSource": "seed"
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
      "priceSource": "seed"
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
      "priceSource": "seed"
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
      "priceSource": "seed"
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
      "priceSource": "seed"
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
      "priceSource": "seed"
    },
    {
      "id": "m_m_8_632",
      "name": "玄武腰刀",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 2,
      "source": "制造",
      "base": 270.78,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794937799
    },
    {
      "id": "m_m_8_634",
      "name": "青龙腰刀",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 2,
      "source": "制造",
      "base": 305.2,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794837554
    },
    {
      "id": "m_m_8_636",
      "name": "麒麟腰刀",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 2,
      "source": "制造",
      "base": 324,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794910021
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
      "priceSource": "seed"
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
      "priceSource": "seed"
    },
    {
      "id": "m_m_5_2578",
      "name": "铜偶",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 1,
      "source": "制造",
      "base": 8,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "priceAt": 1794751102
    },
    {
      "id": "m_m_5_6072",
      "name": "鞭炮",
      "skillId": "duanzao",
      "kind": "product",
      "tier": 2,
      "source": "制造",
      "base": 32,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "seed",
      "priceAt": 1794970538
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
      "priceAt": 1794970526
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
      "priceAt": 1794965005
    },
    {
      "id": "muban",
      "name": "木板",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 28.98,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010248
    },
    {
      "id": "muliao",
      "name": "木料",
      "skillId": "zijiang",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 2.94,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010283
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
      "priceAt": 1795008984
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
      "priceAt": 1795008979
    },
    {
      "id": "qiwuling",
      "name": "器物令",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 27.73,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010390
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
      "priceAt": 1795009057
    },
    {
      "id": "m_m_5_35702",
      "name": "黏土",
      "skillId": "zijiang",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 3.56,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794843051
    },
    {
      "id": "m_m_5_35715",
      "name": "篾条",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 19.99,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008878
    },
    {
      "id": "zhuzi",
      "name": "竹子",
      "skillId": "zijiang",
      "kind": "material",
      "tier": 2,
      "source": "交易行",
      "base": 1.77,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010270
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
      "priceAt": 1795010369
    },
    {
      "id": "m_m_5_35704",
      "name": "油布",
      "skillId": "zijiang",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 3.57,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794999655
    },
    {
      "id": "m_m_5_35714",
      "name": "雕花",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 15,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794997916
    },
    {
      "id": "m_m_5_35701",
      "name": "石材",
      "skillId": "zijiang",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 0.64,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008270
    },
    {
      "id": "m_m_5_35713",
      "name": "卯榫",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 3,
      "source": "制造",
      "base": 17.28,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010206
    },
    {
      "id": "m_m_5_35705",
      "name": "楔子",
      "skillId": "zijiang",
      "kind": "material",
      "tier": 1,
      "source": "交易行",
      "base": 3.55,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794998817
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
      "priceAt": 1794663425
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
      "priceAt": 1795002116
    },
    {
      "id": "m_m_5_89260",
      "name": "归营旌",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 35000,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794847820
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
      "priceAt": 1794663430
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
      "priceAt": 1794607481
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
      "priceAt": 1794607436
    },
    {
      "id": "m_m_10_93",
      "name": "葵草席",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 1,
      "source": "制造",
      "base": 64.21,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794948186
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
      "priceAt": 1794607513
    },
    {
      "id": "m_m_5_35717",
      "name": "阎家样",
      "skillId": "zijiang",
      "kind": "material",
      "tier": 4,
      "source": "交易行",
      "base": 3.6,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本材料",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010380
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
      "priceAt": 1794607450
    },
    {
      "id": "m_m_10_164",
      "name": "素髹桑木灯檠",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 1,
      "source": "制造",
      "base": 130,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1794756888
    },
    {
      "id": "m_m_5_52337",
      "name": "地下室·8米木质标准包",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 1869.55,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009015
    },
    {
      "id": "m_m_5_40232",
      "name": "竹篾篱·套件",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 2797,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009638
    },
    {
      "id": "m_m_5_35772",
      "name": "兖石地墁·套件",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 3460.23,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009762
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
      "priceAt": 1794853525
    },
    {
      "id": "m_m_5_87917",
      "name": "拼布自选包",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 289.62,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795009082
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
      "priceSource": "seed"
    },
    {
      "id": "m_m_5_87881",
      "name": "拼布72色全包",
      "skillId": "zijiang",
      "kind": "product",
      "tier": 4,
      "source": "制造",
      "base": 8600.74,
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 当前版本配方",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795008033
    },
    {
      "id": "zasui",
      "name": "杂碎",
      "skillId": "paoding",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 1.61,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010384
    },
    {
      "id": "g_5_30681",
      "name": "金沙",
      "skillId": "caijin",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 1.21,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010393
    },
    {
      "id": "g_5_30680",
      "name": "青石",
      "skillId": "caijin",
      "kind": "material",
      "tier": 2,
      "source": "采集",
      "base": 1.07,
      "verified": true,
      "origin": "JX3BOX 物品百科 · 当前版本采集产出",
      "custom": false,
      "priceSource": "auction",
      "priceAt": 1795010362
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
      "note": "上衣 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "鞋 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "护手 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "level": 13,
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
      "level": 13,
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
      "note": "背包 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "上衣 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "上衣 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qtyMax": 1
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
      "note": "刺绣 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qtyMax": 1
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
      "note": "刺绣 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "制品 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "制品 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "item": "m_m_5_90338",
          "qty": 20
        }
      ],
      "note": "鞋 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "item": "m_m_5_90338",
          "qty": 20
        }
      ],
      "note": "鞋 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "护手 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "护手 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "宴席 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
      "custom": false
    },
    {
      "id": "m_cooking_418",
      "kind": "craft",
      "skillId": "pengren",
      "name": "路菜",
      "level": 30,
      "tier": 3,
      "energy": 100,
      "fee": 0,
      "outputs": [
        {
          "item": "lucai",
          "qty": 11.5,
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
      "note": "特殊食品 · JX3BOX 当前版本配方 · 产出 10~13",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "辅助类食品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "辅助类食品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "增强类食品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "增强类食品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "宴席 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qtyMax": 1
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
      "note": "宴席 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "烹饪材料 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "烹饪材料 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "烹饪材料 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "烹饪材料 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "烹饪材料 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "回复类食品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "回复类食品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "烹饪材料 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qtyMax": 1
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
      "note": "宴席 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "宴席 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "特殊食品 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qtyMax": 1
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
      "note": "特殊食品 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "增强类食品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "增强类食品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "增强类食品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "辅助类食品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "辅助类食品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "辅助类食品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 1.5,
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
      "note": "特殊药品 · JX3BOX 当前版本配方 · 产出 1~2",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "回复类药品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 3.5,
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
      "note": "回复类药品 · JX3BOX 当前版本配方 · 产出 3~4",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 3.5,
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
      "note": "回复类药品 · JX3BOX 当前版本配方 · 产出 3~4",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "辅助类药品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "增强类药品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "辅助类药品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "特殊药品 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "特殊药品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "医术材料 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "医术材料 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "医术材料 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "回复类药品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "特殊药品 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 7.5,
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
      "note": "特殊药品 · JX3BOX 当前版本配方 · 产出 5~10",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "医术材料 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "增强类药品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "增强类药品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "增强类药品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "辅助类药品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "辅助类药品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
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
      "note": "辅助类药品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "消耗品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
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
      "note": "消耗品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "帽子 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "腰带 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "裤子 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "消耗品 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "qty": 2.5,
          "qtyMin": 2,
          "qtyMax": 3
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
      "note": "消耗品 · JX3BOX 当前版本配方 · 产出 2~3",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "裤子 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "裤子 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "腰带 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "腰带 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
          "item": "m_m_5_90338",
          "qty": 20
        }
      ],
      "note": "帽子 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "帽子 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "制品 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "制品 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "note": "礼品 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "level": 5,
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
      "level": 7,
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
      "note": "材料 · JX3BOX 当前版本配方",
      "verified": true,
      "origin": "JX3BOX 技艺助手 · 2026-11-18",
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
      "level": 30,
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
      "level": 30,
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
      "energy": 50,
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
      "energy": 10,
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
      "energy": 15,
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
      "level": 40,
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
      "energy": 50,
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
      "energy": 20,
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
      "energy": 20,
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
      "energy": 30,
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
      "energy": 35,
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
      "energy": 25,
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
      "energy": 50,
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
      "energy": 30,
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
      "energy": 20,
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
      "fengwangjiang": 187.95,
      "shoupijiao": 50.96,
      "qicaixian": 169.09,
      "bairanxian": 3.69,
      "fengyu_yi": 1034.91,
      "m_m_5_30852": 15.05,
      "m_m_5_30853": 93.2,
      "m_m_5_30828": 5.58,
      "m_m_5_89165": 10.64,
      "m_m_5_32000": 0.63,
      "guajian_bei": 58.11,
      "baihua_bu": 89.79,
      "guajian_yao": 89.47,
      "shuran_bu": 133.91,
      "shuran_bag": 18.32,
      "m_m_5_10173": 281,
      "wuseshi": 140.73,
      "m_m_5_30856": 20.2,
      "m_m_5_30855": 177.6,
      "geyin_zhang": 165.48,
      "m_m_5_89298": 52.19,
      "m_m_5_30679": 15.02,
      "m_m_5_32004": 3.58,
      "m_m_5_30847": 9.05,
      "m_m_5_30846": 1.4,
      "yinsi_duan": 166.69,
      "m_m_5_32003": 0.61,
      "m_m_5_30848": 16.7,
      "m_m_5_32002": 0.7,
      "m_m_5_30850": 145.95,
      "m_m_5_30845": 210.5,
      "m_m_5_31397": 1.03,
      "m_m_5_89433": 9000,
      "m_m_5_89435": 9499.34,
      "m_m_5_31253": 530.22,
      "m_m_5_30844": 0.3,
      "m_m_5_35718": 16.18,
      "m_m_5_35719": 32.39,
      "m_m_5_30873": 14.49,
      "m_m_5_90205": 48.11,
      "m_m_8_614": 395.98,
      "shanshui_juan": 270.39,
      "m_m_5_3819": 200,
      "m_m_5_3779": 9.99,
      "m_m_8_36148": 939.55,
      "m_m_8_19": 0.48,
      "m_m_5_89474": 2534.8,
      "m_m_5_3820": 5.3,
      "m_m_5_30827": 1.2,
      "m_m_5_89970": 174.36,
      "m_m_5_32014": 233,
      "m_m_5_31985": 0.65,
      "lucai": 19,
      "m_m_5_1831": 30.34,
      "m_m_5_31973": 0.65,
      "m_m_5_30849": 5.05,
      "m_m_5_71293": 52,
      "m_m_5_30826": 0.7,
      "m_m_5_30825": 0.2,
      "m_m_5_89171": 10.77,
      "m_m_5_31974": 0.65,
      "m_m_5_31968": 0.45,
      "m_m_5_30824": 0.55,
      "m_m_5_71281": 22.4,
      "m_m_5_30823": 0.6,
      "m_m_5_31969": 0.66,
      "m_m_5_71277": 84.6,
      "m_m_5_89315": 1500,
      "m_m_5_89969": 160.39,
      "m_m_5_31976": 0.68,
      "m_m_5_89303": 3498.95,
      "m_m_5_89971": 175.14,
      "lushui": 12.37,
      "m_m_5_30875": 1.85,
      "m_m_5_30829": 3.75,
      "m_m_5_30843": 0.6,
      "m_m_5_30874": 31.5,
      "m_m_5_30842": 0.62,
      "m_m_5_5270": 2.84,
      "m_m_5_31970": 0.59,
      "m_m_5_5269": 0.1,
      "m_m_5_31013": 188.99,
      "gancao": 1.88,
      "m_m_5_31012": 299.47,
      "m_m_5_89172": 22.39,
      "m_m_5_89304": 4029.83,
      "m_m_5_26057": 4999,
      "m_m_5_26231": 2.91,
      "m_m_5_89352": 633.83,
      "m_m_5_89350": 549.76,
      "m_m_5_71269": 158.53,
      "m_m_5_89346": 718.48,
      "m_m_5_89167": 10.64,
      "m_m_5_89348": 225.98,
      "m_m_5_71285": 108,
      "jieyuan_dan": 10.09,
      "m_m_5_30836": 0.66,
      "m_m_5_30832": 0.95,
      "m_m_5_30833": 2.84,
      "m_m_5_31997": 3.55,
      "m_m_5_89324": 99,
      "m_m_5_30831": 0.5,
      "m_m_5_89973": 138,
      "m_m_5_31996": 3.67,
      "m_m_5_71241": 16.26,
      "m_m_5_71240": 43.27,
      "m_m_5_31995": 0.69,
      "m_m_5_71266": 80.13,
      "m_m_5_30838": 0.72,
      "shanhu": 3.22,
      "m_m_5_6646": 3.54,
      "m_m_5_30835": 1.71,
      "m_m_5_89974": 89.73,
      "m_m_5_6648": 2.99,
      "m_m_5_71267": 82.92,
      "m_m_5_89168": 22.3,
      "yaoyin": 185,
      "m_m_5_89322": 679.91,
      "shaoyao": 2,
      "m_m_5_90206": 39.59,
      "m_m_5_31102": 0.12,
      "m_m_5_30834": 1.97,
      "m_m_5_31998": 0.89,
      "m_m_5_90035": 8888,
      "m_m_5_89328": 818.92,
      "m_m_5_89332": 827.07,
      "m_m_5_89340": 96.07,
      "m_m_5_89325": 870.15,
      "m_m_5_71258": 122.08,
      "m_m_5_89327": 85,
      "m_m_5_89966": 119,
      "m_m_5_10176": 2,
      "m_m_5_31991": 0.98,
      "m_m_5_89377": 490,
      "m_m_5_89968": 110.15,
      "m_m_5_31993": 0.88,
      "m_m_5_89376": 250.37,
      "m_m_5_89965": 120.97,
      "m_m_5_31992": 3.81,
      "m_m_5_89375": 222.97,
      "m_m_5_89963": 87.66,
      "m_m_5_89169": 10.63,
      "m_m_5_71188": 620.01,
      "m_m_5_31994": 3.67,
      "m_m_5_89962": 128.9,
      "m_m_5_31139": 3388.81,
      "m_m_5_89964": 100,
      "m_m_5_10027": 54.88,
      "m_m_5_89961": 118.57,
      "tiekuang": 2.9,
      "m_m_5_30676": 1.94,
      "m_m_5_30678": 2.23,
      "m_m_5_30674": 2.9,
      "m_m_5_30675": 3.1,
      "m_m_5_89967": 100,
      "m_m_5_89367": 950.59,
      "m_m_5_6246": 0.19,
      "m_m_5_6249": 3.26,
      "m_m_5_32787": 99.86,
      "m_m_8_25762": 15.04,
      "m_m_5_30841": 3.53,
      "m_m_5_35708": 11.17,
      "m_m_8_632": 270.78,
      "m_m_8_634": 305.2,
      "m_m_8_636": 324,
      "m_m_5_6066": 0.01,
      "muban": 28.98,
      "muliao": 2.94,
      "m_m_5_35707": 11.97,
      "m_m_5_35703": 3.57,
      "qiwuling": 27.73,
      "m_m_5_35716": 16.93,
      "m_m_5_35702": 3.56,
      "m_m_5_35715": 19.99,
      "zhuzi": 1.77,
      "m_m_5_35567": 1.7,
      "m_m_5_35704": 3.57,
      "m_m_5_35701": 0.64,
      "m_m_5_35713": 17.28,
      "m_m_5_35705": 3.55,
      "m_m_10_1778": 1267.83,
      "m_m_10_948": 310.17,
      "m_m_5_89260": 35000,
      "m_m_10_1779": 600.82,
      "m_m_10_1880": 1568.07,
      "m_m_10_2034": 1430.11,
      "m_m_10_93": 64.21,
      "m_m_10_1882": 1459,
      "m_m_5_35717": 3.6,
      "m_m_10_2037": 1460.83,
      "m_m_10_164": 130,
      "m_m_5_52337": 1869.55,
      "m_m_5_40232": 2797,
      "m_m_5_35772": 3460.23,
      "m_m_5_87917": 289.62,
      "m_m_5_87881": 8600.74,
      "zasui": 1.61,
      "g_5_30681": 1.21,
      "g_5_30680": 1.07
    },
    "s_pozhenzi": {
      "fengwangjiang": 168.09,
      "shoupijiao": 47.9,
      "qicaixian": 197.4,
      "bairanxian": 5.38,
      "fengyu_yi": 1034.98,
      "m_m_5_30852": 12.6,
      "m_m_5_30853": 83,
      "m_m_5_30828": 5,
      "m_m_5_32000": 1.11,
      "guajian_bei": 68.91,
      "baihua_bu": 104.19,
      "guajian_yao": 95.79,
      "shuran_bu": 138,
      "shuran_bag": 88,
      "jinfeng_bag": 6000,
      "wuseshi": 220.63,
      "m_m_5_30856": 16.83,
      "m_m_5_30855": 150.45,
      "geyin_zhang": 129.36,
      "m_m_5_89298": 46.51,
      "m_m_5_30679": 18.85,
      "m_m_5_30847": 8.75,
      "m_m_5_30846": 1.4,
      "yinsi_duan": 186.16,
      "m_m_5_30848": 22.76,
      "m_m_5_30850": 145.22,
      "m_m_5_30845": 180,
      "m_m_5_89435": 9999.09,
      "m_m_5_31253": 55.55,
      "m_m_5_30844": 0.79,
      "m_m_5_30873": 24,
      "m_m_5_90205": 15,
      "shanshui_juan": 210,
      "m_m_5_3779": 3,
      "m_m_8_36148": 1078,
      "m_m_8_19": 1,
      "m_m_5_3820": 30.88,
      "m_m_5_30827": 0.95,
      "m_m_5_89970": 219.48,
      "m_m_5_32014": 300.84,
      "lucai": 20.25,
      "m_m_5_1831": 12,
      "m_m_5_31973": 2.39,
      "m_m_5_30849": 5.04,
      "m_m_5_71293": 40.16,
      "m_m_5_30826": 0.96,
      "m_m_5_30825": 1,
      "m_m_5_71292": 57.18,
      "m_m_5_30824": 0.77,
      "m_m_5_71281": 22.7,
      "m_m_5_30823": 0.76,
      "m_m_5_71277": 116,
      "m_m_5_89315": 1700,
      "m_m_5_89969": 182.98,
      "m_m_5_89971": 190,
      "lushui": 15.58,
      "m_m_5_30875": 1.76,
      "m_m_5_30843": 0.99,
      "m_m_5_30874": 29.28,
      "m_m_5_30842": 0.88,
      "m_m_5_5270": 0.99,
      "m_m_5_5269": 0.32,
      "m_m_5_31013": 176.95,
      "gancao": 1.5,
      "m_m_5_31012": 273.88,
      "m_m_5_89304": 4590.73,
      "m_m_5_26231": 1,
      "m_m_5_89352": 799.4,
      "m_m_5_89350": 488.93,
      "m_m_5_71269": 145.27,
      "m_m_5_89346": 637.92,
      "m_m_5_89348": 199.82,
      "m_m_5_71285": 97.84,
      "m_m_5_30836": 1.55,
      "m_m_5_30832": 1.89,
      "m_m_5_30833": 1.5,
      "m_m_5_89324": 129.98,
      "m_m_5_30831": 1.21,
      "m_m_5_89973": 209,
      "m_m_5_71241": 88.75,
      "m_m_5_71240": 99.92,
      "m_m_5_71266": 49.85,
      "m_m_5_30838": 3.6,
      "shanhu": 2.2,
      "m_m_5_6646": 7.33,
      "m_m_5_30835": 1.96,
      "m_m_5_89974": 185.07,
      "m_m_5_71267": 60.45,
      "m_m_5_89168": 25,
      "yaoyin": 168.98,
      "m_m_5_89322": 600,
      "shaoyao": 1.66,
      "m_m_5_31102": 0.04,
      "m_m_5_30834": 2.35,
      "m_m_5_31998": 0.59,
      "m_m_5_89340": 110,
      "m_m_5_89325": 677.25,
      "m_m_5_71258": 120.18,
      "m_m_5_89327": 88.77,
      "m_m_5_89966": 198.08,
      "m_m_5_31991": 0.92,
      "m_m_5_89377": 166,
      "m_m_5_89968": 136.97,
      "m_m_5_31993": 0.66,
      "m_m_5_89376": 160,
      "m_m_5_89965": 154,
      "m_m_5_89963": 78,
      "m_m_5_71192": 20.57,
      "m_m_5_31994": 0.67,
      "m_m_5_89962": 176.47,
      "m_m_5_31139": 3399.9,
      "m_m_5_89964": 120.1,
      "m_m_5_10027": 71.6,
      "m_m_5_89961": 186.85,
      "tiekuang": 1.99,
      "m_m_5_30676": 2.06,
      "m_m_5_30678": 1.49,
      "m_m_5_30674": 1.78,
      "m_m_5_30675": 3,
      "m_m_5_89967": 159.94,
      "m_m_5_6246": 0.28,
      "m_m_5_32787": 42.9,
      "m_m_8_25762": 3.55,
      "m_m_5_30841": 2.88,
      "m_m_8_636": 1666,
      "m_m_5_6072": 1,
      "m_m_5_6068": 1.08,
      "muban": 25.46,
      "muliao": 3,
      "m_m_5_35707": 6.95,
      "qiwuling": 24.19,
      "m_m_5_35716": 19.88,
      "m_m_5_35715": 14.08,
      "zhuzi": 1.96,
      "m_m_5_35567": 1.95,
      "m_m_5_35714": 60.5,
      "m_m_5_35701": 2.09,
      "m_m_5_35713": 89.02,
      "m_m_5_35705": 1.64,
      "m_m_10_93": 1.05,
      "m_m_5_35717": 1.75,
      "m_m_5_52337": 1665.98,
      "m_m_5_35772": 1299.99,
      "m_m_5_87917": 258.09,
      "m_m_5_87881": 9996,
      "zasui": 0.73,
      "g_5_30681": 1.16,
      "g_5_30680": 1.1
    },
    "s_dielianhua": {
      "fengwangjiang": 169.52,
      "shoupijiao": 51.99,
      "qicaixian": 155.67,
      "fengyu_yi": 2174.14,
      "m_m_5_30852": 17.49,
      "m_m_5_30853": 86.32,
      "m_m_5_30828": 4.33,
      "m_m_5_89165": 10.64,
      "guajian_bei": 70,
      "baihua_bu": 108.32,
      "guajian_yao": 118.98,
      "shuran_bu": 150.29,
      "shuran_bag": 50.14,
      "wuseshi": 158.69,
      "m_m_5_30856": 18,
      "m_m_5_30855": 154,
      "geyin_zhang": 198,
      "m_m_5_89298": 39.09,
      "m_m_5_30679": 17.55,
      "m_m_5_30847": 8.71,
      "m_m_5_30846": 1.56,
      "yinsi_duan": 158.1,
      "m_m_5_32003": 0.7,
      "m_m_5_30848": 17.97,
      "m_m_5_30850": 129.98,
      "m_m_5_30845": 192.55,
      "m_m_5_30844": 0.8,
      "m_m_5_30873": 9.22,
      "m_m_5_90205": 5,
      "shanshui_juan": 200.06,
      "m_m_5_3779": 8.65,
      "m_m_8_36148": 790.02,
      "m_m_5_30827": 1.28,
      "m_m_5_89970": 242,
      "m_m_5_31978": 2.67,
      "m_m_5_31985": 0.67,
      "lucai": 19.89,
      "m_m_5_1831": 13.99,
      "m_m_5_31973": 0.67,
      "m_m_5_30849": 5.21,
      "m_m_5_71293": 50,
      "m_m_5_30826": 0.36,
      "m_m_5_30825": 0.2,
      "m_m_5_89171": 10.63,
      "m_m_5_31968": 0.65,
      "m_m_5_71292": 25.07,
      "m_m_5_30824": 0.21,
      "m_m_5_71281": 36.89,
      "m_m_5_30823": 0.3,
      "m_m_5_31969": 0.67,
      "m_m_5_71277": 32.59,
      "m_m_5_89315": 1597.64,
      "m_m_5_89969": 158.67,
      "m_m_5_31976": 0.64,
      "m_m_5_89303": 4279.76,
      "m_m_5_89971": 195.6,
      "lushui": 11,
      "m_m_5_30875": 1.53,
      "m_m_5_30829": 0.66,
      "m_m_5_30843": 0.87,
      "m_m_5_30874": 46,
      "m_m_5_30842": 0.95,
      "m_m_5_5270": 1,
      "m_m_5_5269": 0.1,
      "m_m_5_31977": 0.66,
      "m_m_5_31013": 197.99,
      "gancao": 1.8,
      "m_m_5_31012": 332,
      "m_m_5_89172": 22.39,
      "m_m_5_89304": 5943.91,
      "m_m_5_26057": 3000,
      "m_m_5_89352": 729.5,
      "m_m_5_89350": 699.15,
      "m_m_5_71269": 134.99,
      "m_m_5_89346": 717.77,
      "m_m_5_89167": 10.63,
      "m_m_5_89348": 333.31,
      "m_m_5_71285": 233.46,
      "m_m_5_30836": 4.99,
      "m_m_5_30832": 2.09,
      "m_m_5_30833": 1.89,
      "m_m_5_89324": 166,
      "m_m_5_30831": 1.08,
      "m_m_5_89973": 243.45,
      "m_m_5_31996": 0.67,
      "m_m_5_71240": 28.32,
      "m_m_5_31995": 0.68,
      "m_m_5_71266": 30.05,
      "m_m_5_30838": 1.38,
      "shanhu": 2.11,
      "m_m_5_30835": 3.5,
      "m_m_5_89974": 136.93,
      "m_m_5_71267": 29.42,
      "m_m_5_89168": 22.39,
      "yaoyin": 209.49,
      "shaoyao": 2.21,
      "m_m_5_31102": 0.23,
      "m_m_5_30834": 3.86,
      "m_m_5_89328": 811.45,
      "m_m_5_89340": 113.22,
      "m_m_5_89325": 726.27,
      "m_m_5_71258": 120,
      "m_m_5_89327": 50.34,
      "m_m_5_89966": 98.15,
      "m_m_5_31991": 0.67,
      "m_m_5_89377": 580,
      "m_m_5_89968": 150.67,
      "m_m_5_31993": 0.7,
      "m_m_5_89376": 298,
      "m_m_5_89965": 199.89,
      "m_m_5_31992": 0.67,
      "m_m_5_89963": 150.6,
      "m_m_5_71192": 26.49,
      "m_m_5_71188": 1152.93,
      "m_m_5_89962": 186,
      "m_m_5_31139": 3187,
      "m_m_5_89964": 100.2,
      "m_m_5_10027": 58.73,
      "m_m_5_89961": 179.24,
      "tiekuang": 2.22,
      "m_m_5_30676": 2.42,
      "m_m_5_30678": 2.04,
      "m_m_5_30674": 1.82,
      "m_m_5_30675": 3.41,
      "m_m_5_89967": 221.43,
      "m_m_5_6246": 0.22,
      "m_m_5_32787": 30,
      "m_m_8_25762": 80.8,
      "m_m_5_35708": 6.49,
      "m_m_8_632": 699.99,
      "muban": 30.28,
      "muliao": 3.98,
      "m_m_5_35707": 6.49,
      "qiwuling": 22.22,
      "m_m_5_35716": 99.99,
      "m_m_5_35715": 13.32,
      "zhuzi": 1.79,
      "m_m_5_35567": 1.74,
      "m_m_5_35714": 89.11,
      "m_m_5_35701": 0.66,
      "m_m_5_35713": 26.7,
      "m_m_5_35717": 2.3,
      "m_m_5_52337": 1459.93,
      "m_m_5_35772": 1599.88,
      "m_m_5_87917": 385.12,
      "zasui": 0.33,
      "g_5_30681": 1.33,
      "g_5_30680": 1.11
    },
    "s_jiandan": {
      "fengwangjiang": 195.26,
      "shoupijiao": 65,
      "qicaixian": 150.58,
      "bairanxian": 3.38,
      "fengyu_yi": 789.66,
      "m_m_5_30852": 14.2,
      "m_m_5_30853": 78.98,
      "m_m_5_30828": 4.02,
      "m_m_5_32000": 0.62,
      "guajian_bei": 56.49,
      "baihua_bu": 110.09,
      "guajian_yao": 125.27,
      "shuran_bu": 135.62,
      "shuran_bag": 69.98,
      "wuseshi": 157,
      "m_m_5_30856": 14.96,
      "m_m_5_30855": 150.55,
      "geyin_zhang": 237.55,
      "m_m_5_89298": 47.31,
      "m_m_5_30679": 15,
      "m_m_5_32004": 0.69,
      "m_m_5_30847": 10.88,
      "m_m_5_30846": 1.51,
      "yinsi_duan": 184.9,
      "m_m_5_30848": 22.95,
      "m_m_5_32002": 0.68,
      "m_m_5_30850": 124.99,
      "m_m_5_30845": 186.08,
      "m_m_5_31397": 1,
      "m_m_5_30844": 0.75,
      "m_m_5_90210": 200,
      "m_m_5_30873": 10.2,
      "m_m_5_90205": 150,
      "m_m_5_3779": 5.71,
      "m_m_8_36148": 1588.87,
      "m_m_8_19": 1.52,
      "m_m_5_30827": 0.93,
      "m_m_5_89970": 166.22,
      "m_m_5_32014": 127.35,
      "m_m_5_31978": 0.66,
      "m_m_5_31985": 0.69,
      "lucai": 26.98,
      "m_m_5_1831": 12.97,
      "m_m_5_31973": 0.67,
      "m_m_5_30849": 5.92,
      "m_m_5_71293": 45.52,
      "m_m_5_30826": 0.59,
      "m_m_5_30825": 0.01,
      "m_m_5_89171": 10.63,
      "m_m_5_31974": 0.66,
      "m_m_5_31968": 0.66,
      "m_m_5_30824": 0.33,
      "m_m_5_71281": 13.58,
      "m_m_5_30823": 0.36,
      "m_m_5_31969": 0.66,
      "m_m_5_71277": 55.13,
      "m_m_5_89315": 1499.38,
      "m_m_5_89969": 139,
      "m_m_5_31976": 0.64,
      "m_m_5_89971": 194.8,
      "lushui": 9.9,
      "m_m_5_30875": 1.03,
      "m_m_5_30843": 0.92,
      "m_m_5_30874": 36,
      "m_m_5_30842": 0.82,
      "m_m_5_5270": 0.36,
      "m_m_5_5269": 0.09,
      "m_m_5_31977": 0.68,
      "m_m_5_31013": 200.75,
      "gancao": 1.79,
      "m_m_5_31012": 264,
      "m_m_5_89352": 759.23,
      "m_m_5_71269": 120,
      "m_m_5_89346": 888.67,
      "m_m_5_89167": 10.66,
      "m_m_5_89348": 180.58,
      "m_m_5_71285": 188.64,
      "m_m_5_30836": 0.76,
      "m_m_5_30832": 0.38,
      "m_m_5_30833": 2,
      "m_m_5_89324": 160.27,
      "m_m_5_30831": 0.44,
      "m_m_5_89973": 229.99,
      "m_m_5_31996": 0.66,
      "m_m_5_71241": 25,
      "m_m_5_71240": 34.57,
      "m_m_5_71266": 42.74,
      "m_m_5_30838": 0.74,
      "shanhu": 3.58,
      "m_m_5_30835": 1.59,
      "m_m_5_89974": 130.53,
      "m_m_5_71267": 35.72,
      "m_m_5_90029": 345.01,
      "m_m_5_89168": 20.94,
      "yaoyin": 200.32,
      "shaoyao": 2.19,
      "m_m_5_30834": 2.63,
      "m_m_5_31998": 0.63,
      "m_m_5_89328": 1316.05,
      "m_m_5_89340": 129,
      "m_m_5_89325": 829.98,
      "m_m_5_71258": 100.51,
      "m_m_5_89327": 143.88,
      "m_m_5_89968": 150.93,
      "m_m_5_89376": 100,
      "m_m_5_89965": 137.56,
      "m_m_5_89963": 113.98,
      "m_m_5_89962": 180.49,
      "m_m_5_31139": 3688.66,
      "m_m_5_89964": 90.24,
      "m_m_5_10027": 53.9,
      "m_m_5_89961": 210,
      "tiekuang": 2.06,
      "m_m_5_30676": 3.46,
      "m_m_5_30678": 2.57,
      "m_m_5_30674": 2.35,
      "m_m_5_30675": 3.44,
      "m_m_5_89967": 115.51,
      "m_m_5_6246": 0.19,
      "m_m_5_6249": 0.43,
      "m_m_5_32787": 1,
      "m_m_5_30841": 2.9,
      "m_m_5_10172": 39.63,
      "m_m_5_35708": 6.48,
      "m_m_8_636": 251.25,
      "m_m_5_6072": 4.1,
      "m_m_5_6068": 0.35,
      "muban": 31.97,
      "muliao": 2.83,
      "m_m_5_35707": 6.47,
      "qiwuling": 20.52,
      "m_m_5_35716": 10.53,
      "m_m_5_35715": 14,
      "zhuzi": 1.59,
      "m_m_5_35567": 1.15,
      "m_m_5_35714": 89.41,
      "m_m_5_35713": 20.99,
      "m_m_10_1779": 899.99,
      "m_m_5_35717": 2.54,
      "m_m_10_164": 110,
      "m_m_5_35772": 2599.91,
      "m_m_5_87917": 360.1,
      "m_m_5_87881": 7900,
      "zasui": 0.29,
      "g_5_30681": 1.22,
      "g_5_30680": 1.94
    },
    "s_youyuelun": {
      "fengwangjiang": 170.06,
      "shoupijiao": 49.48,
      "qicaixian": 192.36,
      "bairanxian": 3.38,
      "fengyu_yi": 831.65,
      "m_m_5_30852": 16.05,
      "m_m_5_30853": 80,
      "m_m_5_30828": 7.5,
      "guajian_bei": 56.18,
      "baihua_bu": 105.7,
      "guajian_yao": 82.32,
      "shuran_bu": 132.87,
      "shuran_bag": 49.99,
      "jinfeng_bag": 10000,
      "wuseshi": 194,
      "m_m_5_30856": 18,
      "m_m_5_30855": 153.07,
      "geyin_zhang": 159.25,
      "m_m_5_89298": 45.72,
      "m_m_5_30679": 15.11,
      "m_m_5_30847": 8.78,
      "m_m_5_30846": 1.52,
      "yinsi_duan": 156.99,
      "m_m_5_30848": 23.48,
      "m_m_5_30850": 136.61,
      "m_m_5_30845": 196.9,
      "m_m_5_31253": 200,
      "m_m_5_30844": 0.71,
      "m_m_5_30873": 35.33,
      "m_m_5_90205": 5.33,
      "m_m_8_614": 268.92,
      "m_m_5_3779": 4,
      "m_m_8_36148": 1000.35,
      "m_m_8_19": 0.65,
      "m_m_5_30827": 1.01,
      "m_m_5_89970": 174,
      "m_m_5_31978": 0.66,
      "lucai": 17.39,
      "m_m_5_1831": 12.15,
      "m_m_5_31973": 0.65,
      "m_m_5_30849": 5.26,
      "m_m_5_71293": 47.85,
      "m_m_5_30826": 0.37,
      "m_m_5_30825": 0.01,
      "m_m_5_89171": 10.65,
      "m_m_5_31974": 0.66,
      "m_m_5_30824": 0.48,
      "m_m_5_31967": 0.64,
      "m_m_5_71281": 28.96,
      "m_m_5_30823": 0.3,
      "m_m_5_31969": 0.66,
      "m_m_5_71277": 58.1,
      "m_m_5_89315": 1880.32,
      "m_m_5_89969": 160.5,
      "m_m_5_31976": 0.62,
      "m_m_5_89971": 194,
      "lushui": 10.59,
      "m_m_5_30875": 6.24,
      "m_m_5_30829": 1.3,
      "m_m_5_30843": 0.9,
      "m_m_5_30874": 41.8,
      "m_m_5_30842": 0.84,
      "m_m_5_5270": 2,
      "m_m_5_5269": 0.01,
      "m_m_5_31977": 0.67,
      "m_m_5_31013": 199.5,
      "gancao": 1.55,
      "m_m_5_31012": 277.76,
      "m_m_5_89172": 22.39,
      "m_m_5_26231": 1,
      "m_m_5_89352": 850.65,
      "m_m_5_89350": 672.11,
      "m_m_5_71269": 190.63,
      "m_m_5_89346": 751.04,
      "m_m_5_89167": 10.63,
      "m_m_5_89348": 240.58,
      "m_m_5_71285": 106.49,
      "jieyuan_dan": 16.65,
      "m_m_5_30836": 0.7,
      "m_m_5_30832": 1.42,
      "m_m_5_30833": 1.97,
      "m_m_5_89324": 147.47,
      "m_m_5_30831": 1,
      "m_m_5_89973": 198.98,
      "m_m_5_71241": 88.64,
      "m_m_5_71240": 88.22,
      "m_m_5_31995": 0.67,
      "m_m_5_71266": 75,
      "m_m_5_30838": 1.18,
      "shanhu": 2.55,
      "m_m_5_6646": 3,
      "m_m_5_30835": 1.88,
      "m_m_5_89974": 127.99,
      "m_m_5_6648": 3.5,
      "m_m_5_71267": 100.6,
      "m_m_5_89168": 21.79,
      "yaoyin": 203.05,
      "m_m_5_31100": 26.54,
      "shaoyao": 2.1,
      "m_m_5_31102": 0.28,
      "m_m_5_30834": 2.06,
      "m_m_5_89328": 997.66,
      "m_m_5_89332": 1500,
      "m_m_5_89340": 136,
      "m_m_5_89325": 785.55,
      "m_m_5_71258": 107,
      "m_m_5_31999": 0.66,
      "m_m_5_89327": 125.12,
      "m_m_5_89966": 121,
      "m_m_5_31991": 2.99,
      "m_m_5_89968": 128.3,
      "m_m_5_31993": 0.69,
      "m_m_5_89965": 158.99,
      "m_m_5_31992": 0.96,
      "m_m_5_89963": 108,
      "m_m_5_89169": 11.69,
      "m_m_5_71188": 1512.98,
      "m_m_5_31994": 0.7,
      "m_m_5_89962": 131.24,
      "m_m_5_31139": 3097.94,
      "m_m_5_89964": 114.97,
      "m_m_5_10027": 51.84,
      "m_m_5_89961": 127.51,
      "tiekuang": 2.79,
      "m_m_5_30676": 2.8,
      "m_m_5_30678": 3.69,
      "m_m_5_30674": 2.04,
      "m_m_5_30675": 3,
      "m_m_5_89967": 220.88,
      "m_m_5_89367": 2993,
      "m_m_5_6246": 0.07,
      "m_m_5_6249": 0.48,
      "m_m_5_32787": 6.78,
      "m_m_8_25762": 60,
      "m_m_5_30841": 2.53,
      "m_m_5_10172": 31.99,
      "m_m_5_35708": 6.49,
      "m_m_8_632": 5.06,
      "m_m_8_634": 499.06,
      "m_m_8_636": 888,
      "m_m_5_2578": 5.6,
      "m_m_5_6072": 0.99,
      "m_m_5_6068": 1,
      "m_m_5_6066": 0.01,
      "muban": 22.94,
      "muliao": 2.84,
      "m_m_5_35707": 6.99,
      "m_m_5_35703": 0.67,
      "qiwuling": 22.8,
      "m_m_5_35716": 8.23,
      "m_m_5_35715": 14.11,
      "zhuzi": 1.54,
      "m_m_5_35567": 1.64,
      "m_m_5_35714": 11.18,
      "m_m_5_35713": 15.73,
      "m_m_5_35717": 1.85,
      "m_m_10_2037": 1395.59,
      "m_m_10_164": 99.98,
      "m_m_5_52337": 2560,
      "m_m_5_35772": 2000.22,
      "m_m_5_87917": 250.24,
      "m_m_5_87881": 9999,
      "zasui": 0.45,
      "g_5_30681": 1.69,
      "g_5_30680": 1.5
    },
    "s_longzheng": {
      "fengwangjiang": 158.41,
      "shoupijiao": 68.23,
      "qicaixian": 159,
      "bairanxian": 3.14,
      "fengyu_yi": 2241.86,
      "m_m_5_30852": 20.66,
      "m_m_5_30853": 86.5,
      "m_m_5_30828": 6.77,
      "m_m_5_89165": 11,
      "guajian_bei": 65.32,
      "baihua_bu": 100.51,
      "guajian_yao": 102.93,
      "shuran_bu": 139.97,
      "shuran_bag": 31.43,
      "m_m_5_10173": 30.1,
      "jinfeng_bag": 12000.82,
      "wuseshi": 154.99,
      "m_m_5_30856": 29.99,
      "m_m_5_30855": 154.43,
      "geyin_zhang": 180,
      "m_m_5_89298": 45.05,
      "m_m_5_30679": 20.06,
      "m_m_5_32004": 0.69,
      "m_m_5_30847": 9.15,
      "m_m_5_30846": 1.75,
      "yinsi_duan": 220.04,
      "m_m_5_32003": 0.7,
      "m_m_5_30848": 22.23,
      "m_m_5_32002": 0.66,
      "m_m_5_30850": 136.09,
      "m_m_5_30845": 202.93,
      "m_m_5_31397": 0.8,
      "m_m_5_89433": 6666,
      "m_m_5_89435": 6646,
      "m_m_5_31253": 400.32,
      "m_m_5_30844": 0.74,
      "m_m_5_30873": 14.97,
      "m_m_5_90205": 2.76,
      "shanshui_juan": 100,
      "m_m_8_36148": 1162.02,
      "m_m_8_19": 0.88,
      "m_m_5_89475": 3500,
      "m_m_5_89474": 2650,
      "m_m_5_30827": 1.13,
      "m_m_5_89970": 214.97,
      "m_m_5_32014": 229,
      "m_m_5_31978": 0.66,
      "m_m_5_31985": 0.62,
      "lucai": 19,
      "m_m_5_1831": 15.99,
      "m_m_5_31973": 0.6,
      "m_m_5_30849": 5,
      "m_m_5_71293": 43.02,
      "m_m_5_30826": 0.99,
      "m_m_5_30825": 0.02,
      "m_m_5_89171": 10.63,
      "m_m_5_31974": 0.55,
      "m_m_5_31968": 0.95,
      "m_m_5_71292": 42.82,
      "m_m_5_30824": 0.78,
      "m_m_5_71281": 88.4,
      "m_m_5_30823": 0.77,
      "m_m_5_31969": 0.65,
      "m_m_5_71277": 40,
      "m_m_5_89315": 1825.64,
      "m_m_5_89969": 139.99,
      "m_m_5_89303": 3099.95,
      "m_m_5_89971": 192.73,
      "lushui": 11.4,
      "m_m_5_30875": 2.08,
      "m_m_5_30843": 0.95,
      "m_m_5_30874": 37.11,
      "m_m_5_30842": 1,
      "m_m_5_5270": 0.78,
      "m_m_5_5269": 0.02,
      "m_m_5_31977": 0.55,
      "m_m_5_31013": 215.1,
      "gancao": 2.12,
      "m_m_5_31012": 296,
      "m_m_5_90034": 7899.98,
      "m_m_5_89304": 3098.77,
      "m_m_5_26057": 2552.38,
      "m_m_5_26231": 3.33,
      "m_m_5_89352": 723.56,
      "m_m_5_71269": 180.51,
      "m_m_5_89346": 666.52,
      "m_m_5_89167": 10.63,
      "m_m_5_89348": 288.33,
      "m_m_5_71285": 142.45,
      "jieyuan_dan": 69.99,
      "m_m_5_30832": 2.7,
      "m_m_5_30833": 1.59,
      "m_m_5_89324": 140.36,
      "m_m_5_30831": 2.42,
      "m_m_5_89973": 194.88,
      "m_m_5_31996": 0.66,
      "m_m_5_71241": 39,
      "m_m_5_71240": 129.48,
      "m_m_5_31995": 0.67,
      "m_m_5_71266": 47.57,
      "m_m_5_30838": 2,
      "shanhu": 2.8,
      "m_m_5_6646": 1.59,
      "m_m_5_30835": 2.21,
      "m_m_5_89974": 138,
      "m_m_5_71267": 45.53,
      "m_m_5_90029": 700.62,
      "m_m_5_89168": 22.99,
      "yaoyin": 199.99,
      "m_m_5_89322": 500,
      "shaoyao": 2.88,
      "m_m_5_90206": 250.26,
      "m_m_5_31102": 0.58,
      "m_m_5_30834": 2.14,
      "m_m_5_31998": 0.68,
      "m_m_5_90035": 14000,
      "m_m_5_89328": 820.39,
      "m_m_5_89332": 2498.72,
      "m_m_5_89340": 114.19,
      "m_m_5_89325": 890.77,
      "m_m_5_71258": 112,
      "m_m_5_31999": 0.55,
      "m_m_5_89327": 100,
      "m_m_5_89966": 115.51,
      "m_m_5_10176": 3,
      "m_m_5_31991": 0.67,
      "m_m_5_89377": 190.12,
      "m_m_5_89968": 110,
      "m_m_5_89965": 129.13,
      "m_m_5_89375": 999,
      "m_m_5_89963": 100,
      "m_m_5_89169": 10.67,
      "m_m_5_71188": 588.66,
      "m_m_5_31994": 0.68,
      "m_m_5_89962": 110.4,
      "m_m_5_31139": 3638.09,
      "m_m_5_89964": 85.59,
      "m_m_5_10027": 79.79,
      "m_m_5_89961": 125.42,
      "tiekuang": 2.48,
      "m_m_5_30676": 2.41,
      "m_m_5_30678": 2.68,
      "m_m_5_30674": 2.05,
      "m_m_5_30675": 3.22,
      "m_m_5_89967": 86.32,
      "m_m_5_89367": 1599.79,
      "m_m_5_6246": 0.18,
      "m_m_5_6249": 0.49,
      "m_m_5_32787": 8,
      "m_m_8_25762": 20.2,
      "m_m_5_30841": 4.3,
      "m_m_5_35708": 6.48,
      "m_m_8_636": 249,
      "m_m_5_90257": 180.67,
      "m_m_5_6072": 3,
      "muban": 89,
      "muliao": 3.1,
      "m_m_5_35707": 6.49,
      "m_m_5_35703": 0.66,
      "qiwuling": 20.99,
      "m_m_5_35716": 8,
      "m_m_5_35715": 13.11,
      "zhuzi": 2.17,
      "m_m_5_35567": 1.99,
      "m_m_5_35704": 0.67,
      "m_m_5_35714": 26.99,
      "m_m_5_35701": 0.59,
      "m_m_5_35713": 89.19,
      "m_m_5_89260": 24900,
      "m_m_10_93": 299.99,
      "m_m_5_35717": 2.25,
      "m_m_10_2037": 1155,
      "m_m_5_52337": 1368,
      "m_m_5_40232": 3500,
      "m_m_5_35772": 1299.99,
      "m_m_5_87917": 455.17,
      "zasui": 1.89,
      "g_5_30681": 2.7,
      "g_5_30680": 3.03
    },
    "s_changancheng": {
      "fengwangjiang": 179.78,
      "shoupijiao": 48.49,
      "qicaixian": 200,
      "bairanxian": 3,
      "m_m_5_30852": 17.2,
      "m_m_5_30853": 85.6,
      "m_m_5_30828": 5.5,
      "m_m_5_89165": 10.66,
      "guajian_bei": 77.83,
      "baihua_bu": 109,
      "guajian_yao": 116.63,
      "shuran_bu": 169.99,
      "m_m_5_32001": 0.65,
      "shuran_bag": 23.16,
      "m_m_5_10173": 29.87,
      "wuseshi": 188.44,
      "m_m_5_30856": 22,
      "m_m_5_30855": 150.09,
      "geyin_zhang": 111.36,
      "m_m_5_89298": 43.05,
      "m_m_5_30679": 15,
      "m_m_5_30847": 6.43,
      "m_m_5_30846": 1.39,
      "yinsi_duan": 158.92,
      "m_m_5_30848": 17.1,
      "m_m_5_30850": 124.94,
      "m_m_5_30845": 187.9,
      "m_m_5_31253": 200,
      "m_m_5_30844": 0.76,
      "m_m_5_30873": 7.97,
      "m_m_8_614": 449,
      "m_m_5_3779": 10.89,
      "m_m_8_36148": 1207.2,
      "m_m_5_30827": 0.98,
      "m_m_5_89970": 255.08,
      "m_m_5_32014": 129.94,
      "m_m_5_31978": 0.64,
      "m_m_5_31985": 0.6,
      "lucai": 20,
      "m_m_5_1831": 11.9,
      "m_m_5_31973": 0.66,
      "m_m_5_30849": 5.84,
      "m_m_5_71293": 26.54,
      "m_m_5_30826": 1.16,
      "m_m_5_30825": 0.01,
      "m_m_5_89171": 10.62,
      "m_m_5_31974": 0.67,
      "m_m_5_71292": 50.43,
      "m_m_5_30824": 0.2,
      "m_m_5_31967": 0.64,
      "m_m_5_71281": 104.99,
      "m_m_5_30823": 0.44,
      "m_m_5_89315": 1899,
      "m_m_5_89969": 154.9,
      "m_m_5_31976": 0.6,
      "m_m_5_89971": 169,
      "lushui": 10,
      "m_m_5_30875": 2.09,
      "m_m_5_30843": 0.53,
      "m_m_5_30874": 35.43,
      "m_m_5_30842": 0.91,
      "m_m_5_5270": 2.99,
      "m_m_5_31970": 0.65,
      "m_m_5_5269": 0.59,
      "m_m_5_31977": 0.64,
      "m_m_5_31013": 185.07,
      "gancao": 1.63,
      "m_m_5_31012": 270.8,
      "m_m_5_89352": 690.13,
      "m_m_5_89350": 498.35,
      "m_m_5_71269": 148.88,
      "m_m_5_89346": 697.28,
      "m_m_5_89167": 10.65,
      "m_m_5_89348": 289.83,
      "m_m_5_71285": 126.57,
      "m_m_5_30836": 1.09,
      "m_m_5_30832": 0.98,
      "m_m_5_30833": 1.76,
      "m_m_5_89324": 99,
      "m_m_5_30831": 0.6,
      "m_m_5_89973": 210.8,
      "m_m_5_31996": 0.67,
      "m_m_5_71240": 62.98,
      "m_m_5_31995": 0.67,
      "m_m_5_71266": 33.02,
      "m_m_5_30838": 0.73,
      "shanhu": 2.19,
      "m_m_5_6646": 0.68,
      "m_m_5_89974": 137.44,
      "m_m_5_6648": 2.95,
      "m_m_5_71267": 111.11,
      "yaoyin": 207,
      "m_m_5_31100": 19.64,
      "shaoyao": 1.47,
      "m_m_5_31102": 0.88,
      "m_m_5_30834": 1.71,
      "m_m_5_89340": 102.39,
      "m_m_5_89325": 958.49,
      "m_m_5_71258": 199.46,
      "m_m_5_89327": 99,
      "m_m_5_89966": 127.91,
      "m_m_5_31991": 0.54,
      "m_m_5_89968": 94.25,
      "m_m_5_89376": 729.63,
      "m_m_5_89965": 115.4,
      "m_m_5_31992": 0.67,
      "m_m_5_89963": 60,
      "m_m_5_89962": 119.78,
      "m_m_5_31139": 3499.86,
      "m_m_5_89964": 68.52,
      "m_m_5_10027": 66.02,
      "m_m_5_89961": 117.83,
      "tiekuang": 2.27,
      "m_m_5_30676": 2.14,
      "m_m_5_30678": 1.3,
      "m_m_5_30674": 2.2,
      "m_m_5_30675": 2.09,
      "m_m_5_89967": 96.94,
      "m_m_5_89367": 1999,
      "m_m_5_6246": 0.23,
      "m_m_5_6249": 0.67,
      "m_m_8_25762": 46.23,
      "m_m_5_30841": 3.91,
      "m_m_5_35708": 6.48,
      "m_m_8_634": 449.9,
      "m_m_8_636": 158,
      "muban": 21.42,
      "muliao": 2.15,
      "m_m_5_35707": 6.49,
      "m_m_5_35703": 0.66,
      "qiwuling": 22,
      "m_m_5_35716": 13.9,
      "m_m_5_35702": 0.65,
      "m_m_5_35715": 14.06,
      "zhuzi": 1.88,
      "m_m_5_35567": 1.58,
      "m_m_5_35704": 0.67,
      "m_m_5_35714": 16.42,
      "m_m_5_35701": 0.66,
      "m_m_5_35713": 89.46,
      "m_m_10_93": 55,
      "m_m_5_35717": 1.25,
      "m_m_5_52337": 1788.42,
      "m_m_5_35772": 1500.34,
      "m_m_5_87917": 337.61,
      "m_m_5_87881": 7500,
      "zasui": 0.65,
      "g_5_30681": 1.14,
      "g_5_30680": 1.14
    },
    "s_douzhuang": {
      "fengwangjiang": 199.85,
      "shoupijiao": 39,
      "qicaixian": 180.15,
      "bairanxian": 3.08,
      "fengyu_yi": 1449.79,
      "m_m_5_30852": 11.57,
      "m_m_5_30853": 74.97,
      "m_m_5_30828": 5.18,
      "m_m_5_89165": 10.63,
      "m_m_5_32000": 0.56,
      "guajian_bei": 69.77,
      "baihua_bu": 104.99,
      "guajian_yao": 98.99,
      "shuran_bu": 147.56,
      "shuran_bag": 48.21,
      "wuseshi": 168.34,
      "m_m_5_30856": 18.88,
      "m_m_5_30855": 161,
      "geyin_zhang": 180.66,
      "m_m_5_89298": 58.03,
      "m_m_5_30679": 14,
      "m_m_5_30847": 6.49,
      "m_m_5_30846": 1.51,
      "yinsi_duan": 180.1,
      "m_m_5_32003": 0.62,
      "m_m_5_30848": 20.02,
      "m_m_5_30850": 138.98,
      "m_m_5_30845": 224.97,
      "m_m_5_31397": 8.04,
      "m_m_5_31253": 333.98,
      "m_m_5_30844": 0.71,
      "m_m_5_30873": 10,
      "m_m_5_90205": 3.24,
      "m_m_8_614": 333,
      "shanshui_juan": 89.03,
      "m_m_5_3779": 5.98,
      "m_m_8_36148": 971.04,
      "m_m_8_19": 0.95,
      "m_m_5_30827": 1.19,
      "m_m_5_89970": 274.95,
      "m_m_5_31978": 0.68,
      "m_m_5_31985": 0.69,
      "lucai": 16.96,
      "m_m_5_1831": 12,
      "m_m_5_31973": 0.66,
      "m_m_5_30849": 5.21,
      "m_m_5_71293": 55.12,
      "m_m_5_30826": 0.5,
      "m_m_5_30825": 0.01,
      "m_m_5_89171": 10.63,
      "m_m_5_31974": 0.68,
      "m_m_5_31968": 0.68,
      "m_m_5_71292": 55.82,
      "m_m_5_30824": 0.89,
      "m_m_5_71281": 9,
      "m_m_5_30823": 0.69,
      "m_m_5_71277": 56.88,
      "m_m_5_89315": 2095.26,
      "m_m_5_89969": 166,
      "m_m_5_31976": 0.67,
      "m_m_5_89971": 210,
      "lushui": 10.88,
      "m_m_5_30875": 1.28,
      "m_m_5_30843": 0.85,
      "m_m_5_30874": 52,
      "m_m_5_30842": 0.81,
      "m_m_5_5270": 1.27,
      "m_m_5_5269": 0.04,
      "m_m_5_31013": 194.94,
      "gancao": 1.49,
      "m_m_5_31012": 315.75,
      "m_m_5_89172": 22.49,
      "m_m_5_89304": 4273.95,
      "m_m_5_89352": 696.89,
      "m_m_5_89350": 712.05,
      "m_m_5_71269": 138.99,
      "m_m_5_89346": 838,
      "m_m_5_89167": 10.63,
      "m_m_5_89348": 197.42,
      "m_m_5_71285": 85.15,
      "m_m_5_30836": 0.53,
      "m_m_5_30832": 1,
      "m_m_5_30833": 1.22,
      "m_m_5_89324": 80.49,
      "m_m_5_30831": 3.07,
      "m_m_5_89973": 182.4,
      "m_m_5_71241": 15,
      "m_m_5_71240": 79.04,
      "m_m_5_31995": 0.67,
      "m_m_5_71266": 48.17,
      "m_m_5_30838": 1,
      "shanhu": 2.45,
      "m_m_5_30835": 1.69,
      "m_m_5_89974": 95,
      "m_m_5_6648": 3.33,
      "m_m_5_71267": 92.21,
      "m_m_5_89168": 22.27,
      "yaoyin": 211,
      "m_m_5_31100": 45.99,
      "shaoyao": 2.25,
      "m_m_5_30834": 1.85,
      "m_m_5_31998": 0.67,
      "m_m_5_89328": 1109.04,
      "m_m_5_89340": 100.24,
      "m_m_5_89325": 842.75,
      "m_m_5_71258": 99,
      "m_m_5_89327": 110.4,
      "m_m_5_89966": 149,
      "m_m_5_31991": 0.66,
      "m_m_5_89968": 100.77,
      "m_m_5_89376": 283,
      "m_m_5_89965": 135,
      "m_m_5_31992": 0.69,
      "m_m_5_89963": 129,
      "m_m_5_71192": 70.22,
      "m_m_5_89169": 10.66,
      "m_m_5_71188": 199.24,
      "m_m_5_31994": 0.69,
      "m_m_5_89962": 108.01,
      "m_m_5_31139": 3599.97,
      "m_m_5_89964": 114,
      "m_m_5_10027": 61.53,
      "m_m_5_89961": 130,
      "tiekuang": 2.38,
      "m_m_5_30676": 2.06,
      "m_m_5_30678": 2.24,
      "m_m_5_30674": 2,
      "m_m_5_30675": 2.98,
      "m_m_5_89967": 117.44,
      "m_m_5_6246": 0.29,
      "m_m_5_6249": 0.54,
      "m_m_5_32787": 1,
      "m_m_8_25762": 99.53,
      "m_m_5_30841": 3.39,
      "m_m_8_636": 300.18,
      "m_m_5_2578": 5,
      "m_m_5_6072": 0.5,
      "m_m_5_6068": 1,
      "muban": 28,
      "muliao": 2.2,
      "qiwuling": 22,
      "m_m_5_35716": 16.85,
      "m_m_5_35715": 10.43,
      "zhuzi": 1.7,
      "m_m_5_35567": 1.49,
      "m_m_5_35704": 0.67,
      "m_m_5_35714": 26.43,
      "m_m_5_35701": 0.67,
      "m_m_5_35713": 26,
      "m_m_5_89260": 45000,
      "m_m_10_1779": 859.98,
      "m_m_5_35717": 2.42,
      "m_m_10_164": 888.01,
      "m_m_5_52337": 1490.3,
      "m_m_5_35772": 4644.35,
      "m_m_5_87917": 321.63,
      "m_m_5_87881": 8200.84,
      "zasui": 0.51,
      "g_5_30681": 1.11,
      "g_5_30680": 1.11
    },
    "s_qiankun": {
      "fengwangjiang": 180.05,
      "shoupijiao": 40,
      "qicaixian": 179.91,
      "bairanxian": 3.59,
      "fengyu_yi": 990.07,
      "m_m_5_30852": 16.1,
      "m_m_5_30853": 84.24,
      "m_m_5_30828": 6.59,
      "m_m_5_89165": 10.64,
      "guajian_bei": 63.69,
      "baihua_bu": 115,
      "guajian_yao": 90.78,
      "shuran_bu": 106.61,
      "m_m_5_32001": 0.57,
      "shuran_bag": 39.99,
      "wuseshi": 174.85,
      "m_m_5_30856": 18.89,
      "m_m_5_30855": 154.28,
      "geyin_zhang": 164.03,
      "m_m_5_89298": 52.59,
      "m_m_5_30679": 15,
      "m_m_5_32004": 0.66,
      "m_m_5_30847": 7.8,
      "m_m_5_30846": 1.64,
      "yinsi_duan": 170.91,
      "m_m_5_32003": 0.6,
      "m_m_5_30848": 23.2,
      "m_m_5_30850": 134.44,
      "m_m_5_30845": 206.91,
      "m_m_5_31397": 1,
      "m_m_5_89435": 6734.86,
      "m_m_5_31253": 288,
      "m_m_5_30844": 0.78,
      "m_m_5_35718": 13.18,
      "m_m_5_35719": 32.49,
      "m_m_5_30873": 17.52,
      "m_m_8_614": 399.32,
      "shanshui_juan": 150.02,
      "m_m_5_3779": 5.99,
      "m_m_8_36148": 1100.89,
      "m_m_8_19": 0.45,
      "m_m_5_3820": 1.89,
      "m_m_5_30827": 1.13,
      "m_m_5_89970": 199.52,
      "m_m_5_32014": 120.31,
      "m_m_5_31978": 0.67,
      "lucai": 17.19,
      "m_m_5_1831": 12.39,
      "m_m_5_31973": 0.59,
      "m_m_5_30849": 5,
      "m_m_5_71293": 49.64,
      "m_m_5_30826": 0.75,
      "m_m_5_30825": 0.02,
      "m_m_5_89171": 10.64,
      "m_m_5_31968": 0.55,
      "m_m_5_71292": 45,
      "m_m_5_30824": 0.4,
      "m_m_5_31967": 0.69,
      "m_m_5_71281": 32.01,
      "m_m_5_30823": 0.7,
      "m_m_5_31969": 0.67,
      "m_m_5_71277": 65,
      "m_m_5_89315": 1740.73,
      "m_m_5_89969": 151,
      "m_m_5_31976": 0.61,
      "m_m_5_89971": 209.16,
      "lushui": 11.09,
      "m_m_5_30875": 1.53,
      "m_m_5_30829": 1.23,
      "m_m_5_30843": 1.24,
      "m_m_5_30874": 39.22,
      "m_m_5_30842": 1,
      "m_m_5_5270": 2.05,
      "m_m_5_5269": 0.1,
      "m_m_5_31013": 189.01,
      "gancao": 1.65,
      "m_m_5_31012": 315.54,
      "m_m_5_89172": 19.09,
      "m_m_5_26231": 1,
      "m_m_5_89352": 744.28,
      "m_m_5_89350": 500.5,
      "m_m_5_71269": 145.98,
      "m_m_5_89346": 639.04,
      "m_m_5_89167": 10.63,
      "m_m_5_89348": 192.08,
      "m_m_5_71285": 132,
      "jieyuan_dan": 9,
      "m_m_5_30836": 1.21,
      "m_m_5_30832": 1.34,
      "m_m_5_30833": 1.55,
      "m_m_5_89324": 121.87,
      "m_m_5_30831": 1.2,
      "m_m_5_89973": 190,
      "m_m_5_71241": 80.53,
      "m_m_5_71240": 102,
      "m_m_5_31995": 0.64,
      "m_m_5_71266": 129,
      "m_m_5_30838": 1,
      "shanhu": 2.19,
      "m_m_5_6646": 1.09,
      "m_m_5_30835": 2.01,
      "m_m_5_89974": 103.7,
      "m_m_5_71267": 95.67,
      "m_m_5_89168": 22.38,
      "yaoyin": 201.93,
      "m_m_5_31100": 9.17,
      "m_m_5_89322": 800,
      "shaoyao": 2.79,
      "m_m_5_31102": 0.52,
      "m_m_5_30834": 2.3,
      "m_m_5_31998": 0.6,
      "m_m_5_89328": 800.95,
      "m_m_5_89332": 907.72,
      "m_m_5_89340": 134.33,
      "m_m_5_89325": 737.13,
      "m_m_5_71258": 109.38,
      "m_m_5_89327": 76.99,
      "m_m_5_89966": 100,
      "m_m_5_31991": 0.58,
      "m_m_5_89377": 650,
      "m_m_5_89968": 161.41,
      "m_m_5_31993": 0.69,
      "m_m_5_89376": 580,
      "m_m_5_89965": 140,
      "m_m_5_31992": 0.58,
      "m_m_5_89963": 111.73,
      "m_m_5_71192": 39.22,
      "m_m_5_89169": 10.63,
      "m_m_5_89962": 117.46,
      "m_m_5_31139": 3599.98,
      "m_m_5_89964": 103.11,
      "m_m_5_10027": 76.88,
      "m_m_5_89961": 124,
      "tiekuang": 2.63,
      "m_m_5_30676": 2.84,
      "m_m_5_30678": 2.4,
      "m_m_5_30674": 3.34,
      "m_m_5_30675": 2.88,
      "m_m_5_89967": 123.65,
      "m_m_5_6246": 0.17,
      "m_m_8_25762": 88.74,
      "m_m_5_30841": 4.08,
      "m_m_5_35708": 6.49,
      "m_m_8_632": 550.33,
      "m_m_8_636": 349.14,
      "m_m_5_6068": 1.01,
      "muban": 39.04,
      "muliao": 3.11,
      "m_m_5_35703": 0.66,
      "qiwuling": 22.8,
      "m_m_5_35716": 15.03,
      "m_m_5_35715": 11.99,
      "zhuzi": 2,
      "m_m_5_35567": 1.92,
      "m_m_5_35714": 29.38,
      "m_m_5_35713": 21.7,
      "m_m_10_93": 37.9,
      "m_m_5_35717": 2.1,
      "m_m_10_164": 90.99,
      "m_m_5_52337": 2320.02,
      "m_m_5_35772": 4339.46,
      "m_m_5_87917": 447.54,
      "m_m_5_87881": 9999.53,
      "zasui": 0.58,
      "g_5_30681": 1,
      "g_5_30680": 1.11
    },
    "s_weiwo": {
      "fengwangjiang": 184.83,
      "shoupijiao": 49.99,
      "qicaixian": 184.59,
      "bairanxian": 3,
      "fengyu_yi": 1547.07,
      "m_m_5_30852": 15.49,
      "m_m_5_30853": 93.5,
      "m_m_5_30828": 7.03,
      "m_m_5_89165": 10.62,
      "m_m_5_32000": 0.64,
      "guajian_bei": 62.98,
      "baihua_bu": 93.75,
      "guajian_yao": 93.44,
      "shuran_bu": 174,
      "m_m_5_32001": 0.66,
      "shuran_bag": 20.78,
      "m_m_5_10173": 30.45,
      "wuseshi": 190,
      "m_m_5_30856": 14.94,
      "m_m_5_30855": 156.32,
      "geyin_zhang": 239.99,
      "m_m_5_89298": 55,
      "m_m_5_30679": 15.24,
      "m_m_5_32004": 0.64,
      "m_m_5_30847": 8.29,
      "m_m_5_30846": 1.65,
      "yinsi_duan": 166.99,
      "m_m_5_32003": 0.66,
      "m_m_5_30848": 25.02,
      "m_m_5_30850": 148.42,
      "m_m_5_30845": 211.3,
      "m_m_5_31397": 1.66,
      "m_m_5_89433": 5500,
      "m_m_5_89435": 6200,
      "m_m_5_31253": 300.85,
      "m_m_5_30844": 0.71,
      "m_m_5_35718": 16.09,
      "m_m_5_35719": 32.39,
      "m_m_5_30873": 27,
      "m_m_5_90205": 28.17,
      "m_m_8_614": 1099.99,
      "shanshui_juan": 210.78,
      "m_m_5_3819": 109.99,
      "m_m_5_3779": 3.26,
      "m_m_8_36148": 749.3,
      "m_m_8_19": 0.02,
      "m_m_5_89474": 3563.16,
      "m_m_5_3820": 30.14,
      "m_m_5_30827": 1.02,
      "m_m_5_89970": 198.05,
      "m_m_5_32014": 149.99,
      "m_m_5_31978": 0.64,
      "m_m_5_31985": 0.61,
      "lucai": 19,
      "m_m_5_1831": 14.95,
      "m_m_5_31973": 0.64,
      "m_m_5_30849": 5.16,
      "m_m_5_71293": 30.12,
      "m_m_5_30826": 1,
      "m_m_5_30825": 0.01,
      "m_m_5_89171": 10.63,
      "m_m_5_31974": 0.66,
      "m_m_5_31968": 0.4,
      "m_m_5_71292": 40,
      "m_m_5_30824": 0.54,
      "m_m_5_31967": 0.5,
      "m_m_5_71281": 22,
      "m_m_5_30823": 0.64,
      "m_m_5_31969": 0.65,
      "m_m_5_71277": 35,
      "m_m_5_89315": 1798.2,
      "m_m_5_89969": 162.44,
      "m_m_5_31976": 0.59,
      "m_m_5_89303": 3930.74,
      "m_m_5_89971": 211,
      "lushui": 11.21,
      "m_m_5_30875": 2.37,
      "m_m_5_30829": 0.66,
      "m_m_5_30843": 0.75,
      "m_m_5_30874": 37,
      "m_m_5_30842": 0.77,
      "m_m_5_31970": 0.66,
      "m_m_5_5269": 0.77,
      "m_m_5_31977": 0.63,
      "m_m_5_31013": 209.71,
      "gancao": 3.49,
      "m_m_5_31012": 298.57,
      "m_m_5_90034": 2888,
      "m_m_5_26057": 15200,
      "m_m_5_26231": 1.4,
      "m_m_5_89352": 695.86,
      "m_m_5_89350": 582.05,
      "m_m_5_71269": 149.04,
      "m_m_5_89346": 701.39,
      "m_m_5_89167": 10.65,
      "m_m_5_89348": 224.99,
      "m_m_5_71285": 124.94,
      "jieyuan_dan": 58.8,
      "m_m_5_30836": 1.89,
      "m_m_5_30832": 2.98,
      "m_m_5_30833": 2.61,
      "m_m_5_31997": 0.63,
      "m_m_5_89324": 111.02,
      "m_m_5_30831": 2.2,
      "m_m_5_89973": 193.69,
      "m_m_5_31996": 0.69,
      "m_m_5_71241": 99,
      "m_m_5_71240": 102.97,
      "m_m_5_31995": 0.66,
      "m_m_5_71266": 97,
      "m_m_5_30838": 0.98,
      "shanhu": 2.79,
      "m_m_5_6646": 0.62,
      "m_m_5_30835": 2,
      "m_m_5_89974": 89.97,
      "m_m_5_6648": 2.99,
      "m_m_5_71267": 87,
      "m_m_5_90029": 980,
      "m_m_5_89168": 23.49,
      "yaoyin": 200.66,
      "shaoyao": 2.52,
      "m_m_5_90206": 60,
      "m_m_5_31102": 0.02,
      "m_m_5_30834": 2.76,
      "m_m_5_90035": 4780,
      "m_m_5_89328": 840.67,
      "m_m_5_89340": 131.99,
      "m_m_5_89325": 798.14,
      "m_m_5_71258": 106.78,
      "m_m_5_31999": 0.63,
      "m_m_5_89327": 105.86,
      "m_m_5_89966": 116.6,
      "m_m_5_10176": 3.42,
      "m_m_5_31991": 0.66,
      "m_m_5_89377": 488.01,
      "m_m_5_89968": 127,
      "m_m_5_31993": 0.79,
      "m_m_5_89376": 519.63,
      "m_m_5_89965": 109.53,
      "m_m_5_89375": 450.12,
      "m_m_5_89963": 89,
      "m_m_5_89169": 10.64,
      "m_m_5_71188": 258.03,
      "m_m_5_31994": 0.66,
      "m_m_5_89962": 128,
      "m_m_5_31139": 3690.09,
      "m_m_5_89964": 125.32,
      "m_m_5_10027": 70.55,
      "m_m_5_89961": 143.33,
      "tiekuang": 3.16,
      "m_m_5_30676": 3,
      "m_m_5_30678": 3.4,
      "m_m_5_30674": 3.17,
      "m_m_5_30675": 3.37,
      "m_m_5_89967": 160,
      "m_m_5_6246": 0.15,
      "m_m_5_6249": 0.27,
      "m_m_8_25762": 50.47,
      "m_m_5_30841": 4.34,
      "m_m_5_10172": 29,
      "m_m_5_35708": 6.55,
      "m_m_8_632": 255.41,
      "m_m_8_634": 248.9,
      "m_m_8_636": 1599.99,
      "m_m_5_90353": 1600.27,
      "m_m_5_90257": 294.8,
      "m_m_5_6072": 0.27,
      "m_m_5_6068": 0.21,
      "m_m_5_6066": 0.01,
      "muban": 31.99,
      "muliao": 3.87,
      "m_m_5_35707": 6.12,
      "m_m_5_35703": 0.63,
      "qiwuling": 29.5,
      "m_m_5_35716": 16.39,
      "m_m_5_35715": 13.78,
      "zhuzi": 1.77,
      "m_m_5_35567": 1.71,
      "m_m_5_35704": 0.63,
      "m_m_5_35714": 24,
      "m_m_5_35701": 0.63,
      "m_m_5_35713": 19.82,
      "m_m_10_948": 252.68,
      "m_m_5_89260": 23456,
      "m_m_10_2034": 1157.46,
      "m_m_10_93": 24.58,
      "m_m_10_1882": 1396.44,
      "m_m_5_35717": 2.01,
      "m_m_10_2037": 1259.97,
      "m_m_5_52337": 1384.81,
      "m_m_5_40232": 2778.05,
      "m_m_5_35772": 1750.83,
      "m_m_5_87917": 432.45,
      "m_m_5_87881": 9999.82,
      "zasui": 0.85,
      "g_5_30681": 1.76,
      "g_5_30680": 1.2
    },
    "s_juedai": {
      "fengwangjiang": 178.79,
      "shoupijiao": 47.06,
      "qicaixian": 176.1,
      "bairanxian": 3.39,
      "fengyu_yi": 2955.78,
      "m_m_5_30852": 12,
      "m_m_5_30853": 72.79,
      "m_m_5_30828": 4.67,
      "m_m_5_89165": 10.64,
      "guajian_bei": 57.79,
      "baihua_bu": 91.66,
      "guajian_yao": 93.97,
      "shuran_bu": 113.15,
      "m_m_5_32001": 0.6,
      "shuran_bag": 23.7,
      "jinfeng_bag": 8888,
      "wuseshi": 149.31,
      "m_m_5_30856": 21,
      "m_m_5_30855": 165.2,
      "geyin_zhang": 100.24,
      "m_m_5_89298": 56.99,
      "m_m_5_30679": 15.34,
      "m_m_5_32004": 0.69,
      "m_m_5_30847": 8.58,
      "m_m_5_30846": 1.51,
      "yinsi_duan": 180.15,
      "m_m_5_30848": 21.4,
      "m_m_5_30850": 129.99,
      "m_m_5_30845": 205.3,
      "m_m_5_31397": 1,
      "m_m_5_89433": 9555,
      "m_m_5_89435": 7990.81,
      "m_m_5_31253": 555,
      "m_m_5_30844": 0.71,
      "m_m_5_90210": 22,
      "m_m_5_30873": 19.9,
      "m_m_5_90205": 6.55,
      "m_m_8_614": 688.67,
      "m_m_5_3819": 100,
      "m_m_8_36148": 740,
      "m_m_8_19": 0.54,
      "m_m_5_89474": 3319.33,
      "m_m_5_3820": 10,
      "m_m_5_30827": 0.92,
      "m_m_5_89970": 225.09,
      "m_m_5_31978": 0.62,
      "m_m_5_31985": 0.6,
      "lucai": 17.88,
      "m_m_5_1831": 12.7,
      "m_m_5_30849": 5,
      "m_m_5_71293": 37.6,
      "m_m_5_30826": 0.48,
      "m_m_5_30825": 0.01,
      "m_m_5_89171": 10.63,
      "m_m_5_31974": 0.58,
      "m_m_5_31968": 0.69,
      "m_m_5_71292": 40,
      "m_m_5_30824": 1.04,
      "m_m_5_71281": 18.22,
      "m_m_5_30823": 0.37,
      "m_m_5_31969": 0.67,
      "m_m_5_71277": 54.7,
      "m_m_5_89315": 1750,
      "m_m_5_89969": 186.81,
      "m_m_5_89971": 208,
      "lushui": 12,
      "m_m_5_30875": 2.97,
      "m_m_5_30843": 0.89,
      "m_m_5_30874": 39.99,
      "m_m_5_30842": 0.75,
      "m_m_5_5270": 1.48,
      "m_m_5_31970": 0.69,
      "m_m_5_5269": 0.15,
      "m_m_5_31013": 185.48,
      "gancao": 1.42,
      "m_m_5_31012": 335,
      "m_m_5_89172": 22.4,
      "m_m_5_26057": 8888,
      "m_m_5_89352": 709.01,
      "m_m_5_89350": 572.23,
      "m_m_5_71269": 110.48,
      "m_m_5_89346": 651.24,
      "m_m_5_89167": 10.64,
      "m_m_5_89348": 232.25,
      "m_m_5_71285": 87.49,
      "jieyuan_dan": 40.08,
      "m_m_5_30836": 0.48,
      "m_m_5_30832": 1.22,
      "m_m_5_30833": 1.44,
      "m_m_5_89324": 110.48,
      "m_m_5_30831": 0.7,
      "m_m_5_89973": 199.99,
      "m_m_5_31996": 0.67,
      "m_m_5_71240": 58.11,
      "m_m_5_31995": 0.66,
      "m_m_5_71266": 66.13,
      "m_m_5_30838": 0.69,
      "shanhu": 2.83,
      "m_m_5_6646": 1.33,
      "m_m_5_30835": 1.21,
      "m_m_5_89974": 145.93,
      "m_m_5_6648": 3.88,
      "m_m_5_71267": 40.16,
      "m_m_5_89168": 22.39,
      "yaoyin": 183.86,
      "m_m_5_31100": 30.09,
      "shaoyao": 1.67,
      "m_m_5_90206": 100.9,
      "m_m_5_30834": 2.28,
      "m_m_5_89328": 726.24,
      "m_m_5_89340": 114.95,
      "m_m_5_89325": 896,
      "m_m_5_71258": 108.98,
      "m_m_5_31999": 0.65,
      "m_m_5_89327": 75.25,
      "m_m_5_89966": 114,
      "m_m_5_10176": 3.38,
      "m_m_5_31991": 0.66,
      "m_m_5_89968": 140.67,
      "m_m_5_31993": 0.69,
      "m_m_5_89376": 395,
      "m_m_5_89965": 138,
      "m_m_5_89963": 110,
      "m_m_5_71192": 13.75,
      "m_m_5_89169": 10.64,
      "m_m_5_71188": 754.07,
      "m_m_5_31994": 0.7,
      "m_m_5_89962": 136.99,
      "m_m_5_31139": 4500.72,
      "m_m_5_89964": 80,
      "m_m_5_10027": 58.2,
      "m_m_5_89961": 144.47,
      "tiekuang": 3.15,
      "m_m_5_30676": 2.25,
      "m_m_5_30678": 2.06,
      "m_m_5_30674": 4.93,
      "m_m_5_30675": 3.96,
      "m_m_5_89967": 115.98,
      "m_m_5_6246": 0.41,
      "m_m_5_6249": 0.43,
      "m_m_8_25762": 30.4,
      "m_m_5_30841": 4.61,
      "m_m_5_10172": 32.99,
      "m_m_5_35708": 6.49,
      "m_m_8_636": 80.37,
      "m_m_5_90257": 450,
      "m_m_5_2578": 5.99,
      "m_m_5_6072": 1.37,
      "m_m_5_6068": 5.35,
      "muban": 25.28,
      "muliao": 3.2,
      "m_m_5_35707": 6.49,
      "qiwuling": 50.27,
      "m_m_5_35716": 10.31,
      "m_m_5_35715": 9.65,
      "zhuzi": 1.58,
      "m_m_5_35567": 1.25,
      "m_m_5_35714": 22,
      "m_m_5_35701": 0.59,
      "m_m_5_35713": 89.99,
      "m_m_10_1778": 917.83,
      "m_m_10_1880": 1200,
      "m_m_10_2034": 1292,
      "m_m_10_1882": 1409,
      "m_m_5_35717": 2.18,
      "m_m_10_2037": 1284,
      "m_m_5_52337": 1800.17,
      "m_m_5_40232": 2000.93,
      "m_m_5_35772": 5250.27,
      "m_m_5_87917": 329.96,
      "m_m_5_87881": 9999,
      "zasui": 0.4,
      "g_5_30681": 1.26,
      "g_5_30680": 1.12
    },
    "s_tianeping": {
      "fengwangjiang": 172.31,
      "shoupijiao": 38.5,
      "qicaixian": 179.58,
      "bairanxian": 4.29,
      "fengyu_yi": 2555.52,
      "m_m_5_30852": 16.45,
      "m_m_5_30853": 79.03,
      "m_m_5_30828": 11,
      "m_m_5_32000": 0.9,
      "guajian_bei": 99.26,
      "baihua_bu": 108.11,
      "guajian_yao": 98.38,
      "shuran_bu": 137.97,
      "shuran_bag": 10.88,
      "m_m_5_10173": 32.2,
      "wuseshi": 173,
      "m_m_5_30856": 18,
      "m_m_5_30855": 155.6,
      "geyin_zhang": 115.64,
      "m_m_5_89298": 57.16,
      "m_m_5_30679": 18.44,
      "m_m_5_32004": 1.6,
      "m_m_5_30847": 7.58,
      "m_m_5_30846": 1.52,
      "yinsi_duan": 128,
      "m_m_5_32003": 0.97,
      "m_m_5_30848": 20.55,
      "m_m_5_32002": 0.98,
      "m_m_5_30850": 154.58,
      "m_m_5_30845": 194.74,
      "m_m_5_89435": 8639.98,
      "m_m_5_30844": 0.98,
      "m_m_5_30873": 20,
      "m_m_5_90205": 100.57,
      "m_m_8_614": 80.09,
      "shanshui_juan": 99,
      "m_m_5_3819": 65.5,
      "m_m_5_3779": 2,
      "m_m_8_36148": 925.56,
      "m_m_8_19": 0.01,
      "m_m_5_3820": 9.77,
      "m_m_5_30827": 1.06,
      "m_m_5_89970": 220.37,
      "m_m_5_31978": 0.59,
      "m_m_5_31985": 0.7,
      "lucai": 18.3,
      "m_m_5_1831": 15.73,
      "m_m_5_31973": 0.8,
      "m_m_5_30849": 5.72,
      "m_m_5_71293": 69.87,
      "m_m_5_30826": 0.59,
      "m_m_5_30825": 0.02,
      "m_m_5_89171": 18,
      "m_m_5_31974": 0.9,
      "m_m_5_31968": 0.6,
      "m_m_5_71292": 35.98,
      "m_m_5_30824": 0.98,
      "m_m_5_71281": 16.81,
      "m_m_5_30823": 0.4,
      "m_m_5_71277": 30.5,
      "m_m_5_89315": 1580,
      "m_m_5_89969": 140.73,
      "m_m_5_31976": 0.7,
      "m_m_5_89303": 3000,
      "m_m_5_89971": 199.99,
      "lushui": 11.99,
      "m_m_5_30875": 2.16,
      "m_m_5_30829": 1.66,
      "m_m_5_30843": 0.98,
      "m_m_5_30874": 42.99,
      "m_m_5_30842": 1,
      "m_m_5_5270": 1.79,
      "m_m_5_31970": 1.61,
      "m_m_5_5269": 0.01,
      "m_m_5_31013": 189.78,
      "gancao": 1.86,
      "m_m_5_31012": 309.54,
      "m_m_5_89172": 59.97,
      "m_m_5_89304": 3400.27,
      "m_m_5_26057": 2500.25,
      "m_m_5_89352": 723.13,
      "m_m_5_89350": 617.37,
      "m_m_5_71269": 133,
      "m_m_5_89346": 722,
      "m_m_5_89167": 28.15,
      "m_m_5_89348": 145.27,
      "m_m_5_71285": 120.68,
      "m_m_5_30836": 2.07,
      "m_m_5_30832": 1.15,
      "m_m_5_30833": 1.9,
      "m_m_5_89324": 80,
      "m_m_5_30831": 1.01,
      "m_m_5_89973": 180.87,
      "m_m_5_31996": 0.67,
      "m_m_5_71240": 50,
      "m_m_5_31995": 0.9,
      "m_m_5_30838": 1.2,
      "shanhu": 2.43,
      "m_m_5_6646": 1.06,
      "m_m_5_30835": 1.8,
      "m_m_5_89974": 115.66,
      "m_m_5_71267": 70,
      "m_m_5_89168": 49.3,
      "yaoyin": 174.96,
      "m_m_5_89322": 888,
      "shaoyao": 2.97,
      "m_m_5_30834": 3.16,
      "m_m_5_31998": 6.5,
      "m_m_5_89328": 946.54,
      "m_m_5_89340": 149.46,
      "m_m_5_89325": 818.48,
      "m_m_5_71258": 98.62,
      "m_m_5_89327": 100,
      "m_m_5_89966": 130.06,
      "m_m_5_10176": 2.53,
      "m_m_5_31991": 0.68,
      "m_m_5_89377": 499,
      "m_m_5_89968": 121.5,
      "m_m_5_31993": 0.64,
      "m_m_5_89376": 489.06,
      "m_m_5_89965": 118.71,
      "m_m_5_31992": 1.66,
      "m_m_5_89963": 84.74,
      "m_m_5_71192": 9,
      "m_m_5_89169": 53,
      "m_m_5_71188": 555.12,
      "m_m_5_89962": 117,
      "m_m_5_31139": 3598.98,
      "m_m_5_89964": 69.54,
      "m_m_5_10027": 66.96,
      "m_m_5_89961": 101.51,
      "tiekuang": 2.68,
      "m_m_5_30676": 3.25,
      "m_m_5_30678": 2.44,
      "m_m_5_30674": 3.14,
      "m_m_5_30675": 3.31,
      "m_m_5_6246": 0.1,
      "m_m_5_32787": 1,
      "m_m_8_25762": 19.09,
      "m_m_5_30841": 3.75,
      "m_m_5_10172": 37.47,
      "m_m_5_90032": 9999,
      "m_m_8_634": 243,
      "m_m_8_636": 149.1,
      "m_m_5_2578": 6,
      "m_m_5_6072": 1.99,
      "m_m_5_6068": 1.01,
      "muban": 40,
      "muliao": 3.96,
      "m_m_5_35707": 3,
      "qiwuling": 23.2,
      "m_m_5_35716": 19.99,
      "m_m_5_35715": 13.89,
      "zhuzi": 1.8,
      "m_m_5_35567": 1.66,
      "m_m_5_35704": 0.6,
      "m_m_5_35714": 33.18,
      "m_m_5_35713": 16.02,
      "m_m_5_35705": 0.55,
      "m_m_10_948": 854.82,
      "m_m_10_2034": 1985,
      "m_m_10_93": 1.34,
      "m_m_5_35717": 2,
      "m_m_10_164": 272,
      "m_m_5_52337": 2278.48,
      "m_m_5_40232": 5658.73,
      "m_m_5_35772": 1680.99,
      "m_m_5_87917": 500.02,
      "m_m_5_87881": 7993,
      "zasui": 0.95,
      "g_5_30681": 1.17,
      "g_5_30680": 1.7
    },
    "s_feilong": {
      "fengwangjiang": 189.81,
      "shoupijiao": 46.21,
      "qicaixian": 128.97,
      "fengyu_yi": 1111,
      "m_m_5_30852": 32.24,
      "m_m_5_30853": 88.77,
      "m_m_5_30828": 7.36,
      "m_m_5_32000": 3.87,
      "guajian_bei": 56.92,
      "baihua_bu": 102.22,
      "guajian_yao": 99.88,
      "shuran_bu": 126.42,
      "m_m_5_10173": 35.09,
      "jinfeng_bag": 10000,
      "wuseshi": 133.19,
      "m_m_5_30856": 28.09,
      "m_m_5_30855": 152.45,
      "geyin_zhang": 200.4,
      "m_m_5_89298": 49,
      "m_m_5_30679": 12.95,
      "m_m_5_30847": 9.07,
      "m_m_5_30846": 2.3,
      "yinsi_duan": 134.4,
      "m_m_5_30848": 22.91,
      "m_m_5_30850": 184.82,
      "m_m_5_30845": 213.33,
      "m_m_5_31397": 2,
      "m_m_5_89435": 8000,
      "m_m_5_30844": 0.94,
      "m_m_5_30873": 5.49,
      "m_m_5_90205": 22,
      "m_m_8_614": 1666,
      "shanshui_juan": 160.88,
      "m_m_5_3779": 2.66,
      "m_m_8_36148": 1466.9,
      "m_m_5_30827": 0.87,
      "m_m_5_89970": 267,
      "m_m_5_32014": 311.18,
      "lucai": 15.23,
      "m_m_5_1831": 28.3,
      "m_m_5_31973": 3.47,
      "m_m_5_30849": 5.21,
      "m_m_5_71293": 41,
      "m_m_5_30826": 0.69,
      "m_m_5_30825": 0.02,
      "m_m_5_71292": 35,
      "m_m_5_30824": 0.49,
      "m_m_5_71281": 36,
      "m_m_5_30823": 1.42,
      "m_m_5_71277": 39,
      "m_m_5_89315": 1673,
      "m_m_5_89969": 159.22,
      "m_m_5_31976": 2.28,
      "m_m_5_89303": 3700.51,
      "m_m_5_89971": 184.88,
      "lushui": 9.44,
      "m_m_5_30875": 7.99,
      "m_m_5_30843": 1.5,
      "m_m_5_30874": 40,
      "m_m_5_30842": 0.81,
      "m_m_5_5270": 0.96,
      "m_m_5_5269": 0.29,
      "m_m_5_31013": 225,
      "gancao": 1.98,
      "m_m_5_31012": 305,
      "m_m_5_89304": 3279.57,
      "m_m_5_89352": 822,
      "m_m_5_71269": 163,
      "m_m_5_89346": 676.66,
      "m_m_5_89348": 221.78,
      "m_m_5_71285": 111.2,
      "m_m_5_30836": 0.77,
      "m_m_5_30832": 1.13,
      "m_m_5_30833": 2.31,
      "m_m_5_89324": 153.42,
      "m_m_5_30831": 0.77,
      "m_m_5_89973": 230,
      "m_m_5_71240": 33,
      "m_m_5_71266": 39,
      "m_m_5_30838": 0.88,
      "shanhu": 2.56,
      "m_m_5_30835": 1.9,
      "m_m_5_89974": 147.83,
      "m_m_5_71267": 33.13,
      "yaoyin": 197.69,
      "shaoyao": 2.64,
      "m_m_5_90206": 100,
      "m_m_5_31102": 0.47,
      "m_m_5_30834": 2.78,
      "m_m_5_89340": 146.42,
      "m_m_5_89325": 771.8,
      "m_m_5_71258": 120.2,
      "m_m_5_89327": 97,
      "m_m_5_89966": 129.64,
      "m_m_5_89968": 118,
      "m_m_5_89965": 136,
      "m_m_5_31992": 14.97,
      "m_m_5_89963": 127,
      "m_m_5_31994": 9.99,
      "m_m_5_89962": 150,
      "m_m_5_31139": 3221.99,
      "m_m_5_89964": 110.78,
      "m_m_5_10027": 121.26,
      "m_m_5_89961": 179.22,
      "tiekuang": 2.96,
      "m_m_5_30676": 3.41,
      "m_m_5_30678": 1.45,
      "m_m_5_30674": 3.15,
      "m_m_5_30675": 3.07,
      "m_m_5_89967": 99.19,
      "m_m_5_6246": 0.4,
      "m_m_8_25762": 88,
      "m_m_5_30841": 6.49,
      "m_m_8_17538": 30,
      "m_m_8_632": 1660,
      "m_m_8_634": 100.3,
      "m_m_8_636": 1666,
      "m_m_5_6072": 5,
      "m_m_5_6066": 0.05,
      "muban": 38.66,
      "muliao": 4.8,
      "m_m_5_35707": 12.89,
      "qiwuling": 28.76,
      "m_m_5_35716": 88.98,
      "m_m_5_35715": 89.72,
      "zhuzi": 2.05,
      "m_m_5_35567": 2.09,
      "m_m_5_35714": 89,
      "m_m_5_35713": 23.95,
      "m_m_5_35705": 12,
      "m_m_5_35717": 2.88,
      "m_m_5_52337": 1800,
      "m_m_5_35772": 2008.99,
      "m_m_5_87917": 328.96,
      "m_m_5_87881": 8880.52,
      "zasui": 0.64,
      "g_5_30681": 2.47,
      "g_5_30680": 1.11
    },
    "s_jiutian": {
      "fengwangjiang": 1010.1,
      "shoupijiao": 86,
      "qicaixian": 90.06,
      "m_m_5_30852": 16.95,
      "m_m_5_30828": 6,
      "guajian_bei": 119.95,
      "baihua_bu": 35.36,
      "guajian_yao": 127.9,
      "shuran_bu": 79.97,
      "m_m_5_32001": 3.99,
      "wuseshi": 82.98,
      "m_m_5_30856": 23.55,
      "m_m_5_30855": 148,
      "geyin_zhang": 200,
      "m_m_5_89298": 15.28,
      "m_m_5_30679": 48.09,
      "m_m_5_32004": 0.59,
      "m_m_5_30847": 12.75,
      "m_m_5_30846": 6.98,
      "yinsi_duan": 62.86,
      "m_m_5_30848": 23.74,
      "m_m_5_32002": 3,
      "m_m_5_30850": 96.98,
      "m_m_5_30845": 220,
      "m_m_5_30844": 1,
      "m_m_5_30873": 65.89,
      "shanshui_juan": 55,
      "m_m_5_3819": 188.87,
      "m_m_5_3779": 0.77,
      "m_m_8_19": 1,
      "m_m_5_3820": 4.58,
      "m_m_5_30827": 1.6,
      "m_m_5_89970": 107,
      "lucai": 145,
      "m_m_5_31973": 1.68,
      "m_m_5_30849": 7.95,
      "m_m_5_30826": 0.53,
      "m_m_5_30825": 0.01,
      "m_m_5_89171": 18.99,
      "m_m_5_30824": 0.38,
      "m_m_5_30823": 1.2,
      "m_m_5_89315": 1277,
      "m_m_5_89969": 100.48,
      "m_m_5_31976": 0.97,
      "m_m_5_89971": 249.08,
      "lushui": 13.14,
      "m_m_5_30843": 2.3,
      "m_m_5_30874": 30.85,
      "m_m_5_30842": 1.79,
      "m_m_5_5270": 9.45,
      "m_m_5_31970": 3.77,
      "m_m_5_31977": 0.85,
      "m_m_5_31013": 197.7,
      "gancao": 1.4,
      "m_m_5_31012": 399.58,
      "m_m_5_89304": 6000.91,
      "m_m_5_26231": 1.69,
      "m_m_5_89352": 1888.26,
      "m_m_5_89350": 2332.87,
      "m_m_5_71269": 888.89,
      "m_m_5_89346": 1100.35,
      "m_m_5_89348": 587,
      "jieyuan_dan": 33.42,
      "m_m_5_30836": 2.29,
      "m_m_5_30832": 0.9,
      "m_m_5_30833": 4.12,
      "m_m_5_89324": 190.84,
      "m_m_5_30831": 1.18,
      "m_m_5_89973": 129.95,
      "m_m_5_31996": 3.42,
      "m_m_5_31995": 3.96,
      "m_m_5_30838": 2.8,
      "shanhu": 3.86,
      "m_m_5_30835": 1.5,
      "yaoyin": 88.9,
      "shaoyao": 3.06,
      "m_m_5_30834": 4.26,
      "m_m_5_31998": 5.37,
      "m_m_5_89328": 1999,
      "m_m_5_89340": 345,
      "m_m_5_89325": 1998,
      "m_m_5_31999": 1.58,
      "m_m_5_89327": 298.99,
      "m_m_5_89966": 155.06,
      "m_m_5_89968": 59.99,
      "m_m_5_89376": 666,
      "m_m_5_89965": 43.21,
      "m_m_5_89963": 50,
      "m_m_5_89962": 62.27,
      "m_m_5_89964": 107.88,
      "m_m_5_10027": 109.83,
      "m_m_5_89961": 69.99,
      "tiekuang": 3.91,
      "m_m_5_30676": 3.4,
      "m_m_5_30678": 3.47,
      "m_m_5_30674": 12.36,
      "m_m_5_30675": 3.88,
      "m_m_5_6246": 0.48,
      "m_m_5_6249": 6.41,
      "m_m_5_30841": 27.18,
      "m_m_8_636": 40,
      "muban": 153.3,
      "muliao": 5.39,
      "qiwuling": 19.99,
      "m_m_5_35716": 99,
      "m_m_5_35715": 30.96,
      "zhuzi": 1.98,
      "m_m_5_35567": 2.56,
      "m_m_5_35713": 54.7,
      "m_m_5_35717": 3.57,
      "m_m_5_52337": 7500,
      "m_m_5_35772": 6000,
      "zasui": 1.6,
      "g_5_30681": 3.05,
      "g_5_30680": 2.9
    },
    "s_meijianxue": {
      "fengwangjiang": 150.27,
      "shoupijiao": 62.99,
      "qicaixian": 165,
      "bairanxian": 4,
      "fengyu_yi": 1103.16,
      "m_m_5_30852": 13,
      "m_m_5_30853": 72.68,
      "m_m_5_30828": 3.08,
      "guajian_bei": 59.88,
      "baihua_bu": 89.63,
      "guajian_yao": 87.2,
      "shuran_bu": 149.95,
      "shuran_bag": 50,
      "wuseshi": 310.9,
      "m_m_5_30856": 18.44,
      "m_m_5_30855": 147.99,
      "m_m_5_89298": 40.53,
      "m_m_5_30679": 14,
      "m_m_5_30847": 5.48,
      "m_m_5_30846": 1.44,
      "yinsi_duan": 150.25,
      "m_m_5_30848": 18.86,
      "m_m_5_30850": 153.92,
      "m_m_5_30845": 194.55,
      "m_m_5_31397": 3.17,
      "m_m_5_30844": 1.18,
      "m_m_5_30873": 6.95,
      "m_m_5_90205": 5,
      "m_m_8_36148": 987,
      "m_m_5_30827": 0.93,
      "m_m_5_89970": 200,
      "m_m_5_32014": 302,
      "m_m_5_31985": 1.46,
      "lucai": 16.98,
      "m_m_5_1831": 15,
      "m_m_5_30849": 4.97,
      "m_m_5_71293": 24.79,
      "m_m_5_30826": 0.6,
      "m_m_5_30825": 0.15,
      "m_m_5_31974": 1.33,
      "m_m_5_71292": 25.87,
      "m_m_5_30824": 0.3,
      "m_m_5_71281": 8.76,
      "m_m_5_30823": 0.34,
      "m_m_5_71277": 31.41,
      "m_m_5_89315": 1500.97,
      "m_m_5_89969": 169,
      "m_m_5_31976": 0.65,
      "m_m_5_89303": 3794.15,
      "m_m_5_89971": 179.98,
      "lushui": 10.95,
      "m_m_5_30875": 1.35,
      "m_m_5_30843": 1.25,
      "m_m_5_30874": 30.23,
      "m_m_5_30842": 0.9,
      "m_m_5_5270": 0.77,
      "m_m_5_5269": 0.2,
      "m_m_5_31013": 224,
      "gancao": 1.91,
      "m_m_5_31012": 277.17,
      "m_m_5_89352": 885.92,
      "m_m_5_89350": 1399.67,
      "m_m_5_71269": 125.75,
      "m_m_5_89346": 950.65,
      "m_m_5_89348": 299.95,
      "m_m_5_71285": 90.41,
      "m_m_5_30836": 0.58,
      "m_m_5_30832": 1.25,
      "m_m_5_30833": 0.95,
      "m_m_5_89324": 225,
      "m_m_5_30831": 0.84,
      "m_m_5_89973": 230.59,
      "m_m_5_31996": 13.11,
      "m_m_5_71241": 28,
      "m_m_5_71240": 64.9,
      "m_m_5_31995": 3.62,
      "m_m_5_71266": 33.28,
      "m_m_5_30838": 0.69,
      "shanhu": 3.47,
      "m_m_5_30835": 1.74,
      "m_m_5_89974": 200.7,
      "m_m_5_71267": 41.73,
      "yaoyin": 244.54,
      "m_m_5_31100": 66.22,
      "shaoyao": 1.79,
      "m_m_5_31102": 0.11,
      "m_m_5_30834": 2.45,
      "m_m_5_31998": 5.66,
      "m_m_5_89332": 700.35,
      "m_m_5_89340": 145.8,
      "m_m_5_89325": 622.14,
      "m_m_5_71258": 77.12,
      "m_m_5_89327": 140,
      "m_m_5_89966": 148.99,
      "m_m_5_89968": 120.9,
      "m_m_5_89376": 1110.82,
      "m_m_5_89965": 250.42,
      "m_m_5_31992": 9,
      "m_m_5_89375": 1111,
      "m_m_5_89963": 128,
      "m_m_5_89962": 127.38,
      "m_m_5_31139": 4994.9,
      "m_m_5_89964": 100.27,
      "m_m_5_10027": 95.28,
      "m_m_5_89961": 128.73,
      "tiekuang": 3.75,
      "m_m_5_30676": 2.3,
      "m_m_5_30678": 3,
      "m_m_5_30674": 5.6,
      "m_m_5_30675": 5.18,
      "m_m_5_89967": 142.5,
      "m_m_8_25762": 97.43,
      "m_m_5_30841": 4.14,
      "m_m_8_634": 500,
      "m_m_8_636": 20.66,
      "muban": 39,
      "muliao": 3.92,
      "qiwuling": 42.71,
      "m_m_5_35716": 89.69,
      "m_m_5_35715": 40.2,
      "zhuzi": 2,
      "m_m_5_35567": 2.58,
      "m_m_5_35714": 24.98,
      "m_m_5_35713": 37.76,
      "m_m_5_35717": 4.41,
      "m_m_5_52337": 2880,
      "m_m_5_35772": 2980.24,
      "m_m_5_87917": 200.44,
      "m_m_5_87881": 8000,
      "zasui": 0.4,
      "g_5_30681": 7.09,
      "g_5_30680": 1.37
    },
    "s_shanhai": {
      "fengwangjiang": 214.87,
      "shoupijiao": 45,
      "qicaixian": 118,
      "bairanxian": 20.76,
      "fengyu_yi": 1888.68,
      "m_m_5_30852": 28.87,
      "m_m_5_30853": 74.99,
      "m_m_5_30828": 4.83,
      "guajian_bei": 64.98,
      "baihua_bu": 90.47,
      "guajian_yao": 88.87,
      "shuran_bu": 177.97,
      "shuran_bag": 15,
      "wuseshi": 298,
      "m_m_5_30856": 18,
      "m_m_5_30855": 140,
      "m_m_5_89298": 39.52,
      "m_m_5_30679": 14.75,
      "m_m_5_30847": 8.85,
      "m_m_5_30846": 1.55,
      "yinsi_duan": 159.24,
      "m_m_5_30848": 18.5,
      "m_m_5_30850": 126,
      "m_m_5_30845": 197.17,
      "m_m_5_30844": 0.71,
      "m_m_5_30873": 12.83,
      "m_m_5_90205": 150.89,
      "m_m_8_36148": 1499.99,
      "m_m_5_30827": 0.8,
      "m_m_5_89970": 209.78,
      "lucai": 23.4,
      "m_m_5_30849": 4.7,
      "m_m_5_71293": 31.63,
      "m_m_5_30826": 3,
      "m_m_5_30825": 0.01,
      "m_m_5_89171": 50,
      "m_m_5_71292": 39,
      "m_m_5_30824": 0.38,
      "m_m_5_71281": 12.9,
      "m_m_5_30823": 0.45,
      "m_m_5_89315": 1888.88,
      "m_m_5_89969": 162.8,
      "m_m_5_89971": 190.14,
      "lushui": 9.5,
      "m_m_5_30875": 2.1,
      "m_m_5_30843": 0.85,
      "m_m_5_30874": 41,
      "m_m_5_30842": 0.81,
      "m_m_5_5270": 3.5,
      "m_m_5_5269": 0.4,
      "m_m_5_31013": 197,
      "gancao": 1.29,
      "m_m_5_31012": 450,
      "m_m_5_89304": 3986.42,
      "m_m_5_89352": 744.6,
      "m_m_5_89350": 666,
      "m_m_5_71269": 158.99,
      "m_m_5_89346": 879.53,
      "m_m_5_89348": 382,
      "m_m_5_71285": 150,
      "m_m_5_30836": 0.97,
      "m_m_5_30832": 0.96,
      "m_m_5_30833": 1.45,
      "m_m_5_89324": 150,
      "m_m_5_30831": 0.8,
      "m_m_5_89973": 200.14,
      "m_m_5_71240": 100.06,
      "m_m_5_71266": 28.83,
      "m_m_5_30838": 0.99,
      "shanhu": 2.44,
      "m_m_5_30835": 1.59,
      "m_m_5_89974": 116,
      "m_m_5_71267": 40.91,
      "yaoyin": 234,
      "shaoyao": 1.67,
      "m_m_5_31102": 0.8,
      "m_m_5_30834": 2.66,
      "m_m_5_89340": 169.94,
      "m_m_5_89325": 999.76,
      "m_m_5_71258": 80.1,
      "m_m_5_89327": 149,
      "m_m_5_89966": 113.33,
      "m_m_5_89968": 123,
      "m_m_5_89376": 690,
      "m_m_5_89965": 124.97,
      "m_m_5_89963": 108.33,
      "m_m_5_89962": 155,
      "m_m_5_31139": 3999.97,
      "m_m_5_89964": 122.8,
      "m_m_5_10027": 99,
      "m_m_5_89961": 130.97,
      "tiekuang": 3.75,
      "m_m_5_30676": 2,
      "m_m_5_30678": 2.26,
      "m_m_5_30674": 2.96,
      "m_m_5_30675": 3.47,
      "m_m_5_89967": 144,
      "m_m_5_6246": 0.65,
      "m_m_5_30841": 3,
      "m_m_8_636": 39,
      "muban": 47.96,
      "muliao": 4.99,
      "qiwuling": 21.5,
      "m_m_5_35716": 15.99,
      "m_m_5_35715": 17.01,
      "zhuzi": 1.76,
      "m_m_5_35567": 1.49,
      "m_m_5_35714": 22.55,
      "m_m_5_35713": 27.3,
      "m_m_5_35717": 2.65,
      "m_m_5_52337": 3170.59,
      "m_m_5_35772": 1985.89,
      "m_m_5_87917": 352.44,
      "zasui": 0.3,
      "g_5_30681": 1.35,
      "g_5_30680": 1.2
    },
    "s_aoxue": {
      "fengwangjiang": 677.19,
      "m_m_5_30852": 50.83,
      "m_m_5_30853": 55,
      "m_m_5_30828": 18,
      "guajian_bei": 100,
      "guajian_yao": 100,
      "shuran_bag": 24.76,
      "m_m_5_30856": 99,
      "m_m_5_30855": 180,
      "geyin_zhang": 300,
      "m_m_5_89298": 240,
      "m_m_5_30679": 15.68,
      "m_m_5_30847": 7,
      "m_m_5_30848": 109,
      "m_m_5_30850": 143,
      "m_m_5_30845": 250.2,
      "m_m_5_30844": 1.5,
      "m_m_8_36148": 3999.99,
      "m_m_5_30827": 0.44,
      "lucai": 99.99,
      "m_m_5_31973": 1,
      "m_m_5_71293": 16.99,
      "m_m_5_30826": 2.2,
      "m_m_5_30825": 0.1,
      "m_m_5_71292": 15.99,
      "m_m_5_30824": 1.43,
      "m_m_5_71281": 9,
      "m_m_5_30823": 2.57,
      "lushui": 7.98,
      "m_m_5_30843": 2.37,
      "m_m_5_30874": 100,
      "m_m_5_30842": 1.7,
      "m_m_5_31013": 71.55,
      "gancao": 0.86,
      "m_m_5_31012": 459.99,
      "m_m_5_71269": 310,
      "m_m_5_71285": 100,
      "m_m_5_30836": 3.94,
      "m_m_5_30832": 0.79,
      "m_m_5_30833": 0.88,
      "m_m_5_30831": 0.87,
      "m_m_5_71241": 10,
      "m_m_5_71240": 40.78,
      "m_m_5_71266": 30,
      "m_m_5_30838": 1.04,
      "shanhu": 0.86,
      "m_m_5_30835": 0.77,
      "m_m_5_71267": 13,
      "shaoyao": 0.89,
      "m_m_5_30834": 1.08,
      "m_m_5_71258": 200,
      "m_m_5_71188": 20,
      "m_m_5_31139": 4400.06,
      "m_m_5_10027": 99.98,
      "tiekuang": 0.7,
      "m_m_5_30676": 5.35,
      "m_m_5_30678": 0.5,
      "m_m_5_30674": 0.86,
      "m_m_5_30675": 0.86,
      "m_m_5_6246": 0.39,
      "muban": 59,
      "muliao": 1.41,
      "qiwuling": 5.26,
      "m_m_5_35716": 17,
      "m_m_5_35715": 20.3,
      "zhuzi": 1.48,
      "m_m_5_35567": 0.95,
      "m_m_5_35714": 25.98,
      "m_m_5_35713": 39.7,
      "m_m_10_1880": 2170,
      "m_m_5_35717": 2.33,
      "m_m_5_52337": 2400,
      "m_m_5_35772": 2500,
      "m_m_5_87917": 1199,
      "zasui": 2.23,
      "g_5_30681": 6.66,
      "g_5_30680": 1.89
    }
  }
};
