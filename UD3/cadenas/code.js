"use strict";


////////////////////////
// Ejercicio 3
/////////////////////////

let sum=0;

for(let i=0;i<navigator.userAgent.length;i++){
  
  const numero = Number(navigator.userAgent[i]); // O es un Number o es NaN
  
  if( !isNaN(numero) ){
    sum += numero;
    // console.log(numero, sum);
  }
}
console.log(`El resultado del ej. 4 es ${sum}`);


////////////////////////
// Ejercicio 5
/////////////////////////

function desenvolver(regalo){
  return regalo.split("\n")[1].slice(2,-2)
}



////////////////////////
// Ejercicio 5b
/////////////////////////

// "aro"
// "*******\n* aro *\n*******"


function envolver(regalo){
  let longitud = regalo.length+4;
  let sol = "*".repeat(longitud);
  sol += `\n* ${regalo} *\n`;
  sol += "*".repeat(longitud);
  return sol;
}


////////////////////////
// Ejercicio 6
/////////////////////////

function convertirMDtoHTML(listaMD){
  //1.- Convertimos la cadena de caracteres en MD a un array
  //    (habrá un elemento por cada fila)
  const arrayLista = listaMD.split("\n");

  let sol="<ul>"; // variable que contendrá la solución. Abrimos la lista.

  //2.- Recorremos el array y procesamos cada fila de MD
  for(let i=0; i<arrayLista.length; i++){
    let elemMD = arrayLista[i];        //cada elemento del array es "* Uno"
    elemMD = elemMD.slice(2).trim();   //quitamos el * y el espacio del principio y si hay alguno al final

    if(elemMD!="")
      sol+=`<li>${elemMD}</li>`;         //añadimos un <li> a la cadena solución
  }

  sol+="</ul>"; //cerramos la lista
  return sol;
}


let lista = "* Uno\n* Dos\n* Tres \n* Cuatro\n";
console.log( convertirMDtoHTML(lista) );




////////////////////////
// Ejercicio 7
/////////////////////////
/**
 * 
 * @param {String} pal 
 * @returns 
 */
function esPalindromo(pal){
  //lo pasamos a minúsculas y quitamos los espacios
  pal = pal.toLowerCase().replaceAll(" ","");

  //quitamos los acentos
  pal = pal.replaceAll("á","a")
           .replaceAll("é","e")
           .replaceAll("í","i")
           .replaceAll("ó","o")
           .replaceAll("ú","u")
           .replaceAll("ü","u");


  let alReves="";
  for(let i=pal.length-1; i>=0; i--){
    alReves+= pal[i];
  }

  return alReves == pal;
}

let p = "arriba la birra"
// let p = "Dábale arroz a la zorra el Abad"
console.log( esPalindromo(p) );

