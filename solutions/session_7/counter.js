let count1=0, count5=0;

let display1 = document.getElementById('count1');
let display5 = document.getElementById('count5');
let action1 = document.getElementById('btn-add1');
let action5 = document.getElementById('btn-add5');

action1.addEventListener('click', increment1);
action5.addEventListener('click', increment5);

function increment1() {
  count1 = count1 + 1;
  updateUI();
}

function increment5() {
  count5 = count5 + 1;
  updateUI();
}

function updateUI() {
  display1.textContent = count1;
  display5.textContent = count5;
  document.getElementById('total').textContent = count1 + 5 * count5;

}


/*

VERSION (plus) PRO

let count1=0, count5=0;

let display1 = document.getElementById('count1');
let display5 = document.getElementById('count5');

function updateUI() {
  display1.textContent = count1;
  display5.textContent = count5;
  document.getElementById('total').textContent = count1 + 5 * count5;
}
document.getElementById('inc_panel').addEventListener('click', inc_generic);

function inc_generic(e){
    if(e.target.getAttribute('id') == 'btn-add1'){
        count1 = count1 + 1;
    }
    else if(e.target.getAttribute('id') == 'btn-add5'){
        count5 = count5 + 1;

    }
    updateUI()
}

*/