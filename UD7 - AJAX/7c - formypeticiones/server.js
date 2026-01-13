const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

const alumnos = [
  { id: 1, nombre: "Juan Pérez", edad: 20, curso: "25-26", grupo: "1 DAW", email: "juan@example.com" },
  { id: 2, nombre: "Ana García", edad: 21, curso: "26-27", grupo: "2 DAW", email: "ana@example.com" },
  { id: 3, nombre: "Luis López", edad: 22, curso: "27-28", grupo: "1 DAW", email: "luis@example.com" }
];

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

app.get('/altaAlumno', (req,res)=>{
  res.send(`    <article>
      <header>
        <h2 style="margin-bottom: 0;">Registro de Alumno</h2>
      </header>
      <form id="frmRegistroAlumno">
        <div class="grid">
          <div>
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" placeholder="Nombre" >
          </div>
          <div style="flex: 0 0 100px;">
            <label for="edad">Edad</label>
            <input type="number" id="edad" name="edad" placeholder="Edad" >
          </div>
        </div>

        <fieldset>
          <legend>Curso</legend>
          <div class="grid">
            <label for="c2526">
              <input type="radio" id="c2526" name="curso" value="25-26" checked>
              25-26
            </label>
            <label for="c2627">
              <input type="radio" id="c2627" name="curso" value="26-27">
              26-27
            </label>
            <label for="c2728">
              <input type="radio" id="c2728" name="curso" value="27-28">
              27-28
            </label>
          </div>
          <div class="grid">
            <label for="c2829">
              <input type="radio" id="c2829" name="curso" value="28-29">
              28-29
            </label>
            <label for="c2930">
              <input type="radio" id="c2930" name="curso" value="29-30">
              29-30
            </label>
            <div></div> <!-- Spacer for grid alignment -->
          </div>
        </fieldset>

        <label for="grupo">Grupo</label>
        <select id="grupo" name="grupo" >
          <option value="" disabled selected>Selecciona un grupo</option>
          <option value="1 DAW">1 DAW</option>
          <option value="2 DAW">2 DAW</option>
        </select>

        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" placeholder="correo@ejemplo.com" >

        <button type="submit" class="contrast">Dar de alta</button>
      </form>
    </article>
`);
});

// API Gritona
app.get('/api/gritona', (req, res) => {
  const texto = req.query.texto || "";
  res.send(texto.toUpperCase());
});

// GET /api/alumno
app.get('/api/alumno', (req, res) => {
  res.json(alumnos);
});

// GET /api/alumno/:id
app.get('/api/alumno/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const alumno = alumnos.find(a => a.id === id);
  if (alumno) {
    res.json(alumno);
  } else {
    res.status(404).json({ error: "Alumno no encontrado" });
  }
});

// POST /api/alumno
app.post('/api/alumno', (req, res) => {
  const { nombre, edad, curso, grupo, email } = req.body;

  if (Math.random() < 0.5) {
    const newId = alumnos.length > 0 ? Math.max(...alumnos.map(a => a.id)) + 1 : 1;
    const newAlumno = { 
      id: newId, 
      nombre, 
      edad: parseInt(edad), 
      curso, 
      grupo, 
      email 
    };
    
    alumnos.push(newAlumno);
    res.status(201).send(`Usuario ${nombre} del grupo ${grupo} (curso: ${curso}) dado de alta correctamente con id ${newId}`);
  } else {
    res.status(500).send(`No se pudo realizar el alta del usuario ${nombre} del grupo ${grupo} (curso: ${curso})`);
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
