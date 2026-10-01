// Débogage — recueil de consultation, à ne pas charger dans la page HTML.
// Chaque programme existe séparément dans labo-renforcement/debogage/.
// La fiche session_03-debogage.md indique le fichier à charger et les essais.
// On travaille sur un seul exercice à la fois, dans la page commune.
// On observe la console, on repère l’erreur, puis on explique sa cause.
// Après une correction, on enregistre le fichier et on recharge la page.
// Chaque cas de vérification repart des valeurs initiales indiquées.

// Exercice 1 — Préparer une étiquette
// Résultat attendu : « Cahier - Namur », puis « Étiquette préparée ».

let articleCommande = "Cahier";
let destinationCommande = "Namur";
let etiquetteCommande = articleCommande + " - " + destinationCommande;
console.log(etiquetteCommande;
console.log("Étiquette préparée");

// Exercice 2 — Annoncer un rendez-vous
// Résultat attendu : « Lieu : Bibliothèque », puis
// « Rendez-vous : Vendredi à 10:00 ».

let lieuRetrait = "Bibliothèque";
let jourRetrait = "Vendredi";
let heureRetrait = "10:00";
let rendezVousRetrait = jourRetrait + " à " + heureRetrait;
console.log("Lieu : " + lieuRetrat);
console.log("Rendez-vous : " + rendezVousRetrait);

// Exercice 3 — Décrire un trajet
// Résultat attendu : « Trajet », « Départ : Namur », « Arrivée : Mons ».
// Avec villeArrivee = "Liège", seule la ligne d’arrivée change.

let villeDepart = "Namur";
let villeArrivee = "Mons";
let libelleDepart = "Départ : " + villeDepart;
let libelleArrivee = "Arrivée : " + villeArrivee;
console.log("Trajet");
console.log(libelleDepart);
console.log(libelleDepart);

// Exercice 4 — Afficher deux destinations
// Résultat attendu : « Destination : Namur », puis « Destination : Mons ».
// On prévoit les affichages, puis on corrige uniquement le corps de la fonction.
// Avec "Liège" à la place de "Mons" dans le deuxième appel,
// seule la deuxième ligne devient « Destination : Liège ».

function afficherDestination(destination) {
  console.log("Destination : " + "destination");
}

afficherDestination("Namur");
afficherDestination("Mons");

// Exercice 5 — Ajouter des tickets au stock
// Résultat attendu : « Avant : 3 », « Ajout : 2 », « Après : 5 ».
// Avec un stock initial de 1 et un ajout de 2, le stock final vaut 3.

let ticketsAvant = "3";
let ticketsAjoutes = 2;
let ticketsApres = ticketsAvant + ticketsAjoutes;
let libelleTicketsAvant = "Avant : " + ticketsAvant;
let libelleTicketsAjoutes = "Ajout : " + ticketsAjoutes;
let libelleTicketsApres = "Après : " + ticketsApres;
console.log(libelleTicketsAvant);
console.log(libelleTicketsAjoutes);
console.log(libelleTicketsApres);

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

// Exercice 7 — Préparer deux étiquettes
// Résultat attendu : les étiquettes de Cahier et de Classeur apparaissent
// entre « Préparation des étiquettes » et « Fin de la préparation ».
// Chaque étiquette indique l’article et la destination Namur.
// Avec destinationEtiquettes = "Mons", les deux destinations changent.

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
