# Exercice 2 — Résoudre l’ampoule

[Séance 2](../session_02.md)

**Travail sur le programme : 30 minutes.** Consacrez les 15 premières minutes au diagnostic, à la correction et aux vérifications des étapes 1 à 3 ; les 15 suivantes aux classes CSS et à la vérification finale de l’étape 4. Déposez ensuite votre travail sur GitHub à l’étape 5, avant de commencer Pixelator.

## Votre mission

Vous recevez un programme inachevé : **un clic sur l’image allume l’ampoule, mais elle reste ensuite bloquée dans cet état**. Corrigez-le pour pouvoir allumer et éteindre l’ampoule à chaque clic. Une fois ce fonctionnement vérifié, vous ferez aussi changer le fond.

## Fichiers fournis

Le dossier [ampoule](./ampoule/index.html) contient le HTML, le CSS, le JavaScript à compléter et les deux images. Ouvrez sa copie locale dans votre éditeur, puis `index.html` dans le navigateur.

- [index.html](./ampoule/index.html)
- [dark-room.css](./ampoule/dark-room.css)
- [bulb-switch.js](./ampoule/bulb-switch.js)
- [ampoule_off.png](./ampoule/ampoule_off.png) et [ampoule_on.png](./ampoule/ampoule_on.png)

## 1. Reproduire le problème

Avant de modifier le programme :

1. Rechargez la page et notez l’image et le texte de l’état initial.
2. Cliquez directement sur l’image de l’ampoule. Qu’est-ce qui change ?
3. Cliquez une deuxième fois, puis une troisième. Comparez ce qui se passe à ce que vous attendiez.

Décrivez le problème en une phrase, puis formulez en français la règle que le programme devrait appliquer à chaque clic.

## 2. Diagnostiquer et terminer le code

Ouvrez `bulb-switch.js`. Le code qui déclenche la fonction au clic est déjà fourni. Vous pouvez l’utiliser sans devoir l’expliquer à cette étape. Retrouvez ce que vous connaissez : une condition, des blocs et des affectations.

Suivez les instructions exécutées au premier clic, puis au deuxième :

- Qu’est-ce qui décide du bloc exécuté ? Cette décision tient-elle compte de l’état de l’ampoule ?
- Quelles instructions expliquent ce que vous avez observé ?
- Que manque-t-il pour obtenir l’autre état ?

**Repères de lecture :** `etat.textContent` contient le texte de l’état. `event.target` désigne ici l’image cliquée ; `setAttribute("src", ...)` change son fichier image. `else` signifie « sinon » : son bloc s’exécute lorsque la condition du `if` est fausse.

Expliquez la cause du blocage, puis **corrigez et complétez le programme** en vous appuyant sur les instructions déjà présentes. L’image et le texte doivent toujours décrire le même état.

Les deux fichiers d’image sont à côté de `index.html`. La dernière ligne de la fonction construit le texte alternatif à partir de `etat.textContent`. Si elle était exécutée avant le `if`, quel état décrirait-elle après le clic ? Suivez les valeurs pour le premier clic, puis pour le deuxième.

**Le nouvel état doit exister avant de construire le texte qui le décrit.** Une modification ultérieure de l’état ne change pas le texte déjà construit. La ligne placée après le `if` / `else` utilise l’état obtenu, quel que soit le bloc exécuté.

Enregistrez et rechargez la page pour essayer votre correction.

## 3. Prédire, vérifier, expliquer

Avant chaque action, annoncez l’état attendu, puis vérifiez :

| Action | Résultat attendu |
|---|---|
| Ouvrir ou recharger la page | Image éteinte et texte « éteinte » |
| Premier clic sur l’image | Image allumée et texte « allumée » |
| Deuxième clic sur l’image | Image éteinte et texte « éteinte » |
| Troisième clic sur l’image | Image allumée et texte « allumée » |
| Recharger après le troisième clic | Retour à l’état éteint |

Expliquez pourquoi le programme initial restait bloqué et comment votre correction permet de changer d’état à chaque clic. Appuyez votre explication sur les blocs exécutés et les valeurs modifiées.

## 4. Faire varier le fond avec une classe CSS

L’ampoule fonctionne. Faites maintenant correspondre le fond à son état : clair quand elle est allumée, noir quand elle est éteinte.

### Choisir la couleur de la pièce claire

Choisissez un triplet rouge, vert, bleu pour une couleur claire, puis une représentation : `rgb(r, g, b)` ou `#RRGGBB`.

Dans `dark-room.css`, remplacez la couleur du fond de `.light-room` par votre choix :

```css
.light-room {
  background-color: #f4f4f4;
  color: #222222;
}
```

Enregistrez et rechargez la page. Le fond reste noir : la règle existe, mais le `body` ne porte pas encore la classe `light-room`.

### Ajouter et retirer la classe

Ouvrez **F12 → Console** et saisissez :

```js
document.body.classList.add("light-room");
```

Le fond prend votre couleur et le texte devient sombre. Dans l’inspecteur, retrouvez `class="light-room"` sur le `body`. Puis retirez la classe :

