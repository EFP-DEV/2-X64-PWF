# Séries d'exercices simples

## Objectif général

Ces exercices te permettent d'entraîner ta logique et de pratiquer les étapes du raisonnement **STITI** :

> **S**tocker → **T**ransformer → **I**nteragir → **T**ester → **I**térer

Chaque série ajoute une nouvelle brique.
Prends le temps de bien comprendre **ce que fait ton programme à chaque étape**.

* Utiliser `prompt()` pour **récupérer des données**.
* Utiliser `console.log()` pour **afficher des résultats**.
* Pas de HTML ni de DOM : **tout se passe dans la console.**
* **Convention de nommage** : toutes les variables en **snake_case** (`mon_nombre`, `age_utilisateur`)

---

## Rappels importants

### `prompt()`

`prompt()` sert à **demander une information** à l'utilisateur.
Elle renvoie toujours une **chaîne de caractères** (texte), ou `null` si l'utilisateur annule.

> Exemple : `let nom = prompt("Quel est ton prénom ?");`

---

### `console.log()`

`console.log()` sert à **afficher un message ou une variable** dans la console.
C'est ta fenêtre de dialogue avec le programme.

> Exemple : `console.log("Bonjour " + nom);`

---

### Conversion de types

Quand tu récupères un nombre avec `prompt()`, il est stocké comme **texte**.
Pour faire des calculs, tu dois le convertir :

* **`parseInt(texte)`** → convertit en nombre entier
* **`parseFloat(texte)`** → convertit en nombre décimal

> Exemple : `let age = parseInt(prompt("Ton âge ?"));`

---

# **Série 1 — Stocker, Transformer, Interagir**

## Notions à comprendre

### Variables
Une variable stocke une valeur en mémoire avec un nom.
```javascript
let prenom = "Alice";     // Stocke du texte
let age = 25;             // Stocke un nombre
```

### Opérateurs de base
```javascript
+  // Addition (ou concaténation de texte)
-  // Soustraction
*  // Multiplication
/  // Division
```

### Concaténation
Assembler du texte avec `+` :
```javascript
let prenom = "Alice";              // Stocke du texte
console.log("Bonjour " + prenom);  // Affiche: Bonjour Alice
```

### Méthodes de string
Ne pas les utiliser, ces exercices sont réservés aux opérateurs de base.

---

**Objectif :** apprendre à manipuler des variables, transformer des données et afficher des résultats.

