# Carters Care Group Website

A modern, multi-tenant care services website built with **Next.js 16** and **Tailwind CSS**, featuring three distinct portals for NDIS services, aged care, and service providers.

## 🌟 Features

### Multi-Tenant Architecture
- **Three Dynamic Portals**: NDIS Support, Aged Care Services, and Service Provider Platform
- **Portal Switching**: Users can seamlessly switch between portals with distinct branding and color schemes
- **Local Storage Persistence**: Selected portal preference is saved automatically

### Design & UX
- **Beautiful Animations**: Powered by Framer Motion for smooth page transitions and interactive elements
- **Image Carousels**: Auto-rotating image galleries on hero sections
- **Responsive Design**: Fully responsive from mobile to desktop (mobile-first approach)
- **Wave Transitions**: Smooth SVG wave dividers between sections
- **Accessible Navigation**: Sticky header with smooth scrolling behavior

### Pages
1. **Home** - Portal landing page with hero section, services overview, and CTAs
2. **Services** - Expandable service cards with detailed descriptions
3. **About** - Mission, values, and why choose us sections
4. **Contact** - Contact information and message form

### Color Systems
- **NDIS**: Green accent (#0d8a5d) with light green background
- **Aged Care**: Rose accent (#be123c) with light rose background
- **Service Provider**: Blue accent (#2563eb) with light blue background

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component
- **Client State**: Custom SkinProvider context

## 📦 Dependencies

```json
{
  "dependencies": {
    "framer-motion": "^12.40.0",
    "lucide-react": "^1.16.0",
    "next": "latest",
    "next-themes": "^0.4.6",
    "react": "latest",
    "react-dom": "latest",
    "tailwindcss": "latest",
    "wouter": "^3.10.0"
  }
}
```

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Project Structure

```
app/
├── layout.tsx              # Root layout with SkinProvider
├── page.tsx                # Home page with portal selection
├── about/
│   └── page.tsx            # About page
├── services/
│   └── page.tsx            # Services page
├── contact/
│   └── page.tsx            # Contact page
└── portal-selection.tsx    # Portal selection component

components/
├── header.tsx              # Sticky header with navigation
├── footer.tsx              # Footer with contact info
├── skin-provider.tsx       # Context provider for portal switching
├── page-transition.tsx     # Page animation wrapper
└── image-carousel.tsx      # Auto-rotating image carousel

public/assets/
├── carters-logo.png        # Brand logo
├── ndis-home-*.png         # NDIS hero images
├── hero-aged-*.png         # Aged care hero images
├── hero-platform-*.png     # Platform hero images
└── [other assets]          # Service and section images
```

## 🎨 Customization

### Adding a New Portal

1. Add a new entry to the `skinData` object in `/app/page.tsx` and other page files
2. Define the portal's color scheme in the component
3. Update `portals` array in `/app/portal-selection.tsx`
4. Update `skinConfig` in `/components/header.tsx` and `/components/footer.tsx`

### Changing Colors

Edit the color values in the `skinData` objects:
- `accent`: Primary color for buttons and accents
- `accentBg`: Light background color for sections
- `gradient`: Gradient for buttons and highlights
- `gradientCss`: CSS gradient string for inline styles

### Adding New Assets

Place image files in `/public/assets/` and reference them in the component data objects.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Other Platforms

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components use Tailwind's responsive prefixes (`md:`, `lg:`) for adaptive design.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Optional: Add API endpoints if needed
NEXT_PUBLIC_API_URL=https://api.example.com
```

### Build Configuration

The `next.config.mjs` includes optimizations for:
- Image optimization
- Font loading
- Analytics integration (Vercel Analytics)

## 🚀 Performance

- **Image Optimization**: Uses Next.js Image component for automatic optimization
- **Font Loading**: Self-hosted fonts for fast loading
- **Code Splitting**: Automatic code splitting per route
- **Animation Performance**: Hardware-accelerated Framer Motion animations
- **Responsive Images**: Different image sizes for different screen sizes

## 🤝 Contributing

This project was built from the original Carter Care Group repository and adapted for modern Next.js development.

## 📄 License

All rights reserved - Carters Care Group

## 📞 Contact

- **Phone**: 1300 00 27 23
- **Email**: hello@carters.care
- **Address**: PO Box 1118, Osborne Park, WA 6916

---

Built with ❤️ using Next.js and modern web technologies
