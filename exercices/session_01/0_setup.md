# Activité : Créer son dossier `dev/`

## Objectifs

- Mettre en place un dossier unique pour tous vos projets de développement web, et l’ouvrir dans VS Code.
- Creer les fichiers HTML, CSS et JS, et les charger dans le navigateur


---

## 1. Comprendre l'environnement de travail

### Pourquoi un dossier unique ?

* Tous vos projets sont au même endroit.
* Plus simple à sauvegarder.
* Reflète une pratique professionnelle.

```
/home/etudiant/dev/       ← Linux ou Mac
C:/Users/etudiant/dev/    ← Windows
```

Dans `dev/`, on créera un dossier par cours puis par projet :

```
/dev/
    /pwf/                 ← Programmation Web : Frontend
        /session_01/      ← Premier cour PWF
        /session_02/
        ...
        /session_10/      ← Dernier cour PWF

    /pwb/                 ← Programmation Web : Frontend
        /session_1/       ← Premier cour PWB
        ..
        /session_3/       ← Dernier cour PWB

```

---

### Bonnes pratiques de nommage

| Mauvais nom    | Pourquoi éviter ?                               | Bon nom          |
| ---------------| ----------------------------------------------- | ---------------- |
| `Mon site`     | Espaces posent problème sur certains serveurs.  | `mon_site`       |
| `Site-École`   | Accents non supportés partout.                  | `site_ecole`     |
| `TP#1`         | Caractères spéciaux risqués.                    | `tp1`            |
| `Session 01`   | Espaces gênants.                                | `session_1`      |
| `Index.HTML`   | Majuscules sensibles sur Linux.                 | `index.html`     |
| `Ma Page.html` | Espaces + majuscules = double risque.           | `ma_page.html`   |
| `essai`        | Trop vague, impossible de savoir ce que c’est.  | `portfolio_site` |

---

## 2. Créer un dossier `dev/`

1. **Créer un dossier global `dev/`**

   * Dans votre dossier personnel (`Documents` ou `Home`), créez un dossier nommé **`dev/`**.
   * C’est ici que vous stockerez **tous vos projets** de développement.

2. **Créer un sous-dossier pour ce cours**

   * À l’intérieur de `dev/`, créez un dossier nommé `pwf/` (Programmation Web : Frontend).
   * Ce dossier contiendra toutes les séances et projets du module.

3. **Créer le premier dossier de séance**

   * Dans `pwf/`, créez un dossier `session_01/`.
   * Ce sera votre espace de travail pour cette première séance.

4. **Ouvrir le dossier dans VS Code**

   * Lancez **Visual Studio Code**.
   * Cliquez sur **Fichier → Ouvrir un dossier**.
   * Sélectionnez le dossier `session_01/`.

5. **Créer un premier fichier**

   * Dans VS Code, créez un nouveau fichier nommé `index.html`.
   * Tapez simplement :

     ```html
     <!DOCTYPE html>
     <html>
       <head>
         <meta charset="UTF-8">
         <title>Session 1</title>
       </head>
       <body>
         Bonjour, ceci est mon premier fichier HTML !
       </body>
     </html>
     ```
   * Enregistrez avec `Ctrl + S`.

6. **Afficher dans le navigateur**

   * Faites un double-clic sur `index.html` dans votre explorateur de fichiers.
   * La page doit s’ouvrir dans votre navigateur.
   * Ne pas utiliser le live-server



## 3. Projet intégré : l’ampoule interactive

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

Pour l’instant, recopiez simplement `addEventListener`. Nous expliquerons plus tard ce que signifie “écouter un événement”.


---

### Résultat attendu

* Vous avez maintenant un dossier organisé comme ceci :

  ```
  /dev/
      /pwf/
          /session_01/
              index.html
  ```
* Vous êtes prêt à travailler dans un environnement clair et structuré.
