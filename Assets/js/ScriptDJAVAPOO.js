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

$(document).ready(function () {
    // Recuperar enlace del almacenamiento local
    var enlaceGuardado = localStorage.getItem("lectura-link");
    if (enlaceGuardado) {
        $(".lectura-link").attr("href", enlaceGuardado);
    }

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
        
        // Guardar el nuevo enlace en el almacenamiento local
        localStorage.setItem("lectura-link", nuevoEnlace);
        
        $("#editarlink").hide();
    });
    $("#regresar-link").click(function () {
        $("#editarlink").hide();
    });
});

///fin del formualrio flotabte
///funcion de agregar csas dentro del div neuvsos componetes
///funcines dentro del froumulario flotante  desde la creacion hasta la edicion o personalizacion
/*

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
     let ultimoComponente = 8;

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
<div class="contenido-para-ocultar componente-comun" data-component-identifier="elemento-${ultimoComponente}" style="display: block;">
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

    <div class="elemento-contenedor">
        <div class="video-container">
            <div class="container color-div">
                <div class="container img-large">
                    <div class="row justify-content-center mb-4">
                        <div class="col-md-6 text-center d-flex justify-content-center align-items-center">
                            <img src="/Assets/img/Actividad sumativa.png" alt="Tu Imagen" class="img-fluid img-large">
                        </div>
                    </div>
                </div>
                
    <div class="componente videos">
                                <h3 contenteditable="true">${titulo}</h3>
                                <p>Fecha de entrega: ${fechaEntrega}</p>
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
ultimoComponente++;
            $("#tituloEditable").val("");
            $("#fechaEntrega").val("");
            $("#formularioFlotante").hide();
            formularioVisible = false;
            componenteVisible = false;
        });
    });
    $(document).on("click", ".eliminar", function () {
    // Mostrar un mensaje de confirmación
    if (window.confirm("¿Seguro que deseas eliminar este componente?")) {
        // Elimina el componente del DOM
        $(this).closest(".contenido-para-ocultar").remove();

        // Actualiza el almacenamiento local sin el componente eliminado
        const componentesGuardados = JSON.parse(localStorage.getItem('componentes')) || [];
        const componenteID = $(this).closest(".contenido-para-ocultar").data("component-identifier");
        const nuevosComponentes = componentesGuardados.filter((componente) => !componente.includes(componenteID));
        localStorage.setItem('componentes', JSON.stringify(nuevosComponentes));
    }
});


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
});*/

