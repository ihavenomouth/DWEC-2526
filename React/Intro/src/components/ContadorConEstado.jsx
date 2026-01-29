import { useState } from "react";


function ContadorConEstado() {

  const [cuenta, setCuenta] = useState(0);

  function incrementar(){
    setCuenta( cuenta + 1 )
  }


  return (<div className="notice">
    <h2>Contador</h2>
    <button onClick={incrementar}>Acción</button>
    <div>Cuenta: {cuenta}</div>
  </div>)
}

export default ContadorConEstado