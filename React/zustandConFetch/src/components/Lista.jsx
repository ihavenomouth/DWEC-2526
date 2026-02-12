import useEmpresaStore from "../store/useEmpresaStore";

function Lista(){

  const empresas = useEmpresaStore( (state)=>state.empresas  );

  return(<>
    <ul>
      {
        empresas.map(e=>(
          <li key={e.id}>{e.id} - {e.nombre} - {e.teléfono}</li>
        ))
      }
    </ul>  
  </>)
}

export default Lista;