/* document.addEventListener("DOMContentLoaded", function () {
        const checkboxButton = document.getElementById("checkboxButton");
        let isChecked = false;

        checkboxButton.addEventListener("click", function () {
            isChecked = !isChecked;
            if (isChecked) {
                checkboxButton.classList.remove("btn-primary");
                checkboxButton.classList.add("btn-success");
                checkboxButton.textContent = "Hecho";
            } else {
                checkboxButton.classList.remove("btn-success");
                checkboxButton.classList.add("btn-primary");
                checkboxButton.textContent = "Marcar como pendiente";
            }
        });
 });*/
    // Obtener el  usuario almacenado en la cookie
const tipoUsuario = getCookie("tipoUsuario");
const botonesProfesor = document.querySelectorAll('.botones-profesor');
if (tipoUsuario === "profesor") {
    botonesProfesor.forEach(elemento => {
        elemento.style.display = "block";
    });
} else {
    botonesProfesor.forEach(elemento => {
        elemento.style.display = "none";
    });
}
function getCookie(name) {///aqui se llama la funcion
    const cookieName = name + "=";//es la parte que queres recuperar de la cookie con el nombre de la cokiee entre todas la cookies
    const cookies = document.cookie.split(';');//sepera las cookies en cadenas separadas por ; ya que uelen estar junatas
    for (let i = 0; i < cookies.length; i++) {//recorrera todas la cookies de la pagina 
        let cookie = cookies[i];// Se crea una variable cookie que almacena el valor de la cookie actual en cada iteración del bucle.
        while (cookie.charAt(0) === ' ') {//Este bucle while se utiliza para eliminar cualquier espacio en blanco al principio de la cadena de la cookie.
            cookie = cookie.substring(1);//: Si se encuentra un espacio en blanco al principio de la cookie, se elimina ese espacio 
        }
        if (cookie.indexOf(cookieName) === 0) {//se verifica que los nombre sean iguales
            return cookie.substring(cookieName.length, cookie.length);//si son iguales devueleve el valor de la cookie 
        }
    }
    return "";

    
}////////////////////////////////////////


