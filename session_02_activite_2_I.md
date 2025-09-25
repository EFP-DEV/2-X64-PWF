# Session 2 : STITI

> Stocker, Transformer, Interagir, Tester, **Iterer**


## Pourquoi itérer ?

**Itérer**, c’est **répéter une action** un certain nombre de fois.
La boucle est un **robot** qui sait faire deux choses :

1. **Vérifier** s’il doit continuer,
2. **Répéter** exactement la même séquence.

> Idée-clé : la boucle ne “comprend” pas le métier. Elle ne fait que **compter et rejouer**.

## Objectif
- Commenter le code pour le desactiver temporairement
- Separer le controle (la boucle) de l'action (le métier)
- Utiliser des **noms explicites** pour les variables


## Préparation
Commenter le code ecris jusqua present avec `/*` et `*/` pour le desactiver temporairement.
```
/* 
let h = 13;
let m = 59;

m = m + 1; // 60

if (m == 60) {
  m = 0;
  h = h + 1; //  on propage à l'heure
}

console.log(h, ":", m); // attendu : 14 : 0
 */ 
```

---

# Une boucle

On introduit la structure seule, avec des **noms qui disent ce qu’ils font**.

```js
let counter = 0; // compteur : combien de fois on a déjà répété
let target = 5; // cible : combien de fois on veut répéter au total

while (counter < target) {
  // (aucun "métier" ici, juste de la répétition)
  counter = counter + 1;
}
// À ce stade, on a répété 5 fois.
```

- `counter` est le **compteur** (avance d’un pas à chaque tour).
- `target` est la **cible** (le but à atteindre).
- La condition `counter < target` est le **feu vert** du robot.

Verifions que ça marche :

```js
let counter = 0; // compteur : combien de fois on a déjà répété
let target = 5; // cible : combien de fois on veut répéter au total

console.log('init: counter', counter, 'target', target);

while (counter < target) {
  // (aucun "métier" ici, juste de la répétition)
  counter = counter + 1;
  console.log('loop: counter', counter, 'target', target);
}

console.log('stop: counter', counter, 'target', target);
```

## 2) Ajouter un petit métier… qui n’a rien à voir avec l’heure

On garde nos bons noms et on ajoute une action **neutre** (ex.: construire une chaîne d’étoiles).

```js
let counter = 0;
let target = 5;

let motif = ''; // métier

while (counter < target) {
  motif = motif + '★';
  counter = counter + 1;
}

console.log(motif);
```

> Ici, la boucle **contrôle** le rythme ; le **métier** est “ajouter une étoile”.

## Règle d’or : séparer **contrôle** (boucle) et **métier** (ce qu’on fait à chaque tour)

- La **boucle** : variables de **contrôle** (`counter`, `target`), **condition** d’arrêt.
- Le **métier** : variables qui portent le **sens** (ex.: `motif`, `total`, `minutes`, `heures`, etc.).

Cette séparation rend le code **lisible** et **prévisible**.

---

# Passer au minuteur

### Le métier du minuteur

On décrit **uniquement** ce qui se passe quand **une minute passe**.

```js
let heures = 13;
let minutes = 37;

// ——— MÉTIER ———
minutes = minutes + 1;

if (minutes == 60) {
  minutes = 0;
  heures = heures + 1;
}
console.log(heures, ':', minutes);
// ——— FIN MÉTIER ———

// Ici, on a appliqué exactement une fois le métier.
```

> Zéro boucle. On vérifie que le **métier** est correct **avant** d’industrialiser.

### Robotiser

On garde la mécanique apprise plus haut et on **insère** le métier dedans.

```js
let heures = 13;
let minutes = 37;

let ecoulees = 0; // contrôle
let une_heure = 60; // on veut rejouer 60 fois le métier

while (ecoulees < une_heure) {

  // ——— MÉTIER ———
  minutes = minutes + 1;

  if (minutes == 60) {
    minutes = 0;
    heures = heures + 1;
  }

  console.log(heures, ':', minutes);
  // ——— FIN MÉTIER ———

  // ——— CONTRÔLE ———
  ecoulees = ecoulees + 1;
}
```

> Remarquez que les **noms** racontent l’histoire : on répète **combien de fois**, pas “jusqu’à on-ne-sait-quoi”.
