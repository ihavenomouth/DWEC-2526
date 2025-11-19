"use strict";

//////////////
// Functions
//////////////



///////////////
// Main
///////////////

function clickTodos(ev) { 
  alert("¡Click!")
}


function clickDiv(ev) {
  console.log(`DIV - Current target: ${ev.currentTarget.tagName} - Target: ${ev.target.tagName}` ) 
  // alert("¡Click div!")
}

function clickP(ev) { 
  console.log(`P - Current target: ${ev.currentTarget.tagName} - Target: ${ev.target.tagName}` ) 

  // alert("¡Click p!")
  // ev.stopPropagation();
}
function clickA(ev) { 
  // alert("¡Click a!")
  console.log(`A - Current target: ${ev.currentTarget.tagName} - Target: ${ev.target.tagName}` ) 

}

document.getElementById("idEnlace").addEventListener('click', clickA, false);
document.getElementById("idParrafo").addEventListener('click', clickP, false);
document.getElementById("idDiv").addEventListener('click', clickDiv, false);