$(document).ready(function () {
    $("#agregarFormulario").click(function () {
        $("#formulario").toggle();
    });

    // Manejar el evento de clic para cada botón dentro del formulario
    $("#foro, #videos, #examen, #links").click(function () {
        var botonPresionado = this.id; // Obtener el ID del botón presionado

        // Crear contenido específico según el botón presionado
        var nuevoContenido = "";

        if (botonPresionado === "foro") {
            nuevoContenido = `
  
<div class="container color-div">
    <div class="container img-large ">
        <div class="row justify-content-center mb-4">
            <div class="col-md-6 text-center d-flex justify-content-center align-items-center">
                <img src="/Assets/img/foro.png" alt="Tu Imagen" class="img-fluid img-large">
            </div>
        </div>
    </div>
<div class="botones-profesor text-center toggle-buttons">
    <button class="btn btn-primary" onclick="ocultarElemento2(this)">
        <i class="far fa-eye"></i> Ocultar
    </button>
    <button class="btn btn-danger" onclick="eliminarElemento2(this)">
        <i class="fas fa-trash-alt"></i> Eliminar
    </button>
    <button class="btn btn-success" onclick="modificarElemento2(this)">
        <i class="fas fa-pencil-alt"></i> Modificar
    </button>
</div>



    <div class="white-div mb-4 d-flex justify-content-between align-items-center">
        
    <a href="/Assets/Pages/PaginasCursoPoo/foro.html" class="btn btn-primary">
        <i class="fas fa-comments"></i> Foro
    </a>


        <button id="checkboxButton" class="btn btn-checkbox">
            Marcar como hecho <i class="fas fa-check-circle"></i>
        </button>
    </div>
            `;
        } else if (botonPresionado === "videos") {
            nuevoContenido = `

               <div class="botones-profesor text-center toggle-buttons">
        <button class="btn btn-primary" onclick="ocultarElemento2(this)">
            <i class="far fa-eye"></i> Ocultar
        </button>
        <button class="btn btn-danger" onclick="eliminarElemento2(this)">
            <i class="fas fa-trash-alt"></i> Eliminar
        </button>
        <button class="btn btn-success" onclick="modificarElemento2(this)">
            <i class="fas fa-pencil-alt"></i> Modificar
        </button>
    </div>



    <div class="container color-div">
        <div class="container img-large ">
            <div class="row justify-content-center mb-4">
                <div class="col-md-6 text-center d-flex justify-content-center align-items-center">
                    <img src="/Assets/img/Actividad sumativa.png" alt="Tu Imagen" class="img-fluid img-large">
                </div>
            </div>
        </div>
        <div class="white-div mb-4 d-flex justify-content-between align-items-center">
    
       <div class="container text-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/tcza2FEz4u4?si=lLvymj0MpA3diKC0"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
       </div>
            
        </div>
            `;
        } else if (botonPresionado === "examen") {
            nuevoContenido = `
              <div class="botones-profesor text-center toggle-buttons" >
        <button class="btn btn-primary" onclick="ocultarElemento2(this)">
            <i class="far fa-eye"></i> Ocultar
        </button>
        <button class="btn btn-danger" onclick="eliminarElemento2(this)">
            <i class="fas fa-trash-alt"></i> Eliminar
        </button>
        <button class="btn btn-success" onclick="modificarElemento2(this)">
            <i class="fas fa-pencil-alt"></i> Modificar
        </button>
    </div>



            <div class="container color-div">
                <div class="container img-large ">
                    <div class="row justify-content-center mb-4">
                        <div class="col-md-6 text-center d-flex justify-content-center align-items-center">
                            <img src="/Assets/img/Actividad sumativa.png" alt="Tu Imagen" class="img-fluid img-large">
                        </div>
                    </div>
                </div>
                <div class=" container text-center">
                    <h2 style="color: red;"> Examen sumativo 1</h2>

                </div>
                <div class="white-div mb-4 d-flex justify-content-between align-items-center">
                    <a href="/Assets/Pages/PaginasCursoPoo/examenJava.html" class="btn btn-primary">
                        <i class="fas fa-file-alt"></i> Examen
                    </a>
                        
                        
                        <button id="checkboxButton" class="btn btn-checkbox">
                            Marcar como hecho <i class="fas fa-check-circle"></i>
                        </button>
            
                   
                    </div>
            
                </div>

            `;
        } else if (botonPresionado === "links") {
            nuevoContenido = `
             <div class="container color-div">
                <div class="container img-large ">
                    <div class="row justify-content-center mb-4">
                        <div class="col-md-6 text-center d-flex justify-content-center align-items-center">
                            <img src="/Assets/img/Lectura Principal.png" alt="Tu Imagen" class="img-fluid img-large">
                        </div>
                    </div>
                </div>
            <div class="botones-profesor text-center toggle-buttons" >
                <button class="btn btn-primary" onclick="ocultarElemento2(this)">
                    <i class="far fa-eye"></i> Ocultar
                </button>
                <button class="btn btn-danger" onclick="eliminarElemento2(this)">
                    <i class="fas fa-trash-alt"></i> Eliminar
                </button>
                <button class="btn btn-success" onclick="modificarElemento2(this)">
                    <i class="fas fa-pencil-alt"></i> Modificar
                </button>
            </div>


<div class="white-div mb-4 d-flex justify-content-between align-items-center">
    <a href="#" class="btn btn-primary">
        <i class="fas fa-question-circle"></i> Lectura
    </a>
    <button id="checkboxButton" class="btn btn-checkbox">
        Marcar como hecho <i class="fas fa-check-circle"></i>
    </button>
</div>
            `;
        }

        // Agregar el nuevo contenido al contenedor
        $("#contenedorDivs").append(nuevoContenido);
    });
});
