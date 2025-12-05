let btn = document.getElementById('guess');
let input = document.getElementById('answer');

let mystery = Math.floor(Math.random() * 10) + 1;

console.log('Triche: ' + mystery);

input.addEventListener('keydown', (evt) => {
  if (evt.key === 'Enter') {
    play(input, mystery);
  }
});

btn.addEventListener('click', () => {
  play(input, mystery);
});

function play(input, mystery) {
  let output = document.getElementById('message');

  if (input.value == mystery) {
    output.textContent = 'WON';
    output.classList.add('success');
    output.classList.remove('failure');
  } else {
    output.innerHTML = 'LOST';
    output.classList.add('failure');
    output.classList.remove('success');

    input.value = '';
    input.focus();
  }
}
