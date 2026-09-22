# Horloge — ajouter une minute

[Cours — l’horloge](../session_01.md#8-faire-avancer-le-temps)

Nous partons de deux valeurs dans la console, écrivons ensemble un programme dans un fichier, puis corrigeons le passage de `13:59` à `14:00`. Le défi final sera de faire fonctionner le programme à partir de `23:59`.

Complétez les emplacements `___` avant d’exécuter les instructions. Dans les fichiers, enregistrez puis rechargez la page après chaque modification. Les essais utilisent des heures de 0 à 23 et des minutes de 0 à 59 ; le programme ajoute exactement une minute.

<a id="variables"></a>

## 1. Nommer une heure dans la console

Reprenez la console de la page de Sullivan. Déclarez les deux variables et affectez-leur les nombres `13` et `37` :

```js
let hours;
let minutes;

hours = ___;
minutes = ___;
```

Si ces noms sont déjà déclarés, réutilisez-les avec les deux affectations, sans répéter `let`. Un rechargement permet de repartir de zéro.

Prédisez, puis saisissez séparément les expressions suivantes :

| Expression | Prédiction | Observation | Nombre ou texte ? |
|---|---|---|---|
| `37 + 1` | | | |
| `"37" + 1` | | | |
| `"13" + ":" + "37"` | | | |
| `hours + minutes` | | | |
| `hours + ":" + minutes` | | | |

Quelle différence les guillemets introduisent-ils ? Expliquez pourquoi le même opérateur `+` ne produit pas toujours une addition.

<a id="fichiers"></a>

## 2. Conserver le programme dans des fichiers

<a href="./session_01/clock.html" download="clock.html">Téléchargez le document de départ `clock.html`</a>. Enregistrez-le dans un dossier consacré à l’horloge et créez un fichier vide `clock.js` à côté. Si ces deux fichiers existent déjà, réutilisez-les.

```text
session_01/
├── clock.html
└── clock.js
```

Retrouvez `<script src="clock.js"></script>` à la fin de `body`. Quel fichier cette balise charge-t-elle ?

### Rendre les résultats observables

Écrivez ensemble ce programme dans `clock.js`. Complétez les appels à `console.log` pour retrouver les résultats du tableau :

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

Enregistrez, ouvrez `clock.html` dans le navigateur, puis sa console. Comparez les sorties à vos observations précédentes. Pourquoi faut-il écrire `console.log(...)` dans le fichier ? Pourquoi la page elle-même reste-t-elle vide ?

### Calculer n’est pas affecter

Conservez les déclarations et les valeurs initiales. Remplacez seulement les cinq appels précédents par :

```js
console.log(hours + ":" + minutes);
console.log(minutes + 1);
console.log(minutes);

minutes = ___;

console.log(minutes);
console.log(hours + ":" + minutes);
```

Complétez l’affectation pour ajouter une minute et conserver le résultat. Prédisez les cinq sorties, puis vérifiez. Quel appel montre que le calcul seul ne change pas la variable ? Quelle instruction conserve le nouvel état ? Pourquoi un rechargement reproduit-il la même suite ?

Essayez temporairement `7` heures et `5` minutes. Faut-il modifier les nombres pour présenter l’heure sur deux chiffres ? Nous travaillerons l’affichage après avoir corrigé le calcul. Associez HTML, CSS et JavaScript à leurs responsabilités dans cette étape.

### Trouver la limite

Remettez les valeurs initiales à `13` et `37`. Gardez les déclarations et ces valeurs, puis simplifiez la suite pour ne conserver que l’addition affectée et l’affichage final :

```js
minutes = minutes + 1;
console.log(hours + ":" + minutes);
```

Vérifiez le résultat, puis changez les valeurs initiales pour `13` heures et `59` minutes. Le programme affiche `13:60`. L’addition est-elle fausse ou manque-t-il une règle ? Formulez cette règle en français.

<a id="conditions"></a>

## 3. Ensemble — passer de `13:59` à `14:00`

### Le report des minutes

Complétez ensemble ce bloc `if`. Placez-le **après l’addition et avant l’affichage** :

```js
if (minutes === ___) {
  minutes = ___;
  hours = ___;
}
```

Enregistrez et rechargez. Le programme affiche maintenant `14:0`. Expliquez la différence entre `=` et `===`, puis justifiez la position du bloc. Pourquoi comparer les minutes à exactement 60 suffit-il quand le départ est valide et que l’on ajoute exactement une minute ?

### De `14:0` à `14:00`

Le nombre de minutes est correct. Comment présenter le zéro sur deux chiffres ? Gardez `minutes` numérique et préparez son affichage dans une autre variable. Remplacez le `console.log` final par :

```js
let displayedMinutes;
displayedMinutes = minutes;

if (minutes < ___) {
  displayedMinutes = "0" + minutes;
}

console.log(hours + ":" + displayedMinutes);
```

L’opérateur `<` signifie « est inférieur à ». Quelle limite permet d’ajouter un zéro devant les minutes qui n’ont qu’un chiffre ? Pourquoi les guillemets autour de `"0"` changent-ils le rôle de `+` ?

Le départ `13:59` doit maintenant produire `14:00`. Vérifiez aussi `13:37` et `13:04` en changeant uniquement les valeurs initiales. Pour quatre minutes, écrivez le nombre `4` dans JavaScript.

La variable `minutes` sert au calcul ; `displayedMinutes` prépare la sortie console. Nous travaillons ici l’affichage des minutes sur deux chiffres.

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

Repérez l’état initial, le calcul, le report et la préparation de l’affichage. Après le report, `minutes` vaut le nombre `0`, tandis que `displayedMinutes` contient le texte `"00"`.

</details>

<a id="defi-minuit"></a>

## 4. Défi de clôture — `23:59`

**Réglez les heures à `23`, les minutes à `59`, puis corrigez le programme.**

Prédisez l’heure attendue après une minute avant de vérifier. Comparez-la à la sortie console. Quelle règle manque encore ? Écrivez-la et vérifiez votre proposition, en conservant le report des minutes et leur affichage sur deux chiffres.

Gardez votre fichier et vos essais pour la reprise : ce défi termine la séance.

<details>
<summary><strong>Des cas pour vérifier votre proposition</strong></summary>

<a id="verification"></a>

### Prédire, vérifier, expliquer

Remplissez les prédictions avant de tester. Changez uniquement les valeurs initiales entre les essais, puis enregistrez et rechargez.

| Départ | Sortie prédite | Sortie observée | Conditions vraies et blocs exécutés |
|---|---|---|---|
| `13:37` | | | |
| `13:59` | | | |
| `23:58` | | | |
| `23:59` | | | |
| `07:05` | | | |
| `00:00` | | | |

Les heures peuvent rester affichées sur un chiffre : `7:06` convient pour le départ `07:05`. Si une observation diffère de votre prédiction, identifiez l’instruction concernée et expliquez l’ordre des conditions.

</details>

---

[Bilans de l’horloge dans le cours](../session_01.md#bilan-8) · [Fin du cours](../session_01.md#fin-du-cours)
