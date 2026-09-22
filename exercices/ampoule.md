# Redémarrage — L’ampoule interactive

[Séance 2](../session_02.md)

**Durée : 15 minutes.** Réutiliser la lecture du DOM, les conditions, les affectations et l’appel d’une fonction vus en séance 1.

## Fichiers fournis

Le dossier [ampoule](./ampoule/index.html) contient le HTML, le CSS, le JavaScript à compléter et les deux images. Ouvrez sa copie locale dans votre éditeur, puis `index.html` dans le navigateur.

- [index.html](./ampoule/index.html)
- [style.css](./ampoule/style.css)
- [script.js](./ampoule/script.js)
- [ampoule_off.gif](./ampoule/ampoule_off.gif) et [ampoule_on.gif](./ampoule/ampoule_on.gif)

## 1. Lire le code avant de le modifier

Dans le HTML et le JavaScript, retrouvez :

1. L’image et le texte qui indiquent l’état initial de l’ampoule.
2. Le bouton, la fonction qu’il appelle et le fichier qui la définit.
3. Les deux éléments retrouvés avec `querySelector` et les propriétés utilisées.

Au départ, le bouton ne change rien : la condition provisoire vaut `false` et les deux blocs sont vides.

## 2. Compléter les trois emplacements

Modifiez uniquement `script.js` :

1. Remplacez le `false` provisoire par une **condition** qui vérifie si le texte de l’état est `"éteinte"`.
2. Complétez le **bloc du `if`** pour afficher l’image allumée et écrire `"allumée"` dans l’état.
3. Complétez le **bloc du `else`** pour afficher l’image éteinte et écrire `"éteinte"` dans l’état.

`else` signifie « sinon » : son bloc s’exécute lorsque la condition du `if` est fausse.

**Repères :** `textContent` lit ou remplace le texte d’un élément ; `src` indique le chemin de l’image à afficher. Les deux fichiers d’image sont à côté de `index.html`. La dernière ligne de la fonction met déjà à jour le texte alternatif à partir de l’état affiché.

## 3. Prédire, vérifier, expliquer

Avant chaque action, annoncez l’état attendu, puis vérifiez :

| Action | Résultat attendu |
|---|---|
| Ouvrir ou recharger la page | Image éteinte et texte « éteinte » |
| Premier clic | Image allumée et texte « allumée » |
| Deuxième clic | Image éteinte et texte « éteinte » |
| Troisième clic | Image allumée et texte « allumée » |
| Recharger après le troisième clic | Retour à l’état éteint |

Expliquez quelle branche s’exécute au premier clic, puis au deuxième, et pourquoi la fonction tient compte du résultat du clic précédent.
