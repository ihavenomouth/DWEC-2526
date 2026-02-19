import { Router } from 'express';
import BibliotecaController from '../controllers/biblioteca.controller.js';

const bibliotecaRouter = Router();

//Todas las rutas que se gestionan aquí empiezan por /api/biblioteca
bibliotecaRouter
  .get("/", BibliotecaController.getBibliotecas)
  .get("/:id",BibliotecaController.getBiblioteca)
  .delete("/:id", BibliotecaController.eliminarBiblioteca)
  .put("/:id", BibliotecaController.modificarBiblioteca)
  .post("/", BibliotecaController.crearBiblioteca)


export default bibliotecaRouter;
