# Css-in-JS

###Introduzione

* Cosa è il CSS in JS
    * Differenza con i CSS modules (caso Zenith)
* Adozione ad oggi
* Principali librerie
    * JSS (cli per conversione)
    * Aphrodite
* Metodologia (global style vs styled components)
* Comparazione con Scss e css vars

| SCSS | CSS vars | CSS-in-JS |
|------|----------|-----------|
| Semplice per designer | nativa | Class name univoci |
| Largamente diffuso | gestione dinamica dei values | Configurazione module bundler semplicata (js-only) |
| Più semplice da disaccoppiare | le variabili entrano nello Shadow DOM (pro/contro) | gestione dinamica dei values |
| BEM | | Basata su JSON |
| | | Inseribile su richiesta |
| | | Subisce il processo di treeshaking (webpack)|
| | | Dispone di plugin (post-processing, colori, vendor-prefix, ecc...) |
| | | Supporto typescript |
| | | Performance migliori su SSR e animazioni complesse |
| | | Possibilità di estensione classi |
| | | Cross-browser compatibility |
