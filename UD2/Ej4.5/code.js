"use strict";


//////////////////////
// FUNCTIONS
///////////////////////


/**
 * Muestra la tabla de multiplicar del número introducido por el usuario en un cuadro de texto
 */
function mostrarTabla(){
  //1.- Recuperamos el input
  const txtNumero = document.querySelector("#txtNumero");

  //2.- Recuperamos el número escrito en el input
  const num = txtNumero.valueAsNumber;

  //3.- Calculamos la tabla de multiplicar
  // let sol = "<p>"+num +" x 1 = "+ (num*1) + "</p>";
  let sol = `<p> ${num} x 1 = ${ num*1 }</p>`;
  sol += `<p> ${num} x 2 = ${ num*2 }</p>`;
  sol += `<p> ${num} x 3 = ${ num*3 }</p>`;
  sol += `<p> ${num} x 4 = ${ num*4 }</p>`;
  // sol += "<p>"+num +" x 2 = "+ (num*2) + "</p>";
  // sol += "<p>"+num +" x 3 = "+ (num*3) + "</p>";
  // sol += "<p>"+num +" x 4 = "+ (num*4) + "</p>";
  // sol += "<p>"+num +" x 5 = "+ (num*5) + "</p>";
  // sol += "<p>"+num +" x 6 = "+ (num*6) + "</p>";
  // sol += "<p>"+num +" x 7 = "+ (num*7) + "</p>";
  // sol += "<p>"+num +" x 8 = "+ (num*8) + "</p>";
  // sol += "<p>"+num +" x 9 = "+ (num*9) + "</p>";
  // sol += "<p>"+num +" x 10 = "+ (num*10) + "</p>";

  // // const sol = x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8 + x9 + x10;

  //4.- Recuperamos la división donde vamos a mostrar el resultado
  const divTabla = document.querySelector("#divTabla");

  //5.- Mostramos el resultado en la división
  divTabla.innerHTML = sol;
}

////////////////////
// MAIN
/////////////////////

//1.- Recuperamos el botón
const btnMostrarTabla = document.querySelector("#btnMostrarTabla");

//2.- Le asignamos un eventListener 
btnMostrarTabla.addEventListener("click", mostrarTabla  );