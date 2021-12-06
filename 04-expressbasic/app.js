const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
	res.send("hello");
});

// standard methods
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use

app.listen(PORT, () => {
	console.log("server running");
});
