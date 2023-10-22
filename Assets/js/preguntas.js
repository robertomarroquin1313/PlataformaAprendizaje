////aqui solo vana preguntas y ya, las mandas a llamr desde del otro formulario como el ajax da errores pro las politic


let questions = [
  {
    
    
  numb: 1,
  question: "1- ¿Cuál es la descripción que crees que define mejor el concepto 'clase' en la programación orientada a objetos?",
  answer: "Es un modelo o plantilla a partir de la cual creamos objetos",
  options: [
    "Es un concepto similar al de 'array'",
    "Es un tipo particular de variable",
    "Es un modelo o plantilla a partir de la cual creamos objetos",
    "Es una categoria de datos ordenada secuencialmente"
  ]
},
  {
  numb: 2,
  question: " ¿Qué elementos crees que definen a un objeto?",
  answer: "Sus atributos y sus métodos",
  options: [
    "Sus cardinalidad y su tipo",
    "Sus atributos y sus métodos",
    "La forma en que establece comunicación e intercambia mensajes",
    "Su interfaz y los eventos asociados"
  ]
},
  {
  numb: 3,
  question: "¿Qué código de los siguientes tiene que ver con la herencia?",
  answer: "public class Componente extends Producto",
  options: [
    "public class Componente extends Producto",
    "public class Componente inherit Producto",
    "public class Componente implements Producto",
    "public class Componente belong to Producto"
  ]
},
  {
  numb: 4,
  question: "¿Qué significa instanciar una clase?",
  answer: "Crear un objeto a partir de la clase",
  options: [
    "Duplicar una clase",
    "Eliminar una clase",
    "Crear un objeto a partir de la clase",
    " Conectar dos clases entre sí"
  ]
},
  {
  numb: 5,
  question: " En Java, ¿a qué nos estamos refiriendo si hablamos de 'Swing'?",
  answer: "Una librería para construir interfaces gráficas",
  options: [
    "Una función utilizada para intercambiar valores",
    "Es el sobrenombre de la versión 1.3 del JDK",
    "Un framework específico para Android",
    "Una librería para construir interfaces gráficas"
  ]
  }, {
    
  numb: 6,
  question: " ¿Qué es Eclipse?",
  answer: "Ninguna de las anteriores",
  options: [
    "Una libreria de Java",
    "Una versión de Java especial para servidores",
    "Un IDE para desarrollar aplicaciones",
    "Ninguna de las anteriores"
  ]
  
  },
  {
     numb: 7,
  question: " ¿Qué es el bytecode en Java?",
  answer: "El formato que obtenemos tras compilar un fuente .java",
  options: [
    "El formato de intercambio de datos",
    "El formato que obtenemos tras compilar un fuente .java",
    "Un tipo de variable",
    "Un depurador de código"
  ]
  }, {
    
     numb: 8,
  question: " ¿Qué código asociarías a una Interfaz en Java ?",
  answer: "public class Componente implements Printable",
  options: [
    "public class Componente interface Product",
    "Componente cp = new Componente (interfaz)",
    "public class Componente implements Printable",
    "Componente cp = new Componente.interfaz"
  ]
  }, {
    numb: 9,
  question: "  ¿Qué significa sobrecargar (overload) un método??",
  answer: "Crear un método con el mismo nombre pero diferentes argumentos",
  options: [
    "Editarlo para modificar su comportamiento",
    "Cambiarle el nombre dejándolo con la misma funcionalidad",
    "Crear un método con el mismo nombre pero diferentes argumentos",
    "Añadirle funcionalidades a un método"
  ]
    
  },
  {
    numb: 10,
  question: " ¿Qué es una excepción?",
  answer: "Un error que lanza un método cuando algo va mal",
  options: [
    "Un error que lanza un método cuando algo va mal",
    "Un objeto que no puede ser instanciado",
    "Un bucle que no finaliza",
    "Un tipo de evento muy utilizado al crear interfaces"
  ]
    
  }
];
//funcinoes para cambiar las preguntas
// Obten el boton modifcar-examen es ek qye esta eb el formulario
const examenModificarBtn = document.getElementById("examen-cambiar");

