const { Case } = require('../models');

/* eslint camelcase: "off" */
module.exports = {
  create: async (req, res) => {
    const {
      user, type, state, title, description, student, date_started,
    } = req.body;
    const newCase = new Case({
      user, type, state, title, description, student, date_started,
    });
    try {
      await newCase.save();
      res.status(200).send(newCase);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const cases = await Case.find().populate(['type', 'user', 'state']);
      res.status(200).send(cases);
    } catch (error) {
      res.status(409).send(error);
    }
  },
};
