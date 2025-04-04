// " 1 x 7 = 7"
// " 2 x 7 = 14"
// " 3 x 7 = 21"
// " 4 x 7 = 28"
// " 5 x 7 = 35"
// " 6 x 7 = 42"
// " 7 x 7 = 49"
// " 8 x 7 = 56"
// " 9 x 7 = 63"
// "10 x 7 = 70"
function ecriretableMultiplication(multiplicateur, limite=10) {
  let prefix = "&nbsp;";
  for (let i = 1; i <= limite; ++i) {
    if (i >= 10) {
      prefix = "";
    }
    document.write(`${prefix}${i} x ${multiplicateur} = ${i * multiplicateur}`);
    document.write("<br>");
  }
}

for(let i=1; i<= 9; ++i){
    document.write("<div><strong>"+i+"</strong><br>");
    ecriretableMultiplication(i, 14);
    document.write("</div>");
}
