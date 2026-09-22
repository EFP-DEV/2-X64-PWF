// Déclaration + assignation (comme en console)
let h = 10;
let m = 59;

// Incrément
m = m + 1;

if(m == 60){
    m = 0;
    h = h + 1;

    if (h == 24) {
      h = 0;
    }
}


// Affichage
console.log(h, m); // 13 38