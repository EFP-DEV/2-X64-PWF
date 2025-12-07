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

**Objectif :** maîtriser les opérateurs logiques, le modulo et la validation d'entrées.

**Nouveaux concepts :**
* **Opérateur modulo `%`** : reste de la division (ex: `7 % 3` donne `1`)
* **Opérateurs logiques** : `&&` (ET), `||` (OU), `!` (NON)
* **Validation** : vérifier que l'utilisateur a bien saisi quelque chose

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

4. Demande un nombre. Avec deux boucles, affiche tous ses diviseurs ET indique s'il est premier (n'a que 1 et lui-même comme diviseurs).

5. Jeu de devinette amélioré : nombre secret entre 1 et 100, limite de 7 essais. Compte les tentatives et affiche "Gagné en X essais" ou "Perdu, c'était Y".

6. Demande une phrase. Compte et affiche séparément : nombre de voyelles, nombre de consonnes, nombre d'espaces.

7. Validation en boucle : redemande un âge tant qu'il n'est pas entre 0 et 150. Puis redemande un prénom tant qu'il est vide. Affiche ensuite "Bonjour [prénom], tu as [âge] ans".

8. Demande un mot. Avec une boucle, construit et affiche le mot à l'envers (sans utiliser de méthode reverse).

9. Mini calculatrice : redemande deux nombres et une opération (+, -, *, /) en boucle. Effectue le calcul et affiche le résultat. Continue jusqu'à ce que l'utilisateur tape "stop" comme opération.

10. Demande un nombre. Affiche tous les nombres de 1 à ce nombre, mais remplace : les multiples de 3 par "Fizz", les multiples de 5 par "Buzz", les multiples des deux par "FizzBuzz".


---

# **Série 7 — Tableaux et manipulation de données**

**Objectif :** stocker et manipuler des collections de données avec les tableaux.

**Nouveaux concepts :**
* **Tableau** : `let nombres = [1, 2, 3];`
* **Accès** : `nombres[0]` donne le premier élément
* **Longueur** : `nombres.length` donne le nombre d'éléments
* **Ajout** : `nombres.push(4)` ajoute à la fin
* **Parcours** : boucle `for` avec index ou `while`

1. Crée un tableau avec 5 prénoms. Affiche chaque prénom avec son index (position).
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

**Objectif :** manipulations complexes de tableaux et premiers algorithmes.

1. Crée un tableau de 10 nombres aléatoires entre 1 et 100 (utilise `Math.floor(Math.random() * 100) + 1`). Affiche le tableau.
2. Demande 7 températures (une par jour). Stocke-les dans un tableau. Affiche la température moyenne et combien de jours étaient au-dessus de la moyenne.
3. Crée un tableau de prénoms. Demande un prénom à l'utilisateur et compte combien de fois il apparaît dans le tableau.
4. Demande 5 nombres. Crée un nouveau tableau contenant les mêmes nombres mais dans l'ordre inverse (sans méthode reverse).
5. Crée deux tableaux de nombres. Fusionne-les dans un troisième tableau contenant tous les éléments des deux premiers.
6. Demande 10 nombres. Crée deux tableaux : un avec les nombres positifs, un avec les négatifs. Affiche les deux tableaux.
7. Crée un tableau de mots. Affiche uniquement les mots qui contiennent plus de 5 lettres.
8. Demande des nombres jusqu'à ce que l'utilisateur tape 0. Stocke-les dans un tableau. Supprime tous les doublons et affiche le tableau final (parcours manuel, pas de Set).
9. Crée un tableau de 20 nombres aléatoires entre 1 et 10. Compte combien de fois chaque nombre apparaît et affiche les résultats.
10. Tri à bulles : crée un tableau de nombres dans le désordre. Trie-le du plus petit au plus grand en comparant et échangeant les éléments adjacents. Affiche le tableau trié.


# **Série 8 — Chaînes de caractères avancées**

**Objectif :** maîtriser la manipulation complexe de textes.

**Nouveaux concepts :**
* **Méthodes** : `.substring()`, `.slice()`, `.indexOf()`, `.replace()`
* **Caractères** : `.charAt()`, `.charCodeAt()`
* **Casse** : `.toLowerCase()`, `.toUpperCase()`
* **Espaces** : `.trim()`
* **Recherche** : `.includes()`, `.startsWith()`, `.endsWith()`

1. Demande une phrase. Affiche le nombre de mots, de lettres (sans espaces) et d'espaces.
2. Demande un email. Vérifie qu'il contient un "@" et au moins un "." après le "@". Affiche "Valide" ou "Invalide".
3. Demande une phrase. Remplace tous les espaces par des tirets "-" (parcours caractère par caractère, pas de méthode replace).
4. Demande un mot. Vérifie s'il est un palindrome (identique à l'envers). Affiche "Palindrome" ou "Pas palindrome".
5. Demande une phrase. Affiche chaque mot avec sa première lettre en majuscule (titre de livre).
6. Demande un texte et un mot à chercher. Compte combien de fois le mot apparaît dans le texte (insensible à la casse).
7. Demande un nom de fichier. Extrait et affiche l'extension (ce qui suit le dernier point).
8. Demande une phrase. Crée un acronyme avec la première lettre de chaque mot en majuscule (ex: "Base de données" → "BDD").
9. Demande un texte. Supprime toutes les voyelles et affiche le résultat.
10. Demande deux mots. Vérifie s'ils sont des anagrammes (mêmes lettres dans un ordre différent). Affiche "Anagrammes" ou "Pas anagrammes".
