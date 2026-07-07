import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Serata Liscio | La Bombonera Eventi',
}

export default function LiscioPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="section-container space-y-16">
        
        {/* Intestazione */}
        <div className="space-y-4">
          <Link href="/#eventi" className="text-white/50 hover:text-white text-sm flex items-center gap-2 mb-8 w-fit transition-colors">
            <span aria-hidden="true">&larr;</span> Torna agli eventi
          </Link>
          
          <span className="section-badge text-brand-blue border-brand-blue/30 bg-brand-blue/10">
            Giovedì · In collaborazione con LOL
          </span>
          <h1 className="font-display text-5xl sm:text-7xl tracking-widest text-brand-blue">
            SERATA LISCIO
          </h1>
          <p className="text-white/65 text-lg leading-relaxed max-w-2xl">
            La tradizione della danza italiana incontra l'estate di Grosseto. Balliamo insieme con la musica liscio che ha fatto la storia.
          </p>
        </div>

        {/* Sezioni da riempire */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Descrizione &amp; Foto</h2>
            <p className="text-white/50 italic">[Qui inseriremo la descrizione dettagliata, la gallery di foto o il player video della serata...]</p>
          </section>

          <section className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Programmazione &amp; Prenotazioni</h2>
            <p className="text-white/50 italic">[Qui spiegheremo come funzionano le prenotazioni, quali sono gli orari esatti, la line-up o i DJ...]</p>
          </section>
        </div>
        
      </div>
    </main>
  )
}
