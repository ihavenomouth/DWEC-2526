import DataTablePage from "../pages/DataTablePage"
import MainPage from "../pages/MainPage"

import { Route, Switch } from "wouter";

function Rutas(){
  return(<>
    <Switch>
      <Route path="/datatable" component={DataTablePage} />
      <Route path="/" component={MainPage} />

      {/* Default route in a switch */}
      <Route>404: No such page!</Route>
    </Switch>
  </>)
}

export default Rutas;