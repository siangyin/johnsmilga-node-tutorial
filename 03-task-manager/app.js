const express = require("express")

const app= express()

const PORT = process.env.PORT || 3000

// routes

app.get("/", (req,res) => {
 res.send("hello")
})

app.listen(PORT, () => { console.log(`Server listening on ${PORT}...`) });