# Session 2 : STITI

> Stocker, Transformer, Interagir, **Tester**, Iterer

## Objectif 

1. Passer de la **console** à un **projet de fichiers**, 
2. Détecter et corriger l’anomalie avec `if` (structure de contrôle conditionnelle)
3. Imbriquer des `if` 


---
## 1. Passer de la console a la balise `<script>`

**But** : écrire dans une balise `<script>` le code qu’on a fait en console.

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
    <script>
      // Déclaration + assignation (comme en console)
      let h = 13;
      let m = 37;

      // Incrément
      m = m + 1;

      // Affichage
      console.log(h, ":", m); // 13 : 38
    </script>
  </body>
</html>
```

> Charger le fichier dans le navigateur, ouvrir la console (F12 → Console)
>
> Vérifier que l’affichage est correct : `13 : 38`.


---
## 2. Passer de la balise au fichier (HTML + JS)

**But** : créer et lier `tick.js`, et y copier le code de la balise `<script>`:

### 1. Arborescence
```
dev
└── pwf
    └── session_2
        ├── index.html
        └── tick.js
```

### 3. Dans `tick.js`

On copie le code de la balise `<script>` dans `tick.js` :
#### SANS LA BALISE `<script>` NI `</script>`

```js
// Déclaration + assignation (comme en console)
let h = 13;
let m = 37;

// Incrément
m = m + 1;

// Affichage
console.log(h, ":", m); // 13 : 38
```

### 2. Dans `index.html`

On remplace le `<script>...</script>` et on ajoute un `<script src="tick.js"></script>`.

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
    <script src="tick.js"></script>
  </body>
</html>
```


### 3. Verifier

1. Que vous avez sauvegardé les deux fichiers.
2. Que vous avez ouvert `index.html` dans le navigateur.
3. Ouvrir la console (F12 → Console).
4. Que vous avez rafraichi la page (F5 ou ctrl-r).
5. Que vous voyez s’afficher :

```
13 : 38
```

> Si rien ne s’affiche : vérifier le **nom du fichier**, le **chemin** de `<script src="tick.js">`, et l’erreur éventuelle dans la console.


### 4. Mediter

* **Intuition.** Le geste `m = m + 1` “semble marcher” presque tout le temps.
* **Mesure:** 
  - Sur une journée il y a **24 × 60 = 1440** minutes.
  - Le geste échoue **à chaque fois que m vaut 59** (car on obtient 60, qui est invalide).
  - Chaque jour, il y a **24** opportunites de rater un bug (00:59, 01:59, ... , 23:59).
  - **Taux de réussite** = 1416/1440 = **59/60 ≈ 98,33 %**

> Pour se faire une idée : un humain et un chimpanzé partagent environ 98,7–98,8 % de leur ADN.

---
##  2) Détecter et corriger l’anomalie avec `if`


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
Nous avons corrigé la minute, mais nous avons créé une boucle temporelle.. groundhog hour. not that fun.

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

---

## 3. Imbriquer des `if` 

**But** : après avoir corrigé `m == 60`, on constate un **nouveau** problème :
`23:59` → `24:0` (or, une **heure valide** est entre **0** et **23**).

### 3.1 Constater le bug (rejouer la scène)

```js
let h = 23;
let m = 59;

m = m + 1;      // 60
if (m == 60) {
  m = 0;
  h = h + 1;    // 24
}

console.log(h, ":", m); // 24 : 0  ← bug: 24 est invalide
```

**Observation** : la correction des minutes peut faire passer `h` à **24**.


### 3.2 Première correction (deux `if` successifs)

> Idée : **après** avoir éventuellement incrémenté `h`, on vérifie si `h` est hors borne et on remet à `0`.

```js
let h = 23;
let m = 59;

m = m + 1;
if (m == 60) {
  m = 0;
  h = h + 1;
}

// Correction des heures
if (h == 24) {
  h = 0;
}

console.log(h, ":", m); // 0 : 0  ← OK
```

#### Lire le code… en pensant “combien de fois ça arrive ?”

* En 1 journée, il y a **1440** minutes.
* Le test `if (h == 24)` n’est **utile** que quand on a débordé les minutes, donc **24 fois** (à chaque passage `__:59 → __:00`).
* Soit **24 / 1440 = 1/60 ≈ 1,67 %** des cas.

**Problème de lecture** : dans la version “deux `if` successifs”, on exécute *toujours* le test `if (h == 24)` — donc **100 %** du temps — alors qu’il n’est pertinent que **1,67 %** du temps.
C’est un **bruit cognitif** (et un micro-coût CPU) qu’on peut éviter.

**Comment régler ça ? → Imbrication.**
On place `if (h == 24)` **dans** le bloc qui ne s’exécute **que** lors du débordement de minute (`if (m == 60) { ... }`).
Résultat : le test sur `h` ne s’exécute **que** quand il y a une **chance non nulle** qu’il soit vrai — soit ~**1,67 %** du temps — exactement ce qu’on veut.

```js
let h = 23;
let m = 59;

m = m + 1;

if (m == 60) {       // événement: débordement de minute
  m = 0;
  h = h + 1;         // propagation à l'heure

  if (h == 24) {     // événement: débordement d'heure
    h = 0;           // remise à zéro (retour à minuit)
  }
}

console.log(h, ":", m); // 0 : 0
```

> Message pédagogique : **la structure du code doit refléter la fréquence des événements**.
>
> Si un test n’a de sens qu’après un autre, **imbrique**-le. Tu gagnes en **lisibilité**, en **justesse** logique, et tu réduis les **vérifications inutiles** (de 100 % à 1,67 % ici).
>
>* On **voit** la **chaîne de causes** : minute → heure.
>* Chaque correction est **près** de sa cause (moins d’oubli, moins d’effets de bord).

---

### 3.4 Vérifications ciblées

Testez manuellement (en ajustant `h`/`m` avant l’incrément) :

```
h: 7,  m: 37  →  7:38
h: 7,  m: 59  →  8:0
h: 23, m: 58  →  23:59
h: 23, m: 59  →  0:0    (débordement en cascade)
h: 0,  m: 59  →  1:0
```

> Que faire si vous démarrez sur une minute **invalide** (ex. `m = 95`), que se passe-t-il et comment le corriger ?

---

### 3.5 À retenir (ancrage)

* Un `if` **détecte** une **situation** précise et **agit**.
* Les **débords** (minutes → heures) sont des **conséquences** ; placez les corrections **là où elles naissent**.
* L’**imbrication** rend visible la **hiérarchie des événements**.
  Ici : *si la minute déborde*, **alors** on *peut* vérifier si l’heure déborde.

> Plus tard, on verra d’autres façons d’écrire cette logique (par ex. en **boucle**, **fonctions** de formatage, voire opérateurs mathématiques). Pour l’instant, l’objectif est de **penser** et **voir** la structure **conditionnelle imbriquée**.
