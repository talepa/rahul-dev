'use client'

import { motion } from 'framer-motion'
import { BookOpen, Award, FileText, ExternalLink } from 'lucide-react'

const publications = [
  {
    id: 1,
    title: 'AI Driven Drugs Traceability System',
    journal: 'TIJER - International Research Journal',
    details: 'Volume 12, Issue 5, May 2025',
    impactFactor: '8.57',
    description: 'Developed an AI-powered authentication framework to solve global counterfeit medicine issues by ensuring end-to-end drug safety and traceability.',
    paperId: 'TIJER2505048'
  }
]

const Publications = () => {
  return (
    <section id="publications" className="py-32 px-6 sm:px-10 lg:px-16 relative bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tighter">Academic Research</h2>
            <p className="text-white/40 max-w-md text-sm font-medium">
              Pushing the boundaries of Applied AI in healthcare and supply chain security.
            </p>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-mono text-white/20 tracking-widest uppercase">
            <BookOpen className="w-4 h-4" />
            <span>Peer_Reviewed_Publications</span>
          </div>
        </div>

        <div className="grid gap-6">
          {publications.map((pub) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="group glass p-8 rounded-3xl border border-white/5  hover:bg-black/[0.05] dark:hover:bg-white/[0.05]  hover:-translate-y-1 transition-all relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -z-10 group-hover:bg-blue-500/10 transition-colors" />

              <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                      Published Paper
                    </div>
                    <div className="flex items-center gap-1.5 text-white/30 text-[10px] font-mono">
                      <Award className="w-3.5 h-3.5" />
                      <span>Impact Factor: {pub.impactFactor}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-blue-400 transition-colors text-white/90">{pub.title}</h3>
                  <p className="text-white/60 leading-relaxed max-w-3xl text-sm italic">
                    "{pub.description}"
                  </p>

                  <div className="flex flex-wrap gap-6 pt-2">
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Journal</div>
                      <div className="text-xs font-bold text-white/70">{pub.journal}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Volume / Date</div>
                      <div className="text-xs font-bold text-white/70">{pub.details}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Paper ID</div>
                      <div className="text-xs font-bold text-white/70">{pub.paperId}</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 w-full lg:w-auto">
                   <a 
                    href="https://www.linkedin.com/posts/rahultalepa_research-paper-activity-7346519564106534912-zNsP" 
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10  hover:bg-white/10 transition-all text-xs text-white/80 font-bold whitespace-nowrap"
                   >
                     <FileText className="w-4 h-4" />
                     Read Post
                     <ExternalLink className="w-3 h-3 text-white/40" />
                   </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications
