# Piano di ristrutturazione del portfolio

Obiettivo: un unico portfolio che unisce il lato **3D Artist** e il lato **Visual Designer**,
al posto dei due siti separati di oggi.

Stato: [ ] da fare · [~] in corso · [x] fatto · [?] da decidere insieme

---

## Decisioni prese (questionario del 20/11/2026)

| Tema | Decisione |
|---|---|
| Posizionamento | 3D e visual design **alla pari** (profilo ibrido) |
| Aree dei lavori | **3D / Motion / Visual / Interactive**. Un progetto può stare in più aree |
| Stile | Si parte dall'**impostazione attuale**, solo **Rubik**, solo i **colori originali**. Nuovi colori solo dopo averli chiesti. Le 3 proposte in `docs/style-proposals/` sono scartate (piacciono però card con etichette e filtri) |
| Frase in home | Tono **diretto e professionale** |
| Titoli e sottotitoli | Solo **"3D Artist & Visual Designer"**. Motion e Interactive non compaiono nei titoli: restano solo come filtri |
| Filtri Work | Si possono selezionare **più aree insieme**, logica **"una qualsiasi"** (3D + Visual = progetti 3D oppure Visual) |
| Home e Work | **Due pagine separate**: home = presentazione + lavori scelti; Work = tutti i progetti con i filtri |
| Metodo | **Un passo alla volta**: proposta → tua risposta → modifica |
| Contatti | Pagina Contacts completa **+ footer molto piccolo** su ogni pagina |
| Case study (processo) | Solo nei progetti principali. **Quali, lo decidiamo insieme** |
| CV in PDF | No |
| Anteprime video sulle card | No |
| Immagini nei progetti | **Intere** (non ritagliate) + **zoom** a schermo intero al clic |
| Foto che rimbalza | **Tenerla e alleggerirla** (+ si ferma con "riduci animazioni") |
| Lingue | **Inglese + italiano**, con pulsante per cambiare lingua |
| Font | Valutare un **secondo font per i titoli**: servono prove |
| Indirizzo | **federicolucifora.github.io** (indirizzo principale GitHub) |
| Vecchio sito 3D (/Portfolio) | Diventa una serie di **reindirizzamenti** verso le pagine equivalenti del nuovo sito |
| Vecchio sito /visual-designer | **Resta com'è**, separato e intatto |

---

## Ordine dei passi (deciso insieme)

1. Aree dei progetti (decisione)
2. Un colore per area, dalla palette originale (decisione)
3. Pagina Work: card con etichette + filtri multipli
4. Home: frase di presentazione, lavori scelti, titolo gigante
5. Pagina progetto: scheda in alto, precedente/successivo, immagini intere + zoom
6. Footer piccolo e pagina Contacts
7. Leggibilità e telefono (testi scuri, zoom del testo, menu mobile)
8. Versione italiana
9. Pubblicazione

Le sezioni qui sotto restano come elenco dettagliato dei punti.

---

## Fase 0 – Preparazione

- [x] Aggiunto **Off The Grid** dal sito visual-designer (testi, collaboratori, 6 immagini;
      `offthegrid5.jpg`, non usata nemmeno nel vecchio sito, è in `unused-images/offthegrid/`).
- I Grrr e Ignorance = Fear (Haring) **per ora non si aggiungono** (tua scelta).
- [x] Aree di ogni progetto (applicate: campo `areas` in ogni file .yaml):

  | Progetto | Aree | Visibile nel portfolio |
  |---|---|---|
  | Le Auto della Dolce Vita | 3D, Motion | sì |
  | Mario Kart Wii Custom Tracks | 3D, Interactive | sì |
  | Ferrari Roma Spider | 3D | sì |
  | Futura | 3D, Interactive, Motion | sì |
  | DNA of Italian Motorsport | 3D, Motion | sì |
  | Hell's Chicken | 3D, Interactive | sì |
  | The DNA of Rome | 3D, Visual, Interactive | sì |
  | Sisal Immersive Museum | 3D | sì |
  | Off The Grid | Visual, Interactive | sì |
  | Dirty Piggy Bank | 3D, Motion | **no, nascosto** (progetto vecchio) |
  | Irreducible World | 3D, Motion | **no, resta nascosto** |

  Più avanti arriveranno altri progetti Visual.