1. Demande à l'utilisateur son prénom et affiche-le dans la console.
2. Demande un nombre et affiche le double.
3. Demande deux nombres et affiche leur somme.
4. Demande un mot et affiche-le en majuscules.
5. Demande un âge et calcule l'âge dans 10 ans.
6. Demande un mot et affiche le nombre de lettres qu'il contient.
7. Demande une couleur préférée et affiche une phrase "Ta couleur est …".
8. Demande trois animaux préférés et affiche-les dans une seule phrase.
9. Demande un prix et affiche le prix avec 21 % de TVA.
10. Demande une phrase et affiche uniquement son premier mot (jusqu'au premier espace).

---

# **Série 2 — STI + Tests**

## Notions à comprendre

### Condition if/else
Exécute du code seulement si une condition est vraie.
```javascript
if (age >= 18) {
    console.log("Majeur");
} else {
    console.log("Mineur");
}
```

### Opérateurs de comparaison
```javascript
===  // Égal à (strict)
!==  // Différent de
>    // Supérieur à
>=   // Supérieur ou égal
<    // Inférieur à
<=   // Inférieur ou égal
```

### Comparaison de texte
```javascript
mot === "rouge"  // Vérifie égalité exacte (sensible à la casse)
```

---

**Objectif :** ajouter des conditions `if` pour prendre des décisions.

1. Demande un mot de passe. Si c'est "banana", affiche "Bienvenue !", sinon "Accès refusé."
2. Demande un âge. S'il est supérieur ou égal à 18, affiche "Majeur !", sinon "Mineur !".
3. Demande un nombre et affiche "Pair" ou "Impair".
4. Demande une couleur. Si c'est "rouge", affiche "❤️", sinon "🟦".
5. Demande un prénom. Si c'est "Lyna", affiche "Salut Lyna !", sinon "Bonjour étranger !".
6. Demande une température. Si elle est au-dessus de 25, affiche "Il fait chaud !", sinon "Il fait frais."
7. Demande un mot et affiche "long" s'il contient plus de 5 lettres, sinon "court".
8. Demande deux nombres et affiche le plus grand.
9. Demande un nombre. S'il est égal à 0, affiche "Zéro !". Sinon, indique s'il est positif ou négatif.
10. Demande une réponse "oui" ou "non" et affiche un message différent dans chaque cas.

---

# **Série 3 — STIT + Itérer**

## Notions à comprendre

### Boucle while
Répète du code tant qu'une condition est vraie.
```javascript
let i = 1;
while (i <= 10) {
    console.log(i);
    i = i + 1;  // on transforme i en lui ajoutant 1, pour qu'il rende la condition fausse, dans 10 tours)
}
```

### Incrémentation
`++i` est juste un raccourci pour `i = i + 1`. Rien de magique.
```javascript
++i     // i = i + 1
--i     // i = i - 1
i += 5  // i = i + 5
```

### Accès aux caractères
```javascript
mot[0]        // Premier caractère
mot[mot.length - 1]  // Dernier caractère
```

---

**Objectif :** utiliser des boucles pour répéter des actions.

1. Affiche les nombres de 1 à 10.
2. Affiche dix fois la phrase "J'aime coder !".
3. Demande un nombre et affiche tous les nombres de 1 jusqu'à ce nombre.
4. Demande un mot et affiche chaque lettre sur une ligne différente.
5. Affiche les nombres pairs entre 1 et 20.
6. Fais un compte à rebours de 5 à 0.
7. Demande un nombre et affiche sa table de multiplication (de 1 à 10).
8. Affiche les carrés des nombres de 1 à 10 (1, 4, 9, 16...).
9. Demande combien de fois tu veux répéter une phrase, puis affiche-la ce nombre de fois.
10. Demande un mot et affiche-le autant de fois qu'il contient de lettres.

---

# **Série 3.5 — Opérateurs et validations de base**

## Notions à comprendre

### Opérateur modulo %
Donne le reste d'une division.
```javascript
7 % 3   // 1 (7 = 3×2 + 1)
10 % 5  // 0 (divisible exactement)
8 % 2   // 0 (pair)
7 % 2   // 1 (impair)
```

### Opérateurs logiques
Combinent plusieurs conditions.
```javascript
&&  // ET (les deux doivent être vraies)
||  // OU (au moins une doit être vraie)
!   // NON (inverse vrai/faux)

// Exemples
if (age >= 18 && age <= 65)  // Entre 18 et 65
if (mot === "" || mot.length < 3)  // Vide OU trop court
if (!(age < 18))  // Équivalent à age >= 18
```

### Validation de saisie
```javascript
if (texte === "") {
    console.log("Champ vide !");
}
```

---

**Objectif :** maîtriser les opérateurs logiques, le modulo et la validation d'entrées.

1. Demande un nombre. Affiche "Multiple de 5" s'il est divisible par 5, sinon affiche le reste de la division par 5.
2. Demande deux nombres. Affiche "Les deux sont pairs" si les deux sont pairs, sinon "Au moins un est impair".
3. Demande un prénom. Si l'utilisateur n'écrit rien (chaîne vide), affiche "Tu dois entrer un prénom !".
4. Demande un nombre entre 1 et 10. Si c'est hors de cette plage, affiche "Nombre invalide".
5. Demande un mot. Affiche "Commence par une voyelle" si la première lettre est a, e, i, o ou u (minuscule).
6. Demande deux nombres. Affiche "Au moins un est négatif" si l'un des deux est négatif, sinon "Tous positifs".
7. Demande un âge. Si c'est un nombre négatif ou supérieur à 150, affiche "Âge impossible".
8. Demande un nombre. Affiche tous ses diviseurs de 1 à 10 (utilise le modulo dans une boucle).
9. Demande une année. Affiche "Bissextile" si elle est divisible par 4 ET (non divisible par 100 OU divisible par 400).
10. Demande un texte. Si le texte est vide OU contient moins de 3 caractères, affiche "Texte trop court".

---

# **Série 4 — Conditions composées + If imbriqués**

## Notions à comprendre

### If imbriqués
Mettre des `if` à l'intérieur d'autres `if` pour tester plusieurs cas.
```javascript
if (age < 0 || age > 150) {
    console.log("Invalide");
} else {
    if (age < 12) {
        console.log("Enfant");
    } else if (age < 18) {
        console.log("Adolescent");
    } else {
        console.log("Adulte");
    }
}
```

### else if
Raccourci pour éviter trop d'imbrication. C'est juste du sucre syntaxique.
```javascript
// Ces deux blocs font exactement la même chose :

// Version 1 (imbriquée)
if (note < 10) {
    console.log("Échec");
} else {
    if (note < 12) {
        console.log("Passable");
    } else {
        console.log("Bien");
    }
}

// Version 2 (else if)
if (note < 10) {
    console.log("Échec");
} else if (note < 12) {
    console.log("Passable");
} else {
    console.log("Bien");
}
```

### Priorité des opérateurs
```javascript
// && s'évalue avant ||
if (a || b && c)  // Équivaut à : a || (b && c)

// Utilise des parenthèses pour être clair
if ((a || b) && c)
```

---

**Objectif :** combiner des tests pour résoudre des situations complexes.

**Contrainte :** pas de tableaux, snake_case obligatoire.

1. Demande un âge. Si négatif ou supérieur à 150, affiche "Âge invalide". Sinon, détermine : enfant (<12), adolescent (12-17), adulte (≥18).

2. Demande une note entre 0 et 20. Si hors plage, affiche "Note invalide". Sinon, attribue une mention : échec (<10), passable (10-11), bien (12-13), très bien (14-15), excellent (≥16).

3. Demande une lettre (un seul caractère). Affiche "Voyelle" si c'est a, e, i, o, u (minuscule ou majuscule), sinon "Consonne".

4. Demande deux nombres. Affiche "Deux positifs" si les deux sont >0, "Au moins un négatif" si l'un est <0, "Au moins un zéro" si l'un vaut 0.

5. Demande un mot. Si longueur >5 ET commence par "a" (minuscule), affiche "Mot long commençant par a", sinon "Autre cas".

6. Demande une heure (0-23). Affiche "Matin" (6-11), "Après-midi" (12-17), "Soirée" (18-22), "Nuit" (23-5). Si hors plage, affiche "Heure invalide".

7. Demande une température. Affiche "Gelée" (<0), "Froide" (0-9), "Douce" (10-19), "Chaude" (≥20).

8. Demande trois nombres. Affiche le plus petit des trois (compare-les deux par deux).

9. Demande un nom d'utilisateur et un mot de passe. Le bon couple est : utilisateur="admin", mot_de_passe="1234". Affiche "Connexion réussie" si les deux sont corrects, sinon indique ce qui est faux ("Nom incorrect", "Mot de passe incorrect", "Les deux sont faux").

10. Demande un nombre. Affiche "Fizz" s'il est divisible par 3, "Buzz" s'il est divisible par 5, "FizzBuzz" s'il est divisible par les deux, sinon affiche le nombre lui-même.

---

# **Série 5 — While + If imbriqués**

## Notions à comprendre

### While avec conditions internes
Combiner boucles et tests : la boucle répète, les `if` décident quoi faire à chaque tour.
```javascript
let i = 1;
while (i <= 10) {
    if (i % 2 === 0) {
        console.log(i + " (pair)");
    } else {
        console.log(i);
    }
    i++;
}
```

### Boucles contrôlées par l'utilisateur
Continue tant qu'une condition reste vraie.
```javascript
let mot = "";
while (mot !== "stop") {
    mot = prompt("Mot (tape 'stop' pour arrêter) :");
}
```

### Accumulateur
Variable qui accumule un résultat pendant la boucle.
```javascript
let somme = 0;
let i = 1;
while (i <= 10) {
    somme += i;  // somme = somme + i
    i++;
}
console.log(somme);  // 55
```

---

**Objectif :** combiner les boucles `while` avec des conditions internes pour contrôler le flux du programme.

1. Demande un nombre. Avec un `while`, affiche les nombres de 1 à ce nombre. Si le nombre courant est pair, ajoute "(pair)" après.

2. Demande un mot. Avec un `while`, affiche chaque lettre sur une ligne. Si la lettre est "a", affiche "⭐" après.

3. Redemande un mot tant que l'utilisateur n'écrit pas "stop" (boucle infinie contrôlée).

4. Demande un nombre. Compte de 1 jusqu'à ce nombre avec `while`. À chaque multiple de 10, affiche "BOOM !".

5. Redemande des prénoms jusqu'à ce que l'utilisateur entre une chaîne vide. Pour chaque prénom, affiche "court" si ≤4 lettres, "long" sinon.

6. Redemande des nombres tant que l'utilisateur ne tape pas 0. Additionne-les au fur et à mesure. Quand il tape 0, affiche la somme totale.

7. Demande une phrase. Avec un `while`, parcours la phrase caractère par caractère. Chaque fois que tu rencontres un espace, passe à la ligne (pour séparer les mots). Affiche ainsi chaque mot sur une ligne distincte.

8. Jeu de devinette : fixe un nombre secret entre 1 et 10 dans ton code (ex: `let secret = 7;`). Redemande un nombre tant que l'utilisateur ne trouve pas. Indique "Plus grand !" ou "Plus petit !" à chaque essai.

9. Demande une phrase. Avec un `while`, parcours-la caractère par caractère et compte combien de fois apparaît la lettre "e" (minuscule). Affiche le total à la fin.

10. Redemande un mot de passe tant qu'il a moins de 6 caractères. Quand il est valide, affiche "Mot de passe accepté".

---

# **Série 6 — Boucles imbriquées et défis**

## Notions à comprendre

### Boucles imbriquées
Une boucle à l'intérieur d'une autre. La boucle interne s'exécute complètement à chaque tour de la boucle externe.
```javascript
let ligne = 1;
while (ligne <= 3) {
    let colonne = 1;
    while (colonne <= 3) {
        console.log("L" + ligne + "C" + colonne);
        colonne++;
    }
    ligne++;
}
// Affiche : L1C1, L1C2, L1C3, L2C1, L2C2, L2C3, L3C1, L3C2, L3C3
```

### Construction de chaînes dans une boucle
```javascript
let resultat = "";
let i = 1;
while (i <= 5) {
    resultat += "*";  // Ajoute une étoile
    i++;
}
console.log(resultat);  // *****
```

### Compteurs multiples
Parfois il faut plusieurs compteurs.
```javascript
let voyelles = 0;
let consonnes = 0;
let i = 0;
while (i < texte.length) {
    // Traitement...
    i++;
}
```

---

**Objectif :** combiner plusieurs boucles et consolider tous les concepts.

1. Affiche une table de multiplication complète : pour chaque nombre de 1 à 5, affiche sa table de 1 à 10.

2. Dessine un carré d'étoiles : demande une taille, puis affiche un carré de cette taille en utilisant deux boucles imbriquées.
   Exemple pour taille 3 :
   ```
   ***
   ***
   ***
   ```

3. Affiche un triangle d'étoiles : demande une hauteur, puis affiche un triangle croissant.
   Exemple pour hauteur 4 :
   ```
   *
   **
   ***
   ****
   ```

4. Demande un nombre. Affiche tous ses diviseurs (de 1 à lui-même). Ensuite, indique s'il est premier.

5. Jeu de devinette amélioré : nombre secret entre 1 et 100, limite de 7 essais. Compte les tentatives et affiche "Gagné en X essais" ou "Perdu, c'était Y".

6. Demande une phrase. Compte et affiche séparément : nombre de voyelles, nombre de consonnes, nombre d'espaces.

7. Validation en boucle : redemande un âge tant qu'il n'est pas entre 0 et 150. Puis redemande un prénom tant qu'il est vide. Affiche ensuite "Bonjour [prénom], tu as [âge] ans".

8. Demande un mot. Avec une boucle, construit et affiche le mot à l'envers (sans utiliser de méthode reverse).

9. Mini calculatrice : redemande deux nombres et une opération (+, -, *, /) en boucle. Effectue le calcul et affiche le résultat. Continue jusqu'à ce que l'utilisateur tape "stop" comme opération.

10. Demande un nombre. Affiche tous les nombres de 1 à ce nombre, mais remplace : les multiples de 3 par "Fizz", les multiples de 5 par "Buzz", les multiples des deux par "FizzBuzz".

---

# **Série 6.5 — Boucle for et contrôle de flux**

## Notions à comprendre

### Boucle for
Juste du sucre syntaxique pour `while`. Regroupe initialisation, condition et incrémentation en une ligne.
```javascript
// Ces deux blocs font EXACTEMENT la même chose :

// Version while
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// Version for (plus compact)
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

Syntaxe : `for (initialisation; condition; incrémentation)`

### Quand utiliser for vs while
- `for` : quand tu connais le nombre d'itérations (parcourir 1 à 10, parcourir un tableau)
- `while` : quand tu ne sais pas combien de tours (attendre une saisie valide, chercher un élément)

### break
Sort immédiatement de la boucle.
```javascript
for (let i = 1; i <= 20; i++) {
    console.log(i);
    if (i === 15) break;  // Arrête à 15
}
```

### continue
Passe directement au tour suivant.
```javascript
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) continue;  // Saute les multiples de 3
    console.log(i);  // 1, 2, 4, 5, 7, 8, 10
}
```

---

**Objectif :** maîtriser la boucle `for` et le contrôle de flux.

1. Réécris l'exercice 3.1 (afficher 1 à 10) avec une boucle `for`.
2. Affiche les nombres de 1 à 20, mais arrête-toi à 15 avec `break`.
3. Affiche les nombres de 1 à 10, saute les multiples de 3 avec `continue`.
4. Demande 5 nombres, stocke-les dans un tableau (crée le tableau vide avant). Utilise `for` avec `i < 5`.
5. Redemande un nombre en boucle. Si le nombre est supérieur à 100, arrête avec `break`.
6. Affiche les nombres de 1 à 50. Saute les multiples de 5 avec `continue`.
7. Demande un mot. Parcours-le avec `for` et compte les voyelles.
8. Jeu : tire un nombre aléatoire entre 1 et 10 avec `Math.floor(Math.random() * 10) + 1`. Donne 3 essais maximum avec `for` et `break` quand trouvé.
9. Affiche les carrés de 1 à 20, mais arrête si le carré dépasse 200.
10. Parcours les nombres de 1 à 100. Saute les multiples de 3 ET de 5, affiche les autres.

---

# **Série 7 — Tableaux et manipulation de données**

## Notions à comprendre

### Tableau
Structure qui stocke plusieurs valeurs dans une seule variable.
```javascript
let nombres = [10, 20, 30];
let prenoms = ["Alice", "Bob", "Claire"];
let vide = [];  // Tableau vide
```

### Accès aux éléments
Index commence à 0.
```javascript
nombres[0]   // 10 (premier)
nombres[1]   // 20 (deuxième)
nombres[2]   // 30 (troisième)
```

### Propriétés et méthodes
```javascript
nombres.length      // 3 (nombre d'éléments)
nombres.push(40)    // Ajoute 40 à la fin → [10, 20, 30, 40]
nombres[4] = 50     // Ajoute directement à l'index 4
```

### Parcourir un tableau
```javascript
// Avec for (recommandé pour tableaux)
for (let i = 0; i < prenoms.length; i++) {
    console.log(prenoms[i]);
}

