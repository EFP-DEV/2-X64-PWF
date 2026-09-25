# Pixelator — Laboratoire de peinture au clic

## 1. Choisir une expérience

On reprend les quatre cases qui se peignent et s’effacent au clic. On choisit une expérience sur la couleur, les dimensions, la disposition ou la règle de peinture. Les idées proposées peuvent être adaptées ou servir de point de départ à une autre expérience. On commence par un changement dont on peut prévoir l’effet.

Pour chaque expérience, on suit la même démarche :

1. On décrit le résultat attendu avant de modifier le code.
2. On choisit les instructions ou les propriétés à changer.
3. On enregistre les fichiers, puis on recharge la page concernée.
4. On compare le résultat observé à la prévision.
5. On explique un éventuel écart, puis on ajuste le programme ou on essaie une autre idée.

<a id="peinture-au-clic"></a>

## 2. Explorer la peinture au clic

**Préparation**

- `peindre-au-clic.html` : on reprend la page de quatre pixels utilisée dans la [fiche Peindre au clic](./session_03-pixelator-clic.md).
- `pixelator-clic.js` : on reprend le programme terminé, avec les quatre associations de clic et la fonction `peindre`, qui peint ou efface directement la case désignée par `event.target`.
- `pixelator-layout.css` : on reprend la feuille de style présente dans le dossier `pixelator`.

On ouvre `peindre-au-clic.html`. La grille est blanche au chargement ; un clic peint une case et un deuxième clic sur cette case l’efface. Ce fonctionnement sert de point de départ aux expériences.

| Idée | Modification à explorer | Observation possible |
|---|---|---|
| Changer la couleur | La couleur écrite dans le bloc qui peint, dans `peindre` | La même couleur est utilisée quelle que soit la case cliquée. |
| Changer les dimensions | La largeur des colonnes et les dimensions des cases dans `pixelator-layout.css` | Les cases deviennent plus grandes, plus petites ou rectangulaires. |
| Changer la disposition | Le nombre de colonnes dans `pixelator-layout.css` | Les quatre mêmes cases forment une ligne, une colonne ou un carré. |
| Garder la peinture | Le contenu de `peindre` dans `pixelator-clic.js` | Un clic peint la case ; les clics suivants la laissent peinte. |

Ces idées peuvent être combinées après un premier essai. Une autre règle de peinture peut aussi être choisie : on décrit d’abord ce que doit produire chaque clic, puis on cherche comment l’exprimer avec les instructions et les conditions déjà rencontrées.

<details>
<summary><strong>Aide — retrouver les éléments à modifier</strong></summary>

Dans `pixelator-clic.js`, la fonction `peindre` décrit l’action déclenchée au clic ; `event.target` désigne directement la case concernée. La couleur choisie est écrite dans l’instruction qui peint cette case. Les quatre lignes avec `.onclick` associent cette même fonction aux quatre cases.

Pour garder la peinture, on reprend l’étape de peinture sans effacement de la fiche au clic : l’instruction `event.target.style.backgroundColor = "#800080";`, avec la couleur choisie, s’exécute à chaque clic. Le `if` / `else` de l’étape suivante permet de rétablir l’alternance entre peinture et effacement.

Dans `pixelator-layout.css`, la règle `#grille-pixels` définit les colonnes avec `grid-template-columns`. La règle `#grille-pixels > div` définit la largeur et la hauteur des cases. Si la largeur des cases change, on adapte aussi celle des colonnes pour garder une disposition cohérente.

Cette feuille de style est partagée par les pages Pixelator : une modification peut aussi changer l’affichage des animations. Les identifiants des cases restent identiques pour que les associations de clic continuent à fonctionner.

</details>

On essaie plusieurs clics sur une même case et sur des cases différentes. Les résultats sont comparés à la règle choisie. Après un rechargement, les peintures disparaissent ; les modifications enregistrées dans les fichiers restent présentes.

## 3. Expliquer le résultat de l’expérience

On rapproche la prévision du résultat obtenu : quel effet était recherché, quelles instructions ou propriétés ont changé, et quel effet apparaît dans le navigateur ? Un résultat inattendu peut conduire à une correction ou devenir le point de départ d’une autre expérience.

Les [expériences d’animation de la séance 2](./session_02-pixelator-laboratoire.md#animations) restent disponibles pour reprendre un parcours et le faire évoluer.

[Repères — interactions au clic](../session_03.md#consolidation)

[Séance 3](../session_03.md) · [Fiche précédente — peindre au clic](./session_03-pixelator-clic.md)
