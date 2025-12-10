"use strcit";


const procesarListaAlumnos = tbody =>{

  const listaAlumnos = document.querySelector(".listaAlumnos");

  for(let li of listaAlumnos.children){
    const tr = document.createElement("tr");
    const tdNombre = document.createElement("td");
    const tdApellidos = document.createElement("td");
    tr.append(tdNombre, tdApellidos);
    tbody.append(tr);

    const [nombre, apellidos] = li.textContent.split(" ");
    // const arrDatos = li.textContent.split(" ");
    // const nombre = arrDatos[0];
    // const apellidos = arrDatos[1];

    tdNombre.textContent = nombre;
    tdApellidos.textContent = apellidos;

  }
}



const crearTablaAlumnos = () =>{

  const tablaAlumnos = document.querySelector("#tablaAlumnos");
  if(tablaAlumnos){
    // tablaAlumnos.remove();
    return tablaAlumnos;
  }

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  
  const trHead = document.createElement("tr");
  const th1 = document.createElement("th");
  const th2 = document.createElement("th");
  
  th1.textContent = "Nombre";
  th2.textContent = "Apellido";
  
  trHead.append(th1,th2);
  thead.append(trHead);
  
  table.append(thead, tbody);
  
  procesarListaAlumnos(tbody);

  table.id="tablaAlumnos";
  document.body.append(table);

  //Añadimos el eventListener que hace que al pulsar sobre una fila la clone al final
  //En vez de añadir el listener a la tabla, se lo añadimos al body, así nos
  //quitamos las filas que sean de la cabecera
  table.tBodies[0].addEventListener("click", clonarFilaTablaAlumnos);

  return table;
}





const clonarFilaTablaAlumnos = e =>{
  if(e.target.tagName != "TD") 
    return;
  const tr = e.target.closest("tr");

  const clon = tr.cloneNode(true);

  const tablaAlumnos = document.querySelector("#tablaAlumnos");
  tablaAlumnos.tBodies[0].append(clon);
}

//////////////////////
// MAIN
///////////////////////

document.querySelector("#btnCrearTabla").addEventListener("click", crearTablaAlumnos);







document.querySelector("#btnAddAlumno").addEventListener("click", e=>{
  const txtApellido = document.querySelector("#txtApellido");
  const txtNombre = document.querySelector("#txtNombre");

  const chkFinal = document.querySelector("#chkFinal");
  const insertarAlFinal = chkFinal.checked;

  const nombre = txtNombre.value;
  const apellido = txtApellido.value;

  // // // Creamos el li y lo añadimos al final de la lista
  // const li = document.createElement("li");
  // li.textContent = nombre+" "+apellido;

  // const listaAlumnos = document.querySelector(".listaAlumnos");
  // if(insertarAlFinal)
  //   listaAlumnos.append(li);
  // else
  //   listaAlumnos.prepend(li);

  //Creamos el tr y lo añadimos al final de la tabla
  const tr = document.createElement("tr");
  const tdNombre = document.createElement("td");
  const tdApellido = document.createElement("td");

  tdNombre.textContent = nombre;
  tdApellido.textContent = apellido;

  tr.append(tdNombre, tdApellido);

  // SI la tabla no existe, la creamos
  
  let tablaAlumnos = document.querySelector("#tablaAlumnos");
  if(!tablaAlumnos)
    tablaAlumnos = crearTablaAlumnos();

  if(insertarAlFinal)
    tablaAlumnos.tBodies[0].append(tr);
  else
    tablaAlumnos.tBodies[0].prepend(tr);

  // Lo creo aquí para que la tabla no tenga repetido el nuevo alumno al crearse
  // Creamos el li y lo añadimos al final de la lista
  const li = document.createElement("li");
  li.textContent = nombre+" "+apellido;

  const listaAlumnos = document.querySelector(".listaAlumnos");
  if(insertarAlFinal)
    listaAlumnos.append(li);
  else
    listaAlumnos.prepend(li);
});




//Al hacer click sobre un li de la lista se colocará el primero
document.querySelector(".listaAlumnos").addEventListener("click", e=>{
  if(e.target.tagName!="LI")
    return;

  const li = e.target;
  li.parentElement.prepend(li);
});