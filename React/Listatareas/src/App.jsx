import { Link } from "wouter";
import Rutas from "./Routes/Rutas";


function App() {

  //El estilo en React tiene que ser un objeto
  // const estilo={
  //   display:"flex",
  //   gap: "1rem",
  //   padding: "0.5rem",
  //   backgroundColor: "#101010"
  // }

  return (
    <>
    {/* <nav style={estilo}> */}
    {/* <nav style={{display:"flex",gap:"1rem",padding:"0.5rem",backgroundColor:"#101010",justifyContent:"space-evenly", border:"1px solid red"}}> */}
    <nav className="flex gap-4 p-2 bg-blue-300 justify-evenly border-sky-600 border-b-4">
      <Link href="/">Inicio</Link>
      <Link href="/about">About</Link>
      <Link href="/lista">Lista</Link>
      <Link href="/users/Javier/id/7">Usuario</Link>
    </nav>

    <main class="max-w-4xl mx-auto p-4">
      <Rutas/>
    </main>  

    </>
  )
}

export default App
