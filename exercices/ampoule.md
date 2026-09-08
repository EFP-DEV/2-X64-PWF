# Atelier optionnel — L’ampoule interactive

Cet atelier conserve un autre exemple d’interaction : changer l’image et l’état d’une ampoule. Il peut être utilisé en complément de Pixelator. Réalisez-le dans le dossier `dev/pwf/ampoule/`.

[Retour à l’atelier Pixelator de la séance 2](./session_02.md)

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

Dans `dev`, on créera un dossier par cours puis par projet :

```
/dev/
    /pwf/                 ← Programmation Web : Frontend
        /session_01/      ← Horloge
        /ampoule/         ← Atelier optionnel
        /session_02/      ← Pixelator
        ...
        /session_11/      ← Dernier cour PWF

    /pwb/                 ← Programmation Web : Backend
        /session_1/       ← Premier cour PWB
        ..
        /session_3/       ← Dernier cour PWB

```
La structure est claire, consistente, previsible: faible charge mentale a la lecture

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

3. **Créer le dossier de l’atelier**

   * Dans `pwf/`, créez un dossier `ampoule/`.
   * Ce sera votre espace de travail pour cet atelier.

4. **Ouvrir le dossier dans VS Code**

   * Lancez **Visual Studio Code**.
   * Cliquez sur **Fichier → Ouvrir un dossier**.
   * Sélectionnez le dossier `ampoule/`.

5. **Créer un premier fichier**

   * Dans VS Code, créez un nouveau fichier nommé `index.html`.
   * Tapez simplement :

     ```html
     <!DOCTYPE html>
     <html>
       <head>
         <meta charset="UTF-8">
         <title>Atelier ampoule</title>
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
   * **Ne pas utiliser le live-server**



## 3. Projet intégré : l’ampoule interactive

Nous allons maintenant appliquer tout ce que nous avons vu à un **mini-projet complet**.

### Étape préparatoire

Les deux images sont fournies, de même taille (**100 × 180 pixels**) :

* [Télécharger `ampoule_off.gif` — ampoule éteinte](../solutions/session_1/ampoule_off.gif)
* [Télécharger `ampoule_on.gif` — ampoule allumée](../solutions/session_1/ampoule_on.gif)

1. Ouvrez chaque lien et utilisez **Enregistrer l’image sous…** pour sauvegarder les deux images dans votre dossier `dev/pwf/ampoule/`, à côté de `index.html`.
2. Conservez exactement les noms `ampoule_off.gif` et `ampoule_on.gif`, avec l’extension **`.gif`**.
3. Dans ce même dossier, créez les fichiers **`style.css`** et **`script.js`**.
4. Remplacez le contenu de `index.html` par le code ci-dessous, puis copiez le CSS et le JavaScript dans leurs fichiers respectifs. Enregistrez les trois fichiers.

---

### Code complet

#### `index.html`

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ampoule interactive</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main>
    <h1>Ampoule interactive</h1>

    <figure>
      <img id="ampoule" src="ampoule_off.gif" alt="Ampoule éteinte">
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
    ampoule.src = "ampoule_on.gif";
    ampoule.alt = "Ampoule allumée";
    bouton.setAttribute("aria-pressed", "true");
    ampoule.classList.add("on");
  } else {
    ampoule.src = "ampoule_off.gif";
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

  ```text
  dev/
  └── pwf/
      └── ampoule/
          ├── index.html
          ├── style.css
          ├── script.js
          ├── ampoule_off.gif
          └── ampoule_on.gif
  ```

### Vérifier le résultat

1. Ouvrez `index.html` dans le navigateur, ou rafraîchissez la page si elle est déjà ouverte : l’ampoule est éteinte.
2. Cliquez sur **Allumer / Éteindre** : l’ampoule s’allume et une lueur jaune apparaît.
3. Cliquez à nouveau : l’ampoule s’éteint et la lueur disparaît.
4. Utilisez **Tab** pour sélectionner le bouton, puis **Entrée** ou **Espace** pour le déclencher au clavier.

Si une image manque, vérifiez son nom, son extension et sa présence à côté de `index.html`. Si le bouton ne réagit pas, ouvrez la console (**F12 → Console**) et vérifiez le chargement de `script.js`.

Le [corrigé complet](../solutions/session_1/index.html) utilise les mêmes fichiers et le même code. Pour l’exécuter depuis une copie locale du dépôt, ouvrez `solutions/session_1/index.html` dans le navigateur.
