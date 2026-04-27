export function Footer() {
  return (
    <footer className="py-10 font-mono text-xs" style={{ color: 'var(--muted)' }}>
      <div className="max-w-[1360px] mx-auto px-10 max-md:px-5 flex justify-between items-center gap-6 flex-wrap">
        <span>© 2026 Veks Dev — built from scratch, hand-rolled CSS, no frameworks.</span>
        <span>
          back to{' '}
          <a
            href="#top"
            className="transition-colors duration-200"
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
