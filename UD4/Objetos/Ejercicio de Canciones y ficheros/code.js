"use strict";

const generarDatosPrueba = ()=>{
  const c = new Canción("asd.mp3", 3.5, "Yeah song!", 120);
  // console.log( c.getDatos() );
  
  const f = new Fichero("fichero.txt",0.7);
  // console.log( f.getDatos() );

  const c2 = new Canción("xyz.ogg", 4.2, "Yeah song 2!", 240);

  // console.log( c.getDatos() );
  arrFicheros.push(c,f,c2);
}



/**
 * 
 * @param {Fichero} fichero 
 */
// function muestraFichero(fichero){
//   console.log("Nombre: "+fichero.nombreFichero);
//   console.log("Tamaño: "+fichero.tamaño);
// }
function muestraFichero( {nombreFichero, tamaño } ){
  console.log("Nombre: "+ nombreFichero);
  console.log("Tamaño: "+ tamaño);
}




/////////////////////
// MAIN
////////////////////

let arrFicheros = [];

generarDatosPrueba();


muestraFichero( arrFicheros[0] );
muestraFichero( arrFicheros[1] );




document.querySelector("#btnAgregar").addEventListener("click", e=>{
  //1.- Reucperamos el checkbox marcado:
  const chkTipo = document.querySelector("[name=tipo]:checked");
  
  //2.- Si no se ha marcado ningún checkbox, salimos
  if(!chkTipo)
    return;

  //3.- Recuperamos los datos comunes
  const nombreFichero = document.querySelector("#txtNombreFichero").value.trim();
  const tamano = document.querySelector("#txtTamano").valueAsNumber;

  //4.- Comprobamos el tipo de objeto a crear
  const tipo = chkTipo.value;
  if(tipo === "fichero"){
    // Creamos el objeto de tipo Fichero y lo añadimos al array
    const f = new Fichero(nombreFichero,tamano);
    arrFicheros.push(f);
  }
  else{
    //Si es una canción recuperamos los datos que
    //faltan
    const nombreCancion = document.querySelector("#txtNombreCancion").value.trim();
    const duracion = document.querySelector("#txtDuracion").valueAsNumber;

    //Si faltan los datos no se puede crear la canción
    if(!nombreCancion || !duracion)
      return;
    
    // Creamos el objeto de tipo Canción y lo añadimos al array
    const c = new Canción(nombreFichero,tamano,nombreCancion,duracion);
    arrFicheros.push(c);
  }

});




// Cuando se pulse el botón de Mostrar se mostrará el contenido del array en una lista, llamando para cada objeto del array al método getDatos().

document.querySelector("#btnMostrar").addEventListener("click", e=>{
  //Si no hay nada que mostrar...
  if(arrFicheros.length==0)
    return;

  //Creamos la lista
  let lista = "<ul>";

  for(let f of arrFicheros){
    lista+="<li>"+f.getDatos()+"</li>";
  }
  
  lista+="</ul>";
  // Mostramos la lista
  const divResultado = document.querySelector("#divResultado");
  divResultado.innerHTML = lista;
});



