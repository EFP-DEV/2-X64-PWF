# Séance 4 — Pierre, papier, ciseaux

## 1. Récupérer le projet avec GitHub

On ouvre le dépôt d’exercice fourni par l’enseignant. On en crée un **fork**, puis on **clone** cette copie personnelle dans le dossier des projets du cours. Le projet s’ouvre dans VS Code ; `index.html` s’ouvre directement dans le navigateur.

L’exercice est autonome. On reprend le parcours **fork → clone → commit → push** rencontré en séance 3 pour travailler sur un nouveau projet.

Le [document TODO](./exercices/pierre-papier-ciseaux/TODO.md) accompagne les [fichiers de départ](./exercices/pierre-papier-ciseaux/). Il présente le projet, son état actuel, les comportements attendus et les trois travaux à réaliser. On commence par lire ce document et observer la page, l’inspecteur et la console.

### Le projet attendu

Le jeu propose **trois choix illustrés : pierre, papier et ciseaux**.

On clique sur un bouton illustré pour choisir un symbole. L’ordinateur tire son choix parmi les trois possibilités. Les boutons disparaissent, les deux images apparaissent côte à côte et un message annonce une victoire, une défaite ou une égalité du point de vue du joueur.

**On recharge la page pour rejouer.** Chaque manche est indépendante. Le programme ne gère ni score cumulé ni réinitialisation.

Le tirage aléatoire est fourni. Les règles sont celles du jeu classique :

- La pierre bat les ciseaux.
- Les ciseaux battent le papier.
- Le papier bat la pierre.
- Deux choix identiques donnent une égalité.

### L’état du projet fourni

Le HTML, le CSS et les trois images SVG sont complets. Le JavaScript comporte une erreur de syntaxe, une erreur dans l’ordre des instructions et un calcul du résultat incomplet. L’actualisation des images reste à programmer. **La solution complète ne fait pas partie des fichiers distribués.**

Les trois travaux portent sur JavaScript. Les événements, le tirage aléatoire et le passage des boutons au résultat sont fournis. Aucune boucle n’est à écrire.

Les deux images du résultat représentent initialement une pierre. Elles restent fixes pendant les deux premiers travaux ; leur actualisation constitue le troisième travail.

Les choix et le résultat calculé sont conservés dans les **attributs HTML `data-*`**. L’inspecteur permet d’observer ces valeurs après une action, même quand les images ne correspondent pas encore à la manche. Le TODO explique les repères de lecture du code fourni.

## 2. Travail facile — Réparer le démarrage et l’ordre des instructions

Deux problèmes sont à résoudre : **une erreur de syntaxe** et **une erreur dans l’ordre des instructions**.

On relève le message de la console et on retrouve l’instruction concernée. Après la correction de syntaxe, le programme peut s’exécuter ; on observe alors le comportement qui reste incorrect.

Le verdict affiché reste « Défaite », même lorsque l’attribut `data-resultat` indique un autre résultat. On suit les instructions dans leur ordre d’exécution pour expliquer cet écart et proposer une correction.

**Résultat attendu :** le programme démarre et le verdict affiché correspond au résultat calculé dans `data-resultat`, notamment pour une égalité. Le calcul des autres combinaisons sera complété au travail suivant.

On conserve ce premier travail dans un commit dont le message décrit la correction.

## 3. Travail intermédiaire — Terminer un comportement existant

Le calcul fourni distingue déjà l’égalité et la victoire de pierre contre ciseaux. On complète les conditions pour reconnaître aussi les victoires de papier contre pierre et de ciseaux contre papier. Dans les autres cas, le joueur perd.

**Résultat attendu :** les neuf combinaisons donnent les trois égalités, les trois victoires et les trois défaites attendues. On compare les choix présents dans les attributs `data-*` au verdict visible. Le TODO décrit une vérification manuelle avec un tirage temporairement fixé ; le tirage aléatoire est rétabli avant le commit.

On enregistre le comportement complété dans un nouveau commit.

## 4. Travail difficile — Écrire et appeler `afficherChoix(id, choix)`

On écrit la fonction `afficherChoix(id, choix)` pour renseigner la source d’une image et son texte alternatif. Le paramètre `id` désigne l’image à actualiser ; `choix` indique le symbole à afficher. Les images sont déjà présentes dans le HTML et les fichiers SVG sont fournis.

La définition et les appels de cette fonction sont absents du JavaScript de départ. On ajoute deux appels : un pour afficher le choix du joueur, un pour celui de l’ordinateur.

La fonction est réellement réutilisée. On distingue sa définition, les valeurs qu’elle reçoit et les endroits où elle est appelée.

**Résultat attendu :** les deux images correspondent aux deux choix, avec un texte alternatif qui nomme le symbole représenté.

On conserve cette nouvelle fonctionnalité dans un troisième commit. Des commits supplémentaires peuvent décrire les ajustements intermédiaires.

## 5. Expliquer les corrections et partager le résultat

Pour chaque travail, on **identifie le problème, confirme sa cause avec une observation, propose une solution puis la met en œuvre**. La console, les attributs HTML et le comportement visible permettent de justifier les modifications du JavaScript.

On vérifie manuellement les trois égalités, les trois victoires et les trois défaites possibles. Les images doivent correspondre aux choix annoncés. Après une manche, les boutons de choix ont disparu ; un rechargement permet de jouer à nouveau.

Le dépôt contient **au moins trois commits de travail**, avec un message qui décrit chaque correction ou ajout. Après les vérifications et le rétablissement du tirage aléatoire, on envoie les commits avec `git push`, puis on retrouve sur GitHub les fichiers modifiés et les messages qui décrivent le travail.
