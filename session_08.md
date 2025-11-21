# Session 8 : Micro Tracker DOM 

## Introduction

Lors de la session précédente, vous avez créé un micro-tracker avec :

* des variables,
* des événements simples,
* et du texte affiché directement dans le HTML.

Ce fonctionnement était volontairement **simplifié**, mais il avait plusieurs limites importantes.

### 1. Pas de structure flexible

Chaque compteur était défini “à la main” dans le JavaScript.
Si on voulait ajouter un 4ᵉ compteur, il fallait :

* ajouter du HTML,
* ajouter une nouvelle variable,
* ajouter du code supplémentaire.

**Le code n’était pas scalable** (pas adaptable à une interface plus grande).

---

### 2. Le HTML n’était pas relié directement à l’interface

La version précédente ne “lisait” pas réellement l’écran :
elle ne faisait que mettre à jour des variables JavaScript avant de modifier l'interface

Résultat :
Le JavaScript “connaissait” les valeurs, mais le navigateur ne les connaissait pas encore.

**L’interface et la logique vivaient séparément.**

---

## 3. Peu de réutilisation / beaucoup de répétition

Chaque action (+1, reset…) nécessitait du code dédié.
Impossible de programmer correctement, certainemant pas sans :

* `querySelector()` et `closest()`
* `querySelectorAll()` et `NodeList` (listes d’éléments HTML)

Le code était **long, répétitif, difficile à maintenir**.

---

# Pourquoi on change d’approche maintenant ?

Cela nous amène au principe fondamental du développement web :

# SoC — *Separation of Concerns*

**Séparer les rôles de chaque langage pour obtenir un code propre et adaptable.**

### 1. HTML → structure et sens

* Décrit les éléments : un article, un bouton, une valeur.
* Ne contient ni styles ni logique.

### 2. CSS → présentation

* Décide des couleurs, marges, tailles.
* Ne touche jamais aux données ou à la logique.

### 3. JavaScript → comportement

* Lit et modifie le DOM.
* Réagit aux interactions.
* Met à jour l’interface.

Dans l’exercice actuel :

* Le **HTML** déclare simplement les compteurs.
* Le **JS** découvre les compteurs via le DOM et met à jour les valeurs.
* Le **CSS** reste totalement indépendant.

**Chaque langage joue son rôle.**

---

# Pourquoi c’est important pour vous (UX/UI designers) ?

Parce qu’un designer moderne doit comprendre plus que l’apparence :
il doit comprendre **comment l’interface réagit**.

* savoir où mettre les classes,
* savoir comment structurer un composant,
* savoir comment le JavaScript va s’y connecter.

Ce n’est pas apprendre à “coder”, c’est apprendre à **penser en composants**, à **penser en interface interactive**.

---

# Demonstrations

## 1. HTML Sandbox — Pour jouer avec `querySelector()` et `closest()`

À coller dans un fichier `sandbox.html`.
Pas de fichier JS au début : on manipule **uniquement la console**.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Sandbox DOM</title>
  <style>
    body { font-family: sans-serif; padding: 1rem; }
    section, article, div { border: 1px solid #ccc; padding: .5rem; margin-bottom: .5rem; }
    .box { background: #f0f0f0; padding: .3rem; }
  </style>
</head>
<body>

<h1>Sandbox DOM</h1>

<section id="zone-1">
  <h2>Zone 1</h2>
  <article>
    <h3>Article A</h3>
    <div class="box">
      <button class="btn">Bouton A1</button>
    </div>
  </article>
</section>

<section id="zone-2">
  <h2>Zone 2</h2>
  <article>
    <h3>Article B</h3>
    <div class="box">
      <button class="btn">Bouton B1</button>
      <button class="btn special">Bouton B2</button>
    </div>
  </article>
</section>

</body>
</html>
```

---

# 2. Démonstration 1 — Explorer `querySelector()` (console uniquement)

**Objectif :** comprendre *“chercher 1 élément dans le DOM”*.

Dans la console :

### A. Chercher par balise

```js
document.querySelector('h2')
```

→ renvoie "Zone 1" (le premier `h2`)

```js
document.querySelector('h3')
```

→ renvoie "Article A"

---

### B. Chercher par classe

```js
document.querySelector('.btn')
```

→ renvoie le **premier bouton** trouvé (Bouton A1)

```js
document.querySelector('.special')
```

→ renvoie Bouton B2

---

### C. Chercher à l’intérieur d’un élément

```js
const zone2 = document.querySelector('#zone-2');
zone2.querySelector('.btn')
```

→ cherche seulement **dans Zone 2**

---

# 3. Démonstration 2 — Explorer `closest()`

But : revenir du bouton vers son parent logique.

Dans la console :

```js
const btnB2 = document.querySelector('.special');
btnB2.closest('section')
```

→ renvoie la section “Zone 2”

```js
btnB2.closest('article')
```

→ renvoie l’article B

```js
btnB2.closest('.box')
```

→ renvoie le div.box autour des boutons

**Point à démontrer :**
closest = remonter dans l’arbre **jusqu’au parent demandé**.

Faites cliquer les étudiants n’importe où et les laisser tester en live.

---

# 4. Démonstration 3 — `querySelectorAll()` et les tableaux (NodeList)

Là, on introduit **progressivement** les listes d’éléments comme un “tableau”.

---

## Étape A — Récupérer plusieurs éléments

```js
const allButtons = document.querySelectorAll('.btn');
allButtons
```

→ affiche une **NodeList** (ressemble à un array)

---

## Étape B — Lire length

```js
allButtons.length
```

→ nombre total de boutons

---

## Étape C — Accès par index

```js
allButtons[0]
```

→ Bouton A1

```js
allButtons[3]
```

→ Bouton B2 (selon l’ordre du DOM)

---

## Étape D — Parcourir avec une boucle while

**Créer un fichier `sandbox-dom.js`** et le relier.

```js
console.log("Script chargé");

// On récupère tous les boutons
const allButtons = document.querySelectorAll('.btn');

// Boucle simple d’affichage
let i = 0;
let currentButton;
while (i < allButtons.length) {
  currentButton = allButtons[i];
  console.log("Bouton trouvé :", currentButton.textContent);
  i = i + 1;
}

```

---

## Étape E — Modifier chaque bouton

Changer leur texte pour X/Y, ou X est l'index du bouton dans la liste et Y la quantite totale de boutons


---

# 5. Démonstration 4

```js
function colorAll() {
  const items = document.querySelectorAll('.btn');

  let i = 0;
  while (i < items.length) {
    items[i].classList.add('colorized');
    i = i + 1;
  }
}
```

Puis, appeler la fonction:

```js
colorAll();
```

---

# 6. Démonstration 5 — `closest()` + `querySelectorAll()` ensemble

```js
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('btn')) {
    const article = e.target.closest('article');
    console.log("Tu as cliqué sur le bouton dans l’article :", article.querySelector('h3').textContent);
  }
});
```

---

# Conclusion

Après ces démonstrations vous :

✓ savez chercher 1 élément
✓ savez chercher plusieurs éléments
✓ savez remonter dans le DOM avec closest
✓ comprenez ce qu’est une NodeList
✓ savez parcourir des éléments avec while
✓ avez manipulé le DOM
