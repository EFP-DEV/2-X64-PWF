let minuscules = "abcdefghijklmnopqrstuvwxyz";
let majuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("#chiffrer").onclick = chiffrer;
document.querySelector("#dechiffrer").onclick = dechiffrer;

function canRotate(character) {
  return minuscules.indexOf(character) !== -1 || majuscules.indexOf(character) !== -1;
}

function shiftOne(letter) {
  let alphabet = minuscules;
  if (majuscules.indexOf(letter) !== -1) {
    alphabet = majuscules;
  }

  let position = alphabet.indexOf(letter);
  return alphabet.charAt(position + 1);
}

function rotateOne(letter) {
  if (letter === "z") {
    return "a";
  }
  if (letter === "Z") {
    return "A";
  }
  return shiftOne(letter);
}

function rotate(letter, rot) {
  let result = letter;
  let steps = 0;
  while (steps < rot) {
    result = rotateOne(result);
    steps = steps + 1;
  }
  return result;
}

function chiffrer() {
  let sortie = document.querySelector("#message-chiffre");
  let phrase = document.querySelector("#phrase").value;
  let rotation = document.querySelector("#rotation").valueAsNumber;
  if (!Number.isInteger(rotation) || rotation < 1 || rotation > 25) {
    sortie.value = "";
    return;
  }

  let resultat = "";
  let position = 0;
  while (position < phrase.length) {
    let caractere = phrase.charAt(position);
    if (canRotate(caractere)) {
      caractere = rotate(caractere, rotation);
    }
    resultat += caractere;
    position += 1;
  }
  sortie.value = resultat;
}

function dechiffrer() {
  let liste = document.querySelector("#lectures");
  liste.textContent = "";
  let message = document.querySelector("#message-recu").value;
  let rotation = 0;
  while (rotation < 26) {
    let lecture = "";
    let position = 0;
    while (position < message.length) {
      let caractere = message.charAt(position);
      if (canRotate(caractere)) {
        caractere = rotate(caractere, rotation);
      }
      lecture += caractere;
      position += 1;
    }

    let ligne = document.createElement("li");
    ligne.textContent = lecture;
    liste.appendChild(ligne);
    rotation += 1;
  }
}
