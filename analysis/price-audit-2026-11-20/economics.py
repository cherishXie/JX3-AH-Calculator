import math
from lib import *

TAX = 0.05

def item_price(sid, t, iid, strict):
    p = PANEL[t][sid]
    if iid in p and p[iid] > 0:
        return p[iid], 'quote'
    if strict:
        return None, 'no_quote'
    cp = CATALOG_PANEL[t].get(iid)
    if cp is not None and cp > 0:
        return cp, 'catalog'
    base = (ITEMS.get(iid) or {}).get('base') or 0
    return (float(base) if base > 0 else None), ('base' if base > 0 else 'missing')

def calc(recipe, sid, t, strict=True, sell_missing_as_zero=False):
    """Cost/revenue for one craft at one server/time.
    strict=True: every material and every sold output must have a real server quote.
    """
    materials = []
    cost = 0.0
    missing_mats = []
    for m in recipe.get('materials') or []:
        iid, qty = m['item'], float(m['qty'])
        price, src = item_price(sid, t, iid, strict)
        if price is None:
            missing_mats.append(iid)
            materials.append(dict(item=iid, qty=qty, price=None, src=src, sub=None))
            continue
        sub = price * qty
        cost += sub
        materials.append(dict(item=iid, qty=qty, price=price, src=src, sub=sub))
    fee = float(recipe.get('fee') or 0)
    cost += fee

    outputs = []
    gross = 0.0
    missing_outs = []
    for o in recipe.get('outputs') or []:
        iid = o['item']; qty = float(o['qty']); chance = float(o.get('chance', 1) or 1)
        price, src = item_price(sid, t, iid, strict)
        if price is None:
            if recipe.get('kind') == 'gather':
                # gather byproducts: bonus only, not a feasibility blocker
                outputs.append(dict(item=iid, qty=qty, chance=chance, price=None, src=src, sub=0.0))
                continue
            missing_outs.append(iid)
            outputs.append(dict(item=iid, qty=qty, chance=chance, price=None, src=src, sub=None))
            continue
        sub = price * qty * chance
        gross += sub
        outputs.append(dict(item=iid, qty=qty, chance=chance, price=price, src=src, sub=sub))

    missing = bool(missing_mats or missing_outs)
    tax = gross * TAX
    revenue = gross - tax
    profit = revenue - cost
    energy = float(recipe.get('energy') or 0)
    return dict(
        recipe=recipe['id'], name=recipe['name'], skill=recipe['skillId'], kind=recipe.get('kind'),
        level=recipe.get('level'), tier=recipe.get('tier'), energy=energy,
        cost=cost, gross=gross, tax=tax, revenue=revenue, profit=profit,
        per_energy=(profit / energy if energy > 0 else None),
        roi=(profit / cost if cost > 0 else None),
        margin=(profit / revenue if revenue > 0 else None),
        missing=missing, missing_mats=missing_mats, missing_outs=missing_outs,
        materials=materials, outputs=outputs,
    )

def all_calcs(sid, t, strict=True):
    return {r['id']: calc(r, sid, t, strict) for r in RECIPES}

if __name__ == '__main__':
    sid = 's_mengjiangnan'
    for t in [0, len(PANEL)-1]:
        rows = all_calcs(sid, t, strict=True)
        ok = [c for c in rows.values() if c['kind']=='craft' and not c['missing']]
        print('time', t, DAY['base']['at'] if t==0 else DAY['samples'][t-1]['at'], 'strict craft feasible', len(ok), '/', len(CRAFT_RECIPES))
        top = sorted(ok, key=lambda c: -(c['per_energy'] or -1e9))[:10]
        for c in top:
            print(f"  {c['name']:<24} {c['skill']:<8} E={c['energy']:>4.0f} profit={c['profit']:>10.0f} /E={c['per_energy']:>8.1f} roi={c['roi']*100 if c['roi'] is not None else 0:>7.1f}%")
        bad = [c for c in rows.values() if c['kind']=='craft' and c['missing']]
        print('  infeasible', len(bad), 'top missing outputs:', [ITEMS[x]['name'] for c in bad for x in c['missing_outs']][:8])
