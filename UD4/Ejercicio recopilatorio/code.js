"use strict";

////////////////////////////
// FUNCTIONES
//////////////////////////


/**
 * Crea una tarea, la añade al localStorage y la muestra en pantalla
 */
const crearTarea = () => {
  //1.- Recuperamos el texto de la tarea que el usuario quiera crear
  const txtTarea = document.querySelector("#txtTarea");
  const textoTarea = txtTarea.value.trim();

  //2.- Comprobamos que el cuadro de texto tenga algo escrito
  //si el usuario no ha escrito nada, salimos de la función
   if( !textoTarea ){
      return;
   }

  //si llegamos aquí es que hay un texto en la tarea
  
  //3.- Lo añadimos al array de tareas
  arrTareas.push(textoTarea);

  //3.- Guardamos el array de tareas en el localStorage
  localStorage.tareas = JSON.stringify( arrTareas );

  //4.- Mostramos la lista de tareas en la división
  const divTareasPorHacer = document.querySelector("#divTareasPorHacer");
  mostrarTareas(arrTareas, divTareasPorHacer);
}




/**
 * Muestra una lista de tareas en una división
 * @param {Array} arr Array con la lista de tareas
 * @param {HTMLDivElement} div División en la que se mostrará la lista de tareas
 */
const mostrarTareas = (arr, div)=>{
  let sol = "<ul>";
  
  for(let tarea of arr){
    sol += `<li>${tarea}</li>`;
  }
  
  sol+="</ul>";
  
  div.innerHTML = sol;
}




////////////////////////////
// MAIN
//////////////////////////
/// localStorage.tareas = ["bajar la basura", "Comprar el pan"]
/// localStorage.tareasCompletadas = ["Sacar a la perra"]

//1.- Recuperamos el botón y le añadimos funcionalidad
const btnCrearTarea = document.querySelector("#btnCrearTarea");
btnCrearTarea.addEventListener("click", crearTarea);

//2.- Comprobamos si ya existen tareas almacenadas en el localStorage
let arrTareas; // el array con las tareas a realizar

if(localStorage.tareas){
  arrTareas = JSON.parse( localStorage.tareas );
  
  const divTareasPorHacer = document.querySelector("#divTareasPorHacer");
  mostrarTareas(arrTareas, divTareasPorHacer);
  
}
else{
  arrTareas=[];
}

//2.- Comprobamos si ya existen tareas completadas en el localStorage
let arrTareasCompletadas; // el array con las tareas completadas
if(localStorage.tareasCompletadas){
  arrTareasCompletadas = JSON.parse( localStorage.tareasCompletadas );
  
  const divTareasCompletadas = document.querySelector("#divTareasCompletadas");
  mostrarTareas(arrTareasCompletadas, divTareasCompletadas);
  
}
else{
  arrTareasCompletadas=[];
}