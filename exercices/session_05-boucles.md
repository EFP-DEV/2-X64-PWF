# Boucles — Compter, répéter et faire varier les instructions

## 1. Afficher les nombres de 1 à 5

Dans Pixelator, la boucle construit une case à chaque passage. On reprend la même structure en affichant seulement le numéro dans la console. Les valeurs successives permettent de suivre les passages et l’arrêt.

### Préparer les deux fichiers

Dans le dossier des projets du cours, on crée un dossier `labo-boucles`. On y place les deux fichiers fournis :

- [boucles.html](./labo-boucles/boucles.html) : la page qui charge le programme et que l’on recharge pour chaque essai.
- [boucles.js](./labo-boucles/boucles.js) : le premier programme, à modifier au fil des exercices.

Pour récupérer chaque fichier depuis GitHub, on ouvre son lien, puis on utilise **Download raw file**. On conserve les noms et les extensions. Les deux fichiers se trouvent directement dans `labo-boucles`.

On ouvre ce dossier dans VS Code. **Toutes les modifications de programme se font dans `boucles.js`**. `boucles.html` charge toujours ce même fichier : le HTML reste inchangé pendant la série.

Le programme de départ est fourni :

```js
let numero = 1;

while (numero <= 5) {
  console.log(numero);
  numero = numero + 1;
}

console.log("Après la boucle : " + numero);
```

### Prévoir, exécuter et expliquer

Avant d’ouvrir la page, on suit les instructions sur papier. On relève les valeurs affichées dans la boucle, le nombre de passages et la valeur affichée après la boucle. On inclut dans le suivi le premier test qui devient faux.

On ouvre ensuite le fichier local `boucles.html` dans le navigateur, puis sa console. On vide les messages et on recharge la page pour observer le programme depuis son début. La page garde le même aspect ; les résultats apparaissent dans la console.

<details>
<summary><strong>Résultat à comparer après la prévision</strong></summary>

```text
1
2
3
4
5
Après la boucle : 6
```

Le bloc s’exécute cinq fois. Après l’affichage de 5, l’augmentation donne 6. Le test `6 <= 5` est faux : le bloc n’est plus exécuté et l’affichage situé après la boucle lit 6.

</details>

Pour chaque exercice suivant, on garde cette méthode : prévoir les affichages et le nombre de passages, enregistrer `boucles.js`, vider la console, puis recharger **`boucles.html`**. On compare le résultat à la prévision et on explique l’effet de la modification. Vider la console seul ne relance pas le programme ; le rechargement reprend les valeurs écrites au début du fichier.

Un seul programme reste actif dans `boucles.js`. Quand une consigne demande de repartir du modèle de l’exercice 1, on remplace le contenu du fichier par ce modèle avant d’appliquer la modification. Quand elle demande de poursuivre, on conserve le programme de l’exercice précédent. L’affichage `Après la boucle` reste après la boucle pendant toute la série.

## 2. Aller jusqu’à 8

On poursuit le programme de l’exercice 1. On remplace seulement la limite `5` par `8` dans la condition. Le départ et l’augmentation restent identiques.

Avant l’essai, on note les nouvelles lignes attendues, le nombre de passages et la valeur après la boucle. Après l’essai, on explique quelle instruction a permis les passages supplémentaires.

<details>
<summary><strong>Résultat à comparer après la prévision</strong></summary>

La boucle affiche les nombres de 1 à 8 inclus, sur huit lignes. Le message final est `Après la boucle : 9`.

</details>

## 3. Commencer à 3

On poursuit l’exercice 2. On remplace seulement la valeur initiale de `numero` par `3`. La condition reste `numero <= 8` et l’augmentation reste de 1.

On prévoit la suite et le nombre de passages, puis on réalise l’essai. On explique pourquoi la limite 8 ne signifie pas nécessairement huit passages.

<details>
<summary><strong>Résultat à comparer après la prévision</strong></summary>

