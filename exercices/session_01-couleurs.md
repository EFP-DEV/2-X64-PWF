# Couleurs — une valeur, plusieurs écritures

[Cours — les couleurs](../session_01.md#2-du-nom-de-couleur-à-trois-quantités)

**Point de départ :** la page de Sullivan et sa console, après l’exploration. Nous allons passer des noms de couleurs aux quantités RGB, puis à leur écriture hexadécimale. Nous gardons la même page ouverte pendant toute la recherche.

Nous complétons les emplacements `___` du JavaScript avant d’exécuter les instructions. Les tableaux donnent les résultats à retrouver dans le navigateur.

<a id="rgb"></a>

## 1. Du nom de couleur aux trois canaux RGB

Nous remettons le texte en noir en modifiant la propriété `color`. Nous essayons ensuite séparément :

```js
document.body.style.backgroundColor = "white";
```

```js
document.body.style.backgroundColor = "rgb(255, 255, 255)";
```

```js
document.body.style.backgroundColor = "#ffffff";
```

Nous appliquons successivement les trois écritures. Le fond reste blanc : elles représentent la même couleur.

Les trois canaux suivent l’ordre rouge, vert, bleu. Nous essayons chaque valeur du tableau avec cette affectation, puis comparons le fond à la couleur attendue :

```js
document.body.style.backgroundColor = "___";
```

| Valeur | Couleur attendue |
|---|---|
| `rgb(255, 0, 0)` | Rouge |
| `rgb(0, 255, 0)` | Vert |
| `rgb(0, 0, 255)` | Bleu |
| `rgb(0, 0, 0)` | Noir |
| `rgb(255, 255, 255)` | Blanc |

Sur le fond noir, nous ne distinguons plus le texte noir, toujours présent dans le HTML. Sur l’écran, les lumières rouge, verte et bleue s’additionnent : leurs trois composantes au maximum donnent du blanc. Un mélange de pigments absorbe, lui, une partie de la lumière.

Nous terminons sur le fond blanc et alignons les trois `255` avec les trois paires `FF`. Chaque paire représente la même quantité, 255 ; nous allons retrouver cette valeur par le calcul.

<a id="hexadecimal"></a>

## 2. Comprendre pourquoi `255` et `FF` désignent la même quantité

Nous comparons les symboles disponibles :

```text
Décimal       0 1 2 3 4 5 6 7 8 9
Hexadécimal   0 1 2 3 4 5 6 7 8 9 A B C D E F
```

Pour lire les lettres, nous utilisons cette correspondance : `A = 10`, `B = 11`, `C = 12`, `D = 13`, `E = 14`, `F = 15`.

Nous comparons l’ajout d’une unité en décimal, `9 → 10`, et en hexadécimal, `F → 10`. Dans les deux cas, nous avons utilisé tous les symboles d’une position et ouvrons une position supplémentaire.

Quand une position atteint son dernier symbole, l’unité suivante la ramène à `0` et provoque un **report** à gauche. La position suivante compte donc les groupes de dix en décimal, de seize en hexadécimal : son poids dépend du seuil qui provoque le report.

L’écriture `10` représente donc dix en décimal et seize en hexadécimal. Nous appliquons ces poids à la décomposition de `255` et de `FF` :

```text
255 = 2 × 100 + 5 × 10 + 5 × 1
FF₁₆ = 15 × 16 + 15 × 1 = 255₁₀
```

Nous lisons chaque chiffre avec son poids : les deux `5` contribuent pour 50 et 5 ; les deux `F`, pour 240 et 15.

<details>
<summary><strong>Détail des calculs</strong></summary>

```text
2 × 100 + 5 × 10 + 5 × 1 = 200 + 50 + 5 = 255
15 × 16 + 15 × 1 = 240 + 15 = 255
```

</details>

Nous obtenons le même total, 255, avec trois chiffres décimaux ou deux chiffres hexadécimaux. Les indices 10 et 16 indiquent la base utilisée pour lire l’exemple ; nous ne les saisissons pas dans une valeur CSS.

<a id="couleurs-css"></a>

## 3. Lire et modifier une couleur CSS

### Lire les paires

La convention `#RRGGBB` organise les paires dans l’ordre rouge, vert, bleu. Nous réutilisons les poids de l’hexadécimal pour décomposer `#336699` :

```text
33₁₆ = 3 × 16 + 3 = 51
66₁₆ = 6 × 16 + 6 = 102
99₁₆ = 9 × 16 + 9 = 153
rgb(51, 102, 153)
```

Nous affectons `#336699` au fond, puis `rgb(51, 102, 153)`. Le fond conserve la même couleur : les valeurs des trois canaux sont identiques.

### Retrouver l’écriture longue

Pour développer une écriture courte, nous répétons chaque chiffre. Nous suivons cette règle dans les exemples :

| Écriture courte | Écriture à six chiffres |
|---|---|
| `#000` | `#000000` |
| `#fff` | `#ffffff` |
| `#369` | `#336699` |
| `#123` | `#112233` |

Nous vérifions une paire d’écritures en l’affectant successivement au fond. Le fond reste identique : `#123` développe chaque chiffre et donne `#112233`.

<a id="prévoir-modifier-et-expliquer"></a>

### Modifier les couleurs et vérifier le résultat

Nous appliquons `#ff0000` : le fond devient rouge. Nous modifions ensuite la paire du bleu en conservant celle du rouge et observons le mélange obtenu.

Nous construisons nous-mêmes les instructions pour :

1. Rendre le texte blanc sur fond noir.
2. Remplacer l’écriture du blanc par une autre écriture équivalente.
3. Vérifier dans l’inspecteur les valeurs de `color` et de `background-color` : le texte blanc doit rester visible sur le fond noir.

Nous rechargeons la page : le texte et le fond redeviennent noirs. Nos manipulations ont modifié la page ouverte, sans changer les fichiers d’origine. Les instructions saisies dans la console ne sont pas rejouées au rechargement. Nous gardons cet onglet ouvert : sa console servira ensuite à l’horloge.

---

[Bilans des couleurs dans le cours](../session_01.md#bilan-2) · [Poursuivre les explorations de numération](../session_01.md#5-binaire--deux-symboles-les-mêmes-principes--prolongement)
