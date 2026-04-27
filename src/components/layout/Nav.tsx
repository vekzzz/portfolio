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
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 border-b"
      style={{
        backdropFilter: 'saturate(140%) blur(10px)',
        WebkitBackdropFilter: 'saturate(140%) blur(10px)',
        background: 'color-mix(in oklab, var(--bg) 82%, transparent)',
        borderColor: 'var(--line)',
      }}
    >
      <div className="max-w-[1360px] mx-auto px-10 max-md:px-5 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5 font-mono font-semibold" style={{ letterSpacing: '-0.01em' }}>
          <span
            className="w-[22px] h-[22px] grid place-items-center text-xs font-semibold rounded-[4px]"
            style={{ background: 'var(--ink)', color: 'var(--bg)', fontFamily: 'var(--font-mono)' }}
          >
            V
          </span>
          <span>veks.dev</span>
        </a>

        <div className="hidden md:flex gap-7 font-mono text-[13px]" style={{ color: 'var(--muted)' }}>
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative transition-colors duration-200 group"
              style={{ color: 'inherit' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: 'var(--accent)' }}>
                {'// '}
              </span>
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3.5 font-mono text-[13px]">
          <button
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 border rounded-full px-2.5 py-1.5 text-xs transition-all duration-200"
            style={{ borderColor: 'var(--line)', color: 'var(--muted)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--ink)'
              e.currentTarget.style.color = 'var(--ink)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--line)'
              e.currentTarget.style.color = 'var(--muted)'
            }}
            aria-label="Toggle theme"
          >
            <span className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
            <span>{theme}</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs rounded-full px-3.5 py-2 font-mono transition-transform duration-200 hover:-translate-y-px"
            style={{ background: 'var(--ink)', color: 'var(--bg)' }}
          >
            hire me{' '}
            <span style={{ opacity: 0.7 }}>↗</span>
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
