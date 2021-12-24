// check username, password in post(login) request
// if exist create new JWT
// send back to fron-end
// setup authentication so only the request with JWT can access the dasboard
const { CustomAPIError } = require("../errors/custom-err");

const login = async (req, res) => {
	const { username, password } = req.body;
	console.log(username, password);

	// mongoose validation
	// Joi
	// check in the controller

	if (!username || !password) {
		throw new CustomAPIError("Please provide email and password", 400);
	}

	res.send("fake login/reg");
};

const dashboard = async (req, res) => {
	const luckyNum = Math.floor(Math.random() * 100);
	res
		.status(200)
		.send({ msg: `hello john`, secret: `here is ur auth data ${luckyNum}` });
};

module.exports = { login, dashboard };
