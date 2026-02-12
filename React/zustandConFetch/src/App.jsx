import useEmpresaStore from "./store/useEmpresaStore";
import Lista from "./components/Lista";

function App() {

  const fetchEmpresas = useEmpresaStore((state) => state.fetchEmpresas);
  const empresas = useEmpresaStore( (state)=>state.empresas  );
  const isLoading = useEmpresaStore( (state)=>state.isLoading  );

  const recuperarEmpresas = ()=>{
    fetchEmpresas();
  }


  return (
    <>
      <h1>Probando zustand con un servidor</h1>
      <button onClick={recuperarEmpresas}>Recuperar empresas</button>
      {isLoading && <p>Cargando...</p>}
      
      {empresas.length==0 && <p>No hay datos que mostrar.</p>}
      {empresas.length==0 || <Lista/>}
    </>
  )
}

export default App
