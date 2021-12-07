const express = require("express");
const app = express();
const PORT = 3000;
const { people } = require("./data");

//static assets

app.use(express.static("./methods-public"));

app.get("/api/people", (req, res) => {
	res.status(200).json({ success: true, data: people });
});

app.listen(PORT, (req, res) => {
	console.log(`server listening on ${PORT}`);
});
