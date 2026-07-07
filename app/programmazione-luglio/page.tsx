/**
 * app/programmazione-luglio/page.tsx
 * ─────────────────────────────────────────────
 * TYPE: React Server Component (RSC)
 * Programmazione completa degli eventi di Luglio 2026
 * Layout: Timeline verticale + griglia settimanale
 */

import type { Metadata } from 'next'
import Link from 'next/link'

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Programmazione Luglio 2026 | La Bombonera Grosseto',
  description:
    'Tutti gli eventi di Luglio 2026 a La Bombonera: Wild Acoustic, Aperitivo in Musica, Serate Latine, Torneo Basket e molto altro. Grosseto – Via Lago di Varano 18.',
}

// ─── Tipi ─────────────────────────────────────────────────────────────────────
type EventColor = 'purple' | 'blue' | 'yellow' | 'orange' | 'green' | 'pink' | 'teal'

interface CalendarEvent {
  date: string        // "MER 1", "GIO 2", ecc.
  dateNum: number     // giorno del mese
  title: string
  subtitle?: string
  artist?: string
  color: EventColor
  emoji: string
  span?: number       // quanti giorni occupa (per eventi multi-day)
}

// ─── Palette colori per tipo evento ──────────────────────────────────────────
const colorConfig: Record<EventColor, {
  border: string
  bg: string
  badge: string
  title: string
  glow: string
  dot: string
}> = {
  purple: {
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/5 hover:bg-violet-500/10',
    badge: 'bg-violet-500/15 text-violet-300 border border-violet-500/30',
    title: 'text-violet-300',
    glow: 'bg-violet-500/20',
    dot: 'bg-violet-500',
  },
  blue: {
    border: 'border-sky-500/30',
    bg: 'bg-sky-500/5 hover:bg-sky-500/10',
    badge: 'bg-sky-500/15 text-sky-300 border border-sky-500/30',
    title: 'text-sky-300',
    glow: 'bg-sky-500/20',
    dot: 'bg-sky-500',
  },
  yellow: {
    border: 'border-amber-400/30',
    bg: 'bg-amber-400/5 hover:bg-amber-400/10',
    badge: 'bg-amber-400/15 text-amber-300 border border-amber-400/30',
    title: 'text-amber-300',
    glow: 'bg-amber-400/20',
    dot: 'bg-amber-400',
  },
  orange: {
    border: 'border-orange-500/30',
    bg: 'bg-orange-500/5 hover:bg-orange-500/10',
    badge: 'bg-orange-500/15 text-orange-300 border border-orange-500/30',
    title: 'text-orange-300',
    glow: 'bg-orange-500/20',
    dot: 'bg-orange-500',
  },
  green: {
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/5 hover:bg-emerald-500/10',
    badge: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30',
    title: 'text-emerald-300',
    glow: 'bg-emerald-500/20',
    dot: 'bg-emerald-500',
  },
  pink: {
    border: 'border-pink-500/30',
    bg: 'bg-pink-500/5 hover:bg-pink-500/10',
    badge: 'bg-pink-500/15 text-pink-300 border border-pink-500/30',
    title: 'text-pink-300',
    glow: 'bg-pink-500/20',
    dot: 'bg-pink-500',
  },
  teal: {
    border: 'border-teal-500/30',
    bg: 'bg-teal-500/5 hover:bg-teal-500/10',
    badge: 'bg-teal-500/15 text-teal-300 border border-teal-500/30',
    title: 'text-teal-300',
    glow: 'bg-teal-500/20',
    dot: 'bg-teal-500',
  },
}