// Avec while (fonctionne aussi)
let i = 0;
while (i < prenoms.length) {
    console.log(prenoms[i]);
    i++;
}
```

---

**Objectif :** stocker et manipuler des collections de données avec les tableaux.

1. Crée un tableau avec 5 prénoms. Affiche chaque prénom avec son index (position).
   Exemple de sortie :
   ```
   0: Alice
   1: Bob
   2: Claire
   3: David
   4: Emma
   ```

2. Demande 5 nombres à l'utilisateur, stocke-les dans un tableau, puis affiche-les tous.

3. Crée un tableau de 10 nombres. Calcule et affiche la somme de tous les éléments.

4. Demande des mots jusqu'à ce que l'utilisateur tape "fin". Stocke-les dans un tableau et affiche le tableau complet à la fin.

5. Crée un tableau de nombres. Affiche uniquement les nombres pairs qu'il contient.

6. Demande 5 notes, stocke-les dans un tableau. Calcule et affiche la moyenne.

7. Crée un tableau de nombres. Trouve et affiche le plus grand et le plus petit nombre.

8. Demande un mot à chercher et un tableau de mots (demande 5 mots). Affiche "Trouvé !" si le mot est dans le tableau, sinon "Pas trouvé".

9. Crée deux tableaux de nombres de même taille. Crée un troisième tableau contenant la somme des éléments de même index. Affiche le résultat.

10. Demande une phrase. Crée un tableau où chaque élément est un mot de la phrase (parcours caractère par caractère, détecte les espaces). Affiche le nombre de mots et le tableau.

---

# **Série 7.5 — Tableaux avancés et algorithmes simples**

## Notions à comprendre

### Nombres aléatoires
`Math.random()` génère un nombre décimal entre 0 (inclus) et 1 (exclus).

Pour obtenir un entier entre `min` et `max` inclus :
```javascript
// Étapes :
// 1. Math.random()           → 0.0 à 0.999...
// 2. * (max - min + 1)       → 0.0 à (max-min+1).999...
// 3. Math.floor()            → 0 à (max-min+1)
// 4. + min                   → min à max

