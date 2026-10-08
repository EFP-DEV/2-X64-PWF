# Séance 4 — Git, GitHub et pierre, papier, ciseaux

## 1. Créer un dépôt et y envoyer une modification

On crée `labo-essai-git` sur GitHub avec un README, puis on récupère ce dépôt dans VS Code. On ajoute une phrase au fichier local et on l’enregistre. L’actualisation de GitHub montre que le fichier distant n’a pas encore changé.

`git status` et `git diff` permettent d’observer la modification locale. On la prépare avec `git add`, puis on crée un commit. Le dossier de travail est propre, mais GitHub affiche encore le contenu de départ. On envoie enfin le commit avec `git push` : après actualisation, la phrase et le nouveau commit sont visibles sur GitHub.

Les messages rencontrés donnent une raison de vérifier une installation, un dossier, une identité ou une autorisation. Les aides à ouvrir près de chaque opération expliquent le problème, fournissent la commande ou la manipulation adaptée, puis permettent de reprendre l’opération. Les commandes Git sont communes à Windows et macOS ; les différences d’installation et d’interface restent dans les aides concernées.

[Consignes et aides — du dépôt GitHub à la modification envoyée](./exercices/session_04-git-setup.md#1-créer-un-dépôt-et-y-envoyer-une-modification)

## 2. Retrouver les étapes d’un projet

Dans `labo-essai-git`, on ouvre le commit « Modifier le README » sur GitHub. La comparaison montre la phrase ajoutée dans VS Code. Le premier commit conserve le README de départ ; le suivant conserve sa version modifiée. Ces deux versions restent disponibles après la fermeture de l’éditeur.

Git fournit ainsi des points de retour pour un projet. L’image est celle d’un **« Ctrl-Z infini » à travers le temps et les fichiers** : on peut retrouver une version enregistrée hier ou plusieurs semaines auparavant, puis repartir de cette étape. Ce retour peut concerner un seul fichier ou le projet complet. Dans Pixelator, on peut ainsi retrouver le HTML, le CSS et le JavaScript dans l’état conservé au même moment.

Les points de retour sont les commits créés volontairement, pour les fichiers suivis par Git. Une modification enregistrée seulement dans VS Code reste dans le fichier courant ; elle entre dans l’historique lorsqu’on la prépare et qu’on crée un commit. On choisit donc les étapes que Git pourra retrouver.

Quelques commits espacés fournissent déjà un service utile : consulter et retrouver des états antérieurs du projet. Si dix modifications sont regroupées dans un seul commit, elles apparaissent ensemble dans cette étape. L’historique conserve un point de retour avant ces changements et un autre après.

Avec des commits réguliers, chacun centré sur une correction ou un ajout et accompagné d’un message descriptif, les étapes deviennent plus précises. On retrouve plus facilement une modification, on compare son effet et on peut en comprendre la raison. La discipline de travail détermine ainsi la taille des étapes conservées et la facilité avec laquelle on les retrouve.

### Observer une décision dans l’historique du cours

On ouvre le [commit 6c92e2d — Rendre les exercices de renforcement de la séance 3 facultatifs](https://github.com/EFP-DEV/2-X64-PWF/commit/6c92e2df4450b434b538d11f0296574e92d5f974). Le message nomme une décision prise pendant la préparation des leçons.

Dans la comparaison de `session_03.md`, le titre « Laboratoire d’expérimentation — peinture au clic » devient « Laboratoire d’expérimentation facultatif — peinture au clic ». Un paragraphe précise aussi que les exercices de renforcement sont facultatifs et non notés. Dans `index.md`, le sommaire est actualisé pour décrire le même parcours. Les lignes retirées et ajoutées montrent précisément les changements de chaque fichier.

On consulte ensuite [la version précédente de la séance 3](https://github.com/EFP-DEV/2-X64-PWF/blob/34beba23f9fd001e9d09e53cf4770399deb79953/session_03.md) : l’ancien titre est encore présent. La consultation de cette version laisse les fichiers de travail dans leur état actuel. Le message, les différences et les anciennes versions permettent de retrouver la décision et les textes qu’elle a modifiés. Un même commit peut ainsi conserver les changements de plusieurs fichiers liés.

### Enregistrer la prochaine modification

La comparaison dans VS Code ou `git diff` permet d’examiner le travail avant de l’enregistrer dans l’historique. Pour une nouvelle modification déjà saisie et enregistrée dans les fichiers, les trois commandes suivantes illustrent le parcours depuis la racine du projet :

```text
git add .
git commit -m "Décrire le changement"
git push
```

`Décrire le changement` est un message d’exemple. On le remplace par une description de la modification réalisée ; le message peut aussi en préciser la raison.

`git add .` prépare les changements des fichiers du projet pour leur enregistrement. `git commit` crée une version dans l’historique local avec le message choisi. `git push` envoie les commits vers GitHub. L’enregistrement des fichiers conserve le texte actuel dans le dossier de travail ; le commit conserve une étape dans l’historique ; l’envoi rend les versions enregistrées disponibles dans le dépôt distant.

Après l’envoi, les versions enregistrées sont aussi disponibles sur GitHub. Les personnes qui ont accès au dépôt peuvent les consulter et les récupérer sur un autre ordinateur en clonant le dépôt. L’historique envoyé permet ainsi de retrouver les mêmes étapes depuis cette nouvelle copie.

## 3. Reprendre Pixelator avec un dépôt personnel

Lors des séances précédentes, les fichiers de Pixelator ont été récupérés séparément. Passer d’une page HTML à une autre demandait de placer les fichiers au bon endroit et de vérifier quel JavaScript était chargé. Un dépôt rassemble ces fichiers et leur historique dans un même projet.

Le fork crée une copie personnelle du dépôt de l’enseignant sur GitHub. Le clone récupère cette copie et son historique dans un nouveau dossier local. On examine `git remote -v` pour identifier le dépôt auquel `origin` renvoie : le nom seul ne dit pas qui possède ce dépôt, mais son adresse permet de le vérifier. Les commits du travail sont ensuite envoyés vers le fork personnel.

Dans le clone, `peindre-au-clic.html` présente trois problèmes qui se révèlent l’un après l’autre. Une erreur de syntaxe bloque d’abord l’exécution. Après sa correction, les cases restent blanches après les clics : le suivi des instructions révèle une peinture immédiatement retirée par une seconde condition. On corrige la structure conditionnelle et on vérifie l’alternance sur `pixel1`. Les essais sur plusieurs cases montrent ensuite que la première condition consulte toujours `pixel1`, au lieu de l’élément cliqué. Chaque correction donne lieu à un commit : l’historique permet de distinguer les changements et de retrouver la progression du programme.

On vérifie le résultat par des observations complémentaires : la console ne signale plus d’erreur, un premier clic peint la case choisie, un second l’efface, et les autres cases conservent leur propre état. L’envoi sur GitHub se vérifie sur la page du fork et dans la liste des commits.

[Consignes détaillées — créer le fork, cloner Pixelator et corriger les trois problèmes](./exercices/session_04-pixelator.md#2-créer-un-fork-de-pixelator-et-le-cloner)

<a id="laboratoire-pixelator"></a>

### Laboratoire d’expérimentation — jouer avec Pixelator

Une fois les corrections envoyées, on reprend le projet fonctionnel pour essayer une couleur, une taille, une disposition ou une nouvelle règle au clic. On prévoit un effet, on change un aspect du programme, puis on compare le résultat. Les expériences conservées peuvent être enregistrées dans un commit et envoyées au fork.

[Pistes d’expérimentation — Pixelator](./exercices/session_04-pixelator.md#4-jouer-avec-pixelator)

La séance Pixelator se termine ici. Après la pause, on commence un nouveau projet : pierre, papier, ciseaux.

## 4. Compléter pierre, papier, ciseaux

On reprend le parcours fork → clone → commit → push sur un projet différent. La page de départ permet d’observer les boutons, les images, le verdict et la console. Les attributs HTML `data-*` conservent les choix du joueur et de l’ordinateur ainsi que le résultat calculé. L’inspecteur donne accès à ces valeurs pendant la manche, même si les images n’ont pas encore été actualisées.

On suit le même processus que dans Pixelator : un problème est observé, sa cause est repérée, une correction ciblée est apportée, puis son effet est vérifié avant de passer à la suite. La correction de syntaxe permet d’abord l’exécution. La comparaison entre `data-resultat` et le verdict met ensuite en évidence un problème d’ordre des instructions. Le calcul est complété pour reconnaître les trois égalités, les trois victoires et les trois défaites. Enfin, les deux images sont actualisées à partir des choix conservés.

La fonction `afficherChoix(id, choix)` rassemble les instructions nécessaires pour préparer une image et son texte alternatif. Deux appels lui transmettent des valeurs différentes : l’identifiant de l’image à modifier et le symbole à représenter. On peut ainsi distinguer la définition d’une fonction, les paramètres qu’elle reçoit et son exécution à chaque appel.

Chaque correction ou ajout est conservé dans son propre commit, comme dans le travail sur Pixelator. Les neuf combinaisons fournissent des cas de vérification pour le calcul. Les choix dans les attributs HTML, le verdict visible, les images et leurs textes alternatifs doivent décrire la même manche. Après les essais, le tirage aléatoire est rétabli, les commits sont vérifiés et les versions sont envoyées vers le fork personnel.

[Fichiers, consignes et cas de vérification — pierre, papier, ciseaux](https://github.com/EFP-DEV/labo-rock_paper_scissors/blob/main/TODO.md)

## 5. Consolider le parcours

Un dépôt Git conserve un historique local de versions. `git add` prépare les changements à enregistrer, `git commit` crée une version dans cet historique et `git push` envoie les commits vers le dépôt distant configuré. Un clone établit cette destination ; `git remote -v` permet d’en examiner l’adresse.

La modification du README, les corrections de Pixelator et les ajouts au jeu pierre, papier, ciseaux suivent ce même cycle : examiner les changements, conserver une étape décrite, puis envoyer les versions enregistrées. Le dossier de travail contient l’état courant ; l’historique conserve les points de retour créés par les commits ; le dépôt distant conserve les versions envoyées et les rend accessibles.

Les essais de cette séance relient ces opérations à des résultats observables : un état décrit par `git status`, des lignes ajoutées ou retirées dans une comparaison, des commits visibles dans l’historique et des fichiers accessibles sur le fork GitHub. Dans le code, la console, les attributs HTML et l’interface permettent de confronter le comportement à une attente précise. Chaque commit accompagne ainsi une correction ou une fonctionnalité dont le résultat peut être expliqué et vérifié.
