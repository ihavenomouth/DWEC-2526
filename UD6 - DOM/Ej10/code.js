"use strict";

////////////
// MAIN
////////////////
const listado = document.querySelector("#listado");

document.querySelector("#btnAñadir").addEventListener("click", e=>{
  const txtNombre = document.querySelector("#txtNombre");
  const nombre = txtNombre.value;

  //creamos el párrafo
  const p = document.createElement("p");
  p.textContent = nombre;

  //añadimos el párrafo a la división
  listado.append(p);
});


// Típico fallo: añadir más de un addEventListener a la misma etiqueta

listado.addEventListener("click", e=>{
  if(e.target.tagName != "P") return;

  const p = e.target;

  //miramos si hay que moverlo hacia arriba o no
  const chkArriba = document.querySelector("#chkArriba");
  const arriba = chkArriba.checked;

  if(arriba){
    p.previousElementSibling?.before(p);
  }
  else{
    p.nextElementSibling?.after(p);
  }

});

