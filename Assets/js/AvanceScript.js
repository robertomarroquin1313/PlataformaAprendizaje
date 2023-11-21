
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
/*llamadas a la api*
  var stripe = Stripe('pk_test_51OEZOQLhpR9yTrFcqNcYS733B5J5JqnyashMPNFJGl0XVoHshQ1yCZiOfPulE7Y0ArmqtJIgOAWevdTf3ojqNmK700fDVH9JTB');

 document.getElementById('btnPagar').addEventListener('click', function () {
      // Llama a la ventana de pago de Stripe
      stripe.redirectToCheckout({
        sessionId: 'id_de_tu_sesion' // Reemplaza con el ID de sesión de Stripe que generes en tu servidor
      })
      .then(function (result) {
        if (result.error) {
          // Manejar errores, como tarjeta no válida, etc.
          console.error(result.error.message);
        }
      });
 });*/

 $(document).ready(function () {
  var formularioVisible = false;
  $("#comprado").click(function (event) {
    event.preventDefault(); 

    Swal.fire({
      title: 'Procesando compra',
      html: 'Estamos procesando tu compra. Por favor, espera...',
      allowOutsideClick: false,
      showCancelButton: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.getHtmlContainer().style.zIndex = 9999; 
        Swal.showLoading();
      },
    });

    setTimeout(function () {
      Swal.fire({
        icon: 'success',
        title: '¡Compra Exitosa!',
        text: 'Gracias por tu compra.',
      });


      $("#pasarela").hide();
    }, 2000);
  });
   
  $("#mostrarPasarela").click(function () {
    $("#pasarela").toggle();
  });

  $("#cancelar-c").click(function (event) {
    event.preventDefault();
    Swal.fire({
      icon: 'error',
      title: 'Compra Cancelada',
      text: 'Tu compra ha sido cancelada.',
    });
    $("#pasarela").hide();
  });
 });
function mostrarpasarela() {
     $("#pasarela").show();
}

$(document).on("click", ".editar-crud", function (e) {
  e.preventDefault();
  $(".crud-conteiner").toggle();
});

$(document).on("click", ".borrar-curso", function () {
  var boton = $(this);

  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Esta acción no se puede deshacer.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Sí, eliminar'
  }).then((result) => {
    if (result.isConfirmed) {
      boton.closest("tr").remove();
      Swal.fire('Eliminado', 'El curso ha sido eliminado', 'success');
    }
  });
});
 // Función para obtener el valor de una cookie
    function getCookie(name) {
        const cookieName = name + "=";
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(cookieName) === 0) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
        return "";
    }

    // Obtener el  usuario almacenado en la cookie
const tipoUsuario = getCookie("tipoUsuario");
const botonesProfesor = document.querySelectorAll('.botones-admin');
if (tipoUsuario === "admin") {
    botonesProfesor.forEach(elemento => {
        elemento.style.display = "block";
    });
} else {
    botonesProfesor.forEach(elemento => {
        elemento.style.display = "none";
    });
}




