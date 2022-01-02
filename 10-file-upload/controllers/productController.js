const Product = require("../models/Product");

const { StatusCode } = require("http-status-codes");

const createProduct = async (req, res) => {
	res.send("create Product");
};

const getAllProducts = async (req, res) => {
	res.send("get AllProducts");
};


module.exports = { createProduct,getAllProducts };