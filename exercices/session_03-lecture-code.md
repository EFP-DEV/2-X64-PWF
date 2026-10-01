# Lecture — Suivre les valeurs

## 1. Une destination

On exécute chaque programme mentalement, sans le lancer dans le navigateur. On suit les instructions une à une et on garde la valeur de chaque variable après chaque changement. On peut noter ces étapes sur papier.

Pour chaque appel à `console.log`, on indique la valeur qui serait affichée à cet instant. Chaque réponse s’accompagne d’une explication fondée sur les instructions. Les programmes sont indépendants : chaque lecture repart des valeurs écrites dans son extrait.

```js
let destination = "Liège";

destination = "Namur";

console.log(destination);
```

Quelle est la valeur finale de destination ?

## 2. Un rendez-vous déplacé

```js
let lieu = "bibliothèque";
let lieuInitial = lieu;

lieu = "atelier";

console.log(lieu);
console.log(lieuInitial);
```

Quelles sont les valeurs finales de lieu et de lieuInitial ?

## 3. Une description d’article

```js
let article = "cahier";
let couleur = "bleu";

let description = article + " - " + couleur;

couleur = "rouge";

console.log(couleur);
console.log(description);
```

Quelles sont les valeurs finales de couleur et de description ?

## 4. Une porte

```js
let etat = "fermée";

if (etat === "fermée") {
  etat = "ouverte";
}

if (etat === "ouverte") {
  etat = "fermée";
}

console.log(etat);
```

Quelle est la valeur finale de etat ?

Quelle valeur chaque condition examine-t-elle ?

## 5. Calculer une diminution

```js
let stock = 3;

stock - 1;

console.log(stock);
```

Quelle est la valeur finale de stock ?

## 6. Conserver une diminution

```js
let stock = 3;

stock = stock - 1;

console.log(stock);
```

Quelle est la valeur finale de stock ?

Quelle instruction explique la différence avec l’exercice 5 ?

## 7. Une publication

```js
let statut = "brouillon";
let message = "En préparation";

if (statut === "publié") {
  message = "En ligne";
}

console.log(statut);
console.log(message);
```

Quelles sont les valeurs finales de statut et de message ?

Le bloc du if s’exécute-t-il ?

## 8. Un équipement selon la météo

```js
let meteo = "pluie";
let equipement;

if (meteo === "pluie") {
  equipement = "imperméable";
} else {
  equipement = "veste";
}

console.log(equipement);
```

Quelle est la valeur finale de equipement ?

Quel bloc s’exécute ?

## 9. Entrer dans une salle

```js
let personnes = 3;
let capacite = 4;
let decision = "Entrée refusée";

if (personnes < capacite) {
  personnes = personnes + 1;
  decision = "Entrée autorisée";
}

console.log(personnes);
console.log(decision);
```

Quelles sont les valeurs finales de personnes et de decision ?

Quelle valeur de personnes la condition examine-t-elle ?

## 10. Une porte avec if / else

```js
let etat = "fermée";

if (etat === "fermée") {
  etat = "ouverte";
} else {
  etat = "fermée";
}

console.log(etat);
```

Quelle est la valeur finale de etat ?

Pourquoi le résultat diffère-t-il de celui de l’exercice 4 ?

[Suite — débogage](./session_03-debogage.md) · [Séance 3](../session_03.md)
