# Introduction à la console et aux entrées en JavaScript

---

# Table des matières

1. [**prompt() et console.log()**](#1-prompt-et-consolelog)  
   - [Première utilisation simple](#1-prompt-et-consolelog)  
   - [Version plus claire en deux étapes](#1-prompt-et-consolelog)  

2. [**L’ambivalence de l’opérateur +**](#2-lambivalence-de-loperateur-)  
   - [Exemple 1 – Concaténation](#exemple-1-concatenation)  
   - [Exemple 2 – Addition](#exemple-2-addition)  
   - [Exemple 3 – Piège fréquent avec prompt()](#exemple-3-piege-frequent-avec-prompt)  

3. [**Convertir en nombre avec parseInt()**](#3-convertir-en-nombre-avec-parseint)  
   - [Conversion d’une chaîne en entier](#3-convertir-en-nombre-avec-parseint)  
   - [Importance des parenthèses](#3-convertir-en-nombre-avec-parseint)  

---

## 1. prompt() et console.log()

### Note pédagogique

L’utilisation de `console.log()` et `prompt()` dans ces exemples a pour but **d’illustrer les bases de l’interaction avec un programme JavaScript** :

* `console.log()` permet de visualiser les résultats dans la console du navigateur.
* `prompt()` permet de demander une saisie simple à l’utilisateur.

Ces outils sont pratiques pour l’apprentissage car ils rendent visibles les échanges entre le programme et l’utilisateur.  
En revanche, dans des projets professionnels, on utilisera plutôt :

* des formulaires HTML et des événements pour les entrées,
* l’affichage dynamique dans la page (DOM) pour les sorties.

Ici, leur usage est volontairement **limité au contexte pédagogique**, afin de comprendre les notions fondamentales avant d’aller plus loin.

---

### Première utilisation simple

```js
let prenom = prompt("Quel est ton prénom ?");
console.log("Bonjour " + prenom);
````

Si l’utilisateur tape `Lyna`, la console affichera :

```
Bonjour Lyna
```

---

### Version plus claire en deux étapes

```js
// déclaration des variables
let prenom, message;

// assignation des valeurs
prenom = prompt("Quel est ton prénom ?");  // interaction (lecture) et stockage
message = "Bonjour " + prenom;            // transformation et stockage

// affichage du résultat
console.log(message); // interaction (écriture)
```

---

## 2. L’ambivalence de l’opérateur +

Nous l'avons vu, en JavaScript, l’opérateur `+` peut :

* additionner des nombres
* concaténer (coller) des chaînes de caractères

### Exemple 1 – Concaténation

```js
let prenom = 'Lyna';
console.log('Bonjour ' + prenom);
```

Résultat :

```
Bonjour Lyna
```

### Exemple 2 – Addition

```js
let a = 5;
let b = 3;
console.log(a + b);
```

Résultat :

```
8
```

### Exemple 3 – Piège fréquent avec prompt()

```js
let reponse = prompt("Quel est ton âge ?");
reponse = reponse + 1;
console.log("Vous avez " + reponse);
```

Si on tape `23`, le résultat sera :

```
Vous avez 231
```

Pourquoi ? Parce que `prompt()` renvoie toujours une **chaîne de caractères**.
Même si l’utilisateur tape `5`, JavaScript le considère comme `"5"`.

Et `'5' + 1` donne `"51"`, pas `6`.

---

## 3. Convertir en nombre avec parseInt()

Pour effectuer des calculs, il faut convertir la chaîne en nombre.
On utilise `parseInt()` (entiers) ou `Number()` (valeurs générales).

### Conversion d’une chaîne en entier

```js
let reponse = prompt("Quel est ton âge ?");
let age = parseInt(reponse); // convertit en entier
console.log("Dans un an tu auras " + (age + 1) + " ans");
```

Si on tape `15`, la console affichera :

```
Dans un an tu auras 16 ans
```

---

### Importance des parenthèses

Astuce : on met `(age + 1)` entre parenthèses pour forcer l’addition avant la concaténation.
Sans parenthèses, JavaScript risquerait d’interpréter `"Dans un an tu auras " + age + 1` comme une suite de chaînes, donnant par exemple `"Dans un an tu auras 151"` au lieu de `"16"`.
