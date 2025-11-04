"use strict";

// Crea una clase Fichero cuyos atributos sean nombreFichero y tamaño y que tenga un método extensión() que devuelva la extensión del fichero y un método getDatos() que devuelva una cadena de caracteres con el nombre del fichero y el tamaño entre paréntesis.

function Fichero(nombreFichero,tamaño){
    this.nombreFichero = nombreFichero;
    this.tamaño = tamaño;
}

Fichero.prototype.extensión=function(){
  return this.nombreFichero.slice( this.nombreFichero.lastIndexOf(".")+1 );
}

Fichero.prototype.getDatos = function(){
  return `Fichero: ${this.nombreFichero} (${this.tamaño} MB)`;
}



// Crea una clase Canción que herede de fichero cuyos atributoas serán nombreCanción y duración y tendrá un método getDatos() que devolverá en una cadena de caracteres el nombre de la canción, la duración y el tamaño del fichero.
function Canción(nombreFichero, tamaño, nombreCanción, duración){
  Fichero.call(this, nombreFichero, tamaño);
  this.nombreCanción = nombreCanción;
  this.duración = duración;
}

Canción.prototype.getDatos = function(){
  return `Canción: ${this.nombreCanción} (${this.duración}seg. ${this.tamaño} MB)`;
}

//Falta la herencia
Object.setPrototypeOf(Canción.prototype, Fichero.prototype);
Canción.prototype.constructor = Canción;
