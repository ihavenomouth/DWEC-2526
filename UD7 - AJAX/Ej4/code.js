"use strict";


function peticionXML(){
  fetch("https://mocktarget.apigee.net/xml ")
  .then( res =>{
    if(!res.ok) throw new Error("Error: " + res.statusText)
    return res.text();
  })
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(xml => {
    let [city,firstName,lastName,state] = xml.querySelector("root").children;
    divResultado.innerHTML = `
      ${firstName.textContent} ${lastName.textContent} 
      from ${city.textContent} (${state.textContent})
    `;

    console.log(xml)
  })
  .catch(
    error=>{
      divResultado.innerHTML = error;
    }
  )
}


function peticionHTML(){
  fetch("https://mocktarget.apigee.net/iloveapis")
  .then( res =>{
    if(!res.ok) throw new Error("Error: " + res.statusText)
    return res.text();
  })
  .then(
    html=>divResultado.innerHTML = html
  )
  .catch(
    error=>{
      divResultado.innerHTML = error;
    }
  )
}


/////////////
// MAIN
/////////////



const divResultado = document.querySelector("#divResultado");

document.querySelector("#btnXML").addEventListener("click", peticionXML);
document.querySelector("#btnHTML").addEventListener("click", peticionHTML);