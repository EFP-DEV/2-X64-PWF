# Session 11 : EXAMEN FINAL PWF

**Durée : 4 heures**
**Aucun document autorisé. Aucun framework. Aucune IA. HTML, CSS et JavaScript natif uniquement.**

## **Sujet : Réalisation d'une application complète de gestion de tâches**

Vous devez développer, *à partir d’une page blanche*, une mini-application web fonctionnelle permettant de gérer des tâches quotidiennes.
L’interface, le comportement et la structure devront strictement respecter les spécifications ci-dessous.

---

## **1. Exigences Fonctionnelles (obligatoires)**

### **1.1. Affichage initial**

À l’ouverture de la page, l’application doit afficher :

* Un champ texte permettant d’encoder une nouvelle tâche.
* Un bouton « Ajouter ».
* Une liste vide où les tâches apparaîtront.

### **1.2. Ajout de tâche**

Lorsqu’un utilisateur encode un texte puis clique sur « Ajouter » :

* Une nouvelle tâche apparaît dans la liste.
* Le champ texte se vide automatiquement.
* Une tâche est un élément contenant :

  * le texte de la tâche
  * un bouton « Terminer »
  * un bouton « Supprimer »

### **1.3. Terminer une tâche**

Le bouton « Terminer » doit :

* barrer le texte de la tâche
* changer le fond de l’élément (visuellement distinct)
* désactiver le bouton « Terminer »

### **1.4. Supprimer une tâche**

Le bouton « Supprimer » doit retirer la tâche de la liste.

---

## **2. Exigences Techniques**

### **2.1. HTML**

* Code sémantique obligatoire : utilisation de `<main>`, `<section>`, `<form>`, `<ul>`, `<li>`.
* Interdiction d’utiliser `onclick`, `oninput`, ou tout attribut d’événement en HTML.

### **2.2. CSS**

* Styles intégrés dans `<style>` dans la même page.
* Vous devez gérer :

  * Une mise en page agréable et claire
  * Un état visuel différent pour les tâches terminées
  * Une indentation ou un espacement cohérent des éléments

### **2.3. JavaScript**

* Code inclus dans un `<script>` à la fin du fichier.
* **Un seul** `addEventListener` pour gérer toutes les interactions.
* Vous devez obligatoirement utiliser :

  * `createElement`
  * `appendChild`
  * `classList.add` / `remove`
  * `event.target`
* L’ensemble du code doit utiliser uniquement ce que nous avons vu en cours.

---

## **3. Exigences Avancées (obligatoires)**

### **3.1. Validation**

Empêcher l’ajout d’une tâche vide ou uniquement composée d’espaces.

### **3.2. Compteur dynamique**

Afficher au-dessus de la liste :

* le nombre total de tâches
* le nombre de tâches terminées
* Mise à jour automatique après chaque action

### **3.3. Persistance**

Les tâches doivent rester visibles après rechargement de la page :

* stockage dans `localStorage`
* restauration à l'ouverture de la page
* format libre tant que cela respecte la logique vue en cours

---

## **4. Structure du fichier attendu**

Un seul fichier : **todo.html** contenant strictement :

* un `<head>` propre
* un `<main>` avec tout le HTML
* un `<style>` interne
* un `<script>` interne

Aucun fichier externe autorisé.

---

## **5. Critères d’évaluation**

| Critère                              | Points |
| ------------------------------------ | ------ |
| Respect des exigences fonctionnelles | 40     |
| Qualité du HTML                      | 10     |
| Qualité du CSS                       | 10     |
| Qualité du JavaScript                | 20     |
| Gestion du stockage local            | 10     |
| Lisibilité, propreté, rigueur        | 10     |

**Total : 100 points**

---

## **6. Notes importantes**

* Toute fonctionnalité manquante entraîne une perte de points.
* Toute démonstration non fonctionnelle au moment du rendu est considérée comme non réalisée.
* Le code doit être entièrement de votre main.

