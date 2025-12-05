# Session 3 - Stocker, Transformer, Interagir, Tester

>**Durée** : 3h30 (avec pause)
>
>**Objectif** : Comprendre ce qu’est un test, pourquoi on en a besoin, et comment il fonctionne.

---

## 1. Rappel du cours précédent

Lors de la session précédente, nous avons découvert la base de JavaScript :

* écrire des instructions simples, dans l'ordre
* utiliser des variables avec `let`,
* comprendre le rôle de l’opérateur `+` pour concaténer ou additionner,
* afficher le resultat dans la console

---

## 2. Objectifs de cette session

Cette nouvelle session vise à :

1. **Reprendre la main sur la console** pour vérifier nos programmes.
2. **Apprendre à interagir avec l’utilisateur** grâce à `prompt()`.
3. **Mettre en pratique les conditions (`if`, `else`)** en les appliquant à des scénarios concrets.
4. **S’entraîner à travers une série de tickets** inspirés de cas réels en UX/UI design.

> En résumé : **on apprend à prendre une entrée → appliquer une règle → afficher une sortie.**

---

## 3. Première activité : découverte de `console.log()` et `prompt()`

### Exemple simple

```js
let prenom = prompt("Quel est ton prénom ?");
console.log("Bonjour " + prenom);
```

### Attention à l’opérateur `+`

```js
let age = prompt("Quel est ton âge ?");
console.log(age + 1); // piège : concaténation si age est une chaîne
console.log(parseInt(age) + 1); // version correcte
```

> L’objectif est de **tester dans la console** et de bien comprendre la différence.

[Voir le détail de l’activité I/O](./session_3/0_console.md)
---

---

## 4. Exercices — Les Tickets

Les tickets sont des **petites missions clients** :
– chaque ticket = **1 règle à traduire en programme**,
– progression : **simple → avancé → filtrage**.


[Voir tous les tickets](./session_3/1_tickets.md)
---

---

## 5. Conclusion de la session

À la fin de cette session, vous aurez appris :

* à **demander une saisie utilisateur**,
* à **filtrer et transformer les données saisies**,
* à **appliquer une règle métier** (ex. choisir une icône, calculer un prix, valider un formulaire),
* à **afficher le résultat dans la console**.

> Les tickets vous entraînent à raisonner comme un développeur :
**Client → Règles → Tâche → Programme.**

Lors de la prochaine session, nous passerons de la **console** à un **fichier HTML+JS** et nous commencerons à **structurer nos projets**.
