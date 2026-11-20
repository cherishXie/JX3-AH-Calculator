import csv, json, statistics as st
from vendor import calc_v, all_v, VENDOR_IDS, VENDOR_NAMES
from economics import calc as calc_paper
from lib import ITEMS, CRAFT_RECIPES, GATHER_RECIPES, SERVER_IDS, CLASS, SKILLS
from history import HSNAP, HPANEL

SID='s_mengjiangnan'; N=len(HSNAP); LAST=N-1

def pct(x):
    return None if x is None else x*100

def item_row(iid):
    it=ITEMS[iid]
    vals=[HPANEL[t][SID].get(iid) for t in range(N)]
    present=[v for v in vals if v is not None]
    med=st.median(present) if present else None
    cv=(st.pstdev(present)/st.mean(present)) if len(present)>1 and st.mean(present) else None
    chg=((present[-1]/present[0]-1) if len(present)>=2 and present[0] else None)
    return dict(
        id=iid,name=it['name'],cls=CLASS[iid],skill=it['skillId'],tier=it['tier'],source=it['source'],
        vendor=iid in VENDOR_IDS, base=it['base'], last=vals[-1], median=med,
        min=min(present) if present else None, max=max(present) if present else None,
        quote_pts=len(present), pts=N, cv=cv, chg=chg,
        servers_last=sum(1 for s in SERVER_IDS if iid in HPANEL[LAST][s]),
    )

def recipe_row(r):
    cs=[calc_v(r,SID,t) for t in range(N)]
    ok=[c for c in cs if not c['missing'] and c['per_energy'] is not None]
    cur=cs[LAST]
    out_cov=min(sum(1 for s in SERVER_IDS if o['item'] in HPANEL[LAST][s]) for o in r['outputs'])
    out_persist=min(sum(1 for t in range(N) if o['item'] in HPANEL[t][SID])/N for o in r['outputs'])
    # only non-vendor mats count for coverage
    hard_mats=[m['item'] for m in r.get('materials') or [] if m['item'] not in VENDOR_IDS]
    mat_cov=min([sum(1 for s in SERVER_IDS if i in HPANEL[LAST][s]) for i in hard_mats] or [99])
    mat_persist=min([sum(1 for t in range(N) if i in HPANEL[t][SID])/N for i in hard_mats] or [1])
    cvs=[]
    for o in r['outputs']:
        vals=[HPANEL[t][SID][o['item']] for t in range(N) if o['item'] in HPANEL[t][SID]]
        if len(vals)>1 and st.mean(vals): cvs.append(st.pstdev(vals)/st.mean(vals))
    out_cv=max(cvs) if cvs else None
    perEs=[c['per_energy'] for c in ok]
    med_perE=st.median(perEs) if perEs else None
    perE_cv=(st.pstdev(perEs)/st.mean(perEs)) if len(perEs)>1 and st.mean(perEs) else None
    feas=len(ok)/N
    paper=calc_paper(r,SID,LAST,False)
    if feas>=0.8 and out_persist>=0.8 and out_cov>=8 and (out_cv is None or out_cv<=0.25) and med_perE and med_perE>0:
        grade='A'
    elif feas>=0.5 and out_cov>=4 and med_perE and med_perE>0:
        grade='B'
    else:
        grade='C'
    missing_out=[ITEMS[x]['name'] for x in cur['missing_outs']]
    missing_mat=[ITEMS[x]['name'] for x in cur['missing_mats']]
    return dict(
        id=r['id'],name=r['name'],skill=r['skillId'],kind=r.get('kind'),tier=r.get('tier'),level=r.get('level'),energy=r['energy'],
        output=' + '.join(f"{ITEMS[o['item']]['name']}x{o['qty']}" for o in r['outputs']),
        out_cov=out_cov,out_persist=out_persist,out_cv=out_cv,mat_cov=mat_cov,mat_persist=mat_persist,
        feasibility=feas,perE_med=med_perE,perE_cur=cur['per_energy'] if not cur['missing'] else None,
        perE_cv=perE_cv,profit_med=st.median([c['profit'] for c in ok]) if ok else None,
        profit_cur=cur['profit'] if not cur['missing'] else None,
        cost_cur=cur['cost'],rev_cur=cur['revenue'],
        roi_cur=cur['roi'] if not cur['missing'] else None,
        paper_perE=paper['per_energy'],paper_profit=paper['profit'],
        grade=grade,blocked_out=missing_out,blocked_mat=missing_mat,
        feasible_cur=not cur['missing'],
    )

def main():
    items=[item_row(i) for i in ITEMS]
    with open('out/items.csv','w',newline='',encoding='utf-8-sig') as f:
        w=csv.DictWriter(f,fieldnames=list(items[0].keys())); w.writeheader(); w.writerows(items)
    recipes=[recipe_row(r) for r in CRAFT_RECIPES]
    with open('out/recipes.csv','w',newline='',encoding='utf-8-sig') as f:
        w=csv.DictWriter(f,fieldnames=list(recipes[0].keys())); w.writeheader(); w.writerows(recipes)
    json.dump(dict(items=items,recipes=recipes),open('out/tables.json','w'),ensure_ascii=False,indent=1)
    from collections import Counter
    print('grades',Counter(r['grade'] for r in recipes))
    print('\nA grade by current perE:')
    for r in sorted([x for x in recipes if x['grade']=='A'],key=lambda x:-(x['perE_cur'] or -1e9)):
        print(f"{r['name'][:20]:<22}{r['skill']:<8}E={r['energy']:>4.0f} cur={r['perE_cur'] if r['perE_cur'] is not None else 0:>7.1f} med={r['perE_med']:>7.1f} cv={r['perE_cv']*100 if r['perE_cv'] is not None else 0:>4.0f}% outCov={r['out_cov']:>2} outP={r['out_persist']*100:>3.0f}%")
    print('\nB grade by current perE:')
    for r in sorted([x for x in recipes if x['grade']=='B'],key=lambda x:-(x['perE_cur'] or -1e9))[:15]:
        print(f"{r['name'][:20]:<22}{r['skill']:<8}E={r['energy']:>4.0f} cur={r['perE_cur'] if r['perE_cur'] is not None else 0:>7.1f} med={r['perE_med']:>7.1f} outCov={r['out_cov']:>2} outP={r['out_persist']*100:>3.0f}%")

if __name__=='__main__':
    main()
