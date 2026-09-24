# Exercice 2 — Résoudre l’ampoule

[Séance 2](../session_02.md)

Une fois l’ampoule terminée, on dépose le travail dans un dépôt public sur GitHub, on vérifie la copie téléchargée et on remet l’adresse du dépôt sur Moodle en suivant la [fiche dédiée](./session_02-ampoule-github.md). La remise se termine avant la pause.

<a id="votre-mission"></a>
<a id="notre-mission"></a>

## Objectif

Le programme fourni est inachevé : **un clic sur l’image allume l’ampoule, mais elle reste ensuite bloquée dans cet état**. On le corrige pour pouvoir allumer et éteindre l’ampoule à chaque clic. Une fois ce fonctionnement vérifié, on fait aussi changer le fond.

## Fichiers fournis

Le dossier [ampoule](./ampoule/index.html) contient le HTML, le CSS, le JavaScript à compléter et les deux images. On ouvre sa copie locale dans l’éditeur, puis `index.html` dans le navigateur.

- [index.html](./ampoule/index.html)
- [dark-room.css](./ampoule/dark-room.css)
- [bulb-switch.js](./ampoule/bulb-switch.js)
- [ampoule_off.png](./ampoule/ampoule_off.png) et [ampoule_on.png](./ampoule/ampoule_on.png)

## 1. Reproduire le problème

Avant de modifier le programme :

1. On recharge la page : l’image et le texte indiquent une ampoule éteinte.
2. On clique directement sur l’image : l’ampoule s’allume et le texte devient « allumée ».
3. On clique une deuxième fois, puis une troisième : l’ampoule reste allumée.

Le blocage est reproduit. L’objectif est d’obtenir une alternance : allumée au premier clic, éteinte au deuxième, puis allumée au troisième.

## 2. Diagnostiquer et terminer le code

On ouvre `bulb-switch.js`. Le code qui déclenche la fonction au clic est déjà fourni ; on l’utilise pour essayer les modifications. Le programme contient des éléments déjà rencontrés : une condition, des blocs et des affectations.

On suit les instructions au premier clic, puis au deuxième, en repérant la condition et les affectations exécutées. On compare le contenu des deux blocs avec les deux états à obtenir.

**Repères de lecture :** `etat.textContent` contient le texte de l’état. `event.target` désigne ici l’image cliquée ; `setAttribute("src", ...)` change son fichier image. `else` signifie « sinon » : son bloc s’exécute lorsque la condition du `if` est fausse.

On **corrige et complète le programme** en s’appuyant sur les instructions déjà présentes. À chaque clic, l’image et le texte doivent changer ensemble pour décrire le nouvel état.

Les deux fichiers d’image sont à côté de `index.html`. On suit aussi la dernière ligne de la fonction : elle construit le texte alternatif à partir de `etat.textContent`. Placée avant le `if`, elle utiliserait l’état précédant le clic et décrirait ensuite l’ancienne image.

**Le nouvel état doit exister avant de construire le texte qui le décrit.** Une modification ultérieure de l’état ne change pas le texte déjà construit. La ligne placée après le `if` / `else` utilise l’état obtenu, quel que soit le bloc exécuté.

On enregistre les modifications, puis on recharge la page pour essayer la correction.

<a id="3-prédire-vérifier-expliquer"></a>

## 3. Vérifier l’alternance des états

On effectue les actions dans l’ordre du tableau, en comparant l’image et le texte aux résultats attendus :

| Action | Résultat attendu |
|---|---|
| Ouvrir ou recharger la page | Image éteinte et texte « éteinte » |
| Premier clic sur l’image | Image allumée et texte « allumée » |
| Deuxième clic sur l’image | Image éteinte et texte « éteinte » |
| Troisième clic sur l’image | Image allumée et texte « allumée » |
| Recharger après le troisième clic | Retour à l’état éteint |

Si l’alternance échoue, on suit à nouveau la condition et les affectations pour le clic concerné. On corrige le programme, puis on reprend les essais depuis le rechargement.

## 4. Faire varier le fond avec une classe CSS

L’ampoule fonctionne. On fait maintenant correspondre le fond à son état : clair quand elle est allumée, noir quand elle est éteinte.

### Choisir la couleur de la pièce claire

On choisit un triplet rouge, vert, bleu pour une couleur claire, puis une représentation : `rgb(r, g, b)` ou `#RRGGBB`.

Dans `dark-room.css`, on remplace la couleur du fond de `.light-room` par la couleur choisie :

```css
.light-room {
  background-color: #f4f4f4;
  color: #222222;
}
```

On enregistre le fichier, puis on recharge la page. Le fond reste noir : la règle existe, mais le `body` ne porte pas encore la classe `light-room`.

### Ajouter et retirer la classe

On ouvre **F12 → Console** pour y saisir :

```js
document.body.classList.add("light-room");
```

Le fond prend la couleur choisie et le texte devient sombre. Dans l’inspecteur, `class="light-room"` apparaît sur le `body`. Puis on retire la classe :

```js
document.body.classList.remove("light-room");
```

Le fond redevient noir et le texte clair : les couleurs définies sur `body` s’appliquent à nouveau. `classList` donne accès aux classes de l’élément ; `add` ajoute une classe et `remove` la retire. Le nom s’écrit **sans point** dans ces instructions.

On ajoute de nouveau la classe, puis on recharge la page : le fond redevient noir. La règle CSS est enregistrée ; l’ajout de la classe depuis la console ne modifie pas le fichier HTML.

### Relier le fond à l’état de l’ampoule

Dans `bulb-switch.js`, on ajoute la classe `light-room` au `body` dans le bloc qui allume l’ampoule ; on la retire dans celui qui l’éteint.

On enregistre le fichier, on recharge la page, puis on reprend les vérifications de l’étape 3. La vérification porte aussi sur le fond : il doit devenir clair quand l’ampoule s’allume et redevenir noir quand elle s’éteint ou après un rechargement.

<a id="pourquoi-séparer-css-et-javascript-"></a>

### CSS définit l’apparence, JavaScript applique la classe

**CSS définit l’apparence ; JavaScript décide quand l’appliquer.** Cette séparation des responsabilités (*SoC*, pour *Separation of Concerns*) a des effets concrets ici :

- Pour changer la couleur de la pièce claire, on modifie uniquement le CSS.
- Une seule classe applique ensemble le fond clair et le texte sombre, pour garder le texte lisible.
- Pour revenir à la pièce sombre, JavaScript retire la classe : il n’a pas à recopier les couleurs initiales.

### Vérification finale

On effectue plusieurs clics successifs : l’image, le texte et le fond doivent toujours décrire le même état. On recharge ensuite la page pour vérifier le retour à l’ampoule éteinte et au fond noir.

Dans l’inspecteur, la classe `light-room` apparaît sur `body` quand l’ampoule est allumée. Au clic suivant, la classe est retirée et les couleurs initiales s’appliquent à nouveau.

[Consignes — GitHub et remise sur Moodle](./session_02-ampoule-github.md)
