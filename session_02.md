# Séance 2 — De l’horloge à Pixelator

Trois exercices, dans cet ordre : **terminer l’horloge**, **résoudre l’ampoule**, puis **commencer Pixelator**.

**Les 45 premières minutes :** reprendre et terminer l’horloge, puis observer, diagnostiquer et terminer le programme de l’ampoule.

## 1. Terminer l’horloge

Reprenez le défi de minuit de la séance 1 : corriger le passage de `23:59` à `0:00` et comprendre où placer les instructions.

[Consignes — terminer l’horloge](./exercices/session_02-clock-final.md)

## 2. Résoudre l’ampoule · 15 minutes

Vous recevez un programme inachevé : l’ampoule est éteinte au chargement, un clic sur son image l’allume, puis elle reste bloquée. Reproduisez le problème et formulez le comportement attendu : chaque clic doit permettre de changer d’état.

Reprenez aussi la console de la première séance : le fond est noir dans le CSS. Choisissez une couleur claire en hexadécimal ou en RGB, puis affectez-la à `document.body.style.backgroundColor`. Vérifiez ce que le rechargement conserve.

Le HTML, le CSS, les images et le JavaScript incomplet sont fournis. **Examinez le code, expliquez le blocage, puis corrigez et complétez le programme.** Appuyez-vous sur les conditions, les blocs et les affectations déjà rencontrés dans l’horloge.

Le code qui déclenche le programme au clic est déjà en place. Vous pouvez l’utiliser sans devoir l’expliquer à cette étape. Vérifiez votre correction sur plusieurs clics, puis après un rechargement, en observant l’image et le texte de l’état.

[Consignes et fichiers de l’exercice](./exercices/session_02-ampoule.md)

## 3. Commencer Pixelator

**Première étape du mini-projet :** rendre interactive une grille de quatre pixels. Le HTML et le CSS sont fournis ; le travail porte sur JavaScript et le DOM. Après avoir utilisé le déclenchement au clic fourni dans l’ampoule, vous allez maintenant le mettre en place pour les pixels.

[Consignes — démarrer Pixelator](./exercices/session_02-pixelator.md)

1. Retrouver un pixel dans le DOM et modifier sa classe pour le peindre.
2. Déclencher cette modification au clic avec `addEventListener`.
3. Rendre les quatre pixels indépendants.
4. Vérifier le résultat et expliquer la chaîne : **clic → JavaScript → classe → apparence**.

**Résultat attendu :** chaque pixel rose devient violet au clic. Un deuxième clic le laisse violet ; le rechargement rétablit les couleurs initiales.

**Seuils pour la suite :** comment effacer un pixel déjà peint ? Comment passer de quatre à soixante-quatre pixels sans recopier les mêmes instructions ?
