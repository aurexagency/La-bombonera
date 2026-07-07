/**
 * app/page.tsx
 * ─────────────────────────────────────────────
 * TYPE: React Server Component (RSC) — NO "use client" directive.
 * RESPONSIBILITY: Homepage con le tre macro-aree:
 *   1. Hero       — introduzione del polo ricreativo
 *   2. Basket     — campo da basket gratuito
 *   3. SummerCamp — Kids Summer Camp (5-13 anni)
 *   4. Events     — Area Musicale (ex Blue Park)
 *
 * ─────── Struttura dei componenti ───────
 * Tutti i componenti in questo file sono Server Components puri.
 * L'interattività (es. accordion mobile, counter) verrà delegata a
 * Client Components separati in /components quando necessaria.
 * ─────────────────────────────────────────────
 */

import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Link from 'next/link'
import { HeroSequence } from './components/HeroSequence'

// ─── Metadata della pagina ────────────────────────────────────────────────────
// Override del titolo per la homepage specifica
export const metadata: Metadata = {
  title: 'La Bombonera | Sport · Summer Camp · Musica a Grosseto',
}

// ─────────────────────────────────────────────
//  SEZIONE 0 — NAV BAR LEGGERA (RSC)
// ─────────────────────────────────────────────
function Navbar() {
  return (
    <header
      role="banner"
      className="fixed top-0 inset-x-0 z-50 flex items-center justify-between
                 px-4 sm:px-8 py-4
                 bg-brand-dark/80 backdrop-blur-xl border-b border-white/5"
    >
      {/* Logo */}
      <a
        href="#hero"
        aria-label="Torna all'inizio — La Bombonera"
        className="font-display text-2xl sm:text-3xl tracking-widest gradient-text-orange"
      >
        LA BOMBONERA
      </a>

      {/* Nav links — visibili da tablet */}
      <nav
        role="navigation"
        aria-label="Navigazione principale"
        className="hidden md:flex items-center gap-6 text-sm font-semibold text-white/60"
      >
        <a href="#eventi" className="hover:text-brand-purple transition-colors duration-200">
          🎵 Serate
        </a>
        <a href="#summer-camp" className="hover:text-brand-green transition-colors duration-200">
          ⛺ Summer Camp
        </a>
        <a href="#basket" className="hover:text-brand-orange transition-colors duration-200">
          🏀 Basket
        </a>
        <a
          href="#summer-camp"
          id="nav-cta-iscrizioni"
          className="btn-primary text-xs px-4 py-2"
        >
          Iscriviti ora
        </a>
      </nav>
    </header>
  )
}

