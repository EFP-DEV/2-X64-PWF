
# Session 7 - Micro-Tracker

## Objectif général

Vous allez construire, en quatre petites étapes progressives, un **micro-tracker d’actions quotidiennes**.
L’objectif n’est pas seulement d’écrire un peu de JavaScript, mais surtout de comprendre **comment une interface réagit aux actions de l’utilisateur**, et comment on peut **structurer** progressivement son code.

Chaque étape donne un résultat fonctionnel minimal.
C’est normal si tout est très simple au début : c’est une progression volontaire.

---

# Étape 1 — Un compteur simple

Le but est de comprendre toute la chaîne :
**un clic → une variable change → l’interface se met à jour**.

Vous créez une interface minimaliste qui affiche un nombre et un bouton permettant de l’augmenter.
Vous ne gérez qu’un seul compteur, et vous utilisez uniquement les notions déjà vues :
variables, opérateurs, `if`, `while`, `addEventListener`, sans fonctions.

## HTML fourni

*(Aucun style nécessaire. L’important est que ce soit propre, lisible et utilisable par un lecteur d’écran.)*

```html
<section aria-labelledby="counter-title">
  <h1 id="counter-title">Compteur</h1>
  <p>Valeur : <strong id="count">0</strong></p>
  <button id="btn-increment">Ajouter 1</button>
</section>
```

## JavaScript fourni

```js
let count = 0;

let display = document.getElementById('count');
let action = document.getElementById('btn-increment');

action.addEventListener('click', function () {
  count = count + 1;
  display.textContent = count;
});
```

---

# Étape 2 — Compteur structuré

Même interface que l’étape 1, mais cette fois vous commencez à organiser votre code **comme un petit composant**.
Vous introduisez deux fonctions : une pour mettre à jour l’affichage, une pour augmenter la valeur.

L’objectif est de comprendre pourquoi on structure, et comment cela facilite les modifications par la suite.

## JavaScript fourni

```js
let count = 0;

let display = document.getElementById('count');
let action = document.getElementById('btn-increment');

function updateUI() {
  display.textContent = count;
}

function increment() {
  count = count + 1;
  updateUI();
}

action.addEventListener('click', increment);
```

---

# Étape 3 — Deux actions, total, message

Vous passez maintenant d’un simple compteur à un **mini tableau de commandes** :

* deux boutons qui ajoutent des valeurs différentes
* deux compteurs séparés
* un total calculé
* un petit message dynamique selon l’objectif (au choix)

L’objectif pédagogique : comprendre la gestion de **plusieurs états simultanés**, et comment l’interface peut devenir expressive.

## HTML fourni

```html
<section aria-labelledby="dashboard-title">
  <h1 id="dashboard-title">Suivi</h1>

  <div>
    <p>+1 : <strong id="count1">0</strong></p>
    <button id="btn-add1">Ajouter 1</button>
  </div>

  <div>
    <p>+5 : <strong id="count5">0</strong></p>
    <button id="btn-add5">Ajouter 5</button>
  </div>

  <p>Total : <strong id="total">0</strong></p>
  <p id="message" role="status" aria-live="polite"></p>
</section>
```

---

# Étape 4 — Mini tableau de bord complet

Vous créez votre premier **micro-tracker** réellement exploitable au quotidien.

Vous devez gérer :

* trois compteurs indépendants
* un total
* un message dynamique (objectif, progression, encouragement…)
* un bouton de réinitialisation qui remet tout à zéro

Vous pouvez adapter les trois compteurs selon votre thème (sport, bien-être, productivité…).
L’exemple ci-dessous montre un thème « bien-être ».

## HTML fourni

```html
<section aria-labelledby="tracker-title">
  <h1 id="tracker-title">Micro-Tracker</h1>

  <article>
    <h2>Soleil</h2>
    <p>Minutes : <strong id="sun-value">0</strong></p>
    <button id="btn-sun">+1</button>
  </article>

  <article>
    <h2>Eau</h2>
    <p>Verres : <strong id="water-value">0</strong></p>
    <button id="btn-water">+1</button>
  </article>

  <article>
    <h2>Pause</h2>
    <p>Moments : <strong id="break-value">0</strong></p>
    <button id="btn-break">+1</button>
  </article>

  <p>Total : <strong id="total-value">0</strong></p>
  <p id="goal-message" role="status" aria-live="polite"></p>

  <button id="btn-reset">Réinitialiser</button>
</section>
```

---

# Résultat attendu

À la fin des quatre étapes, vous aurez :

* une structure HTML sémantique, propre et accessible
* plusieurs compteurs indépendants
* un total calculé automatiquement
* un message dynamique réactif
* un bouton de réinitialisation qui remet l’ensemble à zéro

C’est l’architecture minimale d’un vrai **dashboard interactif**.

---

Et si au lieu de 3 actions, je devais en gérer 10… ou 30 ?
Mon code serait-il toujours aussi simple, ou bien deviendrait-il très répétitif ?
