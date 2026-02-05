import NavBar from "./components/NavBar"
import Rutas from "./Routes/Rutas"

function App() {

  return (
    <>
      <NavBar />
      <main className="p-4 mx-auto max-w-4xl">
        <h1 className="text-5xl my-8 text-primary">Hola caracola</h1>
        <Rutas />
      </main>
    </>
  )
}

export default App
