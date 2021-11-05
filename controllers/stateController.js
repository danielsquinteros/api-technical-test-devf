const { State } = require('../models');

module.exports = {
  create: async (req, res) => {
    const { title, description } = req.body;
    const state = new State({ title, description });
    try {
      await state.save();
      res.status(200).send(state);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const states = await State.find();
      res.status(200).send(states);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  updateWithId: async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    try {
      const state = await State.findByIdAndUpdate(id, { title, description }, {
        new: true,
      });
      res.status(200).send(state);
    } catch (error) {
      res.status(409).send(error);
    }
  },
};
