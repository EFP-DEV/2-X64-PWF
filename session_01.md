# Session +1


## Sommaire

1. **Explorer une page apparemment vide** : retrouver le contenu dans le HTML et observer les règles CSS avec l’inspecteur.
2. **Valeurs, symboles et positions** : distinguer une quantité de son écriture et découvrir le rôle d'une base.
3. **Décomposer le décimal** : lire la valeur d'un chiffre selon sa position et comprendre le rôle du zéro.
4. **Représenter en binaire** : compter avec deux symboles et relier bits, octets et hexadécimal.
5. **Lire les couleurs en hexadécimal** : relier les paires `RR`, `GG` et `BB` aux valeurs RGB.

**Interlude — 10 minutes**

6. **Affecter une représentation** : utiliser `=` pour changer le fond et rendre le texte visible dans la console.
7. **Ajouter `1`, puis représenter une horloge** : reprendre le comptage en décimal, hexadécimal et binaire avant de l'appliquer aux minutes et aux heures.
8. **Faire avancer le temps** : ajouter une minute, distinguer calcul et affectation, puis rencontrer les limites des minutes et des heures.
9. **De la console aux fichiers** : conserver les instructions dans `clock.js`, chargé par `index.html`.
10. **Exprimer les règles avec `if`** : gérer les reports des minutes et des heures.

**Atelier**

[Exercice +1](./exercices/session_01.md) · [Programme du module](./index.md)

## 1. Une action visible, une valeur invisible


### Une page apparemment vide

<a href="./exercices/session_01/let-there-be-light.html" target="_blank" rel="noopener noreferrer">Ouvrez le document HTML dans un nouvel onglet, en vue scindée</a>. La page paraît vide : vous ne voyez qu'une surface noire. Cela suffit-il à conclure qu'elle ne contient rien ?

Ouvrez les outils de développement avec **F12**, ou **Ctrl + Shift + i** ou click droit puis **Inspecter**, puis choisissez **Éléments** ou **Inspecteur**, selon le navigateur. Dépliez le contenu de `body`. Retrouvez le texte de Louis H. Sullivan, ses trois paragraphes et son attribution. Quels éléments HTML les structurent ?

Sélectionnez `body` et observez ses règles CSS. Repérez `color` et `background-color` : le texte est noir et le fond aussi. Gardez ces valeurs pendant l'exploration.

Le contenu est présent et lisible dans l'inspecteur, même s'il est invisible sur la page. Une erreur de CSS peut produire cette situation : l'inspecteur permet alors de retrouver le contenu et de chercher ce qui empêche de le voir.

Gardez ce document ouvert et passez à la **Console** : que peut-on lui dire ? Nous allons observer les noms et les structures que le navigateur met à notre disposition.

Chaque bloc **À saisir** correspond à un essai séparé. Validez-le avec Entrée, puis observez la réponse avant de poursuivre. Les encadrés **À observer** montrent des réponses ou des éléments à retrouver ; ne les saisissez pas.

### Quelqu'un répond ?

Commencez par un mot qui vous vient naturellement.

**À saisir**

```js
hello
```

**À observer**

> `ReferenceError: hello is not defined`

Essayons autrement.

**À saisir**

```js
salut
```

Et avec votre prénom ? Avec `hi`, `coucou` ou `me` ? Les réponses changent-elles vraiment ? Repérez ce qui reste identique et ce qui reprend le mot saisi. Vous pouvez continuer après une erreur.

Essayons une phrase.

**À saisir**

```js
is this a trap ?
```

**À observer**

> `SyntaxError: Unexpected token 'this'`

Cette fois, le message est différent. Il désigne `this`. Essayons le tout seul.

**À saisir**

```js
this
```

**À observer**

> `Window { … }`

Dans cette console, quelque chose est accessible avec `this`. Dépliez la réponse. Quels mots reconnaissez-vous ? Les valeurs affichées à côté de ces mots ont-elles toutes la même apparence ?

