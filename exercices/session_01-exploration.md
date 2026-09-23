# Exploration — la page, l’inspecteur et la console

[Point de départ dans le cours](../session_01.md#1-une-action-visible-une-valeur-invisible) · [Sommaire du cours](../session_01.md#sommaire)

Les emplacements `___` sont à compléter avant d’exécuter les blocs concernés.

**Point de départ :** la page de Sullivan dans son état initial. Si elle a déjà été modifiée, on la recharge.

## Une page apparemment vide

<a href="./session_01/let-there-be-light.html" target="_blank" rel="noopener noreferrer">On ouvre le document HTML dans un nouvel onglet, en vue scindée</a>. La page paraît vide : seule une surface noire est visible.

On clique sur la page, puis on utilise **Ctrl + A**. La sélection révèle le texte présent dans la page.

On examine sa structure avec l’inspecteur web :

1. On ouvre les outils de développement avec **F12** ou **Ctrl + Shift + I** ou un clic droit puis **Inspecter**.
2. On choisit **Éléments** ou **Inspecteur**, selon le navigateur, puis on déplie le contenu de `body`.
3. Le texte de Louis H. Sullivan, ses trois paragraphes et son attribution apparaissent.

Les trois éléments `p` se trouvent dans un `blockquote`, puis l’attribution dans un `figcaption`. Un élément `figure` rassemble la citation et son attribution.

On sélectionne `body` pour observer ses règles CSS. Les propriétés `color` et `background-color` expliquent le résultat : le texte est noir et le fond aussi.

Dans les règles affichées par l’inspecteur, on remplace la valeur de `background-color` par `white`, puis on observe immédiatement la page.

Le texte devient visible sur le fond blanc. Sa présentation a changé ; le contenu HTML était déjà présent.

<a id="quelquun-répond-"></a>

## Premiers essais dans la console

On garde ce document ouvert et on passe à la **Console**. On va retrouver cette possibilité de changement à l’aide de JavaScript.

Chaque bloc **À saisir** correspond à un essai séparé. On le valide avec Entrée, puis on observe la réponse avant de poursuivre. Les encadrés **À observer** montrent des réponses ou des éléments à retrouver ; ils ne sont pas à saisir. La présentation exacte des réponses peut varier selon le navigateur.

On commence par une salutation.

**À saisir**

```js
hello
```

**À observer**

> `ReferenceError: hello is not defined`

On essaie autrement.

**À saisir**

```js
salut
```

On essaie aussi `hi` ou `coucou`. Pour ces noms inconnus, le message reste une `ReferenceError` et reprend le nom saisi. On peut continuer après une erreur.

On essaie une phrase.

**À saisir**

```js
is this a trap ?
```

**À observer**

> `SyntaxError: Unexpected token 'this'`

Cette fois, le message est différent. Il désigne `this`. On essaie ce mot tout seul.

**À saisir**

```js
this
```

**À observer**

> `Window { … }`

Dans cette console, `this` donne accès à l’objet global de la page. On déplie la réponse : une liste de propriétés apparaît. Leurs valeurs prennent plusieurs formes, notamment des nombres, du texte, des objets et des fonctions.

## Suivre les mots qui apparaissent

La réponse commence par `Window`. On essaie ce nom, avec sa majuscule.

**À saisir**

```js
Window
```

**À observer**

> `ƒ Window() { [native code] }`

Le nom `window`, avec une minuscule, figure aussi parmi les propriétés affichées.

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

Des parenthèses apparaissent après son nom. On essaie de les reprendre.

**À saisir**

```js
alert()
```

Une boîte de dialogue apparaît. On la ferme, puis on regarde ce que répond la console.

**À observer**

> `undefined`

Cette réponse peut donc accompagner un effet visible. On essaie de placer entre les parenthèses un élément déjà rencontré.

**À saisir**

```js
alert(this)
```

On compare ce que montre la boîte avec ce que la console montrait pour `this`. On la ferme, puis on reprend un des premiers essais.

**À saisir**

```js
alert(hello)
```

La `ReferenceError` réapparaît : `hello` reste un nom inconnu. L’erreur survient avant l’appel à `alert`, donc aucune boîte ne s’ouvre.

<a id="que-dit-le-html-"></a>

## Du HTML au document

On revient au HTML de la page dans l’inspecteur. Sa première ligne contient une indication comme celle-ci.

**À observer dans le HTML**

```html
<!DOCTYPE html>
```

On décompose ce nom pour retrouver l’idée de type d’un document HTML :

```text
DOC + TYPE + HTML
```

Le navigateur donne justement accès au document de la page par le nom `document`. On revient dans la console pour commencer à le saisir. On observe les propositions pendant la frappe, puis on valide.

**À saisir**

```js
document
```

<a id="où-chercher-la-couleur-"></a>

## Accéder aux propriétés de style

On ajoute un point après `document`, **sans valider cette expression incomplète**, puis on observe les suggestions.

L’élément `body` a déjà été repéré dans l’inspecteur. On le retrouve dans la console.

**À saisir**

```js
document.body
```

On saisit ensuite le début `document.body.`. Le nom `style` apparaît dans les suggestions ; on complète l’expression avant de valider.

**À saisir**

```js
document.body.style
```

On continue avec `document.body.style.`. Les suggestions contiennent `color` pour la couleur du texte et `backgroundColor` pour celle du fond.

**À saisir**

```js
document.body.style.backgroundColor
```

On compare les deux écritures : `background-color` en CSS devient `backgroundColor` en JavaScript. Le tiret disparaît et le mot suivant commence par une majuscule.

La réponse peut être `""`, une chaîne vide. Pourtant, le fond est blanc. Pour comprendre cette différence, on revient dans l’inspecteur pour ajouter directement un attribut `style` à l’élément `body` :

```html
<body style="background-color: white;">
```

Le fond reste blanc. On revient dans la console pour exécuter à nouveau exactement la même expression.

**À saisir**

```js
document.body.style.backgroundColor
```

**À observer**

> `"white"`

## Affecter une valeur

On peut maintenant demander au navigateur de changer le fond depuis la console.

**À saisir**

```js
document.body.style.backgroundColor = "black";
```

Le fond redevient noir. Le texte noir disparaît à nouveau.

**À saisir**

```js
document.body.style.backgroundColor = "white";
```

Le texte réapparaît sur le fond blanc. La valeur `"white"`, placée à droite de `=`, a été affectée à la propriété `backgroundColor`.

On revient dans l’inspecteur : l’attribut `style` de `body` contient la valeur que JavaScript vient de modifier.

<a id="à-vous-de-compléter"></a>
<a id="nous-complétons"></a>

## Compléter les instructions

On remet le fond en noir, puis on rend le texte blanc. On complète les instructions avant de les exécuter ; la propriété du texte a déjà été rencontrée dans le CSS.

```js
document.body.style.backgroundColor = "___";
document.body.style.___ = "white";
```

On vérifie le résultat dans la page et dans l’attribut `style` de `body` : le texte est blanc sur fond noir. `.style` donne accès aux déclarations de cet attribut ; `backgroundColor` est l’une de ses propriétés. Ces deux noms ne désignent pas des éléments HTML supplémentaires. On garde la page ouverte pour la recherche sur les couleurs.

---

[Bilan de l’exploration dans le cours](../session_01.md#bilan-1) · [Poursuivre avec les couleurs](./session_01-couleurs.md)
