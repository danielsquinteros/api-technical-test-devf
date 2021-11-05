const { Schema, model } = require('mongoose');

const CaseSchema = Schema({
  type: {
    type: Schema.Types.ObjectId,
    ref: 'Type',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  state: {
    type: Schema.Types.ObjectId,
    ref: 'State',
  },
  title: {
    type: String,
    required: [true, 'The title is required'],
  },
  description: {
    type: String,
    required: [true, 'The description is required'],
  },
  student: {
    type: String,
    required: [true, 'The student is required'],
  },
  date_started: {
    type: Date,
    min: Date.now,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = model('Case', CaseSchema);
