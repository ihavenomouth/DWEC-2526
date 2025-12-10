"use strict";


const anadirEventoDelegadoTabla = (table) =>{
  table.addEventListener("click", e=>{
    if(e.target.tagName != "SPAN")return;

    //HE hecho clck sobre un SPAN
    const tr = e.target.closest("tr");
    
    //marcar como hecha
    if(e.target.textContent == "❎"){
      tr.firstElementChild.classList.add("tareahecha");
      tr.children[1].firstElementChild.textContent = "✅";
      let id = Number(tr.dataset.id);
      arrTareas[id].estado = !arrTareas[id].estado;
      localStorage.tareas = JSON.stringify(arrTareas);
    }
    else if(e.target.textContent == "✅"){
      tr.firstElementChild.classList.remove("tareahecha");
      tr.children[1].firstElementChild.textContent = "❎";
      let id = Number(tr.dataset.id);
      arrTareas[id].estado = !arrTareas[id].estado;
      localStorage.tareas = JSON.stringify(arrTareas);
    }
    else if (e.target.textContent == "❌"){
      let id = Number(tr.dataset.id);
      arrTareas.splice(id,1);
      localStorage.tareas = JSON.stringify(arrTareas);
      crearTablaTareas();
    }
    // alert( tr.firstElementChild.textContent );

  });
}


const crearTarea = (textoTarea, terminada) =>{
  arrTareas.push( {"tarea": textoTarea, "estado": terminada});
  localStorage.tareas = JSON.stringify(arrTareas);
  crearTablaTareas();
}




/**
* Crea una tabla HTML a partir de los datos de un array de datos
*/
const crearTablaTareas = () =>{
  //Si la tabla ya está creada salimos o la eliminamos
  const tabla = document.querySelector("#tabla")
  if(tabla)
    tabla.remove();

  // La tabla
  const table = document.createElement("table");
  table.id = "tabla";

  //La cabecera
  const thead = document.createElement("thead");
  const trhead = document.createElement("tr");
  const th1 = document.createElement("th");
  const th2 = document.createElement("th");
  const th3 = document.createElement("th");

  th1.innerText ="Tarea";
  th2.innerText ="Estado";
  th3.innerText ="Acciones";

  table.append(thead);
  thead.append(trhead);
  trhead.append(th1, th2,th3);

  //El tbody
  const tbody = document.createElement("tbody");


  //recuperamos el array de tareas del localStorage
  // let arrDatos = [];
  // if(localStorage.tareas){
  //   arrDatos = JSON.parse( localStorage.tareas );
  // }

  //recorremos el array de datos añadimos una fila por cada elemento
  let indiceTarea = 0;
  for(let tarea of arrTareas){
    const tr = document.createElement("tr");
    tr.dataset.id = indiceTarea;
    indiceTarea++;
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    td1.textContent = tarea.tarea;

    if(tarea.estado){
      td1.classList.add("tareahecha");
    }

    const spanHecha = document.createElement("span");
    spanHecha.textContent = tarea.estado?"✅":"❎";
    spanHecha.style="cursor:pointer;";
    td2.append(spanHecha);

    const spanEditar = document.createElement("span");
    const spanEliminar = document.createElement("span");
    spanEditar.textContent = "✏️";
    spanEliminar.textContent = "❌";
    spanEditar.style="cursor:pointer;";
    spanEliminar.style="cursor:pointer;";
    td3.append(spanEditar, spanEliminar);
    td3.style="display:flex;gap:1rem;justify-content:space-evenly;"

    tr.append(td1,td2,td3);
    tbody.append(tr);
  }

  //Añadimos el tbody a la tabla
  table.append(tbody);

  // Añadimos el evento delegado a la tabla
  anadirEventoDelegadoTabla(table);

  // Añadimos la tabla al documento o la devolvemos
  document.body.append(table);
}









/////////////////
// MAIN
//////////////////

//Creamos el array de tareas
let arrTareas = localStorage.tareas;
if(!arrTareas)
  arrTareas = [];
else
  arrTareas = JSON.parse(arrTareas);




document.querySelector("#btnNavCrearTareas").addEventListener("click", e=>{
  const dialog = document.createElement("dialog");

  const h2 = document.createElement("h2");
  h2.textContent = "Crear tarea";
  
  const label = document.createElement("label");
  const input = document.createElement("input");
  const p = document.createElement("p");
  p.textContent = "Tarea:";
  label.append(p, input);

  const divBotones = document.createElement("div");
  divBotones.style="display:flex;gap: 1rem; justify-content:center";

  const buttonAceptar = document.createElement("button");
  const buttonCancelar = document.createElement("button");
  
  buttonAceptar.textContent = "Aceptar";
  buttonCancelar.textContent = "Cancelar";

  divBotones.append(buttonAceptar, buttonCancelar);

  dialog.append(h2, label, divBotones);

  document.body.append(dialog);
  dialog.showModal();

  dialog.addEventListener("close", e=>dialog.remove());

  buttonCancelar.addEventListener("click", e=>{
    dialog.close();
    dialog.remove();
  });

  buttonAceptar.addEventListener("click", e=>{
    const textoTarea = input.value;
    crearTarea(textoTarea, false);

    dialog.close();
    dialog.remove();
  });

});






document.querySelector("#btnNavVerTareas").addEventListener("click", e=>{
  crearTablaTareas();
});


