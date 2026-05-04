import { FadeIn, Stagger, staggerChild } from '@/components/ui/FadeIn'
import { SectionHead } from '@/components/ui/SectionHead'
import { services } from '@/data/portfolio'
import { motion } from 'framer-motion'

const icons: Record<string, React.ReactNode> = {
  grid: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
    </svg>
  ),
  browser: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 5h18v14H3z" />
      <path d="M3 9h18M7 13h6" />
    </svg>
  ),
  'circle-plus': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4v16M4 12h16" />
    </svg>
  ),
  'trending-up': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  ),
}

export function Services() {
  return (
    <section id="services" className="border-b" style={{ padding: '96px 0', borderColor: 'var(--line)' }}>
      <div className="max-w-[1360px] mx-auto px-14 max-md:px-5">
        <FadeIn>
          <SectionHead
            index="§ 04"
            label="services"
            title={
              <>
                Four ways to work{' '}
                <em style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>
                  together
                </em>
                .
              </>
            }
          />
        </FadeIn>

        <Stagger
          className="grid grid-cols-2 max-md:grid-cols-1"
          style={{
            gap: '1px',
            background: 'var(--line)',
            border: '1px solid var(--line)',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          {services.map((svc) => (
            <motion.div
              key={svc.index}
              variants={staggerChild}
              className="transition-colors duration-200"
              style={{ padding: '36px 32px', background: 'var(--bg)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--surface)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg)')}
            >
              <div className="flex justify-between items-start" style={{ marginBottom: '36px' }}>
                <div
                  className="font-mono text-[10px] uppercase"
                  style={{ letterSpacing: '0.08em', color: 'var(--muted)' }}
                >
                  {svc.index}
                </div>
                <div
                  className="w-11 h-11 border rounded-[8px] grid place-items-center"
                  style={{ borderColor: 'var(--line-2)', background: 'var(--bg-2)', color: 'var(--ink-2)' }}
                >
                  {icons[svc.icon]}
                </div>
              </div>

              <h3
                className="font-medium m-0 mb-2.5"
                style={{ fontSize: '22px', letterSpacing: '-0.025em' }}
              >
                {svc.title}
              </h3>
              <p
                className="text-[13px] leading-[1.65] m-0"
                style={{ color: 'var(--muted)', marginBottom: '20px' }}
              >
                {svc.description}
              </p>

              <div
                className="font-mono text-[11px] grid gap-1.5 pt-4"
                style={{ borderTop: '1px dashed var(--line-2)', color: 'var(--ink-2)' }}
              >
                {svc.features.map((feat) => (
                  <span key={feat}>
                    <span style={{ color: 'var(--accent)' }}>→ </span>
                    {feat}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
