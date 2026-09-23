# Exercice 2 — Résoudre l’ampoule

[Séance 2](../session_02.md)

**Travail sur le programme : 30 minutes.** Nous consacrons les 15 premières minutes au diagnostic, à la correction et aux vérifications des étapes 1 à 3 ; les 15 suivantes aux classes CSS et à la vérification finale de l’étape 4. Nous déposons ensuite notre travail sur GitHub à l’étape 5, avant de commencer Pixelator.

<a id="votre-mission"></a>

## Notre mission

Nous recevons un programme inachevé : **un clic sur l’image allume l’ampoule, mais elle reste ensuite bloquée dans cet état**. Nous le corrigeons pour pouvoir allumer et éteindre l’ampoule à chaque clic. Une fois ce fonctionnement vérifié, nous ferons aussi changer le fond.

## Fichiers fournis

Le dossier [ampoule](./ampoule/index.html) contient le HTML, le CSS, le JavaScript à compléter et les deux images. Nous ouvrons sa copie locale dans notre éditeur, puis `index.html` dans le navigateur.

- [index.html](./ampoule/index.html)
- [dark-room.css](./ampoule/dark-room.css)
- [bulb-switch.js](./ampoule/bulb-switch.js)
- [ampoule_off.png](./ampoule/ampoule_off.png) et [ampoule_on.png](./ampoule/ampoule_on.png)

## 1. Reproduire le problème

Avant de modifier le programme :

1. Nous rechargeons la page : l’image et le texte indiquent une ampoule éteinte.
2. Nous cliquons directement sur l’image : l’ampoule s’allume et le texte devient « allumée ».
3. Nous cliquons une deuxième fois, puis une troisième : l’ampoule reste allumée.

Nous avons reproduit le blocage. Notre objectif est d’obtenir une alternance : allumée au premier clic, éteinte au deuxième, puis allumée au troisième.

## 2. Diagnostiquer et terminer le code

Nous ouvrons `bulb-switch.js`. Le code qui déclenche la fonction au clic est déjà fourni ; nous l’utilisons pour essayer nos modifications. Nous retrouvons ce que nous connaissons : une condition, des blocs et des affectations.

Nous suivons les instructions au premier clic, puis au deuxième, en repérant la condition et les affectations exécutées. Nous comparons le contenu des deux blocs avec les deux états à obtenir.

**Repères de lecture :** `etat.textContent` contient le texte de l’état. `event.target` désigne ici l’image cliquée ; `setAttribute("src", ...)` change son fichier image. `else` signifie « sinon » : son bloc s’exécute lorsque la condition du `if` est fausse.

Nous **corrigeons et complétons le programme** en nous appuyant sur les instructions déjà présentes. À chaque clic, l’image et le texte doivent changer ensemble pour décrire le nouvel état.

Les deux fichiers d’image sont à côté de `index.html`. Nous suivons aussi la dernière ligne de la fonction : elle construit le texte alternatif à partir de `etat.textContent`. Placée avant le `if`, elle utiliserait l’état précédant le clic et décrirait ensuite l’ancienne image.

**Le nouvel état doit exister avant de construire le texte qui le décrit.** Une modification ultérieure de l’état ne change pas le texte déjà construit. La ligne placée après le `if` / `else` utilise l’état obtenu, quel que soit le bloc exécuté.

Nous enregistrons et rechargeons la page pour essayer notre correction.

<a id="3-prédire-vérifier-expliquer"></a>

## 3. Vérifier l’alternance des états

Nous effectuons les actions dans l’ordre du tableau et comparons l’image et le texte aux résultats attendus :

| Action | Résultat attendu |
|---|---|
| Ouvrir ou recharger la page | Image éteinte et texte « éteinte » |
| Premier clic sur l’image | Image allumée et texte « allumée » |
| Deuxième clic sur l’image | Image éteinte et texte « éteinte » |
| Troisième clic sur l’image | Image allumée et texte « allumée » |
| Recharger après le troisième clic | Retour à l’état éteint |

Si l’alternance échoue, nous suivons à nouveau la condition et les affectations pour le clic concerné. Nous corrigeons le programme, puis reprenons les essais depuis le rechargement.

## 4. Faire varier le fond avec une classe CSS

L’ampoule fonctionne. Nous faisons maintenant correspondre le fond à son état : clair quand elle est allumée, noir quand elle est éteinte.

### Choisir la couleur de la pièce claire

Nous choisissons un triplet rouge, vert, bleu pour une couleur claire, puis une représentation : `rgb(r, g, b)` ou `#RRGGBB`.

Dans `dark-room.css`, nous remplaçons la couleur du fond de `.light-room` par notre choix :

```css
.light-room {
  background-color: #f4f4f4;
  color: #222222;
}
```

Nous enregistrons et rechargeons la page. Le fond reste noir : la règle existe, mais le `body` ne porte pas encore la classe `light-room`.

### Ajouter et retirer la classe

Nous ouvrons **F12 → Console** et saisissons :

```js
document.body.classList.add("light-room");
```

Le fond prend notre couleur et le texte devient sombre. Dans l’inspecteur, nous retrouvons `class="light-room"` sur le `body`. Puis nous retirons la classe :

```js
document.body.classList.remove("light-room");
```

