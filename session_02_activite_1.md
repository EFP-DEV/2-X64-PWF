# Session 2 : STITI

> Stocker, Transformer, Interagir, Tester, Iterer

## Objectif (partie 2)

Passer de la **console** à un **projet de fichiers**, apprendre les **structures de contrôle** (`if`, `while`), et **simuler** un minuteur.


## Étape 1 — Passer de la console au fichier (HTML + JS)

**But** : créer une page `index.html`, lier `script.js`, et y écrire **exactement** ce qu’on a fait dans la console :
– deux déclarations avec assignation (`h`, `m`),
– un **+1** sur `m`,
– un **affichage** avec `console.log`.

### 1) Arborescence

  ```
  /dev/
      /pwf/
          /session_2/
              ├── index.html
              └── script.js
  ```

### 2) Créer `index.html`

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>STITI — Partie 2</title>
  </head>
  <body>
    <main>
      <h1>STITI — Partie 2</h1>
      <p>Ouvrez la console (F12 → Console) pour voir le résultat.</p>
    </main>

    <!-- On charge notre script après le HTML -->
    <script src="./script.js" defer></script>
  </body>
</html>
```

### 3) Créer `script.js`

> On **rejoue** la Partie 1 en code de fichier (pas à pas, lisible).

```js
// Déclaration + assignation (comme en console)
let h = 13;
let m = 37;

// Incrément : m = m + 1
m = m + 1;

// Affichage (équivalent de "évaluer l'expression" dans la console)
console.log(h, ":", m); // attendu : 13 : 38
```

### 4) Ouvrir et vérifier

1. Ouvrir `index.html` dans le navigateur.
2. Ouvrir la **console** (F12 → onglet **Console**).
3. Vous devez voir s’afficher :

```
13 : 38
```

> Si rien ne s’affiche : vérifier le **nom du fichier**, le **chemin** de `<script src="./script.js">`, et l’erreur éventuelle dans la console.
