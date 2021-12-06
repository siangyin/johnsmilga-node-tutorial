const express = require("express");
const app = express();
const PORT = 3000;

// to get the navbar-app access
const path = require("path");

// static public folder
app.use(express.static("./public"));

// standard methods

app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});
//path resolve to get the navbar-app html

app.get("/about", (req, res) => {
	res.status(200).send("about");
});

//app.post
//app.put
//app.delete

//app.all if req is other than all above
app.all("*", (req, res) => {
	res.status(404).send("<h1>page not found</h1>");
});

//app.use

app.listen(PORT, () => {
	console.log(`server running on ${PORT}`);
});
