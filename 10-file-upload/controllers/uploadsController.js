const Product = require("../models/Product");

const { StatusCode } = require("http-status-codes");

const uploadProductImage = async (req, res) => {
	res.send("upload Product Image");
};

const getAllProducts = async (req, res) => {
	res.send("get AllProducts");
};

module.exports = { uploadProductImage };
