# Création 3 — Classer une valeur

Une valeur peut déterminer un groupe : l’âge d’une personne, la durée d’un trajet ou le nombre d’utilisations d’un service.

On écrit un programme qui examine cette valeur avec des conditions, puis affiche **un seul groupe** dans la console. Le HTML et le CSS sont fournis ; le travail porte sur JavaScript.

## Préparer le fichier actif

On reprend le dossier `labo-renforcement`. Si le dossier manque, la [préparation du dossier](./session_03-debogage.md#preparation) explique comment le créer et récupérer les fichiers individuellement.

Si [03-classer-une-valeur.js](./labo-renforcement/creation/03-classer-une-valeur.js) manque dans le sous-dossier `creation`, on ouvre son lien sur GitHub et on utilise **Download raw file**. On place le fichier dans `labo-renforcement/creation` en conservant son nom et son extension. Un fichier déjà présent est conservé.

Le HTML fourni est [renforcement.html](./labo-renforcement/renforcement.html) ; il charge la feuille de style [renforcement-console.css](./labo-renforcement/renforcement-console.css). Dans VS Code, on remplace l’unique balise `script` du HTML par :

```html
<script src="creation/03-classer-une-valeur.js"></script>
```

On enregistre le HTML et on ouvre le fichier local `creation/03-classer-une-valeur.js` dans l’éditeur. Le fichier contient `let minutesDisponibles = 15;`, pour l’exemple des minutes disponibles. Les conditions, la variable du groupe et l’affichage restent à écrire. Pour une autre situation, on adapte cette déclaration à la valeur et à l’unité choisies.

On garde `renforcement.html` ouvert dans le navigateur, avec sa console. On vide la console et on recharge la page : le fichier de départ ne produit encore aucun affichage. Le HTML et le CSS restent fournis ; seul le JavaScript de ce troisième exercice est à compléter.

## Construire son propre exercice

1. On choisit une situation et une valeur numérique **entière**, avec son unité : années, minutes, personnes…
2. On donne un nom à chacun des **quatre groupes**.
3. On choisit la première valeur acceptée, supérieure à zéro.
4. On fixe les limites des groupes, du plus petit au plus grand.
5. On précise le message à afficher en dessous de la première limite.

Les groupes se suivent comme les cases d’une ligne :

```text
Premier groupe | Deuxième groupe | Troisième groupe | Quatrième groupe
```

Si un groupe termine à **9**, le suivant commence à **10** :

- Commencer à **11** laisserait la valeur **10** sans groupe.
- Commencer à **9** placerait la valeur **9** dans deux groupes.

Chaque valeur acceptée doit donc trouver **une seule place**.

## Exemple prêt à reprendre — Disponibilité pour un entretien

Cet exemple peut être utilisé tel quel.

On connaît le nombre de minutes disponibles pour un entretien. Le programme détermine le format correspondant :

| Minutes disponibles | Groupe à afficher |
|---|---|
| De 5 à 9 | Bref |
| De 10 à 19 | Court |
| De 20 à 39 | Standard |
| À partir de 40 | Approfondi |

En dessous de **5 minutes**, le programme affiche **« Durée insuffisante »**.

## Écrire et vérifier le programme

On complète `creation/03-classer-une-valeur.js`. La valeur de départ reste dans une variable numérique. Les conditions attribuent le résultat à une variable `groupe`, puis `console.log(groupe)` affiche ce résultat une seule fois, après les décisions.

Pour l’exemple, on conserve la déclaration fournie `let minutesDisponibles = 15;` sans la recopier : le résultat attendu est **« Court »**.

<details>
<summary><strong>Indice — organiser plusieurs décisions</strong></summary>

L’horloge utilisait déjà un `if` à l’intérieur d’un autre bloc. Ici, un `if` / `else` sépare une première possibilité des autres. Dans le bloc `else`, un nouveau `if` / `else` peut examiner la possibilité suivante.

On commence par la limite la plus basse, puis on suit les limites dans leur ordre. Chaque décision s’appuie sur les cas déjà écartés. Les conditions attribuent le texte à `groupe` ; son affichage reste placé après l’ensemble des décisions.

</details>

On change ensuite uniquement la valeur de départ dans le JavaScript. Pour chaque essai, on enregistre le fichier, on vide la console et on recharge `renforcement.html`. Le programme repart de la valeur écrite dans le fichier :

| Valeur | Résultat attendu |
|---:|---|
| 4 | Durée insuffisante |
| 5 | Bref |
| 9 | Bref |
| 10 | Court |
| 19 | Court |
| 20 | Standard |
| 39 | Standard |
| 40 | Approfondi |

Pour un exercice personnel, on vérifie de la même manière la première limite, la dernière valeur de chaque groupe et la première valeur du suivant.

[Exercice précédent — Vérifier un stock](./session_03-creation-stock.md)
