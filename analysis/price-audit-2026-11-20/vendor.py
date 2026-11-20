import json
from lib import ITEMS, CRAFT_RECIPES, SERVER_IDS, CLASS
from history import HPANEL, HBASES, HSNAP
import economics as _E
from economics import TAX, item_price
_E.PANEL = HPANEL
_E.CATALOG_PANEL = HBASES

src=json.load(open('raw/item-sources.json'))
det=json.load(open('raw/item-details.json'))
def sources_of(name):
    labels=set()
    for r in src.get(name,[]):
        i=r.get('id')
        if i in det and 'sources' in det[i]: labels |= set(det[i]['sources'])
        else: labels |= set(r.get('sources') or [])
    return labels
VENDOR_NAMES={n for n in src if '商店' in sources_of(n)}
# Manually verified via JX3BOX item detail on 2026-11-20 (direct API)
VENDOR_NAMES |= {
    '炼火石','煤炭','石灰','百染线','绢带','棉线','百花线','药罐','药囊','黄蜡',
    '熟矾','素银钥匙模','旦火油','百股线','纺丝','硼砂',
}
VENDOR_IDS={i for i,it in ITEMS.items() if it['name'] in VENDOR_NAMES}

def _base(t,iid):
    v=HBASES[t].get(iid)
    if not v: v=ITEMS[iid].get('base') or 0
    return float(v)

def calc_v(recipe, sid, t, allow_vendor=True):
    materials=[]; cost=0.0; missing_mats=[]
    for m in recipe.get('materials') or []:
        iid=m['item']; qty=float(m['qty'])
        p=HPANEL[t][sid].get(iid)
        if p is not None and p>0:
            src='quote'
        elif allow_vendor and iid in VENDOR_IDS and _base(t,iid)>0:
            p=_base(t,iid); src='vendor'
        else:
            missing_mats.append(iid); materials.append(dict(item=iid,qty=qty,price=None,src='missing',sub=None)); continue
        sub=p*qty; cost+=sub
        materials.append(dict(item=iid,qty=qty,price=p,src=src,sub=sub))
    cost += float(recipe.get('fee') or 0)
    outputs=[]; gross=0.0; missing_outs=[]
    for o in recipe.get('outputs') or []:
        iid=o['item']; qty=float(o['qty']); ch=float(o.get('chance',1) or 1)
        p=HPANEL[t][sid].get(iid)
        if p is None or p<=0:
            if recipe.get('kind')=='gather':
                outputs.append(dict(item=iid,qty=qty,chance=ch,price=None,src='missing',sub=0.0)); continue
            missing_outs.append(iid); outputs.append(dict(item=iid,qty=qty,chance=ch,price=None,src='missing',sub=None)); continue
        sub=p*qty*ch; gross+=sub
        outputs.append(dict(item=iid,qty=qty,chance=ch,price=p,src='quote',sub=sub))
    missing=bool(missing_mats or missing_outs)
    tax=gross*TAX; rev=gross-tax; profit=rev-cost; e=float(recipe.get('energy') or 0)
    return dict(recipe=recipe['id'],name=recipe['name'],skill=recipe['skillId'],kind=recipe.get('kind'),
                level=recipe.get('level'),tier=recipe.get('tier'),energy=e,cost=cost,gross=gross,tax=tax,
                revenue=rev,profit=profit,per_energy=(profit/e if e>0 else None),
                roi=(profit/cost if cost>0 else None),margin=(profit/rev if rev>0 else None),
                missing=missing,missing_mats=missing_mats,missing_outs=missing_outs,
                materials=materials,outputs=outputs)

def all_v(sid,t):
    return {r['id']:calc_v(r,sid,t) for r in CRAFT_RECIPES}

if __name__=='__main__':
    for sk in ['duanzao','fengren','zhiyao','pengren','zijiang']:
        rs=[r for r in CRAFT_RECIPES if r['skillId']==sk]
        for t in [0,len(HSNAP)-1]:
            ok=[calc_v(r,'s_mengjiangnan',t) for r in rs]
            print(sk,HSNAP[t]['at'][:16],'feasible',sum(1 for c in ok if not c['missing']),'/',len(rs))
