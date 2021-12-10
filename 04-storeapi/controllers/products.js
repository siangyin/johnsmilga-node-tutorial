const Product = require("../models/products");

const getAllProductsStatic = async (req, res) => {
	// sorting result eg sort by name a-z, if -name is z-a if more than one sorting prop  space "name price" === name n price 0-9/a-z
	const products = await Product.find({}).sort("name price");
	res.status(200).json({ products, count: products.length });
};

const getAllProducts = async (req, res) => {
	// for query path is ?key=value
	// eg http://localhost:5000/api/products?featured=false&rating=5
	// req.query return object so can directly pass in .find(obj)

	const { featured, company, name, sort } = req.query;
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

	let result = Product.find(queryObj);

	if (sort) {
		const sortList = sort.split(",").join(" ");
		result = result.sort(sortList);
	} else {
		result = result.sort("createdAt");
	}

	const products = await result;
	res.status(200).json({ products, count: products.length });
};

module.exports = { getAllProductsStatic, getAllProducts };
