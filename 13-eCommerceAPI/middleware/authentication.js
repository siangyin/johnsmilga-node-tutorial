const CustomError = require("../errors");
const { isTokenValid } = require("../utils");

const authenticateUser = async (req, res, next) => {
	const token = req.signedCookies.token;
	if (!token) {
		throw new CustomError.UnauthenticatedError("Authentication Invalid");
	}

	try {
		const { name, userID, role } = isTokenValid({ token });
		req.user = { name, userID, role };
		// { name: 'siangyin', userID: '6206712bc2255c8b3f6f946b', role: 'user' }
		next();
	} catch (error) {
		throw new CustomError.UnauthenticatedError("Authentication Invalid");
	}
};

module.exports = {
	authenticateUser,
};
