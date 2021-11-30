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
app.use(notFound)

// routes
app.use("/api/v1/tasks", tasks) 

async function start() {
 try {
  await connectDB(process.env.MONGO_URL)
  app.listen(PORT, () => { console.log(`Server listening on ${PORT}...`) });
 } catch (err) {
  console.log(err)
 }
}

start();