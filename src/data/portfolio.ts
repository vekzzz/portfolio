export const skills = [
  {
    category: 'frontend',
    index: '01',
    items: [
      { name: 'TypeScript', level: 'expert' },
      { name: 'React / Next', level: 'expert' },
      { name: 'Tailwind / CSS', level: 'expert' },
      { name: 'Framer Motion', level: 'strong' },
      { name: 'Three.js', level: 'strong' },
    ],
  },
  {
    category: 'backend',
    index: '02',
    items: [
      { name: 'Node / Bun', level: 'expert' },
      { name: 'Postgres', level: 'expert' },
      { name: 'Redis', level: 'strong' },
      { name: 'tRPC / GraphQL', level: 'strong' },
      { name: 'Go', level: 'working' },
    ],
  },
  {
    category: 'infra',
    index: '03',
    items: [
      { name: 'Vercel / Fly', level: 'expert' },
      { name: 'AWS / Cloudflare', level: 'strong' },
      { name: 'Docker', level: 'strong' },
      { name: 'Terraform', level: 'working' },
      { name: 'CI / GitHub Actions', level: 'expert' },
    ],
  },
  {
    category: 'craft',
    index: '04',
    items: [
      { name: 'Design systems', level: 'expert' },
      { name: 'Figma → code', level: 'expert' },
      { name: 'Performance', level: 'expert' },
      { name: 'Accessibility', level: 'strong' },
      { name: 'Motion design', level: 'strong' },
    ],
  },
]

export const experience = [
  {
    period: '2024 →',
    duration: 'present',
    role: 'Independent Developer',
    company: 'self-employed / veks.dev',
    description:
      'Partnering with venture-backed startups and studios. Lead engineering on marketing sites, internal tools, and bespoke product surfaces. Typical engagement: 6–12 weeks, embedded.',
    tags: ['Next.js', 'Postgres', 'Motion'],
  },
  {
    period: '2022',
    duration: '—2024',
    role: 'Senior Frontend Engineer',
    company: 'Ravine Labs — Series B fintech',
    description:
      'Led the design-systems team (4 eng). Shipped the v3 dashboard used by 80k+ traders daily. Cut TTI by 62% and improved Lighthouse from 71 → 98.',
    tags: ['React', 'Design Systems', 'Perf'],
  },
  {
    period: '2020',
    duration: '—2022',
    role: 'Full-stack Engineer',
    company: 'Meridian Studio — product agency',
    description:
      'Delivered twenty-something client projects end-to-end: from Figma handoff to production infra. Worked across Shopify, Sanity, Prismic, and custom stacks.',
    tags: ['Shopify', 'Sanity', 'Node'],
  },
  {
    period: '2019',
    duration: '—2020',
    role: 'Junior Developer',
    company: 'Kite & Co. — early-stage startup',
    description: "First engineering hire. Built the MVP. Learned what happens when you skip tests (don't).",
    tags: ['Vue', 'Firebase'],
  },
]

export const services = [
  {
    index: '01 / Product engineering',
    title: 'Build the thing, properly.',
    description:
      'Greenfield products and new features on existing codebases. TypeScript-first. Tests where it counts. Ship weekly.',
    features: ['Full-stack Next.js / tRPC', 'Database design & migrations', 'Auth, billing, integrations'],
    icon: 'grid',
  },
  {
    index: '02 / Marketing sites',
    title: "Sites that convert and don't embarrass you.",
    description:
      'Design-forward landing pages and brand sites. CMS-backed, 100/100 Lighthouse, custom motion where it earns its place.',
    features: ['Figma → production in weeks', 'Sanity / Contentlayer / MDX', 'Webgl / scroll choreography'],
    icon: 'browser',
  },
  {
    index: '03 / Design systems',
    title: 'Primitives your team can actually use.',
    description:
      'Token pipelines, component libraries, accessibility baked in, Storybook + docs. The kind future-you will thank present-you for.',
    features: ['Figma variables ↔ code tokens', 'Headless + themeable components', 'Docs, tests, changelog'],
    icon: 'circle-plus',
  },
  {
    index: '04 / Perf & audits',
    title: 'Make the slow thing fast.',
    description:
      'Perf audits for sites already in production. I find the bottlenecks, propose fixes, and optionally ship them with your team.',
    features: ['Core Web Vitals to green', 'Bundle & render-path audit', 'DB + API latency reviews'],
    icon: 'trending-up',
  },
]

