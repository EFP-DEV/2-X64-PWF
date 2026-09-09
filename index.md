# Programmation Web : Frontend (PWF)


## Informatique, information et interface

Quand on demande « Qu'est-ce que l'informatique ? », une réponse classique est :

**Le traitement automatique de l'information.**

Mais pour traiter automatiquement de l'information, de quoi a-t-on absolument besoin ?

On pense immédiatement à répondre :

**D'un ordinateur.**

Mais non.

Il faut d'abord **un humain**.

Un ordinateur manipule des données. Il peut les stocker, les comparer, les trier, les transformer ou les transmettre.

Mais une donnée n'est pas encore une information.

Prenons simplement :

**42**

Pour l'ordinateur, c'est `42`.

Mais pour nous :

* **42 °C de température corporelle** : inquiétude, urgence.
* **42/50 à un examen** : soulagement, fierté.
* **42 € à payer alors qu'on en attendait 15** : surprise, irritation.
* **Le bus 42 qui arrive enfin sous la pluie** : soulagement.
* **« La réponse à la grande question sur la vie, l'univers et le reste »** : pour certains, un sourire immédiat.

La donnée est pourtant toujours exactement la même :

**42**

Ce qui change, c'est ce qu'elle **signifie**.

La donnée devient information lorsqu'elle est **interprétée**.

Et une information peut provoquer une décision, une action, une émotion.

C'est là que le lien avec l'UX/UI devient particulièrement important.

L'interface se trouve précisément entre le monde humain et le monde de la machine.

Dans un sens :

**Humain → intention → interface → données → machine**

Dans l'autre :

**Machine → données → interface → information → humain**

L'interface est donc beaucoup plus qu'une surface graphique.

**L'interface est l'endroit où la donnée devient information, et où l'intention humaine devient donnée.**

L'informatique n'est donc pas seulement une discipline qui s'intéresse aux ordinateurs.

C'est aussi une discipline de la **représentation** : comment transformer quelque chose qui a du sens pour un humain en quelque chose qu'une machine peut manipuler, puis comment transformer le résultat en quelque chose qui a de nouveau du sens pour un humain.



## Un même raisonnement, plusieurs applications

Ce module de **44 heures en 2e année** apprend à programmer des interfaces avec HTML, CSS et JavaScript natif.

Nous allons apprendre à **représenter des données, afficher une collection, identifier un élément, modifier son état et charger ou sauvegarder des changements**.

Un panier de courses, un portfolio, une galerie et un écran de commandes pour un chef peuvent partager ces opérations. Les informations affichées, les règles et la présentation changent selon le besoin. Les exercices servent à reconnaître et à réutiliser les mécanismes communs.

## Frontend et backend

Le **frontend** est la partie d'une application que l'on voit et avec laquelle on interagit : contenus, disposition, formulaires, boutons et réactions aux actions.

Le **backend** traite les demandes côté serveur et gère notamment les données enregistrées. Dans une application de restaurant, le frontend peut afficher les commandes au chef ; le backend peut enregistrer les commandes et les transmettre.

Dans ce module, nous apprenons à construire l'interface et son comportement. En Programmation Web : Backend (PWB), nous pourrons créer l'API qui lui fournira nos propres données.

## Le métier et les rémunérations : nos références

Une sélection ancrée en Belgique, avec un regard de praticien et des repères salariaux à consulter à la source.

- **[efp — Développeur web front-end](https://www.efp.be/formations/chef-d-entreprise/efp-2/developpeur-web-front-end.html)** · Bruxelles, français. Le point de départ pour relier notre formation aux missions, à la journée type et aux débouchés du métier.
- **[Bram.us — Front-of-the-front-end / back-of-the-front-end](https://www.bram.us/2021/02/19/front-of-the-front-end-back-of-the-front-end/)** · Auteur belge, anglais, 2021. Une lecture à discuter : Bramus reprend la distinction de Brad Frost entre les spécialistes de l’interface HTML/CSS et ceux de la logique applicative JavaScript, puis la rapproche des spécialisations du backend. Utile pour comprendre les différents profils que recouvre le titre « frontend ».
- **[Randstad Belgique — Métier et salaire du développeur front-end](https://www.randstad.be/fr/carriere/metiers/developpeur-front-end/)** · Français. Une fiche de recruteur avec des missions et des estimations de salaire brut mensuel et annuel. À lire pour le profil frontend ; les chiffres sont à recouper avec les autres sources.
- **[Hays Belgique — Salaires IT 2026](https://www.hays.be/fr/web/hays-belgium/salaire-moyen-en-it-en-belgique-2026)** · Français. Des fourchettes brutes mensuelles, notamment pour les développeurs logiciels juniors et seniors, et un regard de recruteur sur les avantages et le travail indépendant. Le périmètre est plus large que le frontend.
- **[Robert Half — Salaire d’un Software Developer à Bruxelles](https://www.roberthalf.com/be/fr/details-emploi/software-developer/bruxelles)** · Français. Un repère bruxellois avec les 25e, 50e et 75e percentiles, fondé sur les placements du cabinet. Là aussi, la catégorie couvre le développement logiciel au sens large.

Pour comparer les rémunérations, vérifiez la date des données, la région, l’expérience, le brut mensuel ou annuel et les avantages inclus. Les estimations des recruteurs servent de repères de négociation ; elles ne garantissent pas un salaire à la sortie de formation.

*Liens consultés le 8 septembre 2026.*



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
