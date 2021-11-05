require('dotenv').config();

const express = require('express');
const cors = require('cors');
// const router = require('./routes');
const dbConnection = require('./database/config');

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Directorio Público
app.use(express.static('public'));
app.use('/api/v1', require('./routes/state'));

// Conexión Base de Datos
dbConnection();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  /* eslint no-console: "off" */
  console.log(`Aplicación en el puerto http://localhost:${port}`);
});

module.exports = app;
