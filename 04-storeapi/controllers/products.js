const Product = require("../models/products");

const getAllProductsStatic = async (req, res) => {
	const search = "a";
	const products = await Product.find({
		name: { $regex: search, $options: "i" },
	});
	res.status(200).json({ products, count: products.length });
};

const getAllProducts = async (req, res) => {
	// for query path is ?key=value
	// eg http://localhost:5000/api/products?featured=false&rating=5
	// req.query return object so can directly pass in .find(obj)

	const { featured, company, name } = req.query;
	const queryObj = {};
	if (featured) {
		queryObj.featured = featured === "true" ? true : false;
	}

	if (company) {
		queryObj.company = company;
	}

	if (name) {
		queryObj.name = { $regex: name, $options: "i" };
	}

	const products = await Product.find(queryObj);
	res.status(200).json({ products, count: products.length });
};

module.exports = { getAllProductsStatic, getAllProducts };
