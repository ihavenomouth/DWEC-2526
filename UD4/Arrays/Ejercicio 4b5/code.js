"use strict";

///////////////////
// FUNCTIONS
////////////////////


/**
 * Procesa el array de marcas
 * @param {Array} arrMarcas 
 */
const procesaMarcas = arrMarcas =>{
  //1.- Añadimos un nuevo elemento en la posición 2 llamado "Seat".
  arrMarcas.splice(2,0,"Seat");

  //2.- Modificamos el tercer elemento para que sea "Mitsubishi".
  arrMarcas[2]="Mitsubishi";

  //3.- Filtramos los elementos del array de manera que sólo contenga
  //    las marcas de coche cuyo nombre contenga más de 4 letras.
  arrMarcas = arrMarcas.filter( m=>m.length > 4 );

  //4.- Detrás de cada elemento del array añade un nuevo elemento que indique el número de letras de la marca.
  arrMarcas = arrMarcas.map( m => [m, m.length] ).flat();

  //5.- Devuelve el array modificado.
  return arrMarcas;
}


///////////////////
// MAIN
//////////////////

//1.- Recuperamos la división donde se verá el resultado
const resultado = document.querySelector("#resultado");


//2.- Creamos un array con una serie de marcas de coches ("Mazda", "Peugeot", "Renault", "Nissan", "Kia")
let arrMarcas = ["Mazda", "Peugeot", "Renault", "Nissan", "Kia"];

//3.- Procesamos el array
arrMarcas = procesaMarcas(arrMarcas);

//4.- Lo mostramos en la pantalla
// resultado.innerHTML = "[ ";
// for(let elem of arrMarcas){
//   resultado.innerHTML += elem +", ";  
// }
// resultado.innerHTML = resultado.innerHTML.slice(0,-2);
// resultado.innerHTML += " ]";



// Recorrido equivalente
// resultado.innerHTML = "[ ";
// arrMarcas.forEach(elem=>{
//   resultado.innerHTML += elem +", ";  
// });
// resultado.innerHTML = resultado.innerHTML.slice(0,-2);
// resultado.innerHTML += " ]";









//Otro recorrido equivalente
resultado.innerHTML = `[  ${arrMarcas.join(",")} ]`;

/*
Nota: El array modificado debería ser este [ "Mazda", 5, "Peugeot", 7, "Mitsubishi", 10, "Nissan", 6]  
*/
