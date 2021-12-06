const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
	res.json([{ name: "pp" }, { name: "kk" }]);
});

app.listen(PORT, (req, res) => {
	console.log(`running server on ${PORT}`);
});
