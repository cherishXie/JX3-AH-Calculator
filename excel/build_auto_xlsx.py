#!/usr/bin/env python3
"""Build a macro-free xlsx whose 「物价」 table is a Power Query refreshed on open.

Trade-off: the workbook no longer carries a static snapshot; the first open must
reach GitHub Pages, and Excel must be allowed to refresh the query.
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

import openpyxl
from pyopenvba import PowerQueryWorkbook

ROOT = Path(__file__).resolve().parent.parent
SRC = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "excel" / "剑网3技艺收益与突破.xlsx"
DST = Path(sys.argv[2]) if len(sys.argv) > 2 else ROOT / "excel" / "剑网3技艺收益与突破-auto.xlsx"
TMP = ROOT / "build" / "auto_steps"
TMP.mkdir(parents=True, exist_ok=True)

HEADERS = list(json.loads((ROOT / "_site" / "prices.json").read_text(encoding="utf-8"))[0].keys())
assert len(HEADERS) == 39, f"unexpected price feed columns: {len(HEADERS)}"
QUERY = '''let
    源 = Json.Document(Web.Contents("https://cherishxie.github.io/JX3-AH-Calculator/prices.json")),
    表 = Table.FromRecords(源)
in
    表'''


def main() -> None:
    wb = openpyxl.load_workbook(SRC, data_only=False)
    del wb["物价"]
    ws = wb.create_sheet("物价", 7)
    ws.sheet_properties.tabColor = "0E7490"
    from openpyxl.utils import get_column_letter
    ws.column_dimensions["A"].width = 16
    ws.column_dimensions["B"].width = 18
    ws.column_dimensions["C"].width = 10
    for i in range(17):
        ws.column_dimensions[get_column_letter(4 + i)].width = 11
        ws.column_dimensions[get_column_letter(21 + i)].width = 11
    ws.column_dimensions[get_column_letter(38)].width = 12
    ws.column_dimensions[get_column_letter(39)].width = 18
    ws.freeze_panes = "D2"
    base = TMP / "base.xlsx"
    wb.save(base)

    with PowerQueryWorkbook(base) as book:
        if "物价自动" in book.query_names():
            book.remove_query("物价自动")
        book.add_query("物价自动", QUERY)
        book.load_to_sheet("物价自动", HEADERS, sheet="物价", cell="A1")
        q = book.query("物价自动")
        q.refresh.on_open = True
        q.refresh.background = False
        q.refresh.in_refresh_all = True
        q.refresh.keep_data = True
        book.save(DST)

    check = openpyxl.load_workbook(DST, data_only=False)
    assert len(check["总览"]._charts) == 2
    assert check["物价"].max_row <= 1370
    with PowerQueryWorkbook(DST) as book:
        assert "物价自动" in book.query_names()
    print(f"OK {DST} · 无宏 · 打开时刷新 · 物价 = Power Query 目标")


if __name__ == "__main__":
    main()
