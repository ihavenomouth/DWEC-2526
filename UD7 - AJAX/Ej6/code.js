"use strict";



const crearDialog = (mensaje, tipo)=>{
  const dialog = document.createElement("dialog");
  
  const h2 = document.createElement("h2");
  if(tipo === DIALOGO_ERROR){
    h2.textContent = "Error";
    h2.style.color="#881111"
  }
  else
    h2.textContent = "Resultado";

  const p = document.createElement("p");
  p.innerText = mensaje;

  const button = document.createElement("button");
  button.textContent = "Cerrar";
  button.addEventListener("click", e=>{
    dialog.close();
  })

  dialog.append(h2, p, button);
  document.body.append(dialog);
  dialog.showModal();
}




const cargarUsuarios = async (e) =>{
  if(e.target.tagName != "BODY" && e.target.tagName != "HTML") return;
  try{

    const response = await fetch("https://jsonplaceholder.typicode.com/ussers");
    
    if(!response.ok)
      throw new Error("No se pudieron recuperar los usuarios");

    const json = await response.json();
    tratarJSONUsuarios(json);
  }
  catch(error){
    crearDialog(error, DIALOGO_ERROR);
  }
}



const tratarJSONUsuarios = (json) =>{
  //Si la tabla ya está creada salimos o la eliminamos
  const tabla = document.querySelector("#tabla")
  if(tabla) return; //tabla.remove();

  // La tabla
  const table = document.createElement("table");
  table.id = "tabla";

  //La cabecera
  const thead = document.createElement("thead");
  const trhead = document.createElement("tr");
  const th1 = document.createElement("th");
  const th2 = document.createElement("th");
  const th3 = document.createElement("th");
  const th4 = document.createElement("th");

  th1.innerText ="Nombre";
  th2.innerText ="E-mail";
  th3.innerText ="Web";
  th4.innerText ="Ciudad";

  table.append(thead);
  thead.append(trhead);
  trhead.append(th1, th2, th3, th4);

  //El tbody
  const tbody = document.createElement("tbody");

  //recorremos el array de datos añadimos una fila por cada elemento
  for(let usuario of json){ 
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    td1.innerText = usuario.name;
    td2.innerText = usuario.email;
    td3.innerText = usuario.website;
    td4.innerText = usuario.address.city;
    tr.append(td1,td2,td3,td4);
    tbody.append(tr);
  }

  //Añadimos el tbody a la tabla
  table.append(tbody);

  // Añadimos el evento delegado a la tabla
  // anadirEventoDelegadoTabla(table);

  // Añadimos la tabla al documento o la devolvemos
  document.body.append(table);
}



///////////////////////
//MAIN
//////////////////////
const DIALOGO_ERROR = 1;

// https://jsonplaceholder.typicode.com/users

document.addEventListener("click", cargarUsuarios);
/*
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
*/
