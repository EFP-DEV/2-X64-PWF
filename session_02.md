# Session 2 : STITI

> Stocker, Transformer, Interagir, Tester, Iterer

# Objectif (partie 1)

Poser les bases d’un minuteur en console : **déclarer**, **assigner**, **vérifier**, **formater**, **incrémenter**, **réassigner**, puis **simuler manuellement**.

# Préparation

Ouvrir la **console** du navigateur (F12 → Console).

Tous les extraits s’exécutent **dans la console**.



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