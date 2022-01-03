const path = require("path");

const { StatusCodes } = require("http-status-codes");

const uploadProductImage = async (req, res) => {
	let productImage = req.files.image;
	const imgPath = path.join(
		__dirname,
		"../public/uploads/" + `${productImage.name}`
	);

	await productImage.mv(imgPath);
	res
		.status(StatusCodes.OK)
		.json({ image: { src: `/uploads/${productImage.name}` } });
};

module.exports = { uploadProductImage };
