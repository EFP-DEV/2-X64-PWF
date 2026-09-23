# Pixelator — Première leçon : peindre un motif

[Séance 2](../session_02.md)

## Votre mission

Dessinez un motif en choisissant les cases à peindre parmi les quatre pixels de la page. Choisissez **une seule couleur de peinture** pour tout le motif. Il doit apparaître dès le chargement de la page.

Le HTML et le CSS sont fournis. **Vous créez uniquement `pixelator.js` et vous y écrivez les instructions JavaScript.**

## 1. Préparer les fichiers

Récupérez ces trois fichiers et placez-les dans un même dossier :

- [quatre-pixels.html](./pixelator/quatre-pixels.html) : la page de départ, avec quatre `div` ;
- [huit-pixels.html](./pixelator/huit-pixels.html) : la page fournie pour l’étape suivante, avec huit `div` ;
- [pixelator-layout.css](./pixelator/pixelator-layout.css) : l’apparence et la disposition des cases.

Créez un fichier nommé exactement `pixelator.js` dans ce dossier :

```text
pixelator/
├── quatre-pixels.html
├── huit-pixels.html
├── pixelator-layout.css
└── pixelator.js          ← votre fichier à créer
```

Ouvrez `quatre-pixels.html` dans le navigateur. Le HTML charge déjà `pixelator.js`, après les cases. Vous pouvez consulter les fichiers HTML et CSS pour vous repérer ; ils sont prêts à l’emploi.

## 2. Choisir une couleur et un motif

Chaque case possède un identifiant unique. Voici leur disposition :

| | Colonne de gauche | Colonne de droite |
|---|---|---|
| Première ligne | `pixel1` | `pixel2` |
| Deuxième ligne | `pixel3` | `pixel4` |

Choisissez les cases que vous souhaitez peindre : par exemple, une diagonale ou une colonne. Les cases que vous ne ciblez pas garderont leur fond initial.

Choisissez ensuite **une couleur**, écrite en hexadécimal ou sous la forme `rgb(r, g, b)`. Par exemple, `#800080` et `rgb(128, 0, 128)` représentent le même violet. Dans un triplet RGB, chaque composante va de 0 à 255. Gardez la même écriture de votre couleur dans toutes vos instructions.

## 3. Peindre avec des instructions directes

Dans `pixelator.js`, écrivez une instruction par case choisie. Par exemple, pour peindre `pixel1` en violet :

```js
document.querySelector("#pixel1").style.backgroundColor = "#800080";
```

Lisez cette instruction de gauche à droite :

- `document.querySelector("#pixel1")` sélectionne la case dont l’identifiant est `pixel1`. Le `#` indique une sélection par identifiant.
- `.style.backgroundColor` désigne sa couleur de fond.
- `= "#800080"` lui attribue la couleur choisie, écrite entre guillemets.
- `;` termine l’instruction.

Adaptez l’identifiant à chaque case de votre motif et remplacez le violet par votre couleur. Chaque ligne doit utiliser directement `document.querySelector(...)` et `.style.backgroundColor`.

Enregistrez `pixelator.js`, puis rechargez la page. Les instructions s’exécutent au chargement : votre motif apparaît automatiquement.

Vérifiez que les cases choisies sont peintes avec la même couleur et que les autres gardent leur fond initial. Rechargez encore une fois : vous devez retrouver le même motif.

Si une case ne se colore pas, vérifiez le nom et l’emplacement de `pixelator.js`, puis l’identifiant dans votre instruction : le `#` doit être présent et le nom doit correspondre exactement à celui du HTML.

## 4. Passer de quatre à huit pixels

Ouvrez maintenant `huit-pixels.html`. Cette seconde page fournie double le nombre de `div` : les quatre premières conservent leurs identifiants et les quatre nouvelles portent les identifiants `pixel5`, `pixel6`, `pixel7` et `pixel8`. Chaque identifiant reste unique dans la page.

| | Colonne de gauche | Colonne de droite |
|---|---|---|
| Première ligne | `pixel1` | `pixel2` |
| Deuxième ligne | `pixel3` | `pixel4` |
| Troisième ligne | `pixel5` | `pixel6` |
| Quatrième ligne | `pixel7` | `pixel8` |

Cette page charge le même `pixelator.js`. Votre motif apparaît donc sur les quatre premières cases.

À la suite de vos instructions, **ajoutez quatre instructions directes**, une pour chacun des nouveaux pixels : `pixel5`, `pixel6`, `pixel7` et `pixel8`. Utilisez toujours `document.querySelector(...)` et `.style.backgroundColor`, avec **la même couleur** qu’à l’étape précédente.

Enregistrez et rechargez `huit-pixels.html` pour vérifier le résultat.

## Vérification finale

- La page affiche huit pixels et le motif apparaît dès son chargement.
- Les quatre premières cases conservent le motif que vous avez choisi.
- Les quatre nouvelles cases sont peintes grâce aux quatre instructions ajoutées.
- Toutes les cases peintes utilisent votre unique couleur.
- Vous pouvez expliquer quelle case chaque instruction sélectionne et quelle propriété elle modifie.
