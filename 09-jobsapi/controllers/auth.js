const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
	// UserSchema.pre replace all the following, bcs pw will be encrpt in UserSchema.pre instead
	// const { name, email, password } = req.body;
	// const salt = await bcrypt.genSalt(10);
	// const hashedPassword = await bcrypt.hash(password, salt);
	// const tempUser = { name, email, password: hashedPassword };

	// if (!email || !password) {
	// 	throw new BadRequestError("Please provide email and password");
	// }

	const user = await User.create({ ...req.body });
	res.status(StatusCodes.CREATED).json({
		msg: `register user`,
		data: user,
	});
};

const login = async (req, res) => {
	res.status(200).json({ msg: `login user` });
};

module.exports = {
	register,
	login,
};
