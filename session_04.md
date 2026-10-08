# Séance 4 — Git, GitHub et pierre, papier, ciseaux

## 1. Découvrir les versions avec Git

On commence par créer un dépôt d’essai sur GitHub et à le cloner dans le dossier des projets. Dans ce dossier local, les fichiers existent d’abord sans faire partie d’une version enregistrée. `git status` rend cet état visible : les fichiers sont non suivis et aucun commit n’existe encore.

On prépare ensuite ces fichiers avec `git add`, puis on les enregistre avec `git commit`. La comparaison de `git status` avant et après chaque commande permet d’observer que la préparation et l’enregistrement sont deux étapes différentes. Le commit conserve les fichiers préparés avec un message et l’identité de son auteur.

Une modification de `couleurs-essai.txt` met en évidence la différence entre le contenu enregistré et le contenu de travail. Dans la comparaison, le signe `-` désigne la ligne retirée et le signe `+` la ligne ajoutée ; les autres lignes restent identiques. Un second commit conserve cette modification dans l’historique. Enfin, `git push` envoie les commits vers GitHub. Enregistrer un fichier, créer un commit et envoyer les commits sont donc trois actions distinctes.

[Consignes détaillées — créer le dépôt, enregistrer des versions et examiner leurs différences](./exercices/session_04-git-pixelator.md#1-créer-un-dépôt-github-et-le-cloner)

## 2. Reprendre Pixelator avec un dépôt personnel

Lors des séances précédentes, les fichiers de Pixelator ont été récupérés séparément. Passer d’une page HTML à une autre demandait de placer les fichiers au bon endroit et de vérifier quel JavaScript était chargé. Un dépôt rassemble ces fichiers et leur historique dans un même projet.

Le fork crée une copie personnelle du dépôt de l’enseignant sur GitHub. Le clone récupère cette copie et son historique dans un nouveau dossier local. On examine `git remote -v` pour identifier le dépôt auquel `origin` renvoie : le nom seul ne dit pas qui possède ce dépôt, mais son adresse permet de le vérifier. Les commits du travail sont ensuite envoyés vers le fork personnel.

Dans le clone, `peindre-au-clic.html` présente trois problèmes qui se révèlent l’un après l’autre. Une erreur de syntaxe bloque d’abord l’exécution. Après sa correction, un clic peint puis efface la case parce qu’une seconde condition lit l’état déjà modifié. Une fois l’ordre corrigé, les essais sur plusieurs cases montrent qu’une condition consulte l’état d’une autre case. Chaque correction donne lieu à un commit : l’historique permet de distinguer les changements et de retrouver la progression du programme.

On vérifie le résultat par des observations complémentaires : la console ne signale plus d’erreur, un premier clic peint la case choisie, un second l’efface, et les autres cases conservent leur propre état. L’envoi sur GitHub se vérifie sur la page du fork et dans la liste des commits.

[Consignes détaillées — créer le fork, cloner Pixelator et corriger les trois problèmes](./exercices/session_04-git-pixelator.md#4-créer-un-fork-de-pixelator-et-le-cloner)

## 3. Compléter pierre, papier, ciseaux

On reprend le parcours fork → clone → commit → push sur un projet différent. La page de départ permet d’observer les boutons, les images, le verdict et la console. Les attributs HTML `data-*` conservent les choix du joueur et de l’ordinateur ainsi que le résultat calculé. L’inspecteur donne accès à ces valeurs pendant la manche, même si les images n’ont pas encore été actualisées.

Les travaux suivent les problèmes observés dans le programme. La correction de syntaxe permet d’abord son exécution. La comparaison entre `data-resultat` et le verdict met ensuite en évidence un problème d’ordre des instructions. Le calcul est complété pour reconnaître les trois égalités, les trois victoires et les trois défaites. Enfin, les deux images sont actualisées à partir des choix conservés.

La fonction `afficherChoix(id, choix)` rassemble les instructions nécessaires pour préparer une image et son texte alternatif. Deux appels lui transmettent des valeurs différentes : l’identifiant de l’image à modifier et le symbole à représenter. On peut ainsi distinguer la définition d’une fonction, les paramètres qu’elle reçoit et son exécution à chaque appel.

Les neuf combinaisons fournissent des cas de vérification pour le calcul. Les choix dans les attributs HTML, le verdict visible, les images et leurs textes alternatifs doivent décrire la même manche. Après les essais, le tirage aléatoire est rétabli, les commits sont vérifiés et les versions sont envoyées vers le fork personnel.

[Fichiers, consignes et cas de vérification — pierre, papier, ciseaux](./exercices/pierre-papier-ciseaux/TODO.md)

## 4. Consolider le parcours

Un dépôt Git conserve un historique local de versions. `git add` prépare les changements à enregistrer, `git commit` crée une version dans cet historique et `git push` envoie les commits vers le dépôt distant configuré. Un clone établit cette destination ; `git remote -v` permet d’en examiner l’adresse.

Les essais de cette séance relient ces opérations à des résultats observables : un état décrit par `git status`, des lignes ajoutées ou retirées dans une comparaison, des commits visibles dans l’historique et des fichiers accessibles sur le fork GitHub. Dans le code, la console, les attributs HTML et l’interface permettent de confronter le comportement à une attente précise. Chaque commit accompagne ainsi une correction ou une fonctionnalité dont le résultat peut être expliqué et vérifié.
