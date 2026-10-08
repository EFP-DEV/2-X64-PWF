# Débogage — Expliquer et corriger une erreur

## 1. Préparer une étiquette

<a id="preparation"></a>

### Préparer le dossier de travail

1. Dans le dossier des projets du cours, on crée `labo-renforcement`, puis les sous-dossiers `debogage` et `creation`. Si ces dossiers existent déjà, on les réutilise en conservant leur contenu.
2. On récupère séparément [renforcement.html](./labo-renforcement/renforcement.html) et [renforcement-console.css](./labo-renforcement/renforcement-console.css), seulement s’ils manquent. Pour télécharger un fichier, on ouvre son lien sur GitHub, puis on utilise l’icône **Download raw file** en haut du contenu. On conserve son nom et son extension, puis on le place à la racine de `labo-renforcement`.
3. On récupère [01-preparer-une-etiquette.js](./labo-renforcement/debogage/01-preparer-une-etiquette.js) de la même façon et on le place dans `labo-renforcement/debogage`, seulement s’il manque. Les autres fichiers JavaScript seront récupérés au moment de choisir leurs exercices.
4. Dans VS Code, **File → Open Folder…** ouvre le dossier `labo-renforcement`. Pour commencer par le premier exercice, on vérifie que l’unique balise `script` de `renforcement.html` indique `src="debogage/01-preparer-une-etiquette.js"`, puis on enregistre le HTML.
5. On ouvre directement le fichier local `renforcement.html` dans le navigateur, par un double-clic sur le fichier. Aucun serveur n’est nécessaire.
6. **F12 → Console** ouvre la console. On la vide, puis on recharge la page pour observer le premier programme, qui contient une erreur à corriger si le fichier n’a pas encore été travaillé.

Dans un nouveau dossier, les fichiers sont disposés ainsi après cette préparation :

```text
labo-renforcement/
├── renforcement.html
├── renforcement-console.css
├── debogage/
│   └── 01-preparer-une-etiquette.js
└── creation/      vide au départ
```

Comme pour l’horloge et Pixelator, l’attribut `src` de la balise `script` désigne le fichier JavaScript à charger. Le chemin part du dossier où se trouve `renforcement.html` : le nom du sous-dossier précède celui du fichier. La page fournie charge déjà le premier exercice de débogage.

Les onze programmes contiennent des défauts volontaires. On charge un seul fichier à la fois en remplaçant la ligne `script` de `renforcement.html` par celle de l’exercice, sans ajouter une deuxième balise `script`. Le HTML et le CSS sont fournis ; les corrections portent sur le JavaScript.

Seul le `src` du HTML sélectionne le programme actif : ouvrir un autre fichier dans l’éditeur ne le charge pas dans le navigateur. On enregistre le HTML après chaque changement de `src`, puis on recharge le même onglet `renforcement.html`. La page garde le même aspect ; les résultats et les messages d’erreur apparaissent dans la console.

On conserve le dossier de travail pour la suite. Pour changer d’exercice, on récupère son fichier JavaScript seulement s’il manque, puis on modifie le `src` ; on ne remplace pas les fichiers déjà corrigés par une nouvelle copie des fichiers de départ. Si un fichier ne se charge pas, on vérifie sa présence dans le sous-dossier indiqué, le chemin du `src`, l’enregistrement du HTML et l’onglet rechargé.

### Observer, expliquer et corriger

1. On lit le résultat attendu et les valeurs initiales dans le fichier JavaScript indiqué. On prévoit le résultat du programme fourni avant de le modifier.
2. On enregistre le HTML après le changement de `src`, on vide la console, puis on recharge le même onglet `renforcement.html`.
3. On compare le résultat ou le message d’erreur à la prévision. On formule une hypothèse précise sur la cause et on repère les instructions concernées.
4. On modifie uniquement le fichier JavaScript de l’exercice, on l’enregistre, on vide la console et on recharge la page.
5. On vérifie le résultat annoncé, puis chaque variation indiquée. Chaque essai repart des valeurs initiales, avec seulement la modification demandée.
6. On explique ce qui causait l’écart et pourquoi la correction produit le résultat attendu. On rétablit les valeurs initiales avant de passer au programme suivant.

Une erreur dans un exercice ne bloque pas les autres : la page charge seulement le fichier désigné par son `src`. Les corrections restent dans les fichiers enregistrés, même après le passage à un autre programme.

