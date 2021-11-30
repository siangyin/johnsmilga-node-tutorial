const express = require("express")
const router = express.Router()
const { getAllTasks } = require("../controllers/tasks")

router.route("/hello").get(getAllTasks)

module.exports = router
