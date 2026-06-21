# Project Structure

## Directory Tree

```
/vercel/share/v0-project/
│
├── 📁 app/                           # Next.js App Router
│   ├── layout.tsx                    # Root layout with providers
│   ├── page.tsx                      # Home page (550+ lines)
│   ├── portal-selection.tsx          # Portal selection component
│   │
│   ├── 📁 about/
│   │   └── page.tsx                  # About Us page
│   │
│   ├── 📁 services/
│   │   └── page.tsx                  # Services page with expandable cards
│   │
│   ├── 📁 contact/
│   │   └── page.tsx                  # Contact form page
│   │
│   └── 📁 globals.css                # Global Tailwind styles
│
├── 📁 components/                    # React components
│   ├── header.tsx                    # Navigation header (237 lines)
│   ├── footer.tsx                    # Footer component (134 lines)
│   ├── skin-provider.tsx             # Portal state context (45 lines)
│   ├── page-transition.tsx           # Page animation wrapper (18 lines)
│   ├── image-carousel.tsx            # Auto-rotating carousel (58 lines)
│   │
│   └── 📁 ui/                        # shadcn/ui components
│       └── button.tsx                # Default button component
│
├── 📁 public/                        # Static assets
│   ├── assets/                       # Images and media
│   │   ├── carters-logo.png          # Brand logo
│   │   ├── ndis-home-1.png           # NDIS hero images
│   │   ├── ndis-home-2.png
│   │   ├── ndis-home-3.png
│   │   ├── ndis-services-1.png       # NDIS services images
│   │   ├── ndis-services-2.png
│   │   ├── ndis-services-3.png
│   │   ├── hero-aged-1.png           # Aged care hero images
│   │   ├── hero-aged-2.png
│   │   ├── hero-aged-3.png
│   │   ├── hero-platform-1.png       # Platform hero images
│   │   ├── hero-platform-2.png
│   │   ├── hero-platform-3.png
│   │   ├── respite-care.jpg
│   │   ├── community-participation.jpg
│   │   ├── hero-partner.png
│   │   └── gradient-bg.png           # Background patterns
│   │
│   └── favicon.ico
│
├── 📁 lib/                           # Utility functions
│   └── utils.ts                      # Tailwind class utilities (cn function)
│
├── 📝 Configuration Files
│   ├── package.json                  # Dependencies & scripts
│   ├── tsconfig.json                 # TypeScript config
│   ├── next.config.mjs               # Next.js configuration
│   ├── postcss.config.mjs            # PostCSS config (Tailwind)
│   ├── tailwind.config.ts            # Tailwind CSS config
│   ├── components.json               # shadcn/ui registry
│   └── .env.local                    # Local environment variables
│
├── 📚 Documentation
│   ├── README.md                     # Project guide
│   ├── BUILD_SUMMARY.md              # Build details
│   ├── PROJECT_STRUCTURE.md          # This file
│
└── 📦 Build Output
    ├── .next/                        # Next.js build cache
    ├── node_modules/                 # Dependencies
    └── dist/                         # Production build (after `pnpm build`)
```

## Key Files Explained

### Core Pages (app/)

| File | Purpose | Size |
|------|---------|------|
| `app/page.tsx` | Home page with dynamic portal display | 550+ lines |
| `app/about/page.tsx` | About Us page with mission/values | 171 lines |
| `app/services/page.tsx` | Services with expandable cards | 383 lines |
| `app/contact/page.tsx` | Contact form and info | 232 lines |

### Components (components/)

| File | Purpose | Size |
|------|---------|------|
| `header.tsx` | Sticky navigation header | 237 lines |
| `footer.tsx` | Site footer with links | 134 lines |
| `skin-provider.tsx` | Portal state management | 45 lines |
| `page-transition.tsx` | Framer Motion page wrapper | 18 lines |
| `image-carousel.tsx` | Auto-rotating image gallery | 58 lines |

### Configuration

| File | Purpose |
|------|---------|
| `next.config.mjs` | Next.js build settings, image optimization |
| `tailwind.config.ts` | Tailwind CSS design tokens, theme |
| `tsconfig.json` | TypeScript compiler options |
| `components.json` | shadcn/ui component registry |
| `postcss.config.mjs` | PostCSS plugins (Tailwind) |
| `package.json` | Dependencies and npm scripts |

## Assets Organization

### Images by Portal

