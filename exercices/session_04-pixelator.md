# Pixelator — fork, clone et corrections

[Séance 4](../session_04.md) · [Aide Git — premier parcours et messages](./session_04-git-setup.md)

## 1. Retrouver les difficultés de la séance 2

On revient sur les manipulations réalisées pour Pixelator : récupérer le prochain fichier depuis une fiche, le placer dans le bon dossier, choisir la bonne page HTML et vérifier le nom du JavaScript qu’elle charge.

Le passage de quatre à neuf pixels demandait de changer de page, tout en conservant le lien vers `pixelator.js`. Un téléchargement au mauvais endroit ou une page restée ouverte sur l’ancienne version suffisait à brouiller le résultat.

On a déjà rencontré ces difficultés : récupérer les fichiers séparément, les placer dans le bon dossier et vérifier quelle page charge quel JavaScript.

Le dépôt GitHub peut réunir le HTML, le CSS et le JavaScript de Pixelator dans un même projet. En créant une copie personnelle puis un clone, on récupère les fichiers ensemble dans le bon dossier. Le travail se poursuit sur cette copie ; les changements seront enregistrés dans des commits puis envoyés sur GitHub.

## 2. Créer un fork de Pixelator et le cloner

### Créer la copie personnelle sur GitHub

Dans le navigateur, on ouvre le dépôt [EFP-DEV/labo-frontend-pixelator](https://github.com/EFP-DEV/labo-frontend-pixelator) :

1. On choisit **Fork**.
2. On sélectionne le compte personnel comme propriétaire, on conserve le nom `labo-frontend-pixelator` et on copie uniquement la branche principale, `main`.
3. On valide avec **Create fork**.
4. Sur la nouvelle page, on vérifie que le propriétaire est le compte personnel. La mention **forked from** indique le dépôt d’origine.

Un **fork** est une copie personnelle du dépôt sur GitHub. Le dépôt de l’enseignant garde ses propres fichiers ; les changements de cette activité seront envoyés vers la copie personnelle. [Aide GitHub — créer un fork](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/fork-a-repo)

### Récupérer le projet dans un dossier local

Dans VS Code, on ouvre le **dossier parent des projets du cours**, avec **File → Open Folder…**, puis un nouveau terminal avec **Terminal → New Terminal**. Le clone sera créé à côté du dépôt d’essai.

Depuis la page du **fork personnel**, on copie l’adresse **Code → HTTPS**. Elle remplace l’adresse d’exemple dans la commande :

```text
git clone https://github.com/nom-du-compte/labo-frontend-pixelator.git
```

**Cloner** récupère le projet et son historique dans un nouveau dossier. Les fichiers du projet se trouvent maintenant ensemble dans `labo-frontend-pixelator`. Dans VS Code, on ouvre ce dossier avec **File → Open Folder…**, puis un nouveau terminal intégré. On y saisit :

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
origin  https://github.com/nom-du-compte/labo-frontend-pixelator.git (fetch)
origin  https://github.com/nom-du-compte/labo-frontend-pixelator.git (push)
```

`origin` est le nom donné au dépôt distant lors du clonage. `-v` affiche ses adresses : les deux lignes doivent désigner le **fork personnel**. La commande permet de vérifier la destination des échanges.

**État attendu :** le projet existe dans le dépôt de l’enseignant, dans le fork personnel et dans le clone local. `origin` désigne le fork personnel.

## 3. Réparer trois problèmes dans Pixelator

On ouvre `peindre-au-clic.html` depuis le clone dans le navigateur. La page est fournie avec le HTML, le CSS et le JavaScript ; on ne télécharge pas ces fichiers séparément. On observe la grille, la console et les réactions aux clics avant de modifier le programme.

Les trois problèmes se corrigent dans l’ordre où ils se révèlent. À chaque étape, on décrit le résultat attendu, on reproduit l’écart, on repère les instructions concernées, puis on modifie le fichier JavaScript et on compare le résultat à la prévision.

### Problème 1 — Le programme ne démarre pas

On recharge la page et on lit le message de la console. Un `SyntaxError` désigne le fichier et l’emplacement à examiner. Dans `pixelator-clic.js`, on compare les quatre associations entre les cases et `peindre`, puis on corrige la syntaxe qui empêche le programme de démarrer.

On enregistre et recharge la page pour vérifier que l’erreur de syntaxe a disparu. Les cases restent blanches après les clics : ce résultat constitue le problème suivant. On enregistre la correction de syntaxe dans un commit dont le message décrit le changement.

### Problème 2 — L’ordre des instructions annule la peinture

On repart d’une page rechargée et on clique sur `pixel1`. La case reste blanche après le clic. On suit les instructions dans leur ordre et on relève la valeur de sa couleur après chaque condition. La première condition applique la peinture ; la seconde lit la couleur déjà modifiée et retire cette peinture pendant le même clic. Les deux affectations expliquent le résultat blanc, sans nécessiter une apparition visible du violet entre elles.

On reprend la structure `if` / `else` rencontrée avec l’ampoule et Pixelator en séance 3. Elle permet de choisir une seule des deux actions à partir de la première condition. On conserve les instructions de peinture et d’effacement dans leurs blocs.

Après l’enregistrement et le rechargement, on clique deux fois sur `pixel1`, sans recharger entre les clics. Le premier clic doit la peindre, le deuxième doit l’effacer. On conserve cette correction dans un nouveau commit. Les essais sur les autres cases constituent l’étape suivante.

### Problème 3 — La décision dépend de l’état d’une autre case

On recharge la page, on peint `pixel1`, puis on clique sur `pixel4`, sans recharger entre les deux clics. Le résultat attendu comporte deux cases peintes. On compare ce résultat à l’observation, puis on vérifie quelle case fournit la valeur comparée dans la condition. La décision doit porter sur l’élément cliqué, afin que chaque case puisse conserver un état indépendant.

Après la correction, on enregistre et recharge. On reprend la séquence de vérification de la séance 3, sans recharger entre les clics :

| Action | Cases qui doivent être peintes après l’action |
| --- | --- |
| Recharger | Aucune |
| Cliquer sur `pixel1` | `pixel1` |
| Cliquer sur `pixel4` | `pixel1`, `pixel4` |
| Cliquer de nouveau sur `pixel1` | `pixel4` |
| Cliquer sur `pixel2` | `pixel2`, `pixel4` |
| Cliquer de nouveau sur `pixel4` | `pixel2` |
| Cliquer sur `pixel3` | `pixel2`, `pixel3` |
| Recharger | Aucune |

On explique pourquoi la condition examine désormais l’état de la case cliquée et pourquoi une seule action se produit par clic, puis on enregistre cette correction dans un troisième commit.

À chaque commit, **Source Control** permet d’examiner les lignes modifiées. Dans le terminal intégré, `git status` indique les changements en attente ; `git add .` les prépare et `git commit -m "Message"` enregistre une version locale. L’enregistrement du fichier, la création du commit et l’envoi vers GitHub sont des actions distinctes.

### Envoyer les corrections et vérifier le fork

Après les trois commits, on envoie les changements au fork personnel :

```text
git push
```

On actualise la page du fork sur GitHub. Les fichiers corrigés et les trois nouveaux messages de commit doivent y apparaître. Le dépôt de l’enseignant garde son propre état ; les changements ont été envoyés vers le fork personnel.

**État attendu :** Pixelator démarre sans erreur, chaque clic agit sur la case choisie, un second clic l’efface sans modifier les autres cases, et les trois commits sont visibles sur le fork personnel.
