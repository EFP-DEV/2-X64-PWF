# Préparation de la démonstration — séance 4

[Séance 4](../session_04.md) · [Consignes Git, GitHub et Pixelator](./session_04-git-pixelator.md)

On prépare VS Code pour les opérations Git : Git doit être installé sur le poste et accessible depuis le terminal intégré. La commande `git --version` permet de le vérifier. Cette préparation technique se fait avant l’atelier. La connexion au compte GitHub doit permettre l’envoi depuis VS Code. [Préparation des postes — documentation VS Code](https://code.visualstudio.com/docs/sourcecontrol/quickstart#prerequisites)

On prépare le dépôt public `EFP-DEV/PWF-pixelator` avec `peindre-au-clic.html`, sa feuille de style et `pixelator-clic.js` sur la branche `main`. Le code de départ contient trois problèmes distincts : une erreur de syntaxe qui bloque son exécution, un ordre de conditions qui peint puis efface la case pendant le même clic, et une condition qui lit l’état d’une case autre que celle cliquée.

On vérifie que les problèmes se révèlent dans cet ordre après chaque correction et que la page n’exige aucun serveur. Les essais portent sur plusieurs cases afin de vérifier que leur état reste indépendant. Le fork doit permettre de créer de nouveaux commits et de les envoyer avec `git push`.
