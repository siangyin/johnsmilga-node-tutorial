const mongoose = require("mongoose")

// only property pass in schema will be pass to MongoDB, whatever come extra will be ignored.
const TaskSchema = new mongoose.Schema({
 name: {
  type: String,
  required: [true, "must provide name"],
  trim: true,
  maxlength:[20, "cannot more than 20 characters"]
 }, completed: {
  type: Boolean,
  default: false
 }
})

module.exports = mongoose.model('Task', TaskSchema)