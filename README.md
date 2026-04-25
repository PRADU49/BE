# Bhakti Enterprises Website

React + Vite static website for Bhakti Enterprises (Solapur), styled with an old-money blue premium theme and animated UI effects.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```text
public/
  brand-crest.svg
  favicon.svg
  film-noise.svg
  fine-grid.svg
  robots.txt
  site.webmanifest
src/
  components/
    common/
    effects/
    layout/
    sections/
  data/
  hooks/
  pages/
  styles/
  utils/
```

## Static Multi-Page Routing

- Routing uses `HashRouter` so no backend route handling is required.
- Pages included:
  - Home
  - About
  - Services
  - Products
  - Contact
  - FAQ

## Effects Included

- Scroll progress indicator
- Pointer-follow glow
- Ticker marquee
- Staggered reveal animations
- Floating aurora background layers
- Interactive panel hover transitions
