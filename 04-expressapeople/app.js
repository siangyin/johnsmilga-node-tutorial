const express = require("express");
const app = express();
const PORT = 3000;

//require the people & auth route
const people = require("./routes/people");
const auth = require("./routes/auth");

//(middleware) static assets method to access public folder
app.use(express.static("./methods-public"));

//(middleware) parse form data
// The express.urlencoded() function is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
// common approach using extended: false
app.use(express.urlencoded({ extended: false }));

// json so that app.post can pass back data from form. otherwise FE will not be able to fetch the data.
app.use(express.json());

//using route
app.use("/api/people", people);
app.use("/login", auth);

//==============================//

app.listen(PORT, (req, res) => {
	console.log(`server listening on ${PORT}`);
});
