# Pixelator — Séquence : peindre un motif

[Séance 2](../session_02.md)

**Durée : 30 minutes, préparation des fichiers et vérifications comprises.**

<a id="notre-mission"></a>

## Objectif

On dessine d’abord un motif sur quatre pixels, puis on passe à une grille de neuf pixels pour peindre le contour du carré. On choisit **une seule couleur de peinture** pour tous les motifs. Chaque dessin doit apparaître dès le chargement de la page.

On commence par écrire les instructions techniques, puis on construit une fonction nommée `peindre` pour réutiliser cette opération avec une écriture plus simple.

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
- `.style.backgroundColor` désigne la couleur de fond dans le style appliqué directement à l’élément (*style inline*).
- `= "#800080"` lui attribue la couleur choisie, écrite entre guillemets.
- `;` termine l’instruction.

On adapte l’identifiant à chaque case du motif et on remplace le violet par la couleur choisie. À cette étape, chaque ligne utilise directement `document.querySelector(...)` et `.style.backgroundColor`.

On enregistre `pixelator.js`, puis on recharge la page. Les instructions s’exécutent au chargement : le motif apparaît automatiquement.

On vérifie que les cases choisies sont peintes avec la même couleur et que les autres gardent leur fond initial. Après un nouveau rechargement, le même motif doit apparaître.

Si une case ne se colore pas, on vérifie le nom et l’emplacement de `pixelator.js`, puis l’identifiant dans l’instruction : le `#` doit être présent et le nom doit correspondre exactement à celui du HTML.

## 4. Passer à neuf pixels : peindre le contour

On agrandit maintenant la grille en gardant sa forme carrée. On récupère [neuf-pixels.html](./pixelator/neuf-pixels.html) et le place dans le même dossier. On récupère aussi la version actualisée de [pixelator-layout.css](./pixelator/pixelator-layout.css), qui prévoit les trois colonnes de cette nouvelle page, en remplaçant le fichier CSS du dossier.

On ouvre directement `neuf-pixels.html` dans le navigateur. Cette page charge les mêmes fichiers JavaScript, dont `pixelator.js`. Ses neuf cases se répartissent ainsi :

| | Colonne de gauche | Colonne du milieu | Colonne de droite |
|---|---|---|---|
| Première ligne | `pixel1` | `pixel2` | `pixel3` |
| Deuxième ligne | `pixel4` | `pixel5` | `pixel6` |
| Troisième ligne | `pixel7` | `pixel8` | `pixel9` |

Le premier motif sur cette grille est **le contour du carré : les huit cases du bord sont peintes, la case centrale `pixel5` reste blanche**.

Dans `pixelator.js`, on remplace les instructions du petit motif par **huit instructions directes**, une pour chaque case du contour, avec la couleur déjà choisie. On choisit librement l’ordre de ces instructions.

On enregistre et recharge `neuf-pixels.html`. Les huit cases du contour doivent être peintes avec la même couleur ; le centre doit garder son fond blanc. On compare les identifiants écrits avec les cases attendues pour retrouver une éventuelle case oubliée ou peinte en trop.

Les essais suivants se font sur `neuf-pixels.html` : cette page contient tous les identifiants du nouveau programme. Les cases `pixel5` à `pixel9` n’existent pas dans `quatre-pixels.html`.

## 5. Apprendre à JavaScript à peindre

### Constater ce qui devient difficile

Le contour apparaît. Il a fallu écrire huit fois la même opération technique, en vérifiant chaque identifiant. Les longues instructions se ressemblent : il faut les relire pour retrouver les cases du dessin. Si la façon de peindre devait changer, la même modification serait à reporter dans chaque ligne.

On imagine maintenant un motif avec seize ou trente-deux cases à peindre. Il faudrait recopier autant de fois cette mécanique. L’écriture devient lourde à produire, à lire et à modifier, alors que l’action reste simple : peindre une case.

### Comparer les instructions

