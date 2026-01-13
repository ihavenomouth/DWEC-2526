


function fireConfetti(event) {
  const x = event.clientX / document.body.clientWidth;
	const y = event.clientY / document.body.clientHeight;
	confetti({origin: {x, y}});
}




//TRuco de precarga de biblioteca
document.querySelector("#btnTemperatura").addEventListener("mouseenter",  e=>{
  import('https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js');
});





const divResultado = document.querySelector("#divResultado");


document.querySelector("#btnTemperatura").addEventListener("click", async e=>{
  
  const txtTemperatura = document.querySelector("#temperatura");
  const temperatura = txtTemperatura.valueAsNumber;
  
  // Comprobación mínima
  if( isNaN(temperatura) ){
    const pError = document.createElement("p");
    pError.textContent = "Debe indicar un número.";
    divResultado.replaceChildren(pError);
    return;
  }
  
  //Si llego aquí el usuario no es idiota y ha puesto un número
  try{
    
    await import('https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js');

    const modT = await import("./moduloTemperatura.js");
    const p = document.createElement("p");
    p.innerText = `Temperatura: ${temperatura}.\n
    ºC --> ${modT.celsiusAFahrenheit(temperatura)} ºF\n
    ºC --> ${modT.celsiusAKelvin(temperatura)} K\n
    ºF --> ${modT.fahrenheitACelsius(temperatura)} ºC\n
    `;
    divResultado.replaceChildren(p);
    fireConfetti(e); // ¡Fire Confetti! 🎉
  }
  catch(error){
    const pError = document.createElement("p");
    pError.textContent = error;
    divResultado.replaceChildren(pError);
  }
});