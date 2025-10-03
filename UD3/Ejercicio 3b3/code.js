"use strict";



//////////////////////////
// FUNCTION
///////////////////


/**
 * Añade un nuevo fichaje al array de fichajes del localStorage. Cada fichaje se va a guardar
 * como el timeStamp del momento en el que se pulsó el botón
 */
function fichar(){
  //1.- Si ya hay fichajes guardados en el localStorage lo recuperamos, 
  //en caso contrario habrá que crear el array que los contendrá
  let arrFichajes;
  
  if( localStorage.fichajes ){
    arrFichajes = JSON.parse( localStorage.fichajes );
  }
  else{
    arrFichajes = [];
  }

  //2.- Hay que crear un nuevo fichaje con la fecha y hora actual
  let nuevoFichaje = Date.now();

  //3.- Añadimos el nuevo fichaje al array de fichajes
  arrFichajes.push(nuevoFichaje);

  //4.- Almacenamos de nuevo el array de fichajes en el localStorage
  localStorage.fichajes = JSON.stringify( arrFichajes );
}


/**
 * Muestra los fichajes en forma de lista en una división del HTML
 */
function mostrar(){
  //1.- Recuperamos la división donde vamos a mostrar los fichajes
  const divFichajes = document.querySelector("#divFichajes");

  //2.- Si no hay fichajes almacenados en el localStorage, se 
  // imprime un mensaje indicándolo y terminamos
  if( !localStorage.fichajes ){
    divFichajes.innerHTML = "<p><strong>Atención</strong>: Todavía no se ha guardado ningún fichaje.</p>";
    return;
  }

  //2.- Recuperamos del localStorage el array de fichajes
  const arrFichajes = JSON.parse( localStorage.fichajes );

  let sol = "<ul>";

  //3.- Recorremos el array de fichajes
  for (let i = 0; i < arrFichajes.length; i++) {
    //3.1- Convertimos cada timestamp almacenado en un objeto de tipo fecha
    const fichaje = new Date( arrFichajes[i] );
    //3.2- Mostramos cada objeto de tipo fecha en un <li> y lo añadimos al <ul>
    sol += `<li>${ fichaje.toLocaleString() }</li>`;
  }

  sol += "</ul>";

  //4.- Mostramos la lista en la división
  divFichajes.innerHTML = "<h3>Fichajes</h3>" + sol;


}



/**
 * Elimina todos los fichajes del localStorage
 */
function resetear(){
  // Eliminamos el array de fichajes...
  localStorage.removeItem("fichajes");
  // ...O directamente eliminamos todo lo que haya en el localStorage
  //localStorage.clear();
}



//////////////////////////
// MAIN
//////////////////

document.querySelector("#btnFichar").addEventListener("click", fichar);
document.querySelector("#btnMostrar").addEventListener("click", mostrar);
document.querySelector("#btnResetear").addEventListener("click", resetear);