# Exercices – Premiers pas avec la boucle `while`

Objectif : comprendre ce qu’est une boucle en la voyant **répéter une action simple** plusieurs fois.
Aucun calcul complexe, aucune fonction, aucun tableau — seulement des variables et des répétitions.

---

## **1. Compter en montant**

**Énoncé :**
Affiche les nombres de 1 à 5 inclus.
À chaque tour, la boucle doit afficher le numéro actuel, puis passer au suivant.

**Exemple de sortie :**

```
Loop number: 1
Loop number: 2
Loop number: 3
Loop number: 4
Loop number: 5
```

---

## **2. Compter en descendant**

**Énoncé :**
Affiche une suite de nombres en partant de 5 jusqu’à 1.
Quand la boucle est terminée, affiche « Blast off! ».

**Exemple de sortie :**

```
5
4
3
2
1
Blast off!
```

---

## **3. Boucle infinie (puis arrêt manuel)**

**Énoncé :**
Crée une boucle qui tourne sans fin tant qu’une condition reste vraie.
Fais-la afficher sans arrêt « Still looping... », puis arrête-la manuellement (ou grâce à une instruction spéciale).

**Exemple de sortie :**

```
Still looping...
Still looping...
Still looping...
```

*(puis arrêt manuel)*

---

## **4. Répéter un message**

**Énoncé :**
Affiche trois fois la phrase « Hello! ».
L’objectif est de répéter une même instruction plusieurs fois sans la réécrire.

**Exemple de sortie :**

```
Hello!
Hello!
Hello!
```

---

## **5. Attendre la bonne réponse**

**Énoncé :**
Tant que l’utilisateur n’a pas tapé “ok”, continuer à poser la question :

> Type 'ok' to continue:

Quand la bonne réponse est donnée, affiche « Thanks! ».

**Exemple de sortie (console + saisie utilisateur) :**

```
Type 'ok' to continue: no
Type 'ok' to continue: ok
Thanks!
```

---

## **6. Additionner jusqu’à 10**

**Énoncé :**
Commence avec un total à 0.
Ajoute 2 à chaque tour et affiche la valeur du total.
Arrête la boucle quand le total atteint 10 ou plus.

**Exemple de sortie :**

```
Total is: 0
Total is: 2
Total is: 4
Total is: 6
Total is: 8
Done: 10
```

---

## **7. Compter seulement les nombres pairs**

**Énoncé :**
Affiche uniquement les nombres pairs de 2 à 10 inclus.
Chaque tour de boucle augmente de 2.

**Exemple de sortie :**

```
Even number: 2
Even number: 4
Even number: 6
Even number: 8
Even number: 10
```

---

## **8. Répéter jusqu’à “stop”**

**Énoncé :**
Demande à l’utilisateur de saisir un mot.
Répète la question tant qu’il n’écrit pas “stop”.
À chaque fois, affiche ce qu’il a dit, puis termine par « Bye! ».

**Exemple de sortie :**

```
Say something (type 'stop' to quit): hello
You said: hello
Say something (type 'stop' to quit): ok
You said: ok
Say something (type 'stop' to quit): stop
You said: stop
Bye!
```

---

## **9. Compte à rebours avec texte**

**Énoncé :**
Affiche un message pour signaler combien d’étapes il reste.
Par exemple, à partir de 3 jusqu’à 1, puis un message final.

**Exemple de sortie :**

```
Step 3 remaining...
Step 2 remaining...
Step 1 remaining...
All steps done!
```

---

## **10. Barre de progression simple**

**Énoncé :**
Simule une progression de 0 % à 100 %, en augmentant de 10 % à chaque tour.
À chaque tour, affiche la valeur actuelle du pourcentage.

**Exemple de sortie :**

```
Progress: 0%
Progress: 10%
Progress: 20%
Progress: 30%
Progress: 40%
Progress: 50%
Progress: 60%
Progress: 70%
Progress: 80%
Progress: 90%
Progress: 100%
```

---

## **11. Jeu du nombre secret**

**Énoncé :**
Un nombre secret (par exemple 7) est choisi.
L’utilisateur doit deviner ce nombre : tant qu’il se trompe, le programme affiche “Nope, try again.”
Quand il trouve la bonne valeur, affiche “Correct!”.

**Exemple de sortie :**

```
Guess the number (1-10): 3
Nope, try again.
Guess the number (1-10): 7
Correct!
```

---

## **12. Lancer de dé jusqu’à 6**

**Énoncé :**
Simule un lancer de dé (valeur entre 1 et 6).
Continue à lancer tant que le résultat n’est pas 6.
Affiche chaque lancer, puis un message final.

**Exemple de sortie :**

```
Rolled: 2
Rolled: 4
Rolled: 5
Rolled: 1
Rolled: 6
🎲 You got it!
```
