let taille;
let poids;

poids = prompt('Votre poids (kg)?');
poids = parseInt(poids);

taille = prompt('Votre taille (m)');
taille = parseFloat(taille);

bmi = poids / (taille*taille);

console.log('Votre BMI est de ' + bmi);