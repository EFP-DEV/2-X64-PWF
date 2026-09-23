document.querySelector("#ampoule").addEventListener("click", toggle);

function toggle(event) {
  let etat = document.querySelector("#etat");
  
  /* À modifier : remplacer true par une condition */
  if (true) {
    event.target.setAttribute("src", "ampoule_on.png");
    etat.textContent = "allumée";
  } else {

  }
  event.target.setAttribute("alt", "Ampoule " + etat.textContent);
}
