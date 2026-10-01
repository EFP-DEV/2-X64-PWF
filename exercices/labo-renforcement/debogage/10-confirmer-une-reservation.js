// Exercice 10 — Confirmer une réservation
// Résultat attendu avec oui : « Réservation : confirmée » et
// « État conservé : confirmée » décrivent le même état.
// Avec confirmationReservation = "non", les deux lignes indiquent
// « en attente ». Le nom, le lieu et la confirmation restent inchangés.

let etatReservation = "en attente";
let confirmationReservation = "oui";
let lieuReservation = "Bibliothèque";
let nomReservation = "Ada";
console.log("Demande de réservation");
console.log("Nom : " + nomReservation);
console.log("Lieu : " + lieuReservation);
console.log("Confirmation : " + confirmationReservation);
console.log("Réservation : " + etatReservation);
if (confirmationReservation === "oui") {
  etatReservation = "confirmée";
} else {
  etatReservation = "en attente";
}
let messageFinalReservation = "État conservé : " + etatReservation;
console.log(messageFinalReservation);
console.log("Fin de la demande");
