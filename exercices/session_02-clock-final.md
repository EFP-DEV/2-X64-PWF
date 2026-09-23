# Exercice 1 — Terminer l’horloge

[Séance 2](../session_02.md)

**Durée : 15 minutes.** Terminer le défi de minuit, expliquer la place de la correction et vérifier les trois cas proposés.

Ouvrez votre programme de la séance 1 et reprenez le [défi de minuit](./session_01-horloge.md#defi-minuit). Relisez les étapes : **valeurs initiales → ajout d’une minute → report des minutes → préparation de l’affichage → sortie console**.

## « Ordinateur » : penser à l’ordre

Retenons dans le mot **ordinateur** l’idée de **mettre en ordre**. Dans notre programme, les instructions s’exécutent dans l’ordre où nous les avons écrites, en suivant les conditions. L’ordinateur ne déplace pas une instruction pour corriger notre raisonnement : c’est à nous de lui donner les bonnes instructions **au bon endroit**.

Expliquez le passage de `13:59` à `14:00`, puis reprenez le départ `23:59`. Le report des minutes fait passer les heures de `23` à `24`. Vous avez le bon bloc pour les ramener à `0` :

```js
if (hours === 24) {
  hours = 0;
}
```

**Où pouvez-vous placer ce bloc sans le modifier ?** Proposez un emplacement et suivez les valeurs ligne par ligne avant d’exécuter le programme.

## Trop tôt ou trop tard

Pour un départ à `23:59`, comparez ces deux propositions :

| Emplacement du bloc | Ce qui se passe | Sortie console |
|---|---|---|
| **Trop tôt :** avant `hours = hours + 1` | Au moment du test, `hours` vaut encore `23`. La condition est fausse. L’addition fait ensuite passer les heures à `24`, mais le test est déjà passé. | `24:00` |
| **Trop tard :** après `console.log(...)` | La console a déjà affiché `24:00`. Le bloc corrige ensuite la variable, mais ne change pas le texte déjà affiché. | `24:00` |

Une instruction correcte peut donc produire un résultat incorrect si elle est mal placée.

## La zone où la correction fonctionne

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

## La place à privilégier : juste après l’augmentation des heures

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

[Exercice suivant — résoudre l’ampoule](./session_02-ampoule.md)
