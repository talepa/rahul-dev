'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ScrollSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

const ScrollSection = ({ children, className = '', id }: ScrollSectionProps) => {
  const containerRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.9, 1, 1, 1])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [30, 0, 0, 0])

  return (
    <motion.section
      id={id}
      ref={containerRef}
      style={{
        opacity,
        scale,
        y
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.section>
  )
}

export default ScrollSection
