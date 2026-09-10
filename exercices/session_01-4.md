# Activité 4 — Lire une couleur CSS en hexadécimal

[Question de départ](../session_01.md#4-lire-une-couleur-css-en-hexadécimal) · [Sommaire du cours](../session_01.md#sommaire)

**Point de départ :** la page de Sullivan et sa console. Le texte est noir et le fond blanc après l’activité 2.

## Lire les paires

Pour cette recherche, utilisez la convention `#RRGGBB` : rouge, vert, bleu. Décomposez chaque paire de `#336699` et complétez son écriture RGB dans vos notes.

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

## Retrouver l’écriture longue

Pour développer une écriture courte, répétez chaque chiffre. Complétez :

| Écriture courte | Écriture à six chiffres |
|---|---|
| `#000` | |
| `#fff` | |
| `#369` | |
| `#123` | |

Vérifiez une paire d’écritures en l’affectant successivement au fond. `#123` signifie-t-il `#000123` ?

## Prévoir, modifier et expliquer

Prédisez la couleur de `#ff0000`, puis vérifiez. Quelle paire faut-il modifier pour ajouter du bleu en conservant la valeur du rouge ? Essayez votre proposition.

Sans recopier une ligne complète des activités précédentes :

1. Rendez le texte blanc sur fond noir.
2. Remplacez l’écriture du blanc par une autre écriture équivalente.
3. Expliquez à votre voisin quelle propriété vous avez modifiée et pourquoi le texte est visible.

**Avant de recharger**, prédisez ce qui reviendra à l’état initial. Rechargez la page, puis vérifiez. Les fichiers d’origine ont-ils changé ? Les instructions de la console sont-elles rejouées ? Gardez cet onglet ouvert pour l’activité 8.

---

[Retour au bilan 4 dans le cours](../session_01.md#bilan-4) · [Après le bilan : activité 5](./session_01-5.md)
