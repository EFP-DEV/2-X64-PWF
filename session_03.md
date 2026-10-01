# Séance 3 — Pixelator et exercices de renforcement

## 1. Terminer Pixelator

On ouvre dans VS Code le dossier `pixelator` conservé à la fin de la séance 2. Les motifs, l’animation et la feuille de style s’y trouvent.

Une page distincte de quatre pixels attend désormais une action. On télécharge `pixelator-clic.js`, qui associe le premier pixel à `peindre`. Au clic, cette fonction affiche `event.target` dans la console : on observe l’élément cliqué avant de modifier son apparence.

Dans la séquence, `peindre(id)` recevait l’identifiant écrit dans chaque appel. Ici, le navigateur appelle la fonction et lui fournit un événement. On conserve le nom `peindre` et on nomme son paramètre `event` pour indiquer la valeur attendue : ce nom aide à comprendre le programme, mais ne transforme pas la valeur reçue. On remplace l’affichage dans la console par la peinture de la case désignée par `event.target`, puis on ajoute une condition pour l’effacer au clic suivant. Plusieurs cases peuvent être peintes : chacune conserve son état indépendamment des autres.

On commence avec une seule case, puis on associe les quatre cases au même comportement fourni. Les essais portent sur plusieurs clics et plusieurs cases, pour vérifier que seule la cible du clic change.

[Consignes et fichier — Pixelator : peindre au clic](./exercices/session_03-pixelator-clic.md)

<a id="laboratoire"></a>

### Laboratoire d’expérimentation — peinture au clic

On reprend les quatre cases qui se peignent et s’effacent au clic. Les changements de couleur, de dimensions, de disposition ou de règle de peinture servent de points de départ. On prévoit un effet, on modifie le programme, puis on compare le résultat observé à la prévision. Les [expériences d’animation de la séance 2](./exercices/session_02-pixelator-laboratoire.md#animations) restent disponibles pour prolonger un parcours.

[Pistes et aides — laboratoire Pixelator](./exercices/session_03-pixelator-laboratoire.md)

## 2. Lecture — suivre les valeurs

On récupère le dossier `labo-renforcement`, qui fournit une page HTML commune, une feuille de style et un fichier JavaScript par exercice. On lit un programme à la fois et on prévoit les valeurs affichées dans la console, en suivant les instructions dans leur ordre d’exécution. On compare notamment un calcul seul à un résultat conservé, puis deux `if` successifs à un `if` / `else`. Le `src` de la page commune indique le programme à exécuter pour vérifier la prévision et expliquer les écarts.

La lecture demande de ralentir et de suivre ce que chaque instruction fait réellement. On passe d’une impression générale à une représentation précise des valeurs disponibles à chaque étape. Le code reste inchangé ; c’est la compréhension de son exécution qui se précise. Une prévision contredite par la console conduit à reprendre le raisonnement à l’endroit où les valeurs ont évolué autrement que prévu.

[Fichiers, programmes et questions — lecture de code](./exercices/session_03-lecture-code.md)

## 3. Débogage — expliquer et corriger une erreur

Chaque programme annonce un résultat attendu. On conserve le dossier `labo-renforcement` et on charge un seul exercice de débogage dans la page commune : on observe la console, on repère la cause de l’écart, puis on corrige les instructions concernées dans son fichier JavaScript. Après l’enregistrement et le rechargement, on vérifie les cas indiqués en repartant des valeurs initiales. La correction s’accompagne d’une explication de son effet.

Le débogage demande de garder le résultat attendu comme repère et de traiter l’erreur comme un indice. On passe de « le programme ne fonctionne pas » à une hypothèse précise sur sa cause : un nom, une opération, une condition ou l’ordre des instructions. Une modification ciblée permet de confronter cette hypothèse au résultat. Le code change pour retrouver le comportement annoncé ; l’explication se précise à partir des observations.

[Fichiers, programmes et résultats attendus — débogage](./exercices/session_03-debogage.md)

## 4. Création — écrire un programme à partir d’une règle

On reprend les fichiers de départ du sous-dossier `creation` dans le même dossier `labo-renforcement`. On assemble d’abord le texte d’un badge, puis on choisit un message selon la quantité en stock. On réutilise ensuite les conditions pour classer une valeur dans un seul groupe. Chaque programme affiche son résultat dans la console ; les essais font varier les valeurs de départ et vérifient les limites. On explique quelles instructions construisent le résultat et lesquelles l’affichent.

La création demande de prendre en charge le choix et l’organisation des instructions. On passe d’une règle exprimée en français aux valeurs à conserver, aux opérations à effectuer et aux décisions à traduire en conditions. La séparation entre préparation du résultat et affichage aide à ordonner le programme. Les essais aux limites obligent à préciser la règle : chaque valeur doit produire le résultat prévu, y compris lorsqu’elle change de groupe.

[Création 1 — préparer un badge](./exercices/session_03-creation-badge.md) · [Création 2 — vérifier un stock](./exercices/session_03-creation-stock.md) · [Création 3 — classer une valeur](./exercices/session_03-creation-classement.md)

<a id="consolidation"></a>

### Rappel — interactions au clic

**Les événements et l’état de chaque élément — peindre au clic.** Le navigateur appelle `peindre` au clic et lui fournit un événement. Le paramètre est nommé `event` pour rendre cette valeur attendue compréhensible : son nom ne détermine pas ce que le navigateur transmet. `console.log(event.target)` permet d’abord d’observer l’élément cliqué. La peinture agit ensuite directement sur cette case, sans rechercher son identifiant. La couleur reste fixée dans la fonction. Une condition examine la peinture de la case concernée pour la peindre ou l’effacer ; chaque case conserve son état indépendamment des autres.
