"use strict";


/**
 * Muestra la información que recibe en un alert
 * @param {string} info 
 */
function mostrarAlerta(info){
  alert(info);
}


/**
 * Muestra la información en la consola
 * @param {string} info 
 */
function cl(info){
  console.log(info);
}


/**
 * Muestra la información en uncuadro de diálogo
 * @param {string} info 
 */
function mostrarDialog(info){
  const dialog = document.createElement("dialog");
  const r = "El resultado es "+ info;
  dialog.append(r);
  document.body.append( dialog );
  dialog.showModal();
}


/**
 * Muestra la información en un párrafo dentro de la división que recibe como parámetro
 * @param {string} info 
 * @param {HTMLDivElement} div 
 */
function imprimirTexto(info, div){
  const r = "El resultado es "+ info;
  divRes.innerHTML=`<p>${r}</p>`;
}

/**
 * Muestra la información como una tabla dentro de la división que recibe como parámetro
 * @param {string} info 
 * @param {HTMLDivElement} div 
 */
function imprimirTabla(info, div){
  div.innerHTML=`<table>
  </tr>
    <th>Resultado</th>
  </tr>
  </tr>
    <td>${info}</td>
  </tr>
</table>`;
}





/**
 * Suma dos números y llama a una función de callback para mostrar el resultado
 * @param {number} a 
 * @param {number} b 
 * @param {Function} cb 
 * @param {HTMLDivElement} div 
 */
function sumar(a,b, cb, div){
  // La función sumar se encarga de manejar los datos y procesarlos
  const res = a + b;

  // La función de callback es la responsable de mostrar los datos,
  // de esta manera separamos las responsabilidades y hacemos el tratamiento
  // de los datos independiente de su exhibición
  cb(res, div);
}

//////////////
// MAIN
//////////////


let divRes = document.querySelector("#resultado");


document.querySelector("#btnAlert").addEventListener("click", e=>{
  sumar(45,78, mostrarAlerta);
});

document.querySelector("#btnConsola").addEventListener("click", e=>{
  sumar(45,78, cl);
});

document.querySelector("#btnP").addEventListener("click", e=>{
  sumar(45,78, imprimirTexto, divRes);
});

document.querySelector("#btnTabla").addEventListener("click", e=>{
  sumar(45,78, imprimirTabla, divRes);
});

document.querySelector("#btnDialog").addEventListener("click", e=>{
  sumar(45,78, mostrarDialog);
});


divRes.addEventListener("click", ()=>{
  divRes.textContent = "";
});