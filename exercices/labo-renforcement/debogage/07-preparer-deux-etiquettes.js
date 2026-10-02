// Exercice 7 — Préparer deux étiquettes

/*
Resultat attendu:

Préparation des étiquettes
---
Article : Cahier
Destination : Namur
Article : Classeur
Destination : Namur
Fin de la préparation
---
*/


let destinationEtiquettes = "Namur";
let premierArticle = "Cahier";
let secondArticle = "Classeur";
let separateurEtiquettes = "---";
function afficherEtiquette(article) {
  console.log("Article : " + article);
  console.log("Destination : " + destinationEtiquettes);
}
console.log("Préparation des étiquettes");
console.log(separateurEtiquettes);
console.log("Fin de la préparation");
console.log(separateurEtiquettes);
