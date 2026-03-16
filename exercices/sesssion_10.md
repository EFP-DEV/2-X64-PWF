# Session 10 — Exercice API

## Liste des prix Nobel, HTML sémantique et gestion d’erreur


## Consigne générale

Vous allez réaliser une page web capable d’interroger une API publique et d’afficher dynamiquement une liste de résultats dans le navigateur.

Pour cet exercice, vous utiliserez l’API des prix Nobel.
Endpoint: https://api.nobelprize.org/2.1/nobelPrizes

L’objectif n’est pas seulement de récupérer des données : vous devez aussi produire une structure HTML correcte, compréhensible et accessible, et prévoir le cas où l’API ne répond pas correctement.

---

## Objectif

Au clic sur un bouton, la page doit :

1. envoyer une requête vers l’API ;
2. récupérer les données JSON ;
3. afficher une liste de prix Nobel dans la page ;
4. informer l’utilisateur de ce qui se passe ;
5. gérer proprement les erreurs si la requête échoue.

---

## Contraintes techniques

Vous devez utiliser :

* `fetch()`
* `.then()`
* `.json()`
* une boucle `while`
* `document.createElement()`
* `appendChild()`
* `addEventListener()`

Vous ne devez pas utiliser de framework ni de bibliothèque externe.

---

## Contraintes HTML

Votre page doit être structurée de manière sémantique.

Vous devez utiliser au minimum :

* un `<main>` pour le contenu principal ;
* un `<section>` pour la zone de l’exercice ;
* un vrai titre avec `<h1>` ;
* un bouton `<button>` pour déclencher le chargement ;
* une zone de message distincte pour informer l’utilisateur ;
* une vraie liste HTML (`<ul>` ou `<ol>`) pour afficher les résultats.

La structure doit être logique : le bouton ne doit pas être un lien, la liste ne doit pas être simulée avec des `<div>`, et les messages d’état ne doivent pas être mélangés avec les résultats.

---

## Contraintes d’accessibilité minimale

Vous devez prévoir une zone de retour utilisateur lisible et utile.

Cette zone doit :

* annoncer le chargement ;
* annoncer la réussite ;
* annoncer l’échec si l’API est indisponible.

Cette zone peut être placée dans un élément portant `role="status"` et `aria-live="polite"`.

Le contenu affiché doit rester compréhensible même si les résultats ne se chargent pas.

---

## Gestion d’erreur obligatoire

L’exercice doit gérer explicitement le cas où l’endpoint ne répond pas correctement.

Exemples de situations à prévoir :

* le serveur est inaccessible ;
* l’URL est incorrecte ;
* la réponse n’est pas exploitable ;
* la requête échoue.

Dans ce cas :

* la page ne doit pas se bloquer ;
* aucun affichage “cassé” ne doit apparaître ;
* un message clair doit être montré à l’utilisateur ;
* l’ancienne liste ne doit pas rester ambiguë.

Autrement dit : si l’API est “morte”, votre interface doit rester propre, lisible et compréhensible.

---

## Données à afficher

Pour chaque prix Nobel affiché, vous devez montrer au minimum :

* l’année ;
* la catégorie.

Vous pouvez ajouter les lauréats si vous réussissez à exploiter cette information.

---

## Comportement attendu

Quand l’utilisateur clique sur le bouton :

1. la zone de statut annonce le chargement ;
2. la liste précédente est vidée ;
3. la requête est envoyée ;
4. si la requête réussit, les résultats sont ajoutés dans la liste ;
5. la zone de statut annonce que le chargement est terminé ;
6. si la requête échoue, la zone de statut affiche un message d’erreur clair.

---

## Ce qui sera observé

On évaluera particulièrement :

* la qualité de la structure HTML ;
* le respect du vocabulaire sémantique ;
* la clarté de la séparation entre interface, messages et résultats ;
* la capacité du script à afficher les données correctement ;
* la capacité du script à gérer un échec sans produire une interface confuse ;
* la lisibilité générale du code.

---

## Attendu minimal

Votre travail est considéré comme fonctionnel si :

* le bouton déclenche bien la requête ;
* la liste est générée dynamiquement dans le DOM ;
* le HTML est sémantique ;
* un message de chargement apparaît ;
* un message d’erreur apparaît si la requête échoue.

---

## Attendu plus avancé

Votre travail sera plus solide si :

* la liste est proprement vidée avant chaque nouveau chargement ;
* les erreurs sont traitées explicitement ;
* les éléments créés dans le DOM sont cohérents et bien hiérarchisés ;
* le retour utilisateur est clair à chaque étape.

---

## Question de réflexion

À la fin de l’exercice, répondez brièvement par écrit à la question suivante :

> Quand on dépend d’une API externe, qu’est-ce qui échappe à notre contrôle ?
> Que doit faire une interface correcte lorsque la source de données ne répond plus ?

Si tu veux, je peux maintenant te rédiger la version “énoncé étudiant” au même format que tes autres séances, avec sections, étapes et contraintes de commit.
