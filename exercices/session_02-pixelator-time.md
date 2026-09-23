# Pixelator — Temps : animer un motif

[Séance 2](../session_02.md) · [Fiche précédente — peindre un motif](./session_02-pixelator-sequence.md)

## Notre mission

Nous avons peint un motif fixe sur quatre pixels. Nous allons maintenant faire circuler **une seule case colorée autour du carré**, avec notre unique couleur de peinture. Nous construirons ensemble cette rotation pendant **15 minutes**, puis consacrerons **15 minutes à d’autres animations**, avant d’agrandir le parcours à huit puis seize pixels.

Nous réutilisons les pages HTML, le CSS et notre fichier `pixelator.js`. Le mécanisme de répétition est fourni ; nous travaillons sur les instructions qui effacent et peignent les cases, puis sur leur ordre.

## 1. Reprendre nos quatre pixels

Nous ouvrons `quatre-pixels.html` et notre fichier `pixelator.js`. Si nécessaire, nous retrouvons les fichiers de départ dans la [fiche Séquence](./session_02-pixelator-sequence.md#1-préparer-les-fichiers).

Nous conservons notre couleur, puis **remplaçons le programme du motif fixe** par le squelette de l’étape suivante. Nous gardons un seul programme dans `pixelator.js` et un seul appel à `setInterval`. Nous effectuons nos essais en enregistrant le fichier, puis en rechargeant la page.

## 2. Ensemble — construire une rotation · 15 minutes

### Prévoir les étapes

Nous retrouvons cette disposition dans le HTML :

| | Colonne de gauche | Colonne de droite |
|---|---|---|
| Première ligne | `pixel1` | `pixel2` |
| Deuxième ligne | `pixel3` | `pixel4` |

Pour tourner dans le sens des aiguilles d’une montre, nous suivons **`pixel1 → pixel2 → pixel4 → pixel3 → pixel1`**. L’ordre du parcours diffère de l’ordre des identifiants dans le HTML.

| Étape | Case colorée | Moment de l’affichage |
|---|---|---|
| 1 | `pixel1` | Dès le chargement |
| 2 | `pixel2` | Au premier déclenchement de la minuterie |
| 3 | `pixel4` | Au deuxième déclenchement |
| 4 | `pixel3` | Au troisième déclenchement |
| 1 | `pixel1` | Au quatrième déclenchement : le cycle recommence |

À chaque étape, nous effaçons la peinture précédente avant de peindre la case suivante. Nous obtenons ainsi un déplacement apparent, sans déplacer les éléments HTML.

### Compléter le squelette fourni

Nous recopions ce squelette dans `pixelator.js`. Nous remplaçons le violet par notre couleur et complétons les trois emplacements indiqués par des commentaires. Chaque emplacement reçoit une instruction directe avec `document.querySelector(...)` et `.style.backgroundColor`.

```js
let etape = 1;

function afficherEtape() {
  document.querySelector("#pixel1").style.backgroundColor = "";
  document.querySelector("#pixel2").style.backgroundColor = "";
  document.querySelector("#pixel3").style.backgroundColor = "";
  document.querySelector("#pixel4").style.backgroundColor = "";

  if (etape === 1) {
    document.querySelector("#pixel1").style.backgroundColor = "#800080";
  } else if (etape === 2) {
    // Nous peignons pixel2 avec la même couleur.
  } else if (etape === 3) {
    // Nous peignons pixel4 avec la même couleur.
  } else if (etape === 4) {
    // Nous peignons pixel3 avec la même couleur.
  }

  etape = etape + 1;
  if (etape > 4) {
    etape = 1;
  }
}

afficherEtape();
setInterval(afficherEtape, 1000);
```

Nous lisons les quatre premières instructions : attribuer `""` à `.style.backgroundColor` retire la couleur appliquée par JavaScript. Nous retrouvons alors le fond blanc défini dans `pixelator-layout.css`. Cet effacement ne demande pas une deuxième couleur de peinture.

Nous retrouvons ensuite les conditions de l’horloge et de l’ampoule. `else if` nous permet de tester une autre étape lorsque les conditions précédentes sont fausses. Nous n’exécutons qu’un seul bloc de peinture par appel.

Nous conservons **l’incrément après les blocs de peinture**. `etape` indique d’abord l’étape à afficher, puis augmente pour préparer l’appel suivant. Après l’étape 4, elle passe à 5 ; le test `etape > 4` la ramène à 1. Nous réutilisons ainsi le principe du retour à zéro de l’horloge, avec un cycle qui commence ici à 1.

### Distinguer maintenant et plus tard

Nous utilisons la fonction fournie `afficherEtape` pour regrouper les instructions à répéter. Sa définition décrit ces instructions ; elle ne les exécute pas immédiatement.

- Avec `afficherEtape();`, nous appelons la fonction immédiatement : la première case apparaît dès le chargement.
- Avec `setInterval(afficherEtape, 1000);`, nous demandons au navigateur de rappeler cette fonction à intervalles réguliers. Nous transmettons **son nom, sans parenthèses**, pour qu’il puisse l’appeler plus tard.
- Nous lisons `1000` en **millisecondes** : 1 000 ms correspondent à une seconde. Le navigateur peut déclencher un appel plus tard que prévu ; nous utilisons ici ce délai pour régler la cadence de l’animation.

Nous gardons `setInterval` **après la définition de la fonction, en dehors de ses accolades**. Il installe une seule minuterie ; les déclenchements successifs rappellent ensuite `afficherEtape`.

### Vérifier, puis changer la cadence

Nous enregistrons et rechargeons la page. Nous suivons au moins deux tours complets : une seule case reste colorée à chaque étape, le parcours suit le bord du carré et la rotation revient à `pixel1`.

Nous remplaçons ensuite `1000` par `500`, enregistrons et rechargeons. Le délai demandé passe à une demi-seconde : nous observons la même succession de cases, à une cadence plus rapide. Nous revenons à `1000` pour lire facilement les étapes suivantes.

Si les couleurs s’accumulent, nous vérifions les quatre effacements au début de la fonction. Si une étape reste blanche, nous vérifions l’instruction de peinture dans son bloc. Si le parcours saute d’un coin à l’autre, nous comparons les identifiants avec le tableau.

<a id="rotation-reference"></a>

<details>
<summary><strong>Retrouver notre rotation de référence à quatre pixels</strong></summary>

Nous retrouvons ci-dessous le programme complété avec le violet d’exemple. Nous conservons notre couleur en remplaçant les quatre occurrences de `#800080`.

```js
let etape = 1;

function afficherEtape() {
  document.querySelector("#pixel1").style.backgroundColor = "";
  document.querySelector("#pixel2").style.backgroundColor = "";
  document.querySelector("#pixel3").style.backgroundColor = "";
  document.querySelector("#pixel4").style.backgroundColor = "";

  if (etape === 1) {
    document.querySelector("#pixel1").style.backgroundColor = "#800080";
  } else if (etape === 2) {
    document.querySelector("#pixel2").style.backgroundColor = "#800080";
  } else if (etape === 3) {
    document.querySelector("#pixel4").style.backgroundColor = "#800080";
  } else if (etape === 4) {
    document.querySelector("#pixel3").style.backgroundColor = "#800080";
  }

  etape = etape + 1;
  if (etape > 4) {
    etape = 1;
  }
}

afficherEtape();
setInterval(afficherEtape, 1000);
```

</details>

## 3. Explorer d’autres animations · 15 minutes

Nous choisissons une variante. Avant de modifier le code, nous écrivons la succession des cases colorées et le nombre d’étapes de notre cycle.

| Variante | Succession des cases colorées | Nombre d’étapes |
|---|---|---|
| Sens inverse | `pixel1 → pixel3 → pixel4 → pixel2`, puis retour à `pixel1` | 4 |
| Aller-retour sur le parcours | `pixel1 → pixel2 → pixel4 → pixel3 → pixel4 → pixel2`, puis retour à `pixel1` | 6 |
| Alternance des diagonales | `pixel1` et `pixel4` ensemble, puis `pixel2` et `pixel3` ensemble | 2 |

Nous conservons les quatre effacements au début de la fonction, puis adaptons les blocs de peinture. Pour l’aller-retour, nous ajoutons les conditions des étapes 5 et 6. Pour les diagonales, nous gardons deux blocs, avec deux instructions de peinture dans chacun.

Nous adaptons aussi **la limite du cycle** : `etape > 4`, `etape > 6` ou `etape > 2`, selon notre choix. Nous gardons l’incrément et le retour à 1 après tous les blocs de peinture.

Nous comparons notre prévision à au moins deux cycles observés. Nous pouvons ensuite essayer une autre cadence ou une autre variante, en rechargeant après chaque modification. Nous utilisons toujours notre unique couleur ; la variante des diagonales colore deux cases à la fois.

## 4. Agrandir le parcours à huit pixels

Nous reprenons la [rotation de référence à quatre pixels](#rotation-reference) dans `pixelator.js`, avec notre couleur et un délai de 1 000 ms. Nous remplaçons notre variante par cette rotation avant de l’agrandir.

Nous récupérons [huit-pixels.html](./pixelator/huit-pixels.html) et le plaçons à côté de `quatre-pixels.html`, de `pixelator-layout.css` et de `pixelator.js`. Nous ouvrons désormais `huit-pixels.html` pour nos essais. La page charge le même programme et présente deux colonnes de quatre cases.

Avant nos modifications, nous retrouvons la petite rotation sur les quatre premières cases. Nous allons étendre le parcours au bord du rectangle : **`pixel1 → pixel2 → pixel4 → pixel6 → pixel8 → pixel7 → pixel5 → pixel3 → pixel1`**.

| Étape | Case à peindre |
|---|---|
| 1 | `pixel1` |
| 2 | `pixel2` |
| 3 | `pixel4` |
| 4 | `pixel6` |
| 5 | `pixel8` |
| 6 | `pixel7` |
| 7 | `pixel5` |
| 8 | `pixel3` |

Nous modifions trois parties du programme :

1. Nous ajoutons les quatre effacements de `pixel5` à `pixel8`, à la suite des premiers et avant les conditions.
2. Nous adaptons les blocs de peinture au tableau. Le bloc de l’étape 4 change lui aussi : il peint maintenant `pixel6`. Nous ajoutons les quatre blocs `else if` des étapes 5 à 8, avant l’incrément.
3. Nous remplaçons `etape > 4` par `etape > 8` pour revenir à 1 après la huitième étape.

Nous conservons un seul appel immédiat à `afficherEtape()` et un seul `setInterval`, en dehors de la fonction. Nous enregistrons, rechargeons et vérifions deux tours : nous descendons par la colonne de droite, puis remontons par celle de gauche, avec une seule case colorée.

Nous poursuivons nos essais sur `huit-pixels.html`. Le programme cible maintenant huit identifiants ; les quatre nouveaux n’existent pas dans `quatre-pixels.html`.

## 5. Doubler encore le parcours : seize pixels

Nous récupérons [seize-pixels.html](./pixelator/seize-pixels.html) et le plaçons dans le même dossier. Nous ouvrons cette page pour la suite. Elle utilise les mêmes fichiers CSS et JavaScript, conserve les deux colonnes et ajoute quatre lignes : les nouvelles cases portent les identifiants `pixel9` à `pixel16`.

Nous prolongeons le parcours jusqu’au bas de cette grille, puis remontons par la gauche : **`pixel1 → pixel2 → pixel4 → pixel6 → pixel8 → pixel10 → pixel12 → pixel14 → pixel16 → pixel15 → pixel13 → pixel11 → pixel9 → pixel7 → pixel5 → pixel3 → pixel1`**.

| Étape | Case à peindre |
|---|---|
| 1 | `pixel1` |
| 2 | `pixel2` |
| 3 | `pixel4` |
| 4 | `pixel6` |
| 5 | `pixel8` |
| 6 | `pixel10` |
| 7 | `pixel12` |
| 8 | `pixel14` |
| 9 | `pixel16` |
| 10 | `pixel15` |
| 11 | `pixel13` |
| 12 | `pixel11` |
| 13 | `pixel9` |
| 14 | `pixel7` |
| 15 | `pixel5` |
| 16 | `pixel3` |

Nous reprenons les trois modifications : huit effacements supplémentaires pour `pixel9` à `pixel16`, seize blocs de peinture conformes au tableau, et une limite remplacée par `etape > 16`. Nous adaptons aussi les blocs existants des étapes 6 à 8 ; ajouter des blocs à la fin ne suffit pas à prolonger le parcours.

Nous gardons l’incrément après tous les blocs de peinture et conservons notre unique minuterie. Nous enregistrons et rechargeons `seize-pixels.html`, puis suivons deux tours complets. Nous utilisons désormais cette page, qui contient tous les identifiants ciblés par notre programme.

## Vérification finale

- Nous retrouvons `pixel1` coloré dès le chargement, puis les cases suivantes dans l’ordre prévu.
- Nous observons une seule case colorée à chaque étape de la rotation de référence ; les autres retrouvent leur fond initial.
- Nous revenons à `pixel1` après seize étapes, puis retrouvons le même parcours au cycle suivant.
- Nous vérifions qu’un rechargement relance le parcours au début.
- Nous changeons le délai et observons une cadence différente, avec le même parcours.
- Nous pouvons expliquer l’effacement, le choix de la case, l’incrément et le retour à la première étape.

Nous avons agrandi notre animation en répétant des instructions d’effacement et des blocs de peinture. Nous constatons que le programme s’allonge avec le parcours : cette répétition nous donne une raison concrète d’aborder les boucles dans la suite du cours.
