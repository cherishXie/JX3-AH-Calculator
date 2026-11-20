"""Economics over the unified 3-day panel (30 snapshots)."""
import economics as E
from history import HSNAP, HPANEL, HBASES, HQUOTES

E.PANEL = HPANEL
E.CATALOG_PANEL = HBASES
PANEL = HPANEL
CATALOG_PANEL = HBASES
from economics import calc, item_price, TAX
from lib import CRAFT_RECIPES, GATHER_RECIPES, ITEMS, SERVER_IDS, CLASS

def all_calcs(sid, t, strict=True):
    return {r['id']: calc(r, sid, t, strict) for r in CRAFT_RECIPES}
