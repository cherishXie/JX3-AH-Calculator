#!/usr/bin/env python3
"""Build the macro-enabled workbook: Power Query price refresh + VBA button.

Run after build_workbook.py and a LibreOffice recalculation:
    python excel/build_xlsm.py [input.xlsx] [output.xlsm]

Requires pyOpenVBA (pip install pyOpenVBA); it is not needed to use the workbook.
"""
from __future__ import annotations

import json
import re
import sys
import zipfile
from pathlib import Path

import openpyxl
from pyopenvba import ExcelFile, PowerQueryWorkbook
from pyopenvba.apps.excel import ExcelApplication

ROOT = Path(__file__).resolve().parent.parent
SRC = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "excel" / "剑网3技艺收益与突破.xlsx"
DST = Path(sys.argv[2]) if len(sys.argv) > 2 else ROOT / "excel" / "剑网3技艺收益与突破.xlsm"
TMP = ROOT / "build" / "xlsm_steps"
TMP.mkdir(parents=True, exist_ok=True)

PRICES_URL = "https://cherishxie.github.io/JX3-AH-Calculator/prices.json"
HEADERS = list(json.loads((ROOT / "_site" / "prices.json").read_text(encoding="utf-8"))[0].keys())
assert len(HEADERS) == 39, f"unexpected price feed columns: {len(HEADERS)}"

VBA = r'''Option Explicit

Public Sub CheckPriceUpdate()
    RefreshPrices False
End Sub

Public Sub RefreshPrices(silent As Boolean)
    Dim src As Worksheet, dst As Worksheet
    Dim started As Double

    On Error GoTo EH
    Application.ScreenUpdating = False
    Application.StatusBar = "Refreshing prices from GitHub Pages..."
    started = Timer

    ThisWorkbook.RefreshAll

    Set src = ThisWorkbook.Worksheets(24)
    Set dst = ThisWorkbook.Worksheets(8)
    src.Range("A1:AM1368").Copy
    dst.Range("A1").PasteSpecial xlPasteValues
    Application.CutCopyMode = False

    Application.ScreenUpdating = True
    Application.StatusBar = False
    If Not silent Then
        MsgBox "Prices updated." & vbCrLf & "Data time: " & CStr(dst.Range("AM2").Value) & vbCrLf & _
               "Elapsed: " & Format(Timer - started, "0.0") & " s", vbInformation, "JX3 Price Ledger"
    End If
    Exit Sub
EH:
    Application.ScreenUpdating = True
    Application.StatusBar = False
    Application.CutCopyMode = False
    If Not silent Then
        MsgBox "Refresh failed: " & Err.Description & vbCrLf & _
               "Check network access to GitHub Pages, or use the IQY web query.", vbExclamation, "JX3 Price Ledger"
    End If
End Sub
'''

QUERY = f'''let
    源 = Json.Document(Web.Contents("{PRICES_URL}")),
    表 = Table.FromRecords(源)
in
    表'''


def add_remote_sheet(src: Path) -> Path:
    wb = openpyxl.load_workbook(src, data_only=False)
    if "物价远程" in wb.sheetnames:
        ws = wb["物价远程"]
        ws.sheet_state = "hidden"
    else:
        ws = wb.create_sheet("物价远程")
        ws.sheet_state = "hidden"
    out = TMP / "01_base.xlsx"
    wb.save(out)
    return out


def add_query(src: Path) -> Path:
    out = TMP / "02_query.xlsx"
    with PowerQueryWorkbook(src) as book:
        if "物价远程" in book.query_names():
            book.remove_query("物价远程")
        book.add_query("物价远程", QUERY)
        book.load_to_sheet("物价远程", HEADERS, sheet="物价远程", cell="A1")
        q = book.query("物价远程")
        q.refresh.on_open = False
        q.refresh.background = False
        q.refresh.in_refresh_all = True
        q.refresh.keep_data = True
        book.save(out)
    return out


def add_vba(src: Path) -> Path:
    out = TMP / "03_vba.xlsm"
    app = ExcelApplication.open(src)
    app.add_module(VBA, name="PriceRefresh")
    app.save(out)
    return out


def add_open_event(src: Path) -> Path:
    out = TMP / "03b_open.xlsm"
    source = "Option Explicit\r\n\r\nPrivate Sub Workbook_Open()\r\n    On Error Resume Next\r\n    RefreshPrices True\r\nEnd Sub\r\n"
    with ExcelFile(src) as wb:
        wb.set_module("ThisWorkbook", source)
        wb.save(out)
    return out


def _vml(text: str, macro: str) -> str:
    return f'''<xml xmlns:v="urn:schemas-microsoft-com:vml"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel">
 <o:shapelayout v:ext="edit">
  <o:idmap v:ext="edit" data="1"/>
 </o:shapelayout><v:shapetype id="_x0000_t201" coordsize="21600,21600" o:spt="201"
  path="m,l,21600r21600,l21600,xe">
  <v:stroke joinstyle="miter"/>
  <v:path shadowok="f" o:extrusionok="f" strokeok="f" fillok="f" o:connecttype="rect"/>
  <o:lock v:ext="edit" shapetype="t"/>
 </v:shapetype><v:shape id="_x0000_s1025" o:spid="_x0000_s1025" type="#_x0000_t201" style='position:absolute;margin-left:8pt;margin-top:2pt;width:230pt;height:34pt;z-index:1;mso-wrap-style:tight' o:button="t" fillcolor="buttonFace [67]" o:insetmode="auto"><v:fill color2="buttonFace [67]" o:detectmouseclick="t"/><o:lock v:ext="edit" rotation="t"/><v:textbox style='mso-direction-alt:auto' o:singleclick='f'><div style='text-align:center'>{text}</div></v:textbox><x:ClientData ObjectType="Button"><x:Anchor>0, 8, 2, 4, 2, 230, 2, 38</x:Anchor><x:PrintObject>False</x:PrintObject><x:AutoFill>False</x:AutoFill><x:FmlaMacro>[0]!{macro}</x:FmlaMacro><x:TextHAlign>Center</x:TextHAlign><x:TextVAlign>Center</x:TextVAlign></x:ClientData></v:shape></xml>'''