### Suivre les mots qui apparaissent

La réponse commence par `Window`. Essayons ce nom, avec sa majuscule.

**À saisir**

```js
Window
```

**À observer**

> `ƒ Window() { [native code] }`

Retrouvez aussi `window`, avec une minuscule, parmi les propriétés affichées.

**À saisir**

```js
window
```

Une seule lettre a changé de casse. Obtenez-vous la même réponse ?

Dans cette liste, un autre nom attire l'attention : `alert`.

**À saisir**

```js
alert
```

**À observer**

> `ƒ alert() { [native code] }`

Des parenthèses apparaissent après son nom. Essayons de les reprendre.

**À saisir**

```js
alert()
```

Une boîte apparaît-elle ? Fermez-la, puis regardez ce que répond la console.

**À observer**

> `undefined`

Cette réponse peut donc accompagner un effet visible. Essayons de placer entre les parenthèses un élément déjà rencontré.

**À saisir**

```js
alert(this)
```

Comparez ce que montre la boîte avec ce que la console montrait pour `this`. Fermez-la, puis reprenez un de vos premiers essais.

**À saisir**

```js
alert(hello)
```

Reconnaissez-vous l'erreur ? Ajouter les parenthèses a-t-il suffi à faire reconnaître `hello` ?

### Que dit le HTML ?

Revenez au HTML de la page dans l'inspecteur. Sa première ligne contient une indication comme celle-ci.

**À observer dans le HTML**

```html
<!DOCTYPE html>
```

Avant de revenir à la console, décomposons cette expression. Décomposer consiste
à séparer un ensemble en parties plus petites pour chercher le sens de chacune :

```text
DOC + TYPE + HTML
```

Cette manière de raisonner est l'une des mécaniques de la programmation. Face à
un nom, une instruction ou un problème, on peut le décomposer en éléments plus
simples. On peut ensuite effectuer le mouvement inverse : composer plusieurs
éléments pour construire une expression plus précise. Nous utiliserons souvent
ces deux mouvements pour lire et écrire du code.

Dans `DOCTYPE HTML`, `TYPE` désigne un type et `HTML` nomme le langage du
document. `DOC` est une abréviation courante du mot anglais *document*. En
recomposant ces éléments, on peut donc lire cette ligne comme « document de type
HTML ».

Cette décomposition nous donne un nouvel indice : le mot à chercher pourrait
être `document`. Revenons maintenant dans la console et commençons à le saisir.
Observez les propositions qui apparaissent pendant la frappe : la console
reconnaît-elle ce mot ? Lorsqu'elle propose `document`, complétez le mot, puis
validez-le.

**À saisir**

```js
document
```

La console affiche alors le document HTML tout entier. Comme dans l'inspecteur,
on y retrouve une structure en arbre : le document contient des éléments qui
peuvent eux-mêmes en contenir d'autres. Cette organisation forme plusieurs
niveaux.

Nous pouvons maintenant composer une nouvelle expression à partir de
`document`. Ajoutez un point, sans encore valider. Le point sert d'élément de
navigation : il indique que nous voulons partir de `document` pour atteindre le
niveau suivant. La console peut alors proposer les noms accessibles depuis ce
point de départ.

**À saisir**

```js
document.
```

### Où chercher la couleur ?

Vous avez déjà repéré le CSS qui rend le texte et le fond noirs. Cherchons comment atteindre la couleur du fond depuis `document`. Essayons quelques noms possibles après un point.

**À saisir**

```js
document.css
```

**À saisir**

```js
document.cascade
```

**À saisir**

```js
document.style
```

Obtenez-vous une erreur, une valeur ou quelque chose à déplier ? Retrouve-t-on la même réponse que lorsqu'on saisit un nom inconnu tout seul ?

Revenez au HTML. Sur quel élément la couleur de fond est-elle définie ? Vous y retrouvez `body`.

**À saisir**

