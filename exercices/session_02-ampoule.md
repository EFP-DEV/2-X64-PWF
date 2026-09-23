# Exercice 2 — Résoudre l’ampoule

[Séance 2](../session_02.md)

**Durée : 30 minutes.** Consacrez les 15 premières minutes au diagnostic, à la correction et aux vérifications des étapes 1 à 3 ; les 15 suivantes aux classes CSS et à la vérification finale de l’étape 4.

## Votre mission

Vous recevez un programme inachevé : **un clic sur l’image allume l’ampoule, mais elle reste ensuite bloquée dans cet état**. Corrigez-le pour pouvoir allumer et éteindre l’ampoule à chaque clic. Une fois ce fonctionnement vérifié, vous ferez aussi changer le fond.

## Fichiers fournis

Le dossier [ampoule](./ampoule/index.html) contient le HTML, le CSS, le JavaScript à compléter et les deux images. Ouvrez sa copie locale dans votre éditeur, puis `index.html` dans le navigateur.

- [index.html](./ampoule/index.html)
- [dark-room.css](./ampoule/dark-room.css)
- [bulb-switch.js](./ampoule/bulb-switch.js)
- [ampoule_off.png](./ampoule/ampoule_off.png) et [ampoule_on.png](./ampoule/ampoule_on.png)

## 1. Reproduire le problème

Avant de modifier le programme :

1. Rechargez la page et notez l’image et le texte de l’état initial.
2. Cliquez directement sur l’image de l’ampoule. Qu’est-ce qui change ?
3. Cliquez une deuxième fois, puis une troisième. Comparez ce qui se passe à ce que vous attendiez.

Décrivez le problème en une phrase, puis formulez en français la règle que le programme devrait appliquer à chaque clic.

## 2. Diagnostiquer et terminer le code

Ouvrez `bulb-switch.js`. Le code qui déclenche la fonction au clic est déjà fourni. Vous pouvez l’utiliser sans devoir l’expliquer à cette étape. Retrouvez ce que vous connaissez : une condition, des blocs et des affectations.

Suivez les instructions exécutées au premier clic, puis au deuxième :

- Qu’est-ce qui décide du bloc exécuté ? Cette décision tient-elle compte de l’état de l’ampoule ?
- Quelles instructions expliquent ce que vous avez observé ?
- Que manque-t-il pour obtenir l’autre état ?

**Repères de lecture :** `etat.textContent` contient le texte de l’état. `event.target` désigne ici l’image cliquée ; `setAttribute("src", ...)` change son fichier image. `else` signifie « sinon » : son bloc s’exécute lorsque la condition du `if` est fausse.

Expliquez la cause du blocage, puis **corrigez et complétez le programme** en vous appuyant sur les instructions déjà présentes. L’image et le texte doivent toujours décrire le même état.

Les deux fichiers d’image sont à côté de `index.html`. La dernière ligne de la fonction construit le texte alternatif à partir de `etat.textContent`. Si elle était exécutée avant le `if`, quel état décrirait-elle après le clic ? Suivez les valeurs pour le premier clic, puis pour le deuxième.

**Le nouvel état doit exister avant de construire le texte qui le décrit.** Une modification ultérieure de l’état ne change pas le texte déjà construit. La ligne placée après le `if` / `else` utilise l’état obtenu, quel que soit le bloc exécuté.

Enregistrez et rechargez la page pour essayer votre correction.

## 3. Prédire, vérifier, expliquer

Avant chaque action, annoncez l’état attendu, puis vérifiez :

| Action | Résultat attendu |
|---|---|
| Ouvrir ou recharger la page | Image éteinte et texte « éteinte » |
| Premier clic sur l’image | Image allumée et texte « allumée » |
| Deuxième clic sur l’image | Image éteinte et texte « éteinte » |
| Troisième clic sur l’image | Image allumée et texte « allumée » |
| Recharger après le troisième clic | Retour à l’état éteint |

Expliquez pourquoi le programme initial restait bloqué et comment votre correction permet de changer d’état à chaque clic. Appuyez votre explication sur les blocs exécutés et les valeurs modifiées.

## 4. Faire varier le fond avec une classe CSS

L’ampoule fonctionne. Faites maintenant correspondre le fond à son état : clair quand elle est allumée, noir quand elle est éteinte.

### Choisir la couleur de la pièce claire

Choisissez un triplet rouge, vert, bleu pour une couleur claire, puis une représentation : `rgb(r, g, b)` ou `#RRGGBB`.

Dans `dark-room.css`, remplacez la couleur du fond de `.light-room` par votre choix :

```css
.light-room {
  background-color: #f4f4f4;
  color: #222222;
}
```

Enregistrez et rechargez la page. Le fond reste noir : la règle existe, mais le `body` ne porte pas encore la classe `light-room`.

### Ajouter et retirer la classe

Ouvrez **F12 → Console** et saisissez :

```js
document.body.classList.add("light-room");
```

Le fond prend votre couleur et le texte devient sombre. Dans l’inspecteur, retrouvez `class="light-room"` sur le `body`. Puis retirez la classe :

```js
document.body.classList.remove("light-room");
```

Le fond redevient noir et le texte clair : les couleurs définies sur `body` s’appliquent à nouveau. `classList` donne accès aux classes de l’élément ; `add` ajoute une classe et `remove` la retire. Le nom s’écrit **sans point** dans ces instructions.

Ajoutez de nouveau la classe, puis rechargez : le fond redevient noir. La règle CSS est enregistrée ; l’ajout de la classe depuis la console ne modifie pas le fichier HTML.

### Relier le fond à l’état de l’ampoule

Dans `bulb-switch.js`, ajoutez la classe `light-room` au `body` dans le bloc qui allume l’ampoule ; retirez-la dans celui qui l’éteint.

Enregistrez, rechargez et reprenez les vérifications de l’étape 3. Vérifiez aussi que le fond devient clair quand l’ampoule s’allume et redevient noir quand elle s’éteint ou après un rechargement.

### Pourquoi séparer CSS et JavaScript ?

**CSS définit l’apparence ; JavaScript décide quand l’appliquer.** Cette séparation des responsabilités (*SoC*, pour *Separation of Concerns*) a des effets concrets ici :

- Pour changer la couleur de la pièce claire, vous modifiez uniquement le CSS.
- Une seule classe applique ensemble le fond clair et le texte sombre, pour garder le texte lisible.
- Pour revenir à la pièce sombre, JavaScript retire la classe : il n’a pas à recopier les couleurs initiales.

### Avant de passer à Pixelator

Montrez plusieurs clics successifs : l’image, le texte et le fond doivent toujours décrire le même état. Rechargez ensuite la page et montrez le retour à l’ampoule éteinte et au fond noir.

Expliquez ce que `classList.add("light-room")` et `classList.remove("light-room")` changent dans le HTML, puis comment le CSS détermine l’apparence obtenue. Ce fonctionnement vérifié et expliqué sera le point de départ de Pixelator.

[Exercice suivant — commencer Pixelator](./session_02-pixelator.md)
