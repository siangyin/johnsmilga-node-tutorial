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

app.get("/api/product/:id", (req, res) => {
	// const id = req.params.id; //{ id: '1' }
	// or
	const { id } = req.params;

	const singleProduct = products.find((prod) => prod.id === Number(id));

	if (!singleProduct) {
		return res.status(404).send("item no exist");
	}
	return res.json(products[id]);
});

app.listen(PORT, (req, res) => {
	console.log(`running server on ${PORT}`);
});
