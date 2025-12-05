"use strict";




document.querySelector("#btnAccion").addEventListener("click", e=>{
  new Toast("Alta de producto correcta", Toast.INFO, 5000);
});

document.querySelector("#btnAccionError").addEventListener("click", e=>{
  new Toast("Error al conectar con el servidor", Toast.ERROR, 5000);
});