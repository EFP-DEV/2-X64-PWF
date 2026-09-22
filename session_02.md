# Séance 2 — De l’horloge à Pixelator

Trois exercices, dans cet ordre : **terminer l’horloge**, **résoudre l’ampoule**, puis **commencer Pixelator**.

**Les 45 premières minutes :** reprendre et terminer l’horloge, observer la démonstration de l’ampoule, puis compléter son programme.

## 1. Terminer l’horloge

Ouvrez votre programme de la séance 1 et reprenez le [défi de minuit](./exercices/session_01-horloge.md#defi-minuit). Relisez les étapes : **valeurs initiales → ajout d’une minute → report des minutes → préparation de l’affichage → sortie console**.

### « Ordinateur » : penser à l’ordre

Retenons dans le mot **ordinateur** l’idée de **mettre en ordre**. Dans notre programme, les instructions s’exécutent dans l’ordre où nous les avons écrites, en suivant les conditions. L’ordinateur ne déplace pas une instruction pour corriger notre raisonnement : c’est à nous de lui donner les bonnes instructions **au bon endroit**.

Expliquez le passage de `13:59` à `14:00`, puis reprenez le départ `23:59`. Le report des minutes fait passer les heures de `23` à `24`. Vous avez le bon bloc pour les ramener à `0` :

```js
if (hours === 24) {
  hours = 0;
}
```

**Où pouvez-vous placer ce bloc sans le modifier ?** Proposez un emplacement et suivez les valeurs ligne par ligne avant d’exécuter le programme.

### Trop tôt ou trop tard

Pour un départ à `23:59`, comparez ces deux propositions :

| Emplacement du bloc | Ce qui se passe | Sortie console |
|---|---|---|
| **Trop tôt :** avant `hours = hours + 1` | Au moment du test, `hours` vaut encore `23`. La condition est fausse. L’addition fait ensuite passer les heures à `24`, mais le test est déjà passé. | `24:00` |
| **Trop tard :** après `console.log(...)` | La console a déjà affiché `24:00`. Le bloc corrige ensuite la variable, mais ne change pas le texte déjà affiché. | `24:00` |

Une instruction correcte peut donc produire un résultat incorrect si elle est mal placée.

### La zone où la correction fonctionne

Le test doit se faire **après l’augmentation des heures et avant leur affichage**. Repérez les limites dans cet extrait du programme :

```js
if (minutes === 60) {
  minutes = 0;
  hours = hours + 1;
  // DÉBUT de la zone possible : les heures ont été augmentées.
}

let displayedMinutes;
displayedMinutes = minutes;

if (minutes < 10) {
  displayedMinutes = "0" + minutes;
}

// FIN de la zone possible : il faut corriger avant la ligne suivante.
console.log(hours + ":" + displayedMinutes);
```

Le bloc peut fonctionner juste après l’addition, à l’intérieur du `if` des minutes. Il fonctionne aussi après la fermeture de ce `if`, ou après la préparation de `displayedMinutes`, juste avant `console.log(...)` : cette préparation ne modifie pas les heures.

### La place à privilégier : juste après l’augmentation des heures

Placez le bloc **dans le `if` des minutes, immédiatement après `hours = hours + 1`** :

```js
if (minutes === 60) {
  minutes = 0;
  hours = hours + 1;

  if (hours === 24) {
    hours = 0;
  }
}
```

Les valeurs de départ sont valides et le programme ajoute exactement une minute : les heures ne peuvent atteindre `24` que lorsqu’on les augmente. Cette place réunit donc **la modification et sa correction** ; le test des heures ne s’exécute que lorsqu’une heure vient d’être ajoutée.

L’indentation montre le bloc imbriqué : le `if` des heures est à l’intérieur du `if` des minutes. Conservez ensuite la préparation de `displayedMinutes` et le `console.log(...)` après le bloc extérieur, pour afficher aussi les cas où les minutes n’atteignent pas `60`.

Vérifiez `13:59 → 14:00`, `23:58 → 23:59` et `23:59 → 0:00`. Les heures peuvent rester affichées sur un chiffre. Expliquez pourquoi les deux conditions sont vraies à minuit, puis distinguez `=` (affecter) de `===` (comparer).

## 2. Résoudre l’ampoule · 15 minutes

Observez la démonstration de l’enseignant : l’ampoule est éteinte au chargement, un clic l’allume, le suivant l’éteint. Repérez ce qui change à l’écran et formulez la règle qui permet de choisir entre les deux états.

À vous de reproduire ce comportement. Le HTML, le CSS, les images et le JavaScript incomplet sont fournis. **Retrouvez ce que vous connaissez : une condition, un bloc `if` et des affectations.** Complétez la condition et son bloc en vous aidant des instructions du `else` déjà fourni : il s’exécute lorsque la condition est fausse.

Le code qui déclenche le programme au clic est déjà en place. Vous pouvez l’utiliser sans devoir l’expliquer à cette étape. Concentrez-vous sur les deux emplacements à compléter et respectez l’ordre des instructions et les limites des blocs. Comme pour l’horloge, la place de chaque instruction compte.

[Consignes et fichiers de l’exercice](./exercices/ampoule.md)

## 3. Commencer Pixelator

**Première étape du mini-projet :** rendre interactive une grille de quatre pixels. Le HTML et le CSS sont fournis ; le travail porte sur JavaScript et le DOM. Après avoir utilisé le déclenchement au clic fourni dans l’ampoule, vous allez maintenant le mettre en place pour les pixels.

[Consignes — démarrer Pixelator](./exercices/session_02.md)

1. Retrouver un pixel dans le DOM et modifier sa classe pour le peindre.
2. Déclencher cette modification au clic avec `addEventListener`.
3. Rendre les quatre pixels indépendants.
4. Vérifier le résultat et expliquer la chaîne : **clic → JavaScript → classe → apparence**.

**Résultat attendu :** chaque pixel rose devient violet au clic. Un deuxième clic le laisse violet ; le rechargement rétablit les couleurs initiales.

**Seuils pour la suite :** comment effacer un pixel déjà peint ? Comment passer de quatre à soixante-quatre pixels sans recopier les mêmes instructions ?
