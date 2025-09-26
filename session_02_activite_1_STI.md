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




---




# Exercices Série 1 — Affectations simples (lecture seule)

> Instructions puis **trace par ligne** en tableau… mais **cachée** : cliquez pour dérouler.


## ALGO 1.1 — A, B

```
A ← 1
B ← A + 3
A ← 3
```

<details>
<summary>🧠 Trace par ligne (tableau)</summary>

| # | Instruction | A | B |
| - | ----------- | - | - |
| 1 | `A ← 1`     | 1 |   |
| 2 | `B ← A + 3` | 1 | 4 |
| 3 | `A ← 3`     | 3 | 4 |

**État final** : { A: 3, B: 4 }

</details>

---

## ALGO 1.2 — A, B, C

```
A ← 5
B ← 3
C ← A + B
A ← 2
C ← B - A
```

<details>
<summary>🧠 Trace par ligne (tableau)</summary>

| # | Instruction | A | B | C |
| - | ----------- | - | - | - |
| 1 | `A ← 5`     | 5 |   |   |
| 2 | `B ← 3`     | 5 | 3 |   |
| 3 | `C ← A + B` | 5 | 3 | 8 |
| 4 | `A ← 2`     | 2 | 3 | 8 |
| 5 | `C ← B - A` | 2 | 3 | 1 |

**État final** : { A: 2, B: 3, C: 1 }

</details>

---

## ALGO 1.3 — A, B

```
A ← 5
B ← A + 4
A ← A + 1
B ← A - 4
```

<details>
<summary>🧠 Trace par ligne (tableau)</summary>

| # | Instruction | A | B |
| - | ----------- | - | - |
| 1 | `A ← 5`     | 5 |   |
| 2 | `B ← A + 4` | 5 | 9 |
| 3 | `A ← A + 1` | 6 | 9 |
| 4 | `B ← A - 4` | 6 | 2 |

**État final** : { A: 6, B: 2 }

</details>

---

## ALGO 1.4 — A, B, C

```
A ← 3
B ← 10
C ← A + B
B ← A + B
A ← C
```

<details>
<summary>🧠 Trace par ligne (tableau)</summary>

| # | Instruction | A  | B  | C  |
| - | ----------- | -- | -- | -- |
| 1 | `A ← 3`     | 3  |    |    |
| 2 | `B ← 10`    | 3  | 10 |    |
| 3 | `C ← A + B` | 3  | 10 | 13 |
| 4 | `B ← A + B` | 3  | 13 | 13 |
| 5 | `A ← C`     | 13 | 13 | 13 |

**État final** : { A: 13, B: 13, C: 13 }

</details>

---

## ALGO 1.5 — A, B (fausse permutation)

```
A ← 5
B ← 219
A ← B
B ← A
```

<details>
<summary>🧠 Trace par ligne (tableau)</summary>

| # | Instruction | A   | B   |
| - | ----------- | --- | --- |
| 1 | `A ← 5`     | 5   |     |
| 2 | `B ← 219`   | 5   | 219 |
| 3 | `A ← B`     | 219 | 219 |
| 4 | `B ← A`     | 219 | 219 |

**État final** : { A: 219, B: 219 } — pas un échange.

</details>

---

## ALGO 1.6 — Échanger A et B (swap)

### Variante sûre (avec temporaire)

```
temp ← a
a ← b
b ← temp
```

<details>
<summary>🧠 Trace par ligne (tableau) — ex. départ a=5, b=2</summary>

| # | Instruction | a | b | temp |
| - | ----------- | - | - | ---- |
| 1 | `temp ← a`  | 5 | 2 | 5    |
| 2 | `a ← b`     | 2 | 2 | 5    |
| 3 | `b ← temp`  | 2 | 5 | 5    |

**Effet** : { a: ancien b, b: ancien a }

</details>

### Variante arithmétique (à éviter)

```
a ← a - b
b ← b + a
a ← b - a
```

<details>
<summary>🧠 Trace par ligne (tableau) — ex. départ a=5, b=2</summary>

| # | Instruction | a | b |
| - | ----------- | - | - |
| 1 | `a ← a - b` | 3 | 2 |
| 2 | `b ← b + a` | 3 | 5 |
| 3 | `a ← b - a` | 2 | 5 |

**Effet** identique, mais fragile (overflow, lisibilité).

</details>

---

## ALGO 1.6 (bis) — Rotation à 3 variables (A→B, B→C, C→A)

```
temp ← C
C ← B
B ← A
A ← temp
```

<details>
<summary>🧠 Trace par ligne (tableau) — ex. départ A=1, B=2, C=3</summary>

| # | Instruction | A | B | C | temp |
| - | ----------- | - | - | - | ---- |
| 1 | `temp ← C`  | 1 | 2 | 3 | 3    |
| 2 | `C ← B`     | 1 | 2 | 2 | 3    |
| 3 | `B ← A`     | 1 | 1 | 2 | 3    |
| 4 | `A ← temp`  | 3 | 1 | 2 | 3    |

**Effet** : { A: ancien C, B: ancien A, C: ancien B }

</details>
