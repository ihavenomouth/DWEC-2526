import { create } from 'zustand'



const useUserPreferencesStore = create((set) => ({
    númeroPreferido: 7,
    colorPreferido: "Azul",
    alias: "JJJJ",
    
    setColorPreferido: (nuevoColor)=>{
      set( {colorPreferido: nuevoColor} )
    },

    setAlias: (nuevoAlias)=>{
      set( {alias: nuevoAlias} )
    },

    resetearNúmeroPreferido: ()=>{
      set( {númeroPreferido: 0}  )
    },

    incrementarNúmeroPreferido: ()=>{
      set( (state)=>({númeroPreferido: state.númeroPreferido + 1 }) )
    }

}))

export default useUserPreferencesStore;







// const useBear = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }))