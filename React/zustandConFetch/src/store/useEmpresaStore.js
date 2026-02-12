import { create } from 'zustand'



const TIEMPO_DE_VALIDEZ=import.meta.env.VITE_TIEMPO_MAXIMO_VALIDEZ;


const useEmpresaStore = create((set,get) => ({
  
  empresas: [],
  isLoading: false,
  t_recuperación: 0,



  fetchEmpresas: async ()=>{
    if(Date.now() - get().t_recuperación < TIEMPO_DE_VALIDEZ)
      return;

    set({isLoading: true});

    try{
      const response = await fetch("/api/empresa");
      if(!response.ok)
        throw new Error("No se pudieron recuperar las empresas");

      set({empresas: await response.json(), isLoading:false, t_recuperación: Date.now() });
    }
    catch(error){
      console.error(error);
      set({isLoading: false});
    }
  }

}))


export default useEmpresaStore;


// bears: 0,
// increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
// removeAllBears: () => set({ bears: 0 }),
// updateBears: (newBears) => set({ bears: newBears }),
