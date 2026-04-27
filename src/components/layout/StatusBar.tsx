export function StatusBar() {
  return (
    <div
      className="border-b font-mono text-[11px] text-muted"
      style={{ borderColor: 'var(--line)', background: 'var(--bg-2)' }}
    >
      <div className="max-w-[1360px] mx-auto px-10 max-md:px-5 grid grid-cols-3 gap-6 h-7 items-center">
        <span>loc · remote / UTC+1 · en_US</span>
        <span className="text-center flex items-center justify-center gap-2" style={{ color: 'var(--ink)' }}>
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse-dot"
            style={{ background: '#31c48d', boxShadow: '0 0 0 3px color-mix(in oklab, #31c48d 25%, transparent)' }}
          />
          available · booking Q3 · 2026
        </span>
        <span className="text-right">v2.4.0 · commit a7f9c1b</span>
      </div>
    </div>
  )
}
