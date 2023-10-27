///funciones para cuando seleccione un componete sepa cual es//
var mensajes = {
    "foro": "Seleccionaste la opción 'Foro'.",
    "videos": "Seleccionaste la opción 'Videos'.",
    "examen": "Seleccionaste la opción 'Examen'.",
    "lectura": "Seleccionaste la opción 'Lectura'.",
    "buzon": "Seleccionaste la opción 'Buzón'."
};
// Función para mostrar un mensaje con efecto de transición



function mostrarMensaje(id) {
    var mensajeDiv = document.getElementById("txt");
    mensajeDiv.textContent = mensajes[id];
}
var botones = document.querySelectorAll(".rainbow-hover");
botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        var id = boton.getAttribute("id");
        mostrarMensaje(id);
    });
});
//fin

// Función para editar videos
$(document).ready(function () {
    // Función para mostrar el formulario de edición de video
    function editarVideo() {
        $("#editarVideo").show();
    }

    // Función para guardar los cambios en el video
    function guardarVideo() {
        var nuevoCodigoIframe = $("#nuevoEnlaceVideo").val();
        $("#videoContainer").html(nuevoCodigoIframe);
        $("#editarVideo").hide();

        // Guardar el nuevo enlace en el LocalStorage
        localStorage.setItem('videoIframe', nuevoCodigoIframe);
    }

    // salir
    function regresarVideo() {
        $("#editarVideo").hide();
    }

    // Cargar el enlace del iframe del video almacenado en el LocalStorage
    var enlaceGuardado = localStorage.getItem('videoIframe');
    if (enlaceGuardado) {
        $("#videoContainer").html(enlaceGuardado);
    }

    // Asocia los btones a las funciones
    $(".editar").click(editarVideo);
    $("#guardar").click(guardarVideo);
    $("#regresar").click(regresarVideo);
});
//fin de editar videos


///mosra el formulario de la edicion de links 
function mostrarLinks() {
     $("#editarlink").show();
}


////Abrir fomrulario flotante para cabiar los links./*
$(document).ready(function () {
    
    $(".editar-enlace").click(function () {
        var componente = $(this).closest(".contenido-para-ocultar");
        var enlaceActual = componente.find(".lectura-link").attr("href");
        $("#editarlink").show();
        $("#nuevoLink").val(enlaceActual);
    });
    $("#guardarlink").click(function () {
        var nuevoEnlace = $("#nuevoLink").val();
        var componente = $(".editarlink:visible").closest(".contenido-para-ocultar");
        componente.find(".lectura-link").attr("href", nuevoEnlace);
        $("#editarlink").hide();
    });
    $("#regresar-link").click(function () {
        $("#editarlink").hide();
    });
    

});
///fin del formualrio flotabte
///funcion de agregar csas dentro del div neuvsos componetes
///funcines dentro del froumulario flotante  desde la creacion hasta la edicion o personalizacion

