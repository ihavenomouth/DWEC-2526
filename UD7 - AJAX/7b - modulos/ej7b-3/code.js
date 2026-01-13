"use strict";


const btnAnotar = document.querySelector("#btnAnotar");

btnAnotar.addEventListener("mouseenter", e=>{
  import("https://unpkg.com/rough-notation?module");
});


btnAnotar.addEventListener("click", async e=>{
  try{
    const { annotate } = await import("https://unpkg.com/rough-notation?module");
    
    const annotation = annotate(btnAnotar, { type: 'box', color: 'red', padding:[15,15,15,15] });
    annotation.show();
  }
  catch(error){
    alert(error);
  }
});

