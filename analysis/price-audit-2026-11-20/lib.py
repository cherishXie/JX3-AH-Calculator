import json, os, math
from collections import defaultdict

ROOT = os.path.dirname(os.path.abspath(__file__))
CAT = json.load(open(os.path.join(ROOT, 'raw', 'catalog.json')))
DAY = json.load(open(os.path.join(ROOT, 'raw', 'day-2026-11-20.json')))
ITEMS = {i['id']: i for i in CAT['items']}
RECIPES = CAT['recipes']
SERVERS = CAT['servers']
SERVER_IDS = [s['id'] for s in SERVERS]
SKILLS = {s['id']: s for s in CAT['skills']}

GATHER_RECIPES = [r for r in RECIPES if r.get('kind') == 'gather']
CRAFT_RECIPES = [r for r in RECIPES if r.get('kind') != 'gather']

GATHER_OUT = set()
for r in GATHER_RECIPES:
    for o in r.get('outputs', []):
        GATHER_OUT.add(o['item'])
CRAFT_OUT = set()
for r in CRAFT_RECIPES:
    for o in r.get('outputs', []):
        CRAFT_OUT.add(o['item'])
USED_AS_MATERIAL = set()
for r in RECIPES:
    for m in r.get('materials', []):
        USED_AS_MATERIAL.add(m['item'])

RAW = (GATHER_OUT | {i for i, it in ITEMS.items() if it['kind'] == 'material'}) - CRAFT_OUT
INTERMEDIATE = CRAFT_OUT & USED_AS_MATERIAL
FINAL = CRAFT_OUT - USED_AS_MATERIAL
GATHER_DIRECT = GATHER_OUT - USED_AS_MATERIAL

# sanity: every item exactly one class, except overlaps handled
CLASS = {}
for i in ITEMS:
    if i in INTERMEDIATE:
        CLASS[i] = '中间材料'
    elif i in RAW:
        CLASS[i] = '一线材料'
    elif i in FINAL:
        CLASS[i] = '成品'
    else:
        CLASS[i] = '其他'

def times():
    out = [(0, DAY['base']['at'])]
    for k, s in enumerate(DAY['samples'], 1):
        out.append((k, s['at']))
    return out

def build_panel():
    """Return {serverId: {itemId: price}} at each of 13 steps, plus quote sets."""
    panel = []
    quotes = []
    prices = {sid: dict(DAY['base'].get('prices', {}).get(sid, {})) for sid in SERVER_IDS}
    q = {sid: set(prices[sid]) for sid in SERVER_IDS}
    panel.append({sid: dict(prices[sid]) for sid in SERVER_IDS})
    quotes.append({sid: set(q[sid]) for sid in SERVER_IDS})
    for s in DAY['samples']:
        for sid, changes in (s.get('prices') or {}).items():
            for iid, val in changes.items():
                if val is None:
                    prices[sid].pop(iid, None)
                    q[sid].discard(iid)
                else:
                    prices[sid][iid] = float(val)
                    q[sid].add(iid)
        panel.append({sid: dict(prices[sid]) for sid in SERVER_IDS})
        quotes.append({sid: set(q[sid]) for sid in SERVER_IDS})
    return panel, quotes

PANEL, QUOTES = build_panel()

def catalog_price(iid):
    for src in (DAY['base'].get('catalogPrices') or {},):
        if iid in src:
            return float(src[iid])
    it = ITEMS.get(iid) or {}
    return float(it.get('base') or 0)

def server_name(sid):
    for s in SERVERS:
        if s['id'] == sid:
            return s['name']
    return sid

def fmt(x, d=2):
    if x is None or (isinstance(x, float) and not math.isfinite(x)):
        return '—'
    return f'{x:,.{d}f}'

if __name__ == '__main__':
    from collections import Counter
    print('items', len(ITEMS), Counter(CLASS.values()))
    print('gather out', len(GATHER_OUT), 'craft out', len(CRAFT_OUT), 'used', len(USED_AS_MATERIAL))
    print('\n== 一线材料 ==')
    for i in sorted([i for i in ITEMS if CLASS[i]=='一线材料'], key=lambda x: (ITEMS[x]['skillId'], ITEMS[x]['tier'], x)):
        it = ITEMS[i]
        print(f"{it['name']}\t{it['id']}\t{it['source']}\tT{it['tier']}\tbase={it['base']}")
    print('\n== 中间材料 ==')
    for i in sorted([i for i in ITEMS if CLASS[i]=='中间材料'], key=lambda x: (ITEMS[x]['skillId'], x)):
        it = ITEMS[i]
        print(f"{it['name']}\t{it['id']}\t{it['skillId']}\tT{it['tier']}\tbase={it['base']}")
    print('\n== 成品 ==')
    for i in sorted([i for i in ITEMS if CLASS[i]=='成品'], key=lambda x: (ITEMS[x]['skillId'], x)):
        it = ITEMS[i]
        print(f"{it['name']}\t{it['id']}\t{it['skillId']}\tT{it['tier']}\tbase={it['base']}")

# ---- catalog (fallback) panel, matching site seed prices over time ----
def build_catalog_panel():
    panel = []
    cur = {k: float(v) for k, v in (DAY['base'].get('catalogPrices') or {}).items()}
    panel.append(dict(cur))
    for s in DAY['samples']:
        for iid, val in (s.get('catalogPrices') or {}).items():
            if val is None:
                cur.pop(iid, None)
            else:
                cur[iid] = float(val)
        panel.append(dict(cur))
    return panel
CATALOG_PANEL = build_catalog_panel()
