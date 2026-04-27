import { FadeIn } from '@/components/ui/FadeIn'

const contactInfo = [
  { k: 'email', v: 'hello@veks.dev', href: 'mailto:hello@veks.dev' },
  { k: 'cal', v: 'cal.com/veks', href: '#' },
  { k: 'github', v: 'github.com/veks', href: '#' },
  { k: 'x / twitter', v: '@veksdev', href: '#' },
]

export function Contact() {
  return (
    <section id="contact" style={{ padding: '120px 0' }}>
      <div className="max-w-[1360px] mx-auto px-10 max-md:px-5">
        <FadeIn>
          <div
            className="border rounded-[20px] relative overflow-hidden grid grid-cols-[1.2fr_1fr] gap-16 items-center max-md:grid-cols-1 max-md:gap-8"
            style={{ padding: '72px 64px', background: 'var(--surface)', borderColor: 'var(--line)' }}
          >
            <div
              className="absolute pointer-events-none"
              style={{
                right: '-80px',
                top: '-80px',
                width: '340px',
                height: '340px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, color-mix(in oklab, var(--accent) 20%, transparent), transparent 70%)',
              }}
            />

            <div className="relative">
              <h2
                className="font-medium leading-[0.98] mb-6 m-0"
                style={{ fontSize: 'clamp(42px, 5vw, 80px)', letterSpacing: '-0.035em' }}
              >
                Let's build something{' '}
                <em style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>
                  worth shipping.
                </em>
              </h2>
              <p className="text-base leading-[1.6] mb-8 m-0 max-w-[480px]" style={{ color: 'var(--muted)' }}>
                Booking discovery calls for projects starting May 2026. Drop a line — I reply inside 24 hours, usually faster.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="mailto:hello@veks.dev"
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
                  hello@veks.dev
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full font-mono text-[13px] border transition-all duration-200 hover:-translate-y-px"
                  style={{ color: 'var(--ink)', borderColor: 'var(--line)', letterSpacing: '-0.01em' }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--ink)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--line)')}
                >
                  Book a call
                </a>
              </div>
            </div>

            <div className="relative grid gap-5 font-mono text-[13px]">
              {contactInfo.map(({ k, v, href }) => (
                <div
                  key={k}
                  className="grid gap-4 py-4 border-t"
                  style={{ gridTemplateColumns: '80px 1fr', borderColor: 'var(--line)' }}
                >
                  <span style={{ color: 'var(--muted)' }}>{k}</span>
                  <a
                    href={href}
                    className="border-b border-transparent transition-all duration-200"
                    style={{ color: 'var(--ink)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent)'
                      e.currentTarget.style.color = 'var(--accent)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'transparent'
                      e.currentTarget.style.color = 'var(--ink)'
                    }}
                  >
                    {v}
                  </a>
                </div>
              ))}
              <div className="border-b" style={{ borderColor: 'var(--line)' }} />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
