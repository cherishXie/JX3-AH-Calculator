import json
from lib import DAY, CATALOG_PANEL, ITEMS, SERVER_IDS, PANEL

_G = json.load(open('raw/git-snapshots.json'))

# Build JSON-history snapshots (13 points) with bases from catalog panel
_json_snaps = []
for t in range(len(PANEL)):
    at = DAY['base']['at'] if t == 0 else DAY['samples'][t-1]['at']
    _json_snaps.append(dict(
        at=at, source='json',
        prices=PANEL[t],
        bases={i: v for i, v in CATALOG_PANEL[t].items() if v},
    ))

# Build git snapshots
_git_snaps = []
for g in _G:
    _git_snaps.append(dict(
        at=g['at'], source='git',
        prices={sid: {i: float(v) for i, v in pr.items()} for sid, pr in g['serverPrices'].items()},
        bases={i['id']: float(i['base']) for i in g['items'] if i.get('base')},
    ))

_by_at = {}
for s in _git_snaps + _json_snaps:
    # json wins on exact duplicates (same values; json has full catalog)
    if s['at'] not in _by_at or s['source'] == 'json':
        _by_at[s['at']] = s
HSNAP = [ _by_at[k] for k in sorted(_by_at) ]
HPANEL = [s['prices'] for s in HSNAP]
HBASES = [s['bases'] for s in HSNAP]
HQUOTES = [{sid: set(s['prices'].get(sid, {})) for sid in SERVER_IDS} for s in HSNAP]

def htime(i):
    return HSNAP[i]['at']

if __name__ == '__main__':
    print('snapshots', len(HSNAP))
    for i, s in enumerate(HSNAP):
        print(i, s['at'], s['source'], len(s['prices'].get('s_mengjiangnan', {})))
