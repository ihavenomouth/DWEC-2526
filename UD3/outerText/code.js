"use strict";


///////// Functions

function accion(){
  btnAccion.outerHTML='<img src="spinner.gif">';
  // btnAccion.innerHTML="<p><strong>Bienvenido</strong> a esta web.</p>"
  
}


function resolver(){
  let v = document.querySelector('#divResultado');
  // v.innerHTML = '<ul>';
  // v.innerHTML += '<li>Hola</li>';
  // v.innerHTML += '<li>Caracola</li>';
  // v.innerHTML += '</ul>';
  let sol = "<ul>";
  sol+=  "<li>Hola</li>";
  sol+=  "<li>Caracola</li>";
  sol+=  "</ul>";

  v.innerHTML = sol;
}


///////// MAin

const btnAccion = document.querySelector("#btnAccion");
btnAccion.addEventListener("click", accion);




let btnResolver = document.querySelector('#btnResolver');

btnResolver.addEventListener('click', resolver);