///funcin para crear componentes. tenia problemas se me hixo un desorden y me toco reorganizar todo es el de abajo me creaba componenetes extras era por el control de coponentes.
$(document).ready(function () {
    var formularioVisible = false;
    var componenteVisible = false;
    var ultimoComponente = 8; // Inicializa el contador para aumentar lo id de los componneyes nuevos

    // Obtener el tipo de usuario de la cookie, esto es para los btonoes nuevos que se crean en los conponentes neuvos que no se muetren ala alumno, se estaban llendo en el alumno
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

   // Manejador de clic para mostrar/ocultar el formulario
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
    

    // Manejador de clic para botones de tipo 
    $("#foro, #videos, #examen, #lectura, #buzon").click(function () {
        // Resalta el botón seleccionado y quita el resaltado de otros ptd:no se ve tengo que arreglar eso XD
        $(".boton-tipo").removeClass("boton-seleccionado");
        $(this).addClass("boton-seleccionado");

        if (!componenteVisible) {
            componenteVisible = true;
            $("#tituloEditable, #fechaEntrega, #guardarCambios, #txt").show();
        }
    });

    // Manejador de clic para el botón "guardarCambios"
    $("#guardarCambios").click(function () {
        var titulo = $("#tituloEditable").val();
        var fechaEntrega = $("#fechaEntrega").val();
        var link = $("#link").val();
        var linkPagina = $("#link").val();
        var botonPresionado = $(".boton-seleccionado").attr("id"); // Obtener el tipo del botón presionado
        var nuevoComponente = "";

        if (botonPresionado === "videos") {
            nuevoComponente = `
<div class="contenido-para-ocultar componente-comun" data-component-identifier="elemento-${ultimoComponente}">
    <div class="botones-profesor text-center toggle-buttons">
        <button class="btn btn-primary ocultar-boton">
            <i class="far fa-eye"></i> Ocultar
        </button>
        <button class="btn btn-danger eliminar">
            <i class="fas fa-trash-alt"></i> Eliminar
        </button>
       <button class="btn btn-success" onclick="mostrarFormulario2(this)">
    <i class="fas fa-pencil-alt"></i> Modificar
</button>


    <div class="elemento-contenedor">
        <div class="video-container">
            <div class="container color-div">
                <div class="container img-large">
                    <div class="row justify-content-center mb-4">
                        <div class="col-md-6 text-center d-flex justify-content-center align-items-center">
                            <img src="/Assets/img/Actividad sumativa.png" alt="Tu Imagen" class="img-fluid img-large">
                        </div>
                    </div>
                </div>
                
                <div class="componente videos">
                    <h3 contenteditable="true">${titulo}</h3>
                    <p>Fecha de entrega: ${fechaEntrega}</p>
                </div>
                <div class="white-div mb-4 d-flex justify-content-between align-items-center">
                    <div class="container text-center">
                        <div id="videoContainer">
                            ${link}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
        }else if (botonPresionado === "foro") {
                nuevoComponente = `
                <div class="contenido-para-ocultar componente-comun" data-component-identifier="elemento-${ultimoComponente}">
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
                <div class="contenido-para-ocultar componente-comun" data-component-identifier="elemento-${ultimoComponente}">
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
<div class="contenido-para-ocultar componente-comun"data-component-identifier="elemento-${ultimoComponente}">
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
            <a href="${linkPagina}" class="btn btn-primary lectura-link" target="_blank">
                <i class="fas fa-question-circle"></i> Lectura
            </a>
        </div>
    </div>
</div>
                `;
                
            }
            else if (botonPresionado === "buzon") {
                nuevoComponente = `       
                        
<div class="contenido-para-ocultar componente-comun" data-component-identifier="elemento-${ultimoComponente}">
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

        // Agregar nuevo componente al contenedor
        $("#contenedorDivs").append(nuevoComponente);
        guardarComponenteEnLocalStorage(nuevoComponente);
        ultimoComponente++; // Incrementar el contador
        $("#tituloEditable").val("");
        $("#fechaEntrega").val("");
        $("#formularioFlotante").hide();
        formularioVisible = false;
        componenteVisible = false;
    });

    // Manejador de clic para eliminar un componente
    $(document).on("click", ".eliminar", function () {
    if (window.confirm("¿Seguro que deseas eliminar este componente?")) {
        // Elimina el componente del DOM
        $(this).closest(".contenido-para-ocultar").remove();
        const componentesGuardados = JSON.parse(localStorage.getItem('componentes')) || [];
        const componenteID = $(this).closest(".contenido-para-ocultar").data("component-identifier");
        const nuevosComponentes = componentesGuardados.filter((componente) => !componente.includes(componenteID));
        localStorage.setItem('componentes', JSON.stringify(nuevosComponentes));
    }
});
    // Función para guardar componentes en el almacenamiento local
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
    ///funcion para editar los links de los videos de los componnetes nuevos(Pruebas)
    
    
    

});

////////////////////////////////////////////////////fin de la fucionde crear compnente///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
///pruebas para la funcion eliminar. si se preguntan xq hay  2 elimnar es proque uno en realidad oculta en el html porque no pude romever del html y el otro elimina del LocalStrae

document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los botones "Eliminar"
    let botonesEliminar = document.querySelectorAll(".eliminar");

    // Iterar sobre los botones
    botonesEliminar.forEach(function (boton) {
        boton.addEventListener("click", function () {
            if (confirm("¿Seguro que deseas eliminar este componente?")) {
                // Obtener el componente que se está eliminando
                let componente = this.closest(".contenido-para-ocultar");
                let componentId = componente.getAttribute("data-component-identifier");

                // Eliminar el componente del DOM
                componente.remove();

                // Guardar el estado de visibilidad en el almacenamiento local
                localStorage.setItem(`ocultar-${componentId}`, "true");
            }
        });
    });

    // Comprobar y ocultar componentes en base al almacenamiento local
    let componentes = document.querySelectorAll(".contenido-para-ocultar");
    componentes.forEach(function (componente) {
        let componentId = componente.getAttribute("data-component-identifier");
        let ocultar = localStorage.getItem(`ocultar-${componentId}`);
        if (ocultar === "true") {
            componente.style.display = "none";
        }
    });
});


