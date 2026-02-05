import { useState, useEffect } from "react";
import Datatable from "../components/Datatable.jsx"


function DataTablePage(){

  const [arrUsuarios, setUsuarios] = useState([]);


  useEffect( ()=>{
    async function fetchUsuarios(){
      try{
        const response = await fetch("/usuarios.json");
        if(!response.ok)
          throw new Error("No se pudieron recuperar los usuarios");
        
        setUsuarios( await response.json() );
        console.log(arrUsuarios.length)
      }
      catch(error){
        console.error(error);
      }
    }
  
    fetchUsuarios()

  },[])


  return(<>
    <h2 className="text-3xl my-8 text-primary">DataTable</h2>
    <Datatable datos={arrUsuarios}/>
  </>)
}

export default DataTablePage;