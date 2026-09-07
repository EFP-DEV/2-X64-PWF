const ampoule = document.getElementById("ampoule");
const bouton = document.getElementById("toggle");

bouton.addEventListener("click", function() {
  const eteinte = ampoule.src.includes("off");

  if (eteinte) {
    ampoule.src = "ampoule_on.gif";
    ampoule.alt = "Ampoule allumée";
    bouton.setAttribute("aria-pressed", "true");
    ampoule.classList.add("on");
  } else {
    ampoule.src = "ampoule_off.gif";
    ampoule.alt = "Ampoule éteinte";
    bouton.setAttribute("aria-pressed", "false");
    ampoule.classList.remove("on");
  }
});
