# Séance 2 — Pixelator

## Rappel de la séance 1

L’horloge suit la chaîne **clic → appel d’une fonction → lecture du DOM → calcul → affichage**.

- `querySelector` retrouve un élément ; `textContent` permet de lire ou de modifier son texte.
- `let` nomme une valeur ; `=` affecte une valeur et `===` compare deux valeurs.
- `if` exécute un bloc lorsque sa condition est vraie.
- Définir une fonction ne l’exécute pas : `onclick` déclenche ici son appel.

## Exercice de redémarrage — L’ampoule · 15 minutes

Le HTML, le CSS, les images et le JavaScript à compléter sont fournis. Lisez le code pour retrouver l’état initial et le comportement déclenché par le bouton, puis complétez **la condition du `if`, le bloc du `if` et le bloc du `else`**. Le bloc `else` s’exécute lorsque la condition est fausse.

[Consignes et fichiers de l’exercice](./exercices/ampoule.md)

## Pixelator — TLDR

**Mini-projet :** rendre interactive une grille de quatre pixels. Le HTML et le CSS sont fournis ; le travail porte sur JavaScript et le DOM.

1. Retrouver un pixel dans le DOM et modifier sa classe pour le peindre.
2. Déclencher cette modification au clic avec `addEventListener`.
3. Rendre les quatre pixels indépendants.
4. Vérifier le résultat et expliquer la chaîne : **clic → JavaScript → classe → apparence**.

**Résultat attendu :** chaque pixel rose devient violet au clic. Un deuxième clic le laisse violet ; le rechargement rétablit les couleurs initiales.

**Seuils pour la suite :** comment effacer un pixel déjà peint ? Comment passer de quatre à soixante-quatre pixels sans recopier les mêmes instructions ?
