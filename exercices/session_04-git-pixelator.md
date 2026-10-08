# Git, GitHub et Pixelator

[Séance 4](../session_04.md)

[Préparation de la démonstration — côté enseignant](./session_04-preparation.md)

## 1. Créer un dépôt GitHub et le cloner

### Créer le dépôt sur GitHub

Dans le navigateur, on ouvre [la création d’un dépôt](https://github.com/new) avec le compte utilisé pour l’ampoule :

1. On choisit le compte personnel comme propriétaire et le nom `labo-essai-git`.
2. On choisit **Public** et on laisse désactivés les ajouts de README, de `.gitignore` et de licence.
3. On valide avec **Create repository**.
4. Sur la page du dépôt, on copie son adresse **HTTPS**.

Le dépôt existe maintenant sur GitHub. [Aide GitHub — créer un dépôt](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)

### Cloner le dépôt dans VS Code

On ouvre le dossier parent des projets du cours dans **VS Code**, puis **Terminal → New Terminal**. Le clone sera créé dans ce dossier. On remplace l’adresse d’exemple par celle copiée sur GitHub :

```text
git clone https://github.com/nom-du-compte/labo-essai-git.git
```

On ouvre le dossier `labo-essai-git` créé par la commande. Le dépôt local est relié au dépôt GitHub : `git clone` configure cette destination automatiquement.

### Définir l’auteur des versions

Chaque version enregistrée porte le nom de son auteur. Cette configuration se fait une fois sur le poste. On remplace les exemples entre guillemets par le nom choisi et une adresse associée au compte GitHub :

```text
git config --global user.name "Prénom Nom"
git config --global user.email "adresse-associee-au-compte@example.com"
```

`--global` conserve ces valeurs pour les projets du compte utilisateur sur ce poste. Elles identifient l’auteur des commits.

Git conserve des versions du projet dans un historique, tout en permettant de poursuivre le travail dans le même dossier.

## 2. Créer et explorer des versions

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

Dans **Source Control**, on observe les nouveaux fichiers. Ils existent sur l’ordinateur, mais ne font pas encore partie d’une version enregistrée. Pour observer cet état dans le terminal, on saisit :

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
```

Un **commit** conserve une version du projet avec son auteur et son message. `-m` permet de saisir ce message directement dans la commande. Dans VS Code, **Source Control** affiche les modifications ; l’historique des commits permet de retrouver les versions enregistrées.

**État attendu :** un premier commit apparaît et `git status` indique que le dossier de travail est propre. Les fichiers suivis correspondent à la version enregistrée.

### Modifier un fichier et lire la différence

Dans l’éditeur de VS Code, on ouvre `couleurs-essai.txt`, on remplace `violet` par `bleu`, puis on enregistre le fichier. Dans **Source Control**, on sélectionne le fichier modifié pour comparer son contenu avec la version enregistrée. On y distingue le contenu retiré et le contenu ajouté :

```diff
-violet
+bleu
 orange
```

Le signe `-` désigne le contenu retiré, le signe `+` le contenu ajouté. La ligne `orange` est conservée. Dans le terminal intégré, on prépare cette modification, puis on l’enregistre dans l’historique :

```text
git add .
git commit -m "Remplacer violet par bleu"
```

La deuxième version conserve tous les fichiers du projet, y compris ceux qui n’ont pas changé. Dans VS Code, on peut retrouver les messages des commits et examiner leurs changements.

### Envoyer les versions vers GitHub

```text
git push origin main
```

`push` envoie les commits vers le dépôt GitHub configuré lors du clonage.

Si VS Code demande une connexion à GitHub, on suit la connexion proposée avec le compte personnel, puis on revient dans l’éditeur. [Aide VS Code — connexion à GitHub](https://code.visualstudio.com/docs/sourcecontrol/github#sign-in-to-github-for-git-operations)

On actualise le dépôt dans le navigateur. Les trois fichiers et le commit `Remplacer violet par bleu` doivent être visibles. `couleurs-essai.txt` contient maintenant `bleu` et `orange` sur GitHub aussi.

**État attendu :** les versions existent sur l’ordinateur et sur GitHub. Enregistrer un fichier, créer un commit et envoyer les commits sont trois actions distinctes.

## 3. Retrouver les difficultés de la séance 2

On revient sur les manipulations réalisées pour Pixelator : récupérer le prochain fichier depuis une fiche, le placer dans le bon dossier, choisir la bonne page HTML et vérifier le nom du JavaScript qu’elle charge.

Le passage de quatre à neuf pixels demandait de changer de page, tout en conservant le lien vers `pixelator.js`. Un téléchargement au mauvais endroit ou une page restée ouverte sur l’ancienne version suffisait à brouiller le résultat.

On a déjà rencontré ces difficultés : récupérer les fichiers séparément, les placer dans le bon dossier et vérifier quelle page charge quel JavaScript.

Le dépôt GitHub peut réunir le HTML, le CSS et le JavaScript de Pixelator dans un même projet. En créant une copie personnelle puis un clone, on récupère les fichiers ensemble dans le bon dossier. Le travail se poursuit sur cette copie ; les changements seront enregistrés dans des commits puis envoyés sur GitHub.

## 4. Créer un fork de Pixelator et le cloner

### Créer la copie personnelle sur GitHub

Dans le navigateur, on ouvre le dépôt [EFP-DEV/PWF-pixelator](https://github.com/EFP-DEV/PWF-pixelator) :

1. On choisit **Fork**.
2. On sélectionne le compte personnel comme propriétaire, on conserve le nom `PWF-pixelator` et on copie uniquement la branche principale, `main`.
3. On valide avec **Create fork**.
4. Sur la nouvelle page, on vérifie que le propriétaire est le compte personnel. La mention **forked from** indique le dépôt d’origine.

Un **fork** est une copie personnelle du dépôt sur GitHub. Le dépôt de l’enseignant garde ses propres fichiers ; les changements de cette activité seront envoyés vers la copie personnelle. [Aide GitHub — créer un fork](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/fork-a-repo)

### Récupérer le projet dans un dossier local

Dans VS Code, on ouvre le **dossier parent des projets du cours**, avec **File → Open Folder…**, puis un nouveau terminal avec **Terminal → New Terminal**. Le clone sera créé à côté du dépôt d’essai.

Depuis la page du **fork personnel**, on copie l’adresse **Code → HTTPS**. Elle remplace l’adresse d’exemple dans la commande :

```text
git clone https://github.com/nom-du-compte/PWF-pixelator.git
```

**Cloner** récupère le projet et son historique dans un nouveau dossier. Les fichiers du projet se trouvent maintenant ensemble dans `PWF-pixelator`. Dans VS Code, on ouvre ce dossier avec **File → Open Folder…**, puis un nouveau terminal intégré. On y saisit :

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

## 5. Réparer trois problèmes dans Pixelator

On ouvre `peindre-au-clic.html` depuis le clone dans le navigateur. La page est fournie avec le HTML, le CSS et le JavaScript ; on ne télécharge pas ces fichiers séparément. On observe la grille, la console et les réactions aux clics avant de modifier le programme.

Les trois problèmes se corrigent dans l’ordre où ils se révèlent. À chaque étape, on décrit le résultat attendu, on reproduit l’écart, on repère les instructions concernées, puis on modifie le fichier JavaScript et on compare le résultat à la prévision.

### Problème 1 — Le programme ne démarre pas

On recharge la page et on lit le message de la console. Un `SyntaxError` désigne le fichier et l’emplacement à examiner. Dans `pixelator-clic.js`, on compare les quatre associations entre les cases et `peindre`, puis on corrige la syntaxe qui empêche le programme de démarrer.

On recharge la page pour vérifier que l’erreur de syntaxe a disparu et que le programme s’exécute. On enregistre cette correction dans un commit dont le message décrit le changement.

### Problème 2 — L’ordre des instructions annule la peinture

Après le démarrage, on clique sur une case. Elle semble se peindre, puis redevient blanche pendant le même clic. On suit les instructions dans leur ordre et on relève la valeur de la couleur après chaque condition. La première condition change l’état de la case ; une condition suivante lit alors cette nouvelle valeur. On ajuste la structure pour qu’une seule des deux actions, peindre ou effacer, se produise par clic.

On vérifie qu’un premier clic peint la case et qu’un deuxième clic l’efface, puis on conserve cette correction dans un nouveau commit.

### Problème 3 — La décision dépend de l’état d’une autre case

On peint une case, puis on clique sur une autre. On observe si la nouvelle case réagit selon son propre état ou selon celui de la première. Dans la condition, on vérifie quelle case fournit la valeur comparée. La décision doit porter sur l’élément cliqué, afin que chaque case puisse conserver un état indépendant.

On suit une séquence de clics sur plusieurs cases pour vérifier leur indépendance, puis on enregistre cette correction dans un troisième commit.

À chaque commit, **Source Control** permet d’examiner les lignes modifiées. Dans le terminal intégré, `git status` indique les changements en attente ; `git add .` les prépare et `git commit -m "Message"` enregistre une version locale. L’enregistrement du fichier, la création du commit et l’envoi vers GitHub sont des actions distinctes.

### Envoyer les corrections et vérifier le fork

Après les trois commits, on envoie les changements au fork personnel :

```text
git push
```

On actualise la page du fork sur GitHub. Les fichiers corrigés et les trois nouveaux messages de commit doivent y apparaître. Le dépôt de l’enseignant garde son propre état ; les changements ont été envoyés vers le fork personnel.

**État attendu :** Pixelator démarre sans erreur, chaque clic agit sur la case choisie, un second clic l’efface sans modifier les autres cases, et les trois commits sont visibles sur le fork personnel.

<details>
<summary><strong>Aide-mémoire — les commandes Git du parcours</strong></summary>

L’adresse du dépôt est remplacée par celle du compte personnel.

| Commande | Effet |
| --- | --- |
| `git status` | Observer la branche, les fichiers modifiés et la préparation du prochain commit. |
| `git add .` | Préparer tous les changements du dossier courant et de ses sous-dossiers. |
| `git commit -m "Message"` | Enregistrer une version avec un message. |
| `git clone adresse` | Récupérer un dépôt et son historique. |
| `git remote -v` | Afficher les noms et adresses des dépôts distants configurés. |
| `git push origin main` | Envoyer les commits de `main` vers le dépôt GitHub cloné. |
| `git push` | Envoyer les nouveaux commits depuis le clone du fork. |

Les comparaisons de fichiers et l’examen de l’historique se font dans VS Code. Les autres commandes se saisissent dans le terminal intégré, dans le dossier du projet concerné.

</details>
