# Pixelator — Séquence : peindre un motif

## 1. Préparer les fichiers

<a id="notre-mission"></a>

Le HTML et le CSS sont fournis. **On crée uniquement `pixelator.js` pour y écrire les instructions JavaScript.**

**Préparation**

- [quatre-pixels.html](./pixelator/quatre-pixels.html) : on récupère la page de départ, avec quatre `div`, et on la place dans un dossier nommé `pixelator`.
- [pixelator-layout.css](./pixelator/pixelator-layout.css) : on récupère la feuille de style qui définit l’apparence et la disposition des cases, et on la place dans le même dossier.
- `pixelator.js` : on crée un fichier vide portant exactement ce nom dans le même dossier, pour y écrire les instructions JavaScript.

On ouvre directement `quatre-pixels.html` dans le navigateur, par un double-clic sur le fichier. Aucun serveur n’est nécessaire. Le HTML charge déjà `pixelator.js`, après les cases. Les fichiers fournis sont prêts à l’emploi.

## 2. Choisir une couleur et un motif

Chaque case possède un identifiant unique. Voici leur disposition :

| | Colonne de gauche | Colonne de droite |
|---|---|---|
| Première ligne | `pixel1` | `pixel2` |
| Deuxième ligne | `pixel3` | `pixel4` |

On choisit les cases à peindre : par exemple, une diagonale ou une colonne. Les cases non ciblées gardent leur fond initial.

On choisit ensuite **une seule couleur de peinture pour tous les motifs**, écrite en hexadécimal ou sous la forme `rgb(r, g, b)`. Par exemple, `#800080` et `rgb(128, 0, 128)` représentent le même violet. Dans un triplet RGB, chaque composante va de 0 à 255. On garde la même écriture de la couleur dans toutes les instructions.

## 3. Peindre avec des instructions directes

Dans `pixelator.js`, on écrit une instruction par case choisie. Par exemple, pour peindre `pixel1` en violet :

```js
document.querySelector("#pixel1").style.backgroundColor = "#800080";
```

On lit cette instruction de gauche à droite :

- `document.querySelector("#pixel1")` sélectionne la case dont l’identifiant est `pixel1`. Le `#` indique une sélection par identifiant.
- `.style.backgroundColor` désigne la couleur de fond dans le style appliqué directement à l’élément (*style inline*).
- `= "#800080"` lui attribue la couleur choisie, écrite entre guillemets.
- `;` termine l’instruction.

On adapte l’identifiant à chaque case du motif et on remplace le violet par la couleur choisie. À cette étape, chaque ligne utilise directement `document.querySelector(...)` et `.style.backgroundColor`.

On enregistre `pixelator.js`, puis on recharge la page. Les instructions s’exécutent au chargement : le motif apparaît automatiquement.

On vérifie que les cases choisies sont peintes avec la même couleur et que les autres gardent leur fond initial. Après un nouveau rechargement, le même motif doit apparaître.

Si une case ne se colore pas, on vérifie le nom et l’emplacement de `pixelator.js`, puis l’identifiant dans l’instruction : le `#` doit être présent et le nom doit correspondre exactement à celui du HTML.

## 4. Passer à neuf pixels : peindre le contour

On agrandit maintenant la grille en gardant sa forme carrée.

**Préparation**

- [neuf-pixels.html](./pixelator/neuf-pixels.html) : on récupère la page de neuf pixels et on la place dans le dossier `pixelator`.
- [pixelator-layout.css](./pixelator/pixelator-layout.css) : on récupère la feuille de style qui prévoit les trois colonnes de cette page, en remplaçant le fichier CSS du dossier.
- `pixelator.js` : on reprend le fichier du premier motif dans l’éditeur ; la nouvelle page charge ce même programme.

On ouvre directement `neuf-pixels.html` dans le navigateur. Ses neuf cases se répartissent ainsi :

| | Colonne de gauche | Colonne du milieu | Colonne de droite |
|---|---|---|---|
| Première ligne | `pixel1` | `pixel2` | `pixel3` |
| Deuxième ligne | `pixel4` | `pixel5` | `pixel6` |
| Troisième ligne | `pixel7` | `pixel8` | `pixel9` |

Le premier motif sur cette grille est **le contour du carré : les huit cases du bord sont peintes, la case centrale `pixel5` reste blanche**.

Dans `pixelator.js`, on remplace les instructions du petit motif par **huit instructions directes**, une pour chaque case du contour, avec la couleur déjà choisie. On suit l’ordre des numéros, en sautant le centre : **`pixel1 → pixel2 → pixel3 → pixel4 → pixel6 → pixel7 → pixel8 → pixel9`**. Cet ordre commun servira de point de départ dans l’atelier Temps.