// ─────────────────────────────────────────────
//  SEZIONE 1 — HERO (RSC)
// ─────────────────────────────────────────────
function HeroSection() {
  return (
    {/* Mobile (< md): 100dvh — nessuno scroll a vuoto. Desktop (≥ md): 400vh per l'animazione sticky. */}
    <section
      id="hero"
      aria-label="Benvenuto a La Bombonera"
      className="relative h-[100dvh] md:h-[400vh] w-full"
    >
      {/*
       * Mobile  (< md): posizionamento normale nel flusso, altezza 100dvh.
       * Desktop (≥ md): sticky — rimane bloccato mentre l'utente scorre i 400vh.
       */}
      <div className="md:sticky md:top-0 h-[100dvh] w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background sequence */}
        <HeroSequence />

        {/* Grid pattern overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Content */}
        <div className="max-w-5xl mx-auto space-y-6 animate-fade-in-up relative z-10">
          {/* Badge */}
          <span
            className="section-badge text-brand-orange border-brand-orange/30 bg-brand-orange/10"
            aria-label="Apertura estiva"
          >
            <span aria-hidden="true">✦</span>
            Grosseto · Via Lago di Varano · Estate 2026
          </span>

          {/* H1 — un solo h1 per pagina, come da best practice SEO */}
          <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl tracking-widest leading-none">
            <span className="gradient-text-orange">LA</span>
            <br />
            <span className="text-white">BOMBONERA</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Il nuovo polo ricreativo di Grosseto.{' '}
            <strong className="text-white/80">Sport, bambini e musica</strong> in un unico luogo —
            aperto a tutta la città.
          </p>

          {/* CTA grid */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#eventi" id="hero-cta-eventi" className="btn-primary">
              <span aria-hidden="true">🎵</span>
              Serate &amp; Musica
            </a>
            <a href="#summer-camp" id="hero-cta-camp" className="btn-ghost">
              <span aria-hidden="true">⛺</span>
              Summer Camp
            </a>
            <a href="#basket" id="hero-cta-basket" className="btn-ghost">
              <span aria-hidden="true">🏀</span>
              Campo da Basket
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                     text-white/30 text-xs font-semibold tracking-widest uppercase animate-float z-10"
        >
          <span>Scopri</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="stroke-current">
            <path d="M8 4v12M3 14l5 6 5-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
//  SEZIONE 2 — AREA SPORTIVA: BASKET (RSC)
// ─────────────────────────────────────────────

/** Sub-component: singola card feature per la sezione basket */
function BasketFeatureCard({
  emoji,
  title,
  description,
  button,
}: {
  emoji: string
  title: string
  description?: string
  button?: ReactNode
}) {
  return (
    <article className="glass-card p-6 space-y-4 hover:bg-white/8 transition-all duration-300 group flex flex-col justify-between h-full">
      <div className="space-y-4">
        <span className="text-3xl" aria-hidden="true">{emoji}</span>
        <h3 className="font-semibold text-white text-base group-hover:text-brand-orange transition-colors">
          {title}
        </h3>
        {description && <p className="text-white/50 text-sm leading-relaxed">{description}</p>}
      </div>
      {button && <div className="pt-2">{button}</div>}
    </article>
  )
}

function BasketSection() {
  const features = [
    {
      emoji: '🏀',
      title: 'Accesso Gratuito',
      description:
        'Il campo è aperto a tutti, senza prenotazione fino alle 19:00. Vieni quando vuoi, porta i tuoi amici.',
    },
    {
      emoji: '💡',
      title: 'Illuminato Day & Night',
      description:
        'Impianto di illuminazione professionale che ti permette di giocare fino a tarda sera.',
    },
    {
      emoji: '🍔',
      title: 'Punto Ristoro',
      description:
        'Dopo una partita intensa, Bar accanto al campo sempre aperto con drink e street food.',
    },
    {
      emoji: '📍',
      title: 'Via Lago di Varano',
      button: (
        <a
          href="https://maps.google.com/?q=Palazzetto+dello+Sport+La+Bombonera+Grosseto"
          id="basket-cta-maps"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full justify-center text-center whitespace-nowrap"
          aria-label="Apri la mappa del Palazzetto dello Sport La Bombonera, Grosseto"
        >
          <span aria-hidden="true">📍</span>
          Come arrivare
        </a>
      ),
    },
  ]

  return (
    <section
      id="basket"
      aria-labelledby="basket-heading"
      className="relative py-24 sm:py-32"
    >
      {/* Accent glow */}
      <div aria-hidden="true"
        className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-orange/0 via-brand-orange to-brand-orange/0 rounded-full" />

      <div className="section-container">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <span
            className="section-badge text-brand-orange border-brand-orange/30 bg-brand-orange/10"
            aria-label="Area sportiva"
          >
            <span aria-hidden="true">🏀</span>
            Area Sportiva
          </span>

          <h2
            id="basket-heading"
            className="font-display text-5xl sm:text-7xl tracking-widest"
          >
            <span className="gradient-text-orange">CAMPO</span>{' '}
            <span className="text-white">DA BASKET</span>
          </h2>

          <p className="text-white/55 text-lg max-w-xl leading-relaxed">
            Un campo professionale, aperto a tutti e completamente gratuito.
            La Bombonera porta lo sport di quartiere ad un nuovo livello.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <BasketFeatureCard key={f.title} {...f} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-12 glass-card p-6 sm:p-8 flex flex-col sm:flex-row
                        items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-lg">Vuoi organizzare un Torneo?</p>
            <p className="text-white/45 text-sm mt-2">
              Contatta la struttura per stabilire i giorni del torneo e la ristorazione che preferisci.
            </p>
          </div>
          <a
            href="https://wa.me/393926859507"
            id="torneo-cta-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !bg-gradient-to-r !from-brand-green !to-teal-500 !shadow-brand-green/25 whitespace-nowrap"
            aria-label="Contatta la struttura su WhatsApp per organizzare un torneo"
          >
            <span aria-hidden="true">💬</span>
            Contattaci
          </a>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
//  SEZIONE 3 — KIDS SUMMER CAMP (RSC)
// ─────────────────────────────────────────────

/** Sub-component: attività del camp */
function ActivityPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold
                     bg-brand-green/10 text-brand-green border border-brand-green/20
                     hover:bg-brand-green/20 transition-colors duration-200">
      {label}
    </span>
  )
}

function SummerCampSection() {
  const activities = [
    '⚽ Calcio a 5',
    '🏐 Minivolley',
    '🎾 Touchtennis',
    '🏀 Minibasket',
    '🎳 Bocce',
    '🏹 Tiro con l\'arco',
    '🎲 Giochi di gruppo',
    '🎨 Laboratori creativi',
    '💦 Giochi d\'acqua',
    '🏊 Piscina',
  ]

  return (
    <section
      id="summer-camp"
      aria-labelledby="camp-heading"
      className="relative py-24 sm:py-32 bg-brand-dark-2"
    >
      {/* Top border accent */}
      <div aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-green/50 to-transparent" />
      <div aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent" />

      {/* Background glow */}
      <div aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[800px] h-[400px] bg-brand-green/5 rounded-full blur-3xl" />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span
                className="section-badge text-brand-green border-brand-green/30 bg-brand-green/10"
                aria-label="Kids Summer Camp"
              >
                <span aria-hidden="true">⛺</span>
                Kids Summer Camp
              </span>

              <h2
                id="camp-heading"
                className="font-display text-5xl sm:text-7xl tracking-widest leading-none"
              >
                <span className="gradient-text-green">KID</span>
                <br />
                <span className="text-white">PLANET</span>
              </h2>

              <p className="text-white/55 text-lg leading-relaxed">
                Un'estate di movimento, creatività e amicizia.{' '}
                <strong className="text-white/80">
                  In collaborazione con PGS Italia.
                </strong>
              </p>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 space-y-2">
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wider">Età</p>
                <p className="text-white font-bold text-lg">5 – 13 anni</p>
              </div>
              <div className="glass-card p-4 space-y-2">
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wider">Giorni</p>
                <p className="text-white font-bold text-lg">Lun – Ven</p>
              </div>
              <div className="glass-card p-4 space-y-2">
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wider">Orario</p>
                <p className="text-white font-bold text-lg">8:00 – 16:00</p>
              </div>
              <div className="glass-card p-4 space-y-2">
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wider">Periodo</p>
                <p className="text-white font-bold text-lg">Giu · Lug · Ago</p>
              </div>
            </div>
          </div>

          {/* RIGHT — Activities & CTA */}
          <div className="glass-card p-8 border-brand-green/20 space-y-8">
            <div className="space-y-4">
              <h3 className="text-white/60 text-sm font-semibold uppercase tracking-widest">
                Attività incluse
              </h3>
              <div
                className="flex flex-wrap gap-2"
                role="list"
                aria-label="Lista delle attività del camp"
              >
                {activities.map((a) => (
                  <div key={a} role="listitem">
                    <ActivityPill label={a} />
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-4">
              <p className="text-white/50 text-sm">
                Vuoi saperne di più o iscrivere tuo figlio? Contattaci direttamente su WhatsApp.
              </p>
              <a
                href="https://wa.me/393276339401"
                id="camp-cta-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center
                           !bg-gradient-to-r !from-brand-green !to-teal-500
                           !shadow-brand-green/25"
              >
                <span aria-hidden="true">💬</span>
                Richiedi Informazioni
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
//  SEZIONE 4 — AREA EVENTI MUSICALI (RSC)
// ─────────────────────────────────────────────

/** Sub-component: card per singola serata */
function EventCard({
  day,
  title,
  subtitle,
  description,
  emoji,
  color,
  id,
  href,
}: {
  day: string
  title: string
  subtitle: string
  description: string
  emoji: string
  color: 'purple' | 'blue' | 'yellow'
  id: string
  href?: string
}) {
  const colorMap = {
    purple: {
      badge: 'text-brand-purple border-brand-purple/30 bg-brand-purple/10',
      glow: 'bg-brand-purple/20',
      title: 'gradient-text-purple',
      hover: 'hover:border-brand-purple/30',
    },
    blue: {
      badge: 'text-brand-blue border-brand-blue/30 bg-brand-blue/10',
      glow: 'bg-brand-blue/20',
      title: 'text-brand-blue',
      hover: 'hover:border-brand-blue/30',
    },
    yellow: {
      badge: 'text-brand-yellow border-brand-yellow/30 bg-brand-yellow/10',
      glow: 'bg-brand-yellow/20',
      title: 'gradient-text-orange',
      hover: 'hover:border-brand-yellow/30',
    },
  }

  const c = colorMap[color]

  const className = `glass-card p-6 sm:p-8 space-y-4 relative overflow-hidden block
                  transition-all duration-300 ${c.hover}
                  hover:bg-white/8 hover:-translate-y-1`

  const content = (
    <>
      {/* Glow blob */}
      <div aria-hidden="true"
        className={`absolute -top-8 -right-8 w-32 h-32 ${c.glow} rounded-full blur-2xl`} />

      {/* Day badge */}
      <span className={`section-badge ${c.badge}`} aria-label={`Giorno: ${day}`}>
        {day}
      </span>

      {/* Emoji */}
      <p className="text-4xl" aria-hidden="true">{emoji}</p>

      {/* Title */}
      <h3 className={`font-display text-3xl sm:text-4xl tracking-widest ${c.title}`}>
        {title}
      </h3>

      {/* Subtitle / Partner */}
      <p className="text-white/50 text-xs font-semibold uppercase tracking-widest">
        {subtitle}
      </p>

      {/* Description */}
      <p className="text-white/65 text-sm leading-relaxed">{description}</p>
    </>
  )

  if (href) {
    return (
      <Link href={href} id={id} aria-label={`Serata del ${day}: ${title}`} className={className}>
        {content}
      </Link>
    )
  }

  return (
    <article id={id} aria-label={`Serata del ${day}: ${title}`} className={className}>
      {content}
    </article>
  )
}

function EventsSection() {
  const events = [
    {
      id: 'event-mercoledi',
      day: 'Mercoledì',
      emoji: '🎸',
      title: 'WILD ACOUSTIC',
      subtitle: 'Gorarella Production',
      description:
        'Musica acustica dal vivo in un\'atmosfera intima e rilassante. La serata perfetta per godersi il tepore estivo con buona musica e amici.',
      color: 'purple' as const,
    },
    {
      id: 'event-giovedi',
      day: 'Giovedì',
      emoji: '💃',
      title: 'SERATA LISCIO',
      subtitle: 'In collaborazione con LOL',
      description:
        'La tradizione della danza italiana incontra l\'estate di Grosseto. Balliamo insieme con la musica liscio che ha fatto la storia.',
      color: 'blue' as const,
      href: '/eventi/liscio',
    },
    {
      id: 'event-venerdi',
      day: 'Venerdì',
      emoji: '🔥',
      title: 'NOCHE LATINA',
      subtitle: 'In collaborazione con LOL',
      description:
        'Salsa, bachata, merengue e ritmi latini infiammano la pista. La serata più caliente dell\'estate grossetana, dal 10 giugno.',
      color: 'yellow' as const,
    },
  ]

  return (
    <section
      id="eventi"
      aria-labelledby="eventi-heading"
      className="relative py-24 sm:py-32"
    >
      {/* Top border */}
      <div aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent" />

      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-brand-yellow/8 rounded-full blur-3xl" />
      </div>

      <div className="section-container space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <span
            className="section-badge text-brand-purple border-brand-purple/30 bg-brand-purple/10"
            aria-label="Area eventi musicali"
          >
            <span aria-hidden="true">🎵</span>
            Area Musicale
          </span>

          <h2
            id="eventi-heading"
            className="font-display text-5xl sm:text-7xl tracking-widest"
          >
            <span className="gradient-text-purple">SERATE &amp;</span>
            <br />
            <span className="text-white">MUSICA LIVE... SOTTO LE STELLE</span>
          </h2>

          {/* Apertura info */}
          <p className="text-white/55 text-lg leading-relaxed max-w-xl">
            Ogni Mercoledì, Giovedì e Venerdì ci saranno 3 format che vi intratterranno per tutta l'estate.
          </p>
        </div>

        {/* CTA Programmazione */}
        <div className="flex justify-start">
          <Link
            href="/programmazione-luglio"
            id="eventi-cta-programmazione"
            className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-2xl font-semibold text-sm
                       bg-gradient-to-r from-brand-purple/20 to-brand-blue/20
                       border border-brand-purple/40 text-white
                       hover:from-brand-purple/40 hover:to-brand-blue/40 hover:border-brand-purple/70
                       hover:shadow-[0_0_32px_rgba(139,92,246,0.35)] hover:-translate-y-0.5
                       transition-all duration-300"
            aria-label="Visualizza la programmazione completa di Luglio 2026"
          >
            {/* Glow pill */}
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-blue opacity-0
                         group-hover:opacity-10 transition-opacity duration-300"
            />
            <span aria-hidden="true" className="text-xl">📅</span>
            <span>Programmazione Luglio 2026</span>
            <svg
              aria-hidden="true"
              className="w-4 h-4 opacity-60 group-hover:translate-x-1 transition-transform duration-200"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+39XXXXXXXXXX"
              id="eventi-cta-tel"
              className="btn-primary !bg-gradient-to-r !from-brand-purple !to-brand-blue !shadow-brand-purple/25"
            >
              <span aria-hidden="true">📞</span>
              Chiamaci
            </a>
            <a
              href="https://www.instagram.com/"
              id="eventi-cta-instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              aria-label="Seguici su Instagram"
            >
              <span aria-hidden="true">📸</span>
              Seguici su Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
//  PAGE ROOT — assembla le sezioni (RSC)
// ─────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* ── Server Component: Navbar fissa ── */}
      <Navbar />

      {/* ── Padding-top compensa la navbar fixed ── */}
      <div className="pt-16">

        {/* ── Server Component: Hero ── */}
        <HeroSection />

        {/* ─── Divisore decorativo ─── */}
        <div aria-hidden="true"
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* ── Server Component: Sezione Area Eventi ── */}
        <EventsSection />

        {/* ─── Divisore decorativo ─── */}
        <div aria-hidden="true"
          className="h-px bg-gradient-to-r from-transparent via-brand-green/20 to-transparent" />

        {/* ── Server Component: Sezione Summer Camp ── */}
        <SummerCampSection />

        {/* ─── Divisore decorativo ─── */}
        <div aria-hidden="true"
          className="h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />

        {/* ── Server Component: Sezione Basket ── */}
        <BasketSection />

      </div>
    </>
  )
}
