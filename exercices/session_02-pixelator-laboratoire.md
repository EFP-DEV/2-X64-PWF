# Pixelator — Laboratoire d’expérimentation

## 1. Choisir une expérience

On choisit une piste à partir du programme fonctionnel réalisé pendant la séance : **une animation** ou **la peinture au clic**. Les idées proposées peuvent être adaptées ou servir de point de départ à une autre expérience. On commence par un changement dont on peut prévoir l’effet.

| Piste | Point de départ | Idées à explorer |
|---|---|---|
| [Animations](#animations) | La rotation sur neuf pixels | Changer le parcours ou la cadence, animer plusieurs cases ensemble, passer à seize pixels. |
| [Peinture au clic](#peinture-au-clic) | Les quatre cases qui se peignent et s’effacent au clic | Changer la couleur, la taille ou la disposition des cases, essayer une autre règle de peinture. |

Pour chaque expérience, on suit la même démarche :

1. On décrit le résultat attendu avant de modifier le code.
2. On choisit les instructions ou les propriétés à changer.
3. On enregistre les fichiers, puis on recharge la page concernée.
4. On compare le résultat observé à la prévision.
5. On explique un éventuel écart, puis on ajuste le programme ou on essaie une autre idée.

<a id="animations"></a>

## 2. Explorer les animations

**Préparation**

- `neuf-pixels.html` : on reprend la page utilisée dans la fiche Temps, qui charge `pixelator-time.js` après le [changement de `src`](./session_02-pixelator-time.md#1-charger-le-fichier-de-départ).
- `pixelator-time.js` : on reprend la rotation construite dans la fiche Temps, avec la couleur choisie et des attentes de 500 ms. L’[aide sur la rotation de référence](./session_02-pixelator-time.md#rotation-reference) permet de la reconstruire si nécessaire.
- `pixelator-layout.css` : on réutilise la feuille de style présente dans le dossier `pixelator`.

On ouvre `neuf-pixels.html` dans le navigateur pour retrouver la rotation de départ : un tour se termine sur `pixel1` après environ quatre secondes. Les fonctions `peindre`, `effacer` et `attendre` et le cadre de chargement restent disponibles dans `pixelator-time.js` ; les appels placés à l’intérieur du cadre décrivent l’animation.

On peut inverser le sens de rotation, faire un aller-retour, alterner deux groupes de cases ou faire varier les attentes. Avant de modifier les appels, on note la succession prévue des affichages et l’état dans lequel le dessin doit s’arrêter.

<a id="variantes-animation"></a>

<details>
<summary><strong>Aide — trois parcours sur neuf pixels</strong></summary>

| Variante | Succession des cases colorées | Nombre d’attentes |
|---|---|---|
| Sens inverse | `pixel1 → pixel4 → pixel7 → pixel8 → pixel9 → pixel6 → pixel3 → pixel2 → pixel1` | 8 |
| Aller-retour sur le parcours | `pixel1 → pixel2 → pixel3 → pixel6 → pixel9 → pixel8 → pixel7 → pixel4 → pixel7 → pixel8 → pixel9 → pixel6 → pixel3 → pixel2 → pixel1` | 14 |
| Alternance des coins opposés | `pixel1` et `pixel9`, puis `pixel3` et `pixel7`, puis `pixel1` et `pixel9` | 2 |

On conserve les définitions de `peindre`, d’`effacer` et d’`attendre` et on remplace les appels à l’intérieur du cadre fourni par la nouvelle séquence. Pour l’aller-retour, on atteint `pixel4`, puis on rebrousse chemin jusqu’à `pixel1`. Pour les coins opposés, on peint les deux premières cases sans attente entre elles ; après chaque attente, on appelle `effacer` pour chacune des deux cases précédentes, puis `peindre` pour chacune des deux suivantes.

On garde une attente avant chaque changement d’affichage, avec la même couleur pour toutes les peintures. Le centre reste blanc dans les trois variantes. L’alternance des coins opposés affiche deux cases colorées ensemble.

On enregistre et recharge, puis on compare la prévision au parcours observé et au motif final. Ce motif reste immobile une fois la séquence terminée. Un rechargement rejoue l’animation ; une autre durée d’attente change sa cadence.

</details>

<a id="seize-pixels"></a>

### Explorer une grille de seize pixels

Cette piste permet d’adapter un parcours à une autre disposition des cases.

**Préparation**

- [seize-pixels.html](./pixelator/seize-pixels.html) : on récupère la page de seize pixels et on la place dans le dossier `pixelator`.
- `pixelator-time.js` : on reprend la rotation construite sur neuf pixels, avec la couleur choisie et des attentes de 500 ms, en s’appuyant si nécessaire sur l’[aide de reconstruction](./session_02-pixelator-time.md#rotation-reference).
- `pixelator-layout.css` : on réutilise la feuille de style déjà présente dans le dossier.

La nouvelle page charge déjà `pixelator-layout.css` et `pixelator-time.js`. Les seize cases forment un rectangle de huit lignes et deux colonnes, avec les identifiants `pixel1` à `pixel16` rangés ligne par ligne. On choisit un parcours et on adapte la séquence à cette disposition. Les essais se font désormais sur `seize-pixels.html`, qui contient toutes les cases ciblées.

<details>
<summary><strong>Aide — faire le tour des seize pixels</strong></summary>

On descend par la colonne de droite, puis on remonte par celle de gauche, en suivant **`pixel1 → pixel2 → pixel4 → pixel6 → pixel8 → pixel10 → pixel12 → pixel14 → pixel16 → pixel15 → pixel13 → pixel11 → pixel9 → pixel7 → pixel5 → pixel3 → pixel1`**. Toutes les cases participent au parcours ; `pixel5` se trouve désormais sur le bord.

| Affichage | Case à peindre |
|---|---|
| Départ | `pixel1` |
| Après l’attente 1 | `pixel2` |
| Après l’attente 2 | `pixel4` |
| Après l’attente 3 | `pixel6` |
| Après l’attente 4 | `pixel8` |
| Après l’attente 5 | `pixel10` |
| Après l’attente 6 | `pixel12` |
| Après l’attente 7 | `pixel14` |
| Après l’attente 8 | `pixel16` |
| Après l’attente 9 | `pixel15` |
| Après l’attente 10 | `pixel13` |
| Après l’attente 11 | `pixel11` |
| Après l’attente 12 | `pixel9` |
| Après l’attente 13 | `pixel7` |
| Après l’attente 14 | `pixel5` |
| Après l’attente 15 | `pixel3` |
| Après l’attente 16 | `pixel1` — fin |

On conserve les définitions de `peindre`, d’`effacer` et d’`attendre` et le cadre fourni, puis on remplace toute la séquence à l’intérieur par le parcours du tableau. On peint `pixel1` au départ, sans attente initiale. L’ordre des cases change dès le passage après `pixel2`, qui mène maintenant à `pixel4`.

Chaque passage contient le même groupe de trois instructions : `await attendre(500);`, un appel à `effacer` avec l’identifiant de la case précédente, puis un appel à `peindre` avec celui de la suivante. On enregistre et recharge `seize-pixels.html`, puis on suit le tour complet jusqu’à son arrêt sur `pixel1`, après environ huit secondes.

Les observations attendues pour ce parcours sont :

- `pixel1` est coloré dès le chargement, puis une seule case reste colorée à chaque affichage du parcours prévu.
- Après **seize attentes**, le parcours revient à `pixel1`, qui reste coloré sans nouveau déplacement.
- Un rechargement, pendant ou après l’animation, relance le parcours au début.

L’animation s’est agrandie par ajout d’appels dans l’ordre du parcours. La fonction `peindre` reste identique ; le même groupe — attendre, effacer, peindre — revient plusieurs fois. Cette répétition donne une raison concrète d’aborder les boucles dans la suite du cours.

</details>

<details>
<summary><strong>Aide — revenir à neuf pixels</strong></summary>

**Préparation**

- `pixelator-time.js` : on reconstruit la rotation sur neuf pixels avec l’[aide de référence](./session_02-pixelator-time.md#rotation-reference), la couleur choisie et des attentes de 500 ms, puis on enregistre le fichier.

On ouvre `neuf-pixels.html` dans le navigateur pour retrouver la rotation sur neuf pixels.

</details>

<a id="peinture-au-clic"></a>

## 3. Explorer la peinture au clic

**Préparation**

- `peindre-au-clic.html` : on reprend la page de quatre pixels utilisée dans la [fiche Peindre au clic](./session_02-pixelator-clic.md).
- `pixelator-clic.js` : on reprend le programme terminé, avec les quatre associations de clic et la fonction `peindrePixel`, qui peint ou efface directement la case désignée par `event.target`.
- `pixelator-layout.css` : on reprend la feuille de style présente dans le dossier `pixelator`.

On ouvre `peindre-au-clic.html`. La grille est blanche au chargement ; un clic peint une case et un deuxième clic sur cette case l’efface. Ce fonctionnement sert de point de départ aux expériences.

| Idée | Modification à explorer | Observation possible |
|---|---|---|
| Changer la couleur | La couleur écrite dans le bloc qui peint, dans `peindrePixel` | La même couleur est utilisée quelle que soit la case cliquée. |
| Changer les dimensions | La largeur des colonnes et les dimensions des cases dans `pixelator-layout.css` | Les cases deviennent plus grandes, plus petites ou rectangulaires. |
| Changer la disposition | Le nombre de colonnes dans `pixelator-layout.css` | Les quatre mêmes cases forment une ligne, une colonne ou un carré. |
| Garder la peinture | Le contenu de `peindrePixel` dans `pixelator-clic.js` | Un clic peint la case ; les clics suivants la laissent peinte. |

Ces idées peuvent être combinées après un premier essai. Une autre règle de peinture peut aussi être choisie : on décrit d’abord ce que doit produire chaque clic, puis on cherche comment l’exprimer avec les instructions et les conditions déjà rencontrées.

<details>
<summary><strong>Aide — retrouver les éléments à modifier</strong></summary>

Dans `pixelator-clic.js`, la fonction `peindrePixel` décrit l’action déclenchée au clic ; `event.target` désigne directement la case concernée. La couleur choisie est écrite dans l’instruction qui peint cette case. Les quatre lignes avec `.onclick` associent cette même fonction aux quatre cases.

Pour garder la peinture, le comportement peut retrouver son premier état dans la fiche au clic : l’instruction `event.target.style.backgroundColor = "#800080";`, avec la couleur choisie, s’exécute à chaque clic. Le `if` / `else` de la version suivante permet de rétablir l’alternance entre peinture et effacement.

Dans `pixelator-layout.css`, la règle `#grille-pixels` définit les colonnes avec `grid-template-columns`. La règle `#grille-pixels > div` définit la largeur et la hauteur des cases. Si la largeur des cases change, on adapte aussi celle des colonnes pour garder une disposition cohérente.

Cette feuille de style est partagée par les pages Pixelator : une modification peut aussi changer l’affichage des animations. Les identifiants des cases restent identiques pour que les associations de clic continuent à fonctionner.

</details>

On essaie plusieurs clics sur une même case et sur des cases différentes. Les résultats sont comparés à la règle choisie. Après un rechargement, les peintures disparaissent ; les modifications enregistrées dans les fichiers restent présentes.

## 4. Expliquer le résultat de l’expérience

On rapproche la prévision du résultat obtenu : quel effet était recherché, quelles instructions ou propriétés ont changé, et quel effet apparaît dans le navigateur ? Un résultat inattendu peut conduire à une correction ou devenir le point de départ d’une autre expérience.

[Repères — rappel des grands concepts](../session_02.md#consolidation)
