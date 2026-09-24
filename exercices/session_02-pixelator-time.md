# Pixelator — Temps : animer un motif

[Séance 2](../session_02.md) · [Fiche précédente — peindre un motif](./session_02-pixelator-sequence.md)

<a id="notre-mission"></a>

## Objectif

Un motif fixe est peint sur quatre pixels. On va maintenant faire circuler **une seule case colorée autour du carré**, avec l’unique couleur de peinture choisie. On construit ensemble cette rotation pendant **15 minutes**, puis on consacre **15 minutes à d’autres animations**. Une rotation fonctionnelle et une variante explorée constituent le parcours attendu pour cette fiche, avant de passer à la peinture au clic. Les agrandissements à huit puis seize pixels sont des **prolongements facultatifs**, réalisés après le parcours commun si le temps le permet.

On écrit une séquence d’instructions : **peindre → attendre → effacer → peindre la case suivante**. Elle s’exécute une seule fois, du haut vers le bas. On recharge la page pour la rejouer.

<a id="1-reprendre-nos-quatre-pixels"></a>

## 1. Reprendre les quatre pixels

On ouvre directement `quatre-pixels.html` dans le navigateur, par un double-clic sur le fichier, puis `pixelator.js` dans l’éditeur. Aucun serveur n’est nécessaire. Si nécessaire, on retrouve les fichiers de départ dans la [fiche Séquence](./session_02-pixelator-sequence.md#1-préparer-les-fichiers).

On vérifie que [pixelator-attente.js](./pixelator/pixelator-attente.js) se trouve dans le même dossier que le HTML, le CSS et `pixelator.js`. La page fournie charge cet outil d’attente avant le programme. On le conserve tel quel.

On garde la couleur choisie, puis **remplace le programme du motif fixe** par le squelette de l’étape suivante. Pour chaque essai, on enregistre le fichier, puis recharge la page.

## 2. Ensemble — construire une rotation · 15 minutes

### Prévoir les étapes

Les cases sont disposées ainsi dans le HTML :

| | Colonne de gauche | Colonne de droite |
|---|---|---|
| Première ligne | `pixel1` | `pixel2` |
| Deuxième ligne | `pixel3` | `pixel4` |

Pour tourner dans le sens des aiguilles d’une montre, on suit **`pixel1 → pixel2 → pixel4 → pixel3 → pixel1`**. L’ordre du parcours diffère de l’ordre des identifiants dans le HTML.

| Affichage | Case colorée | Moment prévu |
|---|---|---|
| Départ | `pixel1` | Au chargement, sans attente initiale |
| Après la première attente | `pixel2` | Environ 1 seconde après le départ |
| Après la deuxième attente | `pixel4` | Environ 2 secondes après le départ |
| Après la troisième attente | `pixel3` | Environ 3 secondes après le départ |
| Retour au départ | `pixel1` | Environ 4 secondes après le départ ; la séquence est terminée |

Chaque case reste visible pendant une seconde avant son effacement et la peinture de la suivante. Cette succession crée un déplacement apparent, sans déplacer les éléments HTML. À la fin, `pixel1` reste coloré jusqu’au prochain rechargement.

### Compléter le squelette fourni

On recopie ce squelette dans `pixelator.js`, puis remplace le violet par la couleur choisie. Le premier affichage et le passage de `pixel1` à `pixel2` sont déjà écrits. On complète les trois passages indiqués par des commentaires, **avant la dernière ligne `});`**.

```js
window.addEventListener("load", async function () {
  document.querySelector("#pixel1").style.backgroundColor = "#800080";

  await attendre(1000);
  document.querySelector("#pixel1").style.backgroundColor = "";
  document.querySelector("#pixel2").style.backgroundColor = "#800080";

  // On attend, efface pixel2, puis peint pixel4.

  // On attend, efface pixel4, puis peint pixel3.

  // On attend, efface pixel3, puis peint pixel1 pour terminer.
});
```

On garde la première et la dernière ligne telles quelles : ce cadre fourni démarre la séquence au chargement de la page et permet les attentes. Sa construction n’est pas étudiée pendant cette séance. On travaille uniquement sur les instructions placées à l’intérieur.

Pour chaque passage à compléter, on écrit trois instructions dans cet ordre :

1. On attend avec `await attendre(1000);`.
2. On efface la case actuellement colorée avec une instruction directe utilisant `document.querySelector(...)` et `.style.backgroundColor = "";`.
3. On peint la case suivante avec une instruction directe utilisant `document.querySelector(...)` et la couleur choisie.

### Lire la séquence du haut vers le bas

Avec `await attendre(1000);`, on laisse passer environ une seconde **avant de poursuivre à la ligne suivante**. On lit `1000` en millisecondes : 1 000 ms correspondent à une seconde. Le navigateur reste disponible pour afficher la case pendant cette attente ; la durée réelle peut être un peu plus longue.

On conserve les deux mots `await attendre` ensemble. Sans `await`, les instructions suivantes continueraient immédiatement : on n’obtiendrait plus les pauses prévues.

En attribuant `""` à `.style.backgroundColor`, on retire la peinture appliquée par JavaScript. On retrouve le fond blanc défini dans `pixelator-layout.css` ; cet effacement ne demande pas une deuxième couleur de peinture.

On place l’attente **avant l’effacement** pour garder la case visible. L’effacement et la peinture suivante se suivent, sans attente entre les deux. On lit ainsi le parcours directement dans l’ordre des instructions.

### Vérifier, puis changer la cadence

On enregistre le fichier, puis recharge la page. On suit un tour complet : `pixel1`, `pixel2`, `pixel4`, `pixel3`, puis `pixel1`. Une seule case reste colorée à chaque affichage. On attend encore quelques secondes après le retour : la séquence est terminée, `pixel1` reste coloré.

On recharge pour refaire un essai. On peut aussi recharger pendant le parcours : la nouvelle séquence repart de `pixel1`.

On remplace ensuite **les quatre durées `1000` par `500`**, enregistre et recharge. Chaque attente dure environ une demi-seconde ; on observe le même parcours, deux fois plus rapide. On revient à `1000` pour lire facilement la suite.

Si les couleurs s’accumulent, on vérifie que chaque passage efface la case précédente. Si toute la grille reste blanche pendant une pause, on vérifie que l’attente précède l’effacement. Si le parcours est presque instantané, on cherche un `await` manquant. Si la séquence ne démarre pas ou s’arrête trop tôt, on consulte la console et vérifie le nom du fichier `pixelator-attente.js`, les identifiants ciblés et les deux lignes du cadre fourni.

<a id="rotation-reference"></a>

<details>
<summary><strong>Retrouver la rotation de référence à quatre pixels</strong></summary>

Le programme ci-dessous est complété avec le violet d’exemple. On conserve la couleur choisie en remplaçant les cinq occurrences de `#800080` : on peint `pixel1` au départ et au retour.

```js
window.addEventListener("load", async function () {
  document.querySelector("#pixel1").style.backgroundColor = "#800080";

  await attendre(1000);
  document.querySelector("#pixel1").style.backgroundColor = "";
  document.querySelector("#pixel2").style.backgroundColor = "#800080";

  await attendre(1000);
  document.querySelector("#pixel2").style.backgroundColor = "";
  document.querySelector("#pixel4").style.backgroundColor = "#800080";

  await attendre(1000);
  document.querySelector("#pixel4").style.backgroundColor = "";
  document.querySelector("#pixel3").style.backgroundColor = "#800080";

  await attendre(1000);
  document.querySelector("#pixel3").style.backgroundColor = "";
  document.querySelector("#pixel1").style.backgroundColor = "#800080";
});
```

</details>

## 3. Explorer d’autres animations · 15 minutes

On choisit une variante. Avant de modifier le code, on écrit la succession complète des affichages, jusqu’au retour au motif de départ.

| Variante | Succession des cases colorées | Nombre d’attentes |
|---|---|---|
| Sens inverse | `pixel1 → pixel3 → pixel4 → pixel2 → pixel1` | 4 |
| Aller-retour sur le parcours | `pixel1 → pixel2 → pixel4 → pixel3 → pixel4 → pixel2 → pixel1` | 6 |
| Alternance des diagonales | `pixel1` et `pixel4`, puis `pixel2` et `pixel3`, puis `pixel1` et `pixel4` | 2 |

On remplace les instructions à l’intérieur du cadre fourni par la nouvelle séquence. Pour l’aller-retour, on écrit davantage de passages. Pour les diagonales, on peint les deux premières cases sans attente entre elles ; après chaque attente, on efface les deux cases précédentes et peint les deux suivantes.

On garde une attente avant chaque changement d’affichage, avec la même couleur pour toutes les peintures. Dans la variante des diagonales, on voit deux cases colorées ensemble.

On enregistre et recharge, puis compare la prévision au parcours observé et au motif final. On vérifie que ce motif reste immobile une fois la séquence terminée. On recharge pour rejouer, ou essaie une autre cadence ou une autre variante.

<a id="vérification-finale"></a>

## Vérification du parcours attendu à quatre pixels

La vérification porte sur la rotation guidée, puis sur la variante explorée :

- Au chargement de la rotation, `pixel1` est coloré sans attente initiale.
- La rotation suit `pixel1 → pixel2 → pixel4 → pixel3 → pixel1`, avec une seule case colorée à chaque affichage ; les autres retrouvent leur fond initial.
- Les quatre attentes précèdent les changements. Après la quatrième, `pixel1` reste coloré et la séquence est terminée.
- Un rechargement, pendant ou après l’animation, relance le parcours au début.
- Des durées d’attente différentes changent la cadence tout en conservant le parcours.
- Une variante a été prévue, réalisée et comparée à la succession attendue ; son état final reste immobile. L’alternance des diagonales affiche deux cases colorées ensemble.
- On peut expliquer pourquoi on attend avant d’effacer et comment l’ordre des instructions détermine l’animation.

**La partie animation est terminée.** On poursuit le parcours commun avec [Pixelator — peindre au clic](./session_02-pixelator-clic.md), pour choisir la case et le moment du changement par une action. Le créneau de consolidation de **20 minutes** vient après cette nouvelle étape. Les prolongements suivants sont réservés aux parcours communs terminés et vérifiés en avance.

Le groupe **attendre, effacer, peindre** revient déjà plusieurs fois sur quatre pixels. Cette répétition prépare l’étude des boucles dans la suite du cours.

## 4. Prolongement facultatif : huit pixels · 25 minutes

On reprend la [rotation de référence à quatre pixels](#rotation-reference) dans `pixelator.js`, avec la couleur choisie et des attentes de 1 000 ms. On remplace la variante par cette rotation avant de l’agrandir.

On récupère [huit-pixels.html](./pixelator/huit-pixels.html) et le place à côté de `quatre-pixels.html`, de `pixelator-layout.css`, de `pixelator-attente.js` et de `pixelator.js`. On ouvre directement `huit-pixels.html` pour les essais. Cette page charge les mêmes fichiers et présente deux colonnes de quatre cases.

Avant les modifications, on retrouve la petite rotation sur les quatre premières cases. On va étendre le parcours au bord du rectangle : **`pixel1 → pixel2 → pixel4 → pixel6 → pixel8 → pixel7 → pixel5 → pixel3 → pixel1`**.

| Affichage | Case à peindre |
|---|---|
| Départ | `pixel1` |
| Après l’attente 1 | `pixel2` |
| Après l’attente 2 | `pixel4` |
| Après l’attente 3 | `pixel6` |
| Après l’attente 4 | `pixel8` |
| Après l’attente 5 | `pixel7` |
| Après l’attente 6 | `pixel5` |
| Après l’attente 7 | `pixel3` |
| Après l’attente 8 | `pixel1` — fin |

On conserve le départ et les deux premiers passages, jusqu’à `pixel4`. On remplace ensuite l’ancienne fin par les passages vers `pixel6`, `pixel8`, `pixel7`, `pixel5`, `pixel3`, puis `pixel1`. Pour chacun, on écrit **attendre, effacer la case précédente, peindre la suivante**. Tous ces passages restent avant la dernière ligne `});`.

On enregistre et recharge. On descend par la colonne de droite, puis remonte par celle de gauche, avec une seule case colorée à chaque affichage. Après les huit attentes, on retrouve `pixel1`, qui reste coloré. On recharge pour refaire le parcours.

On poursuit les essais sur `huit-pixels.html`. Le programme cible maintenant huit identifiants ; les quatre nouveaux n’existent pas dans `quatre-pixels.html`.

### Vérification du prolongement à huit pixels

- `pixel1` est coloré dès le chargement, puis une seule case reste colorée à chaque affichage du parcours prévu.
- Après **huit attentes**, le parcours revient à `pixel1`, qui reste coloré sans nouveau déplacement.
- Un rechargement, pendant ou après l’animation, relance le parcours au début.

## 5. Prolongement facultatif : seize pixels · 20 minutes

On récupère [seize-pixels.html](./pixelator/seize-pixels.html) et le place dans le même dossier. On ouvre directement cette page pour la suite. Elle utilise les mêmes fichiers CSS et JavaScript, conserve les deux colonnes et ajoute quatre lignes : les nouvelles cases portent les identifiants `pixel9` à `pixel16`.

On prolonge le parcours jusqu’au bas de cette grille, puis remonte par la gauche : **`pixel1 → pixel2 → pixel4 → pixel6 → pixel8 → pixel10 → pixel12 → pixel14 → pixel16 → pixel15 → pixel13 → pixel11 → pixel9 → pixel7 → pixel5 → pixel3 → pixel1`**.

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

On conserve le début jusqu’à `pixel8`, puis réécrit la suite conformément au tableau. On doit changer l’ancien passage de `pixel8` à `pixel7` pour descendre vers `pixel10` : ajouter des instructions après l’ancien retour à `pixel1` ne suffit pas à prolonger correctement le parcours.

Chaque passage contient le même groupe de trois instructions : une attente, un effacement, une peinture. On garde le cadre fourni autour de toute la séquence. On enregistre et recharge `seize-pixels.html`, puis suit le tour complet jusqu’à son arrêt sur `pixel1`, après environ seize secondes.

On recharge pour refaire le parcours. On utilise désormais cette page, qui contient tous les identifiants ciblés par le programme.

### Vérification du prolongement à seize pixels

- `pixel1` est coloré dès le chargement, puis une seule case reste colorée à chaque affichage du parcours prévu.
- Après **seize attentes**, le parcours revient à `pixel1`, qui reste coloré sans nouveau déplacement.
- Un rechargement, pendant ou après l’animation, relance le parcours au début.

L’animation s’est agrandie par ajout d’instructions dans l’ordre du parcours. Le même groupe — attendre, effacer, peindre — revient plusieurs fois : cette répétition donne une raison concrète d’aborder les boucles dans la suite du cours.
