# Session 10 - API

## Interroger une API et générer une galerie d’images avec le DOM

Ce cours présente les notions nécessaires pour comprendre et réaliser un mini-projet consistant à charger des images depuis une API publique et à les afficher dynamiquement dans une page web.
Il s’agit de la dernière séance avant l’examen : l’objectif est de consolider les notions essentielles sans introduire de complexité inutile.

---

# 1. Comprendre ce qu’est une API

Une API (Application Programming Interface) est une interface qui permet à une application d’en interroger une autre.
Dans le contexte du web, une API renvoie généralement des données au format JSON.

Exemple :
L’API suivante renvoie des images de chats au hasard :

```
https://api.thecatapi.com/v1/images/search?limit=10
```

Le paramètre `limit=5` signifie : renvoie 5 images.

Lorsque le navigateur interroge cette URL, le serveur renvoie un tableau JSON contenant 5 objets, chacun décrivant une image.

---

# 2. Le rôle de fetch()

`fetch()` est une fonction intégrée au navigateur.
Elle permet d’envoyer une requête HTTP (comme un appel à une URL) et de récupérer une réponse.

Caractéristiques fondamentales :

* `fetch()` renvoie une *promesse* (une valeur qui arrivera plus tard)
* la première promesse représente la réponse brute du serveur
* `.json()` renvoie une nouvelle promesse contenant les données JSON converties en JavaScript

Schéma du flux :

```
fetch(url)
  → réponse HTTP (promesse)
      → réponse JSON (promesse)
          → données utilisables
```

Ce modèle permet de travailler avec des données distantes sans bloquer la page.

---

# 3. La structure des données JSON renvoyées

La Cat API renvoie un tableau :

```json
[
  { "url": "https://..." },
  { "url": "https://..." },
  { "url": "https://..." }
]
```

C’est un tableau JavaScript :

* on peut donc accéder aux données via `data[0]`, `data[1]`, etc.
* on sait que `data.length` donne le nombre d’éléments

Le code de la séance utilise une boucle `while` pour parcourir ce tableau.

---

# 4. Boucle while : répétition contrôlée

La boucle `while` est l’une des structures de contrôle les plus simples : elle répète une série d’instructions tant qu’une condition est vraie.

Structure générale :

```js
let i = 0;
while (i < data.length) {
  // actions répétées
  i = i + 1;
}
```

C’est utile pour créer plusieurs éléments HTML à partir d’une liste de données.

---

# 5. Génération d’éléments dans le DOM

Pour créer du contenu dynamique, on utilise :

### 5.1 createElement()

Permet de fabriquer un élément HTML en mémoire :

```js
let img = document.createElement('img');
```

### 5.2 Modifier ses propriétés

Une fois créé, l’élément peut recevoir des attributs :

```js
img.src = url;
img.alt = "texte alternatif";
```

### 5.3 appendChild()

Permet d’insérer l’élément dans la page, en tant qu’enfant d’un autre élément existant :

```js
gallery.appendChild(img);
```

Cette étape rend l’image visible dans le navigateur.

---

# 6. Interaction : écouter un événement utilisateur

La génération de la galerie ne doit pas être automatique.
Elle doit se déclencher lorsque l’utilisateur clique sur un bouton.

On utilise pour cela :

```js
btn.addEventListener('click', () => {
  // code exécuté lors du clic
});
```

C’est la base d’une page interactive.
Le navigateur attend l’action, puis exécute le code.

---

# 7. Architecture minimale du script

Sans fonctions, le script est organisé de façon linéaire :

1. Sélectionner les éléments HTML (`querySelector`)
2. Écouter un événement (`addEventListener`)
3. Appeler l’API (`fetch`)
4. Lire les données (`.json()`)
5. Boucler sur les résultats (`while`)
6. Créer et insérer des images (`createElement`, `appendChild`)

---

# 8. Accessibilité minimale

Même si l’exercice concerne l’interactivité, certains points doivent être respectés dans un milieu professionel:

* chaque image doit avoir une valeur `alt` cohérente
* la galerie doit être dans un élément `<section>`
* un attribut `aria-live="polite"` peut informer les lecteurs d’écran que le contenu change

Cela garantit une utilisation plus inclusive.

---

# 9. Ce qu'il faut retenir

* Ce qu’est une API et pourquoi elle renvoie du JSON
* Comment interroger une API avec `fetch`
* Comment fonctionne une promesse et `.json()`
* Comment utiliser une boucle `while` pour parcourir un tableau
* Comment générer des éléments HTML dynamiquement
