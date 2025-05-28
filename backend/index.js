const express = require('express');
const cors = require('cors');

const pilotoRoutes = require('./routes/piloto.route');
const registroRoutes = require('./routes/registro.route');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/v1/piloto', pilotoRoutes);
app.use('/v1/registro', registroRoutes);

app.listen(3000, () => {
console.log('Servidor escuchando en el puerto 3000');
});