Cette écriture peut devenir plus simple. Comme avec [`DOC + TYPE + HTML` en première séance](./session_01-exploration.md#du-html-au-document), on examine les éléments pour retrouver le sens de l’ensemble.

On compare les huit lignes du contour réalisé. Voici un exemple en violet ; l’ordre choisi peut être différent :

```js
document.querySelector("#pixel1").style.backgroundColor = "#800080";
document.querySelector("#pixel2").style.backgroundColor = "#800080";
document.querySelector("#pixel3").style.backgroundColor = "#800080";
document.querySelector("#pixel4").style.backgroundColor = "#800080";
document.querySelector("#pixel6").style.backgroundColor = "#800080";
document.querySelector("#pixel7").style.backgroundColor = "#800080";
document.querySelector("#pixel8").style.backgroundColor = "#800080";
document.querySelector("#pixel9").style.backgroundColor = "#800080";
```

On distingue ce qui reste identique — les **invariants** — et les informations qui peuvent changer — les **variantes** :

| Partie de l’instruction | Ce qui reste identique ou peut changer |
|---|---|
| `document.querySelector(...)`, le `#` du sélecteur, `.style.backgroundColor`, l’affectation et la ponctuation | La structure technique reste identique. |
| `pixel1`, `pixel2`, …, `pixel9`, sauf `pixel5` | L’identifiant change selon la case du contour à peindre. |
| `#800080` | La couleur dépend du choix de peinture. Elle reste identique entre les lignes de ce motif, mais un autre choix donnerait une autre valeur. |

L’opération signifie simplement **« peindre ce pixel avec cette couleur »**. Deux informations suffisent pour préciser l’action : l’identifiant du pixel et la couleur.

### Inventer une écriture plus simple

On nomme cette opération `peindre`. On souhaite pouvoir exprimer « peindre pixel1 en violet ». En JavaScript, cela se formule ainsi :

```js
peindre("pixel1", "#800080");
```

Le navigateur ne fournit pas de fonction `peindre`. On choisit ce nom et on définit ici l’opération qu’il désigne.

On reprend la ligne technique en remplaçant les deux informations par les noms `id` et `couleur`, puis on place cette instruction dans un bloc nommé `peindre` :

```js
function peindre(id, couleur) {
  document.querySelector("#" + id).style.backgroundColor = couleur;
}
```

On vient de définir une **fonction** : une opération nommée que le programme peut appeler plusieurs fois.

- `function` annonce la définition ; `peindre` est le nom choisi.
- `id` et `couleur` sont les deux **paramètres** : ils reçoivent, dans cet ordre, les valeurs fournies à chaque appel. Dans le bloc, ces noms s’écrivent sans guillemets pour utiliser les valeurs reçues.
- Les accolades `{ }` délimitent le bloc d’instructions à exécuter lors d’un appel.
- `"#" + id` assemble le `#` et l’identifiant. Avec `"pixel1"`, on obtient le sélecteur `"#pixel1"` : l’identifiant fourni à `peindre` s’écrit donc **sans `#`**.

**Définir la fonction ne peint aucune case.** L’appel `peindre("pixel1", "#800080");` exécute son bloc avec `id` qui vaut `"pixel1"` et `couleur` qui vaut `"#800080"`. Un autre appel peut fournir un autre identifiant ou une autre couleur.

### Réécrire le contour avec `peindre`

Dans `pixelator.js`, on place la définition de `peindre` en haut du fichier, puis on remplace chaque ancienne instruction de peinture par l’appel correspondant, **en conservant l’ordre des instructions du contour réalisé**. Pour le contour violet présenté plus haut, le programme complet devient :

```js
function peindre(id, couleur) {
  document.querySelector("#" + id).style.backgroundColor = couleur;
}

peindre("pixel1", "#800080");
peindre("pixel2", "#800080");
peindre("pixel3", "#800080");
peindre("pixel4", "#800080");
peindre("pixel6", "#800080");
peindre("pixel7", "#800080");
peindre("pixel8", "#800080");
peindre("pixel9", "#800080");
```

On conserve la couleur choisie pour tous les appels. La mécanique technique est désormais écrite une seule fois, dans la fonction ; les appels expriment les actions du dessin. Chaque case à peindre demande encore un appel, mais l’opération technique se lit et se modifie à un seul endroit.

On enregistre et recharge `neuf-pixels.html` : **le contour doit rester identique à celui obtenu avec les instructions directes**, avec le centre blanc. Si une case ne se colore plus, on vérifie les deux valeurs de l’appel, leur ordre et l’absence de `#` devant l’identifiant.

### Conserver la séquence du contour

On enregistre `pixelator.js`, puis on en fait une copie nommée `pixelator-contour.js` dans le même dossier. Cette copie contient la définition de `peindre` et les huit appels, dans l’ordre choisi. On la garde pour reprendre cette séquence lors de l’étude du temps.

La page continue à charger `pixelator.js` ; la copie `pixelator-contour.js` n’est pas chargée. Pour la suite, on reprend bien **le fichier d’origine `pixelator.js`** dans l’éditeur.

## 6. Créer un deuxième motif avec `peindre`

On choisit un autre motif sur la grille de neuf cases. Les cases à peindre sont libres, y compris celle du centre ; le dessin doit être différent du contour. On note les cases choisies avant de modifier le programme.

Dans `pixelator.js`, on conserve la définition de `peindre` et on remplace les appels du contour par ceux du nouveau motif. On écrit un appel par case choisie, avec la même couleur de peinture. Les appels qui ne correspondent plus au dessin sont retirés.

On enregistre et recharge `neuf-pixels.html`. Seules les cases du nouveau motif doivent être peintes ; les autres retrouvent leur fond initial au rechargement. On compare le résultat aux cases prévues, puis on recharge encore une fois : le même dessin doit réapparaître.

Le deuxième motif a été écrit en réutilisant `peindre`, sans recopier la ligne technique pour chaque case. La séquence du contour reste disponible dans `pixelator-contour.js`.

## Vérification finale

- Les neuf pixels de `neuf-pixels.html` forment un carré de trois lignes et trois colonnes.
- Le premier motif peint les huit cases du contour et laisse le centre blanc, avant et après la réécriture avec `peindre`.
- `pixelator-contour.js` conserve la définition de `peindre` et les huit appels dans l’ordre choisi.
- Le deuxième motif est différent du contour. Il est réalisé dans `pixelator.js` en changeant uniquement les appels à `peindre`, avec l’unique couleur retenue.
- Seules les cases choisies sont peintes et le même motif apparaît après un rechargement.
- On peut expliquer quelle case chaque instruction sélectionne et quelle propriété elle modifie.
- On distingue la définition de `peindre` de ses appels et on peut expliquer le rôle des deux valeurs fournies.

La fonction `peindre` permet de réutiliser l’opération de peinture pour différents motifs. La séquence du contour est conservée pour la suite : en ajoutant des attentes, on pourra observer ses étapes et discuter l’importance de l’ordre des instructions pour créer un effet successif.

[Suite — Pixelator : animer un motif](./session_02-pixelator-time.md)
