# Exercice 2 — Résoudre l’ampoule

[Séance 2](../session_02.md)

**Durée : 15 minutes.** Après l’horloge, retrouver les conditions et les affectations connues dans un programme interactif fourni, puis compléter les deux emplacements en respectant l’ordre des instructions.

## Observer la démonstration

L’enseignant montre le programme terminé. Observez l’état initial de l’ampoule, puis les changements d’image et de texte au premier et au deuxième clic. Formulez la règle en français avant de lire le code à compléter.

## Fichiers fournis

Le dossier [ampoule](./ampoule/index.html) contient le HTML, le CSS, le JavaScript à compléter et les deux images. Ouvrez sa copie locale dans votre éditeur, puis `index.html` dans le navigateur.

- [index.html](./ampoule/index.html)
- [style.css](./ampoule/style.css)
- [script.js](./ampoule/script.js)
- [ampoule_off.gif](./ampoule/ampoule_off.gif) et [ampoule_on.gif](./ampoule/ampoule_on.gif)

## 1. Retrouver ce que vous connaissez

Ouvrez `script.js`. Le code qui relie le clic au programme est fourni et prêt à l’emploi. Laissez-le en place : vous pouvez résoudre cet exercice en vous concentrant sur les instructions déjà rencontrées dans l’horloge.

Repérez :

1. Le `if`, sa condition provisoire `false` et les accolades de son bloc vide.
2. Les affectations avec `=` dans le bloc `else` déjà écrit.
3. L’ordre de ces instructions et les blocs auxquels elles appartiennent.

`else` signifie « sinon » : son bloc s’exécute lorsque la condition du `if` est fausse. Avec la condition provisoire `false`, chaque clic exécute donc les instructions qui remettent l’ampoule à l’état éteint.

**Deux repères pour compléter le code :** `etat.textContent` contient le texte de l’état ; `ampoule.src` contient le chemin de l’image. Les affectations du `else` montrent comment les modifier.

## 2. Compléter les deux emplacements

Modifiez uniquement les deux emplacements signalés dans `script.js`, en gardant les instructions fournies dans leur ordre et dans leurs blocs :

1. Remplacez le `false` provisoire par une **condition** qui vérifie si le texte de l’état est `"éteinte"`.
2. Complétez le **bloc du `if`** pour afficher l’image allumée et écrire `"allumée"` dans l’état.

Utilisez les affectations du `else` comme modèle pour écrire celles qui allument l’ampoule. Le test doit lire l’état actuel avant que le bloc choisi le modifie.

Les deux fichiers d’image sont à côté de `index.html`. La dernière ligne de la fonction met déjà à jour le texte alternatif à partir de l’état affiché.

## 3. Prédire, vérifier, expliquer

Avant chaque action, annoncez l’état attendu, puis vérifiez :

| Action | Résultat attendu |
|---|---|
| Ouvrir ou recharger la page | Image éteinte et texte « éteinte » |
| Premier clic | Image allumée et texte « allumée » |
| Deuxième clic | Image éteinte et texte « éteinte » |
| Troisième clic | Image allumée et texte « allumée » |
| Recharger après le troisième clic | Retour à l’état éteint |

Expliquez quelle condition vous avez écrite, quelle branche s’exécute au premier clic, puis au deuxième, et comment les affectations changent le résultat du test au clic suivant.

[Exercice suivant — commencer Pixelator](./session_02.md)
