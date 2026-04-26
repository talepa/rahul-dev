'use client'

import { useEffect, useRef } from 'react'

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Detect mobile/touch devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 1024
    
    if (isMobile) return // Use native scrolling on mobile/tablets

    let current = 0
    let target = 0
    let ease = 0.075
    let animationFrameId: number

    const smoothScroll = () => {
      current += (target - current) * ease
      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(0, ${-current}px, 0)`
      }
      animationFrameId = requestAnimationFrame(smoothScroll)
    }

    const onScroll = () => {
      target = window.scrollY
    }

    const setHeight = () => {
      if (contentRef.current) {
        document.body.style.height = `${contentRef.current.scrollHeight}px`
      }
    }

    const resizeObserver = new ResizeObserver(() => setHeight())
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current)
    }

    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', setHeight)
    
    setHeight()
    smoothScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', setHeight)
      resizeObserver.disconnect()
      cancelAnimationFrame(animationFrameId)
      document.body.style.height = ''
    }
  }, [])

  return (
    <div 
      className="lg:fixed lg:top-0 lg:left-0 lg:w-full lg:overflow-hidden will-change-transform" 
      ref={contentRef}
    >
      {children}
    </div>
  )
}

export default SmoothScroll
