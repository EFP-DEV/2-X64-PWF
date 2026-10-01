# Séance 4 — Git, GitHub et pierre, papier, ciseaux

## 1. Ouvrir le terminal et créer une version

### Préparer le projet dans VS Code

On crée un dossier vide nommé `labo-essai-git` à côté des autres projets du cours, puis on l’ouvre dans **VS Code** avec **File → Open Folder…**.

Dans **Terminal → New Terminal**, on ouvre le terminal intégré. Il démarre dans le dossier du projet. Les fichiers se créent et se modifient dans l’éditeur ; les commandes Git se saisissent dans ce panneau. Chaque ligne se lance avec `Entrée`, puis on observe le résultat.

Les commandes Git de la fiche sont les mêmes sur Windows, macOS et Linux.

### Définir l’auteur des versions

Chaque version enregistrée porte le nom de son auteur. Cette configuration se fait une fois sur le poste. On remplace les exemples entre guillemets par le nom choisi et une adresse associée au compte GitHub :

```text
git config --global user.name "Prénom Nom"
git config --global user.email "adresse-associee-au-compte@example.com"
```

`--global` conserve ces valeurs pour les projets du compte utilisateur sur ce poste. Elles identifient l’auteur des commits ; la connexion à GitHub se fera lors de l’envoi.

### Initialiser le dépôt d’essai

Dans le terminal intégré du projet, on saisit :

```text
git init -b main
```

`git init` prépare le dossier pour conserver ses versions. `-b main` nomme sa première branche `main`.

Avant de changer un projet, on peut imaginer en garder une copie sur une clé USB virtuelle, avec une étiquette pour la retrouver. Git permet de conserver ces versions dans un historique, tout en poursuivant le travail dans le même dossier.

### Écrire les premiers fichiers

Dans l’explorateur de VS Code, on utilise **New File** pour créer trois fichiers. On saisit leur contenu dans l’éditeur, puis on les enregistre avec **File → Save All**.

Dans `README.md` :

```text
# Essai de versionnement
```

Dans `notes-versionnement.txt` :

```text
Dépôt de démonstration Git.
Une première version va être enregistrée.
```

Dans `couleurs-essai.txt` :

```text
violet
orange
```

Les fichiers existent sur l’ordinateur, mais aucune version n’a encore été enregistrée dans Git.

### Préparer et enregistrer la première version

On demande à Git de décrire la situation :

```text
git status
```

Git indique la branche `main`, l’absence de commit et les trois fichiers non suivis. Depuis le dossier du projet, on prépare les fichiers de la première version :

```text
git add .
git status
```

`git add .` prépare tous les changements du dossier courant et de ses sous-dossiers pour le prochain commit. Ici, il s’agit des trois nouveaux fichiers. On enregistre cette version avec un message qui décrit son contenu :

```text
git commit -m "Ajouter les fichiers"
git status
git log
```

Un **commit** conserve une version du projet avec son auteur et son message. `-m` permet de saisir ce message directement dans la commande. `git log` affiche l’historique : on repère l’identifiant après `commit` et le message de chaque version. La touche `q` permet de quitter l’affichage s’il occupe le terminal.

**État attendu :** un premier commit apparaît et `git status` indique que le dossier de travail est propre. Les fichiers suivis correspondent à la version enregistrée.

## 2. Explorer l’historique et envoyer vers GitHub

### Modifier un fichier et lire la différence

Dans l’éditeur de VS Code, on ouvre `couleurs-essai.txt`, on remplace `violet` par `bleu`, puis on enregistre le fichier. Dans le terminal intégré, on saisit :

```text
git status
git diff
```

Git signale un fichier modifié. La différence contient notamment :

```diff
-violet
+bleu
 orange
```

Le signe `-` désigne le contenu retiré, le signe `+` le contenu ajouté. La ligne `orange` est conservée. On prépare cette modification, puis on l’enregistre dans l’historique :

```text
git add .
git commit -m "Remplacer violet par bleu"
git log
```

