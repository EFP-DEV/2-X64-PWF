# Activité 5 — Binaire : deux symboles, les mêmes principes — prolongement

[Question de départ](../session_01.md#5-binaire--deux-symboles-les-mêmes-principes--prolongement) · [Sommaire du cours](../session_01.md#sommaire)

**Prolongement facultatif.** Cette activité se fait dans vos notes. Elle n’est pas nécessaire pour construire l’horloge ; vous pouvez passer à l’activité 6.

## Garder les poids des positions actives

La démonstration utilise les poids suivants :

| Position | `2⁷` | `2⁶` | `2⁵` | `2⁴` | `2³` | `2²` | `2¹` | `2⁰` |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Poids | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

Placez les bits sous leurs poids, retenez ceux placés sous un `1`, puis additionnez ces poids.

| Binaire | Somme des poids retenus | Valeur décimale |
|---|---|---|
| `00000001` | | |
| `00000011` | | |
| `11111111` | | |

Quel bit faut-il changer pour passer de un à trois ?

## Retrouver le lien avec les couleurs

Complétez :

```text
11111111₂ = ___₁₀ = ___₁₆
```

<details>
<summary><strong>Vérifier le total des huit poids</strong></summary>

```text
128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255
11111111₂ = 255₁₀ = FF₁₆
```

</details>

Quel intervalle peut-on représenter avec quatre bits ? Pourquoi huit bits suffisent-ils pour les valeurs de 0 à 255 d’un canal de couleur ?

---

[Retour au bilan 5 dans le cours](../session_01.md#bilan-5) · [Après le bilan : activité 6](./session_01-6.md)
