# Tickets

---

### Ticket 1 — Thermomètre IoT

**Client :**
L’agence **GreenSense** veut un widget météo pour son tableau de bord.

**Règles :**
– Si la température < 0 → afficher `"Icône flocon"`
– Sinon → afficher `"Icône soleil"`

**Tâche :**
Écrire un programme qui choisit l’icône selon la température.

---

### Ticket 2 — Formulaire d’inscription

**Client :**
La plateforme **JoinUs** prépare son écran d’onboarding.

**Règles :**
– Si l’âge < 18 → afficher `"Formulaire restreint"`
– Sinon → `"Formulaire complet"`

**Tâche :**
Écrire un programme qui sélectionne le bon formulaire selon l’âge saisi.

---

### Ticket 3 — Prix du cinéma

**Client :**
Le site **CineBook** veut afficher le prix des billets sur son interface.

**Règles :**
– Prix normal = 10€
– Réduction = 6€ si âge < 12 ou ≥ 65

**Tâche :**
Écrire un programme qui calcule le prix à afficher.

---

### Ticket 4 — Numérotation des cartes (pair/impair)

**Client :**
Le studio **PixLab** conçoit une galerie d’images.

**Règles :**
– Carte paire → `"fond clair"`
– Carte impaire → `"fond foncé"`

**Tâche :**
Écrire un programme qui attribue le bon style en fonction du numéro de carte.

---

### Ticket 5 — Mini-calculatrice

**Client :**
L’agence **UIBoost** développe un outil de design system.

**Règles :**
– Si `"+"` → augmenter la taille de la typo
– Si `"-"` → réduire la taille de la typo

**Tâche :**
Écrire un programme qui modifie la taille affichée selon l’opérateur choisi.

---

### Ticket 6 — Feu de circulation

**Client :**
La startup **FlowUX** veut tester une animation de boutons.

**Règles :**
– `"rouge"` → `"Bouton désactivé"`
– `"orange"` → `"Bouton attention"`
– `"vert"` → `"Bouton actif"`

**Tâche :**
Écrire un programme qui affiche l’état du bouton selon la couleur.

---


### Ticket 7 — Thermomètre IoT (version 2)

**Client :**
GreenSense veut enrichir son widget.

**Règles :**
– < 0 → `"Icône flocon"`
– > 35 → `"Icône feu"`
– Sinon → `"Icône soleil"`

**Tâche :**
Écrire un programme qui choisit l’icône météo adaptée.

---

### Ticket 8 — Formulaire planétaire (Orbulon/Zorg)

**Client :**
JoinUs lance une expérience de **formulaire gamifié** inspiré de la planète Orbulon.

**Règles :**
>– Utilisateur standard → majeur à 25 ans
>
>– Zorg → majeur à 30 ans

**Tâche :**
Demander "Êtes-vous un Zorg ?" puis l’âge, et afficher si le formulaire complet est débloqué.

---

### Ticket 9 — Prix du cinéma (version 2)

**Client :**
CineBook veut valoriser ses abonnés.

**Règles :**
– Prix normal : 10€
– Réduction : 6€ si âge < 12 ou ≥ 65
– Carte membre → encore –2€

**Tâche :**
Écrire un programme qui calcule le tarif final affiché.

---

### Ticket 10 — Numérotation des cartes (explication)

**Client :**
PixLab veut de la pédagogie pour ses juniors.

**Règles :**
– Paire → `"fond clair (numéro divisible par 2)"`
– Impaire → `"fond foncé (reste 1 quand divisé par 2)"`

**Tâche :**
Écrire un programme qui explique le choix de style.

---

### Ticket 11 — Mini-calculatrice (version 2)

**Client :**
UIBoost enrichit son design system.

**Règles :**
– `"+"` → augmenter
– `"-"` → réduire
– `"*"` → multiplier par un facteur
– `"/"` → diviser (mais pas par 0)

**Tâche :**
Écrire un programme qui applique l’opération sur une taille de police.

---

### Ticket 12 — Feu de circulation (version 2)

**Client :**
FlowUX veut rendre son animation robuste.

**Règles :**
– `"rouge"` → `"Bouton désactivé"`
– `"orange"` → `"Bouton attention"`
– `"vert"` → `"Bouton actif"`
– Autre → `"État inconnu"`

**Tâche :**
Écrire un programme qui gère aussi les entrées invalides.

---

### Ticket 13 — Thermomètre IoT (filtrage)

**Client :**
GreenSense veut fiabiliser les données.

**Règles :**
– Si température < -50 ou > 60 → `"Valeur invalide"`
– Sinon → appliquer Ticket 7

**Tâche :**
Écrire un programme qui filtre les valeurs aberrantes.

---

### Ticket 14 — Formulaire Orbulon (filtrage)

**Client :**
JoinUs veut éviter les entrées incohérentes.

**Règles :**
– Réponse à "Êtes-vous Zorg ?" doit être `"oui"` ou `"non"` (peu importe la casse)
– Âge doit être entre 0 et 200
– Sinon → `"Entrée invalide"`
– Sinon → appliquer Ticket 8

**Tâche :**
Écrire un programme qui filtre et applique les règles d’Orbulon.

---

### Ticket 15 — Prix du cinéma (filtrage)

**Client :**
CineBook veut éviter les abus.

**Règles :**
– Âge valide : 0–120
– Réponse carte membre valide : `"oui"` ou `"non"`
– Sinon → `"Entrée invalide"`
– Sinon → appliquer Ticket 9

**Tâche :**
Écrire un programme qui filtre avant de calculer le prix.

---

### Ticket 16 — Numérotation des cartes (filtrage)

**Client :**
PixLab reçoit parfois des données corrompues.

**Règles :**
– Si le numéro n’est pas un entier → `"Numéro invalide"`
– Sinon → appliquer Ticket 10

**Tâche :**
Écrire un programme qui vérifie les numéros de cartes avant d’appliquer un style.

---

### Ticket 17 — Mini-calculatrice (filtrage)

**Client :**
UIBoost veut un système solide.

**Règles :**
– Vérifier que les tailles sont des nombres valides
– Vérifier que l’opérateur est parmi `+ - * /`
– Division par 0 → `"Erreur division par zéro"`
– Sinon → appliquer Ticket 11

**Tâche :**
Écrire un programme qui valide toutes les entrées avant le calcul.

---

### Ticket 18 — Feu de circulation (filtrage)

**Client :**
FlowUX veut normaliser l’entrée utilisateur.

**Règles :**
– Accepter `"rouge"`, `"orange"`, `"vert"` (peu importe la casse)
– Sinon → `"Entrée invalide"`
– Sinon → appliquer Ticket 12

**Tâche :**
Écrire un programme qui normalise et filtre avant d’afficher l’état.
