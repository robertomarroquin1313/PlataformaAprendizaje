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
       <strong><h6>Re:Foro de participación DS21</h6></strong>
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
            element.parentElement.parentElement.parentElement.remove();
        }
    }
}
 //Buscaremos el id del boton "Crear foro" con el evento click
document.getElementById('btnxd').addEventListener('click', function (e) {
    const titulo = document.getElementById('titulo').value;
    const mensaje = document.getElementById('mensaje').value;
    const foro = new Foro(titulo, mensaje);
    const pfc = new Agregarforo();
    //Llamamos la funcion agregrar
    pfc.AgregarL(foro);
    // Llamamos la funcion limpiar campos
    pfc.LimpiarCampos();
    remover.reset();
    e.preventDefault();
});

// funcion para limpiar campos
function limpiar(){
    titulo.reset();
}
// Enviamos la informacion creada a "Product-list"
document.getElementById('product-list').addEventListener('click', function (e) {
    const pfc = new Agregarforo();
    pfc.EliminarL(e.target);
});