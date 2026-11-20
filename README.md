# The House of Waffles – website

Statische site (Astro) voor www.thehouseofwaffles.com, in het Engels, Nederlands en Frans.

## Lokaal werken

```
npm install
npm run dev      # voorbeeld op http://localhost:4321
npm run build    # bouwt de site in dist/
```

## Waar staat wat

- `src/data/site.ts` – alle teksten en vertalingen, adressen, de wafelkaart
- `src/pages/[...path].astro` – de opbouw van alle pagina's
- `src/layouts/Base.astro` – kop, voettekst, SEO-gegevens
- `src/styles.css` – huisstijl (kleuren, lettertypes)
- `src/assets/photos/` – foto's (worden bij het bouwen verkleind)
- `public/brand/` – logo's en wafelicoon
- `public/media/` – video op de startpagina

## Hosting

Cloudflare Pages: build command `npm run build`, output directory `dist`.

Wijzigingen op de `main`-branch gaan automatisch live via Cloudflare Pages (project `houseofwaffles`).
