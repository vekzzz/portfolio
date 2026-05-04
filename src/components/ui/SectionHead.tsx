interface SectionHeadProps {
  index: string
  label: string
  title: React.ReactNode
}

export function SectionHead({ index, label, title }: SectionHeadProps) {
  return (
    <div className="grid grid-cols-[200px_1fr] gap-12 mb-16 items-baseline max-md:grid-cols-1 max-md:gap-3">
      <div className="flex gap-2.5 items-center font-mono text-xs text-muted">
        <span style={{ color: 'var(--ink)' }}>{index}</span>
        <span className="w-6 h-px" style={{ background: 'var(--line-2)' }} />
        <span>{label}</span>
      </div>
      <h2
        className="font-sans font-medium leading-[1.02] m-0"
        style={{
          fontSize: 'clamp(36px, 4.5vw, 64px)',
          letterSpacing: '-0.035em',
        }}
      >
        {title}
      </h2>
    </div>
  )
}
