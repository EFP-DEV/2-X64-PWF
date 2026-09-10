# Session +1

[Programme du module](./index.md)

Ce document conserve le fil du cours : les questions de départ, les notions découvertes et les liens entre elles. Les explorations, démonstrations et exercices se trouvent dans les fiches numérotées. Pour chaque étape, le parcours est le même : **question → activité → bilan → question suivante**.

Le bilan se lit après l’activité et la mise en commun. Il permet ensuite de retrouver les notions sans refaire toutes les manipulations.

## Sommaire

1. [Une action visible, une valeur invisible](#1-une-action-visible-une-valeur-invisible) · [Activité 1](./exercices/session_01-1.md)
2. [Du nom de couleur à trois quantités](#2-du-nom-de-couleur-à-trois-quantités) · [Activité 2](./exercices/session_01-2.md)
3. [`255` et `FF` : une même quantité, deux écritures](#3-255-et-ff--une-même-quantité-deux-écritures) · [Activité 3](./exercices/session_01-3.md)
4. [Lire une couleur CSS en hexadécimal](#4-lire-une-couleur-css-en-hexadécimal) · [Activité 4](./exercices/session_01-4.md)
5. [Binaire — prolongement facultatif](#5-binaire--deux-symboles-les-mêmes-principes--prolongement) · [Activité 5](./exercices/session_01-5.md)
6. [Monter jusqu’à la base 20](#6-monter-jusquà-la-base-20) · [Activité 6](./exercices/session_01-6.md)
7. [Un système encore plus étrange ?](#7-un-système-encore-plus-étrange-) · [Activité 7](./exercices/session_01-7.md)

**Interlude — 10 minutes**

8. [Faire avancer le temps](#8-faire-avancer-le-temps) · [Activité 8](./exercices/session_01-8.md)
9. [De la console aux fichiers](#9-de-la-console-aux-fichiers) · [Activité 9](./exercices/session_01-9.md)
10. [Exprimer les règles avec `if`](#10-exprimer-les-règles-avec-if) · [Activité 10](./exercices/session_01-10.md)
11. [Du programme à l’application](#11-du-programme-à-lapplication) · [Activité 11](./exercices/session_01-11.md)
12. [Donner un nom au comportement](#12-donner-un-nom-au-comportement) · [Activité 12](./exercices/session_01-12.md)
13. [Réutiliser individuellement](#13-réutiliser-individuellement) · [Activité 13](./exercices/session_01-13.md)

## 1. Une action visible, une valeur invisible

Une page paraît vide. Cela suffit-il à conclure qu’elle ne contient rien ? Comment retrouver ce qui échappe à l’affichage, puis agir dessus ?

[Activité 1 — Explorer la page, l’inspecteur et la console](./exercices/session_01-1.md)

<a id="bilan-1"></a>

**Après l’activité.** Ce que l’on voit à l’écran dépend à la fois du contenu et des règles qui le présentent. Le texte était présent dans le HTML, mais sa couleur et celle du fond le rendaient invisible. L’inspecteur permet d’examiner le contenu et les règles CSS pour comprendre ce résultat.

La console interprète du JavaScript. Un nom inconnu produit une erreur de référence ; une expression mal formée peut produire une erreur de syntaxe. La casse compte : `Window` et `window` ne désignent pas la même chose. Dans la console de cette page, `this` donne accès à l’objet global `window`. Un nom comme `alert` permet de retrouver une fonction ; les parenthèses permettent de l’appeler. Une réponse `undefined` peut accompagner un effet visible.

Décomposer un nom aide à chercher son sens : `DOC + TYPE + HTML` évoque le type d’un document HTML. La déclaration `<!DOCTYPE html>` permet au navigateur d’utiliser son mode de rendu standard. Composer permet ensuite de construire une expression à partir de plusieurs éléments connus.

Le navigateur donne accès au document par `document`. Sa structure forme un arbre d’éléments. Dans une expression JavaScript, le point accède à une **propriété** de l’objet situé à gauche ; il ne signifie pas nécessairement descendre dans cet arbre. Dans `document.body.style.backgroundColor`, `body` désigne un élément HTML, mais `style` et `backgroundColor` ne sont pas des éléments supplémentaires.

La propriété `.style` donne accès aux déclarations placées directement dans l’attribut `style` de l’élément. Une couleur définie seulement dans une feuille de style n’y apparaît pas. Les panneaux **Styles** et **Calculé / Computed** permettent d’examiner les règles et les valeurs appliquées. Le nom CSS `background-color` devient `backgroundColor` dans l’accès JavaScript utilisé ici.

Le symbole `=` **affecte** la valeur située à droite à la variable ou à la propriété située à gauche. Les guillemets délimitent une valeur textuelle, appelée **chaîne de caractères**. Le point-virgule marque ici la fin de l’instruction.

Nous pouvons agir sur une couleur. Mais pourquoi cette couleur peut-elle s’écrire avec un mot ou avec des chiffres ?

## 2. Du nom de couleur à trois quantités

Dans le CSS, nous rencontrons `white`, `black` et `#000`. Quelles conventions permettent au navigateur de comprendre ces écritures ?

[Activité 2 — Changer l’écriture du blanc et explorer RGB](./exercices/session_01-2.md)

<a id="bilan-2"></a>

**Après l’activité.** CSS possède des noms de couleurs prédéfinis, comme `white`, `black`, `red`, `blue` et `navy`. Il propose aussi des représentations structurées. Le blanc peut être décrit par `white`, `rgb(255, 255, 255)` ou `#ffffff`.

Un écran émet de la lumière. On peut imaginer trois variateurs, un rouge, un vert et un bleu, dont les lumières se superposent : c’est la **synthèse additive**. Ajouter des pigments tend à absorber davantage de lumière ; ajouter de la lumière sur un écran rend le résultat plus lumineux.

Dans la représentation RGB utilisée ici, les trois quantités suivent toujours l’ordre **rouge, vert, bleu**. Pour chaque canal, `0` représente l’absence de cette composante et `255` son maximum. Trois canaux à zéro donnent du noir ; trois canaux au maximum donnent du blanc.

La comparaison du blanc rapproche trois valeurs `255` de trois paires `FF`. Comment peuvent-elles représenter les mêmes quantités ?

## 3. `255` et `FF` : une même quantité, deux écritures

Peut-on conserver une quantité tout en changeant les symboles qui servent à l’écrire ?

[Activité 3 — Décomposer `255` et `FF`](./exercices/session_01-3.md)

<a id="bilan-3"></a>

**Après l’activité.** Le système décimal utilise dix symboles, de `0` à `9`. Le système hexadécimal en utilise seize : les mêmes chiffres, puis `A`, `B`, `C`, `D`, `E` et `F`, qui représentent les quantités 10 à 15.

Les deux systèmes sont **positionnels** : la contribution d’un chiffre dépend de sa position. Les poids sont des puissances de la base : 1, 10, 100… en décimal ; 1, 16, 256… en hexadécimal.

```text
255₁₀ = 2 × 100 + 5 × 10 + 5 × 1
FF₁₆  = 15 × 16 + 15 × 1
255₁₀ = FF₁₆
```

Les petits indices indiquent le système utilisé pour lire ces exemples. Ils ne font pas partie de la syntaxe CSS ou JavaScript.

Nous savons maintenant lire une paire hexadécimale. Il reste à comprendre comment CSS organise les trois paires d’une couleur.

## 4. Lire une couleur CSS en hexadécimal

Comment passer d’une écriture comme `#336699` aux trois quantités RGB ? Et pourquoi certaines couleurs ne comportent-elles que trois chiffres ?

[Activité 4 — Décoder, prédire et modifier des couleurs](./exercices/session_01-4.md)

<a id="bilan-4"></a>

**Après l’activité.** Une couleur CSS sur six chiffres suit la convention `#RRGGBB`. Les paires représentent, dans cet ordre, le rouge, le vert et le bleu. Chacune va de `00` à `FF`, soit de 0 à 255. Le croisillon annonce cette écriture au navigateur ; les lettres peuvent être en minuscules ou en majuscules.

L’écriture abrégée `#RGB` répète chaque chiffre pour retrouver `#RRGGBB`. Ainsi, `#123` signifie `#112233`, pas `#000123`.

**Une valeur n’est pas sa représentation.** La représentation peut changer sans changer la valeur représentée. JavaScript affecte ici du texte à une propriété de style ; le navigateur interprète ensuite ce texte comme une couleur.

Les modifications réalisées dans l’inspecteur et dans la console n’ont pas changé les fichiers d’origine. Un rechargement reconstruit la page depuis ces fichiers ; les instructions de la console ne sont pas rejouées automatiquement.

Le décimal et l’hexadécimal utilisent des nombres différents de symboles. Jusqu’où peut-on réduire ce nombre ?

## 5. Binaire : deux symboles, les mêmes principes — prolongement

Deux symboles suffiraient-ils pour retrouver les mêmes valeurs ? Ce prolongement est facultatif et n’est pas nécessaire pour construire l’horloge.

[Activité 5 — Retrouver une valeur avec des bits](./exercices/session_01-5.md)

<a id="bilan-5"></a>

**Après l’activité.** Le binaire utilise les chiffres `0` et `1`. Un **bit** est un chiffre binaire ; un **octet** contient huit bits. Interprétés comme un entier non signé, ces huit bits représentent les valeurs de 0 à 255.

Les poids successifs sont 1, 2, 4, 8, 16, 32, 64 et 128. Quatre bits couvrent les valeurs de 0 à 15, comme un chiffre hexadécimal ; huit bits correspondent donc à deux chiffres hexadécimaux.

```text
11111111₂ = 255₁₀ = FF₁₆
```

Les mêmes principes fonctionnent avec deux, dix ou seize symboles. Pourquoi pas vingt ?

## 6. Monter jusqu'à la base 20

Une convention qui nous est inconnue paraît difficile à lire. Est-ce le nombre qui est étrange, ou la manière de le représenter ?

[Activité 6 — Déchiffrer une écriture maya, puis écouter le français](./exercices/session_01-6.md)

<a id="bilan-6"></a>

**Après l’activité.** Un système en base 20 est appelé **vigésimal**. Dans la convention positionnelle de l’exemple, les poids successifs sont 1, 20, 400 et 8 000. Lire l’écriture suppose de connaître les symboles, leur valeur, les positions et le sens de lecture. Le zéro conserve une position même lorsque sa contribution au total est nulle.

L’objectif n’est pas d’apprendre la numération maya, mais de reconnaître ce qui permet de comprendre une représentation. Le français n’est pas entièrement vigésimal, mais `quatre-vingts` et les nombres qui suivent conservent des traces de cette organisation.

Une base peut donc sembler étrangère tout en laissant des traces dans nos usages. En utilisons-nous une plus grande encore ?

## 7. Un système encore plus étrange ?

Que se passerait-il si une position pouvait prendre soixante valeurs avant de provoquer un report ?

[Activité 7 — Démasquer une convention familière](./exercices/session_01-7.md)

<a id="bilan-7"></a>

**Après l’activité.** Un système en base 60 est appelé **sexagésimal**. Les minutes et les secondes de nos représentations du temps utilisent un report après 59. Nous lisons déjà ces champs sans devoir inventer soixante nouveaux symboles : nous les écrivons avec les chiffres décimaux et les séparons.

Le séparateur rend lisible l’organisation des champs. Le report dépend de la convention choisie. Le comptage artificiel de l’activité illustre cette règle ; il ne reproduit pas une écriture babylonienne historique.

Nous allons appliquer cette idée à une horloge de 24 heures. La limite de ses minutes sera 60 et celle de ses heures sera 24.

## ⏸️ Interlude — pause de 10 minutes

La reprise commence avec l’activité 8 : représenter une heure par deux valeurs nommées.

## 8. Faire avancer le temps

`13:59` n’est pas le temps lui-même : c’est une représentation composée de deux champs. Comment nommer leurs valeurs et les réunir dans une écriture lisible ?

[Activité 8 — Nommer les heures et les minutes dans la console](./exercices/session_01-8.md)

<a id="bilan-8"></a>

**Après l’activité.** `let` déclare une variable : un nom auquel nous pouvons associer une valeur et que nous pouvons changer. Déclarer le nom et lui affecter une valeur sont deux opérations distinctes. Une nouvelle affectation suffit pour changer une variable déjà déclarée.

Avec deux nombres, `+` effectue une addition. Dans les expressions de cette séance, lorsqu’un opérande est une chaîne de caractères, il assemble du texte : c’est la **concaténation**. Le nombre est alors converti en texte.

La console interactive montre la valeur de l’expression saisie. Un fichier JavaScript ne montre pas spontanément le résultat de chacune de ses expressions. Comment conserver nos essais et continuer à observer leurs résultats ?

## 9. De la console aux fichiers

Comment transformer les essais de la console en un programme conservé dans des fichiers ? Et suffit-il d’écrire `+ 1` pour faire avancer une horloge ?

[Activité 9 — Créer `clock.js`, observer l’état et trouver une limite](./exercices/session_01-9.md)

<a id="bilan-9"></a>

**Après l’activité.** L’attribut `src` de la balise `script` indique le fichier JavaScript à charger. `console.log(...)` demande explicitement d’écrire une valeur dans la console. Les chaînes peuvent y apparaître sans guillemets : leur nature n’a pas changé.

`minutes + 1` calcule un résultat. L’affectation `minutes = minutes + 1` conserve ce résultat dans la variable. Au rechargement, le programme repart des valeurs initiales écrites dans son fichier.

| Responsabilité | Dans cette étape |
|---|---|
| HTML | Décrire la structure du document et charger le programme |
| CSS | Présenter les éléments ; aucune mise en forme n’est nécessaire ici |
| JavaScript | Représenter l’état, appliquer les règles et produire des résultats |

Cette **séparation des responsabilités** concerne ce que chaque partie prend en charge. Des fichiers séparés aident à l’organiser. Dans JavaScript, nous distinguons déjà l’état, le calcul et son observation.

Une valeur numérique et sa présentation restent distinctes : les zéros de `07:05` concernent l’affichage. Notre exercice accepte `7:5` et ne demande pas le format sur deux chiffres.

L’addition seule peut produire 60 minutes sans changer les heures. Le calcul est juste, mais la représentation du temps demande une règle supplémentaire.

## 10. Exprimer les règles avec `if`

Comment exécuter certaines instructions seulement lorsqu’une limite est atteinte ? Quelle autre limite apparaît une fois les minutes corrigées ?

[Activité 10 — Découvrir les reports et vérifier les cas limites](./exercices/session_01-10.md)

<a id="bilan-10"></a>

**Après l’activité.** `if` exécute un bloc lorsque sa condition est vraie. Les accolades délimitent ce bloc. `===` teste une égalité stricte, tandis que `=` affecte une valeur. Une comparaison produit `true` ou `false`. Les lignes commençant par `//` sont des commentaires.

Le report des minutes peut modifier les heures ; leur limite doit donc être vérifiée après ce premier report. L’affichage vient après les deux vérifications. Le test d’égalité avec 60 convient ici parce que les valeurs de départ sont valides et que l’on ajoute exactement une minute.

La suite de règles forme un **algorithme**, indépendant du langage utilisé pour l’exprimer :

```text
ajouter une minute
si les minutes atteignent 60 : les remettre à 0 et ajouter une heure
si les heures atteignent 24 : les remettre à 0
```

Son expression en instructions JavaScript forme notre **programme**. Les données artificielles et la console nous ont permis de le construire et de le vérifier.

L’algorithme est maintenant terminé. Comment lui donner une entrée et une sortie dans la page web ?

## 11. Du programme à l'application

Jusqu’ici, le programme part de deux nombres écrits dans JavaScript et produit une sortie console. Comment lui faire lire l’heure affichée, puis modifier cette même interface ?

[Activité 11 — Relier l’algorithme au HTML](./exercices/session_01-11.md)

<a id="bilan-11"></a>

**Après l’activité.** Le DOM, déjà rencontré avec les couleurs, permet de retrouver les éléments et leur contenu. `querySelector` reçoit un sélecteur ; un sélecteur commençant par `#` désigne ici l’élément portant l’identifiant correspondant. `textContent` permet de lire ou de remplacer son texte.

La lecture fournit du texte. `Number(...)` le convertit en nombre avant l’addition, pour éviter une concaténation. L’application suit maintenant ce parcours :

```text
HTML → lecture du DOM → texte → conversion en nombres
     → calcul → écriture dans le DOM → HTML mis à jour
```

L’algorithme n’a pas changé. Nous avons remplacé les valeurs artificielles et l’observation console par une entrée et une sortie dans l’interface.

Pour l’instant, le programme s’exécute au chargement. Comment nommer ce comportement et choisir le moment de son exécution ?

## 12. Donner un nom au comportement

Nous avons nommé des données. Pouvons-nous aussi donner un nom à l’ensemble des instructions qui fait avancer l’horloge ?

[Activité 12 — Définir `nextMinute` et déclencher son exécution au clic](./exercices/session_01-12.md)

<a id="bilan-12"></a>

**Après l’activité.** Une variable donne un nom à une donnée ; une fonction donne un nom à un comportement. `nextMinute` regroupe la lecture, la conversion, le calcul et l’affichage. Définir cette fonction ne l’exécute pas. Un appel déclenche son comportement.

L’attribut `onclick` établit ici le lien entre le clic et l’appel de la fonction. Il sert de **pont pédagogique** pour cette première rencontre. La gestion des événements avec `addEventListener` sera introduite plus tard.

Chaque exécution relit l’heure affichée par la précédente. Les variables locales servent au calcul de cet appel ; les éléments HTML conservent le résultat que l’appel suivant relira.

```text
clic → appel de nextMinute → lecture → calcul → affichage
```

Le clic choisit le moment de l’exécution. L’horloge n’avance pas automatiquement et ne cherche pas l’heure réelle. Nous pouvons maintenant vérifier que ces mécanismes sont réutilisables sans suivre les étapes guidées.

## 13. Réutiliser individuellement

Quels mécanismes pouvons-nous mobiliser seuls, et expliquer avec nos propres mots ?

[Activité 13 — Atelier individuel et bilan de l’apprentissage](./exercices/session_01-13.md)

<a id="bilan-13"></a>

**Après l’activité.** La mise en commun relie les manipulations aux notions de la séance : représentation, état, affectation, condition, entrée, sortie et déclenchement. Une différence entre une prédiction et un résultat permet de repérer une étape encore mal comprise.

## Fin du cours

Le prochain cours alternera lui aussi explications, manipulations et recherches en groupes. Il faudra rendre l’application réalisée en fin de cours en utilisant **GitHub**. La création d’un compte avant cette prochaine séance est donc un prérequis pour remettre le programme. Aucun dépôt n’est demandé pour cette séance.
