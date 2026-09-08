# Atelier 1 — `+1`, du binaire à l'horloge

[Support de la séance](../session_01.md) · [Programme](../index.md)

**Objectifs :** retrouver un contenu invisible avec l'inspecteur, distinguer une valeur de sa représentation, décoder du binaire et une couleur CSS hexadécimale, manipuler des variables, puis programmer le report d'une horloge.

La première partie commence dans l'inspecteur, puis se poursuit principalement dans la console. Après la pause, vous créerez un document HTML relié à un fichier JavaScript.

## 1. Un contenu invisible, une instruction et une variable

<a href="./session_01/let-there-be-light.html" target="_blank" rel="noopener noreferrer">Ouvrez le document HTML dans un nouvel onglet, en vue scindée</a>. La page paraît vide, avec son fond noir.

Ouvrez les outils de développement avec **F12** et choisissez **Éléments** ou **Inspecteur**. Dépliez `body`, puis observez les règles CSS qui s'y appliquent, sans les modifier.

Relevez :

1. le texte présent dans le document, son auteur et le titre de l'œuvre ;
2. les éléments HTML qui structurent les trois paragraphes et l'attribution ;
3. les valeurs de `color` et de `background-color` sur `body`.

Expliquez pourquoi le texte est lisible dans l'inspecteur mais invisible sur la page. En quoi l'inspecteur vous aiderait-il si une erreur de CSS produisait cette situation ?

Passez à la **Console** et suivez l'exploration de la première partie du [support](../session_01.md#1-une-action-visible-une-valeur-invisible), jusqu'à l'introduction de l'opérateur d'affectation `=`. Pendant les essais qui la précèdent, gardez le fond noir.

La variable `light` existe désormais. Affectez-lui une valeur :

```js
light = true;
```

Interrogez sa valeur :

```js
light;
```

La console répond `true`, mais l'apparence de la page ne change pas : le texte reste invisible.

L'opérateur `=` permet aussi d'affecter une valeur à une propriété. Le code de couleur est ici une chaîne de caractères, délimitée par des guillemets. Saisissez :

```js
document.body.style.backgroundColor = "#fff";
```

Décrivez ce qui apparaît. Retrouvez le texte de Sullivan et son attribution : avez-vous ajouté du contenu ou changé sa présentation ?

Modifiez maintenant l'état conservé dans la variable, puis relisez-le :

```js
light = false;
```

```js
light;
```

La valeur est `false`. Le texte est-il redevenu invisible ?

Complétez :

| Instruction | Valeur mémorisée ? | Effet visible ? |
|---|---|---|
| `light = true` | | |
| `document.body.style.backgroundColor = "#fff"` | | |
| `light = false` | | |

Expliquez en une phrase pourquoi la variable ne suffit pas à modifier la page.

## 2. Une valeur, plusieurs représentations

Une quantité de treize unités peut être écrite de plusieurs façons :

```text
|||||||||||||
13
1101
D
```

Associez chaque écriture à son système :

| Écriture | Système |
|---|---|
| `|||||||||||||` | |
| `13` | |
| `1101` | |
| `D` | |

Observez cette écriture maya :

<img src="../asset/mayan_number.png" alt="Écriture maya d'un nombre" width="161">

Sans convention supplémentaire, pouvez-vous retrouver sa valeur ? Notez les informations dont vous auriez besoin.

<details>
  <summary><strong>Afficher la décomposition</strong></summary>
  <img src="../asset/mayan_number_revealed.png" alt="Décomposition de l'écriture maya du nombre 1614">
</details>

La représentation ne porte pas son sens toute seule. Il faut connaître les symboles, leur valeur et les règles qui les organisent.

## 3. Décomposer un nombre décimal

Complétez la décomposition :

```text
847 = ___ + ___ + ___
847 = 8 × ___ + 4 × ___ + 7 × ___
847 = 8 × 10² + 4 × 10¹ + 7 × 10⁰
```

Dans la console, vérifiez :

```js
8 * 100 + 4 * 10 + 7 * 1;
```

### Le rôle du zéro

Décomposez `1023` :

```text
1023 = 1 × ____ + 0 × ____ + 2 × ____ + 3 × ____
```

