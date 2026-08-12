# Shirt Shop — Shopify theme

A minimal Online Store 2.0 Shopify theme for a shirt store, plus a starter
product catalog you can import.

## What's here

- `layout/`, `sections/`, `snippets/`, `templates/`, `config/`, `locales/`,
  `assets/` — a working Shopify theme (header/footer, homepage hero +
  featured collection, product page, collection grid, cart, generic page).
- `store-data/products.csv` — 6 shirt products (40 variants across sizes
  and colors) in Shopify's bulk product import format.

## Getting it into your Shopify store

**1. Upload the theme**
- In Shopify admin: **Online Store → Themes → Add theme → Upload zip file**.
- Zip the contents of this repo's theme folders (`layout/`, `sections/`,
  `snippets/`, `templates/`, `config/`, `locales/`, `assets/`) — not the
  `store-data/` folder or this README — and upload that zip.
- Or connect this GitHub repo directly under **Themes → Add theme →
  Connect from GitHub**, if you'd rather it stay in sync automatically.

**2. Import the products**
- In Shopify admin: **Products → Import**, upload `store-data/products.csv`.
- Products import as drafts by default in some flows — check each one is
  set to **Active** before you expect it to appear on the storefront.
- Products have no images yet (the CSV leaves `Image Src` blank) — add
  photos per product after import.

**3. Create the "Shirts" collection**
- The homepage's featured section and the collection page both expect a
  collection with the handle `shirts`. Create one in **Products →
  Collections** (manual or automatic, matching product type "Shirts") so
  the homepage has something to show.

**4. Preview**
- Once the theme is uploaded and products imported, use **Customize** in
  Shopify admin to preview, or publish it live.

## Notes

- This theme was written from scratch (not derived from Dawn or any other
  paid/licensed theme) so there are no licensing concerns.
- I can't authenticate to your live Shopify store from here — the steps
  above are things you'll do in the Shopify admin UI yourself, from your
  phone or a computer.
