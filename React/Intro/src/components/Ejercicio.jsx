

export default function Ejercicio(props){
  return(<>
    <h2>Ejercicio {props.numero}</h2>
    <p>{props.texto}</p>
    {props.children}
  </>)
}

