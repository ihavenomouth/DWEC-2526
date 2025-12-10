"use strict";


// Cada card mostrará únicamente la imagen y el resto de los datos se guardarán como atributos data-x, cuando se haga click sobre una de las imágenes se mostrará en un &lt;aside&gt; tanto la imagen como el resto de los datos en una lista. Todo se realizará mediante funciones de manipulación del DOM.

const crearCards = arrProductos =>{
  for(let producto of arrProductos){

    const div = document.createElement("div");
    const img = document.createElement("img");
    img.style="cursor:pointer";
    
    img.src = producto.imagen;
    img.dataset.producto = producto.producto;
    img.dataset.precio = producto.precio;
    img.dataset.tallas = producto.tallas;

    div.append(img);
    divCards.append(div);
  }
}


////////////////
// MAIN
///////////////////


const divCards = document.querySelector("#cards");
divCards.style="display:grid;grid-template-columns: 1fr 1fr 1fr; gap: 1rem";


const arrProductos = [
  {
  "producto" : "Semi-sheer shirt with pintucks",
  "precio" : "29,95",
  "tallas" : ["XS", "S", "M", "L"],
  "imagen" : "img1.jpg"
  },
  {
  "producto" : "Mini dress with lace trims",
  "precio" : "35,95",
  "tallas" : ["XL"],
  "imagen" : "img2.jpg"
  },
  {
  "producto" : "Diamond pattern mini dress",
  "precio" : "35,95",
  "tallas" : ["S", "M", "L"],
  "imagen" : "img3.jpg"
  },
  {
  "producto" : "Red shirt with laces",
  "precio" : "15,95",
  "tallas" : ["M", "L", "XL"],
  "imagen" : "img4.jpg"
  },
];

crearCards(arrProductos);

let productoEnAside = false;



divCards.addEventListener("click", e=>{
  // Si ya hay un producto en el aside, salimos
  if(productoEnAside)return;

  productoEnAside = true;

  if(e.target.tagName!="IMG")return;
  const img = e.target;
  
  const aside = document.createElement("aside");

  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const li4 = document.createElement("li");

  ul.append(li1,li2,li3,li4);

  li1.textContent = img.dataset.producto;
  li2.textContent = img.dataset.precio + " €";
  li3.textContent = img.dataset.tallas;
  li4.textContent = img.src;

  aside.append(img.parentElement, ul);
  aside.style="padding:1rem;position:fixed; top: 2rem; right: 2rem;box-shadow: 0px 0px 50px black;:backdrop-filter: red;";

  document.startViewTransition( ()=>{ 
    document.body.append(aside);
  });

  aside.addEventListener("click", e=>{
    divCards.append(img.parentElement);
    aside.remove();
    productoEnAside = false;
  });

})



let styles = `
  ::view-transition-group(root) {animation-duration: 0.75s;}
`

const styleSheet = document.createElement("style")
styleSheet.textContent = styles;
document.head.append(styleSheet);