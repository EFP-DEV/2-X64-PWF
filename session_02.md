# Séance 2 — L’horloge, l’ampoule et les pixels

## 1. Terminer l’horloge

L’horloge de la séance précédente sait ajouter une minute, mais le passage à minuit reste à corriger. On reprend ce cas pour comprendre où placer la correction : le résultat dépend autant de l’ordre des instructions que de leur contenu.

[Consignes — terminer l’horloge](./exercices/session_02-clock-final.md)

## 2. Résoudre l’ampoule

Une ampoule dans une page web peut être allumée ou éteinte. On corrige le programme pour passer d’un état à l’autre à chaque clic, puis faire changer le fond. Les conditions permettent ainsi de coordonner plusieurs changements visibles dans une même interaction.

[Consignes et fichiers de l’exercice](./exercices/session_02-ampoule.md)

## 3. Déposer l’ampoule sur GitHub et remettre le lien sur Moodle

L’ampoule fonctionne sur l’ordinateur où elle a été réalisée. On rassemble ses fichiers dans un dépôt sur GitHub, puis on transmet son adresse sur Moodle. La vérification de la copie téléchargée permet de s’assurer que le projet peut être récupéré et utilisé ailleurs.

[Consignes — GitHub et remise sur Moodle](./exercices/session_02-ampoule-github.md)

Après la remise, on fait une pause.

## 4. Pixelator — Séquence : peindre un motif

Pixelator commence avec quatre grandes cases qui représentent des pixels. On choisit une couleur et on écrit les instructions qui peignent un motif, puis on passe à neuf cases pour peindre le contour du carré dans l’ordre des numéros, en sautant le centre. La couleur fait partie des invariants ; seul l’identifiant varie. On introduit ainsi `peindre(id)`, avec la couleur fixée dans sa définition, puis on réécrit le contour avec des appels à cette fonction et on en conserve une copie avant de créer un deuxième motif.

[Consignes et fichiers — Pixelator : séquence](./exercices/session_02-pixelator-sequence.md)

## 5. Pixelator — Temps : animer un motif

On télécharge `pixelator-time.js` et on change le `src` dans la page de neuf pixels. Ce fichier fournit les fonctions `peindre` et `attendre`, le cadre de chargement et les huit appels du contour dans l’ordre des numéros. On ajoute des attentes d’une seconde entre ces appels : les étapes deviennent visibles. On passe ensuite à 500 ms pour accélérer l’apparition, puis on réorganise les mêmes lignes de peinture pour suivre le bord du carré. Le contour final reste identique ; sa construction visible change avec l’ordre des instructions. On construit enfin `effacer(id)` sur le modèle de `peindre(id)`, puis on ajoute les effacements et le retour au départ pour faire circuler une seule case colorée, toujours à 500 ms. Le centre reste blanc.

[Consignes et fichiers — Pixelator : temps](./exercices/session_02-pixelator-time.md)

## 6. Pixelator — Peindre et effacer au clic

Une page distincte de quatre pixels attend désormais une action. On télécharge `pixelator-clic.js`, qui associe le premier pixel à `peindre`. Au clic, cette fonction affiche `event.target` dans la console : on observe l’élément cliqué avant de modifier son apparence.

Dans la séquence, `peindre(id)` recevait l’identifiant écrit dans chaque appel. Ici, le navigateur appelle la fonction et lui fournit un événement. On conserve le nom `peindre` et on nomme son paramètre `event` pour indiquer la valeur attendue : ce nom aide à comprendre le programme, mais ne transforme pas la valeur reçue. On remplace l’affichage dans la console par la peinture de la case désignée par `event.target`, puis on ajoute une condition pour l’effacer au clic suivant. Plusieurs cases peuvent être peintes : chacune conserve son état indépendamment des autres.

On commence avec une seule case, puis on associe les quatre cases au même comportement fourni. Les essais portent sur plusieurs clics et plusieurs cases, pour vérifier que seule la cible du clic change.

[Consignes et fichier — Pixelator : peindre au clic](./exercices/session_02-pixelator-clic.md)

<a id="laboratoire"></a>

## 7. Laboratoire d’expérimentation — animations ou peinture au clic

On choisit une piste à partir d’un Pixelator fonctionnel : inventer une animation ou explorer la peinture au clic. Les variantes de parcours, la grille de seize pixels et les changements de couleur, de disposition ou de comportement servent de points de départ. On prévoit un effet, on modifie le programme, puis on compare le résultat observé à la prévision.

[Pistes et aides — laboratoire Pixelator](./exercices/session_02-pixelator-laboratoire.md)

<a id="consolidation"></a>

## Rappel des grands concepts

1. **L’ordre des instructions — l’horloge.** Une instruction utilise les valeurs disponibles au moment où elle s’exécute. Le passage à minuit demande de corriger les heures après leur augmentation et avant l’affichage.

2. **Les conditions, les états et l’apparence — l’ampoule.** Au clic, `if` / `else` permet de choisir une seule des deux actions selon l’état de l’ampoule : allumer ou éteindre. JavaScript modifie le texte, l’image et les classes des éléments de la page. Le CSS définit les couleurs du fond et du texte ; l’ajout ou le retrait d’une classe applique l’apparence correspondant à l’état choisi. Une couleur peut s’écrire en RGB ou en hexadécimal.

3. **Le partage d’un projet — GitHub et Moodle.** Un projet rassemble les fichiers HTML, CSS, JavaScript et les images nécessaires à son fonctionnement. Le dépôt GitHub permet de les retrouver et de les télécharger ; son adresse est transmise sur Moodle. On vérifie la copie téléchargée pour s’assurer que le projet est complet.

4. **La séquence et les fonctions — peindre un motif.** Une suite d’instructions peint les cases choisies. `document.querySelector(...)` sélectionne un élément et `.style.backgroundColor` modifie sa couleur de fond. La fonction `peindre(id)` regroupe les invariants, dont la couleur choisie. Son unique paramètre reçoit l’identifiant de la case à peindre.

5. **Le temps et l’intention dans une séquence — animer un motif.** `await attendre(...)` rend les étapes observables ; passer de 1 000 à 500 ms accélère leur succession. Les mêmes lignes de peinture, réorganisées, construisent le même contour selon un autre parcours visible. L’intention guide l’ordre des instructions ; les attentes règlent la cadence. La fonction `effacer(id)` retire la peinture d’une case. Pour faire circuler une seule case colorée, on attend, on efface la case précédente, puis on peint la suivante.

6. **Les événements et l’état de chaque élément — peindre au clic.** Le navigateur appelle `peindre` au clic et lui fournit un événement. Le paramètre est nommé `event` pour rendre cette valeur attendue compréhensible : son nom ne détermine pas ce que le navigateur transmet. `console.log(event.target)` permet d’abord d’observer l’élément cliqué. La peinture agit ensuite directement sur cette case, sans rechercher son identifiant. La couleur reste fixée dans la fonction. Une condition examine la peinture de la case concernée pour la peindre ou l’effacer ; chaque case conserve son état indépendamment des autres.
