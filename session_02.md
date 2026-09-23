# Séance 2 — De l’horloge à Pixelator

Trois exercices, dans cet ordre : **terminer l’horloge**, **résoudre l’ampoule**, puis **commencer Pixelator**.

**Les 45 premières minutes :**

| Temps | Travail |
|---|---|
| 0–15 min | Terminer l’horloge et vérifier le passage de minuit |
| 15–30 min | Diagnostiquer l’ampoule, compléter ses deux états et vérifier les clics |
| 30–45 min | Manipuler les classes CSS, relier le fond à l’état et vérifier l’ensemble |

Après Pixelator, réservez **20 minutes pour déposer le projet sur GitHub et remettre son lien sur la plateforme du cours**, avant le bilan final.

## 1. Terminer l’horloge · 15 minutes

Reprenez le défi de minuit de la séance 1 : corriger le passage de `23:59` à `0:00` et comprendre où placer les instructions.

[Consignes — terminer l’horloge](./exercices/session_02-clock-final.md)

## 2. Résoudre l’ampoule · 30 minutes

**15 minutes pour diagnostiquer et corriger, puis 15 minutes pour les classes CSS et la vérification.**

Vous recevez un programme inachevé : l’ampoule est éteinte au chargement, un clic sur son image l’allume, puis elle reste bloquée. Reproduisez le problème et formulez le comportement attendu : chaque clic doit permettre de changer d’état.

Le HTML, le CSS, les images et le JavaScript incomplet sont fournis. **Examinez le code, expliquez le blocage, puis corrigez et complétez le programme.** Appuyez-vous sur les conditions, les blocs et les affectations déjà rencontrés dans l’horloge.

Le code qui déclenche le programme au clic est déjà en place. Vous pouvez l’utiliser sans devoir l’expliquer à cette étape. Vérifiez votre correction sur plusieurs clics, puis après un rechargement, en observant l’image et le texte de l’état.

**Une fois l’ampoule fonctionnelle, faites varier le fond.** Choisissez un triplet de couleur claire et sa représentation (`rgb(r, g, b)` ou `#RRGGBB`), puis modifiez le fond de `.light-room` dans le CSS. Essayez `document.body.classList.add("light-room")` et `document.body.classList.remove("light-room")` dans la console, puis placez ces instructions dans les blocs correspondants du programme. Vérifiez que le fond suit l’état de l’ampoule.

**CSS définit l’apparence ; JavaScript décide quand l’appliquer.** La classe regroupe le fond et le texte ; les couleurs se modifient dans le CSS et le retrait de la classe rétablit l’apparence initiale.

**Avant Pixelator :** montrez plusieurs clics successifs avec une image, un texte et un fond cohérents, puis le retour à l’état initial au rechargement. Expliquez ce que l’ajout et le retrait de `light-room` changent dans le HTML et dans l’apparence.

[Consignes et fichiers de l’exercice](./exercices/session_02-ampoule.md)

## 3. Commencer Pixelator

**Première étape du mini-projet :** rendre interactive une grille de quatre pixels. Après l’ampoule, reprenez le déclenchement au clic qui était fourni : rôle et anatomie d’un écouteur, fonction appelée par le navigateur et élément désigné par `event.target`. Le HTML et le CSS de Pixelator sont fournis ; vous réutilisez `querySelector` et `classList.add` pour construire l’interaction.

[Consignes — démarrer Pixelator](./exercices/session_02-pixelator.md)

1. Installer la page et vérifier les quatre carrés roses.
2. Retrouver un pixel dans le DOM et le peindre avec `classList.add("painted")`.
3. Placer cette instruction dans `paintPixel(event)`, qui agit sur `event.target`, puis enregistrer la fonction avec `addEventListener`.
4. Utiliser la même fonction avec quatre écouteurs explicites, un par pixel.
5. Vérifier le résultat et expliquer la chaîne : **clic → fonction appelée avec event → classe ajoutée à event.target → apparence**.

**Résultat attendu :** chaque pixel rose devient violet au clic. Un deuxième clic le laisse violet ; le rechargement rétablit les couleurs initiales.

## 4. Remettre Pixelator avec GitHub · 20 minutes

Enregistrez et vérifiez votre projet, puis déposez ses trois fichiers dans votre dépôt personnel public `pixelator-session-02`, depuis le navigateur. Téléchargez la version déposée pour vérifier son fonctionnement, puis remettez **le lien du dépôt sur la plateforme du cours avant la fin de la séance**.

[Consignes — déposer et remettre Pixelator](./exercices/session_02-pixelator.md#remise-github)

## Bilan après la remise

**Fin de séance :** imaginez huit, seize, puis beaucoup plus de carrés. Combien de sélections et d’enregistrements d’écouteur faudrait-il recopier ? À partir de quand cette répétition devient-elle fastidieuse ? La fonction de peinture est commune, mais il nous faut aussi **un système dans le code** pour organiser ce travail répétitif. La solution ouvrira la prochaine leçon.
