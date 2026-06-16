# 4EWAFIT Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a modern, conversion-optimized single-page website for Ewa Gdaniec (Personal Trainerin Berlin) that drives phone calls from new clients.

**Architecture:** Single Next.js 14 App Router page (`app/page.tsx`) composed of section components. All content is static and hardcoded in German. No client-side state beyond a sticky nav scroll effect. Images loaded from external jimcdn.com/4ewafit.com URLs via `next/image` with `remotePatterns`.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, deployed to Vercel via `git@github.com:robinboehm/4ewafit.de.git`

---

## File Map

```
app/
  layout.tsx          # Root layout: metadata, font, global CSS import
  page.tsx            # Single page — assembles all sections in order
  globals.css         # Tailwind directives + CSS custom properties (design tokens)

components/
  Nav.tsx             # Sticky nav: logo, links, phone CTA button
  Hero.tsx            # Full-width bg image, headline, phone CTA, trust numbers
  TrustBar.tsx        # Qualifications strip (5 items)
  AboutEwa.tsx        # Photo + text + qual tags + phone CTA
  VideoSection.tsx    # YouTube no-cookie embed (responsive 16:9)
  Pillars.tsx         # Dark section: 3 pillar cards
  Nutrition.tsx       # Text + photo, 3 bullet points
  Studio.tsx          # Photo grid (4 images) + address bar
  Testimonials.tsx    # 4 review cards + total count
  Pricing.tsx         # 2 pricing cards
  Shop.tsx            # 3 product cards → 4ewafit.com
  CtaBlock.tsx        # Full red section, large phone number
  Footer.tsx          # Logo, address, legal links

lib/
  content.ts          # All static content: text, URLs, reviews, products, pricing

next.config.ts        # remotePatterns for image domains
tailwind.config.ts    # Extend colors with brand tokens
```

---

## Task 1: Project scaffold + Git remote

**Files:**
- Create: all scaffold files via `create-next-app`
- Modify: `next.config.ts`, `tailwind.config.ts`, `app/globals.css`

- [ ] **Step 1: Scaffold project**

```bash
cd /Users/robinboehm/development/4ewa-fit-website
npx create-next-app@latest . \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --no-src-dir \
  --import-alias "@/*"
```

Accept all defaults. When asked "Would you like to use Turbopack", choose No.

- [ ] **Step 2: Wire up Git remote**

```bash
git remote add origin git@github.com:robinboehm/4ewafit.de.git
```

- [ ] **Step 3: Add brand colors to `tailwind.config.ts`**

Replace the contents of `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#ff3b1e",
        "dark-bg": "#111111",
        "dark-card": "#1a1a1a",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 4: Set up `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 5: Configure `next.config.ts` for remote images**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.jimcdn.com",
      },
      {
        protocol: "https",
        hostname: "4ewafit.com",
      },
    ],
  },
};

export default nextConfig;
```

- [ ] **Step 6: Verify dev server starts**

```bash
npm run dev
```

Expected: Server running at http://localhost:3000, default Next.js page visible.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js 14 project with Tailwind and brand config"
```

---

## Task 2: Content file

**Files:**
- Create: `lib/content.ts`

- [ ] **Step 1: Create `lib/content.ts`**

