const {
  User, Type, State, Case,
} = require('../models');

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
const existCaseId = async (id = '') => {
  const existCase = await Case.findById(id);
  if (!existCase) {
    throw new Error(`The id ${id} not is registrer in Case`);
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

const maxCaseUserId = async (user = '') => {
  const caseUserId = await Case.find({ user });
  let countCase = 0;
  caseUserId.forEach((element) => {
    if (element.status === true) {
      countCase += 1;
    }
  });
  if (countCase >= 5) {
    throw new Error(`The user ${user} has more than ${countCase} active cases`);
  }
};

module.exports = {
  emailExist,
  existUserId,
  existCaseId,
  existTypeId,
  existStateId,
  maxCaseUserId,
};
