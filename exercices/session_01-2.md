# Activité 2 — Du nom de couleur à trois quantités

[Question de départ](../session_01.md#2-du-nom-de-couleur-à-trois-quantités) · [Sommaire du cours](../session_01.md#sommaire)

Les emplacements `___` sont à compléter avant d’exécuter les blocs concernés.

**Point de départ :** la page de Sullivan laissée ouverte à la fin de l’activité 1, avec sa console.

## Du mot aux quantités

Dans la console, remettez le texte en noir en modifiant la propriété `color`. Essayez ensuite séparément :

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

## Explorer les trois canaux

La démonstration utilise trois canaux dans l’ordre rouge, vert, bleu. Prédisez la couleur produite par chaque écriture, puis vérifiez en complétant l’affectation ci-dessous avec une valeur du tableau à chaque essai.

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

Terminez sur le fond blanc. Alignez dans vos notes les trois `255` et les trois paires `FF` de l’écriture hexadécimale du blanc. Quelle quantité chaque paire semble-t-elle représenter ?

---

[Retour au bilan 2 dans le cours](../session_01.md#bilan-2) · [Après le bilan : activité 3](./session_01-3.md)
