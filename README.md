# Portfolio di Federico Lucifora (versione Astro)

Il sito è lo stesso del vecchio portfolio (stesso aspetto, stessi indirizzi), ma costruito con Astro:
menu, stili e struttura delle pagine stanno in un posto solo, e i testi stanno in file separati dal codice.

## Come vedere il sito in locale

Nel terminale di VS Code (Command Prompt), dentro la cartella del progetto:

    npm run dev

Poi apri **http://localhost:4321/** (il sito pubblicato è su https://federicolucifora.github.io/).
Per fermare l'anteprima: `Ctrl+C`.

## Dove sta cosa

| Cosa vuoi cambiare | File |
|---|---|
| Testo della home (presentazione, competenze) | `src/data/home.yaml` |
| Esperienze, premi, formazione, testo "about" | `src/data/about.yaml` |
| Email, LinkedIn, Instagram | `src/data/site.yaml` |
| Un progetto (testi, immagini, video) | `src/content/projects/nome-progetto.yaml` |
| Menu in alto | `src/components/Navbar.astro` |
| Struttura comune a tutte le pagine (titolo, anteprime social) | `src/layouts/Layout.astro` |
| Aspetto (colori, dimensioni) | `src/styles/*.css` |
| Animazione della foto in home | `src/scripts/home.js` |
| Immagini | `src/assets/materials/` |
| Icone del sito (favicon) | `public/favicon/` |
| Font, prefetch, indirizzo del sito | `astro.config.mjs` |

## Le immagini

Nomi di cartelle e file del progetto: sempre in inglese.

Le immagini stanno in `src/assets/materials/`. Puoi caricarle grandi e pesanti come escono dal programma:
quando il sito viene costruito, Astro le trasforma da solo in file WebP leggeri, in più dimensioni,
e ogni visitatore scarica solo quella adatta al suo schermo. Le immagini più in basso nella pagina
vengono scaricate solo quando ci si arriva scorrendo.

Le immagini che non vuoi pubblicare ma vuoi tenere vanno in `unused-images/` (fuori da `src`):
tutto quello che sta dentro `src/assets/materials/` finisce online, anche se nessuna pagina lo usa.

Se un percorso scritto in un file `.yaml` è sbagliato, `npm run dev` e `npm run build` mostrano un errore
"Immagine non trovata" con il nome del file da controllare.

## Aggiungere un nuovo progetto

1. Copia le immagini in `src/assets/materials/nome-progetto/`.
2. In `src/content/projects/` duplica un file esistente (per esempio `ferrari.yaml`) e rinominalo `nome-progetto.yaml`.
3. Cambia i testi. Nei percorsi delle immagini scrivi solo la parte dopo `materials/` (esempio: `nome-progetto/foto1.jpg`).
   Per `ogImage` (l'immagine che compare quando il link viene condiviso) puoi scrivere `materials/nome-progetto/foto1.jpg`.
4. Salva: la pagina `work/nome-progetto.html` e la card nel portfolio compaiono da sole.

Campi utili di un progetto:
- `order`: posizione nella griglia della pagina work (0 = primo).
- `listed: false`: la pagina esiste ma non compare nella griglia, non ha "Previous / Next" e Google non la indicizza.
- `featured: true`: il progetto compare anche nella home.
- `areas`: le aree del progetto per i filtri (`3d`, `visual`, `interactive`, `motion`).
- `year`, `client`, `tools`: la scheda in alto nella pagina del progetto. Se un campo manca, quella riga non compare.
- `blocks`: la sequenza di testi, immagini e video della pagina. I testi diventano paragrafi a tutta larghezza;
  immagini e video tra un testo e l'altro vengono messi **da soli** in righe della stessa altezza, sempre interi.
  Le vecchie misure dei blocchi (`width`, `height`, `fit`, `position`) non servono più e vengono ignorate.
- Cliccando un'immagine (anche la copertina) si apre lo zoom a schermo intero.

## Pubblicare su GitHub

1. Controlla il sito in locale con `npm run dev`.
2. Su GitHub, nel repository: **Settings → Pages → Source: GitHub Actions** (si fa una volta sola).
3. Carica le modifiche (commit e push sul ramo `main`). Il file `.github/workflows/deploy.yml` costruisce il sito
   e lo pubblica da solo, in circa un minuto. Lo stato si vede nella scheda **Actions** del repository.

Il repository si chiama `federicolucifora.github.io`, quindi il sito è alla radice dell'indirizzo (nessun `base`
in `astro.config.mjs`). I vecchi siti `/Portfolio` e `/visual-designer` reindirizzano qui.
