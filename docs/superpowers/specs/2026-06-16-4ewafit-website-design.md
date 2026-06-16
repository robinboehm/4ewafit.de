# 4EWAFIT Website — Design Spec

**Date:** 2026-06-16  
**Status:** Approved

---

## Overview

Rebuild of 4ewafit.de as a modern, conversion-optimized one-page website for Ewa Gdaniec, Personal Trainerin in Berlin Friedrichshain. Primary goal: get new (beginner) clients to call Ewa directly.

---

## Goals

- **Primary CTA:** Phone call to +49 170 2955734
- **Target audience:** Einsteiger:innen — people new to personal training, possibly unsure if it's right for them
- **Design direction:** Bold Energy — white background, red-orange (#ff3b1e) accents, high contrast, strong CTAs
- **Technology:** Modern static site (Next.js or plain HTML/CSS), deployable to GitHub Pages or Vercel

---

## Tech Stack

- **Framework:** Next.js 14 (App Router) with TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (via GitHub repo `robinboehm/4ewafit.de`)
- **No CMS** — content is static, hardcoded in German

---

## Page Structure (single page, scroll)

1. **Navigation** — sticky, logo left, nav links center, "Jetzt anrufen" CTA button right
2. **Hero** — full-width photo, dark overlay, headline, phone number as primary CTA, trust indicators
3. **Trust Bar** — qualifications strip
4. **Über Ewa** — photo + text, qualifications tags, phone CTA
5. **Video** — YouTube embed (no-cookie) of https://www.youtube.com/watch?v=kWENAw96ETE
6. **Drei Säulen** — dark section: Training, Ernährung, Mentale Stärke
7. **Ernährungsberatung** — text + photo section
8. **Mein Studio** — photo grid + address
9. **Kundenstimmen** — 4 review cards + total count
10. **Preise** — 2 pricing cards (10er Karte 110€/h, Probetraining 80€)
11. **Shop** — 3 product cards linking to 4ewafit.com
12. **CTA Block** — full red section, large phone number
13. **Footer** — logo, address, Impressum/Datenschutz links

---

## Assets (from existing sites)

| Asset | URL |
|---|---|
| Logo | `https://image.jimcdn.com/…/ia00362cab215978f/…image.png` |
| Ewa Profilfoto | `https://image.jimcdn.com/…/iebee53955cdfde2c/…image.jpg` |
| Hero Background | `https://image.jimcdn.com/…/i81fb267988e97c16/…image.jpg` |
| Ernährung Foto | `https://image.jimcdn.com/…/i0d85bf7d9c1b37e3/…image.jpg` |
| Studio Foto 1 | `https://image.jimcdn.com/…/i26b89f91b9f32765/…image.jpg` |
| Studio Foto 2 | `https://image.jimcdn.com/…/i43bb1210dfa4f75e/…image.jpg` |
| Studio Foto 3 | `https://image.jimcdn.com/…/i637d2f4d14d0267e/…image.jpg` |
| Studio Foto 4 | `https://image.jimcdn.com/…/idb3ffc978a5b652d/…image.jpg` |
| Shop Produkt 1 | `https://4ewafit.com/cdn/shop/files/IMG_83632.jpg` |
| Shop Produkt 2 | `https://4ewafit.com/cdn/shop/files/Kopie_von_…jpg` |
| Shop Produkt 3 | `https://4ewafit.com/cdn/shop/files/42EA9593-…png` |

---

## Content

### Contact
- Phone: +49 170 2955734
- Email: kontakt@4ewafit.de
- Address: Jungstraße 24, 10247 Berlin

### Hero Headline
> Dein erster Schritt. Jetzt.

### About Text
Ewa, 46 Jahre, Mutter zweier Kinder, seit 16 Jahren leidenschaftlich im Fitness. 15 Jahre selbstständig. Ganzheitlicher Ansatz: Training + Ernährung + Mentale Stärke.

### Qualifications
Fitnesstrainerin A & B, Ernährungsberaterin, Resilienz-Trainerin, Functional Trainer A & B, Pilates, Boot Camp Trainer

### Reviews (4 of 50)
1. Torsten S. (Okt 2025) — "Vom Couch-Potato in jemanden, der sich auf jede Einheit freut."
2. Kristin F. (Nov 2024) — "Erste Ergebnisse nach zwei Monaten. Berliner Geheimtipp."
3. Olivia N. (Jan 2026) — "Leidenschaft und Professionalität sofort spürbar."
4. Manja W. (Okt 2025) — "Professionell, entspannte Atmosphäre, absolut empfehlenswert."

### Pricing
- Probetraining: 80€ / 60 Min
- Einzelstunde: 125€ / 60 Min
- 10er Karte: 110€/Std. (10 × 60 Min)

### Shop Products
- Kaktusfeigenkernöl — 34,90€ (Beauty/Skincare)
- Stark & Sicher Zuhause Trainieren — 39,00€ (Training-Kurs)
- 30 Minuten zu deinem Ziel — 59,00€ (Online Coaching)

---

## Design Tokens

| Token | Value |
|---|---|
| Primary red | `#ff3b1e` |
| Dark bg | `#111111` |
| Dark card bg | `#1a1a1a` |
| Text primary | `#111111` |
| Text muted | `#666666` |
| Border | `#eeeeee` |
| Font | System UI / -apple-system |

---

## Non-Goals

- No blog
- No contact form (phone only)
- No CMS
- No multi-language
- No animations beyond hover states
