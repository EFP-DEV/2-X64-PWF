# Activité 11 — Du programme à l'application

[Question de départ](../session_01.md#11-du-programme-à-lapplication) · [Sommaire du cours](../session_01.md#sommaire)

Les emplacements `___` sont à compléter avant d’exécuter les blocs concernés.

**Point de départ :** le programme corrigé de l’activité 10, avec deux déclarations, les valeurs initiales `13` et `37`, l’addition, les deux reports et un affichage console. Gardez ces règles pendant le changement d’entrée et de sortie.

## Lire l’entrée HTML

Dans `clock.html`, remplacez tout l’élément `body` par :

```html
<body>
  <p id="clock"><span id="clock-hours">13</span>:<span id="clock-minutes">37</span></p>
  <script src="clock.js"></script>
</body>
```

Enregistrez et rechargez. Votre JavaScript écrit encore son résultat dans la console ; le HTML affiche pour l’instant ses propres valeurs de départ.

Dans la console de cette page, utilisez la propriété `textContent` pour compléter ces expressions, puis exécutez-les séparément. Les sélecteurs fournis reprennent les identifiants des deux spans :

```js
document.querySelector("#clock-hours").___
document.querySelector("#clock-minutes").___
```

Recevez-vous du texte ou des nombres ? Prédisez ce que donnerait l’ajout de `1` au texte des minutes. Essayez séparément ces deux expressions :

```js
"37" + 1
```

```js
Number("37") + 1
```

Qu’est-ce qui change ? Réutilisez `Number(...)` dans le programme pour préparer les valeurs avant l’addition.

## Remplacer l’entrée et la sortie

Dans `clock.js`, gardez les deux déclarations en tête et les règles corrigées. Remplacez **uniquement** les affectations initiales `hours = 13;` et `minutes = 37;` par ces six instructions complétées :

```js
hours = document.querySelector("___");
hours = hours.___;
hours = ___(hours);

minutes = document.querySelector("___");
minutes = minutes.___;
minutes = ___(minutes);
```

Pour chacune des trois étapes de lecture, indiquez ce que contient la variable : élément HTML, texte ou nombre.

Remplacez ensuite le `console.log` final par ces deux affectations complétées :

```js
document.querySelector("#clock-hours").___ = ___;
document.querySelector("#clock-minutes").___ = ___;
```

Enregistrez et rechargez. Quelle heure la page affiche-t-elle après le chargement ? Expliquez le parcours **lecture → conversion → calcul → affichage**. Avez-vous changé les règles de report ?

<details>
<summary><strong>Vérifier le programme relié au HTML</strong></summary>

```js
let hours;
let minutes;

hours = document.querySelector("#clock-hours");
hours = hours.textContent;
hours = Number(hours);

minutes = document.querySelector("#clock-minutes");
minutes = minutes.textContent;
minutes = Number(minutes);

minutes = minutes + 1;

if (minutes === 60) {
  minutes = 0;
  hours = hours + 1;
}

if (hours === 24) {
  hours = 0;
}

document.querySelector("#clock-hours").textContent = hours;
document.querySelector("#clock-minutes").textContent = minutes;
```

Identifiez la lecture, la conversion et l’écriture. Gardez cette version dans `clock.js` pour l’activité 12 : elle s’exécute encore au chargement.

</details>

---

[Retour au bilan 11 dans le cours](../session_01.md#bilan-11) · [Après le bilan : activité 12](./session_01-12.md)
