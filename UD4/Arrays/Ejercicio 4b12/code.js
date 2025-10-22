"use strict";


let arraygeneral = [
  ['Juan',   ['Granada',' Londres',' Roma']],
  ['Ana',    ['Bilbao', 'Sevilla', 'Roma']],
  ['Manuel', ['Granada', 'Paris', 'Londres', 'Roma']],
  ['Antonio',['Granada', 'Sevilla','Bilbao']],
  ['Elena',  ['Granada', 'Sevilla']],
  ['Jorge',  ['Sevilla']]
];


//1.- Recuperamos el UL en el que mostraremos la lista de ciudades
const ulCiudades = document.querySelector("#ulCiudades");

//2.- Recuperamos el select y lo llenamos con las personas
const sltPersonas = document.querySelector("#sltPersonas");
sltPersonas.innerHTML =arraygeneral.map(e=>`<option>${e[0]}</option>`).join("");


//2.- Cuando se cambie el valor del select, generamos una lista
document.querySelector("#sltPersonas").addEventListener("change", e=>{

  //1.- Recuperamos el nombre de la persona elegida
  const nombre = sltPersonas.value;

  //2.- Recuperamos el array de ciudades de esa persona
  //    Encontramos el array de "Juan" --> ["Juan", ['Granada',' Londres',' Roma']] 
  //    y devolvemos de ese array el segundo elemento (el array de ciudades)
  const arrCiudades = arraygeneral.find( a=>a[0]==nombre )[1];

  ulCiudades.innerHTML=arrCiudades.map(c=>`<li>${c}</li>`).join("");

});