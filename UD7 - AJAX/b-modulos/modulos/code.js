
// importación del módulo cuadrado.js
// import {cuadrado, AUTOR} from './cuadrado.js';
// import * as modCuadrado from './cuadrado.js';

const AUTOR = "PACO PÉREZ";

// import {cuadrado, AUTOR as AUTORMOD} from './cuadrado.js';
import t,{AUTOR as AUTORMOD} from './cuadrado.js';


document.querySelector("#btnAccion").addEventListener("click", e=>{
  // alert( modCuadrado.cuadrado(7) + " de parte de "+modCuadrado.AUTOR);
  // alert( cuadrado(7) + " de parte de "+ AUTOR);
  alert( t(7) );
});


