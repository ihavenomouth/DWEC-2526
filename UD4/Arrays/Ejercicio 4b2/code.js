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
console.log( "Esperado:true. Obtenido:" +comparaArrays([1,2,3], [1,2,3])  ); 
console.log( "Esperado:false. Obtenido:" +comparaArrays([1,2,3], [1,2,3,4])  ); 
console.log( "Esperado:false. Obtenido:" +comparaArrays([1,2,3], [])  ); 
console.log( "Esperado:false. Obtenido:" +comparaArrays([1,2,3], [1,2,"tres"])  ); 
console.log( "Esperado:false. Obtenido:" +comparaArrays([1,2,3], [1,"2",3])  ); 
console.log( "Esperado:true. Obtenido:" +comparaArrays(["uno","dos","tres"], ["uno","dos","tres"])  ); 
console.log( "Esperado:true. Obtenido:" +comparaArrays([1,true], [1,true])  ); 
console.log( "Esperado:false. Obtenido:" +comparaArrays([1,true], [true,1])  ); 
console.log( "Esperado:true. Obtenido:" +comparaArrays([], [])  ); 
console.log( "Esperado:false. Obtenido:" +comparaArrays([false], [0])  ); 
console.log( "Esperado:false. Obtenido:" +comparaArrays([false], [""])  );

// Se comparan las referencias y no son iguales :)
console.log( "Esperado:true. Obtenido:" +comparaArrays([[]], [[]])  );
