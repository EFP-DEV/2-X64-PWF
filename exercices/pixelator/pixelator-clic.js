/*
 * Pixelator — Peindre au clic : point de départ de l’interaction.
 *
 * La grille reste blanche. Un clic sur le premier pixel affiche
 * l’élément cliqué dans la console grâce à event.target.
 * On remplace ensuite cet affichage par la peinture, puis on associe les autres
 * cases au même comportement avant d’ajouter l’effacement au deuxième clic.
 */

// On associe la fonction au clic, sans l’exécuter immédiatement.
document.querySelector("#pixel1").onclick = peindre;

// Le navigateur fournit un événement ; le nom event indique la valeur attendue.
function peindre(event) {
  console.log(event.target);
}