Que changerait l'écriture `123` ? Expliquez ce que le zéro conserve dans `1023`.

## 4. Décoder le binaire

Chaque position binaire possède un poids :

| Bit | `2⁷` | `2⁶` | `2⁵` | `2⁴` | `2³` | `2²` | `2¹` | `2⁰` |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Poids | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

Pour décoder un nombre :

1. placez chaque bit sous son poids ;
2. gardez les poids placés sous un `1` ;
3. additionnez ces poids.

### Exemple guidé

| Position | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `00110011` | 0 | 0 | 1 | 1 | 0 | 0 | 1 | 1 |

```text
00110011₂ = 32 + 16 + 2 + 1 = 51₁₀
```

Vérifiez le calcul dans la console :

```js
32 + 16 + 2 + 1;
```

### À décoder

Complétez sans convertisseur :

| Binaire | Somme des poids | Décimal |
|---|---|---:|
| `00001101` | | |
| `01100110` | | |
| `10000000` | | |
| `11001100` | | |
| `11111111` | | |

### Observer le report

Complétez les valeurs suivantes :

```text
00001110 = __
00001111 = __
00010000 = __
```

Pourquoi `00001111 + 1` devient-il `00010000` ?

## 5. Décoder une couleur CSS hexadécimale

Le système hexadécimal utilise seize symboles.

| Hexadécimal | `0` | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9` | `A` | `B` | `C` | `D` | `E` | `F` |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Décimal | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |

Pour une paire `XY` :

```text
XY₁₆ = X × 16 + Y
```

Une couleur sur huit chiffres est organisée ainsi :

```text
# RR GG BB AA
  │  │  │  └─ alpha
  │  │  └──── bleu
  │  └─────── vert
  └────────── rouge
```

### Exemple guidé : `#336699CC`

Complétez :

```text
33₁₆ = 3 × 16 + 3  = ____
66₁₆ = 6 × 16 + 6  = ____
99₁₆ = 9 × 16 + 9  = ____
CC₁₆ = 12 × 16 + 12 = ____
```

L'alpha CSS exprimé entre 0 et 1 se calcule ainsi :

```text
alpha = valeur décimale / 255
```

Complétez la représentation équivalente :

```css
color: rgba(____, ____, ____, ____);
```

### À décoder

| Code CSS | Rouge | Vert | Bleu | Alpha |
|---|---:|---:|---:|---:|
| `#00000000` | | | | |
| `#FFFFFFFF` | | | | |
| `#FF880080` | | | | |

Pour `80₁₆`, l'alpha vaut `128 / 255`, soit environ `0,5`.

Complétez enfin :

```text
11001100₂ = ____₁₀ = ____₁₆
```

## 6. Représenter une heure

Ouvrez un nouvel onglet à l'adresse `about:blank`, puis sa console. Gardez le document de Sullivan dans son onglet : l'horloge est une nouvelle manipulation.

Dans la console, déclarez deux variables :

```js
let hours = 13;
let minutes = 37;
```

Interrogez-les séparément :

```js
hours;
minutes;
```

Écrivez une représentation de l'heure dans la page :

```js
document.write(hours + ":" + minutes);
```

Faites avancer les minutes :

```js
minutes + 1;
```

Relisez `minutes`. Sa valeur n'a pas changé : le calcul n'a pas été enregistré.

Enregistrez maintenant le résultat :

```js
minutes = minutes + 1;
```

Écrivez la nouvelle heure :

```js
document.write(hours + ":" + minutes);
```

### Constats avant la pause

Répondez sans chercher encore à corriger le programme :

1. Pourquoi deux heures apparaissent-elles ?
2. Quelle différence y a-t-il entre `minutes + 1` et `minutes = minutes + 1` ?
3. Qui fera le prochain `+1` si personne ne saisit une nouvelle instruction ?
4. Cette heure correspond-elle à l'heure réelle ?
5. Quel résultat obtient-on en partant de 59 minutes ?
6. Pourquoi `14:0` paraît-il moins correct que `14:00` alors que les valeurs sont identiques ?

**Pause — 15 minutes.**

## 7. Passer dans des fichiers

La console est utile pour expérimenter une instruction à la fois. Pour conserver notre programme, nous séparons maintenant le document de son comportement.

