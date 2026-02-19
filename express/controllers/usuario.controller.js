import UsuarioModel from "../models/usuario.model.js";
import argon2 from 'argon2';
import jwt from "jsonwebtoken";


// El controlador se encarga de: 
// recuperar los datos de la petición
// validar los datos
// la lógica de negocio
// responder
class UsuarioController {


  static getUsuarios(req,res){
    if(!req.admin){
      res.status(401).send("No tiene permisos para realizar la operación");
      return;
    }
    const usuarios = UsuarioModel.getUsuarios();
    res.send(usuarios);    
  }




  static getUsuario(req,res){
    
    if(!req.admin){
      res.status(401).send("No tiene permisos para realizar la operación");
      return;
    }

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
    const email = req.body.email;
    
    if(!req.admin && req.id != id ){
      res.status(401).send("No tiene permisos para realizar la operación");
      return;
    }

    const usuario = UsuarioModel.modificarUsuario(id, nombre, email);
    
    if(usuario)
      res.send(usuario);
    else{
      res.status(404).send("No existe un usuario con id " +id);
    }
  }



  static async crearUsuario(req,res){
    const {nombre,email,clave} = req.body;

    try {
      const claveHash = await argon2.hash(clave);
      const id = UsuarioModel.crearUsuario(nombre, email,claveHash);

      if(id){
        res.send({id,nombre,email});
      }
      else{
        res.status(500).send("No se pudo crear el usuario");
      }
      
    } catch (err) {
      res.status(500).send("No se pudo crear el usuario");
    }
  }



  static async loginUsuario(req,res){
    // Recuperamos los datos de la petición
    const {email, clave} = req.body;

    console.log(email, clave)

    try {
      // Intentamos recuperar el usuario que tiene el email de la petición
      const usuario = UsuarioModel.getUsuarioByEmail(email);

      if (await argon2.verify(usuario.clave, clave)) {

        //generar el token
        const admin = email == process.env.CORREO_ADMIN ? true : false;

        const token = jwt.sign(
          { 
            id: usuario.id,
            email: email,
            admin: admin
          },
         process.env.CLAVE_CIFRADO_TOKEN);

        // Si la clave es correcta
        res.cookie("token", token,
        {
          httpOnly: true,
          maxAge: 3600 *1000 * 10,
          path: "/",
          secure: false, // En producción debe ser true
          sameSite: "strict"
        }).send({id: usuario.id, nombre: usuario.nombre, email: usuario.email});

      } else {
        // Si la clave no es correcta
        res.status(401).send("No se pudo realizar el proceso de login.");
      }
    } catch (err) {
      res.status(401).send("No se pudo realizar el proceso de login.");
    }
  }

}

export default UsuarioController;