'use client'

/**
 * app/programmazione-luglio/EventsTimeline.tsx
 * ─────────────────────────────────────────────
 * TYPE: Client Component — necessario per accedere a new Date() senza
 * hydration mismatch. La data "oggi" viene impostata via useEffect,
 * quindi il server e il primo render client sono identici (isPast = false
 * per tutti), poi dopo l'idratazione gli eventi passati vengono aggiornati.
 *
 * Strategia anti-hydration-mismatch:
 *   - todayIso parte come null (server + primo render client → tutti attivi)
 *   - useEffect setta la data locale del client → React aggiorna solo i nodi
 *     che cambiano, senza errori di idratazione
 */

import { useState, useEffect } from 'react'
import { events, colorConfig, type CalendarEvent, type EventColor } from './events-data'

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Restituisce la data odierna come stringa ISO "YYYY-MM-DD"
 * nel fuso orario locale del client (es. Europe/Rome).
 */
function getTodayIso(): string {
  const now = new Date()
  const yyyy = now.getFullYear()
  const mm   = String(now.getMonth() + 1).padStart(2, '0')
  const dd   = String(now.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

/**
 * Un evento è "passato" quando la data odierna è SUCCESSIVA alla sua
 * data di fine (isoDateEnd). Questo significa che l'evento
 * è ancora "attivo" nel giorno stesso in cui si svolge.
 */
function isPastEvent(event: CalendarEvent, todayIso: string): boolean {
  return todayIso > event.isoDateEnd
}

// ─── EventRow ─────────────────────────────────────────────────────────────────

function EventRow({
  event,
  index,
  isPast,
}: {
  event: CalendarEvent
  index: number
  isPast: boolean
}) {
  const c      = colorConfig[event.color]
  const isEven = index % 2 === 0

  return (
    <article
      className={`group relative flex gap-0 transition-all duration-500
                  ${isEven ? '' : 'flex-row-reverse'}
                  ${isPast ? 'opacity-55 grayscale' : ''}`}
      aria-label={`Evento: ${event.date} – ${event.title}${isPast ? ' (concluso)' : ''}`}
    >
      {/* Date column — desktop */}
      <div
        className={`hidden md:flex flex-col items-${isEven ? 'end' : 'start'}
                    w-32 shrink-0 pt-1 gap-1 ${isEven ? 'pr-6' : 'pl-6'}`}
      >
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-bold
                      tracking-widest uppercase transition-colors duration-300
                      ${isPast ? c.badgePast : c.badge}`}
        >
          {event.date}
        </span>
      </div>

      {/* Timeline spine */}
      <div className="relative flex flex-col items-center w-8 shrink-0">
        <div
          className={`mt-2 w-3 h-3 rounded-full ring-2 ring-offset-2
                      ring-offset-[#0A0A0F] ring-current shrink-0 z-10
                      transition-all duration-300
                      ${isPast ? c.dotPast : c.dot}
                      ${isPast ? '' : 'group-hover:scale-125'}`}
        />
        <div className="flex-1 w-px bg-white/8 mt-1" />
      </div>

      {/* Card */}
      <div
        className={`flex-1 mb-6
                    ${isEven ? 'pl-4 pr-0 md:pr-32' : 'pr-4 pl-0 md:pl-32'}`}
      >
        <div
          className={`relative overflow-hidden rounded-2xl border p-5
                      backdrop-blur-sm transition-all duration-300
                      ${isPast
                        ? 'border-white/8 ' + c.bgPast
                        : c.border + ' ' + c.bg +
                          ' group-hover:shadow-lg group-hover:-translate-y-0.5'
                      }`}
        >
          {/* Glow accent — solo per eventi futuri */}
          {!isPast && (
            <div
              aria-hidden="true"
              className={`absolute -top-6 -right-6 w-24 h-24 ${c.glow}
                          rounded-full blur-2xl opacity-0
                          group-hover:opacity-100 transition-opacity duration-300`}
            />
          )}

          {/* ── Badge "EVENTO FINITO" ── */}
          {isPast && (
            <div
              aria-label="Evento concluso"
              className="absolute top-3 right-3 z-10
                         inline-flex items-center gap-1.5
                         px-2.5 py-1 rounded-full
                         bg-white/8 border border-white/15
                         text-white/45 text-[10px] font-bold
                         uppercase tracking-widest select-none"
            >
              <span aria-hidden="true">✓</span>
              Evento Finito
            </div>
          )}

          {/* Mobile date badge */}
          <span
            className={`inline-block md:hidden mb-2 px-3 py-1 rounded-full
                        text-xs font-bold tracking-widest uppercase
                        ${isPast ? c.badgePast : c.badge}`}
          >
            {event.date}
          </span>

          <div className="flex items-start gap-4 relative">
            <span
              className={`text-3xl shrink-0 transition-all duration-300
                          ${isPast ? 'opacity-40' : ''}`}
              aria-hidden="true"
            >
              {event.emoji}
            </span>
            <div className="space-y-1 min-w-0">
              <h3
                className={`font-display text-xl sm:text-2xl tracking-widest
                            leading-tight transition-colors duration-300
                            ${isPast ? 'text-white/40' : c.title}`}
              >
                {event.title}
              </h3>
              {event.subtitle && (
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wider">
                  {event.subtitle}
                </p>
              )}
              {event.artist && (
                <p className={`text-sm font-medium transition-colors duration-300
                               ${isPast ? 'text-white/35' : 'text-white/80'}`}>
                  🎤 {event.artist}
                </p>
              )}
              {event.span && event.span > 1 && (
                <span
                  className="inline-flex items-center gap-1 px-2.5 py-1
                             rounded-full text-xs font-semibold
                             bg-white/8 text-white/50 mt-1"
                >
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

// ─── Legenda colori (Client per poter essere riutilizzata qui) ─────────────────

const LEGEND = [
  { color: 'purple' as EventColor, label: 'Wild Acoustic',         emoji: '🎸' },
  { color: 'blue'   as EventColor, label: 'Aperitivo in Musica',   emoji: '🥂' },
  { color: 'yellow' as EventColor, label: 'Serata Latina',         emoji: '🔥' },
  { color: 'orange' as EventColor, label: 'Torneo Basket / Festa', emoji: '🏀' },
  { color: 'pink'   as EventColor, label: 'Special Event',         emoji: '🎤' },
  { color: 'teal'   as EventColor, label: 'Beneficenza',           emoji: '💙' },
]

// ─── Export principale ────────────────────────────────────────────────────────

export default function EventsTimeline() {
  /**
   * null = non ancora idratato → tutti gli eventi appaiono "attivi"
   * (uguale al render server → zero hydration mismatch)
   */
  const [todayIso, setTodayIso] = useState<string | null>(null)

  useEffect(() => {
    setTodayIso(getTodayIso())
  }, [])

  return (
    <>
      {/* ── Legenda colori ── */}
      <section
        aria-label="Legenda tipologie di eventi"
        className="max-w-5xl mx-auto px-4 sm:px-8 mb-12"
      >
        <div className="flex flex-wrap gap-3">
          {LEGEND.map(({ color, label, emoji }) => {
            const c = colorConfig[color]
            return (
              <span
                key={color}
                className={`inline-flex items-center gap-2 px-3 py-1.5
                            rounded-full text-xs font-semibold ${c.badge}`}
              >
                <span aria-hidden="true">{emoji}</span>
                {label}
              </span>
            )
          })}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section
        aria-labelledby="timeline-heading"
        className="max-w-5xl mx-auto px-4 sm:px-8 pb-16"
      >
        <h2 id="timeline-heading" className="sr-only">
          Timeline eventi di Luglio 2026
        </h2>

        <div className="relative">
          {/* Linea verticale — desktop */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-[8.5rem] top-0 bottom-0 w-px
                       bg-gradient-to-b from-transparent via-white/10 to-transparent"
          />

          {events.map((event, i) => (
            <EventRow
              key={`${event.isoDate}-${event.title}`}
              event={event}
              index={i}
              isPast={todayIso !== null && isPastEvent(event, todayIso)}
            />
          ))}
        </div>
      </section>
    </>
  )
}
