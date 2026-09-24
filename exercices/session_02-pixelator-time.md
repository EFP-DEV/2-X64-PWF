# Pixelator — Temps : animer un motif

[Séance 2](../session_02.md) · [Fiche précédente — peindre un motif](./session_02-pixelator-sequence.md)

<a id="notre-mission"></a>

## Objectif

La fiche Séquence a permis de peindre un contour sur neuf pixels avec la fonction `peindre`, puis de créer un deuxième motif. On reprend maintenant le contour conservé dans `pixelator-contour.js` pour observer ses étapes. On fait ensuite circuler **une seule case colorée autour du carré**, avec l’unique couleur de peinture choisie. Le centre reste blanc.

Le contour progressif et une rotation fonctionnelle constituent le parcours attendu, avant de passer à la peinture au clic.

Les appels à `peindre` restent les actions du dessin. On ajoute des attentes entre ces actions : la séquence s’exécute une seule fois, du haut vers le bas. On recharge la page pour la rejouer.

<a id="1-reprendre-nos-quatre-pixels"></a>
<a id="contour-progressif"></a>

## 1. Faire apparaître le contour

**Préparation**

- `pixelator-contour.js` : on ouvre la copie du contour dans l’éditeur, pour retrouver la définition de `peindre` et les huit appels, **dans l’ordre conservé**.
- `pixelator.js` : on ouvre le programme dans l’éditeur et on remplace son contenu par celui de `pixelator-contour.js`, puis on l’enregistre.

La copie `pixelator-contour.js` reste telle quelle ; la page continue à charger uniquement `pixelator.js`.