### Examiner le premier programme

**Fichier à corriger :** [debogage/01-preparer-une-etiquette.js](./labo-renforcement/debogage/01-preparer-une-etiquette.js).

**Programme à charger dans `renforcement.html` :**

```html
<script src="debogage/01-preparer-une-etiquette.js"></script>
```

**Résultat attendu après correction et cas de vérification :**

Résultat attendu : « Cahier - Namur », puis « Étiquette préparée ».

On relève le type du message d’erreur, le fichier et l’emplacement indiqués par la console. On compare aussi la présence des deux sorties au résultat annoncé.

On enregistre la correction, on vide la console et on recharge `renforcement.html`. On vérifie les deux lignes attendues et on explique la cause de l’erreur ainsi que l’effet de la correction.

## 2. Annoncer un rendez-vous

**Fichier à corriger :** [debogage/02-annoncer-un-rendez-vous.js](./labo-renforcement/debogage/02-annoncer-un-rendez-vous.js).

Si ce fichier manque, on le récupère depuis son lien avec **Download raw file**, puis on le place dans `labo-renforcement/debogage` en conservant son nom et son extension. Un fichier déjà présent est conservé.

**Programme à charger dans `renforcement.html` :**

```html
<script src="debogage/02-annoncer-un-rendez-vous.js"></script>
```

**Résultat attendu après correction et cas de vérification :**

Résultat attendu : « Lieu : Bibliothèque », puis
« Rendez-vous : Vendredi à 10:00 ».

On relève le message de la console et le nom qu’il mentionne. Après la correction, on vérifie les deux lignes de sortie, pas seulement la première.

On enregistre la correction, on vide la console et on recharge `renforcement.html`. On vérifie les deux lignes attendues et on explique la cause de l’erreur ainsi que l’effet de la correction.

## 3. Décrire un trajet

**Fichier à corriger :** [debogage/03-decrire-un-trajet.js](./labo-renforcement/debogage/03-decrire-un-trajet.js).

Si ce fichier manque, on le récupère depuis son lien avec **Download raw file**, puis on le place dans `labo-renforcement/debogage` en conservant son nom et son extension. Un fichier déjà présent est conservé.

**Programme à charger dans `renforcement.html` :**

```html
<script src="debogage/03-decrire-un-trajet.js"></script>
```

**Résultat attendu après correction et cas de vérification :**

Résultat attendu : « Trajet », « Départ : Namur », « Arrivée : Mons ».
Avec villeArrivee = "Liège", seule la ligne d’arrivée change.

On compare séparément le départ et l’arrivée avec les valeurs de départ. La variation de villeArrivee permet de vérifier quelle information chaque ligne utilise.

On enregistre la correction, on vide la console et on recharge `renforcement.html`. On réalise ensuite les variations indiquées en enregistrant et en rechargeant à chaque essai, puis on rétablit les valeurs initiales. La correction s’accompagne d’une explication fondée sur les observations.

## 4. Afficher deux destinations

**Fichier à corriger :** [debogage/04-afficher-deux-destinations.js](./labo-renforcement/debogage/04-afficher-deux-destinations.js).

Si ce fichier manque, on le récupère depuis son lien avec **Download raw file**, puis on le place dans `labo-renforcement/debogage` en conservant son nom et son extension. Un fichier déjà présent est conservé.

**Programme à charger dans `renforcement.html` :**

```html
<script src="debogage/04-afficher-deux-destinations.js"></script>
```

**Résultat attendu après correction et cas de vérification :**

Résultat attendu : « Destination : Namur », puis « Destination : Mons ».
On prévoit les affichages, puis on corrige uniquement le corps de la fonction.
Avec "Liège" à la place de "Mons" dans le deuxième appel,
seule la deuxième ligne devient « Destination : Liège ».

Avant d’exécuter, on note ce que chaque appel devrait afficher avec le corps de fonction fourni. On compare les deux lignes observées aux deux destinations attendues. La correction porte uniquement sur le corps de `afficherDestination` : la fonction doit rester utilisée par les deux appels.

<details>
<summary><strong>Indice — un texte ou une valeur reçue</strong></summary>

Les guillemets délimitent un texte littéral. Un nom de variable utilisé sans guillemets permet de lire la valeur conservée sous ce nom. À chaque appel, le paramètre reçoit l’argument fourni entre les parenthèses.

</details>

