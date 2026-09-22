/*
 – < 0 → "Icône flocon" 
 – > 35 → "Icône feu" 
 – Sinon → "Icône soleil"
*/

let temperature;

temperature = prompt('Temperature ?');
if(temperature > 35){
    console.log('Icone Feu');
}
else if (temperature < 0){
    console.log('Icone Flocon');
}
else{
    console.log('Icone Soleil');
}