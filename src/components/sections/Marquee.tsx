import { marqueeItems } from '@/data/portfolio'

export function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems]

  return (
    <div className="border-t border-b overflow-hidden" style={{ borderColor: 'var(--line)', background: 'var(--bg-2)' }}>
      <div className="flex gap-12 py-4 font-mono text-[13px] whitespace-nowrap animate-marquee" style={{ color: 'var(--muted)' }}>
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3">
            {item}
            <span style={{ color: 'var(--accent)' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
