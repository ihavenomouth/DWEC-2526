"use strict";

function Conjunto(cjtoInicial = []){
  this.cjto = cjtoInicial;
}





Conjunto.prototype.añadir = function(n){
  if( typeof n != "number")
    throw new Error("Sólo se pueden añadir números");

  let indice = this.cjto.indexOf(n);
  if(indice==-1)
    this.cjto.push(n);
}







Conjunto.prototype.eliminar = function(n){
  let indice = this.cjto.indexOf(n);
  if(indice!=-1)
    this.cjto.splice(indice,1);
}







Conjunto.prototype.imprimir = function(){
  console.log(this.cjto.join(","));
}


let c1 = new Conjunto();
let c2 = new Conjunto([1,2,3]);
let c = new Conjunto();

c.añadir(1);
c.añadir(1);
c.añadir(1);
c.imprimir(); //1

c.añadir(2);
c.añadir(1);
c.añadir(3);
c.imprimir();//1,2,3

c.eliminar(2);
c.imprimir();//1,3

c.eliminar(5);
c.eliminar(1);
c.imprimir();//3

c2.añadir(345);
c2.añadir(5);
c2.imprimir();