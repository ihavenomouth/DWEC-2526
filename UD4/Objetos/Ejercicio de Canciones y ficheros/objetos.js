"use strict";

// Crea una clase Fichero cuyos atributos sean nombreFichero y tamaño y que tenga un método extensión() que devuelva la extensión del fichero y un método getDatos() que devuelva una cadena de caracteres con el nombre del fichero y el tamaño entre paréntesis.

class Fichero{
  constructor(nombreFichero,tamaño){
    this.nombreFichero = nombreFichero;
    this.tamaño = tamaño;
  }

  extensión(){
    let pos = this.nombreFichero.lastIndexOf(".");
    if(pos==-1)
      return "";

    return this.nombreFichero.slice(pos +1 );
  }

  getDatos(){
    return `Fichero: ${this.nombreFichero} (${this.tamaño} MB)`;
  }
}



// Crea una clase Canción que herede de fichero cuyos atributoas serán nombreCanción y duración y tendrá un método getDatos() que devolverá en una cadena de caracteres el nombre de la canción, la duración y el tamaño del fichero.
class Canción extends Fichero{
  constructor(nombreFichero, tamaño, nombreCanción, duración){
    super(nombreFichero, tamaño);
    this.nombreCanción = nombreCanción;
    this.duración = duración;
  }

  getDatos(){
    return `Canción: ${this.nombreCanción} (${this.duración}seg. ${this.tamaño} MB)`;
  }
}
