/*
Ticket 2 — Formulaire d’inscription
Client : La plateforme JoinUs prépare son écran d’onboarding.

Règles : – Si l’âge < 18 → afficher "Formulaire restreint" – Sinon → "Formulaire complet"

Tâche : Écrire un programme qui sélectionne le bon formulaire selon l’âge saisi.
*/

/*

version avec 2 console.log et 2 "Formulaire "
let age;

age = prompt('Votre age svp');

if (age < 18) {
  console.log('Formulaire restreint');
} else {
  console.log('Formulaire complet');
}

*/

// version DRY
let age;
let etat;


age = prompt('Votre age svp');

if(age < 25){
    etat = 'restreint';
}
else if(age > 30){
    etat = 'complet';
}
else { // ici on sait que entre 25 et 30 compris

  let reponse = prompt('Zorg ? (o/n)');

  if(reponse == 'o'){
    etat = 'restreint';
  }
  else{
    etat = 'complet';
  }

}
console.log('Formulaire ' + etat);