// ─── Dati eventi ──────────────────────────────────────────────────────────────
const events: CalendarEvent[] = [
  { date: 'MER 1',  dateNum: 1,  title: 'WILD ACOUSTIC',                      subtitle: 'Gorarella Production',  artist: 'Clementine',          color: 'purple', emoji: '🎸' },
  { date: 'GIO 2',  dateNum: 2,  title: 'APERITIVO IN MUSICA',                 subtitle: 'LOL Club',              artist: 'Simone Tognazzi',      color: 'blue',   emoji: '🥂' },
  { date: 'VEN 3',  dateNum: 3,  title: 'SERATA LATINA',                       subtitle: 'LOL Club',              artist: 'Dj Valter',            color: 'yellow', emoji: '🔥' },
  { date: 'SAB 4',  dateNum: 4,  title: 'LA COMPAGNIA DEI DELITTI E CASTIGHI', subtitle: 'Cena con Delitto',      color: 'pink',   emoji: '🕵️' },
  { date: 'MER 8',  dateNum: 8,  title: 'WILD ACOUSTIC',                       subtitle: 'Gorarella Production',  artist: 'Masu',                 color: 'purple', emoji: '🎸' },
  { date: 'GIO 9',  dateNum: 9,  title: 'APERITIVO IN MUSICA',                 subtitle: 'LOL Club',              artist: 'Alfa Music Band',      color: 'blue',   emoji: '🥂' },
  { date: 'VEN 10', dateNum: 10, title: 'SERATA LATINA',                       subtitle: 'LOL Club',              artist: 'Michele Capecchi',     color: 'yellow', emoji: '🔥' },
  { date: 'SAB 11', dateNum: 11, title: 'EVENTO BENEFICENZA',                  subtitle: 'Memorial Christian Lenzi',                              color: 'teal',   emoji: '💙' },
  { date: 'DOM 12 – MAR 14', dateNum: 12, title: 'TORNEO BASKET',             subtitle: 'Trofeo Young U17-U15',                                   color: 'orange', emoji: '🏀', span: 3 },
  { date: 'MER 15', dateNum: 15, title: 'WILD ACOUSTIC',                       subtitle: 'Gorarella Production',  artist: 'Nasca e Innocente',    color: 'purple', emoji: '🎸' },
  { date: 'GIO 16', dateNum: 16, title: 'APERITIVO IN MUSICA',                 subtitle: 'LOL Club',              artist: 'Cafe Rouge',           color: 'blue',   emoji: '🥂' },
  { date: 'VEN 17', dateNum: 17, title: 'SERATA LATINA',                       subtitle: 'LOL Club',              artist: 'Fonzy Dj',             color: 'yellow', emoji: '🔥' },
  { date: 'SAB 18', dateNum: 18, title: 'FESTA DELLA BOMBONERA',               subtitle: '',                                                       color: 'orange', emoji: '🎉' },
  { date: 'DOM 19', dateNum: 19, title: 'FREESTYLE RAP CONTEST',               subtitle: 'Il Muretto – Special Event',                            color: 'pink',   emoji: '🎤' },
  { date: 'MER 22', dateNum: 22, title: 'WILD ACOUSTIC',                       subtitle: 'Gorarella Production',  artist: 'La Mar',               color: 'purple', emoji: '🎸' },
  { date: 'GIO 23', dateNum: 23, title: 'APERITIVO IN MUSICA',                 subtitle: 'LOL Club',              artist: 'Liliana e Company',    color: 'blue',   emoji: '🥂' },
  { date: 'VEN 24', dateNum: 24, title: 'SERATA LATINA',                       subtitle: 'LOL Club',              artist: 'Dj Valter',            color: 'yellow', emoji: '🔥' },
  { date: 'SAB 25', dateNum: 25, title: 'FESTA DELLA BOMBONERA',               subtitle: '',                                                       color: 'orange', emoji: '🎉' },
  { date: 'DOM 26 – LUN 27', dateNum: 26, title: 'TORNEO BASKET',             subtitle: 'Bombonera Cup',                                          color: 'orange', emoji: '🏀', span: 2 },
  { date: 'MER 29', dateNum: 29, title: 'WILD ACOUSTIC',                       subtitle: 'Gorarella Production',  artist: 'Una da Sola',          color: 'purple', emoji: '🎸' },
  { date: 'GIO 30', dateNum: 30, title: 'APERITIVO IN MUSICA',                 subtitle: 'LOL Club',              artist: 'Emilio e Elena',       color: 'blue',   emoji: '🥂' },
  { date: 'VEN 31', dateNum: 31, title: 'SERATA LATINA',                       subtitle: 'LOL Club',              artist: 'Fonzy Dj',             color: 'yellow', emoji: '🔥' },
]

