const mongoose = require("mongoose")

// only property pass in schema will be pass to MongoDB, whatever come extra will be ignored.
const TaskSchema = new mongoose.Schema({
 name:String, completed:Boolean
})

module.exports = mongoose.model('Task', TaskSchema)