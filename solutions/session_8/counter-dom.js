document.addEventListener('click', (e) => {

    console.log('click document');

    if (e.target.classList.contains('count')) {
      let article = e.target.closest('article');
      let counter = article.querySelector('.counter');
    }

});