On enregistre et recharge `neuf-pixels.html`. Les huit cases du contour doivent être peintes avec la même couleur ; le centre doit garder son fond blanc. On compare les identifiants écrits avec les cases attendues pour retrouver une éventuelle case oubliée ou peinte en trop.

Les essais suivants se font sur `neuf-pixels.html` : cette page contient tous les identifiants du nouveau programme. Les cases `pixel5` à `pixel9` n’existent pas dans `quatre-pixels.html`.

## 5. Apprendre à JavaScript à peindre

### Constater ce qui devient difficile

Le contour apparaît. Il a fallu écrire huit fois la même opération technique, en vérifiant chaque identifiant. Les longues instructions se ressemblent : il faut les relire pour retrouver les cases du dessin. Si la façon de peindre devait changer, la même modification serait à reporter dans chaque ligne.

On imagine maintenant un motif avec seize ou trente-deux cases à peindre. Il faudrait recopier autant de fois cette mécanique. L’écriture devient lourde à produire, à lire et à modifier, alors que l’action reste simple : peindre une case.

### Comparer les instructions

Cette écriture peut devenir plus simple. Comme avec [`DOC + TYPE + HTML` en première séance](./session_01-exploration.md#du-html-au-document), on examine les éléments pour retrouver le sens de l’ensemble.

On compare les huit lignes du contour réalisé. Voici le début d’un exemple en violet, dans l’ordre des numéros :

```js
document.querySelector("#pixel1").style.backgroundColor = "#800080";
document.querySelector("#pixel2").style.backgroundColor = "#800080";
```

On distingue ce qui reste identique — les **invariants** — et ce qui change d’une ligne à l’autre — la **variante** :

| Partie de l’instruction | Ce qui reste identique ou peut changer |
|---|---|
| `document.querySelector(...)`, le `#` du sélecteur, `.style.backgroundColor`, l’affectation et la ponctuation | La structure technique reste identique. |
| `pixel1`, `pixel2`, …, `pixel9`, sauf `pixel5` | L’identifiant change selon la case du contour à peindre. |
| `#800080` | La couleur choisie reste identique pour toutes les cases : elle fait partie des invariants (pour cet exercice) |

L’opération signifie simplement **« peindre ce pixel avec la couleur choisie »**. Seul l’identifiant varie entre les instructions. La couleur reste dans l’opération commune.

### Inventer une écriture plus simple

On nomme cette opération `peindre`. La couleur étant fixée, on souhaite pouvoir exprimer « peindre pixel1 ». En JavaScript, cela se formule ainsi :

```js
peindre("pixel1");
```

Le navigateur ne fournit pas de fonction `peindre`. On choisit ce nom et on définit ici l’opération qu’il désigne.

On reprend la ligne technique en remplaçant uniquement l’identifiant par le nom `id`, puis on place cette instruction dans un bloc nommé `peindre`. La couleur choisie reste écrite dans le bloc, ici en violet :

```js
function peindre(id) {
  document.querySelector("#" + id).style.backgroundColor = "#800080";
}
```

On vient de définir une **fonction** : une opération nommée que le programme peut appeler plusieurs fois.

- `function` annonce la définition ; `peindre` est le nom choisi.
- `id` est le **paramètre** : il reçoit l’identifiant fourni à chaque appel. Dans le bloc, ce nom s’écrit sans guillemets pour utiliser la valeur reçue.
- Les accolades `{ }` délimitent le bloc d’instructions à exécuter lors d’un appel.
- `"#" + id` assemble le `#` et l’identifiant. Avec `"pixel1"`, on obtient le sélecteur `"#pixel1"` : l’identifiant fourni à `peindre` s’écrit donc **sans `#`**.

**Définir la fonction ne peint aucune case.** L’appel `peindre("pixel1");` exécute son bloc avec `id` qui vaut `"pixel1"`. Un autre appel peut fournir un autre identifiant ; la couleur appliquée reste celle écrite dans la fonction.

### Réécrire le contour avec `peindre`

**Préparation**

- `pixelator.js` : on place la définition de `peindre` en haut du fichier, puis on remplace chaque ancienne instruction de peinture par l’appel correspondant, **en conservant l’ordre des instructions du contour réalisé**.

Pour le contour violet commencé plus haut, le début du programme devient :

```js
function peindre(id) {
  document.querySelector("#" + id).style.backgroundColor = "#800080";
}

peindre("pixel1");
peindre("pixel2");
```

On complète la suite avec un appel à `peindre` pour chaque autre case du contour, en conservant l’ordre du programme réalisé. Chaque appel reçoit uniquement l’identifiant de la case, sans `#`. Le programme doit contenir huit appels au total, sans peindre `pixel5`, qui reste blanc.

On conserve la couleur choisie dans la définition de `peindre`. Pour changer cette couleur, une seule valeur serait à modifier dans la fonction. La mécanique technique et la couleur sont désormais écrites une seule fois ; les appels indiquent les cases à peindre. Chaque case demande encore un appel, mais l’opération commune se lit et se modifie à un seul endroit.

On enregistre et recharge `neuf-pixels.html` : **le contour doit rester identique à celui obtenu avec les instructions directes**, avec le centre blanc. Si une case ne se colore plus, on vérifie l’identifiant fourni dans l’appel, sans `#`, ainsi que la couleur écrite dans la définition de `peindre`.

### Conserver la séquence du contour

**Préparation**

- `pixelator.js` : on enregistre le programme du contour, avec la définition de `peindre` et les huit appels dans l’ordre des numéros, en sautant `pixel5`.
- `pixelator-contour.js` : on crée une copie de `pixelator.js` portant ce nom dans le même dossier.

Cette copie conserve le programme du contour avant la création d’un autre motif.

La page continue à charger `pixelator.js` ; la copie `pixelator-contour.js` n’est pas chargée. Pour la suite, on reprend bien **le fichier d’origine `pixelator.js`** dans l’éditeur.

## 6. Créer un deuxième motif avec `peindre`

On choisit un autre motif sur la grille de neuf cases. Les cases à peindre sont libres, y compris celle du centre ; le dessin doit être différent du contour. On note les cases choisies avant de modifier le programme.

Dans `pixelator.js`, on conserve la définition de `peindre`, avec sa couleur, et on remplace les appels du contour par ceux du nouveau motif. On écrit un appel par case choisie, en fournissant uniquement son identifiant. Les appels qui ne correspondent plus au dessin sont retirés.

On enregistre et recharge `neuf-pixels.html`. Seules les cases du nouveau motif doivent être peintes ; les autres retrouvent leur fond initial au rechargement. On compare le résultat aux cases prévues, puis on recharge encore une fois : le même dessin doit réapparaître.

Le deuxième motif a été écrit en réutilisant `peindre`, sans recopier la ligne technique pour chaque case. La séquence du contour reste disponible dans `pixelator-contour.js`.

### Conserver le deuxième motif

On choisit un nom pertinent qui décrit le motif. Ce nom remplace `NOMCHOISI` dans `pixelator-NOMCHOISI.js` : par exemple, un motif en diagonale peut être conservé dans `pixelator-diagonale.js`.

On crée dans le même dossier une copie complète de `pixelator.js` portant le nom choisi. Elle contient la définition de `peindre` et tous les appels du deuxième motif. La page continue à charger `pixelator.js` ; la copie conserve le dessin pour la suite.

## Vérification finale

- Les neuf pixels de `neuf-pixels.html` forment un carré de trois lignes et trois colonnes.
- Le premier motif peint les huit cases du contour et laisse le centre blanc, avant et après la réécriture avec `peindre`.
- `pixelator-contour.js` conserve la définition de `peindre` et les huit appels dans l’ordre `pixel1 → pixel2 → pixel3 → pixel4 → pixel6 → pixel7 → pixel8 → pixel9`.
- Le deuxième motif est différent du contour. Il est réalisé dans `pixelator.js` en changeant uniquement les appels à `peindre`, avec l’unique couleur retenue.
- Une copie complète du deuxième motif, avec la définition de `peindre` et ses appels, est enregistrée dans un fichier `pixelator-NOMCHOISI.js`, où `NOMCHOISI` est remplacé par un nom pertinent pour le dessin.
- Seules les cases choisies sont peintes et le même motif apparaît après un rechargement.
- On peut expliquer quelle case chaque instruction sélectionne et quelle propriété elle modifie.
- On distingue la définition de `peindre` de ses appels : l’identifiant est fourni à chaque appel, tandis que la couleur reste dans la définition.

La fonction `peindre` permet de réutiliser l’opération de peinture pour différents motifs. Dans la fiche Temps, le fichier fourni `pixelator-time.js` reprend les huit appels du contour avec les fonctions et le cadre de chargement nécessaires. On le télécharge et on change le `src` dans la page HTML pour commencer l’animation. L’ajout des attentes rendra les étapes visibles et permettra d’observer l’effet de l’ordre des instructions.

[Suite — Pixelator : animer un motif](./session_02-pixelator-time.md)

[Séance 2](../session_02.md)