// ─── Componenti ───────────────────────────────────────────────────────────────

function EventRow({ event, index }: { event: CalendarEvent; index: number }) {
  const c = colorConfig[event.color]
  const isEven = index % 2 === 0

  return (
    <article
      className={`group relative flex gap-0 transition-all duration-300 ${isEven ? '' : 'flex-row-reverse'}`}
      aria-label={`Evento: ${event.date} – ${event.title}`}
    >
      {/* Date column */}
      <div className={`hidden md:flex flex-col items-${isEven ? 'end' : 'start'} w-32 shrink-0 pt-1 gap-1 ${isEven ? 'pr-6' : 'pl-6'}`}>
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase ${c.badge}`}>
          {event.date}
        </span>
      </div>

      {/* Timeline spine */}
      <div className="relative flex flex-col items-center w-8 shrink-0">
        <div className={`mt-2 w-3 h-3 rounded-full ring-2 ring-offset-2 ring-offset-[#0A0A0F] ring-current ${c.dot} shrink-0 z-10 transition-transform duration-300 group-hover:scale-125`} />
        <div className="flex-1 w-px bg-white/8 mt-1" />
      </div>

      {/* Card */}
      <div className={`flex-1 mb-6 ${isEven ? 'pl-4 pr-0 md:pr-32' : 'pr-4 pl-0 md:pl-32'}`}>
        <div
          className={`relative overflow-hidden rounded-2xl border p-5 transition-all duration-300
                      ${c.border} ${c.bg} backdrop-blur-sm
                      group-hover:shadow-lg group-hover:-translate-y-0.5`}
        >
          {/* Glow accent */}
          <div aria-hidden="true" className={`absolute -top-6 -right-6 w-24 h-24 ${c.glow} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

          {/* Mobile date badge */}
          <span className={`inline-block md:hidden mb-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase ${c.badge}`}>
            {event.date}
          </span>

          <div className="flex items-start gap-4 relative">
            <span className="text-3xl shrink-0" aria-hidden="true">{event.emoji}</span>
            <div className="space-y-1 min-w-0">
              <h3 className={`font-display text-xl sm:text-2xl tracking-widest leading-tight ${c.title}`}>
                {event.title}
              </h3>
              {event.subtitle && (
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider">
                  {event.subtitle}
                </p>
              )}
              {event.artist && (
                <p className="text-white/80 text-sm font-medium">
                  🎤 {event.artist}
                </p>
              )}
              {event.span && event.span > 1 && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/8 text-white/60 mt-1">
                  <span aria-hidden="true">📆</span>
                  {event.span} giorni
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function InfoCard({ emoji, title, children }: { emoji: string; title: string; children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm p-6 space-y-3 hover:border-white/20 hover:bg-white/5 transition-all duration-300">
      <div className="flex items-center gap-3">
        <span className="text-2xl" aria-hidden="true">{emoji}</span>
        <h3 className="text-white font-bold text-sm uppercase tracking-widest">{title}</h3>
      </div>
      <div className="text-white/60 text-sm leading-relaxed">{children}</div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
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
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 text-sm font-medium mb-10 transition-colors duration-200 group"
            aria-label="Torna alla sezione eventi"
          >
            <svg aria-hidden="true" className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Torna agli eventi
          </Link>

          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-violet-500/10 text-violet-300 border border-violet-500/30 mb-6">
            <span aria-hidden="true">📅</span>
            La Bombonera · Estate 2026
          </span>

          {/* Titolo */}
          <h1 className="font-display text-6xl sm:text-8xl tracking-widest leading-none mb-6">
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-sky-400 bg-clip-text text-transparent">
              LUGLIO
            </span>
            <br />
            <span className="text-white">2026</span>
          </h1>

          <p className="text-white/55 text-lg max-w-xl leading-relaxed">
            Tutta la programmazione del mese — musica live, serate danzanti,
            tornei e special event. Dal <strong className="text-white/80">1 al 31 Luglio</strong> sotto le stelle di Grosseto.
          </p>
        </div>
      </header>

      {/* ── Legenda colori ── */}
      <section aria-label="Legenda tipologie di eventi" className="max-w-5xl mx-auto px-4 sm:px-8 mb-12">
        <div className="flex flex-wrap gap-3">
          {[
            { color: 'purple', label: 'Wild Acoustic',         emoji: '🎸' },
            { color: 'blue',   label: 'Aperitivo in Musica',   emoji: '🥂' },
            { color: 'yellow', label: 'Serata Latina',         emoji: '🔥' },
            { color: 'orange', label: 'Torneo Basket / Festa', emoji: '🏀' },
            { color: 'pink',   label: 'Special Event',         emoji: '🎤' },
            { color: 'teal',   label: 'Beneficenza',           emoji: '💙' },
          ].map(({ color, label, emoji }) => {
            const c = colorConfig[color as EventColor]
            return (
              <span key={color} className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${c.badge}`}>
                <span aria-hidden="true">{emoji}</span>
                {label}
              </span>
            )
          })}
        </div>
      </section>

      {/* ── Timeline eventi ── */}
      <section
        aria-labelledby="timeline-heading"
        className="max-w-5xl mx-auto px-4 sm:px-8 pb-16"
      >
        <h2 id="timeline-heading" className="sr-only">Timeline eventi di Luglio 2026</h2>

        <div className="relative">
          {/* Linea verticale centrale - visibile su md+ */}
          <div aria-hidden="true" className="hidden md:block absolute left-[8.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          {events.map((event, i) => (
            <EventRow key={`${event.date}-${event.title}`} event={event} index={i} />
          ))}
        </div>
      </section>

      {/* ── Info cards ── */}
      <section
        aria-labelledby="info-heading"
        className="max-w-5xl mx-auto px-4 sm:px-8 pb-24"
      >
        <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

        <h2 id="info-heading" className="sr-only">Informazioni pratiche e partner</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <InfoCard emoji="🏀" title="Playground – Accesso Libero">
            <ul className="space-y-1">
              <li><strong className="text-white/80">Dom · Lun · Mar</strong><br />ore 8:00 – 21:00</li>
              <li><strong className="text-white/80">Mer · Gio · Ven · Sab</strong><br />ore 8:00 – 19:00</li>
            </ul>
          </InfoCard>

          <InfoCard emoji="🎤" title="Appuntamenti Fissi">
            Ogni <strong className="text-white/80">domenica</strong>, appuntamento settimanale con{' '}
            <strong className="text-white/80">Il Muretto</strong>.
          </InfoCard>

          <InfoCard emoji="🤝" title="Partners & Sponsor">
            In collaborazione con{' '}
            <strong className="text-white/80">Gorarella Production</strong>,{' '}
            <strong className="text-white/80">LOL Club</strong>,{' '}
            <strong className="text-white/80">Mu.Gr. Il Muretto</strong>,{' '}
            <strong className="text-white/80">Futsal Maremma</strong>.
            <br /><br />
            Sponsored by{' '}
            <strong className="text-white/80">Elettro Meccanica Moderna</strong>{' '}
            <em className="text-white/40">(Impianti Fotovoltaici)</em>.
          </InfoCard>

          <InfoCard emoji="📍" title="Location & Info">
            <address className="not-italic space-y-2">
              <p>Grosseto – Via Lago di Varano, 18</p>
              <a
                href="tel:+393926859507"
                className="inline-flex items-center gap-1 text-violet-300 hover:text-violet-100 transition-colors duration-200 font-semibold"
                aria-label="Chiama il 392 685 9507"
              >
                📞 392 685 9507
              </a>
            </address>
          </InfoCard>
        </div>

        {/* Back CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/#eventi"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm
                       border border-white/15 text-white/60
                       hover:border-white/30 hover:text-white hover:bg-white/5
                       transition-all duration-300"
          >
            <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Torna alla homepage
          </Link>
        </div>
      </section>
    </main>
  )
}
