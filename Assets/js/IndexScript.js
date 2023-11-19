  document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
 
document.addEventListener("DOMContentLoaded", function() {
  const imagesToPreload = [
    "Assets/img/universiadad.jpg",
    "Assets/img/civil.jpg",
    "Assets/img/medicina.jpg",
    "Assets/img/equipo.jpg",
    "Assets/img/mtyy.jpg",
    "Assets/img/abo.jpg"
  
  ];

  function preloadImages() {
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }

  preloadImages();
});

window.addEventListener('scroll', reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;


    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;
    if (revealtop < windowHeight - revealpoint) {
      reveals[i].classList.add("active");
      
      
    }
    else {
      reveals[i].classList.remove("active");
      
    }
}
}
///////


//efecto del precarga 
window.onload = function () { 
    $("#preloader").fadeOut();
    $("body").removeClass("ocul");
}

const botonHamburguesa = document.querySelector('.hamburguesa');
const menuPrincipal = document.querySelector('.navegacion');
const menuOcultar = document.querySelector('.navegacionOcultar');

// Agrega un evento de clic al botón de hamburguesa
botonHamburguesa.addEventListener('click', function() {
    // Alternar la visibilidad del menú principal y el menú oculto
    menuPrincipal.style.display = (menuPrincipal.style.display === 'none') ? 'block' : 'none';
    menuOcultar.style.display = (menuOcultar.style.display === 'none') ? 'block' : 'none';
});
