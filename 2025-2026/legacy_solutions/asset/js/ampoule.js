console.log('hello world');

const ampoule = document.getElementById('ampoule');
const bouton = document.getElementById('switch');

bouton.addEventListener('click', function () {
  if (ampoule.src.includes('off')) {
    ampoule.src = 'asset/img/pic_bulbon.gif';
  } else {
    ampoule.src = 'asset/img/pic_bulboff.gif';
  }
});