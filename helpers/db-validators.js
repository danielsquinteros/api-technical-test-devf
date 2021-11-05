const { User, Type, State } = require('../models');

const emailExist = async (email = '') => {
  const existEmail = await User.findOne({ email });
  if (existEmail) {
    throw new Error(`The email ${email} already exists`);
  }
};
const existUserId = async (id = '') => {
  const existUser = await User.findById(id);
  if (!existUser) {
    throw new Error(`The id ${id} not is registrer in User`);
  }
};
const existTypeId = async (id = '') => {
  const existType = await Type.findById(id);
  if (!existType) {
    throw new Error(`The id ${id} not is registrer in Type`);
  }
};
const existStateId = async (id = '') => {
  const existState = await State.findById(id);
  if (!existState) {
    throw new Error(`The id ${id} not is registrer in State`);
  }
};

module.exports = {
  emailExist,
  existUserId,
  existTypeId,
  existStateId,
};
