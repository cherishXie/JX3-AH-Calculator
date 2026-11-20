import csv, json, math
from lib import CRAFT_RECIPES, SERVER_IDS, ITEMS
from history import HSNAP
from vendor import calc_v
R=json.load(open('out/tables.json'))['recipes']
D=json.load(open('out/trends.json'))
N=len(HSNAP); T=N-1

def cap(r):
    if r['grade']=='A': return 8 if r['out_cov']>=14 else 6 if r['out_cov']>=10 else 4
    if r['grade']=='B': return 3 if r['out_cov']>=6 else 2
    return 0
def portfolio(pool,budget=3000):
    items=[]
    for r in pool:
        if cap(r)<=0 or not r['perE_cur'] or r['perE_cur']<=0: continue
        stable=math.sqrt(max(r['perE_cur'],0)*max(r['perE_med'] or 0,0))
        items.append((stable,r,cap(r)))
    items.sort(key=lambda x:-x[0])
    rem=budget; prof=0
    for stable,r,c in items:
        n=min(int(rem//r['energy']),c)
        if n<=0: continue
        rem-=n*r['energy']; prof+=n*r['profit_cur']
    return round(prof),budget-rem

def main():
    skn={'duanzao':'锻造','fengren':'缝纫','zhiyao':'制药','pengren':'烹饪','zijiang':'梓匠'}
    with open('out/skill_summary.csv','w',newline='',encoding='utf-8-sig') as f:
        w=csv.writer(f)
        w.writerow(['skill','skillName','recipes','A','B','C','feasible_cur','positive_cur','best_A','best_A_perE','best_A_energy','best_B','best_B_perE','best_B_energy','median_perE_start','median_perE_end','portfolio_A_profit','portfolio_A_energy','portfolio_AB_profit','portfolio_AB_energy'])
        for sk in skn:
            rs=[r for r in R if r['skill']==sk]
            A=[r for r in rs if r['grade']=='A']; B=[r for r in rs if r['grade']=='B']; C=[r for r in rs if r['grade']=='C']
            bestA=max(A,key=lambda r:(r['perE_cur'] or -1e9)) if A else None
            bestB=max(B,key=lambda r:(r['perE_cur'] or -1e9)) if B else None
            med=D['skills'][sk]['perE']
            pa,ua=portfolio(A); pb,ub=portfolio([r for r in rs if r['grade'] in ('A','B')])
            w.writerow([sk,skn[sk],len(rs),len(A),len(B),len(C),sum(1 for r in rs if r['feasible_cur']),sum(1 for r in rs if r['perE_cur'] and r['perE_cur']>0),
                        bestA['name'] if bestA else '',round(bestA['perE_cur'],1) if bestA else '',bestA['energy'] if bestA else '',
                        bestB['name'] if bestB else '',round(bestB['perE_cur'],1) if bestB else '',bestB['energy'] if bestB else '',
                        round(med[5],1),round(med[-1],1),pa,ua,pb,ub])
    # paper traps
    traps=[]
    for r in R:
        if not r['feasible_cur'] and r['paper_perE'] and r['paper_perE']>0:
            note=''
            if r['name']=='归营旌': note='四件半成品均可自产；全链约600精力，自产口径约46.5金/精力'
            traps.append(dict(name=r['name'],skill=r['skill'],paper_perE=r['paper_perE'],paper_profit=r['paper_profit'],
                              blocked_out=';'.join(r['blocked_out']),blocked_mat=';'.join(r['blocked_mat']),note=note))
    traps.sort(key=lambda x:-x['paper_perE'])
    with open('out/paper_traps.csv','w',newline='',encoding='utf-8-sig') as f:
        w=csv.DictWriter(f,fieldnames=list(traps[0].keys())); w.writeheader(); w.writerows(traps)
    # server summary
    import statistics as st
    with open('out/server_summary.csv','w',newline='',encoding='utf-8-sig') as f:
        w=csv.writer(f); w.writerow(['server','name','feasible','positive','median_perE','top1','top1_perE','top2','top2_perE','top3','top3_perE'])
        for sid in SERVER_IDS:
            cs=[calc_v(r,sid,T) for r in CRAFT_RECIPES]
            ok=[c for c in cs if not c['missing'] and c['per_energy'] is not None]
            pos=[c for c in ok if c['per_energy']>0]
            top=sorted(pos,key=lambda c:-c['per_energy'])[:3]
            name=next(s['name'] for s in json.load(open('raw/catalog.json'))['servers'] if s['id']==sid)
            row=[sid,name,len(ok),len(pos),round(st.median([c['per_energy'] for c in ok]),1) if ok else '']
            for c in top+[None,None,None]:
                if c: row += [c['name'],round(c['per_energy'],1)]
            w.writerow(row[:11])
    print('summaries written')
    print(open('out/skill_summary.csv').read())

if __name__=='__main__':
    main()
