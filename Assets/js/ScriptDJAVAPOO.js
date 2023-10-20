
// Función para editar videos
function editarVideo() {
    $("#editarVideo").show();
}

// Función para guardar cambios en videos
function guardarVideo() {
    var nuevoCodigoIframe = $("#nuevoEnlaceVideo").val();
    $("#videoContainer").html(nuevoCodigoIframe);
    $("#editarVideo").hide();
}

// Función para regresar (ocultar la edición de video)
function regresarVideo() {
    $("#editarVideo").hide();
}


////Abrir fomrulario flotante para cabiar los links.
$(document).ready(function () {
    // Agregar un controlador de eventos para el botón "Modificar" en cada componente
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

///funcines dentro del froumulario flotante  desde la creacion hasta la edicion o personalizacion

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

    $("#foro, #videos, #examen").click(function () {
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
        <button class="btn btn-success editar">
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

    // Función para ocultar/mostrar contenido (con delegación de eventos)
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

    // Función para eliminar componente (con delegación de eventos)
    $(document).on("click", ".eliminar", function () {
        var confirmacion = confirm("¿Estás seguro de que deseas eliminar este componente?");
        if (confirmacion) {
            $(this).closest('.contenido-para-ocultar').remove();
        }
    });

   $(document).on("click", ".editar", editarVideo);

    $("#guardar").click(guardarVideo);

    $("#regresar").click(regresarVideo);
    $("#guardarCambios").click(editarVideo);

$("#guardar").click(guardarVideo);

$("#regresar").click(regresarVideo);

});

////fin de la fucionde crear compnente
///fomrulario foltate 
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

    
}/////////////////////////////////////



/////algnos sirven pero no le s recomiendeo descommentrarialos porque son purebas sirven pero no como deberian los deje ahi por si funciona a mejr que los nuevos y ideas 


















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
 });*//*
 ////funcion de coultar para todos los btones
$(document).ready(function () {
    $(".ocultar-boton").click(function () {
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
 });
//funcion de eliminar paar todows los btones 
 $(document).ready(function () {
    $(".eliminar").click(function () {
        var confirmacion = confirm("¿Estás seguro de que deseas eliminar este componente?");

        if (confirmacion) {
            $(this).closest('.componente-comun').remove();
        }
    });
});*/

////funcion que oculta son uviversales las cambie porque no funcionaba en los componentes nuevos
/*
$(document).ready(function () {
    // Función para ocultar/mostrar contenido (con delegación de eventos)
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

    // Función para eliminar componente (con delegación de eventos)
    $(document).on("click", ".eliminar", function () {
        var confirmacion = confirm("¿Estás seguro de que deseas eliminar este componente?");

        if (confirmacion) {
            $(this).closest('.contenido-para-ocultar').remove();
        }
    });

    // Función para editar videos
    $(document).on("click", ".editar", function () {
        $("#editarVideo").show();
    });

    // Función para guardar cambios en videos
    $("#guardar").click(function () {
        var nuevoCodigoIframe = $("#nuevoEnlaceVideo").val();
        $("#videoContainer").html(nuevoCodigoIframe);
        $("#editarVideo").hide();
    });

    // Función para regresar (ocultar la edición de video)
    $("#regresar").click(function () {
        $("#editarVideo").hide();
    });
});
*/



///
// Función para editar videos





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

    $("#foro, #videos, #examen").click(function () {
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
                // Crear componente de foro
                nuevoComponente = `
                <div class="contenido-para-ocultar componente-comun" data-componente="comun">
                    <!-- ... Código para el componente de foro ... -->
                </div>
                `;
            } else if (botonPresionado === "videos") {
                // Crear componente de videos
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
        <button class="btn btn-success editar">
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
                // Crear componente de examen
                nuevoComponente = `
                <div class="contenido-para-ocultar componente-comun" data-componente="comun">
                    <!-- ... Código para el componente de examen ... -->
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

    // Función para ocultar/mostrar contenido (con delegación de eventos)
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

    // Función para eliminar componente (con delegación de eventos)
    $(document).on("click", ".eliminar", function () {
        var confirmacion = confirm("¿Estás seguro de que deseas eliminar este componente?");
        if (confirmacion) {
            $(this).closest('.contenido-para-ocultar').remove();
        }
    });

    // Agrega la clase "editar" a los botones de "Modificar" fuera de los nuevos componentes
    $(".editar").click(editarVideo);
    $("#regresar").click(regresarVideo);
});*/

/*
$(document).ready(function () {
    $("#agregarFormulario").click(function () {
        $("#formularioFlotante").toggle();
    });

    // Manejar el evento de clic para cada botón dentro del formulario
    $("#foro, #videos, #examen, #links").click(function () {
        var botonPresionado = this.id; // Obtener el ID del botón presionado

        // Mostrar el formulario para crear elementos
        $("#nuevoComponente").show();

        // Manejar el evento de clic para guardar cambios
        $("#guardarCambios").click(function () {
            var titulo = $("#tituloEditable").val();
            var fechaEntrega = $("#fechaEntrega").val();

            // Crear el nuevo componente según el botón presionado
            var nuevoComponente = "";

            if (botonPresionado === "foro") {
                nuevoComponente = `
                
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
<div class="componente foro">
                        <h3 contenteditable="true">${titulo}</h3>
                        <p>Fecha de entrega: ${fechaEntrega}</p>
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
                nuevoComponente = `
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


<div class="componente videos">
                        <h3 contenteditable="true">${titulo}</h3>
                        <p>Fecha de entrega: ${fechaEntrega}</p>
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
                nuevoComponente = `
                    <div class="componente examen">
                        <h3 contenteditable="true">${titulo}</h3>
                        <p>Fecha de entrega: ${fechaEntrega}</p>
                    </div>
                `;
            }

            // Agregar el nuevo componente al contenedor
            $("#contenedorDivs").append(nuevoComponente);

            // Restablecer campos y ocultar el formulario
            $("#tituloEditable").val("");
            $("#fechaEntrega").val("");
            $("#nuevoComponente").hide();
        });

        // Restablecer campos y ocultar el formulario cuando se cancele
        $("#nuevoComponente").on("reset", function () {
            $("#tituloEditable").val("");
            $("#fechaEntrega").val("");
            $("#nuevoComponente").hide();
        });
    });
});


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
});*/
