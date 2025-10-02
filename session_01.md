# Session 1 : Introduction et fondement algorithmique

>**Durée** : 3h30 (avec pause)
>
>**Objectif** : découvrir HTML, CSS et JavaScript à travers un mini-projet : allumer et éteindre une ampoule.

## 1. Qu'est-ce que le développement frontend ?

Le **frontend** est la partie d'un site web que l'on voit et que l'on utilise.
C'est :

* l'**interface visuelle** (textes, images, boutons, formulaires),
* l'**ergonomie** (organisation, facilité d'utilisation),
* l'**interactivité** (réactions aux actions de l'utilisateur).

À l'inverse, le **backend** gère ce que l'on ne voit pas : la logique métier, les bases de données, l'authentification, etc.

**Exemple concret** :

* Sur un site de commerce, le frontend affiche les produits et permet d'ajouter au panier.
* Le backend enregistre les commandes et gère les paiements.

Très bonne idée : on peut présenter chaque langage sous deux angles — celui du développeur (fonction technique) et celui du linguiste (ce que dit la « langue » elle-même). Voici une version étoffée en ce sens :

--- 
## 2. Les trois langages du web

Un site web repose toujours sur trois technologies principales : **HTML**, **CSS** et **JavaScript**. Elles ne sont pas interchangeables, chacune a son rôle propre.

### **HTML** 
>*HyperText Markup Language*

**Point de vue développeur** : le HTML sert à construire la structure et le contenu de la page. Il permet de placer un titre, un paragraphe, une image, un tableau ou un formulaire. C'est la base sur laquelle tout le reste s'appuie.

**Point de vue linguistique** : HTML est un langage déclaratif. On ne donne pas d'ordres, on déclare. Ecrire `<h1>Bienvenue</h1>` revient à affirmer « ceci est un titre principal » plutôt qu'à demander « affiche ceci en grand ». 

**HTML fonctionne donc comme une grammaire qui définit la place et la fonction de chaque élément dans le document**

### **CSS** 
>*Cascading Style Sheets*

**Point de vue développeur** : le CSS contrôle l'apparence et la mise en forme. Couleurs, polices, tailles, marges, alignements, tout ce qui touche à l'esthétique et à l'ergonomie passe par lui. Sans CSS, une page reste brute et difficile à parcourir.

**Point de vue linguistique** : CSS est un langage descriptif qui fonctionne par règles et sélecteurs. Chaque règle s'applique comme un accord de style : on dit « tous les titres de niveau 1 seront rouges » (`h1 { color: red; }`). 

**C'est une langue de conventions, qui hiérarchise les priorités (la cascade)**

### **JavaScript** 
>*ECMAScript*

**Point de vue développeur** : JavaScript apporte la logique et l'interactivité. Il permet de réagir aux actions de l'utilisateur, de modifier le contenu à la volée, de communiquer avec un serveur, bref de transformer une page statique en application dynamique.

**Point de vue linguistique** : JavaScript est un langage impératif. Contrairement au HTML qui déclare, et au CSS qui décrit, JavaScript commande. Quand on écrit `alert("Bonjour");`, on donne un ordre précis : « affiche une alerte ». 

**C'est une langue d'actions, avec une grammaire proche des langages humains qui utilisent les verbes pour exprimer des comportements**

![HTML = le corps, CSS = les vêtements, JS = les mouvements](asset/img/html-css-js.jpg)


### À retenir

* Sans **HTML**, il n'y a rien à afficher.
* Sans **CSS**, la page existe mais elle est brute, sans esthétique ni hiérarchie visuelle claire.
* Sans **JavaScript**, la page est statique, elle ne répond pas activement aux actions de l'utilisateur.

C'est la combinaison de ces trois langages qui permet de créer des sites modernes, accessibles et interactifs.

### [codepen.io](https://codepen.io/pen/), un outil en ligne pour expérimenter
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Triad Example</title>
  <style>
    /* CSS = style */
    h1 {
      color: darkblue;
      font-family: sans-serif;
    }
  </style>
</head>
<body>
  <!-- HTML = structure -->
  <h1>Hello, World!</h1>
  <button id="btn">Click me</button>

  <script>
    // JavaScript = logic/dynamism
    document.getElementById("btn").onclick = function() {
      alert("Button clicked!");
    };
  </script>
