/**
 * app/programmazione-luglio/page.tsx
 * ─────────────────────────────────────────────
 * TYPE: React Server Component (RSC) — NO "use client" directive.
 * Struttura della pagina: header statico + EventsTimeline (Client Component)
 * che gestisce la logica degli eventi passati senza hydration mismatch.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import EventsTimeline from './EventsTimeline'

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Programmazione Luglio 2026 | La Bombonera Grosseto',
  description:
    'Tutti gli eventi di Luglio 2026 a La Bombonera: Wild Acoustic, Aperitivo in Musica, Serate Latine, Torneo Basket e molto altro. Grosseto – Via Lago di Varano 18.',
}

// ─── Page (RSC) ───────────────────────────────────────────────────────────────
export default function ProgrammazioneLuglioPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#0A0A0F] text-white">

      {/* ── Header ── */}
      <header className="relative overflow-hidden py-20 sm:py-28">
        {/* Background glows */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          {/* Back link */}
          <Link
            href="/#eventi"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/80
                       text-sm font-medium mb-10 transition-colors duration-200 group"
            aria-label="Torna alla sezione eventi"
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Torna agli eventi
          </Link>

          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           text-xs font-bold uppercase tracking-widest
                           bg-violet-500/10 text-violet-300 border border-violet-500/30 mb-6">
            <span aria-hidden="true">📅</span>
            La Bombonera · Estate 2026
          </span>

          {/* H1 */}
          <h1 className="font-display text-6xl sm:text-8xl tracking-widest leading-none mb-6">
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-sky-400 bg-clip-text text-transparent">
              LUGLIO
            </span>
            <br />
            <span className="text-white">2026</span>
          </h1>

          <p className="text-white/55 text-lg max-w-xl leading-relaxed">
            Tutta la programmazione del mese — musica live, serate danzanti,
            tornei e special event. Dal{' '}
            <strong className="text-white/80">1 al 31 Luglio</strong>{' '}
            sotto le stelle di Grosseto.
          </p>
        </div>
      </header>

      {/*
       * ── Client Component ──
       * Gestisce: legenda colori + timeline con logica isPast.
       * Nessun dato sensibile al tempo nel render server.
       */}
      <EventsTimeline />

      {/* ── Back CTA ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 pb-24 text-center">
        <div
          aria-hidden="true"
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12"
        />
        <Link
          href="/#eventi"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm
                     border border-white/15 text-white/60
                     hover:border-white/30 hover:text-white hover:bg-white/5
                     transition-all duration-300"
        >
          <svg
            aria-hidden="true"
            className="w-4 h-4"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Torna alla homepage
        </Link>
      </div>
    </main>
  )
}
