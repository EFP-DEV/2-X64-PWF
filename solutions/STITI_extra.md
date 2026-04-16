
# **SÉRIE 1 — Stocker, Transformer, Interagir**

```js
// 1. Prénom
let user_prenom = prompt("Ton prénom ?");
console.log(user_prenom);

// 2. Double
let user_nombre = parseInt(prompt("Donne un nombre :"));
console.log(user_nombre * 2);

// 3. Somme de deux nombres
let premier_nombre = parseInt(prompt("Nombre 1 :"));
let second_nombre = parseInt(prompt("Nombre 2 :"));
console.log(premier_nombre + second_nombre);

// 4. Mot en majuscules
let user_mot = prompt("Un mot ?");
console.log(user_mot.toUpperCase());

// 5. Âge dans 10 ans
let user_age = parseInt(prompt("Ton âge ?"));
console.log(user_age + 10);

// 6. Nombre de lettres
let mot_compte = prompt("Un mot ?");
console.log(mot_compte.length);

// 7. Couleur préférée
let couleur_preferee = prompt("Ta couleur préférée ?");
console.log("Ta couleur est " + couleur_preferee);

// 8. Trois animaux
let animal_un = prompt("Animal 1 ?");
let animal_deux = prompt("Animal 2 ?");
let animal_trois = prompt("Animal 3 ?");
console.log("Tes animaux : " + animal_un + ", " + animal_deux + ", " + animal_trois);

// 9. Prix + TVA
let prix_htva = parseInt(prompt("Prix HTVA ?"));
console.log(prix_htva * 1.21);

// 10. Premier mot
let phrase_complete = prompt("Écris une phrase :");
console.log(phrase_complete.split(" ")[0]);
```

---

# **SÉRIE 2 — STI + Tests**

```js
// 1. Mot de passe
let mot_de_passe = prompt("Mot de passe ?");
if (mot_de_passe === "banana") console.log("Bienvenue !");
else console.log("Accès refusé.");

// 2. Majeur ou mineur
let age_utilisateur = parseInt(prompt("Âge ?"));
if (age_utilisateur >= 18) console.log("Majeur !");
else console.log("Mineur !");

// 3. Pair ou impair
let nombre_pair_test = parseInt(prompt("Nombre ?"));
if (nombre_pair_test % 2 === 0) console.log("Pair");
else console.log("Impair");

// 4. Couleur rouge ?
let couleur_saisie = prompt("Couleur ?");
if (couleur_saisie === "rouge") console.log("❤️");
else console.log("🟦");

// 5. Prénom = Lyna ?
let prenom_saisi = prompt("Ton prénom ?");
if (prenom_saisi === "Lyna") console.log("Salut Lyna !");
else console.log("Bonjour étranger !");

// 6. Température
let temperature_saisie = parseInt(prompt("Température ?"));
if (temperature_saisie > 25) console.log("Il fait chaud !");
else console.log("Il fait frais.");

// 7. Mot long ou court
let mot_longueur = prompt("Un mot ?");
if (mot_longueur.length > 5) console.log("long");
else console.log("court");

// 8. Plus grand nombre
let nombre_a = parseInt(prompt("Nombre 1 ?"));
let nombre_b = parseInt(prompt("Nombre 2 ?"));
console.log(Math.max(nombre_a, nombre_b));

// 9. Zéro / positif / négatif
let nombre_signe = parseInt(prompt("Un nombre ?"));
if (nombre_signe === 0) console.log("Zéro !");
else if (nombre_signe > 0) console.log("Positif");
else console.log("Négatif");

// 10. Oui / non
let reponse_oui_non = prompt("oui ou non ?");
if (reponse_oui_non === "oui") console.log("Tu as répondu oui.");
else if (reponse_oui_non === "non") console.log("Tu as répondu non.");
else console.log("Réponse inconnue.");
```

---

# **SÉRIE 3 — STIT + Itérer**

```js
// 1. Nombres 1 à 10
for (let compteur = 1; compteur <= 10; compteur++) {
    console.log(compteur);
}

// 2. Phrase répétée 10 fois
for (let repetition = 1; repetition <= 10; repetition++) {
    console.log("J’aime coder !");
}

// 3. Compter jusqu’au nombre donné
let limite = parseInt(prompt("Nombre limite ?"));
for (let compteur = 1; compteur <= limite; compteur++) {
    console.log(compteur);
}

// 4. Afficher chaque lettre
let mot_lettres = prompt("Mot ?");
for (let i = 0; i < mot_lettres.length; i++) {
    console.log(mot_lettres[i]);
}

// 5. Nombres pairs entre 1 et 20
for (let compteur = 1; compteur <= 20; compteur++) {
    if (compteur % 2 === 0) console.log(compteur);
}

// 6. Compte à rebours 5 → 0
for (let compteur = 5; compteur >= 0; compteur--) {
    console.log(compteur);
}

// 7. Table de multiplication
let table_nombre = parseInt(prompt("Nombre ?"));
for (let i = 1; i <= 10; i++) {
    console.log(table_nombre + " x " + i + " = " + table_nombre * i);
}

// 8. Carrés de 1 à 10
for (let compteur = 1; compteur <= 10; compteur++) {
    console.log(compteur * compteur);
}

// 9. Répéter une phrase
let repetitions_demandees = parseInt(prompt("Combien de fois ?"));
let phrase_a_repeter = prompt("Phrase à répéter ?");
for (let i = 1; i <= repetitions_demandees; i++) {
    console.log(phrase_a_repeter);
}

// 10. Mot répété autant de fois que sa longueur
let mot_repetition = prompt("Mot ?");
for (let i = 1; i <= mot_repetition.length; i++) {
    console.log(mot_repetition);
}
```
