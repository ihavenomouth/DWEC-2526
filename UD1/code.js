"use strict";

//////////////////////
// FUNCTIONS
/////////////////////


function accion() {
  alert("Hola caracola");
}




//////////////////////
// MAIN
//////////////////////

// 1.- Recuperamos el botón del HTML
// document.getElementById("btnAccion")
let btnAccion = document.querySelector("#btnAccion");
// console.log("El contenido de la variable aparece abajo")
// console.log(btnAccion);

// 2.- Añadimos funcionalidad al botón
btnAccion.addEventListener("click", accion);