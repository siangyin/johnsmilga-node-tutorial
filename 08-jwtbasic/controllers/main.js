// check username, password in post(login) request
// if exist create new JWT
// send back to fron-end
// setup authentication so only the request with JWT can access the dasboard

const jwt = require("jsonwebtoken");
// const { CustomAPIError } = require("../errors/custom-err");

const login = async (req, res) => {
	const { username, password } = req.body;
	// console.log(username, password);

	// mongoose validation
	// Joi
	// check in the controller

	if (!username || !password) {
		return res.status(400).json({ msg: "Please provide email and password" });
		// throw new CustomAPIError("Please provide email and password", 400);
	}

	//just for demo, normally provided by DB!!!!
	const id = new Date().getDate();

	// try to keep payload small, better experience for user
	// just for demo, in production use long, complex and unguessable string value!!!!!!!!!
	const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	});

	res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
	const authHeader = req.headers.authorization;

	// check if headers Authorization exist or does is start with bearer
	if (!authHeader || !authHeader.startsWith("Bearer")) {
		res.status(401).json({ msg: "no token provided" });
		// throw new CustomAPIError("no token provided", 401);
	}

	const token = authHeader.split(" ")[1];

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		const luckyNum = Math.floor(Math.random() * 100);
		res
			.status(200)
			.send({
				msg: `hello ${decoded.username}`,
				secret: `here is ur auth data ${token}`,
			});
	} catch (err) {
		res.status(401).json({ msg: "no authorised to acces this route" });
		// throw new CustomAPIError("no authorised to acces this route", 401);
	}
};

module.exports = { login, dashboard };
