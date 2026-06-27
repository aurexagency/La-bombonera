---
trigger: always_on
---

# Google Antigravity - Project: La Bombonera Landing Page
## System Directives & Rules for AI Agents

**1. Ruoli degli Agenti**
* **Claude 4.6:** Responsabile dell'architettura del codice, della creazione dei componenti UI (React/Next.js) e della logica strutturale. Massima priorità a codice pulito, accessibilità, e utilizzo dei Server Components dove possibile.
* **Gemini Pro 3.1:** Responsabile della generazione dei contenuti, copywriting dinamico, SEO on-page e adattamento del tono di voce.

**2. Stack Tecnologico Selezionato**
* **Framework Full-Stack:** Next.js (App Router per sfruttare React Server Components).
* **Styling:** Tailwind CSS.
* **Linguaggio:** TypeScript (per type safety e scalabilità).

**3. Contesto di Business: "La Bombonera" (Grosseto, Via Lago di Varano)**
La landing page deve presentare il nuovo polo ricreativo "La Bombonera", suddiviso in tre macro-aree:

* **Area Sportiva (Basket):**
    * Nuovo campo da basket aperto a tutti gratuitamente.
    * Struttura illuminata disponibile sia di giorno che di sera.
    * Presenza di un punto ristoro per bere e mangiare.
    * Indirizzo: Via Lago di Varano.
* **Kids Summer Camp (Pianeta Sport & PGS):**
    * Target d'età: dai 5 ai 13 anni.
    * Periodo e Orari: Giugno, Luglio, Agosto, dal lunedì al venerdì (8.00 - 16.00).
    * Attività incluse: Calcio a 5, Minivolley, Touchtennis, Minibasket, Bocce, Tiro con l'arco, Giochi di gruppo e società, laboratori creativi, giochi d'acqua e piscina.
    * Costo: 130 € a settimana (include iscrizione, kit benvenuto, pranzo in loco, assicurazione).
* **Area Eventi Musicali (Ex Blue Park):**
    * Struttura ristrutturata e pronta a partire dal 10 di giugno per serate danzanti e musica dal vivo.
    * Mercoledì: Wild Acoustic Music a cura di Gorarella Production (musica soft dal vivo).
    * Giovedì: Serata danzante con il liscio, in collaborazione con il locale LOL.
    * Venerdì: Serata di musica latina, in collaborazione con il locale LOL.

**4. Regole di Sviluppo (Strict)**
* Implementare design mobile-first con Tailwind CSS.
* Utilizzare il Next.js App Router (`app/`).
* Mantenere i componenti leggeri: usare Client Components (`"use client"`) solo dove è strettamente necessaria l'interattività dell'utente; per il resto, sfruttare i Server Components.