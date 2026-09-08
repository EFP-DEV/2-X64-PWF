# Programmation Web : Frontend (PWF)

## Un même raisonnement, plusieurs applications

Ce module de **44 heures en 2e année** apprend à programmer des interfaces avec HTML, CSS et JavaScript natif.

Nous allons apprendre à **représenter des données, afficher une collection, identifier un élément, modifier son état et charger ou sauvegarder des changements**.

Un panier de courses, un portfolio, une galerie et un écran de commandes pour un chef peuvent partager ces opérations. Les informations affichées, les règles et la présentation changent selon le besoin. Les exercices servent à reconnaître et à réutiliser les mécanismes communs.

Pour situer ces compétences dans le métier : [fiche Frontend](./asset/frontend_dev.md).

## Frontend et backend

Le **frontend** est la partie d'une application que l'on voit et avec laquelle on interagit : contenus, disposition, formulaires, boutons et réactions aux actions.

Le **backend** traite les demandes côté serveur et gère notamment les données enregistrées. Dans une application de restaurant, le frontend peut afficher les commandes au chef ; le backend peut enregistrer les commandes et les transmettre.

Dans ce module, nous apprenons à construire l'interface et son comportement. En Programmation Web : Backend (PWB), nous pourrons créer l'API qui lui fournira nos propres données.

## Commencer le module

La **séance 1** suit une seule idée, `+1`, depuis les systèmes de numération jusqu'aux compteurs visibles dans les interfaces.

Les étudiants distinguent une valeur de sa représentation, décodent le binaire et les couleurs CSS `#RRGGBBAA`, manipulent leurs premières variables dans la console, puis programment le report d'une horloge avec deux variables et des conditions.

Les résultats des séances suivantes sont montrés en fin de cours comme une bande-annonce du module. La construction de Pixelator, ainsi que CSS Grid, le DOM et les événements, commence lors de la séance 2.

[Support de la séance 1](./session_01.md) · [Atelier guidé](./exercices/session_01.md)

[Support de la séance 2](./session_02.md) · [Atelier Pixelator](./exercices/session_02.md) · [Résultat Pixelator](./solutions/pixelator/session_02/index.html)

L’[ampoule interactive](./exercices/ampoule.md) reste disponible comme atelier optionnel, avec son [corrigé](./solutions/session_1/index.html).

## Progression prévue, séance par séance

La séance 1 dispose de son support, de son atelier et de son corrigé. **Les séances 2 à 10 ci-dessous décrivent la nouvelle progression ; leurs supports détaillés restent à aligner.** Les ressources de l’ancienne progression sont regroupées plus bas.

| Séance | Concepts à comprendre | Application et résultat visé |
|---|---|---|
| **1** | Représentation, numération, variables, opérations et limites | Décoder du binaire et des couleurs CSS, puis programmer `+1 minute` avec une horloge |
| **2** | Séparation des responsabilités, CSS Grid, DOM et événements | Construire quatre pixels et rendre chacun violet au clic |
| **3** | Répétition et construction | Générer une grille de 8×8 cases avec une boucle, puis faire varier sa densité |
| **4** | Fonctions et réutilisation | Organiser la peinture, le choix d’une couleur, la création de la grille et sa remise à zéro |
| **5** | Interaction dans le temps | Peindre en glissant ; mémoriser si le geste de dessin est en cours |
| **6** | Collections et persistance | Représenter le dessin par des données, puis le sauvegarder et le restaurer avec JSON et `localStorage` |
| **7** | Enregistrements et CRUD | Créer, afficher, modifier et supprimer des éléments dans une application légère choisie en classe |
| **8** | Règles et comportements réutilisables | Valider une saisie, changer un état, calculer des compteurs et conserver les modifications |
| **9** | Réutiliser une interface | Reprendre la grille de Pixelator, adapter son CSS et son contenu en galerie, puis la remplir automatiquement depuis l’API des chats |
| **10** | Source des données et présentation | Adapter cette démarche à un portfolio, des tickets de cuisine ou un autre sujet ; consolider le frontend destiné à PWB |
| **11** | Évaluation | Séance réservée à l’examen ; adaptation du sujet différée |

### Faire grandir Pixelator

Après sa présentation en fin de séance 1, Pixelator devient le fil pratique à partir de la séance 2. Son premier résultat reste petit : quatre cases et quatre écouteurs de clic écrits séparément. Leur répétition donnera une raison de travailler les boucles et les fonctions.

Le dessin par glissement ajoutera un état qui dure entre plusieurs événements : commencer à peindre, entrer dans une autre case, arrêter de peindre. La même opération de peinture servira au clic et au glissement. La sauvegarde donnera ensuite une raison de représenter le dessin comme une collection de données.

### Choisir le sujet en classe, garder les mêmes objectifs

Le CRUD signifie **Create, Read, Update, Delete** : créer, lire ou afficher, modifier et supprimer.

Le sujet et ses règles précises seront choisis en classe. Les consignes porteront sur ces opérations, sans imposer une liste de tâches ni un modèle de données unique.

