# TODO — Pierre, papier, ciseaux

## 1. Ouvrir et observer le projet

On ouvre le dossier du projet dans VS Code, puis `index.html` directement dans le navigateur. L’inspecteur et la console permettent d’observer la page avant et après un clic.

### Le jeu attendu

Trois boutons illustrés proposent pierre, papier et ciseaux. Un clic choisit le symbole du joueur ; l’ordinateur tire son symbole au hasard. Les boutons disparaissent, les deux choix apparaissent en images et un verdict annonce « Victoire », « Défaite » ou « Égalité » du point de vue du joueur.

- La pierre bat les ciseaux.
- Les ciseaux battent le papier.
- Le papier bat la pierre.
- Deux choix identiques donnent une égalité.

**On recharge la page pour rejouer.** Chaque manche est indépendante, sans score cumulé ni bouton de réinitialisation.

### Les fichiers fournis

- [index.html](./index.html) contient les boutons, les deux images du résultat et l’emplacement du verdict.
- [pierre-papier-ciseaux.css](./pierre-papier-ciseaux.css) définit l’apparence de la page et les illustrations des boutons.
- [pierre-papier-ciseaux.js](./pierre-papier-ciseaux.js) contient le programme à corriger et à compléter.
- Le dossier `images` contient [pierre.svg](./images/pierre.svg), [papier.svg](./images/papier.svg) et [ciseaux.svg](./images/ciseaux.svg).

Le HTML, le CSS et les images sont complets. **Les trois travaux concernent uniquement JavaScript.** Le programme fournit les événements, le tirage aléatoire et le passage des boutons au résultat. Aucune boucle n’est à écrire. Aucun corrigé n’accompagne les fichiers de départ.

### L’état de départ

La page apparaît, mais les clics ne déclenchent aucune manche : une erreur de syntaxe empêche l’exécution du programme.

Après la correction de cette erreur, le verdict reste « Défaite », y compris lorsque le résultat conservé dans le HTML indique autre chose. Le calcul du résultat ne couvre pas encore toutes les combinaisons. Les deux images du résultat restent sur pierre : leur actualisation n’est pas programmée.

Les travaux suivent cet ordre : réparer le démarrage et le verdict, compléter le calcul, puis actualiser les images.

### Repères de lecture du code fourni

Les attributs HTML `data-*` conservent des valeurs sous forme de texte. JavaScript y accède avec `dataset`. Une modification de ces valeurs devient visible dans l’inspecteur ; elle ne modifie pas le fichier HTML enregistré.

| Élément | Attribut HTML | Accès depuis l’élément en JavaScript | Valeur conservée |
| --- | --- | --- | --- |
| Chaque bouton de choix | `data-choix` | `.dataset.choix` | Le symbole proposé par ce bouton. |
| L’élément `jeu` | `data-joueur` | `.dataset.joueur` | Le symbole choisi par le joueur. |
| L’élément `jeu` | `data-ordinateur` | `.dataset.ordinateur` | Le symbole tiré par l’ordinateur. |
| L’élément `jeu` | `data-resultat` | `.dataset.resultat` | Le résultat calculé pour la manche. |

Les trois valeurs de l’élément `jeu` sont vides au chargement. Pendant les deux premiers travaux, ces attributs permettent d’observer les choix réels de la manche, même si les images montrent encore deux pierres.

Dans une condition, `&&` signifie « et » : les deux comparaisons doivent être vraies pour que la condition soit vraie.

Le tirage fourni produit un entier : `0` correspond à pierre, `1` à papier et `2` à ciseaux. Son mécanisme est déjà complet.

## 2. Travail facile — Réparer le démarrage et l’ordre des instructions

On relève le message de la console, on identifie la cause du blocage et on corrige l’erreur de syntaxe. Après enregistrement et rechargement, on observe une manche et les valeurs conservées dans le HTML.

Le texte du verdict peut contredire `data-resultat`. On recherche l’erreur dans l’ordre des instructions et on la corrige.

**Critères de réussite :**

- Le programme démarre sans erreur de syntaxe dans la console.
- Chacun des trois boutons permet de jouer une manche après rechargement.
- Le verdict affiché correspond à `data-resultat`, notamment lorsque cet attribut contient « Égalité » ou « Victoire ».
- Les boutons disparaissent après le choix et le résultat devient visible.

Le calcul encore incomplet et les images fixes font l’objet des travaux suivants. On enregistre les corrections dans un premier commit dont le message décrit le travail.

