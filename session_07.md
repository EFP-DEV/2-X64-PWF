# Séance 7 — Explorer les chaînes de caractères

## Deux lettres identiques, deux positions

On ouvre la console du navigateur. On saisit les deux lignes suivantes, une à la fois, et on garde la page ouverte pendant les essais.

```js
let mot = "banane";
mot
```

La console affiche `"banane"`. Les guillemets délimitent une **chaîne de caractères**. Dans ce mot, la lettre `n` apparaît deux fois. Comment désigner le premier `n`, puis le second ?

**Chaque caractère occupe une position appelée indice. Le premier caractère est à l’indice `0`.**

| Caractère | `b` | `a` | `n` | `a` | `n` | `e` |
| --- | --- | --- | --- | --- | --- | --- |
| Indice | `0` | `1` | `2` | `3` | `4` | `5` |

Les deux `n` occupent les indices `2` et `4`. Le mot compte six caractères. Le dernier se trouve à l’indice `5`.

## Compter les caractères avec la propriété `length`

On saisit `mot.length`. Le point permet de lire la propriété `length` de la chaîne conservée dans `mot`. La console affiche `6`.

On ajoute un point d’exclamation au texte, puis un espace devant ce signe. Avant chaque essai, on prévoit la longueur.

| Expression à saisir | Valeur attendue |
| --- | --- |
| `mot.length` | `6` |
| `"banane!".length` | `7` |
| `"banane !".length` | `8` |

Les trois chaînes contiennent les mêmes six lettres. Le signe et l’espace comptent chacun pour un caractère. La propriété `length` se lit sans parenthèses. [MDN — length](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/length)

## Chercher une position avec la méthode `indexOf()`

On veut retrouver un `n` sans compter les positions à la main. Dans `mot.indexOf("n")`, on appelle la méthode `indexOf()` sur `mot`. L’argument `"n"` indique ce qu’on cherche. Des deux indices repérés dans le tableau, lequel la console va-t-elle afficher ?

| Expression à saisir | Valeur attendue |
| --- | --- |
| `mot.indexOf("b")` | `0` |
| `mot.indexOf("n")` | `2` |
| `mot.indexOf("z")` | `-1` |

La méthode renvoie l’indice de la première occurrence. Le `0` du premier essai désigne le début du mot. Le `-1` du dernier signale que la recherche a parcouru le mot sans trouver de `z`. [MDN — indexOf()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

## Lire un caractère avec la méthode `charAt()`

On connaît maintenant les deux positions de `n`. Avec `charAt()`, on fournit l’indice entre parenthèses et on lit le caractère à cette position.

| Expression à saisir | Valeur attendue |
| --- | --- |
| `mot.charAt(0)` | `"b"` |
| `mot.charAt(2)` | `"n"` |
| `mot.charAt(4)` | `"n"` |
| `mot.charAt(-1)` | `""` (chaîne vide) |

Pour lire le dernier caractère, on compare deux appels. On prévoit lequel donnera `"e"` en retrouvant son indice dans le tableau de départ.

```js
mot.charAt(mot.length)
mot.charAt(mot.length - 1)
```

Avec une longueur de `6`, le premier appel cherche à l’indice `6` et renvoie `""`. Le second lit l’indice `5` et renvoie `"e"`. [MDN — charAt()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)

## Essai sur une nouvelle phrase

Dans la même console, on saisit :

```js
let message = "Le bus passe.";
```

Pour chaque question, on choisit l’expression à saisir et on prévoit le résultat avant de l’exécuter.

1. Combien de caractères compte le message, espaces et point compris ?

2. Quelle expression permet de lire le point final sans compter les caractères à la main ?

3. Que renvoie la recherche de `"B"` ? On compare avec la recherche de `"b"` et on explique les deux valeurs.

4. À quel indice se trouve le premier `s` ? Comment vérifier, à partir de l’indice obtenu, qu’on retrouve bien ce `s` ?

On sait maintenant extraire un caractère du message. Comment décider si on peut le chiffrer ? Dans le défi en binôme, on transmet une phrase chiffrée et le partenaire essaie de retrouver la phrase d’origine.

[Exercice — Message chiffré](https://github.com/EFP-DEV/labo-message-chiffre#readme)
