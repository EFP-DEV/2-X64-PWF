> Contenu Pixelator déprécié, extrait de `session_02.md`.

# Séance 2 — De l’horloge à Pixelator

## Pixelator — progression sur trois séances

Pixelator accompagne les séances 2, 3 et 4 : chaque séance prolonge le même projet et fait apparaître un besoin auquel répond la suivante.

| Séance | Notions du plan | Travail sur Pixelator | Résultat attendu |
|---|---|---|---|
| **2 — 25/09/2026** | Données, variables, expressions et instructions. Traduction d’un raisonnement simple en programme. | Après l’horloge et l’ampoule, rendre une grille de taille fixe, écrite en HTML, peignable avec une seule couleur. Sélectionner ses quatre pixels, conserver leurs références dans des variables et ajouter une classe CSS pour les peindre. La fonction et les quatre écouteurs sont fournis. | Une grille HTML fixe de 2 × 2 pixels, peignable en violet au clic. Les étudiants expliquent les instructions qui produisent ce changement. |
| **3 — 02/10/2026** | Structures de contrôle : conditions, répétitions et construction d’algorithmes. | Commencer par ajouter un sélecteur de couleur à la grille existante. Travailler ensuite les boucles : calculer `taille × taille`, créer les pixels et enregistrer leurs écouteurs, en réinvestissant les conditions. Terminer la séance par les premiers essais du curseur de taille. | La couleur choisie est utilisée pour peindre et la grille est générée par une boucle. Les étudiants expliquent le compteur, la condition de poursuite et les étapes répétées. Le redimensionnement est en cours d’exploration ; son achèvement est prévu en séance 4. |
| **4 — 09/10/2026** | Fonctions : nommer, organiser et réutiliser des comportements. Structuration du programme. | Reprendre les essais du curseur de taille et terminer Pixelator. Organiser la construction et la reconstruction de la grille dans une fonction paramétrée, appelée au chargement et au changement de taille. Reprendre explicitement `paintPixel(event)` et vérifier toutes les interactions. | Le projet est terminé : peindre avec la couleur choisie, redimensionner la grille et peindre à nouveau fonctionnent ensemble. Les étudiants distinguent définition, appel, paramètre et argument dans des fonctions réellement réutilisées. |

**D’une séance à l’autre :**

- **Séance 2 → 3 :** annoncer l’ajout du sélecteur de couleur en début de séance 3, puis reprendre le coût des quatre sélections et quatre enregistrements manuels pour aborder les boucles : que faudrait-il recopier pour huit, seize ou davantage de pixels ?
- **Séance 3 → 4 :** terminer la séance 3 sur les essais du curseur de taille et les difficultés rencontrées. En séance 4, les reprendre pour achever le redimensionnement ; le besoin de construire la grille au chargement et au changement de taille motive une fonction réutilisable. Les deux blocs du prototype servent de point de comparaison.

**Avant la séance 4, les fonctions et les écouteurs nécessaires sont fournis.** Les étudiants travaillent sur les instructions qu’ils contiennent ; la conception des fonctions n’est pas un objectif évalué à ce stade. La séance 4 reprend leur fonctionnement, leurs paramètres et leur rôle dans l’organisation du programme.

Le prototype actuel fixe la cible fonctionnelle : peindre les pixels, choisir une couleur et régler la taille de la grille. **Redimensionner la grille efface le dessin.** La remise GitHub reste prévue à la fin de la séance 2, avec la version à quatre pixels.

**Suite de la préparation :** le déroulement ci-dessous et la fiche Pixelator de la séance 2 utilisent des fonctions et des écouteurs fournis. Les supports détaillés des séances 3 et 4 restent à préparer selon cette progression.

## Organisation de la séance 2 — extraits

Trois exercices, dans cet ordre : **terminer l’horloge**, **résoudre l’ampoule**, puis **commencer Pixelator**.

Après Pixelator, réservez **20 minutes pour déposer le projet sur GitHub et remettre son lien sur la plateforme du cours**, avant le bilan final.

**Avant Pixelator :** montrez plusieurs clics successifs avec une image, un texte et un fond cohérents, puis le retour à l’état initial au rechargement. Expliquez ce que l’ajout et le retrait de `light-room` changent dans le HTML et dans l’apparence.

## 3. Commencer Pixelator

**Première étape du mini-projet :** peindre en violet les quatre pixels d’une grille fixe écrite en HTML. Comme dans l’ampoule, le code qui déclenche la réaction au clic est fourni. Le HTML et le CSS sont également fournis ; vous travaillez sur les variables qui désignent les pixels et sur l’instruction `classList.add("painted")`. L’écriture et l’explication des fonctions et des écouteurs seront abordées en séance 4.

[Consignes — démarrer Pixelator](./exercices/session_02-pixelator.md)

1. Installer la page et vérifier les quatre carrés roses.
2. Retrouver un pixel dans le DOM et le peindre avec `classList.add("painted")`.
3. Compléter les variables qui désignent les trois autres pixels.
4. Copier le code de clic fourni et ajouter, à l’endroit indiqué, l’instruction qui peint le pixel désigné par `clickedPixel`.
5. Vérifier le résultat et expliquer la chaîne : **clic → classe ajoutée au pixel cliqué → règle CSS → couleur**.

**Résultat attendu :** chaque pixel rose devient violet au clic. Un deuxième clic le laisse violet ; le rechargement rétablit les couleurs initiales.

## 4. Remettre Pixelator avec GitHub · 20 minutes

Enregistrez et vérifiez votre projet, puis déposez ses trois fichiers dans votre dépôt personnel public `pixelator-session-02`, depuis le navigateur. Téléchargez la version déposée pour vérifier son fonctionnement, puis remettez **le lien du dépôt sur la plateforme du cours avant la fin de la séance**.

[Consignes — déposer et remettre Pixelator](./exercices/session_02-pixelator.md#remise-github)

## Bilan après la remise

**Fin de séance :** imaginez huit, seize, puis beaucoup plus de carrés. Combien de variables de sélection faudrait-il écrire ? Observez aussi les quatre lignes de clic fournies : combien en faudrait-il pour huit ou seize pixels ? À partir de quand cette répétition devient-elle fastidieuse ? Il nous faut **un système dans le code** pour organiser ce travail répétitif. La prochaine leçon commencera par l’ajout d’un sélecteur de couleur, puis abordera les boucles pour répondre à ce besoin, avant les premiers essais du curseur de taille.
