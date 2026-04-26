"use client"

import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, Phone, Linkedin, Globe, Copy, Check } from "lucide-react"

interface ContactCardProps {
  isOpen: boolean
  onClose: () => void
}

const ContactCard: React.FC<ContactCardProps> = ({ isOpen, onClose }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [time, setTime] = useState(0)
  const [copied, setCopied] = useState<string | null>(null)

  const cardRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)
  const timeAnimationRef = useRef<number>(0)
  const rotationRef = useRef({ x: 0, y: 0, z: 0 })

  const theme = {
    primaryColor: "#00f0ff", // Neon Cyan
    secondaryColor: "#0072ff", // Deep Blue
    glowColor: "rgba(0, 240, 255, 0.5)",
  }

  const details = {
    name: "RAHUL TALEPA",
    email: "talepa.rahul6@gmail.com",
    phone: "+91 70141 64372",
    linkedin: "linkedin.com/in/rahultalepa",
    location: "MUMBAI, MH / IND",
    role: "AI Engineer"
  }

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  // Animation for time-based effects
  useEffect(() => {
    const animateTime = () => {
      setTime((prev) => prev + 0.01)
      timeAnimationRef.current = requestAnimationFrame(animateTime)
    }
    timeAnimationRef.current = requestAnimationFrame(animateTime)
    return () => cancelAnimationFrame(timeAnimationRef.current)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const angleX = (-(e.clientY - centerY) / (rect.height / 2)) * 20
    const angleY = ((e.clientX - centerX) / (rect.width / 2)) * 20

    cardRef.current.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`
  }

  const resetRotation = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="relative z-10 w-full max-w-[500px]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 p-2 text-white/40 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* 3D Card Container */}
            <div
              style={{ perspective: "2000px" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={resetRotation}
              className="w-full flex flex-col items-center gap-8"
            >
              <div
                ref={cardRef}
                className="relative w-full aspect-[1.6/1] rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-200 ease-out preserve-3d cursor-pointer group"
                style={{
                  background: "linear-gradient(135deg, #000814 0%, #001d3d 50%, #003566 100%)",
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Nebula Background */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `
                      radial-gradient(circle at ${50 + Math.sin(time * 0.5) * 30}% ${50 + Math.cos(time * 0.7) * 30}%, ${theme.glowColor} 0%, transparent 70%),
                      radial-gradient(circle at ${50 + Math.cos(time * 0.3) * 40}% ${50 + Math.sin(time * 0.4) * 40}%, rgba(128, 0, 255, 0.2) 0%, transparent 60%)
                    `,
                    opacity: 0.8,
                  }}
                />

                {/* Stars Layer */}
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute w-full h-full" style={{ backgroundImage: 'radial-gradient(1px 1px at 20px 30px, white, rgba(0,0,0,0))', backgroundSize: '100px 100px' }} />
                  <div className="absolute w-full h-full" style={{ backgroundImage: 'radial-gradient(1.5px 1.5px at 150px 150px, white, rgba(0,0,0,0))', backgroundSize: '150px 150px', transform: 'rotate(45deg)' }} />
                </div>

                {/* Card Content (Front) */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between" style={{ transform: "translateZ(50px)" }}>
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
                        <Globe className="text-cyan-400" size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">Dossier Access</span>
                        <span className="text-xs font-bold text-white tracking-widest uppercase">RA_TAL_DEV</span>
                      </div>
                    </div>
                    <div className="text-[10px] font-mono text-white/20 tracking-tighter uppercase">
                      SEC_LEVEL_04 / AUTH_SUCCESS
                    </div>
                  </div>

                  {/* Mid Section: Details */}
                  <div className="space-y-4">
                    <div className="text-2xl font-bold tracking-tighter text-white uppercase italic">
                      {details.name}
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-[10px] font-mono text-blue-400 font-bold tracking-[0.2em] uppercase">
                        {details.role}
                      </div>
                      <div className="text-[9px] font-mono text-white/30 tracking-widest uppercase">
                        {details.location}
                      </div>
                    </div>
                  </div>

                  {/* Footer/Chip */}
                  <div className="flex justify-between items-end">
                    <div className="w-14 h-10 rounded-lg bg-gradient-to-br from-yellow-500/80 to-yellow-200/80 border border-white/20 shadow-lg relative overflow-hidden">
                      <div className="absolute inset-0 grid grid-cols-3 gap-px opacity-20 bg-black" />
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-red-500/80 blur-[2px] opacity-60" />
                      <div className="w-8 h-8 rounded-full bg-yellow-500/80 blur-[2px] opacity-60 -ml-4" />
                    </div>
                  </div>
                </div>

                {/* Holographic Shift */}
                <div className="absolute inset-0 opacity-10 bg-gradient-to-tr from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>

              {/* Action Buttons below the card */}
              <div className="w-full grid grid-cols-2 gap-3 px-2">
                <button
                  onClick={() => copyToClipboard(details.email, 'email')}
                  className="flex items-center justify-center gap-3 py-4 glass-strong rounded-2xl border border-white/10 hover:bg-white/5 transition-all group overflow-hidden relative"
                >
                  <Mail size={18} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {copied === 'email' ? 'Copied!' : 'Email'}
                  </span>
                  {copied === 'email' && <Check size={14} className="text-green-400 ml-1" />}
                </button>

                <a
                  href="https://linkedin.com/in/rahultalepa"
                  target="_blank"
                  className="flex items-center justify-center gap-3 py-4 glass-strong rounded-2xl border border-white/10 hover:bg-white/5 transition-all group"
                >
                  <Linkedin size={18} className="text-blue-500 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">LinkedIn</span>
                </a>

                <button
                  onClick={() => copyToClipboard(details.phone, 'phone')}
                  className="flex items-center justify-center gap-3 py-4 glass-strong rounded-2xl border border-white/10 hover:bg-white/5 transition-all group col-span-2"
                >
                  <Phone size={18} className="text-green-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                    {copied === 'phone' ? 'Copied Number!' : details.phone}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ContactCard