Le fond redevient noir et le texte clair : les couleurs définies sur `body` s’appliquent à nouveau. `classList` donne accès aux classes de l’élément ; `add` ajoute une classe et `remove` la retire. Le nom s’écrit **sans point** dans ces instructions.

Nous ajoutons de nouveau la classe, puis rechargeons : le fond redevient noir. La règle CSS est enregistrée ; l’ajout de la classe depuis la console ne modifie pas le fichier HTML.

### Relier le fond à l’état de l’ampoule

Dans `bulb-switch.js`, nous ajoutons la classe `light-room` au `body` dans le bloc qui allume l’ampoule ; nous la retirons dans celui qui l’éteint.

Nous enregistrons, rechargeons et reprenons les vérifications de l’étape 3. Nous vérifions aussi que le fond devient clair quand l’ampoule s’allume et redevient noir quand elle s’éteint ou après un rechargement.

<a id="pourquoi-séparer-css-et-javascript-"></a>

### CSS définit l’apparence, JavaScript applique la classe

**CSS définit l’apparence ; JavaScript décide quand l’appliquer.** Cette séparation des responsabilités (*SoC*, pour *Separation of Concerns*) a des effets concrets ici :

- Pour changer la couleur de la pièce claire, nous modifions uniquement le CSS.
- Une seule classe applique ensemble le fond clair et le texte sombre, pour garder le texte lisible.
- Pour revenir à la pièce sombre, JavaScript retire la classe : il n’a pas à recopier les couleurs initiales.

### Vérification finale

Nous effectuons plusieurs clics successifs : l’image, le texte et le fond doivent toujours décrire le même état. Nous rechargeons ensuite la page et vérifions le retour à l’ampoule éteinte et au fond noir.

Dans l’inspecteur, nous retrouvons la classe `light-room` sur `body` quand l’ampoule est allumée. Au clic suivant, la classe est retirée et les couleurs initiales s’appliquent à nouveau.

<a id="depot-github"></a>

## 5. Déposer l’ampoule sur GitHub

Notre ampoule fonctionne. Nous enregistrons tous nos fichiers, puis utilisons le compte GitHub préparé après la séance 1 pour y déposer notre travail depuis le navigateur.

### Créer le dépôt

Un **dépôt** rassemble les fichiers d’un projet et l’historique de leurs versions.

1. Nous nous connectons à [GitHub](https://github.com/), puis ouvrons [la page de création d’un dépôt](https://github.com/new).
2. Nous choisissons notre compte personnel comme propriétaire et nommons le dépôt `ampoule-session-02`.
3. Nous choisissons sa visibilité : `Public` rend le dépôt visible par tous ; `Private` réserve l’accès à notre compte et aux personnes invitées.
4. Nous laissons les options README, `.gitignore` et licence désactivées pour créer un dépôt vide, puis cliquons sur **Create repository**.

Si nous avons déjà créé ce dépôt pour l’ampoule, nous l’ouvrons pour y ajouter notre travail.

[Aide GitHub — créer un dépôt](https://docs.github.com/fr/repositories/creating-and-managing-repositories/creating-a-new-repository)

### Envoyer les cinq fichiers

Dans le dépôt vide, nous suivons le lien **uploading an existing file**. S’il contient déjà des fichiers, nous utilisons **Add file → Upload files**.

Nous sélectionnons les cinq fichiers de notre version terminée. Nous les plaçons côte à côte à la racine du dépôt :

```text
ampoule-session-02/
├── index.html
├── dark-room.css
├── bulb-switch.js
├── ampoule_off.png
└── ampoule_on.png
```

Nous attendons la fin du chargement des fichiers. Nous saisissons un message, par exemple `Ajouter l’ampoule fonctionnelle`, puis validons avec **Commit changes**. Un **commit** enregistre une version du projet avec un message qui décrit le changement. Si un choix de branche apparaît, nous conservons la branche principale de notre dépôt personnel.

Nous vérifions que les cinq fichiers sont visibles dans le dépôt, y compris les deux images.

[Aide GitHub — ajouter des fichiers](https://docs.github.com/fr/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)

### Vérifier la version déposée

Depuis la page principale du dépôt, nous choisissons **Code → Download ZIP**. Nous extrayons l’archive dans un autre dossier et ouvrons son `index.html` dans le navigateur. Nous testons ainsi la copie récupérée depuis GitHub.

Nous reprenons les vérifications de l’ampoule : état éteint au chargement, alternance à chaque clic, cohérence entre l’image, le texte et le fond, puis retour à l’état éteint au rechargement.

Si nous corrigeons un fichier local, nous envoyons de nouveau sa version modifiée au même endroit sur GitHub et validons un nouveau commit. Les modifications locales ne sont pas envoyées automatiquement. Nous téléchargeons et vérifions à nouveau la copie déposée.

[Aide GitHub — télécharger une archive](https://docs.github.com/fr/repositories/working-with-files/using-files/downloading-source-code-archives)

Nous conservons l’adresse de notre dépôt, de la forme `https://github.com/notre-compte/ampoule-session-02`. Une fois le dépôt vérifié, nous faisons une **pause de 10 minutes**, puis passons à [Pixelator — Séquence](./session_02-pixelator-sequence.md).
