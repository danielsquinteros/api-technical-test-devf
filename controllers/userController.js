const bcryptjs = require('bcryptjs');

const { User } = require('../models');

module.exports = {
  create: async (req, res) => {
    const {
      name, email, password, role,
    } = req.body;
    const user = new User({
      name, email, password, role,
    });

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    try {
      // Guardar en BD
      await user.save();
      res.status(200).send(user);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).send(users);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  getId: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      res.status(200).send(user);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  updateWithId: async (req, res) => {
    const { id } = req.params;
    // El email no lo puede actualizar por eso lo desestructuro
    const { password, email, ...restoDatos } = req.body;
    // Encripto la contraseña
    if (password) {
      // Encriptar la contraseña
      const salt = bcryptjs.genSaltSync();
      // Le agrego la contraseña actualizada y encriptada al resto de datos
      restoDatos.password = bcryptjs.hashSync(password, salt);
    }
    try {
      const user = await User.findByIdAndUpdate(id, restoDatos, { new: true });
      res.status(200).send(user);
    } catch (error) {
      res.status(409).send(error);
    }
  },
};
