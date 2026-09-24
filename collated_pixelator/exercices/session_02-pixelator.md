# Exercice 3 — Commencer Pixelator

[Support de la séance](../extract_session_02.md)

**Objectif :** peindre en violet les quatre pixels d’une grille HTML fixe, en utilisant des variables et une instruction qui ajoute une classe CSS. Le code qui déclenche la réaction au clic est fourni.

**Remise en fin de séance :** déposer votre projet sur GitHub depuis le navigateur, puis remettre le lien du dépôt sur la plateforme du cours. Réservez [20 minutes pour cette étape](#remise-github).

L’ampoule fonctionne : vous avez corrigé sa condition, puis ajouté et retiré une classe CSS pour faire varier le fond. Vous allez réutiliser ces manipulations du DOM pour peindre des pixels avec une seule couleur.

## Après l’ampoule : utiliser le code de clic fourni

Comme dans l’ampoule, la fonction et les écouteurs nécessaires aux clics sont fournis. Vous les copierez à l’étape 6, puis compléterez uniquement l’instruction de peinture à l’endroit indiqué. Leur écriture et leur explication seront abordées en séance 4.

Votre travail porte sur les variables qui désignent les pixels, l’ajout de la classe `painted` et le résultat observé :

```text
clic → classe ajoutée au pixel cliqué → règle CSS → couleur
```

## 1. Votre dossier `dev`

Tous vos projets de développement sont regroupés dans un dossier `dev`. Le sous-dossier `pwf` contient les travaux du module Programmation Web : Frontend.

```text
dev/
└── pwf/
    ├── session_01/
    └── session_02/
```

Créez `session_02`, ouvrez **ce dossier** dans votre éditeur, puis créez :

```text
session_02/
├── index.html
├── pixelator-layout.css
└── pixel-grid.js
```

Utilisez ces noms en minuscules et vérifiez les extensions. Chaque fichier porte une responsabilité :

| Fichier | Responsabilité |
|---|---|
| `index.html` | Structure et éléments |
| `pixelator-layout.css` | Apparence et disposition de la grille |
| `pixel-grid.js` | Sélection et peinture des pixels |

## 2. Déclarer quatre pixels en HTML

Placez ceci dans `index.html` :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pixelator — Quatre pixels</title>
  <link rel="stylesheet" href="pixelator-layout.css">
  <script src="pixel-grid.js" defer></script>
</head>
<body>
  <div id="pixel1"></div>
  <div id="pixel2"></div>
  <div id="pixel3"></div>
  <div id="pixel4"></div>
</body>
</html>
```

Enregistrez puis ouvrez `index.html` dans le navigateur. La page semble vide : les éléments existent, mais aucune règle ne leur donne encore une taille ou une couleur.

Vérifiez :

- Le `body` contient exactement quatre `div`.
- Chaque `id` est unique.
- Le CSS et le JavaScript sont chargés depuis le `head`.
- Le script utilise `defer` : il s’exécutera après la lecture du HTML, lorsque les quatre éléments seront accessibles.

## 3. Construire la grille avec CSS

Placez ceci dans `pixelator-layout.css` :

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

Enregistrez et rafraîchissez. Vérifiez que quatre carrés roses forment une grille de deux lignes et deux colonnes au centre de la page.

Comme `.light-room` dans l’ampoule, `.painted` décrit une apparence dans le CSS. JavaScript ajoutera cette classe au pixel à peindre.

## 4. Retrouver et peindre un pixel

Dans `pixel-grid.js`, écrivez :

```js
let pixel1 = document.querySelector("#pixel1");
```

`document` donne accès au DOM construit par le navigateur. Le sélecteur `#pixel1` recherche l’élément dont l’`id` est `pixel1`. La variable `pixel1` conserve une référence à cet élément : nous pouvons agir dessus par ce nom.

Ajoutez temporairement :

```js
pixel1.classList.add("painted");
```

Enregistrez et rafraîchissez. Le premier pixel devient violet dès le chargement.

Complétez :

```text
variable pixel1
    → élément HTML identifié par __________
    → classe ajoutée : __________
    → règle CSS appliquée : __________
```

Nous voulons maintenant que le pixel reste rose jusqu’au clic. Quelles instructions peuvent s’exécuter dès le chargement ? Quelle modification doit attendre l’action de l’utilisateur ?

Retirez l’instruction qui ajoute la classe avant de continuer ; conservez la sélection du pixel.

## 5. Retrouver les quatre pixels

Ajoutez les variables `pixel2`, `pixel3` et `pixel4` avec `querySelector`. Pour chacune, vérifiez que le sélecteur correspond à l’identifiant du bon pixel.

<details>
<summary>Comparer les sélections après votre essai</summary>

```js
let pixel1 = document.querySelector("#pixel1");
let pixel2 = document.querySelector("#pixel2");
let pixel3 = document.querySelector("#pixel3");
let pixel4 = document.querySelector("#pixel4");
```

</details>

À ce stade, les quatre variables désignent les quatre éléments HTML. Enregistrez et rafraîchissez : les pixels restent roses et les clics ne les peignent pas encore.

## 6. Compléter la peinture dans le code fourni

Copiez ce code **après les quatre déclarations de variables**. Conservez les lignes fournies et complétez uniquement la zone indiquée par le commentaire :

```js
function paintPixel(event) {
  let clickedPixel = event.target;
  // À compléter : ajouter la classe "painted" à clickedPixel.
}

pixel1.addEventListener("click", paintPixel);
pixel2.addEventListener("click", paintPixel);
pixel3.addEventListener("click", paintPixel);
pixel4.addEventListener("click", paintPixel);
```

Dans la zone à compléter, la variable `clickedPixel` désigne le pixel sur lequel vous venez de cliquer. Reprenez l’instruction de peinture essayée à l’étape 4 en remplaçant `pixel1` par `clickedPixel`.

L’instruction placée ici s’exécute au clic. Avant d’essayer, prédisez la couleur des pixels au chargement, puis celle du deuxième pixel après un clic. Enregistrez, rafraîchissez et comparez avec votre prédiction.

<details>
<summary>Comparer l’instruction après votre essai</summary>

```js
clickedPixel.classList.add("painted");
```

</details>

Complétez la chaîne :

```text
clic sur un pixel
→ variable qui désigne ce pixel : __________
→ classe ajoutée : __________
→ règle CSS appliquée : __________
→ couleur : __________
```

Cliquez une seconde fois sur le même pixel. Il reste violet : ajouter une classe déjà présente ne la retire pas.

## 7. Vérifier

1. Rafraîchissez : quatre pixels roses forment une grille 2×2 centrée.
2. Cliquez sur le deuxième pixel : lui seul devient violet.
3. Cliquez encore sur lui : il reste violet.
4. Cliquez sur chacun des autres pixels : ils changent indépendamment.
5. Cliquez dans l'espace entre les pixels : rien ne change.
6. Rafraîchissez : les quatre pixels redeviennent roses.

Expliquez sans lire le code :

```text
clic → classe ajoutée au pixel cliqué → règle CSS → couleur
```

Quel élément la variable `pixel2` désigne-t-elle ? Quelle classe votre instruction ajoute-t-elle au pixel cliqué ? Où la couleur violette est-elle définie ? Pourquoi un deuxième clic laisse-t-il le pixel violet ?

## 8. Si le résultat ne correspond pas

| Symptôme | À vérifier |
|---|---|
| La page reste vide | Les quatre `div`, le chemin du CSS et l'enregistrement des fichiers |
| Les pixels ne forment pas une grille | `display: grid`, les colonnes et les lignes |
| La grille n'est pas centrée | La hauteur du `body` et les deux propriétés de centrage |
| Un clic ne produit rien | Le chemin du script, `defer`, les identifiants, l’instruction à compléter à l’étape 6 et la console |
| Un clic modifie toujours le même pixel | L’utilisation de `clickedPixel` dans votre instruction de peinture |
| Un pixel est violet au chargement | Une classe HTML ou l’instruction temporaire de l’étape 4 restée dans le fichier |
| Une erreur apparaît dès le chargement | La console, les quatre déclarations placées avant le code fourni et la copie exacte de ce code |

Utilisez **F12 → Console** pour lire les erreurs. Après chaque correction, enregistrez puis rafraîchissez.

Le [résultat final](../legacy_solutions/pixelator/session_02/index.html) utilise les mêmes trois fichiers.

<a id="remise-github"></a>

## 9. Déposer et remettre Pixelator · 20 minutes

Vous remettez votre version de Pixelator : `index.html`, `pixelator-layout.css` et `pixel-grid.js`. Utilisez le compte GitHub préparé avant la séance.

### Préparer les fichiers

Enregistrez les trois fichiers dans votre éditeur, rechargez votre page locale et reprenez les vérifications de l’étape 7. Vérifiez aussi que la console ne signale aucune erreur.

### Créer votre dépôt personnel

Un **dépôt** rassemble les fichiers d’un projet et l’historique de leurs versions.

1. Connectez-vous à [GitHub](https://github.com/), puis choisissez **New repository** dans le menu **+**.
2. Choisissez votre compte personnel comme propriétaire et nommez le dépôt `pixelator-session-02`.
3. Choisissez la visibilité **Public**, pour que l’enseignant puisse consulter votre travail avec son lien.
4. Créez le dépôt vide, sans README, `.gitignore` ni licence, puis cliquez sur **Create repository**.

Si vous avez déjà créé ce dépôt pour cet exercice, ouvrez-le pour y déposer votre version à jour.

### Déposer les trois fichiers

1. Dans le dépôt vide, cliquez sur **uploading an existing file**. Si le dépôt contient déjà des fichiers, utilisez **Add file → Upload files** depuis sa page principale.
2. Sélectionnez ensemble `index.html`, `pixelator-layout.css` et `pixel-grid.js` dans votre dossier local `session_02`. Déposez les trois fichiers eux-mêmes, sans le dossier ni une archive ZIP : ils doivent se trouver côte à côte à la racine du dépôt.
3. Attendez la fin de l’envoi et vérifiez les trois noms affichés.
4. Saisissez un message, par exemple `Ajouter Pixelator à quatre pixels`. Un **commit** enregistre une version des fichiers avec un message qui décrit le changement.
5. Validez l’envoi avec **Commit changes**. Si un choix de branche apparaît, enregistrez directement sur la branche principale de votre dépôt personnel.

Revenez à la page principale du dépôt : les trois fichiers doivent apparaître. Ouvrez chacun d’eux pour vérifier que son contenu correspond à votre travail.

[Aide GitHub — créer un dépôt](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository) · [Aide GitHub — déposer des fichiers](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)

### Vérifier la version déposée

Depuis la page principale du dépôt, choisissez **Code → Download ZIP**. Extrayez l’archive dans un autre dossier, puis ouvrez le `index.html` extrait dans le navigateur. Vérifiez les quatre pixels roses, leurs changements indépendants au clic, le deuxième clic sans changement et le retour au rose après rechargement.

Sur GitHub, ouvrir `index.html` affiche son code. Pour exécuter le projet, ouvrez le fichier de la copie extraite dans votre navigateur.

**Une modification locale ne met pas GitHub à jour automatiquement.** Si vous corrigez votre projet, enregistrez vos fichiers, déposez de nouveau les fichiers modifiés au même endroit avec **Add file → Upload files**, puis validez un nouveau commit et vérifiez la version déposée.

### Remettre le lien

Copiez l’adresse de la page principale de votre dépôt, de la forme `https://github.com/votre-compte/pixelator-session-02`. **Remettez ce lien sur la plateforme du cours avant la fin de la séance.** Vérifiez que la plateforme a bien enregistré votre remise.

## Et avec beaucoup plus de pixels ?

Après la remise, reprenez ensemble cette question pour terminer la séance.

Le programme fonctionne avec quatre carrés. On imagine maintenant une grille de seize carrés, puis une surface assez grande pour dessiner.

- Combien de variables de sélection faudrait-il écrire pour seize carrés ?
- On observe les quatre lignes de clic fournies : combien en faudrait-il pour seize carrés ?
- Quelles instructions recopieriez-vous ? Qu’est-ce qui changerait à chaque copie ?
- À partir de combien de carrés ce travail devient-il fastidieux ? Quelles erreurs risquent de se glisser dans les copies ?

Chaque nouveau carré réclame encore des instructions supplémentaires. Il nous faut **un système dans le code** pour décrire ce travail répétitif et le confier à l’ordinateur. La prochaine leçon commencera par l’ajout d’un sélecteur de couleur, puis abordera les boucles pour répondre à ce besoin, avant les premiers essais du curseur de taille.
