# Pixelator — Temps : animer un motif

## 1. Charger le fichier de départ

<a id="notre-mission"></a>

<a id="1-reprendre-nos-quatre-pixels"></a>
<a id="contour-progressif"></a>

**Préparation**

1. On télécharge [pixelator-time.js](./pixelator/pixelator-time.js) et on le place dans le dossier `pixelator`, à côté de `neuf-pixels.html`.
2. Dans `neuf-pixels.html`, on remplace `src="pixelator.js"` par `src="pixelator-time.js"`, puis on enregistre le HTML.

La fin de `neuf-pixels.html` devient :

```html
  <script src="pixelator-time.js"></script>
</body>
</html>
```

Le fichier fourni contient les fonctions `peindre` et `attendre`, ainsi que le cadre de chargement avec les huit appels du contour, **dans l’ordre des numéros : `pixel1 → pixel2 → pixel3 → pixel4 → pixel6 → pixel7 → pixel8 → pixel9`**. Aucune attente n’est encore insérée entre les appels. Si la couleur choisie diffère du violet fourni, on remplace l’unique valeur `#800080` dans la définition de `peindre`, puis on enregistre `pixelator-time.js`.

On ouvre directement **`neuf-pixels.html`** dans le navigateur. Aucun serveur n’est nécessaire. Le contour apparaît immédiatement avec son centre blanc : ses étapes de construction ne sont pas perceptibles. La [page de neuf pixels](./pixelator/neuf-pixels.html) et la [feuille de style](./pixelator/pixelator-layout.css) restent disponibles ; si on récupère à nouveau la page HTML, on y effectue le même changement de `src`.

## 2. Voir les étapes avec une attente d’une seconde

### Ajouter des attentes entre les appels

Dans `pixelator-time.js`, les huit appels à `peindre` sont déjà placés entre la ligne `window.addEventListener("load", async function () {` et la dernière ligne `});`.

La première ligne signifie ici : **« Quand la page a fini de se charger, on exécute les instructions placées à l’intérieur. »** Le mot `async` permet d’y utiliser `await` pour marquer des pauses entre les peintures. Chaque rechargement de la page relance la séquence depuis le début.

Pour construire l’animation, on modifie les instructions à l’intérieur de ce cadre. On conserve sa première et sa dernière ligne telles quelles. Les définitions de `peindre` et d’`attendre` restent au-dessus, en dehors du cadre.

On insère `await attendre(1000);` **entre chaque paire d’appels successifs** : cela fait sept attentes, sans attente avant le premier appel ni après le dernier.

Le début de la séquence à l’intérieur du cadre devient :

```js
  peindre("pixel1");
  await attendre(1000);
  peindre("pixel2");
```

On ajoute les autres attentes sur le même modèle, en conservant la couleur choisie et l’ordre des huit appels du contour.

Avec `await attendre(1000);`, on laisse passer environ une seconde **avant de poursuivre à la ligne suivante**. `1000` représente une durée en millisecondes : 1 000 ms correspondent à une seconde. Le navigateur reste disponible pour afficher le dessin pendant l’attente ; la durée réelle peut être un peu plus longue. On conserve `await` devant chaque appel à `attendre` pour obtenir les pauses prévues.

### Observer le même contour, étape par étape

Avant de recharger, on note l’ordre d’apparition prévu en lisant les huit appels. On enregistre et recharge : `pixel1` apparaît sans attente initiale, puis une case s’ajoute après chaque pause, dans l’ordre `pixel2`, `pixel3`, `pixel4`, `pixel6`, `pixel7`, `pixel8`, `pixel9`. Après environ sept secondes, les huit cases du bord sont peintes et `pixel5` est toujours blanc.

Les peintures s’accumulent : une case peinte le reste. Le dessin final est identique au contour fixe, mais les attentes rendent maintenant sa construction visible. La séquence s’exécute une seule fois ; on recharge la page pour la rejouer.

## 3. Accélérer l’apparition du contour

