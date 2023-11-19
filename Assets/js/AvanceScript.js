
/*=============== SWIPER JS ===============*/
        
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 3,
    },
    968: {
      slidesPerView: 3,
    },
  },
});
let swiperCards2 = new Swiper(".card__content2", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination2", // Cambia esto a tu propia clase
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next", // Cambia esto a tu propia clase
    prevEl: ".swiper-button-prev", // Cambia esto a tu propia clase
  },

  breakpoints: {
    600: {
      slidesPerView: 3,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

///////////////////////////////efecto de subida//////////////////////////////////

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

const botonHamburguesa = document.querySelector('.hamburguesa');
const menuPrincipal = document.querySelector('.navegacion');
const menuOcultar = document.querySelector('.navegacionOcultar');

// Agrega un evento de clic al botón de hamburguesa
botonHamburguesa.addEventListener('click', function() {
    // Alternar la visibilidad del menú principal y el menú oculto
    menuPrincipal.style.display = (menuPrincipal.style.display === 'none') ? 'block' : 'none';
    menuOcultar.style.display = (menuOcultar.style.display === 'none') ? 'block' : 'none';
});

/////////////////////////////////////////////////////////////////
/**/
