# Création 2 — Vérifier un stock

Un article peut être disponible ou épuisé. On écrit un programme qui choisit le message correspondant à la quantité en stock, puis l’affiche dans la console.

## Préparer le fichier actif

On conserve le dossier `labo-renforcement` et sa page commune. Si le dossier manque, on suit la [préparation du dossier](./session_03-debogage.md#preparation) pour le créer et récupérer les fichiers individuellement.

Si [02-verifier-un-stock.js](./labo-renforcement/creation/02-verifier-un-stock.js) manque dans le sous-dossier `creation`, on ouvre son lien sur GitHub et on utilise **Download raw file**. On place le fichier dans `labo-renforcement/creation` en conservant son nom et son extension. Un fichier déjà présent est conservé.

Le HTML [renforcement.html](./labo-renforcement/renforcement.html) et la feuille de style [renforcement-console.css](./labo-renforcement/renforcement-console.css) sont fournis. Dans VS Code, on remplace l’unique balise `script` de `renforcement.html` par :

```html
<script src="creation/02-verifier-un-stock.js"></script>
```

On enregistre le HTML et on ouvre le fichier local `creation/02-verifier-un-stock.js` dans l’éditeur. La quantité est fournie ; la variable du message, les conditions et l’affichage restent à écrire.

On garde `renforcement.html` ouvert dans le navigateur, avec sa console. Après avoir vidé la console et rechargé la page, aucun résultat ne s’affiche encore. Le programme du badge reste conservé dans son fichier, mais cette page charge maintenant uniquement le programme du stock.

## Écrire le programme

Le fichier `creation/02-verifier-un-stock.js` contient déjà cette déclaration, qu’on conserve sans la recopier :

```js
let quantite = 0;
```

La quantité est un nombre entier, positif ou nul. La règle comporte deux possibilités :

- Si la quantité vaut zéro, le message est **« Épuisé »**.
- Sinon, le message est **« Disponible »**.

On crée une variable `message`. Un `if` / `else` lui attribue le texte correspondant à la quantité. L’instruction `console.log(message)` affiche ensuite le résultat.

**Résultat attendu avec la valeur de départ :** `Épuisé`.

## Vérifier les deux possibilités

On change uniquement la valeur de `quantite` dans `creation/02-verifier-un-stock.js`. Pour chaque essai, on enregistre le JavaScript, on vide la console, puis on recharge `renforcement.html`. Le programme repart de la quantité écrite dans le fichier ; le résultat apparaît dans la console.

| Quantité | Résultat attendu |
|---:|---|
| 0 | Épuisé |
| 1 | Disponible |
| 5 | Disponible |

On explique quelle valeur la condition examine et pourquoi les quantités 1 et 5 produisent le même message.

[Exercice précédent — Préparer un badge](./session_03-creation-badge.md) · [Suite — Classer une valeur](./session_03-creation-classement.md)