```js
document.body
```

Saisissez ensuite le début `document.body.` et regardez les suggestions de la console avant de valider. Y trouvez-vous `style` ?

**À saisir**

```js
document.body.style
```

Continuez avec `document.body.style.`. Parcourez les suggestions. Quels noms évoquent le fond ? La couleur ? Complétez à partir de ce que la console propose.

**À saisir**

```js
document.body.style.backgroundColor
```

Comparez le nom proposé avec `background-color` en CSS. Où est passé le tiret ? Quelle lettre est devenue majuscule ?

### `#000` est déjà une écriture

Dans la feuille de style, le fond est défini par `background-color: #000`. Cette suite de caractères n'est pas la couleur elle-même : c'est une représentation que le navigateur et les développeurs ont appris à interpréter.

Avant de modifier la page, cherchons comment une écriture peut porter une valeur.

## 2. Représenter n'est pas être

Une quantité n'est pas l'écriture qui permet de la communiquer. Treize objets restent treize objets, que l'on utilise treize marques, `13`, `1101` ou `D` pour les représenter.

Une quantité de treize objets peut notamment être représentée par :

- treize marques : `|||||||||||||` ;
- le nombre décimal `13` ;
- le nombre binaire `1101` ;
- le nombre hexadécimal `D`.

Ces écritures ne deviennent lisibles que lorsqu'un groupe partage leurs conventions. Pour comprendre `#000`, `1101` ou `D`, il faut donc identifier les symboles employés et les règles qui leur donnent une valeur.

### Une convention inconnue

Observez d'abord l'image sans explication :

<img src="./asset/mayan_number.png" alt="Écriture maya d'un nombre" width="161">

Quelle valeur voyez-vous ? Qu'est-ce qui vous manque pour la lire ?

<details>
  <summary><strong>Révéler les positions et la valeur</strong></summary>

  | Position | Symbole maya | Décomposition | Valeur |
  |---:|:---:|---:|---:|
  | 8 000 | — | 0 × 8 000 | 0 |
  | 400 | <img src="./asset/mayan_symbol_dots.svg" alt="Quatre points mayas" width="120"> | 4 × 400 | 1 600 |
  | 20 | <img src="./asset/mayan_symbol_shell.svg" alt="Coquillage maya, zéro" width="120"> | 0 × 20 | 0 |
  | 1 | <img src="./asset/mayan_symbol_fourteen.svg" alt="Quatorze : quatre points et deux barres mayas" width="120"> | 14 × 1 | 14 |
  | **Total** |  |  | **1 614** |
</details>

L'objectif n'est pas d'apprendre la numération maya. Cette image rend visible le besoin d'un système partagé : des symboles, des positions et des règles de lecture.

## 3. Systèmes de numération

Un système de numération définit des symboles et des règles permettant d'écrire des valeurs.

Dans un système positionnel, la valeur d'un symbole dépend :

- du symbole lui-même ;
- de sa position ;
- de la base utilisée.

### Base 10

Le système décimal utilise dix chiffres : `0 1 2 3 4 5 6 7 8 9`.

```text
847 = 800 + 40 + 7
847 = 8 × 100 + 4 × 10 + 7 × 1
847 = 8 × 10² + 4 × 10¹ + 7 × 10⁰
```

| Position | `10²` | `10¹` | `10⁰` |
|---|---:|---:|---:|
| Poids | 100 | 10 | 1 |
| Chiffre | 8 | 4 | 7 |

Le zéro ne signifie pas seulement « rien ». Dans `1023`, il maintient la position des centaines et indique qu'il y en a zéro.

## 4. Binaire : deux symboles, les mêmes principes

Le système binaire utilise `0` et `1`. Un bit est une position binaire. Huit bits permettent de représenter les valeurs entières de 0 à 255.

| Position | `2⁷` | `2⁶` | `2⁵` | `2⁴` | `2³` | `2²` | `2¹` | `2⁰` |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Poids | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| Bit | 1 | 1 | 0 | 0 | 1 | 1 | 0 | 0 |