Une seconde entre chaque peinture laisse bien voir les étapes, mais l’apparition du contour peut sembler lente. On cherche une cadence plus vive.

Dans `pixelator-time.js`, on remplace **les sept valeurs `1000` par `500`** dans les appels à `attendre`. Chaque attente dure désormais environ une demi-seconde. Les appels à `peindre`, leur ordre et la couleur restent identiques.

On enregistre et recharge. Le contour apparaît dans le même ordre, deux fois plus vite : la dernière case se colore après environ trois secondes et demie. On compare les deux cadences. **La durée des attentes change la vitesse d’apparition, sans changer le parcours.** On conserve `500` pour la suite.

## 4. Les mêmes instructions, une autre intention

La cadence est plus vive. On cherche maintenant un parcours visuel continu : faire apparaître les cases voisines l’une après l’autre en suivant le bord du carré.

### Prévoir un parcours autour du carré

Les cases sont disposées ainsi dans le HTML :

| | Colonne de gauche | Colonne du milieu | Colonne de droite |
|---|---|---|---|
| Première ligne | `pixel1` | `pixel2` | `pixel3` |
| Deuxième ligne | `pixel4` | `pixel5` | `pixel6` |
| Troisième ligne | `pixel7` | `pixel8` | `pixel9` |

Dans l’ordre des numéros, après `pixel3`, la peinture passe à `pixel4`, de l’autre côté de la grille. Pour suivre le bord dans le sens des aiguilles d’une montre, la case suivante serait `pixel6`.

Avant de modifier le programme, on repère les huit cases du bord dans ce nouvel ordre : **`pixel1 → pixel2 → pixel3 → pixel6 → pixel9 → pixel8 → pixel7 → pixel4`**. Le parcours commence en haut à gauche et se termine au milieu du bord gauche. Le centre reste blanc.

### Réorganiser les lignes existantes

Dans le cadre de `pixelator-time.js`, on **déplace les lignes de peinture existantes** pour suivre ce parcours, sans modifier leur contenu. Les sept lignes `await attendre(500);` restent intercalées entre les huit appels à `peindre`.

Chaque case du contour est toujours peinte une seule fois. Aucun appel n’est ajouté ou retiré ; aucune case n’est effacée. La définition de `peindre`, le cadre et la couleur restent identiques.

On enregistre et recharge, puis on compare le parcours observé à la prévision. Les peintures s’accumulent désormais en suivant le bord du carré.

### Comparer les deux intentions

| Intention | Ordre des cases peintes | Résultat final |
|---|---|---|
| Suivre les numéros | `1 → 2 → 3 → 4 → 6 → 7 → 8 → 9` | Les huit cases du contour sont peintes. |
| Suivre le bord du carré | `1 → 2 → 3 → 6 → 9 → 8 → 7 → 4` | Les huit mêmes cases sont peintes. |

Les deux versions contiennent **exactement les mêmes lignes de code**, avec les mêmes couleurs et les mêmes attentes. Seul l’ordre des lignes de peinture change. Le contour final et la cadence restent identiques ; le comportement observé pendant sa construction est différent.

Dans cet exemple, l’apparition immédiate ne permettait pas de distinguer les étapes. Les attentes rendent leur ordre observable. **L’intention guide la séquence : les mêmes actions, placées dans un autre ordre, produisent un autre parcours visible.**

<a id="rotation-guidee"></a>

## 5. Faire circuler une seule case colorée

Le contour se construit maintenant en suivant son bord. On ajoute un nouveau comportement : chaque case s’efface avant la peinture de la suivante. Une seule case reste ainsi colorée à la fois.

On conserve le parcours et les attentes de 500 ms, puis on ajoute un dernier passage pour revenir au départ : **`pixel1 → pixel2 → pixel3 → pixel6 → pixel9 → pixel8 → pixel7 → pixel4 → pixel1`**. Le centre reste blanc.

### Construire la fonction d’effacement

