# FITZONE FITNESS — Reusable Gym Website Template Guide

Welcome to the **FITZONE FITNESS** production-ready website template. This codebase is designed as an ultra-premium, high-converting, white-label website template for luxury fitness clubs, bodybuilding gyms, CrossFit boxes, and boutique fitness studios.

All business-specific copy, contact details, pricing tiers, trainer profiles, facilities, programs, and SEO parameters are centralized in a single configuration file:
👉 **[`src/data/site-config.ts`](file:///Users/scorpion/Documents/GYM/src/data/site-config.ts)**

---

## 📁 Project Architecture

```
FITZONE FITNESS
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── api/leads/route.ts       # Server-side lead intake endpoint (POST /api/leads)
│   │   ├── globals.css              # Dark theme CSS variables & athletic typography
│   │   ├── icon.svg                 # SVG favicon generator
│   │   ├── layout.tsx               # Root layout, Google Fonts, Open Graph, JSON-LD
│   │   ├── page.tsx                 # Full 12-section homepage sequential flow
│   │   ├── robots.ts                # Dynamic robots.txt generation
│   │   └── sitemap.ts               # Dynamic sitemap.xml generation
│   ├── components/
│   │   ├── forms/LeadForm.tsx       # Reusable trial lead form with validation & WhatsApp
│   │   ├── layout/                  # Sticky Navbar & Multi-column Footer
│   │   ├── sections/                # 10 Isolated, reusable section components:
│   │   │                            # Hero, Stats, WhyChooseUs, Facilities, Trainers,
│   │   │                            # Programs, Testimonials, Pricing, Gallery,
│   │   │                            # FinalCTA, Contact
│   │   └── ui/                      # Design system primitives: Badge, BrandLogo, Button,
│   │                                # Card, Container, FloatingWhatsApp, SectionHeading
│   ├── data/
│   │   └── site-config.ts           # Centralized white-label configuration schema
│   ├── lib/
│   │   ├── leads.ts                 # Lead storage service abstraction
│   │   ├── notifications.ts         # Lead notification service abstraction
│   │   └── utils.ts                 # ClassName merger utility (clsx + twMerge)
│   └── types/
│       └── site-config.ts           # Strongly-typed TypeScript interfaces
├── public/
│   ├── favicon.svg                  # Brand favicon
│   └── images/                      # Organized commercial photography assets
│       ├── facilities/              # Strength, cardio, turf, free-weights, recovery
│       ├── programs/                # Strength, bodybuilding, fat loss, PT, functional
│       └── trainers/                # 3:4 High-resolution coach portraits
├── next.config.ts                   # Security headers, Next.js optimization
├── .env.example                     # Production environment template
└── TEMPLATE_GUIDE.md                # Client onboarding and customization manual
```

---

## 🚀 How to Customize for a New Gym Client

### 1. Gym Branding & Name
Edit `siteConfig.brand` in [`src/data/site-config.ts`](file:///Users/scorpion/Documents/GYM/src/data/site-config.ts):
```ts
brand: {
  name: "IRON VAULT FITNESS",
  shortName: "IRON VAULT",
  highlightWord: "FITNESS",
  tagline: "FORGE YOUR ULTIMATE PHYSIQUE",
  eyebrow: "PREMIUM FITNESS STUDIO",
  shortDescription: "Your custom gym description...",
  establishedYear: 2020,
  badgeText: "ELITE PERFORMANCE CLUB",
  logo: {
    type: "text", // or "image"
    src: "/images/logo.png", // optional image path
  },
}
```

### 2. Contact Information & Hours
Edit `siteConfig.contact` and `siteConfig.hours`:
- `phone`: `"tel:+919876543210"`
- `phoneFormatted`: `"+91 98765 43210"`
- `email`: `"info@yourgym.com"`
- `address`: Street, City, State, Postal code.
- `hours`: Monday–Saturday and Sunday schedules.

### 3. WhatsApp Direct Integration
Update `siteConfig.contact.whatsapp` (enter country code without `+` or spaces, e.g. `"919876543210"`):
```ts
whatsapp: "919876543210",
whatsappMessage: "Hi, I would like to book a 1-day free trial pass.",
```
Both the Floating WhatsApp pill and the Lead Form success button will automatically update.

### 4. Hero Section
Edit `siteConfig.hero`:
- Headline parts and highlighted word.
- Supporting copy and trust statement.
- Hero background image path (e.g. `"/images/hero-athlete.jpg"`).

### 5. Facilities Showcase
Edit `siteConfig.facilities.items`:
- Update zone names (e.g., *Strength Zone*, *Cardio Deck*, *Recovery Suite*).
- Replace facility images in `public/images/facilities/`.

### 6. Trainers & Coaches
Edit `siteConfig.trainers.items`:
- Add real coach names, specialties, and 3:4 portrait photos in `public/images/trainers/`.
- Add coach social handles (`instagram`, `twitter`).

### 7. Training Programs
Edit `siteConfig.programs.items`:
- Update program titles, descriptions, and badges (e.g., *Hypertrophy*, *Olympic Lifting*, *Fat Loss*).

### 8. Member Testimonials
Edit `siteConfig.testimonials.items`:
- Replace demo quotes with real client feedback and names.
- Update program category tags (e.g., *STRENGTH TRAINING*, *FAT LOSS*).

### 9. Membership Pricing Tiers
Edit `siteConfig.pricing.plans`:
- Set custom plan names (Monthly, Quarterly, Yearly).
- Update prices (e.g. `"₹1,499"`, `"₹3,999"`), billing period, and bulleted features.
- Set `featured: true` on the recommended plan.

### 10. Photography Gallery
Edit `siteConfig.gallery.items`:
- Assign photo paths, categories (`STRENGTH`, `CARDIO`, `COMMUNITY`, `WELLNESS`), and titles.

### 11. Google Maps Location Embed
Update `siteConfig.contact.mapEmbedUrl` with your Google Maps embed URL (`https://maps.google.com/maps?q=...&output=embed`).

### 12. Social Media Channels
Edit `siteConfig.socials`:
- Add or remove URLs for Instagram, Facebook, YouTube, and X (Twitter).
- If a platform is omitted, its icon will not render.

### 13. Production SEO & Open Graph
Edit `siteConfig.seo`:
```ts
seo: {
  title: "IRON VAULT FITNESS | Best Gym in Mumbai",
  description: "Transform your physique at Iron Vault...",
  keywords: ["gym in mumbai", "best bodybuilding gym bandra"],
  ogImage: "/images/hero-athlete.jpg",
  locale: "en_IN",
}
```

### 14. Production Domain Configuration
In your production hosting environment (Vercel, AWS, Cloudflare, VPS), set:
```bash
NEXT_PUBLIC_SITE_URL=https://yourgymdomain.com
```
This automatically updates canonical URLs, Open Graph tags, `robots.txt`, `sitemap.xml`, and JSON-LD structured data.

### 15. Connecting an Email Provider (Optional)
To send email alerts on new lead submissions:
1. Open [`src/lib/notifications.ts`](file:///Users/scorpion/Documents/GYM/src/lib/notifications.ts).
2. Install your preferred email SDK (e.g. `npm install resend` or `nodemailer`).
3. Add API credentials to your `.env.local` / deployment environment variables.

---

## 📋 New Gym Client Customization Checklist

Use this checklist during every new client onboarding:

- [ ] Update `brand.name`, `brand.shortName`, and `brand.tagline`
- [ ] Upload client logo (or use styled text monogram)
- [ ] Update phone number and formatted display string
- [ ] Update WhatsApp phone number and default message
- [ ] Update support / contact email address
- [ ] Update physical studio address and postal code
- [ ] Embed client Google Maps location URL
- [ ] Update operating hours for weekdays and weekends
- [ ] Replace Hero background photo with client's best gym photo
- [ ] Update Facility names, descriptions, and photos
- [ ] Update Trainer coach names, bios, and 3:4 portrait photos
- [ ] Update Training program names and descriptions
- [ ] Replace demo pricing with the gym's real membership rates
- [ ] Replace demo testimonials with genuine client reviews
- [ ] Update Gallery photos with real facility shots
- [ ] Configure client Instagram, Facebook, and YouTube links
- [ ] Update SEO page title, description, and keywords
- [ ] Set `NEXT_PUBLIC_SITE_URL` in production environment
- [ ] Test trial enquiry submission and WhatsApp redirect

---

## ⚠️ Real Client Data Safety & Honesty Rules

> [!IMPORTANT]
> **This repository contains placeholder and demo content:**
> - Testimonial quotes and names are templates.
> - Pricing numbers are illustrative demos.
> - Credibility metrics (e.g. *5000+ Members*) are placeholder figures.
>
> **Never launch a live client website without verifying:**
> 1. Exact membership prices and cancellation policies.
> 2. Genuine customer testimonials and authorized reviews.
> 3. Real trainer qualifications and certifications.
> 4. Operating hours and holiday schedules.

---

## ☁️ Deploying to Vercel (Free Production Hosting)

Vercel provides native, zero-configuration hosting for Next.js App Router applications with free global CDN, automatic HTTPS, and serverless API support.

### Step-by-Step Deployment Guide:

1. **Commit and Push to GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete fitzone gym production template"
   git push origin main
   ```

2. **Import into Vercel**:
   - Log into [Vercel Dashboard](https://vercel.com).
   - Click **"Add New..."** → **"Project"**.
   - Select your GitHub repository.

3. **Configure Build Settings**:
   - **Framework Preset**: `Next.js` (detected automatically).
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

4. **Set Environment Variables**:
   In the project settings under **Environment Variables**, add:
   - **Key**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: `https://your-project.vercel.app` (or your custom domain)

5. **Deploy**:
   - Click **"Deploy"**.
   - Your website will build and go live in ~45 seconds with a free `.vercel.app` domain.

6. **Verify Live Deployment**:
   - Open your live Vercel URL.
   - Test sitemap at `/sitemap.xml` and robots at `/robots.txt`.
   - Submit a test lead on the contact form.

---

## 🔍 Live Production Verification Checklist

After deploying your live demo, verify the following:

- [ ] Homepage renders with dark theme and athletic typography
- [ ] Hero section deadlift athlete photography loads sharply
- [ ] Sticky Navbar blurs on scroll and navigates smoothly to section anchors
- [ ] Mobile navigation drawer opens and closes without layout shifting
- [ ] All 6 Facility photos load in high resolution
- [ ] All 6 Trainer coach portraits load with correct aspect ratios
- [ ] Pricing plan buttons navigate to `#contact` with preselected plan
- [ ] Lead Form validates required fields and submits to `/api/leads`
- [ ] Lead Form confirmation screen provides direct WhatsApp continuation button
- [ ] Floating WhatsApp button triggers pre-filled enquiry message
- [ ] Google Maps location embed displays properly
- [ ] Favicon renders in browser tab
- [ ] Robots.txt is accessible at `/robots.txt`
- [ ] XML Sitemap is accessible at `/sitemap.xml`
- [ ] 0 browser console errors
- [ ] 0 horizontal scroll overflow on mobile devices (375px & 390px)

