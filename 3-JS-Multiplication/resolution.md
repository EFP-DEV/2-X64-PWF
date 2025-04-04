
# Générer des Tables de Multiplication en JavaScript

Cet exercice explique comment utiliser JavaScript pour générer des tables de multiplication dynamiques. Vous apprendrez à construire une fonction qui affiche les tables de multiplication dans un format lisible.

---

## Objectif
Créer une fonction capable d’afficher les tables de multiplication jusqu’à une limite définie. Ensuite, utiliser cette fonction pour générer plusieurs tables de multiplication dans une page web.

---

## Fonctionnement du Code

### Fonction : `ecriretableMultiplication`
Cette fonction génère une table de multiplication pour un multiplicateur donné.

### Paramètres :
- **`multiplicateur`** : Le nombre pour lequel la table de multiplication sera créée (par exemple, 7).
- **`limite`** : Le nombre maximum de lignes à afficher (par défaut : 10).

### Code de la Fonction :
```javascript
function ecriretableMultiplication(multiplicateur, limite = 10) {
  let prefix = "&nbsp;";
  for (let i = 1; i <= limite; ++i) {
    if (i >= 10) {
      prefix = "";
    }
    document.write(`${prefix}${i} x ${multiplicateur} = ${i * multiplicateur}`);
    document.write("<br>");
  }
}
```

### Explications :
1. **Formatage des nombres** :
   - Le préfixe (`&nbsp;`) est utilisé pour aligner les résultats lorsque les indices (par exemple, 1, 2, 3) ont une longueur différente.
   - Pour les indices à deux chiffres, le préfixe est supprimé.

2. **Affichage** :
   - La méthode `document.write` est utilisée pour écrire directement dans la page HTML.
   - Les résultats sont affichés ligne par ligne à l'aide de `<br>`.

---

### Générer Plusieurs Tables de Multiplication
Pour afficher plusieurs tables de multiplication (par exemple, de 1 à 9), on utilise une boucle :
```javascript
for (let i = 1; i <= 9; ++i) {
  document.write("<div><strong>" + i + "</strong><br>");
  ecriretableMultiplication(i, 14);
  document.write("</div>");
}
```

### Détails :
1. **La Boucle** :
   - La boucle `for` génère les tables de multiplication de 1 à 9.
   - Pour chaque itération, elle appelle la fonction `ecriretableMultiplication`.

2. **Structuration des Tables** :
   - Les tables sont encapsulées dans des balises `<div>`.
   - Le titre de la table (par exemple, "1", "2", ...) est mis en gras grâce à `<strong>`.

---

## Exemple de Résultat
Voici un exemple du résultat généré pour la table de 7 :
```
 1 x 7 = 7
 2 x 7 = 14
 3 x 7 = 21
 4 x 7 = 28
 5 x 7 = 35
 6 x 7 = 42
 7 x 7 = 49
 8 x 7 = 56
 9 x 7 = 63
10 x 7 = 70
```

En ajoutant des tables supplémentaires, vous obtiendrez une série organisée comme suit :
- Table de 1
- Table de 2
- ...
- Table de 9

---

## Points Clés à Retenir
1. La fonction est flexible grâce à son paramètre `limite`.
2. Le code est réutilisable pour générer des tables de multiplication jusqu'à une limite souhaitée.
3. L'utilisation de `document.write` permet une intégration directe dans une page web.

---

Essayez d'exécuter ce code dans un environnement HTML pour visualiser les résultats en direct !
