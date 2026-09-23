# Horloge — ajouter une minute

[Cours — l’horloge](../session_01.md#8-faire-avancer-le-temps)

On part de deux valeurs dans la console pour écrire ensemble un programme dans un fichier, puis on corrige le passage de `13:59` à `14:00`. Le défi final sera de faire fonctionner le programme à partir de `23:59`.

On complète les emplacements `___` avant d’exécuter les instructions. Après chaque modification d’un fichier, on l’enregistre, puis on recharge la page. Les essais utilisent des heures de 0 à 23 et des minutes de 0 à 59 ; le programme ajoute exactement une minute.

<a id="variables"></a>

## 1. Nommer une heure dans la console

On reprend la console de la page de Sullivan pour déclarer les deux variables et leur affecter les nombres `13` et `37` :

```js
let hours;
let minutes;

hours = ___;
minutes = ___;
```

Si ces noms sont déjà déclarés, on les réutilise avec les deux affectations, sans répéter `let`. Un rechargement permet de repartir de zéro.

On saisit séparément les expressions suivantes pour retrouver les résultats du tableau. Les guillemets indiquent ici les résultats textuels ; leur affichage dans la console dépend du navigateur.

| Expression | Résultat attendu | Type |
|---|---|---|
| `37 + 1` | `38` | Nombre |
| `"37" + 1` | `"371"` | Texte |
| `"13" + ":" + "37"` | `"13:37"` | Texte |
| `hours + minutes` | `50` | Nombre |
| `hours + ":" + minutes` | `"13:37"` | Texte |

Deux usages de `+` apparaissent : avec deux nombres, il additionne ; dans ces expressions, dès qu’un opérande est du texte, il assemble les valeurs sous forme de texte. Les guillemets délimitent une chaîne de caractères.

<a id="fichiers"></a>

## 2. Conserver le programme dans des fichiers

<a href="./session_01/clock.html" download="clock.html">On télécharge le document de départ `clock.html`</a>. On l’enregistre dans un dossier consacré à l’horloge, puis on crée un fichier vide `clock.js` à côté. Si ces deux fichiers existent déjà, on les réutilise.

```text
session_01/
├── clock.html
└── clock.js
```

La balise `<script src="clock.js"></script>` se trouve à la fin de `body`. Son attribut `src` indique au navigateur de charger le fichier `clock.js` situé à côté du document HTML.

### Rendre les résultats observables

On écrit ensemble ce programme dans `clock.js`, en complétant les appels à `console.log` pour retrouver les résultats du tableau :

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

On enregistre le programme, puis on ouvre `clock.html` dans le navigateur et sa console. Les résultats du tableau apparaissent : `console.log(...)` les écrit explicitement dans la console. Un fichier JavaScript n’affiche pas spontanément le résultat de chaque expression. La page reste vide, car les instructions ne modifient pas son contenu.

### Calculer n’est pas affecter

On conserve les déclarations et les valeurs initiales. Seuls les cinq appels précédents sont remplacés par :

```js
console.log(hours + ":" + minutes);
console.log(minutes + 1);
console.log(minutes);

minutes = ___;

console.log(minutes);
console.log(hours + ":" + minutes);
```

On complète l’affectation pour ajouter une minute et conserver le résultat. Après enregistrement et rechargement, les cinq sorties attendues sont : `13:37`, `38`, `37`, `38`, puis `13:38`. Le troisième affichage montre que le calcul seul a laissé `minutes` à `37`. Après l’affectation, la variable contient `38`. Un rechargement reproduit la même suite à partir des valeurs initiales du fichier.

On essaie temporairement `7` heures et `5` minutes. La sortie finale est `7:6` : les zéros initiaux concernent la présentation, pas les valeurs utilisées pour calculer. L’affichage sera travaillé après la correction du calcul. Ici, le HTML charge le programme ; JavaScript calcule et écrit dans la console. Le CSS servira à présenter les éléments de la page.

### Trouver la limite

On remet les valeurs initiales à `13` et `37`. Les déclarations et ces valeurs restent en place ; on simplifie la suite pour ne conserver que l’addition affectée et l’affichage final :

```js
minutes = minutes + 1;
console.log(hours + ":" + minutes);
```

Le résultat est `13:38`. On change alors les valeurs initiales pour `13` heures et `59` minutes : le programme affiche `13:60`. L’addition fonctionne ; le report vers les heures reste à programmer. On va compléter le programme pour obtenir `14:00`.

<a id="conditions"></a>

## 3. Ensemble — passer de `13:59` à `14:00`

### Le report des minutes

On complète ensemble ce bloc `if`, puis on le place **après l’addition et avant l’affichage** :

```js
if (minutes === ___) {
  minutes = ___;
  hours = ___;
}
```

On enregistre le fichier, puis on recharge la page. Le programme affiche maintenant `14:0`. Le bloc teste les minutes avec `===`, puis change les valeurs avec `=`. Placé après l’addition et avant l’affichage, il corrige l’état avant de le montrer. Les minutes de départ vont de 0 à 59 et on ajoute exactement une minute : la seule valeur à corriger est donc 60.

### De `14:0` à `14:00`

Le nombre de minutes est correct. On compare `9` et `10` : le premier s’écrit avec un chiffre, le second avec deux. On ajoute donc un zéro devant les valeurs inférieures à 10 pour leur présentation.

La variable `minutes` reste numérique ; on prépare son affichage dans une autre variable. On remplace le `console.log` final par :

```js
let displayedMinutes;
displayedMinutes = minutes;

if (minutes < ___) {
  displayedMinutes = "0" + minutes;
}

console.log(hours + ":" + displayedMinutes);
```

L’opérateur `<` signifie « est inférieur à ». On complète la condition à partir de la limite repérée. Les guillemets font de `"0"` une chaîne : `+` assemble alors ce texte avec les minutes, au lieu d’ajouter le nombre zéro.

Le départ `13:59` doit maintenant produire `14:00`. On vérifie `13:08 → 13:09` et `13:09 → 13:10`, puis `13:37 → 13:38` et `13:04 → 13:05`, en changeant uniquement les valeurs initiales. Pour quatre minutes, on écrit le nombre `4` dans JavaScript.

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

On repère l’état initial, le calcul, le report et la préparation de l’affichage. Après le report, `minutes` vaut le nombre `0`, tandis que `displayedMinutes` contient le texte `"00"`.

</details>

<a id="defi-minuit"></a>

## 4. Défi de clôture — `23:59`

**On règle les heures à `23`, les minutes à `59`, puis on corrige le programme.**

Le résultat attendu après une minute est `0:00`. On compare la sortie console à cet objectif, puis on ajoute la correction nécessaire, en conservant le report des minutes et leur affichage sur deux chiffres.

On garde le fichier et les essais pour la reprise : ce défi termine la séance.

<details>
<summary><strong>Des cas pour vérifier la correction</strong></summary>

<a id="verification"></a>

<a id="prédire-vérifier-expliquer"></a>

### Vérifier les résultats

On change uniquement les valeurs initiales entre les essais, puis on enregistre le fichier et on recharge la page. On compare chaque sortie au résultat attendu :

| Départ | Sortie attendue |
|---|---|
| `13:37` | `13:38` |
| `13:59` | `14:00` |
| `23:58` | `23:59` |
| `23:59` | `0:00` |
| `07:05` | `7:06` |
| `00:00` | `0:01` |

Les heures peuvent rester affichées sur un chiffre : `7:06` convient pour le départ `07:05`. Si une sortie diffère du résultat attendu, on suit les valeurs ligne par ligne pour localiser la correction à apporter.

</details>

---

[Bilans de l’horloge dans le cours](../session_01.md#bilan-8) · [Fin du cours](../session_01.md#fin-du-cours)