// Obtén el formulario de edición por su ID es ek id del frlario
const editarExamenForm = document.getElementById("editar-examen");

// Agrega un evento de clic al boton mididicar
examenModificarBtn.addEventListener("click", function () {
    // Cambia la visibilidad del formulario
    if (editarExamenForm.style.display === "none" || editarExamenForm.style.display === "") {
        editarExamenForm.style.display = "block"; // Muestra el formulario
    } else {
        editarExamenForm.style.display = "none"; // Oculta el formulario
    }
});

// Obten el selct para la cantidad
const cantidadPreguntasSelect = document.getElementById("cantidad-preguntas");

// Obten el contenedor de preguntas donde agregarAS los inputs
const preguntasContainer = document.getElementById("contenedor-preguntas");

// Agregar un evento cambiar
cantidadPreguntasSelect.addEventListener("change", function () {
    // Obtiene la cantidad seleccionada
    const cantidadPreguntas = parseInt(cantidadPreguntasSelect.value);

    // Limpia el contenedor de preguntas
    preguntasContainer.innerHTML = "";

    // Genera y agrega dinámicamente los nuevos inputs de preguntas, respuestas y opciones de respuesta
    for (let i = 0; i < cantidadPreguntas; i++) {
        const preguntaDiv = document.createElement("div");

        const preguntaInput = document.createElement("input");
        preguntaInput.classList.add("inputs-examen"); // Agregar una clase CSS al input
        preguntaInput.setAttribute("type", "text");
        preguntaInput.setAttribute("placeholder", `Pregunta ${i + 1}`);
        preguntaDiv.appendChild(preguntaInput);

        // Agregar respuesta
        const respuestaInput = document.createElement("input");
        respuestaInput.classList.add("inputs-examen"); // Agregar una clase CSS al input
        respuestaInput.setAttribute("type", "text");
        respuestaInput.setAttribute("placeholder", `Respuesta ${i + 1}`);
        preguntaDiv.appendChild(respuestaInput);

        // Agregar opciones de respuesta
        for (let j = 0; j < 4; j++) {
            const opcionInput = document.createElement("input");
            opcionInput.classList.add("inputs-examen"); // Agregar una clase CSS al input
            opcionInput.setAttribute("type", "text");
            opcionInput.setAttribute("placeholder", `Opción ${j + 1}`);
            preguntaDiv.appendChild(opcionInput);
        }

        preguntasContainer.appendChild(preguntaDiv);
    }
});



const guardarPreguntasButton = document.getElementById("guardar-preguntas-examen");
guardarPreguntasButton.addEventListener("click", function () {
    // Obtén las preguntas ingresadas
    const preguntas = [];
    const preguntaDivs = preguntasContainer.querySelectorAll("div");
    preguntaDivs.forEach((preguntaDiv, index) => {
        const inputs = preguntaDiv.querySelectorAll("input");
        const pregunta = {
            numb: index + 1,
            question: inputs[0].value, // El primer input es la pregunta
            answer: inputs[1].value, // El segundo input es la respuesta
            options: [...inputs].slice(2).map(input => input.value) // Las demás entradas son opciones
        };
        preguntas.push(pregunta);
    });

    // Reemplaza las preguntas del examen con las nuevas preguntas
    questions = preguntas; 

    // Limpia el contenedor de preguntas
    preguntasContainer.innerHTML = "";
    // Actualiza el arreglo questions
    questions = preguntas;
    //eletta
    alert("Las preguntas del examen se han actualizado.");

    // Cierra el formulario 
    editarExamenForm.style.display = "none";

    // Imprime el arreglo questions en la consola 
    console.log("Preguntas actualizadas:", questions);
});
