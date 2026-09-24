/*
 * Pixelator — Temps : point de départ de l’animation.
 *
 * Les huit cases du contour se peignent en violet, sans pause.
 * On construit l’animation dans la séquence en bas du fichier :
 * on ajoute des attentes, on change l’ordre des peintures, puis on ajoute les effacements.
 * La fonction effacer sera construite dans la fiche Temps au moment de la rotation.
 */

// On fixe ici la couleur commune ; chaque appel indique seulement la case à peindre.
function peindre(id) {
  document.querySelector("#" + id).style.backgroundColor = "#800080";
}

// Avec await attendre(1000), on laisse passer une seconde avant de poursuivre la séquence.
function attendre(dureeMs) {
  return new Promise(function (terminer) {
    setTimeout(terminer, dureeMs);
  });
}

// La séquence démarre quand la page est chargée ; async permet les pauses avec await.
window.addEventListener("load", async function () {
  peindre("pixel1");
  peindre("pixel2");
  peindre("pixel3");
  peindre("pixel4");
  // On saute pixel5 pour garder le centre blanc.
  peindre("pixel6");
  peindre("pixel7");
  peindre("pixel8");
  peindre("pixel9");
});
