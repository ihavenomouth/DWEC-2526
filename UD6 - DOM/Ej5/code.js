"use strict";

const tabla = document.querySelector("#tabla");
  let tbody = tabla.tBodies[0];

tabla.addEventListener("click", e=>{
  // Si no es un TH salimos
  if(e.target.tagName!="TH")
    return;

  //Convertimos el HTMLCollection del tbody en un array para poder hacer el sort
  let arrTr = Array.from( tbody.children ) ;
  
  //Si hay que ordenarlo por nombre...eso es el firstElementChild de cada tr
  if(e.target.textContent == "Nombre"){
    
    arrTr.sort( 
      (tr1,tr2) => {
        const nombre1 = tr1.firstElementChild.textContent;
        const nombre2 = tr2.firstElementChild.textContent
        return nombre1.localeCompare(nombre2, navigator.language)
      }
    );
    
    for(let tr of arrTr){
      tbody.append(tr);
    }
  }
  else{  // Si hay que ordenar por apellido... eso es el lastElementChild de cada tr
    arrTr.sort( 
      (tr1,tr2) => {
        const apellido1 = tr1.lastElementChild.textContent;
        const apellido2 = tr2.lastElementChild.textContent
        return apellido1.localeCompare(apellido2, navigator.language)
      }
    );
    
    for(let tr of arrTr){
      tbody.append(tr);
    }
  }

})



document.querySelector("#txtNombre").addEventListener("input", e=>{
  // for (let tr of tbody.children){
  //   tr.style.display ="";
  // }

  for (let tr of tbody.children){
    if(! tr.firstElementChild.textContent.startsWith( e.target.value)  ){
      tr.style.display = "none";
    }else{
      tr.style.display ="";
    }
  }
});