const express = require("express");
const app = express();
const PORT = 3000;
const { people } = require("./data");

app.listen(PORT, (req, res) => {
	console.log(`server listening on ${PORT}`);
});
