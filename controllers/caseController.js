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
      const cases = await Case.find({ status: true }).populate(['type', 'user', 'state']);
      res.status(200).send(cases);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  getId: async (req, res) => {
    const { id } = req.params;
    try {
      const idCase = await Case.findById(id).populate(['type', 'user', 'state']);
      res.status(200).send(idCase);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  getUserId: async (req, res) => {
    const { userid } = req.params;
    try {
      const userCases = await Case.find({ userid }).populate(['type', 'user', 'state']);
      res.status(200).send(userCases);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  updateWithId: async (req, res) => {
    const { id } = req.params;
    const {
      user, type, state, title, description, student, date_started,
    } = req.body;
    try {
      const updateCase = await Case.findByIdAndUpdate(id, {
        user, type, state, title, description, student, date_started,
      }, {
        new: true,
      });
      res.status(200).send(updateCase);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  updateOnlyUser: async (req, res) => {
    const { id } = req.params;
    const { user } = req.body;
    try {
      const updateUserCase = await Case.findByIdAndUpdate(id, {
        user,
      }, {
        new: true,
      });
      res.status(200).send(updateUserCase);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deleteCase = await Case.findByIdAndUpdate(id, {
        status: false,
      }, {
        new: true,
      });
      res.status(200).send(deleteCase);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  active: async (req, res) => {
    const { id } = req.params;
    try {
      const activeCase = await Case.findByIdAndUpdate(id, {
        status: true,
      }, {
        new: true,
      });
      res.status(200).send(activeCase);
    } catch (error) {
      res.status(409).send(error);
    }
  },
};
