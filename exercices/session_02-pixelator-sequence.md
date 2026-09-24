# Pixelator — Séquence : peindre un motif

[Séance 2](../session_02.md)

**Durée : 20 minutes, préparation des fichiers et vérifications comprises.**

<a id="notre-mission"></a>

## Objectif

On dessine un motif en choisissant les cases à peindre parmi les quatre pixels de la page. On choisit **une seule couleur de peinture** pour tout le motif. Il doit apparaître dès le chargement de la page.

Le HTML, le CSS et le fichier d’attente pour la suite sont fournis. **On crée uniquement `pixelator.js` pour y écrire les instructions JavaScript.**

## 1. Préparer les fichiers

On récupère ces trois fichiers pour les placer dans un même dossier :

- [quatre-pixels.html](./pixelator/quatre-pixels.html) : la page de départ, avec quatre `div` ;
- [pixelator-layout.css](./pixelator/pixelator-layout.css) : l’apparence et la disposition des cases ;
- [pixelator-attente.js](./pixelator/pixelator-attente.js) : l’outil d’attente fourni pour la fiche Temps.

On crée un fichier nommé exactement `pixelator.js` dans ce dossier :

```text
pixelator/
├── quatre-pixels.html
├── pixelator-layout.css
├── pixelator-attente.js
└── pixelator.js          ← fichier à créer
```

On ouvre directement `quatre-pixels.html` dans le navigateur, par un double-clic sur le fichier. Aucun serveur n’est nécessaire. Le HTML charge déjà `pixelator-attente.js`, puis `pixelator.js`, après les cases. On garde le fichier d’attente tel quel ; les fichiers fournis sont prêts à l’emploi.

## 2. Choisir une couleur et un motif

Chaque case possède un identifiant unique. Voici leur disposition :

| | Colonne de gauche | Colonne de droite |
|---|---|---|
| Première ligne | `pixel1` | `pixel2` |
| Deuxième ligne | `pixel3` | `pixel4` |

On choisit les cases à peindre : par exemple, une diagonale ou une colonne. Les cases non ciblées gardent leur fond initial.

On choisit ensuite **une couleur**, écrite en hexadécimal ou sous la forme `rgb(r, g, b)`. Par exemple, `#800080` et `rgb(128, 0, 128)` représentent le même violet. Dans un triplet RGB, chaque composante va de 0 à 255. On garde la même écriture de la couleur dans toutes les instructions.

## 3. Peindre avec des instructions directes

Dans `pixelator.js`, on écrit une instruction par case choisie. Par exemple, pour peindre `pixel1` en violet :

```js
document.querySelector("#pixel1").style.backgroundColor = "#800080";
```

On lit cette instruction de gauche à droite :

- `document.querySelector("#pixel1")` sélectionne la case dont l’identifiant est `pixel1`. Le `#` indique une sélection par identifiant.
- `.style.backgroundColor` désigne sa couleur de fond.
- `= "#800080"` lui attribue la couleur choisie, écrite entre guillemets.
- `;` termine l’instruction.

On adapte l’identifiant à chaque case du motif et on remplace le violet par la couleur choisie. Chaque ligne doit utiliser directement `document.querySelector(...)` et `.style.backgroundColor`.

On enregistre `pixelator.js`, puis on recharge la page. Les instructions s’exécutent au chargement : le motif apparaît automatiquement.

On vérifie que les cases choisies sont peintes avec la même couleur et que les autres gardent leur fond initial. Après un nouveau rechargement, le même motif doit apparaître.

Si une case ne se colore pas, on vérifie le nom et l’emplacement de `pixelator.js`, puis l’identifiant dans l’instruction : le `#` doit être présent et le nom doit correspondre exactement à celui du HTML.

## Vérification finale

- Les quatre pixels de `quatre-pixels.html` et le motif apparaissent dès le chargement.
- Seules les cases choisies sont peintes, avec l’unique couleur retenue.
- Le même motif apparaît après un rechargement.
- On peut expliquer quelle case chaque instruction sélectionne et quelle propriété elle modifie.

Une séquence d’instructions produit désormais un motif fixe. On va maintenant organiser ses changements dans le temps, toujours sur quatre pixels.

[Suite — Pixelator : animer un motif](./session_02-pixelator-time.md)
