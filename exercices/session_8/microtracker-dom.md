# Exercice — Résultat attendu

Vous devez écrire le JavaScript qui rend fonctionnelle l’interface des compteurs.
**Deux objectifs obligatoires :**

1. Les compteurs actuels fonctionnent.
2. Ajouter un nouveau compteur ne demande *aucun changement* dans le JavaScript.
3. Utiliser des fonctions
   
---

# 1. Les compteurs actuels fonctionnent

Chaque `<article>` doit réagir correctement :

* cliquer sur “+1” augmente la valeur affichée dans **ce** compteur
* le total (`#total`) est **recalculé** après chaque clic
* “Réinitialiser” remet **toutes** les valeurs à zéro (et le total aussi)

## Contraintes techniques obligatoires

* Lire et modifier les valeurs **directement dans le DOM**
* Utiliser `querySelectorAll()` pour récupérer **tous les articles**
* Utiliser `closest('article')` pour savoir quel compteur est cliqué
* Utiliser une **boucle `while`** pour :
  * recalculer le total
  * remettre les valeurs à zéro
* Utiliser **un seul event listener** (sur `document`)
* Ne jamais dupliquer du code pour chaque compteur
* Ne jamais utiliser de variables comme `let soleil = …`
* Tout doit être générique

---

# 2. Ajouter un nouveau compteur ne change que le HTML

Votre code doit fonctionner **sans aucune modification** du JavaScript lorsque :

* on ajoute un nouvel `<article>` dans le HTML
* avec sa `.value` et son bouton “+1”

Le nouveau compteur doit automatiquement :

* augmenter quand on clique
* être compté dans le total
* être remis à zéro

Autrement dit :

> **Votre JavaScript doit s’adapter au HTML, pas l’inverse.**

---

# 3. Fonction obligatoire : `updateUI()`

Vous devez créer une fonction nommée **`updateUI()`** qui :

* parcourt tous les articles
* lit chaque `.value`
* calcule le total
* met à jour l’élément `#total`

Cette fonction doit être appelée :

* après chaque clic sur “+1”
* après un reset

**But :** isoler la logique de recalcul pour ne pas répéter de code.

---

# Résumé (à retenir)

Votre code doit :

* gérer tous les compteurs *sans savoir combien il y en a*
* utiliser une fonction `updateUI()`
* utiliser le DOM comme seule source de vérité
* rester propre, court et générique

Si vous ajoutez un `<article>` au HTML, **tout doit fonctionner automatiquement.**
