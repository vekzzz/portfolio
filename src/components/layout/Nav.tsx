import { motion } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'

const navLinks = [
  { href: '#about', label: 'about' },
  { href: '#work', label: 'work' },
  { href: '#stack', label: 'stack' },
  { href: '#services', label: 'services' },
  { href: '#projects', label: 'projects' },
]

export function Nav() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.nav
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 border-b"
      style={{
        height: '52px',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        background: 'color-mix(in oklab, var(--bg) 90%, transparent)',
        borderColor: 'var(--line)',
      }}
    >
      <div className="max-w-[1360px] mx-auto px-14 max-md:px-5 flex items-center justify-between h-full">
        <a
          href="#"
          className="flex items-center gap-2.5 font-mono text-[12px]"
          style={{ letterSpacing: '-0.01em', color: 'var(--ink)' }}
        >
          <span
            className="w-[22px] h-[22px] grid place-items-center text-[11px] font-semibold rounded-[3px]"
            style={{ background: 'var(--ink)', color: 'var(--bg)' }}
          >
            V
          </span>
          veks.dev
        </a>

        <div className="hidden md:flex gap-9 font-mono text-[11px]" style={{ letterSpacing: '0.02em', color: 'var(--muted)' }}>
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative transition-colors duration-150 group"
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            >
              <span
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                style={{ color: 'var(--accent)' }}
              >
                {'// '}
              </span>
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="font-mono text-[10px] border px-2.5 py-1 transition-all duration-150"
            style={{ borderColor: 'var(--line)', color: 'var(--muted)', letterSpacing: '0.06em' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--line-2)'
              e.currentTarget.style.color = 'var(--ink-2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--line)'
              e.currentTarget.style.color = 'var(--muted)'
            }}
            aria-label="Toggle theme"
          >
            {theme}
          </button>

          <a
            href="#contact"
            className="font-mono text-[11px] border transition-all duration-150"
            style={{
              padding: '7px 18px',
              border: '1px solid var(--accent)',
              color: 'var(--accent)',
              letterSpacing: '0.04em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent)'
              e.currentTarget.style.color = 'var(--bg)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--accent)'
            }}
          >
            hire me ↗
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
