"use strict";



const URL_BASE ="http://localhost:3000";


///////////////////////////////////
// EJERCICIO API GRITONA
////////////////////////////////////

document.querySelector("#btnAPIGritona").addEventListener("click", async e=>{
  const txtGritar = document.querySelector("#txtGritar");
  const texto = txtGritar.value.trim();
  if(!texto) return;

  const divGritona = document.querySelector("#divGritona");
  divGritona.ariaBusy=true;

  try{

    const url = new URL(URL_BASE+"/api/gritona");
    url.searchParams.append("texto",texto);


    const response = await fetch(url.href);
    if(!response.ok){
      throw new Error("La API GRITONA no está disponible");
    }

    const textoRespuesta = await response.text();

    const p = document.createElement("p");
    p.innerText = textoRespuesta;
    divGritona.replaceChildren(p);
  }
  catch(error){
    alert(error);
  }
  finally{
    divGritona.ariaBusy="";
  }
});


/////////////////////////////
// CUARTO EJERCICIO: TODOS LOS ALUMNOS
///////////////////////////////

document.querySelector("#btnTodosLosAlumnos").addEventListener("click", async e=>{
  try{
    const url = new URL(URL_BASE+"/api/alumno");
    const response = await fetch( url.href ) ;
    
    if(!response.ok)
      throw new Error("No se pudieron recuperar los alumnos");
    
    const arrAlumnos = await response.json();
    
    console.log( arrAlumnos );
  }
  catch(error){
    alert(error);
  }
});


// http://localhost:3000/api/alumno


/////////////////////////////
// QUINTO EJERCICIO: ALTA DE ALUMNO
///////////////////////////////

const altaAlumno = async e =>{
  e.preventDefault();

  const frm = e.target;

  //recuperamos todos los datos del formulario
  const formdata = new FormData(frm);
  const alumnoACrear = Object.fromEntries( formdata.entries() );

  try{
    const response = await fetch(URL_BASE+"/api/alumno",{
      method:"POST",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify( alumnoACrear )
    });

    if(!response.ok)
      throw new Error("No se pudo crear un alumno");

    const respuesta = await response.text();
    alert(respuesta);
  }
  catch(error){
    alert(error);
  }
  // console.log(formdata);
  //validaciones
}


document.querySelector("#btnPantallaAltaAlumnos").addEventListener("click", async e=>{
  try{
    const url = new URL(URL_BASE+"/altaAlumno");
    const response = await fetch( url.href ) ;
    
    if(!response.ok)
      throw new Error("No se pudo recuperar la pantalla de alta de alumno");
    
    const pantallaAlumnos = await response.text();
    const main = document.querySelector("main");
    main.innerHTML = pantallaAlumnos;
    
    const frmRegistroAlumno = document.querySelector("#frmRegistroAlumno");
    frmRegistroAlumno.addEventListener("submit", altaAlumno);  
  }
  catch(error){
    alert(error);
  }
});