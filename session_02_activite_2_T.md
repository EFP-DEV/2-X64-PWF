# Session 2 : STITI

> Stocker, Transformer, Interagir, **Tester**, Iterer

## Objectif 

1. Passer de la **console** à un **projet de fichiers**, 
2. Détecter et corriger l’anomalie avec `if` (structure de contrôle conditionnelle)

---

## 1 — Passer de la console au fichier (HTML + JS)

**But** : créer et lier `tick.js`, et y écrire **exactement** ce qu’on a fait dans la console :
– deux déclarations avec assignation (`h`, `m`),
– un **+1** sur `m`,
– un **affichage** avec `console.log`.

### 1) Arborescence
```
dev
└── pwf
    └── session_2
        ├── index.html
        └── tick.js
```

### 2) Dans `index.html`

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
    <script src="./tick.js" defer></script>
  </body>
</html>
```

### 3) Créer `tick.js`

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

### 4) Rafraichir et vérifier


```
13 : 38
```

> Si rien ne s’affiche : vérifier le **nom du fichier**, le **chemin** de `<script src="./tick.js">`, et l’erreur éventuelle dans la console.



## 2 — Détecter et corriger l’anomalie avec `if`


> **Idée clé** : en ajoutant 1 à `m` plusieurs fois, on atteint **60**. Or une minute valide est entre **0** et **59**.
>
>Donc : **détecter** la valeur interdite (60) → **corriger**.

## Énoncer le problème (en français, avant le code)

> « Quand `m` atteint **60**, cette valeur n’est **pas correcte** pour une minute.
> Je dois **détecter** cette situation et **agir** : remettre `m` à **0** et **avancer l’heure**. »

## Syntaxe `if`

```js
if ( /* condition vraie ou faux */ ) {
  // instructions à exécuter 
  // si la condition est vraie
}
```

Ici, la **condition** est : “`m` vaut **60** ?”

## Debut de correction

Dans `tick.js`, nous ajotons, après le `m = m + 1` :

```js
// Détection d'une valeur invalide
if (m == 60) {
  m = 0;          //  on remet à zéro
}
```

**Observation** : l’affichage donne `13 : 0`.
On a corrigé la minute, **mais** le temps **n’avance pas** : on n’a pas **ajouté une heure**.


```js
// Départ (on rejoue la situation finale avec 59)
let h = 13;
let m = 59;

// +1 sur la minute
m = m + 1; // m devient 60

// Détection d'une valeur invalide
if (m == 60) {
  m = 0;          //  on remet à zéro
}

// Affichage pour vérifier
console.log(h, ":", m);
```

## Propagation à l’heure

On ajoute l’action manquante : **+1 sur `h`**.

```js
let h = 13;
let m = 59;

m = m + 1; // 60

if (m == 60) {
  m = 0;
  h = h + 1; //  on propage à l'heure
}

console.log(h, ":", m); // attendu : 14 : 0
```

> Ici, on a deux **instructions** dans le `if` : **remettre `m`** et **avancer `h`**.

## Tests manuels rapides

Changez le point de départ et vérifiez les cas suivant
```
h: 7, m: 37   (devient 7:38),
h: 7, m: 59   (devient 8:0),
h: 0, m: 0    (devient 0:1).
h: 23, m: 59  (devient 24:0).
h: 23, m: 95  ?
```

### Mini-checklist (vous avez compris si…)

* [ ] Vous savez expliquer **pourquoi 60 est invalide** pour une minute.
* [ ] Vous savez **écrire** `if (m == 60) { m = 0; h = h + 1; }`.
* [ ] Vous avez **testé** plusieurs situations (59 → 0 avec +1 d’heure, 37 → 38, etc.).
* [ ] Vous savez **lire** et **expliquer** ce que fait le code.