La boucle affiche `3`, `4`, `5`, `6`, `7`, `8`, soit six lignes. Le message final reste `Après la boucle : 9`.

</details>

## 4. Exclure la limite

On poursuit l’exercice 3. On remplace seulement `<=` par `<` dans la condition : `numero < 8`.

On prévoit quel affichage disparaîtra, puis on réalise l’essai. On compare le dernier numéro affiché dans la boucle et la valeur affichée après. L’explication s’appuie sur le résultat du test lorsque `numero` vaut 8.

<details>
<summary><strong>Résultat à comparer après la prévision</strong></summary>

La boucle affiche `3`, `4`, `5`, `6`, `7`, soit cinq lignes. Le message final est `Après la boucle : 8`. Le test `8 < 8` est faux.

</details>

## 5. Rencontrer un test faux dès le départ

On poursuit l’exercice 4 en conservant `numero < 8`. On remplace seulement la valeur initiale par `8`.

On prévoit si une valeur sera affichée dans la boucle et si le message situé après apparaîtra. On enregistre et on recharge, puis on reprend le même essai avec un départ à `9`, puis à `7`. Chaque essai change uniquement la valeur initiale et repart d’un rechargement.

<details>
<summary><strong>Résultats à comparer après les prévisions</strong></summary>

| Départ | Affichages dans la boucle | Passages | Valeur après la boucle |
| ---: | --- | ---: | ---: |
| 8 | Aucun | 0 | 8 |
| 9 | Aucun | 0 | 9 |
| 7 | `7` | 1 | 8 |

La condition est vérifiée avant le premier passage. Un bloc jamais exécuté n’empêche pas l’instruction située après la boucle de s’exécuter.

</details>

## 6. Avancer de deux en deux

On repart du modèle de l’exercice 1. On remet la limite à `8`, comme dans l’exercice 2, puis on remplace seulement l’augmentation par :

```js
numero = numero + 2;
```

Le départ reste 1 et la condition est `numero <= 8`. On prévoit chaque valeur, y compris celle qui rendra le test faux. On réalise l’essai, puis on explique pourquoi la boucle peut s’arrêter sans que `numero` ait pris la valeur 8.

<details>
<summary><strong>Résultat à comparer après la prévision</strong></summary>

La boucle affiche `1`, `3`, `5`, `7`, soit quatre lignes. Le message final est `Après la boucle : 9`. Après 7, l’augmentation donne directement 9 ; le test devient faux.

</details>

La quantité ajoutée à chaque passage est appelée ici le **pas**. Le pas vaut maintenant 2.

## 7. Retrouver les nombres pairs

On poursuit l’exercice 6. On change seulement le départ : `numero` commence à `2`. La limite reste 8 et le pas reste 2.

On prévoit la suite, puis on réalise l’essai. On compare les exercices 6 et 7 : le même pas donne des nombres différents selon le départ. On explique pourquoi aucune condition supplémentaire n’est nécessaire pour obtenir cette suite de nombres pairs.

<details>
<summary><strong>Résultat à comparer après la prévision</strong></summary>

La boucle affiche `2`, `4`, `6`, `8`, soit quatre lignes. Le message final est `Après la boucle : 10`.

</details>

## 8. Compter de 5 à 1

On repart du modèle de l’exercice 1. On l’adapte pour obtenir cette sortie :

```text
5
4
3
2
1
Après la boucle : 0
```

Cette fois, le numéro doit diminuer. On écrit d’abord le départ, la condition qui autorise un passage et la modification du numéro en français. On adapte ensuite ces trois parties du programme en gardant l’affichage avant la modification du numéro.

Avant de lancer le programme, on suit les valeurs 5, 4 et 3, puis on identifie la valeur qui rendra la condition fausse. Après l’essai, on explique pourquoi inverser le sens du comptage demande de revoir ensemble la condition et l’évolution du numéro.

<details>
<summary><strong>Indice — continuer pendant la descente</strong></summary>

