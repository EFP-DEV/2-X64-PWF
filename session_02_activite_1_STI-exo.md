# Session 2 : STITI

# Exercices Série 1


## ALGO 1.1

### Quelles sont les valeurs des variables a la fin de l’algorithme ?
```js
let A, B;

A = 1
B = A + 3
A = 3
```

<details>
<summary>🧠 Trace par ligne (tableau)</summary>

| # | Instruction | A | B |
| - | ----------- | - | - |
| 1 | `A = 1`     | 1 |   |
| 2 | `B = A + 3` | 1 | 4 |
| 3 | `A = 3`     | 3 | 4 |

**État final** : { A: 3, B: 4 }

</details>

---

## ALGO 1.2
### Quelles sont les valeurs des variables a la fin de l’algorithme ?

```js
let A, B, C;

A = 5
B = 3
C = A + B
A = 2
C = B - A
```

<details>
<summary>🧠 Trace par ligne (tableau)</summary>

| # | Instruction | A | B | C |
| - | ----------- | - | - | - |
| 1 | `A = 5`     | 5 |   |   |
| 2 | `B = 3`     | 5 | 3 |   |
| 3 | `C = A + B` | 5 | 3 | 8 |
| 4 | `A = 2`     | 2 | 3 | 8 |
| 5 | `C = B - A` | 2 | 3 | 1 |

**État final** : { A: 2, B: 3, C: 1 }

</details>

---

## ALGO 1.3
### Quelles sont les valeurs des variables a la fin de l’algorithme ?

```js
let A, B;

A = 5
B = A + 4
A = A + 1
B = A - 4
```

<details>
<summary>🧠 Trace par ligne (tableau)</summary>

| # | Instruction | A | B |
| - | ----------- | - | - |
| 1 | `A = 5`     | 5 |   |
| 2 | `B = A + 4` | 5 | 9 |
| 3 | `A = A + 1` | 6 | 9 |
| 4 | `B = A - 4` | 6 | 2 |

**État final** : { A: 6, B: 2 }

</details>

---

## ALGO 1.4
### Quelles sont les valeurs des variables a la fin de l’algorithme ?

```js
let A, B, C;

A = 3
B = 10
C = A + B
B = A + B
A = C
```

<details>
<summary>🧠 Trace par ligne (tableau)</summary>

| # | Instruction | A  | B  | C  |
| - | ----------- | -- | -- | -- |
| 1 | `A = 3`     | 3  |    |    |
| 2 | `B = 10`    | 3  | 10 |    |
| 3 | `C = A + B` | 3  | 10 | 13 |
| 4 | `B = A + B` | 3  | 13 | 13 |
| 5 | `A = C`     | 13 | 13 | 13 |

**État final** : { A: 13, B: 13, C: 13 }

</details>

---

## ALGO 1.5 
### Quelles sont les valeurs des variables a la fin de l’algorithme ?

```js
let A, B;

A = 5
B = 219
A = B
B = A
```

<details>
<summary>🧠 Trace par ligne (tableau)</summary>

| # | Instruction | A   | B   |
| - | ----------- | --- | --- |
| 1 | `A = 5`     | 5   |     |
| 2 | `B = 219`   | 5   | 219 |
| 3 | `A = B`     | 219 | 219 |
| 4 | `B = A`     | 219 | 219 |

**État final** : { A: 219, B: 219 } — pas un échange.

</details>

---

## ALGO 1.6 — Échanger A et B (swap)

Écrire un algorithme permettant d’échanger les valeurs de deux variables A et B, et ce quel que soit leur contenu préalable

```js
let a = 5;
let b = 2;
```
**A la fin du programme, a doit contenir 2 et b doit contenir 5**

<details>
<summary>🧠 Solution et trace par ligne (tableau)</summary>

```
temp = a
a = b
b = temp
```

| # | Instruction | a | b | temp |
| - | ----------- | - | - | ---- |
| 1 | `temp = a`  | 5 | 2 | 5    |
| 2 | `a = b`     | 2 | 2 | 5    |
| 3 | `b = temp`  | 2 | 5 | 5    |

**Effet** : { a: ancien b, b: ancien a }

</details>

### Variante arithmétique (à éviter)

<details>
<summary>🧠 Solution et trace par ligne (tableau)</summary>

```
a = a - b
b = b + a
a = b - a
```

| # | Instruction | a | b |
| - | ----------- | - | - |
| 1 | `a = a - b` | 3 | 2 |
| 2 | `b = b + a` | 3 | 5 |
| 3 | `a = b - a` | 2 | 5 |

**Effet** identique, mais fragile (overflow, lisibilité).
**Ne fonctionne pas avec des chaines de caracteres**

</details>

---

## ALGO 1.6 (bis) — Rotation à 3 variables (A→B, B→C, C→A)
### Quelles sont les valeurs des variables a la fin de l’algorithme ?

Une variante du précédent, mais on dispose de trois variables: A, B et C.

Écrire un algorithme transférant à B la valeur de A, à C la valeur de B et à A la valeur de C, et ce quel que soit leur contenu préalable.


<details>
<summary>🧠 Solution et trace par ligne (tableau)</summary>


```js
// tout declarer
let A, B, C; 

// tout assigner
A = 1; 
B = 2; 
C = 3;

// echanger
temp = C
C = B
B = A
A = temp
```

| # | Instruction | A | B | C | temp |
| - | ----------- | - | - | - | ---- |
| 1 | `temp = C`  | 1 | 2 | 3 | 3    |
| 2 | `C = B`     | 1 | 2 | 2 | 3    |
| 3 | `B = A`     | 1 | 1 | 2 | 3    |
| 4 | `A = temp`  | 3 | 1 | 2 | 3    |

**Effet** : { A: ancien C, B: ancien A, C: ancien B }

</details>


# Bonus: [Tour de Hanoi](http://championmath.free.fr/tourhanoi.htm)