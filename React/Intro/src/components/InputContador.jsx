import { useState } from "react";

function InputContador({max}){

  const [quedan, setQuedan] = useState(max);

  function restarCaracteres(e){
    setQuedan(max - e.target.value.length)
  }

  return(<div className="notice">
    <input type="text" onInput={restarCaracteres} maxLength={max}/>
    <p>Quedan: {quedan} de {max}</p>
  </div>)
}

export default InputContador;
