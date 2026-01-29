import InputContador from "./components/InputContador.jsx";

function App() {

  return (<>
    <h1>Trabajando con los hooks básicos</h1>
    <p>Un input que indica cuántos caracteres quedan</p>

    <p>Introduzca su nombre:</p>
    <InputContador max={20}/>
    <p>Introduzca su apellido:</p>
    <InputContador max={10}/>
  </>)
}

export default App