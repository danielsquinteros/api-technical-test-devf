const jwt = require('jsonwebtoken');
const { User } = require('../models');

const validateJWT = async (req, res, next) => {
  const token = req.header('x-token');
  if (!token) {
    return res.status(401).json({
      msg: 'No hay token en la petición',
    });
  }

  try {
    const { id } = jwt.verify(token, process.env.SECRETPRIVATEKEY);
    const user = await User.findById(id);
    if (!user) {
      return res.status(401).send({
        message: 'Token is not valid - User not found',
      });
    }
    if (!user.status) {
      return res.status(401).send({
        message: 'Token is not valid - User not found',
      });
    }
    req.user = user;

    return next();
  } catch (error) {
    return res.status(401).json({
      msg: 'Token is not valid',
    });
  }
};

module.exports = {
  validateJWT,
};
