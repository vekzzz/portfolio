import { FadeIn, Stagger, staggerChild } from '@/components/ui/FadeIn'
import { SectionHead } from '@/components/ui/SectionHead'
import { skills } from '@/data/portfolio'
import { motion } from 'framer-motion'

export function Stack() {
  return (
    <section id="stack" className="border-b" style={{ padding: '120px 0', borderColor: 'var(--line)' }}>
      <div className="max-w-[1360px] mx-auto px-14 max-md:px-5">
        <FadeIn>
          <SectionHead
            index="§ 02"
            label="stack"
            title={
              <>
                The tools I reach for — chosen for durability, not{' '}
                <em style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>
                  novelty
                </em>
                .
              </>
            }
          />
        </FadeIn>

        <Stagger className="grid grid-cols-4 border rounded-[14px] overflow-hidden max-md:grid-cols-2" style={{ borderColor: 'var(--line)', background: 'var(--surface)' } as React.CSSProperties}>
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              variants={staggerChild}
              className="p-7 relative transition-colors duration-200 border-r border-b group"
              style={{
                borderColor: 'var(--line)',
                borderRight: (i + 1) % 4 === 0 ? 'none' : undefined,
                borderBottom: i >= skills.length - 4 ? 'none' : undefined,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-2)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.05em] mb-4 flex justify-between" style={{ color: 'var(--muted)' }}>
                <span>{skill.category}</span>
                <span style={{ color: 'var(--accent)' }}>{skill.index}</span>
              </div>
              <ul className="m-0 p-0 list-none">
                {skill.items.map((item, j) => (
                  <li
                    key={item.name}
                    className="font-mono text-[13px] py-1.5 flex justify-between"
                    style={{
                      color: 'var(--ink)',
                      borderBottom: j < skill.items.length - 1 ? '1px dashed var(--line)' : 'none',
                    }}
                  >
                    <span>{item.name}</span>
                    <span className="text-[11px]" style={{ color: 'var(--muted)' }}>
                      {item.level}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
