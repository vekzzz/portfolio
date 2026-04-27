import { FadeIn, Stagger, staggerChild } from '@/components/ui/FadeIn'
import { SectionHead } from '@/components/ui/SectionHead'
import { Tag } from '@/components/ui/Tag'
import { experience } from '@/data/portfolio'
import { motion } from 'framer-motion'

export function Experience() {
  return (
    <section id="experience" className="border-b" style={{ padding: '120px 0', borderColor: 'var(--line)' }}>
      <div className="max-w-[1360px] mx-auto px-10 max-md:px-5">
        <FadeIn>
          <SectionHead
            index="§ 03"
            label="experience"
            title="Six years, forty-plus projects, zero abandoned."
          />
        </FadeIn>

        <Stagger className="max-w-[1120px] mx-auto">
          {experience.map((exp) => (
            <motion.div
              key={exp.role}
              variants={staggerChild}
              className="grid grid-cols-[140px_1fr_200px] gap-10 py-8 border-t cursor-default transition-all duration-[250ms] max-md:grid-cols-1 max-md:gap-2"
              style={{ borderColor: 'var(--line)' }}
              whileHover={{ paddingLeft: 16 }}
            >
              <div className="font-mono text-[13px] pt-1" style={{ color: 'var(--muted)' }}>
                <b className="block font-medium" style={{ color: 'var(--ink)' }}>
                  {exp.period}
                </b>
                {exp.duration}
              </div>

              <div>
                <h3 className="text-[22px] font-medium mb-1.5 m-0" style={{ letterSpacing: '-0.02em' }}>
                  {exp.role}
                </h3>
                <div className="font-mono text-xs mb-3.5" style={{ color: 'var(--accent)' }}>
                  {exp.company}
                </div>
                <p className="m-0 text-[15px] leading-[1.55] max-w-[560px]" style={{ color: 'var(--muted)' }}>
                  {exp.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 justify-end pt-1 max-md:justify-start">
                {exp.tags.map((tag) => (
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