```text
11001100₂
= 1×128 + 1×64 + 0×32 + 0×16 + 1×8 + 1×4 + 0×2 + 0×1
= 204₁₀
```

Le report apparaît clairement quand une position ne peut contenir que zéro ou un :

```text
00001111 + 1 = 00010000
```

## 5. Hexadécimal : la représentation des couleurs CSS

Le système hexadécimal utilise seize symboles :

```text
0 1 2 3 4 5 6 7 8 9 A B C D E F
```

Les lettres représentent les valeurs décimales 10 à 15. Deux chiffres hexadécimaux couvrent `00–FF`, soit `0–255`.

Une couleur CSS sur six chiffres suit la convention `#RRGGBB` :

| Paire | Signification | Intervalle décimal |
|---|---|---:|
| `RR` | Rouge | 0–255 |
| `GG` | Vert | 0–255 |
| `BB` | Bleu | 0–255 |

Décomposons `#336699` :

```text
33₁₆ = 3×16 + 3 = 51
66₁₆ = 6×16 + 6 = 102
99₁₆ = 9×16 + 9 = 153
```

La couleur contient donc les canaux RGB `(51, 102, 153)`.

```css
color: #336699;
color: rgb(51, 102, 153);
```

Le même nombre peut maintenant être lu dans trois systèmes :

```text
11001100₂ = 204₁₀ = CC₁₆
```

## 6. Affecter une représentation

Nous savons maintenant lire `background-color` et `#000`. Il faut encore demander
au navigateur de remplacer cette représentation par une autre. Pour cela,
JavaScript utilise le symbole `=` : il affecte la valeur située à droite au nom
placé à gauche.

Dans la console de la page de Sullivan, saisissez :

```js
document.body.style.backgroundColor = "#fff";
```

Le fond devient-il blanc ? Le texte noir apparaît alors. La ligne n'a pas
seulement calculé une valeur : elle a modifié une propriété du document.

Le même mécanisme permet de remettre le fond en noir :

```js
document.body.style.backgroundColor = "#000";
```

**Exercice supplémentaire**

Modifiez maintenant la couleur du texte pour qu'il reste visible sur le fond.
Cherchez la propriété CSS correspondante, puis affectez-lui une valeur avec
`=`. Par exemple, quelle instruction permettrait d'obtenir un texte blanc ?

Cette étape relie les systèmes de numération à une action observable : une
écriture comme `#fff` devient une valeur affectée à une propriété du navigateur.

---

## ⏸️ Interlude — pause de 10 minutes

> **On s'arrête ici pendant 10 minutes.**
>
> Éloignez-vous de l'écran, respirez, buvez un peu d'eau. À la reprise,
> nous passerons à `+1`, puis à sa représentation sous forme d'horloge.
>
> **Minuteur : 10:00** · Reprise ensuite avec la section suivante.

---


### Reprendre avec `+1`

Après l'interlude, reprenons rapidement le fil **ensemble au tableau**, sans
encore saisir de code. Dans chaque système, `+1` demande de passer à la
représentation suivante.

Commencez en **décimal**, puis recommencez ensuite en **hexadécimal** et en **binaire**.

---

## 7. Ajouter `1`, puis représenter une horloge

Le symbole `+1` exprime la même progression, mais l'écriture change selon le
système de numération. Le report apparaît lorsqu'une position a épuisé ses
symboles disponibles :

```text
8 + 1 = 9
9 + 1 = 10
```

Lorsque les symboles disponibles sont épuisés à une position, cette position
revient à zéro et le changement se propage à la position voisine. C'est le
report.

Nous allons maintenant appliquer ce principe à une représentation familière.

### Une horloge est aussi une représentation

`13:59` n'est pas le temps lui-même. C'est une écriture conventionnelle composée de deux champs séparés par `:`

