"use strict";


// Dado este HTML y CSS, queremos que cuando se pulse sobre una división con un color se clone la división y se añada a la tabla de colores. Sin embargo, cuando se pulse sobre el párrafo queremos que se elimine la última división de la tabla. Cada vez que se realice una acción se añadirá un párrafo explicando qué se ha hecho en la división con id divAcción.

const divAccion = document.querySelector("#divAcción");

const tablaColores = document.querySelector("#tablaColores");

tablaColores.addEventListener("click", e=>{
  //1.- Si no hemos hecho click sobre una división o sobre el párrafo, salimos
  if( e.target.tagName != "DIV" && e.target.tagName != "P" )
    return;
    
  //2.- Si era una DIV, pero era la propia tabla, salimos
  if( e.target.id=="tablaColores" )
    return;

  //4.- Sabemos que se ha pulsado sobre un P o una div.
  // Si se pulsó sobre la P, eliminamos el último elemento de la tabla
  if(e.target.tagName == "P"){
    tablaColores.lastElementChild.remove();
    
    const p = document.createElement("p");
    p.textContent = "Eliminada la última  división";
    divAccion.append(p);
  }
  else{ //Si es una DIV, queremos clonarla
    const nuevoDiv = e.target.cloneNode(true);
    tablaColores.append(nuevoDiv);

    const p = document.createElement("p");
    p.textContent = "Clonado el color " + e.target.textContent;
    divAccion.append(p);

  }


});