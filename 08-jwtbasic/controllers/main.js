const login = async (req, res) => {
	res.send("fake login/reg");
};

const dashboard = async (req, res) => {
	const luckyNum = Math.floor(Math.random() * 100);
	res.status(200).send({ msg: `hello john`, secret: `here is ur auth data ${luckyNum}` });
};

module.exports = { login, dashboard };
