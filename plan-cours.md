# Plan de cours PWF pour 2026 et 2027

**Formation :** UX/UI Designer — Chef d’entreprise (X64)  
**Année :** 2e année  
**Année académique :** 2026–2027  
**Usage :** préparation pédagogique des séances

## Cadre du cours

Le module comporte **10 séances de cours et une séance d’examen**.

- **Séances 1–3 : introduction et découverte.** On rencontre les mécanismes de programmation à travers des situations observables.
- **Séance 4 : Git, GitHub et méthode de travail.** On conserve, retrouve, corrige et partage un projet.
- **Séances 5–10 : développement frontend orienté UX/UI.** On prend progressivement en charge la construction, le comportement et la cohérence d’une interface.

Les quatre premières séances constituent le socle partagé avec LPB. **La séance 5 marque la divergence de PWF vers la programmation des interfaces.**

Le référentiel fixe les compétences visées, notamment « Créer des interfaces web ergonomiques ». L’ordre des activités et les projets constituent la progression pédagogique du cours.

## Calendrier des séances

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
| 11 | 11/12/2026 | Examen |

## Progression des séances 5 à 10

### Séance 5 JavaScript et construction du DOM

On reprend le jeu pierre, papier, ciseaux terminé. Les choix, le verdict et les images permettent de suivre le passage du calcul à sa représentation. Si un travail de la séance 4 reste incomplet, on le termine avant de modifier cette représentation.

**Nouveau mécanisme : créer et insérer des éléments dans le document.**

On construit d’abord un paragraphe expliquant la manche, puis les deux figures représentant les choix, dans un conteneur initialement vide. `createElement`, les propriétés des éléments et `appendChild` permettent de construire cette partie de l’interface. La construction répétée des figures motive une fonction réutilisable.

On distingue l’existence d’un élément créé de son insertion dans la page, puis le HTML enregistré du document modifié pendant l’exécution. Le jeu conserve le déroulement d’une seule manche avec les événements déjà fournis.

**Résultat attendu :** verdict, explication, images et textes alternatifs décrivent la même manche. Le rechargement retrouve le document initial.

### Séance 6 Événements et cycle d’interaction

Le jeu fonctionne pour une manche. On ajoute **Rejouer** pour retrouver les choix sans recharger la page.

**Nouvelle responsabilité : organiser un cycle complet d’interaction.**

On approfondit les associations d’événements avec `addEventListener`. Une modification du contenu d’un bouton permet de comparer `target` et `currentTarget`. Une fois le comportement établi, la répétition des associations motive la sélection d’une collection d’éléments et l’introduction d’une méthode de parcours.

La visibilité, le contenu généré et le focus doivent retrouver un état adapté à l’action suivante. On distingue la répétition d’une action déclenchée par le navigateur du parcours d’une collection par le programme.

**Résultat attendu :** plusieurs manches peuvent se succéder, à la souris et au clavier, sans contenu résiduel ni réaction incorrecte.

### Séance 7 Données et état

Les manches successives donnent un besoin concret : conserver des scores.

**Nouvelle responsabilité : maintenir un état entre plusieurs actions et en dériver l’affichage.**

On conserve les scores numériques en JavaScript. Les valeurs évoluent après chaque manche ; le texte affiché représente ces valeurs. Les actualisations répétées motivent une fonction d’affichage réutilisable.

On distingue **rejouer une manche**, qui conserve les scores, de **réinitialiser le jeu**, qui les remet à zéro. Les situations de l’ampoule et de Pixelator servent de comparaison avec les états déjà rencontrés. Les scores appartiennent à la page en cours d’exécution ; un rechargement retrouve leurs valeurs initiales.

**Résultat attendu :** les scores restent cohérents avec les manches jouées ; une modification d’affichage ne change pas les données.

### Séance 8 Ergonomie formulaires et validation

On transpose les mécanismes dans un petit formulaire réaliste, avec une structure HTML et une présentation fournies.

