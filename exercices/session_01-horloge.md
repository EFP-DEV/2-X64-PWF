# Horloge — ajouter une minute

[Cours — l’horloge](../session_01.md#8-faire-avancer-le-temps)

Nous partons de deux valeurs dans la console, écrivons ensemble un programme dans un fichier, puis corrigeons le passage de `13:59` à `14:00`. Le défi final sera de faire fonctionner le programme à partir de `23:59`.

Nous complétons les emplacements `___` avant d’exécuter les instructions. Dans les fichiers, nous enregistrons puis rechargeons la page après chaque modification. Les essais utilisent des heures de 0 à 23 et des minutes de 0 à 59 ; le programme ajoute exactement une minute.

<a id="variables"></a>

## 1. Nommer une heure dans la console

Nous reprenons la console de la page de Sullivan. Nous déclarons les deux variables et leur affectons les nombres `13` et `37` :

```js
let hours;
let minutes;

hours = ___;
minutes = ___;
```

Si ces noms sont déjà déclarés, nous les réutilisons avec les deux affectations, sans répéter `let`. Un rechargement permet de repartir de zéro.

Nous prédisons, puis saisissons séparément les expressions suivantes :

| Expression | Prédiction | Observation | Nombre ou texte ? |
|---|---|---|---|
| `37 + 1` | | | |
| `"37" + 1` | | | |
| `"13" + ":" + "37"` | | | |
| `hours + minutes` | | | |
| `hours + ":" + minutes` | | | |

Quelle différence les guillemets introduisent-ils ? Nous expliquons pourquoi le même opérateur `+` ne produit pas toujours une addition.

<a id="fichiers"></a>

## 2. Conserver le programme dans des fichiers

<a href="./session_01/clock.html" download="clock.html">Nous téléchargeons le document de départ `clock.html`</a>. Nous l’enregistrons dans un dossier consacré à l’horloge et créons un fichier vide `clock.js` à côté. Si ces deux fichiers existent déjà, nous les réutilisons.

```text
session_01/
├── clock.html
└── clock.js
```

Nous retrouvons `<script src="clock.js"></script>` à la fin de `body`. Quel fichier cette balise charge-t-elle ?

### Rendre les résultats observables

Nous écrivons ensemble ce programme dans `clock.js`. Nous complétons les appels à `console.log` pour retrouver les résultats du tableau :

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

Nous enregistrons, ouvrons `clock.html` dans le navigateur, puis sa console. Nous comparons les sorties à nos observations précédentes. Pourquoi faut-il écrire `console.log(...)` dans le fichier ? Pourquoi la page elle-même reste-t-elle vide ?

### Calculer n’est pas affecter

Nous conservons les déclarations et les valeurs initiales. Nous remplaçons seulement les cinq appels précédents par :

```js
console.log(hours + ":" + minutes);
console.log(minutes + 1);
console.log(minutes);

minutes = ___;

console.log(minutes);
console.log(hours + ":" + minutes);
```

Nous complétons l’affectation pour ajouter une minute et conserver le résultat. Nous prédisons les cinq sorties, puis vérifions. Quel appel montre que le calcul seul ne change pas la variable ? Quelle instruction conserve le nouvel état ? Pourquoi un rechargement reproduit-il la même suite ?

Nous essayons temporairement `7` heures et `5` minutes. Faut-il modifier les nombres pour présenter l’heure sur deux chiffres ? Nous travaillerons l’affichage après avoir corrigé le calcul. Nous associons HTML, CSS et JavaScript à leurs responsabilités dans cette étape.

### Trouver la limite

Nous remettons les valeurs initiales à `13` et `37`. Nous gardons les déclarations et ces valeurs, puis simplifions la suite pour ne conserver que l’addition affectée et l’affichage final :

```js
minutes = minutes + 1;
console.log(hours + ":" + minutes);
```

Nous vérifions le résultat, puis changeons les valeurs initiales pour `13` heures et `59` minutes. Le programme affiche `13:60`. L’addition est-elle fausse ou manque-t-il une règle ? Nous formulons cette règle en français.

<a id="conditions"></a>

## 3. Ensemble — passer de `13:59` à `14:00`

### Le report des minutes

Nous complétons ensemble ce bloc `if`. Nous le plaçons **après l’addition et avant l’affichage** :

```js
if (minutes === ___) {
  minutes = ___;
  hours = ___;
}
```

Nous enregistrons et rechargeons. Le programme affiche maintenant `14:0`. Nous expliquons la différence entre `=` et `===`, puis justifions la position du bloc. Pourquoi comparer les minutes à exactement 60 suffit-il quand le départ est valide et que l’on ajoute exactement une minute ?

### De `14:0` à `14:00`

Le nombre de minutes est correct. Nous comparons les nombres `9` et `10` : combien de chiffres faut-il pour écrire chacun ? À partir de quelle valeur le zéro ajouté devant les minutes devient-il inutile ?

Nous gardons `minutes` numérique et préparons son affichage dans une autre variable. Nous remplaçons le `console.log` final par :

```js
let displayedMinutes;
displayedMinutes = minutes;

if (minutes < ___) {
  displayedMinutes = "0" + minutes;
}

console.log(hours + ":" + displayedMinutes);
```

L’opérateur `<` signifie « est inférieur à ». Nous complétons la condition à partir de la limite repérée. Pourquoi les guillemets autour de `"0"` changent-ils le rôle de `+` ?

Le départ `13:59` doit maintenant produire `14:00`. Nous prédisons puis vérifions les sorties pour les départs `13:08` et `13:09` : nous devons obtenir `13:09` et `13:10`. Nous vérifions aussi `13:37` et `13:04` en changeant uniquement les valeurs initiales. Pour quatre minutes, nous écrivons le nombre `4` dans JavaScript.

Le seuil de **10** concerne l’écriture des minutes sur deux chiffres ; celui de **60** déclenche le report vers les heures. La variable `minutes` sert au calcul ; `displayedMinutes` prépare la sortie console.

<details>
<summary><strong>Retrouver le programme construit ensemble, avant le défi</strong></summary>

```js
let hours;
let minutes;

hours = 13;
minutes = 59;

minutes = minutes + 1;

if (minutes === 60) {
  minutes = 0;
  hours = hours + 1;
}

let displayedMinutes;
displayedMinutes = minutes;

if (minutes < 10) {
  displayedMinutes = "0" + minutes;
}

console.log(hours + ":" + displayedMinutes);
```

Nous repérons l’état initial, le calcul, le report et la préparation de l’affichage. Après le report, `minutes` vaut le nombre `0`, tandis que `displayedMinutes` contient le texte `"00"`.

</details>

<a id="defi-minuit"></a>

## 4. Défi de clôture — `23:59`

**Nous réglons les heures à `23`, les minutes à `59`, puis corrigeons le programme.**

Nous prédisons l’heure attendue après une minute avant de vérifier. Nous la comparons à la sortie console. Quelle règle manque encore ? Nous l’écrivons et vérifions notre proposition, en conservant le report des minutes et leur affichage sur deux chiffres.

Nous gardons notre fichier et nos essais pour la reprise : ce défi termine la séance.

<details>
<summary><strong>Des cas pour vérifier notre proposition</strong></summary>

<a id="verification"></a>

### Prédire, vérifier, expliquer

Nous remplissons les prédictions avant de tester. Nous changeons uniquement les valeurs initiales entre les essais, puis enregistrons et rechargeons.

| Départ | Sortie prédite | Sortie observée | Conditions vraies et blocs exécutés |
|---|---|---|---|
| `13:37` | | | |
| `13:59` | | | |
| `23:58` | | | |
| `23:59` | | | |
| `07:05` | | | |
| `00:00` | | | |

Les heures peuvent rester affichées sur un chiffre : `7:06` convient pour le départ `07:05`. Si une observation diffère de notre prédiction, nous identifions l’instruction concernée et expliquons l’ordre des conditions.

</details>

---

[Bilans de l’horloge dans le cours](../session_01.md#bilan-8) · [Fin du cours](../session_01.md#fin-du-cours)
