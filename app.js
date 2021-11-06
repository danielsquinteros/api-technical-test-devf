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
app.use('/api/v1', require('./routes/auth'));
app.use('/api/v1', require('./routes/state'));
app.use('/api/v1', require('./routes/type'));
app.use('/api/v1', require('./routes/user'));
app.use('/api/v1', require('./routes/case'));

// Conexión Base de Datos
dbConnection();

app.listen(port, () => {
  /* eslint no-console: "off" */
  console.log(`Aplicación en el puerto http://localhost:${port}`);
});

module.exports = app;
