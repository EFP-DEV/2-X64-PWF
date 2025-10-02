// Jeu de devinette de nombre

alert("Bienvenue au jeu de devinette de nombre !");

let min = 1;
let max = 100;

const nombreMystere = Math.floor(Math.random() * max) + min; // Nombre entre 1 et 100
let tentative = 0;
let deviner = false;

while (!deviner) {
  const reponse = prompt(`Devinez le nombre mystère entre ${min} et ${max} :`);
  tentative++;

  if (reponse === null) {
    alert("Jeu annulé. Merci d'avoir joué !");
    break;
  }

  const nombre = parseInt(reponse, 10);

  if (isNaN(nombre)) {
    alert("Ce n'est pas un nombre valide. Veuillez réessayer !");
  } else if (nombre < nombreMystere) {
    alert("C'est plus !");
  } else if (nombre > nombreMystere) {
    alert("C'est moins !");
  } else {
    alert(
      `Félicitations ! Vous avez trouvé le nombre ${nombreMystere} en ${tentative} tentative(s).`
    );
    deviner = true;
  }
}
