'use client'

import { useEffect, useRef, useState } from 'react'

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let dpr = window.devicePixelRatio || 1
    let width = window.innerWidth
    let height = window.innerHeight
    
    const setSize = () => {
      dpr = window.devicePixelRatio || 1
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)
    }

    setSize()
    window.addEventListener('resize', setSize)

    const points: { x: number; y: number }[] = []
    const trailLength = 25 // Slightly shorter for snappiness
    const mouse = { x: width / 2, y: height / 2 }
    const current = { x: width / 2, y: height / 2 }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)

    const render = () => {
      // Clear with a slight fade effect could be cool, but clearRect is cleanest for this style
      ctx.clearRect(0, 0, width, height)

      // Lerp mouse position for smooth following
      current.x += (mouse.x - current.x) * 0.15
      current.y += (mouse.y - current.y) * 0.15

      points.push({ x: current.x, y: current.y })

      if (points.length > trailLength) {
        points.shift()
      }

      if (points.length >= 2) {
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        
        // Draw multiple passes for a "glow" without using the heavy shadowBlur
        for (let j = 0; j < 2; j++) {
          ctx.beginPath()
          ctx.moveTo(points[0].x, points[0].y)

          for (let i = 1; i < points.length; i++) {
            const xc = (points[i].x + points[i - 1].x) / 2
            const yc = (points[i].y + points[i - 1].y) / 2
            ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc)
          }

          if (j === 0) {
            // Core line
            ctx.strokeStyle = '#00f0ff'
            ctx.lineWidth = 2
            ctx.stroke()
          } else {
            // Inner glow line
            ctx.strokeStyle = 'rgba(0, 240, 255, 0.3)'
            ctx.lineWidth = 8
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(render)
    }

    const animationId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', setSize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] mix-blend-screen"
    />
  )
}

export default CursorTrail
