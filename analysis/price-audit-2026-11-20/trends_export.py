import csv, json, math, statistics as st
from lib import ITEMS, CRAFT_RECIPES, SERVER_IDS, CLASS, SKILLS
from history import HSNAP, HPANEL
from vendor import calc_v
from build_tables import recipe_row

SID='s_mengjiangnan'; N=len(HSNAP)

def class_index(cls):
    ids=[i for i in ITEMS if CLASS[i]==cls and all(i in HPANEL[t][SID] and HPANEL[t][SID][i]>0 for t in range(N))]
    out=[]
    for t in range(N):
        logs=[math.log(HPANEL[t][SID][i]/HPANEL[0][SID][i]) for i in ids]
        out.append(math.exp(sum(logs)/len(logs))*100)
    return ids,out

def skill_trend(sk):
    rs=[r for r in CRAFT_RECIPES if r['skillId']==sk]
    basket=[]
    for r in rs:
        cs=[calc_v(r,SID,t) for t in range(N)]
        if all(not c['missing'] and c['per_energy'] is not None for c in cs):
            basket.append(cs)
    med=[st.median([cs[t]['per_energy'] for cs in basket]) for t in range(N)] if basket else [None]*N
    cnt=[sum(1 for r in rs if not calc_v(r,SID,t)['missing']) for t in range(N)]
    return len(basket),med,cnt

def main():
    idx={}
    for cl in ['一线材料','中间材料','成品']:
        ids,vals=class_index(cl); idx[cl]=vals
        print(cl,len(ids),'index first/last',round(vals[0],1),round(vals[-1],1))
    skdata={}
    for sk in ['duanzao','fengren','zhiyao','pengren','zijiang']:
        b,med,cnt=skill_trend(sk); skdata[sk]=dict(basket=b,perE=med,count=cnt)
        print(sk,'basket',b,'med first/last',round(med[0],1),round(med[-1],1))
    with open('out/trends.csv','w',newline='',encoding='utf-8-sig') as f:
        w=csv.writer(f)
        head=['at','src']+[f'idx_{c}' for c in idx]+[f'{sk}_perE' for sk in skdata]+[f'{sk}_feasible' for sk in skdata]
        w.writerow(head)
        for t in range(N):
            row=[HSNAP[t]['at'],HSNAP[t]['source']]+[round(idx[c][t],3) for c in idx]+[round(skdata[sk]['perE'][t],3) if skdata[sk]['perE'][t] is not None else '' for sk in skdata]+[skdata[sk]['count'][t] for sk in skdata]
            w.writerow(row)
    json.dump(dict(index={k:v for k,v in idx.items()},skills=skdata,times=[s['at'] for s in HSNAP]),open('out/trends.json','w'),ensure_ascii=False,indent=1)
    # summary daily
    print('\nkey dates:')
    for i in [0,2,3,13,15,29]:
        print(HSNAP[i]['at'][:16], {k:round(v[i],1) for k,v in idx.items()})

if __name__=='__main__':
    main()
