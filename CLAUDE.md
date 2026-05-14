# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Presentation website for a psychology/counseling practice (Crina-Maria Nemeș-Dressel, clinical psychologist). Built as a React SPA deployed to GitHub Pages.

## Commands

All commands run from `site_prezentare_cabinet_nemes_crina/`:

```bash
npm run dev       # Vite dev server at http://localhost:5173/website-nemes-crina-cabinet/
npm run build     # tsc -b && vite build && cp dist/index.html dist/404.html
npm run preview   # Preview production build locally
npm run lint      # ESLint on all TS/TSX files
```

## Architecture

**Stack:** React 19, TypeScript (strict), Tailwind CSS 4, Vite 8, React Router DOM 7.

**Source layout (`src/`):**
- `main.tsx` — entry point; wraps app in `BrowserRouter` with basename `/website-nemes-crina-cabinet/`
- `App.tsx` — route definitions (`/`, `/blog`, `/evenimente`, `*` → HomePage)
- `pages/` — `HomePage`, `BlogPage`, `EventsPage`
- `components/` — shared UI: `Navbar`, `Hero`, `Section` (wrapper), `AboutSection`, `ServicesSection`, `TehniquesSection`, `ImageCarousel`, `ContactFooter`, `ScrollToTop`, `ScrollToHash`
- `images/` — local image assets imported directly into components

**Routing:** BrowserRouter with hash-based in-page navigation on `HomePage` (`#despre`, `#servicii`, etc.). Navbar dispatches a custom `force-hash-scroll` event to trigger scrolling when already on the home route.

**Styling:** Tailwind utility classes only (no CSS modules). Color palette: stone (text), amber (accent), rose/emerald highlights. Font: DM Sans. Background: custom radial gradient defined in `index.css`.

**Deployment:** GitHub Actions (`.github/workflows/deploy.yml`) — push to `main` triggers `npm ci && npm run build`, deploys `dist/` to GitHub Pages. The `404.html` copy is essential for SPA routing on GitHub Pages.

**Vite base path:** `/website-nemes-crina-cabinet/` — required for all asset URLs to resolve correctly on GitHub Pages.
