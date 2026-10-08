# Séance 4 — Git, GitHub et pierre, papier, ciseaux

## 1. Créer un dépôt et y envoyer une modification

On crée `labo-essai-git` sur GitHub avec un README, puis on récupère ce dépôt dans VS Code. On ajoute une phrase au fichier local et on l’enregistre. L’actualisation de GitHub montre que le fichier distant n’a pas encore changé.

`git status` et `git diff` permettent d’observer la modification locale. On la prépare avec `git add`, puis on crée un commit. Le dossier de travail est propre, mais GitHub affiche encore le contenu de départ. On envoie enfin le commit avec `git push` : après actualisation, la phrase et le nouveau commit sont visibles sur GitHub.

Les messages rencontrés donnent une raison de vérifier une installation, un dossier, une identité ou une autorisation. Les aides à ouvrir près de chaque opération expliquent le problème, fournissent la commande ou la manipulation adaptée, puis permettent de reprendre l’opération. Les commandes Git sont communes à Windows et macOS ; les différences d’installation et d’interface restent dans les aides concernées.

[Consignes et aides — du dépôt GitHub à la modification envoyée](./exercices/session_04-git-setup.md#1-créer-un-dépôt-et-y-envoyer-une-modification)

## 2. Écrire, conserver et publier un travail

On suit un document de cours pendant plusieurs révisions, sans Git. Une explication est ajoutée, un exemple est corrigé et un paragraphe est déplacé. Après l’enregistrement, les fichiers du dossier de travail contiennent le texte actuel.

Pour conserver cette étape, on copie le projet dans une archive datée. Un journal décrit les changements et leur raison. On copie aussi l’archive sur un espace de stockage distant, afin de pouvoir retrouver le travail si l’ordinateur devient inaccessible. Enfin, on actualise la copie publiée, celle que les lecteurs peuvent consulter.

Le lendemain, l’écriture reprend dans le dossier de travail. Un passage est remplacé et un nouvel exemple est ajouté. On prépare une nouvelle archive, on complète le journal, on actualise la sauvegarde distante et on publie le texte modifié. Les dossiers sont classés, les dates sont précises et toutes les opérations sont réalisées correctement.

Après plusieurs semaines, on veut retrouver un passage supprimé et comprendre pourquoi il avait été remplacé. Le journal permet de repérer la décision et les archives concernées. On ouvre les anciennes versions, on compare leurs textes et on reporte le passage retrouvé dans le document actuel. Cette nouvelle modification entraîne à son tour une archive, une entrée dans le journal, une sauvegarde et une publication.

Cette organisation permet de conserver et de retrouver le travail. Chaque révision demande de maintenir ensemble le texte actuel, les copies précédentes, leur description, la sauvegarde distante et la version publiée. Pour connaître les changements d’une journée, il faut encore comparer les fichiers des archives correspondantes. Même avec une méthode rigoureuse, ce travail de conservation et de comparaison accompagne chaque nouvelle étape de l’écriture.

Le même besoin apparaît lorsqu’on prépare une leçon ou qu’on développe un programme. Une décision peut modifier plusieurs documents ; une correction peut concerner le HTML et le JavaScript. Les fichiers qui se lisent ou fonctionnent ensemble doivent appartenir à la même version du projet.

### Observer une décision dans l’historique du cours

On ouvre le [commit 6c92e2d — Rendre les exercices de renforcement de la séance 3 facultatifs](https://github.com/EFP-DEV/2-X64-PWF/commit/6c92e2df4450b434b538d11f0296574e92d5f974). Le message nomme une décision prise pendant la préparation des leçons.

Dans la comparaison de `session_03.md`, le titre « Laboratoire d’expérimentation — peinture au clic » devient « Laboratoire d’expérimentation facultatif — peinture au clic ». Un paragraphe précise aussi que les exercices de renforcement sont facultatifs et non notés. Dans `index.md`, le sommaire est actualisé pour décrire le même parcours. Les lignes retirées et ajoutées rendent les changements visibles, sans comparer les documents entiers à la main.

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

Après l’envoi, GitHub contient les fichiers actualisés et l’historique envoyé, en plus de la copie locale. Les personnes qui ont accès au dépôt peuvent consulter le texte publié et ses versions précédentes. Le travail quotidien conserve ainsi ses étapes sans recopier et classer manuellement une archive complète à chaque révision.

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

L’écriture de Monkey Chess, la préparation des leçons et le développement d’un programme suivent ce même cycle : examiner les changements, conserver une étape décrite, puis envoyer les versions enregistrées. Le dossier de travail contient l’état courant ; l’historique permet de consulter les étapes précédentes ; le dépôt distant conserve les versions envoyées et les rend accessibles.

Les essais de cette séance relient ces opérations à des résultats observables : un état décrit par `git status`, des lignes ajoutées ou retirées dans une comparaison, des commits visibles dans l’historique et des fichiers accessibles sur le fork GitHub. Dans le code, la console, les attributs HTML et l’interface permettent de confronter le comportement à une attente précise. Chaque commit accompagne ainsi une correction ou une fonctionnalité dont le résultat peut être expliqué et vérifié.
