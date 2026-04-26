'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

const metrics = [
  { label: 'Cumulative GPA', value: '8.33', sub: 'Academic Distinction' },
  { label: 'ML Accuracy', value: '88%', sub: 'Bottleneck Detection' },
  { label: 'ROC-AUC Score', value: '0.83', sub: 'Risk Prediction' },
  { label: 'Records Processed', value: '5L+', sub: 'Semantic Scaling' }
]

const About = () => {
  return (
    <section id="about" className="py-32 px-6 sm:px-10 lg:px-16 relative bg-transparent border-y border-white/5 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Mission & Methodology</h2>
              <p className="text-white/60 leading-relaxed max-w-lg">
                I focus on building AI systems that are not just intelligent, but reliable and scalable. My approach bridges the gap between raw data science and production-grade software engineering.
              </p>
            </div>

            <div className="space-y-4">
               <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-1 h-1 rounded-full bg-blue-500 group-hover:scale-[3] transition-transform" />
                  <span className="text-sm font-medium text-white/80 transition-colors group-hover:text-white">Designing High-Performance RAG Pipelines</span>
               </div>
               <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-1 h-1 rounded-full bg-blue-500 group-hover:scale-[3] transition-transform" />
                  <span className="text-sm font-medium text-white/80 transition-colors group-hover:text-white">Optimizing Vector Search at Scale</span>
               </div>
               <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-1 h-1 rounded-full bg-blue-500 group-hover:scale-[3] transition-transform" />
                  <span className="text-sm font-medium text-white/80 transition-colors group-hover:text-white">Automating LLM Evaluation Frameworks</span>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border border-white/5  space-y-2 hover:bg-black/5  transition-colors"
              >
                <div className="text-[10px] font-mono text-white/20 tracking-wider uppercase">{metric.label}</div>
                <div className="text-3xl font-bold tracking-tighter text-white">{metric.value}</div>
                <div className="text-[10px] text-white/40 font-mono tracking-tight">{metric.sub}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
