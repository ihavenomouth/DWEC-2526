"use strict";


/////////////////////////////
// MAIN
/////////////////////////////

let arrProvincias = ["Álava","Albacete","Alicante","Almería","Ávila","Badajoz","Baleares",
"Barcelona","Burgos","Cáceres","Cádiz","Castellón","Ciudad Real","Córdoba","Coruña","Cuenca",
"Girona","Granada","Guadalajara","Guipuzcoa","Huelva","Huesca","Jaén","León","Lleida",
"Rioja","Lugo","Madrid","Málaga", "Murcia","Navarra","Orense","Asturias","Palencia","Las Palmas",
"Pontevedra","Salamanca","Tenerife","Cantabria","Segovia","Sevilla","Soria","Tarragona","Teruel",
"Toledo","Valencia","Valladolid","Vizcaya","Zamora","Zaragoza","Ceuta","Melilla"];


const provincia = document.querySelector("#provincia");
document.querySelector("#txtCP").addEventListener("input", e=>{
  let valor = e.target.value;
  if( valor.length !=5 ){
    provincia.innerHTML = "";
    return;
  }

  // Recuperamos la provincia
  const cp = Number( valor.slice(0,2) );
  if(cp <0 || cp>52){
    provincia.innerHTML = "CP inválido.";
    return;
  }
  provincia.innerHTML = `Provincia: ${ arrProvincias[cp - 1 ] }`;
});