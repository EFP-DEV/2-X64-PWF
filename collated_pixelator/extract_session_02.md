> Contenu Pixelator déprécié, extrait de `session_02.md`.

# Séance 2 — De l’horloge à Pixelator

| Séance | Notions du plan | Travail sur Pixelator | Résultat attendu |
|---|---|---|---|
| **3 — 02/10/2026** | Structures de contrôle : conditions, répétitions et construction d’algorithmes. | Commencer par ajouter un sélecteur de couleur à la grille existante. Travailler ensuite les boucles : calculer `taille × taille`, créer les pixels et enregistrer leurs écouteurs, en réinvestissant les conditions. Terminer la séance par les premiers essais du curseur de taille. | La couleur choisie est utilisée pour peindre et la grille est générée par une boucle. Les étudiants expliquent le compteur, la condition de poursuite et les étapes répétées. Le redimensionnement est en cours d’exploration ; son achèvement est prévu en séance 4. |
| **4 — 09/10/2026** | Fonctions : nommer, organiser et réutiliser des comportements. Structuration du programme. | Reprendre les essais du curseur de taille et terminer Pixelator. Organiser la construction et la reconstruction de la grille dans une fonction paramétrée, appelée au chargement et au changement de taille. Reprendre explicitement `paintPixel(event)` et vérifier toutes les interactions. | Le projet est terminé : peindre avec la couleur choisie, redimensionner la grille et peindre à nouveau fonctionnent ensemble. Les étudiants distinguent définition, appel, paramètre et argument dans des fonctions réellement réutilisées. |

**D’une séance à l’autre :**

- **Séance 3 → 4 :** terminer la séance 3 sur les essais du curseur de taille et les difficultés rencontrées. En séance 4, les reprendre pour achever le redimensionnement ; le besoin de construire la grille au chargement et au changement de taille motive une fonction réutilisable. Les deux blocs du prototype servent de point de comparaison.

Le prototype actuel fixe la cible fonctionnelle : peindre les pixels, choisir une couleur et régler la taille de la grille. **Redimensionner la grille efface le dessin.**
