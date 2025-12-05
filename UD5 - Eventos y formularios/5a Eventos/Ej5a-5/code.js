"use strict";


/////////////////////////////
// MAIN
/////////////////////////////

const emoji = document.querySelector("#emoji");

emoji.addEventListener("click", e=>{
  emoji.textContent = "🙁";
});

emoji.addEventListener("dblclick", e=>{
  emoji.textContent = "😒";
});

emoji.addEventListener("contextmenu", e=>{
  e.preventDefault();
  emoji.textContent = "😀";
});



// "😀🙁😒"