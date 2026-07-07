'use client'

import { useEffect, useRef } from 'react'

export function HeroSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const totalFrames = 80
    const images: HTMLImageElement[] = []

    // Check accessibility preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const loadImages = () => {
      for (let i = 0; i < totalFrames; i++) {
        const img = new Image()
        const paddedIndex = i.toString().padStart(3, '0')
        img.src = `/home-hero/Hero-frame_${paddedIndex}.jpg`
        img.onload = () => {
          if (i === 0) drawFrame(0)
        }
        images.push(img)
      }
    }

    const drawFrame = (index: number) => {
      const img = images[index]
      if (img && img.complete && img.naturalWidth !== 0) {
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height)
        const x = (canvas.width / 2) - (img.width / 2) * scale
        const y = (canvas.height / 2) - (img.height / 2) * scale
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale)
      }
    }

    // ─── Logica scroll → frame ─────────────────────────────────────────────
    // Su mobile la HeroSection è 250vh (scroll utile = 150vh, o 1.5 * innerHeight).
    // Su desktop la HeroSection è 400vh (scroll utile = 300vh, o 3 * innerHeight).
    const updateFrameOnScroll = () => {
      if (prefersReducedMotion) {
        drawFrame(0)
        return
      }

      const isMobile = window.innerWidth < 768
      const scrollMultiplier = isMobile ? 1.5 : 3
      const maxScroll = window.innerHeight * scrollMultiplier
      const scrollY = window.scrollY
      const scrollFraction = Math.max(0, Math.min(scrollY / maxScroll, 1))
      const frameIndex = Math.floor(scrollFraction * (totalFrames - 1))

      if (images[frameIndex] && images[frameIndex].complete) {
        drawFrame(frameIndex)
      }
    }

    // ─── Throttle con requestAnimationFrame ────────────────────────────────
    // Un singolo flag `ticking` condiviso da scroll E touchmove evita che i
    // due listener si sovrappongano sprecando frame sul browser.
    let ticking = false
    const scheduleUpdate = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateFrameOnScroll()
          ticking = false
        })
        ticking = true
      }
    }

    // ─── Canvas resize (ottimizzato per mobile) ────────────────────────────
    let lastWidth = window.innerWidth
    let lastHeight = window.innerHeight

    const resizeCanvas = (force = false) => {
      const currentWidth = window.innerWidth
      const currentHeight = window.innerHeight

      // Su mobile, lo scroll nasconde la barra degli indirizzi, innescando resize continui.
      // Se cambia solo l'altezza di poco (meno di 150px) e la larghezza è identica, 
      // ignoriamo il resize per evitare che il canvas si resetti e l'animazione sparisca 
      // durante i primissimi tocchi (scroll iniziale).
      const isMobile = currentWidth < 768
      const widthChanged = currentWidth !== lastWidth
      const heightChanged = Math.abs(currentHeight - lastHeight) > 150

      if (!force && isMobile && !widthChanged && !heightChanged) {
        return
      }

      lastWidth = currentWidth
      lastHeight = currentHeight

      canvas.width = currentWidth
      canvas.height = currentHeight
      updateFrameOnScroll()
    }

    // ─── Event listeners ───────────────────────────────────────────────────
    // 'scroll'    → desktop + mobile (leggermente in ritardo su mobile)
    // 'touchmove' → mobile: immediato
    const handleResize = () => resizeCanvas(false)
    
    window.addEventListener('resize',    handleResize,    { passive: true })
    window.addEventListener('scroll',    scheduleUpdate,  { passive: true })
    window.addEventListener('touchmove', scheduleUpdate,  { passive: true })

    resizeCanvas(true)
    loadImages()

    return () => {
      window.removeEventListener('resize',    handleResize)
      window.removeEventListener('scroll',    scheduleUpdate)
      window.removeEventListener('touchmove', scheduleUpdate)
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10 bg-brand-dark overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-50 mix-blend-screen"
        aria-hidden="true"
      />
      {/* Overlay gradient per leggibilità testo */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/30 via-transparent to-brand-dark" />
    </div>
  )
}
