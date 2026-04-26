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

    const onHashClick = (e: MouseEvent) => {
      const targetEl = e.target as HTMLElement;
      const link = targetEl.closest('a');
      if (link && link.hash && link.hash.startsWith('#')) {
        const id = link.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          const rect = element.getBoundingClientRect();
          const winScroll = window.scrollY || window.pageYOffset;
          target = rect.top + winScroll;
          window.scrollTo(0, target);
        }
      }
    };

    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', setHeight)
    window.addEventListener('click', onHashClick)
    
    setHeight()
    smoothScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', setHeight)
      window.removeEventListener('click', onHashClick)
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
