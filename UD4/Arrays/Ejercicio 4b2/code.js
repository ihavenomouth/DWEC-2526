"use strict";



/**
 * Comprueba si dos arrays son iguales
 * @param {Array} a 
 * @param {Array} b 
 * @returns Boolean
 */
const comparaArrays=(a,b)=>{
  //Si no tienen la misma longitud
  if(a.length!=b.length)
    return false;
  
  // Si tienen la misma longitud hay que recorrer el array
  
}


/// PRUEBAS
console.log( "Esperado: true. " +comparaArrays([1,2,3], [1,2,3])  ); 
console.log( "Esperado: false. " +comparaArrays([1,2,3], [1,2,3,4])  ); 
console.log( "Esperado: false. " +comparaArrays([1,2,3], [])  ); 