const Product = require("../models/products");

const getAllProductsStatic = async (req, res) => {
	// sorting result eg sort by name a-z, if -name is z-a if more than one sorting prop  space "name price" === name n price 0-9/a-z

	//select, only showing the fields listed eg: {id:123,name:"kk",price:99}

	//limit: to restricted returning result no.
	//skip: to skip first few # result
	const products = await Product.find({ price: { $gt: 30 } })
		.sort("price")
		.select("name price");

	res.status(200).json({ products, count: products.length });
};

const getAllProducts = async (req, res) => {
	// for query path is ?key=value
	// eg http://localhost:5000/api/products?featured=false&rating=5
	// req.query return object so can directly pass in .find(obj)

	const { featured, company, name, sort, fields, numbericFilters } = req.query;
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

	//______ numbericFilters ______//
	// products?numbericFilters=price>40,rating>=4
	// return : price>40,rating>=4
	if (numbericFilters) {
		//converting the query to mongoose readable operator
		const operatorMap = {
			">": "$gt",
			">=": "$gte",
			"=": "$eq",
			"<": "$lt",
			"<=": "$lte",
		};
		// converting the query to match with moogoose operator (if match: swap the value)
		// db.inventory.find( { qty: { $gte: 20 } } )
		const regEx = /\b(<|>|>=|=|<|<=)\b/g;
		let filters = numbericFilters.replace(
			regEx,
			(match) => `-${operatorMap[match]}-`
		);
		// eg: filters: price-$gt-40,rating-$gte-4

		// only allowing filters of Number value
		const options = ["price", "rating"];
		filters = filters.split(",").forEach((item) => {
			const [field, operator, value] = item.split("-");
			if (options.includes(field)) {
				// eg: queryObj : { price: { '$gt': 40 }, rating: { '$gte': 4 } }
				queryObj[field] = { [operator]: Number(value) };
			}
		});
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
	//returning only selected fileds in the list

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
