# Activité 12 — Donner un nom au comportement

[Question de départ](../session_01.md#12-donner-un-nom-au-comportement) · [Sommaire du cours](../session_01.md#sommaire)

Les emplacements `___` sont à compléter avant d’exécuter les blocs concernés.

**Point de départ :** les fichiers de l’activité 11. Le HTML contient les spans `clock-hours` et `clock-minutes`, initialement `13` et `37`, et le JavaScript lit, convertit, calcule puis écrit au chargement.

## Nommer le comportement

Dans `clock.js`, déplacez **tout le programme actuel**, y compris les déclarations, à l’intérieur de cette fonction. Complétez son nom avec `nextMinute` et remplacez le commentaire par votre code existant :

```js
function ___() {
  // Déplacez ici les déclarations, la lecture, le calcul et l’affichage.
}
```

Ne gardez aucune copie du programme à l’extérieur de la fonction et n’ajoutez pas d’appel en fin de fichier. Enregistrez et rechargez : pourquoi l’heure ne change-t-elle plus au chargement ? Quelle différence faites-vous entre définir un comportement et l’exécuter ?

Dans `clock.html`, remplacez seulement le paragraphe par ce bloc complété pour appeler la fonction au clic :

```html
<p id="clock" onclick="___()"><span id="clock-hours">13</span>:<span id="clock-minutes">37</span></p>
```

Ce premier branchement utilise `onclick`. La suite du cours introduira `addEventListener`.

Enregistrez les deux fichiers et rechargez. Notez l’heure avant tout clic, après un clic, puis après un second clic. Pourquoi le deuxième clic poursuit-il le calcul à partir du résultat du premier ?

Reprenez les six départs du [tableau de la fiche horloge](./session_01-horloge.md#verification), cette fois en modifiant les textes des deux spans **dans le fichier HTML**. À chaque essai, enregistrez, rechargez, puis cliquez une fois. Comparez les résultats à ceux du programme en console. Terminez en remettant le HTML à `13` et `37` et rechargez.

<details>
<summary><strong>Vérifier la fonction après les essais</strong></summary>

```js
function nextMinute() {
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
}
```

Ce fichier définit uniquement la fonction. L’appel reste dans l’attribut `onclick` du paragraphe ; aucun appel n’est ajouté à la fin de `clock.js`.

</details>

---

[Retour au bilan 12 dans le cours](../session_01.md#bilan-12) · [Après le bilan : activité 13](./session_01-13.md)
