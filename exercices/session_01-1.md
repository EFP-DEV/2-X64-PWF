# Activité 1 — Une action visible, une valeur invisible

[Question de départ](../session_01.md#1-une-action-visible-une-valeur-invisible) · [Sommaire du cours](../session_01.md#sommaire)

Les emplacements `___` sont à compléter avant d’exécuter les blocs concernés.

**Point de départ :** la page de Sullivan dans son état initial. Si vous l’avez déjà modifiée, rechargez-la. Chaque bloc **À saisir** est un essai de console ; les blocs **À observer** ne sont pas à recopier.

## Une page apparemment vide

<a href="./session_01/let-there-be-light.html" target="_blank" rel="noopener noreferrer">Ouvrez le document HTML dans un nouvel onglet, en vue scindée</a>. La page paraît vide : vous ne voyez qu'une surface noire. Cela suffit-il à conclure qu'elle ne contient rien ?

Cliquez sur la page et appliquez **Ctrl + A**. Que révèle la sélection ?

Un meilleur outil existe, l'inspecteur web:

1. Ouvrez les outils de développement avec **F12** ou **Ctrl + Shift + I** ou un clic droit puis **Inspecter**. 
2. Choisissez **Éléments** ou **Inspecteur**, selon le navigateur. Dépliez le contenu de `body`. 
3. Retrouvez le texte de Louis H. Sullivan, ses trois paragraphes et son attribution. 

Quels éléments HTML les structurent ?

Sélectionnez `body` et observez ses règles CSS. Repérez `color` et `background-color` : le texte est noir et le fond aussi.

Dans les règles affichées par l'inspecteur, remplacez la valeur de `background-color` par `white`. Observez immédiatement la page.

Le texte apparaît-il ? Avez-vous ajouté du contenu ou changé sa présentation ?

## Quelqu'un répond ?

Gardez ce document ouvert et passez à la **Console**. Nous allons retrouver cette possibilité de changement à l'aide de JavaScript.

Chaque bloc **À saisir** correspond à un essai séparé. Validez-le avec Entrée, puis observez la réponse avant de poursuivre. Les encadrés **À observer** montrent des réponses ou des éléments à retrouver ; ne les saisissez pas. La présentation exacte des réponses peut varier selon le navigateur.

Commencez par un mot qui vous vient naturellement.

**À saisir**

```js
hello
```

**À observer**

> `ReferenceError: hello is not defined`

Essayons autrement.

**À saisir**

```js
salut
```

Et avec votre prénom ? Avec `hi` ou `coucou`? Les réponses changent-elles vraiment ? Repérez ce qui reste identique et ce qui reprend le mot saisi. Vous pouvez continuer après une erreur.

Essayons une phrase.

**À saisir**

```js
is this a trap ?
```

**À observer**

> `SyntaxError: Unexpected token 'this'`

Cette fois, le message est différent. Il désigne `this`. Essayons le tout seul.

**À saisir**

```js
this
```

**À observer**

> `Window { … }`

Dans cette console, quelque chose est accessible avec `this`. Dépliez la réponse. Quels mots reconnaissez-vous ? Les valeurs affichées à côté de ces mots ont-elles toutes la même apparence ?

## Suivre les mots qui apparaissent

La réponse commence par `Window`. Essayons ce nom, avec sa majuscule.

**À saisir**

```js
Window
```

**À observer**

> `ƒ Window() { [native code] }`

Retrouvez aussi `window`, avec une minuscule, parmi les propriétés affichées.

**À saisir**

```js
window
```

Une seule lettre a changé de casse. Obtenez-vous la même réponse ?

Dans cette liste, un autre nom attire l'attention : `alert`.

**À saisir**

```js
alert
```

**À observer**

> `ƒ alert() { [native code] }`

Des parenthèses apparaissent après son nom. Essayons de les reprendre.

**À saisir**

```js
alert()
```

Une boîte apparaît-elle ? Fermez-la, puis regardez ce que répond la console.

**À observer**

> `undefined`

Cette réponse peut donc accompagner un effet visible. Essayons de placer entre les parenthèses un élément déjà rencontré.

**À saisir**

```js
alert(this)
```

Comparez ce que montre la boîte avec ce que la console montrait pour `this`. Fermez-la, puis reprenez un de vos premiers essais.

**À saisir**

```js
alert(hello)
```

Reconnaissez-vous l'erreur ? Ajouter les parenthèses a-t-il suffi à faire reconnaître `hello` ?

## Que dit le HTML ?

Revenez au HTML de la page dans l'inspecteur. Sa première ligne contient une indication comme celle-ci.

**À observer dans le HTML**

```html
<!DOCTYPE html>
```

Quels mots reconnaissez-vous dans cette décomposition ?

```text
DOC + TYPE + HTML
```

Le navigateur donne justement accès au document de la page par le nom `document`. Revenez dans la console et commencez à le saisir. Observez les propositions pendant la frappe, puis validez.

**À saisir**

```js
document
```

## Où chercher la couleur ?

Ajoutez un point après `document`, **sans valider cette expression incomplète**, et observez les suggestions.

Vous avez repéré l'élément `body` dans l'inspecteur. Retrouvons-le.

**À saisir**

```js
document.body
```

Saisissez ensuite le début `document.body.` et regardez les suggestions. Y trouvez-vous `style` ? Complétez avant de valider.

**À saisir**

```js
document.body.style
```

Continuez avec `document.body.style.`. Parcourez les suggestions. Quels noms évoquent le fond ? La couleur ?

**À saisir**

```js
document.body.style.backgroundColor
```

Comparez `backgroundColor` avec `background-color` en CSS. Où est passé le tiret ? Quelle lettre est devenue majuscule ?

La réponse peut être `""`, une chaîne vide. Pourtant, le fond est blanc. Pour comprendre cette différence, revenez dans l'inspecteur et ajoutez directement un attribut `style` à l'élément `body` :

```html
<body style="background-color: white;">
```

Le fond reste blanc. Revenez dans la console et exécutez à nouveau exactement la même expression.

**À saisir**

```js
document.body.style.backgroundColor
```

**À observer**

> `"white"`

## Affecter une valeur

Nous pouvons maintenant demander au navigateur de changer le fond depuis la console.

**À saisir**

```js
document.body.style.backgroundColor = "black";
```

Le fond redevient noir. Le texte noir disparaît à nouveau.

**À saisir**

```js
document.body.style.backgroundColor = "white";
```

Le texte réapparaît-il ? Identifiez la propriété modifiée et la valeur placée à droite de `=`.

Revenez dans l'inspecteur : dans l'attribut `style` de `body`, retrouvez la valeur que JavaScript vient de modifier.

## À vous de compléter

Remettez le fond en noir, puis rendez le texte blanc. Complétez avant d’exécuter ; la propriété du texte a déjà été rencontrée dans le CSS.

```js
document.body.style.backgroundColor = "___";
document.body.style.___ = "white";
```

Expliquez ce qui change dans l’attribut `style` et ce que la lecture de `.style` vous a permis d’observer. `style` et `backgroundColor` sont-ils des éléments HTML ? Gardez la page ouverte, texte blanc sur fond noir, pour l’activité 2.

---

[Retour au bilan 1 dans le cours](../session_01.md#bilan-1) · [Après le bilan : activité 2](./session_01-2.md)
