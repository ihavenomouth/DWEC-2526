"use strict";

const divResultado = document.querySelector("#divResultado");

document.querySelector("#btnAccion").addEventListener("click", e=>{
  const txtDato = document.querySelector("#txtDato");
  let dato = txtDato.value;

  const p = document.createElement("p");
  p.textContent = dato;
  

  const dialog = document.createElement("dialog");

  const h2 = document.createElement("h2");
  h2.textContent = "Saludo";

  const button = document.createElement("button");
  button.textContent = "Cerrar";
  button.addEventListener( "click", e=>{
    dialog.close();
    dialog.remove();
  });

  dialog.append(h2, p, button);

  document.body.append(dialog);
  dialog.showModal();
});