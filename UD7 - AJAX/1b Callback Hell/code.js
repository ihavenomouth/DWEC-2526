"use strict";

/**
 * Muestra el resultado en la web
 * @param {String} mensaje de resultado que se muestra en una división
 */
const imprimeResultado = (mensaje) => {
  divResultado.innerHTML += "<p>" + mensaje + "</p>";
}


/*
  Cada una de estas funciones representa una petición al servidor para que indique el siguiente paso a realizar. Cuando la respuesta está lista, la muestra en la web
*/
const paso1 = (callback) =>{
  setTimeout( ()=> {
    imprimeResultado("Paso 1: Precalienta el horno a 180º y prepara el molde");
    if(callback)
      callback();
  }, 1000);
}

const paso2 = (callback) =>{
  setTimeout( ()=> {
    imprimeResultado("Paso 2: Prepara la mezcla de 4 huevos y 1 taza de azúcar");
    if(callback)
      callback();
  }
  , 500);
}

const paso3 = (callback) =>{
  setTimeout( ()=> {
    imprimeResultado("Paso 3: Agrega la harina y la levadura química a la mezcla y viértela en el molde");
    if(callback)
      callback();
  }
  , 2000);
}

const paso4 = (callback) =>{
  setTimeout( ()=> {
    imprimeResultado("Paso 4: Hornea el molde 25 minutos");
    if(callback)
      callback();
  }
  , 1000);
}

const paso5 = (callback) =>{
  setTimeout( ()=> {
    imprimeResultado("Paso 5: Desmoldar el bizcocho");
    if(callback)
      callback();
  }
  , 750);
}


// Representa las llamadas al servidor, suponiendo que sabemos que tenemos 5 pasos que realizar
const muestraPasos = () =>{
  // Ejecución de las funciones sin tener en cuenta la sincronía
  // Fíjate que aunque ejecutemos las peticiones en el orden correcto, 
  // cada una tarda un tiempo diferente y el orden en el que se devuelven
  // los pasos a realizar es incorrecto
  // paso1();
  // paso2();
  // paso3();
  // paso4();
  // paso5();


  // Conseguir sincronía con callbacks (problema de callback hell)
  paso1( ()=>{
    paso2( ()=>{
      paso3( ()=>{
        paso4( ()=>{
          paso5();
        });
      });
    });
  });

}


const divResultado = document.querySelector("#divResultado");

document.querySelector("#btnAccion").addEventListener('click', e=>{
  divResultado.innerHTML = "";
  muestraPasos();
});

