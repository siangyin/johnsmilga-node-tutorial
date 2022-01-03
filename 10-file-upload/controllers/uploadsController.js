const path = require("path");

const { StatusCode } = require("http-status-codes");

const uploadProductImage = async (req, res) => {
	let productImage = req.files.image;
	const imgPath = path.join(
		__dirname,
		"../public/uploads/" + `${productImage.name}`
	);

	await productImage.mv(imgPath);
	res
		.status(StatusCode.OK)
		.json({ image: { src: `/uploads/${productImage.name}` } });
};

module.exports = { uploadProductImage };
