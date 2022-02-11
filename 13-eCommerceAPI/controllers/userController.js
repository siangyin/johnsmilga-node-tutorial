const User = require("../models/User");
const { StatusCodes, CREATED } = require("http-status-codes");
const CustomError = require("../errors");

const getAllUsers = async (req, res) => {
	res.send("get all users");
};

const getSingleUser = async (req, res) => {
	res.send("get Single user");
};

const showCurrentUser = async (req, res) => {
	res.send("show Current user");
};

const updateUser = async (req, res) => {
	res.send("update user");
};

const updateUserPassword = async (req, res) => {
	res.send("update user Password");
};

module.exports = {
	getAllUsers,
	getSingleUser,
	showCurrentUser,
	updateUser,
	updateUserPassword,
};
