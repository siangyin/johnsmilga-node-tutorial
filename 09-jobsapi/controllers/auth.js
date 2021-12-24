const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
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
