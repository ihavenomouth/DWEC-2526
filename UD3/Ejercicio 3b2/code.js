"use strict;"


///////////////////////
// FUNCTION
///////////////////
function cambiarTema(){
  //1.- Recuperamos el select y su valor
  const sltTema = document.querySelector("#sltTema");
  const tema = sltTema.value;

  //2.- Cambiamos el tema de la web y creamos la cookie
  if(tema == "azul"){
    document.body.style.backgroundColor="#223366";
    document.cookie = "tema=azul; SameSite=None;Secure";
  }
  else{
    document.body.style.backgroundColor="#663322";
    document.cookie = "tema=rojo; SameSite=None;Secure";
  }
}



function comprobarCookieDeTema(){
  //1.- Recuperamos la cookie
  const tema = document.cookie.split(";").filter(c=>c.startsWith("tema="))[0].split("=")[1];
  
  ///2.- Dependiendo del tema...
  if(tema=="azul"){
    document.body.style.backgroundColor="#223366";
  } 
  else if(tema=="rojo"){
    document.body.style.backgroundColor="#663322";
  }
  else{
    //no existe la cookie
  }
}


///////////////////////
// MAIN
///////////////////

//1.- Recuperamos el botón y le añadimos funcionalidad
const btnTema = document.querySelector("#btnTema");
btnTema.addEventListener("click", cambiarTema);

//2.- Si la cookie ya existe, recuperamos el valor y cambiamos el tema
comprobarCookieDeTema()