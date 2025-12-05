
const parrafo = document.querySelector("#parrafo");

document.querySelector("#btnAdd").addEventListener("click", e=>{
  const txtClase = document.querySelector("#txtClase");
  const clase = txtClase.value;
  parrafo.classList.add(clase);
});



document.querySelector("#btnRemove").addEventListener("click", e=>{
  const d = document.querySelector("#d");
  d.innerHTML="<p>Hola</p>";
  d.innerHTML+='<button id="btnCerrar">Cerrar</button>';

  document.querySelector("#btnCerrar").addEventListener("click", e=>{
    d.close();
  });

  d.showModal();
});