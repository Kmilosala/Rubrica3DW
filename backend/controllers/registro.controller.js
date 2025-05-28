const fs = require('fs');
const path = require('path');

// Ruta al archivo JSON
const filePath = path.join(__dirname, '../data/visitantes.json');

// Leer visitantes desde el archivo al iniciar
let visitantes = [];

try {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf-8');
    visitantes = JSON.parse(data);
  }
} catch (error) {
  console.error('Error al cargar visitantes:', error);
}

// Listar visitantes
exports.listarVisitantes = (req, res) => {
  res.json(visitantes);
};

// Agregar visitante
exports.agregarVisitante = (req, res) => {
  const { nombre, edad, equipo, piloto } = req.body;

  if (!nombre || !edad || !equipo || !piloto) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }

  const nuevoVisitante = {
    id: visitantes.length + 1,
    nombre,
    edad,
    equipo,
    piloto,
  };

  visitantes.push(nuevoVisitante);

  // Guardar visitantes en el archivo
  fs.writeFile(filePath, JSON.stringify(visitantes, null, 2), (err) => {
    if (err) {
      console.error('Error al guardar el visitante:', err);
      return res.status(500).json({ error: 'Error al guardar visitante' });
    }

    res.status(201).json({
      message: 'Visitante registrado correctamente',
      visitante: nuevoVisitante
    });
  });
};

  