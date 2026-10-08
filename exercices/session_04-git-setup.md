# Préparer Git et VS Code

[Séance 4](../session_04.md)

## 1. Créer un dépôt et y envoyer une modification

### Créer le dépôt sur GitHub

Dans le navigateur, on ouvre [la création d’un dépôt](https://github.com/new) avec le compte utilisé pour l’ampoule :

1. On choisit le compte personnel comme propriétaire et le nom `labo-essai-git`.
2. On choisit **Public** et on active **Add a README file**. On laisse les ajouts de `.gitignore` et de licence désactivés.
3. On valide avec **Create repository**.

La page du dépôt affiche `README.md`, avec le nom du projet comme titre. GitHub a enregistré ce fichier dans un premier commit. On veut maintenant ajouter une ligne depuis VS Code, puis retrouver cette modification sur GitHub.

[Aide GitHub — créer un dépôt](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)

### Ouvrir le terminal de VS Code

On ouvre le **dossier parent des projets du cours** dans VS Code avec **File → Open Folder…**, puis **Terminal → New Terminal**. Le terminal permet de saisir une commande et d’en lire le résultat. Il s’ouvre dans le dossier choisi ; le clone sera créé à cet endroit.

On copie la commande suivante dans le terminal, puis on appuie sur **Entrée** :

```text
git --version
```

Une réponse commençant par `git version` indique que le terminal peut lancer Git. On poursuit avec le clonage.

<details>
<summary><strong>Le terminal ne reconnaît pas la commande git</strong></summary>

Sous Windows, le message peut contenir `git n’est pas reconnu` ou `The term 'git' is not recognized`. Sous macOS, il peut contenir `command not found: git` ou proposer l’installation d’outils de développement.

Le terminal n’a pas pu lancer Git. VS Code fournit l’éditeur et le terminal ; Git est un programme installé sur le poste. Il peut manquer, ou ne pas être encore accessible depuis la fenêtre ouverte.

**Sous Windows :** on télécharge l’installateur depuis [la page officielle de Git pour Windows](https://git-scm.com/install/windows). On lance le fichier téléchargé et on conserve les options proposées par défaut, notamment l’accès à Git depuis la ligne de commande.

**Sous macOS :** on copie cette commande dans le terminal :

```text
xcode-select --install
```

On termine l’installation proposée dans la fenêtre de macOS. Ces outils de ligne de commande fournissent Git. [Aide Git — installation sur macOS](https://git-scm.com/install/mac)

Après l’installation, on ferme complètement VS Code, puis on le rouvre avec le dossier parent des projets. On ouvre un nouveau terminal et on reprend :

```text
git --version
```

Si Git était déjà installé, ce redémarrage permet aussi à VS Code de retrouver l’environnement mis à jour. La vérification est terminée lorsque le terminal affiche une version de Git.

</details>

### Cloner le dépôt

Sur la page GitHub de `labo-essai-git`, on choisit **Code → HTTPS**, puis on copie l’adresse du dépôt. Dans la commande suivante, on remplace **toute l’adresse d’exemple** par celle copiée, en conservant `git clone` et l’espace qui suit :

```text
git clone https://github.com/nom-du-compte/labo-essai-git.git
```

On colle la commande adaptée dans le terminal et on l’exécute. Un dossier `labo-essai-git` apparaît dans le dossier parent des projets. **Cloner** récupère les fichiers et leur historique sur l’ordinateur. Le clone conserve aussi l’adresse du dépôt GitHub pour les échanges suivants.

<details>
<summary><strong>Le clonage affiche Repository not found</strong></summary>

Git n’a pas pu accéder au dépôt indiqué par l’adresse. On vérifie d’abord que la page du dépôt personnel s’ouvre dans le navigateur et que son nom et son propriétaire sont corrects.

On copie à nouveau l’adresse depuis **Code → HTTPS**, on remplace l’adresse d’exemple dans la commande `git clone`, puis on relance cette commande. Une adresse laissée avec `nom-du-compte` désigne le compte d’exemple, pas le dépôt créé.

</details>

<details>
<summary><strong>Le dossier de destination existe déjà</strong></summary>

Le message contient `destination path` et `already exists and is not an empty directory`. Git veut créer un nouveau dossier pour le clone ; un dossier portant ce nom contient déjà des fichiers.

Si un premier clonage a déjà réussi, on ouvre le dossier obtenu et on poursuit à l’étape suivante. Si le dossier contient un autre travail, on choisit un autre dossier parent avec **File → Open Folder…**, on ouvre un nouveau terminal et on y relance le clonage.

</details>

### Ouvrir le clone et observer son état

Dans VS Code, on ouvre **le dossier `labo-essai-git` créé par le clone** avec **File → Open Folder…**, puis un nouveau terminal avec **Terminal → New Terminal**. Les commandes suivantes se saisissent dans ce terminal, à l’intérieur du projet.

On observe `README.md` dans l’explorateur et on copie :

```text
git status
```

Le message `nothing to commit, working tree clean` indique que les fichiers de travail correspondent à la version enregistrée. Le README local contient le même titre que sur GitHub.

<details>
<summary><strong>Git affiche fatal: not a git repository</strong></summary>

Git cherche un dépôt à partir du dossier où la commande est exécutée. Ce message indique que le terminal se trouve hors du clone, par exemple dans le dossier parent.

On ouvre le dossier `labo-essai-git` dans VS Code, puis **un nouveau terminal**. Un terminal déjà ouvert peut conserver son ancien dossier. On relance :

```text
git status
```

L’état du dépôt doit maintenant apparaître.

</details>

### Modifier le README dans VS Code

On ouvre `README.md` dans l’éditeur. Sous le titre existant, on ajoute une ligne vide puis cette phrase :

```text
Cette ligne a été ajoutée dans VS Code.
```

On enregistre avec **File → Save**. Dans le terminal, on exécute les deux commandes suivantes, l’une après l’autre :

```text
git status
git diff
```

`git status` signale que `README.md` est modifié. `git diff` compare le fichier enregistré sur le disque à la version conservée dans Git : la nouvelle phrase apparaît avec un signe `+`, qui marque un ajout.

On actualise la page du dépôt sur GitHub. La phrase y est encore absente : l’enregistrement dans VS Code a changé le fichier local.

<details>
<summary><strong>Git ne signale aucune modification</strong></summary>

Si `git diff` n’affiche rien et que `git status` indique toujours `working tree clean`, les fichiers sur le disque correspondent encore à la version enregistrée dans Git.

On vérifie que la phrase a été ajoutée au `README.md` du clone ouvert dans VS Code, puis on enregistre avec **File → Save**. Git lit le fichier enregistré sur le disque ; un texte encore présent seulement dans l’éditeur n’est pas pris en compte.

On reprend :

```text
git status
git diff
```

La modification doit maintenant apparaître.

</details>

### Préparer la modification et créer un commit

On copie ces commandes dans le terminal, l’une après l’autre :

```text
git add README.md
git status
```

`git add README.md` prépare le contenu modifié de ce fichier pour le prochain commit. La commande peut ne rien afficher ; `git status` montre le fichier dans `Changes to be committed`.

<details>
<summary><strong>Git annonce que LF sera remplacé par CRLF</strong></summary>

Le message peut contenir `LF will be replaced by CRLF`. Il concerne la manière dont les fins de ligne sont enregistrées dans un fichier texte. Git peut convertir cette représentation selon le poste.

Ce message n’empêche pas la préparation. On vérifie avec `git status` que le README apparaît dans `Changes to be committed`, puis on poursuit avec le commit.

</details>

On enregistre cette modification dans l’historique local :

```text
git commit -m "Modifier le README"
```

Un **commit** conserve une version avec un message et l’identité de son auteur. Ici, `-m` fournit le message `Modifier le README`.

<details>
<summary><strong>Le commit affiche Author identity unknown</strong></summary>

Git doit inscrire un nom et une adresse dans le commit. Il ne connaît pas encore ces valeurs sur le poste, donc le commit n’a pas été créé.

On remplace `Prénom Nom` par le nom choisi pour l’auteur. On remplace l’adresse d’exemple par une adresse associée au compte GitHub. Pour utiliser l’adresse `noreply` fournie par GitHub, on la copie depuis [Settings → Emails](https://github.com/settings/emails). Cette adresse permet d’associer les commits au compte sans y inscrire l’adresse personnelle.

On conserve les guillemets, puis on colle et exécute les commandes adaptées :

```text
git config --global user.name "Prénom Nom"
git config --global user.email "adresse-de-commit@example.com"
```

`--global` conserve ces valeurs pour les projets du compte utilisateur sur ce poste. Ce nom et cette adresse identifient l’auteur dans les commits ; ils ne permettent pas de se connecter à GitHub.

La modification reste préparée malgré l’échec. On relance le commit :

```text
git commit -m "Modifier le README"
```

[Aide GitHub — adresse utilisée dans les commits](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address)

</details>

<details>
<summary><strong>Le commit affiche no changes added to commit</strong></summary>

Le fichier est modifié, mais son contenu n’a pas été préparé pour le commit. Enregistrer dans l’éditeur et préparer avec `git add` sont deux actions distinctes.

On reprend la préparation, puis le commit :

```text
git add README.md
git commit -m "Modifier le README"
```

Si le message est plutôt `nothing to commit, working tree clean`, on relit l’état et la comparaison à l’étape précédente : la modification peut ne pas avoir été enregistrée, ou avoir déjà fait l’objet d’un commit.

</details>

Après un commit réussi, on exécute :

```text
git status
```

Le dossier de travail est propre. Git peut aussi indiquer que la branche possède un commit de plus que `origin/main` : une version locale attend l’envoi. En actualisant GitHub, on constate que la nouvelle phrase n’y apparaît toujours pas.

### Envoyer le commit vers GitHub

Dans le même terminal, on copie :

```text
git push
```

Cette commande envoie les commits vers le dépôt GitHub configuré par le clonage. On attend la fin de l’opération et on lit son résultat.

<details>
<summary><strong>VS Code demande une connexion à GitHub</strong></summary>

Le navigateur permet déjà d’accéder au compte GitHub. L’envoi depuis Git doit aussi être autorisé : le nom et l’adresse inscrits dans le commit ne prouvent pas l’accès au compte.

On suit la connexion proposée par VS Code dans le navigateur avec le compte propriétaire du dépôt, puis on revient dans l’éditeur. Si l’envoi s’est interrompu, on le reprend :

```text
git push
```

[Aide VS Code — connexion à GitHub pour les opérations Git](https://code.visualstudio.com/docs/sourcecontrol/github#sign-in-to-github-for-git-operations)

</details>

<details>
<summary><strong>L’envoi affiche Authentication failed ou refuse le mot de passe</strong></summary>

Git n’a pas pu faire autoriser l’envoi avec les informations de connexion disponibles. Le mot de passe saisi sur le site GitHub n’est pas accepté comme mot de passe pour une opération Git par HTTPS.

Si le terminal attend un mot de passe, **Ctrl+C** interrompt la commande. Dans **Source Control**, on ouvre le menu **… → Push** pour reprendre l’envoi et suivre la connexion dans le navigateur proposée par VS Code. On vérifie le compte choisi, puis on revient dans l’éditeur.

[Aide VS Code — connexion GitHub](https://code.visualstudio.com/docs/sourcecontrol/github#sign-in-to-github-for-git-operations)

</details>

<details>
<summary><strong>GitHub refuse l’envoi : erreur 403 ou Permission to … denied to …</strong></summary>

Un compte peut lire un dépôt public sans avoir le droit d’y envoyer des commits. On vérifie d’abord la destination enregistrée :

```text
git remote -v
```

Les adresses doivent désigner `labo-essai-git` dans le **compte personnel**. `origin` est le nom donné à cette destination lors du clonage.

Si l’adresse désigne un autre dépôt, le clonage a récupéré un autre projet et son historique. On revient à la page du dépôt personnel pour copier **Code → HTTPS**. Dans VS Code, on choisit un autre dossier parent, on ouvre un nouveau terminal et on relance la commande de clonage avec la bonne adresse :

```text
git clone https://github.com/nom-du-compte/labo-essai-git.git
```

On reprend ensuite l’ouverture du clone, la modification du README et son commit dans ce projet.

Si l’adresse est correcte, on examine le compte indiqué dans le message de refus. L’envoi doit utiliser le compte propriétaire du dépôt. Si la connexion proposée par VS Code a été faite avec un autre compte, on ouvre **Accounts**, on se déconnecte de ce compte GitHub, puis on reprend **Source Control → … → Push** pour autoriser le bon compte.

Si Git réutilise encore une connexion mémorisée pour l’autre compte, on suit [l’aide GitHub pour corriger les informations de connexion conservées sur le poste](https://docs.github.com/en/get-started/git-basics/caching-your-github-credentials-in-git), puis on reprend `git push`. Le changement de `user.name` ou de `user.email` modifie l’auteur des prochains commits, sans modifier cette connexion.

[Aide VS Code — erreurs d’authentification et de permission](https://code.visualstudio.com/docs/sourcecontrol/troubleshooting)

</details>

### Actualiser GitHub et vérifier le résultat

Après un envoi réussi, on actualise la page du dépôt dans le navigateur :

- `README.md` contient la phrase `Cette ligne a été ajoutée dans VS Code.`
- Le nouveau commit porte le message `Modifier le README`.
- La comparaison associée à ce commit montre la ligne ajoutée.

On explique pourquoi la phrase était absente de GitHub après l’enregistrement du fichier et après le commit, puis présente après le push. **Enregistrer le fichier, préparer sa modification, créer un commit et envoyer ce commit sont quatre actions distinctes.**

<details>
<summary><strong>Aide-mémoire — les commandes Git du parcours</strong></summary>

L’adresse du dépôt est remplacée par celle du compte personnel.

| Commande | Effet |
| --- | --- |
| `git --version` | Vérifier que le terminal peut lancer Git et afficher sa version. |
| `git status` | Observer la branche, les fichiers modifiés et la préparation du prochain commit. |
| `git diff` | Afficher les modifications qui ne sont pas encore préparées pour le commit. |
| `git add README.md` | Préparer la modification du README pour le prochain commit. |
| `git commit -m "Message"` | Enregistrer une version avec un message. |
| `git clone adresse` | Récupérer un dépôt et son historique. |
| `git remote -v` | Afficher les noms et adresses des dépôts distants configurés. |
| `git push` | Envoyer les nouveaux commits vers le dépôt distant configuré pour la branche. |

Les commandes se saisissent dans le terminal intégré de VS Code, dans le dossier du projet concerné. **Source Control** permet aussi d’examiner les différences et l’historique.

</details>
