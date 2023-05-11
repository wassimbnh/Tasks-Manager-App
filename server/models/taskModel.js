const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  level: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  date: {
    type: Date,
    required: false,
  },
}, { timestamps: true });

const Task = model('Task', taskSchema);

module.exports = Task;