```typescript
export const CONTACT = {
  phone: "+49 170 2955734",
  phoneHref: "tel:+491702955734",
  email: "kontakt@4ewafit.de",
  address: "Jungstraße 24, 10247 Berlin",
  addressShort: "Jungstraße 24 · 10247 Berlin · Friedrichshain",
  shopUrl: "https://4ewafit.com",
  instagramUrl: "https://www.instagram.com/4ewafit_personal_trainerin/",
};

export const IMAGES = {
  logo: "https://image.jimcdn.com/app/cms/image/transf/dimension=237x10000:format=png/path/s0ce24c5047c7c8ad/image/ia00362cab215978f/version/1737936100/image.png",
  ewaProfile:
    "https://image.jimcdn.com/app/cms/image/transf/dimension=672x10000:format=jpg/path/s0ce24c5047c7c8ad/image/iebee53955cdfde2c/version/1737936083/image.jpg",
  heroBg:
    "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s0ce24c5047c7c8ad/image/i81fb267988e97c16/version/1646038289/image.jpg",
  nutrition:
    "https://image.jimcdn.com/app/cms/image/transf/dimension=275x1024:format=jpg/path/s0ce24c5047c7c8ad/image/i0d85bf7d9c1b37e3/version/1737940361/image.jpg",
  studio: [
    "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s0ce24c5047c7c8ad/image/i26b89f91b9f32765/version/1737936761/image.jpg",
    "https://image.jimcdn.com/app/cms/image/transf/dimension=400x1920:format=jpg:rotate=90/path/s0ce24c5047c7c8ad/image/i43bb1210dfa4f75e/version/1737936761/image.jpg",
    "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s0ce24c5047c7c8ad/image/i637d2f4d14d0267e/version/1737936761/image.jpg",
    "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s0ce24c5047c7c8ad/image/idb3ffc978a5b652d/version/1737936761/image.jpg",
  ],
};

export const QUALIFICATIONS = [
  "Fitnesstrainerin A & B",
  "Ernährungsberaterin",
  "Resilienz-Trainerin",
  "Functional Trainer A & B",
  "Pilates",
  "Boot Camp Trainer",
];

export const TRUST_BAR_ITEMS = [
  { icon: "🏅", label: "Fitnesstrainerin A & B" },
  { icon: "🥗", label: "Ernährungsberaterin" },
  { icon: "🧠", label: "Resilienz-Trainerin" },
  { icon: "💬", label: "Deutsch & Polnisch" },
  { icon: "⭐", label: "50× 5-Sterne-Bewertungen" },
];

export const PILLARS = [
  {
    icon: "🏋️",
    title: "Training",
    description:
      "Individuell, fordernd, effektiv — angepasst an deinen Körper und dein Level. Keine Copy-Paste-Programme.",
  },
  {
    icon: "🥗",
    title: "Ernährung",
    description:
      "Flexibel und ohne Verbote. Ich zeige dir, wie Essen Spaß machen und trotzdem deinen Zielen dienen kann.",
  },
  {
    icon: "🧠",
    title: "Mentale Stärke",
    description:
      "Gewohnheiten, Motivation und Resilienz. Der Kopf entscheidet — ich helfe dir, ihn auf deine Seite zu bringen.",
  },
];

export const NUTRITION_POINTS = [
  {
    icon: "🎯",
    title: "Individuell statt Grammzählen",
    description:
      "Kein starrer Ernährungsplan — angepasst an deinen Alltag und deine Ziele.",
  },
  {
    icon: "🔄",
    title: "Für alle Trainingsphasen",
    description:
      "Ob Aufbau, Abnehmen oder Erhalt — du lernst, wie du dich in jeder Phase richtig ernährst.",
  },
  {
    icon: "💊",
    title: "Nahrungsergänzung erklärt",
    description:
      "Was sinnvoll ist und was nicht — ich räume mit Mythen auf und gebe dir klare Empfehlungen.",
  },
];

export const REVIEWS = [
  {
    author: "Torsten S.",
    date: "Oktober 2025",
    text: "Sie hat mich vom kompletten Couch-Potato in jemanden verwandelt, der sich auf jede Einheit freut.",
  },
  {
    author: "Kristin F.",
    date: "November 2024",
    text: "Beste Entscheidung! Erste Ergebnisse schon nach zwei Monaten sichtbar — ein echtes Berliner Geheimtipp.",
  },
  {
    author: "Olivia N.",
    date: "Januar 2026",
    text: "Man merkt sofort, mit wie viel Leidenschaft und Professionalität sie an die Arbeit geht.",
  },
  {
    author: "Manja W.",
    date: "Oktober 2025",
    text: "Professionelle Betreuung in entspannter Atmosphäre — absolut empfehlenswert.",
  },
];

export const PRICING = [
  {
    title: "10er Karte",
    price: "110",
    unit: "€/Std.",
    description: "10 × 60 Minuten Personal Training. Der beste Einstieg für nachhaltige Ergebnisse.",
    featured: true,
  },
  {
    title: "Probetraining",
    price: "80",
    unit: "€",
    description: "Eine Stunde — lern mich kennen und schau ob wir zusammenpassen. Ohne Verpflichtung.",
    featured: false,
  },
];

export const SHOP_PRODUCTS = [
  {
    category: "Beauty / Skincare",
    name: "Kaktusfeigenkernöl — Natürlichkeit statt Botox",
    price: "34,90 €",
    image: "https://4ewafit.com/cdn/shop/files/IMG_83632.jpg?v=1769895650&width=600",
  },
  {
    category: "Training-Kurs",
    name: "Stark & Sicher Zuhause Trainieren",
    price: "39,00 €",
    image:
      "https://4ewafit.com/cdn/shop/files/Kopie_von_4EWAFIT_ANFAeNGERKURS_1080_x_1350_px_1200_x_1450_px_1080_x_1440_px.jpg?v=1770884803&width=600",
  },
  {
    category: "Online Coaching",
    name: "30 Minuten zu deinem Ziel ❤️",
    price: "59,00 €",
    image:
      "https://4ewafit.com/cdn/shop/files/42EA9593-7A3F-4191-ACEB-C91B77693BD7.png?v=1778761511&width=600",
  },
];
```