```js
document.body.classList.remove("light-room");
```

Le fond redevient noir et le texte clair : les couleurs définies sur `body` s’appliquent à nouveau. `classList` donne accès aux classes de l’élément ; `add` ajoute une classe et `remove` la retire. Le nom s’écrit **sans point** dans ces instructions.

Ajoutez de nouveau la classe, puis rechargez : le fond redevient noir. La règle CSS est enregistrée ; l’ajout de la classe depuis la console ne modifie pas le fichier HTML.

### Relier le fond à l’état de l’ampoule

Dans `bulb-switch.js`, ajoutez la classe `light-room` au `body` dans le bloc qui allume l’ampoule ; retirez-la dans celui qui l’éteint.

Enregistrez, rechargez et reprenez les vérifications de l’étape 3. Vérifiez aussi que le fond devient clair quand l’ampoule s’allume et redevient noir quand elle s’éteint ou après un rechargement.

### Pourquoi séparer CSS et JavaScript ?

**CSS définit l’apparence ; JavaScript décide quand l’appliquer.** Cette séparation des responsabilités (*SoC*, pour *Separation of Concerns*) a des effets concrets ici :

- Pour changer la couleur de la pièce claire, vous modifiez uniquement le CSS.
- Une seule classe applique ensemble le fond clair et le texte sombre, pour garder le texte lisible.
- Pour revenir à la pièce sombre, JavaScript retire la classe : il n’a pas à recopier les couleurs initiales.

### Vérification finale

Montrez plusieurs clics successifs : l’image, le texte et le fond doivent toujours décrire le même état. Rechargez ensuite la page et montrez le retour à l’ampoule éteinte et au fond noir.

Expliquez ce que `classList.add("light-room")` et `classList.remove("light-room")` changent dans le HTML, puis comment le CSS détermine l’apparence obtenue.

<a id="depot-github"></a>

## 5. Déposer l’ampoule sur GitHub

Votre ampoule fonctionne. Enregistrez tous vos fichiers, puis utilisez le compte GitHub préparé après la séance 1 pour y déposer votre travail depuis le navigateur.

### Créer le dépôt

Un **dépôt** rassemble les fichiers d’un projet et l’historique de leurs versions.

1. Connectez-vous à [GitHub](https://github.com/), puis ouvrez [la page de création d’un dépôt](https://github.com/new).
2. Choisissez votre compte personnel comme propriétaire et nommez le dépôt `ampoule-session-02`.
3. Choisissez sa visibilité : `Public` rend le dépôt visible par tous ; `Private` limite l’accès à vous et aux personnes invitées.
4. Laissez les options README, `.gitignore` et licence désactivées pour créer un dépôt vide, puis cliquez sur **Create repository**.

Si vous avez déjà créé ce dépôt pour l’ampoule, ouvrez-le pour y ajouter votre travail.

[Aide GitHub — créer un dépôt](https://docs.github.com/fr/repositories/creating-and-managing-repositories/creating-a-new-repository)

### Envoyer les cinq fichiers

Dans le dépôt vide, suivez le lien **uploading an existing file**. S’il contient déjà des fichiers, utilisez **Add file → Upload files**.

Sélectionnez les cinq fichiers de votre version terminée. Placez-les côte à côte à la racine du dépôt :

```text
ampoule-session-02/
├── index.html
├── dark-room.css
├── bulb-switch.js
├── ampoule_off.png
└── ampoule_on.png
```

Attendez la fin du chargement des fichiers. Saisissez un message, par exemple `Ajouter l’ampoule fonctionnelle`, puis validez avec **Commit changes**. Un **commit** enregistre une version du projet avec un message qui décrit le changement. Si un choix de branche apparaît, conservez la branche principale de votre dépôt personnel.

Vérifiez que les cinq fichiers sont visibles dans le dépôt, y compris les deux images.

[Aide GitHub — ajouter des fichiers](https://docs.github.com/fr/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)

### Vérifier la version déposée

Depuis la page principale du dépôt, choisissez **Code → Download ZIP**. Extrayez l’archive dans un autre dossier et ouvrez son `index.html` dans le navigateur. Vous testez ainsi la copie récupérée depuis GitHub.

Reprenez les vérifications de l’ampoule : état éteint au chargement, alternance à chaque clic, cohérence entre l’image, le texte et le fond, puis retour à l’état éteint au rechargement.

Si vous corrigez un fichier local, envoyez de nouveau sa version modifiée au même endroit sur GitHub et validez un nouveau commit. Les modifications locales ne sont pas envoyées automatiquement. Téléchargez et vérifiez à nouveau la copie déposée.

[Aide GitHub — télécharger une archive](https://docs.github.com/fr/repositories/working-with-files/using-files/downloading-source-code-archives)

Conservez l’adresse de votre dépôt, de la forme `https://github.com/votre-compte/ampoule-session-02`. Une fois le dépôt vérifié, faites une **pause de 10 minutes**, puis passez à [Pixelator](./session_02-pixelator.md).
