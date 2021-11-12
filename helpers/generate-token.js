const jwt = require('jsonwebtoken');

const generateJWT = (id = '', role = '') => new Promise((resolve, reject) => {
  const payload = { id, role };
  jwt.sign(payload, process.env.SECRETPRIVATEKEY, {
    expiresIn: '4h',
  }, (err, token) => {
    if (err) {
      /* eslint no-console: "off" */
      console.log(err);
      reject(new Error('Token could not be generated'));
    } else {
      resolve(token);
    }
  });
});

module.exports = {
  generateJWT,
};
