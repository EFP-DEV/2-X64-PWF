# Pixelator — Peindre au clic

## 1. Préparer la page

Dans l’animation sur neuf pixels, l’ordre des instructions et les attentes déterminent les changements. Ici, **chaque clic choisit la case qui change et le moment du changement**. On retrouve le mécanisme de l’ampoule sur une page distincte de quatre pixels.

Le comportement à construire peint la case cliquée avec l’unique couleur choisie. La grille reste blanche au chargement.

**Préparation**

- [peindre-au-clic.html](./pixelator/peindre-au-clic.html) : on récupère la page de quatre pixels et on la place dans le dossier `pixelator`.
- `pixelator-layout.css` : on réutilise la feuille de style déjà présente dans le dossier.
- [pixelator-clic.js](./pixelator/pixelator-clic.js) : on télécharge le fichier de départ et on le place dans le même dossier.

Le fichier fourni associe déjà le premier pixel à un comportement nommé `peindrePixel`. Son action reste à compléter à l’emplacement du commentaire.

La nouvelle page charge le même CSS et uniquement `pixelator-clic.js` comme JavaScript. Les appels de l’animation et le cadre avec les attentes restent dans `pixelator-time.js`, chargé par `neuf-pixels.html`.

On ouvre **`peindre-au-clic.html`** dans le navigateur. Les quatre cases sont blanches. À ce stade, même un clic sur la première case ne change rien : le comportement ne contient encore aucune instruction de peinture.

## 2. Faire réagir le premier pixel

### Passer de l’identifiant à la case cliquée

Dans la séquence, on écrit soi-même `peindre("pixel1");`. La fonction reçoit l’identifiant fourni dans cet appel et retrouve la case avec `document.querySelector("#" + id)`. La couleur choisie reste dans sa définition.

Au clic, c’est **le navigateur qui appelle la fonction**. Il lui fournit un événement qui décrit ce clic. Associer directement `peindre` au clic lui transmettrait donc un événement à la place de l’identifiant attendu : cette fonction ne convient plus telle quelle à ce branchement.

Dans `pixelator-clic.js`, le cadre fourni est :

```js
document.querySelector("#pixel1").onclick = peindrePixel;

function peindrePixel(event) {
  // On complète ici la peinture de la case cliquée.
}
```

La ligne avec `.onclick` se lit : **« au clic sur ce pixel, exécuter `peindrePixel` »**. On écrit le nom `peindrePixel` sans parenthèses pour confier ce comportement au navigateur. Le paramètre `event` reçoit l’événement fourni lors de chaque clic. Comme dans l’ampoule, **`event.target` désigne directement l’élément cliqué**.

### Peindre la cible du clic

On remplace le commentaire à l’intérieur de `peindrePixel` par l’instruction suivante, en adaptant le violet à la couleur choisie :

```js
event.target.style.backgroundColor = "#800080";
```

On retrouve la même opération de peinture que dans la séquence : `.style.backgroundColor` reçoit la couleur choisie. La case est maintenant fournie par `event.target` ; il n’est plus nécessaire de la rechercher avec un identifiant. La couleur reste un invariant écrit dans la fonction `peindrePixel`.

On enregistre et recharge. Avant le premier clic, toutes les cases restent blanches. Un clic sur `pixel1` le peint ; un deuxième clic le laisse peint. Les autres cases ne réagissent pas encore.

**Prévision avant essai :** on note ce qui se passerait si l’instruction utilisait toujours `document.querySelector("#pixel1")` au lieu d’`event.target`. L’étape suivante permet de comparer cette prévision au comportement attendu.

## 3. Rendre les quatre cases interactives

On ajoute les trois lignes avec `.onclick` pour `pixel2`, `pixel3` et `pixel4`, en utilisant le **même comportement `peindrePixel`**. On adapte la sélection dans chaque ligne, en conservant le nom du comportement fourni.

La fonction `peindrePixel` contient toujours une seule instruction de peinture. On ne la recopie pas pour chaque case : à chaque clic, `event.target` désigne la case concernée.

Avant d’exécuter le programme, on note les cases qui devraient être peintes après chaque clic de cette séquence : **`pixel3 → pixel1 → pixel3 → pixel4`**. On enregistre, recharge, puis réalise ces clics et compare les résultats à la prévision.

