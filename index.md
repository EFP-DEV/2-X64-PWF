# PWF — Programmation web : front end

**Formation :** UX/UI Designer — Chef d’entreprise (X64)  
**Année :** 2e année  
**Année académique :** 2026–2027

## Le cours

En première année, vous avez appris à réaliser et intégrer des interfaces web.

Cette année, nous allons apprendre à **programmer leur comportement**.

Le cours part des mécanismes fondamentaux de la programmation et les applique progressivement au navigateur et aux interfaces web.

La progression générale est :

> **concept → algorithme → programme → application → interface**

Nous commencerons volontairement sans framework : l’objectif est d’abord de comprendre les mécanismes sur lesquels les outils plus complexes sont construits.

## Objectifs du référentiel

Dans le référentiel officiel X64, PWF participe à la compétence :

> **Créer des interfaces web ergonomiques.**

À la fin de la deuxième année, vous devez notamment pouvoir :

- transposer vos connaissances des concepts et des algorithmes dans un langage de programmation ;
- comprendre les concepts de base de l’ergonomie web ;
- mettre en œuvre des concepts de programmation pouvant avoir un impact sur l’ergonomie et l’interface d’un site web ;
- comprendre les différences entre les librairies et frameworks JavaScript populaires ;
- comprendre le fonctionnement de base d’un système backend ;
- comprendre le fonctionnement de base des bases de données.

Les deux derniers objectifs seront principalement prolongés dans le cours **PWB — Programmation web : back end**.

PWF participe également à l’apprentissage des outils et environnements de travail du développement web, notamment l’utilisation d’un environnement local.

## Organisation

Le module PWF comporte **11 séances** :

- **10 séances de cours**
- **1 séance d’examen**

| Séance | Date |
| ---: | --- |
| 1 | 18/09/2026 |
| 2 | 25/09/2026 |
| 3 | 02/10/2026 |
| 4 | 09/10/2026 |
| 5 | 16/10/2026 |
| 6 | 23/10/2026 |
| 7 | 13/11/2026 |
| 8 | 20/11/2026 |
| 9 | 27/11/2026 |
| 10 | 04/12/2026 |
| 11 | 11/12/2026 — **examen** |

**2-CE-X64-B :** 09:30 – 13:00  
**2-CE-X64-A :** 13:30 – 17:00

Les deux groupes suivent la même progression.

---

# Sommaire du cours

## [Séance 1 — Session +1](./session_01.md)

1. [Exploration — la page, l’inspecteur et la console](./exercices/session_01-exploration.md)

2. [Couleurs — une valeur, plusieurs écritures](./exercices/session_01-couleurs.md)

