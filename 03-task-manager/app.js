const express = require("express")
const app = express()
const hello = require("./routes/tasks")
const PORT = process.env.PORT || 3000

// routes

app.use("/", hello) //http://localhost:3000/hello/

app.listen(PORT, () => { console.log(`Server listening on ${PORT}...`) });