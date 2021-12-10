const Product = require("../models/products");

const getAllProductsStatic = async (req, res) => {
	// sorting result eg sort by name a-z, if -name is z-a if more than one sorting prop  space "name price" === name n price 0-9/a-z

	//select, only showing the fields listed eg: {id:123,name:"kk",price:99}

	//limit: to restricted returning result no.
	//skip: to skip first few # result
	const products = await Product.find({})
		.sort("name price")
		.select("name price")
		.limit(10)
		.skip(2);
	res.status(200).json({ products, count: products.length });
};

const getAllProducts = async (req, res) => {
	// for query path is ?key=value
	// eg http://localhost:5000/api/products?featured=false&rating=5
	// req.query return object so can directly pass in .find(obj)

	const { featured, company, name, sort, fields } = req.query;
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

	//______ sort ______//
	if (sort) {
		const sortList = sort.split(",").join(" ");
		result = result.sort(sortList);
	} else {
		result = result.sort("createdAt");
	}

	//______ field ______//

	if (fields) {
		const selectList = fields.split(",").join(" ");
		result = result.select(selectList);
	}

	//______ pagination ______//
	const page = Number(req.query.page) || 1;
	const limit = Number(req.query.limit) || 10;
	const skip = (page - 1) * limit;

	result = result.skip(skip).limit(limit);

	const products = await result;
	res.status(200).json({ products, count: products.length });
};

module.exports = { getAllProductsStatic, getAllProducts };
