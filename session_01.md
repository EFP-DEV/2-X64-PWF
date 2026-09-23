# Session +1

Ce document conserve le fil du cours : les manipulations, les constats et les notions qui les expliquent. Les manipulations sont regroupées dans trois fiches :

- [Exploration — la page, l’inspecteur et la console](./exercices/session_01-exploration.md)
- [Couleurs — une valeur, plusieurs écritures](./exercices/session_01-couleurs.md)
- [Horloge — ajouter une minute](./exercices/session_01-horloge.md)

Chaque fiche rassemble les consignes de son parcours. Les explorations de numération se font directement dans ce document. Les bilans se lisent après les manipulations et la mise en commun ; ils permettent ensuite de retrouver les notions.

La séance se termine avec l’horloge : on écrit le programme ensemble et on corrige le passage de `13:59` à `14:00`. Un défi clôture le parcours : régler les heures à `23` et les minutes à `59`, et corriger le comportement obtenu.

## Sommaire

1. [Une action visible, une valeur invisible](#1-une-action-visible-une-valeur-invisible)
2. [Du nom de couleur à trois quantités](#2-du-nom-de-couleur-à-trois-quantités)
3. [`255` et `FF` : une même quantité, deux écritures](#3-255-et-ff--une-même-quantité-deux-écritures)
4. [Lire une couleur CSS en hexadécimal](#4-lire-une-couleur-css-en-hexadécimal)
5. [Binaire — prolongement facultatif](#5-binaire--deux-symboles-les-mêmes-principes--prolongement)
6. [Monter jusqu’à la base 20](#6-monter-jusquà-la-base-20)
7. [Compter avec soixante valeurs par position](#7-compter-avec-soixante-valeurs-par-position)

**Interlude — 10 minutes**

8. [Faire avancer le temps](#8-faire-avancer-le-temps)
9. [De la console aux fichiers](#9-de-la-console-aux-fichiers)
10. [Exprimer les règles avec `if`](#10-exprimer-les-règles-avec-if)

[Fin du cours — le défi de minuit](#fin-du-cours)

## 1. Une action visible, une valeur invisible

La page paraît vide. On utilise l’inspecteur pour retrouver son contenu et rendre le texte visible, puis on reproduit ce changement avec JavaScript.

[Exploration — la page, l’inspecteur et la console](./exercices/session_01-exploration.md)

<a id="bilan-1"></a>

**Bilan.** Ce que l’on voit à l’écran dépend à la fois du contenu et des règles qui le présentent. Le texte était présent dans le HTML, mais sa couleur et celle du fond le rendaient invisible. L’inspecteur permet d’examiner le contenu et les règles CSS pour comprendre ce résultat.

La console interprète du JavaScript. Un nom inconnu produit une erreur de référence ; une expression mal formée peut produire une erreur de syntaxe. La casse compte : `Window` et `window` ne désignent pas la même chose. Dans la console de cette page, `this` donne accès à l’objet global `window`. Un nom comme `alert` permet de retrouver une fonction ; les parenthèses permettent de l’appeler. Une réponse `undefined` peut accompagner un effet visible.

Décomposer un nom aide à chercher son sens : `DOC + TYPE + HTML` évoque le type d’un document HTML. La déclaration `<!DOCTYPE html>` permet au navigateur d’utiliser son mode de rendu standard. Composer permet ensuite de construire une expression à partir de plusieurs éléments connus.

Le navigateur donne accès au document par `document`. Sa structure forme un arbre d’éléments. Dans une expression JavaScript, le point accède à une **propriété** de l’objet situé à gauche ; il ne signifie pas nécessairement descendre dans cet arbre. Dans `document.body.style.backgroundColor`, `body` désigne un élément HTML, mais `style` et `backgroundColor` ne sont pas des éléments supplémentaires.

La propriété `.style` donne accès aux déclarations placées directement dans l’attribut `style` de l’élément. Une couleur définie seulement dans une feuille de style n’y apparaît pas. Les panneaux **Styles** et **Calculé / Computed** permettent d’examiner les règles et les valeurs appliquées. Le nom CSS `background-color` devient `backgroundColor` dans l’accès JavaScript utilisé ici.

Le symbole `=` **affecte** la valeur située à droite à la variable ou à la propriété située à gauche. Les guillemets délimitent une valeur textuelle, appelée **chaîne de caractères**. Le point-virgule marque ici la fin de l’instruction.

On peut agir sur une couleur. L’étape suivante consiste à comparer ses différentes écritures, avec des mots ou des chiffres.

## 2. Du nom de couleur à trois quantités

Le CSS contient `white`, `black` et `#000`. On applique plusieurs écritures d’une même couleur, puis on fait varier ses composantes rouge, verte et bleue.

[Fiche couleurs — du nom aux trois canaux RGB](./exercices/session_01-couleurs.md#rgb)

<a id="bilan-2"></a>

**Bilan.** CSS possède des noms de couleurs prédéfinis, comme `white`, `black`, `red`, `blue` et `navy`. Il propose aussi des représentations structurées. Le blanc peut être décrit par `white`, `rgb(255, 255, 255)` ou `#ffffff`.

Un écran émet de la lumière. On peut imaginer trois variateurs, un rouge, un vert et un bleu, dont les lumières se superposent : c’est la **synthèse additive**. Ajouter des pigments tend à absorber davantage de lumière ; ajouter de la lumière sur un écran rend le résultat plus lumineux.

Dans la représentation RGB utilisée ici, les trois quantités suivent toujours l’ordre **rouge, vert, bleu**. Pour chaque canal, `0` représente l’absence de cette composante et `255` son maximum. Trois canaux à zéro donnent du noir ; trois canaux au maximum donnent du blanc.

La comparaison du blanc rapproche trois valeurs `255` de trois paires `FF`. On va décomposer ces écritures pour retrouver la quantité représentée par chacune.

## 3. `255` et `FF` : une même quantité, deux écritures

On décompose `255` et `FF` selon le poids de leurs positions. Les deux calculs donnent la même quantité, avec des symboles différents.

[Fiche couleurs — comprendre l’hexadécimal](./exercices/session_01-couleurs.md#hexadecimal)

<a id="bilan-3"></a>

**Bilan.** Le système décimal utilise dix symboles, de `0` à `9`. Le système hexadécimal en utilise seize : les mêmes chiffres, puis `A`, `B`, `C`, `D`, `E` et `F`, qui représentent les quantités 10 à 15.

Les deux systèmes sont **positionnels** : la contribution d’un chiffre dépend de sa position. Les poids sont des puissances de la base : 1, 10, 100… en décimal ; 1, 16, 256… en hexadécimal.

```text
255₁₀ = 2 × 100 + 5 × 10 + 5 × 1
FF₁₆  = 15 × 16 + 15 × 1
255₁₀ = FF₁₆
```

Les petits indices indiquent le système utilisé pour lire ces exemples. Ils ne font pas partie de la syntaxe CSS ou JavaScript.

On sait maintenant lire une paire hexadécimale. Il reste à comprendre comment CSS organise les trois paires d’une couleur.

## 4. Lire une couleur CSS en hexadécimal

On sépare `#336699` en trois paires pour retrouver les quantités RGB. On développe ensuite les écritures courtes en répétant chacun de leurs trois chiffres.

[Fiche couleurs — lire et modifier une couleur CSS](./exercices/session_01-couleurs.md#couleurs-css)

<a id="bilan-4"></a>

**Bilan.** Une couleur CSS sur six chiffres suit la convention `#RRGGBB`. Les paires représentent, dans cet ordre, le rouge, le vert et le bleu. Chacune va de `00` à `FF`, soit de 0 à 255. Le croisillon annonce cette écriture au navigateur ; les lettres peuvent être en minuscules ou en majuscules.

L’écriture abrégée `#RGB` répète chaque chiffre pour retrouver `#RRGGBB`. Ainsi, `#123` signifie `#112233`, pas `#000123`.

**Une valeur n’est pas sa représentation.** La représentation peut changer sans changer la valeur représentée. JavaScript affecte ici du texte à une propriété de style ; le navigateur interprète ensuite ce texte comme une couleur.

Les modifications réalisées dans l’inspecteur et dans la console n’ont pas changé les fichiers d’origine. Un rechargement reconstruit la page depuis ces fichiers ; les instructions de la console ne sont pas rejouées automatiquement.

Le décimal et l’hexadécimal utilisent des nombres différents de symboles. Le binaire reprend le même principe de positions avec seulement deux symboles.

## 5. Binaire : deux symboles, les mêmes principes — prolongement

On représente les mêmes valeurs avec les deux symboles `0` et `1`. Ce prolongement facultatif se fait dans les notes de cours ; il n’est pas nécessaire pour construire l’horloge.

### Garder les poids des positions actives

La démonstration utilise les poids suivants :

| Position | `2⁷` | `2⁶` | `2⁵` | `2⁴` | `2³` | `2²` | `2¹` | `2⁰` |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Poids | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

On place les bits sous leurs poids, puis on additionne les poids placés au-dessus d’un `1`.

| Binaire | Somme des poids retenus | Valeur décimale |
|---|---|---|
| `00000001` | 1 | 1 |
| `00000011` | 2 + 1 | 3 |
| `11111111` | 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 | 255 |

On passe de un à trois en mettant à `1` le bit de poids 2. Le bit de poids 1 reste à `1`.

### Retrouver le lien avec les couleurs

La valeur maximale d’un canal de couleur apparaît dans les trois écritures :

```text
11111111₂ = 255₁₀ = FF₁₆
```

<details>
<summary><strong>Vérifier le total des huit poids</strong></summary>

```text
128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255
11111111₂ = 255₁₀ = FF₁₆
```

</details>

On vérifie les limites en additionnant les poids : `8 + 4 + 2 + 1 = 15` pour quatre bits, et `255` pour huit bits. Avec tous les bits à zéro, le résultat est `0`.

<a id="bilan-5"></a>

**Bilan.** Le binaire utilise les chiffres `0` et `1`. Un **bit** est un chiffre binaire ; un **octet** contient huit bits. Interprétés comme un entier non signé, ces huit bits représentent les valeurs de 0 à 255.

Les poids successifs sont 1, 2, 4, 8, 16, 32, 64 et 128. Quatre bits couvrent les valeurs de 0 à 15, comme un chiffre hexadécimal ; huit bits correspondent donc à deux chiffres hexadécimaux.

```text
11111111₂ = 255₁₀ = FF₁₆
```

On prolonge le même principe avec vingt valeurs possibles par position.

## 6. Monter jusqu'à la base 20

Une convention inconnue paraît difficile à lire. On va retrouver une quantité familière à partir d’autres symboles et d’autres poids de position.

On explore cette représentation avec la démonstration et les notes de cours.

### Une convention devenue étrangère

On observe cette écriture maya avant d’ouvrir la décomposition :

<img src="./asset/mayan_number.png" alt="Écriture maya d'un nombre" width="161">

Des points, des barres et un coquillage sont visibles. La décomposition ci-dessous associe ces symboles à leurs valeurs et à leurs positions.

<details>
<summary><strong>Révéler les positions et la valeur</strong></summary>

<p>Pour cet exemple de numération positionnelle en base 20, les positions valent successivement 1, 20, 400 et 8 000.</p>

<table>
  <thead>
    <tr><th scope="col">Position</th><th scope="col">Symbole maya</th><th scope="col">Décomposition</th><th scope="col">Valeur</th></tr>
  </thead>
  <tbody>
    <tr><td>8 000</td><td>Position non écrite</td><td>0 × 8 000</td><td>0</td></tr>
    <tr><td>400</td><td><img src="./asset/mayan_symbol_dots.svg" alt="Quatre points mayas" width="120"></td><td>4 × 400</td><td>1 600</td></tr>
    <tr><td>20</td><td><img src="./asset/mayan_symbol_shell.svg" alt="Coquillage maya, zéro" width="120"></td><td>0 × 20</td><td>0</td></tr>
    <tr><td>1</td><td><img src="./asset/mayan_symbol_fourteen.svg" alt="Quatorze : quatre points et deux barres mayas" width="120"></td><td>14 × 1</td><td>14</td></tr>
    <tr><th scope="row">Total</th><td></td><td></td><td><strong>1 614</strong></td></tr>
  </tbody>
</table>

</details>

On lit les positions de bas en haut : unités, groupes de vingt, puis groupes de quatre cents. Le coquillage marque zéro à la position des vingtaines ; les quatre points de la position supérieure contribuent donc pour `4 × 400`.

<a id="une-convention-vraiment-étrangère-"></a>

### Des traces de la base 20 en français

On compte maintenant les dizaines en français :

```text
dix
vingt
trente
quarante
cinquante
soixante
...
quatre-vingts
```

On s’arrête sur ce dernier nom :

```text
quatre × vingt
```

On écoute aussi la manière dont le français compose quelques valeurs :

```text
quatre-vingt-dix    quatre × vingt + dix
quatre-vingt-seize  quatre × vingt + seize
soixante-dix        soixante + dix
```

Le nom `quatre-vingts` représente quatre groupes de vingt. Les autres noms de la liste montrent que le français combine plusieurs manières de composer les nombres.

<a id="bilan-6"></a>

**Bilan.** Un système en base 20 est appelé **vigésimal**. Dans la convention positionnelle de l’exemple, les poids successifs sont 1, 20, 400 et 8 000. Lire l’écriture suppose de connaître les symboles, leur valeur, les positions et le sens de lecture. Le zéro conserve une position même lorsque sa contribution au total est nulle.

L’objectif n’est pas d’apprendre la numération maya, mais de reconnaître ce qui permet de comprendre une représentation. Le français n’est pas entièrement vigésimal, mais `quatre-vingts` et les nombres qui suivent conservent des traces de cette organisation.

On passe maintenant à un comptage où chaque position peut prendre soixante valeurs avant le report.

<a id="7-un-système-encore-plus-étrange-"></a>

## 7. Compter avec soixante valeurs par position

On suit les reports dans une écriture composée de groupes allant de 0 à 59.

La révélation reste fermée pendant la première partie de la démonstration.

### Un comptage inhabituel

On imagine que chaque position peut prendre les valeurs de 0 à 59. Pour la démonstration, on les écrit en décimal : le groupe de gauche n’a pas de zéro initial, les groupes suivants ont deux chiffres. On colle les groupes sans séparateur.

On observe la suite :

```text
1
2
...
9
10
11
...
59
100
101
...
159
200
...
559
600
...
959
1000
...
5959
10000
```

On suit les passages `59 → 100`, `559 → 600` et `959 → 1000`. Dans chaque cas, le groupe de droite revient à `00` et celui de gauche augmente d’une unité. Sans séparateur, les limites entre les groupes sont difficiles à repérer.

Cette convention sert à la démonstration ; elle ne prétend pas reproduire une écriture babylonienne historique.

### Ajouter ce qui manque

<details>
<summary><strong>Ajouter un séparateur entre les groupes</strong></summary>

```text
1359 → 13:59
```

Une écriture familière apparaît : `13:59` peut se lire comme une heure. Le champ de gauche indique les heures, celui de droite les minutes.

On ajoute une minute aux heures suivantes, sans JavaScript, en suivant le report :

| Départ | Après une minute | Champs modifiés |
|---|---|---|
| `05:58` | `05:59` | Minutes |
| `05:59` | `06:00` | Heures et minutes |
| `09:59` | `10:00` | Heures et minutes |

On applique le report après 59 minutes. Le séparateur `:` rend les deux champs lisibles. Dans une horloge de 24 heures, les heures sont limitées à 23 ; le comptage artificiel de la démonstration utilise, lui, des groupes allant jusqu’à 59.
</details>

<a id="bilan-7"></a>

**Bilan.** Un système en base 60 est appelé **sexagésimal**. Les minutes et les secondes des représentations usuelles du temps utilisent un report après 59. On lit déjà ces champs sans devoir inventer soixante nouveaux symboles : ils s’écrivent avec les chiffres décimaux et des séparateurs.

Le séparateur rend lisible l’organisation des champs. Le report dépend de la convention choisie. Le comptage artificiel de l’activité illustre cette règle ; il ne reproduit pas une écriture babylonienne historique.

On va appliquer cette idée à une horloge de 24 heures. La limite de ses minutes sera 60 et celle de ses heures sera 24.

## ⏸️ Interlude — pause de 10 minutes

La reprise commence avec la [fiche horloge](./exercices/session_01-horloge.md) : représenter une heure par deux valeurs nommées.

## 8. Faire avancer le temps

`13:59` est une représentation du temps composée de deux champs. On nomme leurs valeurs avec deux variables, puis on les assemble avec le séparateur `:`.

[Fiche horloge — nommer une heure dans la console](./exercices/session_01-horloge.md#variables)

<a id="bilan-8"></a>

**Bilan.** `let` déclare une variable : un nom auquel on peut associer une valeur, puis en affecter une autre. Déclarer le nom et lui affecter une valeur sont deux opérations distinctes. Une nouvelle affectation suffit pour changer une variable déjà déclarée.

Avec deux nombres, `+` effectue une addition. Dans les expressions de cette séance, lorsqu’un opérande est une chaîne de caractères, il assemble du texte : c’est la **concaténation**. Le nombre est alors converti en texte.

La console interactive montre la valeur de l’expression saisie. On va conserver les essais dans un fichier JavaScript et utiliser `console.log(...)` pour continuer à observer leurs résultats.

## 9. De la console aux fichiers

On enregistre les instructions dans un fichier, puis on compare un calcul seul à une affectation qui conserve son résultat.

[Fiche horloge — conserver le programme dans des fichiers](./exercices/session_01-horloge.md#fichiers)

<a id="bilan-9"></a>

**Bilan.** L’attribut `src` de la balise `script` indique le fichier JavaScript à charger. `console.log(...)` demande explicitement d’écrire une valeur dans la console. Les chaînes peuvent y apparaître sans guillemets : leur nature n’a pas changé.

`minutes + 1` calcule un résultat. L’affectation `minutes = minutes + 1` conserve ce résultat dans la variable. Au rechargement, le programme repart des valeurs initiales écrites dans son fichier.

| Responsabilité | Dans cette étape |
|---|---|
| HTML | Décrire la structure du document et charger le programme |
| CSS | Présenter les éléments ; aucune mise en forme n’est nécessaire ici |
| JavaScript | Représenter l’état, appliquer les règles et produire des résultats |

Cette **séparation des responsabilités** concerne ce que chaque partie prend en charge. Des fichiers séparés aident à l’organiser. Dans JavaScript, on distingue déjà l’état, le calcul et son observation.

Une valeur numérique et sa présentation restent distinctes : les zéros de `07:05` concernent l’affichage. À cette étape, on observe les nombres tels quels ; la suite de la fiche horloge travaillera l’affichage des minutes sur deux chiffres.

L’addition seule peut produire 60 minutes sans changer les heures. Le calcul est juste, mais la représentation du temps demande une règle supplémentaire.

## 10. Exprimer les règles avec `if`

On ajoute un bloc `if` pour appliquer le report lorsque les minutes atteignent 60, puis un second pour préparer leur affichage sur deux chiffres.

[Fiche horloge — corriger les minutes et leur affichage](./exercices/session_01-horloge.md#conditions)

<a id="bilan-10"></a>

**Après le travail collectif.** `if` exécute un bloc lorsque sa condition est vraie. Les accolades délimitent ce bloc. `===` teste une égalité stricte, tandis que `=` affecte une valeur. Une comparaison produit `true` ou `false`. Les lignes commençant par `//` sont des commentaires.

En partant de `13:59`, l’addition produit d’abord 60 minutes. Le bloc conditionnel remet les minutes à zéro et ajoute une heure. Le programme affiche alors `14:0`. Le test d’égalité avec 60 convient ici parce que les valeurs de départ sont valides et que l’on ajoute exactement une minute.

Pour afficher `14:00`, on prépare séparément le texte des minutes : si leur valeur est inférieure à 10, on ajoute un `"0"` devant. L’opérateur `<` compare deux valeurs ; `"0" + minutes` assemble du texte. La variable `minutes` conserve sa valeur numérique pour les calculs.

La suite d’étapes forme un **algorithme**, indépendant du langage utilisé pour l’exprimer :

```text
ajouter une minute
si les minutes atteignent 60 : les remettre à 0 et ajouter une heure
préparer l’affichage des minutes sur deux chiffres
afficher les heures et les minutes
```

Son expression en instructions JavaScript forme le **programme**. On l’a écrit ensemble dans un fichier et observé dans la console. Le passage de `13:59` à `14:00` fonctionne ; il reste à éprouver le programme avec une autre heure de départ.

## Fin du cours

**Le défi de clôture : on règle les heures à `23`, les minutes à `59`, puis on corrige le programme.**

[Défi et cas de vérification dans la fiche horloge](./exercices/session_01-horloge.md#defi-minuit)

Le résultat attendu après une minute est `0:00`. On enregistre le fichier, puis on recharge la page pour comparer la sortie console à cet objectif et corriger le programme. On garde le fichier et les essais pour la reprise.

L’affectation a permis de conserver un calcul, le `if` de reporter les minutes vers les heures et une variable distincte d’afficher `0` sous la forme `"00"`. Le cas de minuit constitue la recherche finale de la séance.

Le prochain cours alternera lui aussi explications, manipulations et recherches en groupes. Il faudra rendre l’application réalisée en fin de cours en utilisant **GitHub**. La création d’un compte avant cette prochaine séance est donc un prérequis pour remettre le programme. Aucun dépôt n’est demandé pour cette séance.
