"use strict";

////////////////////////
// Ejercicio 3
/////////////////////////

let sum=0;

for(let i=0;i<navigator.userAgent.length;i++){
  
  const numero = Number(navigator.userAgent[i]);
  
  if( !isNaN(numero) ){
    sum += numero;
    console.log(numero, sum)
  }
}
console.log(`El resultado del ej. 4 es ${sum}`);

///////////////////////
// Ejercicio 4
////////////////////////

