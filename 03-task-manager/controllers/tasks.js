const Task =require("../models/task")

async function getAllTasks(req, res) {
 try {
  const tasks = await Task.find({})
  res.status(200).json({ tasks })
 } catch (err) {res.status(500).json({msg:err})}
}

async function getTask(req, res) {
  try {
   const { id: taskID } =req.params
   const task = await Task.findOne({ _id: taskID })
   //if cannot find the task with req.params id
   if (!task) {
    return res.status(404).json({msg:`No task with ID ${taskID} found`})
   } 
  return res.status(200).json({ task })
 } catch (err) {res.status(500).json({msg:err})}
}
 
async function createTask(req, res) {
 try {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
 } catch (err) {res.status(500).json({msg:err})}
}
 
function updateTask(req, res) {
 res.send("update task")
}
 
function deleteTask(req, res) {
 res.json(req.params)
}
module.exports = {getAllTasks,getTask,createTask,updateTask,deleteTask}
