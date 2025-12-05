console.log('Script chargé');

// On récupère tous les boutons
let allButtons = document.querySelectorAll('.btn');

// Boucle simple d’affichage
let i = 0;
let currentButton;

while (i < allButtons.length) {
  currentButton = allButtons[i];
  i = i + 1;
  currentButton.textContent = i + '/' + allButtons.length;
}

colorAll();

document.addEventListener('click', function (e) {


  if (e.target.classList.contains('btn')) {
    let article = e.target.closest('article');
    console.log('Tu as cliqué sur le bouton dans l’article :', article.querySelector('h3').textContent);
  }
});


function colorAll() {
  let items = document.querySelectorAll('.btn');

  let i = 0;
  while (i < items.length) {
    items[i].classList.add('colorized');
    i = i + 1;
  }
}