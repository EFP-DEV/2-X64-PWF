# Séance 2 — L’horloge, l’ampoule et les pixels

**Durée : 3 h 30, pause comprise.** On passe d’un programme qui suit une séquence à une interface qui réagit aux clics. Le parcours commun se termine par une grille où chaque case peut être peinte et effacée indépendamment.

## Déroulement

| Étape | Durée |
|---|---:|
| Reprise : retrouver une affectation, une condition et un résultat dans l’horloge | 5 min |
| Terminer l’horloge | 15 min |
| Résoudre l’ampoule | 30 min |
| Déposer l’ampoule sur GitHub et remettre le lien sur Moodle | 25 min |
| Pause | 10 min |
| Pixelator — peindre un motif | 20 min |
| Pixelator — animer un motif | 30 min |
| Pixelator — peindre et effacer au clic | 40 min |
| Consolidation et comparaison des résultats | 20 min |
| Bilan et prévisions sans exécution | 15 min |
| **Total** | **210 min** |

Les grilles de huit et seize pixels servent de prolongements une fois le parcours commun terminé et vérifié.

## 1. Terminer l’horloge

L’horloge de la séance précédente sait ajouter une minute, mais le passage à minuit reste à corriger. On reprend ce cas pour comprendre où placer la correction : le résultat dépend autant de l’ordre des instructions que de leur contenu.

[Consignes — terminer l’horloge](./exercices/session_02-clock-final.md)

## 2. Résoudre l’ampoule

Une ampoule dans une page web peut être allumée ou éteinte. On corrige le programme pour passer d’un état à l’autre à chaque clic, puis faire changer le fond. Les conditions permettent ainsi de coordonner plusieurs changements visibles dans une même interaction.

[Consignes et fichiers de l’exercice](./exercices/session_02-ampoule.md)

## 3. Déposer l’ampoule sur GitHub et remettre le lien sur Moodle

L’ampoule fonctionne sur l’ordinateur où elle a été réalisée. On rassemble ses fichiers dans un dépôt sur GitHub, puis on transmet son adresse sur Moodle. La vérification de la copie téléchargée permet de s’assurer que le projet peut être récupéré et utilisé ailleurs.

[Consignes — GitHub et remise sur Moodle](./exercices/session_02-ampoule-github.md)

Après la remise, on fait une **pause de 10 minutes**.

## 4. Pixelator — Séquence : peindre un motif

Pixelator est une grille de quatre grandes cases qui représentent des pixels. On choisit une couleur et on écrit les instructions qui peignent un motif. Ce premier dessin permet de relier chaque instruction à son effet dans la page, avant de passer à l’animation.

[Consignes et fichiers — Pixelator : séquence](./exercices/session_02-pixelator-sequence.md)

## 5. Pixelator — Temps : animer un motif

Des changements de couleur successifs peuvent donner l’impression d’un mouvement. On fait circuler la couleur entre les cases en alternant peinture, attente et effacement, puis on explore une autre animation. L’ordre des instructions définit le parcours ; les attentes règlent sa cadence.

[Consignes et fichiers — Pixelator : temps](./exercices/session_02-pixelator-time.md)

## 6. Pixelator — Peindre et effacer au clic

La grille attend désormais une action. On utilise le mécanisme de clic rencontré dans l’ampoule pour peindre le pixel choisi, puis on ajoute une condition pour l’effacer au clic suivant. Plusieurs cases peuvent être peintes : chacune conserve son état indépendamment des autres.

On commence avec une seule case, puis on associe les quatre cases au même comportement fourni. Les essais portent sur plusieurs clics et plusieurs cases, pour vérifier que seule la cible du clic change.

[Consignes et fichier — Pixelator : peindre au clic](./exercices/session_02-pixelator-clic.md)

<a id="consolidation"></a>

## 7. Consolider et expliquer · 20 minutes

On reprend les essais de la fiche au clic. En binôme, on compare la liste des cases attendues à la grille obtenue après chaque action. Au premier écart, on décrit le résultat attendu, le résultat observé et l’instruction à examiner avant de modifier le programme. Si le parcours a pris du retard, ce créneau permet aussi de terminer les étapes communes.

Quand les essais réussissent, on examine cette modification proposée : remplacer le `if` / `else` par deux `if`, l’un qui peint une case sans peinture, l’autre qui efface une case peinte. On prévoit le résultat d’un clic sur une case blanche en suivant sa couleur après chaque instruction. On essaie la modification, puis on rétablit la version qui satisfait les vérifications.

Le second `if` lit l’état laissé par le premier bloc. Cette expérience reprend le problème de l’horloge : le moment où une condition est évaluée change le résultat du programme.

## 8. Bilan — prévoir avant d’exécuter · 15 minutes

On prépare individuellement une réponse courte pour chaque situation, puis on compare les raisonnements à l’oral et on vérifie dans les programmes :

- Dans l’horloge, on corrige les heures après `console.log(...)` : on prévoit la sortie pour un départ à `23:59` et la valeur finale de `hours`.
- Dans la rotation, on retire seulement le premier `await` : on décrit le premier arrêt visible et le parcours qui reste.
- Dans la grille au clic, `pixel1` et `pixel4` sont peints. On clique sur `pixel1`, puis sur `pixel2` : on donne les cases peintes après chaque clic et la cible examinée par la condition.
- On recharge chacune des deux pages Pixelator : on explique pourquoi l’une relance une animation et l’autre reste blanche en attendant un clic.

Les explications relient **la valeur lue, l’instruction exécutée et le changement observé**. La suite du cours reprendra les répétitions présentes dans les animations et dans les associations de clic pour introduire les boucles.

## Prolongements facultatifs — Agrandir le parcours

Les grilles de huit et seize pixels permettent d’allonger le parcours de l’animation. On adapte la suite d’instructions en conservant le même principe : attendre, effacer, peindre. Le programme s’allonge et les répétitions deviennent plus visibles, ce qui prépare l’étude des boucles.

- [Pixelator — huit pixels](./exercices/session_02-pixelator-time.md#4-prolongement-facultatif--huit-pixels--25-minutes)
- [Pixelator — seize pixels](./exercices/session_02-pixelator-time.md#5-prolongement-facultatif--seize-pixels--20-minutes)