- [x] Progetti nascosti **"nascosti davvero"**: la pagina resta apribile con il link diretto,
      ma esce dalla sitemap e chiede a Google di non indicizzarla (vale per Irreducible World e Dirty Piggy Bank).
- [?] Scrivere la frase di presentazione diretta (ti preparo 2–3 versioni).

## Fase 1 – Stile (prima di costruire le pagine nuove)

- [~] 3 proposte di restyling attorno alla foto che rimbalza: `docs/style-proposals/index.html`
      (A Evoluzione, B Editoriale, C Playground). **Da scegliere.**
- [~] 3 abbinamenti di font dentro le proposte (Bricolage Grotesque + Rubik, Fraunces + DM Sans, Unbounded + Space Grotesk).
- [x] Un colore per ogni area, solo dalla palette originale (deciso: **Proposta 1**).
      Etichette con sfondo nella tonalità chiara e testo nella tonalità scura della stessa famiglia:

  | Area | Famiglia | Sfondo / testo |
  |---|---|---|
  | 3D | 1 · Arancio | `#FED9B7` / `#9B5313` |
  | Visual | 2 · Rosso | `#FFC5B3` / `#931F1F` |
  | Interactive | 3 · Verde acqua | `#C3EAE4` / `#134B4C` |
  | Motion | 4 · Rosa | `#FFD7DC` / `#912046` |
- [ ] Testo leggibile: contrasto almeno 4,5:1 (oggi alcuni titoli sono a 1,5:1).
- [ ] Testo "fluido" con minimo e massimo, che si ingrandisce con lo zoom del browser (oggi è tutto in vw).
- [ ] Griglia dei progetti con pochi formati fissi (intera, metà, terzi, 2/3 + 1/3) al posto delle larghezze libere.

## Fase 2 – Struttura e contenuti

- [ ] Indirizzo base del sito: da `/Portfolio` all'indirizzo principale `/`.
- [x] **Home (passo 4, fatto):**
      - titolo gigante: resta **"Portfolio"**, con la foto che rimbalza;
      - frase: "Hi! I'm Federico, a 3D Artist & Visual Designer creating worlds and visuals for games, brands and digital experiences.";
      - competenze: "I'm a designer by heart. I specialize in…" → **3D Art · Visual Design · Motion Graphics** (stessa animazione della foto);
      - in evidenza: **Le Auto della Dolce Vita, Mario Kart Wii Custom Tracks, Off The Grid**;
      - card **come nella pagina work** (quadrate, sfumatura nera, etichette delle aree);
      - pulsante "see all work >>" com'è.
- [x] Pagina **"work"** (voce di menu "work", indirizzo `work.html`; il vecchio `portfolio.html` andrà reindirizzato qui)
      con tutti i progetti e i filtri per area (più aree insieme, logica "una qualsiasi").
      I filtri **non** finiscono nell'indirizzo: il link apre sempre tutti i progetti.
- [x] Griglia con **card sempre uguali**: l'ultima riga, se non è piena, resta più corta.
- [x] Card **quadrate**: l'immagine riempie tutta la card, titolo crema ed etichette in basso sopra una
      **sfumatura nera** (nero approvato da te solo per questo), senza ombra né bordo.
      Sfumatura: intensità 0,65, copre il 45% della card dal basso (regolabili in `work.css`: `--gradient-strength`, `--gradient-height`).
      Provati e scartati: bordo rosa, sfondo `#FFF1DC`, card crema con ombra. Le 7 prove sono in `docs/card-caption-proposals/`.