//efecto del precarga 
window.onload = function () { 
    $("#preloader").fadeOut();
    $("body").removeClass("ocul");
}
///////////////////////////////////////////////////////////////////////////////editar video
/*
function mostrarFormulario2(botonEditar) {
    // Obtén el elemento padre del botón (el componente que deseas editar)
    const componente = botonEditar.closest(".contenido-para-ocultar");

    // Extrae el enlace de video actual del componente (puedes usar un atributo personalizado)
    const enlaceVideoActual = componente.getAttribute("data-enlace-video");

    // Rellena el formulario con el enlace de video actual
    const enlaceVideoInput = document.getElementById("nuevoEnlaceVideo2");
    enlaceVideoInput.value = enlaceVideoActual;

    // Muestra el formulario
    document.getElementById("editarVideo2").style.display = "block";

    // Guarda una referencia al componente que se está editando
    document.getElementById("editarVideo2").dataset.componenteAEditar = componente;
}

// Función para guardar los cambios en el componente
function guardarCambios2() {
    const nuevoEnlaceVideo = document.getElementById("nuevoEnlaceVideo2").value;

    // Obtiene el componente que se está editando
    const componenteAEditar = document.getElementById("editarVideo2").dataset.componenteAEditar;

    // Actualiza el enlace de video en el componente
    componenteAEditar.setAttribute("data-enlace-video", nuevoEnlaceVideo);

    // Oculta el formulario
    document.getElementById("editarVideo2").style.display = "none";
}*/
//fin de pruebas
//funcion de pra ocultar compentes
// Cuando el estudiante oculta el componente
///////////////////////////////////////// Función para ocultar el componente/////////////////////////////////////////////////////////////////////////////////////////////
$(document).off("click", ".ocultar-boton-componentes").on("click", ".ocultar-boton-componentes", function () {
    // Marcar el componente como oculto en el localStorage
    const componenteID = $(this).closest(".contenido-para-ocultar").data("component-identifier");
    const componentesOcultos = JSON.parse(localStorage.getItem('componentesOcultos')) || [];
    // Verificar si el componente ya existe en la lista
    if (!componentesOcultos.includes(componenteID)) {
        componentesOcultos.push(componenteID);
        localStorage.setItem('componentesOcultos', JSON.stringify(componentesOcultos));
        alert("Componente ocultado para estudiantes");
    } else {
        alert("El componente ya está oculto para estudiantes");
    }
    // Ocultar el componente y mostrar el botón "Mostrar" inmediatamente
    const $componente = $(this).closest(".ocultar-elemento");
    $componente.hide();
    $componente.find(".mostrar-boton").show();
});

///////////////////////////////////////////////////////////////fin de funcion elimanr ////////////////////////////////////////////////
//no pude toco caragarlos en una tabla/////fucnon para cargar en la tabla 
function actualizarTablaComponentesOcultos() {
    // Obtener componentes ocultos 
    const componentesOcultos = JSON.parse(localStorage.getItem('componentesOcultos')) || [];
    // Limpiar la tabla
    $('#tabla-componentes-ocultos tbody').empty();
    // Crear filas en la tabla para los componentes ocultos
    componentesOcultos.forEach((componenteID) => {
        const $componente = $(`.contenido-para-ocultar[data-component-identifier="${componenteID}"]`);
        const nombreComponente = $componente.data('component-name'); // Obtener el nombre
        const fila = `
            <tr data-component-identifier="${componenteID}">
                <td>${nombreComponente}</td>
                <td>
                    <button class="mostrar-componente">Mostrar</button>
                </td>
                <td>
                    <button class="eliminar-componente">Eliminar</button>
                </td>
            </tr>
        `;
        $('#tabla-componentes-ocultos tbody').append(fila);
    });
}
actualizarTablaComponentesOcultos();

$(document).on("click", ".mostrar-boton-ocultos", function () {
    const $formularioOcultos = $("#formulario-ocultos");
    if ($formularioOcultos.is(":visible")) {
        $formularioOcultos.hide();
    } else {
        $formularioOcultos.show();
        actualizarTablaComponentesOcultos();
    }
});
$(document).on("click", ".cerrar", function () {
    $("#formulario-ocultos").hide();
});
/////////////////////////////////
$(document).on("click", ".ocultar-boton", function () {
    // Marcar el componente como oculto en el localStorage
    const componenteID = $(this).closest(".contenido-para-ocultar").data("component-identifier");
    const componentesOcultos = JSON.parse(localStorage.getItem('componentesOcultos')) || [];
    componentesOcultos.push(componenteID);
    localStorage.setItem('componentesOcultos', JSON.stringify(componentesOcultos));
    alert("Componente ocultado para estudiantes");
});
///////////////////////////////////////funcion para volver a mostrar
$(document).off("click", ".mostrar-componente");

// Cuando se hace clic en mostrar
$(document).on("click", ".mostrar-componente", function () {
    // Eliminar el componente de la lista de ocultos en el localStorage
    const componenteID = $(this).closest("tr").data("component-identifier");
    const componentesOcultos = JSON.parse(localStorage.getItem('componentesOcultos')) || [];
    const index = componentesOcultos.indexOf(componenteID);
    if (index > -1) {
        componentesOcultos.splice(index, 1);
        localStorage.setItem('componentesOcultos', JSON.stringify(componentesOcultos));
    }

    // Mostrar el componente y ocultar el botón mostrar
    const $componente = $(`.contenido-para-ocultar[data-component-identifier="${componenteID}"]`);
    $componente.show();
    $(this).hide(); // Ocultar el botón mostrar de la tabla 
    actualizarTablaComponentesOcultoscacion();

});











