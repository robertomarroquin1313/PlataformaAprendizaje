class Foro {
    constructor(titulo, mensaje) {
        this.titulo = titulo;
        this.mensaje = mensaje;
    }
}
class Agregarforo {
    //Especificamos 2 constantes. Una para crear elemntos nuevos a partir de los elementos ingresados y otra para mostrar lo
    // Que se a creado.
    AgregarL(Agregarforo) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
    <div class = 'card  mb-4 '>
      <div class =  'card-body'>
       <a href="#" name= "delete">Eliminar</a>
       <strong><h6>Re:Respuesta a Aviso DS21</h6></strong>
       <p> de <a href="#" name= "usuario">Nombre de usuario</a> Viernes - 6 de octubre de 2023, 21:09</p>
      <strong><h4>${Agregarforo.titulo}</h4></strong><br>
    ${Agregarforo.mensaje}
      </div>
    </div>`;

        productList.appendChild(element);
    }
   // Limpiamos los campos del modal emergente
    LimpiarCampos(element) {
        document.getElementById('remover').reset();
    }
    
    // Para eliminar hemos creado una "a" Con id de "delete"
    // Este buscarar ese id y removera su contenido
    EliminarL(element) {
        if (element.name === 'delete') {
            const cardDiv = element.parentElement.parentElement.parentElement;
            const titulo = cardDiv.querySelector('h4').textContent;
            const forosGuardados = JSON.parse(localStorage.getItem('foros')) || [];

            // Busca el foro en el Local Storage por el título o un identificador único
            const foroAEliminar = forosGuardados.find(foro => foro.titulo === titulo);

            if (foroAEliminar) {
                // Elimina el foro del arreglo del Local Storage
                forosGuardados.splice(forosGuardados.indexOf(foroAEliminar), 1);

                // Guarda el arreglo actualizado en el Local Storage
                localStorage.setItem('foros', JSON.stringify(forosGuardados));
            }

            // Elimina el elemento del DOM
            cardDiv.remove();
        }
    }
}


// Buscar el id del botón "Crear foro" con el evento click
document.getElementById('btnxd').addEventListener('click', function (e) {
    const titulo = document.getElementById('titulo').value;
    const mensaje = document.getElementById('mensaje').value;
    const foro = new Foro(titulo, mensaje);
    const pfc = new Agregarforo();
    // Llamar la función agregar
    pfc.AgregarL(foro);
    // Llamar la función limpiar campos
    pfc.LimpiarCampos();
    remover.reset();

    // Guardar el foro en localStorage
    guardarForoEnLocalStorage(foro);

    e.preventDefault();
});

// ...

// Función para guardar un foro en localStorage
function guardarForoEnLocalStorage(foro) {
    // Recuperar los foros existentes en localStorage
    const forosGuardados = JSON.parse(localStorage.getItem('foros')) || [];
    // Agregar el nuevo foro al arreglo
    forosGuardados.push(foro);
    // Guardar el arreglo actualizado en localStorage
    localStorage.setItem('foros', JSON.stringify(forosGuardados));
}

// Recuperar los foros guardados en localStorage al cargar la página
window.addEventListener('load', function () {
    const pfc = new Agregarforo();
    const forosGuardados = JSON.parse(localStorage.getItem('foros')) || [];

    for (const foro of forosGuardados) {
        pfc.AgregarL(foro);
    }
});

// Enviamos la informacion creada a "Product-list"
document.getElementById('product-list').addEventListener('click', function (e) {
    const pfc = new Agregarforo();
    pfc.EliminarL(e.target);
});
