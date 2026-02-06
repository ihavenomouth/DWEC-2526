import { create } from 'zustand'

const useCartStore = create((set) => ({

  numProductos: 0,
  arrIdProductos: [],

  addProductoAlCarrito: (idProducto)=>{
    set( (state)=>({
      arrIdProductos: [...state.arrIdProductos, idProducto], 
      numProductos: state.numProductos +1   
    })  )
  },

  deleteProductoAlCarrito: (idProducto)=>{
    set( (state)=>({
      arrIdProductos: state.arrIdProductos.filter(id=>id!=idProducto), 
      numProductos: state.numProductos -1   
    })  )
  }

}))


export default useCartStore;


// const useBear = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }))