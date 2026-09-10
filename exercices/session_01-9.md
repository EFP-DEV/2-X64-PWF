# Activité 9 — De la console aux fichiers

[Question de départ](../session_01.md#9-de-la-console-aux-fichiers) · [Sommaire du cours](../session_01.md#sommaire)

Les emplacements `___` sont à compléter avant d’exécuter les blocs concernés.

**Point de départ :** les cinq expressions de l’activité 8 ont été essayées dans la console. Cette activité conserve maintenant le programme dans des fichiers.

<a href="./session_01/clock.html" download="clock.html">Téléchargez le document de départ `clock.html`</a>. Enregistrez-le dans un nouveau dossier consacré à l’horloge et créez un fichier vide `clock.js` dans ce même dossier. Si ces deux fichiers existent déjà pour cette activité, réutilisez-les.

```text
session_01/
├── clock.html
└── clock.js
```

Retrouvez `<script src="clock.js"></script>` à la fin de `body`. Quel fichier cette balise charge-t-elle ?

## Rendre les résultats observables

Remplacez le contenu de `clock.js` par ce bloc complété :

```js
let hours;
let minutes;

hours = 13;
minutes = 37;

console.___(37 + 1);
console.___("37" + 1);
console.___("13" + ":" + "37");
console.___(hours + minutes);
console.___(hours + ":" + minutes);
```

Enregistrez, ouvrez `clock.html` dans le navigateur, puis sa console. Comparez les cinq sorties à vos prédictions. Pourquoi écrit-on `console.log(...)` dans le fichier alors que la console interactive affichait directement le résultat des expressions ? Pourquoi la page elle-même reste-t-elle vide ?

## Calculer n’est pas affecter

Conservez les déclarations et les valeurs initiales. Remplacez seulement les cinq appels précédents par cette suite complétée pour ajouter une minute et conserver le résultat :

```js
console.log(hours + ":" + minutes);
console.log(minutes + 1);
console.log(minutes);

minutes = ___;

console.log(minutes);
console.log(hours + ":" + minutes);
```

Prédisez les cinq sorties, puis enregistrez et rechargez. Quel appel montre que le calcul seul ne change pas la variable ? Quelle instruction conserve le nouvel état ? Rechargez encore : pourquoi retrouvez-vous la même suite ?

Remplacez temporairement les valeurs initiales par `7` et `5`. Observez le premier et le dernier affichage. Faut-il modifier les nombres pour présenter l’heure sur deux chiffres ? Les écritures comme `7:5` sont acceptées. Associez ensuite HTML, CSS et JavaScript à leurs responsabilités dans cette étape.

## Trouver la limite

Remplacez tout le contenu de `clock.js` par ce programme à compléter. Choisissez d’abord `13` heures et `37` minutes et ajoutez exactement une minute.

```js
let hours;
let minutes;

hours = ___;
minutes = ___;

minutes = ___;

console.log(hours + ":" + minutes);
```

Pour chaque essai, changez uniquement les valeurs initiales, enregistrez et rechargez `clock.html`. Utilisez toujours des heures de 0 à 23 et des minutes de 0 à 59.

Trouvez un départ qui produit une heure incorrecte. Notez votre exemple et son résultat. L’addition est-elle fausse ou manque-t-il une règle ? Formulez cette règle en français.

Gardez ce programme sans condition dans `clock.js` pour l’activité 10. Notez le départ qui a révélé le problème et remettez les valeurs initiales à `13` et `59`.

---

[Retour au bilan 9 dans le cours](../session_01.md#bilan-9) · [Après le bilan : activité 10](./session_01-10.md)