La fonction `peindre(id)` applique toujours la couleur choisie. Pour retirer cette peinture, on construit une deuxième opération, `effacer(id)`, qui reçoit elle aussi l’identifiant de la case.

Dans `pixelator-time.js`, on ajoute cette nouvelle définition au-dessus du cadre de chargement, à côté de `peindre` et d’`attendre`. On reprend la structure de `peindre`, avec le même paramètre `id` et la même sélection de case. On nomme la nouvelle fonction `effacer` et on remplace la couleur par une chaîne vide. L’instruction à l’intérieur devient :

```js
document.querySelector("#" + id).style.backgroundColor = "";
```

Attribuer `""` à `.style.backgroundColor` retire la peinture appliquée par JavaScript. On retrouve le fond blanc défini dans `pixelator-layout.css`. L’appel `effacer("pixel1");` efface ainsi `pixel1`, tandis que `peindre("pixel1");` lui applique la couleur conservée dans `peindre`.

### Ajouter les effacements dans la séquence

Les définitions de `peindre`, d’`effacer` et d’`attendre` restent au-dessus du cadre. On ajoute les appels à `effacer` à l’intérieur. Le début du cadre devient, avec le premier affichage et le passage de `pixel1` à `pixel2` :

```js
window.addEventListener("load", async function () {
  peindre("pixel1");

  await attendre(500);
  effacer("pixel1");
  peindre("pixel2");

  // On complète les passages suivants, jusqu’au retour à pixel1.
});
```

Cet extrait montre seulement le début. On conserve la couleur choisie et on complète les sept passages suivants **avant la dernière ligne `});`**, en suivant le parcours prévu.

Chaque passage contient trois instructions dans cet ordre :

1. On attend avec `await attendre(500);`.
2. On efface la case actuellement colorée avec `effacer` : par exemple, `effacer("pixel2");` avant de passer à `pixel3`. L’identifiant reste écrit sans `#`.
3. On peint la case suivante avec `peindre`, en indiquant son identifiant. La couleur reste celle fixée dans la fonction.

Pour les six passages suivants, les attentes et les peintures existent déjà : on insère seulement les effacements. Après la peinture de `pixel4`, on ajoute le dernier passage complet : attendre, effacer `pixel4`, puis peindre `pixel1`. La rotation contient ainsi huit attentes au total. Aucun appel de peinture ne reste en dehors du cadre.

### Lire la séquence du haut vers le bas

On lit **peindre → attendre → effacer → peindre la case suivante**. Sans `await`, les instructions suivantes continueraient immédiatement : on n’obtiendrait plus les pauses prévues.

L’attente se trouve **avant l’effacement** pour garder la case visible pendant une demi-seconde. L’effacement et la peinture suivante se suivent, sans attente entre les deux. Cette succession crée un déplacement apparent, sans déplacer les éléments HTML.

### Vérifier la rotation

On enregistre le fichier, puis recharge `neuf-pixels.html`. On suit un tour complet : `pixel1`, `pixel2`, `pixel3`, `pixel6`, `pixel9`, `pixel8`, `pixel7`, `pixel4`, puis `pixel1`. Une seule case reste colorée à chaque affichage et le centre reste blanc. Après environ quatre secondes, le parcours revient à `pixel1`. On attend encore quelques secondes : la séquence est terminée, `pixel1` reste coloré.

On recharge pour refaire un essai. On peut aussi recharger pendant le parcours : la nouvelle séquence repart de `pixel1`.

Si les couleurs s’accumulent pendant la rotation, on vérifie que chaque passage appelle `effacer` pour la case précédente et qu’aucun appel du contour n’a été dupliqué. Si toute la grille reste blanche pendant une pause, on vérifie que l’attente précède l’effacement. Si le parcours est presque instantané, on cherche un `await` manquant. Si la séquence ne démarre pas ou s’arrête trop tôt, on consulte la console et vérifie le chargement de `pixelator-time.js`, la présence des définitions de `peindre`, d’`effacer` et d’`attendre`, les identifiants sans `#` dans les appels et les deux lignes du cadre fourni. Les essais se font sur `neuf-pixels.html`, qui contient toutes les cases ciblées.