La deuxième version conserve tous les fichiers du projet, y compris ceux qui n’ont pas changé.

### Lire une ancienne version sans changer les fichiers

Dans l’historique, on copie l’identifiant du premier commit, dont le message est `Ajouter les fichiers`. Il remplace `IDENTIFIANT` dans la commande suivante :

```text
git show IDENTIFIANT
```

`git show` affiche le commit choisi et les changements qu’il a enregistrés. Dans les ajouts de `couleurs-essai.txt`, on retrouve `+violet` et `+orange`.

Dans l’éditeur, le fichier contient toujours `bleu` et `orange`. `git show` a consulté l’archive sans modifier le fichier. Les deux versions existent dans l’historique local.

### Créer le dépôt sur GitHub

On retrouve le site GitHub dans le navigateur, avec le compte utilisé pour l’ampoule :

1. On ouvre [la création d’un dépôt](https://github.com/new).
2. On choisit le compte personnel comme propriétaire et le nom `labo-essai-git`.
3. On choisit **Public** et on laisse désactivés les ajouts de README, de `.gitignore` et de licence : les fichiers et les commits existent déjà sur l’ordinateur.
4. On valide avec **Create repository**.
5. Sur la page du dépôt vide, on copie son adresse **HTTPS**.

Le dépôt est prêt à recevoir les versions locales. [Aide GitHub — créer un dépôt](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)

### Relier le projet au dépôt GitHub

Dans le terminal de VS Code, on remplace l’adresse d’exemple par celle du dépôt créé :

```text
git remote add origin https://github.com/nom-du-compte/labo-essai-git.git
git remote -v
```

`git remote add` enregistre une destination sous le nom `origin`. `git remote -v` affiche cette adresse : elle doit désigner le dépôt personnel.

### Envoyer les versions

```text
git push origin main
```

`push` envoie les commits. Pour ce dépôt créé sur l’ordinateur, on précise la destination `origin` et la branche `main` à envoyer.

Si VS Code demande une connexion à GitHub, on suit la connexion proposée avec le compte personnel, puis on revient dans l’éditeur. [Aide VS Code — connexion à GitHub](https://code.visualstudio.com/docs/sourcecontrol/github#sign-in-to-github-for-git-operations)

On actualise le dépôt dans le navigateur. Les trois fichiers et le commit `Remplacer violet par bleu` doivent être visibles. `couleurs-essai.txt` contient maintenant `bleu` et `orange` sur GitHub aussi.

**État attendu :** les versions existent sur l’ordinateur et sur GitHub. Enregistrer un fichier, créer un commit et envoyer les commits sont trois actions distinctes.

## 3. Retrouver les difficultés de la séance 2

On revient sur les manipulations réalisées pour Pixelator : récupérer le prochain fichier depuis une fiche, le placer dans le bon dossier, choisir la bonne page HTML et vérifier le nom du JavaScript qu’elle charge.

Le passage de quatre à neuf pixels demandait de changer de page, tout en conservant le lien vers `pixelator.js`. Un téléchargement au mauvais endroit ou une page restée ouverte sur l’ancienne version suffisait à brouiller le résultat.

> On perd du temps à récupérer les fichiers et à les mettre au bon endroit. On cherche encore si le bon HTML charge le bon JavaScript… C’est fastidieux, non ? Si seulement il existait une solution !

L’historique observé avec les fichiers d’essai donne une piste : chaque version peut conserver ensemble le HTML, le CSS et le JavaScript de Pixelator. On retrouve alors le projet tel qu’il était à une étape choisie, avec les fichiers qui allaient ensemble. L’identifiant de cette version permet de la retrouver parmi les archives.

## 4. Créer un fork de Pixelator et le cloner

### Créer la copie personnelle sur GitHub

Dans le navigateur, on ouvre le dépôt [EFP-DEV/PWF-pixelator](https://github.com/EFP-DEV/PWF-pixelator) :

1. On choisit **Fork**.
2. On sélectionne le compte personnel comme propriétaire, on conserve le nom `PWF-pixelator` et on copie uniquement la branche principale, `main`.
3. On valide avec **Create fork**.
4. Sur la nouvelle page, on vérifie que le propriétaire est le compte personnel. La mention **forked from** indique le dépôt d’origine.

Un **fork** est une copie personnelle sur GitHub. Il conserve les versions de la branche copiée. Le dépôt de l’enseignant garde ses propres fichiers et son historique. [Aide GitHub — créer un fork](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/fork-a-repo)

### Récupérer le projet et son historique

Dans VS Code, on ouvre le **dossier parent des projets du cours**, avec **File → Open Folder…**, puis un nouveau terminal avec **Terminal → New Terminal**. Le clone sera créé à côté du dépôt d’essai.

Depuis la page du **fork personnel**, on copie l’adresse **Code → HTTPS**. Elle remplace l’adresse d’exemple dans la commande :

```text
git clone https://github.com/nom-du-compte/PWF-pixelator.git
```

**Cloner** récupère le projet et son historique dans un nouveau dossier. Dans VS Code, on ouvre maintenant ce dossier `PWF-pixelator` avec **File → Open Folder…**, puis un nouveau terminal intégré. On y saisit :

```text
git status
```

Le terminal se trouve ainsi dans le clone pour les commandes Git suivantes. L’explorateur de VS Code affiche les fichiers de Pixelator.

### Vérifier la destination avec `git remote -v`

```text
git remote -v
```

Exemple de résultat, avec le compte personnel à la place de `nom-du-compte` :

```text
origin  https://github.com/nom-du-compte/PWF-pixelator.git (fetch)
origin  https://github.com/nom-du-compte/PWF-pixelator.git (push)
```

`origin` est le nom donné au dépôt distant lors du clonage. `-v` affiche ses adresses : les deux lignes doivent désigner le **fork personnel**. La commande permet de vérifier la destination des échanges.

**État attendu :** le projet existe dans le dépôt de l’enseignant, dans le fork personnel et dans le clone local. `origin` désigne le fork personnel.

## 5. Changer de version et actualiser la page

Le clone contient déjà les versions préparées par l’enseignant. On va choisir successivement trois de ces archives et retrouver le projet correspondant dans le même dossier. Les résultats sont très différents : chaque version conserve une apparence ou un comportement de Pixelator.

Ces versions interactives sont fournies pour explorer l’historique avec Git. On observe leurs réactions au clic ; la construction de ce comportement a fait l’objet d’une activité en séance 3.

Dans le terminal du dossier `PWF-pixelator`, on observe l’état courant et l’historique :

```text
git status
git log
```

Le dossier de travail doit être propre avant cette exploration. L’enseignant fournit les trois identifiants qui permettent de choisir les versions à observer.

**Les repères `COMMIT_VERSION_1`, `COMMIT_VERSION_2` et `COMMIT_VERSION_3` ci-dessous sont à remplacer par les identifiants fournis. Ce ne sont pas des identifiants exécutables tels quels.** Chaque identifiant, aussi appelé *hash*, est la référence d’un commit précis. Le message décrit la version ; l’identifiant permet de la retrouver exactement.

### Première version

On exécute la première commande fournie :

```text
git checkout COMMIT_VERSION_1
```

Git remet en place les fichiers suivis du dossier tels qu’ils étaient dans cette version. Les autres versions restent conservées dans l’historique. Le message **detached HEAD** indique qu’on consulte une version précise de l’historique ; le retour au travail courant se fera ensuite avec `main`. Pendant cette exploration, on observe les versions sans modifier les fichiers.

On ouvre `peindre-au-clic.html` depuis le dossier cloné dans le navigateur, comme pour les exercices précédents. Si cette page est déjà ouverte, on l’actualise. On observe la grille et on essaie ses interactions au clic.

### Deuxième version

Dans le même terminal, on exécute :

```text
git checkout COMMIT_VERSION_2
```

On actualise **le même onglet du navigateur**. Le résultat change. On relève les différences d’apparence et de comportement : le navigateur charge désormais les fichiers de cette deuxième version.

### Troisième version

On exécute :

```text
git checkout COMMIT_VERSION_3
```

On actualise encore le même onglet et on observe le troisième résultat.

À chaque étape, une commande a remis en place la version correspondante du projet. Le HTML, le CSS et le JavaScript suivis par Git ont été retrouvés ensemble. Le nom de la page ouverte et son emplacement sont restés identiques. Seule la version choisie pour les fichiers du dossier a changé ; les trois archives sont toujours disponibles dans l’historique local.

Le geste se répète : **choisir une version du projet → actualiser la page → observer le résultat**. La commande `checkout` choisit la version à retrouver dans le dossier ; l’actualisation permet au navigateur de lire les fichiers remis en place. Les manipulations de fichiers rencontrées en séance 2 ont été remplacées par le choix d’un commit. [Aide Git — consulter un commit avec checkout](https://git-scm.com/docs/git-checkout)

## 6. Retrouver la dernière version

On reçoit maintenant l’identifiant du dernier commit préparé pour l’activité. On remplace `COMMIT_DERNIERE_VERSION` par cet identifiant dans la quatrième commande :

```text
git checkout COMMIT_DERNIERE_VERSION
```

On actualise la page. Cette fois, la grille apparaît, mais les clics ne peignent aucune case. Le résultat attendu n’est plus au rendez-vous.

> Cette version ne fonctionne pas. Est-ce vraiment la dernière ? Une version plus récente a peut-être corrigé le problème. Comment la retrouver sans connaître son identifiant ?

Un identifiant désigne toujours la même version archivée. Pour retrouver le point où le travail s’est arrêté et pouvoir le poursuivre, on utilise **`main`**, le nom de la branche principale dans le clone :

```text
git checkout main
```

On actualise la page. Les clics ne fonctionnent toujours pas : la branche principale contient bien cette version défectueuse.

La commande a ramené le travail sur `main`. Elle n’a pas interrogé GitHub : elle retrouve la dernière version connue localement. Des commits publiés plus tard dans le dépôt distant demanderaient une récupération distincte.

La version la plus récente contient une erreur. Les trois versions fonctionnelles observées auparavant sont toujours conservées : l’enregistrement de celle-ci ne les a pas remplacées dans l’historique. Git conserve le contenu enregistré, y compris ses erreurs. On va poursuivre le travail sur `main`, corriger le problème et vérifier le résultat avant d’ajouter une nouvelle version.

## 7. Corriger, créer une version et la partager

### Repérer et corriger la syntaxe

Dans le terminal intégré, on vérifie la branche courante et l’état du dossier :

```text
git status
```

Le résultat doit indiquer la branche `main`. La correction se fait après le retour sur cette branche.

La grille apparaît, mais les clics ne réagissent pas. On ouvre la console du navigateur, puis on recharge la page. Un message `SyntaxError` indique le fichier et un emplacement à examiner.

Dans l’explorateur de VS Code, on ouvre `pixelator-clic.js`. On retrouve les quatre lignes qui associent les clics à `peindre` et on compare les signes autour de leurs appels à `document.querySelector` : parenthèses, guillemets et point-virgule. On corrige le signe manquant dans l’éditeur, puis on enregistre avec **File → Save**.

<details>
<summary><strong>Indice — la fin d’un appel</strong></summary>

Le sélecteur fourni à `document.querySelector` est placé entre `(` et `)`. La parenthèse fermante vient après le guillemet du sélecteur, avant `.onclick`. On compare la première association de clic avec les trois suivantes dans le fichier.

</details>

On examine la modification enregistrée :

```text
git diff
```

La différence doit montrer uniquement l’ajout de la parenthèse manquante. On recharge la page Pixelator et on vérifie manuellement le résultat :

- Les quatre cases sont blanches au chargement.
- Un clic peint la case choisie ; un deuxième clic sur cette case l’efface.
- Un clic sur une autre case laisse les autres cases dans leur état précédent.

Les fichiers de travail contiennent maintenant la correction. Elle n’appartient pas encore à une nouvelle version de l’historique.

### Préparer la correction et créer le commit

```text
git status
git add .
git commit -m "Corriger la parenthèse"
git status
git log
```

`git add .` prépare la correction, puis `commit` l’enregistre. Le nouveau message apparaît en tête de l’historique local. `git status` indique que les fichiers suivis ne contiennent plus de modification en attente.

Cette nouvelle version conserve le projet avec sa correction. Les autres fichiers en font toujours partie ; les versions précédentes, y compris celle qui contient l’erreur, restent accessibles.

### Constater que le commit est encore local

Dans le navigateur, on actualise la page du fork personnel sur GitHub. Le nouveau message de commit est absent et `pixelator-clic.js` contient encore l’erreur. La correction existe pour l’instant dans le commit créé sur l’ordinateur.

**Un dossier de travail propre ne signifie pas que le commit a été envoyé.** `commit` crée une version dans l’historique local ; l’envoi est une autre action.

### Envoyer la correction et vérifier la réception

Le clonage a déjà associé la branche `main` au fork personnel. On envoie le nouveau commit :

```text
git push
```

On actualise à nouveau la page du fork sur GitHub. Le commit `Corriger la parenthèse` est visible. On ouvre `pixelator-clic.js` : la parenthèse est présente. Une copie du projet avec cette correction peut maintenant être récupérée sur un autre ordinateur.

| Après l’action | Sur l’ordinateur | Dans le fork sur GitHub |
| --- | --- | --- |
| Enregistrer dans VS Code | Le fichier de travail contient la correction ; aucune nouvelle version n’a encore été créée dans l’historique. | La branche désigne encore le commit avec l’erreur. |
| Créer le commit | La correction appartient à une nouvelle version de l’historique local. | Le nouveau commit est absent. |
| Faire le push | Le commit reste dans l’historique local. | La branche désigne le même commit corrigé. |

**Enregistrer met à jour le fichier de travail ; un commit conserve une version du projet ; un push en envoie une copie sur GitHub.** Les autres clones ne se mettent pas à jour automatiquement et le dépôt de l’enseignant conserve son propre état.

**État attendu :** Pixelator réagit au clic et le commit de correction est visible dans le fork personnel sur GitHub.

<details>
<summary><strong>Aide-mémoire — les commandes Git du parcours</strong></summary>

Les valeurs comme `identifiant` ou `adresse` sont remplacées par celles de l’activité.

| Commande | Effet |
| --- | --- |
| `git init -b main` | Créer un dépôt local avec une branche nommée `main`. |
| `git status` | Observer la branche, les fichiers modifiés et la préparation du prochain commit. |
| `git add .` | Préparer tous les changements du dossier courant et de ses sous-dossiers. |
| `git diff` | Lire les modifications avant de les préparer avec `add`. |
| `git commit -m "Message"` | Enregistrer une version avec un message. |
| `git log` | Lire l’historique et retrouver les identifiants des commits. |
| `git show identifiant` | Consulter un commit et ses changements. |
| `git clone adresse` | Récupérer un dépôt et son historique. |
| `git remote add origin adresse` | Enregistrer l’adresse du dépôt GitHub comme destination. |
| `git remote -v` | Afficher les noms et adresses des dépôts distants configurés. |
| `git checkout identifiant` / `git checkout main` | Retrouver un commit précis ou revenir sur `main`. |
| `git push origin main` | Envoyer `main` vers `origin` dans le dépôt d’essai créé localement. |
| `git push` | Envoyer les nouveaux commits depuis le clone du fork. |

Toutes ces commandes se saisissent dans le terminal intégré de VS Code, dans le dossier du projet concerné.

</details>

<details>
<summary><strong>Préparation de la démonstration — côté enseignant</strong></summary>

On prépare VS Code pour les opérations Git : Git doit être installé sur le poste et accessible depuis le terminal intégré. La commande `git --version` permet à l’enseignant de le vérifier. Cette préparation technique est faite avant l’atelier. La connexion au compte GitHub personnel doit permettre l’envoi depuis VS Code. [Préparation des postes — documentation VS Code](https://code.visualstudio.com/docs/sourcecontrol/quickstart#prerequisites)

On prépare l’historique du dépôt public `EFP-DEV/PWF-pixelator` avant sa distribution. Les quatre commits de la démonstration appartiennent à l’historique de `main`, afin qu’un fork de cette seule branche les conserve.

Les trois premiers commits présentent trois versions fonctionnelles de Pixelator au clic, avec des apparences ou des comportements nettement différents. Chaque version utilise la même page d’entrée, `peindre-au-clic.html`, au même emplacement. Les fichiers nécessaires sont suivis par Git et les essais ne demandent aucun serveur. On vérifie manuellement chaque résultat avec la commande correspondante et l’actualisation du même onglet.

Le quatrième commit reprend une version avec quatre cases déjà interactives : un clic peint la case choisie, un autre clic l’efface.

Après une vérification manuelle de cette version, on retire uniquement la parenthèse fermante de `document.querySelector` dans la première association de clic de `pixelator-clic.js`. La ligne fautive devient :

```js
document.querySelector("#pixel1".onclick = peindre;
```

On enregistre cette erreur dans le quatrième commit et on laisse `main` sur ce commit pour la démonstration. Le passage du quatrième identifiant à `main` doit conserver le même problème. Le `README.md` indique la page à ouvrir ; la découverte de l’erreur intervient après les trois versions fonctionnelles.

On relève les quatre identifiants et on remplace `COMMIT_VERSION_1`, `COMMIT_VERSION_2`, `COMMIT_VERSION_3` et `COMMIT_DERNIERE_VERSION` dans les commandes de la fiche par ces valeurs réelles avant sa distribution. Les descriptions de remplacement des repères sont alors retirées. On vérifie que la différence produite par la correction attendue reste limitée à la parenthèse.

</details>


---

**Deuxième partie — Pierre, papier, ciseaux**

## 8. Récupérer le projet avec GitHub

On ouvre le dépôt d’exercice [EFP-DEV/labo-rock_paper_scissors](https://github.com/EFP-DEV/labo-rock_paper_scissors). On en crée un **fork**, puis on **clone** cette copie personnelle dans le dossier des projets du cours. Le projet s’ouvre dans VS Code ; `index.html` s’ouvre directement dans le navigateur.

L’exercice est autonome. On reprend le parcours **fork → clone → commit → push** rencontré plus tôt dans cette séance pour travailler sur un nouveau projet.

Le [document TODO](./exercices/pierre-papier-ciseaux/TODO.md) accompagne les [fichiers de départ](./exercices/pierre-papier-ciseaux/). Il présente le projet, son état actuel, les comportements attendus et les trois travaux à réaliser. On commence par lire ce document et observer la page, l’inspecteur et la console.

### Le projet attendu

Le jeu propose **trois choix illustrés : pierre, papier et ciseaux**.

On clique sur un bouton illustré pour choisir un symbole. L’ordinateur tire son choix parmi les trois possibilités. Les boutons disparaissent, les deux images apparaissent côte à côte et un message annonce une victoire, une défaite ou une égalité du point de vue du joueur.

**On recharge la page pour rejouer.** Chaque manche est indépendante. Le programme ne gère ni score cumulé ni réinitialisation.

Le tirage aléatoire est fourni. Les règles sont celles du jeu classique :

- La pierre bat les ciseaux.
- Les ciseaux battent le papier.
- Le papier bat la pierre.
- Deux choix identiques donnent une égalité.

### L’état du projet fourni

Le HTML, le CSS et les trois images SVG sont complets. Le JavaScript comporte une erreur de syntaxe, une erreur dans l’ordre des instructions et un calcul du résultat incomplet. L’actualisation des images reste à programmer. **La solution complète ne fait pas partie des fichiers distribués.**

Les trois travaux portent sur JavaScript. Les événements, le tirage aléatoire et le passage des boutons au résultat sont fournis. Aucune boucle n’est à écrire.

Les deux images du résultat représentent initialement une pierre. Elles restent fixes pendant les deux premiers travaux ; leur actualisation constitue le troisième travail.

Les choix et le résultat calculé sont conservés dans les **attributs HTML `data-*`**. L’inspecteur permet d’observer ces valeurs après une action, même quand les images ne correspondent pas encore à la manche. Le TODO explique les repères de lecture du code fourni.

## 9. Travail facile — Réparer le démarrage et l’ordre des instructions

Deux problèmes sont à résoudre : **une erreur de syntaxe** et **une erreur dans l’ordre des instructions**.

On relève le message de la console et on retrouve l’instruction concernée. Après la correction de syntaxe, le programme peut s’exécuter ; on observe alors le comportement qui reste incorrect.

Le verdict affiché reste « Défaite », même lorsque l’attribut `data-resultat` indique un autre résultat. On suit les instructions dans leur ordre d’exécution pour expliquer cet écart et proposer une correction.

**Résultat attendu :** le programme démarre et le verdict affiché correspond au résultat calculé dans `data-resultat`, notamment pour une égalité. Le calcul des autres combinaisons sera complété au travail suivant.

On conserve ce premier travail dans un commit dont le message décrit la correction.

## 10. Travail intermédiaire — Terminer un comportement existant

Le calcul fourni distingue déjà l’égalité et la victoire de pierre contre ciseaux. On complète les conditions pour reconnaître aussi les victoires de papier contre pierre et de ciseaux contre papier. Dans les autres cas, le joueur perd.

**Résultat attendu :** les neuf combinaisons donnent les trois égalités, les trois victoires et les trois défaites attendues. On compare les choix présents dans les attributs `data-*` au verdict visible. Le TODO décrit une vérification manuelle avec un tirage temporairement fixé ; le tirage aléatoire est rétabli avant le commit.

On enregistre le comportement complété dans un nouveau commit.

## 11. Travail difficile — Écrire et appeler `afficherChoix(id, choix)`

On écrit la fonction `afficherChoix(id, choix)` pour renseigner la source d’une image et son texte alternatif. Le paramètre `id` désigne l’image à actualiser ; `choix` indique le symbole à afficher. Les images sont déjà présentes dans le HTML et les fichiers SVG sont fournis.

La définition et les appels de cette fonction sont absents du JavaScript de départ. On ajoute deux appels : un pour afficher le choix du joueur, un pour celui de l’ordinateur.

La fonction est réellement réutilisée. On distingue sa définition, les valeurs qu’elle reçoit et les endroits où elle est appelée.

**Résultat attendu :** les deux images correspondent aux deux choix, avec un texte alternatif qui nomme le symbole représenté.

On conserve cette nouvelle fonctionnalité dans un troisième commit. Des commits supplémentaires peuvent décrire les ajustements intermédiaires.

## 12. Expliquer les corrections et partager le résultat

Pour chaque travail, on **identifie le problème, confirme sa cause avec une observation, propose une solution puis la met en œuvre**. La console, les attributs HTML et le comportement visible permettent de justifier les modifications du JavaScript.

On vérifie manuellement les trois égalités, les trois victoires et les trois défaites possibles. Les images doivent correspondre aux choix annoncés. Après une manche, les boutons de choix ont disparu ; un rechargement permet de jouer à nouveau.

Le dépôt contient **au moins trois commits de travail**, avec un message qui décrit chaque correction ou ajout. Après les vérifications et le rétablissement du tirage aléatoire, on envoie les commits avec `git push`, puis on retrouve sur GitHub les fichiers modifiés et les messages qui décrivent le travail.
