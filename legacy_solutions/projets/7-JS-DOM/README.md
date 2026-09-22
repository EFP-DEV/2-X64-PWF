# JS-DOM : Créer une To-Do List simple en JavaScript

## Objectif

L'objectif est de créer une application web simple qui permet d'ajouter, d'afficher et de supprimer des tâches (to-do list) en manipulant le DOM avec JavaScript.

Aucune bibliothèque ni framework n'est autorisé. Pas de programmation orientée objet, pas de structure MVC.

---

## Étapes à suivre

### Étape 1 : Préparer le HTML

Crée un fichier `index.html` contenant la structure de base :

- Un titre
- Un champ de saisie (input)
- Un bouton pour ajouter une tâche
- Une liste non ordonnée (`<ul>`) vide pour afficher les tâches

**Exemple attendu :**
```html
<h1>Ma To-Do List</h1>
<input type="text" id="task-input" placeholder="Ajouter une tâche">
<button id="add-task">Ajouter</button>
<ul id="task-list"></ul>
```

---

### Étape 2 : Ajouter le fichier JavaScript

Crée un fichier `script.js` et relie-le dans le fichier HTML à l’aide d’une balise `<script>` à la fin du `<body>`.

```html
<script src="script.js"></script>
```

---

### Étape 3 : Ajouter une tâche

Dans le fichier `script.js`, écris du code qui :

1. Récupère les éléments nécessaires avec `document.getElementById`
2. Ajoute un écouteur d’événement (`addEventListener`) sur le bouton "Ajouter"
3. Quand l’utilisateur clique :
   - Récupère le texte dans l’input
   - Crée un élément `<li>`
   - Ajoute le texte comme contenu de l’élément `<li>`
   - Ajoute l’élément `<li>` dans la liste `<ul>`
   - Vide le champ de saisie

[Instructions supplémentaires](step3.md)

---

### Étape 4 : Empêcher les tâches vides

Avant d’ajouter une tâche, vérifie que le champ n’est **pas vide**.
Si l’input est vide, **ne fais rien**.

---

### Étape 5 : Supprimer une tâche au clic

Ajoute un écouteur d’événement sur chaque élément `<li>` nouvellement créé.

Quand on clique sur une tâche, elle est supprimée de la liste.

---

### Étape 6 : Bonus facultatif

- Ajouter une classe CSS pour afficher les tâches avec un style personnalisé
- Ajouter un bouton "Tout effacer" pour vider la liste complète

---

## Résultat attendu

Un utilisateur peut :

- Ajouter des tâches
- Voir la liste s’afficher dynamiquement
- Supprimer une tâche en cliquant dessus

---
