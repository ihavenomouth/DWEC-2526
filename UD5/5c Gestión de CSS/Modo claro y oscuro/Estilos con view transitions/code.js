"use strict";

const updateTheme = selectedTheme =>{
  if(selectedTheme === "sistema"){
    // document.documentElement.style.removeProperty("--theme");
    document.documentElement.classList.remove("claro","oscuro");
  }
  else if(selectedTheme === "oscuro"){
    document.documentElement.classList.add("oscuro");
    document.documentElement.classList.remove("claro");
  }
  else{
    // document.documentElement.style.setProperty("--theme",selectedTheme);
    document.documentElement.classList.add("claro");
    document.documentElement.classList.remove("oscuro");
  }
}


document.querySelector("#themeSelect").addEventListener("change", e=>{
  const selectedTheme = e.target.value;
  
  if(!document.startViewTransition){
    updateTheme(selectedTheme);
    return;
  }

  document.startViewTransition(()=>{
    updateTheme(selectedTheme);
  });

  
});