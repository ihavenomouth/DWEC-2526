import arrImagenes from "@/assets/imagenes";
import { useState } from "react";
import BotonGaleria from "./BotonGaleria";
import {CardGaleria} from "./CardGaleria";



function GaleriaUnica(){

  const [indice, setIndice] = useState(0);


  const incrementarIndice = () =>{
    if(indice==arrImagenes.length -1)
      setIndice(0);
    else
      setIndice(indice+1)
  }

  const decrementarIndice = () =>{
    if(indice!=0)
      setIndice(indice-1)
    else
      setIndice(arrImagenes.length-1)
  }

  return(<article className="flex flex-col justify-center items-center">
    <CardGaleria src={arrImagenes[indice].url} autor={arrImagenes[indice].autor}/>
    
    <div className="my-4 flex flex-wrap gap-2">
      <BotonGaleria caption="Anterior" listener={decrementarIndice}/>
      <BotonGaleria caption="Siguiente" listener={incrementarIndice}/>
    </div>
  </article>)
}

export default GaleriaUnica;