"use strict";


function loadXMLDoc(filename, callback) {
  let xhttp; // Definimos el objeto XMLHTTPRequest
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
  }
  else { // código de IE5 and IE6
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function (){ // Definimos el listener
    if (xhttp.readyState === XMLHttpRequest.DONE) {
      if (xhttp.status === 200) {
        callback(xhttp.responseXML);
        // callback(xhttp.responseText); // si el fichero es de texto
      } else {
        console.log("Hubo un error con la petición.");
      }
    }	
  };

  xhttp.open("GET", filename, true); //true = asíncrona, //false = síncrona
  xhttp.send();
}



const tratarXML = (XML) =>{

  if(divComidas.firstElementChild)
    divComidas.firstElementChild.textContent = "Carta de meriendas";

  // console.log(XML);
  XML.querySelectorAll( "food" ).forEach( 
  food=>{
    // Recuperamos los datos
    const nombre = food.firstElementChild;
    const precio = food.children[1];
    const descripcion = food.children[2];
    const calorias = food.children[3];

    // const [nombre,precio,descripcion, calorias] = food.children;

    // Creamos la card
    const cardComida = document.createElement("div");
    
    const h2 = document.createElement("h2");
    h2.textContent = nombre.textContent;
    h2.style.textAlign="center";
    h2.style.color = "orange";
    
    const pPrecioYCalorias = document.createElement("p");
    const spanCalorias = document.createElement("span");
    spanCalorias.textContent = " ("+calorias.textContent +" kcal.)";
    pPrecioYCalorias.append("Precio: ", precio.textContent, spanCalorias);
    spanCalorias.style.color = "gray";

    const pDesc = document.createElement("p");
    pDesc.textContent = descripcion.textContent;
    pDesc.style = "background-color:#ffffff11;border-radius:5px;padding:1rem;";


    cardComida.append(h2, pPrecioYCalorias, pDesc);
    cardComida.style="border: 1px solid gray; border-radius:5px;padding:1rem;"

    // Añadimos la card a la división
    divComidas.append(cardComida);
  });

}




const espera = tiempo =>{
  const tinicial = new Date();
  const tfinal = tinicial.getTime() + tiempo;

  for(; (new Date).getTime() < tfinal ;){
  }
}


////////////////
// MAIN
////////////////

const divComidas = document.querySelector("#comidas");

document.querySelector("#btnCarta").addEventListener("click", e=>{

  divComidas.replaceChildren(); // borramos el contenido anterior

  loadXMLDoc("simple.xml", tratarXML); //petición de lectura
  
  const h2 = document.createElement("h2");
  h2.textContent = "Carta de meriendas\nCargando...";
  h2.style="text-align:center";
  divComidas.prepend(h2)

  // espera(3000);
});