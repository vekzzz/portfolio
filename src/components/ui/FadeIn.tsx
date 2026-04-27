import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'none'
}

export function FadeIn({ children, delay = 0, className, direction = 'up' }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const initial = {
    opacity: 0,
    y: direction === 'up' ? 18 : 0,
    x: direction === 'left' ? -18 : 0,
  }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  staggerDelay?: number
}

export function Stagger({ children, className, style, staggerDelay = 0.08 }: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: staggerDelay } } }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export const staggerChild = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}
