import express from 'express';

const app = express();
const port = 3000

// Indicamos a express que queremos que gestione la información que provenga
// del cliente en formato json
app.use( express.json() );

// Indicamos a express que queremos que gestione la información que provenga
// del cliente en formato form-data. Por ejemplo, desde un 
// <form method="post" action="/api/biblioteca">...</form>
app.use( express.urlencoded({extended:true}) );


// Servimos los ficheros estáticos (html, css, js, imágenes...).
// Equivalente a las vistas
// app.use(express.static('public'));
import {join} from 'node:path';
app.use(express.static(join(import.meta.dirname, 'public')))


// Definimos las rutas de las bibliotecas
import bibliotecaRouter from './routes/biblioteca.routes.js';
app.use("/api/biblioteca", bibliotecaRouter);

// Definimos las rutas de los usuarios
import usuarioRouter from './routes/usuario.routes.js';
app.use("/api/usuario", usuarioRouter);


// Gestionamos el acceso a endpoints que no existen
app.use((req, res, next) => {
  res.status(404).send("Recurso no encontrado");
});


// Gestión de errores genérico
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Algo malo pasó.' + err.message)
});



app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
})









// function p(){
//   return "<h2>Saludos!</h2>";
// }

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

// app.get('/saludo', (req, res) => {
//   res.send(`<h1>Hola caracola</h1>
//     <p>Aprendiendo express</p>`)
// });

// app.get('/saludoh2', (req, res) => {
//   res.send( p() );
// });

// app.get('/json', (req, res) => {
//   res.send( {id:1, nombre: "Javier", apellido: "Mancera"} );
// });


// app.delete('/json', (req, res) => {
//   res.send( {id:1, nombre: "Javier", apellido: "Mancera"} );
// });



// import {join} from 'node:path';

// app.get('/fichero', (req, res)=>{
//   res.sendFile( join(   import.meta.dirname, "public","datos.html") );
// })