// Exercice 8 — Vérifier un code d’accès
// Seul le code ABC autorise l’accès.
// Résultat attendu avec XYZ : « Autorisation : refusée ».
// Le code saisi reste XYZ après la vérification.
// Avec codeSaisi = "ABC", l’accès est accordé ; avec "", il est refusé.

let codeAttendu = "ABC";
let codeSaisi = "XYZ";
let autorisation = "refusée";
let messageAcces;
console.log("Code saisi : " + codeSaisi);
if (codeSaisi = codeAttendu) {
  autorisation = "accordée";
} else {
  autorisation = "refusée";
}
messageAcces = "Autorisation : " + autorisation;
console.log(messageAcces);
console.log("Code attendu : " + codeAttendu);
console.log("Code saisi après vérification : " + codeSaisi);
