import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  return (
    <header
      id="top"
      className="relative border-b overflow-hidden"
      style={{ padding: '80px 0 40px', borderColor: 'var(--line)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.5,
          backgroundImage: `
            linear-gradient(to right, var(--line) 1px, transparent 1px),
            linear-gradient(to bottom, var(--line) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at 70% 20%, #000 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 70% 20%, #000 20%, transparent 70%)',
        }}
      />

      <div className="max-w-[1360px] mx-auto px-10 max-md:px-5 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-[1fr_420px] gap-16 items-start max-md:grid-cols-1 max-md:gap-8"
        >
          <div>
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 font-mono text-xs mb-7" style={{ color: 'var(--muted)' }}>
              <span className="border rounded-full px-2.5 py-1" style={{ borderColor: 'var(--line)', color: 'var(--ink)' }}>
                VEKS / 01
              </span>
              <span style={{ opacity: 0.4 }}>/</span>
              <span>portfolio — 2026</span>
              <span style={{ opacity: 0.4 }}>/</span>
              <span>freelance web developer</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-sans font-medium m-0 mb-7"
              style={{
                fontSize: 'clamp(56px, 8vw, 124px)',
                lineHeight: 0.92,
                letterSpacing: '-0.045em',
                color: 'var(--ink)',
              }}
            >
              <span className="block">Full-stack</span>
              <span className="block">
                engineer{' '}
                <em style={{ fontFamily: 'Instrument Serif, serif', fontWeight: 400, fontStyle: 'italic', color: 'var(--accent)', letterSpacing: '-0.02em' }}>
                  crafting
                </em>
              </span>
              <span className="block">
                interfaces{' '}
                <span
                  className="font-mono font-normal"
                  style={{ color: 'var(--muted)', fontSize: '0.55em', verticalAlign: '0.25em', letterSpacing: '-0.02em' }}
                >
                  [ with taste ]
                </span>
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="flex gap-3 flex-wrap mt-9">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full font-mono text-[13px] transition-all duration-200 hover:-translate-y-px"
                style={{ background: 'var(--ink)', color: 'var(--bg)', letterSpacing: '-0.01em' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent)'
                  e.currentTarget.style.color = 'var(--accent-ink)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--ink)'
                  e.currentTarget.style.color = 'var(--bg)'
                }}
              >
                Start a project
                <ArrowRight />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full font-mono text-[13px] border transition-all duration-200 hover:-translate-y-px"
                style={{ background: 'transparent', color: 'var(--ink)', borderColor: 'var(--line)', letterSpacing: '-0.01em' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--ink)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--line)')}
              >
                <PlayCircle />
                View selected work
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mt-10 pt-8 max-w-[720px] max-md:grid-cols-1"
              style={{ borderTop: '1px dashed var(--line)' }}
            >
              {[
                {
                  k: '01 — Focus',
                  v: (
                    <>
                      Product engineering for <b className="font-semibold">ambitious startups</b> &amp; design-led teams.
                    </>
                  ),
                },
                {
                  k: '02 — Stack',
                  v: <>TypeScript · React · Next.js · Node · Postgres · Three.js</>,
                },
                {
                  k: '03 — Since',
                  v: (
                    <>
                      <b className="font-semibold">6 years</b> shipping to production. 40+ projects. 0 abandoned.
                    </>
                  ),
                },
              ].map(({ k, v }) => (
                <div key={k}>
                  <div className="font-mono text-[11px] mb-2 uppercase tracking-wide" style={{ color: 'var(--muted)' }}>
                    {k}
                  </div>
                  <div className="text-[15px] leading-[1.4]" style={{ color: 'var(--ink)' }}>
                    {v}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.aside
            variants={itemVariants}
            className="relative border rounded-[14px] p-3.5 max-md:max-w-[320px]"
            style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}
          >
            <div
              className="absolute inset-0 rounded-[14px] pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, transparent 60%, color-mix(in oklab, var(--accent) 35%, transparent))',
                opacity: 0.6,
              }}
            />
            <div
              className="rounded-lg relative overflow-hidden grid place-items-center"
              style={{
                aspectRatio: '4/5',
                background: `
                  repeating-linear-gradient(135deg, color-mix(in oklab, var(--ink) 5%, transparent) 0 2px, transparent 2px 10px),
                  var(--bg-2)
                `,
              }}
            >
              <div
                className="font-mono text-[11px] border border-dashed px-2.5 py-1.5 rounded-md"
                style={{ color: 'var(--muted)', borderColor: 'var(--line-2)', background: 'var(--surface)' }}
              >
                portrait · 4:5 · b&w
              </div>
            </div>
            <div className="flex justify-between items-center pt-2.5 pb-0.5 px-1 font-mono text-[11px]" style={{ color: 'var(--muted)' }}>
              <span className="flex items-center gap-2" style={{ color: 'var(--ink)' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#31c48d' }} />
                available · may
              </span>
              <span>veks.dev/cv</span>
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </header>
  )
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  )
}

function PlayCircle() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8l6 4-6 4V8z" fill="currentColor" stroke="none" />
    </svg>
  )
}
