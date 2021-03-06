const express = require("express");
const app = express();
const PORT = 5000;
const { products } = require("./data");

// req => middleware (do something some functions) => res
// 1. use. vs route
// 2. options : our own function OR  express (eg express.static) OR third party (eg morgan)

// middleware is function we can pass in the route, less repetition.
const logger = require("./logger");
const authorize = require("./authorize");
// app will crashed if const {authorize} = require("./authorize");
// if middleware to be used for any & all route, as such use app.use
app.use([logger, authorize]);
// app.use("/api",logger) //will apply to any path after "/api"

app.get("/", (req, res) => {
	res.send(`<h1>HOME</h1><a href="/api/products">API>Products</a>`);
});

// if middleware only intend to use for one route we use like below
// app.get("/api/products", logger, (req, res) => {
// 	res.json(products);
// });

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

app.get("/api/v1/query", (req, res) => {
	const customQuery = req.query;
	// console.log(req.query);
	// e.g req url "/query?name=kk"
	// req.query: { "name": "kk" }
	// e.g req url "/query?name=kk&search=boboooo&limit=[kk,ll,looo]"
	//  req.query : { name: 'kk', search: 'boboooo', limit: '[kk,ll,looo]' }
	res.json(customQuery);
});

app.listen(PORT, (req, res) => {
	console.log(`running server on ${PORT}`);
});
