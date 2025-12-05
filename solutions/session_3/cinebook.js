/*
Ticket 3 — Prix du cinéma
Client : Le site CineBook veut afficher le prix des billets sur son interface.

Règles : – Prix normal = 10€ – Réduction = 6€ si âge < 12 ou ≥ 65

Tâche : Écrire un programme qui calcule le prix à afficher.
*/


let prix, age;

// demander l'age
age = prompt('Votre age');

// calculer le prix
if(age < 12 || age >= 65){
    prix = 6;
}
else{
    prix = 10;
}

// afficher le prix
console.log('Pour vous, le prix cinebook est de ' + prix);