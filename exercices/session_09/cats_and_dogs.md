# Exercice — Galerie de chats avec une API

## Objectif

Vous devez créer une page web qui affiche une galerie d’images de chats.

Les images ne doivent pas être écrites directement dans le HTML.  
Elles doivent être récupérées depuis une API, puis ajoutées dans la page avec JavaScript.

Cet exercice sert à pratiquer :

- l’appel à une API avec `fetch()`;
- la lecture de données JSON ;
- l’utilisation d’une boucle `while`;
- la création d’éléments HTML avec le DOM ;
- l’ajout d’éléments dans une page avec JavaScript.

---

# Fichiers à créer

Vous devez créer deux fichiers :

```txt
index.html
catsanddogs.js
````

Le fichier HTML contient la structure de la page.
Le fichier JavaScript contient le code qui interroge l’API et crée les images.

---

# Consigne générale

Quand l’utilisateur ouvre la page, il doit voir :

* un titre ;
* un bouton ;
* une galerie vide.

Quand l’utilisateur clique sur le bouton, votre script doit :

1. interroger l’API des chats ;
2. récupérer les données JSON ;
3. parcourir le tableau reçu ;
4. créer une image pour chaque résultat ;
5. ajouter chaque image dans la galerie.

---

# 1. Structure HTML attendue

Votre page HTML doit contenir au minimum :

* une structure HTML complète ;
* un titre principal `<h1>` ;
* un bouton avec l’identifiant `load` ;
* une section vide avec l’identifiant `gallery` ;
* un lien vers le fichier JavaScript.

La galerie doit être placée dans une balise `<section>`.

Aide :

```html
<button id="load">Charger des chats</button>

<section id="gallery" aria-live="polite"></section>
```

N’oubliez pas de relier votre fichier JavaScript à la fin du `<body>`.

Aide :

```html
<script src="catsanddogs.js"></script>
```

---

# 2. Sélection des éléments HTML

Dans le fichier `catsanddogs.js`, vous devez commencer par sélectionner :

* le bouton ;
* la galerie.

Aide :

```js
let btn = document.querySelector(...);
let gallery = document.querySelector(...);
```

Vous devez utiliser les identifiants définis dans le HTML.

---

# 3. Réagir au clic sur le bouton

Le chargement des images ne doit pas se faire automatiquement.

Il doit se faire uniquement quand l’utilisateur clique sur le bouton.

Vous devez donc utiliser :

```js
addEventListener('click', ...)
```

Aide :

```js
btn.addEventListener('click', () => {
  // le code de chargement ira ici
});
```

---

# 4. Appeler l’API

À l’intérieur du clic, vous devez interroger cette API :

```txt
https://api.thecatapi.com/v1/images/search?limit=10
```

Cette URL demande 10 images de chats.

Vous devez utiliser `fetch()`.

Aide :

```js
fetch('https://api.thecatapi.com/v1/images/search?limit=10')
```

---

# 5. Transformer la réponse en JSON

La réponse de `fetch()` n’est pas encore directement utilisable.

Vous devez utiliser `.json()` pour transformer la réponse en données JavaScript.

Aide :

```js
.then(response => response.json())
```

---

# 6. Récupérer le tableau de chats

Après `.json()`, vous devez récupérer les données dans un deuxième `.then()`.

Vous pouvez appeler la variable `cats`.

Aide :

```js
.then(cats => {
  // ici, cats contient le tableau reçu depuis l’API
});
```

Pour vérifier vos données, vous pouvez afficher le tableau dans la console.

Aide :

```js
console.log(cats);
console.log(cats.length);
```

Attention : `cats` est un tableau.
Chaque élément du tableau contient une propriété `url`.

---

# 7. Vider la galerie avant de la remplir

Si l’utilisateur clique plusieurs fois sur le bouton, il ne faut pas accumuler toutes les anciennes images.

Avant de créer les nouvelles images, videz la galerie.

Aide :

```js
gallery.innerHTML = '';
```

---

# 8. Parcourir les résultats avec une boucle while

Vous devez parcourir le tableau reçu avec une boucle `while`.

Vous ne devez pas utiliser `forEach()` ou `map()`.

Aide :

```js
let i = 0;

while (i < cats.length) {
  // créer une image ici

  i = i + 1;
}
```

Attention : si vous oubliez `i = i + 1`, votre boucle ne s’arrêtera jamais.

---

# 9. Créer une image pour chaque chat

Dans la boucle, vous devez créer une balise `<img>` avec JavaScript.

Aide :

```js
let img = document.createElement('img');
```

Ensuite, vous devez remplir son attribut `src` avec l’URL de l’image.

Aide :

```js
img.src = cats[i].url;
```

Vous devez aussi ajouter un texte alternatif.

Aide :

```js
img.alt = 'Image de chat';
```

---

# 10. Ajouter l’image dans la galerie

Créer une image ne suffit pas.

Pour qu’elle apparaisse dans la page, vous devez l’ajouter dans la section `#gallery`.

Aide :

```js
gallery.appendChild(img);
```

---

# Contraintes obligatoires

Vous devez utiliser :

* `querySelector`
* `addEventListener`
* `fetch`
* `.then`
* `.json()`
* une boucle `while`
* `createElement`
* `appendChild`

Vous ne devez pas utiliser :

* `async / await`
* `forEach`
* `map`
* des fonctions séparées
* une bibliothèque externe
* du HTML écrit directement dans JavaScript avec une longue chaîne de caractères

---

# Résultat attendu

Au chargement de la page :

* le titre est visible ;
* le bouton est visible ;
* aucune image n’est encore affichée.

Après un clic sur le bouton :

* 10 images de chats apparaissent dans la galerie ;
* les images viennent de l’API ;
* chaque image a été créée avec JavaScript ;
* chaque image possède un attribut `src` et un attribut `alt`.

---

# Vérifications avant de rendre

Avant de rendre l’exercice, vérifiez que :

* le fichier JavaScript est bien relié au fichier HTML ;
* il n’y a pas d’erreur rouge dans la console ;
* le clic sur le bouton déclenche bien le chargement ;
* `cats.length` correspond au nombre d’images reçues ;
* la boucle `while` s’arrête correctement ;
* les images apparaissent dans la section `#gallery`.

---

# Bonus 

Si votre galerie fonctionne, vous pouvez ajouter un peu de CSS pour rendre les images plus lisibles.

Exemples possibles :

* mettre les images en grille ;
* limiter leur largeur ;
* ajouter un espace entre les images ;
* utiliser `object-fit: cover`.

Cette partie est optionnelle.
Le plus important est le fonctionnement JavaScript.

