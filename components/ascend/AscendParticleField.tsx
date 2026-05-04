"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function DriftCloud() {
  const ref = useRef<THREE.Points>(null)
  const count = 2800

  const positions = useMemo(() => {
    const p = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = (8 + Math.random() * 22) * Math.cbrt(Math.random())
      const θ = Math.random() * Math.PI * 2
      const φ = Math.acos(2 * Math.random() - 1)
      p[i * 3] = r * Math.sin(φ) * Math.cos(θ)
      p[i * 3 + 1] = r * Math.sin(φ) * Math.sin(θ)
      p[i * 3 + 2] = r * Math.cos(φ) * 0.6
    }
    return p
  }, [count])

  useFrame((state) => {
    const el = ref.current
    if (!el) return
    el.rotation.y = state.clock.elapsedTime * 0.018
    el.rotation.x = Math.sin(state.clock.elapsedTime * 0.06) * 0.04
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#c4b5fd"
        transparent
        opacity={0.35}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  )
}

function CyanAccents() {
  const ref = useRef<THREE.Points>(null)
  const count = 420
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 24
      p[i * 3 + 1] = (Math.random() - 0.5) * 18
      p[i * 3 + 2] = (Math.random() - 0.5) * 14
    }
    return p
  }, [])

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = -state.clock.elapsedTime * 0.012
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        color="#67e8f9"
        transparent
        opacity={0.45}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  )
}

export default function AscendParticleField() {
  return (
    <div className="h-full min-h-[100vh] w-full">
      <Canvas
        camera={{ position: [0, 0, 14], fov: 55 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <ambientLight intensity={0.4} />
        <DriftCloud />
        <CyanAccents />
      </Canvas>
    </div>
  )
}
