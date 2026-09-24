
# Jeu de Devinette de Nombre en JavaScript

Ce projet vous propose de créer un jeu interactif en JavaScript où le joueur doit deviner un nombre mystère. C’est un excellent exercice pour pratiquer les boucles, les conditions, et l’interaction utilisateur avec `alert` et `prompt`.

---

## Objectif
Permettre à un utilisateur de deviner un nombre aléatoire généré par l'ordinateur, avec des indices donnés à chaque tentative.

---

## Fonctionnement du Code

### Étape 1 : Bienvenue dans le jeu
Le jeu commence par afficher un message de bienvenue à l’utilisateur :
```javascript
alert("Bienvenue au jeu de devinette de nombre !");
```

### Étape 2 : Définir les limites et le nombre mystère
- La plage des nombres est définie entre 1 et 100 :
```javascript
let min = 1;
let max = 100;
```
- Le nombre mystère est généré de façon aléatoire :
```javascript
const nombreMystere = Math.floor(Math.random() * max) + min;
```

### Étape 3 : Boucle de Jeu
Le jeu utilise une boucle `while` pour permettre plusieurs tentatives jusqu'à ce que l'utilisateur trouve le nombre mystère :
```javascript
while (!deviner) {
  // Logique du jeu ici
}
```

### Étape 4 : Interaction Utilisateur
1. **Obtenir une réponse** :
   - L'utilisateur entre sa proposition via `prompt`.
   - Si l'utilisateur annule, le jeu est terminé.

2. **Vérification de la réponse** :
   - Si l'entrée n'est pas un nombre valide, un message d'erreur s'affiche.
   - Si l'entrée est inférieure au nombre mystère, l'utilisateur est informé : "C'est plus !".
   - Si l'entrée est supérieure, il voit "C'est moins !".
   - Si l'entrée est correcte, l'utilisateur gagne et la boucle se termine.

### Code Complet :
```javascript
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
```

---

## Points Clés à Retenir
1. **Génération aléatoire** :
   - `Math.random()` génère un nombre aléatoire entre 0 et 1.
   - Multiplier par la limite supérieure permet d'obtenir un nombre dans la plage souhaitée.
   - `Math.floor()` garantit un entier.

2. **Validation d'entrée** :
   - `parseInt()` convertit la chaîne entrée par l'utilisateur en entier.
   - `isNaN()` vérifie si l'entrée est valide.

3. **Retour Utilisateur** :
   - L’utilisateur reçoit des indices pour ajuster ses tentatives.

---

## Résultat attendu
- Si l’utilisateur trouve le bon nombre :  
  `"Félicitations ! Vous avez trouvé le nombre 42 en 5 tentative(s)."`
- Si l’utilisateur annule le jeu :  
  `"Jeu annulé. Merci d'avoir joué !"`

---

Essayez ce code dans un navigateur pour expérimenter le jeu en direct. C’est un excellent moyen de pratiquer les concepts de base en JavaScript !
