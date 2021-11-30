const express = require("express")
const app = express()
const tasks = require("./routes/tasks")
const PORT = process.env.PORT || 3000

const connectDB = require('./db/connect')

// middlesware
app.use(express.json())

// routes
app.get("/", (req,res) => {
 res.send("hello")
})

app.use("/api/v1/tasks", tasks) 

async function start() {
 try {
  await connectDB
 } catch (err) {
  console.log(err)
 }
}

app.listen(PORT, () => { console.log(`Server listening on ${PORT}...`) });