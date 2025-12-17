"use strict";


// function peticionXML(){
//   fetch("https://mocktarget.apigee.net/xml")
//   .then(response =>{
//     if(!response.ok)
//       throw new Error("Se ha producido un error"); 
//     return response.text();
//   })
//   .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
//   .then(xml => {
//     // console.log(xml);
//     const city = xml.firstElementChild.children[0]; // El primer hijo de <root>
//     const firstName = xml.firstElementChild.children[1]; // El segundo hijo de <root>
//     const lastName = xml.firstElementChild.children[2]; // El tercer hijo de <root>
//     const state = xml.firstElementChild.children[3]; // El cuarto hijo de <root>

//     // const [city, firstName, lastName, state] = xml.children[0].children;
//     // console.log(firstName.textContent, lastName.textContent);
//     divResultado.innerHTML = `<div style="border:1px solid gray; padding: 5px";>
//       <p>${firstName.textContent} ${lastName.textContent}</p>
//       <p>City: ${city.textContent} (${state.textContent})</p>
//     </div>`;
//   })
//   .catch(error=>{
//     divResultado.innerHTML = error;
//   })
// }



const peticionXML = async ()=>{
  try{
    const response = await fetch("https://mocktarget.apigee.net/xml");
    
    if(!response.ok)
      throw new Error("Se ha producido un error"); 
    
    const str = await response.text();
    const xml = await new window.DOMParser().parseFromString(str, "text/xml")
    
    const city = xml.firstElementChild.children[0]; // El primer hijo de <root>
    const firstName = xml.firstElementChild.children[1]; // El segundo hijo de <root>
    const lastName = xml.firstElementChild.children[2]; // El tercer hijo de <root>
    const state = xml.firstElementChild.children[3]; // El cuarto hijo de <root>
    
    divResultado.innerHTML = `<div style="border:1px solid gray; padding: 5px";>
    <p>${firstName.textContent} ${lastName.textContent}</p>
    <p>City: ${city.textContent} (${state.textContent})</p>
    </div>`;
  }
  catch(error){
    divResultado.innerHTML = error;
  }
}










function peticionHTML(){
  fetch("https://mocktarget.apigee.net/iloveapis")
  .then( response=>{
    if(!response.ok) throw new Error("Se produjo un error");
    return response.text();
  })
  .then( html=>{
    divResultado.innerHTML = html;
  })
  .catch( error=>{
    divResultado.innerHTML = `<p style="color:deeppink">${error}</p>`;
  })
}

// async function peticionHTML(){
//   try{
//     const response = await fetch("https://mocktarget.apigee.net/iloveapis");
    
//     if(!response.ok)
//       throw new Error("Se produjo un error");
    
//     const html = await response.text();
//     divResultado.innerHTML = html;
//   }
//   catch(error){
//     divResultado.innerHTML = `<p style="color:deeppink">${error}</p>`;
//   }
// }







function peticionJSON(){
  fetch("https://mocktarget.apigee.net/json")
  .then( res =>{
    if(!res.ok) throw new Error("Error: " + res.statusText)
    return res.json();
  })
  .then(
    oJson=>{
      console.log(oJson);
      divResultado.innerHTML = `<div style="border:1px solid gray; padding: 5px";>
        <p>${oJson.firstName} ${oJson.lastName}</p>
        <p>City: ${oJson.city} (${oJson.state})</p>
      </div>`;
    }
  )
  .catch(
    error=>{
      divResultado.innerHTML = error;
    }
  )
}


async function peticionJSONasync(){
  try{
    const res = await fetch("https://mocktarget.apigee.net/json")
    
    if(!res.ok) 
      throw new Error("Error: " + res.statusText)
    
    const oJson = await res.json();
    
    console.log(oJson);
    divResultado.innerHTML = `<div>
      <p>${oJson.firstName} ${oJson.lastName}</p>
      <p>City: ${oJson.city} (${oJson.state})</p>
      </div>`;
  }
  catch(error){
    divResultado.innerHTML = error;
  }
}


/////////////
// MAIN
/////////////



const divResultado = document.querySelector("#divResultado");

document.querySelector("#btnXML").addEventListener("click", peticionXML);

document.querySelector("#btnHTML").addEventListener("click", peticionHTML);


document.querySelector("#btnJSON").addEventListener("click", peticionJSON);


