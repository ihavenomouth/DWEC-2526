"use strict";


/////////////////////
// MAIN
/////////////////////
const divEditable = document.querySelector("#divEditable");
let fontSize = 1;

divEditable.addEventListener("keydown",e=>{
  // console.log(e);
  
  
  if(e.key == "b" && e.ctrlKey){
    e.preventDefault();
    e.target.classList.toggle("negrita");
  }
  else if(e.key == "i" && e.ctrlKey){
    e.preventDefault();
    e.target.classList.toggle("cursiva");
  }
  else if(e.key == "u" && e.ctrlKey){
    e.preventDefault();
    e.target.classList.toggle("subrayado");
  }
  else if(e.key == "+" && e.ctrlKey){
    e.preventDefault();
    fontSize += 0.2;
    e.target.style.fontSize = fontSize+"rem";
  }
  else if(e.key == "-" && e.ctrlKey){
    e.preventDefault();
    fontSize -= 0.2;
    e.target.style.fontSize = fontSize+"rem";
  }
});