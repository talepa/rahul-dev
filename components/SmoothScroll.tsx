'use client'

import { useEffect, useRef } from 'react'

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let current = 0
    let target = 0
    let ease = 0.075

    const smoothScroll = () => {
      current += (target - current) * ease
      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(0, ${-current}px, 0)`
      }
      requestAnimationFrame(smoothScroll)
    }

    const onScroll = () => {
      target = window.scrollY
    }

    const setHeight = () => {
      if (contentRef.current) {
        document.body.style.height = `${contentRef.current.scrollHeight}px`
      }
    }

    // ResizeObserver to track height changes
    const resizeObserver = new ResizeObserver(() => setHeight())
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current)
    }

    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', setHeight)
    
    // Virtual Scroll Initializer
    setHeight()
    smoothScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', setHeight)
      resizeObserver.disconnect()
      document.body.style.height = ''
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full overflow-hidden will-change-transform" ref={contentRef}>
      {children}
    </div>
  )
}

export default SmoothScroll
