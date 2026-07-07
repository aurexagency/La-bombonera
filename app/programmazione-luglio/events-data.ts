/**
 * app/programmazione-luglio/events-data.ts
 * Dati statici degli eventi — importabili sia da RSC che da Client Components.
 * isoDateEnd: data di fine evento (inclusive). Per eventi single-day = isoDate.
 * Un evento è "passato" quando oggi > isoDateEnd (fuso orario IT gestito lato client).
 */

export type EventColor = 'purple' | 'blue' | 'yellow' | 'orange' | 'green' | 'pink' | 'teal'

export interface CalendarEvent {
  /** Etichetta leggibile, es. "MER 1" o "DOM 12 – MAR 14" */
  date: string
  /** Data ISO di inizio: confronto lato client */
  isoDate: string
  /** Data ISO di fine (inclusive): un evento multi-day è "finito" solo dopo questo giorno */
  isoDateEnd: string
  title: string
  subtitle?: string
  artist?: string
  color: EventColor
  emoji: string
  /** Numero di giorni per eventi multi-day (solo informativo per la UI) */
  span?: number
}

export const events: CalendarEvent[] = [
  { date: 'MER 1',          isoDate: '2026-07-01', isoDateEnd: '2026-07-01', title: 'WILD ACOUSTIC',                       subtitle: 'Gorarella Production',     artist: 'Clementine',        color: 'purple', emoji: '🎸' },
  { date: 'GIO 2',          isoDate: '2026-07-02', isoDateEnd: '2026-07-02', title: 'APERITIVO IN MUSICA',                  subtitle: 'LOL Club',                  artist: 'Simone Tognazzi',   color: 'blue',   emoji: '🥂' },
  { date: 'VEN 3',          isoDate: '2026-07-03', isoDateEnd: '2026-07-03', title: 'SERATA LATINA',                        subtitle: 'LOL Club',                  artist: 'Dj Valter',         color: 'yellow', emoji: '🔥' },
  { date: 'SAB 4',          isoDate: '2026-07-04', isoDateEnd: '2026-07-04', title: 'LA COMPAGNIA DEI DELITTI E CASTIGHI',  subtitle: 'Cena con Delitto',                                       color: 'pink',   emoji: '🕵️' },
  { date: 'MER 8',          isoDate: '2026-07-08', isoDateEnd: '2026-07-08', title: 'WILD ACOUSTIC',                        subtitle: 'Gorarella Production',      artist: 'Masu',              color: 'purple', emoji: '🎸' },
  { date: 'GIO 9',          isoDate: '2026-07-09', isoDateEnd: '2026-07-09', title: 'APERITIVO IN MUSICA',                  subtitle: 'LOL Club',                  artist: 'Alfa Music Band',   color: 'blue',   emoji: '🥂' },
  { date: 'VEN 10',         isoDate: '2026-07-10', isoDateEnd: '2026-07-10', title: 'SERATA LATINA',                        subtitle: 'LOL Club',                  artist: 'Michele Capecchi',  color: 'yellow', emoji: '🔥' },
  { date: 'SAB 11',         isoDate: '2026-07-11', isoDateEnd: '2026-07-11', title: 'EVENTO BENEFICENZA',                   subtitle: 'Memorial Christian Lenzi',                               color: 'teal',   emoji: '💙' },
  { date: 'DOM 12 – MAR 14',isoDate: '2026-07-12', isoDateEnd: '2026-07-14', title: 'TORNEO BASKET',                        subtitle: 'Trofeo Young U17-U15',                                   color: 'orange', emoji: '🏀', span: 3 },
  { date: 'MER 15',         isoDate: '2026-07-15', isoDateEnd: '2026-07-15', title: 'WILD ACOUSTIC',                        subtitle: 'Gorarella Production',      artist: 'Nasca e Innocente', color: 'purple', emoji: '🎸' },
  { date: 'GIO 16',         isoDate: '2026-07-16', isoDateEnd: '2026-07-16', title: 'APERITIVO IN MUSICA',                  subtitle: 'LOL Club',                  artist: 'Cafe Rouge',        color: 'blue',   emoji: '🥂' },
  { date: 'VEN 17',         isoDate: '2026-07-17', isoDateEnd: '2026-07-17', title: 'SERATA LATINA',                        subtitle: 'LOL Club',                  artist: 'Fonzy Dj',          color: 'yellow', emoji: '🔥' },
  { date: 'SAB 18',         isoDate: '2026-07-18', isoDateEnd: '2026-07-18', title: 'FESTA DELLA BOMBONERA',                subtitle: '',                                                       color: 'orange', emoji: '🎉' },
  { date: 'DOM 19',         isoDate: '2026-07-19', isoDateEnd: '2026-07-19', title: 'FREESTYLE RAP CONTEST',                subtitle: 'Il Muretto – Special Event',                             color: 'pink',   emoji: '🎤' },
  { date: 'MER 22',         isoDate: '2026-07-22', isoDateEnd: '2026-07-22', title: 'WILD ACOUSTIC',                        subtitle: 'Gorarella Production',      artist: 'La Mar',            color: 'purple', emoji: '🎸' },
  { date: 'GIO 23',         isoDate: '2026-07-23', isoDateEnd: '2026-07-23', title: 'APERITIVO IN MUSICA',                  subtitle: 'LOL Club',                  artist: 'Liliana e Company', color: 'blue',   emoji: '🥂' },
  { date: 'VEN 24',         isoDate: '2026-07-24', isoDateEnd: '2026-07-24', title: 'SERATA LATINA',                        subtitle: 'LOL Club',                  artist: 'Dj Valter',         color: 'yellow', emoji: '🔥' },
  { date: 'SAB 25',         isoDate: '2026-07-25', isoDateEnd: '2026-07-25', title: 'FESTA DELLA BOMBONERA',                subtitle: '',                                                       color: 'orange', emoji: '🎉' },
  { date: 'DOM 26 – LUN 27',isoDate: '2026-07-26', isoDateEnd: '2026-07-27', title: 'TORNEO BASKET',                        subtitle: 'Bombonera Cup',                                          color: 'orange', emoji: '🏀', span: 2 },
  { date: 'MER 29',         isoDate: '2026-07-29', isoDateEnd: '2026-07-29', title: 'WILD ACOUSTIC',                        subtitle: 'Gorarella Production',      artist: 'Una da Sola',       color: 'purple', emoji: '🎸' },
  { date: 'GIO 30',         isoDate: '2026-07-30', isoDateEnd: '2026-07-30', title: 'APERITIVO IN MUSICA',                  subtitle: 'LOL Club',                  artist: 'Emilio e Elena',    color: 'blue',   emoji: '🥂' },
  { date: 'VEN 31',         isoDate: '2026-07-31', isoDateEnd: '2026-07-31', title: 'SERATA LATINA',                        subtitle: 'LOL Club',                  artist: 'Fonzy Dj',          color: 'yellow', emoji: '🔥' },
]

