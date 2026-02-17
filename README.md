# Adams Hallie Ventures — Website

The official landing page for **Adams Hallie Ventures LLC**, a family-led holding company dedicated to acquiring and scaling community-centric experiences. Based in Spicewood, Texas.

Live at [adamshallieventures.com](https://adamshallieventures.com)

## Tech Stack

- **Framework** — [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- **Styling** — [Tailwind CSS v4](https://tailwindcss.com) (CSS-based config)
- **Typography** — [Geist](https://vercel.com/font) variable sans-serif via `next/font`
- **Language** — TypeScript

## Project Structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout — fonts, metadata, Open Graph
│   └── page.tsx              # Single-page landing (composes all sections)
├── components/
│   ├── Header.tsx            # Fixed nav — Holding | Portfolio | About | Contact
│   ├── Hero.tsx              # "Investing in the future of play."
│   ├── PortfolioCard.tsx     # Pikopye's Town feature + stats bento grid
│   ├── About.tsx             # Mission + values cards
│   └── Footer.tsx            # Links, legal (LLC / DBA)
└── styles/
    └── globals.css           # Tailwind directives + warm-paper palette
```

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Design

| Token | Value | Purpose |
|-------|-------|---------|
| Background | `#F9F7F2` | Warm unbleached paper |
| Foreground | `#1A1A1A` | Deep charcoal text |
| Accent | `#3730A3` | Indigo — "Deep Play" nod |
| Card | `#FFFFFF` | Bento card surfaces |
| Border | `#E8E5DE` | Subtle warm borders |

The layout follows a **Bento grid** pattern — easy to expand as new ventures are added. Each portfolio venture gets a feature card plus supporting stat tiles.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Deployment

Deploy with [Vercel](https://vercel.com) for zero-config Next.js hosting, or any platform that supports Node.js.

```bash
npm run build
npm run start
```

## License

Private — Adams Hallie Ventures LLC. All rights reserved.
