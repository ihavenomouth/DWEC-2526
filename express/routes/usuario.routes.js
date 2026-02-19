import { Router } from 'express';
import UsuarioController from '../controllers/usuario.controller.js';
import verify from '../middleware/auth.js';

const usuarioRouter = Router();

//Todas las rutas que se gestionan aquí empiezan por /api/usuario
usuarioRouter
  .get("/", verify, UsuarioController.getUsuarios)
  .get("/:id", verify, UsuarioController.getUsuario)
  // .delete("/:id", UsuarioController.eliminarUsuario)
  // .put("/:id", UsuarioController.modificarUsuario)
  .post("/", UsuarioController.crearUsuario)
  .post("/login", UsuarioController.loginUsuario)


export default usuarioRouter;
