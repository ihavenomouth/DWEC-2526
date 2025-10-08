"use strict";


///////////////////////
// FUNCTIONS
/////////////////

function guardarNota(){
  //1.- Recuperamos el título y el texto de la nota que queremos guardar
  const titulo =  document.querySelector("#txtTitulo").value.trim();
  const texto = document.querySelector("#txtTexto").value;

  //Importante: Las notas en el localStorage van a estar almacenadas en 
  // un array de notas. Cada elemento del array será un nuevo array
  // con dos posiciones, la primera será el título y la segunda el texto.
  //Por ejemplo:
  // [ ["Nota1", "Texto1"]  ,  ["Nota2", "Texto2"] ]

  //2.- Recuperamos el array de notas stringificado almacenado en el localStorage
  let arrNotasStringuificado = localStorage.notas;
  let arrNotas = [];
  
  //3.- Si el array de notas existe recuperamos el array
  if(arrNotasStringuificado){
    arrNotas = JSON.parse( arrNotasStringuificado );
  }


  //3.- Buscamos en el array una nota que tenga como título el de 
  // nuestra nueva nota
  let encontrada = false;
  // Recorremos el array nota a nota mientras no encontremos la que buscamos
  for(let i=0; i<arrNotas.length && !encontrada ; i++){ 
    let nota = arrNotas[i];
    const tituloNotaGuardada = nota[0];
    if(tituloNotaGuardada == titulo){ //si es la que buscamos...
      encontrada = true;
      nota[1] = texto; //...actualizamos el texto
    }
  }

  //4.- Si hemos encontrado la nota, ya podemos volver a guardar el 
  // array de notas en el localStorage (porque la hemos actualizado 
  // en el bucle).
  //En caso contrario añadimos la nueva nota al final
  if(encontrada){
    localStorage.notas = JSON.stringify( arrNotas );
  }
  else{
     arrNotas.push( [titulo, texto] );
    localStorage.notas = JSON.stringify( arrNotas );
  }
  
}






function cargarNota(){
  //1.- Recuperamos el título y el texto de la nota que queremos cargar
  const titulo =  document.querySelector("#txtTitulo").value.trim();
//Importante: Las notas en el localStorage van a estar almacenadas en 
  // un array de notas. Cada elemento del array será un nuevo array
  // con dos posiciones, la primera será el título y la segunda el texto.
  //Por ejemplo:
  // [ ["Nota1", "Texto1"]  ,  ["Nota2", "Texto2"] ]

  //2.- Recuperamos el array de notas stringificado almacenado en el localStorage
  let arrNotasStringuificado = localStorage.notas;
  let arrNotas = [];

  //3.- Recuperamos el textArea
  const textArea = document.querySelector("#txtTexto");
  
  //4.- Si el array de notas existe recuperamos el array
  if(arrNotasStringuificado){
    arrNotas = JSON.parse( arrNotasStringuificado );
  }
  else{ //en caso contrario simplemente mostramos que no hay notas y salimos
    textArea.value = "Atención: todavía no hay ninguna nota guardada.";
    return;
  }

  //5.- Buscamos en el array una nota que tenga como título el de 
  // la nota que queremos cargar
  let encontrada = false;
  // Recorremos el array nota a nota mientras no encontremos la que buscamos
  for(let i=0; i<arrNotas.length && !encontrada ; i++){ 
    let nota = arrNotas[i];
    const tituloNotaGuardada = nota[0];
    if(tituloNotaGuardada == titulo){ //si es la que buscamos...
      encontrada = true;
      textArea.value = nota[1]; //...lo mostramos en el textarea
      return; //...y salimos de la función
    }
  }

  //4.- Si llegamos aquí es que la nota no existe
  textArea.value = "No se ha encontrado la nota";
}




///////////////////////
// MAIN
/////////////////


//1.- Recuperamos los botones y le añadimos la funcionalidad
// document.querySelector("#btnGuardar").addEventListener("click", guardarNota);


// document.querySelector("#btnGuardar").addEventListener("click", 
//   function(){ alert("Hola");}
// );


document.querySelector("#btnGuardar").addEventListener("click", ()=> alert("Hola"));

document.querySelector("#btnGuardar").addEventListener("click", e=>{

});



document.querySelector("#btnCargar").addEventListener("click", cargarNota);

