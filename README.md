# Shirt Shop — Shopify theme (Printful print-on-demand)

A minimal Online Store 2.0 Shopify theme for a shirt store fulfilled via
Printful print-on-demand, plus a product planning sheet.

## What's here

- `layout/`, `sections/`, `snippets/`, `templates/`, `config/`, `locales/`,
  `assets/` — a working Shopify theme (header/footer, homepage hero +
  featured collection, product page with a "made to order" note, collection
  grid, cart, generic page).
- `store-data/product-plan.csv` — a planning sheet for 6 shirt designs
  (blank garment, colors, sizes, approximate cost/price/margin). **This is
  a checklist, not a Shopify import file** — see below for why.

## Why there's no product CSV to import

With Printful, products don't get created in Shopify first — Printful
creates and syncs them *for* you, and that link is what routes orders to
fulfillment. Importing a CSV of your own into Shopify's product catalog
would produce listings with no fulfillment behind them; a customer could
order a shirt that would never get printed or shipped.

## Setup, start to finish (all doable from your phone in the Shopify app or mobile browser)

**1. Upload the theme**
- Shopify admin → **Online Store → Themes → Add theme → Upload zip file**
  (zip `layout/`, `sections/`, `snippets/`, `templates/`, `config/`,
  `locales/`, `assets/` — not `store-data/` or this README). Or connect
  this GitHub repo directly under **Themes → Add theme → Connect from
  GitHub**.

**2. Install Printful and connect your store**
- Shopify admin → **Apps → Shopify App Store**, search **Printful**, install it.
- Sign in or create a Printful account and link it to this Shopify store
  when prompted.

**3. Create each product in Printful**
- In the Printful dashboard: **Store → Add product**.
- Pick a blank garment from Printful's catalog (see `product-plan.csv` for
  suggested blanks — Bella+Canvas 3001, Bella+Canvas 3501, Comfort Colors
  1717, an All-Over-Print tee, Bella+Canvas 3005), then choose colors and
  sizes.
- Upload your artwork/design file and place it using Printful's mockup
  editor. **I can't generate or upload artwork for you** — you'll need
  print-ready design files (PNG/SVG, ideally 150+ DPI at print size) of
  your own or from a designer.
- Set your retail price per variant in Printful — this is the price that
  syncs to Shopify, not anything set in Shopify directly.
- Click **Sync to store**. Printful creates the product in your Shopify
  catalog automatically, mockup images included.

**4. Create the "Shirts" collection**
- The homepage's featured section and collection page expect a collection
  with the handle `shirts`. In Shopify admin → **Products → Collections**,
  create one (manual, or automatic matching product type/tag) and add your
  synced Printful products to it.

**5. Preview and publish**
- Use **Customize** in Shopify admin to preview the theme, then publish.

## Ongoing

- When a customer orders, Printful is charged automatically and prints/
  ships the item — no inventory to manage on your end.
- Your margin per unit is retail price minus Printful's base cost (see
  `product-plan.csv` for rough numbers) minus Shopify's transaction fees.
  Printful's live pricing can differ from the sheet — check current costs
  in the Printful dashboard before finalizing retail prices.

## Notes

- This theme was written from scratch (not derived from Dawn or any other
  paid/licensed theme), so there are no licensing concerns.
- I can't authenticate to your live Shopify or Printful accounts from
  here — the steps above are things you'll do yourself in each app's UI,
  from your phone or a computer.
