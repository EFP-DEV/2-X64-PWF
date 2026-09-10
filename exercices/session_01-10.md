# Activité 10 — Exprimer les règles avec `if`

[Question de départ](../session_01.md#10-exprimer-les-règles-avec-if) · [Sommaire du cours](../session_01.md#sommaire)

Les emplacements `___` sont à compléter avant d’exécuter les blocs concernés.

**Point de départ :** `clock.html` charge le `clock.js` de l’activité 9. Le programme ajoute une minute à `13:59`, sans encore corriger le report.

## Le report des minutes

Pour exprimer la règle découverte, utilisez ce bloc `if` à compléter. Placez-le **après l’addition et avant l’affichage** :

```js
if (minutes === ___) {
  minutes = ___;
  hours = ___;
}
```

Testez `13:37` et `13:59`. Expliquez la différence entre `=` et `===`, puis justifiez la position du bloc.

## Découvrir le report des heures

Seul ou en groupe de trois maximum, trouvez une autre heure valide pour laquelle le programme reste incorrect. Proposez la règle manquante, puis complétez ce second bloc. Placez-le **après le premier `if`, en dehors de ses accolades, et avant l’affichage**.

```js
if (hours === ___) {
  hours = ___;
}
```

Pourquoi faut-il vérifier les heures après le report des minutes ? Pourquoi comparer les minutes à exactement 60 suffit-il quand le départ est valide et que l’on ajoute exactement une minute ?

## Prédire, vérifier, expliquer

Remplissez les prédictions avant de tester. Notez la sortie réelle, même si elle ne comporte pas deux chiffres par champ.

| Départ | Sortie prédite | Sortie observée | Conditions vraies et blocs exécutés |
|---|---|---|---|
| `13:37` | | | |
| `13:59` | | | |
| `23:58` | | | |
| `23:59` | | | |
| `07:05` | | | |
| `00:00` | | | |

Si une observation diffère de votre prédiction, identifiez l’instruction concernée. Formulez l’algorithme sans JavaScript, puis distinguez dans votre fichier l’état initial, les règles et l’observation du résultat.

Avant la suite, remettez les valeurs initiales à `13` et `37` et conservez le programme corrigé.

<details>
<summary><strong>Vérifier le programme après votre recherche et vos essais</strong></summary>

```js
let hours;
let minutes;

hours = 13;
minutes = 37;

minutes = minutes + 1;

if (minutes === 60) {
  minutes = 0;
  hours = hours + 1;
}

if (hours === 24) {
  hours = 0;
}

console.log(hours + ":" + minutes);
```

Comparez l’ordre des instructions à votre proposition et repérez les deux blocs indépendants. Pour chaque cas du tableau, justifiez les conditions vraies avant de relancer le programme.

</details>

---

[Retour au bilan 10 dans le cours](../session_01.md#bilan-10) · [Après le bilan : activité 11](./session_01-11.md)
