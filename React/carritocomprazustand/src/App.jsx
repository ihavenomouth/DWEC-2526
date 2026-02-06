import Cart from "./components/Cart";

import useCartStore from "./store/useCartStore";

function App() {

  const productos = [
    {id:1, producto:"Dron", precio: 340},
    {id:2, producto:"Galletas", precio: 4},
    {id:3, producto:"Zapatos", precio: 40},
    {id:4, producto:"IA", precio: 1000},
    {id:5, producto:"Ratón", precio: 14},
    {id:6, producto:"Almohada", precio: 25},
    {id:7, producto:"Ron", precio: 14},
  ];

  const addProductoAlCarrito = useCartStore( (state)=>state.addProductoAlCarrito  );


  const añadirProductoAlCarrito = (id) =>{
    addProductoAlCarrito(id);
  }

  return (
    <>
      <h1>Tienda</h1>
      <Cart />
      <div style={{display: "flex", flexWrap:"wrap", gap:"1rem"}}>
        {
          productos.map( p=> {return(
            <div key={p.id} className="notice" onClick={e=>añadirProductoAlCarrito(p.id)}>
              <p>{p.producto}</p>
              <p>Precio: {p.precio} €</p>
            </div>
          )})
        }
      </div>

      <h2>Contenido del carrito:</h2>
      
    </>
  )
}

export default App
