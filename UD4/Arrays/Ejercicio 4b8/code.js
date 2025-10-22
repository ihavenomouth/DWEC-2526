"use strict";

///////////
// FUNCTIONS
////////////////
const informe= datos =>{
  const divResultado = document.querySelector("#resultado");
  divResultado.innerHTML="";

  let totalSaldoAcreedores=0;
  for(let cuenta of datos){
    const valorSaldo = cuenta[2];
    
    let saldo="";
    if(valorSaldo<0) 
      saldo="Deudor";
    else if(valorSaldo>0){
      saldo="Acreedor";
      totalSaldoAcreedores+=valorSaldo;
    }
    else 
      saldo="Nulo";

    divResultado.innerHTML+=`<p>Cuenta ${cuenta[0]} (${cuenta[1]}): ${valorSaldo} ${saldo}</p>`;
  }
  divResultado.innerHTML += "<p>Saldo acreedor total: "+totalSaldoAcreedores+"</p>";
}


///////////
// MAIN
////////////////
let datos=[
  [1, "Javier", 125], 
  [2, "Sara", -25], 
  [3, "Juan", 0],
  [4, "Ana", 200]
];

informe(datos);
