# Activité 7 — Un système encore plus étrange ?

[Question de départ](../session_01.md#7-un-système-encore-plus-étrange-) · [Sommaire du cours](../session_01.md#sommaire)

Cette démonstration se lit progressivement. Gardez la révélation fermée jusqu’à la seconde étape.

## Un comptage inhabituel

Imaginons que chaque position puisse prendre les valeurs de 0 à 59. Pour la démonstration, nous les écrivons en décimal : le groupe de gauche n’a pas de zéro initial, les groupes suivants ont deux chiffres. Nous collons les groupes sans séparateur.

Observez la suite :

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

Repérez les reports. Pourquoi `59` est-il suivi de `100` ? Que devient `559` après une unité supplémentaire ? Et `959` ? Cette écriture vous semble-t-elle lisible ?

Cette convention sert à la démonstration ; elle ne prétend pas reproduire une écriture babylonienne historique.

## Ajouter ce qui manque

<details>
<summary><strong>Révéler le séparateur après la discussion</strong></summary>

```text
1359 → 13:59
```

Reconnaissez-vous une représentation familière ? Que désignent les deux champs quand nous lisons cette écriture comme une heure ?

</details>

Pour les heures suivantes, prédisez l’écriture obtenue après une minute, sans JavaScript :

| Départ | Après une minute | Quel champ change ? |
|---|---|---|
| `05:58` | | |
| `05:59` | | |
| `09:59` | | |

Pourquoi faut-il connaître la limite des minutes pour répondre ? À quoi sert le séparateur `:` ? Distinguez le comptage artificiel de la démonstration d’une horloge dont les heures sont limitées à 23.

**Après le bilan de cette activité : pause de 10 minutes.** À la reprise, l’activité 8 utilise la console de la page de Sullivan.

---

[Retour au bilan 7 dans le cours](../session_01.md#bilan-7) · [Après le bilan : activité 8](./session_01-8.md)