// Formule complète :
let aleatoire = Math.floor(Math.random() * (max - min + 1)) + min;

// Exemples :
Math.floor(Math.random() * 100) + 1    // 1 à 100
Math.floor(Math.random() * 10) + 1     // 1 à 10
Math.floor(Math.random() * 6) + 1      // 1 à 6 (dé)
```

### Tableaux multiples
Créer plusieurs tableaux pour séparer des données.
```javascript
let positifs = [];
let negatifs = [];

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] > 0) {
        positifs.push(nombres[i]);
    } else {
        negatifs.push(nombres[i]);
    }
}
```

### Tri à bulles
Compare et échange les éléments adjacents jusqu'à ce que le tableau soit trié.
```javascript
// Principe : les grands nombres "remontent" comme des bulles
for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab.length - 1; j++) {
        if (tab[j] > tab[j + 1]) {
            // Échange
            let temp = tab[j];
            tab[j] = tab[j + 1];
            tab[j + 1] = temp;
        }
    }
}
```

---

**Objectif :** manipulations complexes de tableaux et premiers algorithmes.

1. Crée un tableau de 10 nombres aléatoires entre 1 et 100. Affiche le tableau.
   Exemple de sortie :
   ```
   [42, 7, 93, 15, 68, 21, 84, 3, 57, 99]
   ```

2. Demande 7 températures (une par jour). Stocke-les dans un tableau. Affiche la température moyenne et combien de jours étaient au-dessus de la moyenne.

3. Crée un tableau de prénoms. Demande un prénom à l'utilisateur et compte combien de fois il apparaît dans le tableau.

4. Demande 5 nombres. Crée un nouveau tableau contenant les mêmes nombres mais dans l'ordre inverse (sans méthode reverse).

5. Crée deux tableaux de nombres. Fusionne-les dans un troisième tableau contenant tous les éléments des deux premiers.

6. Demande 10 nombres. Crée deux tableaux : un avec les nombres positifs, un avec les négatifs. Affiche les deux tableaux.

7. Crée un tableau de mots. Affiche uniquement les mots qui contiennent plus de 5 lettres.

8. Demande des nombres jusqu'à ce que l'utilisateur tape 0. Stocke-les dans un tableau. Supprime tous les doublons et affiche le tableau final (parcours manuel, pas de Set).

9. Crée un tableau de 20 nombres aléatoires entre 1 et 10. Compte combien de fois chaque nombre apparaît et affiche les résultats.
   Exemple de sortie :
   ```
   1: 2 fois
   2: 3 fois
   3: 1 fois
   ...
   ```

10. Tri à bulles : crée un tableau de nombres dans le désordre. Trie-le du plus petit au plus grand en comparant et échangeant les éléments adjacents. Affiche le tableau trié.

---

# **Série 8 — Chaînes de caractères avancées**

## Notions à comprendre

### Méthodes de manipulation
```javascript
texte.substring(debut, fin)   // Extrait de debut à fin (exclus)
texte.slice(debut, fin)       // Identique à substring
texte.indexOf(recherche)      // Position de la première occurrence (-1 si absent)
texte.replace(ancien, nouveau) // Remplace première occurrence
texte.trim()                  // Supprime espaces début/fin
```

### Méthodes de test
```javascript
texte.includes(sous_texte)    // true si contient
texte.startsWith(debut)       // true si commence par
texte.endsWith(fin)           // true si termine par
```

### Casse
```javascript
texte.toLowerCase()           // tout en minuscules
texte.toUpperCase()           // TOUT EN MAJUSCULES
```

### Caractères individuels
```javascript
texte.charAt(index)           // Caractère à la position (équivalent à texte[index])
texte.charCodeAt(index)       // Code ASCII du caractère
```

### Parcours et construction
```javascript
let resultat = "";
for (let i = 0; i < texte.length; i++) {
    if (texte[i] !== " ") {
        resultat += texte[i];
    }
}
// resultat contient texte sans espaces
```

---

**Objectif :** maîtriser la manipulation complexe de textes.

1. Demande une phrase. Affiche le nombre de mots, de lettres (sans espaces) et d'espaces.
   Exemple : "Hello world" → 2 mots, 10 lettres, 1 espace

2. Demande un email. Vérifie qu'il contient un "@" et au moins un "." après le "@". Affiche "Valide" ou "Invalide".

3. Demande une phrase. Remplace tous les espaces par des tirets "-" (parcours caractère par caractère, pas de méthode replace).

4. Demande un mot. Vérifie s'il est un palindrome (identique à l'envers). Affiche "Palindrome" ou "Pas palindrome".
   Exemples : "kayak", "radar", "level"

5. Demande une phrase. Affiche chaque mot avec sa première lettre en majuscule (titre de livre).
   Exemple : "hello world" → "Hello World"

6. Demande un texte et un mot à chercher. Compte combien de fois le mot apparaît dans le texte (insensible à la casse).

7. Demande un nom de fichier. Extrait et affiche l'extension (ce qui suit le dernier point).
   Exemple : "document.pdf" → "pdf"

8. Demande une phrase. Crée un acronyme avec la première lettre de chaque mot en majuscule.
   Exemple : "Base de données" → "BDD"

9. Demande un texte. Supprime toutes les voyelles et affiche le résultat.
   Exemple : "Bonjour" → "Bnjr"

10. Demande deux mots. Vérifie s'ils sont des anagrammes (mêmes lettres dans un ordre différent). Affiche "Anagrammes" ou "Pas anagrammes".
    Exemples : "chien" et "niche", "marie" et "aimer"
