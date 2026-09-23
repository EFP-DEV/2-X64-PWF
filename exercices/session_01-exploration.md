# Exploration — la page, l’inspecteur et la console

[Question de départ](../session_01.md#1-une-action-visible-une-valeur-invisible) · [Sommaire du cours](../session_01.md#sommaire)

Les emplacements `___` sont à compléter avant d’exécuter les blocs concernés.

**Point de départ :** la page de Sullivan dans son état initial. Si nous l’avons déjà modifiée, nous la rechargeons.

## Une page apparemment vide

<a href="./session_01/let-there-be-light.html" target="_blank" rel="noopener noreferrer">Nous ouvrons le document HTML dans un nouvel onglet, en vue scindée</a>. La page paraît vide : nous ne voyons qu'une surface noire. Cela suffit-il à conclure qu'elle ne contient rien ?

Nous cliquons sur la page et appliquons **Ctrl + A**. Que révèle la sélection ?

Un meilleur outil existe, l'inspecteur web:

1. Nous ouvrons les outils de développement avec **F12** ou **Ctrl + Shift + I** ou un clic droit puis **Inspecter**.
2. Nous choisissons **Éléments** ou **Inspecteur**, selon le navigateur. Nous déplions le contenu de `body`.
3. Nous retrouvons le texte de Louis H. Sullivan, ses trois paragraphes et son attribution.

Quels éléments HTML les structurent ?

Nous sélectionnons `body` et observons ses règles CSS. Nous repérons `color` et `background-color` : le texte est noir et le fond aussi.

Dans les règles affichées par l'inspecteur, nous remplaçons la valeur de `background-color` par `white`. Nous observons immédiatement la page.

Le texte apparaît-il ? Avons-nous ajouté du contenu ou changé sa présentation ?

## Quelqu'un répond ?

Nous gardons ce document ouvert et passons à la **Console**. Nous allons retrouver cette possibilité de changement à l'aide de JavaScript.

Chaque bloc **À saisir** correspond à un essai séparé. Nous le validons avec Entrée, puis observons la réponse avant de poursuivre. Les encadrés **À observer** montrent des réponses ou des éléments à retrouver ; nous ne les saisissons pas. La présentation exacte des réponses peut varier selon le navigateur.

Nous commençons par un mot qui nous vient naturellement.

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

Et avec notre prénom ? Avec `hi` ou `coucou`? Les réponses changent-elles vraiment ? Nous repérons ce qui reste identique et ce qui reprend le mot saisi. Nous pouvons continuer après une erreur.

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

Dans cette console, quelque chose est accessible avec `this`. Nous déplions la réponse. Quels mots reconnaissons-nous ? Les valeurs affichées à côté de ces mots ont-elles toutes la même apparence ?

## Suivre les mots qui apparaissent

La réponse commence par `Window`. Essayons ce nom, avec sa majuscule.

**À saisir**

```js
Window
```

**À observer**

> `ƒ Window() { [native code] }`

Nous retrouvons aussi `window`, avec une minuscule, parmi les propriétés affichées.

**À saisir**

```js
window
```

Une seule lettre a changé de casse. Obtenons-nous la même réponse ?

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

Une boîte apparaît-elle ? Nous la fermons, puis regardons ce que répond la console.

**À observer**

> `undefined`

Cette réponse peut donc accompagner un effet visible. Essayons de placer entre les parenthèses un élément déjà rencontré.

**À saisir**

```js
alert(this)
```

Nous comparons ce que montre la boîte avec ce que la console montrait pour `this`. Nous la fermons, puis reprenons un de nos premiers essais.

**À saisir**

```js
alert(hello)
```

Reconnaissons-nous l'erreur ? Ajouter les parenthèses a-t-il suffi à faire reconnaître `hello` ?

## Que dit le HTML ?

Nous revenons au HTML de la page dans l'inspecteur. Sa première ligne contient une indication comme celle-ci.

**À observer dans le HTML**

```html
<!DOCTYPE html>
```

Quels mots reconnaissons-nous dans cette décomposition ?

```text
DOC + TYPE + HTML
```

Le navigateur donne justement accès au document de la page par le nom `document`. Nous revenons dans la console et commençons à le saisir. Nous observons les propositions pendant la frappe, puis validons.

**À saisir**

```js
document
```

## Où chercher la couleur ?

Nous ajoutons un point après `document`, **sans valider cette expression incomplète**, et observons les suggestions.

Nous avons repéré l'élément `body` dans l'inspecteur. Retrouvons-le.

**À saisir**

```js
document.body
```

Nous saisissons ensuite le début `document.body.` et regardons les suggestions. Y trouvons-nous `style` ? Nous complétons avant de valider.

**À saisir**

```js
document.body.style
```

Nous continuons avec `document.body.style.`. Nous parcourons les suggestions. Quels noms évoquent le fond ? La couleur ?

**À saisir**

```js
document.body.style.backgroundColor
```

Nous comparons `backgroundColor` avec `background-color` en CSS. Où est passé le tiret ? Quelle lettre est devenue majuscule ?

La réponse peut être `""`, une chaîne vide. Pourtant, le fond est blanc. Pour comprendre cette différence, nous revenons dans l'inspecteur et ajoutons directement un attribut `style` à l'élément `body` :

```html
<body style="background-color: white;">
```

Le fond reste blanc. Nous revenons dans la console et exécutons à nouveau exactement la même expression.

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

Le texte réapparaît-il ? Nous identifions la propriété modifiée et la valeur placée à droite de `=`.

Nous revenons dans l'inspecteur : dans l'attribut `style` de `body`, nous retrouvons la valeur que JavaScript vient de modifier.

<a id="à-vous-de-compléter"></a>

## Nous complétons

Nous remettons le fond en noir, puis rendons le texte blanc. Nous complétons avant d’exécuter ; la propriété du texte a déjà été rencontrée dans le CSS.

```js
document.body.style.backgroundColor = "___";
document.body.style.___ = "white";
```

Nous expliquons ce qui change dans l’attribut `style` et ce que la lecture de `.style` nous a permis d’observer. `style` et `backgroundColor` sont-ils des éléments HTML ? Nous gardons la page ouverte, texte blanc sur fond noir, pour la recherche sur les couleurs.

---

[Bilan de l’exploration dans le cours](../session_01.md#bilan-1) · [Poursuivre avec les couleurs](./session_01-couleurs.md)