export const featuredWork = [
  {
    caseIndex: 'CASE / 01 — fintech · 2024',
    url: 'ravine.app/dashboard',
    label: 'ravine.app · trading dashboard',
    title: 'A trading dashboard that 80k traders use every day.',
    summary:
      "Led the v3 rebuild of Ravine's flagship product. Migrated from CRA to Next App Router, rebuilt the charting layer with deck.gl, and shipped a cohesive design system used across four surfaces.",
    stats: [
      { value: '62', unit: '%', label: 'faster TTI' },
      { value: '98', unit: '/100', label: 'lighthouse' },
      { value: '80', unit: 'k', label: 'daily users' },
    ],
    tags: ['Next.js', 'TypeScript', 'deck.gl', 'Design Systems'],
    visual: 'dashboard',
  },
  {
    caseIndex: 'CASE / 02 — studio · 2024',
    url: 'northlight.studio',
    label: 'northlight · brand site',
    title: 'A brand site that won Site of the Day (twice).',
    summary:
      "Partnered with Northlight's creative director to rebuild their studio site in 14 days — custom grid system, WebGL type distortion, editorial case studies driven by Sanity.",
    stats: [
      { value: '14', unit: 'd', label: 'build time' },
      { value: '3', unit: '×', label: 'awards' },
      { value: '2.4', unit: 's', label: 'avg session' },
    ],
    tags: ['Next.js', 'Sanity', 'WebGL', 'GSAP'],
    visual: 'editor',
  },
  {
    caseIndex: 'CASE / 03 — commerce · 2023',
    url: 'orbit.shop / checkout',
    label: 'orbit · commerce checkout',
    title: 'Rebuilt a checkout flow. Conversion up 34%.',
    summary:
      "Orbit's legacy Shopify checkout was hemorrhaging mobile revenue. Replaced it with a custom Next + Shopify Hydrogen flow — one-page, keyboard-perfect, Apple/Google Pay first.",
    stats: [
      { value: '+34', unit: '%', label: 'conversion' },
      { value: '−47', unit: '%', label: 'drop-off' },
      { value: '$2.1', unit: 'M', label: 'est. arr lift' },
    ],
    tags: ['Hydrogen', 'Shopify', 'Stripe'],
    visual: 'checkout',
  },
]

export const projects = [
  {
    title: 'Kern — type scale explorer',
    year: "'26",
    description: 'An in-browser tool for previewing fluid type scales across viewports. 12k+ monthly users.',
    tags: ['React', 'OSS'],
    thumbLabel: 'thumb · type-tool ui',
  },
  {
    title: 'Sonar — audio waveform kit',
    year: "'25",
    description:
      'Open-source React + WebAudio components for building custom players. Used by 200+ projects.',
    tags: ['WebAudio', 'OSS'],
    thumbLabel: 'thumb · wave visualizer',
  },
  {
    title: 'Inkwell — markdown journal',
    year: "'24",
    description: 'A local-first markdown journaling app. Built in a weekend as a Tauri + SolidJS experiment.',
    tags: ['Tauri', 'Solid'],
    thumbLabel: 'thumb · markdown editor',
  },
]

export const marqueeItems = [
  'TypeScript',
  'React · Next.js',
  'Node · Bun · Deno',
  'Postgres · Redis',
  'Three.js · WebGL',
  'Figma to Code',
  'Design systems',
  'Performance',
]
