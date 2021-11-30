function getAllTasks(req, res) {
 res.send("get all items here")
}

function getTask(req, res) {
 res.json(req.params)
}
 
function createTask(req, res) {
 res.json(req.body)
}
 
function updateTask(req, res) {
 res.send("update task")
}
 
function deleteTask(req, res) {
 res.json(req.params)
}
module.exports = {getAllTasks,getTask,createTask,updateTask,deleteTask}
