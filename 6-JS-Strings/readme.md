# Introduction aux Manipulations de Chaînes en JavaScript

## Objectif du Cours

Ce cours a pour but de vous familiariser avec la manipulation des chaînes en JavaScript en vous imposant certaines contraintes pour améliorer votre compréhension des bases du langage. Vous allez apprendre à traiter les chaînes de caractères en utilisant uniquement les méthodes essentielles, notamment `charAt()`, `length` et `charCodeAt()`. Ces exercices vous aideront à développer votre logique algorithmique et à mieux comprendre les boucles et les conditions.

## Concepts Clés

### 1. Représentation Binaire des Caractères

Les ordinateurs étant basés sur un système binaire (0 et 1), ils ne manipulent pas directement des lettres ou des symboles. Pour représenter les caractères, plusieurs standards ont été développés au fil du temps :

- **ASCII (1963)** : Initialement limité à 7 bits, il pouvait représenter 128 caractères (lettres anglaises, chiffres, symboles de ponctuation, et caractères de contrôle).
- **ISO-8859-1 (Latin-1, 1987)** : Une extension à 8 bits permettant 256 caractères pour inclure des accents et symboles européens.
- **Unicode (1991 - aujourd’hui)** : Un standard universel utilisant plusieurs octets pour représenter plus de 140 000 caractères couvrant presque toutes les langues du monde.

Dans JavaScript, les chaînes de caractères sont encodées en UTF-16, ce qui signifie que chaque caractère est stocké sur 16 bits (2 octets). Certains caractères spéciaux ou [emojis nécessitent 4 octets](javascript_and_utf.md)
### 2. Les Chaînes de Caractères en JavaScript

Une chaîne de caractères en JavaScript est un type de donnée primitif utilisé pour représenter du texte. Les chaînes peuvent être manipulées à l’aide de plusieurs méthodes intégrées. Cependant, pour renforcer votre compréhension, nous limiterons l’usage de ces méthodes aux suivantes :

- **`charAt(index)`** : Renvoie le caractère à la position spécifiée.
- **`length`** : Retourne la longueur de la chaîne.
- **`charCodeAt(index)`** : Retourne le code Unicode du caractère à une position donnée.

### 3. Méthodes Courantes des Chaînes en JavaScript

Bien que nous restreignons l’utilisation des méthodes natives dans ces exercices, il est important de connaître celles qui sont généralement utilisées pour la manipulation de chaînes :

- **`toUpperCase()`** et **`toLowerCase()`** : Convertissent une chaîne en majuscules ou en minuscules.
  ```javascript
  let text = "Bonjour";
  console.log(text.toUpperCase()); // "BONJOUR"
  console.log(text.toLowerCase()); // "bonjour"
  ```

- **`trim()`** : Supprime les espaces au début et à la fin d’une chaîne.
  ```javascript
  let text = "  Hello World!  ";
  console.log(text.trim()); // "Hello World!"
  ```

- **`split(separator)`** : Divise une chaîne en un tableau de sous-chaînes.
  ```javascript
  let phrase = "Apprendre JavaScript est amusant";
  let mots = phrase.split(" ");
  console.log(mots); // ["Apprendre", "JavaScript", "est", "amusant"]
  ```

- **`replace(oldValue, newValue)`** : Remplace une sous-chaîne par une autre.
  ```javascript
  let message = "Bonjour tout le monde";
  let nouveauMessage = message.replace("Bonjour", "Salut");
  console.log(nouveauMessage); // "Salut tout le monde"
  ```

- **`indexOf(value)`** et **`lastIndexOf(value)`** : Renvoient l’index d’un caractère ou d’une sous-chaîne dans une chaîne.
  ```javascript
  let texte = "JavaScript est puissant";
  console.log(texte.indexOf("est")); // 10
  console.log(texte.lastIndexOf("s")); // 18
  ```

- **`substring(start, end)`** : Extrait une partie d’une chaîne.
  ```javascript
  let chaine = "Programmation";
  console.log(chaine.substring(0, 6)); // "Progra"
  ```

- **`includes(value)`** : Vérifie si une chaîne contient une sous-chaîne spécifique.
  ```javascript
  let phrase = "Apprendre JavaScript";
  console.log(phrase.includes("JavaScript")); // true
  ```

### 4. Utilisation des Boucles

Deux types de boucles sont couramment utilisées pour parcourir une chaîne de caractères :

- **La boucle `while`** : Elle est utile lorsque le nombre d’itérations n’est pas connu à l’avance et permet de parcourir une chaîne jusqu’à une condition spécifique.
- **La boucle `for`** : Elle est souvent privilégiée pour des parcours déterminés.

### 5. Les Conditions `if`

La structure conditionnelle `if` vous permet d’exécuter du code seulement si une certaine condition est remplie. Par exemple, pour vérifier si un caractère est une voyelle, on peut utiliser :

```javascript
if (char === 'a' || char === 'e' || char === 'i' || char === 'u' || char === 'o') {
    // Faire quelque chose
}
```

## Exercices avec stratégies de résolution

Les stratégies présentées ici sont conçues pour vous aider à vous concentrer sur la programmation plutôt que sur l’algorithmique. Elles vous guideront pas à pas pour comprendre la logique de chaque exercice.

### Exercice 1 : Inverser une Chaîne
**Énoncé** : Écrire une fonction JavaScript pour inverser une chaîne donnée.

- Utiliser une boucle `while` pour parcourir la chaîne en partant de la fin.
- Concaténer chaque caractère dans une nouvelle chaîne.

### Exercice 2 : Compter les Voyelles
**Énoncé** : Compter le nombre de voyelles dans une chaîne.

- Initialiser un compteur.
- Parcourir la chaîne et vérifier si chaque caractère est une voyelle.
- Incrémenter le compteur en conséquence.

### Exercice 3 : Vérifier un Palindrome
**Énoncé** : Vérifier si une chaîne donnée est un palindrome.

- Comparer les caractères du début et de la fin de la chaîne en se déplaçant vers le centre.
- Si une différence est trouvée, retourner `false`.
- Si aucune différence n’est trouvée, retourner `true`.

### Exercice 4 : Capitaliser la Première Lettre de Chaque Mot
**Énoncé** : Écrire une fonction pour capitaliser la première lettre de chaque mot dans une chaîne.

- Identifier le début de chaque mot.
- Transformer la lettre en majuscule si elle est au début ou suit un espace.
- Concaténer les caractères pour reformer la chaîne modifiée.

### Exercice 5 : Trouver le Mot le Plus Long
**Énoncé** : Déterminer la longueur du mot le plus long dans une chaîne donnée.

- Parcourir la chaîne tout en repérant chaque mot.
- Comparer la longueur de chaque mot rencontré.
- Retourner la longueur du mot le plus long trouvé.

## Conclusion
Ce cours vous aidera à affiner votre logique algorithmique et à manipuler les chaînes sans utiliser des méthodes avancées. En suivant ces exercices, vous développerez une compréhension plus approfondie du fonctionnement interne des chaînes en JavaScript, ce qui vous préparera à des manipulations plus avancées à l’avenir.
