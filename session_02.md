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

Pixelator commence avec quatre grandes cases qui représentent des pixels. On choisit une couleur et on écrit les instructions qui peignent un motif, puis on passe à neuf cases pour peindre le contour du carré. Les instructions répétées permettent d’introduire `peindre(id, couleur)` : on réécrit le contour avec des appels à cette fonction et on en conserve une copie avant de créer un deuxième motif.

[Consignes et fichiers — Pixelator : séquence](./exercices/session_02-pixelator-sequence.md)

## 5. Pixelator — Temps : animer un motif

On reprend le contour conservé sur neuf pixels et on ajoute des attentes entre ses appels à `peindre`, sans changer leur ordre. Le même dessin apparaît progressivement. On construit ensuite une rotation autour des huit cases du bord : une seule case reste colorée à la fois et le centre reste blanc. L’ordre des appels définit le parcours ; les attentes règlent sa cadence. Les autres animations sont facultatives.

[Consignes et fichiers — Pixelator : temps](./exercices/session_02-pixelator-time.md)

## 6. Pixelator — Peindre et effacer au clic

Une page distincte de quatre pixels attend désormais une action. On utilise le mécanisme de clic rencontré dans l’ampoule et la fonction `peindre` pour peindre le pixel choisi, puis on ajoute une condition pour l’effacer au clic suivant. Plusieurs cases peuvent être peintes : chacune conserve son état indépendamment des autres.

On commence avec une seule case, puis on associe les quatre cases au même comportement fourni. Les essais portent sur plusieurs clics et plusieurs cases, pour vérifier que seule la cible du clic change.

[Consignes et fichier — Pixelator : peindre au clic](./exercices/session_02-pixelator-clic.md)

<a id="consolidation"></a>

## 7. Rappel des grands concepts

1. **L’ordre des instructions — l’horloge.** Une instruction utilise les valeurs disponibles au moment où elle s’exécute. Le passage à minuit demande de corriger les heures après leur augmentation et avant l’affichage.

2. **Les conditions, les états et l’apparence — l’ampoule.** Au clic, `if` / `else` permet de choisir une seule des deux actions selon l’état de l’ampoule : allumer ou éteindre. JavaScript modifie le texte, l’image et les classes des éléments de la page. Le CSS définit les couleurs du fond et du texte ; l’ajout ou le retrait d’une classe applique l’apparence correspondant à l’état choisi. Une couleur peut s’écrire en RGB ou en hexadécimal.

3. **Le partage d’un projet — GitHub et Moodle.** Un projet rassemble les fichiers HTML, CSS, JavaScript et les images nécessaires à son fonctionnement. Le dépôt GitHub permet de les retrouver et de les télécharger ; son adresse est transmise sur Moodle. On vérifie la copie téléchargée pour s’assurer que le projet est complet.

4. **La séquence et les fonctions — peindre un motif.** Une suite d’instructions peint les cases choisies. `document.querySelector(...)` sélectionne un élément et `.style.backgroundColor` modifie sa couleur de fond. La fonction `peindre(id, couleur)` regroupe cette opération sous un nom réutilisable : ses paramètres permettent de changer la case et la couleur à chaque appel.

5. **Le temps dans une séquence — animer un motif.** `await attendre(...)` laisse passer un délai avant de poursuivre les instructions. L’ordre des appels détermine le parcours, tandis que les attentes règlent la cadence. Pour déplacer une couleur, on attend, on efface la case précédente, puis on peint la suivante.

6. **Les événements et l’état de chaque élément — peindre au clic.** Le clic déclenche une fonction et `event.target` désigne l’élément cliqué. Le même comportement peut ainsi servir à plusieurs cases. Une condition examine la peinture de la case concernée pour la peindre ou l’effacer ; chaque case conserve son état indépendamment des autres.

## Prolongements facultatifs — Varier l’animation et la grille

On peut explorer une autre animation sur neuf pixels, puis adapter le parcours à une grille rectangulaire de seize pixels. On conserve la fonction `peindre` et le même principe : attendre, effacer, peindre. Les appels répétés préparent l’étude des boucles, qui permettront de répéter des instructions.

- [Pixelator — variantes sur neuf pixels](./exercices/session_02-pixelator-time.md#variantes-animation)
- [Pixelator — seize pixels](./exercices/session_02-pixelator-time.md#seize-pixels)