| Langage | Responsabilité |
|---|---|
| **HTML** | Décrire la structure et charger les ressources |
| **CSS** | Présenter les éléments : couleurs, tailles et disposition |
| **JavaScript** | Conserver l'état, appliquer les règles et modifier la page |

Cette organisation s'appelle la **séparation des responsabilités** (*Separation of Concerns*, ou SoC). Notre horloge n'a pas encore de travail de présentation : elle utilise donc un fichier HTML et un fichier JavaScript, sans feuille CSS pour le moment.

Créez ce dossier de travail :

```text
dev/
└── pwf/
    └── session_01/
        ├── index.html
        └── script.js
```

Dans `index.html` :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>+1 minute</title>
  <script src="script.js" defer></script>
</head>
<body></body>
</html>
```

Dans `script.js` :

```js
let hours = 13;
let minutes = 37;

document.write(hours + ":" + minutes);

minutes = minutes + 1;

document.write(hours + ":" + minutes);
```

Ouvrez `index.html` dans le navigateur. Le résultat confirme que deux appels à `document.write` produisent deux sorties.

Retirez les deux appels à `document.write`. Nous afficherons uniquement l'état final.

## 8. Construire `+1 minute`

### Étape 1 — L'opération ordinaire

```js
let hours = 13;
let minutes = 37;

minutes = minutes + 1;

document.write(hours + ":" + minutes);
```

Résultat : `13:38`.

### Étape 2 — Rencontrer la limite

Remplacez la valeur initiale des minutes par `59`.

Résultat actuel : `13:60`.

L'addition est juste, mais la représentation d'une heure n'accepte pas 60 dans le champ des minutes.

Formulez la règle avant d'écrire le code :

> Si les minutes atteignent 60, remettre les minutes à 0 et ajouter 1 aux heures.

Ajoutez :

```js
if (minutes === 60) {
  minutes = 0;
  hours = hours + 1;
}
```

Placez l'affichage après la condition.

### Étape 3 — Rencontrer une nouvelle limite

Testez avec :

```js
let hours = 23;
let minutes = 59;
```

Le report des minutes produit `24:0`. Il faut une seconde règle :

> Si les heures atteignent 24, remettre les heures à 0.

Cette situation apparaît à l'intérieur du premier report :

```js
if (minutes === 60) {
  minutes = 0;
  hours = hours + 1;

  if (hours === 24) {
    hours = 0;
  }
}
```

### Programme final

```js
let hours = 23;
let minutes = 59;

minutes = minutes + 1;

if (minutes === 60) {
  minutes = 0;
  hours = hours + 1;

  if (hours === 24) {
    hours = 0;
  }
}

document.write(hours + ":" + minutes);
```

Le programme avance d'une minute à chaque chargement. Il n'est ni automatique ni synchronisé avec l'heure réelle.

## 9. Prédire, vérifier, expliquer

Pour chaque cas, prédisez les valeurs avant de charger la page.

| Départ | Valeurs finales | Sortie actuelle | Écriture conventionnelle |
|---|---|---|---|
| `13:37` | 13 heures, 38 minutes | `13:38` | `13:38` |
| `13:59` | 14 heures, 0 minute | `14:0` | `14:00` |
| `23:58` | 23 heures, 59 minutes | `23:59` | `23:59` |
| `23:59` | 0 heure, 0 minute | `0:0` | `00:00` |
| `00:00` | 0 heure, 1 minute | `0:1` | `00:01` |

Expliquez :

1. ce que représente chacune des deux variables ;
2. pourquoi le premier `if` contient deux affectations ;
3. pourquoi le second `if` se trouve dans le premier ;
4. pourquoi les valeurs finales peuvent être justes alors que leur affichage reste incomplet ;
5. quels mécanismes manquent encore pour remplacer l'affichage, avancer automatiquement et suivre l'heure réelle.

## Conclusion

Complétez cette phrase :

> Pour faire `+1`, il faut connaître _______________________________________.

Puis reliez les éléments :

```text
action humaine → +1 → état mémorisé → compteur visible → progrès interprété
```

Un clic, un like et une vue sont des événements. Les représenter par un compteur est un choix de conception.
