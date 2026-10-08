# Préparation de la démonstration — séance 4

[Séance 4](../session_04.md) · [Consignes Git, GitHub et Pixelator](./session_04-git-pixelator.md)

## Préparer le poste de démonstration

Git doit être installé sur le poste et accessible depuis le terminal intégré de VS Code. On vérifie sa présence et l’identité utilisée pour les commits :

```text
git --version
git config --get user.name
git config --get user.email
```

Si l’identité manque, on reprend sa configuration dans la fiche Git. Depuis un dépôt personnel d’essai cloné en HTTPS, on crée un commit, puis on l’envoie depuis le terminal intégré. On suit la connexion GitHub proposée et on vérifie le commit sur la page du dépôt. Cette préparation technique se fait avant l’atelier. [Préparation des postes — documentation VS Code](https://code.visualstudio.com/docs/sourcecontrol/quickstart#prerequisites)

## Préparer le dépôt distribué

Le dépôt public [EFP-DEV/labo-frontend-pixelator](https://github.com/EFP-DEV/labo-frontend-pixelator) contient `peindre-au-clic.html`, `pixelator-layout.css` et `pixelator-clic.js` sur la branche `main`. Le README indique la page à ouvrir et renvoie vers les consignes du cours.

Le code de départ contient trois problèmes : une parenthèse manquante dans la première association de clic, deux `if` successifs qui peignent puis effacent la cible, et une première condition qui lit toujours la couleur de `pixel1`.

## Vérifier la révélation des trois problèmes

On copie les trois fichiers dans un dossier local distinct pour réaliser les essais. On ouvre le `peindre-au-clic.html` de cette copie directement dans le navigateur, avec la console. Toutes les corrections ci-dessous portent sur cette copie.

1. **Syntaxe.** On recharge : la grille apparaît et la console signale un `SyntaxError`. On rétablit uniquement la parenthèse fermante après le sélecteur de la première association de clic. Après l’enregistrement et le rechargement, l’erreur disparaît ; les cases restent blanches après chaque clic.
2. **Structure conditionnelle.** On recharge et on suit les valeurs pendant un clic sur `pixel1` : le premier bloc applique le violet, le second le retire. On remplace le second `if (...)` par `else`, en conservant son bloc d’effacement. Après l’enregistrement et le rechargement, deux clics successifs sur `pixel1` doivent la peindre puis l’effacer.
3. **État de la cible.** On recharge, on peint `pixel1`, puis on clique sur `pixel4`. Cette dernière reste blanche, alors que deux cases devraient être peintes. On remplace l’accès à la couleur de `pixel1` dans la première condition par `event.target.style.backgroundColor`. Après l’enregistrement et le rechargement, on réalise la séquence complète indiquée dans la fiche Git pour vérifier l’indépendance des quatre cases.

Avant la distribution, on relit le JavaScript du dépôt : il contient la parenthèse manquante, les deux `if` successifs et la condition qui consulte `pixel1`. La version distribuée sert de départ à l’exercice. Les résultats des essais manuels sont relevés après leur réalisation.
