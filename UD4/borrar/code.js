"use strict";

let fechaAsValue;
let fechaAsDate;

const btnAccion = document.querySelector("#btnAccion");
btnAccion.addEventListener("click", e=>{
  const txtFecha = document.querySelector("#txtFecha");
  fechaAsDate = txtFecha.valueAsDate;
  fechaAsValue = txtFecha.value;
});


