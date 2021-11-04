require('dotenv').config();

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Aplicación en el puerto http://localhost:${port}`);
});

module.exports = app;
