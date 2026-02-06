import useCartStore from "../store/useCartStore";
import ListaCarrito from "./ListaCarrito";

import { useState } from "react";


function Cart(){

  const [listaVisible,setListaVisible] = useState(false);
  const numProductos = useCartStore( (store)=>store.numProductos  );

  return(<>
    <div style={{position: "absolute", top:"1rem", right: "1rem", width: "fit-content",borderRadius:"100%", backgroundColor:"red", padding: "1rem"}}
    onClick={e=>setListaVisible(!listaVisible )}>
      {numProductos}
    </div>

    { listaVisible && <ListaCarrito />}
  </>)
}

export default Cart;