<a id="rotation-reference"></a>

<details>
<summary><strong>Aide — retrouver la rotation de référence sur neuf pixels</strong></summary>

On reprend dans `pixelator-time.js` la rotation construite à l’[étape 5](#rotation-guidee). Pour la reconstruire après une expérience :

1. On conserve les définitions de `peindre`, d’`effacer` et d’`attendre` et le cadre qui permet les attentes, puis on remplace la séquence à l’intérieur du cadre. Si on repart du fichier téléchargé, on reconstruit d’abord `effacer` comme à l’étape 5.
2. On peint `pixel1` au départ, sans attente initiale, avec la couleur choisie.
3. On suit le parcours `pixel1 → pixel2 → pixel3 → pixel6 → pixel9 → pixel8 → pixel7 → pixel4 → pixel1`.
4. Pour chacun des huit passages, on écrit une attente de 500 ms, un appel à `effacer` pour la case précédente, puis un appel à `peindre` pour la suivante. Ces deux appels reçoivent chacun l’identifiant de la case concernée.
5. On s’arrête après la dernière peinture de `pixel1`, sans attente supplémentaire.

Le premier passage est illustré à l’étape 5. Le programme terminé contient neuf appels à `peindre`, huit appels à `effacer` et huit attentes. On enregistre, puis on recharge `neuf-pixels.html` : le tour se termine après environ quatre secondes, avec seulement `pixel1` coloré.

</details>

<a id="vérification-finale"></a>

## Vérification du parcours attendu sur neuf pixels

La vérification distingue les changements de cadence, d’ordre et de comportement :

- Le fichier de départ `pixelator-time.js` peint immédiatement les huit cases du contour, avec le centre blanc, avant l’ajout des attentes.
- Avec sept attentes de 1 000 ms, le contour apparaît dans l’ordre `pixel1 → pixel2 → pixel3 → pixel4 → pixel6 → pixel7 → pixel8 → pixel9`, en environ sept secondes.
- Avec sept attentes de 500 ms, le même parcours dure environ trois secondes et demie. Seule la cadence change.
- Après réorganisation, les huit mêmes appels suivent `pixel1 → pixel2 → pixel3 → pixel6 → pixel9 → pixel8 → pixel7 → pixel4`, toujours avec sept attentes de 500 ms. Les peintures s’accumulent et le contour final reste identique.
- On peut expliquer les deux intentions et montrer quelles lignes ont changé de place, sans changer leur contenu.
- Au chargement de la rotation, `pixel1` est coloré sans attente initiale.
- La rotation suit `pixel1 → pixel2 → pixel3 → pixel6 → pixel9 → pixel8 → pixel7 → pixel4 → pixel1`, avec une seule case colorée à chaque affichage. Les autres retrouvent leur fond initial ; `pixel5` reste blanc.
- Les huit attentes de 500 ms précèdent les effacements. Après la huitième, soit environ quatre secondes après le départ, `pixel1` reste coloré et la séquence est terminée.
- Un rechargement, pendant ou après l’animation, relance le parcours au début.
- On peut expliquer pourquoi on attend avant d’effacer et comment l’ordre des instructions détermine l’animation.

Les fonctions `peindre` et `effacer` nomment les deux opérations utilisées dans chaque passage. Le groupe **attendre, effacer, peindre** revient plusieurs fois : ces appels répétés préparent l’étude des boucles dans la suite du cours.

**La partie animation est terminée.** On poursuit avec [Pixelator — peindre au clic](./session_02-pixelator-clic.md), pour choisir la case et le moment du changement par une action.

[Séance 2](../session_02.md) · [Fiche précédente — peindre un motif](./session_02-pixelator-sequence.md)