Dans cette première version, les cases peintes le restent. À la fin, `pixel1`, `pixel3` et `pixel4` sont peints ; `pixel2` est blanc. Un clic répété sur `pixel3` ne l’efface pas.

On remplace ensuite la couleur écrite dans `peindrePixel`, puis on enregistre et recharge. La nouvelle couleur doit être utilisée quel que soit le pixel cliqué, avec une seule valeur modifiée dans le programme.

## 4. Un deuxième clic efface la case

Le comportement à obtenir comporte maintenant deux possibilités :

| État de la case avant le clic | Action attendue | Effet sur les autres cases |
|---|---|---|
| Sans peinture | Appliquer la couleur choisie | Aucun changement |
| Peinte | Retirer la peinture | Aucun changement |

On remplace l’instruction de peinture dans `peindrePixel` par un **`if` / `else`** qui applique cette règle à la case cliquée. Les quatre lignes qui associent les clics au comportement restent utilisables.

On écrit d’abord la condition en français, puis on la traduit en JavaScript. La fiche de l’ampoule permet de retrouver la structure `if` / `else`. Le bloc qui peint conserve l’instruction `event.target.style.backgroundColor = "#800080";`, avec la couleur choisie. Celui qui efface utilise `event.target.style.backgroundColor = "";`. On retrouve l’effet de la fonction `effacer` construite dans la fiche Temps, en agissant ici directement sur la case cliquée.

<details>
<summary><strong>Indice — reconnaître une case sans peinture</strong></summary>

Le blanc initial vient du fichier CSS. Avant toute peinture, `event.target.style.backgroundColor` vaut `""` : aucune couleur n’a été appliquée directement sur l’élément. Après une peinture, cette propriété contient une couleur ; lui attribuer `""` retire cette peinture et rend le fond blanc défini dans le CSS.

On peut donc comparer cette propriété à `""` avec `===`. L’état à tester est celui de **la case cliquée**, au moment du clic.

</details>

### Vérifier l’indépendance des cases

On repart d’une page rechargée et on suit toute cette séquence, sans recharger entre les clics :

| Action | Cases qui doivent être peintes après l’action |
|---|---|
| Recharger | Aucune |
| Cliquer sur `pixel1` | `pixel1` |
| Cliquer sur `pixel4` | `pixel1`, `pixel4` |
| Cliquer de nouveau sur `pixel1` | `pixel4` |
| Cliquer sur `pixel2` | `pixel2`, `pixel4` |
| Cliquer de nouveau sur `pixel4` | `pixel2` |
| Cliquer sur `pixel3` | `pixel2`, `pixel3` |
| Recharger | Aucune |

Un essai avec une seule case ne suffit pas : cette séquence vérifie que l’état d’une case ne décide pas du comportement d’une autre.

### Expliquer un écart entre prévision et résultat

Si une case ne réagit pas, on vérifie la ligne qui associe son clic à `peindrePixel`. Si tous les clics peignent la même case, on vérifie l’élément ciblé dans la fonction. Si une peinture disparaît pendant le même clic, on suit les conditions dans l’ordre : deux `if` successifs peuvent tester des états différents, car le premier bloc a déjà modifié la case.

## Vérification finale

- Aucun pixel ne se peint au chargement ou après une attente.
- Les quatre cases réagissent au clic avec le même comportement fourni.
- Un clic sur une case blanche la peint ; un clic sur une case peinte l’efface.
- Seule la case cliquée change, même quand plusieurs cases sont déjà peintes.
- La couleur est écrite à un seul endroit dans `peindrePixel` et reste identique pour toutes les cases.
- Le rechargement efface le dessin : les clics n’ont pas modifié les fichiers enregistrés.
- On peut expliquer ce qui déclenche la peinture, ce que désigne `event.target` et quelle valeur la condition examine.
- On distingue l’identifiant fourni dans un appel à `peindre` de l’événement fourni par le navigateur lors d’un clic.

Le programme associe maintenant **un événement, une cible et une décision**. Les quatre associations de clic se ressemblent : cette répétition fournit un autre point de départ pour étudier les boucles dans la suite du cours.

[Suite — laboratoire d’expérimentation](./session_02-pixelator-laboratoire.md)

[Séance 2](../session_02.md) · [Fiche précédente — animer un motif](./session_02-pixelator-time.md)
