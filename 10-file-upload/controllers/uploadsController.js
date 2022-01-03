const path = require("path");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const uploadProductImage = async (req, res) => {
	// check if file exists
	if (!req.files) {
		throw new CustomError.BadRequestError("no file uploaded");
	}

	let productImage = req.files.image;
	// check format
	if (!productImage.mimetype.startsWith("image")) {
	throw new CustomError.BadRequestError("please upload image");
}
	// check size
	const maxSize = 1024 * 1024;
	if (productImage.size > maxSize) {
		throw new CustomError.BadRequestError("Please upload image smaller 1MB");
	}
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