/** Palette Tailwind per colore evento */
export const colorConfig: Record<EventColor, {
  border: string
  bg: string
  bgPast: string
  badge: string
  badgePast: string
  title: string
  glow: string
  dot: string
  dotPast: string
}> = {
  purple: {
    border:    'border-violet-500/30',
    bg:        'bg-violet-500/5 hover:bg-violet-500/10',
    bgPast:    'bg-white/3',
    badge:     'bg-violet-500/15 text-violet-300 border border-violet-500/30',
    badgePast: 'bg-white/8 text-white/30 border border-white/10',
    title:     'text-violet-300',
    glow:      'bg-violet-500/20',
    dot:       'bg-violet-500',
    dotPast:   'bg-white/20',
  },
  blue: {
    border:    'border-sky-500/30',
    bg:        'bg-sky-500/5 hover:bg-sky-500/10',
    bgPast:    'bg-white/3',
    badge:     'bg-sky-500/15 text-sky-300 border border-sky-500/30',
    badgePast: 'bg-white/8 text-white/30 border border-white/10',
    title:     'text-sky-300',
    glow:      'bg-sky-500/20',
    dot:       'bg-sky-500',
    dotPast:   'bg-white/20',
  },
  yellow: {
    border:    'border-amber-400/30',
    bg:        'bg-amber-400/5 hover:bg-amber-400/10',
    bgPast:    'bg-white/3',
    badge:     'bg-amber-400/15 text-amber-300 border border-amber-400/30',
    badgePast: 'bg-white/8 text-white/30 border border-white/10',
    title:     'text-amber-300',
    glow:      'bg-amber-400/20',
    dot:       'bg-amber-400',
    dotPast:   'bg-white/20',
  },
  orange: {
    border:    'border-orange-500/30',
    bg:        'bg-orange-500/5 hover:bg-orange-500/10',
    bgPast:    'bg-white/3',
    badge:     'bg-orange-500/15 text-orange-300 border border-orange-500/30',
    badgePast: 'bg-white/8 text-white/30 border border-white/10',
    title:     'text-orange-300',
    glow:      'bg-orange-500/20',
    dot:       'bg-orange-500',
    dotPast:   'bg-white/20',
  },
  green: {
    border:    'border-emerald-500/30',
    bg:        'bg-emerald-500/5 hover:bg-emerald-500/10',
    bgPast:    'bg-white/3',
    badge:     'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30',
    badgePast: 'bg-white/8 text-white/30 border border-white/10',
    title:     'text-emerald-300',
    glow:      'bg-emerald-500/20',
    dot:       'bg-emerald-500',
    dotPast:   'bg-white/20',
  },
  pink: {
    border:    'border-pink-500/30',
    bg:        'bg-pink-500/5 hover:bg-pink-500/10',
    bgPast:    'bg-white/3',
    badge:     'bg-pink-500/15 text-pink-300 border border-pink-500/30',
    badgePast: 'bg-white/8 text-white/30 border border-white/10',
    title:     'text-pink-300',
    glow:      'bg-pink-500/20',
    dot:       'bg-pink-500',
    dotPast:   'bg-white/20',
  },
  teal: {
    border:    'border-teal-500/30',
    bg:        'bg-teal-500/5 hover:bg-teal-500/10',
    bgPast:    'bg-white/3',
    badge:     'bg-teal-500/15 text-teal-300 border border-teal-500/30',
    badgePast: 'bg-white/8 text-white/30 border border-white/10',
    title:     'text-teal-300',
    glow:      'bg-teal-500/20',
    dot:       'bg-teal-500',
    dotPast:   'bg-white/20',
  },
}
