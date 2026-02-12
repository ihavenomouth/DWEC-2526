import { Router } from 'express';
const bibliotecaRouter = Router();

//Todas las rutas que se gestionan aquí empiezan por /api/biblioteca
bibliotecaRouter
.get("/", (req,res)=>{
  res.send("Info de todas las bibliotecas")
})
.get("/:id", (req,res)=>{
  const id = req.params.id;
  res.send("Info de la biblioteca "+ id)
})
.delete("/:id", (req,res)=>{
  const id = req.params.id;
  res.send("Eliminar la biblioteca "+id)
})
.put("/:id", (req,res)=>{
  const id = req.params.id;
  res.send("Modificar la biblioteca "+ id)
})
.post("/", (req,res)=>{
  // console.log( req.body );
  const {nombre,descripción} = req.body;
  console.log(`Creamos la biblioteca ${nombre} con ${descripción}`);
  
  res.send("Crear una nueva biblioteca");
})


export default bibliotecaRouter;
