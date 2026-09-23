# Séance 2 — L’horloge, l’ampoule et Pixelator

La séance se déroule dans cet ordre : **terminer l’horloge**, **résoudre l’ampoule**, **déposer l’ampoule sur GitHub**, **faire une pause de 10 minutes**, puis **peindre un motif avec Pixelator**.

Utilisez le compte GitHub dont la création était demandée à la fin de la séance 1. Le dépôt de l’ampoule se fait après sa vérification et avant de commencer Pixelator.

**Les 45 premières minutes :**

| Temps | Travail |
|---|---|
| 0–15 min | Terminer l’horloge et vérifier le passage de minuit |
| 15–30 min | Diagnostiquer l’ampoule, compléter ses deux états et vérifier les clics |
| 30–45 min | Manipuler les classes CSS, relier le fond à l’état et vérifier l’ensemble |

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

**Vérification de l’ampoule :** montrez plusieurs clics successifs avec une image, un texte et un fond cohérents, puis le retour à l’état initial au rechargement. Expliquez ce que l’ajout et le retrait de `light-room` changent dans le HTML et dans l’apparence.

[Consignes et fichiers de l’exercice](./exercices/session_02-ampoule.md)

## 3. Déposer l’ampoule sur GitHub

Déposez votre version terminée de l’ampoule dans un dépôt personnel nommé `ampoule-session-02`, depuis le navigateur. Les cinq fichiers nécessaires doivent être présents : `index.html`, `dark-room.css`, `bulb-switch.js`, `ampoule_off.png` et `ampoule_on.png`.

Téléchargez ensuite la version déposée et vérifiez que l’image, le texte et le fond changent ensemble à chaque clic, puis reviennent à l’état éteint au rechargement. Conservez l’adresse du dépôt. **Terminez cette vérification avant de passer à Pixelator.**

[Consignes — déposer et vérifier l’ampoule sur GitHub](./exercices/session_02-ampoule.md#depot-github)

## ⏸️ Interlude — pause de 10 minutes

La reprise commence avec la [fiche Pixelator](./exercices/session_02-pixelator.md) : peindre un motif avec une seule couleur sur quatre pixels.

## 4. Pixelator — Peindre un motif

Le HTML et le CSS sont fournis. La page de départ contient quatre pixels, chacun avec un identifiant unique. Créez uniquement `pixelator.js` : choisissez une seule couleur, en hexadécimal ou sous la forme `rgb(r, g, b)`, puis peignez les cases de votre choix avec des instructions directes utilisant `querySelector` et `.style.backgroundColor`. Le motif apparaît au chargement de la page.

Passez ensuite à la page fournie de huit pixels. Dans le même fichier JavaScript, ajoutez quatre instructions pour peindre les quatre nouvelles cases avec la même couleur.

[Consignes et fichiers — Pixelator, première leçon](./exercices/session_02-pixelator.md)
