"use strict";


const gestionarFichero=(texto)=>{
  console.log(texto);
  const filas = texto.split("\n");

  let sol ="<ul>";
  for(let f of filas) {
    let datos = f.split(",");

    sol += `<li>ID: ${datos[0]} - Nombre: ${datos[1]} - Nota: ${datos[2]}</li>`
  }
  sol+="</ul>";
  output.innerHTML = sol;
}



const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector(".output");

fileInput.addEventListener("change", async () => {
  const [file] = fileInput.files;

  if (file) {
    gestionarFichero( await file.text() );
  }
});