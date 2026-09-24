/*
 * Pixelator — Peindre au clic : point de départ de l’interaction.
 *
 * La grille reste blanche au chargement. Le premier clic est associé
 * à un comportement dont l’action reste à compléter.
 * On peint la case désignée par event.target, puis on associe les autres cases
 * au même comportement avant d’ajouter l’effacement au deuxième clic.
 */

// On confie le nom du comportement au navigateur, qui l’appellera lors du clic.
document.querySelector("#pixel1").onclick = peindrePixel;

// Le navigateur fournit event ; event.target désigne la case cliquée.
function peindrePixel(event) {
  // On complète ici la peinture de la case cliquée.
}