| Opération | Courses | Portfolio | Tickets de cuisine |
|---|---|---|---|
| Créer | Ajouter un produit | Ajouter un projet | Ajouter une commande |
| Afficher | Lire la liste | Présenter les projets | Voir les tickets |
| Modifier | Changer une quantité ou marquer un achat | Modifier une légende ou un état de publication | Passer une commande à l’état « prête » |
| Supprimer | Retirer un produit | Retirer un projet | Retirer un ticket d’essai |

À chaque changement de sujet, nous identifierons ce que nous pouvons réutiliser et ce qui dépend de la nouvelle règle. Modifier une quantité, une légende ou un état revient dans chaque cas à **retrouver un enregistrement et modifier une de ses propriétés**.

### Passer de la grille à une interface alimentée par des données

La galerie de chats sera un premier exemple commun de données distantes : reprendre la grille, changer la présentation des éléments et charger leur contenu depuis une API.

Nous apprendrons aussi à représenter le **chargement**, un **résultat vide** et un **échec de chargement**. L’interface doit permettre de comprendre ce qui se passe pendant l’attente et quand les données ne sont pas disponibles.

## Compétences visées

- **Raisonner :** nommer des valeurs, appliquer des opérateurs, exprimer des conditions et maîtriser une répétition.
- **Organiser :** écrire des fonctions, représenter des éléments et leurs propriétés, parcourir des collections.
- **Construire une interface :** sélectionner et créer des éléments du DOM, gérer les événements, mettre à jour l’affichage.
- **Gérer des données :** réaliser un CRUD local, utiliser JSON et `localStorage`, consommer une API.
- **Vérifier :** prédire un résultat, tester les limites, lire la console et diagnostiquer un comportement inattendu.
- **Adapter :** réutiliser une grille et ses opérations pour présenter des contenus différents.

Le navigateur de bureau est le point de départ. Les premiers exercices fonctionnent avec des fichiers locaux ; la galerie alimentée par une API demandera une connexion réseau.

## De PWF à PWB : garder l’interface, créer sa propre API

Au fil des exercices, des fonctions JavaScript distingueront progressivement quatre responsabilités :

1. **Charger les données** depuis leur source.
2. **Représenter les éléments** utiles à l’application.
3. **Construire ou mettre à jour leur affichage**.
4. **Traiter les actions** de l’utilisateur.

La transformation de la réponse d’une API restera séparée de l’affichage. Passer de l’API des chats à une autre source peut demander de changer l’adresse **et** la façon dont on lit ses champs. La grille et les mécanismes d’interaction peuvent être conservés, en adaptant le contenu et les règles de chaque élément.

**Pendant PWF**, nous réalisons un CRUD local, conservons des données dans le navigateur et consommons des données distantes.

**Après PWF, en Programmation Web : Backend (PWB)**, chaque étudiant pourra construire l’API qui fournit ses propres données au frontend déjà préparé : projets de portfolio, images, commandes ou autre collection. L’API et l’enregistrement des modifications côté serveur seront travaillés dans ce module.

Cette continuité permet de faire évoluer le même travail : **données locales → API publique → API personnelle**.

## Évaluation

Le cadre conserve onze séances, dont une consacrée à l’évaluation. L’adaptation du sujet d’examen à cette progression sera décidée ultérieurement.

L’[énoncé existant](./session_99-examen.md), consacré à une gestion de tâches, est conservé en l’état comme document de l’ancienne progression. Il ne fixe pas le sujet des ateliers CRUD à venir.

## Ressources de l’ancienne progression — à aligner

Ces documents restent accessibles pour des rappels ou des exercices complémentaires. Leur ancienne numérotation et leurs consignes ne décrivent pas encore la nouvelle progression ci-dessus.

| Notions ou ancien projet | Supports et exercices disponibles |
|---|---|
| Variables et horloge | [Ancien support 2](./session_02.md), [travail en console](./exercices/session_02/1_STI.md), [traces de variables](./exercices/session_02/1_STI-exo.md), [conditions de l’horloge](./exercices/session_02/2_T.md) |
| Conditions et saisies | [Ancien support 3](./session_03.md), [console et saisies](./exercices/session_03/0_console.md), [tickets](./exercices/session_03/1_tickets.md) |
| Boucles | [Ancien support 5](./session_05.md), [exercices](./exercices/session_05.md), [boucle de l’horloge](./exercices/session_02/3_I.md) |
| Fonctions et compteurs | [Ancien Micro-Tracker](./session_07.md) |
| Exploration du DOM | [Ancien support DOM](./session_08.md), [exercice Micro-Tracker DOM](./exercices/session_08/microtracker-dom.md), [HTML](./exercices/session_08/microtracker-dom.html) |
| API et création d’images | [Ancien support API](./session_09.md), [exercice de galerie](./exercices/session_09/cats_and_dogs.md), [HTML](./exercices/session_09/catsanddogs.html), [JS de départ](./exercices/session_09/catsanddogs.js) |
| Renforcement | [Exercices supplémentaires](./exercices/STITI_extra.md) |

**Volume du module : 44 heures.**
