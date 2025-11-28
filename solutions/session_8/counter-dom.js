console.log('coucou');

document.addEventListener('click', function (event) {

  if(event.target.classList.contains('count')){
    console.log('Click +1 ');
    let btn = event.target;
    let article = btn.closest('article');
    let counter = article.querySelector('.value')
    counter.textContent = 1 + parseInt(counter.textContent);
  }
  else if(event.target.getAttribute('id') == 'reset'){
    console.log('Click reset');
    let values = document.querySelectorAll('.value');
    console.log(values);
    let index = 0;
    while(index < values.length){
      values[index].textContent = 0;
      index = index + 1;
    }
  }

});
