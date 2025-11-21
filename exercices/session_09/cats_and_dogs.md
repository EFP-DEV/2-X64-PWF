# Session 9 : Mini-Galerie avec Cat/Dog API

## Objectifs pédagogiques

* Découvrir `fetch()`
* Comprendre la promesse `.json()`
* Utiliser une boucle `while` pour générer plusieurs images
* Utiliser `createElement()` et `appendChild()`
* Renforcer la compréhension du DOM dynamique

---

## Objectif

Créer une petite galerie d’images en interrogeant une API publique qui renvoie aléatoirement des photos de chats.

## Connaissances requises

HTML sémantique, DOM (`querySelector`, `createElement`), boucles `while`, `fetch`.

## Étape 1 — Structure HTML

Créez une page contenant :

* Un titre
* Un bouton « Charger des chats »
* Une section vide qui recevra les images

### Étape 2 — Interroger l’API

Après un clic sur le bouton, envoyez une requête vers :

```
https://api.thecatapi.com/v1/images/search?limit=5
```

Cette URL renvoie **5 images aléatoires**.

## Étape 3 — Afficher les images

Pour chaque résultat :

* créer une balise `<img>`
* définir `src` avec l’URL renvoyée par l’API
* ajouter l’image dans la section

Utilisez une boucle `while` pour parcourir les résultats.

## Résultat attendu

Chaque clic sur le bouton ajoute **5 nouvelles images** à la galerie.


# 2. HTML fourni

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Galerie de Chats</title>
</head>
<body>
  <h1>Galerie de Chats</h1>
  <button id="load">Charger des chats</button>
  <section id="gallery" aria-live="polite"></section>
</body>
</html>
```



# 3. Code JavaScript à intégrer (version simple, lisible, sans fonctions)

```js
const btn = document.querySelector('#load');
const gallery = document.querySelector('#gallery');

btn.addEventListener('click', () => {

  fetch('https://api.thecatapi.com/v1/images/search?limit=5')
    .then(response => response.json())
    .then(cats => {
      console.log('nombre de chats, cats.length, 'chats', cats)

      // loop away
    });

});
```


# 4. Variante bonus 

Ajouter un bouton **“Vider la galerie”** avec :

```js
gallery.innerHTML = "";
```