**NDIS Portal:**
- `ndis-home-1.png`, `ndis-home-2.png`, `ndis-home-3.png`
- `ndis-services-1.png`, `ndis-services-2.png`, `ndis-services-3.png`

**Aged Care Portal:**
- `hero-aged-1.png`, `hero-aged-2.png`, `hero-aged-3.png`

**Service Provider Portal:**
- `hero-platform-1.png`, `hero-platform-2.png`, `hero-platform-3.png`

**Branding:**
- `carters-logo.png` - Used in header and footer

**Additional:**
- `respite-care.jpg`, `community-participation.jpg`, `hero-partner.png`
- `gradient-bg.png` - Background patterns

## Development Commands

```bash
# Install dependencies
pnpm install

# Run development server (hot reload)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Type check
pnpm type-check
```

## Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    SkinProvider Context                      │
│                  (Portal State Management)                   │
│                                                               │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  skinData = { ndis: {...}, aged-care: {...}, ... }   │ │
│  │  skin = "ndis" | "aged-care" | "service-provider"     │ │
│  │  setSkin(newSkin)                                      │ │
│  └────────────────────────────────────────────────────────┘ │
│                          ↓                                    │
│                    localStorage                              │
│               (Persist portal choice)                        │
└─────────────────────────────────────────────────────────────┘
                          ↓
            ┌─────────────────────────────┐
            │   Header Component          │
            │  - Uses skin for styling    │
            │  - Shows portal name        │
            │  - Portal switching button  │
            └─────────────────────────────┘
                          ↓
            ┌─────────────────────────────┐
            │   Page Components           │
            │  - Read skinData config     │
            │  - Apply theme colors      │
            │  - Display portal content   │
            └─────────────────────────────┘
                          ↓
            ┌─────────────────────────────┐
            │   Footer Component          │
            │  - Uses skin for styling    │
            │  - Shows contact info       │
            └─────────────────────────────┘
```

## Component Hierarchy

```
<html>
  <body>
    <SkinProvider>
      ├─ <Header />
      │   └─ Navigation
      │   └─ Portal Switcher
      │
      ├─ <PageTransition>
      │   └─ <Page> (dynamic route)
      │       ├─ Hero Section
      │       ├─ Content Sections
      │       ├─ CTA Sections
      │       └─ etc.
      │
      └─ <Footer />
          └─ Contact Info & Links
```

## Styling Strategy

### Tailwind CSS v4
- Utility-first CSS framework
- No custom CSS (pure Tailwind)
- Design tokens in `globals.css`
- Semantic class names

### Color Tokens (per portal)
```css
--primary: #0d8a5d (NDIS) | #be123c (Aged Care) | #2563eb (Provider)
--primary-bg: #f0fdf4 (NDIS) | #fff1f2 (Aged Care) | #eff6ff (Provider)
```

### Responsive Breakpoints
- Mobile: < 768px (base)
- Tablet: md (768px+)
- Desktop: lg (1024px+)

## Dependencies

### Production
- `next` - React framework
- `react` & `react-dom` - UI library
- `framer-motion` - Animations
- `lucide-react` - Icons
- `next-themes` - Theme management
- `wouter` - Lightweight routing

### Dev
- `typescript` - Type safety
- `tailwindcss` - Styling
- `postcss` - CSS processing
- `@types/node` - Type definitions
- `@types/react` - React types

## Build Output

After running `pnpm build`:

```
.next/
├── static/              # Optimized assets
│   ├── chunks/          # Code split chunks
│   ├── css/             # Compiled CSS
│   └── media/           # Images
├── server/              # Server-side code
└── cache/               # Build cache
```

## Performance Metrics

Expected metrics on modern hardware:
- **Build Time**: < 30 seconds
- **Page Load**: < 2 seconds
- **FCP**: < 1 second
- **LCP**: < 2.5 seconds
- **CLS**: < 0.1

## File Statistics

```
Total Lines of Code: ~2,000
  - Components: ~250 lines
  - Pages: ~750 lines
  - Utilities: ~50 lines
  - Config: ~100 lines

Total Components: 10+
Total Pages: 4
Total Routes: 5
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Android Chrome

## Git Structure (if applicable)

```
main/
├── HEAD -> main
├── app/
├── components/
├── public/
├── lib/
└── [config files]
```

---

**Last Updated**: June 21, 2026
**Next.js Version**: 16.2.6
**Node Version**: 18+
