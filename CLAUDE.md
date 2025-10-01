# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for "El Retoño", a gardening services business operating in Tampico, Madero, and Altamira, Mexico. The site is built with TypeScript, React 19, and Tailwind CSS v4, featuring service pages, contact forms, and SEO optimizations.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm start build

# Start production server
npm start

# Run linter
npm run lint

# Generate sitemap (runs automatically after build)
npm run postbuild
```

## Architecture & Structure

### App Router Layout
The project uses Next.js 15 App Router with all source files in `src/`:

- `src/app/` - Pages and routes (layout.tsx, page.tsx, servicios/, contacto/)
- `src/components/` - Reusable React components
- `src/assets/` - SVG icon components
- `src/utils/` - Utility functions (e.g., cn.ts for class merging)
- `public/` - Static assets (images, SVG files, sitemap)

### Path Aliases
TypeScript path alias `@/*` maps to `./src/*` for cleaner imports.

### Layout Architecture
The root layout (`src/app/layout.tsx`) contains:
- Global navigation (desktop and mobile)
- Footer with business info and social links
- Google Tag Manager integration (GTM-NSXRRPHW)
- Schema.org LocalBusiness JSON-LD
- Portal root (`#portal-root`) for modal/overlay components

### Component Patterns
- **Icon Components**: SVG assets in `src/assets/` are React components (e.g., BadgeIcon, ShieldIcon)
- **Client Components**: Use `'use client'` directive for interactive features (forms, carousels, animations)
- **Server Components**: Default for static content and pages
- **Motion**: Uses `motion` library for animations, not Framer Motion
- **Carousels**: Uses `keen-slider` library for image galleries

### Styling System
- **Tailwind CSS v4**: Uses the new `@tailwindcss/postcss` plugin architecture
- **CSS Configuration**: Tailwind imported via `@import "tailwindcss"` in globals.css
- **Custom Theme**: Defined inline in globals.css using `@theme` directive
- **Class Merging**: Use `cn()` utility from `src/utils/cn.ts` for conditional classes (combines clsx + tailwind-merge)
- **Font**: Montserrat font loaded via Google Fonts and next/font

### SVG Handling
SVGs are imported as React components via `@svgr/webpack` (configured in next.config.ts). Use direct imports:
```tsx
import IconName from "@/assets/IconName"
```

### SEO & Analytics
- **Sitemap**: Generated automatically via `next-sitemap` after builds (config in next-sitemap.config.js)
- **Site URL**: https://elretono.org
- **Google Tag Manager**: Integrated in layout with tracking ID GTM-NSXRRPHW
- **Metadata**: Set via Next.js metadata API in layout.tsx and page files

### Service Pages
Service pages follow this pattern:
- Located in `src/app/servicios/[service-name]/page.tsx`
- SEO-friendly URLs with location keywords (e.g., `-tampico-madero-altamira`)
- Include image showcases from `public/servicios-media/[service-name]/`
- Use ImageShowcase, ContactFormSection, and other reusable components

### Landing Pages (A/B Testing)
The site includes alternative landing pages for marketing campaigns:
- **Landing B** (`/landingB`): A/B testing variant created by marketing agency
  - Has its own layout (`src/app/landingB/layout.tsx`) without the main site navbar/footer
  - Uses custom components: `LandingBServicesCarousel`, `LandingBClientsMarquee`, `HubSpotForm`
  - Images stored in `public/landingB/`
  - Uses HubSpot forms for lead capture (Portal ID: 50515278)
  - Built with Tailwind CSS matching the design of the HTML original
  - Uses keen-slider for carousels (already installed in the project)

### Forms & Interactions
- Contact forms use client-side validation
- WhatsApp integration: wa.link/l9ejrd
- Social media links to Facebook, Instagram, and WhatsApp
- Portal pattern for mobile navigation sidebar

### Color Palette
- Primary green: `#689a05`
- Darker green: `#3F5D03`
- Light background: `#eff0d6`
- Dark text: `#232323`
- Accent green: `#7c924f`

### Mobile-First Approach
- Mobile navigation uses sidebar with Portal component
- Separate mobile/desktop layouts in footer and navbar
- Responsive breakpoints follow Tailwind defaults (sm, md, lg, xl)

## Important Notes

- Next.js 15 uses React 19 and Turbopack for dev server
- SVG assets should be placed in either `public/SVG/` or `src/assets/` as TSX components
- All forms should include proper accessibility attributes
- Service page images are webp format for optimization
- The site is fully Spanish-language for the target market
- Always maintain SEO-friendly URLs with location keywords for service pages
