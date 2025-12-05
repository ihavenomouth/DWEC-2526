"use strict";

/* Muestra el menú contextual */
document.querySelector("#divTexto").addEventListener("contextmenu", e=>{
  // alert("a");
  e.preventDefault();
  const menu = document.querySelector(".menu");
  menu.classList.remove("oculto");
});




/* El botón de convertir en cursiva */
document.querySelector("#btnCursiva").addEventListener("click", e=>{
  // Seleccionamos el párrafo con el texto:
  const p = document.querySelector("#divTexto > p");

  //Le añadimos la etiqueta <em>
  // p.innerHTML = "<em>" + p.innerHTML + "</em>";
  p.classList.add("i");

  // Ocultamos el menú
  const menu = document.querySelector(".menu");
  menu.classList.add("oculto");
});



/* El botón de convertir en negrita */
document.querySelector("#btnNegrita").addEventListener("click", e=>{
  // Seleccionamos el párrafo con el texto:
  const p = document.querySelector("#divTexto > p");

  //Le añadimos la etiqueta <strong>
  // p.innerHTML = "<strong>" + p.innerHTML + "</strong>";
  p.classList.add("b")

  // Ocultamos el menú
  const menu = document.querySelector(".menu");
  menu.classList.add("oculto");
});


document.querySelector("#btnBorrarFormato").addEventListener("click", e=>{
  // Seleccionamos el párrafo con el texto:
  const p = document.querySelector("#divTexto > p");

  //Le añadimos la etiqueta <strong>
  // p.innerHTML = "<strong>" + p.innerHTML + "</strong>";
  p.classList.remove("b", "i")

  // Ocultamos el menú
  const menu = document.querySelector(".menu");
  menu.classList.add("oculto");
});


/* Ocultamos el menú */
document.body.addEventListener("click",e=>{
    const menu = document.querySelector(".menu");
  menu.classList.add("oculto");
})