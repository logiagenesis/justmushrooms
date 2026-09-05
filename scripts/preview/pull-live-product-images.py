#!/usr/bin/env python3
"""Download the 23 live justmushrooms.co.za product photographs into data/live-product-images/."""
from pathlib import Path
import csv
import urllib.request

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / "data" / "live-product-images" / "SOURCES.csv"
OUT = ROOT / "data" / "live-product-images"
PREVIEW = ROOT / "preview" / "assets" / "img"

def main():
    OUT.mkdir(parents=True, exist_ok=True)
    PREVIEW.mkdir(parents=True, exist_ok=True)
    with SRC.open(newline="", encoding="utf-8") as f:
        rows = list(csv.DictReader(f))
    ok = 0
    for row in rows:
        dest = OUT / f"{row['handle']}.jpg"
        url = row["cdn_src"]
        print("GET", row["handle"])
        urllib.request.urlretrieve(url, dest)
        preview = PREVIEW / f"product-{row['handle']}.jpg"
        preview.write_bytes(dest.read_bytes())
        ok += 1
        print(" ", dest.stat().st_size, "bytes")
    print(f"done {ok}/{len(rows)}")

if __name__ == "__main__":
    main()
