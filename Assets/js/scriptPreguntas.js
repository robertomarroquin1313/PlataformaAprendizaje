///funcion para cerra cerrar el formulario de ecicion de preguntas
 function closeForm() {
        var editarExamenDiv = document.getElementById("editar-examen");
        editarExamenDiv.style.display = "none";
    }    

//seleccionando todos los elementos requeridos para el examen 
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// si se hace clic en el botón Iniciar prueba

start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //muestra la caja 
}

// si se hace clic en el botón Salir del cuestionario
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //ocultar cuadro de información
}

// si se hace clic en el botón continuar prueba
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //esconde la primera caja que se musutra 
    quiz_box.classList.add("activeQuiz"); //mouestra la caja de preguntas osea todo 
    showQuetions(0); //lla ma la funcion que mustra las preguntas
    queCounter(1); //pone el parametro de la pregunta en 1
    startTimer(20); //tiemepo de la pregunta 
    startTimerLine(0); //inicia el tiempo
}
//se declaran las varibles
let timeValue = 20;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// si se hace clic en el botón Reiniciar cuestionario
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
    result_box.classList.remove("activeResult"); //hace lo mismo pero si le da a cerrar el custionario 
    timeValue = 20; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //llama la funcion de las preguntas 
    queCounter(que_numb); //pasa la varieble del nuemro de la pregunta 
    clearInterval(counter); //limpia la varibel del contadir 
    clearInterval(counterLine); //limpia la linea del condatador 
    startTimer(timeValue); //llama pata ininciar el contador 
    startTimerLine(widthValue); //llama la funcion del contador 
    timeText.textContent = "Tiempo restante"; //texto del contador 
    next_btn.classList.remove("show"); //btn patra darle siguiente 
}

// si se hace clic en el botón Salir del cuestionario
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// /si se hace clic en el botón Next Que
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //si la cantidad de preguntas es menor que la longitud total de preguntas"
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); 
        queCounter(que_numb); //pasa el nuemro de pregunta 
        clearInterval(counter); //limpia el contador
        clearInterval(counterLine); //limpia el contador
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //funcion del tiempo
        timeText.textContent = "Tiempo restante"; 
        next_btn.classList.remove("show"); 
    }else{
        clearInterval(counter); 
        clearInterval(counterLine); 
        showResult(); 
    }
}

// obtener preguntas y opciones del array del preguntas.js
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //aqui se crean los span y las preguntas 
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag; 
    
    const option = option_list.querySelectorAll(".option");

    // establecer el atributo onclick para todas las opciones disponibles

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// aqui se cran los iconos 
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//si selecciona una opcion
function optionSelected(answer){
    clearInterval(counter); //limpiar 
    clearInterval(counterLine); //limpiar 

    let userAns = answer.textContent; //obtinee la opcion
    let correcAns = questions[que_count].answer; //obtinee la correcta de del preguntas.js
    const allOptions = option_list.children.length; //obtine todas las opciones 
    
    if(userAns == correcAns){ //compara si son iguales 
        userScore += 1; //aunenta el puntake en +1
        answer.classList.add("correct"); //pone en verde la eleccion correcta 
        answer.insertAdjacentHTML("beforeend", tickIconTag); //garega el icono
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //agrega clor rojo para la incrrecta 
        answer.insertAdjacentHTML("beforeend", crossIconTag); //agrega ek icono
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //aqui ve si hay ina pregunta igual en el array 
                option_list.children[i].setAttribute("class", "option correct"); //agrega el color
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //agrrga el icnono
                console.log("Auto selected correct answer.");
            }
        }
    }



    
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //cuando selecciona una desactiva las demas 
    }
    next_btn.classList.add("show"); //muetsra el btn de siguiente 
}
////////////////////////////////////////////////////////////////////

function showResult(){
    info_box.classList.remove("activeInfo"); //quita la caja de info 
    quiz_box.classList.remove("activeQuiz"); //cierra la caja del quiz
    result_box.classList.add("activeResult"); //mueestra la caja de lso resultado
    //////aqui dependiendo de la cnqatida de puntos se mostrara uan 
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // i
        
        let scoreTag = '<span> y  Felicidades! 🎉, Tienes <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag; 
    }
    else if(userScore > 1){
        let scoreTag = '<span> y  Muy bueno 😎, Tienes <p>'+ userScore +'</p> de  <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ 
        let scoreTag = '<span> y Fallaste 😐, Tienes  <p>'+ userScore +'</p> de  <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //cambie el tiempo
        time--; //baja el tiempo
        if(time < 9){ //
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //agrega un 0 antes del numero asi 09,08-....
        }
        if(time < 0){ 
            clearInterval(counter);
            timeText.textContent = "Se acabo el tiempo";
            const allOptions = option_list.children.length; //obtine las opcione
            let correcAns = questions[que_count].answer; //optine  la correcya 
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //si aluna es igual
                    option_list.children[i].setAttribute("class", "option correct"); //agrega el color verde
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //desactiva
            }
            next_btn.classList.add("show"); 
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 39);//intervalo de 39milesegundos
    function timer(){
        time += 1; //aumenta de +1
        time_line.style.width = time + "px"; //cambia el acnho para que todos los numeros sean iguales 
        if(time > 549){ 
            clearInterval(counterLine); 
        }
    }
}

function queCounter(index) {
    ///contadir de preguntas
    
    let totalQueCounTag = '<span><p>'+ index +'</p> de <p>'+ questions.length +'</p> Preguntas</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag; 
}
