// Lecture — dix programmes indépendants à exécuter mentalement.
// On suit les valeurs dans l’ordre des instructions, sans lancer le code.
// On explique les valeurs que chaque console.log afficherait.
// La fiche session_03-lecture-code.md présente les programmes et les questions.

// Exercice 1 — Une destination
// Quelle est la valeur finale de destination ?

let destination = "Liège";

destination = "Namur";

console.log(destination);

// Exercice 2 — Un rendez-vous déplacé
// Quelles sont les valeurs finales de lieu et de lieuInitial ?

let lieu = "bibliothèque";
let lieuInitial = lieu;

lieu = "atelier";

console.log(lieu);
console.log(lieuInitial);

// Exercice 3 — Une description d’article
// Quelles sont les valeurs finales de couleur et de description ?

let article = "cahier";
let couleur = "bleu";

let description = article + " - " + couleur;

couleur = "rouge";

console.log(couleur);
console.log(description);

// Exercice 4 — Une porte
// Quelle est la valeur finale de etat ?
// Quelle valeur chaque condition examine-t-elle ?

let etat = "fermée";

if (etat === "fermée") {
  etat = "ouverte";
}

if (etat === "ouverte") {
  etat = "fermée";
}

console.log(etat);

// Exercice 5 — Calculer une diminution
// Quelle est la valeur finale de stock ?

let stock = 3;

stock - 1;

console.log(stock);

// Exercice 6 — Conserver une diminution
// Quelle est la valeur finale de stock ?
// Quelle instruction explique la différence avec l’exercice 5 ?

let stock = 3;

stock = stock - 1;

console.log(stock);

// Exercice 7 — Une publication
// Quelles sont les valeurs finales de statut et de message ?
// Le bloc du if s’exécute-t-il ?

let statut = "brouillon";
let message = "En préparation";

if (statut === "publié") {
  message = "En ligne";
}

console.log(statut);
console.log(message);

// Exercice 8 — Un équipement selon la météo
// Quelle est la valeur finale de equipement ?
// Quel bloc s’exécute ?

let meteo = "pluie";
let equipement;

if (meteo === "pluie") {
  equipement = "imperméable";
} else {
  equipement = "veste";
}

console.log(equipement);

// Exercice 9 — Entrer dans une salle
// Quelles sont les valeurs finales de personnes et de decision ?
// Quelle valeur de personnes la condition examine-t-elle ?

let personnes = 3;
let capacite = 4;
let decision = "Entrée refusée";

if (personnes < capacite) {
  personnes = personnes + 1;
  decision = "Entrée autorisée";
}

console.log(personnes);
console.log(decision);

// Exercice 10 — Une porte avec if / else
// Quelle est la valeur finale de etat ?
// Pourquoi le résultat diffère-t-il de celui de l’exercice 4 ?

let etat = "fermée";

if (etat === "fermée") {
  etat = "ouverte";
} else {
  etat = "fermée";
}

console.log(etat);
