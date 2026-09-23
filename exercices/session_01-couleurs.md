# Couleurs — une valeur, plusieurs écritures

[Cours — les couleurs](../session_01.md#2-du-nom-de-couleur-à-trois-quantités)

**Point de départ :** la page de Sullivan et sa console, après l’exploration. On va passer des noms de couleurs aux quantités RGB, puis à leur écriture hexadécimale. La même page reste ouverte pendant toute la recherche.

On complète les emplacements `___` du JavaScript avant d’exécuter les instructions. Les tableaux donnent les résultats à retrouver dans le navigateur.

<a id="rgb"></a>

## 1. Du nom de couleur aux trois canaux RGB

On remet le texte en noir en modifiant la propriété `color`, puis on essaie séparément :

```js
document.body.style.backgroundColor = "white";
```

```js
document.body.style.backgroundColor = "rgb(255, 255, 255)";
```

```js
document.body.style.backgroundColor = "#ffffff";
```

On applique successivement les trois écritures. Le fond reste blanc : elles représentent la même couleur.

Les trois canaux suivent l’ordre rouge, vert, bleu. On essaie chaque valeur du tableau avec cette affectation, puis on compare le fond à la couleur attendue :

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

Sur le fond noir, le texte noir devient invisible, tout en restant présent dans le HTML. Sur l’écran, les lumières rouge, verte et bleue s’additionnent : leurs trois composantes au maximum donnent du blanc. Un mélange de pigments absorbe, lui, une partie de la lumière.

On termine sur le fond blanc, puis on aligne les trois `255` avec les trois paires `FF`. Chaque paire représente la même quantité, 255 ; on va retrouver cette valeur par le calcul.

<a id="hexadecimal"></a>

## 2. Comprendre pourquoi `255` et `FF` désignent la même quantité

On compare les symboles disponibles :

```text
Décimal       0 1 2 3 4 5 6 7 8 9
Hexadécimal   0 1 2 3 4 5 6 7 8 9 A B C D E F
```

Pour lire les lettres, on utilise cette correspondance : `A = 10`, `B = 11`, `C = 12`, `D = 13`, `E = 14`, `F = 15`.

On compare l’ajout d’une unité en décimal, `9 → 10`, et en hexadécimal, `F → 10`. Dans les deux cas, tous les symboles d’une position ont été utilisés ; une position supplémentaire s’ouvre.

Quand une position atteint son dernier symbole, l’unité suivante la ramène à `0` et provoque un **report** à gauche. La position suivante compte donc les groupes de dix en décimal, de seize en hexadécimal : son poids dépend du seuil qui provoque le report.

L’écriture `10` représente donc dix en décimal et seize en hexadécimal. On applique ces poids à la décomposition de `255` et de `FF` :

```text
255 = 2 × 100 + 5 × 10 + 5 × 1
FF₁₆ = 15 × 16 + 15 × 1 = 255₁₀
```

On lit chaque chiffre avec son poids : les deux `5` contribuent pour 50 et 5 ; les deux `F`, pour 240 et 15.

<details>
<summary><strong>Détail des calculs</strong></summary>

```text
2 × 100 + 5 × 10 + 5 × 1 = 200 + 50 + 5 = 255
15 × 16 + 15 × 1 = 240 + 15 = 255
```

</details>

Le même total, 255, s’obtient avec trois chiffres décimaux ou deux chiffres hexadécimaux. Les indices 10 et 16 indiquent la base utilisée pour lire l’exemple ; ils ne font pas partie d’une valeur CSS à saisir.

<a id="couleurs-css"></a>

## 3. Lire et modifier une couleur CSS

### Lire les paires

La convention `#RRGGBB` organise les paires dans l’ordre rouge, vert, bleu. On réutilise les poids de l’hexadécimal pour décomposer `#336699` :

```text
33₁₆ = 3 × 16 + 3 = 51
66₁₆ = 6 × 16 + 6 = 102
99₁₆ = 9 × 16 + 9 = 153
rgb(51, 102, 153)
```

On affecte `#336699` au fond, puis `rgb(51, 102, 153)`. Le fond conserve la même couleur : les valeurs des trois canaux sont identiques.

### Retrouver l’écriture longue

Pour développer une écriture courte, on répète chaque chiffre. Les exemples suivent cette règle :

| Écriture courte | Écriture à six chiffres |
|---|---|
| `#000` | `#000000` |
| `#fff` | `#ffffff` |
| `#369` | `#336699` |
| `#123` | `#112233` |

On vérifie une paire d’écritures en les affectant successivement au fond. Le fond reste identique : `#123` développe chaque chiffre et donne `#112233`.

<a id="prévoir-modifier-et-expliquer"></a>

### Modifier les couleurs et vérifier le résultat

On applique `#ff0000` : le fond devient rouge. On modifie ensuite la paire du bleu en conservant celle du rouge, puis on observe le mélange obtenu.

On construit les instructions pour :

1. Rendre le texte blanc sur fond noir.
2. Remplacer l’écriture du blanc par une autre écriture équivalente.
3. Vérifier dans l’inspecteur les valeurs de `color` et de `background-color` : le texte blanc doit rester visible sur le fond noir.

On recharge la page : le texte et le fond redeviennent noirs. Les manipulations ont modifié la page ouverte, sans changer les fichiers d’origine. Les instructions saisies dans la console ne sont pas rejouées au rechargement. On garde cet onglet ouvert : sa console servira ensuite à l’horloge.

---

[Bilans des couleurs dans le cours](../session_01.md#bilan-2) · [Poursuivre les explorations de numération](../session_01.md#5-binaire--deux-symboles-les-mêmes-principes--prolongement)
