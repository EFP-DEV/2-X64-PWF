# Session 2 : STITI

> Stocker, Transformer, Interagir, **Tester**, Itérer

## Objectif

1. Passer de la **console** à un **projet de fichiers**
2. Détecter et corriger l’anomalie avec `if` (structure de contrôle conditionnelle)
3. Imbriquer des `if`

---

## 1) Passer de la console à la balise `<script>`

**But** : écrire dans une balise `<script>` le code qu’on a fait en console.

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>STITI — Partie 2</title>
  </head>
  <body>
    <main>
      <h1>STITI — Partie 2</h1>
      <p>Ouvrez la console (F12 → Console) pour voir le résultat.</p>
    </main>
    <script>
      // Déclaration + assignation (comme en console)
      let h = 13;
      let m = 37;

      // Incrément
      m = m + 1;

      // Affichage
      console.log(h, m); // 13 38
    </script>
  </body>
</html>
```

> Chargez le fichier dans le navigateur, ouvrez la console (F12 → Console)
> Vérifiez que l’affichage est correct : `13 38`.

---

## 2) Passer de la balise au fichier (HTML + JS)

**But** : créer et lier `tick.js`, et y copier le code de la balise `<script>`.

### Arborescence

```
dev
└── pwf
    └── session_2
        ├── index.html
        └── tick.js
```

### Dans `tick.js`

> On copie le code **sans** la balise `<script>`.

```js
// Déclaration + assignation (comme en console)
let h = 13;
let m = 37;

// Incrément
m = m + 1;

// Affichage
console.log(h, ":", m); // 13 : 38
```

### Dans `index.html`

> On remplace le `<script>...</script>` par un chargement de fichier.

```html
<!-- On charge notre script après le HTML -->
<script src="tick.js"></script>
```

### Vérifier

1. Sauvegarder les deux fichiers
2. Ouvrir `index.html` dans le navigateur
3. Ouvrir la console (F12 → Console)
4. Rafraîchir la page (F5 ou Ctrl/Cmd-R)
5. Voir s’afficher :

```
13 : 38
```

> Si rien ne s’affiche : vérifier le **nom du fichier**, le **chemin** de `<script src="tick.js">`, et les **erreurs** éventuelles dans la console.

### Méditer

* **Intuition** : `m = m + 1` “marche” presque tout le temps.
* **Mesure :**

  * Une journée = **24 × 60 = 1440** minutes.
  * Le geste échoue **quand m vaut 59** (car on obtient 60, invalide).
  * Chaque jour, **24** opportunités de rater un bug (`__:59 → __:60`).
  * **Taux de réussite** = 1416/1440 = **59/60 ≈ 98,33 %**.
* Repère d’intuition : Humain ↔ chimpanzé ≈ **98,7–98,8 %** d’ADN en commun.

### Nommage des variables

* `h` → `heures`
* `m` → `minutes`

```js
let heures = 13;
let minutes = 37;

minutes = minutes + 1;

console.log(heures, ":", minutes); // 13 : 38
```

**Sauver, rafraîchir, vérifier** : l’affichage doit rester correct.

---

## 3) Détecter et corriger l’anomalie avec `if`

> **Idée clé** : en ajoutant 1 à `minutes` plusieurs fois, on atteint **60**.
> Or une minute valide est entre **0** et **59**.
> Donc : **détecter** `60` → **corriger**.

### Énoncer le problème (en français, avant le code)

> « Quand `minutes` atteint **60**, cette valeur n’est **pas correcte** pour une minute.
> Je dois **détecter** cette situation et **agir** : remettre `minutes` à **0** et **avancer l’heure**. »

### Syntaxe `if`

```js
if (/* condition vraie ou fausse */) {
  // instructions à exécuter si la condition est vraie
}
```

### Notion de bloc { }

Un bloc est un groupe d’instructions délimité par des accolades `{ ... }`.
Il sert à lier plusieurs lignes qui doivent s’exécuter ensemble (ex. le corps d’un `if`, d’une boucle, d’une fonction).

**À quoi ça sert ?**

* **Regrouper** : plusieurs actions déclenchées par une condition.
* **Structurer** : montrer visuellement la hiérarchie (imbriquer des blocs).

### Début de correction `minutes == 60`

Dans `tick.js`, après `minutes = minutes + 1` :

```js
// Détection d'une valeur invalide
if (minutes == 60) {
  minutes = 0; // on remet à zéro
}
```

**Observation** : l’affichage donne `13 : 0`.
On a corrigé la minute, **mais** le temps **n’avance pas** : l’heure n’a pas augmenté.

Exemple ciblé :

```js
let heures = 13;
let minutes = 59;

