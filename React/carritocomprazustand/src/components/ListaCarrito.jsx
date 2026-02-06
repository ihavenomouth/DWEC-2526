import useCartStore from "../store/useCartStore";

function ListaCarrito(){
  const arrIdProductos = useCartStore( (state)=>state.arrIdProductos  );
  return(<>
    <ul style={{position:"absolute",top:"3rem", right:"1rem", padding:"1rem", backgroundColor:"navy"}}>
      {
        arrIdProductos.map(id=>{return(
          <li>Producto: {id}</li>
        )})
      }

    </ul>
  </>)
}

export default ListaCarrito;