On explique quelle valeur le paramètre reçoit lors du premier appel, puis lors du second. Le nom `destination` aide à lire le programme ; il ne choisit pas lui-même la ville transmise.

On enregistre la correction, on vide la console et on recharge `renforcement.html`. On réalise ensuite les variations indiquées en enregistrant et en rechargeant à chaque essai, puis on rétablit les valeurs initiales. La correction s’accompagne d’une explication fondée sur les observations.

## 5. Ajouter des tickets au stock

**Fichier à corriger :** [debogage/05-ajouter-des-tickets-au-stock.js](./labo-renforcement/debogage/05-ajouter-des-tickets-au-stock.js).

Si ce fichier manque, on le récupère depuis son lien avec **Download raw file**, puis on le place dans `labo-renforcement/debogage` en conservant son nom et son extension. Un fichier déjà présent est conservé.

**Programme à charger dans `renforcement.html` :**

```html
<script src="debogage/05-ajouter-des-tickets-au-stock.js"></script>
```

**Résultat attendu après correction et cas de vérification :**

Résultat attendu : « Avant : 3 », « Ajout : 2 », « Après : 5 ».
Avec un stock initial de 1 et un ajout de 2, le stock final vaut 3.

On rapproche les valeurs initiales du calcul et de son affichage. Les deux cas indiqués permettent de vérifier que le programme effectue bien une addition numérique.

On enregistre la correction, on vide la console et on recharge `renforcement.html`. On réalise ensuite les variations indiquées en enregistrant et en rechargeant à chaque essai, puis on rétablit les valeurs initiales. La correction s’accompagne d’une explication fondée sur les observations.

## 6. Retirer un article du stock

**Fichier à corriger :** [debogage/06-retirer-un-article-du-stock.js](./labo-renforcement/debogage/06-retirer-un-article-du-stock.js).

Si ce fichier manque, on le récupère depuis son lien avec **Download raw file**, puis on le place dans `labo-renforcement/debogage` en conservant son nom et son extension. Un fichier déjà présent est conservé.

**Programme à charger dans `renforcement.html` :**

```html
<script src="debogage/06-retirer-un-article-du-stock.js"></script>
```

**Résultat attendu après correction et cas de vérification :**

Résultat attendu : « Retrait d’un article », « Avant : 3 »,
« Retiré : 1 », « Après : 2 ».
Avec stockDepart = 1 et quantiteRetiree = 1, le stock final vaut 0.

On suit la valeur de stockRestant avant et après la ligne qui doit effectuer le retrait. On distingue le calcul effectué du résultat conservé.

On enregistre la correction, on vide la console et on recharge `renforcement.html`. On réalise ensuite les variations indiquées en enregistrant et en rechargeant à chaque essai, puis on rétablit les valeurs initiales. La correction s’accompagne d’une explication fondée sur les observations.

## 7. Préparer deux étiquettes

**Fichier à corriger :** [debogage/07-preparer-deux-etiquettes.js](./labo-renforcement/debogage/07-preparer-deux-etiquettes.js).

**Programme à charger dans `renforcement.html` :**

```html
<script src="debogage/07-preparer-deux-etiquettes.js"></script>
```

**Résultat attendu après correction et cas de vérification :**

Résultat attendu :

```text
Préparation des étiquettes
---
Article : Cahier
Destination : Namur
Article : Classeur
Destination : Namur
Fin de la préparation
---
```

Avec `destinationEtiquettes = "Mons"`, les deux lignes `Destination`
affichent `Mons`.

On enregistre la correction, on vide la console et on recharge `renforcement.html`. On réalise ensuite les variations indiquées en enregistrant et en rechargeant à chaque essai, puis on rétablit les valeurs initiales. La correction s’accompagne d’une explication fondée sur les observations.

## 8. Vérifier un code d’accès

**Fichier à corriger :** [debogage/08-verifier-un-code-dacces.js](./labo-renforcement/debogage/08-verifier-un-code-dacces.js).

Si ce fichier manque, on le récupère depuis son lien avec **Download raw file**, puis on le place dans `labo-renforcement/debogage` en conservant son nom et son extension. Un fichier déjà présent est conservé.

**Programme à charger dans `renforcement.html` :**

```html
<script src="debogage/08-verifier-un-code-dacces.js"></script>
```

**Résultat attendu après correction et cas de vérification :**

