"use strict";

///////////
// FUNCTIONS
////////////////



///////////
// MAIN
////////////////
const arrNombres = [];
const txtNombre = document.querySelector("#txtNombre");
const divResultado = document.querySelector("#resultado");

document.querySelector("#btnAnadir").addEventListener("click", e=>{
  const nombre = txtNombre.value.trim();
  if(!nombre){
    divResultado.innerHTML="<p>Error: debe indicar un nombre.</p>";
    return;    
  }
  arrNombres.push(nombre);
});



document.querySelector("#btnEliminar").addEventListener("click", e=>{
  if(arrNombres.length==0) return;

  const nombre = txtNombre.value.trim();

  if(!nombre){
    divResultado.innerHTML="<p>Error: debe indicar un nombre.</p>";
    return;    
  }

  const pos=arrNombres.findIndex(n=>n===nombre);
  if(pos==-1)
    return;

  arrNombres.splice(pos,1);
});





document.querySelector("#btnMostrar").addEventListener("click", e=>{
  if(arrNombres.length==0) {
    divResultado.innerHTML="<p>No hay nada que mostrar</p>";
    return;
  }
  divResultado.innerHTML="";
  arrNombres.sort( (a,b)=>a.localeCompare(b, "es") );
  divResultado.innerHTML = "<ul>"+arrNombres.map(n=>`<li>${n}</li>`).join("")+"</ul>";
});
