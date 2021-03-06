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
   //if cannot find the task with req.params id, but id characters the same as rest will return 404 error but if characters of id is not consistent will res 500 error
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
 
async function updateTask(req, res) {
 try {
   const { id: taskID } =req.params
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
    runValidators: true,
   })
   //if cannot find the task with req.params id, but id characters the same as rest will return 404 error but if characters of id is not consistent will res 500 error
   if (!task) {
    return res.status(404).json({msg:`No task with ID ${taskID} found`})
   } 
  return res.status(200).json(task)
 } catch (err) {res.status(500).json({msg:err})}
}
 
async function deleteTask(req, res) {
try {
   const { id: taskID } =req.params
   const task = await Task.findOneAndDelete({ _id: taskID })
   //if cannot find the task with req.params id, but id characters the same as rest will return 404 error but if characters of id is not consistent will res 500 error
   if (!task) {
    return res.status(404).json({msg:`No task with ID ${taskID} found`})
   } 
  return res.status(200).json({ task })
 } catch (err) {res.status(500).json({msg:err})}
}

module.exports = {getAllTasks,getTask,createTask,updateTask,deleteTask}
