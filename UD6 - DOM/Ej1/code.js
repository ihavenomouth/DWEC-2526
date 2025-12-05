"use strict";

const divResultado = document.querySelector("#resultado");

divResultado.firstElementChild.textContent = "Lista de animales";

const listaUL = divResultado.firstElementChild.nextElementSibling;

listaUL.lastElementChild.textContent = "Lobo";

listaUL.lastElementChild
  .previousElementSibling
  .firstElementChild
  .textContent = "de agua";

// listaUL.children[2].firstElementChild.textContent = "de agua";

console.log( divResultado.lastElementChild.textContent );

const a = document.querySelector("#enlace");
a.href="http://wwww.google.es";



const parrafo = document.querySelector("#parrafo");
parrafo.dataset.iddeproducto = 23;
parrafo.dataset.otroIdDeProducto = 23;
