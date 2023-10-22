class Foro {
    constructor(titulo, mensaje) {
        this.titulo = titulo;
        this.mensaje = mensaje;
    }
}
class Agregarforo {
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

    LimpiarCampos(element) {
        document.getElementById('remover').reset();
    }
    EliminarL(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
        }
    }
}

document.getElementById('btnxd').addEventListener('click', function (e) {
    const titulo = document.getElementById('titulo').value;
    const mensaje = document.getElementById('mensaje').value;
    const foro = new Foro(titulo, mensaje);
    const pfc = new Agregarforo();
    pfc.AgregarL(foro);
    pfc.LimpiarCampos();
    remover.reset();
    e.preventDefault();
});

function limpiar(){
    titulo.reset();
}

document.getElementById('product-list').addEventListener('click', function (e) {
    const pfc = new Agregarforo();
    pfc.EliminarL(e.target);
});