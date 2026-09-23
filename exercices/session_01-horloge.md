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

Nous saisissons séparément les expressions suivantes et retrouvons les résultats du tableau. Les guillemets indiquent ici les résultats textuels ; leur affichage dans la console dépend du navigateur.

| Expression | Résultat attendu | Type |
|---|---|---|
| `37 + 1` | `38` | Nombre |
| `"37" + 1` | `"371"` | Texte |
| `"13" + ":" + "37"` | `"13:37"` | Texte |
| `hours + minutes` | `50` | Nombre |
| `hours + ":" + minutes` | `"13:37"` | Texte |

Nous observons deux usages de `+` : avec deux nombres, il additionne ; dans ces expressions, dès qu’un opérande est du texte, il assemble les valeurs sous forme de texte. Les guillemets délimitent une chaîne de caractères.

<a id="fichiers"></a>

## 2. Conserver le programme dans des fichiers

<a href="./session_01/clock.html" download="clock.html">Nous téléchargeons le document de départ `clock.html`</a>. Nous l’enregistrons dans un dossier consacré à l’horloge et créons un fichier vide `clock.js` à côté. Si ces deux fichiers existent déjà, nous les réutilisons.

```text
session_01/
├── clock.html
└── clock.js
```

Nous retrouvons `<script src="clock.js"></script>` à la fin de `body`. Son attribut `src` indique au navigateur de charger le fichier `clock.js` situé à côté du document HTML.

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

Nous enregistrons, ouvrons `clock.html` dans le navigateur, puis sa console. Nous retrouvons les résultats du tableau : `console.log(...)` les écrit explicitement dans la console. Un fichier JavaScript n’affiche pas spontanément le résultat de chaque expression. La page reste vide, car nos instructions ne modifient pas son contenu.

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

Nous complétons l’affectation pour ajouter une minute et conserver le résultat. Après enregistrement et rechargement, nous devons retrouver les cinq sorties : `13:37`, `38`, `37`, `38`, puis `13:38`. Le troisième affichage montre que le calcul seul a laissé `minutes` à `37`. Après l’affectation, la variable contient `38`. Un rechargement reproduit la même suite à partir des valeurs initiales du fichier.

Nous essayons temporairement `7` heures et `5` minutes. La sortie finale est `7:6` : les zéros initiaux concernent la présentation, pas les valeurs utilisées pour calculer. Nous travaillerons l’affichage après avoir corrigé le calcul. Ici, le HTML charge le programme ; JavaScript calcule et écrit dans la console. Le CSS servira à présenter les éléments de la page.

### Trouver la limite

Nous remettons les valeurs initiales à `13` et `37`. Nous gardons les déclarations et ces valeurs, puis simplifions la suite pour ne conserver que l’addition affectée et l’affichage final :

```js
minutes = minutes + 1;
console.log(hours + ":" + minutes);
```

Nous obtenons `13:38`, puis changeons les valeurs initiales pour `13` heures et `59` minutes. Le programme affiche `13:60`. L’addition fonctionne ; le report vers les heures reste à programmer. Nous allons compléter le programme pour obtenir `14:00`.

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

Nous enregistrons et rechargeons. Le programme affiche maintenant `14:0`. Le bloc teste les minutes avec `===`, puis change les valeurs avec `=`. Placé après l’addition et avant l’affichage, il corrige l’état avant de le montrer. Les minutes de départ vont de 0 à 59 et nous ajoutons exactement une minute : la seule valeur à corriger est donc 60.

### De `14:0` à `14:00`

Le nombre de minutes est correct. Nous comparons `9` et `10` : le premier s’écrit avec un chiffre, le second avec deux. Nous ajoutons donc un zéro devant les valeurs inférieures à 10 pour leur présentation.

Nous gardons `minutes` numérique et préparons son affichage dans une autre variable. Nous remplaçons le `console.log` final par :

```js
let displayedMinutes;
displayedMinutes = minutes;

if (minutes < ___) {
  displayedMinutes = "0" + minutes;
}

console.log(hours + ":" + displayedMinutes);
```

L’opérateur `<` signifie « est inférieur à ». Nous complétons la condition à partir de la limite repérée. Les guillemets font de `"0"` une chaîne : `+` assemble alors ce texte avec les minutes, au lieu d’ajouter le nombre zéro.

Le départ `13:59` doit maintenant produire `14:00`. Nous vérifions `13:08 → 13:09` et `13:09 → 13:10`, puis `13:37 → 13:38` et `13:04 → 13:05`, en changeant uniquement les valeurs initiales. Pour quatre minutes, nous écrivons le nombre `4` dans JavaScript.

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

Le résultat attendu après une minute est `0:00`. Nous comparons la sortie console à cet objectif, puis ajoutons la correction nécessaire, en conservant le report des minutes et leur affichage sur deux chiffres.

Nous gardons notre fichier et nos essais pour la reprise : ce défi termine la séance.

<details>
<summary><strong>Des cas pour vérifier notre proposition</strong></summary>

<a id="verification"></a>

<a id="prédire-vérifier-expliquer"></a>

### Vérifier les résultats

Nous changeons uniquement les valeurs initiales entre les essais, puis enregistrons et rechargeons. Nous comparons chaque sortie au résultat attendu :

| Départ | Sortie attendue |
|---|---|
| `13:37` | `13:38` |
| `13:59` | `14:00` |
| `23:58` | `23:59` |
| `23:59` | `0:00` |
| `07:05` | `7:06` |
| `00:00` | `0:01` |

Les heures peuvent rester affichées sur un chiffre : `7:06` convient pour le départ `07:05`. Si une sortie diffère du résultat attendu, nous suivons les valeurs ligne par ligne pour localiser la correction à apporter.

</details>

---

[Bilans de l’horloge dans le cours](../session_01.md#bilan-8) · [Fin du cours](../session_01.md#fin-du-cours)
