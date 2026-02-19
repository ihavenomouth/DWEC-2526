let arrBibliotecas = [
  {id: 1, nombre: "TailwindCSS", descripción: "Blablabla"},
  {id: 2, nombre: "Wouter", descripción: "Bl3bleble"},
  {id: 3, nombre: "DaisyUI", descripción: "Bliblibla"},
];



class BibliotecaModel {

    static getBibliotecas(){
      return arrBibliotecas;
    }

    static getBiblioteca(id){
      return arrBibliotecas.find(b=>b.id == id);
    }

    static eliminarBiblioteca(id){
      const bibliotecaEliminar = arrBibliotecas.find(b=>b.id == id);
      
      arrBibliotecas = arrBibliotecas.filter(b=>b.id != id);

      return bibliotecaEliminar;
    }


    static modificarBiblioteca(id, nombre, descripción){
      const bibliotecaModificar = arrBibliotecas.find(b=>b.id == id);
      if( bibliotecaModificar){
        bibliotecaModificar.nombre = nombre;
        bibliotecaModificar.descripción = descripción;
      }

      return bibliotecaModificar;
    }


    static crearBiblioteca(nombre, descripción){
      const id = arrBibliotecas.at(-1).id + 1;
      arrBibliotecas.push({id, nombre, descripción});

      return {id, nombre, descripción};
    }



}

export default BibliotecaModel;