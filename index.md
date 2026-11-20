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
| 1 | 18/09/2026 | [Exploration, couleurs, numération et horloge](./session_01.md) |
| 2 | 25/09/2026 | [Horloge, ampoule, fonctions et animations Pixelator](./session_02.md) |
| 3 | 02/10/2026 | [Pixelator au clic et renforcement facultatif](./session_03.md) |
| 4 | 09/10/2026 | [Git, GitHub et pierre, papier, ciseaux](./session_04.md) |
| 5 | 16/10/2026 | [Git, GitHub et pierre, papier, ciseaux](./session_04.md#4-compléter-pierre-papier-ciseaux) |
| 6 | 23/10/2026 | [JavaScript boucles ↔ HTML / DOM : construire le document](./session_06.md) |
|  | 13/11/2026 | [REPORTEE]  |
| 7 | 20/11/2026 | [Chaînes de caractères et chiffrement d’un message](./session_07.md) |
| 8 | 27/11/2026 | Ergonomie, formulaires et validation |
| 9 | 04/12/2026 | Organisation frontend et réalisation intégrée |

| 11 | 11/12/2026 | **Examen** |

**2-CE-X64-B :** 09:30 – 13:00  
**2-CE-X64-A :** 13:30 – 17:00

---

Les deux groupes suivent la même progression, sauf pour le report :

| Groupe | Date de remplacement | Début |
|---|---|---|
| 10 | 2-CE-X64-B | Jeudi 26 novembre 2026 | 13 h 30 |
| 10 | 2-CE-X64-A | Jeudi 10 décembre 2026 | 9 h 30 |


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