Le bloc doit encore s’exécuter lorsque `numero` vaut 1, mais plus lorsqu’il vaut 0. On cherche donc à rester au-dessus de 1 ou à lui être égal. Après chaque affichage, on retire 1 au numéro et on conserve le résultat dans `numero`.

</details>

## 9. Inclure zéro dans la descente

On poursuit le programme fonctionnel de l’exercice 8. On modifie seulement la limite de la condition pour que 0 soit également affiché dans la boucle.

On prévoit le nombre de passages et la valeur après la boucle, puis on réalise l’essai. On explique pourquoi la dernière valeur affichée dans le bloc et celle affichée après restent différentes.

<details>
<summary><strong>Résultat à comparer après la prévision</strong></summary>

La boucle affiche `5`, `4`, `3`, `2`, `1`, `0`, soit six lignes. Le message final est `Après la boucle : -1`.

</details>

## 10. Augmenter avant d’afficher

On repart du modèle de l’exercice 1. On échange uniquement l’ordre des deux instructions à l’intérieur de la boucle : l’augmentation passe avant l’affichage. Le départ reste 1 et la condition reste `numero <= 5`.

On prévoit les affichages et le nombre de passages. On suit particulièrement le dernier passage : quelle valeur est testée avant d’entrer dans le bloc, puis quelle valeur est affichée à l’intérieur ? On réalise ensuite l’essai.

<details>
<summary><strong>Résultat à comparer après la prévision</strong></summary>

La boucle affiche `2`, `3`, `4`, `5`, `6`, soit cinq lignes. Le message final est `Après la boucle : 6`.

Le dernier passage est autorisé parce que `numero` vaut 5 au moment du test. Dans ce passage, l’augmentation donne 6 avant l’affichage. La condition sera évaluée de nouveau après le bloc.

</details>

On remet ensuite l’affichage avant l’augmentation et on recharge. On doit retrouver la sortie de l’exercice 1. La comparaison change l’ordre des instructions en conservant le départ, la condition et le pas.

## 11. Répéter le même message

On conserve le modèle rétabli à la fin de l’exercice 10. On remplace seulement l’affichage situé dans la boucle par :

```js
console.log("Passage");
```

On prévoit le nombre d’affichages de ce message et la valeur après la boucle, puis on réalise l’essai. Certaines consoles regroupent les messages identiques et indiquent leur nombre : on relève alors ce nombre de répétitions.

On explique le rôle de `numero`, même si sa valeur n’apparaît plus dans le message répété.

<details>
<summary><strong>Résultat à comparer après la prévision</strong></summary>

Le message `Passage` est affiché cinq fois. Le message final reste `Après la boucle : 6`. Le numéro détermine les passages et l’arrêt, indépendamment du texte affiché.

</details>

## 12. Numéroter les messages

On poursuit l’exercice 11. On modifie seulement l’affichage dans la boucle pour obtenir :

```text
Passage 1
Passage 2
Passage 3
Passage 4
Passage 5
Après la boucle : 6
```

On construit chaque message à partir du texte `"Passage "` et de la valeur actuelle de `numero`. On écrit cette expression sans modifier la condition ni l’augmentation.

Après l’essai, on explique quelle partie du message reste identique et quelle partie est relue à chaque passage.

## 13. Afficher le triple du numéro

On poursuit l’exercice 12. On remplace seulement l’expression affichée dans la boucle par `numero * 3`. Le programme continue d’augmenter `numero` de 1 après l’affichage.

On prévoit les valeurs affichées et la valeur de `numero` après la boucle, puis on réalise l’essai. On distingue le numéro utilisé pour suivre les passages du résultat du calcul affiché.

<details>
<summary><strong>Résultat à comparer après la prévision</strong></summary>

La boucle affiche `3`, `6`, `9`, `12`, `15`, soit cinq lignes. Le message final reste `Après la boucle : 6`.

`numero * 3` calcule un résultat pour l’affichage, sans remplacer la valeur de `numero`. Le numéro progresse toujours de 1 en 1.

</details>

