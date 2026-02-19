import { Router } from 'express';
import UsuarioController from '../controllers/usuario.controller.js';

const usuarioRouter = Router();

//Todas las rutas que se gestionan aquí empiezan por /api/usuario
usuarioRouter
  .get("/", UsuarioController.getUsuarios)
  .get("/:id",UsuarioController.getUsuario)
  // .delete("/:id", UsuarioController.eliminarUsuario)
  // .put("/:id", UsuarioController.modificarUsuario)
  .post("/", UsuarioController.crearUsuario)


export default usuarioRouter;