**Nouvelle responsabilité : permettre de saisir, comprendre et corriger une information.**

On lit les valeurs des champs, applique d’abord les contraintes du navigateur, puis introduit une règle nécessitant JavaScript. Les messages identifient les difficultés, les saisies restent disponibles pour correction et le parcours au clavier demeure utilisable.

Les choix sont reliés aux notions de feedback, de cohérence, de prévention des erreurs et de récupération après une erreur. Ces critères prolongent les observations sur la cohérence des résultats et le cycle d’interaction des séances précédentes.

**Résultat attendu :** les cas vides, invalides, valides et corrigés produisent un comportement explicable et adapté.

### Séance 9 Organisation frontend et réalisation intégrée

On reprend l’interface de la séance 8 et on examine les difficultés de modification de son programme.

**Nouvelle responsabilité : organiser le code pour faire évoluer l’interface de manière fiable.**

On distingue lecture des entrées, application des règles, changement d’état et mise à jour du document. Les comparaisons conservent le comportement visible pendant la réorganisation. Des fichiers supplémentaires ou des modules sont introduits lorsqu’une responsabilité concrète le justifie.

On utilise explicitement un serveur local : démarrage, ouverture de l’adresse locale et observation des fichiers chargés. Une extension réalisée avec davantage d’autonomie clôture le projet. Sa vérification reprend aussi les comportements déjà présents.

**Résultat attendu :** une interface complète, organisée, utilisable dans l’environnement local et vérifiée après modification.

### Séance 10 Bibliothèques et frameworks JavaScript

On reprend un composant déjà compris pour comparer des implémentations préparées.

**Nouvelle compréhension : reconnaître les responsabilités prises en charge par un outil.**

On retrouve les événements, l’état et les mises à jour de l’interface dans chaque approche. La comparaison situe **jQuery, React, Vue et Angular**. Une manipulation guidée d’un exemple fourni permet d’observer l’effet d’une modification. L’environnement préparé réutilise le serveur local rencontré en séance 9.

**Résultat attendu :** expliquer ce que chaque approche change par rapport au JavaScript natif et relier son fonctionnement aux mécanismes déjà rencontrés.

## Vérification et objectifs du référentiel

Chaque activité associe un résultat observable à une explication du mécanisme. Les fiches prévoient des vérifications manuelles : cas ordinaires, limites, actions répétées, rechargement et cohérence entre les différents affichages. L’exécution de ces vérifications accompagne le travail en séance.

Les notions d’ergonomie reviennent dès la séance 5 : le résultat doit être compréhensible, les représentations cohérentes et les actions suivantes accessibles. La séance 8 rend ces critères explicites et les applique à la saisie et à la correction d’informations.

| Attendu retenu pour PWF | Séances et mise en œuvre |
| --- | --- |
| Transposer les concepts et les algorithmes dans un langage de programmation | Séances 1–4, puis application avec davantage d’autonomie dans les interfaces des séances 5–9. |
| Comprendre les concepts de base de l’ergonomie web | Critères explicités au fil des interactions, approfondis en séance 8 et consolidés en séance 9. |
| Mettre en œuvre une programmation ayant un impact sur UX/UI | Objectif central des séances 5–9 : construction du document, interactions, état et feedback. |
| Comprendre les bibliothèques et frameworks JavaScript | Séance 10 : comparaison de jQuery, React, Vue et Angular avec le JavaScript natif déjà pratiqué. |
| Utiliser un environnement de développement comprenant un serveur local | Outils des séances 1–4, puis serveur local en séance 9, réutilisé en séance 10. |

L’examen de la séance 11 porte sur les compétences effectivement travaillées. Son sujet et ses modalités seront définis lors de sa préparation.

Les exercices facultatifs de séance 3 restent des ressources de soutien. Les prérequis nécessaires aux activités suivantes sont introduits dans le parcours commun. Les tableaux et les objets sont expliqués lorsqu’une activité nécessite leur utilisation.
