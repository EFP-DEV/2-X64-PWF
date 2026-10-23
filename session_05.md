# Séance 5 — Construire le document avec JavaScript

## 1. Retrouver les cases de Pixelator

On ouvre le Pixelator terminé en séance 4, dans le clone `labo-frontend-pixelator`. Les quatre cases se peignent et s’effacent indépendamment. Dans le fichier HTML, quatre éléments décrivent ces cases ; dans le JavaScript, quatre associations leur donnent le même comportement au clic.

Une grille de 32 colonnes et 16 lignes demande 512 cases. La construction manuelle ferait répéter ces mêmes instructions. On commence par chercher comment créer une seule case avec JavaScript, en conservant le comportement de peinture déjà connu.

On crée un fork du dépôt `labo-pixelator-construction`, puis on clone cette copie personnelle à côté des autres projets du cours. On reprend ainsi le parcours de la séance 4. `git remote -v` permet de vérifier que `origin` désigne le nouveau fork personnel. Le clone contient `construire-grille.html`, sa feuille de style et son fichier JavaScript. Son conteneur est vide : on observe cette page avant de construire sa première case. Le projet de la séance 4 reste disponible dans son propre clone pour les comparaisons.

[Fichiers et point de départ — construire la grille](./exercices/session_05-pixelator-construction.md#1-préparer-une-page-de-construction)

## 2. Créer une case et l’insérer dans le document

Dans la console, on crée un élément avec `document.createElement("div")` et on lui donne l’identifiant `pixel1`. La console permet d’examiner cet élément, mais la page reste vide. Une recherche dans le document ne le trouve pas encore.

On insère ensuite l’élément dans la grille avec `appendChild`. La case apparaît et devient accessible à la recherche. Répéter cette insertion avec le même élément ne crée pas une deuxième case : l’élément conserve son identité.

Ces observations permettent de nommer le DOM : la représentation du document que le navigateur construit et que JavaScript peut consulter et modifier. Créer un élément et l’insérer dans ce document sont deux opérations distinctes.

[Manipulations et observations — créer puis insérer](./exercices/session_05-pixelator-construction.md#2-créer-une-case-dans-la-console)

## 3. Conserver la construction dans un fichier

On associe la nouvelle case à `peindre`, puis on vérifie l’alternance entre peinture et effacement. Le comportement étudié en séance 3 s’applique aussi à un élément créé par JavaScript.

Un rechargement fait disparaître la case créée dans la console. On reporte alors les instructions dans `pixelator-construction.js`. Après enregistrement et rechargement, la case est reconstruite. Le fichier HTML conserve un conteneur vide, tandis que l’inspecteur montre la case ajoutée pendant l’exécution.

On distingue ainsi les fichiers enregistrés, le document en cours d’utilisation et les instructions qui reconstruisent ce document à chaque chargement. Un premier commit conserve cette étape.

[Consignes — relier le clic et conserver la construction](./exercices/session_05-pixelator-construction.md#3-conserver-une-case-interactive)

## 4. Construire quatre cases et comparer les instructions

On adapte les instructions pour créer une deuxième case, puis une troisième et une quatrième. Les essais reprennent la séquence de clics déjà utilisée : chaque case doit garder son propre état.

Le résultat visible rejoint celui du Pixelator précédent, mais les cases sont maintenant construites par JavaScript. La comparaison des quatre blocs fait apparaître les invariants : créer un `div`, préparer son identifiant, associer `peindre` au clic et insérer l’élément. Seul le numéro change.

[Construction et comparaison — quatre cases](./exercices/session_05-pixelator-construction.md#4-construire-quatre-cases)

## 5. Répéter la construction avec une boucle

On formule la règle avant de l’écrire : partir du numéro 1, construire une case tant que le numéro ne dépasse pas 4, puis passer au numéro suivant. La boucle `while` répète le bloc en vérifiant sa condition avant chaque passage.

On suit les valeurs du numéro jusqu’au premier test faux. La dernière case porte le numéro 4 ; à la sortie de la boucle, le numéro vaut 5. La création de l’élément reste à l’intérieur du bloc pour obtenir une nouvelle case à chaque passage.

Après le remplacement des quatre blocs, la grille et les clics doivent produire les mêmes résultats. Les essais avec des limites de 1, 4 et 0 permettent de vérifier le rôle de la condition, y compris lorsqu’aucun passage n’a lieu. On conserve cette nouvelle version dans un commit.

[Boucle, suivi des valeurs et cas de vérification](./exercices/session_05-pixelator-construction.md#5-remplacer-les-quatre-blocs-par-une-boucle)

## 6. Pratiquer les boucles dans la console

On crée un fork du dépôt `labo-boucles`, puis on le clone à côté de `labo-pixelator-construction`. Après vérification de la destination avec `git remote -v`, on retrouve `boucles.html` et `boucles.js` dans ce nouveau clone.

On reprend la structure de la boucle en affichant seulement un numéro à chaque passage. Une série de seize exercices fait varier progressivement le départ, la limite, la comparaison et le pas. On rencontre une condition fausse dès le départ, puis on inverse le sens du comptage et on compare l’affichage avant ou après la modification du numéro.

Les exercices suivants conservent la boucle et changent ce qu’elle affiche : un message répété, un message numéroté, puis un calcul et sa présentation. On termine en écrivant une série de tickets à partir d’une règle. La progression passe de la modification d’un modèle fourni à la combinaison autonome des mécanismes pratiqués.

Pour chaque essai, on prévoit les affichages, le nombre de passages et la valeur disponible après la boucle. On enregistre, on recharge, puis on explique la comparaison. Les consignes indiquent les programmes qui se poursuivent et ceux qui repartent du modèle initial. Les cas de vérification comprennent plusieurs passages, un seul passage et aucun passage. Le dernier programme est conservé dans un commit, puis envoyé vers le fork personnel de `labo-boucles`.

[Seize exercices, fichiers et vérifications — boucles dans la console](./exercices/session_05-boucles.md)

<a id="consolidation"></a>

## 7. Revenir à Pixelator et consolider

On revient dans le clone `labo-pixelator-construction`, à `construire-grille.html` et à `pixelator-construction.js`. On retrouve le départ, la condition et l’augmentation du numéro dans la boucle qui construit les cases.

Avant de recharger, on prévoit le nombre de cases, le dernier identifiant et la valeur du numéro après la boucle. On vérifie ensuite les quatre cases et leur indépendance au clic. On explique pourquoi chaque passage crée un nouvel élément et pourquoi la peinture attend un clic.

Le HTML fournit le conteneur de départ. JavaScript crée des éléments, prépare leurs propriétés et les insère dans le document. Le CSS détermine leur apparence et leur disposition.

Le point de départ, la condition et l’évolution du numéro déterminent les passages. Dans les exercices de console, ces mêmes mécanismes répètent un affichage ; dans Pixelator, chaque passage crée une nouvelle case. La valeur disponible après la boucle est celle qui a rendu son dernier test faux ; elle peut dépasser une limite sans lui avoir été égale.

Les changements réalisés dans la console ou par les clics concernent la page en cours. Les instructions enregistrées dans les fichiers permettent de reconstruire la grille au rechargement. On examine les changements éventuels et les commits, puis on envoie les étapes conservées vers le fork personnel de `labo-pixelator-construction`.

[Vérifier les quatre cases et conserver le travail](./exercices/session_05-pixelator-construction.md#conserver-quatre-cases)

<a id="prolongement"></a>

## Prolongement — Construire une grille de dimensions choisies

On entreprend ce prolongement lorsque le départ, la condition, le pas et l’arrêt de la boucle peuvent être expliqués, avec des prévisions correctes pour plusieurs passages, un seul passage et aucun passage. La pratique et la consolidation précèdent ce travail. Le prolongement peut être repris au cours suivant à partir de la grille de quatre cases conservée.

On demande neuf cases sans changer la disposition CSS : la grille garde deux colonnes. Cette observation distingue le nombre d’éléments créés de leur disposition. On passe ensuite à trois colonnes pour retrouver un carré de neuf cases.

On conserve enfin un nombre de colonnes et un nombre de lignes dans deux variables. Leur produit fournit le nombre de cases à construire. La valeur des colonnes sert aussi à préparer la disposition de la grille. On passe ainsi à 32 colonnes et 16 lignes sans recopier les instructions de construction.

On adapte les dimensions à une autre grille et on vérifie les limites, les identifiants et l’indépendance des cases. Le rechargement reconstruit une grille blanche avec les dimensions enregistrées dans le programme. Après examen des changements, on crée un commit et on envoie les étapes vers le fork personnel de `labo-pixelator-construction`.

[De neuf à 512 cases — dimensions et vérifications](./exercices/session_05-pixelator-construction.md#6-distinguer-le-nombre-de-cases-et-leur-disposition)
