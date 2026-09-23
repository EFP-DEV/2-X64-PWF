# Déposer l’ampoule sur GitHub

[Séance 2](../session_02.md) · [Exercice Ampoule](./session_02-ampoule.md)

L’ampoule fonctionne. On enregistre tous les fichiers du projet, puis on utilise le compte GitHub préparé après la séance 1 pour y déposer le travail depuis le navigateur.

## Créer le dépôt

Un **dépôt** rassemble les fichiers d’un projet et l’historique de leurs versions.

1. On se connecte à [GitHub](https://github.com/), puis on ouvre [la page de création d’un dépôt](https://github.com/new).
2. On choisit le compte personnel comme propriétaire et on nomme le dépôt `ampoule-session-02`.
3. On choisit sa visibilité : `Public` rend le dépôt visible par tous ; `Private` réserve l’accès au compte propriétaire et aux personnes invitées.
4. On laisse les options README, `.gitignore` et licence désactivées pour créer un dépôt vide, puis on clique sur **Create repository**.

Si ce dépôt existe déjà pour l’ampoule, on l’ouvre pour y ajouter le travail.

[Aide GitHub — créer un dépôt](https://docs.github.com/fr/repositories/creating-and-managing-repositories/creating-a-new-repository)

## Envoyer les cinq fichiers

Dans le dépôt vide, on suit le lien **uploading an existing file**. S’il contient déjà des fichiers, on utilise **Add file → Upload files**.

On sélectionne les cinq fichiers de la version terminée pour les placer côte à côte à la racine du dépôt :

```text
ampoule-session-02/
├── index.html
├── dark-room.css
├── bulb-switch.js
├── ampoule_off.png
└── ampoule_on.png
```

On attend la fin du chargement des fichiers. On saisit un message, par exemple `Ajouter l’ampoule fonctionnelle`, puis on valide avec **Commit changes**. Un **commit** enregistre une version du projet avec un message qui décrit le changement. Si un choix de branche apparaît, on conserve la branche principale du dépôt personnel.

On vérifie que les cinq fichiers sont visibles dans le dépôt, y compris les deux images.

[Aide GitHub — ajouter des fichiers](https://docs.github.com/fr/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)

## Vérifier la version déposée

Depuis la page principale du dépôt, on choisit **Code → Download ZIP**. On extrait l’archive dans un autre dossier, puis on ouvre son `index.html` dans le navigateur. Le test porte ainsi sur la copie récupérée depuis GitHub.

On reprend les vérifications de l’ampoule : état éteint au chargement, alternance à chaque clic, cohérence entre l’image, le texte et le fond, puis retour à l’état éteint au rechargement.

Si on corrige un fichier local, on envoie de nouveau sa version modifiée au même endroit sur GitHub, puis on valide un nouveau commit. Les modifications locales ne sont pas envoyées automatiquement. On télécharge à nouveau la copie déposée pour la vérifier.

[Aide GitHub — télécharger une archive](https://docs.github.com/fr/repositories/working-with-files/using-files/downloading-source-code-archives)

On conserve l’adresse du dépôt, de la forme `https://github.com/nom-du-compte/ampoule-session-02`. Une fois le dépôt vérifié, on fait une **pause de 10 minutes**, puis on passe à [Pixelator — Séquence](./session_02-pixelator-sequence.md).
