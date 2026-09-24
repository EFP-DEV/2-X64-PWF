# Séance 3 — Git, GitHub et Pixelator au clic

## 1. Démonstration collective — les versions sur GitHub

Avant de changer l’apparence ou le comportement de Pixelator, on peut garder une copie du dossier du projet. Cette copie rassemble le HTML, le CSS et le JavaScript tels qu’ils étaient à ce moment-là. On peut imaginer une série de clés USB virtuelles, chacune contenant une version du projet et portant une étiquette pour la retrouver. Le travail continue dans le dossier courant ; les copies archivées restent disponibles.

Git permet de conserver ces versions dans l’historique du projet. Sur le site de GitHub, on suit la démonstration projetée et on reproduit les manipulations avec le compte personnel. Deux fichiers texte permettent d’observer ce principe : on conserve une version, on change le contenu, puis on retrouve ce qui était présent auparavant.

### Créer le dépôt d’essai

1. On se connecte à [GitHub](https://github.com/) avec le compte utilisé pour l’ampoule, puis on ouvre [la création d’un dépôt](https://github.com/new).
2. On choisit le compte personnel comme propriétaire et le nom `session-03-essai-git`.
3. On choisit **Public** et on active **Add README**, puis on valide avec **Create repository**.

Le **dépôt** réunit les fichiers du projet et l’historique de leurs versions. Il contient déjà un premier fichier, `README.md`, et une première version enregistrée. Cette version est un **commit** : elle conserve l’état du projet, avec un auteur et un message décrivant le changement. Le message sert d’étiquette lisible pour retrouver cette étape. [Aide GitHub — créer un dépôt](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)

### Créer les deux fichiers dans le navigateur

Depuis la page du dépôt, on choisit **Add file → Create new file**. On nomme le fichier `notes-versionnement.txt` et on saisit :

```text
Dépôt de démonstration Git.
Une première version des fichiers va être enregistrée.
```

On clique sur **Commit changes…**, on saisit `Ajouter les notes de démonstration`, puis on choisit d’enregistrer directement sur la branche principale. On valide avec **Commit changes**.

On reprend la même manipulation pour créer `couleurs-essai.txt` :

```text
violet
orange
```

Le message du commit est `Ajouter les couleurs d’essai`. La page du dépôt affiche maintenant les trois fichiers :

```text
session-03-essai-git/
├── README.md
├── notes-versionnement.txt
└── couleurs-essai.txt
```

Chaque ajout a enregistré une nouvelle version du projet. La dernière réunit les trois fichiers, y compris ceux qui n’ont pas changé. Les fichiers et leurs versions ont été créés directement dans le dépôt sur GitHub. [Aide GitHub — créer un fichier](https://docs.github.com/en/repositories/working-with-files/managing-files/creating-new-files)

### Modifier le contenu et observer la différence

On ouvre `couleurs-essai.txt`, puis son éditeur avec l’icône de crayon. On remplace `violet` par `bleu` et on consulte **Preview** pour relire la modification.

On crée le commit `Remplacer violet par bleu`, directement sur la même branche. Le fichier affiché sur GitHub contient désormais :

```text
bleu
orange
```

On ouvre l’historique du fichier avec **History**, puis le commit `Remplacer violet par bleu`. La comparaison montre le retrait de `violet` et l’ajout de `bleu`. Le message explique l’intention ; la différence montre exactement ce qui a changé. [Aide GitHub — modifier un fichier](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)

La nouvelle version conserve le projet avec la couleur `bleu`. La version avec `violet` reste dans l’historique : enregistrer la suivante n’a pas effacé la précédente.

### Retrouver la version précédente

Dans l’historique, on ouvre le commit `Ajouter les couleurs d’essai`, puis **Browse files** et `couleurs-essai.txt`. Le fichier contient encore `violet` et `orange` à cette étape de son histoire.

La vue **Browse files** donne accès à tout le projet dans cette version. `notes-versionnement.txt` et `README.md` y figurent aussi. Même lorsqu’un seul fichier change, chaque version permet de retrouver l’ensemble des fichiers confiés à Git.

La consultation d’une ancienne version ne modifie pas la version courante. On revient à la page principale du dépôt et on ouvre à nouveau le fichier : `bleu` est toujours présent.

| Dans le projet | Version « Ajouter les couleurs d’essai » | Version « Remplacer violet par bleu » |
| --- | --- | --- |
| `couleurs-essai.txt` | `violet`, puis `orange` | `bleu`, puis `orange` |
| `notes-versionnement.txt` | Les deux lignes de notes | Les mêmes deux lignes |
| `README.md` | Le fichier initial | Le même fichier |

Les deux versions sont conservées dans l’historique, comme deux copies archivées avec leurs étiquettes. On peut retrouver le contenu de chacune et comparer les changements. Les fichiers gardent leurs noms : les versions se distinguent dans l’historique du projet.

## 2. Intégrer Git dans VS Code

On va maintenant retrouver le projet et ses versions sur l’ordinateur, puis continuer à modifier les fichiers dans l’éditeur. Le dossier servira au travail courant ; son historique permettra de conserver et de retrouver les versions enregistrées.

**Git** gère cet historique sur l’ordinateur. **GitHub** héberge une copie du dépôt en ligne. **VS Code** permet de modifier les fichiers et de piloter Git depuis l’éditeur. Une version créée sur l’ordinateur pourra ensuite être envoyée vers GitHub.

### Vérifier Git et configurer les commits

On installe [VS Code](https://code.visualstudio.com/) si nécessaire, puis on l’ouvre. Dans **Terminal → New Terminal**, on saisit :

```bash
git --version
```

Un numéro de version confirme que Git est disponible. Si la commande est introuvable, on installe [Git](https://git-scm.com/downloads/), puis on ferme et rouvre VS Code avant de reprendre cette vérification.

Chaque version enregistrée porte le nom de son auteur. On consulte l’identité qui sera utilisée pour les commits réalisés sur cet ordinateur :

```bash
git config --global user.name
git config --global user.email
```

Si une valeur manque ou doit être corrigée, on remplace les exemples entre guillemets dans les commandes suivantes par les valeurs choisies :

```bash
git config --global user.name "Prénom Nom"
git config --global user.email "adresse-associee-au-compte@example.com"
```

Le nom désigne l’auteur. L’adresse correspond à une adresse associée au compte GitHub ou à l’adresse `noreply` indiquée dans **Settings → Emails**. La connexion au compte sera demandée séparément lors de l’envoi. [Aide GitHub — adresse des commits](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address)

Ces réglages préparent les commits réalisés sur cet ordinateur. [Aide VS Code — préparer Git](https://code.visualstudio.com/docs/sourcecontrol/quickstart)

### Cloner le dépôt d’essai

On récupère une copie du projet avec son historique pour travailler sur l’ordinateur. Cette opération s’appelle **cloner** le dépôt.

1. Sur GitHub, on ouvre la page principale de `session-03-essai-git`, puis **Code → HTTPS** pour copier l’adresse de clonage.
2. Dans VS Code, on ouvre la palette de commandes avec `Ctrl + Shift + P`, ou `Cmd + Shift + P` sur macOS, puis on choisit **Git: Clone**.
3. On colle l’adresse et on choisit un dossier parent pour les projets du cours, en dehors des dépôts déjà présents. VS Code crée le sous-dossier `session-03-essai-git`.
4. À la fin du clonage, on ouvre ce dossier dans VS Code. L’explorateur affiche les trois fichiers ; `couleurs-essai.txt` contient `bleu` et `orange`.

Le dossier contient les fichiers de la version courante et l’historique des versions précédentes. La version avec `violet` a donc aussi été récupérée. Git pourra retrouver ces versions sur l’ordinateur, même sans connexion à Internet. L’adresse du dépôt sur GitHub est conservée sous le nom `origin` pour les échanges à venir. [Aide VS Code — cloner un dépôt](https://code.visualstudio.com/docs/sourcecontrol/repos-remotes#clone-repositories)

### Vérifier le trajet entre VS Code et GitHub

Dans `notes-versionnement.txt`, on ajoute une ligne :

```text
Le dépôt est ouvert dans VS Code.
```

On enregistre le fichier : la nouvelle ligne est présente dans le dossier de travail sur l’ordinateur. Cet enregistrement modifie le fichier ; la création d’une version dans l’historique demande un commit. Dans la vue **Source Control** — contrôle de code source — le fichier apparaît avec l’indication `M`, pour *modified*.

1. On ouvre le fichier dans la liste **Changes** pour relire la différence.
2. On clique sur le **+** à côté du fichier : il passe dans **Staged Changes**. Cette préparation, appelée *stage*, sélectionne les modifications à intégrer à la prochaine version. Les fichiers suivis qui n’ont pas changé restent inclus dans cette version.
3. On saisit `Ajouter une note depuis VS Code`, puis on choisit **Commit** pour conserver cette version dans l’historique sur l’ordinateur.
4. Dans le menu **…** de **Source Control**, on choisit **Push** pour envoyer les nouvelles versions enregistrées vers GitHub.

Pendant la démonstration dans le navigateur, les versions étaient créées directement sur GitHub. Ici, on crée d’abord la version sur l’ordinateur, puis on en envoie une copie au dépôt en ligne.

Si VS Code demande une connexion à GitHub, on suit les indications dans le navigateur avec le compte personnel, puis on revient à l’éditeur. On accepte l’autorisation demandée pour cette connexion. [Aide VS Code — connexion à GitHub](https://code.visualstudio.com/docs/sourcecontrol/github)

On actualise la page du dépôt sur GitHub et on ouvre `notes-versionnement.txt`. La nouvelle ligne et le commit doivent être visibles. La version est maintenant conservée sur l’ordinateur et sur GitHub. Cette observation confirme que la modification, le commit local et l’envoi au compte personnel fonctionnent.

Si l’envoi est refusé, on vérifie le compte connecté et la destination avec `git remote -v` dans le terminal du dossier cloné. L’adresse de `origin` doit désigner le dépôt d’essai du compte personnel. On termine cette vérification avant de passer à Pixelator.

## 3. Retrouver les difficultés de la séance 2

On revient sur les manipulations réalisées pour Pixelator : récupérer le prochain fichier depuis une fiche, le placer dans le bon dossier, choisir la bonne page HTML et vérifier le nom du JavaScript qu’elle charge.

Le passage de quatre à neuf pixels demandait de changer de page. La page au clic utilisait encore un autre fichier JavaScript. Un téléchargement au mauvais endroit ou une page restée ouverte sur l’ancienne version suffisait à brouiller le résultat.

> On perd du temps à récupérer les fichiers et à les mettre au bon endroit. On cherche encore si le bon HTML charge le bon JavaScript… C’est fastidieux, non ? Si seulement il existait une solution !

L’historique observé avec les fichiers d’essai donne une piste : chaque version peut conserver ensemble le HTML, le CSS et le JavaScript de Pixelator. On retrouve alors le projet tel qu’il était à une étape choisie, avec les fichiers qui allaient ensemble. L’identifiant de cette version permet de la retrouver parmi les archives.

## 4. Créer un fork de Pixelator et le cloner

On ouvre le dépôt [EFP-DEV/PWF-pixelator](https://github.com/EFP-DEV/PWF-pixelator) de l’enseignant. On va en garder une copie dans le compte personnel, puis récupérer cette copie sur l’ordinateur pour y travailler.

### Créer la copie personnelle sur GitHub

1. On clique sur **Fork**.
2. On choisit le compte personnel comme propriétaire, on conserve le nom `PWF-pixelator` et on copie uniquement la branche principale, `main`.
3. On valide avec **Create fork**.
4. Sur la nouvelle page, on vérifie que le propriétaire est le compte personnel. La mention **forked from** indique le dépôt d’origine.

Cette copie personnelle sur GitHub s’appelle un **fork**. Elle conserve l’historique de la branche copiée : les versions antérieures restent accessibles. On pourra y enregistrer la suite du travail ; le dépôt de l’enseignant garde ses propres fichiers et son propre historique. [Aide GitHub — créer un fork](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/fork-a-repo)

### Cloner le fork dans VS Code

Depuis la page du **fork personnel**, on copie l’adresse **Code → HTTPS**, de la forme `https://github.com/nom-du-compte/PWF-pixelator.git`.

On reprend **Git: Clone** dans VS Code avec cette adresse. Le dossier `PWF-pixelator` est placé à côté de `session-03-essai-git`, dans un emplacement distinct du travail de la séance 2. On ouvre le nouveau clone dans une fenêtre de VS Code.

Le projet et ses versions existent maintenant à trois endroits : dans le dépôt de l’enseignant sur GitHub, dans le fork personnel sur GitHub et dans le clone sur l’ordinateur. Le travail se poursuit dans le clone. Les nouvelles versions y sont conservées par des commits, puis envoyées au fork par un push.

<details>
<summary><strong>Autre accès — cloner depuis le terminal de VS Code</strong></summary>

On ouvre le dossier parent des projets du cours dans VS Code, puis **Terminal → New Terminal**. On remplace `nom-du-compte` par le nom du compte personnel dans l’adresse avant d’exécuter :

```bash
git clone https://github.com/nom-du-compte/PWF-pixelator.git
cd PWF-pixelator
```

On ouvre ensuite le dossier `PWF-pixelator` avec **File → Open Folder…**. Le clonage par l’interface et le clonage par le terminal produisent le même dossier ; on choisit une seule des deux méthodes.

</details>

Dans le terminal du dossier `PWF-pixelator`, on consulte la destination des échanges :

```bash
git remote -v
```

Les lignes `origin` pour `fetch` et `push` doivent contenir l’adresse du **fork personnel**. Si elles désignent le dépôt de l’enseignant, on reprend le clonage depuis la bonne adresse dans un autre dossier avant de poursuivre.

## 5. Changer de version et actualiser la page

Le clone contient déjà les versions préparées par l’enseignant. On va choisir successivement trois de ces archives et retrouver le projet correspondant dans le même dossier. Les résultats sont très différents : chaque version conserve une apparence ou un comportement de Pixelator.

On ouvre le terminal dans le dossier `PWF-pixelator`. L’enseignant fournit les trois commandes qui permettent de choisir ces versions.

**Les repères `COMMIT_VERSION_1`, `COMMIT_VERSION_2` et `COMMIT_VERSION_3` ci-dessous sont à remplacer par les identifiants fournis. Ce ne sont pas des identifiants exécutables tels quels.** Chaque identifiant, aussi appelé *hash*, est la référence d’un commit précis. Le message décrit la version ; l’identifiant permet de la retrouver exactement.

### Première version

On exécute la première commande fournie :

```bash
git checkout COMMIT_VERSION_1
```

Git remet en place les fichiers suivis du dossier tels qu’ils étaient dans cette version. Les autres versions restent conservées dans l’historique. Le message **detached HEAD** indique qu’on consulte une version précise de l’historique ; le retour au travail courant se fera ensuite avec `main`. Pendant cette exploration, on observe les versions sans modifier les fichiers.

On ouvre `peindre-au-clic.html` depuis le dossier cloné, directement dans le navigateur. Si cette page est déjà ouverte, on l’actualise. On observe la grille et on essaie ses interactions au clic.

### Deuxième version

Dans le même terminal, on exécute :

```bash
git checkout COMMIT_VERSION_2
```

On actualise **le même onglet du navigateur**. Le résultat change. On relève les différences d’apparence et de comportement : le navigateur charge désormais les fichiers de cette deuxième version.

### Troisième version

On exécute :

```bash
git checkout COMMIT_VERSION_3
```

On actualise encore le même onglet et on observe le troisième résultat.

À chaque étape, une commande a remis en place la version correspondante du projet. Le HTML, le CSS et le JavaScript suivis par Git ont été retrouvés ensemble. Le nom de la page ouverte et son emplacement sont restés identiques. Seule la version choisie pour les fichiers du dossier a changé ; les trois archives sont toujours disponibles dans l’historique local.

Le geste se répète : **choisir une version du projet → actualiser la page → observer le résultat**. La commande `checkout` choisit la version à retrouver dans le dossier ; l’actualisation permet au navigateur de lire les fichiers remis en place. Les manipulations de fichiers rencontrées en séance 2 ont été remplacées par le choix d’un commit. [Aide Git — consulter un commit avec checkout](https://git-scm.com/docs/git-checkout)

## 6. Retrouver la dernière version

On reçoit maintenant l’identifiant du dernier commit préparé pour l’activité. On remplace `COMMIT_DERNIERE_VERSION` par cet identifiant dans la quatrième commande :

```bash
git checkout COMMIT_DERNIERE_VERSION
```

On actualise la page. Cette fois, la grille apparaît, mais les clics ne peignent aucune case. Le résultat attendu n’est plus au rendez-vous.

> Cette version ne fonctionne pas. Est-ce vraiment la dernière ? Une version plus récente a peut-être corrigé le problème. Comment la retrouver sans connaître son identifiant ?

Un identifiant désigne toujours la même version archivée. Pour retrouver le point où le travail s’est arrêté et pouvoir le poursuivre, on utilise **`main`**, le nom de la branche principale dans le clone :

```bash
git checkout main
```

On actualise la page. Les clics ne fonctionnent toujours pas : la branche principale contient bien cette version défectueuse.

La commande a ramené le travail sur `main`. Elle n’a pas interrogé GitHub : elle retrouve la dernière version connue localement. Des commits publiés plus tard dans le dépôt distant demanderaient une récupération distincte.

La version la plus récente contient une erreur. Les trois versions fonctionnelles observées auparavant sont toujours conservées : l’enregistrement de celle-ci ne les a pas remplacées dans l’historique. Git conserve le contenu enregistré, y compris ses erreurs. On va poursuivre le travail sur `main`, corriger le problème et vérifier le résultat avant d’ajouter une nouvelle version.

## 7. Corriger, créer une version et la partager

### Repérer et corriger la syntaxe

Dans VS Code, on vérifie que la barre d’état affiche **`main`**. La correction se fait après le retour sur cette branche.

On ouvre la console des outils de développement du navigateur, puis on recharge la page. Un message **`SyntaxError`** désigne le fichier JavaScript et un emplacement. Sa formulation dépend du navigateur. On suit ce lien et on examine la ligne signalée, ainsi que celle qui la précède.

Dans VS Code, on retrouve l’instruction concernée dans `pixelator-clic.js`. On compare les signes qui ouvrent et ferment l’appel : parenthèses, guillemets et point-virgule. On corrige le signe manquant, puis on enregistre le fichier.

<details>
<summary><strong>Indice — la fin d’un appel</strong></summary>

Les arguments d’un appel sont placés entre `(` et `)`. Le point-virgule vient après la parenthèse fermante. On compare la ligne signalée avec un autre appel à `peindre` dans le fichier.

</details>

On recharge la page et on vérifie manuellement le résultat :

- La console ne signale plus l’erreur de syntaxe.
- Les quatre cases sont blanches au chargement.
- Un clic peint la case choisie ; un deuxième clic sur cette case l’efface.
- Un clic sur une autre case laisse les autres cases dans leur état précédent.

La vérification porte sur plusieurs cases et plusieurs clics. La disparition du message d’erreur et le comportement retrouvé permettent de préparer la version corrigée.

### Créer le commit, puis actualiser GitHub

Dans **Source Control**, on ouvre la comparaison de `pixelator-clic.js` pour relire la correction. On clique sur **+** pour préparer ce fichier, puis on saisit le message `Corriger la parenthèse manquante dans l’appel à peindre`.

On choisit **Commit** seul. Le commit apparaît dans l’historique local et le fichier disparaît de la liste des changements en attente. [Aide VS Code — préparer et créer un commit](https://code.visualstudio.com/docs/sourcecontrol/staging-commits)

Cette nouvelle version conserve le projet avec la correction. Les autres fichiers font toujours partie du projet ; les versions précédentes, y compris celle qui contient l’erreur, restent accessibles dans l’historique.

On ouvre le **fork personnel** sur GitHub et on actualise sa page principale. La correction n’y apparaît pas. Dans `pixelator-clic.js`, la parenthèse manque toujours et le nouveau message de commit est absent de l’historique en ligne.

**Le commit a créé une version sur l’ordinateur.** Une liste de changements vide dans VS Code ne signifie pas que cette version a été envoyée.

### Faire un push, puis actualiser GitHub

Dans le menu **…** de **Source Control**, on choisit maintenant **Push**. On utilise cette commande seule pour observer l’envoi ; **Sync Changes** combine une récupération et un envoi. [Aide VS Code — envoyer les commits](https://code.visualstudio.com/docs/sourcecontrol/repos-remotes#push-commits)

On actualise à nouveau la page principale du fork sur GitHub. Le commit `Corriger la parenthèse manquante dans l’appel à peindre` est maintenant visible. On l’ouvre pour retrouver la différence, puis on consulte `pixelator-clic.js` : la parenthèse est présente.

**Le push a envoyé une copie de cette version vers le fork sur GitHub.** Le projet corrigé et les versions envoyées peuvent désormais être récupérés sur un autre ordinateur. Les personnes qui ont accès au fork peuvent aussi les consulter et les récupérer. Leurs copies locales ne se mettent pas à jour automatiquement ; le dépôt de l’enseignant conserve aussi son propre état.

| Après l’action | Sur l’ordinateur | Dans le fork sur GitHub après actualisation |
| --- | --- | --- |
| Enregistrer le fichier | Le fichier de travail contient la correction ; aucune nouvelle version n’a encore été créée dans l’historique. | Le fichier contient encore l’erreur. |
| Créer le commit | La correction appartient à une nouvelle version de l’historique local. | Le nouveau commit est absent. |
| Faire le push | Le commit reste dans l’historique local. | Le commit et la correction sont disponibles. |

**Enregistrer met à jour le fichier de travail ; un commit conserve une version du projet dans son historique ; un push en envoie une copie sur GitHub.**

La première partie de la séance est terminée lorsque Pixelator réagit au clic dans le clone local et que le commit de correction est visible dans le fork personnel sur GitHub.

<details>
<summary><strong>Préparation de la démonstration — côté enseignant</strong></summary>

On prépare l’historique du dépôt public `EFP-DEV/PWF-pixelator` avant sa distribution. Les quatre commits de la démonstration appartiennent à l’historique de `main`, afin qu’un fork de cette seule branche les conserve.

Les trois premiers commits présentent trois versions fonctionnelles de Pixelator au clic, avec des apparences ou des comportements nettement différents. Chaque version utilise la même page d’entrée, `peindre-au-clic.html`, au même emplacement. Les fichiers nécessaires sont suivis par Git et les essais ne demandent aucun serveur. On vérifie manuellement chaque résultat avec la commande correspondante et l’actualisation du même onglet.

Le quatrième commit reprend une version avec quatre cases déjà interactives : un clic peint la case choisie, un autre clic l’efface. La création de grilles avec des boucles appartient à la suite de la séance.

Après une vérification manuelle de cette version, on retire uniquement la parenthèse fermante d’un appel à `peindre` dans `pixelator-clic.js`. La ligne fautive devient :

```js
peindre(event.target.id, couleurPeinture;
```

On enregistre cette erreur dans le quatrième commit et on laisse `main` sur ce commit pour la démonstration. Le passage du quatrième identifiant à `main` doit conserver le même problème. Le `README.md` indique la page à ouvrir ; la découverte de l’erreur intervient après les trois versions fonctionnelles.

On relève les quatre identifiants et on remplace `COMMIT_VERSION_1`, `COMMIT_VERSION_2`, `COMMIT_VERSION_3` et `COMMIT_DERNIERE_VERSION` dans les commandes de la fiche par ces valeurs réelles avant sa distribution. Les descriptions de remplacement des repères sont alors retirées. On vérifie que la différence produite par la correction attendue reste limitée à la parenthèse.

</details>
