import Cabecera from "./components/Cabecera.jsx"
import Ejercicio from "./components/Ejercicio.jsx"


function App() {
  return (<>
  <Cabecera nombre="Javier" intro="Bienvenido al maravilloso mundo de React"/>

  <Ejercicio numero="1" texto="En un lugar de la mancha">
    <form action="">
      <input type="text" />
      <button type="button">Aceptar</button>
    </form>
  </Ejercicio>
  
  <Ejercicio numero="2" texto="Haz un script que reciba 3 números y devuelva el mayor."></Ejercicio>
  
  <Ejercicio numero="3" texto="Pero qué pasa"></Ejercicio>
  
  </>)
}

export default App