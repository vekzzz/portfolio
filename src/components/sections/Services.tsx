import { FadeIn, Stagger, staggerChild } from '@/components/ui/FadeIn'
import { SectionHead } from '@/components/ui/SectionHead'
import { services } from '@/data/portfolio'
import { motion } from 'framer-motion'

const icons: Record<string, React.ReactNode> = {
  grid: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
    </svg>
  ),
  browser: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 5h18v14H3z" />
      <path d="M3 9h18M7 13h6" />
    </svg>
  ),
  'circle-plus': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4v16M4 12h16" />
    </svg>
  ),
  'trending-up': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  ),
}

export function Services() {
  return (
    <section id="services" className="border-b" style={{ padding: '120px 0', borderColor: 'var(--line)' }}>
      <div className="max-w-[1360px] mx-auto px-10 max-md:px-5">
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

        <Stagger className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          {services.map((svc) => (
            <motion.div
              key={svc.index}
              variants={staggerChild}
              className="relative overflow-hidden rounded-[14px] border p-8 transition-all duration-[250ms]"
              style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}
              whileHover={{ borderColor: 'var(--ink)' } as Record<string, string>}
            >
              <div className="flex justify-between items-start mb-10">
                <div className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
                  {svc.index}
                </div>
                <div
                  className="w-12 h-12 border rounded-[10px] grid place-items-center"
                  style={{ borderColor: 'var(--line)', background: 'var(--bg-2)', color: 'var(--ink)' }}
                >
                  {icons[svc.icon]}
                </div>
              </div>

              <h3 className="text-2xl font-medium mb-2.5 m-0" style={{ letterSpacing: '-0.02em' }}>
                {svc.title}
              </h3>
              <p className="mb-6 text-sm leading-[1.6] m-0" style={{ color: 'var(--muted)' }}>
                {svc.description}
              </p>

              <div
                className="font-mono text-xs grid gap-2 pt-4"
                style={{ borderTop: '1px dashed var(--line)', color: 'var(--ink)' }}
              >
                {svc.features.map((feat) => (
                  <span key={feat} className="flex gap-2.5">
                    <span style={{ color: 'var(--accent)' }}>→</span>
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
