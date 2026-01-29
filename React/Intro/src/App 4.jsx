import Contador from "./components/Contador.jsx";
import ContadorConEstado from "./components/ContadorConEstado.jsx";

function App() {

  return (<>
    <h1>Trabajando con los hooks básicos</h1>
    <ContadorConEstado />
    <ContadorConEstado />
    <Contador />
  </>)
}

export default App