$(document).ready(function () {
    var formularioVisible = false;
    var componenteVisible = false;
    //me toco cambiar la logica de todo ya que los btones guaradaban el style=block asi que tenia que hacer que se vlvioeran a cargar una vez se iniciava con una consulta
    // Obtener el tipo de usuario de la cookie
    const tipoUsuario = getCookie("tipoUsuario");

    // Función para cargar componentes desde el almacenamiento local
    function cargarComponentesDesdeLocalStorage() {
        var componentesGuardados = JSON.parse(localStorage.getItem('componentes')) || [];
        componentesGuardados.forEach(function (componenteHTML) {
            var componente = $(componenteHTML);
            var botonesProfesor = componente.find('.botones-profesor');

            // Ajustar la visibilidad de los botones según el tipo de usuario actual
            if (tipoUsuario !== 'profesor') {
                botonesProfesor.hide();
            }

            $("#contenedorDivs").append(componente);
        });
    }

    cargarComponentesDesdeLocalStorage();

    $("#agregarFormulario").click(function () {
        formularioVisible = !formularioVisible;
        if (formularioVisible) {
            $("#formularioFlotante").show();
            $("#tituloEditable, #fechaEntrega, #guardarCambios, #txt").show();
            componenteVisible = false;
        } else {
            $("#formularioFlotante").hide();
            $("#tituloEditable, #fechaEntrega, #guardarCambios, #txt").hide();
        }
    });

    $("#foro, #videos, #examen, #lectura, #buzon").click(function () {
        if (!componenteVisible) {
            componenteVisible = true;
            $("#tituloEditable, #fechaEntrega, #guardarCambios, #txt").show();
        }

        var botonPresionado = this.id;

        $("#guardarCambios").click(function () {
            var titulo = $("#tituloEditable").val();
            var fechaEntrega = $("#fechaEntrega").val();
            var nuevoComponente = "";

            if (botonPresionado === "videos") {
                nuevoComponente = `
                    
                           <div class="elemento-contenedor">
  <div class="contenido-para-ocultar componente-comun text-center" data-componente="comun">
 
    <div class="botones-profesor text-center toggle-buttons">
        <button class="btn btn-primary ocultar-boton">
            <i class="far fa-eye"></i> Ocultar
        </button>
        <button class="btn btn-danger eliminar">
            <i class="fas fa-trash-alt"></i> Eliminar
        </button>
        <button class="btn btn-success editar">
            <i class="fas fa-pencil-alt"></i> Modificar
        </button>
    </div>
    <div class="componente videos">
                                <h3 contenteditable="true">${titulo}</h3>
                                <p>Fecha de entrega: ${fechaEntrega}</p>
                            </div>

   
    <div class="video-container">
        <div class="container color-div">
            <div class="container img-large">
                <div class="row justify-content-center mb-4">
                    <div class="col-md-6 text-center d-flex justify-content-center align-items-center">
                        <img src="/Assets/img/Actividad sumativa.png" alt="Tu Imagen" class="img-fluid img-large">
                    </div>
                </div>
            </div>
            <div class="white-div mb-4 d-flex justify-content-between align-items-center">
                <div class="container text-center">
                    <div id="videoContainer">
                        <iframe width="560" height="315"
                            src="https://www.youtube.com/embed/0wMOptm9Q3U?si=e7IZwHRbk0Ry0AZs"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
   </div>                        
                `;
            } else if (botonPresionado === "foro") {
                nuevoComponente = `
                <div class="contenido-para-ocultar componente-comun" data-componente="comun">
                    <div class="container color-div">
                        <div class="componente foro">
                            <h3 contenteditable="true">${titulo}</h3>
                            <p>Fecha de entrega: ${fechaEntrega}</p>
                        </div>
                        <div class="botones-profesor text-center toggle-buttons" style="display: block">
                            <button class="btn btn-primary ocultar-boton">
                                <i class="far fa-eye"></i> Ocultar
                            </button>
                            <button class="btn btn-danger eliminar">
                                <i class="fas fa-trash-alt"></i> Eliminar
                            </button>
                            <button class="btn btn-success editar">
                                <i class="fas fa-pencil-alt"></i> Modificar
                            </button>
                        </div>
                        <div class="container img-large">
                            <div class="row justify-content-center mb-4">
                                <div class="col-md-6 text-center d-flex justify-content-center align-items-center">
                                    <img src="/Assets/img/foro.png" alt="Tu Imagen" class="img-fluid img-large">
                                </div>
                            </div>
                        </div>
                        <div class="white-div mb-4 d-flex justify-content-between align-items-center">
                            <a href="/Assets/Pages/PaginasCursoPoo/foro.html" class="btn btn-primary">
                                <i class="fas fa-comments"></i> Foro
                            </a>
                            <button id="checkboxButton" class="btn btn-checkbox">
                                Marcar como hecho <i class="fas fa-check-circle"></i>
                            </button>
                        </div>
                    </div>
                </div>
                `;
            } else if (botonPresionado === "examen") {
                nuevoComponente = `
                <div class="contenido-para-ocultar componente-comun" data-componente="comun">
                    <div class="container color-div">
                        <div class="componente examen">
                            <h3 contenteditable="true" style="color:red;">${titulo}</h3>
                            <p>Fecha de cierre: ${fechaEntrega}</p>
                        </div>
                        <div class="botones-profesor text-center toggle-buttons" style="display: block">
                            <button class="btn btn-primary ocultar-boton">
                                <i class="far fa-eye"></i> Ocultar
                            </button>
                            <button class="btn btn-danger eliminar">
                                <i class="fas fa-trash-alt"></i> Eliminar
                            </button>
                            <button class="btn btn-success editar">
                                <i class="fas fa-pencil-alt"></i> Modificar
                            </button>
                        </div>
                        <div class="container img-large">
                            <div class="row justify-content-center mb-4">
                                <div class="col-md-6 text-center d-flex justify-content-center align-items-center">
                                    <img src="/Assets/img/Actividad sumativa.png" alt="Tu Imagen" class="img-fluid img-large">
                                </div>
                            </div>
                        </div>
                        <div class="white-div mb-4 d-flex justify-content-between align-items-center">
                            <button class="btn btn-primary" id="enlaceExamenButton">
                                <i class="fas fa-edit"></i> Comenzar examen
                            </button>
                            <button id="checkboxButton" class="btn btn-checkbox">
                                Marcar como hecho <i class="fas fa-check-circle"></i>
                            </button>
                        </div>
                    </div>
                </div>
                `;
            } else if (botonPresionado === "lectura") {
                nuevoComponente = `       
<div class="contenido-para-ocultar componente-comun" data-componente="comun">
    <div class="container color-div">
    <div class="componente examen">
                            <h3 contenteditable="true" style="color:red;">${titulo}</h3>
                            <p>Fecha de cierre: ${fechaEntrega}</p>
                        </div>
        <div class="botones-profesor text-center toggle-buttons" style="display: block">
            <button class="btn btn-primary ocultar-boton">
                <i class="far fa-eye"></i> Ocultar
            </button>
            <button class="btn btn-danger eliminar">
                <i class="fas fa-trash-alt"></i> Eliminar
            </button>
            <button class="btn btn-success" onclick=" mostrarLinks()">
                <i class="fas fa-pencil-alt"></i> Modificar
            </button>
        </div>
        <div class="container img-large">
            <div class="row justify-content-center mb-4">
                <div class="col-md-6 text-center d-flex justify-content-center align-items-center">
                    <img src="/Assets/img/Lectura Principal.png" alt="Tu Imagen" class="img-fluid img-large">
                </div>
            </div>
        </div>
        <div class="white-div mb-4 d-flex justify-content-between align-items-center">
            <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" class="btn btn-primary lectura-link" target="_blank">
                <i class="fas fa-question-circle"></i> Lectura
            </a>
        </div>
    </div>
</div>
                `;
                
            }
            else if (botonPresionado === "buzon") {
                nuevoComponente = `       
                        
<div class="contenido-para-ocultar componente-comun" data-componente="comun">
<div class="container color-div">
 <div class="componente examen">
                            <h3 contenteditable="true" style="color:red;">${titulo}</h3>
                            <p>Fecha de cierre: ${fechaEntrega}</p>
                        </div>
    <div class="botones-profesor text-center toggle-buttons" style="display: block">
        <button class="btn btn-primary ocultar-boton"  >
                <i class=" far fa-eye"></i> Ocultar
        </button>
        <button class="btn btn-danger eliminar">
            <i class="fas fa-trash-alt"></i> Eliminar
        </button>
        <button class="btn btn-success" onclick="modificarElemento2(this)">
            <i class="fas fa-pencil-alt"></i> Modificar
        </button>
    </div>
    <div class="container img-large ">
        <div class="row justify-content-center mb-4">
            <div class="col-md-6 text-center d-flex justify-content-center align-items-center">
                <img src="/Assets/img/Actividad sumativa.png" alt="Tu Imagen" class="img-fluid img-large">
            </div>
        </div>
    </div>
<div class="white-div mb-4 d-flex justify-content-between align-items-center">
<a href="#" class="btn btn-primary">
    <i class="fas fa-file"></i> subir archivo
</a>

    <button id="checkboxButton" class="btn btn-checkbox">
        Marcar como hecho <i class="fas fa-check-circle"></i>
    </button>
</div>
</div>
      
                `;
            }

            $("#contenedorDivs").append(nuevoComponente);
            guardarComponenteEnLocalStorage(nuevoComponente);

            $("#tituloEditable").val("");
            $("#fechaEntrega").val("");
            $("#formularioFlotante").hide();
            formularioVisible = false;
            componenteVisible = false;
        });
    });
    /*iniicoo de funcion  eliminar */
     $(document).ready(function () {
    // Cargar el estado de visibilidad de los componentes al cargar la página
    $(".contenido-para-ocultar").each(function () {
        var componentId = $(this).data("component-identifier");
        var visibilidad = localStorage.getItem(`visibilidad-${componentId}`);
        if (visibilidad === "hidden") {
            $(this).hide();
        }
    });

    // Evento para manejar la visibilidad al hacer clic en "Ocultar" o "Mostrar"
    $(document).on("click", ".ocultar-boton", function () {
        var componente = $(this).closest(".contenido-para-ocultar");
        var componentId = componente.data("component-identifier");

        if (componente.is(":visible")) {
            componente.hide();
            localStorage.setItem(`visibilidad-${componentId}`, "hidden");
        } else {
            componente.show();
            localStorage.setItem(`visibilidad-${componentId}`, "visible");
        }
    });

    // Evento para eliminar un componente
    $(document).on("click", ".eliminar", function () {
        if (confirm("¿Seguro que deseas eliminar este componente?")) {
            var componente = $(this).closest(".contenido-para-ocultar");
            var componentId = componente.data("component-identifier");
            componente.remove();
            localStorage.removeItem(`visibilidad-${componentId}`);
        }
    });
});

    






///final 

    $(document).on("click", ".ocultar-boton", function () {
        var componente = $(this).closest(".contenido-para-ocultar");
        var oculto = componente.data("oculto");

        if (oculto) {
            alert("Contenido visible para los alumnos");
            $(this).css("background-color", "");
            $(this).text("Ocultar ");
            $(this).append('<i class="far fa-eye"></i>');
        } else {
            alert("Contenido oculto para los estudiantes");
            $(this).css("background-color", "red");
            $(this).text("Mostrar ");
            $(this).append('<i class="far fa-eye-slash"></i>');
        }

        componente.data("oculto", !oculto);
    });

    // Función para guardar componentes en el almacenamiento local
    function guardarComponentesEnLocalStorage() {
        var componentes = [];
        $(".contenido-para-ocultar").each(function () {
            componentes.push($(this)[0].outerHTML);
        });
        localStorage.setItem('componentes', JSON.stringify(componentes));
    }

    // Función para guardar un componente en el almacenamiento local
    function guardarComponenteEnLocalStorage(componente) {
        var componentesGuardados = JSON.parse(localStorage.getItem('componentes')) || [];
        componentesGuardados.push(componente);
        localStorage.setItem('componentes', JSON.stringify(componentesGuardados));
    }

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
});




