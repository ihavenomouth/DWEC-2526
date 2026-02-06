import Li from "./Li";
import useUserPreferencesStore from "../store/useUserPreferencesStore";


function ListUserPreferences(){


  const númeroPreferido = useUserPreferencesStore((state) => state.númeroPreferido)
  const colorPreferido = useUserPreferencesStore((state) => state.colorPreferido)
  const alias = useUserPreferencesStore((state) => state.alias)

  return(<>
    <h2>Listado de las preferencias</h2>
    <ul>
      <Li etiqueta="Nº de la suete" texto={númeroPreferido}/>
      <Li etiqueta="Color preferido" texto={colorPreferido}/>
      <Li etiqueta="Alias" texto={alias}/>
    </ul>
  </>)
}

export default ListUserPreferences;