## 3. Travail intermédiaire — Compléter le calcul du résultat

Le programme distingue déjà l’égalité et la victoire de pierre contre ciseaux. On complète les conditions pour reconnaître aussi les victoires de papier contre pierre et de ciseaux contre papier. Toutes les autres combinaisons doivent donner une défaite.

**Critères de réussite :**

- Les neuf combinaisons respectent les règles du jeu : trois égalités, trois victoires et trois défaites.
- Le verdict et `data-resultat` concordent avec les deux choix conservés dans le HTML.
- Le tirage aléatoire est conservé dans la version enregistrée.

La vérification manuelle de la section 5 permet de couvrir toutes les combinaisons. Les images restent fixes à ce stade. On conserve le calcul complété dans un deuxième commit.

## 4. Travail difficile — Écrire et appeler `afficherChoix(id, choix)`

Les deux images existent déjà dans le HTML. La fonction `afficherChoix(id, choix)` et ses appels restent à écrire dans le JavaScript.

La fonction reçoit deux valeurs :

- `id` désigne l’image à actualiser : `choix-joueur` ou `choix-ordinateur`.
- `choix` désigne le symbole à afficher : `pierre`, `papier` ou `ciseaux`.

Elle renseigne la source `src` de l’image avec le fichier SVG correspondant dans `images`, ainsi que son texte alternatif `alt` avec le nom du symbole représenté.

On ajoute deux appels à cette même fonction pour chaque manche : un pour le choix du joueur, un pour le choix de l’ordinateur.

**Critères de réussite :**

- Chaque image correspond au choix conservé dans l’attribut HTML associé.
- Chaque texte alternatif nomme le symbole effectivement représenté.
- La même fonction est réutilisée pour les deux images avec des valeurs différentes.
- Le verdict reste correct pour les neuf combinaisons.

On conserve la fonctionnalité dans un troisième commit, après les vérifications et le rétablissement du tirage aléatoire. Des commits supplémentaires peuvent décrire les ajustements intermédiaires.

## 5. Vérifier les manches et partager le résultat

### Couvrir les neuf combinaisons

Pour observer chaque combinaison sans dépendre du hasard, on remplace temporairement l’expression `Math.floor(Math.random() * 3)` affectée à `tirage` par `0`, puis par `1`, puis par `2`.

Après chaque changement du tirage, on enregistre le fichier JavaScript. Pour chaque valeur, on joue successivement pierre, papier et ciseaux, **en rechargeant la page avant chaque manche**. Les attributs `data-joueur` et `data-ordinateur` permettent de confirmer les deux choix.

Le tableau indique le verdict attendu du point de vue du joueur :

| Choix du joueur | Ordinateur : pierre (`0`) | Ordinateur : papier (`1`) | Ordinateur : ciseaux (`2`) |
| --- | --- | --- | --- |
| Pierre | Égalité | Défaite | Victoire |
| Papier | Victoire | Égalité | Défaite |
| Ciseaux | Défaite | Victoire | Égalité |

Au premier travail, on utilise les cas déjà pris en charge : les égalités et pierre contre ciseaux doivent produire un verdict conforme à `data-resultat`. Au deuxième travail, tous les résultats du tableau doivent être obtenus. Au troisième, on vérifie aussi les images et les textes alternatifs pour chacune des neuf manches.

Après les essais, on rétablit **`Math.floor(Math.random() * 3)`** comme expression du tirage, on enregistre et on recharge. On vérifie la modification avec `git diff` avant de créer le commit : aucun tirage fixé pour les essais ne doit rester dans la version enregistrée.

### Vérifier le parcours complet

- Au chargement, les trois boutons sont visibles et la zone de résultat est masquée.
- Un clic déclenche une manche : les boutons disparaissent et le verdict ainsi que les deux images deviennent visibles.
- La console ne signale aucune erreur pendant la manche.
- Les attributs HTML, le verdict, les images et les textes alternatifs décrivent la même manche.
- Le rechargement fait réapparaître les boutons, masque le résultat et remet les attributs de l’élément `jeu` à leur valeur vide.

### Expliquer et envoyer le travail

Pour chaque travail, on explique le problème observé, sa cause et l’effet de la modification. Les observations de la console, des attributs HTML et de la page permettent de justifier la correction ou l’ajout.

Le dépôt contient au moins trois commits de travail avec des messages descriptifs. On envoie les commits avec `git push`, puis on vérifie sur GitHub la présence des fichiers modifiés et des commits correspondants.
