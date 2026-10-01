// Exercice 6 — Retirer un article du stock
// Résultat attendu : « Retrait d’un article », « Avant : 3 »,
// « Retiré : 1 », « Après : 2 ».
// Avec stockDepart = 1 et quantiteRetiree = 1, le stock final vaut 0.

let stockDepart = 3;
let quantiteRetiree = 1;
let stockRestant = stockDepart;
let messageStockAvant = "Avant : " + stockDepart;
stockRestant - quantiteRetiree;
let messageStockApres = "Après : " + stockRestant;
console.log("Retrait d’un article");
console.log(messageStockAvant);
console.log("Retiré : " + quantiteRetiree);
console.log(messageStockApres);
