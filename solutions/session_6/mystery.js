let btn = document.getElementById('guess');
let mystery = Math.floor(Math.random() * 10) + 1;

console.log('Triche: ' + mystery)

btn.addEventListener('click', () => {
    let input = document.getElementById('answer');
    let output = document.getElementById('message');

    if(input.value == mystery){
        output.textContent = 'WON';
        output.classList.add('success');
        output.classList.remove('failure');
    }
    else{
      output.innerHTML = 'LOST';
      output.classList.add('failure');
      output.classList.remove('success');
    }
});