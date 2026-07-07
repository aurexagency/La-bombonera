/**
 * app/layout.tsx
 * ─────────────────────────────────────────────
 * TYPE: React Server Component (RSC) — NO "use client" directive.
 * RESPONSIBILITY: Root shell, metadata SEO, font loading, global styles.
 * ─────────────────────────────────────────────
 */
import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'

// ─── Google Fonts — loaded server-side, zero layout shift ───────────────────
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'La Bombonera | Basket · Summer Camp · Musica — Grosseto',
  description:
    'La Bombonera di Grosseto, Via Lago di Varano: campo da basket gratuito illuminato, Kids Summer Camp (5-13 anni) con pranzo incluso, e serate di musica live ed eventi danzanti. Il nuovo polo ricreativo dell\'estate.',
  keywords: [
    'La Bombonera',
    'Grosseto',
    'basket Grosseto',
    'summer camp bambini Grosseto',
    'campo basket gratuito',
    'serate musica Grosseto',
    'musica latina Grosseto',
    'PGS Italia',
    'Via Lago di Varano',
  ],
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    title: 'La Bombonera — Sport, Kids & Musica a Grosseto',
    description:
      'Il nuovo polo ricreativo di Grosseto: campo basket gratuito, Summer Camp per bambini e serate di musica live.',
    siteName: 'La Bombonera Grosseto',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0F',
}

// ─── Root Layout ─────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="it"
      className={`${inter.variable} ${bebasNeue.variable} overflow-x-clip w-full`}
      suppressHydrationWarning
    >
      <body className="font-sans bg-brand-dark text-white overflow-x-clip w-full">
        {/* Skip to main content — accessibilità */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-orange focus:text-white focus:rounded-lg focus:font-semibold"
        >
          Vai al contenuto principale
        </a>

        <main id="main-content">{children}</main>

        {/* Footer — Server Component */}
        <footer
          role="contentinfo"
          className="bg-brand-dark-2 border-t border-white/5 py-10"
        >
          <div className="section-container text-center space-y-4">
            <p className="font-display text-3xl gradient-text-orange tracking-widest">
              LA BOMBONERA
            </p>
            <p className="text-white/40 text-sm">
              Via Lago di Varano, 18 · Grosseto 
            </p>
            <p className="text-white/25 text-xs mt-4">
              © {new Date().getFullYear()} La Bombonera — Tutti i diritti riservati.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
