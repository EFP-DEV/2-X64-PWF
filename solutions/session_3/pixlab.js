/*
Ticket 4 — Numérotation des cartes (pair/impair)
Client : Le studio PixLab conçoit une galerie d’images.

Règles : – Carte paire → "fond clair" – Carte impaire → "fond foncé"

Tâche : Écrire un programme qui attribue le bon style en fonction du numéro de carte.
*/

let carte_index;
let fond;

carte_index = prompt('Numero de carte');

if(carte_index % 2 == 0){
    fond = 'clair';
}
else{
    fond = 'fonce';
}
console.log("Fond " + fond);