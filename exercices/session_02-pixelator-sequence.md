# Pixelator — Séquence : peindre un motif

[Séance 2](../session_02.md)

<a id="notre-mission"></a>

## Notre mission

Nous dessinons un motif en choisissant les cases à peindre parmi les quatre pixels de la page. Nous choisissons **une seule couleur de peinture** pour tout le motif. Il doit apparaître dès le chargement de la page.

Le HTML et le CSS sont fournis. **Nous créons uniquement `pixelator.js` et nous y écrivons les instructions JavaScript.**

## 1. Préparer les fichiers

Nous récupérons ces deux fichiers et les plaçons dans un même dossier :

- [quatre-pixels.html](./pixelator/quatre-pixels.html) : la page de départ, avec quatre `div` ;
- [pixelator-layout.css](./pixelator/pixelator-layout.css) : l’apparence et la disposition des cases.

Nous créons un fichier nommé exactement `pixelator.js` dans ce dossier :

```text
pixelator/
├── quatre-pixels.html
├── pixelator-layout.css
└── pixelator.js          ← notre fichier à créer
```

Nous ouvrons `quatre-pixels.html` dans le navigateur. Le HTML charge déjà `pixelator.js`, après les cases. Nous pouvons consulter les fichiers HTML et CSS pour nous repérer ; ils sont prêts à l’emploi.

## 2. Choisir une couleur et un motif

Chaque case possède un identifiant unique. Voici leur disposition :

| | Colonne de gauche | Colonne de droite |
|---|---|---|
| Première ligne | `pixel1` | `pixel2` |
| Deuxième ligne | `pixel3` | `pixel4` |

Nous choisissons les cases que nous souhaitons peindre : par exemple, une diagonale ou une colonne. Les cases que nous ne ciblons pas garderont leur fond initial.

Nous choisissons ensuite **une couleur**, écrite en hexadécimal ou sous la forme `rgb(r, g, b)`. Par exemple, `#800080` et `rgb(128, 0, 128)` représentent le même violet. Dans un triplet RGB, chaque composante va de 0 à 255. Nous gardons la même écriture de notre couleur dans toutes nos instructions.

## 3. Peindre avec des instructions directes

Dans `pixelator.js`, nous écrivons une instruction par case choisie. Par exemple, pour peindre `pixel1` en violet :

```js
document.querySelector("#pixel1").style.backgroundColor = "#800080";
```

Nous lisons cette instruction de gauche à droite :

- `document.querySelector("#pixel1")` sélectionne la case dont l’identifiant est `pixel1`. Le `#` indique une sélection par identifiant.
- `.style.backgroundColor` désigne sa couleur de fond.
- `= "#800080"` lui attribue la couleur choisie, écrite entre guillemets.
- `;` termine l’instruction.

Nous adaptons l’identifiant à chaque case de notre motif et remplaçons le violet par notre couleur. Chaque ligne doit utiliser directement `document.querySelector(...)` et `.style.backgroundColor`.

Nous enregistrons `pixelator.js`, puis rechargeons la page. Les instructions s’exécutent au chargement : notre motif apparaît automatiquement.

Nous vérifions que les cases choisies sont peintes avec la même couleur et que les autres gardent leur fond initial. Nous rechargeons encore une fois : nous devons retrouver le même motif.

Si une case ne se colore pas, nous vérifions le nom et l’emplacement de `pixelator.js`, puis l’identifiant dans notre instruction : le `#` doit être présent et le nom doit correspondre exactement à celui du HTML.

## Vérification finale

- Nous retrouvons les quatre pixels de `quatre-pixels.html` et notre motif dès le chargement.
- Nous vérifions que seules les cases choisies sont peintes, avec notre unique couleur.
- Nous retrouvons le même motif après un rechargement.
- Nous pouvons expliquer quelle case chaque instruction sélectionne et quelle propriété elle modifie.

Nous avons construit un motif fixe avec une séquence d’instructions. Nous allons maintenant organiser ses changements dans le temps, toujours sur quatre pixels.

[Suite — Pixelator : animer un motif](./session_02-pixelator-time.md)
