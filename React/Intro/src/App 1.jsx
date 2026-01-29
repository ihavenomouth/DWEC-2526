

function App() {

  const autor = "Jaiver Mancera";
  const edad = 14;

  function esMayorDeEdad(edad){
    if(edad>=18)
      return "mayor"
    else
      return "menor"
  }

  return (<>
    <h1>Hola caracola</h1>
    <p>Creado por {autor}</p>
    <p>45 * 12 = {45*12}</p>
    <p>Tienes {edad} años, así que eres {edad>=18?"mayor":"menor"} de edad</p>
    <p>Tienes {edad} años, así que eres {esMayorDeEdad(edad)} de edad</p>
    </>);
}

export default App
