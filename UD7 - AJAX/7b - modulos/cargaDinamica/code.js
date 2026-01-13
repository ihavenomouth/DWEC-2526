


document.querySelector("#btnContar").addEventListener("click", async e=>{

  try{
    const {default:contar} = await import("./contar.js");
    
    const txtNombre = document.querySelector("#txtNombre");
    const texto = txtNombre.value;
    
    alert( contar(texto) );
  }
  catch(error){
    alert(error);
  }
});
