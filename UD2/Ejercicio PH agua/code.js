"use strict";


//////////////////////
// FUNCTIONS
///////////////////////

function analizarPH(){
  //1.- Recuperamos el valor de PH que ha escrito el usuario
  const valorPH = document.querySelector("#txtPH").valueAsNumber;

  //2.- Analizamos el valor y creamos la solución
  let solucion = `<p>El valor del PH del agua es ${valorPH}</p>`;

  // El agua tiene un ph neutro (entre 6.5 y 8.5), ligeramente alcalino (entre 8.5 y 11), muy alcalino (mayor que 11), ligeramente ácido (entre 3.5 y 6.5) o muy ácido (menor que 3.5).
  if( valorPH < 3.5 ){
    solucion += "<p>El PH es muy ácido</p>";
  }
  else if( valorPH > 11 ){
    solucion += "<p>El PH es muy alcalino</p>";
  }
  else if ( valorPH >= 3.5 && valorPH < 6.5){
    solucion += "<p>El PH es ligeramente ácido</p>";
  }
  else if ( valorPH >= 6.5 && valorPH < 8.5){
    solucion += "<p>El PH es neutro</p>";
  }
  else{
    solucion += "<p>El PH es ligeramente alcalino</p>";
  }

  //3.- Mostramos la solución en la división con id divSolucion
  document.querySelector("#divSolucion").innerHTML = solucion;
}

////////////////////
// MAIN
/////////////////////

//1.- Recuperamos el botón
const btnCalcular = document.querySelector("#btnCalcular");

// //2.- Le asignamos un eventListener 
btnCalcular.addEventListener("click", analizarPH  );





const a=[ 0,14,24,34,54,64,74,84,94];

for(let i=a.length-1; i>0 ;i--){
  debugger
  console.log( a[i] );
}