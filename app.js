require('dotenv').config();

const express = require('express');
const cors = require('cors');
// const router = require('./routes');
const dbConnection = require('./database/config');

const app = express();

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

// Puerto de sevidor local
app.set('host', process.env.HOST || '0.0.0.0');
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), app.get('host'), () => {
  /* eslint no-console: "off" */
  console.log(`server on port ${app.get('port')} ${app.get('host')}`);
});

module.exports = app;