Seul le code ABC autorise l’accès.
Résultat attendu avec XYZ : « Autorisation : refusée ».
Le code saisi reste XYZ après la vérification.
Avec codeSaisi = "ABC", l’accès est accordé ; avec "", il est refusé.

On observe le message d’autorisation et la valeur du code après la vérification. La décision doit dépendre du code saisi, sans remplacer ce code.

On enregistre la correction, on vide la console et on recharge `renforcement.html`. On réalise ensuite les variations indiquées en enregistrant et en rechargeant à chaque essai, puis on rétablit les valeurs initiales. La correction s’accompagne d’une explication fondée sur les observations.

## 9. Préparer une livraison

**Fichier à corriger :** [debogage/09-preparer-une-livraison.js](./labo-renforcement/debogage/09-preparer-une-livraison.js).

Si ce fichier manque, on le récupère depuis son lien avec **Download raw file**, puis on le place dans `labo-renforcement/debogage` en conservant son nom et son extension. Un fichier déjà présent est conservé.

**Programme à charger dans `renforcement.html` :**

```html
<script src="debogage/09-preparer-une-livraison.js"></script>
```

**Résultat attendu après correction et cas de vérification :**

Les deux modes possibles sont « retrait » et « livraison ».
Résultat attendu avec retrait : « Statut : À récupérer ».
Avec modeLivraison = "livraison", le statut devient « À livrer ».
L’article et le lieu restent identiques dans les deux cas.

On réalise les essais avec les deux modes autorisés. On compare le statut obtenu à la règle, tout en vérifiant que l’article et le lieu restent identiques.

On enregistre la correction, on vide la console et on recharge `renforcement.html`. On réalise ensuite les variations indiquées en enregistrant et en rechargeant à chaque essai, puis on rétablit les valeurs initiales. La correction s’accompagne d’une explication fondée sur les observations.

## 10. Confirmer une réservation

**Fichier à corriger :** [debogage/10-confirmer-une-reservation.js](./labo-renforcement/debogage/10-confirmer-une-reservation.js).

Si ce fichier manque, on le récupère depuis son lien avec **Download raw file**, puis on le place dans `labo-renforcement/debogage` en conservant son nom et son extension. Un fichier déjà présent est conservé.

**Programme à charger dans `renforcement.html` :**

```html
<script src="debogage/10-confirmer-une-reservation.js"></script>
```

**Résultat attendu après correction et cas de vérification :**

Résultat attendu avec oui : « Réservation : confirmée » et
« État conservé : confirmée » décrivent le même état.
Avec confirmationReservation = "non", les deux lignes indiquent
« en attente ». Le nom, le lieu et la confirmation restent inchangés.

On suit l’état au moment de chaque affichage. Les deux lignes concernant la réservation doivent décrire le même état, pour chacune des confirmations indiquées.

On enregistre la correction, on vide la console et on recharge `renforcement.html`. On réalise ensuite les variations indiquées en enregistrant et en rechargeant à chaque essai, puis on rétablit les valeurs initiales. La correction s’accompagne d’une explication fondée sur les observations.

## 11. Autoriser une entrée

**Fichier à corriger :** [debogage/11-autoriser-une-entree.js](./labo-renforcement/debogage/11-autoriser-une-entree.js).

Si ce fichier manque, on le récupère depuis son lien avec **Download raw file**, puis on le place dans `labo-renforcement/debogage` en conservant son nom et son extension. Un fichier déjà présent est conservé.

**Programme à charger dans `renforcement.html` :**

```html
<script src="debogage/11-autoriser-une-entree.js"></script>
```

**Résultat attendu après correction et cas de vérification :**

Une personne entre seulement si une place est libre.
Résultat attendu avec 0 place : entrée refusée, 0 place restante,
0 personne admise.
Avec placesLibres = 1 : entrée autorisée, 0 place restante,
1 personne admise.
Avec placesLibres = 3 : entrée autorisée, 2 places restantes,
1 personne admise.

On observe ensemble la décision, les places restantes et les personnes admises. Le cas sans place permet de vérifier que le bloc d’admission reste soumis à sa condition.

On enregistre la correction, on vide la console et on recharge `renforcement.html`. On réalise ensuite les variations indiquées en enregistrant et en rechargeant à chaque essai, puis on rétablit les valeurs initiales. La correction s’accompagne d’une explication fondée sur les observations.

[Suite — création d’un badge](./session_03-creation-badge.md) · [Lecture](./session_03-lecture-code.md) · [Séance 3](../session_03.md)
