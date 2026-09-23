# Séance 2 — L’horloge, l’ampoule et Pixelator

La séance se déroule dans cet ordre : **terminer l’horloge**, **résoudre l’ampoule**, **déposer l’ampoule sur GitHub**, **faire une pause de 10 minutes**, puis **peindre un motif avec Pixelator**.

Nous utilisons le compte GitHub dont la création était demandée à la fin de la séance 1. Le dépôt de l’ampoule se fait après sa vérification et avant de commencer Pixelator.

**Les 45 premières minutes :**

| Temps | Travail |
|---|---|
| 0–15 min | Terminer l’horloge et vérifier le passage de minuit |
| 15–30 min | Diagnostiquer l’ampoule, compléter ses deux états et vérifier les clics |
| 30–45 min | Manipuler les classes CSS, relier le fond à l’état et vérifier l’ensemble |

## 1. Terminer l’horloge · 15 minutes

Nous reprenons le défi de minuit de la séance 1 : corriger le passage de `23:59` à `0:00` et comprendre où placer les instructions.

[Consignes — terminer l’horloge](./exercices/session_02-clock-final.md)

## 2. Résoudre l’ampoule · 30 minutes

**15 minutes pour diagnostiquer et corriger, puis 15 minutes pour les classes CSS et la vérification.**

Nous recevons un programme inachevé : l’ampoule est éteinte au chargement, un clic sur son image l’allume, puis elle reste bloquée. Nous reproduisons le problème et formulons le comportement attendu : chaque clic doit permettre de changer d’état.

Le HTML, le CSS, les images et le JavaScript incomplet sont fournis. **Nous examinons le code, expliquons le blocage, puis corrigeons et complétons le programme.** Nous nous appuyons sur les conditions, les blocs et les affectations déjà rencontrés dans l’horloge.

Le code qui déclenche le programme au clic est déjà en place. Nous pouvons l’utiliser sans devoir l’expliquer à cette étape. Nous vérifions notre correction sur plusieurs clics, puis après un rechargement, en observant l’image et le texte de l’état.

**Une fois l’ampoule fonctionnelle, nous faisons varier le fond.** Nous choisissons un triplet de couleur claire et sa représentation (`rgb(r, g, b)` ou `#RRGGBB`), puis modifions le fond de `.light-room` dans le CSS. Nous essayons `document.body.classList.add("light-room")` et `document.body.classList.remove("light-room")` dans la console, puis plaçons ces instructions dans les blocs correspondants du programme. Nous vérifions que le fond suit l’état de l’ampoule.

**CSS définit l’apparence ; JavaScript décide quand l’appliquer.** La classe regroupe le fond et le texte ; les couleurs se modifient dans le CSS et le retrait de la classe rétablit l’apparence initiale.

**Vérification de l’ampoule :** nous montrons plusieurs clics successifs avec une image, un texte et un fond cohérents, puis le retour à l’état initial au rechargement. Nous expliquons ce que l’ajout et le retrait de `light-room` changent dans le HTML et dans l’apparence.

[Consignes et fichiers de l’exercice](./exercices/session_02-ampoule.md)

## 3. Déposer l’ampoule sur GitHub

Nous déposons notre version terminée de l’ampoule dans un dépôt personnel nommé `ampoule-session-02`, depuis le navigateur. Les cinq fichiers nécessaires doivent être présents : `index.html`, `dark-room.css`, `bulb-switch.js`, `ampoule_off.png` et `ampoule_on.png`.

Nous téléchargeons ensuite la version déposée et vérifions que l’image, le texte et le fond changent ensemble à chaque clic, puis reviennent à l’état éteint au rechargement. Nous conservons l’adresse du dépôt. **Nous terminons cette vérification avant de passer à Pixelator.**

[Consignes — déposer et vérifier l’ampoule sur GitHub](./exercices/session_02-ampoule.md#depot-github)

## ⏸️ Interlude — pause de 10 minutes

La reprise commence avec la [fiche Pixelator](./exercices/session_02-pixelator.md) : peindre un motif avec une seule couleur sur quatre pixels.

## 4. Pixelator — Peindre un motif

Le HTML et le CSS sont fournis. La page de départ contient quatre pixels, chacun avec un identifiant unique. Nous créons uniquement `pixelator.js` : nous choisissons une seule couleur, en hexadécimal ou sous la forme `rgb(r, g, b)`, puis peignons les cases de notre choix avec des instructions directes utilisant `querySelector` et `.style.backgroundColor`. Le motif apparaît au chargement de la page.

Nous passons ensuite à la page fournie de huit pixels. Dans le même fichier JavaScript, nous ajoutons quatre instructions pour peindre les quatre nouvelles cases avec la même couleur.

[Consignes et fichiers — Pixelator, première leçon](./exercices/session_02-pixelator.md)
