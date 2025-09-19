"use strict";


//////////////////////
// FUNCIONES
/////////////////////



/**
 * Calcula el volumen de una esfera
 * @param {Number} radio 
 * @returns Number
 */
function calculaVolumenDeEsfera(radio){
  return 4/3 * Math.PI * (radio**3);
}






/**
 * Recupera los datos necesarios para calcular el volumen de la efera y presentar el resultado
 */
function recuperarDatosyCalcular(){
  //1.- Recuperamos el input donde el usuario ha escrito el radio
  const txtRadio = document.querySelector("#txtRadio");

  //2.- Recuperamos el valor del input
  const radio = txtRadio.valueAsNumber;
  

  //3.- Calculamos el volumen de la esfera
  const volumenEsfera = calculaVolumenDeEsfera(radio);

  //4.- Presentamos el resultado al usuario
  presentarInformacion(radio, volumenEsfera);
}


/**
 * Presenta el resultado al usuario en la web
 * @param {Number} radio 
 * @param {Number} volumenEsfera 
 */
function presentarInformacion(radio, volumenEsfera){
  //1.- Recuperamos la división del resultado
  const divResultado = document.querySelector("#divResultado");
  
  //2.- Creamos la cadena de caracteres que se mostrará en la división
  const solucion = "<p>Una <strong>esfera</strong> de radio <code>" + radio + "</code> tiene un volumen de <code>" + volumenEsfera + "</code> unidades.</p>"

  //3.- Mostramos la cadena de caracteres en la división
  divResultado.innerHTML = solucion;
}


/////////////////////
// MAIN
////////////////////

//1.- Recuperamos el botón del HTML
const btnCalcular = document.querySelector("#btnCalcular");

//2.- Añadimos funcionalidad al botón
btnCalcular.addEventListener("click", recuperarDatosyCalcular);




// //1.- Calculamos el volumen de una esfera de radio 1
// let volumenEsferaRadio1 = calculaVolumenDeEsfera(1);
// alert("El volumen de una esfera de radio 1 es " + volumenEsferaRadio1);

// let volumenEsferaRadio2 = calculaVolumenDeEsfera(2);
// alert("El volumen de una esfera de radio 2 es " + volumenEsferaRadio2);



