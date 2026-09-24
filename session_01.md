# Session +1

## 1. Exploration

<a id="1-une-action-visible-une-valeur-invisible"></a>
<a id="bilan-1"></a>

La page paraît vide. On utilise l’inspecteur pour retrouver son contenu et rendre le texte visible, puis on reproduit ce changement avec JavaScript.

[Exploration — la page, l’inspecteur et la console](./exercices/session_01-exploration.md)

## 2. Couleurs

<a id="2-du-nom-de-couleur-à-trois-quantités"></a>
<a id="bilan-2"></a>

Le CSS contient `white`, `black` et `#000`. On applique plusieurs écritures d’une même couleur, puis on fait varier ses composantes rouge, verte et bleue.

[Fiche couleurs — du nom aux trois canaux RGB](./exercices/session_01-couleurs.md#rgb)

<a id="3-255-et-ff--une-même-quantité-deux-écritures"></a>
<a id="bilan-3"></a>

On décompose `255` et `FF` selon le poids de leurs positions. Les deux calculs donnent la même quantité, avec des symboles différents.

[Fiche couleurs — comprendre l’hexadécimal](./exercices/session_01-couleurs.md#hexadecimal)

<a id="4-lire-une-couleur-css-en-hexadécimal"></a>
<a id="bilan-4"></a>

On sépare `#336699` en trois paires pour retrouver les quantités RGB. On développe ensuite les écritures courtes en répétant chacun de leurs trois chiffres.

[Fiche couleurs — lire et modifier une couleur CSS](./exercices/session_01-couleurs.md#couleurs-css)

## 3. Numération

<a id="5-binaire--deux-symboles-les-mêmes-principes--prolongement"></a>
<a id="garder-les-poids-des-positions-actives"></a>
<a id="retrouver-le-lien-avec-les-couleurs"></a>
<a id="bilan-5"></a>

On représente les mêmes valeurs avec les deux symboles `0` et `1`. Ce prolongement facultatif se fait dans la fiche de numération ; il n’est pas nécessaire pour construire l’horloge.

[Fiche numération — binaire, prolongement facultatif](./exercices/session_01-numeration.md#binaire)

<a id="6-monter-jusquà-la-base-20"></a>
<a id="une-convention-devenue-étrangère"></a>
<a id="des-traces-de-la-base-20-en-français"></a>
<a id="une-convention-vraiment-étrangère-"></a>
<a id="bilan-6"></a>

Une convention inconnue paraît difficile à lire. On va retrouver une quantité familière à partir d’autres symboles et d’autres poids de position.

[Fiche numération — base 20](./exercices/session_01-numeration.md#base-20)

<a id="7-un-système-encore-plus-étrange-"></a>
<a id="7-compter-avec-soixante-valeurs-par-position"></a>
<a id="un-comptage-inhabituel"></a>
<a id="ajouter-ce-qui-manque"></a>
<a id="bilan-7"></a>

On suit les reports dans une écriture composée de groupes allant de 0 à 59.

[Fiche numération — base 60](./exercices/session_01-numeration.md#base-60)

<a id="pause"></a>

## ⏸️ Interlude — pause

La reprise commence avec la [fiche horloge](./exercices/session_01-horloge.md) : représenter une heure par deux valeurs nommées.

## 4. Horloge

<a id="8-faire-avancer-le-temps"></a>
<a id="bilan-8"></a>

`13:59` est une représentation du temps composée de deux champs. On nomme leurs valeurs avec deux variables, puis on les assemble avec le séparateur `:`.

[Fiche horloge — nommer une heure dans la console](./exercices/session_01-horloge.md#variables)

<a id="9-de-la-console-aux-fichiers"></a>
<a id="bilan-9"></a>

On enregistre les instructions dans un fichier, puis on compare un calcul seul à une affectation qui conserve son résultat.

[Fiche horloge — conserver le programme dans des fichiers](./exercices/session_01-horloge.md#fichiers)

<a id="10-exprimer-les-règles-avec-if"></a>
<a id="bilan-10"></a>

On ajoute un bloc `if` pour appliquer le report lorsque les minutes atteignent 60, puis un second pour préparer leur affichage sur deux chiffres.

[Fiche horloge — corriger les minutes et leur affichage](./exercices/session_01-horloge.md#conditions)

## Fin du cours

**Le défi de clôture : on règle les heures à `23`, les minutes à `59`, puis on corrige le programme.**

[Défi et cas de vérification dans la fiche horloge](./exercices/session_01-horloge.md#defi-minuit)

Le résultat attendu après une minute est `0:00`. On enregistre le fichier, puis on recharge la page pour comparer la sortie console à cet objectif et corriger le programme. On garde le fichier et les essais pour la reprise.

L’affectation a permis de conserver un calcul, le `if` de reporter les minutes vers les heures et une variable distincte d’afficher `0` sous la forme `"00"`. Le cas de minuit constitue la recherche finale de la séance.

Le prochain cours alternera lui aussi explications, manipulations et recherches en groupes. Pendant la séance 2, on déposera l’ampoule terminée dans un dépôt **public sur GitHub**, puis on remettra son adresse dans l’activité de la séance 2 sur **Moodle**, avant la pause. La création d’un compte GitHub et l’accès au cours sur Moodle sont donc des prérequis pour cette remise. Aucun dépôt n’est demandé pour cette séance.
