import UsuarioModel from "../models/usuario.model.js";
import argon2 from 'argon2';


// El controlador se encarga de: 
// recuperar los datos de la petición
// validar los datos
// la lógica de negocio
// responder
class UsuarioController {


  static getUsuarios(req,res){
    const usuarios = UsuarioModel.getUsuarios();
    res.send(usuarios);    
  }




  static getUsuario(req,res){
    const id = req.params.id;
    const usuario = UsuarioModel.getUsuario(id);

    if(usuario)
      res.send(usuario);
    else{
      res.status(404).send("No existe un usuario con id " +id);
    }
  }



  static eliminarUsuario(req,res){
    const id = req.params.id;
    const usuario = UsuarioModel.eliminarUsuario(id);
    if(usuario)
      res.send(usuario);
    else{
      res.status(404).send("No existe un usuario con id " +id);
    }

  }

  

  static modificarUsuario(req,res){
    const id = req.params.id;
    const nombre = req.body.nombre;
    const descripción = req.body.descripción;
    
    const usuario = UsuarioModel.modificarUsuario(id, nombre, descripción);
    
    if(usuario)
      res.send(usuario);
    else{
      res.status(404).send("No existe un usuario con id " +id);
    }
  }



  static async crearUsuario(req,res){
    const {nombre,email,clave} = req.body;

    try {
      const hash = await argon2.hash("claveclavelosa138_ñç+o=");
      console.log(hash);
      return;
    } catch (err) {
      
    }
    
    
    const usuario = UsuarioModel.crearUsuario(nombre, email,clave);

    if(usuario)
      res.send(usuario);
    else{
      res.status(404).send("No se pudo crear el usuario");
    }
  
  }


}

export default UsuarioController;