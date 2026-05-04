export function Footer() {
  return (
    <footer
      className="relative z-[1] font-mono text-[10px] uppercase border-t"
      style={{ letterSpacing: '0.06em', color: 'var(--muted)', borderColor: 'var(--line)' }}
    >
      <div className="max-w-[1360px] mx-auto px-14 max-md:px-5 flex justify-between items-center gap-6 py-8 flex-wrap">
        <span>© 2026 Veks Dev — built from scratch, hand-rolled CSS, no frameworks.</span>
        <span>
          AMBER ×{' '}
          <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>ICE</em>
        </span>
        <span>
          back to{' '}
          <a
            href="#top"
            className="transition-colors duration-150"
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
          >
            top ↑
          </a>
        </span>
      </div>
    </footer>
  )
}
