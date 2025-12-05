"use strict";

let elementoArrastrado = null;

document.querySelectorAll("[draggable]").forEach( elemento =>{
  elemento.addEventListener("dragstart", e=>{
    // setTimeout(()=>{
      // div.style.visibility="hidden";
      elementoArrastrado = elemento;
    // },0);
  });
});


const dropzone = document.querySelector("#dropzone");

// Impedimos el comportamiento por defecto de los elementos 
// arrastrados (que es volver a su posición)
dropzone.addEventListener("dragover", e=>{
  e.preventDefault();
});

dropzone.addEventListener("drop", e=>{
  // elementoArrastrado.style.visibility="visible";
  dropzone.append(elementoArrastrado);
});

