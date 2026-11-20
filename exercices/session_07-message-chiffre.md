# Séance 7 — Message chiffré


Pour chiffrer un message, on décale uniquement les lettres de `a` à `z` et de `A` à `Z`. On recopie tous les autres caractères tels quels. Avec un décalage d’une place, `Café 4 !` devient `Dbgé 4 !` : le `C` devient `D`, le `a` devient `b` et le `f` devient `g`.


## 1. Faire un fork de `labo-message-chiffre`

On ouvre le dépôt [EFP-DEV/labo-message-chiffre](https://github.com/EFP-DEV/labo-message-chiffre.git). On clique sur **Fork**, on choisit le compte personnel et on conserve le nom `labo-message-chiffre`. On confirme avec **Create fork**.

Sur la page du fork, on vérifie que le nom du compte personnel précède `labo-message-chiffre`. On ouvre **Code** et on copie l’adresse **HTTPS**. Dans le terminal, depuis le dossier parent des projets du cours, on saisit `git clone`, un espace, puis l’adresse copiée. On exécute la commande et on ouvre le dossier `labo-message-chiffre` dans VS Code.

À la racine du clone, on crée deux fichiers côte à côte : `message-chiffre.html` et `rotation-alphabet.js`. On copie le HTML fourni ci-dessous dans le premier fichier. Le deuxième reste vide pour le premier essai.

<details>
<summary>HTML de départ à copier dans message-chiffre.html</summary>

```html
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Message chiffré</title>
  <script src="rotation-alphabet.js" defer></script>
  <style>
    body {
      max-width: 38rem;
      margin: 2rem auto;
      padding: 0 1rem;
      font: 1rem/1.5 system-ui, sans-serif;
    }
    label { display: block; }
    input, textarea, button { font: inherit; }
    input[type="text"], textarea { box-sizing: border-box; width: 100%; }
    li { white-space: pre-wrap; overflow-wrap: anywhere; }
  </style>
</head>
<body>
  <main>
    <h1>Message chiffré</h1>

    <form id="envoi">
      <h2>Chiffrer une phrase</h2>
      <p>
        <label for="phrase">Phrase à chiffrer</label>
        <input type="text" id="phrase" value="Le zoo !">
      </p>
      <p>
        <label for="rotation">Rotation de 1 à 25</label>
        <input type="number" id="rotation" min="1" max="25" value="13">
      </p>
      <button type="button" id="chiffrer">Chiffrer</button>
      <p>
        <label for="message-chiffre">Texte chiffré à copier et à envoyer</label>
        <input type="text" id="message-chiffre" readonly>
      </p>
    </form>

    <form id="reception">
      <h2>Retrouver la rotation</h2>
      <p>
        <label for="message-recu">Texte chiffré reçu</label>
        <textarea id="message-recu" rows="2"></textarea>
      </p>
      <button type="button" id="dechiffrer">Déchiffrer</button>
      <ol id="lectures" start="0"></ol>
    </form>
  </main>
</body>
</html>
```

</details>

On enregistre les fichiers et on ouvre `message-chiffre.html` dans le navigateur. Les deux formulaires apparaissent. La balise `script` charge `rotation-alphabet.js`. C’est dans ce fichier qu’on écrira les actions des boutons.

<a id="boutons"></a>

## 2. Activer les boutons « Chiffrer » et « Déchiffrer »

On ouvre la page et la console du navigateur, puis on clique sur chacun des deux boutons. Pour l’instant, aucun des clics n’affiche de message.

Dans `rotation-alphabet.js`, on écrit deux fonctions. La fonction `chiffrer` affiche `"chiffrer"` avec `console.log`. La fonction `dechiffrer` affiche `"dechiffrer"`. On associe chaque fonction au `onclick` du bouton correspondant.

<details>
<summary>Rappel — retrouver un élément avec querySelector et lui associer une fonction avec onclick</summary>


On reprend l’exemple d’une case de Pixelator.

```js
let pixel = document.querySelector("#pixel1");
pixel.onclick = peindre;

function peindre() {
  console.log("peindre");
}
```

**Quel est l’`id` de l’élément sur lequel on veut cliquer ?**


> Dans `"#pixel1"`, le signe `#` indique une recherche par identifiant. La première ligne retrouve l’élément qui porte `id="pixel1"`. La seconde associe la fonction `peindre` au clic sur cet élément. On écrit `peindre` sans parenthèses pour transmettre la fonction. Le navigateur l’appelle au moment du clic.

Un clic sur la case affiche la chaine de caractere `peindre` dans la console. Pour adapter cet exemple, on repère dans le HTML l’identifiant de chaque bouton et on choisit la fonction à lui associer.

</details>

On enregistre le fichier et on recharge la page. Aucun des deux messages ne doit apparaître avant le premier clic. On clique sur **Chiffrer**, puis sur **Déchiffrer**, puis à nouveau sur **Chiffrer**. La console doit afficher ces trois lignes dans l’ordre des clics.

```text
chiffrer
dechiffrer
chiffrer
```

<a id="lettre"></a>

## 3. Reconnaître une lettre au clic sur « Chiffrer »

Dans `rotation-alphabet.js`, on déclare la phrase à examiner en dehors des fonctions. On enregistre le fichier, puis on recharge la page.

```js
let phrase = "La lettre est sous la porte.";
```

Au clic sur « Chiffrer », la console doit afficher `lettre` si le caractère examiné est une lettre de A à Z, majuscule ou minuscule. Pour tout autre caractère, elle doit afficher `autre caractère`.

Le premier réflexe peut être de chercher une fonction toute faite sur MDN, par exemple sous le nom `isAlphabeticalCaracter`. Ici, le travail consiste justement à formuler la règle qui permet de répondre, puis à la traduire en JavaScript.

<a id="fonction-lettre"></a>

## 4. Transformer la reconnaissance en fonction

Au clic sur « Chiffrer », on lit `lettre` ou `autre caractère` dans la console. Le code de l’étape 3 est un **prototype** : il permet d’essayer la règle sur un caractère et d’en observer le résultat.

Pour chiffrer une phrase, `chiffrer` devra prendre cette décision pour chaque caractère. La règle essayée dans le prototype peut devenir un **outil** : une fonction que `chiffrer` pourra appeler chaque fois qu’il lui faut une réponse.

Trois questions permettent de décrire cet outil avant de l’écrire.

1. Comment l’appelle-t-on dans le code ?
2. Que doit-on lui fournir ?
3. Que doit-on recevoir en retour ?

On reviendra au nom une fois les deux autres réponses précisées. Si le message contient le chiffre 4, que récupère-t-on avec `charAt()` : `'4'` ou `4` ? En JavaScript, `'4'` est une chaîne d’un caractère. Le nombre `4` représente une quantité. La fonction recevra le caractère lu dans le message.

**Qu’attend-on en retour ?** Un nombre comme `23` ? Du texte comme `'marmiton'` ? Une réponse « vrai » ou « faux » ? On imagine un appel avec `'e'`, puis un autre avec `'.'`. Pour chacun, on propose une valeur que `chiffrer` pourrait utiliser et on explique ce qu’elle signifie.

Une réponse par oui ou par non se représente en JavaScript par un booléen : `true` ou `false`. Quelle question ce booléen tranche-t-il ? On lit chaque nom proposé comme une question et on compare la réponse qu’il suggère à celle qu’on attend.

1. `isAlphabet` — Si on lui donne `e`, lui donne-t-on un alphabet ou une seule lettre ?
2. `isCaracter` — `e` est un caractère. Un point aussi. Ce nom permet-il de comprendre pourquoi le bouton les traite différemment ?
3. `isLetter` — Cette fois, le nom distingue `e` du point. Quelle réponse suggère-t-il pour la lettre grecque `α` ?
4. `isLatinLetter` — On précise l’alphabet. Que laisse prévoir ce nom pour `e` et `é`, deux lettres latines ?
5. `isUnaccentedLatinLetter` — On précise que la lettre doit être sans accent. Que se passe-t-il avec `æ`, qui est sans accent mais ne figure pas parmi les 26 lettres du chiffrement ?
6. `isASCIILetter` — Les lettres ASCII sont celles de A à Z et de a à z. Ce nom décrit les caractères retenus aujourd’hui. Si on décidait demain de chiffrer aussi les lettres accentuées, ce nom conviendrait-il encore ?

**Si la fonction renvoie `true`, que peut faire le bouton avec le caractère ?** On formule la question en partant de cette action.

<details>
<summary>Quel nom donner à la fonction une fois cette question formulée ?</summary>

« Peut-on décaler ce caractère ? » donne `canShift`. Dans ROT13, « ROT » désigne une rotation. On retient donc `canRotate` pour nommer la décision que le bouton doit prendre.

</details>

Dans `rotation-alphabet.js`, on rassemble la règle de l’étape 3 dans la fonction dont on vient de choisir le nom. Elle reçoit le caractère à examiner et renvoie sa réponse au code qui l’appelle.

Après enregistrement et rechargement, on prévoit la réponse pour `"e"`, puis pour `"é"`. On appelle la fonction dans la console avec chacun de ces arguments et on compare les valeurs renvoyées. On utilise ensuite cette réponse dans `chiffrer` pour retrouver les deux messages de l’étape 3 au clic.

<a id="parcourir-phrase"></a>

## 5. Parcourir la phrase au clic sur « Chiffrer »

### 5.1. Afficher chaque caractère

Dans `rotation-alphabet.js`, on reprend la fonction `chiffrer` et la variable `phrase`. On écrit une boucle `while` pour qu’un seul clic affiche tous les caractères dans la console, dans l’ordre, à raison d’un caractère par ligne.

Avec `La lettre est sous la porte.`, les deux premières lignes affichent `L` puis `a`. La troisième contient un espace. Les deux `t` de `lettre` occupent chacun une ligne. La dernière ligne affiche le point.

<details>
<summary>Rappel — D’où part le compteur, comment avance-t-il et quand s’arrête-t-il ?</summary>

On reprend une boucle qui compte de 1 à 10.

```js
let compteur = 1;          // Départ à 1
while (compteur <= 10) {   // On continue jusqu’à 10 inclus
  console.log(compteur);
  compteur = compteur + 1; // On avance de 1 à chaque passage
}
```

Après l’affichage de `10`, le compteur atteint `11`. Au test suivant, la condition est fausse et la boucle s’arrête.

</details>

### 5.2. Indiquer si chaque caractère peut subir la rotation

On reprend la boucle qui vient de fonctionner. À chaque passage, on affiche sur la même ligne le caractère et la réponse de `canRotate` pour ce caractère.

Avant de cliquer, on prévoit la réponse pour le `L`, le premier espace et le point final. Après le clic, on compare les trois réponses aux prévisions. La console doit toujours contenir une ligne par caractère pour ce clic.

<a id="rotate"></a>

## 6. Décaler une lettre

### 6.1. Avancer d’une place avec `shiftOne(letter)`

À l’étape 5, `canRotate` indique quelles lettres on peut décaler. Dans `rotation-alphabet.js`, on écrit maintenant `shiftOne(letter)`. Cette fonction reçoit une de ces lettres et renvoie celle qui la suit dans l’alphabet, en conservant la casse.

On enregistre et on recharge la page. Dans la console, `shiftOne("b")` doit donner `"c"` et `shiftOne("B")` doit donner `"C"`. On essaie ensuite `shiftOne("y")`, puis `shiftOne("z")`. Que se passe-t-il quand on cherche la lettre qui suit la dernière ?

### 6.2. Revenir au début avec `rotateOne(letter)`

Pour le chiffrement, un déplacement d’une place doit aussi fonctionner à la fin de l’alphabet. On écrit `rotateOne(letter)` en reprenant le travail de `shiftOne`.

Après enregistrement et rechargement, on compare les deux fonctions sur `"y"` : toutes deux doivent renvoyer `"z"`. On passe ensuite à `rotateOne("z")` : cette fois, on doit obtenir `"a"`. Quelle valeur attend-on pour `rotateOne("Z")` ?

### 6.3. Choisir le nombre de places avec `rotate(letter, rot)`

À partir de `y`, un premier appel à `rotateOne` donne `z`. Si on donne cette lettre à `rotateOne` une deuxième fois, puis qu’on recommence avec le résultat, où arrive-t-on au troisième déplacement ?

On écrit `rotate(letter, rot)` pour obtenir ce résultat en un seul appel. Le paramètre `rot` indique le nombre de déplacements d’une place. On réutilise `rotateOne` pour effectuer ces déplacements.

Après enregistrement et rechargement, on compare ces trois appels dans la console.

| Appel | Valeur attendue |
| --- | --- |
| `rotate("y", 1)` | `"z"` |
| `rotate("y", 3)` | `"b"` |
| `rotate("Y", 3)` | `"B"` |

On reprend le premier appel en changeant seulement le décalage : `rotate("y", 0)`. Combien de fois la boucle doit-elle appeler `rotateOne` ? Quelle lettre doit être renvoyée ? On vérifie la prévision dans la console.

<a id="recopie"></a>

## 7. Recopier une chaîne

### 7.1. Construire une copie

À l’étape 5, la boucle affichait un caractère par ligne. Dans `rotation-alphabet.js`, on reprend ce parcours dans `chiffrer`. Cette fois, on veut construire la copie dans une deuxième variable, un caractère à chaque passage, puis afficher cette variable après la boucle.

Pour suivre la construction, on donne à `phrase` la valeur `"gare"`. Que doit contenir la copie après le premier passage ? Après le deuxième ? Pour vérifier la prévision, on ajoute un `console.log` dans la boucle, juste après l’ajout du caractère. On enregistre, on recharge et on clique sur « Chiffrer ». On observe comment la copie grandit d’un passage au suivant.

Une fois la progression expliquée, on retire cet affichage temporaire et on conserve celui qui suit la boucle. Après rechargement, chaque clic doit afficher `gare` sur une seule ligne.

### 7.2. Recopier à l’envers

On garde `"gare"` comme point de départ. On adapte la recopie pour que la deuxième variable contienne cette fois `"erag"`. Avant de modifier la boucle, on écrit sur papier les quatre caractères dans l’ordre où ils devront apparaître dans la copie.

Après enregistrement et rechargement, on affiche la chaîne de départ et sa copie inversée au même clic. On doit pouvoir lire les deux mots : `gare` et `erag`.

### 7.3. Est-ce un palindrome ?

On remplace `"gare"` par `"radar"` et on refait l’essai. Qu’observe-t-on en lisant la chaîne de départ et sa copie inversée ? Un mot qui se lit de la même manière dans les deux sens est un **palindrome**.

On écrit la fonction `isPalindrome`. Elle reçoit un mot et renvoie un booléen. Pour ces essais, on utilise des mots en minuscules, sans espace ni ponctuation. Dans la console, on prévoit puis on vérifie les réponses de `isPalindrome("gare")`, `isPalindrome("radar")` et `isPalindrome("elle")`.

On complète ensuite `chiffrer` pour afficher au clic le verdict de `isPalindrome` pour le mot de départ. Les deux chaînes affichées permettent de vérifier ce verdict.

<a id="menage"></a>

## 8. Préparer le bouton « Chiffrer »

À la fin de l’étape 7, un clic sur « Chiffrer » affiche encore le verdict du palindrome. Dans `rotation-alphabet.js`, on retire de `chiffrer` les essais de recopie et l’appel à `isPalindrome`. On rétablit le message `chiffrer` de l’étape 2. On peut alors supprimer `isPalindrome` et les éventuelles fonctions qui servaient uniquement à ces essais.

On garde `dechiffrer`, les associations des deux boutons et les outils construits pour le chiffrement : `canRotate`, `shiftOne`, `rotateOne` et `rotate`. La boucle de `rotate` appelle `rotateOne`, qui utilise `shiftOne` pour avancer à l’intérieur de l’alphabet.

On enregistre et on recharge la page. Les boutons doivent afficher respectivement `chiffrer` et `dechiffrer`. Dans la console, on reprend les essais des étapes 4 et 6 : `canRotate("é")` doit renvoyer `false`, `rotate("y", 3)` doit donner `"b"` et `rotate("Y", 3)` doit donner `"B"`.

<a id="chiffrer"></a>

## 9. Chiffrer la phrase du formulaire

Dans le premier formulaire, on saisit `Café 4 !`, on choisit la rotation `1` et on clique sur « Chiffrer ». Pour l’instant, le clic affiche `chiffrer` dans la console. On veut obtenir `Dbgé 4 !` dans le champ « Texte chiffré à copier et à envoyer ».

### Lire les deux valeurs au clic

Dans `rotation-alphabet.js`, on reprend la fonction `chiffrer`. On remplace son message par un affichage temporaire de la phrase saisie et de la rotation choisie. On enregistre et on recharge la page. On essaie deux rotations de suite sans recharger : à chaque clic, la console doit montrer les valeurs actuelles du formulaire.

<details>
<summary>Où retrouver la valeur saisie dans un champ ?</summary>

Dans le HTML, on repère les identifiants des deux champs. Sur le champ de texte sélectionné, la propriété `.value` donne la phrase saisie. Sur le champ numérique, `.valueAsNumber` donne le décalage sous forme de nombre.

</details>

### Construire le message chiffré

On reprend le principe de la recopie de l’étape 7. La boucle de `chiffrer` construit un nouveau message dans l’ordre de la phrase. À chaque passage, quel caractère doit rejoindre la copie ? On dispose de `canRotate` et de `rotate` pour appliquer la règle du chiffrement. Une fois le message complet, on l’affiche dans le champ de résultat en renseignant sa propriété `.value`.

On enregistre et on recharge une fois. On enchaîne ensuite les essais dans le premier formulaire.

| Phrase saisie | Rotation | Résultat attendu au clic |
| --- | ---: | --- |
| `Café 4 !` | 1 | `Dbgé 4 !` |
| `Café 4 !` | 13 | `Pnsé 4 !` |
| `Zz` | 13 | `Mm` |

Un nouveau clic avec les mêmes valeurs doit redonner le même message. Comment expliquer que le troisième essai produise exactement deux caractères après le chiffrement d’une phrase plus longue ?

<a id="dechiffrer"></a>

## 10. Déchiffrer un message reçu

On colle `Dbgé 4 !` dans « Texte chiffré reçu », puis on clique sur « Déchiffrer ». Pour l’instant, seul le mot `dechiffrer` apparaît dans la console. On connaît ici le texte d’origine grâce à l’étape 9. Comment le retrouver si le partenaire envoie uniquement le message chiffré ?

### Afficher les 26 lectures possibles

Dans `rotation-alphabet.js`, on reprend la fonction `dechiffrer`, déjà associée au bouton du second formulaire. Un seul clic doit remplir la liste `lectures` avec les rotations de 0 à 25. Chaque ligne part du **même texte reçu** et applique le décalage indiqué par son numéro, toujours vers l’avant. On réutilise les outils du chiffrement. Que faut-il parcourir pour construire une lecture entière ? Que faut-il faire varier pour produire la lecture suivante ?

On enregistre, on recharge et on reprend l’essai avec `Dbgé 4 !`. À la ligne 0, on doit retrouver le texte reçu. Comment l’essai de la rotation zéro à l’étape 6.3 permet-il de le prévoir ? À la ligne 25, on doit lire `Café 4 !`. Le premier formulaire avait avancé d’une place. Pourquoi faut-il maintenant avancer de 25 places pour retrouver la phrase ?

Sans recharger, on remplace le texte reçu par `Pnsé 4 !` et on clique à nouveau. La liste doit contenir exactement 26 lectures du nouveau message. À quelle ligne retrouve-t-on cette fois `Café 4 !` ?

### Échanger une phrase en binôme

On chiffre une phrase de son choix avec une rotation secrète de 1 à 25 et on transmet uniquement le texte chiffré. Le partenaire utilise le second formulaire, repère la phrase lisible et déduit du numéro de sa ligne la rotation choisie à l’envoi. On compare la phrase et la rotation retrouvées avec celles de départ.

## Préparation du formateur

Si le dépôt de départ est encore sans commit, on l’initialise avant la séance avec un premier commit, par exemple un `README.md`, pour permettre le fork. Le HTML des deux formulaires est fourni à l’étape 1.