</body>
</html>
```

---
---

## 3. Préparer son environnement de travail

### Créer un dossier `dev/`
[Creer son dossier de dev](./session_01/activite/0_setup.md)
Pourquoi un dossier unique ?

* Tous vos projets sont au même endroit.
* Plus simple à sauvegarder.
* Reflète une pratique professionnelle.

```
/home/etudiant/dev/       ← Linux ou Mac
C:/Users/etudiant/dev/    ← Windows
```

Dans `dev/`, créez un dossier par cours ou par projet :

```
/dev/
    /pwf/                 ← Programmation Web : Frontend
        /session_1/
        /session_2/
        /projet_final/
```

---

### Bonnes pratiques de nommage

| ❌ Mauvais nom  | ✅ Bon nom        | Pourquoi éviter ?                              |
| -------------- | ---------------- | ---------------------------------------------- |
| `Mon site`     | `mon_site`       | Espaces posent problème sur certains serveurs. |
| `Site-École`   | `site_ecole`     | Accents non supportés partout.                 |
| `TP#1`         | `tp1`            | Caractères spéciaux risqués.                   |
| `Session 01`   | `session_01`     | Espaces gênants.                               |
| `Index.HTML`   | `index.html`     | Majuscules sensibles sur Linux.                |
| `Ma Page.html` | `ma_page.html`   | Espaces + majuscules = double risque.          |
| `essai`        | `portfolio_site` | Trop vague, impossible de savoir ce que c’est. |

---

## 4. Premier fichier HTML

Structure minimale :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Ma première page</title>
</head>
<body>

</body>
</html>
```

Exercice : ajoutez un **header** (titre), un **main** (texte + image) et un **footer** (copyright).

---

## 5. Ajouter du style avec CSS

Exemple simple :

```css
body {
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;
  color: #333;
}
img {
  border: 2px solid black;
}
```

Exercice :  Ajoutez une couleur de fond, changez la police du texte, ajoutez une bordure à l’image.

---

## 6. Première interaction avec JavaScript

Exemple simple :

```html
<button onclick="alert('Bienvenue dans le module PWF !')">
  Cliquer ici
</button>
```

Ici, le bouton déclenche une **alerte**.
Dans la suite, nous utiliserons une méthode plus moderne : **`addEventListener`**.

---

## 7. Projet intégré : l’ampoule interactive

Nous allons maintenant appliquer tout ce que nous avons vu à un **mini-projet complet**.

### Étape préparatoire

Vous avez 15 minutes pour préparer deux images :

* `ampoule_off.png`
* `ampoule_on.png`
  Elles doivent être de même taille et superposables.

---

### Code complet

#### `index.html`

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Ampoule interactive</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main>
    <h1>Ampoule interactive</h1>

    <figure>
      <img id="ampoule" src="ampoule_off.png" alt="Ampoule éteinte">
      <figcaption>Cliquez sur le bouton pour allumer ou éteindre la lumière.</figcaption>
    </figure>

    <button id="toggle" aria-pressed="false">
      Allumer / Éteindre
    </button>
  </main>
  <script src="script.js"></script>
</body>
</html>
```

---

#### `style.css`

```css
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f4f4f4;
  color: #333;
}
main {
  text-align: center;
}
img {
  max-width: 200px;
  margin-bottom: 1rem;
}
button {
  padding: 10px 20px;
  font-size: 1.2em;
  background: #f0c420;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}
button:hover {
  background: #e0b010;
}
.on {
  filter: drop-shadow(0 0 30px yellow);
  transition: filter 0.3s;
}
```

---

#### `script.js`

```js
const ampoule = document.getElementById("ampoule");
const bouton = document.getElementById("toggle");

bouton.addEventListener("click", function() {
  const eteinte = ampoule.src.includes("off");

  if (eteinte) {
    ampoule.src = "ampoule_on.png";
    ampoule.alt = "Ampoule allumée";
    bouton.setAttribute("aria-pressed", "true");
    ampoule.classList.add("on");
  } else {
    ampoule.src = "ampoule_off.png";
    ampoule.alt = "Ampoule éteinte";
    bouton.setAttribute("aria-pressed", "false");
    ampoule.classList.remove("on");
  }
});
```

👉 Pour l’instant, recopiez simplement `addEventListener`. Nous expliquerons plus tard ce que signifie “écouter un événement”.

---

## 8. Bilan de la séance

Vous avez appris à :

* Comprendre le rôle du frontend.
* Différencier HTML, CSS et JavaScript.
* Organiser vos fichiers dans un dossier `dev/`.
* Créer une page web complète avec titre, texte, image et bouton.
* Donner du style et centrer du contenu avec **CSS Flexbox**.
* Ajouter une interaction avec **JavaScript moderne**.
* Réaliser un premier projet concret et accessible : **l’ampoule interactive**.
