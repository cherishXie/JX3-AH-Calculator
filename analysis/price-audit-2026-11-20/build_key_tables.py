import csv, json, statistics as st
from lib import ITEMS, CRAFT_RECIPES, SERVER_IDS, CLASS, GATHER_OUT
from history import HPANEL, HSNAP
from vendor import calc_v, VENDOR_IDS
SID='s_mengjiangnan'; N=len(HSNAP); T=N-1

SOURCE={
 'dimai':'拆解50级精简装备（JX3BOX词条：可拆解获得地脉玄元）',
 'fengwangjiang':'挖宝/方士挖宝/珍稀宝箱',
 'shoupijiao':'庖丁采集几率，专精提高掉率',
 'qicaixian':'缝纫制作',
 'm_m_5_89298':'秘境掉落/交易行',
 'm_m_5_31397':'东海秘境掉落',
 'm_m_5_32787':'秘境掉落（切玉骨）',
 'm_m_5_90338':'试炼之地',
 'm_m_5_45721':'种植产物（铃兰·混彩）',
 'm_m_5_30853':'寻道宝箱/珍稀宝箱',
 'm_m_5_30855':'交易行（本站无独立词条）',
 'm_m_5_30850':'采金几率，专精提高掉率',
 'm_m_5_30845':'神农几率，专精提高掉率',
 'm_m_5_30856':'采集额外掉落/采集精英怪',
 'm_m_5_1829':'未确认（无报价）',
 'm_m_5_89961':'锻造半成品',
 'm_m_5_89962':'锻造半成品',
 'm_m_5_89963':'锻造半成品',
 'm_m_5_89964':'锻造半成品',
 'm_m_5_89965':'锻造半成品',
 'm_m_5_89966':'锻造半成品',
 'm_m_5_89967':'锻造半成品',
 'm_m_5_89968':'锻造半成品',
 'm_m_5_90032':'锻造制作（无报价）',
 'm_m_5_90034':'烹饪制作（无报价）',
 'm_m_5_90035':'医术制作（无报价）',
 'tongpao_fan':'缝纫制作（无报价）',
 'm_m_5_35714':'梓匠制作（无报价）',
}
VENDOR_SOURCE={
 'm_m_5_10176':'主城炭火商','m_m_5_31993':'主城炭火商','m_m_5_32004':'主城针线商',
 'bairanxian':'主城针线商','m_m_5_89165':'主城针线商','m_m_5_32000':'主城针线商',
 'm_m_5_32003':'主城针线商','m_m_5_10173':'主城针线商','m_m_5_32001':'主城针线商',
 'm_m_5_30679':'采金几率/商店','m_m_5_31995':'主城医术材料商','m_m_5_31996':'主城医术材料商',
 'm_m_5_89166':'主城针线商','m_m_5_89170':'主城炭火商','m_m_5_10029':'主城炭火商',
 'm_m_5_10172':'主城炭火商',
}

def key_row(iid):
    it=ITEMS[iid]
    vals=[HPANEL[t][SID].get(iid) for t in range(N)]
    present=[v for v in vals if v is not None]
    used=sum(1 for r in CRAFT_RECIPES for m in r.get('materials') or [] if m['item']==iid)
    blocks=sum(1 for r in CRAFT_RECIPES if iid in calc_v(r,SID,T)['missing_mats'])
    if iid in VENDOR_IDS:
        access='商店常驻'; tag='充足'
    elif iid in GATHER_OUT:
        access='采集'; tag='充足' if len(present)>N*0.8 else '紧张'
    elif iid in {o['item'] for r in CRAFT_RECIPES for o in r['outputs']}:
        access='可自产'; tag='可自产'
    elif not present:
        access='无报价'; tag='硬缺口'
    else:
        access='交易行/稀有'; tag='软约束'
    src=VENDOR_SOURCE.get(iid) or SOURCE.get(iid) or ('主城商店' if iid in VENDOR_IDS else '交易行/采集')
    return dict(id=iid,name=it['name'],cls=CLASS[iid],access=access,tag=tag,source=src,
                quote_pts=len(present),pts=N,servers_last=sum(1 for s in SERVER_IDS if iid in HPANEL[T][s]),
                median=st.median(present) if present else None,last=vals[-1],
                chg=((present[-1]/present[0]-1) if len(present)>=2 and present[0] else None),
                used=used,blocks=blocks)

KEY=['dimai','fengwangjiang','shoupijiao','qicaixian','bairanxian','m_m_5_89298','m_m_5_30679',
     'm_m_5_31397','m_m_5_32787','m_m_5_90338','m_m_5_45721','m_m_5_30853','m_m_5_30855',
     'm_m_5_30850','m_m_5_30845','m_m_5_30856','m_m_5_1829','m_m_5_10176','m_m_5_31993',
     'm_m_5_32004','m_m_5_10173','m_m_5_32001','m_m_5_89961','m_m_5_89962','m_m_5_90032',
     'm_m_5_90034','m_m_5_90035','tongpao_fan','m_m_5_35714']

def main():
    rows=[key_row(i) for i in KEY]
    with open('out/key_materials.csv','w',newline='',encoding='utf-8-sig') as f:
        w=csv.DictWriter(f,fieldnames=list(rows[0].keys())); w.writeheader(); w.writerows(rows)
    for r in rows:
        print(f"{r['name']:<10}{r['access']:<8}{r['tag']:<6}quote={r['quote_pts']:>2}/{N} srv={r['servers_last']:>2} used={r['used']:>2} blocks={r['blocks']:>2} med={r['median']}")

if __name__=='__main__':
    main()
