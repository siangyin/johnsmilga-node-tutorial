const Task =require("../models/task")

function getAllTasks(req, res) {
 res.send("get all items here")
}

function getTask(req, res) {
 res.json(req.params)
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
