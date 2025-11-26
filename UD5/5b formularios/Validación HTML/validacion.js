"use strict";

/////////////////////////////
// VALIDACIÓN
/////////////////////////////


const frm = document.querySelector("#frm");

frm.addEventListener("submit", e=>{

  //1.- Evitamos el evento submit
  e.preventDefault();

  const errores = [];

  //2.- Validamos los elementos usando la validación de HTML

  for(let control of frm.elements){
    if( !control.checkValidity() ){
      if(control.id == "titulo"){
        errores.push("El título es obligatorio y no debe tener más de 20 caracteres.")
      }
      else if( control.id == "anio" ) {
        errores.push("El año es obligatorio y debe estar comprendido entre 1900 y 2030.")
      }
      else if( control.id == "idioma" ) {
        errores.push("El idioma no debe tener más de 25 caracteres")
      }
      else if( control.id == "com" ) {
        errores.push("El comentario no debe tener más de 50 caracteres.")
      }
      else if( control.id == "codigo" ) {
        errores.push("El código es erróneo, debe constar de una P seguida de un número de 4 cifras.")
      }
    }
  }

  //3.- Mostramos los errores
  if(errores.length > 0) {
    const divErrores = document.querySelector("#divErrores");
    divErrores.innerHTML = errores.map(error=>`<p>${error}</p>`).join("");
    return;
  }
  else{
    frm.submit();
  }
    
});