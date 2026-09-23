# Pixelator — Première leçon : peindre un motif

[Séance 2](../session_02.md)

<a id="votre-mission"></a>

## Notre mission

Nous dessinons un motif en choisissant les cases à peindre parmi les quatre pixels de la page. Nous choisissons **une seule couleur de peinture** pour tout le motif. Il doit apparaître dès le chargement de la page.

Le HTML et le CSS sont fournis. **Nous créons uniquement `pixelator.js` et nous y écrivons les instructions JavaScript.**

## 1. Préparer les fichiers

Nous récupérons ces trois fichiers et les plaçons dans un même dossier :

- [quatre-pixels.html](./pixelator/quatre-pixels.html) : la page de départ, avec quatre `div` ;
- [huit-pixels.html](./pixelator/huit-pixels.html) : la page fournie pour l’étape suivante, avec huit `div` ;
- [pixelator-layout.css](./pixelator/pixelator-layout.css) : l’apparence et la disposition des cases.

Nous créons un fichier nommé exactement `pixelator.js` dans ce dossier :

```text
pixelator/
├── quatre-pixels.html
├── huit-pixels.html
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

## 4. Passer de quatre à huit pixels

Nous ouvrons maintenant `huit-pixels.html`. Cette seconde page fournie double le nombre de `div` : les quatre premières conservent leurs identifiants et les quatre nouvelles portent les identifiants `pixel5`, `pixel6`, `pixel7` et `pixel8`. Chaque identifiant reste unique dans la page.

| | Colonne de gauche | Colonne de droite |
|---|---|---|
| Première ligne | `pixel1` | `pixel2` |
| Deuxième ligne | `pixel3` | `pixel4` |
| Troisième ligne | `pixel5` | `pixel6` |
| Quatrième ligne | `pixel7` | `pixel8` |

Cette page charge le même `pixelator.js`. Notre motif apparaît donc sur les quatre premières cases.

À la suite de nos instructions, **nous ajoutons quatre instructions directes**, une pour chacun des nouveaux pixels : `pixel5`, `pixel6`, `pixel7` et `pixel8`. Nous utilisons toujours `document.querySelector(...)` et `.style.backgroundColor`, avec **la même couleur** qu’à l’étape précédente.

Nous enregistrons et rechargeons `huit-pixels.html` pour vérifier le résultat.

## Vérification finale

- La page affiche huit pixels et le motif apparaît dès son chargement.
- Les quatre premières cases conservent le motif que nous avons choisi.
- Les quatre nouvelles cases sont peintes grâce aux quatre instructions ajoutées.
- Toutes les cases peintes utilisent notre unique couleur.
- Nous pouvons expliquer quelle case chaque instruction sélectionne et quelle propriété elle modifie.
