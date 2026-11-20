import statistics as st
from economics import *

def stats_for(sid, strict=True):
    out = {}
    for r in CRAFT_RECIPES:
        rows = [calc(r, sid, t, strict) for t in range(len(PANEL))]
        feas = [c for c in rows if not c['missing'] and c['per_energy'] is not None]
        out[r['id']] = dict(
            recipe=r, rows=rows,
            feasibility=len(feas)/len(rows),
            perE=st.median([c['per_energy'] for c in feas]) if feas else None,
            profit=st.median([c['profit'] for c in feas]) if feas else None,
            roi=st.median([c['roi'] for c in feas if c['roi'] is not None]) if feas else None,
            best_perE=max((c['per_energy'] for c in feas), default=None),
            worst_perE=min((c['per_energy'] for c in feas), default=None),
        )
    return out

if __name__ == '__main__':
    sid='s_mengjiangnan'
    S=stats_for(sid,True)
    # attach coverage
    for rid,d in S.items():
        r=d['recipe']
        ocs=[]; mcs=[]
        for o in r['outputs']:
            ocs.append(sum(1 for s in SERVER_IDS if o['item'] in PANEL[-1][s]))
        for m in r.get('materials') or []:
            mcs.append(sum(1 for s in SERVER_IDS if m['item'] in PANEL[-1][s]))
        d['out_cov']=min(ocs) if ocs else 0
        d['mat_cov']=min(mcs) if mcs else 99
    rows=[d for d in S.values() if d['feasibility']==1 and d['perE'] is not None]
    print('fully feasible all 13 pts:',len(rows))
    print(f"{'recipe':<22}{'skill':<8}{'E':>4}{'medProfit':>11}{'medPerE':>9}{'outCov':>7}{'minMatCov':>10}{'roi%':>8}")
    for d in sorted(rows,key=lambda x:-x['perE'])[:35]:
        r=d['recipe']
        print(f"{r['name'][:20]:<22}{r['skillId']:<8}{r['energy']:>4.0f}{d['profit']:>11.0f}{d['perE']:>9.1f}{d['out_cov']:>7}{d['mat_cov']:>10}{(d['roi'] or 0)*100:>8.1f}")
    print('\n--- grouped by skill (fully feasible, positive median perE) ---')
    from collections import defaultdict
    g=defaultdict(list)
    for d in rows:
        if d['perE']>0: g[d['recipe']['skillId']].append(d)
    for sk,ds in g.items():
        print(f"{sk:<10} n={len(ds):<3} median perE={st.median([d['perE'] for d in ds]):.1f}  best={max(ds,key=lambda d:d['perE'])['recipe']['name']}")
