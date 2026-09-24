# Pixelator — Peindre au clic

[Séance 2](../session_02.md) · [Fiche précédente — animer un motif](./session_02-pixelator-time.md)

## Objectif

Dans l’animation sur neuf pixels, l’ordre des instructions et les attentes déterminent les changements. Ici, **chaque clic choisit la case qui change et le moment du changement**. On retrouve le mécanisme de l’ampoule sur une page distincte de quatre pixels, en réutilisant la fonction `peindre`.

La grille est blanche au chargement. Un clic peint la case choisie avec l’unique couleur de peinture. On réalise d’abord cette version, puis on la fait évoluer : un deuxième clic sur une case peinte l’efface. Les autres cases conservent leur état.

## 1. Préparer la page

**Préparation**

- [peindre-au-clic.html](./pixelator/peindre-au-clic.html) : on récupère la page de quatre pixels et on la place dans le dossier `pixelator`.
- `pixelator-layout.css` : on réutilise la feuille de style déjà présente dans le dossier.
- `pixelator-clic.js` : on crée un fichier portant exactement ce nom dans le même dossier et on y copie uniquement la définition de `peindre` depuis `pixelator.js`.

Le contenu initial de `pixelator-clic.js` est :

```js
function peindre(id, couleur) {
  document.querySelector("#" + id).style.backgroundColor = couleur;
}
```

La nouvelle page charge le même CSS et uniquement `pixelator-clic.js` comme JavaScript. Les appels de l’animation et le cadre avec les attentes restent dans `pixelator.js`, chargé par `neuf-pixels.html`.

On ouvre **`peindre-au-clic.html`** dans le navigateur. Les quatre cases sont blanches. Même après plusieurs secondes, aucune case ne change.

## 2. Faire réagir le premier pixel

**Préparation**

- `pixelator-clic.js` : on ajoute le cadre fourni ci-dessous après la définition de `peindre`, en remplaçant le violet par la couleur choisie.

Le cadre fourni est :

```js
let couleurPeinture = "#800080";

document.querySelector("#pixel1").onclick = peindrePixel;

function peindrePixel(event) {
  // On peint uniquement la case cliquée.
}
```

La ligne avec `.onclick` se lit : **« au clic sur ce pixel, exécuter `peindrePixel` »**. On écrit `peindrePixel` sans parenthèses : le navigateur appellera cette fonction au clic et lui fournira `event`. Comme dans l’ampoule, **`event.target` désigne l’élément cliqué**. Le cadre est fourni ; on complète l’action à l’intérieur des accolades.

On remplace le commentaire par un appel à la fonction déjà utilisée :

```js
peindre(event.target.id, couleurPeinture);
```

`event.target.id` fournit l’identifiant de la case cliquée, par exemple `"pixel1"`, sans `#`. `couleurPeinture` contient la couleur à appliquer. Le même appel permet ainsi de peindre la case choisie par le clic.

On enregistre et recharge. Avant le premier clic, toutes les cases restent blanches. Un clic sur `pixel1` le peint ; un deuxième clic le laisse peint. Les autres cases ne réagissent pas encore.

**Prévision avant essai :** on note ce qui se passerait si l’appel utilisait toujours `"pixel1"` au lieu de `event.target.id`. L’étape suivante permet de comparer cette prévision au comportement attendu.

## 3. Rendre les quatre cases interactives

On ajoute les trois lignes avec `.onclick` pour `pixel2`, `pixel3` et `pixel4`, en utilisant le **même comportement `peindrePixel`**. On adapte la sélection dans chaque ligne, en conservant le nom du comportement fourni.

La fonction `peindrePixel` contient toujours un seul appel à `peindre`. On ne la recopie pas pour chaque case : à chaque clic, `event.target.id` fournit l’identifiant de la case concernée.

Avant d’exécuter le programme, on note les cases qui devraient être peintes après chaque clic de cette séquence : **`pixel3 → pixel1 → pixel3 → pixel4`**. On enregistre, recharge, puis réalise ces clics et compare les résultats à la prévision.

Dans cette première version, les cases peintes le restent. À la fin, `pixel1`, `pixel3` et `pixel4` sont peints ; `pixel2` est blanc. Un clic répété sur `pixel3` ne l’efface pas.

On remplace ensuite la valeur de `couleurPeinture`, puis on enregistre et recharge. La nouvelle couleur doit être utilisée quel que soit le pixel cliqué, avec une seule valeur modifiée dans le programme.

## 4. Un deuxième clic efface la case

Le comportement à obtenir comporte maintenant deux possibilités :

| État de la case avant le clic | Action attendue | Effet sur les autres cases |
|---|---|---|
| Sans peinture | Appliquer la couleur choisie | Aucun changement |
| Peinte | Retirer la peinture | Aucun changement |

On remplace l’appel à `peindre` dans `peindrePixel` par un **`if` / `else`** qui applique cette règle à la case cliquée. Les quatre lignes qui associent les clics au comportement restent utilisables.

On écrit d’abord la condition en français, puis on la traduit en JavaScript. La fiche de l’ampoule permet de retrouver la structure `if` / `else`. Le bloc qui peint utilise `peindre(event.target.id, couleurPeinture);` ; celui qui efface utilise `peindre(event.target.id, "");`, comme dans la fiche Temps. La définition de `peindre` reste identique.

<details>
<summary><strong>Indice — reconnaître une case sans peinture</strong></summary>

Le blanc initial vient du fichier CSS. Avant toute peinture, `event.target.style.backgroundColor` vaut `""` : aucune couleur n’a été appliquée directement sur l’élément. Après une peinture, cette propriété contient une couleur ; l’appel `peindre(event.target.id, "")` retire cette peinture et rend le fond blanc défini dans le CSS.

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
- Une seule valeur dans `couleurPeinture` détermine la couleur utilisée.
- Le rechargement efface le dessin : les clics n’ont pas modifié les fichiers enregistrés.
- On peut expliquer ce qui déclenche la peinture, ce que désigne `event.target` et quelle valeur la condition examine.

Le programme associe maintenant **un événement, une cible et une décision**. Les quatre associations de clic se ressemblent : cette répétition fournit un autre point de départ pour étudier les boucles dans la suite du cours.

[Retour au cours — rappel des grands concepts](../session_02.md#consolidation)
