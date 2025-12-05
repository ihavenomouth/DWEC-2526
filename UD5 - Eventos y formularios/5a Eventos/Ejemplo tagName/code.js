"use strcit";


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// Queremos que cuando se pulse el párrafo con el título, se oculten todas las fotos, que cuando se pulse una foto nos la muestre el doble de grande y que si se pulsa sobre la división se cambie el color de fondo a uno aleatorio.

document.querySelector(".imagenes").addEventListener("click", e=>{
  if(e.target.tagName=="DIV"){
    let r = getRandomIntInclusive(0,255);
    let g = getRandomIntInclusive(0,255);
    let b = getRandomIntInclusive(0,255);
    e.target.style =`background-color: rgb(${r},${g},${b});`;
  }
  else if(e.target.tagName=="P"){
    document.querySelectorAll(".imagenes img").forEach(img=>img.style.display="none");
  }
  else if(e.target.tagName=="IMG"){
    e.target.classList.toggle("grande")
  }
  else{}
});