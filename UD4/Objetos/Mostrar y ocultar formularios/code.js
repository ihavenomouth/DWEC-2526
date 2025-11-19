"use strict";

///////////////////////////
// FUNCTION
///////////////////////////
const ocultarSecciones = () =>{
  const sectionTal = document.querySelector("#sTal");
  //sectionTal.style.display="none";
  sectionTal.classList.add("oculto");

  const sectionCual = document.querySelector("#sCual");
  sectionCual.classList.add("oculto");
}


function mostrarCual(){
  ocultarSecciones();
  const sectionTal = document.querySelector("#sTal");
  sectionTal.classList.remove("oculto");
}

///////////////////////////
// MAIN
///////////////////////////

ocultarSecciones();

document.querySelector("#btnMostrarTal").addEventListener("click",mostrarCual);

document.querySelector("#btnMostrarCual").addEventListener("click", e=>{
  ocultarSecciones();
  const sectionCual = document.querySelector("#sCual");
  sectionCual.classList.remove("oculto");
});