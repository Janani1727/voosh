const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  created: { type: Date, default: Date.now },
});

const TaskModel = mongoose.model("task", taskSchema);

module.exports = { TaskModel };
