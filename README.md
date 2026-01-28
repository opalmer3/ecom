# Shopify Storefront Boilerplate

A modern e-commerce boilerplate built with Next.js 15, TypeScript, and Tailwind CSS 4. Easily connect to any Shopify store and customize the branding for your needs.

## Quick Start

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Configure Environment

Copy `.env.example` to `.env` and fill in your Shopify credentials:

```bash
cp .env.example .env
```

Required variables:
- `NEXT_PUBLIC_SITE_URL` - Your production URL
- `NEXT_PUBLIC_SHOP_DOMAIN` - Your Shopify store domain (e.g., `your-store.myshopify.com`)
- `STOREFRONT_PRIVATE_API_KEY` - Shopify Storefront API private access token

### 3. Customize Branding

Edit `lib/site.config.ts` to update:
- Store name and tagline
- Logo path
- SEO metadata
- Homepage hero content
- Brand highlights
- Featured collection

### 4. Customize Theme Colors

Edit `styles/globals.css` CSS variables in the `:root` section:

```css
:root {
  --primary: 179 100% 11.76%;      /* Primary color (HSL) */
  --secondary: 43.17 92.05% 70.39%; /* Secondary/accent */
  --background: 0 0 100%;           /* Page background */
  /* ... other color tokens */
}
```

### 5. Run Development Server

```bash
pnpm dev
```

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **E-commerce**: [Shopify Storefront API](https://shopify.dev/docs/api/storefront)
- **State**: [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching**: [SWR](https://swr.vercel.app/)
- **Content**: MDX for blog/journal

## Project Structure

```
├── app/                  # Next.js pages and layouts
├── components/
│   ├── sections/         # Reusable page sections (NEW)
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Header, Footer, Navbar
│   ├── product/          # Product cards, detail views
│   └── ...
├── lib/
│   ├── site.config.ts    # ⭐ Store branding config
│   ├── shopify/          # Shopify API client
│   └── services/         # Data fetching services
├── styles/
│   └── globals.css       # Theme colors (CSS variables)
└── public/
    └── logo.png          # Replace with your logo
```

## Available Section Components

Import from `@/components/sections`:

| Component | Description |
|-----------|-------------|
| `FeatureGrid` | Feature cards with icons (2-4 columns) |
| `StatsSection` | Key metrics/numbers display |
| `Testimonials` | Customer quotes (carousel or grid) |
| `CtaBanner` | Full-width call-to-action |
| `FaqAccordion` | Expandable FAQ section |
| `IconGrid` | Trust badges, shipping info |
| `NewsletterSection` | Email signup form |
| `ImageGallery` | Lifestyle photo grid |

Example usage:
```tsx
import { FeatureGrid, CtaBanner } from "@/components/sections";
```

## Adding UI Components

```bash
pnpm dlx shadcn@latest add <component-name>
```

## GraphQL Codegen

After modifying GraphQL queries:
```bash
pnpm run codegen
```

## Deployment

Deploy on [Vercel](https://vercel.com):
```bash
vercel --prod
```

## License

MIT