- [ ] **Step 2: Commit**

```bash
git add lib/content.ts
git commit -m "feat: add static content data"
```

---

## Task 3: Root layout + page shell

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Update `app/layout.tsx`**

```typescript
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "4EWAFIT – Personal Training Berlin Friedrichshain | Ewa Gdaniec",
  description:
    "Personal Training in Berlin mit Ewa Gdaniec — 15 Jahre Erfahrung, eigenes Studio in Friedrichshain. Training, Ernährung & mentale Stärke für Einsteiger:innen. Jetzt anrufen: +49 170 2955734",
  keywords: [
    "Personal Training Berlin",
    "Personal Trainerin Berlin Friedrichshain",
    "Fitness Einsteiger Berlin",
    "Ewa Gdaniec",
    "4ewafit",
  ],
  openGraph: {
    title: "4EWAFIT – Personal Training Berlin",
    description: "15 Jahre Erfahrung. Eigenes Studio. Für Einsteiger:innen.",
    url: "https://www.4ewafit.de",
    siteName: "4EWAFIT",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Create `app/page.tsx` shell**

```typescript
export default function Home() {
  return (
    <main>
      <p className="p-8 text-brand font-bold">4EWAFIT – coming soon</p>
    </main>
  );
}
```

- [ ] **Step 3: Verify brand color renders**

```bash
npm run dev
```

Expected: "4EWAFIT – coming soon" in red-orange (#ff3b1e) at http://localhost:3000

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx app/page.tsx
git commit -m "feat: root layout with SEO metadata and page shell"
```

---

## Task 4: Nav component

**Files:**
- Create: `components/Nav.tsx`

- [ ] **Step 1: Create `components/Nav.tsx`**