Pour cette nouvelle manipulation, ouvrez un nouvel onglet à l'adresse `about:blank`, puis sa console. Gardez le document de Sullivan dans son onglet. Commencez par :

```js
let hours = 13;
let minutes = 37;

document.write(hours);
document.write(minutes);
```

Rechargez la page. Les deux valeurs sont-elles séparées comme sur une horloge ?
Réparez le code pour afficher les heures et les minutes sur une seule ligne :
remplacez ces deux instructions par une seule et ajoutez le caractère manquant
`:` entre les deux valeurs.

Maintenant modifiez la valeur avant son affichage, en ajoutant cette ligne au bon endroit :

```js
minutes = minutes + 1;
```

Observez maintenant le résultat et cherchez ce qui pourrait ne pas fonctionner :

1. `+ 1` fonctionne-t-il de la même manière avec toutes les valeurs de `minutes` ?
2. Le symbole `+` est-il forcément en cause, ou certaines valeurs produisent-elles un résultat surprenant ?
3. Toutes les valeurs affichées sont-elles correctes pour une horloge ?
4. Pouvez-vous trouver une valeur de départ qui fait que le programme ne se comporte plus comme une horloge ?

<details>
  <summary><strong>Révéler le résultat de l'observation</strong></summary>

  Avec une certaine valeur de départ, les minutes dépassent la limite permise
  par une horloge, tandis que la valeur des heures reste inchangée.
</details>

<details>
  <summary><strong>Révéler le bilan</strong></summary>

  Le programme présente donc deux problèmes : les minutes peuvent dépasser `59`
  et les heures ne changent jamais. Pour se comporter comme une horloge, le
  changement des heures doit dépendre de la valeur atteinte par les minutes.
</details>

## 8. Un programme dans deux fichiers

Jusqu'ici, les instructions ont été saisies directement dans la console. Créer un fichier `clock.js` permet d'introduire la **séparation des responsabilités** (*Separation of Concerns*, ou SoC).

| Langage | Responsabilité | Dans notre horloge |
|---|---|---|
| **HTML** | Décrire les éléments et la structure du document | Fournir la page qui charge le programme |
| **CSS** | Définir la présentation des éléments | Pourrait régler la typographie, les couleurs et la disposition |
| **JavaScript** | Représenter l'état, appliquer les règles et provoquer les changements | Conserver les heures et les minutes, effectuer `+1` et écrire le résultat |

Séparer ces responsabilités évite de mélanger structure, apparence et comportement dans un même fichier. Cette première horloge n'a pas encore besoin de règle CSS : nous créons donc `index.html` et `clock.js`, tout en situant clairement le rôle du troisième langage.

Le document HTML charge le programme :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>+1 minute</title>
  
</head>
<body>
  <script src="clock.js"></script>
</body>
</html>
```

Le fichier `clock.js` contient d'abord deux valeurs valides, puis l'opération :

```js
let hours = 13;
let minutes = 37;

minutes = minutes + 1;
document.write(hours + ':' + minutes);
```

### Le report des minutes

```js
if (minutes === 60) {
  // le coeur d'une horloge 
}
```

`===` compare deux valeurs. Le bloc est exécuté uniquement lorsque la comparaison est vraie.

### Le report des heures

#### Deux bugs corrigés, 1 nouveau bug apparaît

Les deux premiers problèmes ont été corrigés

Seul ou en groupe de trois maximum, vous devez :

1. trouver le nouveau bug ;
2. proposer une correction ;
3. expliquer votre raisonnement.

--- 

## Fin du cours

Le cours est terminé. Le prochain cours se déroulera de la même manière : nous
alternerons les explications, les manipulations et les recherches en groupes.

La seule différence sera qu'il faudra rendre le programme réalisé en fin de
cours en utilisant **GitHub**. Vous devez donc vous inscrire à GitHub avant le
prochain cours. Cette inscription est un prérequis pour pouvoir remettre votre
programme.
