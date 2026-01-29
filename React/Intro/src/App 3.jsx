

function App() {
  let i = 0;

  function sumarYMostrar(){
    i++;
    alert(i);
  }

  return (<>
    <h1>Trabajando con los hooks básicos</h1>
    <button onClick={sumarYMostrar}>Acción</button>
    <p>Valor de i: {i}</p>
  </>)
}

export default App