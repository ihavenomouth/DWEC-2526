import { useRef } from "react";


function Contador() {

  const divRef = useRef();

  let i=0;

  function incrementar(){
    i++;
    divRef.current.textContent = `Cuenta: ${i}`;
  }


  return (<div className="notice">
    <h2>Contador</h2>
    <button onClick={incrementar}>Acción</button>
    <div ref={divRef}>Cuenta: {i}</div>
  </div>)
}

export default Contador