"use strict";

document.querySelector("#btnMolesto").addEventListener("click", e=>{
  alert("Estoy aquí para molestar");
});


document.querySelector("#btnNuevaSeccion").addEventListener("click", e=>{
  const main = document.querySelector("main");
  main.innerHTML +=`
  <section>
        <h2>Nueva sección</h2>
        <p>Nueva sección incluida manualmente al pulsar el botón del header.</p>
        <p>Provoca una regeneración de todo el contenido del &lt;main&gt; (es decir, se
        elimina su contenido y se vuelve a recrear), por lo que los elementos que había
        se sustituyen por unos nuevos que no tienen los eventListeners que habíamos definido.</p>
        <button class="borrar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg> Borrar sección</button>
  </section>  
  `;
});

//////////////////////////////////
// Uso del closest
//////////////////////////////////

// // ¡Cuidado con el selector! Hay un botón en una sección que no queremos
// // que pueda borrarla
// // const botonesDeBorrar = document.querySelectorAll("button");
// const botonesDeBorrar = document.querySelectorAll("button.borrar");

// //Si hacemos click en el icono, se eliminará el icono
// for(let botón of botonesDeBorrar){
//   botón.addEventListener("click", (e)=>{
//     e.target.style.display="none";
//     // e.target.closest("section")
//     //   .style.display = "none";
//   });
// }


//////////////////////////////////
// Mejor: función compartida
//////////////////////////////////
// const botonesDeBorrar = document.querySelectorAll("button.borrar");

// const eliminarSectionCompartida = (e)=>{
//   e.target.closest("section")
//     .style.display = "none";
// };

// for(let botón of botonesDeBorrar){
//   botón.addEventListener("click", eliminarSectionCompartida);
// }

// Pero recorremos todos los botones de la web asignándoles un eventListener, 
// además si añadimos nuevas secciones al nuevo botón de borrar habría que
// añadirle un eventListener manualmente.

// Pero como añadimos la secction usando el innerHTML del main, se tiene
// que recrear TODO su contenido, por lo que los listeners definidos dejan
// de estar establecidos (se añadieron en elementos que ya no están)


//////////////////////////////////
// Mucho mejor: evento delegado en el main
//////////////////////////////////
const eliminarSection = (e)=>{
  const boton = e.target.closest("button");
  if(!boton) return;

  if(boton.classList.contains("borrar")){
    e.target.closest("section")
    .style.display = "none";
  }
  
};

document.querySelector("main")
  .addEventListener("click", eliminarSection);

// Ni recorremos todos los botones, ni asignamos eventListeners
// a cada uno de ellos, y si añadimos nuevas secciones con
// botones, funcionarán sin problemas (no así el botón molesto)
