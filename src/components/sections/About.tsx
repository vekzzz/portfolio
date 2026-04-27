import { FadeIn } from '@/components/ui/FadeIn'

const sideInfo = [
  { k: 'based', v: 'Lisbon, PT — available worldwide (remote, GMT±5)' },
  { k: 'engagement', v: 'Sprint-based contracts, embedded with your team, or project-scoped.' },
  { k: 'past clients', v: 'Seed → Series B startups, design studios, solo founders.' },
]

export function About() {
  return (
    <section id="about" className="border-b" style={{ padding: '120px 0', borderColor: 'var(--line)' }}>
      <div className="max-w-[1360px] mx-auto px-10 max-md:px-5">
        <div className="grid grid-cols-[200px_1fr_360px] gap-16 max-md:grid-cols-1 max-md:gap-8">
          <FadeIn direction="none">
            <div className="flex gap-2.5 items-center font-mono text-xs pt-1" style={{ color: 'var(--muted)' }}>
              <span style={{ color: 'var(--ink)' }}>§ 01</span>
              <span className="w-6 h-px" style={{ background: 'var(--line-2)' }} />
              <span>about</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h2
              className="font-sans font-medium leading-[1.02] mb-7"
              style={{ fontSize: 'clamp(36px, 4.5vw, 64px)', letterSpacing: '-0.035em' }}
            >
              I build web products that feel{' '}
              <em style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>
                considered
              </em>
              , perform under load, and ship on time.
            </h2>
            <p className="text-xl leading-[1.55] mb-6" style={{ letterSpacing: '-0.01em', color: 'var(--ink-2)' }}>
              I'm a freelance web developer with a bias toward{' '}
              <em style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', color: 'var(--accent)' }}>craft</em>
              . I work closest to the interface — turning designs into fast, accessible, and maintainable code — but I'm equally at home wiring up APIs, databases, and infra.
            </p>
            <p className="text-xl leading-[1.55]" style={{ letterSpacing: '-0.01em', color: 'var(--ink-2)' }}>
              The goal isn't the stack. It's the{' '}
              <em style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', color: 'var(--accent)' }}>result</em>
              : products that convert, teams that ship faster, interfaces that make the next person who joins say "wait, this is nice."
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="pl-8" style={{ borderLeft: '1px dashed var(--line)' }}>
              {sideInfo.map(({ k, v }) => (
                <div key={k} className="mb-7">
                  <div className="font-mono text-[11px] mb-2.5 uppercase tracking-[0.05em]" style={{ color: 'var(--muted)' }}>
                    {k}
                  </div>
                  <div className="text-sm leading-[1.5]" style={{ color: 'var(--ink)' }}>
                    {v}
                  </div>
                </div>
              ))}
              <div className="mb-7">
                <div className="font-mono text-[11px] mb-2.5 uppercase tracking-[0.05em]" style={{ color: 'var(--muted)' }}>
                  press
                </div>
                <div className="text-sm leading-[1.5]" style={{ color: 'var(--ink)' }}>
                  <a
                    href="#"
                    className="border-b border-transparent transition-all duration-200"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent)'
                      e.currentTarget.style.color = 'var(--accent)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'transparent'
                      e.currentTarget.style.color = 'var(--ink)'
                    }}
                    style={{ borderColor: 'var(--line)' }}
                  >
                    Sites of the Day × 3
                  </a>{' '}
                  ·{' '}
                  <a
                    href="#"
                    className="border-b transition-all duration-200"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent)'
                      e.currentTarget.style.color = 'var(--accent)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--line)'
                      e.currentTarget.style.color = 'var(--ink)'
                    }}
                    style={{ borderColor: 'var(--line)' }}
                  >
                    Awwwards Honors
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
