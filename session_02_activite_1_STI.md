# Session 2 : STITI

> **Stocker, Transformer, Interagir**, Tester, Iterer

# Objectif: Stocker & Transformer

Poser les bases d’un minuteur en console : **déclarer**, **assigner**, **vérifier**, **formater**, **incrémenter**, **réassigner**, puis **simuler manuellement**.

# Préparation
Tous les extraits s’exécutent **dans la console**.

---

# Déclarer une variable

```js
let h;
```

### Vérifier la valeur (taper le nom)

```js
h
```

donne

```js
undefined
```

> Non initialisée → `undefined`.



# Assigner une valeur

```js
h = 13;
```

### Vérifier

```js
h
```

donne

```js
13
```



# Déclarer **et** assigner en une fois

```js
let m = 37;
```

## Vérifier les deux

```js
h
m
```

donne

```js
13
37
```



## Formatter (concaténer des chaînes)

```js
h + ":" + m;
```

donne

```js
"13:37"
```

> Noter les guillemets → résultat **string**.



## Ajouter 1

```js
m + 1;
```

donne

```js
38
```

> **La variable `m` n’a pas changé.** Vérifions :

```js
m
```

donne

```js
37
```



### Il faut **réassigner**

```js
m = m + 1;
```

> Lecture : “remplace `m` par (`m` actuel + 1)”.


## Simuler (répéter manuellement)

Appuyez sur **↑** dans la console pour répéter la dernière ligne **`m = m + 1;`** encore et encore, jusqu’à ce que vous ayez devine, vu ou que vous etes le dernier a continuer.


# Notions clés

**Expression** — produit une valeur, **sans effet** sur l’état si elle est écrite seule.
Exemples : `2 + 3`, `m + 1`, `"13" + ":" + m`, `h == 13`.

> Astuce : dans la console, taper une expression **affiche** sa valeur.

**Instruction** — une commande que le moteur exécute ; **peut modifier l’état**.
Exemples : `let m = 37;`, `m = m + 1;`, `if (m == 60) { m = 0; h = h + 1; }`

> Une instruction peut **utiliser** des expressions : dans `m = m + 1;`, l’expression `m + 1` est évaluée puis **assignée** à `m`.

**État** — l’**ensemble des variables et leurs valeurs** à un instant donné.
Exemple : avant l’instruction, état = `{ h: 13, m: 37 }` ; après `m = m + 1;`, nouvel état = `{ h: 13, m: 38 }`.

