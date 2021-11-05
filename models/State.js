const { Schema, model } = require('mongoose');

const StateSchema = Schema({
  title: {
    type: String,
    required: [true, 'The title is required'],
  },
  description: {
    type: String,
  },
});

module.exports = model('State', StateSchema);
