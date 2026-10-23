# Pixelator — Construire la grille avec JavaScript

## 1. Préparer une page de construction

On ouvre `peindre-au-clic.html` dans le clone personnel `labo-frontend-pixelator` terminé en séance 4. Un premier clic peint une case ; un deuxième l’efface. Dans le HTML, on retrouve les quatre éléments `div`. Dans le JavaScript, on retrouve les quatre associations à `peindre`.

Une grille de 32 colonnes et 16 lignes demanderait 512 éléments et autant d’associations au clic. On cherche à construire ces cases avec JavaScript. Le premier résultat attendu reste une seule case, avec le comportement déjà connu.

### Créer un fork du projet de construction et le cloner

On reprend le parcours de la séance 4 avec un nouveau dépôt, [EFP-DEV/labo-pixelator-construction](https://github.com/EFP-DEV/labo-pixelator-construction) :

1. On choisit **Fork**, puis le compte personnel comme propriétaire.
2. On conserve le nom `labo-pixelator-construction` et on copie uniquement la branche principale, `main`.
3. On valide avec **Create fork**. Sur la nouvelle page, on vérifie que le propriétaire est le compte personnel.
4. Depuis ce **fork personnel**, on copie l’adresse **Code → HTTPS**.

Dans VS Code, on ouvre le **dossier parent des projets du cours**, puis un nouveau terminal intégré. On remplace toute l’adresse d’exemple ci-dessous par celle du fork personnel, en conservant `git clone` et l’espace qui suit :

```text
git clone https://github.com/nom-du-compte/labo-pixelator-construction.git
```

`nom-du-compte` représente le compte personnel ; l’adresse d’exemple doit être remplacée avant d’exécuter la commande. Le clone crée le dossier `labo-pixelator-construction` à côté de `labo-frontend-pixelator` et récupère ensemble les fichiers et leur historique.

On ouvre **`labo-pixelator-construction` dans VS Code**, puis un nouveau terminal intégré depuis ce dossier. On y saisit :

```text
git status
git remote -v
```

`git status` indique la branche `main` et aucun changement en attente. Les deux lignes de `git remote -v` doivent désigner le fork personnel, avec le compte réel à la place de `nom-du-compte` :

```text
origin  https://github.com/nom-du-compte/labo-pixelator-construction.git (fetch)
origin  https://github.com/nom-du-compte/labo-pixelator-construction.git (push)
```

Les commits de cette activité seront créés dans ce clone et envoyés vers ce fork. Le projet de la séance 4 reste dans `labo-frontend-pixelator` pour les comparaisons.

### Observer les fichiers du clone

Les trois fichiers de départ se trouvent **à la racine de `labo-pixelator-construction`** :

| Fichier fourni | Rôle et travail prévu |
| --- | --- |
| `construire-grille.html` | Nouvelle page avec un conteneur vide. On conserve ce HTML pendant l’activité. |
| `pixelator-construction.css` | Apparence familière des cases. On modifiera leur disposition et leur taille dans les dernières étapes. |
| `pixelator-construction.js` | Sélection de la grille et fonction `peindre` fournies. Les instructions de construction sont à ajouter. |

On ouvre désormais **`construire-grille.html` depuis `labo-pixelator-construction`** dans le navigateur. Cette page charge uniquement `pixelator-construction.js` comme JavaScript. Pour comparer les deux versions, on ouvre `peindre-au-clic.html` depuis le clone `labo-frontend-pixelator` de la séance 4.

Le titre et le texte apparaissent, mais aucune case n’est visible. Dans l’inspecteur, on retrouve la section portant l’identifiant `grille-pixels` : elle ne contient aucun élément. Le JavaScript fourni conserve une référence à cette section dans `grille` :

```js
let grille = document.querySelector("#grille-pixels");
```

La fonction `peindre` est définie dans le même fichier. Sa définition fournit un comportement ; elle ne crée aucune case et ne déclenche aucune peinture.

## 2. Créer une case dans la console

On garde `construire-grille.html` ouverte et on utilise sa console. Les instructions de cette étape sont saisies **dans la console**, une par une. Elles ne sont pas encore ajoutées au fichier JavaScript.

### Créer un élément

Avant de saisir les deux instructions suivantes, on prévoit si elles suffiront à faire apparaître une case dans la page. On les exécute ensuite :

```js
let pixel = document.createElement("div");
pixel.id = "pixel1";
```

`document.createElement("div")` crée un élément `div`. La variable `pixel` permet de retrouver cet élément ; l’affectation suivante lui donne l’identifiant `pixel1`.

On observe la page et on compare le résultat à la prévision. On examine ensuite l’élément et on cherche cet identifiant dans le document :

```js
pixel
document.querySelector("#pixel1")
```

La première expression permet d’examiner le `div` créé. La recherche renvoie `null`, qui indique ici qu’aucun élément correspondant n’a été trouvé dans le document. La page reste vide : l’élément existe, mais il n’a pas encore été inséré dans la grille.

### Insérer l’élément dans la grille

On saisit :

```js
grille.appendChild(pixel);
```

La case apparaît. Dans l’inspecteur, le `div` se trouve maintenant à l’intérieur de la section `grille-pixels`. On reprend la recherche :

```js
document.querySelector("#pixel1")
```

Elle retrouve cette fois l’élément. `appendChild` ajoute l’élément fourni à la fin des enfants du conteneur. La feuille de style donne un fond blanc, une bordure et des dimensions aux `div` placés directement dans la grille.

Le navigateur représente le document par des éléments reliés entre eux : cette représentation est appelée **DOM**, pour *Document Object Model*. JavaScript peut sélectionner un élément de ce document, le modifier ou en insérer un nouveau.

### Répéter la même insertion

Avant de poursuivre, on prévoit le nombre de cases après une deuxième exécution de la même instruction :

```js
grille.appendChild(pixel);
```

On observe toujours une seule case. `pixel` désigne le même élément. `appendChild` ne le copie pas : si l’élément est déjà inséré, il est déplacé à la fin du conteneur. Ici, il occupait déjà cette place. Pour obtenir une deuxième case, il faudra créer un autre élément.

<details>
<summary><strong>Recommencer les essais dans la console</strong></summary>

Pour reprendre cette étape depuis son point de départ, on recharge la page, puis on reprend la création de `pixel`. Effacer les messages de la console ne retire ni les éléments ajoutés ni les variables déclarées. Redéclarer une variable avec `let` dans la même page peut provoquer un message indiquant que son nom est déjà déclaré.

</details>

## 3. Conserver une case interactive

### Associer le comportement connu

Sans recharger, on saisit dans la console :

```js
pixel.onclick = peindre;
```

On clique deux fois sur la case. Le premier clic la peint et le deuxième retire la peinture. `peindre` est fourni sans parenthèses : la fonction sera appelée par le navigateur au clic, avec l’événement correspondant.

Le comportement fourni examine `event.target.style.backgroundColor`. Une valeur vide indique qu’aucune couleur n’est appliquée directement sur la case ; le blanc visible vient alors du CSS. La condition agit sur la case cliquée, comme dans la version précédente de Pixelator.

### Recharger avant d’enregistrer la construction

On prévoit le résultat d’un rechargement, puis on recharge la page. La case disparaît et le conteneur redevient vide. Les instructions saisies dans la console ont modifié le document en cours, sans modifier les fichiers.

Dans **`pixelator-construction.js`**, on ajoute maintenant les instructions suivantes à l’emplacement indiqué, après la sélection de `grille` et avant la définition de `peindre` :

```js
let pixel = document.createElement("div");
pixel.id = "pixel1";
pixel.onclick = peindre;
grille.appendChild(pixel);
```

On conserve la sélection de la grille et la fonction déjà fournies. La page charge ce JavaScript après la section HTML : le conteneur existe lorsque `querySelector` le cherche.

Après enregistrement et rechargement, la case apparaît sans instruction supplémentaire dans la console. On la peint, puis on recharge encore : une case blanche est reconstruite.

On compare le fichier HTML dans VS Code et la section dans l’inspecteur. Le fichier ne contient toujours aucun `div` de pixel ; le document inspecté contient celui que le programme vient de créer. La couleur appliquée par un clic n’a pas été enregistrée dans les fichiers.

On examine les changements et on conserve cette étape dans un commit, par exemple `Construire une case interactive avec JavaScript`.

## 4. Construire quatre cases

Dans `pixelator-construction.js`, on conserve le premier bloc de construction. On en écrit un deuxième sur le même modèle, avec une variable `pixel2` et l’identifiant `"pixel2"`. Ce bloc doit créer un nouvel élément, lui attribuer son identifiant, associer `peindre` à son clic et l’insérer dans la grille.

On enregistre et recharge. Deux cases doivent apparaître. On peint la première, puis la deuxième ; les deux doivent rester peintes. Un nouveau clic sur la première ne doit effacer que celle-ci.

On ajoute ensuite les blocs correspondant à `pixel3` et `pixel4`. Les identifiants attendus dans l’inspecteur sont `pixel1`, `pixel2`, `pixel3` et `pixel4`, chacun présent une seule fois.

<details>
<summary><strong>Indice — deux noms qui n’ont pas le même rôle</strong></summary>

Dans `let pixel2 = document.createElement("div");`, `pixel2` est le nom de la variable JavaScript. Dans `pixel2.id = "pixel2";`, le texte `"pixel2"` devient l’identifiant de l’élément dans le document. Le nom de la variable n’attribue pas automatiquement cet identifiant.

Chaque nouveau bloc doit appeler `document.createElement("div")`. Réinsérer le premier élément avec un autre identifiant déplacerait et renommerait la même case.

</details>

On recharge et on reprend les clics suivants sans recharger entre eux :

| Action | Cases qui doivent être peintes après l’action |
| --- | --- |
| Cliquer sur `pixel1` | `pixel1` |
| Cliquer sur `pixel4` | `pixel1`, `pixel4` |
| Cliquer de nouveau sur `pixel1` | `pixel4` |
| Cliquer sur `pixel2` | `pixel2`, `pixel4` |
| Cliquer de nouveau sur `pixel4` | `pixel2` |

On compare cette page à `peindre-au-clic.html`, ouverte depuis `labo-frontend-pixelator` terminé en séance 4. Le résultat et le comportement sont les mêmes ; la construction des cases a changé.

On compare ensuite les quatre blocs de JavaScript. Les opérations et la fonction associée au clic restent identiques. Le numéro utilisé dans l’identifiant passe de 1 à 4. Cette répétition fournit le point de départ de la boucle.

## 5. Remplacer les quatre blocs par une boucle

### Suivre une règle de répétition

On décrit la construction en français :

1. On commence au numéro 1.
2. Tant que le numéro ne dépasse pas 4, on crée la case correspondant à ce numéro.
3. Après chaque construction, on augmente le numéro de 1, puis on revient à la vérification.

Dans `pixelator-construction.js`, on remplace **les quatre blocs de construction** par ce programme. La sélection de `grille` et la fonction `peindre` restent en place :

```js
let numero = 1;

while (numero <= 4) {
  let pixel = document.createElement("div");
  pixel.id = "pixel" + numero;
  pixel.onclick = peindre;
  grille.appendChild(pixel);

  numero = numero + 1;
}

console.log("Prochain numéro : " + numero);
```

`while` signifie « tant que ». Avant chaque passage, JavaScript évalue la condition entre parenthèses. Si elle est vraie, le bloc entre accolades s’exécute. Après le bloc, la condition est évaluée de nouveau. Si elle est fausse, l’exécution se poursuit après la boucle.

`"pixel" + numero` prépare l’identifiant à partir du numéro disponible pendant ce passage. Le même nom de variable `pixel` est utilisé dans le bloc, mais `createElement` crée un nouvel élément à chaque passage. Les cases précédentes restent dans le document.

Avant de lancer le programme, on suit ses valeurs :

| Numéro au moment du test | `numero <= 4` | Élément ajouté | Numéro après le bloc |
| ---: | --- | --- | ---: |
| 1 | Vrai | `pixel1` | 2 |
| 2 | Vrai | `pixel2` | 3 |
| 3 | Vrai | `pixel3` | 4 |
| 4 | Vrai | `pixel4` | 5 |
| 5 | Faux | Aucun | Le bloc n’est pas exécuté |

On prévoit le message de la console, puis on enregistre et recharge. Quatre cases doivent apparaître et le message doit être `Prochain numéro : 5`. Le numéro atteint après la dernière construction ne désigne pas une cinquième case créée.

La boucle ne prévoit aucune attente entre deux constructions. Les délais utilisés dans l’animation de Pixelator en séance 2 provenaient des instructions d’attente ajoutées au programme.

On reprend la séquence de clics de l’étape précédente. Le remplacement des quatre blocs par la boucle doit préserver le résultat et l’indépendance des cases.

### Examiner les limites

On remplace uniquement la limite `4` dans la condition. Pour chaque essai, on prévoit le nombre de cases et le prochain numéro, puis on enregistre et on recharge la page :

| Limite dans la condition | Nombre de cases attendu | Prochain numéro attendu |
| ---: | ---: | ---: |
| 1 | 1 | 2 |
| 4 | 4 | 5 |
| 0 | 0 | 1 |

Avec une limite de 0, le premier test est déjà faux. Le bloc ne s’exécute donc jamais et `numero` conserve sa valeur de départ.

On examine également, **sans exécuter cette modification**, l’effet du retrait de `numero = numero + 1;` avec la limite 4. Le numéro resterait 1, la condition resterait vraie et le programme continuerait à créer des éléments sans atteindre la suite. L’évolution du numéro permet ici d’atteindre un test faux.

On rétablit la limite 4 et on conserve cette version dans un commit, par exemple `Construire les quatre cases avec une boucle`.

### Pratiquer la boucle dans la console

On poursuit avec les [exercices de boucles](./session_05-boucles.md). Ils reprennent la structure de `while` avec des affichages simples, en faisant varier le départ, la limite, le pas et l’ordre des instructions.

La fiche fait créer un fork puis un clone du dépôt `labo-boucles`, à côté de `labo-pixelator-construction`. On conserve ici la grille de quatre cases. Après cette pratique, on revient au clone `labo-pixelator-construction`, à `construire-grille.html` et à `pixelator-construction.js` pour consolider et conserver le travail.

<a id="conserver-quatre-cases"></a>

### Revenir aux quatre cases et conserver le travail

Dans le clone personnel `labo-pixelator-construction`, on reprend `pixelator-construction.js`. La limite de la boucle reste 4. Avant de recharger `construire-grille.html`, on prévoit le nombre de cases, le dernier identifiant et le prochain numéro affiché dans la console.

Après rechargement, on vérifie les quatre cases blanches, les identifiants de `pixel1` à `pixel4` et le message `Prochain numéro : 5`. Sans recharger entre les clics, on peint `pixel1`, puis `pixel4`, puis on efface `pixel1` : seule `pixel4` doit rester peinte.

On explique le rôle de chaque instruction de la boucle. La création et l’insertion ont lieu à chaque passage ; l’association à `peindre` prépare le comportement au clic. Le rechargement reconstruit les cases à partir des fichiers, sans conserver le dessin réalisé par les clics.

Depuis la racine du clone `labo-pixelator-construction`, on examine l’état du travail :

```text
git status
```

Les étapes de construction d’une case, puis de quatre cases avec une boucle, ont déjà fait l’objet de commits. Si des modifications restent à conserver, on les examine, on les prépare et on crée un commit qui les décrit. On envoie ensuite les commits existants vers le fork personnel de `labo-pixelator-construction` :

```text
git push
```

On actualise le fork personnel de `labo-pixelator-construction` sur GitHub. Les fichiers de construction et les commits doivent y apparaître. Cette version de quatre cases constitue le point de reprise du prolongement.

## 6. Distinguer le nombre de cases et leur disposition

Les étapes 6 à 8 constituent un prolongement après la pratique et la consolidation. On les commence lorsque les passages et l’arrêt de la boucle peuvent être expliqués. Elles peuvent être reprises au cours suivant : le point de départ reste la grille de quatre cases enregistrée à l’étape précédente.

Dans la condition, on remplace la limite 4 par 9. On laisse le CSS inchangé, puis on prévoit la forme de la grille avant d’enregistrer et de recharger.

Neuf cases apparaissent, réparties sur deux colonnes : quatre lignes complètes, puis une dernière case seule. La boucle détermine le nombre d’éléments ; le CSS conserve la disposition prévue pour deux colonnes.

Dans **`pixelator-construction.css`**, on remplace alors uniquement :

```css
grid-template-columns: repeat(2, 5rem);
```

par :

```css
grid-template-columns: repeat(3, 5rem);
```

Après enregistrement et rechargement, les mêmes neuf cases occupent trois colonnes et trois lignes. On vérifie que `pixel9` se peint et s’efface comme `pixel1`. La modification du CSS n’a créé aucune case supplémentaire.

## 7. Construire 32 colonnes et 16 lignes

### Calculer le nombre de cases

Dans `pixelator-construction.js`, avant `let numero = 1;`, on ajoute :

```js
let colonnes = 32;
let lignes = 16;
let nombrePixels = colonnes * lignes;
```

On remplace la limite numérique de la boucle par `nombrePixels`. Le produit vaut 512. Avant de poursuivre, on prévoit le dernier identifiant et le prochain numéro affiché dans la console.

### Utiliser le nombre de colonnes pour la disposition

La règle CSS précédente conserve trois colonnes. Pour que la disposition suive la valeur de `colonnes`, on ajoute cette instruction après le calcul de `nombrePixels`, avant la boucle :

```js
grille.style.gridTemplateColumns = "repeat(" + colonnes + ", 1rem)";
```

On retrouve `.style`, déjà utilisé pour la couleur. La propriété `gridTemplateColumns` permet de définir la disposition des colonnes. Avec `colonnes` à 32, le texte construit est `"repeat(32, 1rem)"` : 32 colonnes larges de `1rem`. Cette valeur appliquée directement à la grille prend le pas sur la règle de colonnes du fichier CSS fourni.

Pour que les cases tiennent dans ces colonnes, on effectue les adaptations suivantes dans `pixelator-construction.css` :

- Dans la règle `#grille-pixels`, on remplace `gap: 0.5rem;` par `gap: 0.125rem;`.
- Dans la règle `#grille-pixels > div`, on remplace la largeur et la hauteur de `5rem` par `1rem`.

La bordure et la couleur initiale restent définies par cette même règle. On enregistre les fichiers et on recharge `construire-grille.html`.

La grille attendue contient 32 colonnes et 16 lignes. Le dernier élément porte l’identifiant `pixel512`, et la console affiche `Prochain numéro : 513`.

On retrouve `pixel1` et `pixel512` dans l’inspecteur. Pour vérifier la limite dans la console, on saisit :

```js
document.querySelector("#pixel512")
document.querySelector("#pixel513")
```

La première recherche retrouve la dernière case ; la seconde renvoie `null`. On peut aussi lire le nombre d’éléments directement contenus dans la grille :

```js
grille.childElementCount
```

Cette propriété donne ici le nombre de cases insérées. La valeur attendue est 512.

### Adapter les dimensions

On cherche ensuite une grille de **8 colonnes et 3 lignes**. On modifie uniquement les valeurs de départ de `colonnes` et `lignes`, puis on prévoit le nombre de cases, le dernier identifiant et le prochain numéro avant de recharger.

Le résultat attendu comporte 24 cases. Le dernier identifiant est `pixel24` et le prochain numéro vaut 25. La disposition doit suivre les huit colonnes sans modification supplémentaire du CSS.

On explique pourquoi il faut placer le calcul de `nombrePixels` après les valeurs de `colonnes` et de `lignes`. Le produit est calculé lorsque l’instruction s’exécute ; une modification ultérieure d’une dimension ne recalculerait pas automatiquement ce résultat.

On choisit ensuite d’autres dimensions entières positives, on prévoit le résultat et on l’observe. On rétablit enfin 32 colonnes et 16 lignes pour la vérification finale.

## 8. Vérifier et conserver la grille

On enregistre les fichiers et on recharge la page. On vérifie les points suivants :

- La grille contient 512 cases, réparties sur 32 colonnes et 16 lignes, toutes blanches au départ.
- Les identifiants vont de `pixel1` à `pixel512`, sans répétition. La dernière case se peint et s’efface comme la première.
- Sans recharger entre les actions, on peint la première et la dernière case, puis on efface la première : la dernière reste peinte.
- Après rechargement, les dimensions restent les mêmes et toutes les cases sont blanches.
- Le HTML enregistré contient toujours le conteneur vide ; l’inspecteur montre les cases ajoutées par le programme.
- La console ne signale pas d’erreur et affiche le prochain numéro attendu.

On explique le rôle de `createElement`, de `appendChild`, de la condition de boucle et de l’augmentation du numéro. On distingue le nombre de cases, leur disposition et leur état au clic.

Dans VS Code, on examine les changements. Depuis la racine du clone personnel `labo-pixelator-construction`, on prépare les fichiers de cette activité et on conserve la dernière étape :

```text
git add construire-grille.html pixelator-construction.css pixelator-construction.js
git commit -m "Construire une grille aux dimensions choisies"
git push
```

Sur GitHub, on actualise le fork personnel de `labo-pixelator-construction`. Les trois fichiers et les commits de l’activité doivent y apparaître. Le JavaScript conserve les instructions de construction ; le dessin réalisé par les clics reste un état temporaire de la page.

[Séance 5](../session_05.md) · [Séance précédente](../session_04.md)