minutes = minutes + 1;

if (minutes == 60) {
  minutes = 0; // corrigé
}

console.log(heures, ":", minutes); // 13 : 0 (bloqué dans l'heure)
```

### Propagation à l’heure

On ajoute l’action manquante : **+1 sur `heures`**.

```js
let heures = 13;
let minutes = 37;

minutes = minutes + 1;

if (minutes == 60) {
  minutes = 0;        // on remet à zéro
  heures = heures + 1; // on avance l'heure
}

console.log(heures, ":", minutes); // 14 : 0
```

> Ici, on a **deux instructions** dans le `if` : **remettre `minutes`** et **avancer `heures`**.

### Tests manuels rapides

Changez le point de départ et vérifiez :

```
h: 7,  m: 37  →  7:38
h: 7,  m: 59  →  8:0
h: 0,  m: 0   →  0:1
h: 23, m: 59  →  24:0
h: 23, m: 95  →  ?
```

---

## 4) Encore plus de `if` (imbriquer pour mieux raisonner)

**But** : après avoir corrigé `minutes == 60`, on constate un **nouveau** problème :
`23:59` → `24:0` (or, une **heure valide** est entre **0** et **23**).

### Première correction (deux `if` successifs)

```js
let heures = 23;
let minutes = 59;

minutes = minutes + 1;

if (minutes == 60) {
  minutes = 0;
  heures = heures + 1;
}

if (heures == 24) {
  heures = 0;
}

console.log(heures, ":", minutes); // 0 : 0  ← OK
```

**Lecture “fréquence des événements” :**

* En 1 journée, **1440** minutes.
* Le test `if (heures == 24)` n’est pertinent que quand il y a eu débordement de minute, donc **24** fois.
* **24 / 1440 = 1/60 ≈ 1,67 %**.

Dans cette version, on exécute `if (heures == 24)` **100 %** du temps, alors qu’il n’est **pertinent** que **1,67 %** du temps → **bruit cognitif** (et micro-coût CPU).

### Meilleure correction (imbriquer)

On place `if (heures == 24)` **dans** le bloc qui ne s’exécute **que** lors du débordement de minute.

```js
let heures = 23;
let minutes = 59;

minutes = minutes + 1;

if (minutes == 60) {    // débordement des minutes
  minutes = 0;
  heures = heures + 1;

  if (heures == 24) {   // débordement des heures
    heures = 0;
  }
}

console.log(heures, ":", minutes); // 0 : 0  ← OK
```

> **Message pédagogique** : la structure du code doit refléter la **fréquence des événements**.
> Si un test n’a de sens **qu’après** un autre, **imbrique**-le :
>
> * On **voit** la **chaîne de causes** (minute → heure).
> * On réduit les vérifications inutiles (de **100 %** à **~1,67 %** ici).

### Vérifications ciblées

```
h: 7,  m: 37  →  7:38
h: 7,  m: 59  →  8:0
h: 23, m: 58  →  23:59
h: 23, m: 59  →  0:0    (débordement en cascade)
h: 0,  m: 59  →  1:0
```

### À retenir

* Un `if` **détecte** une **situation** précise et **agit**.
* Les **débords** (minutes → heures) sont des **conséquences** ; placez les corrections **là où elles naissent**.
* L’**imbrication** rend visible la **hiérarchie des événements** :
  *si la minute déborde*, **alors** on *peut* vérifier si l’heure déborde.

> Plus tard : on verra les **boucles**, les **fonctions** de formatage, etc.
> Ici, l’objectif est de **penser** et **voir** la structure **conditionnelle imbriquée**.
