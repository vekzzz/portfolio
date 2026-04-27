# Veks Dev — Portfolio

Personal portfolio for a full-stack web developer. Built with Vite, React, TypeScript, Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **Vite 6** — build tool
- **React 18 + TypeScript** — UI
- **Tailwind CSS v4** — styling with CSS custom property theming
- **Framer Motion 11** — scroll-triggered animations and micro-interactions

## Features

- Light / dark mode (follows system, toggle in nav)
- Scroll-reveal animations with staggered children
- Sections: Hero, Marquee, About, Stack, Experience, Services, Featured Work, Projects, Contact
- Fully responsive
- All content centralized in `src/data/portfolio.ts`

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── layout/       # Nav, StatusBar, Footer
│   ├── sections/     # Hero, About, Stack, Experience, Services, FeaturedWork, Projects, Contact, Marquee
│   └── ui/           # FadeIn, Stagger, Tag, SectionHead
├── data/
│   └── portfolio.ts  # All content — edit this to personalize
├── hooks/
│   └── useTheme.ts
└── styles/
    └── globals.css
```
