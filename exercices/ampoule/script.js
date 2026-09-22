function changerEtat() {
  let ampoule = document.querySelector("#ampoule");
  let etat = document.querySelector("#etat");

  if (/* À compléter : remplacer false par la condition. */ false) {
    // À compléter : changer l’image et le texte pour allumer l’ampoule.
  } else {
    ampoule.src = "ampoule_off.gif";
    etat.textContent = "éteinte";
  }

  ampoule.alt = "Ampoule " + etat.textContent;
}
