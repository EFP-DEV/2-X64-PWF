# Exploration — la page, l’inspecteur et la console

[Point de départ dans le cours](../session_01.md#1-une-action-visible-une-valeur-invisible) · [Sommaire du cours](../session_01.md#sommaire)

Les emplacements `___` sont à compléter avant d’exécuter les blocs concernés.

**Point de départ :** la page de Sullivan dans son état initial. Si nous l’avons déjà modifiée, nous la rechargeons.

## Une page apparemment vide

<a href="./session_01/let-there-be-light.html" target="_blank" rel="noopener noreferrer">Nous ouvrons le document HTML dans un nouvel onglet, en vue scindée</a>. La page paraît vide : nous ne voyons qu'une surface noire.

Nous cliquons sur la page et appliquons **Ctrl + A**. La sélection révèle le texte présent dans la page.

Nous examinons sa structure avec l’inspecteur web :

1. Nous ouvrons les outils de développement avec **F12** ou **Ctrl + Shift + I** ou un clic droit puis **Inspecter**.
2. Nous choisissons **Éléments** ou **Inspecteur**, selon le navigateur. Nous déplions le contenu de `body`.
3. Nous retrouvons le texte de Louis H. Sullivan, ses trois paragraphes et son attribution.

Nous retrouvons les trois éléments `p` dans un `blockquote`, puis l’attribution dans un `figcaption`. Un élément `figure` rassemble la citation et son attribution.

Nous sélectionnons `body` et observons ses règles CSS. Nous repérons `color` et `background-color` : le texte est noir et le fond aussi.

Dans les règles affichées par l'inspecteur, nous remplaçons la valeur de `background-color` par `white`. Nous observons immédiatement la page.

Le texte devient visible sur le fond blanc. Nous avons changé sa présentation ; le contenu HTML était déjà présent.

<a id="quelquun-répond-"></a>

## Premiers essais dans la console

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

Nous essayons aussi `hi` ou `coucou`. Pour ces noms inconnus, le message reste une `ReferenceError` et reprend le nom saisi. Nous pouvons continuer après une erreur.

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

Dans cette console, `this` donne accès à l’objet global de la page. Nous déplions la réponse : nous découvrons une liste de propriétés dont les valeurs prennent plusieurs formes, notamment des nombres, du texte, des objets et des fonctions.

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

Une seule lettre a changé de casse, mais la réponse est différente : `Window` désigne une fonction, tandis que `window` donne accès à l’objet global retrouvé avec `this`.

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

Une boîte de dialogue apparaît. Nous la fermons, puis regardons ce que répond la console.

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

Nous retrouvons la `ReferenceError` : `hello` reste un nom inconnu. L’erreur survient avant l’appel à `alert`, donc aucune boîte ne s’ouvre.

<a id="que-dit-le-html-"></a>

## Du HTML au document

Nous revenons au HTML de la page dans l'inspecteur. Sa première ligne contient une indication comme celle-ci.

**À observer dans le HTML**

```html
<!DOCTYPE html>
```

Nous décomposons ce nom pour retrouver l’idée de type d’un document HTML :

```text
DOC + TYPE + HTML
```

Le navigateur donne justement accès au document de la page par le nom `document`. Nous revenons dans la console et commençons à le saisir. Nous observons les propositions pendant la frappe, puis validons.

**À saisir**

```js
document
```

<a id="où-chercher-la-couleur-"></a>

## Accéder aux propriétés de style

Nous ajoutons un point après `document`, **sans valider cette expression incomplète**, et observons les suggestions.

Nous avons repéré l'élément `body` dans l'inspecteur. Retrouvons-le.

**À saisir**

```js
document.body
```

Nous saisissons ensuite le début `document.body.` et repérons `style` dans les suggestions. Nous complétons avant de valider.

**À saisir**

```js
document.body.style
```

Nous continuons avec `document.body.style.`. Dans les suggestions, nous repérons `color` pour la couleur du texte et `backgroundColor` pour celle du fond.

**À saisir**

```js
document.body.style.backgroundColor
```

Nous comparons les deux écritures : `background-color` en CSS devient `backgroundColor` en JavaScript. Le tiret disparaît et le mot suivant commence par une majuscule.

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

Le texte réapparaît sur le fond blanc. Nous avons affecté la valeur `"white"`, placée à droite de `=`, à la propriété `backgroundColor`.

Nous revenons dans l'inspecteur : dans l'attribut `style` de `body`, nous retrouvons la valeur que JavaScript vient de modifier.

<a id="à-vous-de-compléter"></a>

## Nous complétons

Nous remettons le fond en noir, puis rendons le texte blanc. Nous complétons avant d’exécuter ; la propriété du texte a déjà été rencontrée dans le CSS.

```js
document.body.style.backgroundColor = "___";
document.body.style.___ = "white";
```

Nous vérifions le résultat dans la page et dans l’attribut `style` de `body` : le texte est blanc sur fond noir. `.style` donne accès aux déclarations de cet attribut ; `backgroundColor` est l’une de ses propriétés. Ces deux noms ne désignent pas des éléments HTML supplémentaires. Nous gardons la page ouverte pour la recherche sur les couleurs.

---

[Bilan de l’exploration dans le cours](../session_01.md#bilan-1) · [Poursuivre avec les couleurs](./session_01-couleurs.md)
