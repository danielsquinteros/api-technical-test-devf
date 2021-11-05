const { Type } = require('../models');

module.exports = {
  create: async (req, res) => {
    const { title, description } = req.body;
    const type = new Type({ title, description });
    try {
      await type.save();
      res.status(200).send(type);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const types = await Type.find();
      res.status(200).send(types);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  updateWithId: async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    try {
      const type = await Type.findByIdAndUpdate(id, { title, description }, { new: true });
      res.status(200).send(type);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const type = await Type.findByIdAndUpdate(id, { status: false }, { new: true });
      res.status(200).send(type);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  activate: async (req, res) => {
    const { id } = req.params;
    try {
      const type = await Type.findByIdAndUpdate(id, { status: true }, { new: true });
      res.status(200).send(type);
    } catch (error) {
      res.status(409).send(error);
    }
  },
};
