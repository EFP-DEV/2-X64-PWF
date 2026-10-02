# Séance 3 — Pixelator et exercices de renforcement

## 1. Terminer Pixelator

On ouvre dans VS Code le dossier `pixelator` conservé à la fin de la séance 2. Les motifs, l’animation et la feuille de style s’y trouvent.

Une page distincte de quatre pixels attend désormais une action. On télécharge `pixelator-clic.js`, qui associe le premier pixel à `peindre`. Au clic, cette fonction affiche `event.target` dans la console : on observe l’élément cliqué avant de modifier son apparence.

Dans la séquence, `peindre(id)` recevait l’identifiant écrit dans chaque appel. Ici, le navigateur appelle la fonction et lui fournit un événement. On conserve le nom `peindre` et on nomme son paramètre `event` pour indiquer la valeur attendue : ce nom aide à comprendre le programme, mais ne transforme pas la valeur reçue. On remplace l’affichage dans la console par la peinture de la case désignée par `event.target`, puis on ajoute une condition pour l’effacer au clic suivant. Plusieurs cases peuvent être peintes : chacune conserve son état indépendamment des autres.

On commence avec une seule case, puis on associe les quatre cases au même comportement fourni. Les essais portent sur plusieurs clics et plusieurs cases, pour vérifier que seule la cible du clic change.

[Consignes et fichier — Pixelator : peindre au clic](./exercices/session_03-pixelator-clic.md)

<a id="laboratoire"></a>

### Laboratoire d’expérimentation facultatif — peinture au clic

On reprend les quatre cases qui se peignent et s’effacent au clic. Les changements de couleur, de dimensions, de disposition ou de règle de peinture servent de points de départ. On prévoit un effet, on modifie le programme, puis on compare le résultat observé à la prévision. Les [expériences d’animation de la séance 2](./exercices/session_02-pixelator-laboratoire.md#animations) restent disponibles pour prolonger un parcours.

[Pistes et aides — laboratoire Pixelator](./exercices/session_03-pixelator-laboratoire.md)

<a id="renforcement"></a>

## 2. Renforcement facultatif — lecture : suivre les valeurs

Après Pixelator, les 24 exercices de renforcement restent disponibles pour reprendre une difficulté ou poursuivre la pratique : dix lectures, onze débogages et trois créations. Ces exercices sont facultatifs et non notés. On choisit un exercice selon le point à travailler ; aucune quantité d’exercices n’est imposée.

Pour reprendre l’ordre d’exécution et les changements de valeur, on choisit une lecture. Les exercices 5 et 6 se lisent ensemble pour comparer un calcul à un résultat conservé ; les exercices 4 et 10 se comparent pour suivre deux `if` successifs, puis un `if` / `else`.

On exécute mentalement un programme à la fois, sans le lancer dans le navigateur. On suit les instructions dans leur ordre et on note les valeurs disponibles à chaque étape, puis les valeurs que les appels à `console.log` afficheraient. On compare notamment un calcul seul à un résultat conservé, puis deux `if` successifs à un `if` / `else`.

La lecture demande de ralentir et de suivre ce que chaque instruction fait réellement. On passe d’une impression générale à une représentation précise des valeurs disponibles à chaque étape. Le code reste inchangé ; c’est la compréhension de son exécution qui se précise. Chaque réponse s’accompagne d’une explication fondée sur les instructions et sur les valeurs suivies mentalement.

[Programmes et questions — lecture de code](./exercices/session_03-lecture-code.md)

## 3. Renforcement facultatif — débogage : expliquer et corriger une erreur

Pour s’exercer à expliquer un écart observé, on choisit un programme à corriger. L’exercice 4 reprend la valeur reçue par un paramètre ; l’exercice 6 distingue un calcul de la conservation de son résultat ; l’exercice 10 reprend l’ordre entre un changement d’état et son affichage. Les autres programmes permettent d’examiner d’autres erreurs avec la même démarche.

Chaque programme annonce un résultat attendu. On crée le dossier `labo-renforcement` et ses sous-dossiers `debogage` et `creation`, puis on récupère individuellement le HTML, le CSS et le fichier JavaScript de l’exercice choisi. La page HTML et le CSS servent au débogage et à la création. On charge un seul exercice de débogage dans la page commune : on observe la console, on repère la cause de l’écart, puis on corrige les instructions concernées dans son fichier JavaScript. Après l’enregistrement et le rechargement, on vérifie les cas indiqués en repartant des valeurs initiales. La correction s’accompagne d’une explication de son effet.

Le débogage demande de garder le résultat attendu comme repère et de traiter l’erreur comme un indice. On passe de « le programme ne fonctionne pas » à une hypothèse précise sur sa cause : un nom, une opération, une condition ou l’ordre des instructions. Une modification ciblée permet de confronter cette hypothèse au résultat. Le code change pour retrouver le comportement annoncé ; l’explication se précise à partir des observations.

[Fichiers, programmes et résultats attendus — débogage](./exercices/session_03-debogage.md)

## 4. Renforcement facultatif — création : écrire un programme à partir d’une règle

Pour pratiquer l’écriture des instructions, on reprend les créations dans leur ordre : construire un texte, choisir entre deux messages, puis classer une valeur. On peut s’arrêter après chaque programme. Le classement permet de prolonger le travail sur les conditions et les limites.

On conserve le même dossier `labo-renforcement` et on récupère dans son sous-dossier `creation` le fichier de départ de chaque exercice choisi, seulement s’il manque. On assemble d’abord le texte d’un badge, puis on choisit un message selon la quantité en stock. On réutilise ensuite les conditions pour classer une valeur dans un seul groupe. Chaque programme affiche son résultat dans la console ; les essais font varier les valeurs de départ et vérifient les limites. On explique quelles instructions construisent le résultat et lesquelles l’affichent.

La création demande de prendre en charge le choix et l’organisation des instructions. On passe d’une règle exprimée en français aux valeurs à conserver, aux opérations à effectuer et aux décisions à traduire en conditions. La séparation entre préparation du résultat et affichage aide à ordonner le programme. Les essais aux limites obligent à préciser la règle : chaque valeur doit produire le résultat prévu, y compris lorsqu’elle change de groupe.

[Création 1 — préparer un badge](./exercices/session_03-creation-badge.md) · [Création 2 — vérifier un stock](./exercices/session_03-creation-stock.md) · [Création 3 — classer une valeur](./exercices/session_03-creation-classement.md)

<a id="consolidation"></a>

### Rappel — interactions au clic

**Les événements et l’état de chaque élément — peindre au clic.** Le navigateur appelle `peindre` au clic et lui fournit un événement. Le paramètre est nommé `event` pour rendre cette valeur attendue compréhensible : son nom ne détermine pas ce que le navigateur transmet. `console.log(event.target)` permet d’abord d’observer l’élément cliqué. La peinture agit ensuite directement sur cette case, sans rechercher son identifiant. La couleur reste fixée dans la fonction. Une condition examine la peinture de la case concernée pour la peindre ou l’effacer ; chaque case conserve son état indépendamment des autres.
