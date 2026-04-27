import { FadeIn, Stagger, staggerChild } from '@/components/ui/FadeIn'
import { SectionHead } from '@/components/ui/SectionHead'
import { Tag } from '@/components/ui/Tag'
import { projects } from '@/data/portfolio'
import { motion } from 'framer-motion'

export function Projects() {
  return (
    <section id="projects" className="border-b" style={{ padding: '120px 0', borderColor: 'var(--line)' }}>
      <div className="max-w-[1360px] mx-auto px-10 max-md:px-5">
        <FadeIn>
          <SectionHead
            index="§ 06"
            label="other projects"
            title="Side-quests, open-source, and weekend experiments."
          />
        </FadeIn>

        <Stagger className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {projects.map((proj) => (
            <motion.div
              key={proj.title}
              variants={staggerChild}
              className="relative overflow-hidden rounded-xl border p-5 transition-all duration-[250ms]"
              style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}
              whileHover={{ y: -2, borderColor: 'var(--ink)' } as Record<string, string | number>}
            >
              <div
                className="rounded-lg border mb-4 relative overflow-hidden grid place-items-center"
                style={{ aspectRatio: '5/4', background: 'var(--bg-2)', borderColor: 'var(--line)' }}
              >
                <span
                  className="font-mono text-[11px] border border-dashed px-2.5 py-1.5 rounded-md"
                  style={{ color: 'var(--muted)', borderColor: 'var(--line-2)', background: 'var(--surface)' }}
                >
                  {proj.thumbLabel}
                </span>
              </div>

              <div className="flex justify-between items-baseline mb-1.5">
                <h4 className="text-lg font-medium m-0" style={{ letterSpacing: '-0.02em' }}>
                  {proj.title}
                </h4>
                <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
                  {proj.year}
                </span>
              </div>

              <p className="m-0 mb-3.5 text-[13px] leading-[1.55]" style={{ color: 'var(--muted)' }}>
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
