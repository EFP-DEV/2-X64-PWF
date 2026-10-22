// Fourni : retrouver le conteneur présent dans le document.
let grille = document.querySelector("#grille-pixels");

// À compléter après les essais dans la console : construire les cases ici.

// Fourni : comportement de peinture et d’effacement étudié précédemment.
function peindre(event) {
  if (event.target.style.backgroundColor === "") {
    event.target.style.backgroundColor = "#800080";
  } else {
    event.target.style.backgroundColor = "";
  }
}
