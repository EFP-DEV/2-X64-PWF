document.querySelector("#pierre".onclick = jouer;
document.querySelector("#papier").onclick = jouer;
document.querySelector("#ciseaux").onclick = jouer;

function jouer(event) {
  let jeu = document.querySelector("#jeu");
  let joueur = event.target.dataset.choix;
  let ordinateur = "pierre";

  // Le tirage fourni produit 0, 1 ou 2.
  let tirage = Math.floor(Math.random() * 3);
  if (tirage === 1) {
    ordinateur = "papier";
  } else if (tirage === 2) {
    ordinateur = "ciseaux";
  }

  jeu.dataset.joueur = joueur;
  jeu.dataset.ordinateur = ordinateur;

  let resultat = "Défaite";
  let message = document.querySelector("#message");
  message.textContent = resultat;
  if (joueur === ordinateur) {
    resultat = "Égalité";
  } else if (joueur === "pierre" && ordinateur === "ciseaux") {
    resultat = "Victoire";
  }
  jeu.dataset.resultat = resultat;

  document.querySelector("#choix").hidden = true;
  document.querySelector("#resultat").hidden = false;
  message.focus();
}
