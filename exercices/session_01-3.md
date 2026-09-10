# Activité 3 — `255` et `FF` : une même quantité, deux écritures

[Question de départ](../session_01.md#3-255-et-ff--une-même-quantité-deux-écritures) · [Sommaire du cours](../session_01.md#sommaire)

Cette recherche se fait dans vos notes. La page de Sullivan peut rester ouverte, sans nouvelle manipulation.

## Deux écritures à comparer

La démonstration place côte à côte les symboles disponibles :

```text
Décimal       0 1 2 3 4 5 6 7 8 9
Hexadécimal   0 1 2 3 4 5 6 7 8 9 A B C D E F
```

Pour lire les lettres, utilisez cette correspondance : `A = 10`, `B = 11`, `C = 12`, `D = 13`, `E = 14`, `F = 15`.

Complétez les décompositions. En décimal, les poids utilisés sont 100, 10 et 1 ; pour cette paire hexadécimale, ce sont 16 et 1.

```text
255 = 2 × ___ + 5 × ___ + 5 × ___
FF₁₆ = 15 × ___ + ___ × 1 = ___₁₀
```

Pourquoi les deux `5` de `255` ne contribuent-ils pas à la même quantité ? Et les deux `F` ?

<details>
<summary><strong>Vérifier les calculs après votre recherche</strong></summary>

```text
2 × 100 + 5 × 10 + 5 × 1 = 200 + 50 + 5 = 255
15 × 16 + 15 × 1 = 240 + 15 = 255
```

</details>

Expliquez comment deux écritures de longueurs différentes peuvent désigner la même quantité. Que représentent les indices 10 et 16 ? Faut-il les saisir dans une valeur CSS ?

---

[Retour au bilan 3 dans le cours](../session_01.md#bilan-3) · [Après le bilan : activité 4](./session_01-4.md)