```typescript
import Image from "next/image";
import { CONTACT, IMAGES } from "@/lib/content";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
        {/* Logo */}
        <a href="#" aria-label="4EWAFIT Startseite">
          <Image
            src={IMAGES.logo}
            alt="4EWAFIT Logo"
            width={180}
            height={72}
            className="h-16 w-auto object-contain"
            priority
          />
        </a>

        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-7">
          <a href="#ueber-ewa" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">Über Ewa</a>
          <a href="#studio" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">Studio</a>
          <a href="#angebote" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">Angebote</a>
          <a href="#preise" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">Preise</a>
          <a href="#shop" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">Shop</a>
        </div>

        {/* Phone CTA */}
        <a
          href={CONTACT.phoneHref}
          className="flex items-center gap-2 bg-brand text-white text-sm font-bold px-4 py-2.5 rounded-lg hover:bg-red-600 transition-colors whitespace-nowrap"
        >
          <span>📞</span>
          <span>Jetzt anrufen</span>
        </a>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Add Nav to `app/page.tsx`**

```typescript
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main>
      <Nav />
      <p className="p-8 text-brand font-bold">4EWAFIT – coming soon</p>
    </main>
  );
}
```

- [ ] **Step 3: Verify nav renders with logo**

```bash
npm run dev
```

Expected: Sticky nav with logo image, nav links, and red "Jetzt anrufen" button at http://localhost:3000

- [ ] **Step 4: Commit**

```bash
git add components/Nav.tsx app/page.tsx
git commit -m "feat: sticky navigation with logo and phone CTA"
```

---

## Task 5: Hero section

**Files:**
- Create: `components/Hero.tsx`

- [ ] **Step 1: Create `components/Hero.tsx`**

```typescript
import Image from "next/image";
import { CONTACT, IMAGES } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative min-h-[560px] flex items-end overflow-hidden">
      {/* Background image */}
      <Image
        src={IMAGES.heroBg}
        alt="Ewa Gdaniec Personal Training Berlin"
        fill
        className="object-cover object-[center_30%] brightness-50"
        priority
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 pb-14 pt-10">
        <div className="inline-block bg-brand text-white text-xs font-bold px-3 py-1 rounded tracking-widest uppercase mb-4">
          Personal Training · Berlin Friedrichshain
        </div>

        <h1 className="text-5xl md:text-6xl font-black text-white leading-[0.95] tracking-tight mb-4">
          Dein erster<br />
          Schritt.<br />
          <em className="not-italic text-brand">Jetzt.</em>
        </h1>

        <p className="text-base text-white/80 leading-relaxed max-w-lg mb-8">
          Ewa begleitet Einsteiger:innen — mit 15 Jahren Erfahrung, eigenem Studio
          und einem Plan der wirklich zu dir passt.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-8">
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-3 bg-brand text-white text-lg font-extrabold px-7 py-4 rounded-xl hover:bg-red-600 transition-colors"
          >
            <span>📞</span>
            <span>{CONTACT.phone}</span>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-white/60 text-sm underline hover:text-white/90 transition-colors"
          >
            oder schreib eine Mail →
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex gap-7">
          <div>
            <div className="text-2xl font-black text-white leading-none">50×</div>
            <div className="text-xs text-white/50 uppercase tracking-widest mt-0.5">⭐ Bewertungen</div>
          </div>
          <div>
            <div className="text-2xl font-black text-white leading-none">15 J.</div>
            <div className="text-xs text-white/50 uppercase tracking-widest mt-0.5">Erfahrung</div>
          </div>
          <div>
            <div className="text-2xl font-black text-white leading-none">Eigenes</div>
            <div className="text-xs text-white/50 uppercase tracking-widest mt-0.5">Studio Friedrichshain</div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Hero to `app/page.tsx`**

```typescript
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
    </main>
  );
}
```

- [ ] **Step 3: Verify hero renders**

```bash
npm run dev
```

Expected: Full-width darkened photo with headline "Dein erster Schritt. Jetzt.", large red phone CTA, trust numbers.

- [ ] **Step 4: Commit**

```bash
git add components/Hero.tsx app/page.tsx
git commit -m "feat: hero section with phone CTA and trust indicators"
```

---

## Task 6: TrustBar + AboutEwa

**Files:**
- Create: `components/TrustBar.tsx`
- Create: `components/AboutEwa.tsx`

- [ ] **Step 1: Create `components/TrustBar.tsx`**

```typescript
import { TRUST_BAR_ITEMS } from "@/lib/content";

export default function TrustBar() {
  return (
    <div className="bg-gray-50 border-b border-gray-200 py-3">
      <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-6">
        {TRUST_BAR_ITEMS.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create `components/AboutEwa.tsx`**

```typescript
import Image from "next/image";
import { CONTACT, IMAGES, QUALIFICATIONS } from "@/lib/content";