////fin de la fucionde crear compnente

///fomrulario foltate  de los componetes, para crearlos de moment solo deje 5
 const botonAgregar = document.getElementById("agregarFormulario");
const formularioFlotante = document.getElementById("formularioFlotante");

botonAgregar.addEventListener("click", function() {
    if (formularioFlotante.style.display === "block") {
        formularioFlotante.style.display = "none";
    } else {
        formularioFlotante.style.display = "block";
    }
});

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

//funcion  de la cookies
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

    
}
/////////////////////////////////////fin del CRUD de componentes

/*
$(document).ready(function () {
    var formularioVisible = false;
    var componenteVisible = false;

    $("#agregarFormulario").click(function () {
        formularioVisible = !formularioVisible;
        if (formularioVisible) {
            $("#formularioFlotante").show();
            $("#tituloEditable, #fechaEntrega, #guardarCambios, #txt").hide();
            componenteVisible = false;
        } else {
            $("#formularioFlotante").hide();
        }
    });

    $("#foro, #videos, #examen,#lectura,#buzon").click(function () {
        if (!componenteVisible) {
            componenteVisible = true;
            $("#tituloEditable, #fechaEntrega, #guardarCambios, #txt").show();
        }

        var botonPresionado = this.id;
        $("#guardarCambios").click(function () {
            var titulo = $("#tituloEditable").val();
            var fechaEntrega = $("#fechaEntrega").val();
            var nuevoComponente = "";

            if (botonPresionado === "foro") {
                nuevoComponente = `
                <div class="contenido-para-ocultar componente-comun" data-componente="comun">
                    <div class="container color-div">
                        <div class="componente foro">
                            <h3 contenteditable="true">${titulo}</h3>
                            <p>Fecha de entrega: ${fechaEntrega}</p>
                        </div>
                        <div class="botones-profesor text-center toggle-buttons" style="display: block">
                            <button class="btn btn-primary ocultar-boton">
                                <i class="far fa-eye"></i> Ocultar
                            </button>
                            <button class="btn btn-danger eliminar">
                                <i class="fas fa-trash-alt"></i> Eliminar
                            </button>
                            <button class="btn btn-success editar">
                                <i class="fas fa-pencil-alt"></i> Modificar
                            </button>
                        </div>
                        <div class="container img-large">
                            <div class="row justify-content-center mb-4">
                                <div class="col-md-6 text-center d-flex justify-content-center align-items-center">
                                    <img src="/Assets/img/foro.png" alt="Tu Imagen" class="img-fluid img-large">
                                </div>
                            </div>
                        </div>
                        <div class="white-div mb-4 d-flex justify-content-between align-items-center">
                            <a href="/Assets/Pages/PaginasCursoPoo/foro.html" class="btn btn-primary">
                                <i class="fas fa-comments"></i> Foro
                            </a>
                            <button id="checkboxButton" class="btn btn-checkbox">
                                Marcar como hecho <i class="fas fa-check-circle"></i>
                            </button>
                        </div>
                    </div>
                </div>
                `;
            } else if (botonPresionado === "videos") {
                nuevoComponente = `
<div class="contenido-para-ocultar componente-comun" data-componente="comun">
<div class="componente videos">
                            <h3 contenteditable="true">${titulo}</h3>
                            <p>Fecha de entrega: ${fechaEntrega}</p></div>
    <div class="botones-profesor text-center toggle-buttons" style="display: block">
        <button class="btn btn-primary ocultar-boton">
            <i class="far fa-eye"></i> Ocultar
        </button>
        <button class="btn btn-danger eliminar">
            <i class="fas fa-trash-alt"></i> Eliminar
        </button>
        <button class="btn btn-success editar-video-componente" onclick="editarVideo()" >
            <i class="fas fa-pencil-alt"></i> Modificar
        </button>
    </div>
    <div class="container color-div">
        <div class="container img-large">
            <div class="row justify-content-center mb-4">
                <div class="col-md-6 text-center d-flex justify-content-center align-items-center">
                    <img src="/Assets/img/Actividad sumativa.png" alt="Tu Imagen" class="img-fluid img-large">
                </div>
            </div>
        </div>
        <div class="white-div mb-4 d-flex justify-content-between align-items-center">
            <div class="container text-center">
                <div id="videoContainer">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/0wMOptm9Q3U?si=e7IZwHRbk0Ry0AZs"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</div>

                `;
            } else if (botonPresionado === "examen") {
                nuevoComponente = `
                <div class="contenido-para-ocultar componente-comun" data-componente="comun">
                    <div class="container color-div">
                        <div class="componente examen">
                            <h3 contenteditable="true" style="color:red;">${titulo}</h3>
                            <p>Fecha de cierre: ${fechaEntrega}</p>
                        </div>
                        <div class="botones-profesor text-center toggle-buttons" style="display: block">
                            <button class="btn btn-primary ocultar-boton">
                                <i class="far fa-eye"></i> Ocultar
                            </button>
                            <button class="btn btn-danger eliminar">
                                <i class="fas fa-trash-alt"></i> Eliminar
                            </button>
                            <button class="btn btn-success editar">
                                <i class="fas fa-pencil-alt"></i> Modificar
                            </button>
                        </div>
                        <div class="container img-large">
                            <div class="row justify-content-center mb-4">
                                <div class="col-md-6 text-center d-flex justify-content-center align-items-center">
                                    <img src="/Assets/img/Actividad sumativa.png" alt="Tu Imagen" class="img-fluid img-large">
                                </div>
                            </div>
                        </div>
                        <div class="white-div mb-4 d-flex justify-content-between align-items-center">
                            <button class="btn btn-primary" id="enlaceExamenButton">
                                <i class="fas fa-edit"></i> Comenzar examen
                            </button>
                            <button id="checkboxButton" class="btn btn-checkbox">
                                Marcar como hecho <i class="fas fa-check-circle"></i>
                            </button>
                        </div>
                    </div>
                </div>
                `;
            } else if(botonPresionado==="lectura"){
                 nuevoComponente = `       
<div class="contenido-para-ocultar componente-comun" data-componente="comun">
    <div class="container color-div">
    <div class="componente examen">
                            <h3 contenteditable="true" style="color:red;">${titulo}</h3>
                            <p>Fecha de cierre: ${fechaEntrega}</p>
                        </div>
        <div class="botones-profesor text-center toggle-buttons" style="display: block">
            <button class="btn btn-primary ocultar-boton">
                <i class="far fa-eye"></i> Ocultar
            </button>
            <button class="btn btn-danger eliminar">
                <i class="fas fa-trash-alt"></i> Eliminar
            </button>
            <button class="btn btn-success" onclick=" mostrarLinks()">
                <i class="fas fa-pencil-alt"></i> Modificar
            </button>
        </div>
        <div class="container img-large">
            <div class="row justify-content-center mb-4">
                <div class="col-md-6 text-center d-flex justify-content-center align-items-center">
                    <img src="/Assets/img/Lectura Principal.png" alt="Tu Imagen" class="img-fluid img-large">
                </div>
            </div>
        </div>
        <div class="white-div mb-4 d-flex justify-content-between align-items-center">
            <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" class="btn btn-primary lectura-link" target="_blank">
                <i class="fas fa-question-circle"></i> Lectura
            </a>
        </div>
    </div>
</div>
                `;
                
            }
            else if (botonPresionado ==="buzon") {
                       nuevoComponente = `       
                        
<div class="contenido-para-ocultar componente-comun" data-componente="comun">
<div class="container color-div">
 <div class="componente examen">
                            <h3 contenteditable="true" style="color:red;">${titulo}</h3>
                            <p>Fecha de cierre: ${fechaEntrega}</p>
                        </div>
    <div class="botones-profesor text-center toggle-buttons" style="display: block">
        <button class="btn btn-primary ocultar-boton"  >
                <i class=" far fa-eye"></i> Ocultar
        </button>
        <button class="btn btn-danger eliminar">
            <i class="fas fa-trash-alt"></i> Eliminar
        </button>
        <button class="btn btn-success" onclick="modificarElemento2(this)">
            <i class="fas fa-pencil-alt"></i> Modificar
        </button>
    </div>
    <div class="container img-large ">
        <div class="row justify-content-center mb-4">
            <div class="col-md-6 text-center d-flex justify-content-center align-items-center">
                <img src="/Assets/img/Actividad sumativa.png" alt="Tu Imagen" class="img-fluid img-large">
            </div>
        </div>
    </div>
<div class="white-div mb-4 d-flex justify-content-between align-items-center">
<a href="#" class="btn btn-primary">
    <i class="fas fa-file"></i> subir archivo
</a>

    <button id="checkboxButton" class="btn btn-checkbox">
        Marcar como hecho <i class="fas fa-check-circle"></i>
    </button>
</div>
</div>

      
                `;

            }

            $("#contenedorDivs").append(nuevoComponente);
            $("#tituloEditable").val("");
            $("#fechaEntrega").val("");
            $("#formularioFlotante").hide();
            formularioVisible = false;
            componenteVisible = false;
        });

        $("#formularioFlotante").on("reset", function () {
            $("#tituloEditable").val("");
            $("#fechaEntrega").val("");
            $("#tituloEditable, #fechaEntrega, #guardarCambios").hide();
            componenteVisible = false;
        });
    });

    // Función para ocultar
    $(document).on("click", ".ocultar-boton", function () {
        var componente = $(this).closest(".contenido-para-ocultar");
        var oculto = componente.data("oculto");

        if (oculto) {
            alert("Contenido visible para los alumnos");
            $(this).css("background-color", "");
            $(this).text("Ocultar ");
            $(this).append('<i class="far fa-eye"></i>');
        } else {
            alert("Contenido oculto para los estudiantes");
            $(this).css("background-color", "red");
            $(this).text("Mostrar ");
            $(this).append('<i class="far fa-eye-slash"></i>');
        }

        componente.data("oculto", !oculto);
    });

    // Función para eliminar componente 
    $(document).on("click", ".eliminar", function () {
        var confirmacion = confirm("¿Estás seguro de que deseas eliminar este componente?");
        if (confirmacion) {
            $(this).closest('.contenido-para-ocultar').remove();
        }
    });

   $(document).on("click", ".editar", editarVideo);

    $("#guardar").click(guardarVideo);
    $("#regresar").click(regresarVideo);





});*/
















