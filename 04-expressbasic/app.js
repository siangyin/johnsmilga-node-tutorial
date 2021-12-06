const express = require("express");
const app = express();
const PORT = 3000;

// to get the navbar-app access
const path = require("path");

// setup static public folder and middleware (app.use is for middleware)
// static asset =it's a file that server doesnt have to change it, instead of creating multiple individual path for each resources.
app.use(express.static("./public"));

// standard methods

//path resolve to get the navbar-app html
// app.get("/", (req, res) => {
// 	res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// adding html to static assets (public dir)
// SSR
// });

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
