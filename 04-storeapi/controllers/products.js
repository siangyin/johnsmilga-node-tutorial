const Product = require("../models/products");

const getAllProductsStatic = async (req, res) => {
	const products = await Product.find({});
	res.status(200).json({ products, count: products.length });
};

const getAllProducts = async (req, res) => {
	// for query path is ?key=value
	// eg http://localhost:5000/api/products?featured=false&rating=5
	// req.query return object so can directly pass in .find(obj)
	const products = await Product.find(req.query);
	res.status(200).json({ products, count: products.length });
};

module.exports = { getAllProductsStatic, getAllProducts };
