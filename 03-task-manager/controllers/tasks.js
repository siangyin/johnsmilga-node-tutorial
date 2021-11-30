function getAllTasks(req, res) {
 res.send("get all items here")
}

function getTask(req, res) {
 res.send("get single task")
}
 
function createTask(req, res) {
 res.json(req.body)
}
 
function updateTask(req, res) {
 res.send("update task")
}
 
function deleteTask(req, res) {
 res.send("delete task")
}
module.exports = {getAllTasks,getTask,createTask,updateTask,deleteTask}