3. [Numération — des couleurs à l’horloge](./exercices/session_01-numeration.md) — [binaire facultatif](./exercices/session_01-numeration.md#binaire)

4. [Horloge — ajouter une minute](./exercices/session_01-horloge.md)

## [Séance 2 — L’horloge, l’ampoule et les pixels](./session_02.md)

1. [Terminer l’horloge](./exercices/session_02-clock-final.md)

2. [Résoudre l’ampoule](./exercices/session_02-ampoule.md)

3. [Déposer l’ampoule sur GitHub et remettre le lien sur Moodle](./exercices/session_02-ampoule-github.md)

4. [Pixelator — Séquence : peindre un motif](./exercices/session_02-pixelator-sequence.md) — passer de quatre à neuf pixels et isoler les invariants, dont la couleur, dans `peindre(id)`.

5. [Pixelator — Temps : animer un motif](./exercices/session_02-pixelator-time.md) — observer le contour à 1 000 puis 500 ms, réorganiser les mêmes instructions pour suivre le bord, puis construire `effacer(id)` et une rotation.

6. [Pixelator — Peindre au clic : peindre et effacer chaque case](./exercices/session_02-pixelator-clic.md) — comprendre le passage de `peindre(id)` à `peindre(event)` et observer `event.target` dans la console avant de peindre la case cliquée.

7. [Laboratoire d’expérimentation — animations ou peinture au clic](./session_02.md#laboratoire) — [pistes et aides](./exercices/session_02-pixelator-laboratoire.md) pour explorer les parcours, la grille de seize pixels ou la peinture au clic.

[Rappel des grands concepts](./session_02.md#consolidation).

## [Séance 3 — Don't Panic. Git, GitHub et les boucles](./session_03.md)

1. [Ouvrir le terminal et créer une version](./session_03.md#1-ouvrir-le-terminal-et-créer-une-version) — créer les fichiers dans VS Code, puis enregistrer une version avec les commandes Git de son terminal intégré.

2. [Explorer l’historique et envoyer vers GitHub](./session_03.md#2-explorer-lhistorique-et-envoyer-vers-github) — lire les différences et une ancienne version, créer le dépôt sur GitHub, puis envoyer les commits depuis VS Code avec `git push`.

3. [Retrouver les difficultés de la séance 2](./session_03.md#3-retrouver-les-difficultés-de-la-séance-2) — relier les difficultés de fichiers à l’intérêt de conserver ensemble le HTML, le CSS et le JavaScript d’une version.

4. [Créer un fork de Pixelator et le cloner](./session_03.md#4-créer-un-fork-de-pixelator-et-le-cloner) — créer la copie personnelle sur GitHub, la cloner depuis le terminal de VS Code et vérifier sa destination avec `git remote -v`.

5. [Changer de version et actualiser la page](./session_03.md#5-changer-de-version-et-actualiser-la-page) — retrouver trois versions fonctionnelles du projet dans le même dossier et observer leurs différences dans la même page.

6. [Retrouver la dernière version](./session_03.md#6-retrouver-la-dernière-version) — découvrir une erreur dans la dernière version et revenir sur `main` pour poursuivre le travail ; les versions précédentes restent conservées.

7. [Corriger, créer une version et la partager](./session_03.md#7-corriger-créer-une-version-et-la-partager) — corriger dans l’éditeur de VS Code, créer le commit dans son terminal, puis vérifier la correction sur GitHub après le push.

8. [Répéter une action avec une boucle](./session_03.md#8-répéter-une-action-avec-une-boucle) — remplacer les quatre associations de clic par une boucle `for`, suivre le compteur et observer l’effet de la condition.

9. [Construire la grille avec une boucle](./session_03.md#9-construire-la-grille-avec-une-boucle) — créer les cases et leur associer le clic, puis passer de quatre à neuf et seize pixels en changeant une valeur.

---

## Informations pratiques

Les documents de séance présentent le fil du cours. Les fiches d’exercices rassemblent les manipulations, les explications et les cas de vérification.

### Outils et accès

- Un navigateur web avec ses outils de développement : inspecteur et console JavaScript.
- Un éditeur de code pour modifier les fichiers HTML, CSS et JavaScript.
- Un dossier local pour conserver les fichiers de chaque exercice.

Avant la séance 2, on prépare un compte GitHub et on vérifie l’accès au cours sur Moodle. Une connexion à Internet permet de récupérer les supports, de déposer l’ampoule sur GitHub et de remettre son adresse sur Moodle.

### Fichiers et essais

Chaque fiche indique les fichiers à récupérer, ceux à créer et leur organisation dans le dossier de l’exercice. On conserve les noms et les emplacements indiqués pour que le HTML retrouve les fichiers JavaScript, CSS et les images.

On ouvre le document HTML dans le navigateur. Après une modification dans l’éditeur, on enregistre le fichier, puis on recharge la page. L’inspecteur et la console permettent d’observer le résultat et les éventuelles erreurs.

Les modifications réalisées uniquement dans l’inspecteur ou la console ne sont pas enregistrées dans les fichiers.

### Travail à conserver et remise

- **Séance 1 :** on conserve les fichiers de l’horloge et les essais du [défi de minuit](./exercices/session_01-horloge.md#defi-minuit) pour la reprise. Aucun dépôt n’est demandé pour cette séance.

- **Séance 2 :** l’ampoule terminée est déposée dans un dépôt GitHub **public**. On vérifie que la copie téléchargée fonctionne, puis on remet **l’adresse du dépôt** dans l’activité de la séance 2 sur Moodle, **avant la pause**.

La [fiche GitHub et Moodle](./exercices/session_02-ampoule-github.md) détaille les fichiers à déposer, les vérifications et les étapes de remise.
