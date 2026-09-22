# Exercice 3 — Commencer Pixelator

[Support de la séance](../session_02.md)

**Objectif :** installer le HTML et le CSS fournis pour quatre pixels, puis utiliser le DOM et les événements pour peindre chaque pixel au clic.

Dans l’ampoule, vous avez complété une condition dans un programme dont le déclenchement au clic était déjà fourni. Vous allez maintenant retrouver vous-même un élément de la page, modifier son apparence, puis déclencher cette modification au clic.

## 1. Votre dossier `dev`

Tous vos projets de développement sont regroupés dans un dossier `dev`. Le sous-dossier `pwf` contient les travaux du module Programmation Web : Frontend.

```text
dev/
└── pwf/
    ├── session_01/
    └── session_02/
```

Créez `session_02`, ouvrez **ce dossier** dans votre éditeur, puis créez :

```text
session_02/
├── index.html
├── style.css
└── script.js
```

Utilisez ces noms en minuscules et vérifiez les extensions. Chaque fichier porte une responsabilité :

| Fichier | Responsabilité |
|---|---|
| `index.html` | Structure et éléments |
| `style.css` | Apparence et disposition |
| `script.js` | État et interactions |

## 2. Déclarer quatre pixels en HTML

Placez ceci dans `index.html` :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pixelator — Quatre pixels</title>
  <link rel="stylesheet" href="style.css">
  <script src="script.js" defer></script>
</head>
<body>
  <div id="pixel1"></div>
  <div id="pixel2"></div>
  <div id="pixel3"></div>
  <div id="pixel4"></div>
</body>
</html>
```

Enregistrez puis ouvrez `index.html` dans le navigateur. La page semble vide : les éléments existent, mais aucune règle ne leur donne encore une taille ou une couleur.

Vérifiez :

- Le `body` contient exactement quatre `div`.
- Chaque `id` est unique.
- Le CSS et le JavaScript sont chargés depuis le `head`.
- Le script utilise `defer`.

## 3. Construire la grille avec CSS

Placez ceci dans `style.css` :

```css
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 120px 120px;
  grid-template-rows: 120px 120px;
  gap: 8px;
  justify-content: center;
  align-content: center;
}

div {
  background-color: pink;
}

.painted {
  background-color: purple;
}
```

Enregistrez et rafraîchissez. Quatre carrés roses doivent apparaître au centre.

Associez chaque propriété à son effet :

| Propriété | Effet |
|---|---|
| `display: grid` | |
| `grid-template-columns` | |
| `grid-template-rows` | |
| `gap` | |
| `justify-content` | |
| `align-content` | |

### Expérimenter avec la classe

Ajoutez temporairement la classe au premier pixel :

```html
<div id="pixel1" class="painted"></div>
```

Rafraîchissez : le premier pixel devient violet parce que la règle `.painted` s'applique.

Retirez ensuite `class="painted"`. Les quatre pixels doivent redevenir roses.

## 4. Retrouver un pixel dans le DOM

Dans `script.js`, écrivez :

```js
let pixel1 = document.getElementById("pixel1");
```

`document` donne accès au DOM construit par le navigateur. `getElementById("pixel1")` y retrouve l'élément portant cet identifiant.

Ajoutez temporairement :

```js
pixel1.className = "painted";
```

Enregistrez et rafraîchissez. Le premier pixel devient violet dès le chargement.

Complétez :

```text
variable pixel1
    → élément HTML identifié par __________
    → propriété modifiée : __________
    → valeur affectée : __________
    → règle CSS appliquée : __________
```

Retirez l'affectation avant de continuer.

## 5. Attendre un clic

Remplacez le contenu de `script.js` par :

```js
let pixel1 = document.getElementById("pixel1");

pixel1.addEventListener("click", function () {
  pixel1.className = "painted";
});
```

Enregistrez et rafraîchissez.

Avant de cliquer, le pixel reste rose. Le bloc placé dans l'écouteur n'est exécuté qu'au moment où l'événement `click` arrive.

Complétez la chaîne :

```text
__________
→ événement "click"
→ exécution du __________
→ affectation de la classe __________
→ application de la règle CSS __________
→ couleur __________
```

Cliquez une seconde fois. Le pixel reste violet parce que le programme lui affecte de nouveau le même état.

## 6. Rendre les quatre pixels indépendants

Ajoutez les sélections de `pixel2`, `pixel3` et `pixel4`, puis un écouteur pour chacun.

Pour chaque bloc, vérifiez :

- l'identifiant recherché ;
- la variable qui reçoit l'élément ;
- la variable qui écoute le clic ;
- la variable dont la classe est modifiée.

### Code de référence

```js
let pixel1 = document.getElementById("pixel1");
let pixel2 = document.getElementById("pixel2");
let pixel3 = document.getElementById("pixel3");
let pixel4 = document.getElementById("pixel4");

pixel1.addEventListener("click", function () {
  pixel1.className = "painted";
});

pixel2.addEventListener("click", function () {
  pixel2.className = "painted";
});

pixel3.addEventListener("click", function () {
  pixel3.className = "painted";
});

pixel4.addEventListener("click", function () {
  pixel4.className = "painted";
});
```

## 7. Vérifier

1. Rafraîchissez : quatre pixels roses forment une grille 2×2 centrée.
2. Cliquez sur le deuxième pixel : lui seul devient violet.
3. Cliquez encore sur lui : il reste violet.
4. Cliquez sur chacun des autres pixels : ils changent indépendamment.
5. Cliquez dans l'espace entre les pixels : rien ne change.
6. Rafraîchissez : les quatre pixels redeviennent roses.

Expliquez sans lire le code :

```text
clic → événement → bloc JavaScript → classe HTML → règle CSS → couleur
```

## 8. Si le résultat ne correspond pas

| Symptôme | À vérifier |
|---|---|
| La page reste vide | Les quatre `div`, le chemin du CSS et l'enregistrement des fichiers |
| Les pixels ne forment pas une grille | `display: grid`, les colonnes et les lignes |
| La grille n'est pas centrée | La hauteur du `body` et les deux propriétés de centrage |
| Un clic ne produit rien | Le chemin du script, `defer`, les identifiants et la console |
| Un clic modifie un autre pixel | La variable utilisée dans l'écouteur |
| Un pixel est violet au chargement | Une classe HTML ou une affectation laissée hors de l'écouteur |

Utilisez **F12 → Console** pour lire les erreurs. Après chaque correction, enregistrez puis rafraîchissez.

Le [résultat final](../legacy_solutions/pixelator/session_02/index.html) utilise les mêmes trois fichiers.

## Pour la suite

Le programme applique toujours la classe `painted`. La prochaine décision sera : si le pixel est déjà peint, faut-il retirer cette classe ?
