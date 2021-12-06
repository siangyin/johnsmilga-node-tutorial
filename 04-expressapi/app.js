const express = require("express");
const app = express();
const PORT = 3000;
const { products } = require("./data");

app.get("/", (req, res) => {
	res.send(`<h1>HOME</h1><a href="/api/products">API>Products</a>`);
});

app.get("/api/products", (req, res) => {
	res.json(products);
});

app.get("/api/products/:id", (req, res) => {
	const id = req.params.id;
	console.log(id);
	res.json(products[id]);
});

app.listen(PORT, (req, res) => {
	console.log(`running server on ${PORT}`);
});
