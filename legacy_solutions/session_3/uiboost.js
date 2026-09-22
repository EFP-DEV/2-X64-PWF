/*

Ticket 5 — Mini-calculatrice
Client : L’agence UIBoost développe un outil de design system.

Règles : 
Si "+" → augmenter la taille de la typo – 
Si "-" → réduire la taille de la typo

Tâche : Écrire un programme qui modifie la taille affichée selon l’opérateur choisi.

*/

let taille;
let reponse;

taille = 16;

reponse = prompt('blabla ?');
if(reponse == '+'){
    taille = taille + 1;
}
else if(reponse == '-'){
    taille = taille - 1;
}
else{
    taille = 'ERROR';
}

document.write('<strong>' + taille + '</strong>')