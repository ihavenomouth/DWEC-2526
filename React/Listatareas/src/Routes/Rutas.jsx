import { Route, Switch } from "wouter";
import AboutPage from "../pages/AboutPage";
import ListaPage from "../pages/ListaPage";

function Rutas(){

  return(
    <Switch>

      <Route path="/">Inicio</Route>

      <Route path="/about">
        <AboutPage/>
      </Route>

      <Route path="/lista" component={ListaPage} />
      
      <Route path="/users/:name/id/:id">
        {(params) => <>
          <p>Hello, {params.name}!</p>
          <p>Tu id es el {params.id}</p>
        </>}
      </Route>

      <Route path="/users/*">Gestión de usuarios</Route>

      <Route>
        <h2>¡Error!</h2>
        <p><strong>404:</strong> No such page!</p>
      </Route>

    </Switch>
  )
}
export default Rutas;