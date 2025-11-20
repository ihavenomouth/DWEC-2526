"use strict";

const crearTabla = (datos) =>{
  const tabla = document.querySelector("#tabla");

`<table>
 <caption></caption>
 <thead>
  <tr>
    <th></th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th></th>
    </tr>
  </tfoot>
</table>`
}

const gestionarDatos = (datosEnTexto) =>{
  const datos = JSON.parse(datosEnTexto);
  console.log( datos );
  crearTabla(datos);
}




//////////////////////
// MAIN
//////////////////////



const txtFile = document.querySelector("#txtFile");



txtFile.addEventListener("change", async () => {
  const [file] = txtFile.files;

  if (file) {
    gestionarDatos( await file.text() );
  }
});