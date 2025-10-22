"use strict";



/**
 * Comprueba si dos arrays son iguales
 * @param {Array} a 
 * @param {Array} b 
 * @returns Boolean
 */
const comparaArrays=(a,b)=>{

  // Versión cómoda y correcta:
  // return JSON.stringify(a) == JSON.stringify(b);

  //Si no tienen la misma longitud
  if(a.length!=b.length)
    return false;

  // Si tienen la misma longitud hay que recorrer el array
  for(let i=0; i<a.length; i++){
    let elema = a[i];
    let elemb = b[i];

    // Han de coincidir valor y tipo
    if(elema !== elemb)
      return false;
  }

  return true;
}


/// PRUEBAS
console.log( "1 Esperado:true. Obtenido:" +comparaArrays([1,2,3], [1,2,3])  ); 
console.log( "2 Esperado:false. Obtenido:" +comparaArrays([1,2,3], [1,2,3,4])  ); 
console.log( "3 Esperado:false. Obtenido:" +comparaArrays([1,2,3], [])  ); 
console.log( "4 Esperado:false. Obtenido:" +comparaArrays([1,2,3], [1,2,"tres"])  ); 
console.log( "5 Esperado:false. Obtenido:" +comparaArrays([1,2,3], [1,"2",3])  ); 
console.log( "6 Esperado:true. Obtenido:" +comparaArrays(["uno","dos","tres"], ["uno","dos","tres"])  ); 
console.log( "7 Esperado:true. Obtenido:" +comparaArrays([1,true], [1,true])  ); 
console.log( "8 Esperado:false. Obtenido:" +comparaArrays([1,true], [true,1])  ); 
console.log( "9 Esperado:true. Obtenido:" +comparaArrays([], [])  ); 
console.log( "10 Esperado:false. Obtenido:" +comparaArrays([false], [0])  ); 
console.log( "11 Esperado:false. Obtenido:" +comparaArrays([false], [""])  );

// Se comparan las referencias de los arrays anidados y no son iguales :)
console.log( "12 Esperado:true. Obtenido:" +comparaArrays([[]], [[]])  );
console.log( "13 Esperado:true. Obtenido:" +comparaArrays([5,[1]], [5,[1]])  );