## 14. Changer le multiplicateur

On poursuit l’exercice 13. On remplace seulement le multiplicateur `3` par `5` dans le calcul affiché.

On prévoit les nouveaux résultats et le nombre de passages, puis on réalise l’essai. On explique pourquoi le changement du multiplicateur ne change ni le nombre de passages ni la valeur finale de `numero`.

<details>
<summary><strong>Résultat à comparer après la prévision</strong></summary>

La boucle affiche `5`, `10`, `15`, `20`, `25`, soit cinq lignes. Le message final reste `Après la boucle : 6`.

</details>

## 15. Présenter les calculs

On poursuit l’exercice 14. On modifie seulement l’affichage dans la boucle pour présenter les calculs et leurs résultats :

```text
5 × 1 = 5
5 × 2 = 10
5 × 3 = 15
5 × 4 = 20
5 × 5 = 25
Après la boucle : 6
```

On retrouve l’assemblage de texte de l’exercice 12 et le calcul de l’exercice 14. Chaque ligne utilise le numéro disponible pendant son passage. Le signe `×` fait partie du texte affiché ; l’opération de multiplication en JavaScript s’écrit avec `*`.

Après l’essai, on compare séparément le numéro et le résultat de chaque ligne. On explique pourquoi afficher le calcul sous une autre forme ne demande pas de modifier la condition ou le pas.

<details>
<summary><strong>Indice — préparer les parties du texte</strong></summary>

Une ligne réunit le texte `"5 × "`, la valeur de `numero`, le texte `" = "` et le résultat de `numero * 5`. On peut entourer ce calcul de parenthèses pour le distinguer dans l’expression qui assemble les parties avec `+`.

</details>

## 16. Écrire une série de tickets

On remplace le programme de `boucles.js` par un programme écrit à partir de la règle suivante : on affiche les tickets portant les numéros pairs de 4 à 10 inclus, puis la valeur atteinte après la boucle.

Le résultat attendu est :

```text
Ticket 4
Ticket 6
Ticket 8
Ticket 10
Après la boucle : 12
```

On choisit le départ de `numero`, la condition et le pas. Le programme utilise une boucle `while` et une seule instruction d’affichage à l’intérieur du bloc. Les quatre lignes ne sont pas écrites séparément dans le code.

On explique les choix avant l’essai, puis on enregistre et recharge. Pour vérifier le programme, on reprend les cas suivants. Chaque ligne décrit un nouvel essai : on change uniquement le départ et la limite, on conserve le pas, puis on recharge.

| Départ | Limite incluse | Numéros des tickets attendus | Valeur après la boucle |
| ---: | ---: | --- | ---: |
| 4 | 10 | 4, 6, 8, 10 | 12 |
| 2 | 6 | 2, 4, 6 | 8 |
| 4 | 4 | 4 | 6 |
| 6 | 4 | Aucun | 6 |

On conserve les départs pairs indiqués : avec un pas de 2, la parité dépend du départ, comme dans les exercices 6 et 7. On rétablit enfin le départ 4 et la limite 10.

## Reprendre la construction de Pixelator

Dans ces exercices, le départ, la condition et le pas ont déterminé les passages. Le corps de la boucle a pu afficher un numéro, un texte ou le résultat d’un calcul. L’ordre des instructions a déterminé la valeur disponible au moment de l’affichage.

On revient dans le clone personnel de Pixelator et on ouvre **`construire-grille.html`**. Son fichier actif est **`pixelator-construction.js`** ; `boucles.js` reste dans `labo-boucles`.

Avant de poursuivre, on retrouve dans la boucle de Pixelator le départ, la condition, l’augmentation et les instructions répétées. On explique ce qui change par rapport à l’affichage d’un numéro dans la console : chaque passage crée et insère un élément dans le document.

[Suite — distinguer le nombre de cases et leur disposition](./session_05-pixelator-construction.md#6-distinguer-le-nombre-de-cases-et-leur-disposition) · [Séance 5](../session_05.md)