export default function AboutEwa() {
  return (
    <section id="ueber-ewa" className="py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[5fr_6fr] gap-12 items-start">
        {/* Photo */}
        <div className="rounded-2xl overflow-hidden aspect-[3/4] relative bg-gray-100">
          <Image
            src={IMAGES.ewaProfile}
            alt="Ewa Gdaniec — Personal Trainerin Berlin"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Text */}
        <div>
          <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">Über Ewa</p>
          <h2 className="text-3xl font-black tracking-tight leading-tight mb-4">
            Mehr als ein Trainingsprogramm.
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            Ich bin Ewa — 46 Jahre, Mutter zweier Kinder und seit meinem 16. Lebensjahr leidenschaftlich
            im Fitness aktiv. Was als Hobby begann, wurde zu meinem Beruf und meiner Berufung.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            Seit <strong className="text-gray-900">15 Jahren selbstständig</strong> als Personal Trainerin —
            heute in meinem eigenen kleinen Studio im Herzen von Friedrichshain.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Mein Ansatz: Fitness ist kein körperlicher Prozess allein. Es ist eine{" "}
            <strong className="text-gray-900">Reise zu mehr Wohlbefinden</strong> — mit Training,
            Ernährung und dem richtigen Mindset.
          </p>

          {/* Qual tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {QUALIFICATIONS.map((q) => (
              <span
                key={q}
                className="bg-gray-100 border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full"
              >
                {q}
              </span>
            ))}
          </div>

          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 bg-brand text-white text-sm font-bold px-6 py-3.5 rounded-lg hover:bg-red-600 transition-colors"
          >
            📞 Ruf mich an — kostenlos &amp; unverbindlich
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Add both to `app/page.tsx`**

```typescript
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutEwa from "@/components/AboutEwa";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBar />
      <AboutEwa />
    </main>
  );
}
```

- [ ] **Step 4: Verify both sections render correctly, commit**

```bash
git add components/TrustBar.tsx components/AboutEwa.tsx app/page.tsx
git commit -m "feat: trust bar and about Ewa section"
```

---

## Task 7: VideoSection + Pillars

**Files:**
- Create: `components/VideoSection.tsx`
- Create: `components/Pillars.tsx`

- [ ] **Step 1: Create `components/VideoSection.tsx`**

```typescript
import { CONTACT } from "@/lib/content";

export default function VideoSection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">Ewa in Aktion</p>
        <h2 className="text-3xl font-black tracking-tight leading-tight mb-3">
          Schau dir an,<br />wie ich arbeite.
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-xl mb-8">
          Ein erster Einblick in meinen Trainingsstil — damit du weißt, was dich erwartet, bevor du anrufst.
        </p>
        {/* Responsive 16:9 YouTube no-cookie embed */}
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-xl">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            src="https://www.youtube-nocookie.com/embed/kWENAw96ETE?rel=0&modestbranding=1"
            title="Ewa Gdaniec — 4EWAFIT Personal Training Berlin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `components/Pillars.tsx`**

```typescript
import { PILLARS } from "@/lib/content";

export default function Pillars() {
  return (
    <section id="angebote" className="py-16 px-6 bg-dark-bg text-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">Mein Ansatz</p>
        <h2 className="text-3xl font-black tracking-tight leading-tight text-white mb-3">
          Drei Säulen.<br />Ein Ziel: Du.
        </h2>
        <p className="text-sm text-gray-400 leading-relaxed max-w-xl mb-10">
          Ich arbeite nicht mit Standardprogrammen. Alle Kundinnen bekommen ein Coaching das zu ihrem Leben passt.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-dark-card rounded-xl p-6 border border-white/5"
            >
              <span className="text-3xl block mb-3">{pillar.icon}</span>
              <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Add to `app/page.tsx`**

```typescript
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutEwa from "@/components/AboutEwa";
import VideoSection from "@/components/VideoSection";
import Pillars from "@/components/Pillars";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBar />
      <AboutEwa />
      <VideoSection />
      <Pillars />
    </main>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add components/VideoSection.tsx components/Pillars.tsx app/page.tsx
git commit -m "feat: video section and three pillars"
```

---

## Task 8: Nutrition + Studio

**Files:**
- Create: `components/Nutrition.tsx`
- Create: `components/Studio.tsx`

- [ ] **Step 1: Create `components/Nutrition.tsx`**

```typescript
import Image from "next/image";
import { CONTACT, IMAGES, NUTRITION_POINTS } from "@/lib/content";

export default function Nutrition() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[6fr_5fr] gap-12 items-center">
        <div>
          <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">Ernährungsberatung</p>
          <h2 className="text-3xl font-black tracking-tight leading-tight mb-6">
            Gesund essen —<br />ohne Zwang.
          </h2>
          <div className="flex flex-col gap-5 mb-8">
            {NUTRITION_POINTS.map((point) => (
              <div key={point.title} className="flex gap-3 items-start">
                <div className="w-9 h-9 shrink-0 bg-red-50 rounded-lg flex items-center justify-center text-lg">
                  {point.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">{point.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 bg-brand text-white text-sm font-bold px-5 py-3 rounded-lg hover:bg-red-600 transition-colors"
          >
            📞 Ernährungsberatung anfragen
          </a>
        </div>
        <div className="rounded-2xl overflow-hidden aspect-[3/4] relative bg-gray-100">
          <Image
            src={IMAGES.nutrition}
            alt="Ernährungsberatung mit Ewa"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `components/Studio.tsx`**

```typescript
import Image from "next/image";
import { CONTACT, IMAGES } from "@/lib/content";

export default function Studio() {
  const [img1, img2, img3, img4] = IMAGES.studio;

  return (
    <section id="studio" className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">Mein Studio</p>
        <h2 className="text-3xl font-black tracking-tight leading-tight mb-3">
          Dein eigener Raum.<br />Mitten in Friedrichshain.
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-xl mb-8">
          Kein großes Gym-Chaos. Mein Studio gehört während des Trainings nur dir.
        </p>

        {/* Photo grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-2.5">
          {/* Big: spans 2 cols */}
          <div className="col-span-2 rounded-xl overflow-hidden aspect-video relative bg-gray-200">
            <Image src={img1} alt="Studio Übersicht" fill className="object-cover" />
          </div>
          {/* Tall: spans 2 rows */}
          <div className="row-span-2 rounded-xl overflow-hidden relative bg-gray-200" style={{ aspectRatio: "2/3" }}>
            <Image src={img2} alt="Studio Detail" fill className="object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[4/3] relative bg-gray-200">
            <Image src={img3} alt="Studio" fill className="object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[4/3] relative bg-gray-200">
            <Image src={img4} alt="Studio" fill className="object-cover" />
          </div>
        </div>

        {/* Address */}
        <div className="mt-6 bg-white rounded-xl p-4 flex items-center gap-4 border border-gray-100">
          <span className="text-2xl">📍</span>
          <div>
            <p className="text-sm font-bold text-gray-900">4EWAFIT Studio</p>
            <p className="text-sm text-gray-500">{CONTACT.addressShort} · Dusche vorhanden</p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Add to `app/page.tsx`**

```typescript
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutEwa from "@/components/AboutEwa";
import VideoSection from "@/components/VideoSection";
import Pillars from "@/components/Pillars";
import Nutrition from "@/components/Nutrition";
import Studio from "@/components/Studio";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBar />
      <AboutEwa />
      <VideoSection />
      <Pillars />
      <Nutrition />
      <Studio />
    </main>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add components/Nutrition.tsx components/Studio.tsx app/page.tsx
git commit -m "feat: nutrition section and studio photo grid"
```

---

## Task 9: Testimonials + Pricing

**Files:**
- Create: `components/Testimonials.tsx`
- Create: `components/Pricing.tsx`

- [ ] **Step 1: Create `components/Testimonials.tsx`**

```typescript
import { REVIEWS } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">Kundenstimmen</p>
        <h2 className="text-3xl font-black tracking-tight leading-tight mb-10">
          Was andere sagen.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {REVIEWS.map((review) => (
            <div key={review.author} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <span className="inline-block bg-brand text-white text-xs font-bold px-2 py-0.5 rounded mb-2 uppercase tracking-wide">
                Verifiziert
              </span>
              <div className="text-brand text-sm tracking-widest mb-1">★★★★★</div>
              <p className="text-sm text-gray-600 leading-relaxed italic mb-3">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-xs font-bold text-gray-900">{review.author}</p>
              <p className="text-xs text-gray-400">{review.date}</p>
            </div>
          ))}
        </div>
        <div className="text-center bg-gray-50 rounded-xl py-4 text-sm text-gray-500 border border-gray-100">
          <strong className="text-gray-900 text-base">50</strong> Bewertungen · alle 5 Sterne ·{" "}
          <a
            href="https://www.personalfitness.de/suche/trainer/6370/ewa-gdaniec-berlin.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:underline"
          >
            auf personalfitness.de
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `components/Pricing.tsx`**

```typescript
import { CONTACT, PRICING } from "@/lib/content";

export default function Pricing() {
  return (
    <section id="preise" className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">Preise</p>
        <h2 className="text-3xl font-black tracking-tight leading-tight mb-10">
          Transparent.<br />Kein Kleingedrucktes.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
          {PRICING.map((plan) => (
            <div
              key={plan.title}
              className={`relative rounded-2xl p-7 border-2 ${
                plan.featured
                  ? "border-brand bg-red-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-5 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Beliebt
                </span>
              )}
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                {plan.title}
              </p>
              <p className="text-5xl font-black text-gray-900 tracking-tight leading-none mb-1">
                {plan.price}{" "}
                <span className="text-xl font-normal text-gray-400">{plan.unit}</span>
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mt-2 mb-5">{plan.description}</p>
              <a
                href={CONTACT.phoneHref}
                className={`block text-center py-3 rounded-xl text-sm font-bold transition-colors ${
                  plan.featured
                    ? "bg-brand text-white hover:bg-red-600"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {plan.featured ? "📞 Platz sichern" : "Termin anfragen"}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400">
          Alle Preise inkl. MwSt. · Coaching ggf. steuerlich absetzbar.
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Add to `app/page.tsx`**

```typescript
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutEwa from "@/components/AboutEwa";
import VideoSection from "@/components/VideoSection";
import Pillars from "@/components/Pillars";
import Nutrition from "@/components/Nutrition";
import Studio from "@/components/Studio";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBar />
      <AboutEwa />
      <VideoSection />
      <Pillars />
      <Nutrition />
      <Studio />
      <Testimonials />
      <Pricing />
    </main>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add components/Testimonials.tsx components/Pricing.tsx app/page.tsx
git commit -m "feat: testimonials and pricing sections"
```

---

## Task 10: Shop + CtaBlock + Footer

**Files:**
- Create: `components/Shop.tsx`
- Create: `components/CtaBlock.tsx`
- Create: `components/Footer.tsx`

- [ ] **Step 1: Create `components/Shop.tsx`**

```typescript
import Image from "next/image";
import { CONTACT, SHOP_PRODUCTS } from "@/lib/content";

export default function Shop() {
  return (
    <section id="shop" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">4EWAFIT Shop</p>
            <h2 className="text-3xl font-black tracking-tight leading-tight">Mehr als Training.</h2>
          </div>
          <a
            href={CONTACT.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-900 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-gray-700 transition-colors whitespace-nowrap"
          >
            Zum Shop →
          </a>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed max-w-xl mb-8">
          Im Shop findest du ausgewählte Produkte — von Online-Coaching direkt mit Ewa bis hin zu
          natürlichen Beautyprodukten die von innen heraus wirken.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SHOP_PRODUCTS.map((product) => (
            <a
              key={product.name}
              href={CONTACT.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow block"
            >
              <div className="aspect-square relative bg-gray-100 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-bold text-brand uppercase tracking-widest mb-1">
                  {product.category}
                </p>
                <p className="text-sm font-bold text-gray-900 leading-snug mb-2">{product.name}</p>
                <p className="text-base font-black text-gray-900 mb-3">{product.price}</p>
                <p className="text-center bg-gray-900 text-white text-xs font-bold py-2 rounded-lg">
                  Im Shop ansehen →
                </p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-6 bg-gray-50 rounded-xl p-4 flex items-center gap-3 border border-gray-100 text-sm text-gray-500">
          <span className="text-xl">🛒</span>
          <span>
            Alle Produkte direkt im Shop:{" "}
            <a
              href={CONTACT.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand font-semibold hover:underline"
            >
              4ewafit.com
            </a>{" "}
            — sicher, einfach, direkt.
          </span>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `components/CtaBlock.tsx`**

```typescript
import { CONTACT } from "@/lib/content";

export default function CtaBlock() {
  return (
    <section className="bg-brand py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-black text-white tracking-tight leading-tight mb-3">
          Bereit für deinen<br />ersten Schritt?
        </h2>
        <p className="text-base text-white/80 mb-8">
          Ruf einfach an — kein Formular, keine Wartezeit, kein Stress.
        </p>
        <a
          href={CONTACT.phoneHref}
          className="inline-flex items-center gap-4 bg-white text-brand text-3xl font-black px-10 py-5 rounded-2xl hover:bg-gray-50 transition-colors mb-4"
        >
          <span>📞</span>
          <span>{CONTACT.phone}</span>
        </a>
        <p className="text-sm text-white/60">Mo–Fr · 8–20 Uhr · Auch WhatsApp</p>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create `components/Footer.tsx`**

```typescript
import Image from "next/image";
import { CONTACT, IMAGES } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-gray-500 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-between items-center gap-4 text-sm">
        <Image
          src={IMAGES.logo}
          alt="4EWAFIT"
          width={120}
          height={48}
          className="h-10 w-auto object-contain brightness-0 invert opacity-80"
        />
        <div>
          {CONTACT.addressShort} ·{" "}
          <a href={`mailto:${CONTACT.email}`} className="hover:text-gray-300 transition-colors">
            {CONTACT.email}
          </a>
        </div>
        <div className="flex gap-4">
          <a href="/impressum" className="hover:text-gray-300 transition-colors">Impressum</a>
          <a href="/datenschutz" className="hover:text-gray-300 transition-colors">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Assemble final `app/page.tsx`**

```typescript
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutEwa from "@/components/AboutEwa";
import VideoSection from "@/components/VideoSection";
import Pillars from "@/components/Pillars";
import Nutrition from "@/components/Nutrition";
import Studio from "@/components/Studio";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Shop from "@/components/Shop";
import CtaBlock from "@/components/CtaBlock";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBar />
      <AboutEwa />
      <VideoSection />
      <Pillars />
      <Nutrition />
      <Studio />
      <Testimonials />
      <Pricing />
      <Shop />
      <CtaBlock />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 5: Full visual check**

```bash
npm run dev
```

Open http://localhost:3000 and scroll through the entire page. Verify:
- All sections render in correct order
- Images load
- Phone links use `tel:+491702955734`
- Shop cards link to `https://4ewafit.com`
- YouTube video embeds without cookie tracking

- [ ] **Step 6: Commit**

```bash
git add components/Shop.tsx components/CtaBlock.tsx components/Footer.tsx app/page.tsx
git commit -m "feat: shop, CTA block, footer — complete single-page layout"
```

---

## Task 11: Build check + push to GitHub

**Files:** none new

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected: `✓ Compiled successfully` with no TypeScript errors and no ESLint errors.
If errors appear, fix them before continuing.

- [ ] **Step 2: Add `.gitignore` entry for brainstorm files**

Append to `.gitignore`:
```
.superpowers/
```

- [ ] **Step 3: Final commit**

```bash
git add .gitignore
git commit -m "chore: ignore .superpowers brainstorm artifacts"
```

- [ ] **Step 4: Push to GitHub**

```bash
git push -u origin main
```

Expected: Branch pushed to `git@github.com:robinboehm/4ewafit.de.git`.

---

## Task 12: Vercel deployment

- [ ] **Step 1:** Go to [vercel.com](https://vercel.com) → "Add New Project" → import `robinboehm/4ewafit.de` from GitHub
- [ ] **Step 2:** Framework preset: **Next.js** (auto-detected)
- [ ] **Step 3:** No environment variables needed — click **Deploy**
- [ ] **Step 4:** Once deployed, add custom domain `4ewafit.de` in Vercel project settings → Domains
- [ ] **Step 5:** Update DNS at your registrar: add `CNAME www → cname.vercel-dns.com` and `A @ → 76.76.21.21`
