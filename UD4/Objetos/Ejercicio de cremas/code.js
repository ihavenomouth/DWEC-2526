"use strict";


// Datos de prueba
const c1 = new Crema("Hidratante", 34.99, "Nivea");
c1.addIngrediente( "Agua", "20%" );
c1.addIngrediente( "Ácido hialurónico", "3%" );
c1.addIngrediente( "Aroma", "7%" );
c1.addIngrediente( "Gato", "8%" );


const c2 = new Crema("De noche", 150, "Bella Aurora");
c2.addIngrediente( "Agua", "20%" );
c2.addIngrediente( "Aroma", "7%" );
c2.addIngrediente( "Ácido hialurónico", "2%" );
c2.addIngrediente( "Beta carotenos", "3%" );
c2.addIngrediente( "Esencia de vainilla", "8%" );



const divSol = document.querySelector("#divSol");
divSol.innerHTML = c1.toHTMLTable();
divSol.innerHTML += c2.toHTMLTable();