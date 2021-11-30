const express = require("express")
const app = express()
const router = require("./routes/tasks")
const PORT = process.env.PORT || 3000

// middlesware
app.use(express.json())

// routes
app.use("/", router) //http://localhost:3000/hello/

app.listen(PORT, () => { console.log(`Server listening on ${PORT}...`) });