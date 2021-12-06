const express = require("express")
const app = express()
const tasks = require("./routes/tasks")
const PORT = process.env.PORT || 3000

const connectDB = require('./db/connect')
require("dotenv").config()
const notFound = require("./middleware/not-found")

// middlesware
app.use(express.static("./public"))
app.use(express.json())


// routes
app.use("/api/v1/tasks", tasks)

// not found have to be after /api/v1/tasks
app.use(notFound)

async function start() {
 try {
  await connectDB(process.env.MONGO_URL)
  app.listen(PORT, () => { console.log(`Server listening on ${PORT}...`) });
 } catch (err) {
  console.log(err)
 }
}

start();