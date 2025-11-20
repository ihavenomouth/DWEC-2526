"use strict";


/////////////////////////////
// MAIN
/////////////////////////////

const compras = document.querySelector("#compras");

document.querySelector("#alimentos").addEventListener("click", e=>{
  if(e.target.tagName != "LI"){
    return;
  }

  // e.target.style.display = "none";
  compras.innerHTML+=`<p>${e.target.textContent}</p>`;
});