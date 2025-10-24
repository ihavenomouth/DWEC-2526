"use strict;"

///////////////////////////////////
// FUNCTION
///////////////////////////////////
const muestraHTMLEnDiv = msj =>{
  const divLista = document.querySelector("#divLista");
  divLista.innerHTML=msj;
}

/**
 * Esta función muestra es la lista de perros en el orden que fueron insertados
 */
function muestraPerrosInsercion(){
  // const lista = arrPerros.map(p=>`<li>${p.mostrarDatos()}</li>`).join("");
  let lista = "";
  for(let perro of arrPerros){
    lista += "<li>"+perro.mostrarDatos()+"</li>";
  }

  muestraHTMLEnDiv("<ul>" + lista + "</ul>");
}


///////////////////////////////////
// MAIN
///////////////////////////////////
const arrPerros = [];


// Datos de prueba
arrPerros.push(new Perro("Arya", 2, "Bichón maltés"));
arrPerros.push(new Perro("Sandokán", 7, "Pastor alemán"));
arrPerros.push(new Perro("Pacífico", 4, "Doberman"));
arrPerros.push(new Perro("Nana", 3, "Chihuahua"));
arrPerros.push(new Perro("Bea", 3, "Salchicha"));


//Se creará un objeto de tipo Perro y se añadirá a un array de perros
document.querySelector("#btnAnadir").addEventListener("click", e=>{

  const nombre = document.querySelector("#txtNombre").value.trim();
  const edad = document.querySelector("#txtEdad").valueAsNumber;
  const raza = document.querySelector("#txtRaza").value.trim();

  if(!nombre || !edad || !raza){
    muestraHTMLEnDiv("Debe introducir todos los datos");
    return;
  }

  const p = new Perro(nombre, edad, raza);
  arrPerros.push(p);
});



// Se mostrarán todos los perros con sus datos en una
// lista no ordenada (ul) en el orden en el que se
//  insertaron.
document.querySelector("#btnOrdInsercion").addEventListener("click", muestraPerrosInsercion);








// Se mostrarán todos los perros con sus datos en una 
// lista (ol) ordenados por edad.
document.querySelector("#btnOrdEdad").addEventListener("click", e=>{
  const arrOrdenadoPorEdad = arrPerros.toSorted( (p1,p2)=>p1.edad-p2.edad );
  
  const lista = arrOrdenadoPorEdad.map(p=>`<li>${p.mostrarDatos()}</li>`).join("");
  
  muestraHTMLEnDiv("<ol>" + lista + "</ol>");
});



// Se mostrarán todos los perros con sus datos en una lista (ul) ordenados por la raza alfabéticamente
document.querySelector("#btnOrdRaza").addEventListener("click", e=>{
    const lista = arrPerros.toSorted( (p1,p2)=>p1.raza.localeCompare(p2.raza,"es" ) )
    .map(p=>`<li>${p.mostrarDatos()}</li>`).join("");
  
    muestraHTMLEnDiv("<ul>" + lista + "</ul>");
});