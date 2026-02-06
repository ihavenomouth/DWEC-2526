import Li from "./Li";
import useUserPreferencesStore from "../store/useUserPreferencesStore";


function SetUserPreferences(){

  const númeroPreferido = useUserPreferencesStore((state) => state.númeroPreferido)
  const colorPreferido = useUserPreferencesStore((state) => state.colorPreferido)
  const alias = useUserPreferencesStore((state) => state.alias)
  const setColorPreferido = useUserPreferencesStore((state) => state.setColorPreferido)
  const setAlias = useUserPreferencesStore((state) => state.setAlias)
  const resetearNúmeroPreferido = useUserPreferencesStore((state) => state.resetearNúmeroPreferido)
  const incrementarNúmeroPreferido = useUserPreferencesStore((state) => state.incrementarNúmeroPreferido)


  const cambiarColor = e=>{
    const nuevoColor = e.target.value;
    setColorPreferido(nuevoColor);
  }


  return(<>
    <h2>Modificar las preferencias del usuario</h2>
    <form>
      <label>Color preferido: <br/>
        <input type="color" onInput={cambiarColor}/>
      </label>
      <label>Alias: <br/>
        <input type="text" onInput={ e=>{setAlias(e.target.value)}  }/>
      </label>
      <label>Nº de la suerte: <br/>
        <button type="button" onClick={resetearNúmeroPreferido}>Resetear</button> &nbsp; 
        <button type="button" onClick={incrementarNúmeroPreferido}>Incrementar</button>
      </label>
    </form>

    <ul className="notice">
      <Li etiqueta="Nº de la suete" texto={númeroPreferido}/>
      <Li etiqueta="Color preferido" texto={colorPreferido}/>
      <Li etiqueta="Alias" texto={alias}/>
    </ul>
  </>)
}

export default SetUserPreferences;