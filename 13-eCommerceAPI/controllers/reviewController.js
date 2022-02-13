const Review = require("../models/Review");
const Product = require("../models/Product");

const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { checkPermissions } = require("../utils");

const createReview = async (req, res) => {
	const { product: productId } = req.body;

	const isValidProduct = await Product.findOne({ _id: productId });

	if (!isValidProduct) {
		throw new CustomError.NotFoundError(`No product with id : ${productId}`);
	}

	const alreadySubmitted = await Review.findOne({
		product: productId,
		user: req.user.userID,
	});

	if (alreadySubmitted) {
		throw new CustomError.BadRequestError(
			"Already submitted review for this product"
		);
	}

	req.body.user = req.user.userID;

	const review = await Review.create(req.body);
	res.status(StatusCodes.CREATED).json({ review });
};

const getAllReviews = async (req, res) => {
	const reviews = await Review.find({}).populate({
		path: "product",
		select: "name company price",
	});

	res.status(StatusCodes.OK).json({ reviews, count: reviews.length });
};

const getSingleReview = async (req, res) => {
	res.send("getSingleReview");
};
const updateReview = async (req, res) => {
	res.send("updateReview");
};

const deleteReview = async (req, res) => {
	res.send("deleteReview");
};

module.exports = {
	createReview,
	getAllReviews,
	getSingleReview,
	updateReview,
	deleteReview,
};
