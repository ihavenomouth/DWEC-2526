"use strict";

////////////
// MAIN
////////////////

const listado = document.querySelector("#listado");
const chkArriba = document.querySelector("#chkArriba");

document.querySelector("#btnAñadir").addEventListener("click", e=>{
  const txtNombre = document.querySelector("#txtNombre");
  const nombre = txtNombre.value;

  //creamos el párrafo
  const p = document.createElement("p");
  p.textContent = nombre;

  //añadimos el párrafo a la división
  listado.append(p);
});




listado.addEventListener("click", e=>{
  if(e.target.tagName != "P") return;

  const p = e.target;

  //miramos si hay que moverlo hacia arriba o no
  const arriba = chkArriba.checked;

  if(arriba){
    p.previousElementSibling?.before(p);  
    //Operador de optional chaining 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    // Es equivalente a:
    // if(p.previousElementSibling!=null)
    //  p.previousElementSibling.before(p);
  }
  else{
    p.nextElementSibling?.after(p);
  }

});

//Cambiamos la clase de la división listado para el cursor del ratón
chkArriba.addEventListener("change", e=>{
  listado.classList.toggle("arriba");
})