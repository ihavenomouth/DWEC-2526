"use script";


////////////////////
// FUNCTION
////////////////////

function pregunta1Acertada(){
  divPregunta1.innerHTML = "<p>¿De qué color era el caballo blanco de Santiago?</p>";
  respuestasAcertadas[0]=true;
}


function gestionarPregunta1(){
  
  if(divPregunta1.innerHTML == "¿De qué color era el caballo blanco de Santiago?"){
    //1.- Cambiamos el contenido de la división 1 por su respuesta y un botón
    divPregunta1.innerHTML =  "<p>Blanco.</p>";
    divPregunta1.innerHTML += '<button id="btnAcertada1">Acertada</button>';
    
    //2.- Añadimos la funcionalidad al botón
    const btnAcertada1 = document.querySelector("#btnAcertada1");
    btnAcertada1.addEventListener("click", pregunta1Acertada);
  }
  else{
    divPregunta1.innerHTML = "¿De qué color era el caballo blanco de Santiago?";
  }
  
}





function pregunta2Acertada(){
  divPregunta2.innerHTML = "<p>¿En qué año se produjo la revolución española de 1868 conocida como <em>La gloriosa</em>?</p>";
  respuestasAcertadas[1]=true;
}

function gestionarPregunta2(){
  if(divPregunta2.innerHTML == "¿En qué año se produjo la revolución española de 1868 conocida como <em>La gloriosa</em>?"){
    //1.- Cambiamos el contenido de la división 1 por su respuesta y un botón
    divPregunta2.innerHTML =  "<p>1868.</p>";
    divPregunta2.innerHTML += '<button id="btnAcertada2">Acertada</button>';
    
    //2.- Añadimos la funcionalidad al botón
    const btnAcertada2 = document.querySelector("#btnAcertada2");
    btnAcertada2.addEventListener("click", pregunta2Acertada);
  }
  else{
    divPregunta2.innerHTML = "¿En qué año se produjo la revolución española de 1868 conocida como <em>La gloriosa</em>?";
  }
}



function verRespuestasAcertadas(){
  const totalPreguntas = respuestasAcertadas.length;
  
  let preguntasAcertadas = 0;
  for(let i=0;i<respuestasAcertadas.length;i++){
    if(respuestasAcertadas[i])
      preguntasAcertadas++;
  }

  alert(`Ha acertado ${preguntasAcertadas}, es decir, el ${(preguntasAcertadas/totalPreguntas*100).toFixed(2)}% de las preguntas.`);
}



////////////////////
// MAIN
////////////////////

//1.- Recuperamos las divisiones de las preguntas
const divPregunta1 = document.querySelector("main>div:nth-child(1)");
const divPregunta2 = document.querySelector("main>div:nth-child(2)");


//2.- Añadimos un eventListener
divPregunta1.addEventListener("click", gestionarPregunta1);
divPregunta2.addEventListener("click", gestionarPregunta2);


//3.- Llevamos el control de preguntas acertadas
let respuestasAcertadas=[false,false];



const btnVerResultado = document.querySelector("#btnVerResultado");
btnVerResultado.addEventListener("click", verRespuestasAcertadas);