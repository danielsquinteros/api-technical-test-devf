const mongoose = require('mongoose');

const { MONGODB_CONNECT } = process.env;

const dbConnection = async () => {
  try {
    await mongoose.connect(MONGODB_CONNECT);
    /* eslint no-console: "off" */
    console.log('Base de datos ONLINE');
  } catch (error) {
    console.log(error);
    throw new Error('Error a la hora de iniciar la base de datos');
  }
};

module.exports = dbConnection;
