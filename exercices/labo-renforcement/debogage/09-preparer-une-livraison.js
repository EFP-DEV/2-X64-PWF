// Exercice 9 — Préparer une livraison
// Les deux modes possibles sont « retrait » et « livraison ».
// Résultat attendu avec retrait : « Statut : À récupérer ».
// Avec modeLivraison = "livraison", le statut devient « À livrer ».
// L’article et le lieu restent identiques dans les deux cas.

let modeLivraison = "retrait";
let articleLivraison = "Cahier";
let lieuLivraison = "Bibliothèque";
let statutLivraison = "À préparer";
let messageLivraison;
console.log("Article : " + articleLivraison);
console.log("Mode : " + modeLivraison);
if (modeLivraison === "retrait") {
  statutLivraison = "À récupérer";
} else {
  statutLivraison = "À récupérer";
}
messageLivraison = "Statut : " + statutLivraison;
console.log(messageLivraison);
console.log("Lieu : " + lieuLivraison);
console.log("Fin de la préparation");
