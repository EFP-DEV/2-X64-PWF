document.addEventListener('click', function (event) {
  if (event.target.classList.contains('count')) {
    let article = event.target.closest('article');
    let counter = article.querySelector('.value');
    counter.textContent = 1 + parseInt(counter.textContent);
  } else if (event.target.getAttribute('id') == 'reset') {
    
    // handle reset
    let values = document.querySelectorAll('.value');
    let index = 0;

    while(index < values.length){
      values[index].textContent = 0;
      index = index + 1
    }
  }
});

function updateUI()
{
  let values = document.querySelectorAll('.value');
  
  let sum = 0
  for (let index = 0; index < values.length; index = index + 1) {
    sum = sum + parseInt(values[index].textContent)
  }
  document.getElementById('total').textContent = sum;
}