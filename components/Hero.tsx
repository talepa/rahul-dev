import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, User } from 'lucide-react'
import { personal } from '@/lib/personal'
import { SparklesCore } from './SparklesCore'

const Hero = ({ onContactClick }: { onContactClick: () => void }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Sparkles Background Layer */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Decorative Gradients for Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        
        {/* Left Side: Large Typography */}
        <div className="space-y-8 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <span className="text-xs font-semibold tracking-[0.3em] text-white/40 uppercase">{personal.roleBadge}</span>
            <h1 className="text-[clamp(2.5rem,12vw,7rem)] font-bold tracking-tighter leading-[0.9] flex flex-col">
              <span className="text-white">{personal.nameFirst}</span>
              <span className="text-white/40">{personal.nameLast}</span>
            </h1>
            <div className="flex items-center gap-3 pt-4">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest leading-none">{personal.roleShort}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <a href="#projects" className="group relative glass px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-white/5 transition-all active:scale-95 border border-white/5">
              <div className="p-2 rounded-lg bg-white/5">
                <ArrowDown className="w-5 h-5 text-white/60 group-hover:translate-y-0.5 transition-transform" />
              </div>
              <span className="font-semibold tracking-tight text-white/90">Explore My Work</span>
            </a>
            
            <button 
              onClick={onContactClick}
              className="group relative glass-strong px-8 py-4 rounded-2xl flex items-center gap-3 text-white/90 hover:bg-white/5 transition-all active:scale-95 border border-white/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
              <User className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="font-semibold tracking-tight">My Profile Card</span>
            </button>

            <div className="flex flex-col pl-2 border-l border-white/10">
               <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Base_Location</span>
               <span className="text-xs font-bold text-white/60 tracking-tight">{personal.location}</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Narrative & Profile Image Container */}
        <div className="space-y-10 lg:pl-12 lg:border-l border-white/5 pb-10 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative w-32 h-32 mb-4 group"
          >
             <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full group-hover:bg-blue-500/40 transition-colors" />
             <div className="relative w-full h-full rounded-full border border-white/10 overflow-hidden glass mix-blend-luminosity hover:mix-blend-normal transition-all duration-500">
                <img 
                  src={personal.profileImageUrl} 
                  alt={personal.name}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                />
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 max-w-md"
          >
            <p className="text-lg text-white/60 leading-relaxed font-medium capitalize">
              I build intelligence into products — not as theory, but as{" "}
              <span className="text-white">shipped, working features</span>.
            </p>

            <p className="text-sm text-white/40 leading-relaxed italic">
              &ldquo;{personal.heroQuote}&rdquo;
            </p>
          </motion.div>

          {/* Social Links Mini */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-[1px] bg-white/10" />
            <div className="flex gap-4">
               <a href={personal.githubUrl} target="_blank" rel="noreferrer"><Github className="w-4 h-4 text-white/30 hover:text-white transition-colors" /></a>
               <a href={personal.linkedinUrl} target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4 text-white/30 hover:text-white transition-colors" /></a>
               <a href={`mailto:${personal.email}`}><Mail className="w-4 h-4 text-white/30 hover:text-white transition-colors" /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
