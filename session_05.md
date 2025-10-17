# Session 5 — Introduction aux boucles

---

## Objectif

Comprendre ce qu’est une boucle, pourquoi on en a besoin, et comment elle fonctionne.
L’objectif n’est pas de résoudre des problèmes complexes, mais de **ressentir** ce que veut dire « répéter une action tant qu’une condition est vraie ».

---

## 1. Qu’est-ce qu’une boucle ?

Une boucle permet de **répéter automatiquement une action**.
Elle exécute les mêmes instructions **tant qu’une condition est vraie**.

En français, on pourrait dire :

> « Tant que quelque chose est vrai, fais cette action. »

---

## 2. Des exemples dans la vie quotidienne

### a. Le brossage de dents

Tu continues à brosser **tant que** le minuteur n’a pas atteint deux minutes.

```
tant que (le minuteur < 2 minutes)
    brosser
```

### b. Monter un escalier

Tu montes une marche, puis une autre, **tant que** tu n’es pas arrivé en haut.

```
tant que (pas en haut)
    monter une marche
```

### c. Le refrain d’une chanson

Le chanteur répète le même refrain **tant que** la chanson n’est pas terminée.

### d. Le tic-tac d’une horloge

Chaque seconde, l’aiguille avance.
On pourrait dire :

```
tant que (le temps passe)
    avancer d’une seconde
```

---

## 3. Pourquoi utiliser une boucle ?

Sans boucle, il faudrait **répéter manuellement** les mêmes lignes de code.

Exemple sans boucle :

```js
console.log("Hello!");
console.log("Hello!");
console.log("Hello!");
```

Même résultat, mais en plus compact :

```js
let count = 0;
while (count < 3) {
  console.log("Hello!");
  count = count + 1;
}
```

La boucle permet donc **d’automatiser la répétition** d’une action.

---

## 4. Le mot-clé `while`

`while` veut dire « tant que ».
Sa structure générale est la suivante :

```js
while (condition) {
  // instructions à répéter
}
```

Le code vérifie la condition avant chaque tour :

* Si la condition est vraie, il exécute le bloc.
* Si la condition devient fausse, la boucle s’arrête.

---

### Exemple simple

```js
let n = 1;
while (n <= 3) {
  console.log("Nombre : " + n);
  n = n + 1;
}
```

Résultat :

```
Nombre : 1
Nombre : 2
Nombre : 3
```

Quand `n` devient 4, la condition `n <= 3` est fausse, donc la boucle s’arrête.

---

## 5. Les trois éléments indispensables d’une boucle

1. **Un point de départ**
   Exemple : `let n = 1;`

2. **Une condition pour continuer**
   Exemple : `while (n <= 3)`

3. **Une évolution à chaque tour**
   Exemple : `n = n + 1;`

Si l’un de ces éléments manque, la boucle risque de ne jamais s’arrêter.
C’est ce qu’on appelle une **boucle infinie**.

---

## 6. Sortir d’une boucle avant la fin

Parfois, on veut interrompre une boucle même si la condition est encore vraie.
On utilise alors le mot-clé `break`.

```js
while (true) {
  console.log("Boucle infinie en théorie");
  break; // stoppe ici
}
```

---

## 7. Ce qu’il faut retenir

Une boucle est une manière d’écrire un **cycle** :

* on **part d’une situation initiale**,
* on **vérifie une condition**,
* on **répète** une ou plusieurs actions,
* et on **s’arrête** quand la condition devient fausse.

C’est le même principe qu’un geste, un rythme ou une habitude dans la vie réelle.

---

## 8. Ce que nous allons pratiquer

Dans la fiche `session_4_activity.md`, tu trouveras une série d’exercices très simples :
compter, répéter, attendre une réponse, faire des petits compteurs ou des mini-boucles de texte.

Ces exercices servent à **faire ressentir** le fonctionnement d’une boucle avant d’aborder des cas plus logiques.
