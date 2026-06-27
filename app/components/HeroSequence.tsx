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
    let loadedImages = 0

    // Check accessibility preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const loadImages = () => {
      for (let i = 0; i < totalFrames; i++) {
        const img = new Image()
        const paddedIndex = i.toString().padStart(3, '0')
        // Le nuove immagini si chiamano "Hero-frame_000.jpg" fino a _079.jpg
        img.src = `/home-hero/Hero-frame_${paddedIndex}.jpg`
        img.onload = () => {
          loadedImages++
          // Draw the very first frame as soon as it's ready
          if (i === 0) {
            drawFrame(0)
          }
        }
        images.push(img)
      }
    }

    let currentFrame = 0
    let animationFrameId: number
    let lastTime = 0
    const fps = 24
    const interval = 1000 / fps

    const drawFrame = (index: number) => {
      const img = images[index]
      if (img && img.complete && img.naturalWidth !== 0) {
        // Object-cover equivalent for Canvas
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height)
        const x = (canvas.width / 2) - (img.width / 2) * scale
        const y = (canvas.height / 2) - (img.height / 2) * scale
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale)
      }
    }

    const updateFrameOnScroll = () => {
      if (prefersReducedMotion) {
        drawFrame(0)
        return
      }

      // Ora la HeroSection è alta 400vh, quindi l'area effettiva di scroll (finché la sezione sticky non comincia ad uscire)
      // è di 300vh (400vh - 100vh di altezza schermo). 
      const maxScroll = window.innerHeight * 3
      const scrollY = window.scrollY
      const scrollFraction = Math.max(0, Math.min(scrollY / maxScroll, 1))
      
      const frameIndex = Math.floor(scrollFraction * (totalFrames - 1))
      
      // Assicuriamoci che il frame esista e sia caricato
      if (images[frameIndex] && images[frameIndex].complete) {
        drawFrame(frameIndex)
      } else {
        // Fallback: se stiamo scrollando troppo veloci e l'immagine non è pronta, disegnamo l'ultimo caricato (questo è gestito internamente al drawFrame o mantenendo lo stato attuale)
      }
    }

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateFrameOnScroll()
          ticking = false
        })
        ticking = true
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      updateFrameOnScroll()
    }

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('scroll', onScroll, { passive: true })
    
    resizeCanvas()
    loadImages()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10 bg-brand-dark overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full opacity-50 mix-blend-screen" 
        aria-hidden="true" 
      />
      {/* Overlay gradient to ensure text readability e fondere col contenuto sotto */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/30 via-transparent to-brand-dark" />
    </div>
  )
}