def inject_button(src: Path, sheet_name: str = "总览", macro: str = "CheckPriceUpdate", text: str = "检查物价更新") -> Path:
    out = TMP / "04_button.xlsm"
    with zipfile.ZipFile(src) as zin:
        items = {n: zin.read(n) for n in zin.namelist()}

    wb_xml = items["xl/workbook.xml"].decode("utf-8")
    wb_rels = items["xl/_rels/workbook.xml.rels"].decode("utf-8")
    m = re.search(r'<sheet[^>]*name="' + re.escape(sheet_name) + r'"[^>]*r:id="([^"]+)"', wb_xml)
    if not m:
        raise SystemExit(f"sheet not found: {sheet_name}")
    rid = m.group(1)
    target = None
    for rel in re.findall(r'<Relationship[^>]*/>', wb_rels):
        if f'Id="{rid}"' in rel:
            tm = re.search(r'Target="([^"]+)"', rel)
            if tm:
                target = tm.group(1)
                break
    if not target:
        raise SystemExit(f"sheet rel not found: {rid}")
    sheet_path = target.lstrip("/") if target.startswith("/") else "xl/" + target
    sheet = items[sheet_path].decode("utf-8")
    if 'xmlns:r=' not in sheet.split(">", 1)[0]:
        sheet = sheet.replace("<worksheet ", '<worksheet xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" ', 1)

    rel_path = sheet_path.rsplit("/", 1)[0] + "/_rels/" + sheet_path.rsplit("/", 1)[1] + ".rels"
    if rel_path in items:
        rels = items[rel_path].decode("utf-8")
    else:
        rels = '<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"></Relationships>'

    used = set(re.findall(r'Id="([^"]+)"', rels))
    vml_rid = "rIdVmlButton"
    while vml_rid in used:
        vml_rid += "X"
    vml_index = 1
    vml_name = "vmlDrawing1.vml"
    while f"xl/drawings/{vml_name}" in items:
        vml_index += 1
        vml_name = f"vmlDrawing{vml_index}.vml"

    ctrl_rid = "rIdCtrlProp"
    while ctrl_rid in used or ctrl_rid == vml_rid:
        ctrl_rid += "X"
    rels = rels.replace(
        "</Relationships>",
        f'<Relationship Id="{vml_rid}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing" Target="../drawings/{vml_name}"/>'
        f'<Relationship Id="{ctrl_rid}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/ctrlProp" Target="../ctrlProps/ctrlProp1.xml"/></Relationships>',
    )
    items[rel_path] = rels.encode("utf-8")
    items["xl/ctrlProps/ctrlProp1.xml"] = b'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><formControlPr xmlns="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" objectType="Button" lockText="1" fmlaLink="" fmlaRange=""/>'
    ctrl_ct = '<Override PartName="/xl/ctrlProps/ctrlProp1.xml" ContentType="application/vnd.ms-excel.controlproperties+xml"/>'
    if "ctrlProps/ctrlProp1.xml" not in items["[Content_Types].xml"].decode("utf-8"):
        items["[Content_Types].xml"] = items["[Content_Types].xml"].decode("utf-8").replace("</Types>", ctrl_ct + "</Types>").encode("utf-8")
    if "<legacyDrawing" not in sheet:
        sheet = sheet.replace("</worksheet>", f'<legacyDrawing r:id="{vml_rid}"/></worksheet>')
    items[sheet_path] = sheet.encode("utf-8")
    items[f"xl/drawings/{vml_name}"] = _vml(text, macro).encode("utf-8")

    ct = items["[Content_Types].xml"].decode("utf-8")
    if 'Extension="vml"' not in ct:
        ct = ct.replace("</Types>", '<Default Extension="vml" ContentType="application/vnd.openxmlformats-officedocument.vmlDrawing"/></Types>')
    items["[Content_Types].xml"] = ct.encode("utf-8")

    with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as zout:
        for name, data in items.items():
            zout.writestr(name, data)
    return out


def verify(path: Path) -> None:
    with zipfile.ZipFile(path) as z:
        names = z.namelist()
        assert "xl/vbaProject.bin" in names, "vbaProject missing"
        assert any("queryTable" in n for n in names), "queryTable missing"
        assert any(n.endswith(".vml") for n in names), "VML button missing"
        assert any("ctrlProp" in n for n in names), "ctrlProp missing"
    wb = openpyxl.load_workbook(path, data_only=False, keep_vba=True)
    assert "总览" in wb.sheetnames and "五行石" in wb.sheetnames
    assert len(wb["总览"]._charts) == 2, "overview charts lost"
    assert len(wb["技艺收益"]._charts) == 1 and len(wb["突破路线"]._charts) == 1
    with PowerQueryWorkbook(path) as book:
        assert "物价远程" in book.query_names(), "Power Query lost"
    with ExcelFile(path) as book:
        assert "Workbook_Open" in book.get_module("ThisWorkbook"), "Workbook_Open lost"
    print(f"OK {path} · {len(wb.sheetnames)} sheets · vba + query + button")


def main() -> None:
    base = add_remote_sheet(SRC)
    q = add_query(base)
    v = add_vba(q)
    v = add_open_event(v)
    b = inject_button(v)
    b.replace(DST)
    verify(DST)


if __name__ == "__main__":
    main()
