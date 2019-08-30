window.addEventListener('load', () => {
  /*loader*/
  var preloader = document.querySelector('.preloader');


  preloader.classList.add('complete');

});
var loader = document.querySelector('.loader');
document.addEventListener('DOMContentLoaded', init);

function init() {


  /*AOS initilize for cool animations*/

  AOS.init();

  //hamburger Styling

  let ham = document.querySelector('header #ham');
  let exit = document.getElementById('exit');
  let nav = document.querySelector('nav');
  ham.addEventListener('click', function(e) {

    let links = document.querySelector('nav ul');

    links.addEventListener('click', () => {
      nav.style.display = 'none';

    });
    if (nav.style.display == 'none') {
      nav.style.display = 'block';



    } else {
      nav.style.display = 'none';

    }

  });

  exit.addEventListener('click', () => {
    nav.style.display = 'none';
  });

}