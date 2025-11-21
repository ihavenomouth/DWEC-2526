"use strict";


/////////////////////
// MAIN
/////////////////////

const votos = [];

document.querySelector("#btnVotar").addEventListener("click", e=>{
  //1.- Recuperamos el sabor
  const sabor = document.querySelector("#sltSabor").value;
  // console.log(sabor);

  //2.- Recuperamos la puntuación
  const puntos = document.querySelector("[name=radio]:checked").value;

  //3.- Creamos el objeto y lo añadimos al array de votos
  votos.push(  {"sabor":sabor, "puntos": Number(puntos)}  );
});



document.querySelector("#btnResultados").addEventListener("click", e=>{
  let puntosVainilla = 0;
  let puntosFresa = 0;
  let puntosChocolate = 0;

  // Recorremos los votos y los sumamos por separado
  for(let voto of votos){
    if( voto.sabor == "Vainilla")
      puntosVainilla += voto.puntos;
    else if( voto.sabor == "Fresa")
      puntosFresa += voto.puntos;
    else
      puntosChocolate += voto.puntos;
  }

  const dialogoResultado = document.querySelector("#dialogoResultado");
  dialogoResultado.innerHTML = `
  <h2>Resultados de los votos</h2>
  <p>Puntuación para el helado de vainilla: ${puntosVainilla}</p>
  <p>Puntuación para el helado de fresa: ${puntosFresa}</p>
  <p>Puntuación para el helado de chocolate: ${puntosChocolate}</p>
  <button id="btnCerrarDialogo">Aceptar</button>
  `;

  document.querySelector("#btnCerrarDialogo").addEventListener("click", e=>{
    e.target.closest("dialog").close();
  });

  dialogoResultado.showModal();
});