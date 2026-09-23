# Couleurs — une valeur, plusieurs écritures

[Cours — les couleurs](../session_01.md#2-du-nom-de-couleur-à-trois-quantités)

**Point de départ :** la page de Sullivan et sa console, après l’exploration. Nous allons passer des noms de couleurs aux quantités RGB, puis à leur écriture hexadécimale. Gardez la même page ouverte pendant toute la recherche.

Complétez les emplacements `___` avant d’exécuter les instructions. Notez vos prédictions avant de vérifier dans le navigateur.

<a id="rgb"></a>

## 1. Du nom de couleur aux trois canaux RGB

Remettez le texte en noir en modifiant la propriété `color`. Essayez ensuite séparément :

```js
document.body.style.backgroundColor = "white";
```

```js
document.body.style.backgroundColor = "rgb(255, 255, 255)";
```

```js
document.body.style.backgroundColor = "#ffffff";
```

Les écritures changent-elles ? La couleur visible change-t-elle ?

Les trois canaux suivent l’ordre rouge, vert, bleu. Prédisez les couleurs du tableau, puis vérifiez chaque proposition avec cette affectation :

```js
document.body.style.backgroundColor = "___";
```

| Valeur | Couleur prédite | Couleur observée |
|---|---|---|
| `rgb(255, 0, 0)` | | |
| `rgb(0, 255, 0)` | | |
| `rgb(0, 0, 255)` | | |
| `rgb(0, 0, 0)` | | |
| `rgb(255, 255, 255)` | | |

L’invisibilité du texte sur l’un de ces fonds signifie-t-elle que le texte a été supprimé ? Comparez cette superposition de lumières à un mélange de pigments.

Terminez sur le fond blanc. Alignez dans vos notes les trois `255` et les trois paires `FF` de son écriture hexadécimale. Quelle quantité chaque paire semble-t-elle représenter ?

<a id="hexadecimal"></a>

## 2. Comprendre pourquoi `255` et `FF` désignent la même quantité

Comparez les symboles disponibles :

```text
Décimal       0 1 2 3 4 5 6 7 8 9
Hexadécimal   0 1 2 3 4 5 6 7 8 9 A B C D E F
```

Pour lire les lettres, utilisez cette correspondance : `A = 10`, `B = 11`, `C = 12`, `D = 13`, `E = 14`, `F = 15`.

Comparez l’ajout d’une unité en décimal, `9 → 10`, et en hexadécimal, `F → 10`. Pourquoi faut-il une position supplémentaire à ces moments précis ? L’écriture `10` représente-t-elle la même quantité dans les deux systèmes ?

Quand une position atteint son dernier symbole, l’unité suivante la ramène à `0` et provoque un **report** à gauche. La position suivante compte donc les groupes de dix en décimal, de seize en hexadécimal : son poids dépend du seuil qui provoque le report.

Dans vos notes, complétez les décompositions. En décimal, les poids utilisés sont 100, 10 et 1 ; pour cette paire hexadécimale, ce sont 16 et 1.

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

<a id="couleurs-css"></a>

## 3. Lire et modifier une couleur CSS

### Lire les paires

La convention `#RRGGBB` organise les paires dans l’ordre rouge, vert, bleu. Réutilisez les poids de l’hexadécimal pour décomposer `#336699` :

```text
33₁₆ = 3 × 16 + 3 = ___
66₁₆ = ___ × 16 + ___ = ___
99₁₆ = ___ × 16 + ___ = ___
rgb(___, ___, ___)
```

Affectez le code hexadécimal au fond, puis votre écriture RGB. Le résultat visible change-t-il ?

<details>
<summary><strong>Vérifier les valeurs des canaux</strong></summary>

Les valeurs sont 51, 102 et 153. Les écritures `#336699` et `rgb(51, 102, 153)` décrivent la même couleur.

</details>

### Retrouver l’écriture longue

Pour développer une écriture courte, répétez chaque chiffre. Complétez :

| Écriture courte | Écriture à six chiffres |
|---|---|
| `#000` | |
| `#fff` | |
| `#369` | |
| `#123` | |

Vérifiez une paire d’écritures en l’affectant successivement au fond. `#123` signifie-t-il `#000123` ?

### Prévoir, modifier et expliquer

Prédisez la couleur de `#ff0000`, puis vérifiez. Quelle paire faut-il modifier pour ajouter du bleu en conservant la valeur du rouge ? Essayez votre proposition.

Construisez vous-même les instructions pour :

1. Rendre le texte blanc sur fond noir.
2. Remplacer l’écriture du blanc par une autre écriture équivalente.
3. Expliquer à votre voisin quelle propriété vous avez modifiée et pourquoi le texte est visible.

**Avant de recharger**, prédisez ce qui reviendra à l’état initial. Rechargez la page, puis vérifiez. Les fichiers d’origine ont-ils changé ? Les instructions de la console sont-elles rejouées ? Gardez cet onglet ouvert : sa console servira ensuite à l’horloge.

---

[Bilans des couleurs dans le cours](../session_01.md#bilan-2) · [Poursuivre les explorations de numération](../session_01.md#5-binaire--deux-symboles-les-mêmes-principes--prolongement)
