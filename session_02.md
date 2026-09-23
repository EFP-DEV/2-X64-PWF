# Séance 2 — L’horloge, l’ampoule et les pixels

La séance se déroule dans cet ordre : **terminer l’horloge**, **résoudre l’ampoule**, **déposer l’ampoule sur GitHub**, **faire une pause de 10 minutes**, puis **peindre un motif avec Pixelator et l’animer**.

On utilise le compte GitHub dont la création était demandée à la fin de la séance 1. Le dépôt de l’ampoule se fait après sa vérification et avant de commencer Pixelator.

## 1. Terminer l’horloge · 15 minutes

On reprend le défi de minuit de la séance 1 : corriger le passage de `23:59` à `0:00` et comprendre où placer les instructions.

[Consignes — terminer l’horloge](./exercices/session_02-clock-final.md)

## 2. Résoudre l’ampoule · 30 minutes

On corrige le programme fourni pour allumer et éteindre l’ampoule à chaque clic, puis on fait varier le fond avec une classe CSS. La vérification porte sur la cohérence de l’image, du texte et du fond, ainsi que sur le retour à l’état éteint au rechargement.

[Consignes et fichiers de l’exercice](./exercices/session_02-ampoule.md)

## 3. Déposer l’ampoule sur GitHub

On dépose la version terminée de l’ampoule dans un dépôt personnel nommé `ampoule-session-02`, depuis le navigateur. Les cinq fichiers nécessaires doivent être présents : `index.html`, `dark-room.css`, `bulb-switch.js`, `ampoule_off.png` et `ampoule_on.png`.

On télécharge ensuite la version déposée pour vérifier que l’image, le texte et le fond changent ensemble à chaque clic, puis reviennent à l’état éteint au rechargement. On conserve l’adresse du dépôt. **Cette vérification se termine avant le passage à Pixelator.**

[Consignes — déposer et vérifier l’ampoule sur GitHub](./exercices/session_02-ampoule-github.md)

## ⏸️ Interlude — pause de 10 minutes

La reprise commence avec la [fiche Pixelator — Séquence](./exercices/session_02-pixelator-sequence.md) : peindre un motif avec une seule couleur sur quatre pixels.

## 4. Pixelator — Séquence : peindre un motif

Le HTML, le CSS et l’outil d’attente pour la suite sont fournis. La page de départ contient quatre pixels, chacun avec un identifiant unique. On crée uniquement `pixelator.js` : on choisit une seule couleur, en hexadécimal ou sous la forme `rgb(r, g, b)`, puis on peint les cases choisies avec des instructions directes utilisant `querySelector` et `.style.backgroundColor`. Le motif apparaît au chargement de la page, ouverte directement dans le navigateur.

[Consignes et fichiers — Pixelator : séquence](./exercices/session_02-pixelator-sequence.md)

## 5. Pixelator — Temps : animer un motif

**Rotation guidée : 15 minutes, puis exploration : 15 minutes.** On reste sur quatre pixels et on fait circuler une seule case colorée autour du carré : `pixel1 → pixel2 → pixel4 → pixel3 → pixel1`.

Le démarrage et l’outil d’attente sont fournis. Dans `pixelator.js`, on écrit une séquence : peindre, attendre avec `await attendre(1000);`, effacer, puis peindre la case suivante. Le premier pixel apparaît au chargement. Après un tour, la séquence s’arrête sur ce même pixel ; on recharge la page pour la rejouer. On modifie les durées d’attente pour changer la cadence.

On consacre ensuite **15 minutes à une autre animation** : sens inverse, aller-retour ou alternance des diagonales. On prévoit l’ordre des affichages, puis on vérifie la séquence et son état final. Chaque rechargement permet un nouvel essai.

On reprend enfin la rotation de référence pour agrandir le parcours sur les pages fournies de huit, puis de seize pixels. On prolonge la séquence d’attentes, d’effacements et de peintures, en conservant une seule case colorée à chaque affichage. L’ordre des instructions détermine le parcours. Leur répétition donne une raison concrète d’aborder les boucles dans la suite du cours.

[Consignes et fichiers — Pixelator : temps](./exercices/session_02-pixelator-time.md)
