"use strict";


const tratarCSV = texto =>{
  divResultado.innerHTML =  texto;
}

/////////////
// MAIN
////////////
const divResultado = document.querySelector("#resultado");

document.querySelector("#btnLeerCSV").addEventListener("click", e=>{

  fetch("datos.csv")
  .then( response=>{ 
    if(!response.ok)
      throw new Error("Se ha producido un error horroroso.");

    return response.text()
  })
  .then( texto=> tratarCSV(texto))
  .catch( error=>{ 
    divResultado.innerHTML = `<p style="color:red;">${error}</p>`
  });
  
});