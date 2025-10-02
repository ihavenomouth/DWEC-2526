"use strict";

//////////////////////////////
// FUNCTION
//////////////////////////////

function validar(){
  //1.- Recuperamos las etiquetas
  const txtNombre = document.querySelector("#txtNombre");
  const txtEdad = document.querySelector("#txtEdad");
  const txtTurno = document.querySelector("#txtTurno");
  const txtPassword1 = document.querySelector("#txtPassword1");
  const txtPassword2 = document.querySelector("#txtPassword2");
  
  //2.- Recuperamos los valores
  const nombre = txtNombre.value;
  const edad = txtEdad.valueAsNumber;
  const turno = txtTurno.value;
  const password1 = txtPassword1.value;
  const password2 = txtPassword2.value;

  //3.- Creo la variable donde se van a guardar los errores
  let errores="";

  //4.- Comprobamos si están vacíos el nombre, edad y turno
  if( nombre=="" || isNaN(edad) || turno==""){
    errores += "<p>Deben rellenarse todos los campos (no ha rellenado el campo de nombre, edad o turno).</p>";
  }

  //5.- También se comprobará que si el nombre ocupa más de 20 caracteres se mostrará un mensaje de error en la división errores.
  if(nombre.length>20){
    errores += "<p>El nombre no puede ocupar más de 20 caracteres.</p>";
  }

  //6.- Si la edad no está entre 18 y 67, se mostrará un mensaje de error en la división errores.
  if(edad <18 || edad >67){
    errores += "<p>La edad debe estar comprendida entre 18 y 67 años.</p>";
  }

  //7.- Si el turno no es "Mañana" o "Tarde" se mostrará un mensaje de error en la división errores.
  if(turno!="Mañana" && turno!="Tarde"){
    errores += "<p>Los turnos disponibles son Mañana y Tarde. Vigile las mayúsculas.</p>";
  }

  //8.- La contraseña escrita en los textboxes de contraseña tendrán que ser iguales, además tendrá que tener al menos 6 caracteres. Si no son iguales o no tiene al menos seis caracteres, se mostrará un mensaje de error en la división errores.
  if(password1.length<6 || password1 != password2){
    errores += "<p>Las contraseñas deben coincidir y tener al menos 6 caracteres.</p>";
  }
  
  //9.- Si se ha producido algún error, la cadena de caracteres errores no estará vacía
  //Recuperamos la división errores y mostramos los errores allí
  const divErrores = document.querySelector("#errores");
  if(errores !=""){
    divErrores.innerHTML = errores;
  }
  else{
    divErrores.innerHTML="";
  }

}


//////////////////////////////
// MAIN
//////////////////////////////

//1.- Recuperamos el botón y le asignamos una funcionalidad básica
const btnValidar = document.querySelector("#btnValidar");

btnValidar.addEventListener("click", validar );

