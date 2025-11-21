"use strict";


/////////////////////
// MAIN
/////////////////////

const divResultado = document.querySelector("#divResultado");

document.querySelector("#btnAceptar").addEventListener("click", e=>{
  const chkMarcados = document.querySelectorAll("[type=checkbox]:checked");
  let numChkMarcados = chkMarcados.length;
  
  if( numChkMarcados == 0 || numChkMarcados == 3 ){
    divResultado.innerHTML = `<p><span style="color: #B33">Error:</span> Debe seleccionar 1 o 2 opciones.</p>`;
    return;
  }
  
  // Seguro que hemos seleccionado 1 o 2 opciones, pero ¿cuáles?
  divResultado.innerHTML = "<p>Opciones elegidas:</p>";
  for(let chk of chkMarcados){
    divResultado.innerHTML += `<p>${chk.value}</p>`;
  }

});