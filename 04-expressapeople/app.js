const express = require("express");
const app = express();
const PORT = 3000;
const { people } = require("./data");

//(middleware) static assets method to access public folder
app.use(express.static("./methods-public"));

//(middleware) parse form data
// The express.urlencoded() function is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
// common approach using extended: false
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/people", (req, res) => {
	res.status(200).json({ success: true, data: people });
});

// for javascript method
app.post("/api/people", (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res.status(400).json({ success: false, msg: "pls provide value" });
	}
	res.status(200).json({ success: true, person: name });
});

// a path where the form used to submit data eg:	<form action="/login" method="POST">
// in order for the data from form to be pass we need to use urlencoded middleware
app.post("/login", (req, res) => {
	// console.log(req.body); req.body will return [Object: null prototype] { name: 'yippee' }
	const { name } = req.body;
	res.status(200).json({ success: true, name: name });

	// if name not falsy welcome else provide input
	// if (name) {
	// 	return res.status(200).json(`welcome ${name}`);
	// } else {res.status(401).json(`please input name`);}
});

app.listen(PORT, (req, res) => {
	console.log(`server listening on ${PORT}`);
});