On ouvre directement **`neuf-pixels.html`** dans le navigateur. Aucun serveur n’est nécessaire. Le contour réapparaît avec son centre blanc. Les fichiers de départ restent disponibles dans la [fiche Séquence](./session_02-pixelator-sequence.md#1-préparer-les-fichiers), ainsi que la [page de neuf pixels](./pixelator/neuf-pixels.html).

### Préparer l’outil d’attente

**Préparation**

- [pixelator-attente.js](./pixelator/pixelator-attente.js) : on récupère l’outil qui fournit la fonction `attendre` et on le place dans le dossier `pixelator`. On conserve ce fichier tel quel.
- `neuf-pixels.html` : on ajoute le chargement de `pixelator-attente.js` juste avant celui de `pixelator.js`, puis on enregistre le HTML.

La fin de `neuf-pixels.html` devient :

```html
  <script src="pixelator-attente.js"></script>
  <script src="pixelator.js"></script>
</body>
</html>
```

L’outil d’attente est ainsi disponible avant l’exécution du programme. La fonction `attendre` permettra d’ajouter des pauses entre les actions.

### Ajouter des attentes entre les appels

**Préparation**

- `pixelator.js` : on garde la définition de `peindre` en haut du fichier et on ajoute le cadre fourni ci-dessous juste après cette définition.

Le cadre fourni est :

```js
window.addEventListener("load", async function () {
  // On place ici les huit appels du contour, dans leur ordre conservé.
});
```

On **déplace les huit appels** à l’intérieur de ce cadre, à la place du commentaire. Aucun appel de peinture ne reste en dehors. On insère ensuite `await attendre(1000);` **entre chaque paire d’appels successifs** : cela fait sept attentes, sans attente avant le premier appel ni après le dernier.

Le début pourrait ainsi prendre cette forme si les deux premiers appels conservés ciblent `pixel1` puis `pixel2` :

```js
  peindre("pixel1", "#800080");
  await attendre(1000);
  peindre("pixel2", "#800080");
```

Cet extrait montre seulement le début de la séquence. On conserve la couleur choisie et l’ordre des huit appels du contour réalisé.

Le cadre démarre la séquence au chargement de la page et permet les attentes. On garde sa première et sa dernière ligne telles quelles ; sa construction n’est pas étudiée pendant cette séance. La définition de `peindre` reste au-dessus, en dehors du cadre.

Avec `await attendre(1000);`, on laisse passer environ une seconde **avant de poursuivre à la ligne suivante**. `1000` représente une durée en millisecondes : 1 000 ms correspondent à une seconde. Le navigateur reste disponible pour afficher le dessin pendant l’attente ; la durée réelle peut être un peu plus longue. On conserve `await` devant chaque appel à `attendre` pour obtenir les pauses prévues.

### Observer le même contour, étape par étape

Avant de recharger, on note l’ordre d’apparition prévu en lisant les huit appels. On enregistre et recharge : la première case apparaît sans attente initiale, puis une case s’ajoute après chaque pause. Après environ sept secondes, les huit cases du bord sont peintes et `pixel5` est toujours blanc.

On compare l’ordre observé à la prévision et le dessin final au contour fixe. Sans effacement, les peintures s’accumulent. Un autre ordre d’appels donnerait le même contour final, mais une autre succession d’apparitions. Pour obtenir une rotation, il faut maintenant choisir l’ordre du parcours et effacer chaque case avant de peindre la suivante.

## 2. Ensemble — construire une rotation

### Prévoir les étapes

Les cases sont disposées ainsi dans le HTML :

| | Colonne de gauche | Colonne du milieu | Colonne de droite |
|---|---|---|---|
| Première ligne | `pixel1` | `pixel2` | `pixel3` |
| Deuxième ligne | `pixel4` | `pixel5` | `pixel6` |
| Troisième ligne | `pixel7` | `pixel8` | `pixel9` |

Pour tourner dans le sens des aiguilles d’une montre, on suit **`pixel1 → pixel2 → pixel3 → pixel6 → pixel9 → pixel8 → pixel7 → pixel4 → pixel1`**. L’ordre du parcours diffère de l’ordre des identifiants dans le HTML. La case centrale `pixel5` n’est jamais peinte.

| Affichage | Case colorée | Moment prévu |
|---|---|---|
| Départ | `pixel1` | Au chargement, sans attente initiale |
| Après la première attente | `pixel2` | Environ 1 seconde après le départ |
| Après la deuxième attente | `pixel3` | Environ 2 secondes après le départ |
| Après la troisième attente | `pixel6` | Environ 3 secondes après le départ |
| Après la quatrième attente | `pixel9` | Environ 4 secondes après le départ |
| Après la cinquième attente | `pixel8` | Environ 5 secondes après le départ |
| Après la sixième attente | `pixel7` | Environ 6 secondes après le départ |
| Après la septième attente | `pixel4` | Environ 7 secondes après le départ |
| Retour au départ | `pixel1` | Environ 8 secondes après le départ ; la séquence est terminée |

Chaque case reste visible pendant une seconde avant son effacement et la peinture de la suivante. Cette succession crée un déplacement apparent, sans déplacer les éléments HTML. À la fin, `pixel1` reste coloré jusqu’au prochain rechargement.

### Compléter le squelette fourni

**Préparation**

- `pixelator.js` : on conserve la définition de `peindre` en haut du fichier et on remplace tout le cadre du contour progressif par le squelette fourni ci-dessous. On remplace le violet par la couleur choisie.

Le squelette fourni contient le premier affichage et le passage de `pixel1` à `pixel2` :

```js
window.addEventListener("load", async function () {
  peindre("pixel1", "#800080");

  await attendre(1000);
  peindre("pixel1", "");
  peindre("pixel2", "#800080");

  // On attend, efface pixel2, puis peint pixel3.

  // On attend, efface pixel3, puis peint pixel6.

  // On attend, efface pixel6, puis peint pixel9.

  // On attend, efface pixel9, puis peint pixel8.

  // On attend, efface pixel8, puis peint pixel7.

  // On attend, efface pixel7, puis peint pixel4.

  // On attend, efface pixel4, puis peint pixel1 pour terminer.
});
```

On complète les sept passages indiqués par des commentaires, **avant la dernière ligne `});`**. On travaille sur les appels placés à l’intérieur du cadre, sans changer la définition de `peindre`.

Pour chaque passage à compléter, on écrit trois instructions dans cet ordre :

1. On attend avec `await attendre(1000);`.
2. On efface la case actuellement colorée avec `peindre` et une couleur vide : par exemple, `peindre("pixel2", "");` avant de passer à `pixel3`. L’identifiant reste écrit sans `#`.
3. On peint la case suivante avec `peindre` et la couleur choisie, comme dans le premier passage.

### Lire la séquence du haut vers le bas

On lit **peindre → attendre → effacer → peindre la case suivante**. Sans `await`, les instructions suivantes continueraient immédiatement : on n’obtiendrait plus les pauses prévues.

L’appel `peindre("pixel1", "")` transmet une chaîne vide comme couleur. La fonction attribue alors `""` à `.style.backgroundColor` : elle retire la peinture appliquée par JavaScript. On retrouve le fond blanc défini dans `pixelator-layout.css` ; cet effacement ne demande pas une deuxième couleur de peinture.

On place l’attente **avant l’effacement** pour garder la case visible. L’effacement et la peinture suivante se suivent, sans attente entre les deux. On lit ainsi le parcours directement dans l’ordre des instructions.

### Vérifier, puis changer la cadence

On enregistre le fichier, puis recharge `neuf-pixels.html`. On suit un tour complet : `pixel1`, `pixel2`, `pixel3`, `pixel6`, `pixel9`, `pixel8`, `pixel7`, `pixel4`, puis `pixel1`. Une seule case reste colorée à chaque affichage et le centre reste blanc. On attend encore quelques secondes après le retour : la séquence est terminée, `pixel1` reste coloré.

On recharge pour refaire un essai. On peut aussi recharger pendant le parcours : la nouvelle séquence repart de `pixel1`.

On remplace ensuite **les huit durées `1000` par `500`**, enregistre et recharge. Chaque attente dure environ une demi-seconde ; on observe le même parcours, deux fois plus rapide. On revient à `1000` pour lire facilement la suite.

Si les couleurs s’accumulent pendant la rotation, on vérifie que chaque passage efface la case précédente et que les anciens appels du contour ont été remplacés. Si toute la grille reste blanche pendant une pause, on vérifie que l’attente précède l’effacement. Si le parcours est presque instantané, on cherche un `await` manquant. Si la séquence ne démarre pas ou s’arrête trop tôt, on consulte la console et vérifie la présence de la définition de `peindre`, le fichier `pixelator-attente.js`, les identifiants sans `#` dans les appels et les deux lignes du cadre fourni. Les essais se font sur `neuf-pixels.html`, qui contient toutes les cases ciblées.

<a id="rotation-reference"></a>

<details>
<summary><strong>Retrouver la rotation de référence sur neuf pixels</strong></summary>

**Préparation**

- `pixelator.js` : on remplace son contenu par le programme complet ci-dessous et on remplace les neuf occurrences de `#800080` par la couleur choisie.

Le programme peint les huit cases du bord, puis `pixel1` au retour :

```js
function peindre(id, couleur) {
  document.querySelector("#" + id).style.backgroundColor = couleur;
}

window.addEventListener("load", async function () {
  peindre("pixel1", "#800080");

  await attendre(1000);
  peindre("pixel1", "");
  peindre("pixel2", "#800080");

  await attendre(1000);
  peindre("pixel2", "");
  peindre("pixel3", "#800080");

  await attendre(1000);
  peindre("pixel3", "");
  peindre("pixel6", "#800080");

  await attendre(1000);
  peindre("pixel6", "");
  peindre("pixel9", "#800080");

  await attendre(1000);
  peindre("pixel9", "");
  peindre("pixel8", "#800080");

  await attendre(1000);
  peindre("pixel8", "");
  peindre("pixel7", "#800080");

  await attendre(1000);
  peindre("pixel7", "");
  peindre("pixel4", "#800080");

  await attendre(1000);
  peindre("pixel4", "");
  peindre("pixel1", "#800080");
});
```

</details>

<a id="vérification-finale"></a>

## Vérification du parcours attendu sur neuf pixels

La vérification porte sur le contour progressif, puis sur la rotation guidée :

- Le contour apparaît dans l’ordre des huit appels conservés, avec sept attentes. Le dessin final est identique au contour fixe et son centre reste blanc.
- Au chargement de la rotation, `pixel1` est coloré sans attente initiale.
- La rotation suit `pixel1 → pixel2 → pixel3 → pixel6 → pixel9 → pixel8 → pixel7 → pixel4 → pixel1`, avec une seule case colorée à chaque affichage. Les autres retrouvent leur fond initial ; `pixel5` reste blanc.
- Les huit attentes précèdent les changements. Après la huitième, `pixel1` reste coloré et la séquence est terminée.
- Un rechargement, pendant ou après l’animation, relance le parcours au début.
- Des durées d’attente différentes changent la cadence tout en conservant le parcours.
- On peut expliquer pourquoi on attend avant d’effacer et comment l’ordre des instructions détermine l’animation.

La fonction `peindre` nomme l’opération de peinture utilisée dans chaque passage. Le groupe **attendre, effacer, peindre** revient plusieurs fois : ces appels répétés préparent l’étude des boucles dans la suite du cours.

**La partie animation est terminée.** On poursuit avec [Pixelator — peindre au clic](./session_02-pixelator-clic.md), pour choisir la case et le moment du changement par une action.
