/*

Ticket 6 — Feu de circulation
Client : La startup FlowUX veut tester une animation de boutons.

Règles : 
– "rouge" → "Bouton désactivé" 
– "orange" → "Bouton attention" 
– "vert" → "Bouton actif"

Tâche : Écrire un programme qui affiche l’état du bouton selon la couleur.

*/

let couleur;
let etat;

couleur = prompt('Couleur du bouton svp ?');

if(couleur == 'rouge'){
    etat = 'desactive';
}
else if(couleur == 'orange'){
    etat = 'attention';
}else{
    etat = 'inconnu';
}

else if(couleur == 'vert'){
    etat = 'actif';
}
else{
    etat = 'inconnu';
}

document.write('Le bouton est ' + etat);