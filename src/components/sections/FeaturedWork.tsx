import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHead } from '@/components/ui/SectionHead'
import { Tag } from '@/components/ui/Tag'
import { featuredWork } from '@/data/portfolio'

export function FeaturedWork() {
  return (
    <section id="work" className="border-b" style={{ padding: '120px 0', borderColor: 'var(--line)' }}>
      <div className="max-w-[1360px] mx-auto px-10 max-md:px-5">
        <FadeIn>
          <SectionHead
            index="§ 05"
            label="featured work"
            title={
              <>
                Selected case studies. Each shipped, measured,{' '}
                <em style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>
                  alive
                </em>
                .
              </>
            }
          />
        </FadeIn>

        {featuredWork.map((work, i) => (
          <FadeIn key={work.caseIndex} delay={0.05}>
            <div
              className="grid grid-cols-2 gap-14 items-center py-16 border-t max-md:grid-cols-1 max-md:gap-8"
              style={{ borderColor: 'var(--line)' }}
            >
              <div className={i % 2 === 1 ? 'order-2 max-md:order-none' : ''}>
                <MockVisual visual={work.visual} url={work.url} label={work.label} />
              </div>

              <div className={i % 2 === 1 ? 'order-1 max-md:order-none' : ''}>
                <div className="font-mono text-xs mb-3" style={{ color: 'var(--muted)' }}>
                  {work.caseIndex}
                </div>
                <h3
                  className="font-medium mb-4 m-0 leading-[1.02]"
                  style={{ fontSize: '40px', letterSpacing: '-0.03em' }}
                >
                  {work.title}
                </h3>
                <p className="text-base leading-[1.6] mb-7 m-0 max-w-[480px]" style={{ color: 'var(--muted)' }}>
                  {work.summary}
                </p>

                <div
                  className="grid grid-cols-3 gap-6 py-5 mb-7"
                  style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}
                >
                  {work.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-[28px] font-medium leading-tight" style={{ letterSpacing: '-0.02em' }}>
                        <em style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>
                          {stat.value}
                        </em>
                        {stat.unit}
                      </div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.05em] mt-1" style={{ color: 'var(--muted)' }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {work.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>

                <a
                  href="#"
                  className="font-mono text-[13px] inline-flex items-center gap-2 pb-1 border-b transition-all duration-200"
                  style={{ color: 'var(--ink)', borderColor: 'var(--ink)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent)'
                    e.currentTarget.style.borderColor = 'var(--accent)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--ink)'
                    e.currentTarget.style.borderColor = 'var(--ink)'
                  }}
                >
                  Read case study <span>→</span>
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

function MockVisual({ visual, url, label }: { visual: string; url: string; label: string }) {
  return (
    <div
      className="rounded-[14px] border overflow-hidden relative"
      style={{ aspectRatio: '4/3', background: 'var(--surface)', borderColor: 'var(--line)' }}
    >
      <div
        className="h-7 flex items-center gap-1.5 px-3"
        style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--line)' }}
      >
        {['', '', ''].map((_, i) => (
          <i key={i} className="w-2 h-2 rounded-full block not-italic" style={{ background: 'var(--line-2)' }} />
        ))}
        <div
          className="flex-1 ml-3 h-4 rounded font-mono text-[10px] flex items-center px-2 border"
          style={{ background: 'var(--bg)', borderColor: 'var(--line)', color: 'var(--muted)' }}
        >
          {url}
        </div>
      </div>

      <div className="absolute inset-7 top-[28px] p-6">
        {visual === 'dashboard' && <DashboardMock />}
        {visual === 'editor' && <EditorMock />}
        {visual === 'checkout' && <CheckoutMock />}
      </div>

      <div
        className="absolute bottom-3 left-3 font-mono text-[10px] px-2 py-1 rounded border"
        style={{ color: 'var(--muted)', background: 'var(--bg)', borderColor: 'var(--line)' }}
      >
        {label}
      </div>
    </div>
  )
}

function DashboardMock() {
  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-14 rounded-md border relative overflow-hidden"
            style={{ background: 'var(--bg-2)', borderColor: 'var(--line)' }}
          >
            <span
              className="absolute left-2.5 top-2.5 w-2/5 h-2 rounded-sm block"
              style={{ background: 'var(--line-2)' }}
            />
            <span
              className="absolute left-2.5 bottom-2.5 w-3/5 h-3 rounded-sm block"
              style={{ background: i === 0 ? 'var(--accent)' : 'var(--ink-2)' }}
            />
          </div>
        ))}
      </div>
      <div className="flex-1 grid grid-cols-8 gap-1.5 items-end">
        {[40, 62, 88, 54, 70, 95, 48, 76].map((h, i) => (
          <div
            key={i}
            className="rounded-t-sm"
            style={{
              height: `${h}%`,
              background: i === 2 || i === 5 ? 'var(--accent)' : 'var(--ink-2)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

function EditorMock() {
  const lines = [
    { ln: '01', content: <span style={{ color: 'var(--muted)' }}>{'// northlight.studio · type'}</span> },
    {
      ln: '02',
      content: (
        <>
          <span style={{ color: 'var(--accent)' }}>export const</span> scale <span style={{ color: 'var(--accent)' }}>=</span> {'{'}
        </>
      ),
    },
    {
      ln: '03',
      content: (
        <>
          &nbsp;&nbsp;display: <span style={{ color: '#31a36d' }}>'clamp(56px, 8vw, 124px)'</span>,
        </>
      ),
    },
    {
      ln: '04',
      content: (
        <>
          &nbsp;&nbsp;title: <span style={{ color: '#31a36d' }}>'clamp(36px, 4.5vw, 64px)'</span>,
        </>
      ),
    },
    {
      ln: '05',
      content: (
        <>
          &nbsp;&nbsp;body: <span style={{ color: '#31a36d' }}>'17px / 1.55'</span>,
        </>
      ),
    },
    { ln: '06', content: <>{'}'}</> },
    { ln: '07', content: <span style={{ color: 'var(--muted)' }}>{'// shipped in 14 days'}</span> },
  ]

  return (
    <div className="font-mono text-[11px] leading-[1.7]" style={{ color: 'var(--ink)' }}>
      {lines.map(({ ln, content }) => (
        <div key={ln} className="flex">
          <span
            className="inline-block w-6 mr-4 text-right"
            style={{ color: 'var(--muted)', opacity: 0.6 }}
          >
            {ln}
          </span>
          {content}
        </div>
      ))}
    </div>
  )
}

function CheckoutMock() {
  const lines = [
    { label: 'subtotal', value: '$124.00', bold: false },
    { label: 'shipping', value: 'free', bold: false },
    { label: 'tax', value: '$11.88', bold: false },
    { label: 'total', value: '$135.88', bold: true },
  ]

  return (
    <div className="grid gap-2.5">
      {lines.map(({ label, value, bold }) => (
        <div
          key={label}
          className="flex justify-between font-mono text-[11px] px-3 py-2 rounded-md border"
          style={{ background: 'var(--bg-2)', borderColor: 'var(--line)', color: 'var(--ink)' }}
        >
          <span style={{ fontWeight: bold ? 500 : 400 }}>{label}</span>
          <span style={{ color: bold ? 'var(--accent)' : 'var(--ink)', fontWeight: bold ? 500 : 400 }}>
            {value}
          </span>
        </div>
      ))}
      <div
        className="mt-1.5 h-9 rounded-lg grid place-items-center font-mono text-[11px] tracking-wide"
        style={{ background: 'var(--ink)', color: 'var(--bg)' }}
      >
        pay now · apple pay
      </div>
    </div>
  )
}
