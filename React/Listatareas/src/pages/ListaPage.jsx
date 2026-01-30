
import { useState, useRef } from "react"


function ListaPage(){

  const [arrTareas, setArrTareas] = useState([]);
  const [i, setI] = useState(0);
  const refTextoTarea = useRef();


  const agregarTarea = () =>{
    // alert(refTextoTarea.current.value)
    const textoTarea = refTextoTarea.current.value;

    // No puedo modificar el array directamente con un push, en el setX hay que añadir un nuevo
    // valor, array u objeto, dependiendo del caso
    setArrTareas(  [...arrTareas, {id:i, texto:textoTarea}] )
    setI(i+1);
  }


  const eliminarTarea = (e)=>{
    if(e.target.tagName!= "LI")
      return;
    const idEliminar = e.target.dataset.id;
    // alert(idEliminar)
    // Ahora hay que eliminar del array de estado
    // la tarea cuyo id hemos recuperado. Pero no se puede modificar el array directamente
    // Hay que generar un nuevo array sin ese dato
    setArrTareas(  arrTareas.filter(t=>t.id!=idEliminar) );
  }


  return(<>
    <div className="prose">
      <h1>Gestión de lista de tareas</h1>

      <form onSubmit={ (e)=>e.preventDefault() }>
        <label>
          <input ref={refTextoTarea} type="text" name="url" id="url" placeholder="tarea" className="flex flex-1 border sm:text-sm rounded-r-md focus:ring-inset dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-blue-600 p-4" />
        </label>
        <br/>
        <button onClick={agregarTarea} type="button" className="px-8 py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100">Añadir</button>
      </form>

      <div>
        {/* Ejemplo de renderizado condicional: 
          Se utiliza la evaluación perezosa de los operadores && y ||
          if( esMayorEdad && f() ){...}
          Si esMayorEdad es true, se ejecuta la función f() para saber si la expresión es True o false.
          Si esMayorEdad es false, no se ejecuta la función f().
          
          Esto se utiliza en React para renderizar condicionalmente algo:
          {esMayorEdad && <p>Es mayor de edad</p>}

          El párrafo se verá si esMayorEdad es true, en caso contrario no se verá
        */}

        {arrTareas.length!=0 && <p>Número de tareas: {arrTareas.length}</p>}
        {arrTareas.length!=0 && <p>Haz click sobre una tarea para eliminarla.</p>}
        {arrTareas.length==0 && <p>No hay tareas.</p>}
        
        
        <ul onClick={eliminarTarea}>
        {

          arrTareas.map( t=><li data-id={t.id} key={t.id}>
            {t.texto}
          </li>)
        }
        </ul>
      </div>

    </div>
  </>)
}
export default ListaPage