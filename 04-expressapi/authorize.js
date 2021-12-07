const authorize = (req, res, next) => {
	const { user } = req.query;

	if (user === "john") {
		console.log(`authorised OK : ${user}`);
	} else {
		res.status(401).send("Unauthorised");
	}
	next();
};

module.exports = authorize;
