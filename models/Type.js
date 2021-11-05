const { Schema, model } = require('mongoose');

const TypeSchema = Schema({
  title: {
    type: String,
    required: [true, 'The title is required'],
  },
  description: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = model('Type', TypeSchema);
