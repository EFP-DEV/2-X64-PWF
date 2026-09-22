# Exercice 2 — Résoudre l’ampoule

[Séance 2](../session_02.md)

**Durée : 15 minutes.** Reprendre les manipulations de couleur dans la console, puis observer, diagnostiquer et terminer un programme inachevé.

## Votre mission

Vous recevez un programme inachevé : **un clic sur l’image allume l’ampoule, mais elle reste ensuite bloquée dans cet état**. Examinez son comportement et son code, puis corrigez-le pour pouvoir allumer et éteindre l’ampoule à chaque clic.

## Fichiers fournis

Le dossier [ampoule](./ampoule/index.html) contient le HTML, le CSS, le JavaScript à compléter et les deux images. Ouvrez sa copie locale dans votre éditeur, puis `index.html` dans le navigateur.

- [index.html](./ampoule/index.html)
- [style.css](./ampoule/style.css)
- [script.js](./ampoule/script.js)
- [ampoule_off.png](./ampoule/ampoule_off.png) et [ampoule_on.png](./ampoule/ampoule_on.png)

## 1. Retrouver la console et les couleurs

La page s’ouvre sur un fond noir. Retrouvez dans `style.css` la déclaration `background-color: #000000;`. Que représentent les trois paires de chiffres ?

Comme lors de la première séance, ouvrez **F12 → Console** et changez la couleur du fond avec JavaScript. **Choisissez vous-même une couleur claire**, en écrivant son code hexadécimal `#RRGGBB` ou son triplet `rgb(r, g, b)`.

Complétez cette instruction avec votre couleur entre guillemets avant de la saisir :

```js
document.body.style.backgroundColor = "___";
```

Pour garder le texte lisible sur votre fond clair, affectez-lui ensuite une couleur sombre :

```js
document.body.style.color = "#222222";
```

Expliquez le rôle de `document`, de `body`, de `style`, de `backgroundColor`, du `=` et des guillemets. Pourquoi écrit-on `background-color` en CSS et `backgroundColor` ici ?

Avant de recharger, prédisez la couleur du fond après le rechargement. Vérifiez : le fond redevient noir et le texte clair. Les affectations dans la console modifient la page affichée, pas le fichier CSS. Vous pouvez réappliquer votre couleur dans la console pour poursuivre.

## 2. Reproduire le problème

Avant de modifier le programme :

1. Rechargez la page et notez l’image et le texte de l’état initial.
2. Cliquez directement sur l’image de l’ampoule. Qu’est-ce qui change ?
3. Cliquez une deuxième fois, puis une troisième. Comparez ce qui se passe à ce que vous attendiez.

Décrivez le problème en une phrase, puis formulez en français la règle que le programme devrait appliquer à chaque clic.

## 3. Diagnostiquer et terminer le code

Ouvrez `script.js`. Le code qui déclenche la fonction au clic est déjà fourni. Vous pouvez l’utiliser sans devoir l’expliquer à cette étape. Retrouvez ce que vous connaissez : une condition, des blocs et des affectations.

Suivez les instructions exécutées au premier clic, puis au deuxième :

- Qu’est-ce qui décide du bloc exécuté ? Cette décision tient-elle compte de l’état de l’ampoule ?
- Quelles instructions expliquent ce que vous avez observé ?
- Que manque-t-il pour obtenir l’autre état ?

**Repères de lecture :** `etat.textContent` contient le texte de l’état. `event.target` désigne ici l’image cliquée ; `setAttribute("src", ...)` change son fichier image. `else` signifie « sinon » : son bloc s’exécute lorsque la condition du `if` est fausse.

Expliquez la cause du blocage, puis **corrigez et complétez le programme** en vous appuyant sur les instructions déjà présentes. Respectez leur ordre et les limites des blocs, comme pour l’horloge. L’image et le texte doivent toujours décrire le même état.

Les deux fichiers d’image sont à côté de `index.html`. La dernière ligne de la fonction met déjà à jour le texte alternatif à partir de l’état affiché. Enregistrez et rechargez la page pour essayer votre correction.

## 4. Prédire, vérifier, expliquer

Avant chaque action, annoncez l’état attendu, puis vérifiez :

| Action | Résultat attendu |
|---|---|
| Ouvrir ou recharger la page | Image éteinte et texte « éteinte » |
| Premier clic sur l’image | Image allumée et texte « allumée » |
| Deuxième clic sur l’image | Image éteinte et texte « éteinte » |
| Troisième clic sur l’image | Image allumée et texte « allumée » |
| Recharger après le troisième clic | Retour à l’état éteint |

Expliquez pourquoi le programme initial restait bloqué et comment votre correction permet de changer d’état à chaque clic. Appuyez votre explication sur les blocs exécutés et les valeurs modifiées.

[Exercice suivant — commencer Pixelator](./session_02-pixelator.md)
