'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, Terminal } from 'lucide-react'

const experiences = [
  {
    id: 1,
    role: 'AI Engineer Intern',
    company: 'Stuvio',
    period: 'February 2026 – Present',
    description: 'Focusing on building and deploying real-world AI solutions. Architecting scalable intelligent systems and semantic search pipelines.',
    skills: ['GenAI', 'LangChain', 'OpenAI APIs', 'LLM Engineering'],
  },
  {
    id: 2,
    role: 'Software Engineer & Data Analyst Intern',
    company: 'Statskew',
    period: '2025',
    description: 'Bridge the gap between data insights and software execution. Performed deep data analysis and supported development of internal tools.',
    skills: ['Python', 'SQL', 'Data Analytics', 'Pandas'],
  },
  {
    id: 3,
    role: 'Instructor',
    company: 'NYX & Cyber3ra',
    period: '2024',
    description: 'Mentoring at Cyber3ra. Focused on data science, statistics, and machine learning fundamentals.',
    skills: ['Statistics', 'EDA', 'Machine Learning', 'Teaching'],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 sm:px-10 lg:px-16 relative bg-transparent overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
            <p className="text-white/40 max-w-sm text-sm">Professional journey through the lens of artificial intelligence and data science.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-white/20 tracking-tighter uppercase">
            <span>Runtime: 26 MONTHS</span>
            <div className="w-8 h-[1px] bg-white/10" />
            <span>LAST_SYNC: APR_2026</span>
          </div>
        </div>

        <div className="space-y-8 relative">
          {/* Vertical Connection Line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-[1px] bg-white/5" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-10 group"
            >
              {/* Icon Marker */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-background border border-white/10  flex items-center justify-center group-hover:border-blue-500/50 transition-colors shadow-2xl">
                  <Terminal className="w-5 h-5 text-white/40 group-hover:text-white transition-all" />
                </div>
                {index === 0 && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-background animate-pulse" />
                )}
              </div>

              {/* Card Content */}
              <div className="flex-1 space-y-4 pb-12 border-b border-white/5  last:border-0 last:pb-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">{exp.role}</h3>
                    <div className="flex items-center gap-3 text-sm font-medium">
                      <span className="text-white/60">{exp.company}</span>
                      <span className="text-white/20">•</span>
                      <span className="text-blue-400/80 font-mono text-xs">{exp.period}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-white/40 leading-relaxed max-w-2xl">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 rounded-full bg-white/5 border border-white/5  text-[10px] font-mono text-white/40 tracking-wider uppercase group-hover:border-white/10 dark:group-hover:border-white/10 group-hover:text-white transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
