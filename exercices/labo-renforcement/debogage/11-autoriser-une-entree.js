// Exercice 11 — Autoriser une entrée
// Une personne entre seulement si une place est libre.
// Résultat attendu avec 0 place : entrée refusée, 0 place restante,
// 0 personne admise.
// Avec placesLibres = 1 : entrée autorisée, 0 place restante,
// 1 personne admise.
// Avec placesLibres = 3 : entrée autorisée, 2 places restantes,
// 1 personne admise.

let placesLibres = 0;
let personnesAdmises = 0;
let decisionEntree = "Entrée refusée";
let lieuEntree = "Salle de lecture";
let jourEntree = "Vendredi";
let personneEntree = "Ada";
let messageEntree;
console.log("Lieu : " + lieuEntree);
console.log("Jour : " + jourEntree);
console.log("Personne : " + personneEntree);
console.log("Places avant : " + placesLibres);
if (0 < placesLibres); {
  placesLibres = placesLibres - 1;
  personnesAdmises = personnesAdmises + 1;
  decisionEntree = "Entrée autorisée";
}
messageEntree = "Décision : " + decisionEntree;
console.log(messageEntree);
console.log("Places après : " + placesLibres);
console.log("Admissions après : " + personnesAdmises);
