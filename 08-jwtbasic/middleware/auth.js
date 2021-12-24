const jwt = require("jsonwebtoken");
const { CustomAPIError } = require("../errors/custom-err");
// const { UnauthenticatedError } = require("../errors");

const authenticationMiddleware = async (req, res, next) => {
	const authHeader = req.headers.authorization;

	// check if headers Authorization exist or does is start with bearer
	if (!authHeader || !authHeader.startsWith("Bearer")) {
		res.status(401).json({ msg: "no token provided" });
		// throw new CustomAPIError("no token provided", 401);
	}

	const token = authHeader.split(" ")[1];

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const { id, username } = decoded;
		req.user = { id, username };
		next();
	} catch (err) {
		res.status(401).json({ msg: "no authorised to acces this route" });
		// throw new CustomAPIError("no authorised to acces this route", 401);
	}
};

module.exports = authenticationMiddleware;