- [x] Filtri come **semplice fila di pulsanti** (niente barra, niente ombra), allineata al bordo delle card.
      Niente scritta "Filter by area". Pulsanti completamente stondati come le etichette.
- [x] **Spazi uniformi**: menu → filtri, filtri → card e tra le card hanno tutti la stessa distanza.
- [x] **Animazione d'ingresso** (`src/components/PageIntro.astro`): "Work" scritto una lettera alla volta, poi le card
      salgono a coprirlo mentre svanisce (~1,5 s). Solo alla prima apertura della pagina, saltata per chi riduce le animazioni.
- [ ] Riusare la stessa animazione nelle altre pagine (tranne la home) quando ci arriviamo.
- [x] Sulla card **solo titolo + etichette delle aree** (la riga delle competenze resta nella pagina progetto).
- [x] Filtri **come i pulsanti del menu**: pillole arrotondate; spento = sfondo chiaro dell'area + testo scuro,
      acceso = sfondo scuro dell'area + testo crema; più un pulsante "All".
- [x] Al passaggio del mouse la card **si alza un po'** con una leggerissima rotazione.
- [~] **Pagina progetto, revisione (in corso, una cosa alla volta):**
      - [x] sfondo crema come le altre pagine, niente riquadri stondati; scheda Year/Client/Tools in un riquadro
            stondato rosa `#FFC5B3` a destra; immagini con gli angoli delle card;
      - [x] Previous / Next come pulsanti bassi e larghi con miniatura + testo, "All work" al centro;
      - [x] copertina: **nessuna** nella pagina progetto (per ora); resta usata solo dove serve altrove;
      - [x] ordine: intestazione → testi → **galleria** (immagini e **video insieme**, nell'ordine del .yaml);
      - [x] galleria (`src/components/Gallery.astro`): **elemento principale grande** (immagine intera o video 16:9)
            + **striscia di miniature** su fondo rosa `#FFC5B3`, senza barra di scorrimento, che sfuma ai bordi dove continua;
            miniature dei video con ▶; selezionata = piena, le altre semitrasparenti (niente contorno);
            clic sulla miniatura = cambia l'elemento principale (un video nascosto si ferma); clic su un'immagine = zoom;
            video da youtube-nocookie.com; riquadro principale **16:9** (max 80% dello schermo);
            **frecce sempre visibili accanto all'immagine** (sopra i bordi solo su telefono), icona a chevron sottile;
            **niente zoom** a schermo intero (le immagini sono già grandi);
      - [x] colori della pagina progetto dalla **famiglia arancio** (`#FED9B7` chiaro, `#9B5313` scuro) per titolo, scheda,
            striscia, frecce e pulsanti; la barra del menù tiene i suoi colori;
      - [x] testo di ogni progetto in **sezioni: Overview · My role · Result** (in My role anche sfida e processo, quando possibile),
            titoletti in arancio scuro. Testi scritti da Claude partendo dai tuoi: nei .yaml `{{ }}` = frase di Claude,
            `[[ ]]` = da completare. Nell'anteprima sono evidenziati (rosa / verde), nel sito pubblicato `{{ }}` è testo
            normale e `[[ ]]` non compare. **Da rivedere e completare da te**;
      - [x] seconda versione (22/11): Overview / My role / Result **riscritti interamente da Claude** (tutti tra `{{ }}`),
            usando ricerche online dove possibile (Dolce Vita, Futura, The DNA of Rome, Off The Grid, Hell's Chicken);
            il tuo testo originale è nella sezione **Original text**, visibile solo nell'anteprima. **Da rivedere**;
      - [?] progetti ampi (Mario Kart: un capitolo per livello; Futura: un capitolo per ciascuna delle 5 applicazioni).
            - [x] Mario Kart (2026-11-24): campi `chaptersTitle` + `chapters` nel .yaml (title, text, thumb facoltativa, media: src/youtube).
                  Pagina: sezioni generali in alto, poi indice con lo stile delle card Work ma rettangolari 16:9
                  (titolo sulla sfumatura scura; 4 colonne, 2 sul telefono), poi un solo capitolo visibile alla volta
                  (il primo all'apertura; proposta "F · Cartella disegnata con una linea" di
                  docs/chapter-index-proposals-2, linea arancio chiaro #FED9B7 2px disegnata da uno script SVG
                  attorno a card scelta (linguetta) + capitolo (pannello). Spazi: --tab-pad uguale tra linea e card
                  scelta, tra linea e card non scelte, e = metà dello spazio tra le card; angoli della linea =
                  angoli card + tab-pad; anche le curve dove la linguetta si allarga hanno lo stesso raggio.
                  La cartella è allineata ai bordi del contenuto della pagina (card e contenuti stanno dentro).
                  Striscia miniature della galleria (in tutte le pagine): senza sfondo e centrata.
                  Qualità immagini (approvata 2026-11-24): immagine grande della galleria WebP qualità 99 +
                  smartSubsample (astro.config.mjs) ≈ 250–350 KB a 1280 px; card qualità 88. La compressione di
                  base (66 KB) era troppo visibile sui render; i PNG originali (1,8 MB) troppo pesanti. Card non scelte trasparenti 0.6. Sul telefono (2 righe) linea attorno alla
                  card e riquadro separato attorno al capitolo. NESSUNA sfumatura di colore. Scartate: cartella
                  piena, fumetto, pannello che sfuma. Link diretto mkwii.html#chapter-3). Ogni capitolo = titolo + testo a tutta larghezza
                  (originale dell'utente) + galleria propria.
            - [x] Futura (2026-11-24): 4 capitoli "Continents": Futura World (world), Futura HUB (hub_1-3),
                  Futura Ville (roblox_1-4, buddy1-5; EnergyStore tolto), Futura Blocks (2 video + blocks_1-6; prima: testo +
                  [[da completare]]). QUEST e TRACKS esclusi per scelta dell'utente. Testi dei capitoli scritti da
                  Claude ({{ }}); i testi dei capitoli ora supportano i marcatori (components/MarkedText.astro).
                  Sul telefono le card dei capitoli stanno tutte su una riga, senza titolo.
- [x] **Pagina progetto (passo 5, prima versione):**
      - scheda in alto con solo **anno, cliente, strumenti** (niente team, ruolo, skills e premi; la riga "Client" compare solo se c'è un cliente vero);
        dati nella tabella "Dati delle schede progetto" qui sotto;
      - copertina a fascia in cima: **resta** (unica immagine ritagliata), si apre intera con lo zoom;
      - immagini **intere in righe allineate** (stessa altezza per riga, larghezze proporzionali);
      - testi **a riga intera** tra le righe di immagini, video nelle righe come le immagini (da provare e rivedere insieme);
      - **zoom** a schermo intero al clic, sfondo **nero al 90%** (nero esteso a questo uso);
      - in fondo: **card "← Previous" e "Next →"** + pulsante **"All work"**;
      - **nessuna** animazione d'ingresso nelle pagine progetto.
- [x] Off The Grid in evidenza (è il progetto più premiato): è tra i lavori in evidenza della home.
- [x] Titoli e descrizioni per Google aggiornati alla nuova identità (home, about, contacts, work),
      insieme al testo alternativo della foto. Titoli: home = "Federico Lucifora | 3D Artist & Visual Designer";
      tutte le altre pagine = solo "Nome pagina | Federico Lucifora" (es. "Work | Federico Lucifora").
- [?] Case study (sfida → processo → risultato) nei progetti scelti insieme.
- [x] About (2026-11-25): animazione d'ingresso del titolo "About Me" (come Work); foto e presentazione affiancate
      (una sotto l'altra sul telefono); presentazione riscritta da Claude per unire 3D e visual ({{ }}, originale
      visibile solo nell'anteprima, campo introOriginal); date corrette: Ultra 2024–2026, Hook 2023–2024.
      L'utente NON ha voluto sezioni in più (competenze per area, strumenti).
- [x] About, rifinitura (2026-11-23): testi approvati (niente più {{ }} né originale); Ultra e Hook con clienti
      e piattaforme; tolti Hell's Chicken e il premio "Nostalgia di futuro". In alto: foto e presentazione
      affiancate come all'inizio, con i margini delle sezioni sotto. La card con foto + info (Based in, Languages,
      Main tools) è stata provata a lungo (anche con slider) e SCARTATA: le info restano solo come nota in about.yaml.
      Voci della timeline tutte della stessa
      altezza (pillole equidistanti), descrizioni max 2 righe tranne su telefono, "Srl" mai da solo a capo,
      link Off The Grid → pagina del progetto. Card sotto il testo / tre colonne / testo centrato: provati e scartati.
- [x] Contacts (2026-11-23): animazione d'ingresso del titolo; frase d'invito a sinistra (grigio standard,
      testo in site.yaml → contactsIntro), a destra due card-pulsante con icona, nome e indirizzo
      (tutta la card è il link; tasti "Copy"/"Open" provati e tolti): Email (indirizzo mai a capo) e LinkedIn.
      Blocco centrato in verticale nella finestra. Instagram tolto dai contatti (resta tra le icone della home).
      Proposte in docs/contacts-proposals (scelta la B). Disponibilità non indicata.
      Colore da ricordare: il verde scuro della palette #134B4C (color3_3) per la frase grande è piaciuto
      molto ("salvalo, ci sta molto bene"), per ora si è scelto il grigio standard.
- [x] Footer (2026-11-23, Footer.astro, prop `footer` del Layout): due card piccolissime centrate, solo icona +
      contenuto (indirizzo email, nome profilo LinkedIn), nei colori dei pulsanti di Contacts; niente linea, niente
      © né nome. Spazio sopra = spazio sotto (ogni pagina regola --footer-top nel suo CSS); in About un po' di più
      sopra, su richiesta. In home, About, Work e pagine progetto; non in Contacts.
      Sostituisce le icone in fondo alla home (Contacts.astro ora non è più usato).
- [x] Materiali aggiunti (2026-11-25): DNA (render delle 5 auto + poster H-Card/V-Card; tag Visual; copertina
      provvisoria "H-Card A", la vecchia cover.jpg non c'è più), Futura World (trailer + world_1-3), Futura Blocks
      (2 video + blocks_1-6). Eventuale trailer di Futura Blocks della Design Week: se l'utente lo trova.
- [x] Testi di tutti i progetti visibili controllati e approvati dall'utente (2026-11-25).
- [ ] Versione italiana: struttura per due lingue, pulsante EN/IT, testi italiani (te li preparo, li controlli tu).

### Dati delle schede progetto

`?` = da completare. Le caselle vuote non compariranno nella scheda.

Nella scheda compaiono solo **Anno, Client, Strumenti**. Le colonne Skills e Premi restano qui solo come promemoria.

| Progetto | Anno | Cliente | Skills | Strumenti | Premi |
|---|---|---|---|---|---|
| Le Auto della Dolce Vita | 2025 | Automobile Club Italia (ACI) | 3D Modeling, Texturing, Retopology, Baking | Blender, Substance Painter, Reality Composer Pro | — |
| Mario Kart Wii Custom Tracks | 2017–2022 | — (progetto personale) | 3D Modeling, Environment Art, Level Design, Texture Editing | Blender, SketchUp, Mario Kart Wii modding tools | — |
| Ferrari Roma Spider | 2025 | Internal project | 3D Modeling, Texturing, Retopology | Blender, Substance Painter, Reality Composer Pro | — |
| Futura | 2024–2026 | Plenitude (Eni) | 3D Modeling, Texturing, Environment Art | Blender, Substance Painter, Unity, Roblox Studio, Affinity | — |
| DNA of Italian Motorsport | 2026 | Automobile Club Italia (ACI) | 3D Modeling, Retopology, Texturing, Trailer Editing | Blender, Substance Painter, Reality Composer Pro | — |
| Hell's Chicken | 2020 | — (corso del Politecnico di Milano) | Game Design, Level Design, 3D Modeling, 3D Animation | Unity, Blender, Photoshop | — |
| The DNA of Rome | 2026 | MAXXI, mostra "Roma nel Mondo" (sezione "Il DNA di Roma") | Esperienza in Reality Composer Pro, infografiche | Blender, Reality Composer Pro, Affinity | — |
| Sisal Immersive Museum | 2024 | Sisal | 3D Modeling, Texturing | Blender, Substance Painter | — |
| Off The Grid | 2022 | — (corso del Politecnico di Milano) | Web Development, User Experience, Digital Interaction | GitHub, Visual Studio Code, Illustrator, After Effects | European Design Awards, Silver (2023); Awwwards Honorable Mention (2022) |

The DNA of Rome (fonti: [MAXXI](https://www.maxxi.art/en/events/roma-nel-mondo/), [comunicato stampa](https://www.maxxi.art/wp-content/uploads/2025/12/202512_MAXXI_RomeintheWorld_PressRelease.pdf),
[Turismo Roma](https://turismoroma.it/en/events/roma-nel-mondo)): mostra "Roma nel Mondo" al MAXXI, a cura di Ricky Burdett,
dal 17 dicembre 2025 al 6 aprile 2026. Nella sezione "Il DNA di Roma" un modello digitale viene proiettato su
"Terracotta Rome", il plastico della città commissionato dal MAXXI (953 tessere in terracotta).

## Fase 3 – Interazione

- [ ] Menu su telefono con le voci sempre visibili (oggi sono nascoste dietro dei pallini).
- [ ] Immagini intere + zoom a schermo intero.
- [ ] Video YouTube leggeri: copertina con tasto play, il video si carica solo al clic.
- [x] Foto che rimbalza alleggerita, ferma per chi ha chiesto di ridurre le animazioni.
      Corretti anche i margini che cambiavano tornando in cima e la foto che appariva ruotata
      (ora gira solo la forma, la foto resta ferma).
- [ ] Navigazione da tastiera visibile (contorno sull'elemento selezionato).
- [ ] Testi alternativi delle immagini più descrittivi.

## Fase 4 – Pubblicazione

- [ ] Tu crei su GitHub il repository **federicolucifora.github.io** (ti guido passo passo).
- [x] Pubblicazione del nuovo sito su https://federicolucifora.github.io/ (2026-11-26; deploy.yml usa Node 24,
      con la versione di default la build falliva).
- [x] Reindirizzamenti online (2026-11-26): /Portfolio/… e /visual-designer/… (Lavoro\Portfolio e
      Lavoro\Portfolio-Copy = repo Visual-Designer) → pagine equivalenti del nuovo sito; grrr/haring → work.html;
      ogni altro vecchio indirizzo → home (404.html). Vecchi file rimossi (recuperabili dalla cronologia).
      Il nuovo sito non ha ancora una sua pagina 404 personalizzata.
- [ ] (2026-11-25) Anche il sito **visual-designer** diventa un insieme di reindirizzamenti verso il nuovo sito
      (decisione cambiata dall'utente). Git non è installato sul PC: serve installarlo (Git for Windows).
- [ ] Il repository **Portfolio** diventa un insieme di reindirizzamenti: ogni vecchio indirizzo
      (es. `/Portfolio/work/mkwii.html`) porta alla stessa pagina nel nuovo sito.
      Va fatto **solo dopo** che il nuovo sito è online.
- [ ] Il sito /visual-designer non si tocca.
