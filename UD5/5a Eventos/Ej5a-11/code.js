"use strict";

const crearTabla = (datos) =>{
  
  let tabla = `<table>
  <thead>
  <tr style="cursor:pointer">
  <th>Nombre</th>
  <th>URL</th>
  <th>Seguidores</th>
  </tr>
  </thead>
  <tbody>
  `;
  
  for(let dato of datos.arrRedesSociales){
    tabla+=`<tr>
        <td>${dato.nombre}</td>
        <td><a href="${dato.url}">${dato.url}</a></td>
        <td style="text-align:right">${dato.seguidores}</td>
      </tr>`;
  }
  
  tabla+=`</tbody></table>`;
      
  divTabla.innerHTML = tabla;
}




const gestionarDatos = (datosEnTexto) =>{
  // console.log( datosEnTexto );
  datos = JSON.parse(datosEnTexto);
  // console.log( datos );
  crearTabla(datos);
  return datos;
}




//////////////////////
// MAIN
//////////////////////


let datos = [];


const txtFile = document.querySelector("#txtFile");

txtFile.addEventListener("change", async () => {
  const [file] = txtFile.files;
  
  if (file) {
    datos = gestionarDatos( await file.text() );
  }
});

const divTabla = document.querySelector("#tabla");



divTabla.addEventListener("click", e=>{
  if(!datos)return;

  if(e.target.tagName == "TH"){
  
    const tipoOrdenación = e.target.textContent;
    
    if(tipoOrdenación == "URL"){
      datos.arrRedesSociales.sort( (d1,d2)=>d1.url.localeCompare(d2.url, "es") );
    }
    else if(tipoOrdenación == "Nombre"){
      datos.arrRedesSociales.sort( (d1,d2)=>d1.nombre.localeCompare(d2.nombre, "es") );
    }
    else{
      datos.arrRedesSociales.sort( (d1,d2)=>d1.seguidores - d2.seguidores );
    }

    crearTabla(datos);
  }

});
