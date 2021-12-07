const express = require("express");
const app = express();

// req => middleware (do something some functions) => res
// middleware is function we can pass in the route, less repetition.
const logger = (req, res, next) => {
	const url = req.url;
	console.log(`logger is here for ${url}`);
	next();
};
const PORT = 3000;
const { products } = require("./data");

app.get("/", (req, res) => {
	res.send(`<h1>HOME</h1><a href="/api/products">API>Products</a>`);
});

app.get("/api/products", logger, (req, res) => {
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

app.get("/api/v1/query", (req, res) => {
	const customQuery = req.query;
	console.log(req.query);
	// e.g req url "/query?name=kk"
	// req.query: { "name": "kk" }
	// e.g req url "/query?name=kk&search=boboooo&limit=[kk,ll,looo]"
	//  req.query : { name: 'kk', search: 'boboooo', limit: '[kk,ll,looo]' }
	res.json(customQuery);
});

app.listen(PORT, (req, res) => {
	console.log(`running server on ${PORT}`);
});
