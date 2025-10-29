"use strict";

/* <p>Los objetos de tipo Ingrediente tendrán un nombre y una cantidad en gramos además de un método <code>toHTMLRow()</code> que devuelva una fila de una tabla HTML con todos los atributos.</p> */

function Ingrediente(nombre, cantidad){
  this.nombre = nombre;
  this.cantidad = cantidad;
}

Ingrediente.prototype.toHTMLRow=function(){
  return `<tr>
  <td>${this.nombre}</td>
  <td>${this.cantidad}</td>
  </tr>`;
}



function Crema(nombre, precio, marca){
  this.nombre = nombre;
  this.precio = precio;
  this.marca = marca;
  this.ingredientes = [];
}

Crema.prototype.addIngrediente = function(nombre, cantidad){
  let ing = new Ingrediente(nombre, cantidad);
  this.ingredientes.push(ing);
}

Crema.prototype.removeIngrediente = function(i){
  this.ingredientes.splice(i,1);
}

Crema.prototype.toHTMLTable = function(){
  let tabla = `
<table style="width:80%;margin-inline:auto" >
 <caption>Crema ${this.nombre} - Marca ${this.marca}</caption>
 <thead>
  <tr>
    <th>Nombre</th>
    <th>Cantidad</th>
  </tr>
  </thead>
  <tbody>`;

  for(let ing of this.ingredientes){
    tabla+= ing.toHTMLRow();
  }
  
  tabla+=`</tbody>
  <tfoot>
    <tr>
      <th colspan="2">Precio: ${this.precio} €</th>
    </tr>
  </tfoot>
</table>`;
  
  return tabla;
}

/* <p>Crea un constructor de objetos de tipo <code>Crema</code> que tenga un nombre, precio y marca. Además contendrá un array de objetos de tipo <code>Ingrediente</code>, un método <code>addIngrediente(nombre, cantidad)</code> que permitirá añadir un objeto al array, un método <code>removeIngrediente(i)</code> que permite eliminar el iésimo ingrediente y una función <code>toHTMLTable()</code> que devuelva una tabla HTML con todos los ingredientes (se usará el método <code>toHTMLRow()</code> de los ingredientes).</p> */