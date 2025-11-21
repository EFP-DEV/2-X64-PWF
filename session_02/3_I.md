# Session 2 : STITI

> Stocker, Transformer, Interagir, Tester, **Itérer**
>
>
>**Itérer**, c’est **répéter une action** un certain nombre de fois. Une boucle est un **robot** qui sait faire deux choses :
>
>1. **Vérifier** s’il doit continuer ;
>2. **Répéter** exactement la même séquence.
>
> Idée‑clé : la boucle ne « comprend » pas le métier. Elle **compte** et **rejoue**.


## Objectifs

* **Commenter** le code pour le désactiver temporairement.
* **Séparer** le **contrôle** (la boucle) du **métier** (l’action utile).
* Utiliser des **noms explicites** pour les variables.


## Préparation

Commentez le code écrit jusque‑présent avec `/* … */` pour le désactiver temporairement.

```js
/*
let h = 13;
let m = 59;

m = m + 1; // 60

if (m == 60) {
  m = 0;
  h = h + 1; // on propage à l'heure
}

console.log(h, ":", m); // attendu : 14 : 0
*/
```

---

# 1) Une boucle nue (sans métier)

On introduit la structure seule, avec des **noms qui disent ce qu’ils font**.

```js
let counter = 0;   // compteur : combien de fois on a déjà répété
let target  = 5;   // cible : combien de fois on veut répéter au total

while (counter < target) {
  // (aucun « métier » ici, juste de la répétition)
  counter = counter + 1;
}
// À ce stade, on a répété 5 fois.
```

* `counter` = **compteur** (avance d’un pas à chaque tour) ;
* `target`  = **cible** (le but à atteindre) ;
* la condition `counter < target` = **feu vert** du robot.

**Vérification observée** :

```js
let counter = 0;
let target  = 5;

console.log("init:", counter, target);

while (counter < target) {
  counter = counter + 1;
  console.log("loop:", counter, target);
}

console.log("stop:", counter, target);
```



# 2) Ajouter un petit métier

On garde nos bons noms et on ajoute une action **neutre** (ex. construire une chaîne d’étoiles).

```js
let counter = 0;
let target  = 5;

let motif = ""; // ← métier

while (counter < target) {
  motif   = motif + "★"; // action utile
  counter = counter + 1;   // contrôle
}

console.log(motif); // attendu ?
```

> Ici, la boucle **contrôle** le rythme ; le **métier** est « ajouter une étoile ».

**Règle d’or :** séparer **contrôle** (boucle) et **métier** (ce qu’on fait à chaque tour).

* **Boucle** : variables de **contrôle** (`counter`, `target`), **condition** d’arrêt.
* **Métier** : variables porteuses de **sens** (`motif`, `total`, `minutes`, `heures`, …).

Cette séparation rend le code **lisible** et **prévisible**.

---

# 3) Passer au minuteur (métier seul)

On décrit **uniquement** ce qui se passe quand **une minute passe**. Aucune boucle.

```js
let heures   = 13;
let minutes  = 37;

// ——— MÉTIER ———
minutes = minutes + 1;

if (minutes == 60) {
  minutes = 0;
  heures  = heures + 1;
}
// ——— FIN MÉTIER ———

// Ici, on a appliqué exactement une fois le métier.
```

> On valide d’abord le **métier** (la règle des minutes/heures) **avant** d’industrialiser.


# 4) Robotiser le métier (insérer dans une boucle)

On garde la mécanique apprise plus haut et on **insère** le métier dedans.

```js
let heures   = 13;
let minutes  = 37;

let ecoulees  = 0;   // contrôle : combien de minutes rejouées
let une_heure = 60;  // cible : on veut rejouer 60 fois le métier

while (ecoulees < une_heure) {
  // ——— MÉTIER ———
  minutes = minutes + 1;

  if (minutes == 60) {
    minutes = 0;
    heures  = heures + 1;
  }
  console.log(heures, ":", minutes); // observation facultative
  // ——— FIN MÉTIER ———

  // ——— CONTRÔLE ———
  ecoulees = ecoulees + 1;
}
```

> Les **noms** racontent l’histoire : on répète **combien de fois** (60), pas « jusqu’à on‑ne‑sait‑quoi ».


## À essayer ensuite (variantes)

* Démarrer à d’autres heures/minutes et vérifier le résultat.
* Changer `une_heure` en `target_minutes` pour 10, 120, etc.
* Inverser les rôles : écrire une boucle correcte mais un métier faux, et **déboguer par l’observation**.
