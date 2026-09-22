## Étape 3 : Ajouter une tâche

Dans le fichier `script.js`, suis les étapes ci-dessous.

### 1. Récupérer les éléments du DOM

Utilise la fonction native [`document.getElementById()`](https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById) pour récupérer :

- le champ de saisie
- le bouton
- la liste

```js
const input = document.getElementById("task-input");
const button = document.getElementById("add-task");
const list = document.getElementById("task-list");
```

---

### 2. Ajouter un écouteur d'événement

Utilise [`addEventListener()`](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener) pour écouter le clic sur le bouton :

```js
button.addEventListener("click", function () {
  // Code à exécuter quand on clique sur le bouton
});
```

---

### 3. Récupérer le texte dans l’input

Utilise la propriété `.value` de l'élément `<input>` :

```js
const taskText = input.value;
```

---

### 4. Vérifier que l’input n’est pas vide

Utilise une simple condition `if` pour éviter d’ajouter une tâche vide :

```js
if (taskText.trim() === "") {
  return; // ne fait rien si le champ est vide
}
```

---

### 5. Créer un élément `<li>`

Utilise [`document.createElement()`](https://developer.mozilla.org/fr/docs/Web/API/Document/createElement) pour créer un nouvel élément :

```js
const newTask = document.createElement("li");
```

---

### 6. Ajouter le texte dans le `<li>`

Utilise la propriété `.textContent` :

```js
newTask.textContent = taskText;
```

---

### 7. Ajouter le `<li>` dans la liste `<ul>`

Utilise [`appendChild()`](https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild) :

```js
list.appendChild(newTask);
```

---

### 8. Vider le champ de saisie

Après avoir ajouté la tâche, remets le champ vide :

```js
input.value = "";
```

