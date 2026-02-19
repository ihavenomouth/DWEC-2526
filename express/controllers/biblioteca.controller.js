import BibliotecaModel from "../models/biblioteca.model.js";

// El controlador se encarga de: 
// recuperar los datos de la petición
// validar los datos
// la lógica de negocio
// responder
class BibliotecaController {


  static getBibliotecas(req,res){
    const bibliotecas = BibliotecaModel.getBibliotecas();
    res.send(bibliotecas);    
  }




  static getBiblioteca(req,res){
    const id = req.params.id;
    const biblioteca = BibliotecaModel.getBiblioteca(id);

    if(biblioteca)
      res.send(biblioteca);
    else{
      res.status(404).send("No existe una biblioteca con id " +id);
    }
  }



  static eliminarBiblioteca(req,res){
    const id = req.params.id;
    const biblioteca = BibliotecaModel.eliminarBiblioteca(id);
    if(biblioteca)
      res.send(biblioteca);
    else{
      res.status(404).send("No existe una biblioteca con id " +id);
    }

  }

  

  static modificarBiblioteca(req,res){
    const id = req.params.id;
    const nombre = req.body.nombre;
    const descripción = req.body.descripción;
    
    const biblioteca = BibliotecaModel.modificarBiblioteca(id, nombre, descripción);
    
    if(biblioteca)
      res.send(biblioteca);
    else{
      res.status(404).send("No existe una biblioteca con id " +id);
    }
  }



  static crearBiblioteca(req,res){
    const {nombre,descripción} = req.body;

    if(nombre=="" || descripción == ""){
      throw new Error("Los datos no están completos")
    }
    
    // console.log(`Creamos la biblioteca ${nombre} con ${descripción}`);
    
    const biblioteca = BibliotecaModel.crearBiblioteca(nombre, descripción);

    if(biblioteca)
      res.send(biblioteca);
    else{
      res.status(404).send("No se pudo crear la biblioteca");
    }
  
  }


}

export default BibliotecaController;