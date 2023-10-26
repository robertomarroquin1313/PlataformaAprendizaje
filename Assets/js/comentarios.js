
function mostrar() {

    swal({
        title: "Enviar sugerencia",
        text: "¿Estas seguro de enviar este mensaje?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((EnviarComentario) => {
            if (EnviarComentario) {
                swal("Gracias por tu comentario!!", {
                    icon: "success",
                });
            } else {
             
                swal("Envio cancelado",{
                    icon: "error",
                });
            }
        });
}
