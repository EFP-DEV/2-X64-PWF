# Session 2 — Pixelator : du document à l'interaction
>
> **Objectif :** construire une grille de quatre pixels et relier un clic à un changement visible en séparant HTML, CSS et JavaScript.

[Atelier Pixelator](./exercices/session_02.md) · [Programme du module](./index.md) · [Résultat final](./solutions/pixelator/session_02/index.html)

## Déroulement de la séance

| Temps écoulé | Durée | Activité | Point de contrôle |
|---|---:|---|---|
| 00:00–00:20 | 20 min | Dossier de développement et séparation des responsabilités | Identifier le rôle de chaque fichier |
| 00:20–00:45 | 25 min | Quatre éléments en HTML | Voir quatre éléments dans le DOM |
| 00:45–01:25 | 40 min | Construire une grille avec CSS Grid | Obtenir quatre carrés roses centrés |
| 01:25–01:45 | 20 min | Représenter un état avec une classe CSS | Peindre temporairement un pixel depuis le HTML |
| 01:45–02:00 | 15 min | Pause | |
| 02:00–02:30 | 30 min | Retrouver un élément dans le DOM | Modifier le premier pixel depuis JavaScript |
| 02:30–03:00 | 30 min | Écouter un événement | Peindre le premier pixel au clic |
| 03:00–03:20 | 20 min | Quatre pixels indépendants | Relier chaque clic au bon pixel |
| 03:20–03:30 | 10 min | Vérifier et expliquer | Raconter la chaîne complète de l'interaction |

## 1. Trois langages, trois responsabilités

La séance 1 a séparé la page HTML du programme JavaScript. Pixelator ajoute une feuille CSS et rend cette organisation complète.

| Langage | Responsabilité | Dans Pixelator |
|---|---|---|
| **HTML** | Décrire les éléments du document | Déclarer les quatre pixels |
| **CSS** | Définir leur présentation | Former la grille et représenter les couleurs |
| **JavaScript** | Réagir et modifier l'état | Peindre le pixel qui reçoit un clic |

Cette séparation des responsabilités, ou *Separation of Concerns*, permet de modifier la structure, l'apparence ou le comportement sans chercher les trois au même endroit.

Les étudiants créent :

```text
dev/
└── pwf/
    └── session_02/
        ├── index.html
        ├── style.css
        └── script.js
```

## 2. Le HTML décrit ce qui existe

Le `body` contient exactement quatre `div` :

```html
<body>
  <div id="pixel1"></div>
  <div id="pixel2"></div>
  <div id="pixel3"></div>
  <div id="pixel4"></div>
</body>
```

Chaque `id` identifie un élément de manière unique. Le HTML ne dit encore ni comment les pixels sont disposés, ni ce qui se passe au clic.

La page charge les deux autres responsabilités :

```html
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>
```

`defer` attend que le document HTML soit analysé avant d'exécuter le script. Les quatre pixels existent donc quand JavaScript les cherche.

## 3. CSS Grid organise la présentation

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

| Règle | Effet |
|---|---|
| `display: grid` | Active une grille pour les enfants du `body` |
| `grid-template-columns` | Définit deux colonnes de 120 pixels |
| `grid-template-rows` | Définit deux lignes de 120 pixels |
| `gap` | Sépare les pixels |
| `justify-content` | Centre la grille horizontalement |
| `align-content` | Centre la grille verticalement |

La règle `div` donne l'apparence initiale. La classe `.painted` représente l'état peint.

Ajouter temporairement `class="painted"` au premier pixel permet de vérifier cette représentation avant d'introduire JavaScript. Retirer ensuite la classe remet les quatre pixels dans leur état initial.

## 4. Le DOM représente le document en mémoire

Le navigateur analyse le HTML et construit le **Document Object Model**, ou DOM. Le DOM est une représentation manipulable du document : JavaScript peut y retrouver un élément et modifier ses propriétés.

```js
let pixel1 = document.getElementById("pixel1");
```

La variable `pixel1` ne contient pas la couleur du pixel. Elle donne accès à l'élément du DOM identifié par `pixel1`.

Pour vérifier la sélection :

```js
pixel1.className = "painted";
```

Au chargement, le premier pixel devient violet. L'affectation change la classe HTML ; la règle CSS associée change son apparence.

Retirer cette affectation avant de continuer.

## 5. Un événement relie une action au programme

Un **événement** est quelque chose qui se produit dans la page, par exemple un clic. Un **écouteur** associe des instructions à cet événement.

```js
let pixel1 = document.getElementById("pixel1");

pixel1.addEventListener("click", function () {
  pixel1.className = "painted";
});
```

La syntaxe de `function ()` est fournie comme un modèle. Les fonctions seront étudiées pour elles-mêmes plus tard.

Le déroulement est maintenant :

```text
clic → événement → exécution du bloc → nouvelle classe → règle CSS → nouvelle couleur
```

Un deuxième clic applique encore la même classe. Le pixel reste violet : la séance ne construit pas encore un interrupteur.

## 6. Quatre sélections et quatre écouteurs

Le code reste volontairement explicite :

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

Chaque bloc montre directement l'élément écouté et l'élément modifié. Cette répétition deviendra ensuite une raison concrète d'apprendre les boucles et les fonctions.

## 7. Résultat attendu

- Quatre carrés roses forment une grille 2×2 centrée.
- Cliquer sur un pixel rend uniquement ce pixel violet.
- Cliquer une seconde fois le laisse violet.
- Cliquer entre les pixels ne produit rien.
- Rafraîchir la page remet les quatre pixels dans leur état initial.

L'étudiant doit pouvoir expliquer :

1. pourquoi les trois fichiers ont des responsabilités distinctes ;
2. comment CSS Grid produit les deux lignes et deux colonnes ;
3. ce que représente le DOM ;
4. comment `getElementById` relie une variable à un élément ;
5. comment un événement déclenche une modification ;
6. pourquoi changer une classe finit par changer une couleur.

## 8. Suite

Pixelator ne sait pour l'instant qu'appliquer un état. La prochaine étape consistera à lire l'état actuel pour décider entre peindre et effacer, puis à remplacer les répétitions par des mécanismes réutilisables.

