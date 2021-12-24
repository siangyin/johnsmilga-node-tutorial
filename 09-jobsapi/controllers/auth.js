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
	const token = user.createJWT();

	res.status(StatusCodes.CREATED).json({
		msg: `register user ${user.name}`,
		data: user,
		token: token,
	});
};

const login = async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		throw new BadRequestError("Please provide email and password");
	}

	const user = await User.findOne({ email });
	// comparing password
	if (!user) {
		throw new UnauthenticatedError("Invalid credentials");
	}

	// if user exist
	const token = user.createJWT();
	res.status(StatusCodes.OK).json({
		msg: `User ${user.name} logged-in`,
		data: user,
		token: token,
	});
};

module.exports = {
	register,
	login,
};
