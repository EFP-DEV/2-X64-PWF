document.addEventListener('click', function(event){
  if(event.target.classList.contains('count')){
    let article = event.target.closest('article');
    let counter = article.querySelector('.value');
    counter.textContent = 1 + parseInt(counter.textContent);
  }
});