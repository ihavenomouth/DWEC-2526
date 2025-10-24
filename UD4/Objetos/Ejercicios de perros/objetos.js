"use strict";
// Tendrás que crear un constructor de objetos de tipo Perro que devuelva un objeto de tipo Perro que incluya también un método llamado <code>mostrarDatos()</code> que muestre los datos del perro.</li>

function Perro(nombre, edad, raza){
  this.nombre = nombre;
  this.edad = edad;
  this.raza = raza;
}

Perro.prototype.mostrarDatos = function(){
  return `🐶 ${this.nombre} (${this.edad}) - ${this.raza}`;
}


