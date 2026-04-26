'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, TrendingUp, Shield, Cpu, Network } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Dynamic Bottleneck Detection',
    description: 'ML pipeline for 6-stage e-commerce systems. Achieved 88% prediction accuracy (28% over baseline).',
    link: '#',
    icon: TrendingUp,
    date: 'February 2026',
    category: 'Optimization / ML'
  },
  {
    id: 2,
    title: 'Ghost Order Detector',
    description: 'Early risk prediction system for food delivery orders to minimize cancelations and fraud.',
    link: '#',
    icon: Shield,
    date: 'January 2026',
    category: 'Risk Engineering'
  },
  {
    id: 3,
    title: 'Crime Analysis (India)',
    description: 'Comprehensive 20-year analysis of crime trends against women using Python and statistical methods.',
    link: '#',
    icon: Network,
    date: 'October 2024',
    category: 'Data Science'
  },
  {
    id: 4,
    title: 'Paris Olympics 2024',
    description: 'Interactive data analysis and visualization of performance metrics from the 2024 Games.',
    link: '#',
    icon: Cpu,
    date: 'August 2024',
    category: 'Analytics'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 sm:px-10 lg:px-16 relative bg-transparent">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-20">
        
        {/* Left: Section Header */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="text-white/40 max-w-xs text-sm leading-relaxed">
            A few things I've been building recently. Focused on scalability and precision in AI systems.
          </p>
        </div>

        {/* Right: Project List */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative glass px-8 py-10 rounded-[2rem] border border-white/5  hover:border-white/20 dark:hover:border-white/20  hover:-translate-y-1 transition-all cursor-pointer flex items-center justify-between"
            >
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-3">
                   <div className="p-2 rounded-lg bg-white/5">
                     <project.icon className="w-4 h-4 text-white/60" />
                   </div>
                   <span className="text-[10px] font-mono tracking-widest text-white/20 uppercase">{project.category}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight group-hover:text-blue-400 transition-colors text-white/90">{project.title}</h3>
                  <p className="text-sm text-white/40 max-w-md">{project.description}</p>
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-10">
                <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                <span className="text-[10px] font-mono text-white/10 uppercase">{project.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
