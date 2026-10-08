# PWF — Programmation web : front end

**Formation :** UX/UI Designer — Chef d’entreprise (X64)  
**Année :** 2e année  
**Année académique :** 2026–2027

## Le cours

En première année, le travail portait sur la réalisation et l’intégration d’interfaces web.

Cette année, on apprend à **programmer leur comportement**.

Le cours part des mécanismes fondamentaux de la programmation et les applique progressivement au navigateur et aux interfaces web.

La progression générale est :

> **concept → algorithme → programme → application → interface**

Les séances 1–3 introduisent les mécanismes par la découverte et l’expérimentation. La séance 4 établit la méthode de travail avec Git et GitHub. Ces quatre séances constituent le socle partagé avec LPB.

À partir de la séance 5, on prend progressivement en charge la construction et le comportement d’interfaces pour le travail UX/UI.

On commence sans framework : l’objectif est d’abord de comprendre les mécanismes sur lesquels les outils plus complexes sont construits.

## Objectifs du référentiel

Dans le référentiel officiel X64, PWF participe à la compétence :

> **Créer des interfaces web ergonomiques.**

Les attendus retenus pour PWF portent sur les capacités suivantes :

- transposer les connaissances des concepts et des algorithmes dans un langage de programmation ;
- comprendre les concepts de base de l’ergonomie web ;
- mettre en œuvre des concepts de programmation pouvant avoir un impact sur l’ergonomie et l’interface d’un site web ;
- comprendre les différences entre les bibliothèques et frameworks JavaScript, notamment jQuery, React, Vue et Angular ;
- utiliser un environnement de développement comprenant un serveur local.

Les objectifs relatifs au backend et aux bases de données sont principalement prolongés dans le cours **PWB — Programmation web : back end**.

Le référentiel fixe les compétences visées. L’ordre des séances et les projets sont les choix pédagogiques du cours.

## Organisation

Le module PWF comporte **11 séances** :

- **10 séances de cours**
- **1 séance d’examen**

| Séance | Date | Sujet |
| ---: | --- | --- |
| 1 | 18/09/2026 | Exploration, couleurs, numération et horloge |
| 2 | 25/09/2026 | Horloge, ampoule, fonctions et animations Pixelator |
| 3 | 02/10/2026 | Pixelator au clic et renforcement facultatif |
| 4 | 09/10/2026 | Git, GitHub et pierre, papier, ciseaux |
| 5 | 16/10/2026 | JavaScript ↔ HTML / DOM : construire le document |
| 6 | 23/10/2026 | Événements : construire un cycle d’interaction |
| 7 | 13/11/2026 | Données et état : piloter plusieurs représentations |
| 8 | 20/11/2026 | Ergonomie, formulaires et validation |
| 9 | 27/11/2026 | Organisation frontend et réalisation intégrée |
| 10 | 04/12/2026 | Bibliothèques et frameworks JavaScript |
| 11 | 11/12/2026 | **Examen** |

**2-CE-X64-B :** 09:30 – 13:00  
**2-CE-X64-A :** 13:30 – 17:00

Les deux groupes suivent la même progression.

Le [plan de cours](./plan-cours.md) précise la progression retenue pour la préparation des séances.

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

6. [Laboratoire d’expérimentation — motifs et animations](./session_02.md#laboratoire) — [idées d’expérimentation](./exercices/session_02-pixelator-laboratoire.md) pour jouer librement avec les motifs et les animations.

[Rappel des grands concepts](./session_02.md#consolidation).

## [Séance 3 — Pixelator et exercices de renforcement](./session_03.md)

1. [Terminer Pixelator](./session_03.md#1-terminer-pixelator) — [peindre et effacer au clic](./exercices/session_03-pixelator-clic.md) : comprendre le passage de `peindre(id)` à `peindre(event)` et observer `event.target` dans la console avant de peindre la case cliquée.

[Laboratoire d’expérimentation facultatif — peinture au clic](./session_03.md#laboratoire) — [pistes et aides](./exercices/session_03-pixelator-laboratoire.md) pour changer la couleur, les dimensions, la disposition ou la règle de peinture des cases.

[Renforcement facultatif](./session_03.md#renforcement) — 24 exercices non notés de lecture, de débogage et de création, à choisir selon le point à travailler, sans quantité imposée.

[Rappel — interactions au clic](./session_03.md#consolidation).

## [Séance 4 — Git, GitHub et pierre, papier, ciseaux](./session_04.md)

1. [Découvrir les versions avec Git](./session_04.md#1-découvrir-les-versions-avec-git) — créer un dépôt d’essai, enregistrer deux commits, examiner leurs différences, puis envoyer les versions sur GitHub. [Consignes détaillées](./exercices/session_04-git-pixelator.md#1-créer-un-dépôt-github-et-le-cloner).

2. [Reprendre Pixelator avec un dépôt personnel](./session_04.md#2-reprendre-pixelator-avec-un-dépôt-personnel) — créer un fork, cloner le projet, corriger trois problèmes indépendants et envoyer les commits. [Consignes détaillées](./exercices/session_04-git-pixelator.md#4-créer-un-fork-de-pixelator-et-le-cloner).

3. [Compléter pierre, papier, ciseaux](./session_04.md#3-compléter-pierre-papier-ciseaux) — réparer le programme, couvrir les neuf combinaisons et actualiser les images. [Fichiers et vérifications dans le dépôt autonome](https://github.com/EFP-DEV/labo-rock_paper_scissors/blob/main/TODO.md).

---

## Informations pratiques

Les documents de séance présentent le fil du cours. Les fiches d’exercices rassemblent les manipulations, les explications et les cas de vérification.

### Outils et accès

- Un navigateur web avec ses outils de développement : inspecteur et console JavaScript.
- Un éditeur de code pour modifier les fichiers HTML, CSS et JavaScript.
- Un dossier local pour conserver les fichiers de chaque exercice.
- Un serveur local pour le travail prévu à partir de la séance 9.

Avant la séance 2, on prépare un compte GitHub et on vérifie l’accès au cours sur Moodle. Une connexion à Internet permet de récupérer les supports, de déposer l’ampoule sur GitHub et de remettre son adresse sur Moodle.

### Fichiers et essais

Chaque fiche indique les fichiers à récupérer, ceux à créer et leur organisation dans le dossier de l’exercice. On conserve les noms et les emplacements indiqués pour que le HTML retrouve les fichiers JavaScript, CSS et les images.

On ouvre le document HTML dans le navigateur. Après une modification dans l’éditeur, on enregistre le fichier, puis on recharge la page. L’inspecteur et la console permettent d’observer le résultat et les éventuelles erreurs.

À partir de la séance 9, on démarre le serveur local et on ouvre la page à son adresse locale. Ce fonctionnement est repris pour les exemples de la séance 10.

Les modifications réalisées uniquement dans l’inspecteur ou la console ne sont pas enregistrées dans les fichiers.

### Travail à conserver et remise

- **Séance 1 :** on conserve les fichiers de l’horloge et les essais du [défi de minuit](./exercices/session_01-horloge.md#defi-minuit) pour la reprise. Aucun dépôt n’est demandé pour cette séance.

- **Séance 2 :** l’ampoule terminée est déposée dans un dépôt GitHub **public**. On vérifie que la copie téléchargée fonctionne, puis on remet **l’adresse du dépôt** dans l’activité de la séance 2 sur Moodle, **avant la pause**.

La [fiche GitHub et Moodle](./exercices/session_02-ampoule-github.md) détaille les fichiers à déposer, les vérifications et les étapes de remise.
