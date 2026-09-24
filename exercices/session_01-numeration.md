# Numération — des couleurs à l’horloge

[Cours — la numération](../session_01.md#3-numération) · [Fiche précédente — les couleurs](./session_01-couleurs.md)

[Binaire — prolongement facultatif](#binaire) · [Base 20](#base-20) · [Base 60](#base-60)

<a id="binaire"></a>

## 1. Binaire : deux symboles, les mêmes principes — prolongement facultatif

### Garder les poids des positions actives

La démonstration utilise les poids suivants :

| Position | `2⁷` | `2⁶` | `2⁵` | `2⁴` | `2³` | `2²` | `2¹` | `2⁰` |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Poids | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

On place les bits sous leurs poids, puis on additionne les poids placés au-dessus d’un `1`.

| Binaire | Somme des poids retenus | Valeur décimale |
|---|---|---|
| `00000001` | 1 | 1 |
| `00000011` | 2 + 1 | 3 |
| `11111111` | 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 | 255 |

On passe de un à trois en mettant à `1` le bit de poids 2. Le bit de poids 1 reste à `1`.

### Retrouver le lien avec les couleurs

La valeur maximale d’un canal de couleur apparaît dans les trois écritures :

```text
11111111₂ = 255₁₀ = FF₁₆
```

<details>
<summary><strong>Vérifier le total des huit poids</strong></summary>

```text
128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255
11111111₂ = 255₁₀ = FF₁₆
```

</details>

On vérifie les limites en additionnant les poids : `8 + 4 + 2 + 1 = 15` pour quatre bits, et `255` pour huit bits. Avec tous les bits à zéro, le résultat est `0`.

<a id="bilan-5"></a>

**Bilan.** Le binaire utilise les chiffres `0` et `1`. Un **bit** est un chiffre binaire ; un **octet** contient huit bits. Interprétés comme un entier non signé, ces huit bits représentent les valeurs de 0 à 255.

Les poids successifs sont 1, 2, 4, 8, 16, 32, 64 et 128. Quatre bits couvrent les valeurs de 0 à 15, comme un chiffre hexadécimal ; huit bits correspondent donc à deux chiffres hexadécimaux.

```text
11111111₂ = 255₁₀ = FF₁₆
```

On prolonge le même principe avec vingt valeurs possibles par position.

<a id="base-20"></a>

## 2. Monter jusqu'à la base 20

On explore cette représentation avec la démonstration et les notes de cours.

### Une convention devenue étrangère

On observe cette écriture maya avant d’ouvrir la décomposition :

<img src="../asset/mayan_number.png" alt="Écriture maya d'un nombre" width="161">

Des points, des barres et un coquillage sont visibles. La décomposition ci-dessous associe ces symboles à leurs valeurs et à leurs positions.

<details>
<summary><strong>Révéler les positions et la valeur</strong></summary>

<p>Pour cet exemple de numération positionnelle en base 20, les positions valent successivement 1, 20, 400 et 8 000.</p>

<table>
  <thead>
    <tr><th scope="col">Position</th><th scope="col">Symbole maya</th><th scope="col">Décomposition</th><th scope="col">Valeur</th></tr>
  </thead>
  <tbody>
    <tr><td>8 000</td><td>Position non écrite</td><td>0 × 8 000</td><td>0</td></tr>
    <tr><td>400</td><td><img src="../asset/mayan_symbol_dots.svg" alt="Quatre points mayas" width="120"></td><td>4 × 400</td><td>1 600</td></tr>
    <tr><td>20</td><td><img src="../asset/mayan_symbol_shell.svg" alt="Coquillage maya, zéro" width="120"></td><td>0 × 20</td><td>0</td></tr>
    <tr><td>1</td><td><img src="../asset/mayan_symbol_fourteen.svg" alt="Quatorze : quatre points et deux barres mayas" width="120"></td><td>14 × 1</td><td>14</td></tr>
    <tr><th scope="row">Total</th><td></td><td></td><td><strong>1 614</strong></td></tr>
  </tbody>
</table>

</details>

On lit les positions de bas en haut : unités, groupes de vingt, puis groupes de quatre cents. Le coquillage marque zéro à la position des vingtaines ; les quatre points de la position supérieure contribuent donc pour `4 × 400`.

<a id="une-convention-vraiment-étrangère-"></a>

### Des traces de la base 20 en français

On compte maintenant les dizaines en français :

```text
dix
vingt
trente
quarante
cinquante
soixante
...
quatre-vingts
```

On s’arrête sur ce dernier nom :

```text
quatre × vingt
```

On écoute aussi la manière dont le français compose quelques valeurs :

```text
quatre-vingt-dix    quatre × vingt + dix
quatre-vingt-seize  quatre × vingt + seize
soixante-dix        soixante + dix
```

Le nom `quatre-vingts` représente quatre groupes de vingt. Les autres noms de la liste montrent que le français combine plusieurs manières de composer les nombres.

<a id="bilan-6"></a>

**Bilan.** Un système en base 20 est appelé **vigésimal**. Dans la convention positionnelle de l’exemple, les poids successifs sont 1, 20, 400 et 8 000. Lire l’écriture suppose de connaître les symboles, leur valeur, les positions et le sens de lecture. Le zéro conserve une position même lorsque sa contribution au total est nulle.

L’objectif n’est pas d’apprendre la numération maya, mais de reconnaître ce qui permet de comprendre une représentation. Le français n’est pas entièrement vigésimal, mais `quatre-vingts` et les nombres qui suivent conservent des traces de cette organisation.

On passe maintenant à un comptage où chaque position peut prendre soixante valeurs avant le report.

<a id="base-60"></a>

<a id="7-un-système-encore-plus-étrange-"></a>

## 3. Compter avec soixante valeurs par position

La révélation reste fermée pendant la première partie de la démonstration.

### Un comptage inhabituel

On imagine que chaque position peut prendre les valeurs de 0 à 59. Pour la démonstration, on les écrit en décimal : le groupe de gauche n’a pas de zéro initial, les groupes suivants ont deux chiffres. On colle les groupes sans séparateur.

On observe la suite :

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

On suit les passages `59 → 100`, `559 → 600` et `959 → 1000`. Dans chaque cas, le groupe de droite revient à `00` et celui de gauche augmente d’une unité. Sans séparateur, les limites entre les groupes sont difficiles à repérer.

Cette convention sert à la démonstration ; elle ne prétend pas reproduire une écriture babylonienne historique.

### Ajouter ce qui manque

<details>
<summary><strong>Ajouter un séparateur entre les groupes</strong></summary>

```text
1359 → 13:59
```

Une écriture familière apparaît : `13:59` peut se lire comme une heure. Le champ de gauche indique les heures, celui de droite les minutes.

On ajoute une minute aux heures suivantes, sans JavaScript, en suivant le report :

| Départ | Après une minute | Champs modifiés |
|---|---|---|
| `05:58` | `05:59` | Minutes |
| `05:59` | `06:00` | Heures et minutes |
| `09:59` | `10:00` | Heures et minutes |

On applique le report après 59 minutes. Le séparateur `:` rend les deux champs lisibles. Dans une horloge de 24 heures, les heures sont limitées à 23 ; le comptage artificiel de la démonstration utilise, lui, des groupes allant jusqu’à 59.
</details>

<a id="bilan-7"></a>

**Bilan.** Un système en base 60 est appelé **sexagésimal**. Les minutes et les secondes des représentations usuelles du temps utilisent un report après 59. On lit déjà ces champs sans devoir inventer soixante nouveaux symboles : ils s’écrivent avec les chiffres décimaux et des séparateurs.

Le séparateur rend lisible l’organisation des champs. Le report dépend de la convention choisie. Le comptage artificiel de l’activité illustre cette règle ; il ne reproduit pas une écriture babylonienne historique.

On va appliquer cette idée à une horloge de 24 heures. La limite de ses minutes sera 60 et celle de ses heures sera 24.

---

[Pause — 10 minutes](../session_01.md#pause) · [Poursuivre avec l’horloge](./session_01-horloge.md)
