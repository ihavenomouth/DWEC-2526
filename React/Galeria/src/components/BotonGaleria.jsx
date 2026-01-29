import { Button } from "flowbite-react";

function BotonGaleria({caption, listener}){
  // return(<button className="bg-amber-600 px-8 py-2 mx-4 rounded cursor-pointer hover:bg-amber-500" onClick={listener}>{caption}</button>)
  
  
  return(<Button onClick={listener}>{caption}</Button>)
}

export default BotonGaleria;